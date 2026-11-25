import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M11_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "What Is a Spreadsheet and Why Analysts Use Excel",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "What Is a Spreadsheet and Why Analysts Use Excel",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "What Is a Spreadsheet and Why Analysts Use Excel",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "What Is a Spreadsheet and Why Analysts Use Excel is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "What Is a Spreadsheet and Why Analysts Use Excel is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "What Is a Spreadsheet and Why Analysts Use Excel",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "What Is a Spreadsheet and Why Analysts Use Excel",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "What Is a Spreadsheet and Why Analysts Use Excel"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M11_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Excel Interface: Ribbon, Workbook, Worksheet and Cells is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Excel Interface: Ribbon, Workbook, Worksheet and Cells is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Excel Interface: Ribbon, Workbook, Worksheet and Cells"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M11_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "Rows, Columns, Ranges and Cell Addresses",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Rows, Columns, Ranges and Cell Addresses",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Rows, Columns, Ranges and Cell Addresses",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Rows, Columns, Ranges and Cell Addresses is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Rows, Columns, Ranges and Cell Addresses is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Rows, Columns, Ranges and Cell Addresses",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Rows, Columns, Ranges and Cell Addresses",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Rows, Columns, Ranges and Cell Addresses"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M11_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "Entering and Editing Data",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Entering and Editing Data",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Entering and Editing Data",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Entering and Editing Data is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Entering and Editing Data is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Entering and Editing Data",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Entering and Editing Data",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Entering and Editing Data"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M11_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "Saving, Naming and Organizing Workbooks",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Saving, Naming and Organizing Workbooks",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Saving, Naming and Organizing Workbooks",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Saving, Naming and Organizing Workbooks is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Saving, Naming and Organizing Workbooks is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Saving, Naming and Organizing Workbooks",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Saving, Naming and Organizing Workbooks",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Saving, Naming and Organizing Workbooks"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M11_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M11",
  "moduleTitle": "Getting Started with Excel",
  "topic": "Working with Excel Tables",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Working with Excel Tables",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Working with Excel Tables",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Working with Excel Tables is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Working with Excel Tables is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Working with Excel Tables",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M11 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Working with Excel Tables",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Working with Excel Tables"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Text, Number, Date and Percentage Formats",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Text, Number, Date and Percentage Formats",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Text, Number, Date and Percentage Formats",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Text, Number, Date and Percentage Formats is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Text, Number, Date and Percentage Formats is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Open a blank workbook and identify the worksheet tabs."
                ],
                [
                  "2",
                  "Create headers: ID, Product, Category, Qty, Price, Total."
                ],
                [
                  "3",
                  "Enter four sample records with one item per row."
                ],
                [
                  "4",
                  "Select a cell and inspect its address in the Name Box."
                ],
                [
                  "5",
                  "Save the workbook and check the values for consistency."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Text, Number, Date and Percentage Formats",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Text, Number, Date and Percentage Formats",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Text, Number, Date and Percentage Formats"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Sorting Data Correctly",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Sorting Data Correctly",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Sorting Data Correctly",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Sorting Data Correctly is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Sorting Data Correctly is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Sorting Data Correctly",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Sorting Data Correctly",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Sorting Data Correctly"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Filtering Rows and Using Search",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Filtering Rows and Using Search",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Filtering Rows and Using Search",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Filtering Rows and Using Search is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Filtering Rows and Using Search is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Filtering Rows and Using Search",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Filtering Rows and Using Search",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Filtering Rows and Using Search"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Find and Replace",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Find and Replace",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Find and Replace",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Find and Replace is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Find and Replace is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Find and Replace",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Find and Replace",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Find and Replace"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Remove Duplicates",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Remove Duplicates",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Remove Duplicates",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Remove Duplicates is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Remove Duplicates is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Remove Duplicates",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Remove Duplicates",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Remove Duplicates"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Text to Columns",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Text to Columns",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Text to Columns",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Text to Columns is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Text to Columns is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Text to Columns",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Text to Columns",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Text to Columns"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T07_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Flash Fill",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 07",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Flash Fill",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 07",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Flash Fill",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Flash Fill is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Flash Fill is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 07",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Flash Fill",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 07",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Flash Fill",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Flash Fill"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T08_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Data Validation and Drop-Down Lists",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 08",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Data Validation and Drop-Down Lists",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 08",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Data Validation and Drop-Down Lists",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Data Validation and Drop-Down Lists is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Data Validation and Drop-Down Lists is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Select one cell in the complete dataset or select the full table."
                ],
                [
                  "2",
                  "Open the Data or Home command related to this topic."
                ],
                [
                  "3",
                  "Choose the target column and specify the correct settings."
                ],
                [
                  "4",
                  "Preview the operation before confirming."
                ],
                [
                  "5",
                  "Check row counts and verify the changed values."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 08",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Data Validation and Drop-Down Lists",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 08",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Data Validation and Drop-Down Lists",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Data Validation and Drop-Down Lists"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M12_T09_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M12",
  "moduleTitle": "Data Preparation in Excel",
  "topic": "Cleaning Spaces and Inconsistent Values",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 09",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Cleaning Spaces and Inconsistent Values",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 09",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Cleaning Spaces and Inconsistent Values",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Cleaning Spaces and Inconsistent Values is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Cleaning Spaces and Inconsistent Values is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 09",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Cleaning Spaces and Inconsistent Values",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M12 | TOPIC 09",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Cleaning Spaces and Inconsistent Values",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Cleaning Spaces and Inconsistent Values"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "Formula Basics and Order of Operations",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Formula Basics and Order of Operations",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Formula Basics and Order of Operations",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Formula Basics and Order of Operations is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Formula Basics and Order of Operations is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Formula Basics and Order of Operations",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Formula Basics and Order of Operations",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Formula Basics and Order of Operations"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "Relative, Absolute and Mixed Cell References",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Relative, Absolute and Mixed Cell References",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Relative, Absolute and Mixed Cell References",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Relative, Absolute and Mixed Cell References is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Relative, Absolute and Mixed Cell References is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Relative, Absolute and Mixed Cell References",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Relative, Absolute and Mixed Cell References",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "Relative, Absolute and Mixed Cell References"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "SUM, AVERAGE, MIN and MAX",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "SUM, AVERAGE, MIN and MAX",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "SUM, AVERAGE, MIN and MAX",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "SUM, AVERAGE, MIN and MAX is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "SUM, AVERAGE, MIN and MAX is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "SUM, AVERAGE, MIN and MAX",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "SUM, AVERAGE, MIN and MAX",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "SUM, AVERAGE, MIN and MAX"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "COUNT, COUNTA and COUNTBLANK",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "COUNT, COUNTA and COUNTBLANK",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "COUNT, COUNTA and COUNTBLANK",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "COUNT, COUNTA and COUNTBLANK is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "COUNT, COUNTA and COUNTBLANK is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "COUNT, COUNTA and COUNTBLANK",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "COUNT, COUNTA and COUNTBLANK",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "COUNT, COUNTA and COUNTBLANK"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "IF and Nested IF",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "IF and Nested IF",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "IF and Nested IF",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "IF and Nested IF is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "IF and Nested IF is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "IF and Nested IF",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "IF and Nested IF",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "IF and Nested IF"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "AND, OR and NOT",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "AND, OR and NOT",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "AND, OR and NOT",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "AND, OR and NOT is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "AND, OR and NOT is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "AND, OR and NOT",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "AND, OR and NOT",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "AND, OR and NOT"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T07_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "SUMIF and COUNTIF",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 07",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "SUMIF and COUNTIF",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 07",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "SUMIF and COUNTIF",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "SUMIF and COUNTIF is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "SUMIF and COUNTIF is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 07",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "SUMIF and COUNTIF",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 07",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "SUMIF and COUNTIF",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "SUMIF and COUNTIF"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T08_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "SUMIFS and COUNTIFS",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 08",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "SUMIFS and COUNTIFS",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 08",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "SUMIFS and COUNTIFS",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "SUMIFS and COUNTIFS is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "SUMIFS and COUNTIFS is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 08",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "SUMIFS and COUNTIFS",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 08",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "SUMIFS and COUNTIFS",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "SUMIFS and COUNTIFS"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

const M13_T09_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M13",
  "moduleTitle": "Formulas and Core Functions",
  "topic": "IFERROR and Error Handling",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 09",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "IFERROR and Error Handling",
      "subtitle": "01 | SEE THE EXCEL WORKSHEET",
      "intro": {
        "icon": "table",
        "titleEn": "Sales_Workbook.xlsx — Visual Workspace Map",
        "titleHi": "Sales_Workbook.xlsx — Visual Workspace Map",
        "bodyEn": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View.",
        "bodyHi": "Active Formula Bar (`Name Box B2`): **=D2*E2** — Tabs: File, Home, Insert, Page Layout, Formulas, Data, Review, View."
      },
      "sections": [
        {
          "pill": "Sample Excel Worksheet (Sales Data)",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Row",
                "A: ID",
                "B: Product",
                "C: Category",
                "D: Qty",
                "E: Price",
                "F: Total"
              ],
              "rows": [
                [
                  "2",
                  "101",
                  "Laptop",
                  "Electronics",
                  "5",
                  "900",
                  "4500"
                ],
                [
                  "3",
                  "102",
                  "Monitor",
                  "Electronics",
                  "8",
                  "250",
                  "2000"
                ],
                [
                  "4",
                  "103",
                  "Keyboard",
                  "Accessories",
                  "15",
                  "40",
                  "600"
                ],
                [
                  "5",
                  "104",
                  "Mouse",
                  "Accessories",
                  "20",
                  "25",
                  "500"
                ]
              ],
              "noteEn": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx).",
              "noteHi": "Key worksheet parts: **ROWS** (horizontal 1–5), **COLUMNS** (vertical A–F), **CELLS** (e.g. B2 = Laptop), **WORKSHEET** (Sales Data tab), **WORKBOOK** (Sales_Workbook.xlsx)."
            }
          ]
        },
        {
          "pill": "What You Will Learn",
          "blocks": [
            {
              "type": "bullets",
              "tone": "green",
              "items": [
                {
                  "en": "Identify where data is entered and managed.",
                  "hi": "Identify where data is entered and managed."
                },
                {
                  "en": "Follow the exact Excel steps for this topic.",
                  "hi": "Follow the exact Excel steps for this topic."
                },
                {
                  "en": "Read a real worksheet example and verify its result.",
                  "hi": "Read a real worksheet example and verify its result."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 09",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "IFERROR and Error Handling",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "IFERROR and Error Handling is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "IFERROR and Error Handling is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
      },
      "sections": [
        {
          "pill": "Step-by-Step Excel Procedure",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Step",
                "Action"
              ],
              "rows": [
                [
                  "1",
                  "Enter the sample dataset shown on the worksheet diagram."
                ],
                [
                  "2",
                  "Click an empty result cell such as G2."
                ],
                [
                  "3",
                  "Type the formula exactly as shown, starting with =."
                ],
                [
                  "4",
                  "Press Enter and compare the displayed result."
                ],
                [
                  "5",
                  "Check referenced ranges and copy or adjust when appropriate."
                ]
              ]
            }
          ]
        },
        {
          "pill": "Visual Process",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "SOURCE DATA",
                  "bodyEn": "Inspect raw rows & headers.",
                  "bodyHi": "Inspect raw rows & headers.",
                  "tone": "sky"
                },
                {
                  "title": "EXCEL ACTION",
                  "bodyEn": "Apply the exact Excel step.",
                  "bodyHi": "Apply the exact Excel step.",
                  "tone": "lavender"
                },
                {
                  "title": "CHECK RESULT",
                  "bodyEn": "Verify totals & formatting.",
                  "bodyHi": "Verify totals & formatting.",
                  "tone": "green"
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "**Tip: Always keep a copy of the original data before making irreversible changes.**",
              "bodyHi": "**Tip: Always keep a copy of the original data before making irreversible changes.**"
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 09",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "IFERROR and Error Handling",
      "subtitle": "03 | WORKED EXAMPLE + ACTUAL RESULT",
      "sections": [
        {
          "pill": "Example Formula / Action",
          "blocks": [
            {
              "type": "sql",
              "label": "EXCEL FORMULA / ACTION",
              "code": "=D2*E2",
              "captionEn": "",
              "captionHi": ""
            }
          ]
        },
        {
          "pill": "Why This Works & Important Check",
          "blocks": [
            {
              "type": "compare",
              "items": [
                {
                  "title": "Why This Works",
                  "bodyEn": "Applies the Excel operation cleanly across the selected data range.",
                  "bodyHi": "Applies the Excel operation cleanly across the selected data range.",
                  "tone": "sky"
                },
                {
                  "title": "Important Check",
                  "bodyEn": "Keep each row as one record and each column as one field.",
                  "bodyHi": "Keep each row as one record and each column as one field.",
                  "tone": "green"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M13 | TOPIC 09",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "IFERROR and Error Handling",
      "subtitle": "04 | REAL-WORLD ANALYST WORKFLOW",
      "intro": {
        "icon": "table",
        "titleEn": "Sales Operations Example",
        "titleHi": "Sales Operations Example",
        "bodyEn": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing.",
        "bodyHi": "A sales analyst receives daily product records, prepares the sheet, applies this Excel technique, and validates the output before sharing."
      },
      "sections": [
        {
          "pill": "5-Stage Analyst Workflow",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Stage",
                "Analyst Activity"
              ],
              "rows": [
                [
                  "1. COLLECT",
                  "Product, category, quantity and price"
                ],
                [
                  "2. PREPARE",
                  "Check blank cells, types and duplicates"
                ],
                [
                  "3. APPLY",
                  "IFERROR and Error Handling"
                ],
                [
                  "4. VERIFY",
                  "Compare output against source records"
                ],
                [
                  "5. REPORT",
                  "Share a clear, reproducible summary"
                ]
              ]
            }
          ]
        },
        {
          "pill": "Remember",
          "blocks": [
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation.",
              "bodyHi": "A good Excel result is not just a number: it must be traceable to clean source data and the correct calculation."
            }
          ]
        }
      ]
    }
  ]
};

export const EXCEL_PART1_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  27: M11_T01_EXCEL_SPEC,
  28: M11_T02_EXCEL_SPEC,
  29: M11_T03_EXCEL_SPEC,
  30: M11_T04_EXCEL_SPEC,
  31: M11_T05_EXCEL_SPEC,
  32: M11_T06_EXCEL_SPEC,
  33: M12_T01_EXCEL_SPEC,
  34: M12_T02_EXCEL_SPEC,
  35: M12_T03_EXCEL_SPEC,
  36: M12_T04_EXCEL_SPEC,
  37: M12_T05_EXCEL_SPEC,
  38: M12_T06_EXCEL_SPEC,
  39: M12_T07_EXCEL_SPEC,
  40: M12_T08_EXCEL_SPEC,
  41: M12_T09_EXCEL_SPEC,
  42: M13_T01_EXCEL_SPEC,
  43: M13_T02_EXCEL_SPEC,
  44: M13_T03_EXCEL_SPEC,
  45: M13_T04_EXCEL_SPEC,
  46: M13_T05_EXCEL_SPEC,
  47: M13_T06_EXCEL_SPEC,
  48: M13_T07_EXCEL_SPEC,
  49: M13_T08_EXCEL_SPEC,
  50: M13_T09_EXCEL_SPEC,
};
