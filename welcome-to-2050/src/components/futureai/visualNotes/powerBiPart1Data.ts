import { StructuredVisualNoteTopic } from './StructuredVisualNotesRenderer';

const M23_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "What Is Power BI?",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "What Is Power BI?",
      "subtitle": "TURN BUSINESS DATA INTO CLEAR DECISIONS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Connect",
                  "bodyEn": "Bring in Excel, CSV, databases or other sources.",
                  "bodyHi": "Bring in Excel, CSV, databases or other sources.",
                  "tone": "lavender"
                },
                {
                  "title": "Model",
                  "bodyEn": "Clean tables, relate them and create calculations.",
                  "bodyHi": "Clean tables, relate them and create calculations.",
                  "tone": "sky"
                },
                {
                  "title": "Visualize",
                  "bodyEn": "Build charts, filter results and share insights.",
                  "bodyHi": "Build charts, filter results and share insights.",
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
                  "Dataset / semantic model",
                  "The organized tables, relationships and calculations that a report uses."
                ],
                [
                  "Report",
                  "One or more interactive pages with charts, cards, tables and filters."
                ],
                [
                  "Dashboard",
                  "In the Power BI Service, a single-page view of pinned tiles, often from different reports."
                ],
                [
                  "Refresh",
                  "Updates the model or queries so reports can show newer source data."
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
                "Region",
                "Sales"
              ],
              "rows": [
                [
                  "Jan",
                  "East",
                  "12,000"
                ],
                [
                  "Jan",
                  "West",
                  "9,000"
                ],
                [
                  "Feb",
                  "East",
                  "15,000"
                ],
                [
                  "Feb",
                  "West",
                  "11,000"
                ]
              ],
              "noteEn": "Illustrative sales records. Power BI can summarize these rows into KPIs and charts.",
              "noteHi": "Illustrative sales records. Power BI can summarize these rows into KPIs and charts."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Power BI is a workflow: connect, prepare, model, calculate, visualize, validate and share.",
              "bodyHi": "Remember: Power BI is a workflow: connect, prepare, model, calculate, visualize, validate and share."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power BI is a Microsoft business intelligence platform. It helps you connect to data, clean it, create relationships, calculate measures, and build interactive reports. A report is useful only when the numbers are trustworthy and the audience can understand them.",
        "bodyHi": "Power BI is a Microsoft business intelligence platform. It helps you connect to data, clean it, create relationships, calculate measures, and build interactive reports. A report is useful only when the numbers are trustworthy and the audience can understand them."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "What Is Power BI?",
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
                  "Load the sales file into Power BI Desktop and check that Sales is numeric."
                ],
                [
                  "2",
                  "Use a table or model to make sure each row means one region in one month."
                ],
                [
                  "3",
                  "Create a total sales measure and place it on a Card visual."
                ],
                [
                  "4",
                  "Use a Line chart for monthly sales and a Bar chart for regional comparison."
                ],
                [
                  "5",
                  "Add a Region slicer and verify that the Card and charts respond correctly."
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
              "code": "Total Sales = SUM(Sales[Sales])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "Total Sales is the name of the measure.",
                  "hi": "Total Sales is the name of the measure."
                },
                {
                  "en": "SUM adds the Sales column in the current filter context.",
                  "hi": "SUM adds the Sales column in the current filter context."
                },
                {
                  "en": "A slicer changes the context, so the measure recalculates for the selected region.",
                  "hi": "A slicer changes the context, so the measure recalculates for the selected region."
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
                  "en": "Do not treat a colorful chart as proof that data is correct.",
                  "hi": "Do not treat a colorful chart as proof that data is correct."
                },
                {
                  "en": "Do not confuse a report page with a Service dashboard.",
                  "hi": "Do not confuse a report page with a Service dashboard."
                },
                {
                  "en": "Check units, dates and refresh status before presenting figures.",
                  "hi": "Check units, dates and refresh status before presenting figures."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Retail, banking, logistics and HR teams use Power BI to monitor KPIs and explain changes.",
              "bodyHi": "Where analysts use this: Retail, banking, logistics and HR teams use Power BI to monitor KPIs and explain changes."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Power BI is a workflow: connect, prepare, model, calculate, visualize, validate and share.",
              "bodyHi": "Key takeaway: Power BI is a workflow: connect, prepare, model, calculate, visualize, validate and share."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales manager wants to know whether sales are improving and which region needs attention.",
        "bodyHi": "Business situation: A sales manager wants to know whether sales are improving and which region needs attention."
      }
    }
  ]
};

const M23_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "Power BI Desktop, Service and Mobile",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Power BI Desktop, Service and Mobile",
      "subtitle": "THREE PARTS OF ONE REPORTING WORKFLOW",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Desktop",
                  "bodyEn": "Build a report and its model.",
                  "bodyHi": "Build a report and its model.",
                  "tone": "lavender"
                },
                {
                  "title": "Service",
                  "bodyEn": "Publish, manage and distribute content.",
                  "bodyHi": "Publish, manage and distribute content.",
                  "tone": "sky"
                },
                {
                  "title": "Mobile",
                  "bodyEn": "Read and filter reports while away from a desk.",
                  "bodyHi": "Read and filter reports while away from a desk.",
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
                  "Desktop",
                  "A Windows authoring application; save work in a PBIX or another supported project format."
                ],
                [
                  "Service",
                  "Browser-based workspaces, semantic models, reports, apps and dashboards."
                ],
                [
                  "Mobile",
                  "Optimized viewing; mobile layouts can be designed for smaller screens."
                ],
                [
                  "License and access",
                  "Sharing capabilities depend on licenses, capacity, workspace roles and permissions."
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
                "Task",
                "Best place",
                "Why"
              ],
              "rows": [
                [
                  "Build DAX measure",
                  "Desktop",
                  "Model authoring"
                ],
                [
                  "Schedule refresh",
                  "Service",
                  "Cloud settings"
                ],
                [
                  "Check KPI on phone",
                  "Mobile",
                  "Quick viewing"
                ]
              ],
              "noteEn": "Choose the tool based on the work, not simply the device.",
              "noteHi": "Choose the tool based on the work, not simply the device."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Desktop builds, Service manages and shares, Mobile helps people consume insights.",
              "bodyHi": "Remember: Desktop builds, Service manages and shares, Mobile helps people consume insights."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power BI Desktop is mainly used to build models and reports. The Power BI Service is the web environment for publishing, managing access, refreshing and collaborating. Power BI Mobile lets people view and interact with reports on phones and tablets.",
        "bodyHi": "Power BI Desktop is mainly used to build models and reports. The Power BI Service is the web environment for publishing, managing access, refreshing and collaborating. Power BI Mobile lets people view and interact with reports on phones and tablets."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Power BI Desktop, Service and Mobile",
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
                  "Create the model and visuals in Power BI Desktop."
                ],
                [
                  "2",
                  "Sign in and publish to an appropriate workspace in the Service."
                ],
                [
                  "3",
                  "Set data-source credentials and refresh or gateway settings if required."
                ],
                [
                  "4",
                  "Grant access through the correct workspace/app/report mechanism."
                ],
                [
                  "5",
                  "Test report readability and filters in the Mobile app."
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
              "bodyEn": "Choose the tool based on the work, not simply the device. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Choose the tool based on the work, not simply the device. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Publishing is not the same as giving every person permission to view.",
                  "hi": "Publishing is not the same as giving every person permission to view."
                },
                {
                  "en": "Mobile is mainly for consumption, not full model design.",
                  "hi": "Mobile is mainly for consumption, not full model design."
                },
                {
                  "en": "A published report can become stale when its semantic model does not refresh.",
                  "hi": "A published report can become stale when its semantic model does not refresh."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Analysts create in Desktop; report owners manage delivery in the Service; leaders consume on web or mobile.",
              "bodyHi": "Where analysts use this: Analysts create in Desktop; report owners manage delivery in the Service; leaders consume on web or mobile."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Desktop builds, Service manages and shares, Mobile helps people consume insights.",
              "bodyHi": "Key takeaway: Desktop builds, Service manages and shares, Mobile helps people consume insights."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst builds a weekly performance report, publishes it for managers and wants mobile access.",
        "bodyHi": "Business situation: An analyst builds a weekly performance report, publishes it for managers and wants mobile access."
      }
    }
  ]
};

const M23_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "Installing and Exploring Power BI Desktop",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Installing and Exploring Power BI Desktop",
      "subtitle": "LEARN THE WORKSPACE BEFORE BUILDING",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Install",
                  "bodyEn": "Use an official Microsoft source.",
                  "bodyHi": "Use an official Microsoft source.",
                  "tone": "lavender"
                },
                {
                  "title": "Open",
                  "bodyEn": "Start a blank report and inspect the ribbon.",
                  "bodyHi": "Start a blank report and inspect the ribbon.",
                  "tone": "sky"
                },
                {
                  "title": "Explore",
                  "bodyEn": "Find data, visuals, model and query tools.",
                  "bodyHi": "Find data, visuals, model and query tools.",
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
                  "Home ribbon",
                  "Common actions such as Get data, Transform data, Refresh and Publish."
                ],
                [
                  "Canvas",
                  "The area where you arrange visuals on report pages."
                ],
                [
                  "Data and model areas",
                  "Help you inspect loaded data and relationships."
                ],
                [
                  "Power Query Editor",
                  "A separate editor for preparing data before it is loaded into the model."
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
                "Area",
                "Typical action",
                "Result"
              ],
              "rows": [
                [
                  "Home",
                  "Get data",
                  "Choose a source"
                ],
                [
                  "Canvas",
                  "Add a Card",
                  "Show a KPI"
                ],
                [
                  "Model",
                  "Create relationship",
                  "Connect tables"
                ]
              ],
              "noteEn": "Interface labels may move between versions; learn the purpose of each area.",
              "noteHi": "Interface labels may move between versions; learn the purpose of each area."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: First understand where to connect, transform, model, visualize and save.",
              "bodyHi": "Remember: First understand where to connect, transform, model, visualize and save."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power BI Desktop is a Windows application used to create Power BI models and reports. You can install it from an official Microsoft distribution channel. The exact interface can change by version, but the main work areas stay similar.",
        "bodyHi": "Power BI Desktop is a Windows application used to create Power BI models and reports. You can install it from an official Microsoft distribution channel. The exact interface can change by version, but the main work areas stay similar."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Installing and Exploring Power BI Desktop",
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
                  "Confirm Windows requirements and install Power BI Desktop from an official source."
                ],
                [
                  "2",
                  "Open Desktop and create a blank report."
                ],
                [
                  "3",
                  "Find Get data and Transform data on the ribbon."
                ],
                [
                  "4",
                  "Locate the report canvas, data/fields pane and visual formatting controls."
                ],
                [
                  "5",
                  "Save a practice file with a clear name and note where it is stored."
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
              "bodyEn": "Interface labels may move between versions; learn the purpose of each area. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Interface labels may move between versions; learn the purpose of each area. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not install unknown copies from unofficial websites.",
                  "hi": "Do not install unknown copies from unofficial websites."
                },
                {
                  "en": "Do not confuse the query editor with the report canvas.",
                  "hi": "Do not confuse the query editor with the report canvas."
                },
                {
                  "en": "Do not assume a saved PBIX is automatically published online.",
                  "hi": "Do not assume a saved PBIX is automatically published online."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Knowing the interface saves time during report development and troubleshooting.",
              "bodyHi": "Where analysts use this: Knowing the interface saves time during report development and troubleshooting."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: First understand where to connect, transform, model, visualize and save.",
              "bodyHi": "Key takeaway: First understand where to connect, transform, model, visualize and save."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A new analyst needs to open a sample workbook and find the tools required to make a basic report.",
        "bodyHi": "Business situation: A new analyst needs to open a sample workbook and find the tools required to make a basic report."
      }
    }
  ]
};

