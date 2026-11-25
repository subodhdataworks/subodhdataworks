// ═══════════════════════════════════════════════════════════════════════════════
// TAB 5: POWER BI & DASHBOARDS — MODULES 23 TO 28 MASTER QUESTION BANK
// 46 Topics • 230 MCQs • 138 Puzzles • 46 Missions • 184 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB5_POWERBI_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '23.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.1',
    id: 207,
    topicTitle: "What Is Power BI?",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Power BI mainly used for?",
      options: [
        { key: "A", text: "Analyzing data and building interactive reports" },
        { key: "B", text: "Writing operating systems" },
        { key: "C", text: "Editing movies" },
        { key: "D", text: "Repairing laptops" }
      ],
      correct: 0,
      explanation: "Power BI helps turn data into visual insights.",
      hint: "Focus on Analyzing data and building interactive reports to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which company develops Power BI?",
      options: [
        { key: "A", text: "Adobe" },
        { key: "B", text: "Microsoft" },
        { key: "C", text: "Oracle" },
        { key: "D", text: "Canva" }
      ],
      correct: 1,
      explanation: "Power BI is a Microsoft analytics product.",
      hint: "Focus on Microsoft to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What can a Power BI report contain?",
      options: [
        { key: "A", text: "Only plain text" },
        { key: "B", text: "Only music files" },
        { key: "C", text: "Charts, tables and slicers" },
        { key: "D", text: "Only email messages" }
      ],
      correct: 2,
      explanation: "Reports combine multiple interactive visuals.",
      hint: "Focus on Charts, tables and slicers to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Who can benefit from a sales dashboard?",
      options: [
        { key: "A", text: "Only computer technicians" },
        { key: "B", text: "Only graphic printers" },
        { key: "C", text: "Only game developers" },
        { key: "D", text: "A manager tracking sales performance" }
      ],
      correct: 3,
      explanation: "Managers use dashboards to monitor KPIs.",
      hint: "Focus on A manager tracking sales performance to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What is a KPI?",
      options: [
        { key: "A", text: "A measurable performance indicator" },
        { key: "B", text: "A type of computer cable" },
        { key: "C", text: "A file extension" },
        { key: "D", text: "A keyboard shortcut" }
      ],
      correct: 0,
      explanation: "KPIs track progress toward business goals.",
      hint: "Focus on A measurable performance indicator to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Share the insight", "Create a useful visual", "Connect the relevant data", "Identify a business question"],
      shuffled: ["Share the insight", "Create a useful visual", "Connect the relevant data", "Identify a business question"],
      expected: ["Identify a business question", "Connect the relevant data", "Create a useful visual", "Share the insight"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["KPI → Measure of performance", "Dashboard → At-a-glance view of important metrics", "Report → Pages with interactive visuals"],
      shuffled: ["KPI → Measure of performance", "Dashboard → At-a-glance view of important metrics", "Report → Pages with interactive visuals"],
      expected: ["Report → Pages with interactive visuals", "Dashboard → At-a-glance view of important metrics", "KPI → Measure of performance"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Create a sales chart", "Repair a broken monitor", "Track monthly revenue", "Install office furniture"],
      shuffled: ["Create a sales chart", "Repair a broken monitor", "Track monthly revenue", "Install office furniture"],
      expected: ["Create a sales chart (Power BI tasks)", "Track monthly revenue (Power BI tasks)", "Repair a broken monitor (Not Power BI tasks)", "Install office furniture (Not Power BI tasks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Report",
      meaning: "Pages with interactive visuals"
    },
    {
      id: 2,
      snippet: "Dashboard",
      meaning: "At-a-glance view of important metrics"
    },
    {
      id: 3,
      snippet: "KPI",
      meaning: "Measure of performance"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: What Is Power BI?",
      scenario: "A store manager wants to see monthly sales in charts.",
      prompt: "Which tool should the manager choose?",
      expectedResponse: "Power BI — Power BI can turn sales data into interactive charts and reports."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Power BI?",
      sampleAnswer: "Power BI is a Microsoft platform for analyzing data and creating interactive reports."
    },
    {
      id: 2,
      question: "What is a dashboard?",
      sampleAnswer: "A dashboard presents important metrics in one place for quick monitoring."
    },
    {
      id: 3,
      question: "What is a KPI?",
      sampleAnswer: "A KPI is a measurable value used to track a business goal."
    },
    {
      id: 4,
      question: "Give one business use of Power BI.",
      sampleAnswer: "A shop can use it to visualize monthly sales and compare product performance."
    }
    ]
  },
  '23.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.2',
    id: 208,
    topicTitle: "Power BI Desktop, Service and Mobile",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Where do analysts commonly build Power BI reports?",
      options: [
        { key: "A", text: "Power BI Desktop" },
        { key: "B", text: "Power BI Mobile only" },
        { key: "C", text: "Microsoft Paint" },
        { key: "D", text: "File Explorer" }
      ],
      correct: 0,
      explanation: "Desktop is the main report-authoring application.",
      hint: "Focus on Power BI Desktop to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Where can published reports be accessed online?",
      options: [
        { key: "A", text: "Windows Calculator" },
        { key: "B", text: "Power BI Service" },
        { key: "C", text: "Notepad" },
        { key: "D", text: "Device Manager" }
      ],
      correct: 1,
      explanation: "Power BI Service is the cloud platform.",
      hint: "Focus on Power BI Service to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which app is designed to view reports on a phone?",
      options: [
        { key: "A", text: "Power Query Editor" },
        { key: "B", text: "SQL Server Management Studio" },
        { key: "C", text: "Power BI Mobile" },
        { key: "D", text: "Task Manager" }
      ],
      correct: 2,
      explanation: "Mobile provides phone-friendly access to reports.",
      hint: "Focus on Power BI Mobile to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which component supports sharing reports through workspaces?",
      options: [
        { key: "A", text: "Power BI Desktop alone" },
        { key: "B", text: "Windows Photos" },
        { key: "C", text: "Excel formula bar" },
        { key: "D", text: "Power BI Service" }
      ],
      correct: 3,
      explanation: "Service supports workspaces and permissions.",
      hint: "Focus on Power BI Service to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which statement is accurate?",
      options: [
        { key: "A", text: "Desktop creates reports; Service hosts and shares them" },
        { key: "B", text: "Mobile is required to write DAX" },
        { key: "C", text: "Service cannot display reports" },
        { key: "D", text: "Desktop is only a phone app" }
      ],
      correct: 0,
      explanation: "The three products serve different roles.",
      hint: "Focus on Desktop creates reports; Service hosts and shares them to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Open it in Mobile", "Publish it to Service", "Build a report in Desktop"],
      shuffled: ["Open it in Mobile", "Publish it to Service", "Build a report in Desktop"],
      expected: ["Build a report in Desktop", "Publish it to Service", "Open it in Mobile"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Mobile → View reports on a phone", "Service → Publish and collaborate online", "Desktop → Build and edit reports"],
      shuffled: ["Mobile → View reports on a phone", "Service → Publish and collaborate online", "Desktop → Build and edit reports"],
      expected: ["Desktop → Build and edit reports", "Service → Publish and collaborate online", "Mobile → View reports on a phone"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Build visuals in Desktop", "Open report in Mobile", "Share from a Service workspace", "View report in a browser"],
      shuffled: ["Build visuals in Desktop", "Open report in Mobile", "Share from a Service workspace", "View report in a browser"],
      expected: ["Build visuals in Desktop (Report creation or sharing)", "Share from a Service workspace (Report creation or sharing)", "Open report in Mobile (Report viewing)", "View report in a browser (Report viewing)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Desktop",
      meaning: "Build and edit reports"
    },
    {
      id: 2,
      snippet: "Service",
      meaning: "Publish and collaborate online"
    },
    {
      id: 3,
      snippet: "Mobile",
      meaning: "View reports on a phone"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Power BI Desktop, Service and Mobile",
      scenario: "A manager is traveling and wants to check a published report on a smartphone.",
      prompt: "Which Power BI component is suitable?",
      expectedResponse: "Power BI Mobile — Power BI Mobile lets users view supported reports on a phone."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Power BI Desktop?",
      sampleAnswer: "It is the application mainly used to connect, model, and build Power BI reports."
    },
    {
      id: 2,
      question: "What is Power BI Service?",
      sampleAnswer: "It is the online platform used to publish, manage, and share Power BI content."
    },
    {
      id: 3,
      question: "What is Power BI Mobile?",
      sampleAnswer: "It is an app for viewing and interacting with reports on mobile devices."
    },
    {
      id: 4,
      question: "How do Desktop and Service work together?",
      sampleAnswer: "A report is created in Desktop and can be published to Service for access and sharing."
    }
    ]
  },
  '23.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.3',
    id: 209,
    topicTitle: "Installing and Exploring Power BI Desktop",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which application should you install to build Power BI reports on Windows?",
      options: [
        { key: "A", text: "Power BI Desktop" },
        { key: "B", text: "Power BI Mobile" },
        { key: "C", text: "PowerPoint Viewer" },
        { key: "D", text: "Windows Media Player" }
      ],
      correct: 0,
      explanation: "Desktop is the report-authoring app.",
      hint: "Focus on Power BI Desktop to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which is a legitimate source for Power BI Desktop?",
      options: [
        { key: "A", text: "An unknown popup advertisement" },
        { key: "B", text: "Microsoft's official download options" },
        { key: "C", text: "A random file attachment" },
        { key: "D", text: "A game website" }
      ],
      correct: 1,
      explanation: "Use official Microsoft sources.",
      hint: "Focus on Microsoft's official download options to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is the first step after opening a new report?",
      options: [
        { key: "A", text: "Delete all system files" },
        { key: "B", text: "Change monitor hardware" },
        { key: "C", text: "Choose or connect a data source" },
        { key: "D", text: "Publish an empty workspace" }
      ],
      correct: 2,
      explanation: "Reports need data before meaningful visuals.",
      hint: "Focus on Choose or connect a data source to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Where can you add charts to a report?",
      options: [
        { key: "A", text: "Windows Recycle Bin" },
        { key: "B", text: "Printer queue" },
        { key: "C", text: "Login screen" },
        { key: "D", text: "Report canvas" }
      ],
      correct: 3,
      explanation: "Visuals are placed on the report canvas.",
      hint: "Focus on Report canvas to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What is the typical Power BI Desktop file extension?",
      options: [
        { key: "A", text: ".pbix" },
        { key: "B", text: ".mp3" },
        { key: "C", text: ".jpg" },
        { key: "D", text: ".exe" }
      ],
      correct: 0,
      explanation: "PBIX is the common Power BI Desktop report file format.",
      hint: "Focus on .pbix to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Create a first visual", "Connect sample data", "Open the application", "Install Power BI Desktop"],
      shuffled: ["Create a first visual", "Connect sample data", "Open the application", "Install Power BI Desktop"],
      expected: ["Install Power BI Desktop", "Open the application", "Connect sample data", "Create a first visual"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: [".pbix → Power BI Desktop report file", "Report canvas → Area where visuals are placed", "Home ribbon → Common data and report commands"],
      shuffled: [".pbix → Power BI Desktop report file", "Report canvas → Area where visuals are placed", "Home ribbon → Common data and report commands"],
      expected: ["Home ribbon → Common data and report commands", "Report canvas → Area where visuals are placed", ".pbix → Power BI Desktop report file"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Open Power BI Desktop", "Change laptop wallpaper", "Select Get data", "Format the entire drive"],
      shuffled: ["Open Power BI Desktop", "Change laptop wallpaper", "Select Get data", "Format the entire drive"],
      expected: ["Open Power BI Desktop (Useful first steps)", "Select Get data (Useful first steps)", "Change laptop wallpaper (Unrelated steps)", "Format the entire drive (Unrelated steps)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Home ribbon",
      meaning: "Common data and report commands"
    },
    {
      id: 2,
      snippet: "Report canvas",
      meaning: "Area where visuals are placed"
    },
    {
      id: 3,
      snippet: ".pbix",
      meaning: "Power BI Desktop report file"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Installing and Exploring Power BI Desktop",
      scenario: "A new analyst opens Power BI Desktop for the first time.",
      prompt: "Where should the analyst place a chart?",
      expectedResponse: "Report canvas — Charts are added to the report canvas in Power BI Desktop."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you get Power BI Desktop?",
      sampleAnswer: "Download or install it from an official Microsoft distribution channel."
    },
    {
      id: 2,
      question: "What is the report canvas?",
      sampleAnswer: "It is the area in Power BI Desktop where you build and arrange report visuals."
    },
    {
      id: 3,
      question: "What does a PBIX file contain?",
      sampleAnswer: "It stores a Power BI Desktop report and associated model information."
    },
    {
      id: 4,
      question: "What would you do first in a new report?",
      sampleAnswer: "Connect to a suitable data source, then build a visual."
    }
    ]
  },
  '23.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.4',
    id: 210,
    topicTitle: "Connecting to Excel and CSV",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which command is commonly used to connect a file in Power BI Desktop?",
      options: [
        { key: "A", text: "Get data" },
        { key: "B", text: "Format Painter" },
        { key: "C", text: "Save As PDF" },
        { key: "D", text: "Insert Shape" }
      ],
      correct: 0,
      explanation: "Get data opens data-source connectors.",
      hint: "Focus on Get data to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which connector is suitable for an .xlsx workbook?",
      options: [
        { key: "A", text: "Webcam" },
        { key: "B", text: "Excel workbook" },
        { key: "C", text: "Bluetooth speaker" },
        { key: "D", text: "Image folder only" }
      ],
      correct: 1,
      explanation: "The Excel connector reads workbook tables and sheets.",
      hint: "Focus on Excel workbook to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which connector is suitable for a .csv file?",
      options: [
        { key: "A", text: "PowerPoint theme" },
        { key: "B", text: "Audio input" },
        { key: "C", text: "Text/CSV" },
        { key: "D", text: "Printer driver" }
      ],
      correct: 2,
      explanation: "Text/CSV loads comma-separated text files.",
      hint: "Focus on Text/CSV to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What can you do before loading data?",
      options: [
        { key: "A", text: "Only restart the computer" },
        { key: "B", text: "Only delete the file" },
        { key: "C", text: "Only print the sheet" },
        { key: "D", text: "Preview or transform it" }
      ],
      correct: 3,
      explanation: "Navigator and Power Query support inspection.",
      hint: "Focus on Preview or transform it to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should you check after importing?",
      options: [
        { key: "A", text: "Column names and data types" },
        { key: "B", text: "Mouse color" },
        { key: "C", text: "Keyboard brand" },
        { key: "D", text: "Desktop wallpaper" }
      ],
      correct: 0,
      explanation: "Correct columns and types help analysis.",
      hint: "Focus on Column names and data types to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Load or transform data", "Choose the file and preview", "Select Excel or Text/CSV", "Choose Get data"],
      shuffled: ["Load or transform data", "Choose the file and preview", "Select Excel or Text/CSV", "Choose Get data"],
      expected: ["Choose Get data", "Select Excel or Text/CSV", "Choose the file and preview", "Load or transform data"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Navigator → Preview and select source objects", "Text/CSV → Connector for delimited text files", "Excel workbook → Connector for .xlsx files"],
      shuffled: ["Navigator → Preview and select source objects", "Text/CSV → Connector for delimited text files", "Excel workbook → Connector for .xlsx files"],
      expected: ["Excel workbook → Connector for .xlsx files", "Text/CSV → Connector for delimited text files", "Navigator → Preview and select source objects"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: [".xlsx workbook", ".mp3 song", ".csv sales file", ".png logo image"],
      shuffled: [".xlsx workbook", ".mp3 song", ".csv sales file", ".png logo image"],
      expected: [".xlsx workbook (Data source formats)", ".csv sales file (Data source formats)", ".mp3 song (Not spreadsheet data sources)", ".png logo image (Not spreadsheet data sources)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Excel workbook",
      meaning: "Connector for .xlsx files"
    },
    {
      id: 2,
      snippet: "Text/CSV",
      meaning: "Connector for delimited text files"
    },
    {
      id: 3,
      snippet: "Navigator",
      meaning: "Preview and select source objects"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Connecting to Excel and CSV",
      scenario: "A shop sends its monthly sales in a CSV file.",
      prompt: "Which Power BI connector should be used?",
      expectedResponse: "Text/CSV — Text/CSV is the correct connector for a CSV sales file."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you connect an Excel file?",
      sampleAnswer: "Use Get data, choose Excel workbook, select the file, and load the needed data."
    },
    {
      id: 2,
      question: "How do you import a CSV?",
      sampleAnswer: "Use the Text/CSV connector and check the preview before loading."
    },
    {
      id: 3,
      question: "Why preview data before loading?",
      sampleAnswer: "To confirm the right table, headers, and values are being imported."
    },
    {
      id: 4,
      question: "What should you check after import?",
      sampleAnswer: "Verify column names, data types, and sample rows."
    }
    ]
  },
  '23.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.5',
    id: 211,
    topicTitle: "Import Mode and DirectQuery Overview",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What happens in Import mode?",
      options: [
        { key: "A", text: "Data is copied into the Power BI model" },
        { key: "B", text: "Every visual is drawn manually" },
        { key: "C", text: "Data is stored only as an image" },
        { key: "D", text: "No data can be refreshed" }
      ],
      correct: 0,
      explanation: "Import stores a copy in the model.",
      hint: "Focus on Data is copied into the Power BI model to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is DirectQuery designed to do?",
      options: [
        { key: "A", text: "Convert reports into videos" },
        { key: "B", text: "Query a supported source when visuals need data" },
        { key: "C", text: "Remove every data source" },
        { key: "D", text: "Store only screenshots" }
      ],
      correct: 1,
      explanation: "DirectQuery sends queries to the source.",
      hint: "Focus on Query a supported source when visuals need data to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which mode often provides fast interactive analysis on imported data?",
      options: [
        { key: "A", text: "Print Preview" },
        { key: "B", text: "Slide Show" },
        { key: "C", text: "Import" },
        { key: "D", text: "Airplane mode" }
      ],
      correct: 2,
      explanation: "Import uses the in-memory model.",
      hint: "Focus on Import to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What does an Import dataset need to reflect new source changes?",
      options: [
        { key: "A", text: "A new mouse" },
        { key: "B", text: "A monitor reboot" },
        { key: "C", text: "A screenshot" },
        { key: "D", text: "Refresh" }
      ],
      correct: 3,
      explanation: "Refreshing updates the imported copy.",
      hint: "Focus on Refresh to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which statement about DirectQuery is correct?",
      options: [
        { key: "A", text: "Its performance depends partly on the source and queries" },
        { key: "B", text: "It never needs a data connection" },
        { key: "C", text: "It always stores every source row in memory" },
        { key: "D", text: "It works identically with every connector" }
      ],
      correct: 0,
      explanation: "DirectQuery has source-dependent limitations.",
      hint: "Focus on Its performance depends partly on the source and queries to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check refresh or query behavior", "Connect and build visuals", "Decide Import or DirectQuery", "Choose data source"],
      shuffled: ["Check refresh or query behavior", "Connect and build visuals", "Decide Import or DirectQuery", "Choose data source"],
      expected: ["Choose data source", "Decide Import or DirectQuery", "Connect and build visuals", "Check refresh or query behavior"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Refresh → Updates imported data from its source", "DirectQuery → Queries a supported source", "Import → Stores a copy in the model"],
      shuffled: ["Refresh → Updates imported data from its source", "DirectQuery → Queries a supported source", "Import → Stores a copy in the model"],
      expected: ["Import → Stores a copy in the model", "DirectQuery → Queries a supported source", "Refresh → Updates imported data from its source"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Model contains imported data", "Queries supported source", "Source changes require refresh", "Source performance affects visuals"],
      shuffled: ["Model contains imported data", "Queries supported source", "Source changes require refresh", "Source performance affects visuals"],
      expected: ["Model contains imported data (Import characteristics)", "Source changes require refresh (Import characteristics)", "Queries supported source (DirectQuery characteristics)", "Source performance affects visuals (DirectQuery characteristics)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Import",
      meaning: "Stores a copy in the model"
    },
    {
      id: 2,
      snippet: "DirectQuery",
      meaning: "Queries a supported source"
    },
    {
      id: 3,
      snippet: "Refresh",
      meaning: "Updates imported data from its source"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Import Mode and DirectQuery Overview",
      scenario: "A small Excel sales file is loaded into Power BI for quick analysis.",
      prompt: "Which common mode stores a copy of its data in Power BI?",
      expectedResponse: "Import — Import mode stores data in the Power BI model."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Import mode?",
      sampleAnswer: "Import mode loads a copy of source data into the Power BI model."
    },
    {
      id: 2,
      question: "What is DirectQuery?",
      sampleAnswer: "DirectQuery queries a supported data source when reports need data."
    },
    {
      id: 3,
      question: "Why is refresh important in Import mode?",
      sampleAnswer: "The imported copy must be refreshed to include changes from the source."
    },
    {
      id: 4,
      question: "What should guide the mode choice?",
      sampleAnswer: "Data volume, freshness needs, source support, and performance requirements."
    }
    ]
  },
  '23.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 23,
    moduleName: "Module 23: Getting Started with Power BI",
    topicKey: '23.6',
    id: 212,
    topicTitle: "Navigating Report, Data and Model Views",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which view is mainly used to build visuals?",
      options: [
        { key: "A", text: "Report view" },
        { key: "B", text: "Model view" },
        { key: "C", text: "Windows Task View" },
        { key: "D", text: "Printer view" }
      ],
      correct: 0,
      explanation: "Report view contains the visual canvas.",
      hint: "Focus on Report view to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which view helps inspect loaded table data?",
      options: [
        { key: "A", text: "Slideshow view" },
        { key: "B", text: "Data view" },
        { key: "C", text: "Camera view" },
        { key: "D", text: "Browser history" }
      ],
      correct: 1,
      explanation: "Data view lets you inspect table rows and columns when available.",
      hint: "Focus on Data view to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which view displays table relationships?",
      options: [
        { key: "A", text: "Report view only" },
        { key: "B", text: "File Explorer" },
        { key: "C", text: "Model view" },
        { key: "D", text: "Print preview" }
      ],
      correct: 2,
      explanation: "Model view shows tables and relationships.",
      hint: "Focus on Model view to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Where would you arrange a bar chart?",
      options: [
        { key: "A", text: "Model relationship diagram" },
        { key: "B", text: "Windows desktop" },
        { key: "C", text: "Power BI installer" },
        { key: "D", text: "Report view" }
      ],
      correct: 3,
      explanation: "Visuals are designed in Report view.",
      hint: "Focus on Report view to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Where would you check a relationship between Sales and Products?",
      options: [
        { key: "A", text: "Model view" },
        { key: "B", text: "Phone settings" },
        { key: "C", text: "Formula keypad" },
        { key: "D", text: "CSV file icon" }
      ],
      correct: 0,
      explanation: "Relationships are managed in Model view.",
      hint: "Focus on Model view to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Return to Report view", "Check relationships in Model view", "Inspect a table in Data view", "Open Report view"],
      shuffled: ["Return to Report view", "Check relationships in Model view", "Inspect a table in Data view", "Open Report view"],
      expected: ["Open Report view", "Inspect a table in Data view", "Check relationships in Model view", "Return to Report view"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Model view → Inspect relationships and tables", "Data view → Inspect loaded table rows", "Report view → Design report visuals"],
      shuffled: ["Model view → Inspect relationships and tables", "Data view → Inspect loaded table rows", "Report view → Design report visuals"],
      expected: ["Report view → Design report visuals", "Data view → Inspect loaded table rows", "Model view → Inspect relationships and tables"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Add a chart", "Inspect a relationship", "Arrange visual layout", "Check linked tables"],
      shuffled: ["Add a chart", "Inspect a relationship", "Arrange visual layout", "Check linked tables"],
      expected: ["Add a chart (Report-building tasks)", "Arrange visual layout (Report-building tasks)", "Inspect a relationship (Model-checking tasks)", "Check linked tables (Model-checking tasks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Report view",
      meaning: "Design report visuals"
    },
    {
      id: 2,
      snippet: "Data view",
      meaning: "Inspect loaded table rows"
    },
    {
      id: 3,
      snippet: "Model view",
      meaning: "Inspect relationships and tables"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Navigating Report, Data and Model Views",
      scenario: "An analyst wants to check whether Sales and Products tables are connected.",
      prompt: "Which Power BI view should they open?",
      expectedResponse: "Model view — Model view displays relationships between tables."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Report view used for?",
      sampleAnswer: "It is used to create and arrange report visuals."
    },
    {
      id: 2,
      question: "What is Data view used for?",
      sampleAnswer: "It helps inspect loaded table rows and columns when supported."
    },
    {
      id: 3,
      question: "What is Model view used for?",
      sampleAnswer: "It displays tables and their relationships."
    },
    {
      id: 4,
      question: "Which view would you choose to inspect a relationship?",
      sampleAnswer: "I would use Model view."
    }
    ]
  },
  '24.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.1',
    id: 213,
    topicTitle: "Power Query Editor Interface",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Power Query Editor mainly used for?",
      options: [
        { key: "A", text: "Preparing and transforming data" },
        { key: "B", text: "Drawing website logos" },
        { key: "C", text: "Repairing databases physically" },
        { key: "D", text: "Recording videos" }
      ],
      correct: 0,
      explanation: "Power Query provides repeatable data-cleaning steps.",
      hint: "Focus on Preparing and transforming data to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which pane lists imported queries?",
      options: [
        { key: "A", text: "Bookmarks pane" },
        { key: "B", text: "Queries pane" },
        { key: "C", text: "Mobile notifications" },
        { key: "D", text: "Print queue" }
      ],
      correct: 1,
      explanation: "Queries pane displays available queries.",
      hint: "Focus on Queries pane to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Where are transformations listed in sequence?",
      options: [
        { key: "A", text: "Windows taskbar" },
        { key: "B", text: "Visual title" },
        { key: "C", text: "Applied Steps" },
        { key: "D", text: "Page navigator" }
      ],
      correct: 2,
      explanation: "Applied Steps records transformation steps.",
      hint: "Focus on Applied Steps to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What does the data preview show?",
      options: [
        { key: "A", text: "Only published dashboards" },
        { key: "B", text: "Only printer settings" },
        { key: "C", text: "Only DAX measures" },
        { key: "D", text: "Sample rows and columns of the current query" }
      ],
      correct: 3,
      explanation: "Preview helps inspect transformations.",
      hint: "Focus on Sample rows and columns of the current query to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which command applies transformations and loads data into the model?",
      options: [
        { key: "A", text: "Close & Apply" },
        { key: "B", text: "Delete Workspace" },
        { key: "C", text: "Publish to Mobile" },
        { key: "D", text: "Format Painter" }
      ],
      correct: 0,
      explanation: "Close & Apply commits Power Query changes.",
      hint: "Focus on Close & Apply to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Close & Apply", "Review Applied Steps", "Apply a transformation", "Select a query", "Open Transform data"],
      shuffled: ["Close & Apply", "Review Applied Steps", "Apply a transformation", "Select a query", "Open Transform data"],
      expected: ["Open Transform data", "Select a query", "Apply a transformation", "Review Applied Steps", "Close & Apply"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Applied Steps → Lists transformations in order", "Data preview → Shows current query rows", "Queries pane → Lists available queries"],
      shuffled: ["Applied Steps → Lists transformations in order", "Data preview → Shows current query rows", "Queries pane → Lists available queries"],
      expected: ["Queries pane → Lists available queries", "Data preview → Shows current query rows", "Applied Steps → Lists transformations in order"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Queries pane", "Report canvas", "Applied Steps", "Visual formatting pane"],
      shuffled: ["Queries pane", "Report canvas", "Applied Steps", "Visual formatting pane"],
      expected: ["Queries pane (Power Query areas)", "Applied Steps (Power Query areas)", "Report canvas (Report design areas)", "Visual formatting pane (Report design areas)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Queries pane",
      meaning: "Lists available queries"
    },
    {
      id: 2,
      snippet: "Data preview",
      meaning: "Shows current query rows"
    },
    {
      id: 3,
      snippet: "Applied Steps",
      meaning: "Lists transformations in order"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Power Query Editor Interface",
      scenario: "A sales file has extra columns and needs cleaning before reporting.",
      prompt: "Where should the analyst transform the data?",
      expectedResponse: "Power Query Editor — Power Query Editor is designed for data preparation."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Power Query Editor?",
      sampleAnswer: "It is the data preparation interface for connecting, cleaning, and transforming data."
    },
    {
      id: 2,
      question: "What are Applied Steps?",
      sampleAnswer: "They are recorded transformation operations performed on a query."
    },
    {
      id: 3,
      question: "What does the Queries pane show?",
      sampleAnswer: "It lists the queries available in the Power Query Editor."
    },
    {
      id: 4,
      question: "What does Close & Apply do?",
      sampleAnswer: "It applies the query transformations and loads the resulting data into the model."
    }
    ]
  },
  '24.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.2',
    id: 214,
    topicTitle: "Change Data Types",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which data type is suitable for a sales amount with decimals?",
      options: [
        { key: "A", text: "Decimal number" },
        { key: "B", text: "Image" },
        { key: "C", text: "Binary file" },
        { key: "D", text: "Date only" }
      ],
      correct: 0,
      explanation: "Decimal number supports fractional numeric values.",
      hint: "Focus on Decimal number to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which type is appropriate for a calendar date?",
      options: [
        { key: "A", text: "True/False" },
        { key: "B", text: "Date" },
        { key: "C", text: "Whole number only" },
        { key: "D", text: "Web URL" }
      ],
      correct: 1,
      explanation: "Date stores calendar values.",
      hint: "Focus on Date to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Why correct a column's data type?",
      options: [
        { key: "A", text: "To change monitor color" },
        { key: "B", text: "To remove the report page" },
        { key: "C", text: "To enable accurate calculations and filtering" },
        { key: "D", text: "To create random rows" }
      ],
      correct: 2,
      explanation: "Data types control how values are interpreted.",
      hint: "Focus on To enable accurate calculations and filtering to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What can happen if numeric sales are stored as text?",
      options: [
        { key: "A", text: "The laptop always restarts" },
        { key: "B", text: "The source file disappears" },
        { key: "C", text: "All visuals become maps" },
        { key: "D", text: "Numeric calculations may not work as intended" }
      ],
      correct: 3,
      explanation: "Text is not the same as numeric data.",
      hint: "Focus on Numeric calculations may not work as intended to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Where can a column's type be changed in Power Query?",
      options: [
        { key: "A", text: "Column data type selector" },
        { key: "B", text: "Windows brightness control" },
        { key: "C", text: "Mobile notification menu" },
        { key: "D", text: "Report wallpaper" }
      ],
      correct: 0,
      explanation: "Power Query has column type controls.",
      hint: "Focus on Column data type selector to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check for conversion errors", "Choose appropriate data type", "Select the column", "Inspect sample values"],
      shuffled: ["Check for conversion errors", "Choose appropriate data type", "Select the column", "Inspect sample values"],
      expected: ["Inspect sample values", "Select the column", "Choose appropriate data type", "Check for conversion errors"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Date → Calendar dates", "Decimal number → Amounts with fractional values", "Whole number → Integer quantities"],
      shuffled: ["Date → Calendar dates", "Decimal number → Amounts with fractional values", "Whole number → Integer quantities"],
      expected: ["Whole number → Integer quantities", "Decimal number → Amounts with fractional values", "Date → Calendar dates"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Units sold: 12", "Customer name: Riya", "Price: 49.50", "Product code: AB-12"],
      shuffled: ["Units sold: 12", "Customer name: Riya", "Price: 49.50", "Product code: AB-12"],
      expected: ["Units sold: 12 (Numeric data)", "Price: 49.50 (Numeric data)", "Customer name: Riya (Text data)", "Product code: AB-12 (Text data)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Whole number",
      meaning: "Integer quantities"
    },
    {
      id: 2,
      snippet: "Decimal number",
      meaning: "Amounts with fractional values"
    },
    {
      id: 3,
      snippet: "Date",
      meaning: "Calendar dates"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Change Data Types",
      scenario: "A sales table has Price values such as 49.50 and 75.25.",
      prompt: "Which data type is suitable for Price?",
      expectedResponse: "Decimal number — Decimal number is appropriate for prices with fractional values."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why do data types matter?",
      sampleAnswer: "They determine how Power BI interprets and calculates values."
    },
    {
      id: 2,
      question: "Which type is suitable for a price?",
      sampleAnswer: "A decimal numeric type is suitable for prices with fractional amounts."
    },
    {
      id: 3,
      question: "What if a number column is imported as text?",
      sampleAnswer: "I would change it to a numeric type and check for conversion errors."
    },
    {
      id: 4,
      question: "How do you validate a type change?",
      sampleAnswer: "Inspect the values and check for errors or unexpected nulls."
    }
    ]
  },
  '24.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.3',
    id: 215,
    topicTitle: "Remove Rows and Columns",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Remove Columns do?",
      options: [
        { key: "A", text: "Deletes selected columns from query output" },
        { key: "B", text: "Deletes the entire computer" },
        { key: "C", text: "Adds new charts" },
        { key: "D", text: "Publishes a report" }
      ],
      correct: 0,
      explanation: "Remove Columns removes fields not needed for analysis.",
      hint: "Focus on Deletes selected columns from query output to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does Remove Top Rows do?",
      options: [
        { key: "A", text: "Sorts all values descending" },
        { key: "B", text: "Removes a chosen number of rows from the beginning" },
        { key: "C", text: "Removes only duplicate columns" },
        { key: "D", text: "Adds a footer" }
      ],
      correct: 1,
      explanation: "It removes specified leading rows.",
      hint: "Focus on Removes a chosen number of rows from the beginning to answer this Power BI concept."
    },
    {
      id: 3,
      question: "When might you remove extra top rows?",
      options: [
        { key: "A", text: "When the report has too many charts" },
        { key: "B", text: "When a measure is slow" },
        { key: "C", text: "When a CSV has notes above its header" },
        { key: "D", text: "When a phone is offline" }
      ],
      correct: 2,
      explanation: "Metadata rows may precede the real table.",
      hint: "Focus on When a CSV has notes above its header to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What does Keep Rows do?",
      options: [
        { key: "A", text: "Hides all visuals" },
        { key: "B", text: "Renames a workspace" },
        { key: "C", text: "Converts all dates to text" },
        { key: "D", text: "Retains rows meeting a chosen row-selection operation" }
      ],
      correct: 3,
      explanation: "Keep Rows narrows the query result.",
      hint: "Focus on Retains rows meeting a chosen row-selection operation to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why should you check before removing a column?",
      options: [
        { key: "A", text: "It might be needed for analysis or relationships" },
        { key: "B", text: "It changes Power BI licensing" },
        { key: "C", text: "It modifies printer ink" },
        { key: "D", text: "It resets passwords" }
      ],
      correct: 0,
      explanation: "Avoid removing useful keys or metrics.",
      hint: "Focus on It might be needed for analysis or relationships to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check remaining columns", "Remove the unwanted data", "Identify unwanted rows or columns", "Preview the table"],
      shuffled: ["Check remaining columns", "Remove the unwanted data", "Identify unwanted rows or columns", "Preview the table"],
      expected: ["Preview the table", "Identify unwanted rows or columns", "Remove the unwanted data", "Check remaining columns"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Keep Rows → Retain specified rows", "Remove Top Rows → Discard leading rows", "Remove Columns → Exclude selected fields"],
      shuffled: ["Keep Rows → Retain specified rows", "Remove Top Rows → Discard leading rows", "Remove Columns → Exclude selected fields"],
      expected: ["Remove Columns → Exclude selected fields", "Remove Top Rows → Discard leading rows", "Keep Rows → Retain specified rows"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Order ID", "Decorative note", "Sales Amount", "Empty placeholder column"],
      shuffled: ["Order ID", "Decorative note", "Sales Amount", "Empty placeholder column"],
      expected: ["Order ID (Useful fields)", "Sales Amount (Useful fields)", "Decorative note (Unneeded fields for sales analysis)", "Empty placeholder column (Unneeded fields for sales analysis)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Remove Columns",
      meaning: "Exclude selected fields"
    },
    {
      id: 2,
      snippet: "Remove Top Rows",
      meaning: "Discard leading rows"
    },
    {
      id: 3,
      snippet: "Keep Rows",
      meaning: "Retain specified rows"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Remove Rows and Columns",
      scenario: "A CSV starts with two title rows before the actual column headers.",
      prompt: "What is a useful cleaning action?",
      expectedResponse: "Remove Top Rows — Remove the extra leading rows before promoting the actual headers."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why remove unnecessary columns?",
      sampleAnswer: "It keeps only relevant fields and simplifies the dataset."
    },
    {
      id: 2,
      question: "What does Remove Top Rows do?",
      sampleAnswer: "It removes a specified number of rows from the beginning."
    },
    {
      id: 3,
      question: "When should you be careful removing columns?",
      sampleAnswer: "When a column might be a key, metric, or required field."
    },
    {
      id: 4,
      question: "What should you check after removing rows?",
      sampleAnswer: "Confirm that the real data and correct headers remain."
    }
    ]
  },
  '24.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.4',
    id: 216,
    topicTitle: "Replace Values and Handle Nulls",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does null usually indicate in Power Query?",
      options: [
        { key: "A", text: "A missing value" },
        { key: "B", text: "A guaranteed zero" },
        { key: "C", text: "A chart title" },
        { key: "D", text: "A primary key" }
      ],
      correct: 0,
      explanation: "Null represents a missing or absent value.",
      hint: "Focus on A missing value to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does Replace Values do?",
      options: [
        { key: "A", text: "Publishes reports" },
        { key: "B", text: "Substitutes selected values with new ones" },
        { key: "C", text: "Changes screen size" },
        { key: "D", text: "Adds relationships automatically" }
      ],
      correct: 1,
      explanation: "Replace Values updates matching values.",
      hint: "Focus on Substitutes selected values with new ones to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Is a null always the same as zero?",
      options: [
        { key: "A", text: "Yes, always" },
        { key: "B", text: "Only in charts" },
        { key: "C", text: "No, missing is different from numeric zero" },
        { key: "D", text: "Only in Excel files" }
      ],
      correct: 2,
      explanation: "A zero is a value; null means missing.",
      hint: "Focus on No, missing is different from numeric zero to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What should you consider before replacing missing sales with zero?",
      options: [
        { key: "A", text: "Whether the report is purple" },
        { key: "B", text: "Whether the file has an icon" },
        { key: "C", text: "Whether the computer is plugged in" },
        { key: "D", text: "Whether zero is a valid business assumption" }
      ],
      correct: 3,
      explanation: "Incorrect replacements can distort results.",
      hint: "Focus on Whether zero is a valid business assumption to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which operation can standardize labels like N/A to Unknown?",
      options: [
        { key: "A", text: "Replace Values" },
        { key: "B", text: "Add Bookmark" },
        { key: "C", text: "Insert Image" },
        { key: "D", text: "Export PDF" }
      ],
      correct: 0,
      explanation: "Replacement can standardize known text codes.",
      hint: "Focus on Replace Values to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check changed rows", "Apply Replace Values", "Choose an appropriate replacement rule", "Identify missing or inconsistent values"],
      shuffled: ["Check changed rows", "Apply Replace Values", "Choose an appropriate replacement rule", "Identify missing or inconsistent values"],
      expected: ["Identify missing or inconsistent values", "Choose an appropriate replacement rule", "Apply Replace Values", "Check changed rows"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Data validation → Check whether replacements make sense", "Replace Values → Substitute matching values", "null → Missing value"],
      shuffled: ["Data validation → Check whether replacements make sense", "Replace Values → Substitute matching values", "null → Missing value"],
      expected: ["null → Missing value", "Replace Values → Substitute matching values", "Data validation → Check whether replacements make sense"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["null in customer city", "Sales quantity 0", "Blank optional field", "Discount amount 0"],
      shuffled: ["null in customer city", "Sales quantity 0", "Blank optional field", "Discount amount 0"],
      expected: ["null in customer city (Missing-value indicators)", "Blank optional field (Missing-value indicators)", "Sales quantity 0 (Actual numeric values)", "Discount amount 0 (Actual numeric values)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "null",
      meaning: "Missing value"
    },
    {
      id: 2,
      snippet: "Replace Values",
      meaning: "Substitute matching values"
    },
    {
      id: 3,
      snippet: "Data validation",
      meaning: "Check whether replacements make sense"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Replace Values and Handle Nulls",
      scenario: "A Customer City column contains the text N/A in some rows.",
      prompt: "Which Power Query action can standardize it to Unknown?",
      expectedResponse: "Replace Values — Replace Values can change the known placeholder to a consistent label."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does null mean?",
      sampleAnswer: "It represents a missing or absent value."
    },
    {
      id: 2,
      question: "What does Replace Values do?",
      sampleAnswer: "It replaces matching values with a chosen new value."
    },
    {
      id: 3,
      question: "Is null equal to zero?",
      sampleAnswer: "No. Zero is a numeric value, while null indicates missing data."
    },
    {
      id: 4,
      question: "What should guide null handling?",
      sampleAnswer: "Business meaning and whether replacing, keeping, or removing missing values is appropriate."
    }
    ]
  },
  '24.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.5',
    id: 217,
    topicTitle: "Split and Merge Columns",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which operation divides a Full Name column into separate parts?",
      options: [
        { key: "A", text: "Split Column" },
        { key: "B", text: "Merge Queries" },
        { key: "C", text: "Append Queries" },
        { key: "D", text: "Group By" }
      ],
      correct: 0,
      explanation: "Split Column divides values by delimiter or position.",
      hint: "Focus on Split Column to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a common delimiter for splitting a full name?",
      options: [
        { key: "A", text: "Chart color" },
        { key: "B", text: "Space" },
        { key: "C", text: "Page number" },
        { key: "D", text: "Refresh icon" }
      ],
      correct: 1,
      explanation: "A space can separate first and last names in simple examples.",
      hint: "Focus on Space to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What does Merge Columns do?",
      options: [
        { key: "A", text: "Joins two entire tables" },
        { key: "B", text: "Deletes every column" },
        { key: "C", text: "Combines values from multiple columns into one" },
        { key: "D", text: "Changes file type" }
      ],
      correct: 2,
      explanation: "Merge Columns joins text from selected columns.",
      hint: "Focus on Combines values from multiple columns into one to answer this Power BI concept."
    },
    {
      id: 4,
      question: "How could City and State be combined into one display field?",
      options: [
        { key: "A", text: "Remove Rows" },
        { key: "B", text: "Pivot Columns" },
        { key: "C", text: "Create Bookmark" },
        { key: "D", text: "Merge Columns with a separator" }
      ],
      correct: 3,
      explanation: "Merge Columns can join text using a separator.",
      hint: "Focus on Merge Columns with a separator to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should you check after splitting?",
      options: [
        { key: "A", text: "Whether values split correctly and nulls are handled" },
        { key: "B", text: "Whether phone volume changed" },
        { key: "C", text: "Whether the chart theme reset" },
        { key: "D", text: "Whether Service logged out" }
      ],
      correct: 0,
      explanation: "Inconsistent formats may need extra cleaning.",
      hint: "Focus on Whether values split correctly and nulls are handled to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Review resulting columns", "Set delimiter to space", "Choose Split Column by delimiter", "Select Full Name column"],
      shuffled: ["Review resulting columns", "Set delimiter to space", "Choose Split Column by delimiter", "Select Full Name column"],
      expected: ["Select Full Name column", "Choose Split Column by delimiter", "Set delimiter to space", "Review resulting columns"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Delimiter → Character separating text pieces", "Merge Columns → Combine fields into one", "Split Column → Divide one column into parts"],
      shuffled: ["Delimiter → Character separating text pieces", "Merge Columns → Combine fields into one", "Split Column → Divide one column into parts"],
      expected: ["Split Column → Divide one column into parts", "Merge Columns → Combine fields into one", "Delimiter → Character separating text pieces"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Full Name into First and Last", "City and State into Location", "Code A-101 into parts", "First and Last into Full Name"],
      shuffled: ["Full Name into First and Last", "City and State into Location", "Code A-101 into parts", "First and Last into Full Name"],
      expected: ["Full Name into First and Last (Split examples)", "Code A-101 into parts (Split examples)", "City and State into Location (Merge examples)", "First and Last into Full Name (Merge examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Split Column",
      meaning: "Divide one column into parts"
    },
    {
      id: 2,
      snippet: "Merge Columns",
      meaning: "Combine fields into one"
    },
    {
      id: 3,
      snippet: "Delimiter",
      meaning: "Character separating text pieces"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Split and Merge Columns",
      scenario: "A simple employee list stores names as Riya Sharma in one field.",
      prompt: "Which operation can separate the first and last names?",
      expectedResponse: "Split Column — Split Column by space can separate this simple name format."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Split Column do?",
      sampleAnswer: "It divides values in one column into multiple columns."
    },
    {
      id: 2,
      question: "What is a delimiter?",
      sampleAnswer: "It is a character, such as a comma or space, used to separate text."
    },
    {
      id: 3,
      question: "What does Merge Columns do?",
      sampleAnswer: "It combines selected columns into a single column."
    },
    {
      id: 4,
      question: "Why check split results?",
      sampleAnswer: "Some values may have different formats or missing parts."
    }
    ]
  },
  '24.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.6',
    id: 218,
    topicTitle: "Pivot and Unpivot Columns",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Unpivot Columns typically do?",
      options: [
        { key: "A", text: "Turn multiple category columns into attribute-value rows" },
        { key: "B", text: "Create a phone app" },
        { key: "C", text: "Delete every row" },
        { key: "D", text: "Publish to Service" }
      ],
      correct: 0,
      explanation: "Unpivot converts wide data into a longer form.",
      hint: "Focus on Turn multiple category columns into attribute-value rows to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does Pivot Column typically do?",
      options: [
        { key: "A", text: "Remove all headers" },
        { key: "B", text: "Turn category values into separate columns" },
        { key: "C", text: "Change all values to text" },
        { key: "D", text: "Create a new workspace" }
      ],
      correct: 1,
      explanation: "Pivot reshapes distinct category values into columns.",
      hint: "Focus on Turn category values into separate columns to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which format is often easier for analysis across months?",
      options: [
        { key: "A", text: "A separate sheet for every cell" },
        { key: "B", text: "Only chart images" },
        { key: "C", text: "One Month column and one Sales column" },
        { key: "D", text: "A merged title row" }
      ],
      correct: 2,
      explanation: "Long format is often useful for filtering and charts.",
      hint: "Focus on One Month column and one Sales column to answer this Power BI concept."
    },
    {
      id: 4,
      question: "If Jan and Feb are separate sales columns, which operation can create Month and Sales fields?",
      options: [
        { key: "A", text: "Rename Report" },
        { key: "B", text: "Add Bookmark" },
        { key: "C", text: "Publish Report" },
        { key: "D", text: "Unpivot Columns" }
      ],
      correct: 3,
      explanation: "Unpivot changes wide month columns into rows.",
      hint: "Focus on Unpivot Columns to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What must be considered when pivoting repeated category combinations?",
      options: [
        { key: "A", text: "Choose an appropriate aggregation" },
        { key: "B", text: "Always use a map" },
        { key: "C", text: "Disable all filters" },
        { key: "D", text: "Delete all measures" }
      ],
      correct: 0,
      explanation: "Pivot may require aggregation when keys repeat.",
      hint: "Focus on Choose an appropriate aggregation to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Rename Value to Sales", "Inspect Month attribute", "Choose Unpivot Columns", "Select Jan and Feb columns"],
      shuffled: ["Rename Value to Sales", "Inspect Month attribute", "Choose Unpivot Columns", "Select Jan and Feb columns"],
      expected: ["Select Jan and Feb columns", "Choose Unpivot Columns", "Inspect Month attribute", "Rename Value to Sales"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Aggregation → Combines repeated values when pivoting", "Unpivot → Columns become attribute-value rows", "Pivot → Values become columns"],
      shuffled: ["Aggregation → Combines repeated values when pivoting", "Unpivot → Columns become attribute-value rows", "Pivot → Values become columns"],
      expected: ["Pivot → Values become columns", "Unpivot → Columns become attribute-value rows", "Aggregation → Combines repeated values when pivoting"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Jan and Feb as separate columns", "Month column with Jan/Feb rows", "Q1 and Q2 as separate columns", "Quarter column with Q1/Q2 rows"],
      shuffled: ["Jan and Feb as separate columns", "Month column with Jan/Feb rows", "Q1 and Q2 as separate columns", "Quarter column with Q1/Q2 rows"],
      expected: ["Jan and Feb as separate columns (Wide-format examples)", "Q1 and Q2 as separate columns (Wide-format examples)", "Month column with Jan/Feb rows (Long-format examples)", "Quarter column with Q1/Q2 rows (Long-format examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Pivot",
      meaning: "Values become columns"
    },
    {
      id: 2,
      snippet: "Unpivot",
      meaning: "Columns become attribute-value rows"
    },
    {
      id: 3,
      snippet: "Aggregation",
      meaning: "Combines repeated values when pivoting"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Pivot and Unpivot Columns",
      scenario: "A table has columns Product, Jan and Feb; the analyst wants Month and Sales columns.",
      prompt: "Which transformation is appropriate?",
      expectedResponse: "Unpivot Columns — Unpivot Columns converts the month columns into Month and Sales rows."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is unpivoting?",
      sampleAnswer: "It transforms multiple columns into attribute-value rows."
    },
    {
      id: 2,
      question: "When is unpivot useful?",
      sampleAnswer: "When categories such as months are stored as separate columns."
    },
    {
      id: 3,
      question: "What is pivoting?",
      sampleAnswer: "It converts distinct values in a column into new columns."
    },
    {
      id: 4,
      question: "Why can pivoting require aggregation?",
      sampleAnswer: "Multiple rows may map to the same resulting cell."
    }
    ]
  },
  '24.7': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.7',
    id: 219,
    topicTitle: "Append Queries",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Append Queries do?",
      options: [
        { key: "A", text: "Stacks rows from queries into one table" },
        { key: "B", text: "Matches rows using a key" },
        { key: "C", text: "Builds a relationship diagram" },
        { key: "D", text: "Creates a measure" }
      ],
      correct: 0,
      explanation: "Append combines rows vertically.",
      hint: "Focus on Stacks rows from queries into one table to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which example is suited to Append Queries?",
      options: [
        { key: "A", text: "Customer table matched to Orders by ID" },
        { key: "B", text: "January and February sales with the same columns" },
        { key: "C", text: "Changing Price to Decimal" },
        { key: "D", text: "Splitting a name" }
      ],
      correct: 1,
      explanation: "Monthly files with similar structures can be appended.",
      hint: "Focus on January and February sales with the same columns to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What happens if appended tables have different columns?",
      options: [
        { key: "A", text: "Power BI deletes every row" },
        { key: "B", text: "All data becomes an image" },
        { key: "C", text: "Missing columns may contain null in some rows" },
        { key: "D", text: "The workbook always crashes" }
      ],
      correct: 2,
      explanation: "Append aligns columns by name.",
      hint: "Focus on Missing columns may contain null in some rows to answer this Power BI concept."
    },
    {
      id: 4,
      question: "How is Append different from Merge Queries?",
      options: [
        { key: "A", text: "They always do the same thing" },
        { key: "B", text: "Append changes passwords" },
        { key: "C", text: "Merge creates a chart" },
        { key: "D", text: "Append adds rows; Merge joins columns using matches" }
      ],
      correct: 3,
      explanation: "They solve different combining problems.",
      hint: "Focus on Append adds rows; Merge joins columns using matches to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should be checked before appending?",
      options: [
        { key: "A", text: "Column names and compatible data types" },
        { key: "B", text: "Report wallpaper" },
        { key: "C", text: "Phone brightness" },
        { key: "D", text: "Chart font only" }
      ],
      correct: 0,
      explanation: "Consistent schema helps avoid errors.",
      hint: "Focus on Column names and compatible data types to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Verify combined rows", "Choose Append Queries", "Load February sales query", "Load January sales query"],
      shuffled: ["Verify combined rows", "Choose Append Queries", "Load February sales query", "Load January sales query"],
      expected: ["Load January sales query", "Load February sales query", "Choose Append Queries", "Verify combined rows"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Schema → Column names and types", "Merge → Join matching rows from tables", "Append → Combine rows vertically"],
      shuffled: ["Schema → Column names and types", "Merge → Join matching rows from tables", "Append → Combine rows vertically"],
      expected: ["Append → Combine rows vertically", "Merge → Join matching rows from tables", "Schema → Column names and types"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["January sales rows", "Customers by CustomerID", "February sales rows", "Orders by CustomerID"],
      shuffled: ["January sales rows", "Customers by CustomerID", "February sales rows", "Orders by CustomerID"],
      expected: ["January sales rows (Good append candidates)", "February sales rows (Good append candidates)", "Customers by CustomerID (Good merge candidates)", "Orders by CustomerID (Good merge candidates)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Append",
      meaning: "Combine rows vertically"
    },
    {
      id: 2,
      snippet: "Merge",
      meaning: "Join matching rows from tables"
    },
    {
      id: 3,
      snippet: "Schema",
      meaning: "Column names and types"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Append Queries",
      scenario: "A shop has separate January and February sales tables with the same columns.",
      prompt: "Which operation combines all sales rows?",
      expectedResponse: "Append Queries — Append Queries stacks the two monthly tables into one."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Append Queries do?",
      sampleAnswer: "It combines rows from multiple queries into one table."
    },
    {
      id: 2,
      question: "When should you append data?",
      sampleAnswer: "When datasets contain the same kind of records, such as monthly sales files."
    },
    {
      id: 3,
      question: "How is append different from merge?",
      sampleAnswer: "Append stacks rows; merge combines matching columns from related tables."
    },
    {
      id: 4,
      question: "What should you check after appending?",
      sampleAnswer: "Verify row counts, column names, and data types."
    }
    ]
  },
  '24.8': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.8',
    id: 220,
    topicTitle: "Merge Queries",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Merge Queries do?",
      options: [
        { key: "A", text: "Combines tables based on matching columns" },
        { key: "B", text: "Stacks all rows without matching" },
        { key: "C", text: "Formats a chart" },
        { key: "D", text: "Creates a mobile view" }
      ],
      correct: 0,
      explanation: "Merge joins tables using selected keys.",
      hint: "Focus on Combines tables based on matching columns to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which columns could link Orders and Customers?",
      options: [
        { key: "A", text: "Report background color" },
        { key: "B", text: "CustomerID in both tables" },
        { key: "C", text: "Page title" },
        { key: "D", text: "File size" }
      ],
      correct: 1,
      explanation: "A shared key connects matching records.",
      hint: "Focus on CustomerID in both tables to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What does a Left Outer merge keep?",
      options: [
        { key: "A", text: "Only unmatched right rows" },
        { key: "B", text: "No rows at all" },
        { key: "C", text: "All rows from the left query and matching right rows" },
        { key: "D", text: "Only column headers" }
      ],
      correct: 2,
      explanation: "Left Outer retains every left-side row.",
      hint: "Focus on All rows from the left query and matching right rows to answer this Power BI concept."
    },
    {
      id: 4,
      question: "How does Merge differ from Append?",
      options: [
        { key: "A", text: "They always produce the same result" },
        { key: "B", text: "Merge removes all columns" },
        { key: "C", text: "Append requires a key" },
        { key: "D", text: "Merge joins by matching values; Append stacks rows" }
      ],
      correct: 3,
      explanation: "They are different data-combining operations.",
      hint: "Focus on Merge joins by matching values; Append stacks rows to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why inspect key values before merging?",
      options: [
        { key: "A", text: "Duplicates or mismatches can affect row counts" },
        { key: "B", text: "To choose a phone wallpaper" },
        { key: "C", text: "To change the license" },
        { key: "D", text: "To resize the canvas" }
      ],
      correct: 0,
      explanation: "Keys should have appropriate granularity and type.",
      hint: "Focus on Duplicates or mismatches can affect row counts to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Choose join type and expand fields", "Match CustomerID columns", "Select Merge Queries", "Load Orders and Customers"],
      shuffled: ["Choose join type and expand fields", "Match CustomerID columns", "Select Merge Queries", "Load Orders and Customers"],
      expected: ["Load Orders and Customers", "Select Merge Queries", "Match CustomerID columns", "Choose join type and expand fields"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Expand → Choose columns from matched table", "Left Outer → Keep all left rows", "Merge Queries → Join tables by matching keys"],
      shuffled: ["Expand → Choose columns from matched table", "Left Outer → Keep all left rows", "Merge Queries → Join tables by matching keys"],
      expected: ["Merge Queries → Join tables by matching keys", "Left Outer → Keep all left rows", "Expand → Choose columns from matched table"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Orders.CustomerID", "Random row number", "Customers.CustomerID", "Report page title"],
      shuffled: ["Orders.CustomerID", "Random row number", "Customers.CustomerID", "Report page title"],
      expected: ["Orders.CustomerID (Matching keys)", "Customers.CustomerID (Matching keys)", "Random row number (Not reliable keys)", "Report page title (Not reliable keys)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Merge Queries",
      meaning: "Join tables by matching keys"
    },
    {
      id: 2,
      snippet: "Left Outer",
      meaning: "Keep all left rows"
    },
    {
      id: 3,
      snippet: "Expand",
      meaning: "Choose columns from matched table"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Merge Queries",
      scenario: "A sales table contains CustomerID but not Customer Name; a customer table has both.",
      prompt: "Which transformation can bring the name into sales data?",
      expectedResponse: "Merge Queries on CustomerID — Merge Queries can match customer records and expand the Name column."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Merge Queries?",
      sampleAnswer: "It joins two queries using matching columns."
    },
    {
      id: 2,
      question: "What is a join key?",
      sampleAnswer: "It is a column used to match related rows across tables."
    },
    {
      id: 3,
      question: "What does Left Outer mean?",
      sampleAnswer: "It keeps all rows from the left query and matches from the right query."
    },
    {
      id: 4,
      question: "What should you validate after merging?",
      sampleAnswer: "Check unmatched rows and unexpected duplicates or row increases."
    }
    ]
  },
  '24.9': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 24,
    moduleName: "Module 24: Power Query and Data Transformation",
    topicKey: '24.9',
    id: 221,
    topicTitle: "Applied Steps and Refresh",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What are Applied Steps?",
      options: [
        { key: "A", text: "Recorded Power Query transformations in sequence" },
        { key: "B", text: "Only chart titles" },
        { key: "C", text: "Saved bookmarks only" },
        { key: "D", text: "Email permissions" }
      ],
      correct: 0,
      explanation: "Applied Steps makes transformations repeatable.",
      hint: "Focus on Recorded Power Query transformations in sequence to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does Refresh usually do?",
      options: [
        { key: "A", text: "Changes every visual color" },
        { key: "B", text: "Re-runs the query against updated source data" },
        { key: "C", text: "Creates a new laptop user" },
        { key: "D", text: "Deletes all model tables" }
      ],
      correct: 1,
      explanation: "Refresh retrieves updated data and reapplies steps.",
      hint: "Focus on Re-runs the query against updated source data to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Why can a renamed source column break a query?",
      options: [
        { key: "A", text: "Power BI cannot read any text" },
        { key: "B", text: "All reports require video" },
        { key: "C", text: "A step may reference the old column name" },
        { key: "D", text: "Refresh always ignores schemas" }
      ],
      correct: 2,
      explanation: "Schema changes can invalidate transformations.",
      hint: "Focus on A step may reference the old column name to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What is a benefit of repeatable transformations?",
      options: [
        { key: "A", text: "Automatic business correctness without checks" },
        { key: "B", text: "No need for source access" },
        { key: "C", text: "No need for validation" },
        { key: "D", text: "Less manual cleaning when new data arrives" }
      ],
      correct: 3,
      explanation: "Applied steps can be re-run consistently.",
      hint: "Focus on Less manual cleaning when new data arrives to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should you check after refreshing?",
      options: [
        { key: "A", text: "Errors, row counts and expected values" },
        { key: "B", text: "Printer toner" },
        { key: "C", text: "Keyboard language only" },
        { key: "D", text: "Phone wallpaper" }
      ],
      correct: 0,
      explanation: "Validation catches source or transformation issues.",
      hint: "Focus on Errors, row counts and expected values to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Validate updated output", "Refresh when source changes", "Save and apply steps", "Create cleaning steps", "Connect a source"],
      shuffled: ["Validate updated output", "Refresh when source changes", "Save and apply steps", "Create cleaning steps", "Connect a source"],
      expected: ["Connect a source", "Create cleaning steps", "Save and apply steps", "Refresh when source changes", "Validate updated output"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Step error → Transformation cannot complete as defined", "Refresh → Re-run against current source data", "Applied Steps → Saved sequence of transformations"],
      shuffled: ["Step error → Transformation cannot complete as defined", "Refresh → Re-run against current source data", "Applied Steps → Saved sequence of transformations"],
      expected: ["Applied Steps → Saved sequence of transformations", "Refresh → Re-run against current source data", "Step error → Transformation cannot complete as defined"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Confirm latest source rows", "Change monitor wallpaper", "Inspect query errors", "Open a music player"],
      shuffled: ["Confirm latest source rows", "Change monitor wallpaper", "Inspect query errors", "Open a music player"],
      expected: ["Confirm latest source rows (Refresh checks)", "Inspect query errors (Refresh checks)", "Change monitor wallpaper (Unrelated checks)", "Open a music player (Unrelated checks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Applied Steps",
      meaning: "Saved sequence of transformations"
    },
    {
      id: 2,
      snippet: "Refresh",
      meaning: "Re-run against current source data"
    },
    {
      id: 3,
      snippet: "Step error",
      meaning: "Transformation cannot complete as defined"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Applied Steps and Refresh",
      scenario: "A store receives a new sales CSV in the same source location and format.",
      prompt: "What should the analyst do to update the prepared dataset?",
      expectedResponse: "Refresh the query — Refresh can re-run the saved transformations on updated data."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are Applied Steps?",
      sampleAnswer: "They are recorded Power Query transformations applied in sequence."
    },
    {
      id: 2,
      question: "What happens during refresh?",
      sampleAnswer: "Power BI re-reads the source and applies the transformation steps again."
    },
    {
      id: 3,
      question: "Why might refresh fail?",
      sampleAnswer: "The source path, schema, credentials, or transformation assumptions may have changed."
    },
    {
      id: 4,
      question: "What do you validate after refresh?",
      sampleAnswer: "Check errors, row counts, data types, and key metrics."
    }
    ]
  },
  '25.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.1',
    id: 222,
    topicTitle: "Why Data Models Matter",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a Power BI data model?",
      options: [
        { key: "A", text: "Connected tables, relationships and calculations" },
        { key: "B", text: "A chart color palette" },
        { key: "C", text: "A phone-only app" },
        { key: "D", text: "A printer configuration" }
      ],
      correct: 0,
      explanation: "The model organizes data for analysis.",
      hint: "Focus on Connected tables, relationships and calculations to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Why create relationships between tables?",
      options: [
        { key: "A", text: "To increase monitor brightness" },
        { key: "B", text: "To analyze related data together" },
        { key: "C", text: "To replace the source file" },
        { key: "D", text: "To add decorative icons" }
      ],
      correct: 1,
      explanation: "Relationships allow filters to work across tables.",
      hint: "Focus on To analyze related data together to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What can a poorly designed model cause?",
      options: [
        { key: "A", text: "Faster internet by default" },
        { key: "B", text: "Automatic perfect reports" },
        { key: "C", text: "Incorrect totals or confusing filters" },
        { key: "D", text: "More storage in the laptop" }
      ],
      correct: 2,
      explanation: "Model design affects analytical correctness.",
      hint: "Focus on Incorrect totals or confusing filters to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which is a good modeling practice?",
      options: [
        { key: "A", text: "Connect every table randomly" },
        { key: "B", text: "Duplicate all rows for every visual" },
        { key: "C", text: "Hide all table names" },
        { key: "D", text: "Use meaningful keys and clear table relationships" }
      ],
      correct: 3,
      explanation: "Clear relationships support accurate reports.",
      hint: "Focus on Use meaningful keys and clear table relationships to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What does a model help an analyst answer?",
      options: [
        { key: "A", text: "Sales by product category" },
        { key: "B", text: "Laptop fan speed" },
        { key: "C", text: "Printer ink levels" },
        { key: "D", text: "Mouse battery brand" }
      ],
      correct: 0,
      explanation: "Related tables enable business questions.",
      hint: "Focus on Sales by product category to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Validate totals in a visual", "Create relationships", "Find related tables", "Identify business questions"],
      shuffled: ["Validate totals in a visual", "Create relationships", "Find related tables", "Identify business questions"],
      expected: ["Identify business questions", "Find related tables", "Create relationships", "Validate totals in a visual"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Measure → Calculation evaluated in filter context", "Relationship → Links matching fields across tables", "Table → Stores related columns and rows"],
      shuffled: ["Measure → Calculation evaluated in filter context", "Relationship → Links matching fields across tables", "Table → Stores related columns and rows"],
      expected: ["Table → Stores related columns and rows", "Relationship → Links matching fields across tables", "Measure → Calculation evaluated in filter context"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Link Sales to Products", "Change visual title", "Check relationship direction", "Adjust chart color"],
      shuffled: ["Link Sales to Products", "Change visual title", "Check relationship direction", "Adjust chart color"],
      expected: ["Link Sales to Products (Modeling activities)", "Check relationship direction (Modeling activities)", "Change visual title (Report formatting activities)", "Adjust chart color (Report formatting activities)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Table",
      meaning: "Stores related columns and rows"
    },
    {
      id: 2,
      snippet: "Relationship",
      meaning: "Links matching fields across tables"
    },
    {
      id: 3,
      snippet: "Measure",
      meaning: "Calculation evaluated in filter context"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Why Data Models Matter",
      scenario: "A report has separate Sales and Products tables and needs revenue by product category.",
      prompt: "What should the analyst build first?",
      expectedResponse: "A correct relationship between the tables — A model relationship lets product categories filter sales."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a data model?",
      sampleAnswer: "It is the structure of tables, relationships, and calculations used for analysis."
    },
    {
      id: 2,
      question: "Why do relationships matter?",
      sampleAnswer: "They allow related tables to work together when filtering and summarizing data."
    },
    {
      id: 3,
      question: "What can go wrong in a poor model?",
      sampleAnswer: "Totals can be incorrect, filters can behave unexpectedly, and reports become hard to maintain."
    },
    {
      id: 4,
      question: "How do you validate a model?",
      sampleAnswer: "Check keys, relationships, filter behavior, and totals against source data."
    }
    ]
  },
  '25.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.2',
    id: 223,
    topicTitle: "Fact Tables and Dimension Tables",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does a fact table usually store?",
      options: [
        { key: "A", text: "Transactions and numeric measurements" },
        { key: "B", text: "Only report titles" },
        { key: "C", text: "Only user permissions" },
        { key: "D", text: "Only colors" }
      ],
      correct: 0,
      explanation: "Fact tables contain events and measures such as sales.",
      hint: "Focus on Transactions and numeric measurements to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does a dimension table usually store?",
      options: [
        { key: "A", text: "Only numerical transactions" },
        { key: "B", text: "Descriptive attributes such as product names" },
        { key: "C", text: "Only DAX formulas" },
        { key: "D", text: "Only images" }
      ],
      correct: 1,
      explanation: "Dimensions describe the facts.",
      hint: "Focus on Descriptive attributes such as product names to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is a likely fact table?",
      options: [
        { key: "A", text: "Product categories" },
        { key: "B", text: "Store locations" },
        { key: "C", text: "Sales transactions" },
        { key: "D", text: "Calendar months" }
      ],
      correct: 2,
      explanation: "Sales records are business events.",
      hint: "Focus on Sales transactions to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which is a likely dimension table?",
      options: [
        { key: "A", text: "Invoice line items" },
        { key: "B", text: "Individual payments" },
        { key: "C", text: "Daily sales transactions" },
        { key: "D", text: "Products with ProductID and Category" }
      ],
      correct: 3,
      explanation: "Products describes items sold.",
      hint: "Focus on Products with ProductID and Category to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which field often links Sales to Products?",
      options: [
        { key: "A", text: "ProductID" },
        { key: "B", text: "Report color" },
        { key: "C", text: "Phone number of analyst" },
        { key: "D", text: "Visual width" }
      ],
      correct: 0,
      explanation: "A shared product key connects facts to dimensions.",
      hint: "Focus on ProductID to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Analyze sales by category", "Match ProductID keys", "Identify Products lookup table", "Identify Sales transaction table"],
      shuffled: ["Analyze sales by category", "Match ProductID keys", "Identify Products lookup table", "Identify Sales transaction table"],
      expected: ["Identify Sales transaction table", "Identify Products lookup table", "Match ProductID keys", "Analyze sales by category"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["ProductID → Example key linking Sales and Products", "Dimension table → Describes business entities", "Fact table → Records business events"],
      shuffled: ["ProductID → Example key linking Sales and Products", "Dimension table → Describes business entities", "Fact table → Records business events"],
      expected: ["Fact table → Records business events", "Dimension table → Describes business entities", "ProductID → Example key linking Sales and Products"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["OrderID", "ProductName", "SalesAmount", "CategoryName"],
      shuffled: ["OrderID", "ProductName", "SalesAmount", "CategoryName"],
      expected: ["OrderID (Fact-table fields)", "SalesAmount (Fact-table fields)", "ProductName (Dimension attributes)", "CategoryName (Dimension attributes)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Fact table",
      meaning: "Records business events"
    },
    {
      id: 2,
      snippet: "Dimension table",
      meaning: "Describes business entities"
    },
    {
      id: 3,
      snippet: "ProductID",
      meaning: "Example key linking Sales and Products"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Fact Tables and Dimension Tables",
      scenario: "A report contains Sales transactions and a Products lookup table.",
      prompt: "Which table should store product category names?",
      expectedResponse: "Products dimension table — Product attributes belong in the Products dimension."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a fact table?",
      sampleAnswer: "A fact table records transactions or measurable business events."
    },
    {
      id: 2,
      question: "What is a dimension table?",
      sampleAnswer: "A dimension table stores descriptive attributes used to group or filter facts."
    },
    {
      id: 3,
      question: "Give an example of a fact table.",
      sampleAnswer: "A Sales table with transaction dates, product keys, quantities, and amounts."
    },
    {
      id: 4,
      question: "Give an example of a dimension table.",
      sampleAnswer: "A Products table with ProductID, ProductName, and Category."
    }
    ]
  },
  '25.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.3',
    id: 224,
    topicTitle: "Relationships and Cardinality",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does relationship cardinality describe?",
      options: [
        { key: "A", text: "How many matching rows can exist on each side" },
        { key: "B", text: "How many charts a report has" },
        { key: "C", text: "The size of the monitor" },
        { key: "D", text: "The color of the key" }
      ],
      correct: 0,
      explanation: "Cardinality describes one-to-one, one-to-many, and related patterns.",
      hint: "Focus on How many matching rows can exist on each side to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which symbol often represents the many side in Model view?",
      options: [
        { key: "A", text: "Percent (%)" },
        { key: "B", text: "Asterisk (*)" },
        { key: "C", text: "Hash (#)" },
        { key: "D", text: "Dollar ($)" }
      ],
      correct: 1,
      explanation: "The many side is shown with *.",
      hint: "Focus on Asterisk (*) to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is a common relationship between Products and Sales?",
      options: [
        { key: "A", text: "One sale to all products without keys" },
        { key: "B", text: "No relationship ever" },
        { key: "C", text: "One product to many sales rows" },
        { key: "D", text: "One report page to one chart" }
      ],
      correct: 2,
      explanation: "A product can appear in many transactions.",
      hint: "Focus on One product to many sales rows to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Why should a dimension key be unique on the one side?",
      options: [
        { key: "A", text: "To make the file smaller automatically" },
        { key: "B", text: "To change the visual font" },
        { key: "C", text: "To hide null values" },
        { key: "D", text: "To support a valid one-to-many relationship" }
      ],
      correct: 3,
      explanation: "Duplicate dimension keys can prevent the intended cardinality.",
      hint: "Focus on To support a valid one-to-many relationship to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What can an incorrect relationship cause?",
      options: [
        { key: "A", text: "Unexpected totals and filtering" },
        { key: "B", text: "Automatic data cleaning" },
        { key: "C", text: "Guaranteed faster refresh" },
        { key: "D", text: "Removal of all visuals" }
      ],
      correct: 0,
      explanation: "Wrong cardinality affects filter behavior.",
      hint: "Focus on Unexpected totals and filtering to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Verify cardinality and totals", "Create relationship", "Identify unique side", "Check key values"],
      shuffled: ["Verify cardinality and totals", "Create relationship", "Identify unique side", "Check key values"],
      expected: ["Check key values", "Identify unique side", "Create relationship", "Verify cardinality and totals"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Cardinality → Allowed matching-row pattern", "* → Many side of relationship", "1 → One side of relationship"],
      shuffled: ["Cardinality → Allowed matching-row pattern", "* → Many side of relationship", "1 → One side of relationship"],
      expected: ["1 → One side of relationship", "* → Many side of relationship", "Cardinality → Allowed matching-row pattern"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Products.ProductID unique", "Sales.ProductID repeated", "Customers.CustomerID unique", "Orders.CustomerID repeated"],
      shuffled: ["Products.ProductID unique", "Sales.ProductID repeated", "Customers.CustomerID unique", "Orders.CustomerID repeated"],
      expected: ["Products.ProductID unique (One-side examples)", "Customers.CustomerID unique (One-side examples)", "Sales.ProductID repeated (Many-side examples)", "Orders.CustomerID repeated (Many-side examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "1",
      meaning: "One side of relationship"
    },
    {
      id: 2,
      snippet: "*",
      meaning: "Many side of relationship"
    },
    {
      id: 3,
      snippet: "Cardinality",
      meaning: "Allowed matching-row pattern"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Relationships and Cardinality",
      scenario: "A Products table has one row per ProductID, but Sales has repeated ProductID values.",
      prompt: "Which cardinality fits this relationship?",
      expectedResponse: "One-to-many from Products to Sales — Products is the one side and Sales is the many side."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is cardinality?",
      sampleAnswer: "It describes how rows can match across related tables."
    },
    {
      id: 2,
      question: "What does one-to-many mean?",
      sampleAnswer: "One row in one table can relate to many rows in another table."
    },
    {
      id: 3,
      question: "What do 1 and * mean in Model view?",
      sampleAnswer: "1 indicates the unique side and * indicates the many side."
    },
    {
      id: 4,
      question: "How do you validate cardinality?",
      sampleAnswer: "Check whether the one-side key is unique and review expected matches."
    }
    ]
  },
  '25.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.4',
    id: 225,
    topicTitle: "One-to-Many and Many-to-One Relationships",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does one-to-many mean?",
      options: [
        { key: "A", text: "One key value matches multiple rows in another table" },
        { key: "B", text: "All rows must be unique in both tables" },
        { key: "C", text: "No rows can match" },
        { key: "D", text: "Every row matches every row" }
      ],
      correct: 0,
      explanation: "One-side records can link to repeated many-side records.",
      hint: "Focus on One key value matches multiple rows in another table to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which table is often on the one side?",
      options: [
        { key: "A", text: "Orders with repeated CustomerID" },
        { key: "B", text: "Customers with unique CustomerID" },
        { key: "C", text: "Sales lines with repeated ProductID" },
        { key: "D", text: "Event log with repeated UserID" }
      ],
      correct: 1,
      explanation: "A dimension table often has unique keys.",
      hint: "Focus on Customers with unique CustomerID to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What does many-to-one mean?",
      options: [
        { key: "A", text: "A different type of visual" },
        { key: "B", text: "An invalid SQL command" },
        { key: "C", text: "The same relationship described from the many side" },
        { key: "D", text: "A Power Query step" }
      ],
      correct: 2,
      explanation: "Many-to-one reverses the perspective of one-to-many.",
      hint: "Focus on The same relationship described from the many side to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What is a sensible relationship direction?",
      options: [
        { key: "A", text: "Sales one-to-one Products regardless of duplicates" },
        { key: "B", text: "Every table cross joined" },
        { key: "C", text: "Unrelated tables linked by title" },
        { key: "D", text: "Products one-to-many Sales" }
      ],
      correct: 3,
      explanation: "A unique product key links to repeated sales rows.",
      hint: "Focus on Products one-to-many Sales to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why check relationship direction and keys?",
      options: [
        { key: "A", text: "To ensure filters propagate as intended" },
        { key: "B", text: "To choose report wallpaper" },
        { key: "C", text: "To set laptop brightness" },
        { key: "D", text: "To rename the application" }
      ],
      correct: 0,
      explanation: "Filtering depends on the relationship setup.",
      hint: "Focus on To ensure filters propagate as intended to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test customer filtering of orders", "Connect matching keys", "Find repeated CustomerID in Orders", "Find unique CustomerID in Customers"],
      shuffled: ["Test customer filtering of orders", "Connect matching keys", "Find repeated CustomerID in Orders", "Find unique CustomerID in Customers"],
      expected: ["Find unique CustomerID in Customers", "Find repeated CustomerID in Orders", "Connect matching keys", "Test customer filtering of orders"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Unique key → Identifies one dimension record", "Many-to-one → Several rows link back to one key", "One-to-many → One key matches several rows"],
      shuffled: ["Unique key → Identifies one dimension record", "Many-to-one → Several rows link back to one key", "One-to-many → One key matches several rows"],
      expected: ["One-to-many → One key matches several rows", "Many-to-one → Several rows link back to one key", "Unique key → Identifies one dimension record"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Customers.CustomerID unique", "Orders.CustomerID repeated", "Products.ProductID unique", "Sales.ProductID repeated"],
      shuffled: ["Customers.CustomerID unique", "Orders.CustomerID repeated", "Products.ProductID unique", "Sales.ProductID repeated"],
      expected: ["Customers.CustomerID unique (One-side key examples)", "Products.ProductID unique (One-side key examples)", "Orders.CustomerID repeated (Many-side key examples)", "Sales.ProductID repeated (Many-side key examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "One-to-many",
      meaning: "One key matches several rows"
    },
    {
      id: 2,
      snippet: "Many-to-one",
      meaning: "Several rows link back to one key"
    },
    {
      id: 3,
      snippet: "Unique key",
      meaning: "Identifies one dimension record"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: One-to-Many and Many-to-One Relationships",
      scenario: "One customer can place several orders.",
      prompt: "Which relationship fits Customers and Orders?",
      expectedResponse: "One-to-many from Customers to Orders — A customer can have multiple order rows."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Explain one-to-many.",
      sampleAnswer: "One record in a table can relate to several records in another table."
    },
    {
      id: 2,
      question: "Explain many-to-one.",
      sampleAnswer: "It is the same relationship viewed from the table with repeated keys."
    },
    {
      id: 3,
      question: "Give a business example.",
      sampleAnswer: "One customer can have many orders."
    },
    {
      id: 4,
      question: "Why check key uniqueness?",
      sampleAnswer: "A one-side key should uniquely identify records for the intended relationship."
    }
    ]
  },
  '25.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.5',
    id: 226,
    topicTitle: "Star Schema Design",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a star schema?",
      options: [
        { key: "A", text: "A central fact table linked to dimension tables" },
        { key: "B", text: "A five-pointed chart shape" },
        { key: "C", text: "A table with only five columns" },
        { key: "D", text: "A report with no relationships" }
      ],
      correct: 0,
      explanation: "Star schemas organize facts and dimensions.",
      hint: "Focus on A central fact table linked to dimension tables to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which table usually sits at the center?",
      options: [
        { key: "A", text: "Date label only" },
        { key: "B", text: "Fact table" },
        { key: "C", text: "Color lookup" },
        { key: "D", text: "User permission list" }
      ],
      correct: 1,
      explanation: "The fact table connects to descriptive dimensions.",
      hint: "Focus on Fact table to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is a dimension in a sales star schema?",
      options: [
        { key: "A", text: "Sales transactions" },
        { key: "B", text: "Order line events" },
        { key: "C", text: "Products" },
        { key: "D", text: "Payment facts" }
      ],
      correct: 2,
      explanation: "Products supplies descriptive attributes.",
      hint: "Focus on Products to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Why is star schema useful?",
      options: [
        { key: "A", text: "It guarantees zero errors" },
        { key: "B", text: "It removes the need for measures" },
        { key: "C", text: "It only works with CSV" },
        { key: "D", text: "Clear filtering and simpler analytical modeling" }
      ],
      correct: 3,
      explanation: "Star schema improves model clarity.",
      hint: "Focus on Clear filtering and simpler analytical modeling to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which relationship pattern is common?",
      options: [
        { key: "A", text: "Dimensions one-to-many Facts" },
        { key: "B", text: "Facts randomly cross-joined" },
        { key: "C", text: "All tables with no keys" },
        { key: "D", text: "Each chart as a table" }
      ],
      correct: 0,
      explanation: "Dimension keys typically filter fact rows.",
      hint: "Focus on Dimensions one-to-many Facts to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Validate totals", "Link dimensions to Sales", "Identify Customers dimension", "Identify Products dimension", "Identify Sales fact"],
      shuffled: ["Validate totals", "Link dimensions to Sales", "Identify Customers dimension", "Identify Products dimension", "Identify Sales fact"],
      expected: ["Identify Sales fact", "Identify Products dimension", "Identify Customers dimension", "Link dimensions to Sales", "Validate totals"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Star schema → Fact linked to dimensions", "Dimension → Descriptive lookup table", "Fact → Central transaction table"],
      shuffled: ["Star schema → Fact linked to dimensions", "Dimension → Descriptive lookup table", "Fact → Central transaction table"],
      expected: ["Fact → Central transaction table", "Dimension → Descriptive lookup table", "Star schema → Fact linked to dimensions"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Products", "Sales Transactions", "Customers", "Order Line Items"],
      shuffled: ["Products", "Sales Transactions", "Customers", "Order Line Items"],
      expected: ["Products (Dimension tables)", "Customers (Dimension tables)", "Sales Transactions (Fact tables)", "Order Line Items (Fact tables)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Fact",
      meaning: "Central transaction table"
    },
    {
      id: 2,
      snippet: "Dimension",
      meaning: "Descriptive lookup table"
    },
    {
      id: 3,
      snippet: "Star schema",
      meaning: "Fact linked to dimensions"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Star Schema Design",
      scenario: "A company wants a clear sales model with Sales, Products, Customers and Date tables.",
      prompt: "Which design is commonly suitable?",
      expectedResponse: "Star schema with Sales as fact — A star schema links dimensions to a central fact table."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a star schema?",
      sampleAnswer: "It is a model with a central fact table connected to dimension tables."
    },
    {
      id: 2,
      question: "Why is it called a star schema?",
      sampleAnswer: "The dimension tables branch out around the fact table."
    },
    {
      id: 3,
      question: "What is a sales fact table?",
      sampleAnswer: "It contains sales transactions and numeric metrics."
    },
    {
      id: 4,
      question: "What is a benefit of star schema?",
      sampleAnswer: "It simplifies relationships and supports consistent filtering and measures."
    }
    ]
  },
  '25.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.6',
    id: 227,
    topicTitle: "Date Tables",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a date table?",
      options: [
        { key: "A", text: "A table containing calendar dates and useful date attributes" },
        { key: "B", text: "A table containing only prices" },
        { key: "C", text: "A chart title" },
        { key: "D", text: "A source of passwords" }
      ],
      correct: 0,
      explanation: "Date tables support time-based analysis.",
      hint: "Focus on A table containing calendar dates and useful date attributes to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which column should a proper daily date table contain?",
      options: [
        { key: "A", text: "Only month names without years" },
        { key: "B", text: "A unique date for each day in its range" },
        { key: "C", text: "Only product codes" },
        { key: "D", text: "Only sales amounts" }
      ],
      correct: 1,
      explanation: "A continuous unique Date column is important.",
      hint: "Focus on A unique date for each day in its range to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is a useful date attribute?",
      options: [
        { key: "A", text: "Monitor brand" },
        { key: "B", text: "Printer model" },
        { key: "C", text: "Month or Year" },
        { key: "D", text: "Chart wallpaper" }
      ],
      correct: 2,
      explanation: "Date attributes enable grouping by time periods.",
      hint: "Focus on Month or Year to answer this Power BI concept."
    },
    {
      id: 4,
      question: "How can a Date table connect to Sales?",
      options: [
        { key: "A", text: "By matching report colors" },
        { key: "B", text: "By joining every row randomly" },
        { key: "C", text: "By matching file extensions" },
        { key: "D", text: "Using the date fields in a relationship" }
      ],
      correct: 3,
      explanation: "A relationship allows date filters to affect sales.",
      hint: "Focus on Using the date fields in a relationship to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why use a dedicated date table?",
      options: [
        { key: "A", text: "Consistent filtering and time-intelligence calculations" },
        { key: "B", text: "It guarantees faster internet" },
        { key: "C", text: "It replaces every fact table" },
        { key: "D", text: "It makes all dates text" }
      ],
      correct: 0,
      explanation: "A date dimension supports reliable period analysis.",
      hint: "Focus on Consistent filtering and time-intelligence calculations to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check monthly totals", "Relate Date to Sales", "Add Year and Month attributes", "Create or load calendar dates"],
      shuffled: ["Check monthly totals", "Relate Date to Sales", "Add Year and Month attributes", "Create or load calendar dates"],
      expected: ["Create or load calendar dates", "Add Year and Month attributes", "Relate Date to Sales", "Check monthly totals"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Month → Calendar month attribute", "Year → Calendar year attribute", "Date column → Unique daily calendar key"],
      shuffled: ["Month → Calendar month attribute", "Year → Calendar year attribute", "Date column → Unique daily calendar key"],
      expected: ["Date column → Unique daily calendar key", "Year → Calendar year attribute", "Month → Calendar month attribute"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Date", "Order Amount", "Month Number", "ProductID"],
      shuffled: ["Date", "Order Amount", "Month Number", "ProductID"],
      expected: ["Date (Date-table attributes)", "Month Number (Date-table attributes)", "Order Amount (Sales-fact fields)", "ProductID (Sales-fact fields)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Date column",
      meaning: "Unique daily calendar key"
    },
    {
      id: 2,
      snippet: "Year",
      meaning: "Calendar year attribute"
    },
    {
      id: 3,
      snippet: "Month",
      meaning: "Calendar month attribute"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Date Tables",
      scenario: "A manager wants to filter revenue by Year and Month.",
      prompt: "Which table is useful in the model?",
      expectedResponse: "Date table — A Date table provides consistent calendar fields."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a date table?",
      sampleAnswer: "It is a table of dates used to organize and analyze time periods."
    },
    {
      id: 2,
      question: "Why include Year and Month?",
      sampleAnswer: "They help group and filter metrics by calendar periods."
    },
    {
      id: 3,
      question: "How does a date table relate to sales?",
      sampleAnswer: "Its Date column can relate to the sales transaction date."
    },
    {
      id: 4,
      question: "What should be checked in a date table?",
      sampleAnswer: "Unique, valid, continuous dates covering the needed analysis range."
    }
    ]
  },
  '25.7': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 25,
    moduleName: "Module 25: Data Modeling",
    topicKey: '25.7',
    id: 228,
    topicTitle: "Model Validation and Common Relationship Errors",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a warning sign of a relationship problem?",
      options: [
        { key: "A", text: "Unexpected duplicate totals" },
        { key: "B", text: "A report with a title" },
        { key: "C", text: "A chart with labels" },
        { key: "D", text: "A table with a name" }
      ],
      correct: 0,
      explanation: "Incorrect relationships can distort aggregates.",
      hint: "Focus on Unexpected duplicate totals to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What can prevent a one-to-many relationship?",
      options: [
        { key: "A", text: "A meaningful column name" },
        { key: "B", text: "Duplicate values on the intended one side" },
        { key: "C", text: "A valid numeric measure" },
        { key: "D", text: "A formatted report" }
      ],
      correct: 1,
      explanation: "The one-side key should be unique.",
      hint: "Focus on Duplicate values on the intended one side to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What should related key columns have?",
      options: [
        { key: "A", text: "Different unrelated formats" },
        { key: "B", text: "Only images" },
        { key: "C", text: "Compatible data types and matching values" },
        { key: "D", text: "Always different column names" }
      ],
      correct: 2,
      explanation: "Incompatible types can prevent correct matching.",
      hint: "Focus on Compatible data types and matching values to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What is an orphan key?",
      options: [
        { key: "A", text: "A blank chart title" },
        { key: "B", text: "A missing report icon" },
        { key: "C", text: "A disabled bookmark" },
        { key: "D", text: "A fact key with no matching dimension record" }
      ],
      correct: 3,
      explanation: "Unmatched keys can lead to blank categories.",
      hint: "Focus on A fact key with no matching dimension record to answer this Power BI concept."
    },
    {
      id: 5,
      question: "How should a model be validated?",
      options: [
        { key: "A", text: "Compare totals and test filters against expected results" },
        { key: "B", text: "Only change chart colors" },
        { key: "C", text: "Only publish immediately" },
        { key: "D", text: "Ignore unmatched rows" }
      ],
      correct: 0,
      explanation: "Validation checks business correctness.",
      hint: "Focus on Compare totals and test filters against expected results to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Compare totals to source", "Test filter behavior", "Check relationship types", "Inspect key uniqueness"],
      shuffled: ["Compare totals to source", "Test filter behavior", "Check relationship types", "Inspect key uniqueness"],
      expected: ["Inspect key uniqueness", "Check relationship types", "Test filter behavior", "Compare totals to source"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Validation → Check model against expected results", "Unmatched fact key → No matching dimension record", "Duplicate dimension key → Potential one-side cardinality issue"],
      shuffled: ["Validation → Check model against expected results", "Unmatched fact key → No matching dimension record", "Duplicate dimension key → Potential one-side cardinality issue"],
      expected: ["Duplicate dimension key → Potential one-side cardinality issue", "Unmatched fact key → No matching dimension record", "Validation → Check model against expected results"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Compare total sales with source", "Change page wallpaper", "Test a product slicer", "Rename dashboard tab only"],
      shuffled: ["Compare total sales with source", "Change page wallpaper", "Test a product slicer", "Rename dashboard tab only"],
      expected: ["Compare total sales with source (Model checks)", "Test a product slicer (Model checks)", "Change page wallpaper (Not model checks)", "Rename dashboard tab only (Not model checks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Duplicate dimension key",
      meaning: "Potential one-side cardinality issue"
    },
    {
      id: 2,
      snippet: "Unmatched fact key",
      meaning: "No matching dimension record"
    },
    {
      id: 3,
      snippet: "Validation",
      meaning: "Check model against expected results"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Model Validation and Common Relationship Errors",
      scenario: "A sales report doubles its total after adding a relationship.",
      prompt: "What should the analyst inspect first?",
      expectedResponse: "Relationship keys and cardinality — Incorrect relationships or duplicate keys may inflate totals."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is model validation?",
      sampleAnswer: "It is checking whether relationships and calculations produce expected results."
    },
    {
      id: 2,
      question: "What is a duplicate-key problem?",
      sampleAnswer: "The intended one-side table has repeated key values."
    },
    {
      id: 3,
      question: "What is an unmatched key?",
      sampleAnswer: "A key in one table has no corresponding record in the related table."
    },
    {
      id: 4,
      question: "How do you troubleshoot wrong totals?",
      sampleAnswer: "Inspect relationship cardinality, key uniqueness, filter paths, and source totals."
    }
    ]
  },
  '26.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.1',
    id: 229,
    topicTitle: "What Is DAX?",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does DAX stand for?",
      options: [
        { key: "A", text: "Data Analysis Expressions" },
        { key: "B", text: "Data Access Exchange" },
        { key: "C", text: "Desktop Analytics XML" },
        { key: "D", text: "Direct Array Export" }
      ],
      correct: 0,
      explanation: "DAX is the formula language for Power BI models.",
      hint: "Focus on Data Analysis Expressions to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is DAX used for?",
      options: [
        { key: "A", text: "Installing Windows" },
        { key: "B", text: "Creating measures and calculated columns" },
        { key: "C", text: "Editing photos" },
        { key: "D", text: "Drawing network cables" }
      ],
      correct: 1,
      explanation: "DAX defines calculations in the model.",
      hint: "Focus on Creating measures and calculated columns to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is a valid simple DAX measure expression?",
      options: [
        { key: "A", text: "SELECT * FROM Sales" },
        { key: "B", text: "print(Sales)" },
        { key: "C", text: "SUM(Sales[Amount])" },
        { key: "D", text: "=VLOOKUP(A1,B:C,2,FALSE)" }
      ],
      correct: 2,
      explanation: "SUM is a DAX aggregation function.",
      hint: "Focus on SUM(Sales[Amount]) to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Where are DAX calculations evaluated?",
      options: [
        { key: "A", text: "In the laptop BIOS" },
        { key: "B", text: "Only in a phone camera" },
        { key: "C", text: "Only in a printer" },
        { key: "D", text: "In the Power BI semantic model" }
      ],
      correct: 3,
      explanation: "DAX works with model tables and context.",
      hint: "Focus on In the Power BI semantic model to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which DAX function adds numeric values in a column?",
      options: [
        { key: "A", text: "SUM" },
        { key: "B", text: "LEFT JOIN" },
        { key: "C", text: "PRINT" },
        { key: "D", text: "DROP TABLE" }
      ],
      correct: 0,
      explanation: "SUM totals a numeric column.",
      hint: "Focus on SUM to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Add the measure to a visual", "Write a DAX expression", "Create a measure", "Identify a metric to calculate"],
      shuffled: ["Add the measure to a visual", "Write a DAX expression", "Create a measure", "Identify a metric to calculate"],
      expected: ["Identify a metric to calculate", "Create a measure", "Write a DAX expression", "Add the measure to a visual"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["SUM → Adds numeric column values", "Measure → Dynamic calculation in filter context", "DAX → Data Analysis Expressions language"],
      shuffled: ["SUM → Adds numeric column values", "Measure → Dynamic calculation in filter context", "DAX → Data Analysis Expressions language"],
      expected: ["DAX → Data Analysis Expressions language", "Measure → Dynamic calculation in filter context", "SUM → Adds numeric column values"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["SUM(Sales[Amount])", "SELECT * FROM Sales", "COUNTROWS(Sales)", "GROUP BY Category"],
      shuffled: ["SUM(Sales[Amount])", "SELECT * FROM Sales", "COUNTROWS(Sales)", "GROUP BY Category"],
      expected: ["SUM(Sales[Amount]) (DAX expressions)", "COUNTROWS(Sales) (DAX expressions)", "SELECT * FROM Sales (SQL statements)", "GROUP BY Category (SQL statements)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "DAX",
      meaning: "Data Analysis Expressions language"
    },
    {
      id: 2,
      snippet: "Measure",
      meaning: "Dynamic calculation in filter context"
    },
    {
      id: 3,
      snippet: "SUM",
      meaning: "Adds numeric column values"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: What Is DAX?",
      scenario: "A manager needs total revenue from the Sales[Amount] column.",
      prompt: "Which DAX expression can calculate it?",
      expectedResponse: "SUM(Sales[Amount]) — SUM is used to aggregate a numeric column in DAX."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is DAX?",
      sampleAnswer: "DAX stands for Data Analysis Expressions and is used for calculations in Power BI models."
    },
    {
      id: 2,
      question: "What is a measure?",
      sampleAnswer: "A measure is a calculation evaluated according to the current filter context."
    },
    {
      id: 3,
      question: "What does SUM do in DAX?",
      sampleAnswer: "It adds the numeric values of a column."
    },
    {
      id: 4,
      question: "How is DAX different from SQL?",
      sampleAnswer: "DAX calculates over model data and filter context; SQL queries relational databases."
    }
    ]
  },
  '26.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.2',
    id: 230,
    topicTitle: "Calculated Columns vs Measures",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "When is a calculated column typically evaluated?",
      options: [
        { key: "A", text: "During data processing or refresh" },
        { key: "B", text: "Every time a user moves the mouse" },
        { key: "C", text: "Only when exporting a PDF" },
        { key: "D", text: "Only on mobile phones" }
      ],
      correct: 0,
      explanation: "Calculated column values are stored in the model.",
      hint: "Focus on During data processing or refresh to answer this Power BI concept."
    },
    {
      id: 2,
      question: "When is a measure evaluated?",
      options: [
        { key: "A", text: "Only during Windows startup" },
        { key: "B", text: "When a visual requests a result in its filter context" },
        { key: "C", text: "Only once when installing Power BI" },
        { key: "D", text: "Only when printing" }
      ],
      correct: 1,
      explanation: "Measures respond to filters.",
      hint: "Focus on When a visual requests a result in its filter context to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is usually suitable for a dynamic total sales KPI?",
      options: [
        { key: "A", text: "Calculated column for the entire grand total" },
        { key: "B", text: "Report title" },
        { key: "C", text: "Measure" },
        { key: "D", text: "Page bookmark" }
      ],
      correct: 2,
      explanation: "A measure recalculates under slicers.",
      hint: "Focus on Measure to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which is suitable for a row-level category derived from each row?",
      options: [
        { key: "A", text: "Dashboard tile" },
        { key: "B", text: "Service workspace" },
        { key: "C", text: "Printer setting" },
        { key: "D", text: "Calculated column" }
      ],
      correct: 3,
      explanation: "Calculated columns create row-level stored values.",
      hint: "Focus on Calculated column to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which statement is correct?",
      options: [
        { key: "A", text: "Calculated columns store results; measures calculate on demand" },
        { key: "B", text: "Measures always store one value per row" },
        { key: "C", text: "Calculated columns cannot use DAX" },
        { key: "D", text: "Both always behave identically" }
      ],
      correct: 0,
      explanation: "Their evaluation and storage differ.",
      hint: "Focus on Calculated columns store results; measures calculate on demand to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test with report filters", "Write the DAX formula", "Choose calculated column or measure", "Identify row-level or dynamic need"],
      shuffled: ["Test with report filters", "Write the DAX formula", "Choose calculated column or measure", "Identify row-level or dynamic need"],
      expected: ["Identify row-level or dynamic need", "Choose calculated column or measure", "Write the DAX formula", "Test with report filters"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Slicer → Changes report filter context", "Measure → Dynamic aggregated result", "Calculated column → Stored row-level result"],
      shuffled: ["Slicer → Changes report filter context", "Measure → Dynamic aggregated result", "Calculated column → Stored row-level result"],
      expected: ["Calculated column → Stored row-level result", "Measure → Dynamic aggregated result", "Slicer → Changes report filter context"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Row-level category label", "Total revenue KPI", "Per-row quantity times price", "Average sales by selected month"],
      shuffled: ["Row-level category label", "Total revenue KPI", "Per-row quantity times price", "Average sales by selected month"],
      expected: ["Row-level category label (Calculated-column examples)", "Per-row quantity times price (Calculated-column examples)", "Total revenue KPI (Measure examples)", "Average sales by selected month (Measure examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Calculated column",
      meaning: "Stored row-level result"
    },
    {
      id: 2,
      snippet: "Measure",
      meaning: "Dynamic aggregated result"
    },
    {
      id: 3,
      snippet: "Slicer",
      meaning: "Changes report filter context"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Calculated Columns vs Measures",
      scenario: "A report total must change when the user selects a different city.",
      prompt: "Which calculation type is best for the total?",
      expectedResponse: "Measure — Measures respond to filter context."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a calculated column?",
      sampleAnswer: "It is a DAX calculation that creates stored values for each row."
    },
    {
      id: 2,
      question: "What is a measure?",
      sampleAnswer: "It is a DAX calculation evaluated dynamically for the current context."
    },
    {
      id: 3,
      question: "Which should calculate a slicer-responsive total?",
      sampleAnswer: "A measure, because it responds to report filters."
    },
    {
      id: 4,
      question: "When is a calculated column useful?",
      sampleAnswer: "When a row-level derived field is needed for grouping or filtering."
    }
    ]
  },
  '26.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.3',
    id: 231,
    topicTitle: "SUM, COUNTROWS and DISTINCTCOUNT",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which function adds Sales[Amount]?",
      options: [
        { key: "A", text: "SUM(Sales[Amount])" },
        { key: "B", text: "COUNTROWS(Sales[Amount])" },
        { key: "C", text: "DISTINCTCOUNT(Sales)" },
        { key: "D", text: "LEFT(Sales[Amount])" }
      ],
      correct: 0,
      explanation: "SUM aggregates numeric values.",
      hint: "Focus on SUM(Sales[Amount]) to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which function counts rows in the Sales table?",
      options: [
        { key: "A", text: "SUM(Sales)" },
        { key: "B", text: "COUNTROWS(Sales)" },
        { key: "C", text: "DISTINCTCOUNT(Sales)" },
        { key: "D", text: "COUNTROWS(Sales[Amount])" }
      ],
      correct: 1,
      explanation: "COUNTROWS takes a table expression.",
      hint: "Focus on COUNTROWS(Sales) to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which function counts unique customer IDs?",
      options: [
        { key: "A", text: "SUM(Sales[CustomerID])" },
        { key: "B", text: "COUNTROWS(Sales[CustomerID])" },
        { key: "C", text: "DISTINCTCOUNT(Sales[CustomerID])" },
        { key: "D", text: "MAX(Sales)" }
      ],
      correct: 2,
      explanation: "DISTINCTCOUNT counts distinct column values.",
      hint: "Focus on DISTINCTCOUNT(Sales[CustomerID]) to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What does COUNTROWS(Sales) return?",
      options: [
        { key: "A", text: "Sum of Sales Amount" },
        { key: "B", text: "Number of report pages" },
        { key: "C", text: "Only nonblank product names" },
        { key: "D", text: "Number of rows in Sales under current filters" }
      ],
      correct: 3,
      explanation: "COUNTROWS counts table rows.",
      hint: "Focus on Number of rows in Sales under current filters to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What is a useful metric for DISTINCTCOUNT?",
      options: [
        { key: "A", text: "Number of distinct customers" },
        { key: "B", text: "Total currency amount" },
        { key: "C", text: "Average order price" },
        { key: "D", text: "Minimum transaction date" }
      ],
      correct: 0,
      explanation: "DISTINCTCOUNT is suited to unique IDs.",
      hint: "Focus on Number of distinct customers to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Define unique customers with DISTINCTCOUNT", "Define transaction count with COUNTROWS", "Use SUM on Amount", "Define total revenue metric"],
      shuffled: ["Define unique customers with DISTINCTCOUNT", "Define transaction count with COUNTROWS", "Use SUM on Amount", "Define total revenue metric"],
      expected: ["Define total revenue metric", "Use SUM on Amount", "Define transaction count with COUNTROWS", "Define unique customers with DISTINCTCOUNT"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["DISTINCTCOUNT → Number of distinct values", "COUNTROWS → Number of table rows", "SUM → Total numeric values"],
      shuffled: ["DISTINCTCOUNT → Number of distinct values", "COUNTROWS → Number of table rows", "SUM → Total numeric values"],
      expected: ["SUM → Total numeric values", "COUNTROWS → Number of table rows", "DISTINCTCOUNT → Number of distinct values"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["SUM(Sales[Amount])", "DISTINCTCOUNT(Sales[CustomerID])", "COUNTROWS(Sales)", "DISTINCTCOUNT(Sales[ProductID])"],
      shuffled: ["SUM(Sales[Amount])", "DISTINCTCOUNT(Sales[CustomerID])", "COUNTROWS(Sales)", "DISTINCTCOUNT(Sales[ProductID])"],
      expected: ["SUM(Sales[Amount]) (Total or count metrics)", "COUNTROWS(Sales) (Total or count metrics)", "DISTINCTCOUNT(Sales[CustomerID]) (Unique-value metrics)", "DISTINCTCOUNT(Sales[ProductID]) (Unique-value metrics)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SUM",
      meaning: "Total numeric values"
    },
    {
      id: 2,
      snippet: "COUNTROWS",
      meaning: "Number of table rows"
    },
    {
      id: 3,
      snippet: "DISTINCTCOUNT",
      meaning: "Number of distinct values"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: SUM, COUNTROWS and DISTINCTCOUNT",
      scenario: "A sales table has many orders from the same customer.",
      prompt: "Which DAX function counts unique CustomerID values?",
      expectedResponse: "DISTINCTCOUNT(Sales[CustomerID]) — DISTINCTCOUNT counts unique values of a column."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does SUM do?",
      sampleAnswer: "It adds numeric values in a column under current filters."
    },
    {
      id: 2,
      question: "What does COUNTROWS do?",
      sampleAnswer: "It counts rows in a table expression."
    },
    {
      id: 3,
      question: "What does DISTINCTCOUNT do?",
      sampleAnswer: "It counts distinct values in a column."
    },
    {
      id: 4,
      question: "When would you use DISTINCTCOUNT?",
      sampleAnswer: "When counting unique customers or products rather than transactions."
    }
    ]
  },
  '26.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.4',
    id: 232,
    topicTitle: "CALCULATE Basics",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does CALCULATE do in DAX?",
      options: [
        { key: "A", text: "Evaluates an expression in a modified filter context" },
        { key: "B", text: "Creates a new Excel workbook" },
        { key: "C", text: "Sorts a visual by default" },
        { key: "D", text: "Deletes all filters permanently" }
      ],
      correct: 0,
      explanation: "CALCULATE can add or modify filters for an expression.",
      hint: "Focus on Evaluates an expression in a modified filter context to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which is a valid CALCULATE example?",
      options: [
        { key: "A", text: "SELECT [Total Sales] FROM Books" },
        { key: "B", text: "CALCULATE([Total Sales], Products[Category] = \"Books\")" },
        { key: "C", text: "print([Total Sales])" },
        { key: "D", text: "COUNTROWS([Total Sales], \"Books\")" }
      ],
      correct: 1,
      explanation: "CALCULATE evaluates a measure under a category filter.",
      hint: "Focus on CALCULATE([Total Sales], Products[Category] = \"Books\") to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is the first argument to CALCULATE?",
      options: [
        { key: "A", text: "A chart title" },
        { key: "B", text: "A file path" },
        { key: "C", text: "The expression to evaluate" },
        { key: "D", text: "A report page name" }
      ],
      correct: 2,
      explanation: "The first argument is an expression.",
      hint: "Focus on The expression to evaluate to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Why might an analyst use CALCULATE?",
      options: [
        { key: "A", text: "To change monitor brightness" },
        { key: "B", text: "To install a connector" },
        { key: "C", text: "To edit a video" },
        { key: "D", text: "To calculate revenue for a specific category" }
      ],
      correct: 3,
      explanation: "CALCULATE supports filtered metrics.",
      hint: "Focus on To calculate revenue for a specific category to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Does CALCULATE always remove every existing filter?",
      options: [
        { key: "A", text: "No, filter behavior depends on its arguments" },
        { key: "B", text: "Yes, without exception" },
        { key: "C", text: "Only when used in Excel" },
        { key: "D", text: "It cannot use filters" }
      ],
      correct: 0,
      explanation: "CALCULATE modifies filter context according to rules.",
      hint: "Focus on No, filter behavior depends on its arguments to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Compare filtered and total results", "Use CALCULATE with the measure", "Choose a category filter", "Create Total Sales measure"],
      shuffled: ["Compare filtered and total results", "Use CALCULATE with the measure", "Choose a category filter", "Create Total Sales measure"],
      expected: ["Create Total Sales measure", "Choose a category filter", "Use CALCULATE with the measure", "Compare filtered and total results"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Filter argument → Condition modifying filter context", "Expression → Calculation being evaluated", "CALCULATE → Evaluate expression with changed filters"],
      shuffled: ["Filter argument → Condition modifying filter context", "Expression → Calculation being evaluated", "CALCULATE → Evaluate expression with changed filters"],
      expected: ["CALCULATE → Evaluate expression with changed filters", "Expression → Calculation being evaluated", "Filter argument → Condition modifying filter context"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Products[Category] = \"Books\"", "Chart background = purple", "Sales[Region] = \"East\"", "Page width = 16:9"],
      shuffled: ["Products[Category] = \"Books\"", "Chart background = purple", "Sales[Region] = \"East\"", "Page width = 16:9"],
      expected: ["Products[Category] = \"Books\" (DAX filter expressions)", "Sales[Region] = \"East\" (DAX filter expressions)", "Chart background = purple (Unrelated formatting settings)", "Page width = 16:9 (Unrelated formatting settings)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CALCULATE",
      meaning: "Evaluate expression with changed filters"
    },
    {
      id: 2,
      snippet: "Expression",
      meaning: "Calculation being evaluated"
    },
    {
      id: 3,
      snippet: "Filter argument",
      meaning: "Condition modifying filter context"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: CALCULATE Basics",
      scenario: "A manager wants sales only for the Books category.",
      prompt: "Which DAX function is commonly used to modify the filter context?",
      expectedResponse: "CALCULATE — CALCULATE can evaluate Total Sales under a Books filter."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does CALCULATE do?",
      sampleAnswer: "It evaluates a DAX expression in a modified filter context."
    },
    {
      id: 2,
      question: "What is its first argument?",
      sampleAnswer: "The expression or measure to evaluate."
    },
    {
      id: 3,
      question: "Give a business use of CALCULATE.",
      sampleAnswer: "Calculate total revenue for a chosen product category."
    },
    {
      id: 4,
      question: "Why validate CALCULATE results?",
      sampleAnswer: "Filters can interact, so results should be checked against expected records."
    }
    ]
  },
  '26.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.5',
    id: 233,
    topicTitle: "Filter Context",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is filter context?",
      options: [
        { key: "A", text: "The set of filters affecting a DAX calculation" },
        { key: "B", text: "A report color theme" },
        { key: "C", text: "A computer folder" },
        { key: "D", text: "A saved password" }
      ],
      correct: 0,
      explanation: "Filter context determines which rows contribute to a result.",
      hint: "Focus on The set of filters affecting a DAX calculation to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What can change filter context?",
      options: [
        { key: "A", text: "Changing the mouse brand" },
        { key: "B", text: "Slicers and visual selections" },
        { key: "C", text: "Renaming a desktop shortcut" },
        { key: "D", text: "Opening a music player" }
      ],
      correct: 1,
      explanation: "Visual interactions apply filters.",
      hint: "Focus on Slicers and visual selections to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What happens to a Total Sales measure when a Region slicer selects East?",
      options: [
        { key: "A", text: "It always ignores the slicer" },
        { key: "B", text: "It deletes other regions from the source" },
        { key: "C", text: "It evaluates sales for the selected context" },
        { key: "D", text: "It becomes text" }
      ],
      correct: 2,
      explanation: "Measures typically respond to slicer filters.",
      hint: "Focus on It evaluates sales for the selected context to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Can relationships affect filter context?",
      options: [
        { key: "A", text: "No, never" },
        { key: "B", text: "Only in CSV files" },
        { key: "C", text: "Only on mobile" },
        { key: "D", text: "Yes, filters can propagate across related tables" }
      ],
      correct: 3,
      explanation: "Relationships enable filter propagation.",
      hint: "Focus on Yes, filters can propagate across related tables to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why is filter context important?",
      options: [
        { key: "A", text: "The same measure can return different values in different visuals" },
        { key: "B", text: "It fixes all source errors" },
        { key: "C", text: "It replaces data cleaning" },
        { key: "D", text: "It disables calculations" }
      ],
      correct: 0,
      explanation: "Context changes the rows used for calculation.",
      hint: "Focus on The same measure can return different values in different visuals to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Observe changed measure result", "Select East", "Add Region slicer", "Create Total Sales measure"],
      shuffled: ["Observe changed measure result", "Select East", "Add Region slicer", "Create Total Sales measure"],
      expected: ["Create Total Sales measure", "Add Region slicer", "Select East", "Observe changed measure result"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Relationship → Can propagate filters between tables", "Slicer → User control that applies filters", "Filter context → Active filters for a calculation"],
      shuffled: ["Relationship → Can propagate filters between tables", "Slicer → User control that applies filters", "Filter context → Active filters for a calculation"],
      expected: ["Filter context → Active filters for a calculation", "Slicer → User control that applies filters", "Relationship → Can propagate filters between tables"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Region slicer selection", "Page background color", "Product category row in a matrix", "Report font family"],
      shuffled: ["Region slicer selection", "Page background color", "Product category row in a matrix", "Report font family"],
      expected: ["Region slicer selection (Filter sources)", "Product category row in a matrix (Filter sources)", "Page background color (Not filter sources by themselves)", "Report font family (Not filter sources by themselves)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Filter context",
      meaning: "Active filters for a calculation"
    },
    {
      id: 2,
      snippet: "Slicer",
      meaning: "User control that applies filters"
    },
    {
      id: 3,
      snippet: "Relationship",
      meaning: "Can propagate filters between tables"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Filter Context",
      scenario: "A manager selects North in a Region slicer and the revenue KPI changes.",
      prompt: "What explains this behavior?",
      expectedResponse: "Filter context — The slicer changes the filter context used by the measure."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is filter context?",
      sampleAnswer: "It is the collection of filters affecting a DAX expression."
    },
    {
      id: 2,
      question: "How does a slicer affect measures?",
      sampleAnswer: "It filters the data included when measures are evaluated."
    },
    {
      id: 3,
      question: "Do relationships matter for filter context?",
      sampleAnswer: "Yes, filters can flow through active relationships."
    },
    {
      id: 4,
      question: "Why can one measure show different values by region?",
      sampleAnswer: "Each region supplies a different filter context."
    }
    ]
  },
  '26.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.6',
    id: 234,
    topicTitle: "Row Context Overview",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is row context?",
      options: [
        { key: "A", text: "The current row being evaluated by an expression" },
        { key: "B", text: "The current report wallpaper" },
        { key: "C", text: "A phone screen size" },
        { key: "D", text: "A database password" }
      ],
      correct: 0,
      explanation: "Row context provides access to current-row values.",
      hint: "Focus on The current row being evaluated by an expression to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Where is row context naturally present?",
      options: [
        { key: "A", text: "Every visual title automatically" },
        { key: "B", text: "Calculated columns" },
        { key: "C", text: "Only in CSV headers" },
        { key: "D", text: "Only in Power BI Mobile" }
      ],
      correct: 1,
      explanation: "Calculated columns evaluate per row.",
      hint: "Focus on Calculated columns to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which expression is suitable in a calculated column?",
      options: [
        { key: "A", text: "SUM(Sales) with no column" },
        { key: "B", text: "SELECT * FROM Sales" },
        { key: "C", text: "Sales[Quantity] * Sales[UnitPrice]" },
        { key: "D", text: "print(Sales)" }
      ],
      correct: 2,
      explanation: "It multiplies two values from the current row.",
      hint: "Focus on Sales[Quantity] * Sales[UnitPrice] to answer this Power BI concept."
    },
    {
      id: 4,
      question: "How is row context different from filter context?",
      options: [
        { key: "A", text: "They always mean the same thing" },
        { key: "B", text: "Row context only changes colors" },
        { key: "C", text: "Filter context is a file type" },
        { key: "D", text: "Row context identifies a current row; filter context restricts data considered" }
      ],
      correct: 3,
      explanation: "They are distinct DAX evaluation concepts.",
      hint: "Focus on Row context identifies a current row; filter context restricts data considered to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which DAX function iterates rows of a table?",
      options: [
        { key: "A", text: "SUMX" },
        { key: "B", text: "SUM only" },
        { key: "C", text: "DISTINCTCOUNT only" },
        { key: "D", text: "NOW only" }
      ],
      correct: 0,
      explanation: "SUMX evaluates an expression row by row and sums results.",
      hint: "Focus on SUMX to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Repeat for other rows", "Multiply the row values", "Read Quantity and UnitPrice", "Select a Sales row"],
      shuffled: ["Repeat for other rows", "Multiply the row values", "Read Quantity and UnitPrice", "Select a Sales row"],
      expected: ["Select a Sales row", "Read Quantity and UnitPrice", "Multiply the row values", "Repeat for other rows"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["SUMX → Iterator evaluating rows", "Calculated column → Common row-context calculation", "Row context → Current row for evaluation"],
      shuffled: ["SUMX → Iterator evaluating rows", "Calculated column → Common row-context calculation", "Row context → Current row for evaluation"],
      expected: ["Row context → Current row for evaluation", "Calculated column → Common row-context calculation", "SUMX → Iterator evaluating rows"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Quantity times UnitPrice", "Total Sales measure", "Price minus per-row Discount", "Unique Customer Count measure"],
      shuffled: ["Quantity times UnitPrice", "Total Sales measure", "Price minus per-row Discount", "Unique Customer Count measure"],
      expected: ["Quantity times UnitPrice (Row-level calculations)", "Price minus per-row Discount (Row-level calculations)", "Total Sales measure (Report-wide summaries)", "Unique Customer Count measure (Report-wide summaries)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Row context",
      meaning: "Current row for evaluation"
    },
    {
      id: 2,
      snippet: "Calculated column",
      meaning: "Common row-context calculation"
    },
    {
      id: 3,
      snippet: "SUMX",
      meaning: "Iterator evaluating rows"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Row Context Overview",
      scenario: "A sales row has Quantity 2 and UnitPrice 50.",
      prompt: "What does a row-level Quantity * UnitPrice calculation produce?",
      expectedResponse: "100 — The current row values multiply to 100."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is row context?",
      sampleAnswer: "It is the current row used while evaluating a DAX expression."
    },
    {
      id: 2,
      question: "Where is row context common?",
      sampleAnswer: "In calculated columns and iterator functions."
    },
    {
      id: 3,
      question: "Give an example.",
      sampleAnswer: "A calculated column can multiply Quantity by UnitPrice for each sales row."
    },
    {
      id: 4,
      question: "How does row context differ from filter context?",
      sampleAnswer: "Row context refers to a current row; filter context defines the data included in a calculation."
    }
    ]
  },
  '26.7': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.7',
    id: 235,
    topicTitle: "DIVIDE and Safe Calculations",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Why use DIVIDE in DAX?",
      options: [
        { key: "A", text: "To handle division by zero safely" },
        { key: "B", text: "To append two queries" },
        { key: "C", text: "To change chart size" },
        { key: "D", text: "To create relationships" }
      ],
      correct: 0,
      explanation: "DIVIDE provides safe denominator handling.",
      hint: "Focus on To handle division by zero safely to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which is a valid DIVIDE expression?",
      options: [
        { key: "A", text: "DIVIDE([Profit])" },
        { key: "B", text: "DIVIDE([Profit], [Revenue], 0)" },
        { key: "C", text: "SELECT [Profit]/[Revenue]" },
        { key: "D", text: "PRINT([Revenue])" }
      ],
      correct: 1,
      explanation: "DIVIDE accepts numerator, denominator and optional alternate result.",
      hint: "Focus on DIVIDE([Profit], [Revenue], 0) to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is DIVIDE(10, 2)?",
      options: [
        { key: "A", text: "12" },
        { key: "B", text: "20" },
        { key: "C", text: "5" },
        { key: "D", text: "0" }
      ],
      correct: 2,
      explanation: "Ten divided by two is five.",
      hint: "Focus on 5 to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What is DIVIDE(10, 0, 0)?",
      options: [
        { key: "A", text: "10" },
        { key: "B", text: "Infinity" },
        { key: "C", text: "Error always" },
        { key: "D", text: "0" }
      ],
      correct: 3,
      explanation: "The alternate result is returned for zero denominator.",
      hint: "Focus on 0 to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Which business KPI can use DIVIDE?",
      options: [
        { key: "A", text: "Profit margin = Profit / Revenue" },
        { key: "B", text: "Product name" },
        { key: "C", text: "Report title" },
        { key: "D", text: "Customer address" }
      ],
      correct: 0,
      explanation: "Ratios are natural DIVIDE use cases.",
      hint: "Focus on Profit margin = Profit / Revenue to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test with zero revenue", "Test with positive revenue", "Write DIVIDE(Profit, Revenue, 0)", "Define Profit and Revenue"],
      shuffled: ["Test with zero revenue", "Test with positive revenue", "Write DIVIDE(Profit, Revenue, 0)", "Define Profit and Revenue"],
      expected: ["Define Profit and Revenue", "Write DIVIDE(Profit, Revenue, 0)", "Test with positive revenue", "Test with zero revenue"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Alternate result → Fallback for zero or blank denominator", "Denominator → Value dividing numerator", "Numerator → Value being divided"],
      shuffled: ["Alternate result → Fallback for zero or blank denominator", "Denominator → Value dividing numerator", "Numerator → Value being divided"],
      expected: ["Numerator → Value being divided", "Denominator → Value dividing numerator", "Alternate result → Fallback for zero or blank denominator"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Profit divided by Revenue", "Customer name concatenation", "Returns divided by Orders", "Date table creation"],
      shuffled: ["Profit divided by Revenue", "Customer name concatenation", "Returns divided by Orders", "Date table creation"],
      expected: ["Profit divided by Revenue (Ratio calculations)", "Returns divided by Orders (Ratio calculations)", "Customer name concatenation (Not ratio calculations)", "Date table creation (Not ratio calculations)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Numerator",
      meaning: "Value being divided"
    },
    {
      id: 2,
      snippet: "Denominator",
      meaning: "Value dividing numerator"
    },
    {
      id: 3,
      snippet: "Alternate result",
      meaning: "Fallback for zero or blank denominator"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: DIVIDE and Safe Calculations",
      scenario: "A report calculates Profit / Revenue, but some regions have zero revenue.",
      prompt: "Which DAX function helps handle this safely?",
      expectedResponse: "DIVIDE — DIVIDE supports an alternate result for zero or blank denominators."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does DIVIDE do?",
      sampleAnswer: "It divides two expressions and handles zero or blank denominators safely."
    },
    {
      id: 2,
      question: "Why prefer DIVIDE for KPI ratios?",
      sampleAnswer: "It avoids unsafe division behavior and can return a fallback result."
    },
    {
      id: 3,
      question: "Give an example.",
      sampleAnswer: "DIVIDE([Profit], [Revenue], 0) can calculate profit margin."
    },
    {
      id: 4,
      question: "What happens when the denominator is zero?",
      sampleAnswer: "DIVIDE returns BLANK by default or the specified alternate result."
    }
    ]
  },
  '26.8': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.8',
    id: 236,
    topicTitle: "IF and SWITCH in DAX",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is IF used for in DAX?",
      options: [
        { key: "A", text: "Return results based on a logical condition" },
        { key: "B", text: "Join tables" },
        { key: "C", text: "Read a CSV file" },
        { key: "D", text: "Publish a workspace" }
      ],
      correct: 0,
      explanation: "IF chooses between true and false results.",
      hint: "Focus on Return results based on a logical condition to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which is a valid IF expression?",
      options: [
        { key: "A", text: "IF [Sales] THEN" },
        { key: "B", text: "IF([Sales] >= 1000, \"Target Met\", \"Below Target\")" },
        { key: "C", text: "SELECT IF FROM Sales" },
        { key: "D", text: "print([Sales])" }
      ],
      correct: 1,
      explanation: "IF accepts condition, true result and false result.",
      hint: "Focus on IF([Sales] >= 1000, \"Target Met\", \"Below Target\") to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is SWITCH useful for?",
      options: [
        { key: "A", text: "Deleting query steps" },
        { key: "B", text: "Loading Excel workbooks" },
        { key: "C", text: "Choosing among multiple cases" },
        { key: "D", text: "Changing model cardinality" }
      ],
      correct: 2,
      explanation: "SWITCH handles multiple alternatives.",
      hint: "Focus on Choosing among multiple cases to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What does IF(TRUE(), \"Yes\", \"No\") return?",
      options: [
        { key: "A", text: "No" },
        { key: "B", text: "Blank always" },
        { key: "C", text: "Error always" },
        { key: "D", text: "Yes" }
      ],
      correct: 3,
      explanation: "The condition is true so the first result is returned.",
      hint: "Focus on Yes to answer this Power BI concept."
    },
    {
      id: 5,
      question: "When might SWITCH be clearer than many nested IFs?",
      options: [
        { key: "A", text: "When mapping several known categories to labels" },
        { key: "B", text: "When selecting a CSV file" },
        { key: "C", text: "When resizing a visual" },
        { key: "D", text: "When connecting to a printer" }
      ],
      correct: 0,
      explanation: "SWITCH can simplify multi-branch logic.",
      hint: "Focus on When mapping several known categories to labels to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test each possible outcome", "Write conditions and results", "Choose IF or SWITCH", "Define business rule"],
      shuffled: ["Test each possible outcome", "Write conditions and results", "Choose IF or SWITCH", "Define business rule"],
      expected: ["Define business rule", "Choose IF or SWITCH", "Write conditions and results", "Test each possible outcome"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Condition → Logical test returning true or false", "SWITCH → Handle multiple alternatives", "IF → Choose between two outcomes"],
      shuffled: ["Condition → Logical test returning true or false", "SWITCH → Handle multiple alternatives", "IF → Choose between two outcomes"],
      expected: ["IF → Choose between two outcomes", "SWITCH → Handle multiple alternatives", "Condition → Logical test returning true or false"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["IF([Sales] > 0, \"Active\", \"None\")", "SELECT * FROM Sales", "SWITCH(TRUE(), [Score] > 80, \"High\", \"Other\")", "DROP TABLE Sales"],
      shuffled: ["IF([Sales] > 0, \"Active\", \"None\")", "SELECT * FROM Sales", "SWITCH(TRUE(), [Score] > 80, \"High\", \"Other\")", "DROP TABLE Sales"],
      expected: ["IF([Sales] > 0, \"Active\", \"None\") (Conditional DAX examples)", "SWITCH(TRUE(), [Score] > 80, \"High\", \"Other\") (Conditional DAX examples)", "SELECT * FROM Sales (Non-DAX commands)", "DROP TABLE Sales (Non-DAX commands)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "IF",
      meaning: "Choose between two outcomes"
    },
    {
      id: 2,
      snippet: "SWITCH",
      meaning: "Handle multiple alternatives"
    },
    {
      id: 3,
      snippet: "Condition",
      meaning: "Logical test returning true or false"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: IF and SWITCH in DAX",
      scenario: "A manager wants a KPI label: sales above target should show Target Met.",
      prompt: "Which DAX function is suitable for two outcomes?",
      expectedResponse: "IF — IF selects a result based on a true or false condition."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does IF do?",
      sampleAnswer: "It returns one result when a condition is true and another when false."
    },
    {
      id: 2,
      question: "What does SWITCH do?",
      sampleAnswer: "It evaluates several cases and returns the matching result."
    },
    {
      id: 3,
      question: "When should you use IF?",
      sampleAnswer: "For simple two-outcome business rules."
    },
    {
      id: 4,
      question: "When is SWITCH helpful?",
      sampleAnswer: "For mapping multiple cases more clearly than deeply nested IF statements."
    }
    ]
  },
  '26.9': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.9',
    id: 237,
    topicTitle: "Time Intelligence Fundamentals",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is time intelligence in DAX?",
      options: [
        { key: "A", text: "Calculations across dates and periods" },
        { key: "B", text: "Computer clock repair" },
        { key: "C", text: "Editing calendar images" },
        { key: "D", text: "Changing time zone settings only" }
      ],
      correct: 0,
      explanation: "Time intelligence compares or accumulates metrics by date.",
      hint: "Focus on Calculations across dates and periods to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which is an example of a time-intelligence KPI?",
      options: [
        { key: "A", text: "Customer first name" },
        { key: "B", text: "Year-to-date sales" },
        { key: "C", text: "Product barcode" },
        { key: "D", text: "Report font size" }
      ],
      correct: 1,
      explanation: "YTD totals sales from the year start to the current period.",
      hint: "Focus on Year-to-date sales to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Why is a proper Date table important?",
      options: [
        { key: "A", text: "It replaces every Sales table" },
        { key: "B", text: "It automatically fixes all data" },
        { key: "C", text: "It supports consistent date filtering and period calculations" },
        { key: "D", text: "It is required to install Desktop" }
      ],
      correct: 2,
      explanation: "A suitable date table supports time-based measures.",
      hint: "Focus on It supports consistent date filtering and period calculations to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which comparison is a time-intelligence question?",
      options: [
        { key: "A", text: "Which mouse is connected" },
        { key: "B", text: "How many pages are in a PDF" },
        { key: "C", text: "What is the logo color" },
        { key: "D", text: "Sales this month versus last month" }
      ],
      correct: 3,
      explanation: "Period comparisons use dates.",
      hint: "Focus on Sales this month versus last month to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should be validated for time comparisons?",
      options: [
        { key: "A", text: "Date coverage and correct date relationships" },
        { key: "B", text: "Printer cable length" },
        { key: "C", text: "Chart background only" },
        { key: "D", text: "Phone storage" }
      ],
      correct: 0,
      explanation: "Missing dates or wrong relationships can distort results.",
      hint: "Focus on Date coverage and correct date relationships to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Compare results by month", "Calculate a period metric", "Create Total Sales measure", "Relate Date to Sales", "Prepare a Date table"],
      shuffled: ["Compare results by month", "Calculate a period metric", "Create Total Sales measure", "Relate Date to Sales", "Prepare a Date table"],
      expected: ["Prepare a Date table", "Relate Date to Sales", "Create Total Sales measure", "Calculate a period metric", "Compare results by month"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Period comparison → Compare metrics across dates", "Date table → Calendar dimension", "YTD → Year-to-date total"],
      shuffled: ["Period comparison → Compare metrics across dates", "Date table → Calendar dimension", "YTD → Year-to-date total"],
      expected: ["YTD → Year-to-date total", "Date table → Calendar dimension", "Period comparison → Compare metrics across dates"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Monthly sales growth", "Customer surname", "Year-to-date revenue", "Product color"],
      shuffled: ["Monthly sales growth", "Customer surname", "Year-to-date revenue", "Product color"],
      expected: ["Monthly sales growth (Time-based metrics)", "Year-to-date revenue (Time-based metrics)", "Customer surname (Non-time-based attributes)", "Product color (Non-time-based attributes)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "YTD",
      meaning: "Year-to-date total"
    },
    {
      id: 2,
      snippet: "Date table",
      meaning: "Calendar dimension"
    },
    {
      id: 3,
      snippet: "Period comparison",
      meaning: "Compare metrics across dates"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Time Intelligence Fundamentals",
      scenario: "A manager asks for sales accumulated from January 1 to the selected date.",
      prompt: "What kind of calculation is this?",
      expectedResponse: "Year-to-date sales — Year-to-date is a time-intelligence calculation."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is time intelligence?",
      sampleAnswer: "It is using dates to calculate and compare metrics across periods."
    },
    {
      id: 2,
      question: "What is year-to-date?",
      sampleAnswer: "A total accumulated from the beginning of a year to a selected date."
    },
    {
      id: 3,
      question: "Why use a Date table?",
      sampleAnswer: "It supports consistent calendar filtering and time-based measures."
    },
    {
      id: 4,
      question: "What should you check when comparing periods?",
      sampleAnswer: "Verify date coverage, date relationships, and the intended calendar logic."
    }
    ]
  },
  '26.10': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 26,
    moduleName: "Module 26: DAX and Measures",
    topicKey: '26.10',
    id: 238,
    topicTitle: "Validate DAX Results",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Why validate DAX measures?",
      options: [
        { key: "A", text: "To confirm calculations match expected business results" },
        { key: "B", text: "To change the laptop brand" },
        { key: "C", text: "To remove every table" },
        { key: "D", text: "To avoid all data refreshes" }
      ],
      correct: 0,
      explanation: "Validation protects reporting accuracy.",
      hint: "Focus on To confirm calculations match expected business results to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a useful first check for Total Sales?",
      options: [
        { key: "A", text: "Change the visual font" },
        { key: "B", text: "Compare it with a trusted source total" },
        { key: "C", text: "Hide all slicers" },
        { key: "D", text: "Create a new wallpaper" }
      ],
      correct: 1,
      explanation: "Source reconciliation can reveal mistakes.",
      hint: "Focus on Compare it with a trusted source total to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What can cause a measure to change unexpectedly?",
      options: [
        { key: "A", text: "Monitor brightness" },
        { key: "B", text: "Mouse battery level" },
        { key: "C", text: "Different filter context" },
        { key: "D", text: "Report file icon" }
      ],
      correct: 2,
      explanation: "Measures respond to filters.",
      hint: "Focus on Different filter context to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which edge case is useful when testing a ratio?",
      options: [
        { key: "A", text: "Only large positive values" },
        { key: "B", text: "Only colorful charts" },
        { key: "C", text: "Only one report page" },
        { key: "D", text: "Zero denominator" }
      ],
      correct: 3,
      explanation: "Division-by-zero behavior should be checked.",
      hint: "Focus on Zero denominator to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should you test for a measure used in slicers?",
      options: [
        { key: "A", text: "Results across several filter selections" },
        { key: "B", text: "Only its display color" },
        { key: "C", text: "Only the file name" },
        { key: "D", text: "Only whether the app opens" }
      ],
      correct: 0,
      explanation: "Filter tests reveal context mistakes.",
      hint: "Focus on Results across several filter selections to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Fix mismatches", "Test slicers and edge cases", "Compare totals", "Create DAX measure", "Calculate expected total manually"],
      shuffled: ["Fix mismatches", "Test slicers and edge cases", "Compare totals", "Create DAX measure", "Calculate expected total manually"],
      expected: ["Calculate expected total manually", "Create DAX measure", "Compare totals", "Test slicers and edge cases", "Fix mismatches"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Edge case → Unusual input such as zero denominator", "Filter test → Check measure under selections", "Reconciliation → Compare measure to trusted total"],
      shuffled: ["Edge case → Unusual input such as zero denominator", "Filter test → Check measure under selections", "Reconciliation → Compare measure to trusted total"],
      expected: ["Reconciliation → Compare measure to trusted total", "Filter test → Check measure under selections", "Edge case → Unusual input such as zero denominator"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Compare total with source", "Change background image", "Test empty category and zero denominator", "Rename the page title"],
      shuffled: ["Compare total with source", "Change background image", "Test empty category and zero denominator", "Rename the page title"],
      expected: ["Compare total with source (DAX validation checks)", "Test empty category and zero denominator (DAX validation checks)", "Change background image (Not validation checks)", "Rename the page title (Not validation checks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Reconciliation",
      meaning: "Compare measure to trusted total"
    },
    {
      id: 2,
      snippet: "Filter test",
      meaning: "Check measure under selections"
    },
    {
      id: 3,
      snippet: "Edge case",
      meaning: "Unusual input such as zero denominator"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Validate DAX Results",
      scenario: "A revenue card shows 12,000 but the verified source total is 10,000.",
      prompt: "What should the analyst do?",
      expectedResponse: "Check measure logic and filters — Investigate context, relationships and source values before publishing."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why validate DAX?",
      sampleAnswer: "To ensure calculations are correct and reliable for business decisions."
    },
    {
      id: 2,
      question: "How do you check a Total Sales measure?",
      sampleAnswer: "Compare it with a trusted source or independently calculated total."
    },
    {
      id: 3,
      question: "Why test slicers?",
      sampleAnswer: "Measures may change with filter context, so selections must behave as expected."
    },
    {
      id: 4,
      question: "Name a useful edge case.",
      sampleAnswer: "A zero denominator in a ratio or a category with no matching rows."
    }
    ]
  },
  '27.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.1',
    id: 239,
    topicTitle: "Choosing KPIs and Visuals",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a KPI?",
      options: [
        { key: "A", text: "A metric used to track performance toward a goal" },
        { key: "B", text: "A report background image" },
        { key: "C", text: "A file type" },
        { key: "D", text: "A keyboard shortcut" }
      ],
      correct: 0,
      explanation: "KPIs track important business outcomes.",
      hint: "Focus on A metric used to track performance toward a goal to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which visual suits a single total revenue figure?",
      options: [
        { key: "A", text: "Scatter plot only" },
        { key: "B", text: "Card" },
        { key: "C", text: "Map only" },
        { key: "D", text: "Decomposition tree only" }
      ],
      correct: 1,
      explanation: "Cards show one headline value.",
      hint: "Focus on Card to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which chart suits comparing sales across products?",
      options: [
        { key: "A", text: "Single text label only" },
        { key: "B", text: "Pie chart with hundreds of categories" },
        { key: "C", text: "Bar chart" },
        { key: "D", text: "Phone screenshot" }
      ],
      correct: 2,
      explanation: "Bars support category comparisons.",
      hint: "Focus on Bar chart to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which chart suits monthly sales trends?",
      options: [
        { key: "A", text: "Single card only" },
        { key: "B", text: "Map of unrelated cities" },
        { key: "C", text: "Logo image" },
        { key: "D", text: "Line chart" }
      ],
      correct: 3,
      explanation: "Lines show change over time.",
      hint: "Focus on Line chart to answer this Power BI concept."
    },
    {
      id: 5,
      question: "How should KPIs be chosen?",
      options: [
        { key: "A", text: "Based on business questions and decisions" },
        { key: "B", text: "Based only on visual color" },
        { key: "C", text: "Based on number of fonts" },
        { key: "D", text: "Based on monitor size" }
      ],
      correct: 0,
      explanation: "Useful KPIs align with business goals.",
      hint: "Focus on Based on business questions and decisions to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Validate displayed metric", "Select suitable visual", "Choose relevant KPI", "Identify a business goal"],
      shuffled: ["Validate displayed metric", "Select suitable visual", "Choose relevant KPI", "Identify a business goal"],
      expected: ["Identify a business goal", "Choose relevant KPI", "Select suitable visual", "Validate displayed metric"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Line chart → Show trends over time", "Bar chart → Compare categories", "Card → Single headline KPI"],
      shuffled: ["Line chart → Show trends over time", "Bar chart → Compare categories", "Card → Single headline KPI"],
      expected: ["Card → Single headline KPI", "Bar chart → Compare categories", "Line chart → Show trends over time"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Total revenue", "Page background image", "Order count", "Brand color swatch"],
      shuffled: ["Total revenue", "Page background image", "Order count", "Brand color swatch"],
      expected: ["Total revenue (Useful business KPIs)", "Order count (Useful business KPIs)", "Page background image (Decorative elements)", "Brand color swatch (Decorative elements)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Card",
      meaning: "Single headline KPI"
    },
    {
      id: 2,
      snippet: "Bar chart",
      meaning: "Compare categories"
    },
    {
      id: 3,
      snippet: "Line chart",
      meaning: "Show trends over time"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Choosing KPIs and Visuals",
      scenario: "A sales manager wants to see one large number for total revenue.",
      prompt: "Which Power BI visual is most suitable?",
      expectedResponse: "Card — A Card highlights a single KPI."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a KPI?",
      sampleAnswer: "A measurable value used to monitor progress toward a business objective."
    },
    {
      id: 2,
      question: "Which visual shows a single KPI?",
      sampleAnswer: "A Card visual is commonly used."
    },
    {
      id: 3,
      question: "Which visual compares categories?",
      sampleAnswer: "A bar or column chart is suitable."
    },
    {
      id: 4,
      question: "Which visual shows trends over time?",
      sampleAnswer: "A line chart is commonly used for time series."
    }
    ]
  },
  '27.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.2',
    id: 240,
    topicTitle: "Cards, Tables and Matrices",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which visual is best for a single KPI?",
      options: [
        { key: "A", text: "Card" },
        { key: "B", text: "Matrix only" },
        { key: "C", text: "Map only" },
        { key: "D", text: "Scatter chart only" }
      ],
      correct: 0,
      explanation: "A Card emphasizes one value.",
      hint: "Focus on Card to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a Table visual suited for?",
      options: [
        { key: "A", text: "Only displaying one image" },
        { key: "B", text: "Displaying detailed rows and columns" },
        { key: "C", text: "Only creating model relationships" },
        { key: "D", text: "Only scheduling refresh" }
      ],
      correct: 1,
      explanation: "Tables show record-level details.",
      hint: "Focus on Displaying detailed rows and columns to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is a Matrix visual suited for?",
      options: [
        { key: "A", text: "Installing Desktop" },
        { key: "B", text: "Editing CSV files" },
        { key: "C", text: "Summarizing values by row and column groups" },
        { key: "D", text: "Publishing a workspace" }
      ],
      correct: 2,
      explanation: "Matrices support cross-tab summaries.",
      hint: "Focus on Summarizing values by row and column groups to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which visual can show Region by Product with revenue totals?",
      options: [
        { key: "A", text: "Single Card" },
        { key: "B", text: "Image" },
        { key: "C", text: "Text box only" },
        { key: "D", text: "Matrix" }
      ],
      correct: 3,
      explanation: "A Matrix groups data across rows and columns.",
      hint: "Focus on Matrix to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What is a key difference between Table and Matrix?",
      options: [
        { key: "A", text: "Matrix supports grouped row and column hierarchies" },
        { key: "B", text: "Table always requires DAX" },
        { key: "C", text: "Matrix cannot show totals" },
        { key: "D", text: "They are identical in all features" }
      ],
      correct: 0,
      explanation: "Matrix supports pivot-like grouping.",
      hint: "Focus on Matrix supports grouped row and column hierarchies to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Add a Matrix by Region and Product", "Add a Table of transactions", "Add a Card", "Create Total Revenue measure"],
      shuffled: ["Add a Matrix by Region and Product", "Add a Table of transactions", "Add a Card", "Create Total Revenue measure"],
      expected: ["Create Total Revenue measure", "Add a Card", "Add a Table of transactions", "Add a Matrix by Region and Product"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Matrix → Grouped cross-tab summary", "Table → Detailed records", "Card → Single metric"],
      shuffled: ["Matrix → Grouped cross-tab summary", "Table → Detailed records", "Card → Single metric"],
      expected: ["Card → Single metric", "Table → Detailed records", "Matrix → Grouped cross-tab summary"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["OrderID with Amount", "Revenue by Region and Product", "Customer with PurchaseDate", "Orders by Month and Category"],
      shuffled: ["OrderID with Amount", "Revenue by Region and Product", "Customer with PurchaseDate", "Orders by Month and Category"],
      expected: ["OrderID with Amount (Detailed-report needs)", "Customer with PurchaseDate (Detailed-report needs)", "Revenue by Region and Product (Summary-report needs)", "Orders by Month and Category (Summary-report needs)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Card",
      meaning: "Single metric"
    },
    {
      id: 2,
      snippet: "Table",
      meaning: "Detailed records"
    },
    {
      id: 3,
      snippet: "Matrix",
      meaning: "Grouped cross-tab summary"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Cards, Tables and Matrices",
      scenario: "A manager wants revenue summarized by Region in rows and Product in columns.",
      prompt: "Which visual should be selected?",
      expectedResponse: "Matrix — Matrix supports grouped rows and columns."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "When do you use a Card?",
      sampleAnswer: "To display one important metric such as total revenue."
    },
    {
      id: 2,
      question: "When do you use a Table?",
      sampleAnswer: "To show detailed records in rows and columns."
    },
    {
      id: 3,
      question: "When do you use a Matrix?",
      sampleAnswer: "To summarize data across row and column categories."
    },
    {
      id: 4,
      question: "How does a Matrix differ from a Table?",
      sampleAnswer: "A Matrix supports hierarchical groupings and cross-tab summaries."
    }
    ]
  },
  '27.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.3',
    id: 241,
    topicTitle: "Bar, Line and Combo Charts",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which chart is best for comparing categories?",
      options: [
        { key: "A", text: "Bar chart" },
        { key: "B", text: "Line chart for unrelated categories" },
        { key: "C", text: "Card only" },
        { key: "D", text: "Map only" }
      ],
      correct: 0,
      explanation: "Bars make category differences easy to compare.",
      hint: "Focus on Bar chart to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which chart is best for monthly trends?",
      options: [
        { key: "A", text: "Single image" },
        { key: "B", text: "Line chart" },
        { key: "C", text: "Card only" },
        { key: "D", text: "Pie chart with 50 months" }
      ],
      correct: 1,
      explanation: "A line chart shows movement over time.",
      hint: "Focus on Line chart to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What does a combo chart combine?",
      options: [
        { key: "A", text: "Two separate workspaces" },
        { key: "B", text: "Two CSV files into rows" },
        { key: "C", text: "Columns and a line in one visual" },
        { key: "D", text: "Two data models automatically" }
      ],
      correct: 2,
      explanation: "Combo charts show related metrics together.",
      hint: "Focus on Columns and a line in one visual to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which axis usually holds time in a monthly line chart?",
      options: [
        { key: "A", text: "Color legend only" },
        { key: "B", text: "Page title" },
        { key: "C", text: "Report tooltip" },
        { key: "D", text: "X-axis" }
      ],
      correct: 3,
      explanation: "Time typically appears on the horizontal axis.",
      hint: "Focus on X-axis to answer this Power BI concept."
    },
    {
      id: 5,
      question: "When is a combo chart useful?",
      options: [
        { key: "A", text: "Showing sales columns with margin trend line" },
        { key: "B", text: "Only showing one text label" },
        { key: "C", text: "Repairing a file" },
        { key: "D", text: "Managing permissions" }
      ],
      correct: 0,
      explanation: "It compares metrics with different visual forms.",
      hint: "Focus on Showing sales columns with margin trend line to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check labels and values", "Assign fields to axes", "Pick Bar, Line or Combo", "Choose business question"],
      shuffled: ["Check labels and values", "Assign fields to axes", "Pick Bar, Line or Combo", "Choose business question"],
      expected: ["Choose business question", "Pick Bar, Line or Combo", "Assign fields to axes", "Check labels and values"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Combo chart → Combine columns and line", "Line chart → Show time trends", "Bar chart → Compare categories"],
      shuffled: ["Combo chart → Combine columns and line", "Line chart → Show time trends", "Bar chart → Compare categories"],
      expected: ["Bar chart → Compare categories", "Line chart → Show time trends", "Combo chart → Combine columns and line"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Sales by product", "Sales by month", "Orders by region", "Profit by week"],
      shuffled: ["Sales by product", "Sales by month", "Orders by region", "Profit by week"],
      expected: ["Sales by product (Category comparison questions)", "Orders by region (Category comparison questions)", "Sales by month (Time trend questions)", "Profit by week (Time trend questions)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Bar chart",
      meaning: "Compare categories"
    },
    {
      id: 2,
      snippet: "Line chart",
      meaning: "Show time trends"
    },
    {
      id: 3,
      snippet: "Combo chart",
      meaning: "Combine columns and line"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Bar, Line and Combo Charts",
      scenario: "A manager wants monthly sales as columns and profit margin as a line.",
      prompt: "Which chart type is suitable?",
      expectedResponse: "Combo chart — A Combo chart can show columns and a line together."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "When should you use a Bar chart?",
      sampleAnswer: "To compare values across categories."
    },
    {
      id: 2,
      question: "When should you use a Line chart?",
      sampleAnswer: "To show changes over time."
    },
    {
      id: 3,
      question: "What is a Combo chart?",
      sampleAnswer: "It combines columns and a line to compare related metrics."
    },
    {
      id: 4,
      question: "How do you choose a chart?",
      sampleAnswer: "Match the visual to the question, data type, and audience."
    }
    ]
  },
  '27.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.4',
    id: 242,
    topicTitle: "Slicers and Filters",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does a Slicer do?",
      options: [
        { key: "A", text: "Lets report users select filter values" },
        { key: "B", text: "Creates relationships automatically" },
        { key: "C", text: "Installs Power BI" },
        { key: "D", text: "Changes source passwords" }
      ],
      correct: 0,
      explanation: "Slicers are interactive report filters.",
      hint: "Focus on Lets report users select filter values to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which field could be used in a Region slicer?",
      options: [
        { key: "A", text: "Report wallpaper" },
        { key: "B", text: "Region" },
        { key: "C", text: "Desktop file name" },
        { key: "D", text: "Font family" }
      ],
      correct: 1,
      explanation: "Region is a categorical filter field.",
      hint: "Focus on Region to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What happens when a slicer selects East?",
      options: [
        { key: "A", text: "Every source row is deleted" },
        { key: "B", text: "The report is permanently renamed" },
        { key: "C", text: "Connected visuals typically show East data" },
        { key: "D", text: "All DAX becomes text" }
      ],
      correct: 2,
      explanation: "Slicer selections filter report context.",
      hint: "Focus on Connected visuals typically show East data to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What is a page-level filter?",
      options: [
        { key: "A", text: "A filter that deletes source rows" },
        { key: "B", text: "A mobile-only feature" },
        { key: "C", text: "A visual border" },
        { key: "D", text: "A filter affecting visuals on a report page" }
      ],
      correct: 3,
      explanation: "Page filters apply across the page.",
      hint: "Focus on A filter affecting visuals on a report page to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why should slicers be tested?",
      options: [
        { key: "A", text: "To ensure they filter the intended visuals" },
        { key: "B", text: "To change laptop brightness" },
        { key: "C", text: "To check printer ink" },
        { key: "D", text: "To remove all data types" }
      ],
      correct: 0,
      explanation: "Interactions and relationships affect filter behavior.",
      hint: "Focus on To ensure they filter the intended visuals to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Clear the selection", "Observe chart changes", "Select a region", "Add Region slicer"],
      shuffled: ["Clear the selection", "Observe chart changes", "Select a region", "Add Region slicer"],
      expected: ["Add Region slicer", "Select a region", "Observe chart changes", "Clear the selection"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Page filter → Filter across a report page", "Visual filter → Filter on one visual", "Slicer → Interactive selection control"],
      shuffled: ["Page filter → Filter across a report page", "Visual filter → Filter on one visual", "Slicer → Interactive selection control"],
      expected: ["Slicer → Interactive selection control", "Visual filter → Filter on one visual", "Page filter → Filter across a report page"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Region", "Font size", "Product Category", "Background color"],
      shuffled: ["Region", "Font size", "Product Category", "Background color"],
      expected: ["Region (Filterable fields)", "Product Category (Filterable fields)", "Font size (Visual formatting properties)", "Background color (Visual formatting properties)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Slicer",
      meaning: "Interactive selection control"
    },
    {
      id: 2,
      snippet: "Visual filter",
      meaning: "Filter on one visual"
    },
    {
      id: 3,
      snippet: "Page filter",
      meaning: "Filter across a report page"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Slicers and Filters",
      scenario: "A user wants to switch a dashboard between North and South regions.",
      prompt: "Which report element is suitable?",
      expectedResponse: "Region Slicer — A Slicer allows interactive region selection."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a Slicer?",
      sampleAnswer: "It is an interactive control that filters report data."
    },
    {
      id: 2,
      question: "What is a page filter?",
      sampleAnswer: "A filter applied across visuals on a report page."
    },
    {
      id: 3,
      question: "How do slicers affect measures?",
      sampleAnswer: "They change filter context and can change measure results."
    },
    {
      id: 4,
      question: "What should you test?",
      sampleAnswer: "Verify that intended visuals respond correctly to slicer selections."
    }
    ]
  },
  '27.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.5',
    id: 243,
    topicTitle: "Drill-Down and Drill-Through",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Drill-Down do?",
      options: [
        { key: "A", text: "Move to a lower level within a visual hierarchy" },
        { key: "B", text: "Open Windows settings" },
        { key: "C", text: "Append data tables" },
        { key: "D", text: "Change report permissions" }
      ],
      correct: 0,
      explanation: "Drill-down explores hierarchical levels.",
      hint: "Focus on Move to a lower level within a visual hierarchy to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What does Drill-Through do?",
      options: [
        { key: "A", text: "Convert CSV to Excel" },
        { key: "B", text: "Navigate to a detail page using selected context" },
        { key: "C", text: "Install a visual" },
        { key: "D", text: "Remove all filters" }
      ],
      correct: 1,
      explanation: "Drill-through opens a contextual detail page.",
      hint: "Focus on Navigate to a detail page using selected context to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which hierarchy supports Drill-Down?",
      options: [
        { key: "A", text: "Customer Name to Monitor Brand" },
        { key: "B", text: "Page Color to Font" },
        { key: "C", text: "Year to Quarter to Month" },
        { key: "D", text: "File Size to Wallpaper" }
      ],
      correct: 2,
      explanation: "Date levels form a hierarchy.",
      hint: "Focus on Year to Quarter to Month to answer this Power BI concept."
    },
    {
      id: 4,
      question: "When is Drill-Through useful?",
      options: [
        { key: "A", text: "Only change chart background" },
        { key: "B", text: "Create a calculated column" },
        { key: "C", text: "Schedule a refresh" },
        { key: "D", text: "Open details for a selected customer" }
      ],
      correct: 3,
      explanation: "A detail page can show context for a selected item.",
      hint: "Focus on Open details for a selected customer to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should a drill-through detail page include?",
      options: [
        { key: "A", text: "Relevant fields and a way to return" },
        { key: "B", text: "Only unrelated decorations" },
        { key: "C", text: "No data fields" },
        { key: "D", text: "Only a logo" }
      ],
      correct: 0,
      explanation: "Navigation should be meaningful and clear.",
      hint: "Focus on Relevant fields and a way to return to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check the lower-level results", "Select a year to see months", "Enable drill-down", "Build a Year-Month hierarchy"],
      shuffled: ["Check the lower-level results", "Select a year to see months", "Enable drill-down", "Build a Year-Month hierarchy"],
      expected: ["Build a Year-Month hierarchy", "Enable drill-down", "Select a year to see months", "Check the lower-level results"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Hierarchy → Ordered levels such as Year and Month", "Drill-Through → Open contextual detail page", "Drill-Down → Explore hierarchy levels in a visual"],
      shuffled: ["Hierarchy → Ordered levels such as Year and Month", "Drill-Through → Open contextual detail page", "Drill-Down → Explore hierarchy levels in a visual"],
      expected: ["Drill-Down → Explore hierarchy levels in a visual", "Drill-Through → Open contextual detail page", "Hierarchy → Ordered levels such as Year and Month"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Year to Month", "Customer to customer detail page", "Category to Subcategory", "Product to product detail page"],
      shuffled: ["Year to Month", "Customer to customer detail page", "Category to Subcategory", "Product to product detail page"],
      expected: ["Year to Month (Drill-down examples)", "Category to Subcategory (Drill-down examples)", "Customer to customer detail page (Drill-through examples)", "Product to product detail page (Drill-through examples)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Drill-Down",
      meaning: "Explore hierarchy levels in a visual"
    },
    {
      id: 2,
      snippet: "Drill-Through",
      meaning: "Open contextual detail page"
    },
    {
      id: 3,
      snippet: "Hierarchy",
      meaning: "Ordered levels such as Year and Month"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Drill-Down and Drill-Through",
      scenario: "A manager clicks a product and wants a separate page showing that product details.",
      prompt: "Which feature is suitable?",
      expectedResponse: "Drill-Through — Drill-Through navigates to a detail page with product context."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Drill-Down?",
      sampleAnswer: "It explores lower levels of a hierarchy within a visual."
    },
    {
      id: 2,
      question: "What is Drill-Through?",
      sampleAnswer: "It navigates to a detail page filtered for a selected item."
    },
    {
      id: 3,
      question: "Give a drill-down example.",
      sampleAnswer: "Move from Year to Quarter and then Month in a sales chart."
    },
    {
      id: 4,
      question: "Give a drill-through example.",
      sampleAnswer: "Open a Customer Detail page for a selected customer."
    }
    ]
  },
  '27.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.6',
    id: 244,
    topicTitle: "Tooltips and Bookmarks",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a tooltip?",
      options: [
        { key: "A", text: "Extra information shown when hovering over a visual data point" },
        { key: "B", text: "A file format" },
        { key: "C", text: "A refresh credential" },
        { key: "D", text: "A relationship type" }
      ],
      correct: 0,
      explanation: "Tooltips give contextual details.",
      hint: "Focus on Extra information shown when hovering over a visual data point to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a bookmark in Power BI?",
      options: [
        { key: "A", text: "A CSV data type" },
        { key: "B", text: "A saved report state for navigation or storytelling" },
        { key: "C", text: "A new DAX table" },
        { key: "D", text: "A database password" }
      ],
      correct: 1,
      explanation: "Bookmarks can capture selected report states.",
      hint: "Focus on A saved report state for navigation or storytelling to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which feature can show profit details when hovering over sales?",
      options: [
        { key: "A", text: "Workspace role" },
        { key: "B", text: "Append Queries" },
        { key: "C", text: "Tooltip" },
        { key: "D", text: "Data type conversion" }
      ],
      correct: 2,
      explanation: "Tooltips display details without clutter.",
      hint: "Focus on Tooltip to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which feature can support a Show Details button?",
      options: [
        { key: "A", text: "DirectQuery only" },
        { key: "B", text: "Primary key" },
        { key: "C", text: "Merge Columns" },
        { key: "D", text: "Bookmark" }
      ],
      correct: 3,
      explanation: "Buttons can trigger bookmarks.",
      hint: "Focus on Bookmark to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why should tooltips be concise?",
      options: [
        { key: "A", text: "To help users understand data without clutter" },
        { key: "B", text: "To make all reports slower" },
        { key: "C", text: "To remove every visual" },
        { key: "D", text: "To disable accessibility" }
      ],
      correct: 0,
      explanation: "Clear tooltips improve usability.",
      hint: "Focus on To help users understand data without clutter to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Create and test a bookmark", "Hover to test tooltip", "Configure useful tooltip fields", "Choose a visual"],
      shuffled: ["Create and test a bookmark", "Hover to test tooltip", "Configure useful tooltip fields", "Choose a visual"],
      expected: ["Choose a visual", "Configure useful tooltip fields", "Hover to test tooltip", "Create and test a bookmark"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Button action → Can trigger navigation or bookmark", "Bookmark → Saved report state", "Tooltip → Context on hover"],
      shuffled: ["Button action → Can trigger navigation or bookmark", "Bookmark → Saved report state", "Tooltip → Context on hover"],
      expected: ["Tooltip → Context on hover", "Bookmark → Saved report state", "Button action → Can trigger navigation or bookmark"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Profit for selected month", "Unrelated random quote", "Orders for selected category", "Repeated decorative text"],
      shuffled: ["Profit for selected month", "Unrelated random quote", "Orders for selected category", "Repeated decorative text"],
      expected: ["Profit for selected month (Helpful tooltip details)", "Orders for selected category (Helpful tooltip details)", "Unrelated random quote (Unhelpful tooltip content)", "Repeated decorative text (Unhelpful tooltip content)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Tooltip",
      meaning: "Context on hover"
    },
    {
      id: 2,
      snippet: "Bookmark",
      meaning: "Saved report state"
    },
    {
      id: 3,
      snippet: "Button action",
      meaning: "Can trigger navigation or bookmark"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Tooltips and Bookmarks",
      scenario: "A user wants to see Profit when hovering over a Sales bar.",
      prompt: "Which feature should the designer configure?",
      expectedResponse: "Tooltip — A tooltip can show Profit for the hovered category."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a tooltip?",
      sampleAnswer: "It shows additional information for a visual element, often on hover."
    },
    {
      id: 2,
      question: "What is a bookmark?",
      sampleAnswer: "It saves a report state that can be used for navigation or presentation."
    },
    {
      id: 3,
      question: "When are tooltips useful?",
      sampleAnswer: "When users need more detail without adding more visuals to the page."
    },
    {
      id: 4,
      question: "How can bookmarks improve navigation?",
      sampleAnswer: "Buttons can activate saved states or views of the report."
    }
    ]
  },
  '27.7': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.7',
    id: 245,
    topicTitle: "Layout, Color and Accessibility",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Why is visual contrast important?",
      options: [
        { key: "A", text: "It helps users read text and distinguish elements" },
        { key: "B", text: "It increases source row count" },
        { key: "C", text: "It changes DAX syntax" },
        { key: "D", text: "It replaces the Date table" }
      ],
      correct: 0,
      explanation: "Readable contrast improves accessibility.",
      hint: "Focus on It helps users read text and distinguish elements to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a good dashboard layout practice?",
      options: [
        { key: "A", text: "Use every possible color" },
        { key: "B", text: "Group related KPIs and charts logically" },
        { key: "C", text: "Hide all labels" },
        { key: "D", text: "Make every chart tiny" }
      ],
      correct: 1,
      explanation: "Clear hierarchy makes reports easier to scan.",
      hint: "Focus on Group related KPIs and charts logically to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Why add descriptive chart titles?",
      options: [
        { key: "A", text: "To change data types" },
        { key: "B", text: "To publish automatically" },
        { key: "C", text: "To explain what each visual shows" },
        { key: "D", text: "To create relationships" }
      ],
      correct: 2,
      explanation: "Titles provide context.",
      hint: "Focus on To explain what each visual shows to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which choice supports accessible visuals?",
      options: [
        { key: "A", text: "Color alone to show every difference" },
        { key: "B", text: "Tiny text everywhere" },
        { key: "C", text: "Unlabeled icons only" },
        { key: "D", text: "Readable labels and sufficient contrast" }
      ],
      correct: 3,
      explanation: "Accessibility requires more than color alone.",
      hint: "Focus on Readable labels and sufficient contrast to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Why keep a consistent color scheme?",
      options: [
        { key: "A", text: "It reduces confusion and improves interpretation" },
        { key: "B", text: "It guarantees correct calculations" },
        { key: "C", text: "It removes the need for filters" },
        { key: "D", text: "It makes data refresh automatic" }
      ],
      correct: 0,
      explanation: "Consistency helps users understand visuals.",
      hint: "Focus on It reduces confusion and improves interpretation to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test labels and accessibility", "Apply readable fonts and contrast", "Group related visuals", "Choose a clear page hierarchy"],
      shuffled: ["Test labels and accessibility", "Apply readable fonts and contrast", "Group related visuals", "Choose a clear page hierarchy"],
      expected: ["Choose a clear page hierarchy", "Group related visuals", "Apply readable fonts and contrast", "Test labels and accessibility"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Accessible label → Text that explains a visual or control", "Visual hierarchy → Order of importance on a page", "Contrast → Difference that improves readability"],
      shuffled: ["Accessible label → Text that explains a visual or control", "Visual hierarchy → Order of importance on a page", "Contrast → Difference that improves readability"],
      expected: ["Contrast → Difference that improves readability", "Visual hierarchy → Order of importance on a page", "Accessible label → Text that explains a visual or control"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Readable axis labels", "Tiny low-contrast labels", "High-contrast text", "Color-only status indicators"],
      shuffled: ["Readable axis labels", "Tiny low-contrast labels", "High-contrast text", "Color-only status indicators"],
      expected: ["Readable axis labels (Accessible design choices)", "High-contrast text (Accessible design choices)", "Tiny low-contrast labels (Hard-to-read choices)", "Color-only status indicators (Hard-to-read choices)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Contrast",
      meaning: "Difference that improves readability"
    },
    {
      id: 2,
      snippet: "Visual hierarchy",
      meaning: "Order of importance on a page"
    },
    {
      id: 3,
      snippet: "Accessible label",
      meaning: "Text that explains a visual or control"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Layout, Color and Accessibility",
      scenario: "A dashboard has light-gray text on a white background and users cannot read it.",
      prompt: "What should be improved first?",
      expectedResponse: "Text contrast — Increase contrast so labels are readable."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why does layout matter?",
      sampleAnswer: "A clear layout helps people find important information quickly."
    },
    {
      id: 2,
      question: "Why does contrast matter?",
      sampleAnswer: "It improves readability for a wider range of users."
    },
    {
      id: 3,
      question: "How can charts be made accessible?",
      sampleAnswer: "Use descriptive titles, readable labels, and cues beyond color alone."
    },
    {
      id: 4,
      question: "What is visual hierarchy?",
      sampleAnswer: "It is the arrangement that directs attention to the most important information."
    }
    ]
  },
  '27.8': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 27,
    moduleName: "Module 27: Visuals and Dashboard Design",
    topicKey: '27.8',
    id: 246,
    topicTitle: "Designing an Executive Dashboard",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What should an executive dashboard prioritize?",
      options: [
        { key: "A", text: "Important KPIs and actionable insights" },
        { key: "B", text: "Every raw transaction on the first screen" },
        { key: "C", text: "Only decorative graphics" },
        { key: "D", text: "Only data-source names" }
      ],
      correct: 0,
      explanation: "Executives need concise decision-focused information.",
      hint: "Focus on Important KPIs and actionable insights to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which KPI might a sales executive need?",
      options: [
        { key: "A", text: "Monitor temperature" },
        { key: "B", text: "Revenue versus target" },
        { key: "C", text: "Desktop wallpaper" },
        { key: "D", text: "Keyboard layout" }
      ],
      correct: 1,
      explanation: "Revenue against target supports performance monitoring.",
      hint: "Focus on Revenue versus target to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What is a useful top-of-page design?",
      options: [
        { key: "A", text: "All text in one long paragraph" },
        { key: "B", text: "Unlabeled charts only" },
        { key: "C", text: "Headline KPIs followed by trends and breakdowns" },
        { key: "D", text: "No totals anywhere" }
      ],
      correct: 2,
      explanation: "Hierarchy supports fast scanning.",
      hint: "Focus on Headline KPIs followed by trends and breakdowns to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Why include a time filter?",
      options: [
        { key: "A", text: "To replace the source file" },
        { key: "B", text: "To install Service" },
        { key: "C", text: "To change chart fonts" },
        { key: "D", text: "To compare relevant periods" }
      ],
      correct: 3,
      explanation: "Time context matters for executive metrics.",
      hint: "Focus on To compare relevant periods to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should be done before presenting a dashboard?",
      options: [
        { key: "A", text: "Validate figures and test interactions" },
        { key: "B", text: "Only change the logo" },
        { key: "C", text: "Ignore slicer behavior" },
        { key: "D", text: "Hide the source data" }
      ],
      correct: 0,
      explanation: "Reliable numbers and interactions are essential.",
      hint: "Focus on Validate figures and test interactions to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Present key insights", "Test filters and numbers", "Add trends and breakdowns", "Select headline KPIs", "Define executive questions"],
      shuffled: ["Present key insights", "Test filters and numbers", "Add trends and breakdowns", "Select headline KPIs", "Define executive questions"],
      expected: ["Define executive questions", "Select headline KPIs", "Add trends and breakdowns", "Test filters and numbers", "Present key insights"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Slicer → Lets users select context", "Trend chart → Shows changes over time", "KPI row → Headline business metrics"],
      shuffled: ["Slicer → Lets users select context", "Trend chart → Shows changes over time", "KPI row → Headline business metrics"],
      expected: ["KPI row → Headline business metrics", "Trend chart → Shows changes over time", "Slicer → Lets users select context"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Revenue vs Target", "All transaction IDs", "Monthly Sales Trend", "Long unrelated descriptions"],
      shuffled: ["Revenue vs Target", "All transaction IDs", "Monthly Sales Trend", "Long unrelated descriptions"],
      expected: ["Revenue vs Target (Executive-friendly elements)", "Monthly Sales Trend (Executive-friendly elements)", "All transaction IDs (Low-value first-screen clutter)", "Long unrelated descriptions (Low-value first-screen clutter)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "KPI row",
      meaning: "Headline business metrics"
    },
    {
      id: 2,
      snippet: "Trend chart",
      meaning: "Shows changes over time"
    },
    {
      id: 3,
      snippet: "Slicer",
      meaning: "Lets users select context"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Designing an Executive Dashboard",
      scenario: "A CEO wants to know whether monthly sales are meeting target.",
      prompt: "What should appear prominently on the dashboard?",
      expectedResponse: "Revenue and target KPIs — Executive dashboards prioritize actionable business metrics."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is an executive dashboard?",
      sampleAnswer: "A concise report highlighting important KPIs, trends, and decisions."
    },
    {
      id: 2,
      question: "What should be shown first?",
      sampleAnswer: "The most important business metrics and target comparisons."
    },
    {
      id: 3,
      question: "Why add slicers?",
      sampleAnswer: "They allow leaders to view metrics for relevant periods or segments."
    },
    {
      id: 4,
      question: "What must be checked before sharing?",
      sampleAnswer: "Accuracy, filter behavior, readability, and accessibility."
    }
    ]
  },
  '28.1': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.1',
    id: 247,
    topicTitle: "Publish Reports to Power BI Service",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "Where are Power BI Desktop reports commonly published?",
      options: [
        { key: "A", text: "Power BI Service" },
        { key: "B", text: "Windows Calculator" },
        { key: "C", text: "Power BI Mobile installer" },
        { key: "D", text: "Printer queue" }
      ],
      correct: 0,
      explanation: "Service hosts published reports.",
      hint: "Focus on Power BI Service to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which Desktop command sends a report to the cloud service?",
      options: [
        { key: "A", text: "Delete Query" },
        { key: "B", text: "Publish" },
        { key: "C", text: "Format Painter" },
        { key: "D", text: "Split Column" }
      ],
      correct: 1,
      explanation: "Publish sends the report to a selected workspace.",
      hint: "Focus on Publish to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What must you choose when publishing?",
      options: [
        { key: "A", text: "A printer paper size" },
        { key: "B", text: "A chart wallpaper" },
        { key: "C", text: "A destination workspace" },
        { key: "D", text: "A Python interpreter" }
      ],
      correct: 2,
      explanation: "The report needs a destination in Service.",
      hint: "Focus on A destination workspace to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What should you verify after publishing?",
      options: [
        { key: "A", text: "Laptop wallpaper changed" },
        { key: "B", text: "Every visual became an image" },
        { key: "C", text: "The report is automatically public" },
        { key: "D", text: "Report opens and visuals display correctly" }
      ],
      correct: 3,
      explanation: "Published content should be tested.",
      hint: "Focus on Report opens and visuals display correctly to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Does publishing automatically make a report public to everyone?",
      options: [
        { key: "A", text: "No, access depends on sharing and permissions" },
        { key: "B", text: "Yes, always" },
        { key: "C", text: "Only when using CSV" },
        { key: "D", text: "Only on mobile" }
      ],
      correct: 0,
      explanation: "Publishing and sharing are separate operations.",
      hint: "Focus on No, access depends on sharing and permissions to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Validate visuals", "Open published report in Service", "Choose destination workspace", "Select Publish", "Finish and save report in Desktop"],
      shuffled: ["Validate visuals", "Open published report in Service", "Choose destination workspace", "Select Publish", "Finish and save report in Desktop"],
      expected: ["Finish and save report in Desktop", "Select Publish", "Choose destination workspace", "Open published report in Service", "Validate visuals"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Permission → Controls who can access content", "Workspace → Destination for managed content", "Publish → Send report from Desktop to Service"],
      shuffled: ["Permission → Controls who can access content", "Workspace → Destination for managed content", "Publish → Send report from Desktop to Service"],
      expected: ["Publish → Send report from Desktop to Service", "Workspace → Destination for managed content", "Permission → Controls who can access content"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Choose workspace", "Change monitor wallpaper", "Verify published report", "Delete source database"],
      shuffled: ["Choose workspace", "Change monitor wallpaper", "Verify published report", "Delete source database"],
      expected: ["Choose workspace (Publishing tasks)", "Verify published report (Publishing tasks)", "Change monitor wallpaper (Unrelated tasks)", "Delete source database (Unrelated tasks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Publish",
      meaning: "Send report from Desktop to Service"
    },
    {
      id: 2,
      snippet: "Workspace",
      meaning: "Destination for managed content"
    },
    {
      id: 3,
      snippet: "Permission",
      meaning: "Controls who can access content"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Publish Reports to Power BI Service",
      scenario: "An analyst finished a sales report in Power BI Desktop and wants it online.",
      prompt: "Which action should they use?",
      expectedResponse: "Publish to Power BI Service — Publish sends the report to a selected Service workspace."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Publish do?",
      sampleAnswer: "It sends a Power BI Desktop report to Power BI Service."
    },
    {
      id: 2,
      question: "What is a workspace?",
      sampleAnswer: "A location in Service for managing related reports and semantic models."
    },
    {
      id: 3,
      question: "Does Publish automatically share a report publicly?",
      sampleAnswer: "No. Access is controlled by permissions and sharing settings."
    },
    {
      id: 4,
      question: "What should you check after publishing?",
      sampleAnswer: "Open the report, confirm visuals and data, and verify access."
    }
    ]
  },
  '28.2': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.2',
    id: 248,
    topicTitle: "Workspaces and Sharing Permissions",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a Power BI workspace?",
      options: [
        { key: "A", text: "A collaborative area for managing Power BI content" },
        { key: "B", text: "A Windows desktop folder only" },
        { key: "C", text: "A DAX function" },
        { key: "D", text: "A chart type" }
      ],
      correct: 0,
      explanation: "Workspaces organize reports and semantic models.",
      hint: "Focus on A collaborative area for managing Power BI content to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Why assign workspace roles?",
      options: [
        { key: "A", text: "To change screen brightness" },
        { key: "B", text: "To control who can view or manage content" },
        { key: "C", text: "To convert dates to text" },
        { key: "D", text: "To create a slicer" }
      ],
      correct: 1,
      explanation: "Roles define different access levels.",
      hint: "Focus on To control who can view or manage content to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which practice supports secure sharing?",
      options: [
        { key: "A", text: "Give everyone admin access" },
        { key: "B", text: "Publish sensitive reports to the public web" },
        { key: "C", text: "Grant only the access users need" },
        { key: "D", text: "Share passwords by email" }
      ],
      correct: 2,
      explanation: "Least privilege reduces risk.",
      hint: "Focus on Grant only the access users need to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Can licensing affect Power BI sharing?",
      options: [
        { key: "A", text: "No, licenses never matter" },
        { key: "B", text: "Only chart color matters" },
        { key: "C", text: "Only Excel files are affected" },
        { key: "D", text: "Yes, sharing and viewing rights depend on licenses and capacity" }
      ],
      correct: 3,
      explanation: "Power BI access can depend on licensing.",
      hint: "Focus on Yes, sharing and viewing rights depend on licenses and capacity to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should be checked before sharing a sales report?",
      options: [
        { key: "A", text: "Recipient permissions and data sensitivity" },
        { key: "B", text: "Report background only" },
        { key: "C", text: "Monitor size" },
        { key: "D", text: "Keyboard layout" }
      ],
      correct: 0,
      explanation: "Confirm appropriate access and confidentiality.",
      hint: "Focus on Recipient permissions and data sensitivity to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test recipient access", "Assign appropriate roles", "Choose a workspace", "Identify report audience"],
      shuffled: ["Test recipient access", "Assign appropriate roles", "Choose a workspace", "Identify report audience"],
      expected: ["Identify report audience", "Choose a workspace", "Assign appropriate roles", "Test recipient access"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Least privilege → Give only necessary access", "Role → Defines permissions", "Workspace → Area for managing reports"],
      shuffled: ["Least privilege → Give only necessary access", "Role → Defines permissions", "Workspace → Area for managing reports"],
      expected: ["Workspace → Area for managing reports", "Role → Defines permissions", "Least privilege → Give only necessary access"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Grant viewer-level access when enough", "Give every user admin role", "Verify recipient list", "Publish sensitive report publicly"],
      shuffled: ["Grant viewer-level access when enough", "Give every user admin role", "Verify recipient list", "Publish sensitive report publicly"],
      expected: ["Grant viewer-level access when enough (Safer sharing actions)", "Verify recipient list (Safer sharing actions)", "Give every user admin role (Risky sharing actions)", "Publish sensitive report publicly (Risky sharing actions)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Workspace",
      meaning: "Area for managing reports"
    },
    {
      id: 2,
      snippet: "Role",
      meaning: "Defines permissions"
    },
    {
      id: 3,
      snippet: "Least privilege",
      meaning: "Give only necessary access"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Workspaces and Sharing Permissions",
      scenario: "A new employee only needs to view a report, not edit it.",
      prompt: "What is the safest general approach?",
      expectedResponse: "Grant only appropriate viewing access — Use least-privilege permissions for the employee."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a workspace?",
      sampleAnswer: "It is a place in Power BI Service to organize and manage content."
    },
    {
      id: 2,
      question: "Why do workspace roles matter?",
      sampleAnswer: "They control what different users can do with workspace content."
    },
    {
      id: 3,
      question: "What is least privilege?",
      sampleAnswer: "Giving each person only the permissions needed for their work."
    },
    {
      id: 4,
      question: "What should you check before sharing?",
      sampleAnswer: "Audience, sensitivity, permissions, and applicable licensing requirements."
    }
    ]
  },
  '28.3': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.3',
    id: 249,
    topicTitle: "Scheduled Refresh and Credentials",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is scheduled refresh?",
      options: [
        { key: "A", text: "Automatic data refresh at configured times" },
        { key: "B", text: "Automatic chart color rotation" },
        { key: "C", text: "A new report page" },
        { key: "D", text: "A DAX text function" }
      ],
      correct: 0,
      explanation: "Schedules update imported data from its source.",
      hint: "Focus on Automatic data refresh at configured times to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Why might refresh need credentials?",
      options: [
        { key: "A", text: "To change a chart title" },
        { key: "B", text: "Power BI must authenticate to a protected data source" },
        { key: "C", text: "To set font size" },
        { key: "D", text: "To create a bookmark" }
      ],
      correct: 1,
      explanation: "Source access requires valid authentication.",
      hint: "Focus on Power BI must authenticate to a protected data source to answer this Power BI concept."
    },
    {
      id: 3,
      question: "When might an on-premises gateway be needed?",
      options: [
        { key: "A", text: "For every public web page without exception" },
        { key: "B", text: "To change report colors" },
        { key: "C", text: "When Service must access certain local or private-network sources" },
        { key: "D", text: "To create a calculated column" }
      ],
      correct: 2,
      explanation: "A gateway bridges supported private sources.",
      hint: "Focus on When Service must access certain local or private-network sources to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What should you check after a failed refresh?",
      options: [
        { key: "A", text: "Only dashboard theme" },
        { key: "B", text: "Only visual title" },
        { key: "C", text: "Only slicer font" },
        { key: "D", text: "Error message, source access and credentials" }
      ],
      correct: 3,
      explanation: "Refresh failures often involve connectivity or source changes.",
      hint: "Focus on Error message, source access and credentials to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What does successful refresh help ensure?",
      options: [
        { key: "A", text: "Imported data reflects updated source records" },
        { key: "B", text: "All calculations are automatically correct" },
        { key: "C", text: "Every report is public" },
        { key: "D", text: "All source errors disappear" }
      ],
      correct: 0,
      explanation: "Refresh updates data but still requires validation.",
      hint: "Focus on Imported data reflects updated source records to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Check refresh history", "Set refresh schedule", "Configure credentials and gateway if needed", "Confirm source access"],
      shuffled: ["Check refresh history", "Set refresh schedule", "Configure credentials and gateway if needed", "Confirm source access"],
      expected: ["Confirm source access", "Configure credentials and gateway if needed", "Set refresh schedule", "Check refresh history"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Gateway → Connects Service to supported private sources", "Credentials → Authentication for a data source", "Scheduled refresh → Automatic refresh at set times"],
      shuffled: ["Gateway → Connects Service to supported private sources", "Credentials → Authentication for a data source", "Scheduled refresh → Automatic refresh at set times"],
      expected: ["Scheduled refresh → Automatic refresh at set times", "Credentials → Authentication for a data source", "Gateway → Connects Service to supported private sources"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Valid source credentials", "Chart background color", "Reachable data source", "Report logo position"],
      shuffled: ["Valid source credentials", "Chart background color", "Reachable data source", "Report logo position"],
      expected: ["Valid source credentials (Refresh requirements)", "Reachable data source (Refresh requirements)", "Chart background color (Unrelated settings)", "Report logo position (Unrelated settings)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Scheduled refresh",
      meaning: "Automatic refresh at set times"
    },
    {
      id: 2,
      snippet: "Credentials",
      meaning: "Authentication for a data source"
    },
    {
      id: 3,
      snippet: "Gateway",
      meaning: "Connects Service to supported private sources"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Scheduled Refresh and Credentials",
      scenario: "A report uses an imported company database and must update every morning.",
      prompt: "Which feature should be configured?",
      expectedResponse: "Scheduled refresh — Scheduled refresh can update imported data at configured times."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is scheduled refresh?",
      sampleAnswer: "It automatically updates imported data on a defined schedule."
    },
    {
      id: 2,
      question: "Why are credentials needed?",
      sampleAnswer: "They allow Power BI to authenticate to protected data sources."
    },
    {
      id: 3,
      question: "What is an on-premises gateway?",
      sampleAnswer: "A component that lets Service access supported sources in private environments."
    },
    {
      id: 4,
      question: "How do you troubleshoot refresh failure?",
      sampleAnswer: "Check refresh history, credentials, source connectivity, gateway, and schema changes."
    }
    ]
  },
  '28.4': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.4',
    id: 250,
    topicTitle: "Row-Level Security Overview",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Row-Level Security (RLS)?",
      options: [
        { key: "A", text: "Restricting which data rows a user can see" },
        { key: "B", text: "Changing report background color" },
        { key: "C", text: "Hiding every visual title" },
        { key: "D", text: "Renaming a workspace" }
      ],
      correct: 0,
      explanation: "RLS applies row filters based on security roles.",
      hint: "Focus on Restricting which data rows a user can see to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What is a common RLS use case?",
      options: [
        { key: "A", text: "Every user sees every confidential row" },
        { key: "B", text: "Regional managers see only their region's sales" },
        { key: "C", text: "Charts change font by user" },
        { key: "D", text: "CSV files are renamed automatically" }
      ],
      correct: 1,
      explanation: "RLS can restrict data by region.",
      hint: "Focus on Regional managers see only their region's sales to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Where are RLS filters typically defined for a model?",
      options: [
        { key: "A", text: "In chart wallpaper settings" },
        { key: "B", text: "In printer settings" },
        { key: "C", text: "In model security roles" },
        { key: "D", text: "In phone brightness controls" }
      ],
      correct: 2,
      explanation: "Roles define model row filters.",
      hint: "Focus on In model security roles to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Why test RLS roles?",
      options: [
        { key: "A", text: "To speed up monitor refresh" },
        { key: "B", text: "To add a logo" },
        { key: "C", text: "To make all files public" },
        { key: "D", text: "To verify users see only authorized data" }
      ],
      correct: 3,
      explanation: "Security behavior must be validated.",
      hint: "Focus on To verify users see only authorized data to answer this Power BI concept."
    },
    {
      id: 5,
      question: "Does hiding a visual replace RLS?",
      options: [
        { key: "A", text: "No, hiding visuals is not a data security control" },
        { key: "B", text: "Yes, always" },
        { key: "C", text: "Only on mobile" },
        { key: "D", text: "Only with Excel" }
      ],
      correct: 0,
      explanation: "RLS controls data access, not visual visibility alone.",
      hint: "Focus on No, hiding visuals is not a data security control to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Test with View as role", "Assign appropriate users", "Create a role with row filter", "Identify data access rule"],
      shuffled: ["Test with View as role", "Assign appropriate users", "Create a role with row filter", "Identify data access rule"],
      expected: ["Identify data access rule", "Create a role with row filter", "Assign appropriate users", "Test with View as role"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["View as → Test how a role filters data", "Role → Set of security filter rules", "RLS → Restricts visible data rows"],
      shuffled: ["View as → Test how a role filters data", "Role → Set of security filter rules", "RLS → Restricts visible data rows"],
      expected: ["RLS → Restricts visible data rows", "Role → Set of security filter rules", "View as → Test how a role filters data"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Role-based row filter", "Hide chart title", "Test role access", "Change visual background"],
      shuffled: ["Role-based row filter", "Hide chart title", "Test role access", "Change visual background"],
      expected: ["Role-based row filter (Security controls)", "Test role access (Security controls)", "Hide chart title (Not security controls)", "Change visual background (Not security controls)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "RLS",
      meaning: "Restricts visible data rows"
    },
    {
      id: 2,
      snippet: "Role",
      meaning: "Set of security filter rules"
    },
    {
      id: 3,
      snippet: "View as",
      meaning: "Test how a role filters data"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Row-Level Security Overview",
      scenario: "A regional manager should see only their own region sales.",
      prompt: "Which Power BI feature can enforce this data restriction?",
      expectedResponse: "Row-Level Security — RLS can filter the data visible to a role."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is RLS?",
      sampleAnswer: "Row-Level Security restricts the rows users can access in a semantic model."
    },
    {
      id: 2,
      question: "Give a business example of RLS.",
      sampleAnswer: "A regional manager can be restricted to sales for their region."
    },
    {
      id: 3,
      question: "How can RLS be tested?",
      sampleAnswer: "Use the role-testing features and verify effective access with appropriate accounts."
    },
    {
      id: 4,
      question: "Is hiding a visual the same as RLS?",
      sampleAnswer: "No. Hiding a visual does not secure the underlying data."
    }
    ]
  },
  '28.5': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.5',
    id: 251,
    topicTitle: "Performance and Usability Checks",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a performance check?",
      options: [
        { key: "A", text: "Testing how quickly reports and visuals respond" },
        { key: "B", text: "Choosing a keyboard brand" },
        { key: "C", text: "Changing the report logo" },
        { key: "D", text: "Renaming every table" }
      ],
      correct: 0,
      explanation: "Performance affects the user experience.",
      hint: "Focus on Testing how quickly reports and visuals respond to answer this Power BI concept."
    },
    {
      id: 2,
      question: "What can make reports slower?",
      options: [
        { key: "A", text: "Clear simple measures" },
        { key: "B", text: "Unnecessary high-cardinality fields and complex visuals" },
        { key: "C", text: "Useful filters" },
        { key: "D", text: "Appropriate relationships" }
      ],
      correct: 1,
      explanation: "Heavy queries and visuals can reduce performance.",
      hint: "Focus on Unnecessary high-cardinality fields and complex visuals to answer this Power BI concept."
    },
    {
      id: 3,
      question: "What should you check for usability?",
      options: [
        { key: "A", text: "Only the file icon" },
        { key: "B", text: "Only monitor color" },
        { key: "C", text: "Clear labels, working slicers and readable charts" },
        { key: "D", text: "Only desktop wallpaper" }
      ],
      correct: 2,
      explanation: "Usability checks focus on the report audience.",
      hint: "Focus on Clear labels, working slicers and readable charts to answer this Power BI concept."
    },
    {
      id: 4,
      question: "Which tool can help inspect slow visuals in Desktop?",
      options: [
        { key: "A", text: "Paint" },
        { key: "B", text: "Windows Calculator" },
        { key: "C", text: "File Explorer only" },
        { key: "D", text: "Performance Analyzer" }
      ],
      correct: 3,
      explanation: "Performance Analyzer records visual timings.",
      hint: "Focus on Performance Analyzer to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What should be tested before delivery?",
      options: [
        { key: "A", text: "Accuracy, responsiveness and navigation" },
        { key: "B", text: "Only chart background" },
        { key: "C", text: "Only page title" },
        { key: "D", text: "Only laptop battery" }
      ],
      correct: 0,
      explanation: "Reports should be correct and easy to use.",
      hint: "Focus on Accuracy, responsiveness and navigation to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Recheck results", "Simplify slow visuals", "Test slicers and navigation", "Use Performance Analyzer if needed", "Open report and test visuals"],
      shuffled: ["Recheck results", "Simplify slow visuals", "Test slicers and navigation", "Use Performance Analyzer if needed", "Open report and test visuals"],
      expected: ["Open report and test visuals", "Use Performance Analyzer if needed", "Test slicers and navigation", "Simplify slow visuals", "Recheck results"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Validation → Confirms correct metrics", "Usability test → Checks user interactions and clarity", "Performance Analyzer → Helps inspect visual timing"],
      shuffled: ["Validation → Confirms correct metrics", "Usability test → Checks user interactions and clarity", "Performance Analyzer → Helps inspect visual timing"],
      expected: ["Performance Analyzer → Helps inspect visual timing", "Usability test → Checks user interactions and clarity", "Validation → Confirms correct metrics"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Test slow visuals", "Change laptop wallpaper", "Check readable labels", "Rename local desktop icons"],
      shuffled: ["Test slow visuals", "Change laptop wallpaper", "Check readable labels", "Rename local desktop icons"],
      expected: ["Test slow visuals (Good delivery checks)", "Check readable labels (Good delivery checks)", "Change laptop wallpaper (Not delivery checks)", "Rename local desktop icons (Not delivery checks)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Performance Analyzer",
      meaning: "Helps inspect visual timing"
    },
    {
      id: 2,
      snippet: "Usability test",
      meaning: "Checks user interactions and clarity"
    },
    {
      id: 3,
      snippet: "Validation",
      meaning: "Confirms correct metrics"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Performance and Usability Checks",
      scenario: "An executive dashboard takes too long to display charts.",
      prompt: "Which Desktop tool can help investigate visual timing?",
      expectedResponse: "Performance Analyzer — Performance Analyzer can help identify slow visuals."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is report performance?",
      sampleAnswer: "How quickly report visuals load and respond to interactions."
    },
    {
      id: 2,
      question: "What does Performance Analyzer do?",
      sampleAnswer: "It helps measure visual rendering and query timing in Desktop."
    },
    {
      id: 3,
      question: "What is a usability check?",
      sampleAnswer: "Testing whether labels, navigation, and filters are clear and usable."
    },
    {
      id: 4,
      question: "What do you test before delivery?",
      sampleAnswer: "Accuracy, performance, accessibility, and interactions."
    }
    ]
  },
  '28.6': {
    tabId: 5,
    tabName: 'Power BI and Dashboards',
    moduleId: 28,
    moduleName: "Module 28: Publishing, Security and Projects",
    topicKey: '28.6',
    id: 252,
    topicTitle: "Power BI Sales Dashboard Project",
    mode: 'Tool & Dashboard practice',
    game1Quiz: [
    {
      id: 1,
      question: "What should be defined before building a sales dashboard?",
      options: [
        { key: "A", text: "Business questions and KPIs" },
        { key: "B", text: "Chart colors only" },
        { key: "C", text: "Printer settings" },
        { key: "D", text: "A new mouse" }
      ],
      correct: 0,
      explanation: "Project goals guide the dashboard design.",
      hint: "Focus on Business questions and KPIs to answer this Power BI concept."
    },
    {
      id: 2,
      question: "Which step usually comes before data modeling?",
      options: [
        { key: "A", text: "Publishing a finished report" },
        { key: "B", text: "Importing and cleaning the source data" },
        { key: "C", text: "Sending access invitations" },
        { key: "D", text: "Changing the app icon" }
      ],
      correct: 1,
      explanation: "Clean data supports reliable models.",
      hint: "Focus on Importing and cleaning the source data to answer this Power BI concept."
    },
    {
      id: 3,
      question: "Which is a useful sales KPI?",
      options: [
        { key: "A", text: "Monitor brand" },
        { key: "B", text: "Page background" },
        { key: "C", text: "Total revenue" },
        { key: "D", text: "Laptop wallpaper" }
      ],
      correct: 2,
      explanation: "Revenue measures sales performance.",
      hint: "Focus on Total revenue to answer this Power BI concept."
    },
    {
      id: 4,
      question: "What should be validated before publishing?",
      options: [
        { key: "A", text: "Only the dashboard title" },
        { key: "B", text: "Only the report logo" },
        { key: "C", text: "Only the file size" },
        { key: "D", text: "Totals, filters and relationships" }
      ],
      correct: 3,
      explanation: "Validation catches analytical errors.",
      hint: "Focus on Totals, filters and relationships to answer this Power BI concept."
    },
    {
      id: 5,
      question: "What is a good final project deliverable?",
      options: [
        { key: "A", text: "A tested dashboard with clear insights" },
        { key: "B", text: "An empty report page" },
        { key: "C", text: "Only a source file name" },
        { key: "D", text: "A screenshot without data" }
      ],
      correct: 0,
      explanation: "The deliverable should answer the business question.",
      hint: "Focus on A tested dashboard with clear insights to answer this Power BI concept."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko sahi order mein tap karke arrange karo.",
      tokens: ["Publish with appropriate access", "Create and test visuals", "Build model and measures", "Import and clean data", "Define sales questions"],
      shuffled: ["Publish with appropriate access", "Create and test visuals", "Build model and measures", "Import and clean data", "Define sales questions"],
      expected: ["Define sales questions", "Import and clean data", "Build model and measures", "Create and test visuals", "Publish with appropriate access"],
      hint: "Correct sequence! Steps sahi order mein hain."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har concept ko uske correct meaning se match karo.",
      tokens: ["Dashboard → Visual summary of business performance", "Data model → Connected tables and measures", "KPI → Key performance metric"],
      shuffled: ["Dashboard → Visual summary of business performance", "Data model → Connected tables and measures", "KPI → Key performance metric"],
      expected: ["KPI → Key performance metric", "Data model → Connected tables and measures", "Dashboard → Visual summary of business performance"],
      hint: "Well done! Saare concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort the Cards",
      prompt: "Cards ko correct category mein place karo.",
      tokens: ["Revenue KPI and sales trend", "Printer configuration sheet", "Product performance chart", "Laptop hardware inventory only"],
      shuffled: ["Revenue KPI and sales trend", "Printer configuration sheet", "Product performance chart", "Laptop hardware inventory only"],
      expected: ["Revenue KPI and sales trend (Project outputs)", "Product performance chart (Project outputs)", "Printer configuration sheet (Unrelated outputs)", "Laptop hardware inventory only (Unrelated outputs)"],
      hint: "Great! Cards correct categories mein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "KPI",
      meaning: "Key performance metric"
    },
    {
      id: 2,
      snippet: "Data model",
      meaning: "Connected tables and measures"
    },
    {
      id: 3,
      snippet: "Dashboard",
      meaning: "Visual summary of business performance"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Power BI Sales Dashboard Project",
      scenario: "A shop owner wants one report showing total sales, top products and monthly trends.",
      prompt: "What is the best project outcome?",
      expectedResponse: "A validated interactive sales dashboard — A dashboard can combine KPIs, product comparisons and trends."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What are the main stages of a Power BI project?",
      sampleAnswer: "Define questions, connect and clean data, model it, calculate KPIs, build visuals, validate, and publish."
    },
    {
      id: 2,
      question: "Name two sales KPIs.",
      sampleAnswer: "Total revenue and order count are common sales KPIs."
    },
    {
      id: 3,
      question: "Why validate a dashboard?",
      sampleAnswer: "To ensure its numbers and interactions support trustworthy decisions."
    },
    {
      id: 4,
      question: "What should a final sales dashboard communicate?",
      sampleAnswer: "Clear sales performance, important trends, and actionable findings."
    }
    ]
  },
};

