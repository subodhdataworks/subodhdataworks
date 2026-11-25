import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M14_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "LEFT, RIGHT, MID and LEN",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "LEFT, RIGHT, MID and LEN",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "LEFT, RIGHT, MID and LEN",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "LEFT, RIGHT, MID and LEN is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "LEFT, RIGHT, MID and LEN is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "LEFT, RIGHT, MID and LEN",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "LEFT, RIGHT, MID and LEN",
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
                  "LEFT, RIGHT, MID and LEN"
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

const M14_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "TRIM, CLEAN, UPPER, LOWER and PROPER",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "TRIM, CLEAN, UPPER, LOWER and PROPER",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "TRIM, CLEAN, UPPER, LOWER and PROPER",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "TRIM, CLEAN, UPPER, LOWER and PROPER is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "TRIM, CLEAN, UPPER, LOWER and PROPER is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "TRIM, CLEAN, UPPER, LOWER and PROPER",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "TRIM, CLEAN, UPPER, LOWER and PROPER",
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
                  "TRIM, CLEAN, UPPER, LOWER and PROPER"
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

const M14_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "CONCAT and TEXTJOIN",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "CONCAT and TEXTJOIN",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "CONCAT and TEXTJOIN",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "CONCAT and TEXTJOIN is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "CONCAT and TEXTJOIN is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "CONCAT and TEXTJOIN",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "CONCAT and TEXTJOIN",
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
                  "CONCAT and TEXTJOIN"
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

const M14_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "TODAY, NOW, DATE and YEAR",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "TODAY, NOW, DATE and YEAR",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "TODAY, NOW, DATE and YEAR",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "TODAY, NOW, DATE and YEAR is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "TODAY, NOW, DATE and YEAR is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "TODAY, NOW, DATE and YEAR",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "TODAY, NOW, DATE and YEAR",
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
                  "TODAY, NOW, DATE and YEAR"
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

const M14_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "MONTH, DAY and Date Calculations",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "MONTH, DAY and Date Calculations",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "MONTH, DAY and Date Calculations",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "MONTH, DAY and Date Calculations is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "MONTH, DAY and Date Calculations is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "MONTH, DAY and Date Calculations",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "MONTH, DAY and Date Calculations",
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
                  "MONTH, DAY and Date Calculations"
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

const M14_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "XLOOKUP",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "XLOOKUP",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "XLOOKUP",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "XLOOKUP is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "XLOOKUP is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "XLOOKUP",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "XLOOKUP",
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
                  "XLOOKUP"
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

const M14_T07_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "VLOOKUP and HLOOKUP Concepts",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 07",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "VLOOKUP and HLOOKUP Concepts",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 07",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "VLOOKUP and HLOOKUP Concepts",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "VLOOKUP and HLOOKUP Concepts is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "VLOOKUP and HLOOKUP Concepts is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 07",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "VLOOKUP and HLOOKUP Concepts",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 07",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "VLOOKUP and HLOOKUP Concepts",
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
                  "VLOOKUP and HLOOKUP Concepts"
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

const M14_T08_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "INDEX and MATCH",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 08",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "INDEX and MATCH",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 08",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "INDEX and MATCH",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "INDEX and MATCH is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "INDEX and MATCH is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 08",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "INDEX and MATCH",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 08",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "INDEX and MATCH",
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
                  "INDEX and MATCH"
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

const M14_T09_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M14",
  "moduleTitle": "Text, Date and Lookup Functions",
  "topic": "Choosing and Troubleshooting Lookup Functions",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 09",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Choosing and Troubleshooting Lookup Functions",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 09",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Choosing and Troubleshooting Lookup Functions",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Choosing and Troubleshooting Lookup Functions is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Choosing and Troubleshooting Lookup Functions is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 09",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Choosing and Troubleshooting Lookup Functions",
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
      "moduleTag": "FUTURE IT INDUSTRY | M14 | TOPIC 09",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Choosing and Troubleshooting Lookup Functions",
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
                  "Choosing and Troubleshooting Lookup Functions"
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

const M15_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Conditional Formatting",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Conditional Formatting",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Conditional Formatting",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Conditional Formatting is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Conditional Formatting is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Conditional Formatting",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Conditional Formatting",
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
                  "Conditional Formatting"
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

const M15_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Create and Format PivotTables",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Create and Format PivotTables",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Create and Format PivotTables",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Create and Format PivotTables is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Create and Format PivotTables is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Create and Format PivotTables",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Create and Format PivotTables",
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
                  "Create and Format PivotTables"
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

const M15_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Group and Summarize Data",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Group and Summarize Data",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Group and Summarize Data",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Group and Summarize Data is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Group and Summarize Data is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Group and Summarize Data",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Group and Summarize Data",
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
                  "Group and Summarize Data"
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

const M15_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "PivotCharts",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "PivotCharts",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "PivotCharts",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "PivotCharts is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "PivotCharts is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "PivotCharts",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "PivotCharts",
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
                  "PivotCharts"
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