const M23_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "Connecting to Excel and CSV",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Connecting to Excel and CSV",
      "subtitle": "IMPORT FILES AND CHECK THEIR STRUCTURE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Choose file",
                  "bodyEn": "Get data > Excel workbook or Text/CSV.",
                  "bodyHi": "Get data > Excel workbook or Text/CSV.",
                  "tone": "lavender"
                },
                {
                  "title": "Preview",
                  "bodyEn": "Check sheet, delimiter, header and sample values.",
                  "bodyHi": "Check sheet, delimiter, header and sample values.",
                  "tone": "sky"
                },
                {
                  "title": "Load or transform",
                  "bodyEn": "Load clean data or open Power Query to fix it.",
                  "bodyHi": "Load clean data or open Power Query to fix it.",
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
                  "Excel workbook",
                  "Choose the correct worksheet or named Excel table in Navigator."
                ],
                [
                  "CSV delimiter",
                  "Confirm comma, semicolon or another separator is detected correctly."
                ],
                [
                  "Header row",
                  "The first data row should not accidentally become column names."
                ],
                [
                  "Data types",
                  "Sales must be numeric, dates must be dates and identifiers may need text."
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
                "OrderDate",
                "Store",
                "Amount"
              ],
              "rows": [
                [
                  "2026-01-03",
                  "A",
                  "1200"
                ],
                [
                  "2026-01-04",
                  "B",
                  "950"
                ],
                [
                  "2026-01-05",
                  "A",
                  "700"
                ]
              ],
              "noteEn": "The sample should become three columns with the correct date, text and numeric types.",
              "noteHi": "The sample should become three columns with the correct date, text and numeric types."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Import carefully: source, preview, clean, load and validate.",
              "bodyHi": "Remember: Import carefully: source, preview, clean, load and validate."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Excel workbooks can contain multiple sheets and structured tables; CSV files are plain-text rows separated by delimiters. Power BI can connect to both, but you must inspect headers, data types and missing values before building charts.",
        "bodyHi": "Excel workbooks can contain multiple sheets and structured tables; CSV files are plain-text rows separated by delimiters. Power BI can connect to both, but you must inspect headers, data types and missing values before building charts."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Connecting to Excel and CSV",
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
                  "Select Get data and choose the correct connector for the file type."
                ],
                [
                  "2",
                  "Use Navigator or the CSV preview to check the intended table and columns."
                ],
                [
                  "3",
                  "Choose Transform data when headers, blanks or types need cleaning."
                ],
                [
                  "4",
                  "Rename queries and verify row counts before loading."
                ],
                [
                  "5",
                  "Load the data, then check that a simple table visual shows expected values."
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
              "bodyEn": "The sample should become three columns with the correct date, text and numeric types. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "The sample should become three columns with the correct date, text and numeric types. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not assume an Excel sheet and an Excel table are the same object.",
                  "hi": "Do not assume an Excel sheet and an Excel table are the same object."
                },
                {
                  "en": "A wrong CSV delimiter can put the whole row into one column.",
                  "hi": "A wrong CSV delimiter can put the whole row into one column."
                },
                {
                  "en": "A number stored as text may not aggregate as expected.",
                  "hi": "A number stored as text may not aggregate as expected."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: File connectors are a common first step for small reporting projects and prototypes.",
              "bodyHi": "Where analysts use this: File connectors are a common first step for small reporting projects and prototypes."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Import carefully: source, preview, clean, load and validate.",
              "bodyHi": "Key takeaway: Import carefully: source, preview, clean, load and validate."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A retail analyst receives a sales.xlsx workbook and a new_orders.csv file each month.",
        "bodyHi": "Business situation: A retail analyst receives a sales.xlsx workbook and a new_orders.csv file each month."
      }
    }
  ]
};

const M23_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "Import Mode and DirectQuery Overview",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Import Mode and DirectQuery Overview",
      "subtitle": "CHOOSE HOW REPORTS ACCESS DATA",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Import",
                  "bodyEn": "Copy data into the model at refresh time.",
                  "bodyHi": "Copy data into the model at refresh time.",
                  "tone": "lavender"
                },
                {
                  "title": "DirectQuery",
                  "bodyEn": "Query the source for many visual interactions.",
                  "bodyHi": "Query the source for many visual interactions.",
                  "tone": "sky"
                },
                {
                  "title": "Decide",
                  "bodyEn": "Balance freshness, scale and performance.",
                  "bodyHi": "Balance freshness, scale and performance.",
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
                  "Import advantages",
                  "Often faster interactive reports and broad modeling features; data must be refreshed."
                ],
                [
                  "DirectQuery advantages",
                  "Can show more current source results without importing all rows, depending on source and caching."
                ],
                [
                  "DirectQuery trade-off",
                  "Source speed, network latency, query limits and modeling restrictions can affect reports."
                ],
                [
                  "Composite models",
                  "Some models combine storage modes; their behavior requires careful design."
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
                "Question",
                "Import",
                "DirectQuery"
              ],
              "rows": [
                [
                  "Where data lives",
                  "Model copy",
                  "Source system"
                ],
                [
                  "Typical freshness",
                  "At refresh",
                  "At query time*"
                ],
                [
                  "Speed dependency",
                  "Model",
                  "Source/network"
                ]
              ],
              "noteEn": "*Caching and source behavior can affect what users actually see.",
              "noteHi": "*Caching and source behavior can affect what users actually see."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Import stores a refreshed copy; DirectQuery relies more directly on source queries.",
              "bodyHi": "Remember: Import stores a refreshed copy; DirectQuery relies more directly on source queries."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Import mode copies source data into the Power BI semantic model during refresh. DirectQuery keeps data at the source and sends queries when visuals need results. The best choice depends on freshness, performance, source capability and model requirements.",
        "bodyHi": "Import mode copies source data into the Power BI semantic model during refresh. DirectQuery keeps data at the source and sends queries when visuals need results. The best choice depends on freshness, performance, source capability and model requirements."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Import Mode and DirectQuery Overview",
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
                  "For the small file, consider Import because interactive reports can be fast."
                ],
                [
                  "2",
                  "For the operational database, discuss whether fresher data justifies DirectQuery trade-offs."
                ],
                [
                  "3",
                  "Check the source connector and transformations supported in each mode."
                ],
                [
                  "4",
                  "Build a small prototype and compare visual response times."
                ],
                [
                  "5",
                  "Document refresh expectations, data security and source load before choosing."
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
              "bodyEn": "*Caching and source behavior can affect what users actually see. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "*Caching and source behavior can affect what users actually see. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "DirectQuery does not guarantee instant real-time data in every setup.",
                  "hi": "DirectQuery does not guarantee instant real-time data in every setup."
                },
                {
                  "en": "Import does not update simply because a source file changed.",
                  "hi": "Import does not update simply because a source file changed."
                },
                {
                  "en": "Avoid choosing a mode based only on row count without testing requirements.",
                  "hi": "Avoid choosing a mode based only on row count without testing requirements."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: An operations team may prioritize freshness, while an executive dashboard may prioritize fast exploration. Storage-mode decision guide: Ask four questions: How fresh must data be? How fast must visuals respond? Can the source handle repeated queries? Which model features are required? Test with realistic users and filters before deciding.",
              "bodyHi": "Where analysts use this: An operations team may prioritize freshness, while an executive dashboard may prioritize fast exploration. Storage-mode decision guide: Ask four questions: How fresh must data be? How fast must visuals respond? Can the source handle repeated queries? Which model features are required? Test with realistic users and filters before deciding."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Import stores a refreshed copy; DirectQuery relies more directly on source queries.",
              "bodyHi": "Key takeaway: Import stores a refreshed copy; DirectQuery relies more directly on source queries."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A company has a small daily sales file and a very large operational database.",
        "bodyHi": "Business situation: A company has a small daily sales file and a very large operational database."
      }
    }
  ]
};