export const TAB5_POWERBI_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  207: TAB5_POWERBI_QUESTION_BANK['23.1'],
  127: TAB5_POWERBI_QUESTION_BANK['23.1'],
  231: TAB5_POWERBI_QUESTION_BANK['23.1'],
  208: TAB5_POWERBI_QUESTION_BANK['23.2'],
  128: TAB5_POWERBI_QUESTION_BANK['23.2'],
  232: TAB5_POWERBI_QUESTION_BANK['23.2'],
  209: TAB5_POWERBI_QUESTION_BANK['23.3'],
  129: TAB5_POWERBI_QUESTION_BANK['23.3'],
  233: TAB5_POWERBI_QUESTION_BANK['23.3'],
  210: TAB5_POWERBI_QUESTION_BANK['23.4'],
  130: TAB5_POWERBI_QUESTION_BANK['23.4'],
  234: TAB5_POWERBI_QUESTION_BANK['23.4'],
  211: TAB5_POWERBI_QUESTION_BANK['23.5'],
  131: TAB5_POWERBI_QUESTION_BANK['23.5'],
  235: TAB5_POWERBI_QUESTION_BANK['23.5'],
  212: TAB5_POWERBI_QUESTION_BANK['23.6'],
  132: TAB5_POWERBI_QUESTION_BANK['23.6'],
  236: TAB5_POWERBI_QUESTION_BANK['23.6'],
  213: TAB5_POWERBI_QUESTION_BANK['24.1'],
  133: TAB5_POWERBI_QUESTION_BANK['24.1'],
  241: TAB5_POWERBI_QUESTION_BANK['24.1'],
  214: TAB5_POWERBI_QUESTION_BANK['24.2'],
  134: TAB5_POWERBI_QUESTION_BANK['24.2'],
  242: TAB5_POWERBI_QUESTION_BANK['24.2'],
  215: TAB5_POWERBI_QUESTION_BANK['24.3'],
  135: TAB5_POWERBI_QUESTION_BANK['24.3'],
  243: TAB5_POWERBI_QUESTION_BANK['24.3'],
  216: TAB5_POWERBI_QUESTION_BANK['24.4'],
  136: TAB5_POWERBI_QUESTION_BANK['24.4'],
  244: TAB5_POWERBI_QUESTION_BANK['24.4'],
  217: TAB5_POWERBI_QUESTION_BANK['24.5'],
  137: TAB5_POWERBI_QUESTION_BANK['24.5'],
  245: TAB5_POWERBI_QUESTION_BANK['24.5'],
  218: TAB5_POWERBI_QUESTION_BANK['24.6'],
  138: TAB5_POWERBI_QUESTION_BANK['24.6'],
  246: TAB5_POWERBI_QUESTION_BANK['24.6'],
  219: TAB5_POWERBI_QUESTION_BANK['24.7'],
  139: TAB5_POWERBI_QUESTION_BANK['24.7'],
  247: TAB5_POWERBI_QUESTION_BANK['24.7'],
  220: TAB5_POWERBI_QUESTION_BANK['24.8'],
  140: TAB5_POWERBI_QUESTION_BANK['24.8'],
  248: TAB5_POWERBI_QUESTION_BANK['24.8'],
  221: TAB5_POWERBI_QUESTION_BANK['24.9'],
  141: TAB5_POWERBI_QUESTION_BANK['24.9'],
  249: TAB5_POWERBI_QUESTION_BANK['24.9'],
  222: TAB5_POWERBI_QUESTION_BANK['25.1'],
  142: TAB5_POWERBI_QUESTION_BANK['25.1'],
  251: TAB5_POWERBI_QUESTION_BANK['25.1'],
  223: TAB5_POWERBI_QUESTION_BANK['25.2'],
  143: TAB5_POWERBI_QUESTION_BANK['25.2'],
  252: TAB5_POWERBI_QUESTION_BANK['25.2'],
  224: TAB5_POWERBI_QUESTION_BANK['25.3'],
  144: TAB5_POWERBI_QUESTION_BANK['25.3'],
  253: TAB5_POWERBI_QUESTION_BANK['25.3'],
  225: TAB5_POWERBI_QUESTION_BANK['25.4'],
  145: TAB5_POWERBI_QUESTION_BANK['25.4'],
  254: TAB5_POWERBI_QUESTION_BANK['25.4'],
  226: TAB5_POWERBI_QUESTION_BANK['25.5'],
  146: TAB5_POWERBI_QUESTION_BANK['25.5'],
  255: TAB5_POWERBI_QUESTION_BANK['25.5'],
  227: TAB5_POWERBI_QUESTION_BANK['25.6'],
  147: TAB5_POWERBI_QUESTION_BANK['25.6'],
  256: TAB5_POWERBI_QUESTION_BANK['25.6'],
  228: TAB5_POWERBI_QUESTION_BANK['25.7'],
  148: TAB5_POWERBI_QUESTION_BANK['25.7'],
  257: TAB5_POWERBI_QUESTION_BANK['25.7'],
  229: TAB5_POWERBI_QUESTION_BANK['26.1'],
  149: TAB5_POWERBI_QUESTION_BANK['26.1'],
  261: TAB5_POWERBI_QUESTION_BANK['26.1'],
  230: TAB5_POWERBI_QUESTION_BANK['26.2'],
  150: TAB5_POWERBI_QUESTION_BANK['26.2'],
  262: TAB5_POWERBI_QUESTION_BANK['26.2'],
  231: TAB5_POWERBI_QUESTION_BANK['26.3'],
  151: TAB5_POWERBI_QUESTION_BANK['26.3'],
  263: TAB5_POWERBI_QUESTION_BANK['26.3'],
  232: TAB5_POWERBI_QUESTION_BANK['26.4'],
  152: TAB5_POWERBI_QUESTION_BANK['26.4'],
  264: TAB5_POWERBI_QUESTION_BANK['26.4'],
  233: TAB5_POWERBI_QUESTION_BANK['26.5'],
  153: TAB5_POWERBI_QUESTION_BANK['26.5'],
  265: TAB5_POWERBI_QUESTION_BANK['26.5'],
  234: TAB5_POWERBI_QUESTION_BANK['26.6'],
  154: TAB5_POWERBI_QUESTION_BANK['26.6'],
  266: TAB5_POWERBI_QUESTION_BANK['26.6'],
  235: TAB5_POWERBI_QUESTION_BANK['26.7'],
  155: TAB5_POWERBI_QUESTION_BANK['26.7'],
  267: TAB5_POWERBI_QUESTION_BANK['26.7'],
  236: TAB5_POWERBI_QUESTION_BANK['26.8'],
  156: TAB5_POWERBI_QUESTION_BANK['26.8'],
  268: TAB5_POWERBI_QUESTION_BANK['26.8'],
  237: TAB5_POWERBI_QUESTION_BANK['26.9'],
  157: TAB5_POWERBI_QUESTION_BANK['26.9'],
  269: TAB5_POWERBI_QUESTION_BANK['26.9'],
  238: TAB5_POWERBI_QUESTION_BANK['26.10'],
  158: TAB5_POWERBI_QUESTION_BANK['26.10'],
  2610: TAB5_POWERBI_QUESTION_BANK['26.10'],
  239: TAB5_POWERBI_QUESTION_BANK['27.1'],
  159: TAB5_POWERBI_QUESTION_BANK['27.1'],
  271: TAB5_POWERBI_QUESTION_BANK['27.1'],
  240: TAB5_POWERBI_QUESTION_BANK['27.2'],
  160: TAB5_POWERBI_QUESTION_BANK['27.2'],
  272: TAB5_POWERBI_QUESTION_BANK['27.2'],
  241: TAB5_POWERBI_QUESTION_BANK['27.3'],
  161: TAB5_POWERBI_QUESTION_BANK['27.3'],
  273: TAB5_POWERBI_QUESTION_BANK['27.3'],
  242: TAB5_POWERBI_QUESTION_BANK['27.4'],
  162: TAB5_POWERBI_QUESTION_BANK['27.4'],
  274: TAB5_POWERBI_QUESTION_BANK['27.4'],
  243: TAB5_POWERBI_QUESTION_BANK['27.5'],
  163: TAB5_POWERBI_QUESTION_BANK['27.5'],
  275: TAB5_POWERBI_QUESTION_BANK['27.5'],
  244: TAB5_POWERBI_QUESTION_BANK['27.6'],
  164: TAB5_POWERBI_QUESTION_BANK['27.6'],
  276: TAB5_POWERBI_QUESTION_BANK['27.6'],
  245: TAB5_POWERBI_QUESTION_BANK['27.7'],
  165: TAB5_POWERBI_QUESTION_BANK['27.7'],
  277: TAB5_POWERBI_QUESTION_BANK['27.7'],
  246: TAB5_POWERBI_QUESTION_BANK['27.8'],
  166: TAB5_POWERBI_QUESTION_BANK['27.8'],
  278: TAB5_POWERBI_QUESTION_BANK['27.8'],
  247: TAB5_POWERBI_QUESTION_BANK['28.1'],
  167: TAB5_POWERBI_QUESTION_BANK['28.1'],
  281: TAB5_POWERBI_QUESTION_BANK['28.1'],
  248: TAB5_POWERBI_QUESTION_BANK['28.2'],
  168: TAB5_POWERBI_QUESTION_BANK['28.2'],
  282: TAB5_POWERBI_QUESTION_BANK['28.2'],
  249: TAB5_POWERBI_QUESTION_BANK['28.3'],
  169: TAB5_POWERBI_QUESTION_BANK['28.3'],
  283: TAB5_POWERBI_QUESTION_BANK['28.3'],
  250: TAB5_POWERBI_QUESTION_BANK['28.4'],
  170: TAB5_POWERBI_QUESTION_BANK['28.4'],
  284: TAB5_POWERBI_QUESTION_BANK['28.4'],
  251: TAB5_POWERBI_QUESTION_BANK['28.5'],
  171: TAB5_POWERBI_QUESTION_BANK['28.5'],
  285: TAB5_POWERBI_QUESTION_BANK['28.5'],
  252: TAB5_POWERBI_QUESTION_BANK['28.6'],
  172: TAB5_POWERBI_QUESTION_BANK['28.6'],
  286: TAB5_POWERBI_QUESTION_BANK['28.6'],
};