const M15_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Slicers and Report Filters",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Slicers and Report Filters",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Slicers and Report Filters",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Slicers and Report Filters is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Slicers and Report Filters is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Slicers and Report Filters",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Slicers and Report Filters",
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
                  "Slicers and Report Filters"
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

const M15_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Build a KPI Summary Report",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Build a KPI Summary Report",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Build a KPI Summary Report",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Build a KPI Summary Report is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Build a KPI Summary Report is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Build a KPI Summary Report",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Build a KPI Summary Report",
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
                  "Build a KPI Summary Report"
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

const M15_T07_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Excel Charts: Column, Bar, Line and Pie",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 07",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Excel Charts: Column, Bar, Line and Pie",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 07",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Excel Charts: Column, Bar, Line and Pie",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Excel Charts: Column, Bar, Line and Pie is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Excel Charts: Column, Bar, Line and Pie is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 07",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Excel Charts: Column, Bar, Line and Pie",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 07",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Excel Charts: Column, Bar, Line and Pie",
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
                  "Excel Charts: Column, Bar, Line and Pie"
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

const M15_T08_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Dashboard Layout and Formatting",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 08",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Dashboard Layout and Formatting",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 08",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Dashboard Layout and Formatting",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Dashboard Layout and Formatting is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Dashboard Layout and Formatting is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Prepare a tidy source table with clear headers."
                ],
                [
                  "2",
                  "Select the data and choose the appropriate Insert or analysis command."
                ],
                [
                  "3",
                  "Place Category in Rows or Axis and Total in Values."
                ],
                [
                  "4",
                  "Format numbers, labels, titles, and filter controls."
                ],
                [
                  "5",
                  "Validate the visual against the source totals."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 08",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Dashboard Layout and Formatting",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 08",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Dashboard Layout and Formatting",
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
                  "Dashboard Layout and Formatting"
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

const M15_T09_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M15",
  "moduleTitle": "Analysis and Reporting with Excel",
  "topic": "Excel Analysis Mini Project",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 09",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Excel Analysis Mini Project",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 09",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Excel Analysis Mini Project",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Excel Analysis Mini Project is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Excel Analysis Mini Project is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 09",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Excel Analysis Mini Project",
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
      "moduleTag": "FUTURE IT INDUSTRY | M15 | TOPIC 09",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Excel Analysis Mini Project",
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
                  "Excel Analysis Mini Project"
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

const M16_T01_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "What Is Power Query?",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 01",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "What Is Power Query?",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 01",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "What Is Power Query?",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "What Is Power Query? is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "What Is Power Query? is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Open Data tab and select Get Data or From Table/Range."
                ],
                [
                  "2",
                  "Select the source file, folder, or existing query."
                ],
                [
                  "3",
                  "In Power Query Editor, inspect column names and detected types."
                ],
                [
                  "4",
                  "Apply the transformation for this topic and inspect the preview."
                ],
                [
                  "5",
                  "Choose Close & Load; refresh when the source changes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 01",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "What Is Power Query?",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 01",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "What Is Power Query?",
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
                  "What Is Power Query?"
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

const M16_T02_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Import Data from CSV, Excel and Folders",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 02",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Import Data from CSV, Excel and Folders",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 02",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Import Data from CSV, Excel and Folders",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Import Data from CSV, Excel and Folders is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Import Data from CSV, Excel and Folders is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Open Data tab and select Get Data or From Table/Range."
                ],
                [
                  "2",
                  "Select the source file, folder, or existing query."
                ],
                [
                  "3",
                  "In Power Query Editor, inspect column names and detected types."
                ],
                [
                  "4",
                  "Apply the transformation for this topic and inspect the preview."
                ],
                [
                  "5",
                  "Choose Close & Load; refresh when the source changes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 02",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Import Data from CSV, Excel and Folders",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 02",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Import Data from CSV, Excel and Folders",
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
                  "Import Data from CSV, Excel and Folders"
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

const M16_T03_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Transform and Clean Data in Power Query",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 03",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Transform and Clean Data in Power Query",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 03",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Transform and Clean Data in Power Query",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Transform and Clean Data in Power Query is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Transform and Clean Data in Power Query is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Open Data tab and select Get Data or From Table/Range."
                ],
                [
                  "2",
                  "Select the source file, folder, or existing query."
                ],
                [
                  "3",
                  "In Power Query Editor, inspect column names and detected types."
                ],
                [
                  "4",
                  "Apply the transformation for this topic and inspect the preview."
                ],
                [
                  "5",
                  "Choose Close & Load; refresh when the source changes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 03",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Transform and Clean Data in Power Query",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 03",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Transform and Clean Data in Power Query",
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
                  "Transform and Clean Data in Power Query"
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

const M16_T04_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Change Data Types and Split Columns",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 04",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Change Data Types and Split Columns",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 04",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Change Data Types and Split Columns",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Change Data Types and Split Columns is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Change Data Types and Split Columns is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 04",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Change Data Types and Split Columns",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 04",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Change Data Types and Split Columns",
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
                  "Change Data Types and Split Columns"
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

const M16_T05_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Merge Queries and Append Queries",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 05",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Merge Queries and Append Queries",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 05",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Merge Queries and Append Queries",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Merge Queries and Append Queries is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Merge Queries and Append Queries is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Open Data tab and select Get Data or From Table/Range."
                ],
                [
                  "2",
                  "Select the source file, folder, or existing query."
                ],
                [
                  "3",
                  "In Power Query Editor, inspect column names and detected types."
                ],
                [
                  "4",
                  "Apply the transformation for this topic and inspect the preview."
                ],
                [
                  "5",
                  "Choose Close & Load; refresh when the source changes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 05",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Merge Queries and Append Queries",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 05",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Merge Queries and Append Queries",
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
                  "Merge Queries and Append Queries"
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

const M16_T06_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Refreshable Data Workflows",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 06",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Refreshable Data Workflows",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 06",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Refreshable Data Workflows",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Refreshable Data Workflows is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Refreshable Data Workflows is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
                  "Open Data tab and select Get Data or From Table/Range."
                ],
                [
                  "2",
                  "Select the source file, folder, or existing query."
                ],
                [
                  "3",
                  "In Power Query Editor, inspect column names and detected types."
                ],
                [
                  "4",
                  "Apply the transformation for this topic and inspect the preview."
                ],
                [
                  "5",
                  "Choose Close & Load; refresh when the source changes."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 06",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Refreshable Data Workflows",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 06",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Refreshable Data Workflows",
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
                  "Refreshable Data Workflows"
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

const M16_T07_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Introduction to Dynamic Array Functions",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 07",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Introduction to Dynamic Array Functions",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 07",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Introduction to Dynamic Array Functions",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Introduction to Dynamic Array Functions is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Introduction to Dynamic Array Functions is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 07",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Introduction to Dynamic Array Functions",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 07",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Introduction to Dynamic Array Functions",
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
                  "Introduction to Dynamic Array Functions"
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

const M16_T08_EXCEL_SPEC: StructuredVisualNoteTopic = {
  "module": "M16",
  "moduleTitle": "Power Query and Advanced Excel",
  "topic": "Audit Formulas and Validate Results",
  "pageCount": 4,
  "sampleDataNotice": "All example Excel workbooks, formulas and sales figures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 08",
      "pageTag": "PAGE 1 OF 4",
      "footerPage": "1 / 4",
      "title": "Audit Formulas and Validate Results",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 08",
      "pageTag": "PAGE 2 OF 4",
      "footerPage": "2 / 4",
      "title": "Audit Formulas and Validate Results",
      "subtitle": "02 | CONCEPT + STEP-BY-STEP",
      "intro": {
        "icon": "table",
        "bodyEn": "Audit Formulas and Validate Results is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret.",
        "bodyHi": "Audit Formulas and Validate Results is an essential Excel skill for preparing, understanding, or reporting data. Analysts use it to make information accurate, consistent, and easy to interpret."
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 08",
      "pageTag": "PAGE 3 OF 4",
      "footerPage": "3 / 4",
      "title": "Audit Formulas and Validate Results",
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
      "moduleTag": "FUTURE IT INDUSTRY | M16 | TOPIC 08",
      "pageTag": "PAGE 4 OF 4",
      "footerPage": "4 / 4",
      "title": "Audit Formulas and Validate Results",
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
                  "Audit Formulas and Validate Results"
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

export const EXCEL_PART2_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  51: M14_T01_EXCEL_SPEC,
  52: M14_T02_EXCEL_SPEC,
  53: M14_T03_EXCEL_SPEC,
  54: M14_T04_EXCEL_SPEC,
  55: M14_T05_EXCEL_SPEC,
  56: M14_T06_EXCEL_SPEC,
  57: M14_T07_EXCEL_SPEC,
  58: M14_T08_EXCEL_SPEC,
  59: M14_T09_EXCEL_SPEC,
  60: M15_T01_EXCEL_SPEC,
  61: M15_T02_EXCEL_SPEC,
  62: M15_T03_EXCEL_SPEC,
  63: M15_T04_EXCEL_SPEC,
  64: M15_T05_EXCEL_SPEC,
  65: M15_T06_EXCEL_SPEC,
  66: M15_T07_EXCEL_SPEC,
  67: M15_T08_EXCEL_SPEC,
  68: M15_T09_EXCEL_SPEC,
  69: M16_T01_EXCEL_SPEC,
  70: M16_T02_EXCEL_SPEC,
  71: M16_T03_EXCEL_SPEC,
  72: M16_T04_EXCEL_SPEC,
  73: M16_T05_EXCEL_SPEC,
  74: M16_T06_EXCEL_SPEC,
  75: M16_T07_EXCEL_SPEC,
  76: M16_T08_EXCEL_SPEC,
};