const M23_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M23",
  "moduleTitle": "Getting Started with Power BI",
  "topic": "Navigating Report, Data and Model Views",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Navigating Report, Data and Model Views",
      "subtitle": "KNOW WHERE EACH KIND OF WORK HAPPENS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Report view",
                  "bodyEn": "Design and interact with visuals.",
                  "bodyHi": "Design and interact with visuals.",
                  "tone": "lavender"
                },
                {
                  "title": "Data / Table view",
                  "bodyEn": "Inspect loaded rows and calculated columns.",
                  "bodyHi": "Inspect loaded rows and calculated columns.",
                  "tone": "sky"
                },
                {
                  "title": "Model view",
                  "bodyEn": "See tables and their relationships.",
                  "bodyHi": "See tables and their relationships.",
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
                  "Report view",
                  "Create pages, Cards, charts, slicers and visual interactions."
                ],
                [
                  "Data / Table view",
                  "Inspect table contents and spot suspicious values or column types."
                ],
                [
                  "Model view",
                  "Connect fact and dimension tables and review relationship direction."
                ],
                [
                  "Power Query Editor",
                  "Use Transform data to clean source data before loading; it is a separate window."
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
                "Need",
                "Where to go",
                "What to check"
              ],
              "rows": [
                [
                  "Change chart title",
                  "Report",
                  "Format visual"
                ],
                [
                  "Inspect Sales rows",
                  "Data",
                  "Column values"
                ],
                [
                  "Fix relationship",
                  "Model",
                  "Keys and cardinality"
                ]
              ],
              "noteEn": "The same report uses all three views for different tasks.",
              "noteHi": "The same report uses all three views for different tasks."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Report = presentation, Data = inspection, Model = relationships.",
              "bodyHi": "Remember: Report = presentation, Data = inspection, Model = relationships."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power BI Desktop provides different views for building visuals, inspecting loaded tables and managing relationships. Switching to the right view helps you solve a problem faster instead of searching through unrelated menus.",
        "bodyHi": "Power BI Desktop provides different views for building visuals, inspecting loaded tables and managing relationships. Switching to the right view helps you solve a problem faster instead of searching through unrelated menus."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M23 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Navigating Report, Data and Model Views",
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
                  "Start in Report view and note the visual filters and measure used."
                ],
                [
                  "2",
                  "Open Data view to inspect the underlying Sales values and types."
                ],
                [
                  "3",
                  "Open Model view to check the table relationships."
                ],
                [
                  "4",
                  "Use Transform data if the source data needs cleaning."
                ],
                [
                  "5",
                  "Return to Report view and validate the corrected total."
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
              "bodyEn": "The same report uses all three views for different tasks. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "The same report uses all three views for different tasks. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not assume every total error is caused by the chart itself.",
                  "hi": "Do not assume every total error is caused by the chart itself."
                },
                {
                  "en": "The Data view does not replace source-level data quality checks.",
                  "hi": "The Data view does not replace source-level data quality checks."
                },
                {
                  "en": "Do not create unnecessary relationships just to connect every table.",
                  "hi": "Do not create unnecessary relationships just to connect every table."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Troubleshooting becomes easier when you separate visual, data and relationship problems.",
              "bodyHi": "Where analysts use this: Troubleshooting becomes easier when you separate visual, data and relationship problems."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Report = presentation, Data = inspection, Model = relationships.",
              "bodyHi": "Key takeaway: Report = presentation, Data = inspection, Model = relationships."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A chart displays the wrong total, and the analyst needs to find the cause.",
        "bodyHi": "Business situation: A chart displays the wrong total, and the analyst needs to find the cause."
      }
    }
  ]
};

const M24_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Power Query Editor Interface",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Power Query Editor Interface",
      "subtitle": "PREPARE DATA BEFORE IT REACHES THE MODEL",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Source",
                  "bodyEn": "Connect to a file, folder or database.",
                  "bodyHi": "Connect to a file, folder or database.",
                  "tone": "lavender"
                },
                {
                  "title": "Transform",
                  "bodyEn": "Apply repeatable cleaning steps.",
                  "bodyHi": "Apply repeatable cleaning steps.",
                  "tone": "sky"
                },
                {
                  "title": "Load",
                  "bodyEn": "Send prepared tables to the model.",
                  "bodyHi": "Send prepared tables to the model.",
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
                  "Queries pane",
                  "Lists queries; select one to inspect or rename it."
                ],
                [
                  "Data preview",
                  "Shows a preview of rows and columns for the selected step."
                ],
                [
                  "Applied Steps",
                  "Records transformations in order; later steps depend on earlier ones."
                ],
                [
                  "Formula bar / M",
                  "Shows Power Query M expressions behind many transformations."
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
                "Query",
                "Applied Step",
                "Effect"
              ],
              "rows": [
                [
                  "Sales",
                  "Source",
                  "Read workbook"
                ],
                [
                  "Sales",
                  "Promoted Headers",
                  "Use first row as names"
                ],
                [
                  "Sales",
                  "Changed Type",
                  "Set data types"
                ]
              ],
              "noteEn": "A transformation is a repeatable instruction, not a manual edit to every future file.",
              "noteHi": "A transformation is a repeatable instruction, not a manual edit to every future file."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Power Query prepares data; the model and report use its cleaned output.",
              "bodyHi": "Remember: Power Query prepares data; the model and report use its cleaned output."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power Query is the data preparation tool used in Power BI. It records transformations as repeatable steps, so the same cleaning logic can run again during refresh. You usually open it through Transform data.",
        "bodyHi": "Power Query is the data preparation tool used in Power BI. It records transformations as repeatable steps, so the same cleaning logic can run again during refresh. You usually open it through Transform data."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Power Query Editor Interface",
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
                  "Open Transform data and select the Sales query."
                ],
                [
                  "2",
                  "Inspect the preview and remove any unwanted top rows."
                ],
                [
                  "3",
                  "Promote the correct row to column headers."
                ],
                [
                  "4",
                  "Set date and amount column types deliberately."
                ],
                [
                  "5",
                  "Review Applied Steps, rename the query and Close & Apply."
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
              "bodyEn": "A transformation is a repeatable instruction, not a manual edit to every future file. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "A transformation is a repeatable instruction, not a manual edit to every future file. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "The preview is not always the complete source dataset.",
                  "hi": "The preview is not always the complete source dataset."
                },
                {
                  "en": "Removing or reordering steps can break later steps.",
                  "hi": "Removing or reordering steps can break later steps."
                },
                {
                  "en": "Avoid relying on automatic type detection without checking it.",
                  "hi": "Avoid relying on automatic type detection without checking it."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Power Query makes recurring monthly cleanup reproducible.",
              "bodyHi": "Where analysts use this: Power Query makes recurring monthly cleanup reproducible."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Power Query prepares data; the model and report use its cleaned output.",
              "bodyHi": "Key takeaway: Power Query prepares data; the model and report use its cleaned output."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An analyst receives a workbook with extra header rows and incorrect numeric types.",
        "bodyHi": "Business situation: An analyst receives a workbook with extra header rows and incorrect numeric types."
      }
    }
  ]
};

const M24_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Change Data Types",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Change Data Types",
      "subtitle": "MAKE NUMBERS, DATES AND TEXT BEHAVE CORRECTLY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Look at actual values and type icons.",
                  "bodyHi": "Look at actual values and type icons.",
                  "tone": "lavender"
                },
                {
                  "title": "Convert",
                  "bodyEn": "Choose the correct type and locale.",
                  "bodyHi": "Choose the correct type and locale.",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check errors, blanks and calculations.",
                  "bodyHi": "Check errors, blanks and calculations.",
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
                  "Whole Number",
                  "Use for integer counts, not for identifiers that may contain leading zeros."
                ],
                [
                  "Decimal Number",
                  "Use for measurements and values with fractional parts."
                ],
                [
                  "Date",
                  "Use for calendar dates, not text strings that only look like dates."
                ],
                [
                  "Locale",
                  "Affects how text such as 03/04/2026 or 1,250.50 is interpreted."
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
                "Column",
                "Raw value",
                "Correct type"
              ],
              "rows": [
                [
                  "OrderID",
                  "00125",
                  "Text"
                ],
                [
                  "OrderDate",
                  "2026-03-14",
                  "Date"
                ],
                [
                  "Sales",
                  "1250.75",
                  "Decimal"
                ]
              ],
              "noteEn": "Identifiers are labels, even when they contain digits.",
              "noteHi": "Identifiers are labels, even when they contain digits."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Choose types based on meaning, not appearance.",
              "bodyHi": "Remember: Choose types based on meaning, not appearance."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A column data type tells Power BI how to interpret values. Incorrect types cause wrong sorting, failed calculations and refresh errors. Common types include Whole Number, Decimal Number, Text, Date, Date/Time and True/False.",
        "bodyHi": "A column data type tells Power BI how to interpret values. Incorrect types cause wrong sorting, failed calculations and refresh errors. Common types include Whole Number, Decimal Number, Text, Date, Date/Time and True/False."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Change Data Types",
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
                  "Select Sales in Power Query and change its type to Decimal Number."
                ],
                [
                  "2",
                  "Check whether any values become errors; inspect separators and locale."
                ],
                [
                  "3",
                  "Change OrderDate to Date using the correct source format."
                ],
                [
                  "4",
                  "Keep OrderID as Text to preserve leading zeros."
                ],
                [
                  "5",
                  "Close & Apply and verify that sales totals and date sorting work."
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
              "bodyEn": "Identifiers are labels, even when they contain digits. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Identifiers are labels, even when they contain digits. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not convert an ID to a number just because it contains digits.",
                  "hi": "Do not convert an ID to a number just because it contains digits."
                },
                {
                  "en": "A type conversion can create errors instead of silently fixing bad values.",
                  "hi": "A type conversion can create errors instead of silently fixing bad values."
                },
                {
                  "en": "Check decimal separators and ambiguous dates with a suitable locale.",
                  "hi": "Check decimal separators and ambiguous dates with a suitable locale."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Correct types are the foundation for DAX measures and time-based reports.",
              "bodyHi": "Where analysts use this: Correct types are the foundation for DAX measures and time-based reports."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Choose types based on meaning, not appearance.",
              "bodyHi": "Key takeaway: Choose types based on meaning, not appearance."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A CSV import makes Sales a text column and sorts months alphabetically.",
        "bodyHi": "Business situation: A CSV import makes Sales a text column and sorts months alphabetically."
      }
    }
  ]
};

const M24_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Remove Rows and Columns",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Remove Rows and Columns",
      "subtitle": "KEEP ONLY RELEVANT, TRUSTWORTHY DATA",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Identify blank, summary or irrelevant records.",
                  "bodyHi": "Identify blank, summary or irrelevant records.",
                  "tone": "lavender"
                },
                {
                  "title": "Remove",
                  "bodyEn": "Choose the correct row or column operation.",
                  "bodyHi": "Choose the correct row or column operation.",
                  "tone": "sky"
                },
                {
                  "title": "Check",
                  "bodyEn": "Compare counts and important totals.",
                  "bodyHi": "Compare counts and important totals.",
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
                  "Remove Columns",
                  "Delete selected columns from the query result."
                ],
                [
                  "Choose Columns",
                  "Keep an explicit set of columns and exclude the rest."
                ],
                [
                  "Remove Top/Bottom Rows",
                  "Useful for files with title rows or footers."
                ],
                [
                  "Remove Blank Rows",
                  "Removes rows that meet the blank-row rule; inspect partial blanks separately."
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
                "Row",
                "OrderID",
                "Amount",
                "Notes"
              ],
              "rows": [
                [
                  "1",
                  "101",
                  "500",
                  "Valid"
                ],
                [
                  "2",
                  "102",
                  "750",
                  "Valid"
                ],
                [
                  "3",
                  "(blank)",
                  "(blank)",
                  "Footer"
                ]
              ],
              "noteEn": "A report footer should not become a fake sales record.",
              "noteHi": "A report footer should not become a fake sales record."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Remove with a reason, then validate row counts and totals.",
              "bodyHi": "Remember: Remove with a reason, then validate row counts and totals."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power Query can remove unnecessary rows or columns before loading data. This makes models simpler and can reduce memory use. Always understand why data is being removed so that valid business records are not lost.",
        "bodyHi": "Power Query can remove unnecessary rows or columns before loading data. This makes models simpler and can reduce memory use. Always understand why data is being removed so that valid business records are not lost."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Remove Rows and Columns",
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
                  "Remove the title row before promoting headers."
                ],
                [
                  "2",
                  "Remove fully blank rows and inspect partially blank records."
                ],
                [
                  "3",
                  "Identify the footer by its structure or label, not by a fixed row number if files change."
                ],
                [
                  "4",
                  "Keep only columns required for reporting or joins."
                ],
                [
                  "5",
                  "Check record count and total Amount against the source after cleaning."
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
              "bodyEn": "A report footer should not become a fake sales record. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "A report footer should not become a fake sales record. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Removing duplicates is different from removing blank rows.",
                  "hi": "Removing duplicates is different from removing blank rows."
                },
                {
                  "en": "Do not delete a row just because one optional field is blank.",
                  "hi": "Do not delete a row just because one optional field is blank."
                },
                {
                  "en": "A fixed Remove Bottom Rows step may fail when export layout changes.",
                  "hi": "A fixed Remove Bottom Rows step may fail when export layout changes."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Cleaning unnecessary records avoids double-counting totals and improves model clarity.",
              "bodyHi": "Where analysts use this: Cleaning unnecessary records avoids double-counting totals and improves model clarity."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Remove with a reason, then validate row counts and totals.",
              "bodyHi": "Key takeaway: Remove with a reason, then validate row counts and totals."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A monthly export includes a title row, an empty separator and a final Grand Total row.",
        "bodyHi": "Business situation: A monthly export includes a title row, an empty separator and a final Grand Total row."
      }
    }
  ]
};

const M24_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Replace Values and Handle Nulls",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Replace Values and Handle Nulls",
      "subtitle": "CLEAN MISSING OR INCONSISTENT VALUES SAFELY",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Find",
                  "bodyEn": "Locate nulls and inconsistent labels.",
                  "bodyHi": "Locate nulls and inconsistent labels.",
                  "tone": "lavender"
                },
                {
                  "title": "Decide",
                  "bodyEn": "Choose a business-safe replacement rule.",
                  "bodyHi": "Choose a business-safe replacement rule.",
                  "tone": "sky"
                },
                {
                  "title": "Verify",
                  "bodyEn": "Check how reports change after cleaning.",
                  "bodyHi": "Check how reports change after cleaning.",
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
                  "Replace Values",
                  "Change an exact value or matching text pattern according to the operation."
                ],
                [
                  "Null",
                  "Represents a missing value; it differs from zero and empty text."
                ],
                [
                  "Fill Down / Up",
                  "Copies a neighboring non-null value; safe only when the source structure supports it."
                ],
                [
                  "Data quality",
                  "Profile columns and inspect unexpected blanks or errors."
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
                "Customer",
                "Region",
                "Discount"
              ],
              "rows": [
                [
                  "Asha",
                  "North",
                  "null"
                ],
                [
                  "Rahul",
                  "NORTH",
                  "0.10"
                ],
                [
                  "Mira",
                  "South",
                  "0.00"
                ]
              ],
              "noteEn": "North and NORTH may need standardization; null Discount needs a business rule.",
              "noteHi": "North and NORTH may need standardization; null Discount needs a business rule."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Understand the meaning of missing data before replacing it.",
              "bodyHi": "Remember: Understand the meaning of missing data before replacing it."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Power Query can replace known text values and handle nulls, but null means a value is missing or unknown. It is not always correct to replace a null with zero. The choice depends on what the column means.",
        "bodyHi": "Power Query can replace known text values and handle nulls, but null means a value is missing or unknown. It is not always correct to replace a null with zero. The choice depends on what the column means."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Replace Values and Handle Nulls",
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
                  "Standardize Region labels with a controlled Replace Values step."
                ],
                [
                  "2",
                  "Inspect the Discount column to learn whether null means no discount or unknown discount."
                ],
                [
                  "3",
                  "Only replace null with 0 when the business definition confirms it."
                ],
                [
                  "4",
                  "Use a conditional column or keep null when meaning is uncertain."
                ],
                [
                  "5",
                  "Compare summaries before and after cleaning to detect unintended changes."
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
              "bodyEn": "North and NORTH may need standardization; null Discount needs a business rule. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "North and NORTH may need standardization; null Discount needs a business rule. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Null is not automatically equal to zero.",
                  "hi": "Null is not automatically equal to zero."
                },
                {
                  "en": "Replacing all blank values can hide data quality problems.",
                  "hi": "Replacing all blank values can hide data quality problems."
                },
                {
                  "en": "Case differences and extra spaces may require more than one cleanup step.",
                  "hi": "Case differences and extra spaces may require more than one cleanup step."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Accurate missing-value handling protects financial and operational KPIs.",
              "bodyHi": "Where analysts use this: Accurate missing-value handling protects financial and operational KPIs."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Understand the meaning of missing data before replacing it.",
              "bodyHi": "Key takeaway: Understand the meaning of missing data before replacing it."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales file contains Region values North and NORTH and missing discounts.",
        "bodyHi": "Business situation: A sales file contains Region values North and NORTH and missing discounts."
      }
    }
  ]
};

const M24_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Split and Merge Columns",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Split and Merge Columns",
      "subtitle": "TURN MESSY TEXT INTO USEFUL FIELDS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Find a consistent text pattern.",
                  "bodyHi": "Find a consistent text pattern.",
                  "tone": "lavender"
                },
                {
                  "title": "Split / merge",
                  "bodyEn": "Choose delimiter and column order.",
                  "bodyHi": "Choose delimiter and column order.",
                  "tone": "sky"
                },
                {
                  "title": "Validate",
                  "bodyEn": "Check rows with missing or unusual values.",
                  "bodyHi": "Check rows with missing or unusual values.",
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
                  "Split by delimiter",
                  "Separate values such as City-State using a hyphen."
                ],
                [
                  "Split by position",
                  "Useful when fields have fixed widths; fragile if the format changes."
                ],
                [
                  "Merge columns",
                  "Combine FirstName and LastName with a separator."
                ],
                [
                  "Trim and clean",
                  "Remove extra spaces or nonprinting characters before matching text."
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
                "FullName",
                "Location"
              ],
              "rows": [
                [
                  "Asha Roy",
                  "Patna-Bihar"
                ],
                [
                  "Ravi Kumar",
                  "Delhi-Delhi"
                ],
                [
                  "Mira Shah",
                  "Pune-Maharashtra"
                ]
              ],
              "noteEn": "Location can be split into City and State for regional analysis.",
              "noteHi": "Location can be split into City and State for regional analysis."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Split for analysis; merge for readable display.",
              "bodyHi": "Remember: Split for analysis; merge for readable display."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Split Column separates one field into multiple fields using a delimiter or position. Merge Columns combines several fields into one text field. These operations help make source data easier to filter, group and display.",
        "bodyHi": "Split Column separates one field into multiple fields using a delimiter or position. Merge Columns combines several fields into one text field. These operations help make source data easier to filter, group and display."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Split and Merge Columns",
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
                  "Select Location and choose Split Column by Delimiter."
                ],
                [
                  "2",
                  "Set the hyphen delimiter and inspect the resulting City and State columns."
                ],
                [
                  "3",
                  "Trim spaces so city names group correctly."
                ],
                [
                  "4",
                  "For display, merge FirstName and LastName with a single space if needed."
                ],
                [
                  "5",
                  "Check rows containing extra hyphens or missing components."
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
              "bodyEn": "Location can be split into City and State for regional analysis. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Location can be split into City and State for regional analysis. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not split on a delimiter that can appear inside legitimate values without a rule.",
                  "hi": "Do not split on a delimiter that can appear inside legitimate values without a rule."
                },
                {
                  "en": "Merged text can lose useful structure; keep source fields when needed.",
                  "hi": "Merged text can lose useful structure; keep source fields when needed."
                },
                {
                  "en": "Check how null values affect merged text.",
                  "hi": "Check how null values affect merged text."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Clean location and name fields make filters and customer summaries more reliable.",
              "bodyHi": "Where analysts use this: Clean location and name fields make filters and customer summaries more reliable."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Split for analysis; merge for readable display.",
              "bodyHi": "Key takeaway: Split for analysis; merge for readable display."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A customer export stores city and state in one Location field.",
        "bodyHi": "Business situation: A customer export stores city and state in one Location field."
      }
    }
  ]
};

const M24_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Pivot and Unpivot Columns",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Pivot and Unpivot Columns",
      "subtitle": "CHANGE BETWEEN WIDE AND LONG TABLES",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Wide table",
                  "bodyEn": "Jan, Feb and Mar are separate columns.",
                  "bodyHi": "Jan, Feb and Mar are separate columns.",
                  "tone": "lavender"
                },
                {
                  "title": "Unpivot",
                  "bodyEn": "Turn month headings into row values.",
                  "bodyHi": "Turn month headings into row values.",
                  "tone": "sky"
                },
                {
                  "title": "Long table",
                  "bodyEn": "One Month column and one Sales column.",
                  "bodyHi": "One Month column and one Sales column.",
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
                  "Unpivot Other Columns",
                  "Keeps identifier columns and unpivots the rest; often robust for new months."
                ],
                [
                  "Attribute column",
                  "Stores the original column names after unpivoting."
                ],
                [
                  "Value column",
                  "Stores the numbers that were in those columns."
                ],
                [
                  "Pivot aggregation",
                  "If multiple rows map to one new cell, choose an appropriate aggregation."
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
                "Store",
                "Jan",
                "Feb",
                "Mar"
              ],
              "rows": [
                [
                  "A",
                  "100",
                  "120",
                  "140"
                ],
                [
                  "B",
                  "80",
                  "90",
                  "110"
                ]
              ],
              "noteEn": "Wide source: months are separate columns.",
              "noteHi": "Wide source: months are separate columns."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Unpivot turns column headings into data values.",
              "bodyHi": "Remember: Unpivot turns column headings into data values."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Unpivot converts multiple value columns into attribute-value rows. Pivot does the reverse by turning distinct attribute values into columns. Long tables are often easier to filter, chart and extend when new periods appear.",
        "bodyHi": "Unpivot converts multiple value columns into attribute-value rows. Pivot does the reverse by turning distinct attribute values into columns. Long tables are often easier to filter, chart and extend when new periods appear."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Pivot and Unpivot Columns",
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
                  "Select Store as the identifier column."
                ],
                [
                  "2",
                  "Choose Unpivot Other Columns so month columns become rows."
                ],
                [
                  "3",
                  "Rename Attribute to Month and Value to Sales."
                ],
                [
                  "4",
                  "Set Month and Sales to suitable data types."
                ],
                [
                  "5",
                  "Verify that Store A now has three records: Jan 100, Feb 120, Mar 140."
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
              "bodyEn": "Wide source: months are separate columns. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Wide source: months are separate columns. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Pivot and Unpivot are opposite reshaping operations.",
                  "hi": "Pivot and Unpivot are opposite reshaping operations."
                },
                {
                  "en": "A pivot may need an aggregation if there are duplicate combinations.",
                  "hi": "A pivot may need an aggregation if there are duplicate combinations."
                },
                {
                  "en": "Check that adding a new month does not break a fixed-column transformation.",
                  "hi": "Check that adding a new month does not break a fixed-column transformation."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Long-format sales data is easier to use in time-series visuals and slicers. Before and after: Before: Store A | Jan 100 | Feb 120 | Mar 140. After: A | Jan | 100; A | Feb | 120; A | Mar | 140. The number of rows increases, but the sales amounts do not change.",
              "bodyHi": "Where analysts use this: Long-format sales data is easier to use in time-series visuals and slicers. Before and after: Before: Store A | Jan 100 | Feb 120 | Mar 140. After: A | Jan | 100; A | Feb | 120; A | Mar | 140. The number of rows increases, but the sales amounts do not change."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Unpivot turns column headings into data values.",
              "bodyHi": "Key takeaway: Unpivot turns column headings into data values."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A monthly spreadsheet adds a new month column every time a new file arrives.",
        "bodyHi": "Business situation: A monthly spreadsheet adds a new month column every time a new file arrives."
      }
    }
  ]
};

const M24_T07_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Append Queries",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 07",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Append Queries",
      "subtitle": "STACK TABLES WITH MATCHING MEANING",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "January",
                  "bodyEn": "Sales rows for one month.",
                  "bodyHi": "Sales rows for one month.",
                  "tone": "lavender"
                },
                {
                  "title": "Append",
                  "bodyEn": "Stack rows under shared columns.",
                  "bodyHi": "Stack rows under shared columns.",
                  "tone": "sky"
                },
                {
                  "title": "Combined",
                  "bodyEn": "One sales table for all months.",
                  "bodyHi": "One sales table for all months.",
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
                  "Append as New",
                  "Creates a new query while preserving the originals."
                ],
                [
                  "Column matching",
                  "Power Query aligns columns by name, not simply by visual position."
                ],
                [
                  "Missing columns",
                  "A source missing a column can produce null values in the combined table."
                ],
                [
                  "Duplicate rows",
                  "Append does not automatically remove duplicate transactions."
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
                "Source",
                "OrderID",
                "Amount"
              ],
              "rows": [
                [
                  "Jan",
                  "101",
                  "500"
                ],
                [
                  "Jan",
                  "102",
                  "700"
                ],
                [
                  "Feb",
                  "103",
                  "650"
                ]
              ],
              "noteEn": "After append, records from both months appear in one table.",
              "noteHi": "After append, records from both months appear in one table."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Append = more rows; the source tables should represent the same kind of records.",
              "bodyHi": "Remember: Append = more rows; the source tables should represent the same kind of records."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Append combines rows from two or more queries into one longer table. It is useful when separate files contain the same kind of records, such as January and February sales. Append does not match rows using a key.",
        "bodyHi": "Append combines rows from two or more queries into one longer table. It is useful when separate files contain the same kind of records, such as January and February sales. Append does not match rows using a key."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 07",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Append Queries",
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
                  "Check that OrderID, Date and Amount have consistent names and types."
                ],
                [
                  "2",
                  "Use Append Queries as New and choose the monthly queries."
                ],
                [
                  "3",
                  "Inspect the combined row count: it should equal the sum of source rows."
                ],
                [
                  "4",
                  "Check for overlapping files or repeated transactions."
                ],
                [
                  "5",
                  "Load the combined query and use a date column for reporting."
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
              "bodyEn": "After append, records from both months appear in one table. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "After append, records from both months appear in one table. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Append stacks rows; Merge adds columns based on matching keys.",
                  "hi": "Append stacks rows; Merge adds columns based on matching keys."
                },
                {
                  "en": "Different column names may create unexpected null columns.",
                  "hi": "Different column names may create unexpected null columns."
                },
                {
                  "en": "Do not remove duplicates without a clear transaction identity rule.",
                  "hi": "Do not remove duplicates without a clear transaction identity rule."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Appending monthly exports creates a single history for trend analysis.",
              "bodyHi": "Where analysts use this: Appending monthly exports creates a single history for trend analysis."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Append = more rows; the source tables should represent the same kind of records.",
              "bodyHi": "Key takeaway: Append = more rows; the source tables should represent the same kind of records."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A team receives separate monthly sales queries with the same column meanings.",
        "bodyHi": "Business situation: A team receives separate monthly sales queries with the same column meanings."
      }
    }
  ]
};

const M24_T08_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Merge Queries",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 08",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Merge Queries",
      "subtitle": "LOOK UP RELATED FIELDS FROM ANOTHER TABLE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Orders",
                  "bodyEn": "Contains CustomerID and Amount.",
                  "bodyHi": "Contains CustomerID and Amount.",
                  "tone": "lavender"
                },
                {
                  "title": "Merge",
                  "bodyEn": "Match CustomerID to Customers.",
                  "bodyHi": "Match CustomerID to Customers.",
                  "tone": "sky"
                },
                {
                  "title": "Expand",
                  "bodyEn": "Add CustomerName to Orders.",
                  "bodyHi": "Add CustomerName to Orders.",
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
                  "Join key",
                  "A column or combination of columns used to match records."
                ],
                [
                  "Left Outer join",
                  "Keeps all rows from the first table and matching rows from the second."
                ],
                [
                  "Expand",
                  "Choose which columns from the nested result to add."
                ],
                [
                  "Match quality",
                  "Key type, spaces, case and duplicate keys affect results."
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
                "Orders.CustomerID",
                "Amount",
                "Customers.Name"
              ],
              "rows": [
                [
                  "C01",
                  "500",
                  "Asha"
                ],
                [
                  "C02",
                  "700",
                  "Ravi"
                ],
                [
                  "C99",
                  "300",
                  "(no match)"
                ]
              ],
              "noteEn": "A left merge keeps C99, but the missing customer name must be investigated.",
              "noteHi": "A left merge keeps C99, but the missing customer name must be investigated."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Merge = match by key and bring in columns.",
              "bodyHi": "Remember: Merge = match by key and bring in columns."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Merge joins two queries using one or more matching columns. For example, an Orders query can look up customer names from a Customers query. The join type controls which records are kept.",
        "bodyHi": "Merge joins two queries using one or more matching columns. For example, an Orders query can look up customer names from a Customers query. The join type controls which records are kept."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 08",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Merge Queries",
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
                  "Check CustomerID data types and formatting in both queries."
                ],
                [
                  "2",
                  "Select Orders and choose Merge Queries with Customers."
                ],
                [
                  "3",
                  "Choose CustomerID on both sides and use a Left Outer join."
                ],
                [
                  "4",
                  "Expand only the CustomerName field from the merged column."
                ],
                [
                  "5",
                  "Count unmatched keys and confirm that Orders row count has not unexpectedly grown."
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
              "bodyEn": "A left merge keeps C99, but the missing customer name must be investigated. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "A left merge keeps C99, but the missing customer name must be investigated. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Duplicate keys on the lookup side can multiply rows after expansion.",
                  "hi": "Duplicate keys on the lookup side can multiply rows after expansion."
                },
                {
                  "en": "Merge is different from Append; it adds related columns.",
                  "hi": "Merge is different from Append; it adds related columns."
                },
                {
                  "en": "Unmatched keys should be reviewed, not silently deleted.",
                  "hi": "Unmatched keys should be reviewed, not silently deleted."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Merge is useful for enrichment during data preparation, but relationships may be preferable in the model. Choosing between Merge and model relationships: Merge creates a combined table during preparation. A model relationship keeps tables separate and lets filters travel between them. Prefer the approach that supports clear grain, maintainability and correct totals.",
              "bodyHi": "Where analysts use this: Merge is useful for enrichment during data preparation, but relationships may be preferable in the model. Choosing between Merge and model relationships: Merge creates a combined table during preparation. A model relationship keeps tables separate and lets filters travel between them. Prefer the approach that supports clear grain, maintainability and correct totals."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Merge = match by key and bring in columns.",
              "bodyHi": "Key takeaway: Merge = match by key and bring in columns."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: An Orders table contains customer IDs but not customer names.",
        "bodyHi": "Business situation: An Orders table contains customer IDs but not customer names."
      }
    }
  ]
};

const M24_T09_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M24",
  "moduleTitle": "Power Query and Data Transformation",
  "topic": "Applied Steps and Refresh",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 09",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Applied Steps and Refresh",
      "subtitle": "MAKE CLEANING REPEATABLE",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Read source",
                  "bodyEn": "Connect to the latest source data.",
                  "bodyHi": "Connect to the latest source data.",
                  "tone": "lavender"
                },
                {
                  "title": "Replay steps",
                  "bodyEn": "Apply the saved transformation sequence.",
                  "bodyHi": "Apply the saved transformation sequence.",
                  "tone": "sky"
                },
                {
                  "title": "Refresh model",
                  "bodyEn": "Load the updated query result.",
                  "bodyHi": "Load the updated query result.",
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
                  "Step order",
                  "A later step may depend on columns created or renamed earlier."
                ],
                [
                  "Query folding",
                  "Some operations can be pushed back to supported sources for efficiency."
                ],
                [
                  "Refresh error",
                  "Can occur when files move, columns change or credentials expire."
                ],
                [
                  "Close & Apply",
                  "Loads the current query result into the semantic model."
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
                "Step",
                "Action",
                "Possible risk"
              ],
              "rows": [
                [
                  "Source",
                  "Read sales file",
                  "Path changed"
                ],
                [
                  "Changed Type",
                  "Convert Amount",
                  "Invalid text"
                ],
                [
                  "Removed Columns",
                  "Drop Notes",
                  "Column renamed"
                ]
              ],
              "noteEn": "Steps are reusable instructions, but they still depend on source structure.",
              "noteHi": "Steps are reusable instructions, but they still depend on source structure."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Applied Steps are the recipe; refresh runs the recipe again.",
              "bodyHi": "Remember: Applied Steps are the recipe; refresh runs the recipe again."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Every Power Query transformation becomes an Applied Step. During refresh, Power Query runs the steps again against the source. This is why stable file structures, meaningful step names and careful error handling matter.",
        "bodyHi": "Every Power Query transformation becomes an Applied Step. During refresh, Power Query runs the steps again against the source. This is why stable file structures, meaningful step names and careful error handling matter."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M24 | TOPIC 09",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Applied Steps and Refresh",
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
                  "Keep the source location and file naming strategy consistent."
                ],
                [
                  "2",
                  "Review Applied Steps and give important steps descriptive names."
                ],
                [
                  "3",
                  "Refresh the preview and inspect warnings or errors."
                ],
                [
                  "4",
                  "Close & Apply, then refresh the model and verify totals."
                ],
                [
                  "5",
                  "When refresh fails, locate the first failing step and fix its cause."
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
              "bodyEn": "Steps are reusable instructions, but they still depend on source structure. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Steps are reusable instructions, but they still depend on source structure. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not delete a failing step without understanding its purpose.",
                  "hi": "Do not delete a failing step without understanding its purpose."
                },
                {
                  "en": "A successful refresh does not guarantee the source data is complete.",
                  "hi": "A successful refresh does not guarantee the source data is complete."
                },
                {
                  "en": "Check whether folding matters for large database sources.",
                  "hi": "Check whether folding matters for large database sources."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Repeatable cleaning reduces manual work and makes reports easier to maintain.",
              "bodyHi": "Where analysts use this: Repeatable cleaning reduces manual work and makes reports easier to maintain."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Applied Steps are the recipe; refresh runs the recipe again.",
              "bodyHi": "Key takeaway: Applied Steps are the recipe; refresh runs the recipe again."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A monthly sales workbook is replaced with a newer file using the same schema.",
        "bodyHi": "Business situation: A monthly sales workbook is replaced with a newer file using the same schema."
      }
    }
  ]
};

const M25_T01_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Why Data Models Matter",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 01",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Why Data Models Matter",
      "subtitle": "CONNECT TABLES WITHOUT BREAKING TOTALS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Source tables",
                  "bodyEn": "Orders, Customers, Products and Dates.",
                  "bodyHi": "Orders, Customers, Products and Dates.",
                  "tone": "lavender"
                },
                {
                  "title": "Model",
                  "bodyEn": "Define keys, relationships and grain.",
                  "bodyHi": "Define keys, relationships and grain.",
                  "tone": "sky"
                },
                {
                  "title": "Reports",
                  "bodyEn": "Calculate consistent business metrics.",
                  "bodyHi": "Calculate consistent business metrics.",
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
                  "Grain",
                  "What one row represents, such as one order line or one customer."
                ],
                [
                  "Relationship",
                  "Connects matching key values across tables."
                ],
                [
                  "Filter path",
                  "Controls how a selection in one table affects related records."
                ],
                [
                  "Measure",
                  "A calculation that responds to filters in a report."
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
                "Table",
                "One row represents",
                "Typical key"
              ],
              "rows": [
                [
                  "Sales",
                  "One order line",
                  "OrderLineID"
                ],
                [
                  "Customers",
                  "One customer",
                  "CustomerID"
                ],
                [
                  "Products",
                  "One product",
                  "ProductID"
                ]
              ],
              "noteEn": "Different tables describe different business entities.",
              "noteHi": "Different tables describe different business entities."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Good models start with grain, keys and clear relationships.",
              "bodyHi": "Remember: Good models start with grain, keys and clear relationships."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A data model defines how tables, relationships and calculations work together. A good model makes reports accurate, easier to understand and faster to maintain. A poor model can create duplicate totals or confusing filters even when every chart looks correct.",
        "bodyHi": "A data model defines how tables, relationships and calculations work together. A good model makes reports accurate, easier to understand and faster to maintain. A poor model can create duplicate totals or confusing filters even when every chart looks correct."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 01",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Why Data Models Matter",
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
                  "Identify the grain of the Sales table before creating relationships."
                ],
                [
                  "2",
                  "Check that each dimension table has a unique key."
                ],
                [
                  "3",
                  "Relate Sales customer and product keys to their matching dimension keys."
                ],
                [
                  "4",
                  "Create one Total Sales measure rather than repeating calculations in every chart."
                ],
                [
                  "5",
                  "Test totals with and without slicers and investigate unexpected changes."
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
                  "en": "SalesAmount must be a numeric field in the Sales fact table.",
                  "hi": "SalesAmount must be a numeric field in the Sales fact table."
                },
                {
                  "en": "A correctly designed relationship allows Customer and Product filters to affect the same measure.",
                  "hi": "A correctly designed relationship allows Customer and Product filters to affect the same measure."
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
                  "en": "Do not join tables only because their column names look similar.",
                  "hi": "Do not join tables only because their column names look similar."
                },
                {
                  "en": "Avoid ambiguous filter paths and unnecessary bidirectional relationships.",
                  "hi": "Avoid ambiguous filter paths and unnecessary bidirectional relationships."
                },
                {
                  "en": "Check for duplicate keys and mismatched data types.",
                  "hi": "Check for duplicate keys and mismatched data types."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Consistent models let many report pages reuse the same trusted definitions.",
              "bodyHi": "Where analysts use this: Consistent models let many report pages reuse the same trusted definitions."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Good models start with grain, keys and clear relationships.",
              "bodyHi": "Key takeaway: Good models start with grain, keys and clear relationships."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A report shows different sales totals when the user filters by Customer and by Product.",
        "bodyHi": "Business situation: A report shows different sales totals when the user filters by Customer and by Product."
      }
    }
  ]
};

const M25_T02_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Fact Tables and Dimension Tables",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 02",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Fact Tables and Dimension Tables",
      "subtitle": "SEPARATE BUSINESS EVENTS FROM DESCRIPTIONS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Fact Sales",
                  "bodyEn": "Order lines and amounts.",
                  "bodyHi": "Order lines and amounts.",
                  "tone": "lavender"
                },
                {
                  "title": "Dimension keys",
                  "bodyEn": "CustomerID, ProductID and DateKey.",
                  "bodyHi": "CustomerID, ProductID and DateKey.",
                  "tone": "sky"
                },
                {
                  "title": "Dimensions",
                  "bodyEn": "Names, categories, cities and dates.",
                  "bodyHi": "Names, categories, cities and dates.",
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
                  "Fact table",
                  "Often contains many rows, numeric measures and foreign keys."
                ],
                [
                  "Dimension table",
                  "Usually contains one row per unique entity and descriptive attributes."
                ],
                [
                  "Grain",
                  "Define it before building measures: one sale, one order or one order line?"
                ],
                [
                  "Conformed dimension",
                  "A shared dimension used consistently by multiple fact tables."
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
                "Table",
                "Key / fields",
                "Role"
              ],
              "rows": [
                [
                  "FactSales",
                  "ProductID, Amount",
                  "Events"
                ],
                [
                  "DimProduct",
                  "ProductID, Category",
                  "Description"
                ],
                [
                  "DimDate",
                  "Date, Month",
                  "Calendar"
                ]
              ],
              "noteEn": "ProductID in the fact table connects each sale to product details.",
              "noteHi": "ProductID in the fact table connects each sale to product details."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Facts answer how much; dimensions answer who, what, where and when.",
              "bodyHi": "Remember: Facts answer how much; dimensions answer who, what, where and when."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A fact table records measurable events such as sales transactions. A dimension table describes the people, products, places or dates connected to those events. This separation makes filtering and aggregation more reliable.",
        "bodyHi": "A fact table records measurable events such as sales transactions. A dimension table describes the people, products, places or dates connected to those events. This separation makes filtering and aggregation more reliable."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 02",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Fact Tables and Dimension Tables",
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
                  "Create FactSales with one row per order line."
                ],
                [
                  "2",
                  "Create DimProduct with one unique row per ProductID."
                ],
                [
                  "3",
                  "Create DimDate with one row per calendar date."
                ],
                [
                  "4",
                  "Relate fact foreign keys to dimension primary keys."
                ],
                [
                  "5",
                  "Use Category and Month from dimensions to filter the sales measure."
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
              "bodyEn": "ProductID in the fact table connects each sale to product details. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "ProductID in the fact table connects each sale to product details. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not put a repeating product name in the fact table when a stable dimension exists.",
                  "hi": "Do not put a repeating product name in the fact table when a stable dimension exists."
                },
                {
                  "en": "A dimension with duplicate ProductID values can break a one-to-many relationship.",
                  "hi": "A dimension with duplicate ProductID values can break a one-to-many relationship."
                },
                {
                  "en": "Do not mix two different grains in one fact table without a clear design.",
                  "hi": "Do not mix two different grains in one fact table without a clear design."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Star schemas help sales, inventory and service reports stay consistent.",
              "bodyHi": "Where analysts use this: Star schemas help sales, inventory and service reports stay consistent."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Facts answer how much; dimensions answer who, what, where and when.",
              "bodyHi": "Key takeaway: Facts answer how much; dimensions answer who, what, where and when."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A sales dashboard must compare revenue by product category and by month.",
        "bodyHi": "Business situation: A sales dashboard must compare revenue by product category and by month."
      }
    }
  ]
};

const M25_T03_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Relationships and Cardinality",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 03",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Relationships and Cardinality",
      "subtitle": "UNDERSTAND HOW TABLE ROWS MATCH",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect keys",
                  "bodyEn": "Check duplicates and blanks.",
                  "bodyHi": "Check duplicates and blanks.",
                  "tone": "lavender"
                },
                {
                  "title": "Choose cardinality",
                  "bodyEn": "Define one side and many side.",
                  "bodyHi": "Define one side and many side.",
                  "tone": "sky"
                },
                {
                  "title": "Test filters",
                  "bodyEn": "Confirm results after a slicer selection.",
                  "bodyHi": "Confirm results after a slicer selection.",
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
                  "One-to-many",
                  "One dimension key can match many fact rows."
                ],
                [
                  "Many-to-many",
                  "Both sides can contain repeated keys; use cautiously."
                ],
                [
                  "Active relationship",
                  "Usually the default relationship used for filtering."
                ],
                [
                  "Cross-filter direction",
                  "Determines how filters can propagate between tables."
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
                "Customers",
                "CustomerID",
                "Orders count"
              ],
              "rows": [
                [
                  "Asha",
                  "C01",
                  "3"
                ],
                [
                  "Ravi",
                  "C02",
                  "2"
                ],
                [
                  "Mira",
                  "C03",
                  "1"
                ]
              ],
              "noteEn": "One Customers row may match several Orders rows.",
              "noteHi": "One Customers row may match several Orders rows."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: Cardinality comes from data uniqueness, not from preference.",
              "bodyHi": "Remember: Cardinality comes from data uniqueness, not from preference."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Cardinality describes how many rows can match across two related tables. Common Power BI relationships include one-to-many, many-to-one, one-to-one and many-to-many. The correct choice depends on actual key uniqueness.",
        "bodyHi": "Cardinality describes how many rows can match across two related tables. Common Power BI relationships include one-to-many, many-to-one, one-to-one and many-to-many. The correct choice depends on actual key uniqueness."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 03",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Relationships and Cardinality",
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
                  "Profile both CustomerID columns and check their data types."
                ],
                [
                  "2",
                  "Confirm Customers has one row per CustomerID."
                ],
                [
                  "3",
                  "Create a Customers (1) to Orders (*) relationship."
                ],
                [
                  "4",
                  "Use single-direction filtering from Customers to Orders in a simple star schema."
                ],
                [
                  "5",
                  "Select one customer and check that only that customer’s orders remain."
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
              "bodyEn": "One Customers row may match several Orders rows. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "One Customers row may match several Orders rows. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not force one-to-one when either side has duplicates.",
                  "hi": "Do not force one-to-one when either side has duplicates."
                },
                {
                  "en": "Many-to-many can produce surprising totals if grain is unclear.",
                  "hi": "Many-to-many can produce surprising totals if grain is unclear."
                },
                {
                  "en": "Bidirectional filtering can introduce ambiguous paths.",
                  "hi": "Bidirectional filtering can introduce ambiguous paths."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Cardinality is essential for correct customer, product and date slicers.",
              "bodyHi": "Where analysts use this: Cardinality is essential for correct customer, product and date slicers."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: Cardinality comes from data uniqueness, not from preference.",
              "bodyHi": "Key takeaway: Cardinality comes from data uniqueness, not from preference."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: Customers has unique CustomerID values, but Orders repeats CustomerID for each purchase.",
        "bodyHi": "Business situation: Customers has unique CustomerID values, but Orders repeats CustomerID for each purchase."
      }
    }
  ]
};

const M25_T04_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "One-to-Many and Many-to-One Relationships",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 04",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "One-to-Many and Many-to-One Relationships",
      "subtitle": "READ BOTH DIRECTIONS OF THE SAME LINK",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Customers (1)",
                  "bodyEn": "Unique CustomerID values.",
                  "bodyHi": "Unique CustomerID values.",
                  "tone": "lavender"
                },
                {
                  "title": "Relationship",
                  "bodyEn": "Match CustomerID.",
                  "bodyHi": "Match CustomerID.",
                  "tone": "sky"
                },
                {
                  "title": "Orders (*)",
                  "bodyEn": "Many orders per customer.",
                  "bodyHi": "Many orders per customer.",
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
                  "One side",
                  "Contains unique keys, often a dimension table."
                ],
                [
                  "Many side",
                  "Contains repeated keys, often a fact table."
                ],
                [
                  "Filter direction",
                  "Typically from dimension to fact for a star schema."
                ],
                [
                  "Unmatched keys",
                  "Fact records with no matching dimension need investigation."
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
                "CustomerID",
                "Customer name",
                "Orders"
              ],
              "rows": [
                [
                  "C01",
                  "Asha",
                  "101, 102"
                ],
                [
                  "C02",
                  "Ravi",
                  "103"
                ],
                [
                  "C03",
                  "Mira",
                  "104, 105"
                ]
              ],
              "noteEn": "The Customers table has one row per ID; the Orders table can repeat it.",
              "noteHi": "The Customers table has one row per ID; the Orders table can repeat it."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: One customer, many orders; the relationship allows customer filters to reach order rows.",
              "bodyHi": "Remember: One customer, many orders; the relationship allows customer filters to reach order rows."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "One-to-many and many-to-one describe the same relationship from opposite table perspectives. A unique Customers table can connect to many Orders rows. In Power BI, the 1 and * symbols show the sides of the relationship.",
        "bodyHi": "One-to-many and many-to-one describe the same relationship from opposite table perspectives. A unique Customers table can connect to many Orders rows. In Power BI, the 1 and * symbols show the sides of the relationship."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 04",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "One-to-Many and Many-to-One Relationships",
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
                  "Make CustomerID unique in Customers, and check for blanks."
                ],
                [
                  "2",
                  "Keep one order per row in Orders with CustomerID as a foreign key."
                ],
                [
                  "3",
                  "Create the relationship with Customers on the 1 side."
                ],
                [
                  "4",
                  "Use CustomerName from Customers in a slicer."
                ],
                [
                  "5",
                  "Verify that the Sales measure sums only Asha’s orders."
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
              "bodyEn": "The Customers table has one row per ID; the Orders table can repeat it. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "The Customers table has one row per ID; the Orders table can repeat it. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "The 1 side must be unique under the chosen relationship.",
                  "hi": "The 1 side must be unique under the chosen relationship."
                },
                {
                  "en": "Do not relate tables using names if stable IDs are available.",
                  "hi": "Do not relate tables using names if stable IDs are available."
                },
                {
                  "en": "Check blank or unmatched keys before trusting category totals.",
                  "hi": "Check blank or unmatched keys before trusting category totals."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Customer-to-orders, product-to-sales and date-to-transactions are common examples.",
              "bodyHi": "Where analysts use this: Customer-to-orders, product-to-sales and date-to-transactions are common examples."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: One customer, many orders; the relationship allows customer filters to reach order rows.",
              "bodyHi": "Key takeaway: One customer, many orders; the relationship allows customer filters to reach order rows."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager selects Asha in a slicer and expects to see only Asha’s order revenue.",
        "bodyHi": "Business situation: A manager selects Asha in a slicer and expects to see only Asha’s order revenue."
      }
    }
  ]
};

const M25_T05_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Star Schema Design",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 05",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Star Schema Design",
      "subtitle": "BUILD A CLEAN MODEL AROUND FACTS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "DimCustomer",
                  "bodyEn": "Who purchased?",
                  "bodyHi": "Who purchased?",
                  "tone": "lavender"
                },
                {
                  "title": "FactSales",
                  "bodyEn": "What was sold and for how much?",
                  "bodyHi": "What was sold and for how much?",
                  "tone": "sky"
                },
                {
                  "title": "DimDate / Product",
                  "bodyEn": "When and what category?",
                  "bodyHi": "When and what category?",
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
                  "Fact grain",
                  "Define whether one row means one transaction or one line item."
                ],
                [
                  "Dimension keys",
                  "Keep the dimension-side key unique and stable."
                ],
                [
                  "Single-direction filters",
                  "Often the clearest default from dimensions to facts."
                ],
                [
                  "Measures",
                  "Put business calculations in the model rather than duplicating visual logic."
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
                "Table",
                "Key",
                "Example field"
              ],
              "rows": [
                [
                  "FactSales",
                  "OrderLineID",
                  "SalesAmount"
                ],
                [
                  "DimCustomer",
                  "CustomerID",
                  "Region"
                ],
                [
                  "DimProduct",
                  "ProductID",
                  "Category"
                ],
                [
                  "DimDate",
                  "Date",
                  "MonthName"
                ]
              ],
              "noteEn": "FactSales links to dimensions through their keys.",
              "noteHi": "FactSales links to dimensions through their keys."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A clear star schema makes filters predictable and calculations trustworthy.",
              "bodyHi": "Remember: A clear star schema makes filters predictable and calculations trustworthy."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A star schema places a central fact table in the middle and dimension tables around it. Each dimension usually connects directly to the fact table through a one-to-many relationship. This design reduces ambiguity and supports reusable measures.",
        "bodyHi": "A star schema places a central fact table in the middle and dimension tables around it. Each dimension usually connects directly to the fact table through a one-to-many relationship. This design reduces ambiguity and supports reusable measures."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 05",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Star Schema Design",
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
                  "Set the grain of FactSales to one order line."
                ],
                [
                  "2",
                  "Create DimCustomer, DimProduct and DimDate with unique keys."
                ],
                [
                  "3",
                  "Create one-to-many relationships from dimensions to FactSales."
                ],
                [
                  "4",
                  "Create Total Sales and Order Count measures."
                ],
                [
                  "5",
                  "Check that slicers from all three dimensions produce consistent totals."
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
              "code": "Total Sales = SUM(FactSales[SalesAmount])"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "The measure reads amounts from the central fact table.",
                  "hi": "The measure reads amounts from the central fact table."
                },
                {
                  "en": "Dimension filters narrow the fact rows before the sum is calculated.",
                  "hi": "Dimension filters narrow the fact rows before the sum is calculated."
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
                  "en": "Avoid connecting dimensions to each other without a clear modeling reason.",
                  "hi": "Avoid connecting dimensions to each other without a clear modeling reason."
                },
                {
                  "en": "Do not create circular or ambiguous filter paths.",
                  "hi": "Do not create circular or ambiguous filter paths."
                },
                {
                  "en": "Keep labels in dimensions and numeric events in facts where practical.",
                  "hi": "Keep labels in dimensions and numeric events in facts where practical."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Star schemas are widely used for executive reporting and reusable semantic models. Visual star schema: Think of FactSales as the center. DimCustomer, DimProduct and DimDate connect directly to it. Each dimension filters the central fact table; the fact table stores the measurable events.",
              "bodyHi": "Where analysts use this: Star schemas are widely used for executive reporting and reusable semantic models. Visual star schema: Think of FactSales as the center. DimCustomer, DimProduct and DimDate connect directly to it. Each dimension filters the central fact table; the fact table stores the measurable events."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A clear star schema makes filters predictable and calculations trustworthy.",
              "bodyHi": "Key takeaway: A clear star schema makes filters predictable and calculations trustworthy."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A retail dashboard needs sales by customer region, product category and month.",
        "bodyHi": "Business situation: A retail dashboard needs sales by customer region, product category and month."
      }
    }
  ]
};

const M25_T06_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Date Tables",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 06",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Date Tables",
      "subtitle": "GIVE EVERY REPORT A RELIABLE CALENDAR",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Calendar dates",
                  "bodyEn": "One continuous row per day.",
                  "bodyHi": "One continuous row per day.",
                  "tone": "lavender"
                },
                {
                  "title": "Date attributes",
                  "bodyEn": "Year, month number, month name, quarter.",
                  "bodyHi": "Year, month number, month name, quarter.",
                  "tone": "sky"
                },
                {
                  "title": "Relationships",
                  "bodyEn": "Connect Date to transaction dates.",
                  "bodyHi": "Connect Date to transaction dates.",
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
                  "Unique dates",
                  "The Date column should have one row per day with no duplicates or blanks."
                ],
                [
                  "Continuous range",
                  "Cover the dates needed for the analysis and calculations."
                ],
                [
                  "Mark as date table",
                  "When appropriate, designate a valid date column in Power BI."
                ],
                [
                  "Sort by column",
                  "Sort MonthName using MonthNumber, not alphabetically."
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
                "Date",
                "MonthName",
                "MonthNo",
                "Year"
              ],
              "rows": [
                [
                  "2026-01-01",
                  "January",
                  "1",
                  "2026"
                ],
                [
                  "2026-01-02",
                  "January",
                  "1",
                  "2026"
                ],
                [
                  "2026-02-01",
                  "February",
                  "2",
                  "2026"
                ]
              ],
              "noteEn": "Each date appears once, even if there are no sales on that day.",
              "noteHi": "Each date appears once, even if there are no sales on that day."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A date table is the shared time language of the model.",
              "bodyHi": "Remember: A date table is the shared time language of the model."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "A date table contains one row per date and useful calendar attributes. It supports consistent filtering, month sorting and many time-intelligence calculations. A proper date table is more reliable than relying only on dates scattered across transaction tables.",
        "bodyHi": "A date table contains one row per date and useful calendar attributes. It supports consistent filtering, month sorting and many time-intelligence calculations. A proper date table is more reliable than relying only on dates scattered across transaction tables."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 06",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Date Tables",
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
                  "Create a calendar that covers the reporting period."
                ],
                [
                  "2",
                  "Add Year, MonthNumber, MonthName and Quarter columns."
                ],
                [
                  "3",
                  "Check that Date values are unique, complete and of Date type."
                ],
                [
                  "4",
                  "Relate the calendar to FactSales[OrderDate]."
                ],
                [
                  "5",
                  "Use calendar fields in visuals and validate chronological month sorting."
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
              "code": "Calendar = CALENDAR(DATE(2025,1,1), DATE(2026,12,31))"
            },
            {
              "type": "bullets",
              "tone": "lavender",
              "items": [
                {
                  "en": "CALENDAR creates a date column from the chosen start through end date.",
                  "hi": "CALENDAR creates a date column from the chosen start through end date."
                },
                {
                  "en": "The displayed dates are illustrative; a production model should use a suitable dynamic or maintained date range.",
                  "hi": "The displayed dates are illustrative; a production model should use a suitable dynamic or maintained date range."
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
                  "en": "Do not use text month names alone for chronological sorting.",
                  "hi": "Do not use text month names alone for chronological sorting."
                },
                {
                  "en": "An incomplete calendar can break comparisons.",
                  "hi": "An incomplete calendar can break comparisons."
                },
                {
                  "en": "Multiple transaction dates may need inactive relationships or separate date roles.",
                  "hi": "Multiple transaction dates may need inactive relationships or separate date roles."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: A consistent calendar enables monthly, quarterly and annual reporting.",
              "bodyHi": "Where analysts use this: A consistent calendar enables monthly, quarterly and annual reporting."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A date table is the shared time language of the model.",
              "bodyHi": "Key takeaway: A date table is the shared time language of the model."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A manager wants monthly revenue and year-over-year comparisons.",
        "bodyHi": "Business situation: A manager wants monthly revenue and year-over-year comparisons."
      }
    }
  ]
};

const M25_T07_PBI_SPEC: StructuredVisualNoteTopic = {
  "module": "M25",
  "moduleTitle": "Data Modeling",
  "topic": "Model Validation and Common Relationship Errors",
  "pageCount": 2,
  "sampleDataNotice": "All example Power BI tables, figures and DAX measures are illustrative learning data.",
  "pages": [
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 07",
      "pageTag": "PAGE 1 OF 2",
      "footerPage": "1 / 2",
      "title": "Model Validation and Common Relationship Errors",
      "subtitle": "TEST THE MODEL BEFORE TRUSTING CHARTS",
      "sections": [
        {
          "pill": "See the idea visually",
          "blocks": [
            {
              "type": "flow",
              "items": [
                {
                  "title": "Inspect",
                  "bodyEn": "Check table grain and keys.",
                  "bodyHi": "Check table grain and keys.",
                  "tone": "lavender"
                },
                {
                  "title": "Test",
                  "bodyEn": "Compare totals under filters.",
                  "bodyHi": "Compare totals under filters.",
                  "tone": "sky"
                },
                {
                  "title": "Fix",
                  "bodyEn": "Correct relationships and data quality.",
                  "bodyHi": "Correct relationships and data quality.",
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
                  "Duplicate keys",
                  "A dimension with repeated IDs may not qualify as the one side."
                ],
                [
                  "Unmatched keys",
                  "Fact rows may not have a corresponding dimension record."
                ],
                [
                  "Inactive relationship",
                  "A relationship exists but is not the active path used by default."
                ],
                [
                  "Ambiguous path",
                  "Multiple filter routes can make model behavior hard to predict."
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
                "Test",
                "Expected",
                "Warning"
              ],
              "rows": [
                [
                  "All Sales",
                  "10,000",
                  "12,000"
                ],
                [
                  "Filter East",
                  "4,000",
                  "8,000"
                ],
                [
                  "Customer count",
                  "100",
                  "98"
                ]
              ],
              "noteEn": "Illustrative checks: differences should trigger investigation.",
              "noteHi": "Illustrative checks: differences should trigger investigation."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Remember: A model is trustworthy only after its keys, filters and totals have been tested.",
              "bodyHi": "Remember: A model is trustworthy only after its keys, filters and totals have been tested."
            }
          ]
        }
      ],
      "intro": {
        "icon": "database",
        "bodyEn": "Model validation checks whether keys, relationships, filters and measures produce correct results. Common problems include duplicate dimension keys, unmatched foreign keys, ambiguous filter paths and totals that change unexpectedly after a join or relationship.",
        "bodyHi": "Model validation checks whether keys, relationships, filters and measures produce correct results. Common problems include duplicate dimension keys, unmatched foreign keys, ambiguous filter paths and totals that change unexpectedly after a join or relationship."
      }
    },
    {
      "moduleTag": "FUTURE IT INDUSTRY | M25 | TOPIC 07",
      "pageTag": "PAGE 2 OF 2",
      "footerPage": "2 / 2",
      "title": "Model Validation and Common Relationship Errors",
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
                  "Confirm the source total and the grain of the fact table."
                ],
                [
                  "2",
                  "Check for duplicate transaction rows and duplicate dimension keys."
                ],
                [
                  "3",
                  "Inspect relationship cardinality and cross-filter directions."
                ],
                [
                  "4",
                  "Build simple table visuals to trace suspicious categories or missing keys."
                ],
                [
                  "5",
                  "Correct the model and rerun the same comparison tests."
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
              "bodyEn": "Illustrative checks: differences should trigger investigation. The important check is that the result matches the business question, not only the screen layout.",
              "bodyHi": "Illustrative checks: differences should trigger investigation. The important check is that the result matches the business question, not only the screen layout."
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
                  "en": "Do not fix a wrong total by hiding a visual-level filter problem.",
                  "hi": "Do not fix a wrong total by hiding a visual-level filter problem."
                },
                {
                  "en": "Do not use DISTINCTCOUNT to mask duplicate fact rows without understanding them.",
                  "hi": "Do not use DISTINCTCOUNT to mask duplicate fact rows without understanding them."
                },
                {
                  "en": "Always compare important metrics to a trusted source.",
                  "hi": "Always compare important metrics to a trusted source."
                }
              ]
            },
            {
              "type": "note",
              "tone": "amber",
              "bodyEn": "Where analysts use this: Validation is especially important when reports are used for budgets or performance reviews.",
              "bodyHi": "Where analysts use this: Validation is especially important when reports are used for budgets or performance reviews."
            },
            {
              "type": "note",
              "tone": "green",
              "bodyEn": "Key takeaway: A model is trustworthy only after its keys, filters and totals have been tested.",
              "bodyHi": "Key takeaway: A model is trustworthy only after its keys, filters and totals have been tested."
            }
          ]
        }
      ],
      "intro": {
        "icon": "table",
        "bodyEn": "Business situation: A Power BI sales total is higher than the finance team’s verified source total.",
        "bodyHi": "Business situation: A Power BI sales total is higher than the finance team’s verified source total."
      }
    }
  ]
};

export const POWER_BI_PART1_BY_ID: Record<number, StructuredVisualNoteTopic> = {
  207: M23_T01_PBI_SPEC,
  208: M23_T02_PBI_SPEC,
  209: M23_T03_PBI_SPEC,
  210: M23_T04_PBI_SPEC,
  211: M23_T05_PBI_SPEC,
  212: M23_T06_PBI_SPEC,
  213: M24_T01_PBI_SPEC,
  214: M24_T02_PBI_SPEC,
  215: M24_T03_PBI_SPEC,
  216: M24_T04_PBI_SPEC,
  217: M24_T05_PBI_SPEC,
  218: M24_T06_PBI_SPEC,
  219: M24_T07_PBI_SPEC,
  220: M24_T08_PBI_SPEC,
  221: M24_T09_PBI_SPEC,
  222: M25_T01_PBI_SPEC,
  223: M25_T02_PBI_SPEC,
  224: M25_T03_PBI_SPEC,
  225: M25_T04_PBI_SPEC,
  226: M25_T05_PBI_SPEC,
  227: M25_T06_PBI_SPEC,
  228: M25_T07_PBI_SPEC,
};
