// ═══════════════════════════════════════════════════════════════════════════════
// TAB 3: EXCEL FOR DATA ANALYSIS — MODULES 11 TO 16 MASTER QUESTION BANK
// 50 Topics • 250 MCQs • 150 Puzzles • 50 Missions • 200 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB3_EXCEL_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '11.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.1',
    id: 27,
    topicTitle: 'What Is a Spreadsheet and Why Analysts Use Excel',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a spreadsheet?",
      options: [
        { key: "A", text: "A grid of rows and columns for organizing data" },
        { key: "B", text: "To organize, calculate, and analyze data" },
        { key: "C", text: "Calculate a result using cell values" },
        { key: "D", text: "Tracking monthly sales in a table" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A grid of rows and columns for organizing data. A spreadsheet stores and organizes information in cells. Isliye ye option correct hai.",
      hint: "Focus on A grid of rows and columns for organizing data to solve this problem."
    },
    {
      id: 2,
      question: "Why do Data Analysts use Excel?",
      options: [
        { key: "A", text: "Tracking monthly sales in a table" },
        { key: "B", text: "A grid of rows and columns for organizing data" },
        { key: "C", text: "Calculate a result using cell values" },
        { key: "D", text: "To organize, calculate, and analyze data" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To organize, calculate, and analyze data. Excel supports calculations, cleaning, summaries, and charts. Isliye ye option correct hai.",
      hint: "Focus on To organize, calculate, and analyze data to solve this problem."
    },
    {
      id: 3,
      question: "What is a typical spreadsheet use case?",
      options: [
        { key: "A", text: "A grid of rows and columns for organizing data" },
        { key: "B", text: "To organize, calculate, and analyze data" },
        { key: "C", text: "Calculate a result using cell values" },
        { key: "D", text: "Tracking monthly sales in a table" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Tracking monthly sales in a table. Sales records can be stored and compared in Excel. Isliye ye option correct hai.",
      hint: "Focus on Tracking monthly sales in a table to solve this problem."
    },
    {
      id: 4,
      question: "What does an Excel formula help do?",
      options: [
        { key: "A", text: "Tracking monthly sales in a table" },
        { key: "B", text: "To organize, calculate, and analyze data" },
        { key: "C", text: "Calculate a result using cell values" },
        { key: "D", text: "A grid of rows and columns for organizing data" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Calculate a result using cell values. Formulas automate calculations when values change. Isliye ye option correct hai.",
      hint: "Focus on Calculate a result using cell values to solve this problem."
    },
    {
      id: 5,
      question: "What can an Excel chart show?",
      options: [
        { key: "A", text: "Tracking monthly sales in a table" },
        { key: "B", text: "A grid of rows and columns for organizing data" },
        { key: "C", text: "To organize, calculate, and analyze data" },
        { key: "D", text: "A visual comparison or trend" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A visual comparison or trend. Charts make patterns in data easier to understand. Isliye ye option correct hai.",
      hint: "Focus on A visual comparison or trend to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange a basic analysis workflow",
      prompt: "Arrange a basic analysis workflow",
      tokens: ["Enter Sales Data", "Create Chart", "Calculate Total"],
      shuffled: ["Enter Sales Data", "Create Chart", "Calculate Total"],
      expected: ["Enter Sales Data", "Calculate Total", "Create Chart"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match Excel concepts to their purpose",
      prompt: "Match Excel concepts to their purpose",
      tokens: ["Chart \u2192 Visualization", "Formula \u2192 Calculation", "Spreadsheet \u2192 Data grid"],
      shuffled: ["Chart \u2192 Visualization", "Formula \u2192 Calculation", "Spreadsheet \u2192 Data grid"],
      expected: ["Spreadsheet \u2192 Data grid", "Formula \u2192 Calculation", "Chart \u2192 Visualization"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Arrange steps to track expenses",
      prompt: "Arrange steps to track expenses",
      tokens: ["Enter Expenses", "Open Workbook", "Save Workbook"],
      shuffled: ["Enter Expenses", "Open Workbook", "Save Workbook"],
      expected: ["Open Workbook", "Enter Expenses", "Save Workbook"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Spreadsheet",
      meaning: "Data grid"
    },
    {
      id: 2,
      snippet: "Formula",
      meaning: "Calculation"
    },
    {
      id: 3,
      snippet: "Chart",
      meaning: "Visualization"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Track Shop Sales",
      scenario: "A small shop wants to record each day’s sales.",
      prompt: "Which tool is most suitable for a simple sales table?",
      expectedResponse: "Excel spreadsheet — Correct! A spreadsheet organizes daily sales in rows and columns."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a spreadsheet?",
      sampleAnswer: "A grid of rows and columns for organizing data. A spreadsheet stores and organizes information in cells."
    },
    {
      id: 2,
      question: "Why do Data Analysts use Excel?",
      sampleAnswer: "To organize, calculate, and analyze data. Excel supports calculations, cleaning, summaries, and charts."
    },
    {
      id: 3,
      question: "What is a typical spreadsheet use case?",
      sampleAnswer: "Tracking monthly sales in a table. Sales records can be stored and compared in Excel."
    },
    {
      id: 4,
      question: "What does an Excel formula help do?",
      sampleAnswer: "Calculate a result using cell values. Formulas automate calculations when values change."
    }
    ]
  },
  '11.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.2',
    id: 28,
    topicTitle: 'Excel Interface: Ribbon, Workbook, Worksheet and Cells',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is an Excel workbook?",
      options: [
        { key: "A", text: "The area containing tabs and commands" },
        { key: "B", text: "A file containing one or more worksheets" },
        { key: "C", text: "The intersection of a row and column" },
        { key: "D", text: "A sheet inside an Excel workbook" }
      ],
      correct: 1,
      explanation: "Sahi jawab: A file containing one or more worksheets. A workbook is the overall Excel file. Isliye ye option correct hai.",
      hint: "Focus on A file containing one or more worksheets to solve this problem."
    },
    {
      id: 2,
      question: "What is a worksheet?",
      options: [
        { key: "A", text: "The area containing tabs and commands" },
        { key: "B", text: "A file containing one or more worksheets" },
        { key: "C", text: "The intersection of a row and column" },
        { key: "D", text: "A sheet inside an Excel workbook" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A sheet inside an Excel workbook. A workbook can contain multiple worksheets. Isliye ye option correct hai.",
      hint: "Focus on A sheet inside an Excel workbook to solve this problem."
    },
    {
      id: 3,
      question: "What is a cell?",
      options: [
        { key: "A", text: "The area containing tabs and commands" },
        { key: "B", text: "A sheet inside an Excel workbook" },
        { key: "C", text: "The intersection of a row and column" },
        { key: "D", text: "A file containing one or more worksheets" }
      ],
      correct: 2,
      explanation: "Sahi jawab: The intersection of a row and column. A cell is where a value or formula can be entered. Isliye ye option correct hai.",
      hint: "Focus on The intersection of a row and column to solve this problem."
    },
    {
      id: 4,
      question: "What is the Ribbon?",
      options: [
        { key: "A", text: "The area containing tabs and commands" },
        { key: "B", text: "A sheet inside an Excel workbook" },
        { key: "C", text: "The intersection of a row and column" },
        { key: "D", text: "A file containing one or more worksheets" }
      ],
      correct: 0,
      explanation: "Sahi jawab: The area containing tabs and commands. The Ribbon organizes commands such as Home and Insert. Isliye ye option correct hai.",
      hint: "Focus on The area containing tabs and commands to solve this problem."
    },
    {
      id: 5,
      question: "What does the Name Box usually display?",
      options: [
        { key: "A", text: "The intersection of a row and column" },
        { key: "B", text: "A sheet inside an Excel workbook" },
        { key: "C", text: "A file containing one or more worksheets" },
        { key: "D", text: "The address of the active cell" }
      ],
      correct: 3,
      explanation: "Sahi jawab: The address of the active cell. The Name Box helps identify or navigate to a cell. Isliye ye option correct hai.",
      hint: "Focus on The address of the active cell to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match interface parts",
      prompt: "Match interface parts",
      tokens: ["Cell \u2192 Row-column intersection", "Worksheet \u2192 Sheet inside file", "Workbook \u2192 Excel file"],
      shuffled: ["Cell \u2192 Row-column intersection", "Worksheet \u2192 Sheet inside file", "Workbook \u2192 Excel file"],
      expected: ["Workbook \u2192 Excel file", "Worksheet \u2192 Sheet inside file", "Cell \u2192 Row-column intersection"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Find a cell and enter data",
      prompt: "Find a cell and enter data",
      tokens: ["Click Cell", "Open Workbook", "Type Value", "Select Worksheet"],
      shuffled: ["Click Cell", "Open Workbook", "Type Value", "Select Worksheet"],
      expected: ["Open Workbook", "Select Worksheet", "Click Cell", "Type Value"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match interface tools",
      prompt: "Match interface tools",
      tokens: ["Formula Bar \u2192 Cell content", "Name Box \u2192 Cell address", "Ribbon \u2192 Commands"],
      shuffled: ["Formula Bar \u2192 Cell content", "Name Box \u2192 Cell address", "Ribbon \u2192 Commands"],
      expected: ["Ribbon \u2192 Commands", "Name Box \u2192 Cell address", "Formula Bar \u2192 Cell content"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Workbook",
      meaning: "Excel file"
    },
    {
      id: 2,
      snippet: "Worksheet",
      meaning: "Sheet inside file"
    },
    {
      id: 3,
      snippet: "Cell",
      meaning: "Row-column intersection"
    },
    {
      id: 1,
      snippet: "Ribbon",
      meaning: "Commands"
    },
    {
      id: 2,
      snippet: "Name Box",
      meaning: "Cell address"
    },
    {
      id: 3,
      snippet: "Formula Bar",
      meaning: "Cell content"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find the Correct Sheet",
      scenario: "An office workbook has separate sheets for Sales and Expenses.",
      prompt: "Where should the employee click to view the Expenses sheet?",
      expectedResponse: "Expenses worksheet tab — Correct! Worksheet tabs switch between sheets in the same workbook."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is an Excel workbook?",
      sampleAnswer: "A file containing one or more worksheets. A workbook is the overall Excel file."
    },
    {
      id: 2,
      question: "What is a worksheet?",
      sampleAnswer: "A sheet inside an Excel workbook. A workbook can contain multiple worksheets."
    },
    {
      id: 3,
      question: "What is a cell?",
      sampleAnswer: "The intersection of a row and column. A cell is where a value or formula can be entered."
    },
    {
      id: 4,
      question: "What is the Ribbon?",
      sampleAnswer: "The area containing tabs and commands. The Ribbon organizes commands such as Home and Insert."
    }
    ]
  },
  '11.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.3',
    id: 29,
    topicTitle: 'Rows, Columns, Ranges and Cell Addresses',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "How are Excel rows identified?",
      options: [
        { key: "A", text: "By letters such as A, B, and C" },
        { key: "B", text: "By numbers such as 1, 2, and 3" },
        { key: "C", text: "Column B and row 3" },
        { key: "D", text: "A range from A1 through A5" }
      ],
      correct: 1,
      explanation: "Sahi jawab: By numbers such as 1, 2, and 3. Rows run horizontally and have number labels. Isliye ye option correct hai.",
      hint: "Focus on By numbers such as 1, 2, and 3 to solve this problem."
    },
    {
      id: 2,
      question: "How are Excel columns identified?",
      options: [
        { key: "A", text: "Column B and row 3" },
        { key: "B", text: "A range from A1 through A5" },
        { key: "C", text: "By numbers such as 1, 2, and 3" },
        { key: "D", text: "By letters such as A, B, and C" }
      ],
      correct: 3,
      explanation: "Sahi jawab: By letters such as A, B, and C. Columns run vertically and have letter labels. Isliye ye option correct hai.",
      hint: "Focus on By letters such as A, B, and C to solve this problem."
    },
    {
      id: 3,
      question: "What does cell B3 mean?",
      options: [
        { key: "A", text: "By letters such as A, B, and C" },
        { key: "B", text: "A range from A1 through A5" },
        { key: "C", text: "By numbers such as 1, 2, and 3" },
        { key: "D", text: "Column B and row 3" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Column B and row 3. A cell address combines its column and row. Isliye ye option correct hai.",
      hint: "Focus on Column B and row 3 to solve this problem."
    },
    {
      id: 4,
      question: "What does A1:A5 represent?",
      options: [
        { key: "A", text: "By letters such as A, B, and C" },
        { key: "B", text: "A range from A1 through A5" },
        { key: "C", text: "Column B and row 3" },
        { key: "D", text: "By numbers such as 1, 2, and 3" }
      ],
      correct: 1,
      explanation: "Sahi jawab: A range from A1 through A5. The colon specifies a continuous range. Isliye ye option correct hai.",
      hint: "Focus on A range from A1 through A5 to solve this problem."
    },
    {
      id: 5,
      question: "Which direction does a row extend?",
      options: [
        { key: "A", text: "By letters such as A, B, and C" },
        { key: "B", text: "By numbers such as 1, 2, and 3" },
        { key: "C", text: "Horizontally across the worksheet" },
        { key: "D", text: "Column B and row 3" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Horizontally across the worksheet. Rows go from left to right. Isliye ye option correct hai.",
      hint: "Focus on Horizontally across the worksheet to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match addresses to positions",
      prompt: "Match addresses to positions",
      tokens: ["B2 \u2192 Column B row 2", "C4 \u2192 Column C row 4", "A1 \u2192 Column A row 1"],
      shuffled: ["B2 \u2192 Column B row 2", "C4 \u2192 Column C row 4", "A1 \u2192 Column A row 1"],
      expected: ["A1 \u2192 Column A row 1", "C4 \u2192 Column C row 4", "B2 \u2192 Column B row 2"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build the cell address B3",
      prompt: "Build the cell address B3",
      tokens: ["Cell B3", "Column B", "Row 3"],
      shuffled: ["Cell B3", "Column B", "Row 3"],
      expected: ["Column B", "Row 3", "Cell B3"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match worksheet labels",
      prompt: "Match worksheet labels",
      tokens: ["A1:A3 \u2192 Range", "3 \u2192 Row", "A \u2192 Column"],
      shuffled: ["A1:A3 \u2192 Range", "3 \u2192 Row", "A \u2192 Column"],
      expected: ["A \u2192 Column", "3 \u2192 Row", "A1:A3 \u2192 Range"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "A1",
      meaning: "Column A row 1"
    },
    {
      id: 2,
      snippet: "C4",
      meaning: "Column C row 4"
    },
    {
      id: 3,
      snippet: "B2",
      meaning: "Column B row 2"
    },
    {
      id: 1,
      snippet: "A",
      meaning: "Column"
    },
    {
      id: 2,
      snippet: "3",
      meaning: "Row"
    },
    {
      id: 3,
      snippet: "A1:A3",
      meaning: "Range"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find a Price Cell",
      scenario: "A shop has prices in column B. The third row contains the price you need.",
      prompt: "Which cell should the employee select?",
      expectedResponse: "B3 — Correct! B3 means column B, row 3."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How are Excel rows identified?",
      sampleAnswer: "By numbers such as 1, 2, and 3. Rows run horizontally and have number labels."
    },
    {
      id: 2,
      question: "How are Excel columns identified?",
      sampleAnswer: "By letters such as A, B, and C. Columns run vertically and have letter labels."
    },
    {
      id: 3,
      question: "What does cell B3 mean?",
      sampleAnswer: "Column B and row 3. A cell address combines its column and row."
    },
    {
      id: 4,
      question: "What does A1:A5 represent?",
      sampleAnswer: "A range from A1 through A5. The colon specifies a continuous range."
    }
    ]
  },
  '11.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.4',
    id: 30,
    topicTitle: 'Entering and Editing Data',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "How do you enter a value in an empty Excel cell?",
      options: [
        { key: "A", text: "Press F2 or edit in the Formula Bar" },
        { key: "B", text: "Select the cell, type, and press Enter" },
        { key: "C", text: "Reverses the most recent action" },
        { key: "D", text: "Clear its content" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Select the cell, type, and press Enter. Pressing Enter confirms the entered value. Isliye ye option correct hai.",
      hint: "Focus on Select the cell, type, and press Enter to solve this problem."
    },
    {
      id: 2,
      question: "How can you edit an existing cell without replacing it immediately?",
      options: [
        { key: "A", text: "Clear its content" },
        { key: "B", text: "Select the cell, type, and press Enter" },
        { key: "C", text: "Reverses the most recent action" },
        { key: "D", text: "Press F2 or edit in the Formula Bar" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Press F2 or edit in the Formula Bar. F2 allows editing cell content in place. Isliye ye option correct hai.",
      hint: "Focus on Press F2 or edit in the Formula Bar to solve this problem."
    },
    {
      id: 3,
      question: "What does pressing Delete on a selected cell usually do?",
      options: [
        { key: "A", text: "Reverses the most recent action" },
        { key: "B", text: "Press F2 or edit in the Formula Bar" },
        { key: "C", text: "Select the cell, type, and press Enter" },
        { key: "D", text: "Clear its content" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Clear its content. Delete clears content without necessarily deleting the cell itself. Isliye ye option correct hai.",
      hint: "Focus on Clear its content to solve this problem."
    },
    {
      id: 4,
      question: "What does Undo do?",
      options: [
        { key: "A", text: "Clear its content" },
        { key: "B", text: "Reverses the most recent action" },
        { key: "C", text: "Press F2 or edit in the Formula Bar" },
        { key: "D", text: "Select the cell, type, and press Enter" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Reverses the most recent action. Undo can restore an accidentally changed value. Isliye ye option correct hai.",
      hint: "Focus on Reverses the most recent action to solve this problem."
    },
    {
      id: 5,
      question: "What is the purpose of AutoFill?",
      options: [
        { key: "A", text: "Clear its content" },
        { key: "B", text: "Select the cell, type, and press Enter" },
        { key: "C", text: "Press F2 or edit in the Formula Bar" },
        { key: "D", text: "Fill a series or copy patterns into nearby cells" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Fill a series or copy patterns into nearby cells. The fill handle helps extend values and patterns. Isliye ye option correct hai.",
      hint: "Focus on Fill a series or copy patterns into nearby cells to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Enter a new student name",
      prompt: "Enter a new student name",
      tokens: ["Type Name", "Select Cell", "Press Enter"],
      shuffled: ["Type Name", "Select Cell", "Press Enter"],
      expected: ["Select Cell", "Type Name", "Press Enter"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Correct a misspelled value",
      prompt: "Correct a misspelled value",
      tokens: ["Select Cell", "Edit Text", "Press F2", "Press Enter"],
      shuffled: ["Select Cell", "Edit Text", "Press F2", "Press Enter"],
      expected: ["Select Cell", "Press F2", "Edit Text", "Press Enter"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match editing actions",
      prompt: "Match editing actions",
      tokens: ["Ctrl+Z \u2192 Undo", "F2 \u2192 Edit cell", "Enter \u2192 Confirm entry"],
      shuffled: ["Ctrl+Z \u2192 Undo", "F2 \u2192 Edit cell", "Enter \u2192 Confirm entry"],
      expected: ["Enter \u2192 Confirm entry", "F2 \u2192 Edit cell", "Ctrl+Z \u2192 Undo"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Enter",
      meaning: "Confirm entry"
    },
    {
      id: 2,
      snippet: "F2",
      meaning: "Edit cell"
    },
    {
      id: 3,
      snippet: "Ctrl+Z",
      meaning: "Undo"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Correct a Customer Name",
      scenario: "A customer name was typed as Ria instead of Riya.",
      prompt: "What should the employee do?",
      expectedResponse: "Edit the existing cell to Riya — Correct! Edit the cell value instead of deleting the worksheet."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you enter a value in an empty Excel cell?",
      sampleAnswer: "Select the cell, type, and press Enter. Pressing Enter confirms the entered value."
    },
    {
      id: 2,
      question: "How can you edit an existing cell without replacing it immediately?",
      sampleAnswer: "Press F2 or edit in the Formula Bar. F2 allows editing cell content in place."
    },
    {
      id: 3,
      question: "What does pressing Delete on a selected cell usually do?",
      sampleAnswer: "Clear its content. Delete clears content without necessarily deleting the cell itself."
    },
    {
      id: 4,
      question: "What does Undo do?",
      sampleAnswer: "Reverses the most recent action. Undo can restore an accidentally changed value."
    }
    ]
  },
  '11.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.5',
    id: 31,
    topicTitle: 'Saving, Naming and Organizing Workbooks',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which common file extension is used for modern Excel workbooks?",
      options: [
        { key: "A", text: "To identify files quickly" },
        { key: "B", text: "Choose a filename, location, or file type" },
        { key: "C", text: "To group related files and find them easily" },
        { key: "D", text: ".xlsx" }
      ],
      correct: 3,
      explanation: "Sahi jawab: .xlsx. The .xlsx format is standard for many Excel workbooks. Isliye ye option correct hai.",
      hint: "Focus on .xlsx to solve this problem."
    },
    {
      id: 2,
      question: "What does Save As allow you to do?",
      options: [
        { key: "A", text: "To group related files and find them easily" },
        { key: "B", text: "To identify files quickly" },
        { key: "C", text: "Choose a filename, location, or file type" },
        { key: "D", text: ".xlsx" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Choose a filename, location, or file type. Save As is useful for creating a separately named copy. Isliye ye option correct hai.",
      hint: "Focus on Choose a filename, location, or file type to solve this problem."
    },
    {
      id: 3,
      question: "Why use meaningful workbook names?",
      options: [
        { key: "A", text: "Choose a filename, location, or file type" },
        { key: "B", text: "To group related files and find them easily" },
        { key: "C", text: ".xlsx" },
        { key: "D", text: "To identify files quickly" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To identify files quickly. Clear filenames make reports easier to locate. Isliye ye option correct hai.",
      hint: "Focus on To identify files quickly to solve this problem."
    },
    {
      id: 4,
      question: "Why organize workbooks in folders?",
      options: [
        { key: "A", text: "To identify files quickly" },
        { key: "B", text: "Choose a filename, location, or file type" },
        { key: "C", text: ".xlsx" },
        { key: "D", text: "To group related files and find them easily" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To group related files and find them easily. Folders reduce confusion between projects. Isliye ye option correct hai.",
      hint: "Focus on To group related files and find them easily to solve this problem."
    },
    {
      id: 5,
      question: "What does Ctrl+S usually do in Excel?",
      options: [
        { key: "A", text: "Choose a filename, location, or file type" },
        { key: "B", text: "To identify files quickly" },
        { key: "C", text: "Save the current workbook" },
        { key: "D", text: ".xlsx" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Save the current workbook. Saving regularly helps avoid losing recent changes. Isliye ye option correct hai.",
      hint: "Focus on Save the current workbook to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Save a new sales workbook",
      prompt: "Save a new sales workbook",
      tokens: ["Save", "Enter Filename", "Choose Save As", "Select Folder"],
      shuffled: ["Save", "Enter Filename", "Choose Save As", "Select Folder"],
      expected: ["Choose Save As", "Select Folder", "Enter Filename", "Save"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match file-management actions",
      prompt: "Match file-management actions",
      tokens: ["Folder \u2192 Group files", "Save As \u2192 New filename or location", "Ctrl+S \u2192 Save"],
      shuffled: ["Folder \u2192 Group files", "Save As \u2192 New filename or location", "Ctrl+S \u2192 Save"],
      expected: ["Ctrl+S \u2192 Save", "Save As \u2192 New filename or location", "Folder \u2192 Group files"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Organize monthly reports",
      prompt: "Organize monthly reports",
      tokens: ["Create Reports Folder", "Save Workbook in Folder", "Name Workbook Clearly"],
      shuffled: ["Create Reports Folder", "Save Workbook in Folder", "Name Workbook Clearly"],
      expected: ["Create Reports Folder", "Name Workbook Clearly", "Save Workbook in Folder"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Ctrl+S",
      meaning: "Save"
    },
    {
      id: 2,
      snippet: "Save As",
      meaning: "New filename or location"
    },
    {
      id: 3,
      snippet: "Folder",
      meaning: "Group files"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Save a Monthly Report",
      scenario: "An employee finished an Excel sales report for April.",
      prompt: "Which filename is easiest to recognize later?",
      expectedResponse: "Sales_Report_April.xlsx — Correct! Descriptive filenames make reports easier to find."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which common file extension is used for modern Excel workbooks?",
      sampleAnswer: ".xlsx. The .xlsx format is standard for many Excel workbooks."
    },
    {
      id: 2,
      question: "What does Save As allow you to do?",
      sampleAnswer: "Choose a filename, location, or file type. Save As is useful for creating a separately named copy."
    },
    {
      id: 3,
      question: "Why use meaningful workbook names?",
      sampleAnswer: "To identify files quickly. Clear filenames make reports easier to locate."
    },
    {
      id: 4,
      question: "Why organize workbooks in folders?",
      sampleAnswer: "To group related files and find them easily. Folders reduce confusion between projects."
    }
    ]
  },
  '11.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 11,
    moduleName: 'Module 11: Getting Started with Excel',
    topicKey: '11.6',
    id: 32,
    topicTitle: 'Working with Excel Tables',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is an Excel Table?",
      options: [
        { key: "A", text: "A structured range with headers and built-in features" },
        { key: "B", text: "The Table can automatically expand" },
        { key: "C", text: "Ctrl+T" },
        { key: "D", text: "To identify the meaning of each field" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A structured range with headers and built-in features. Tables support filtering, formatting, and structured references. Isliye ye option correct hai.",
      hint: "Focus on A structured range with headers and built-in features to solve this problem."
    },
    {
      id: 2,
      question: "Which shortcut commonly creates a Table from selected data?",
      options: [
        { key: "A", text: "Ctrl+T" },
        { key: "B", text: "A structured range with headers and built-in features" },
        { key: "C", text: "The Table can automatically expand" },
        { key: "D", text: "To identify the meaning of each field" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Ctrl+T. Ctrl+T opens the Create Table dialog in Excel. Isliye ye option correct hai.",
      hint: "Focus on Ctrl+T to solve this problem."
    },
    {
      id: 3,
      question: "Why should a Table have clear column headers?",
      options: [
        { key: "A", text: "A structured range with headers and built-in features" },
        { key: "B", text: "To identify the meaning of each field" },
        { key: "C", text: "Ctrl+T" },
        { key: "D", text: "The Table can automatically expand" }
      ],
      correct: 1,
      explanation: "Sahi jawab: To identify the meaning of each field. Headers make records easier to interpret and filter. Isliye ye option correct hai.",
      hint: "Focus on To identify the meaning of each field to solve this problem."
    },
    {
      id: 4,
      question: "What happens when you add rows directly below many Excel Tables?",
      options: [
        { key: "A", text: "To identify the meaning of each field" },
        { key: "B", text: "A structured range with headers and built-in features" },
        { key: "C", text: "Ctrl+T" },
        { key: "D", text: "The Table can automatically expand" }
      ],
      correct: 3,
      explanation: "Sahi jawab: The Table can automatically expand. Excel Tables often extend to include new adjacent records. Isliye ye option correct hai.",
      hint: "Focus on The Table can automatically expand to solve this problem."
    },
    {
      id: 5,
      question: "What feature is commonly available on Table headers?",
      options: [
        { key: "A", text: "A structured range with headers and built-in features" },
        { key: "B", text: "Filter drop-down arrows" },
        { key: "C", text: "Ctrl+T" },
        { key: "D", text: "To identify the meaning of each field" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Filter drop-down arrows. Table headers can provide sorting and filtering controls. Isliye ye option correct hai.",
      hint: "Focus on Filter drop-down arrows to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Turn a range into an Excel Table",
      prompt: "Turn a range into an Excel Table",
      tokens: ["Click OK", "Select Data Range", "Press Ctrl+T", "Confirm Headers"],
      shuffled: ["Click OK", "Select Data Range", "Press Ctrl+T", "Confirm Headers"],
      expected: ["Select Data Range", "Press Ctrl+T", "Confirm Headers", "Click OK"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match Table features",
      prompt: "Match Table features",
      tokens: ["Table row \u2192 One record", "Filter arrow \u2192 Show matching rows", "Header \u2192 Field name"],
      shuffled: ["Table row \u2192 One record", "Filter arrow \u2192 Show matching rows", "Header \u2192 Field name"],
      expected: ["Header \u2192 Field name", "Filter arrow \u2192 Show matching rows", "Table row \u2192 One record"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Add a new product to a Table",
      prompt: "Add a new product to a Table",
      tokens: ["Verify Table Expanded", "Enter New Row", "Open Table"],
      shuffled: ["Verify Table Expanded", "Enter New Row", "Open Table"],
      expected: ["Open Table", "Enter New Row", "Verify Table Expanded"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Header",
      meaning: "Field name"
    },
    {
      id: 2,
      snippet: "Filter arrow",
      meaning: "Show matching rows"
    },
    {
      id: 3,
      snippet: "Table row",
      meaning: "One record"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Organize Product Records",
      scenario: "A shop has product names, prices, and quantities in a worksheet.",
      prompt: "What should the employee create for easy filtering?",
      expectedResponse: "An Excel Table with headers — Correct! Excel Tables make structured records easier to manage."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is an Excel Table?",
      sampleAnswer: "A structured range with headers and built-in features. Tables support filtering, formatting, and structured references."
    },
    {
      id: 2,
      question: "Which shortcut commonly creates a Table from selected data?",
      sampleAnswer: "Ctrl+T. Ctrl+T opens the Create Table dialog in Excel."
    },
    {
      id: 3,
      question: "Why should a Table have clear column headers?",
      sampleAnswer: "To identify the meaning of each field. Headers make records easier to interpret and filter."
    },
    {
      id: 4,
      question: "What happens when you add rows directly below many Excel Tables?",
      sampleAnswer: "The Table can automatically expand. Excel Tables often extend to include new adjacent records."
    }
    ]
  },
  '12.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.1',
    id: 33,
    topicTitle: 'Text, Number, Date and Percentage Formats',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which format is suitable for a customer name?",
      options: [
        { key: "A", text: "Date" },
        { key: "B", text: "Text" },
        { key: "C", text: "Number" },
        { key: "D", text: "Percentage" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Text. Names are text values, not quantities. Isliye ye option correct hai.",
      hint: "Focus on Text to solve this problem."
    },
    {
      id: 2,
      question: "Which format is suitable for a quantity of 25 items?",
      options: [
        { key: "A", text: "Percentage" },
        { key: "B", text: "Number" },
        { key: "C", text: "Text" },
        { key: "D", text: "Date" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Number. Quantities should be numeric for calculations. Isliye ye option correct hai.",
      hint: "Focus on Number to solve this problem."
    },
    {
      id: 3,
      question: "Which format is suitable for an order date?",
      options: [
        { key: "A", text: "Percentage" },
        { key: "B", text: "Date" },
        { key: "C", text: "Text" },
        { key: "D", text: "Number" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Date. Date formatting displays calendar values. Isliye ye option correct hai.",
      hint: "Focus on Date to solve this problem."
    },
    {
      id: 4,
      question: "Which format displays 0.25 as 25%?",
      options: [
        { key: "A", text: "Percentage" },
        { key: "B", text: "Number" },
        { key: "C", text: "Date" },
        { key: "D", text: "Text" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Percentage. Percentage formatting multiplies the displayed value by 100 and adds %. Isliye ye option correct hai.",
      hint: "Focus on Percentage to solve this problem."
    },
    {
      id: 5,
      question: "Does changing a number’s display format always change its underlying value?",
      options: [
        { key: "A", text: "Number" },
        { key: "B", text: "Date" },
        { key: "C", text: "No, formatting usually changes display only" },
        { key: "D", text: "Text" }
      ],
      correct: 2,
      explanation: "Sahi jawab: No, formatting usually changes display only. Formatting does not necessarily convert the stored value. Isliye ye option correct hai.",
      hint: "Focus on No, formatting usually changes display only to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match values to formats",
      prompt: "Match values to formats",
      tokens: ["0.25 \u2192 Percentage", "25 \u2192 Number", "Riya \u2192 Text"],
      shuffled: ["0.25 \u2192 Percentage", "25 \u2192 Number", "Riya \u2192 Text"],
      expected: ["Riya \u2192 Text", "25 \u2192 Number", "0.25 \u2192 Percentage"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Format an order date",
      prompt: "Format an order date",
      tokens: ["Choose Date", "Select Date Cells", "Open Number Format"],
      shuffled: ["Choose Date", "Select Date Cells", "Open Number Format"],
      expected: ["Select Date Cells", "Open Number Format", "Choose Date"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match example values",
      prompt: "Match example values",
      tokens: ["50% \u2192 Percentage", "12.5 \u2192 Number", "2026-11-20 \u2192 Date"],
      shuffled: ["50% \u2192 Percentage", "12.5 \u2192 Number", "2026-11-20 \u2192 Date"],
      expected: ["2026-11-20 \u2192 Date", "12.5 \u2192 Number", "50% \u2192 Percentage"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Riya",
      meaning: "Text"
    },
    {
      id: 2,
      snippet: "25",
      meaning: "Number"
    },
    {
      id: 3,
      snippet: "0.25",
      meaning: "Percentage"
    },
    {
      id: 1,
      snippet: "2026-11-20",
      meaning: "Date"
    },
    {
      id: 2,
      snippet: "12.5",
      meaning: "Number"
    },
    {
      id: 3,
      snippet: "50%",
      meaning: "Percentage"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Format a Discount",
      scenario: "A shop stores a discount rate as 0.10.",
      prompt: "Which format should display it as 10%?",
      expectedResponse: "Percentage — Correct! Percentage format displays 0.10 as 10%."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which format is suitable for a customer name?",
      sampleAnswer: "Text. Names are text values, not quantities."
    },
    {
      id: 2,
      question: "Which format is suitable for a quantity of 25 items?",
      sampleAnswer: "Number. Quantities should be numeric for calculations."
    },
    {
      id: 3,
      question: "Which format is suitable for an order date?",
      sampleAnswer: "Date. Date formatting displays calendar values."
    },
    {
      id: 4,
      question: "Which format displays 0.25 as 25%?",
      sampleAnswer: "Percentage. Percentage formatting multiplies the displayed value by 100 and adds %."
    }
    ]
  },
  '12.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.2',
    id: 34,
    topicTitle: 'Sorting Data Correctly',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does ascending sort do for numbers?",
      options: [
        { key: "A", text: "Orders values from smallest to largest" },
        { key: "B", text: "Sorts alphabetically from A toward Z" },
        { key: "C", text: "To keep each row’s related values together" },
        { key: "D", text: "Orders values from largest to smallest" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Orders values from smallest to largest. Ascending numeric sort goes low to high. Isliye ye option correct hai.",
      hint: "Focus on Orders values from smallest to largest to solve this problem."
    },
    {
      id: 2,
      question: "What does descending sort do for numbers?",
      options: [
        { key: "A", text: "Sorts alphabetically from A toward Z" },
        { key: "B", text: "Orders values from largest to smallest" },
        { key: "C", text: "Orders values from smallest to largest" },
        { key: "D", text: "To keep each row’s related values together" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Orders values from largest to smallest. Descending numeric sort goes high to low. Isliye ye option correct hai.",
      hint: "Focus on Orders values from largest to smallest to solve this problem."
    },
    {
      id: 3,
      question: "Why select the entire dataset before sorting when it is not an Excel Table?",
      options: [
        { key: "A", text: "To keep each row’s related values together" },
        { key: "B", text: "Orders values from smallest to largest" },
        { key: "C", text: "Sorts alphabetically from A toward Z" },
        { key: "D", text: "Orders values from largest to smallest" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To keep each row’s related values together. Sorting only one column can mismatch records. Isliye ye option correct hai.",
      hint: "Focus on To keep each row’s related values together to solve this problem."
    },
    {
      id: 4,
      question: "What does A to Z sorting do for text?",
      options: [
        { key: "A", text: "Sorts alphabetically from A toward Z" },
        { key: "B", text: "To keep each row’s related values together" },
        { key: "C", text: "Orders values from smallest to largest" },
        { key: "D", text: "Orders values from largest to smallest" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Sorts alphabetically from A toward Z. Text can be sorted in alphabetical order. Isliye ye option correct hai.",
      hint: "Focus on Sorts alphabetically from A toward Z to solve this problem."
    },
    {
      id: 5,
      question: "What should you check before sorting a table?",
      options: [
        { key: "A", text: "That headers and the complete data range are recognized" },
        { key: "B", text: "Orders values from largest to smallest" },
        { key: "C", text: "To keep each row’s related values together" },
        { key: "D", text: "Orders values from smallest to largest" }
      ],
      correct: 0,
      explanation: "Sahi jawab: That headers and the complete data range are recognized. Correct range selection helps preserve row integrity. Isliye ye option correct hai.",
      hint: "Focus on That headers and the complete data range are recognized to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Sort prices low to high",
      prompt: "Sort prices low to high",
      tokens: ["Select Full Dataset", "Sort Smallest to Largest", "Choose Price Column"],
      shuffled: ["Select Full Dataset", "Sort Smallest to Largest", "Choose Price Column"],
      expected: ["Select Full Dataset", "Choose Price Column", "Sort Smallest to Largest"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match sort directions",
      prompt: "Match sort directions",
      tokens: ["A to Z \u2192 Alphabetical order", "Descending \u2192 Largest to smallest", "Ascending \u2192 Smallest to largest"],
      shuffled: ["A to Z \u2192 Alphabetical order", "Descending \u2192 Largest to smallest", "Ascending \u2192 Smallest to largest"],
      expected: ["Ascending \u2192 Smallest to largest", "Descending \u2192 Largest to smallest", "A to Z \u2192 Alphabetical order"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sort employee names safely",
      prompt: "Sort employee names safely",
      tokens: ["Choose Name Header", "Sort A to Z", "Select Full Table"],
      shuffled: ["Choose Name Header", "Sort A to Z", "Select Full Table"],
      expected: ["Select Full Table", "Choose Name Header", "Sort A to Z"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Ascending",
      meaning: "Smallest to largest"
    },
    {
      id: 2,
      snippet: "Descending",
      meaning: "Largest to smallest"
    },
    {
      id: 3,
      snippet: "A to Z",
      meaning: "Alphabetical order"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find Cheapest Product",
      scenario: "A shop has product prices 80, 20, and 50.",
      prompt: "Which sort shows the cheapest item first?",
      expectedResponse: "Smallest to Largest — Correct! Ascending sort puts the lowest price first."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does ascending sort do for numbers?",
      sampleAnswer: "Orders values from smallest to largest. Ascending numeric sort goes low to high."
    },
    {
      id: 2,
      question: "What does descending sort do for numbers?",
      sampleAnswer: "Orders values from largest to smallest. Descending numeric sort goes high to low."
    },
    {
      id: 3,
      question: "Why select the entire dataset before sorting when it is not an Excel Table?",
      sampleAnswer: "To keep each row’s related values together. Sorting only one column can mismatch records."
    },
    {
      id: 4,
      question: "What does A to Z sorting do for text?",
      sampleAnswer: "Sorts alphabetically from A toward Z. Text can be sorted in alphabetical order."
    }
    ]
  },
  '12.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.3',
    id: 35,
    topicTitle: 'Filtering Rows and Using Search',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does filtering a dataset do?",
      options: [
        { key: "A", text: "A Department column filter" },
        { key: "B", text: "No, it hides them temporarily" },
        { key: "C", text: "Shows previously hidden rows again" },
        { key: "D", text: "Shows rows matching selected conditions" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Shows rows matching selected conditions. Filtering hides nonmatching rows without deleting them. Isliye ye option correct hai.",
      hint: "Focus on Shows rows matching selected conditions to solve this problem."
    },
    {
      id: 2,
      question: "Does applying a filter normally delete unmatched records?",
      options: [
        { key: "A", text: "No, it hides them temporarily" },
        { key: "B", text: "Shows rows matching selected conditions" },
        { key: "C", text: "Shows previously hidden rows again" },
        { key: "D", text: "A Department column filter" }
      ],
      correct: 0,
      explanation: "Sahi jawab: No, it hides them temporarily. You can clear a filter to show all records again. Isliye ye option correct hai.",
      hint: "Focus on No, it hides them temporarily to solve this problem."
    },
    {
      id: 3,
      question: "Which feature helps show only Sales department employees?",
      options: [
        { key: "A", text: "Shows previously hidden rows again" },
        { key: "B", text: "No, it hides them temporarily" },
        { key: "C", text: "Shows rows matching selected conditions" },
        { key: "D", text: "A Department column filter" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A Department column filter. A filter can restrict visible rows by department. Isliye ye option correct hai.",
      hint: "Focus on A Department column filter to solve this problem."
    },
    {
      id: 4,
      question: "What does Clear Filter do?",
      options: [
        { key: "A", text: "Shows previously hidden rows again" },
        { key: "B", text: "A Department column filter" },
        { key: "C", text: "No, it hides them temporarily" },
        { key: "D", text: "Shows rows matching selected conditions" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Shows previously hidden rows again. Clearing a filter restores the full view. Isliye ye option correct hai.",
      hint: "Focus on Shows previously hidden rows again to solve this problem."
    },
    {
      id: 5,
      question: "Why use Search inside a filter menu?",
      options: [
        { key: "A", text: "To quickly find a value in the filter list" },
        { key: "B", text: "No, it hides them temporarily" },
        { key: "C", text: "Shows rows matching selected conditions" },
        { key: "D", text: "A Department column filter" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To quickly find a value in the filter list. Search helps locate filter items in long lists. Isliye ye option correct hai.",
      hint: "Focus on To quickly find a value in the filter list to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Filter orders to one city",
      prompt: "Filter orders to one city",
      tokens: ["Select City", "Open City Filter", "Search City", "Apply"],
      shuffled: ["Select City", "Open City Filter", "Search City", "Apply"],
      expected: ["Open City Filter", "Search City", "Select City", "Apply"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match filtering actions",
      prompt: "Match filtering actions",
      tokens: ["Search \u2192 Find filter value", "Clear Filter \u2192 Restore all rows", "Filter \u2192 Show matching rows"],
      shuffled: ["Search \u2192 Find filter value", "Clear Filter \u2192 Restore all rows", "Filter \u2192 Show matching rows"],
      expected: ["Filter \u2192 Show matching rows", "Clear Filter \u2192 Restore all rows", "Search \u2192 Find filter value"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Return to all customers",
      prompt: "Return to all customers",
      tokens: ["Clear Filter", "Check All Rows Visible", "Open Active Filter"],
      shuffled: ["Clear Filter", "Check All Rows Visible", "Open Active Filter"],
      expected: ["Open Active Filter", "Clear Filter", "Check All Rows Visible"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Filter",
      meaning: "Show matching rows"
    },
    {
      id: 2,
      snippet: "Clear Filter",
      meaning: "Restore all rows"
    },
    {
      id: 3,
      snippet: "Search",
      meaning: "Find filter value"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Show Delhi Customers",
      scenario: "A customer list includes several cities. The manager wants to see only Delhi records.",
      prompt: "Which action should the employee take?",
      expectedResponse: "Filter the City column to Delhi — Correct! Filtering shows matching rows without deleting others."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does filtering a dataset do?",
      sampleAnswer: "Shows rows matching selected conditions. Filtering hides nonmatching rows without deleting them."
    },
    {
      id: 2,
      question: "Does applying a filter normally delete unmatched records?",
      sampleAnswer: "No, it hides them temporarily. You can clear a filter to show all records again."
    },
    {
      id: 3,
      question: "Which feature helps show only Sales department employees?",
      sampleAnswer: "A Department column filter. A filter can restrict visible rows by department."
    },
    {
      id: 4,
      question: "What does Clear Filter do?",
      sampleAnswer: "Shows previously hidden rows again. Clearing a filter restores the full view."
    }
    ]
  },
  '12.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.4',
    id: 36,
    topicTitle: 'Find and Replace',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Find help you do in Excel?",
      options: [
        { key: "A", text: "Ctrl+H" },
        { key: "B", text: "Ctrl+F" },
        { key: "C", text: "Substitute one value or text with another" },
        { key: "D", text: "Locate matching text or values" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Locate matching text or values. Find searches for matching content in a worksheet. Isliye ye option correct hai.",
      hint: "Focus on Locate matching text or values to solve this problem."
    },
    {
      id: 2,
      question: "What does Replace help you do?",
      options: [
        { key: "A", text: "Ctrl+F" },
        { key: "B", text: "Locate matching text or values" },
        { key: "C", text: "Ctrl+H" },
        { key: "D", text: "Substitute one value or text with another" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Substitute one value or text with another. Replace can correct repeated labels. Isliye ye option correct hai.",
      hint: "Focus on Substitute one value or text with another to solve this problem."
    },
    {
      id: 3,
      question: "Which shortcut commonly opens Find?",
      options: [
        { key: "A", text: "Substitute one value or text with another" },
        { key: "B", text: "Locate matching text or values" },
        { key: "C", text: "Ctrl+H" },
        { key: "D", text: "Ctrl+F" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Ctrl+F. Ctrl+F opens the Find dialog. Isliye ye option correct hai.",
      hint: "Focus on Ctrl+F to solve this problem."
    },
    {
      id: 4,
      question: "Which shortcut commonly opens Replace?",
      options: [
        { key: "A", text: "Substitute one value or text with another" },
        { key: "B", text: "Ctrl+H" },
        { key: "C", text: "Ctrl+F" },
        { key: "D", text: "Locate matching text or values" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Ctrl+H. Ctrl+H opens the Replace dialog. Isliye ye option correct hai.",
      hint: "Focus on Ctrl+H to solve this problem."
    },
    {
      id: 5,
      question: "Why preview matches before Replace All?",
      options: [
        { key: "A", text: "Ctrl+F" },
        { key: "B", text: "Substitute one value or text with another" },
        { key: "C", text: "Locate matching text or values" },
        { key: "D", text: "To avoid changing unintended cells" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To avoid changing unintended cells. Replace All may affect every matching occurrence in the selected scope. Isliye ye option correct hai.",
      hint: "Focus on To avoid changing unintended cells to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Correct a repeated department label",
      prompt: "Correct a repeated department label",
      tokens: ["Open Replace", "Review and Replace", "Enter Old Text", "Enter New Text"],
      shuffled: ["Open Replace", "Review and Replace", "Enter Old Text", "Enter New Text"],
      expected: ["Open Replace", "Enter Old Text", "Enter New Text", "Review and Replace"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match shortcuts",
      prompt: "Match shortcuts",
      tokens: ["Replace All \u2192 Change all matches", "Ctrl+H \u2192 Replace", "Ctrl+F \u2192 Find"],
      shuffled: ["Replace All \u2192 Change all matches", "Ctrl+H \u2192 Replace", "Ctrl+F \u2192 Find"],
      expected: ["Ctrl+F \u2192 Find", "Ctrl+H \u2192 Replace", "Replace All \u2192 Change all matches"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Locate a customer name",
      prompt: "Locate a customer name",
      tokens: ["Enter Name", "Open Find", "Find Next"],
      shuffled: ["Enter Name", "Open Find", "Find Next"],
      expected: ["Open Find", "Enter Name", "Find Next"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Ctrl+F",
      meaning: "Find"
    },
    {
      id: 2,
      snippet: "Ctrl+H",
      meaning: "Replace"
    },
    {
      id: 3,
      snippet: "Replace All",
      meaning: "Change all matches"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Correct a City Spelling",
      scenario: "A report contains many cells with the misspelling Mumbi.",
      prompt: "Which Excel feature helps change it to Mumbai?",
      expectedResponse: "Find and Replace — Correct! Replace can update repeated incorrect text."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Find help you do in Excel?",
      sampleAnswer: "Locate matching text or values. Find searches for matching content in a worksheet."
    },
    {
      id: 2,
      question: "What does Replace help you do?",
      sampleAnswer: "Substitute one value or text with another. Replace can correct repeated labels."
    },
    {
      id: 3,
      question: "Which shortcut commonly opens Find?",
      sampleAnswer: "Ctrl+F. Ctrl+F opens the Find dialog."
    },
    {
      id: 4,
      question: "Which shortcut commonly opens Replace?",
      sampleAnswer: "Ctrl+H. Ctrl+H opens the Replace dialog."
    }
    ]
  },
  '12.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.5',
    id: 37,
    topicTitle: 'Remove Duplicates',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a duplicate record?",
      options: [
        { key: "A", text: "A repeated record based on selected fields" },
        { key: "B", text: "Remove Duplicates" },
        { key: "C", text: "They determine what counts as a duplicate" },
        { key: "D", text: "Keep a backup or review the source" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A repeated record based on selected fields. Duplicate detection depends on the columns chosen. Isliye ye option correct hai.",
      hint: "Focus on A repeated record based on selected fields to solve this problem."
    },
    {
      id: 2,
      question: "Which Excel command removes duplicate records?",
      options: [
        { key: "A", text: "Keep a backup or review the source" },
        { key: "B", text: "A repeated record based on selected fields" },
        { key: "C", text: "They determine what counts as a duplicate" },
        { key: "D", text: "Remove Duplicates" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Remove Duplicates. The command is available under Data tools. Isliye ye option correct hai.",
      hint: "Focus on Remove Duplicates to solve this problem."
    },
    {
      id: 3,
      question: "Why select the right columns when removing duplicates?",
      options: [
        { key: "A", text: "Keep a backup or review the source" },
        { key: "B", text: "They determine what counts as a duplicate" },
        { key: "C", text: "A repeated record based on selected fields" },
        { key: "D", text: "Remove Duplicates" }
      ],
      correct: 1,
      explanation: "Sahi jawab: They determine what counts as a duplicate. Two records may match on one column but differ on another. Isliye ye option correct hai.",
      hint: "Focus on They determine what counts as a duplicate to solve this problem."
    },
    {
      id: 4,
      question: "What should you do before deleting duplicates from important data?",
      options: [
        { key: "A", text: "A repeated record based on selected fields" },
        { key: "B", text: "Keep a backup or review the source" },
        { key: "C", text: "Remove Duplicates" },
        { key: "D", text: "They determine what counts as a duplicate" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Keep a backup or review the source. A backup helps recover records removed by mistake. Isliye ye option correct hai.",
      hint: "Focus on Keep a backup or review the source to solve this problem."
    },
    {
      id: 5,
      question: "What happens to unique records when Remove Duplicates is applied correctly?",
      options: [
        { key: "A", text: "They remain in the dataset" },
        { key: "B", text: "Remove Duplicates" },
        { key: "C", text: "A repeated record based on selected fields" },
        { key: "D", text: "They determine what counts as a duplicate" }
      ],
      correct: 0,
      explanation: "Sahi jawab: They remain in the dataset. Only extra matching records are removed. Isliye ye option correct hai.",
      hint: "Focus on They remain in the dataset to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Remove repeated customer rows",
      prompt: "Remove repeated customer rows",
      tokens: ["Back Up Data", "Select Table", "Open Remove Duplicates", "Confirm", "Choose Columns"],
      shuffled: ["Back Up Data", "Select Table", "Open Remove Duplicates", "Confirm", "Choose Columns"],
      expected: ["Back Up Data", "Select Table", "Open Remove Duplicates", "Choose Columns", "Confirm"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match duplicate concepts",
      prompt: "Match duplicate concepts",
      tokens: ["Key columns \u2192 Define matching", "Unique \u2192 Nonrepeated record", "Duplicate \u2192 Repeated matching record"],
      shuffled: ["Key columns \u2192 Define matching", "Unique \u2192 Nonrepeated record", "Duplicate \u2192 Repeated matching record"],
      expected: ["Duplicate \u2192 Repeated matching record", "Unique \u2192 Nonrepeated record", "Key columns \u2192 Define matching"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Check a duplicate-cleaning result",
      prompt: "Check a duplicate-cleaning result",
      tokens: ["Check Rows After", "Count Rows Before", "Remove Duplicates"],
      shuffled: ["Check Rows After", "Count Rows Before", "Remove Duplicates"],
      expected: ["Count Rows Before", "Remove Duplicates", "Check Rows After"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Duplicate",
      meaning: "Repeated matching record"
    },
    {
      id: 2,
      snippet: "Unique",
      meaning: "Nonrepeated record"
    },
    {
      id: 3,
      snippet: "Key columns",
      meaning: "Define matching"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Clean Repeated Orders",
      scenario: "A sales sheet contains two identical rows for the same order.",
      prompt: "Which tool should be used after checking the matching fields?",
      expectedResponse: "Remove Duplicates — Correct! Remove Duplicates can remove extra identical order records."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a duplicate record?",
      sampleAnswer: "A repeated record based on selected fields. Duplicate detection depends on the columns chosen."
    },
    {
      id: 2,
      question: "Which Excel command removes duplicate records?",
      sampleAnswer: "Remove Duplicates. The command is available under Data tools."
    },
    {
      id: 3,
      question: "Why select the right columns when removing duplicates?",
      sampleAnswer: "They determine what counts as a duplicate. Two records may match on one column but differ on another."
    },
    {
      id: 4,
      question: "What should you do before deleting duplicates from important data?",
      sampleAnswer: "Keep a backup or review the source. A backup helps recover records removed by mistake."
    }
    ]
  },
  '12.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.6',
    id: 38,
    topicTitle: 'Text to Columns',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Text to Columns do?",
      options: [
        { key: "A", text: "Data tab" },
        { key: "B", text: "Comma" },
        { key: "C", text: "Splits text from one column into multiple columns" },
        { key: "D", text: "A character that separates parts of text" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Splits text from one column into multiple columns. The feature separates text using delimiters or fixed widths. Isliye ye option correct hai.",
      hint: "Focus on Splits text from one column into multiple columns to solve this problem."
    },
    {
      id: 2,
      question: "Which delimiter splits Riya,Delhi into two values?",
      options: [
        { key: "A", text: "Splits text from one column into multiple columns" },
        { key: "B", text: "Comma" },
        { key: "C", text: "Data tab" },
        { key: "D", text: "A character that separates parts of text" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Comma. Comma-separated text can be split on the comma. Isliye ye option correct hai.",
      hint: "Focus on Comma to solve this problem."
    },
    {
      id: 3,
      question: "What does a delimiter mean?",
      options: [
        { key: "A", text: "A character that separates parts of text" },
        { key: "B", text: "Comma" },
        { key: "C", text: "Splits text from one column into multiple columns" },
        { key: "D", text: "Data tab" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A character that separates parts of text. Commas, tabs, and spaces are common delimiters. Isliye ye option correct hai.",
      hint: "Focus on A character that separates parts of text to solve this problem."
    },
    {
      id: 4,
      question: "Where is Text to Columns commonly found?",
      options: [
        { key: "A", text: "Comma" },
        { key: "B", text: "Data tab" },
        { key: "C", text: "Splits text from one column into multiple columns" },
        { key: "D", text: "A character that separates parts of text" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Data tab. Text to Columns is a Data tab command. Isliye ye option correct hai.",
      hint: "Focus on Data tab to solve this problem."
    },
    {
      id: 5,
      question: "Why check destination cells before splitting?",
      options: [
        { key: "A", text: "A character that separates parts of text" },
        { key: "B", text: "Existing data could be overwritten" },
        { key: "C", text: "Splits text from one column into multiple columns" },
        { key: "D", text: "Comma" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Existing data could be overwritten. Splitting can write values into adjacent columns. Isliye ye option correct hai.",
      hint: "Focus on Existing data could be overwritten to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Split a full name using a space",
      prompt: "Split a full name using a space",
      tokens: ["Choose Delimited", "Select Name Column", "Text to Columns", "Select Space", "Finish"],
      shuffled: ["Choose Delimited", "Select Name Column", "Text to Columns", "Select Space", "Finish"],
      expected: ["Select Name Column", "Text to Columns", "Choose Delimited", "Select Space", "Finish"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match separators",
      prompt: "Match separators",
      tokens: ["Tab \u2192 Tab-separated fields", "Space \u2192 Riya Sharma", "Comma \u2192 Riya,Delhi"],
      shuffled: ["Tab \u2192 Tab-separated fields", "Space \u2192 Riya Sharma", "Comma \u2192 Riya,Delhi"],
      expected: ["Comma \u2192 Riya,Delhi", "Space \u2192 Riya Sharma", "Tab \u2192 Tab-separated fields"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Split a comma-separated code",
      prompt: "Split a comma-separated code",
      tokens: ["Select Source Column", "Finish", "Choose Comma Delimiter", "Preview Result"],
      shuffled: ["Select Source Column", "Finish", "Choose Comma Delimiter", "Preview Result"],
      expected: ["Select Source Column", "Choose Comma Delimiter", "Preview Result", "Finish"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Comma",
      meaning: "Riya,Delhi"
    },
    {
      id: 2,
      snippet: "Space",
      meaning: "Riya Sharma"
    },
    {
      id: 3,
      snippet: "Tab",
      meaning: "Tab-separated fields"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Separate Customer City",
      scenario: "A cell contains Riya,Delhi and the office needs Name and City in separate columns.",
      prompt: "Which Excel feature should the employee use?",
      expectedResponse: "Text to Columns with comma delimiter — Correct! The comma delimiter separates Riya and Delhi."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Text to Columns do?",
      sampleAnswer: "Splits text from one column into multiple columns. The feature separates text using delimiters or fixed widths."
    },
    {
      id: 2,
      question: "Which delimiter splits Riya,Delhi into two values?",
      sampleAnswer: "Comma. Comma-separated text can be split on the comma."
    },
    {
      id: 3,
      question: "What does a delimiter mean?",
      sampleAnswer: "A character that separates parts of text. Commas, tabs, and spaces are common delimiters."
    },
    {
      id: 4,
      question: "Where is Text to Columns commonly found?",
      sampleAnswer: "Data tab. Text to Columns is a Data tab command."
    }
    ]
  },
  '12.7': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.7',
    id: 39,
    topicTitle: 'Flash Fill',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Flash Fill do?",
      options: [
        { key: "A", text: "A clear example of the desired result" },
        { key: "B", text: "Recognizes a pattern from examples and fills values" },
        { key: "C", text: "No, its results are generally static values" },
        { key: "D", text: "Ctrl+E" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Recognizes a pattern from examples and fills values. Flash Fill can extract or combine text based on examples. Isliye ye option correct hai.",
      hint: "Focus on Recognizes a pattern from examples and fills values to solve this problem."
    },
    {
      id: 2,
      question: "Which shortcut commonly triggers Flash Fill?",
      options: [
        { key: "A", text: "A clear example of the desired result" },
        { key: "B", text: "Ctrl+E" },
        { key: "C", text: "Recognizes a pattern from examples and fills values" },
        { key: "D", text: "No, its results are generally static values" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Ctrl+E. Ctrl+E applies Flash Fill in supported Excel versions. Isliye ye option correct hai.",
      hint: "Focus on Ctrl+E to solve this problem."
    },
    {
      id: 3,
      question: "Does Flash Fill create a formula that updates automatically when source data changes?",
      options: [
        { key: "A", text: "Recognizes a pattern from examples and fills values" },
        { key: "B", text: "Ctrl+E" },
        { key: "C", text: "No, its results are generally static values" },
        { key: "D", text: "A clear example of the desired result" }
      ],
      correct: 2,
      explanation: "Sahi jawab: No, its results are generally static values. Flash Fill outputs values rather than a linked formula. Isliye ye option correct hai.",
      hint: "Focus on No, its results are generally static values to solve this problem."
    },
    {
      id: 4,
      question: "What helps Flash Fill recognize the intended pattern?",
      options: [
        { key: "A", text: "Recognizes a pattern from examples and fills values" },
        { key: "B", text: "No, its results are generally static values" },
        { key: "C", text: "A clear example of the desired result" },
        { key: "D", text: "Ctrl+E" }
      ],
      correct: 2,
      explanation: "Sahi jawab: A clear example of the desired result. Consistent examples help Excel infer the pattern. Isliye ye option correct hai.",
      hint: "Focus on A clear example of the desired result to solve this problem."
    },
    {
      id: 5,
      question: "When should Flash Fill results be checked carefully?",
      options: [
        { key: "A", text: "No, its results are generally static values" },
        { key: "B", text: "Ctrl+E" },
        { key: "C", text: "Recognizes a pattern from examples and fills values" },
        { key: "D", text: "When names or formats vary" }
      ],
      correct: 3,
      explanation: "Sahi jawab: When names or formats vary. Unusual entries can cause incorrect inferred results. Isliye ye option correct hai.",
      hint: "Focus on When names or formats vary to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Extract first names using Flash Fill",
      prompt: "Extract first names using Flash Fill",
      tokens: ["Select Next Cell", "Press Ctrl+E", "Review Results", "Type First Example"],
      shuffled: ["Select Next Cell", "Press Ctrl+E", "Review Results", "Type First Example"],
      expected: ["Type First Example", "Select Next Cell", "Press Ctrl+E", "Review Results"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match Flash Fill concepts",
      prompt: "Match Flash Fill concepts",
      tokens: ["Review \u2192 Catch wrong guesses", "Ctrl+E \u2192 Flash Fill", "Example \u2192 Shows desired pattern"],
      shuffled: ["Review \u2192 Catch wrong guesses", "Ctrl+E \u2192 Flash Fill", "Example \u2192 Shows desired pattern"],
      expected: ["Example \u2192 Shows desired pattern", "Ctrl+E \u2192 Flash Fill", "Review \u2192 Catch wrong guesses"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Combine first and last names",
      prompt: "Combine first and last names",
      tokens: ["Use Flash Fill", "Check Names", "Enter Combined Example"],
      shuffled: ["Use Flash Fill", "Check Names", "Enter Combined Example"],
      expected: ["Enter Combined Example", "Use Flash Fill", "Check Names"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Example",
      meaning: "Shows desired pattern"
    },
    {
      id: 2,
      snippet: "Ctrl+E",
      meaning: "Flash Fill"
    },
    {
      id: 3,
      snippet: "Review",
      meaning: "Catch wrong guesses"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Extract First Names",
      scenario: "A worksheet has full names like Riya Sharma. The manager needs first names quickly.",
      prompt: "Which feature can fill the first-name pattern from an example?",
      expectedResponse: "Flash Fill — Correct! Flash Fill can infer first names from an example."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Flash Fill do?",
      sampleAnswer: "Recognizes a pattern from examples and fills values. Flash Fill can extract or combine text based on examples."
    },
    {
      id: 2,
      question: "Which shortcut commonly triggers Flash Fill?",
      sampleAnswer: "Ctrl+E. Ctrl+E applies Flash Fill in supported Excel versions."
    },
    {
      id: 3,
      question: "Does Flash Fill create a formula that updates automatically when source data changes?",
      sampleAnswer: "No, its results are generally static values. Flash Fill outputs values rather than a linked formula."
    },
    {
      id: 4,
      question: "What helps Flash Fill recognize the intended pattern?",
      sampleAnswer: "A clear example of the desired result. Consistent examples help Excel infer the pattern."
    }
    ]
  },
  '12.8': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.8',
    id: 40,
    topicTitle: 'Data Validation and Drop-Down Lists',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Data Validation used for?",
      options: [
        { key: "A", text: "Data tab" },
        { key: "B", text: "Restrict or guide what users can enter in cells" },
        { key: "C", text: "A selectable list of allowed values" },
        { key: "D", text: "To keep status values consistent" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Restrict or guide what users can enter in cells. Validation helps reduce incorrect entries. Isliye ye option correct hai.",
      hint: "Focus on Restrict or guide what users can enter in cells to solve this problem."
    },
    {
      id: 2,
      question: "What is a drop-down list in Excel?",
      options: [
        { key: "A", text: "Data tab" },
        { key: "B", text: "A selectable list of allowed values" },
        { key: "C", text: "To keep status values consistent" },
        { key: "D", text: "Restrict or guide what users can enter in cells" }
      ],
      correct: 1,
      explanation: "Sahi jawab: A selectable list of allowed values. Drop-downs standardize repeated categories. Isliye ye option correct hai.",
      hint: "Focus on A selectable list of allowed values to solve this problem."
    },
    {
      id: 3,
      question: "Where can Data Validation commonly be found?",
      options: [
        { key: "A", text: "A selectable list of allowed values" },
        { key: "B", text: "To keep status values consistent" },
        { key: "C", text: "Restrict or guide what users can enter in cells" },
        { key: "D", text: "Data tab" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Data tab. Data Validation is typically on the Data tab. Isliye ye option correct hai.",
      hint: "Focus on Data tab to solve this problem."
    },
    {
      id: 4,
      question: "Why use a Status drop-down with Open and Closed?",
      options: [
        { key: "A", text: "Restrict or guide what users can enter in cells" },
        { key: "B", text: "Data tab" },
        { key: "C", text: "To keep status values consistent" },
        { key: "D", text: "A selectable list of allowed values" }
      ],
      correct: 2,
      explanation: "Sahi jawab: To keep status values consistent. Standard choices avoid inconsistent spellings. Isliye ye option correct hai.",
      hint: "Focus on To keep status values consistent to solve this problem."
    },
    {
      id: 5,
      question: "Can Data Validation be configured to show an error alert?",
      options: [
        { key: "A", text: "Data tab" },
        { key: "B", text: "Restrict or guide what users can enter in cells" },
        { key: "C", text: "A selectable list of allowed values" },
        { key: "D", text: "Yes, for invalid entries" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Yes, for invalid entries. An error alert can warn or block invalid input depending on settings. Isliye ye option correct hai.",
      hint: "Focus on Yes, for invalid entries to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Create a status drop-down",
      prompt: "Create a status drop-down",
      tokens: ["Select Status Cells", "Enter Allowed Values", "Open Data Validation", "Confirm", "Choose List"],
      shuffled: ["Select Status Cells", "Enter Allowed Values", "Open Data Validation", "Confirm", "Choose List"],
      expected: ["Select Status Cells", "Open Data Validation", "Choose List", "Enter Allowed Values", "Confirm"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match validation items",
      prompt: "Match validation items",
      tokens: ["Input Message \u2192 Entry guidance", "Error Alert \u2192 Invalid entry message", "List \u2192 Allowed choices"],
      shuffled: ["Input Message \u2192 Entry guidance", "Error Alert \u2192 Invalid entry message", "List \u2192 Allowed choices"],
      expected: ["List \u2192 Allowed choices", "Error Alert \u2192 Invalid entry message", "Input Message \u2192 Entry guidance"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Test a drop-down",
      prompt: "Test a drop-down",
      tokens: ["Click Cell Arrow", "Choose Valid Status", "Create List"],
      shuffled: ["Click Cell Arrow", "Choose Valid Status", "Create List"],
      expected: ["Create List", "Click Cell Arrow", "Choose Valid Status"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "List",
      meaning: "Allowed choices"
    },
    {
      id: 2,
      snippet: "Error Alert",
      meaning: "Invalid entry message"
    },
    {
      id: 3,
      snippet: "Input Message",
      meaning: "Entry guidance"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Standardize Attendance",
      scenario: "A school wants Attendance cells to contain only Present or Absent.",
      prompt: "Which feature is most suitable?",
      expectedResponse: "Data Validation drop-down — Correct! A drop-down keeps attendance labels consistent."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Data Validation used for?",
      sampleAnswer: "Restrict or guide what users can enter in cells. Validation helps reduce incorrect entries."
    },
    {
      id: 2,
      question: "What is a drop-down list in Excel?",
      sampleAnswer: "A selectable list of allowed values. Drop-downs standardize repeated categories."
    },
    {
      id: 3,
      question: "Where can Data Validation commonly be found?",
      sampleAnswer: "Data tab. Data Validation is typically on the Data tab."
    },
    {
      id: 4,
      question: "Why use a Status drop-down with Open and Closed?",
      sampleAnswer: "To keep status values consistent. Standard choices avoid inconsistent spellings."
    }
    ]
  },
  '12.9': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 12,
    moduleName: 'Module 12: Data Preparation in Excel',
    topicKey: '12.9',
    id: 41,
    topicTitle: 'Cleaning Spaces and Inconsistent Values',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does the TRIM function remove from text?",
      options: [
        { key: "A", text: "Values that look equal may fail to match" },
        { key: "B", text: "UPPER" },
        { key: "C", text: "Extra spaces while keeping single spaces between words" },
        { key: "D", text: "The same category is entered in different forms" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Extra spaces while keeping single spaces between words. TRIM removes leading, trailing, and repeated ordinary spaces. Isliye ye option correct hai.",
      hint: "Focus on Extra spaces while keeping single spaces between words to solve this problem."
    },
    {
      id: 2,
      question: "What problem can extra spaces cause?",
      options: [
        { key: "A", text: "Values that look equal may fail to match" },
        { key: "B", text: "Extra spaces while keeping single spaces between words" },
        { key: "C", text: "The same category is entered in different forms" },
        { key: "D", text: "UPPER" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Values that look equal may fail to match. Hidden spaces can affect comparisons and lookups. Isliye ye option correct hai.",
      hint: "Focus on Values that look equal may fail to match to solve this problem."
    },
    {
      id: 3,
      question: "Which function converts text to uppercase?",
      options: [
        { key: "A", text: "The same category is entered in different forms" },
        { key: "B", text: "Extra spaces while keeping single spaces between words" },
        { key: "C", text: "UPPER" },
        { key: "D", text: "Values that look equal may fail to match" }
      ],
      correct: 2,
      explanation: "Sahi jawab: UPPER. UPPER changes letters to uppercase. Isliye ye option correct hai.",
      hint: "Focus on UPPER to solve this problem."
    },
    {
      id: 4,
      question: "What does inconsistent spelling mean in a category column?",
      options: [
        { key: "A", text: "UPPER" },
        { key: "B", text: "Values that look equal may fail to match" },
        { key: "C", text: "Extra spaces while keeping single spaces between words" },
        { key: "D", text: "The same category is entered in different forms" }
      ],
      correct: 3,
      explanation: "Sahi jawab: The same category is entered in different forms. For example Delhi and Delhii represent inconsistent labels. Isliye ye option correct hai.",
      hint: "Focus on The same category is entered in different forms to solve this problem."
    },
    {
      id: 5,
      question: "Why check cleaned values after transformations?",
      options: [
        { key: "A", text: "Extra spaces while keeping single spaces between words" },
        { key: "B", text: "To confirm no useful information was changed" },
        { key: "C", text: "UPPER" },
        { key: "D", text: "Values that look equal may fail to match" }
      ],
      correct: 1,
      explanation: "Sahi jawab: To confirm no useful information was changed. Validation is important after cleaning data. Isliye ye option correct hai.",
      hint: "Focus on To confirm no useful information was changed to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Clean a name with extra spaces",
      prompt: "Clean a name with extra spaces",
      tokens: ["Apply TRIM", "Identify Extra Spaces", "Check Clean Result"],
      shuffled: ["Apply TRIM", "Identify Extra Spaces", "Check Clean Result"],
      expected: ["Identify Extra Spaces", "Apply TRIM", "Check Clean Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match cleaning tools",
      prompt: "Match cleaning tools",
      tokens: ["Find and Replace \u2192 Fix repeated spelling", "UPPER \u2192 Uppercase letters", "TRIM \u2192 Remove extra ordinary spaces"],
      shuffled: ["Find and Replace \u2192 Fix repeated spelling", "UPPER \u2192 Uppercase letters", "TRIM \u2192 Remove extra ordinary spaces"],
      expected: ["TRIM \u2192 Remove extra ordinary spaces", "UPPER \u2192 Uppercase letters", "Find and Replace \u2192 Fix repeated spelling"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Standardize city labels",
      prompt: "Standardize city labels",
      tokens: ["Fix Spelling Variants", "Check Counts", "Review Unique Values"],
      shuffled: ["Fix Spelling Variants", "Check Counts", "Review Unique Values"],
      expected: ["Review Unique Values", "Fix Spelling Variants", "Check Counts"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "TRIM",
      meaning: "Remove extra ordinary spaces"
    },
    {
      id: 2,
      snippet: "UPPER",
      meaning: "Uppercase letters"
    },
    {
      id: 3,
      snippet: "Find and Replace",
      meaning: "Fix repeated spelling"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Fix Customer Name Spaces",
      scenario: "A customer name has extra spaces: \"  Riya  Sharma  \".",
      prompt: "Which formula helps remove the extra ordinary spaces?",
      expectedResponse: "=TRIM(A2) — Correct! TRIM removes unnecessary ordinary spaces from text."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does the TRIM function remove from text?",
      sampleAnswer: "Extra spaces while keeping single spaces between words. TRIM removes leading, trailing, and repeated ordinary spaces."
    },
    {
      id: 2,
      question: "What problem can extra spaces cause?",
      sampleAnswer: "Values that look equal may fail to match. Hidden spaces can affect comparisons and lookups."
    },
    {
      id: 3,
      question: "Which function converts text to uppercase?",
      sampleAnswer: "UPPER. UPPER changes letters to uppercase."
    },
    {
      id: 4,
      question: "What does inconsistent spelling mean in a category column?",
      sampleAnswer: "The same category is entered in different forms. For example Delhi and Delhii represent inconsistent labels."
    }
    ]
  },
  '13.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.1',
    id: 42,
    topicTitle: 'Formula Basics and Order of Operations',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What character begins a normal Excel formula?",
      options: [
        { key: "A", text: "14" },
        { key: "B", text: "Equals sign (=)" },
        { key: "C", text: "20" },
        { key: "D", text: "Results update when referenced cell values change" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Equals sign (=). Excel formulas commonly start with =. Isliye ye option correct hai.",
      hint: "Focus on Equals sign (=) to solve this problem."
    },
    {
      id: 2,
      question: "What does =2+3*4 calculate?",
      options: [
        { key: "A", text: "Results update when referenced cell values change" },
        { key: "B", text: "Equals sign (=)" },
        { key: "C", text: "20" },
        { key: "D", text: "14" }
      ],
      correct: 3,
      explanation: "Sahi jawab: 14. Multiplication is evaluated before addition. Isliye ye option correct hai.",
      hint: "Focus on 14 to solve this problem."
    },
    {
      id: 3,
      question: "What does =(2+3)*4 calculate?",
      options: [
        { key: "A", text: "Results update when referenced cell values change" },
        { key: "B", text: "14" },
        { key: "C", text: "20" },
        { key: "D", text: "Equals sign (=)" }
      ],
      correct: 2,
      explanation: "Sahi jawab: 20. Parentheses change the order of operations. Isliye ye option correct hai.",
      hint: "Focus on 20 to solve this problem."
    },
    {
      id: 4,
      question: "Why use cell references in formulas?",
      options: [
        { key: "A", text: "14" },
        { key: "B", text: "Equals sign (=)" },
        { key: "C", text: "Results update when referenced cell values change" },
        { key: "D", text: "20" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Results update when referenced cell values change. Cell references make calculations reusable. Isliye ye option correct hai.",
      hint: "Focus on Results update when referenced cell values change to solve this problem."
    },
    {
      id: 5,
      question: "What is the result of =10/2?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "Equals sign (=)" },
        { key: "C", text: "14" },
        { key: "D", text: "20" }
      ],
      correct: 0,
      explanation: "Sahi jawab: 5. The slash operator performs division. Isliye ye option correct hai.",
      hint: "Focus on 5 to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Build a formula to add A2 and B2",
      prompt: "Build a formula to add A2 and B2",
      tokens: ["A2", "+", "B2", "="],
      shuffled: ["A2", "+", "B2", "="],
      expected: ["=", "A2", "+", "B2"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Create and check a calculation",
      prompt: "Create and check a calculation",
      tokens: ["Check Result", "Select Result Cell", "Press Enter", "Type =A2+B2"],
      shuffled: ["Check Result", "Select Result Cell", "Press Enter", "Type =A2+B2"],
      expected: ["Select Result Cell", "Type =A2+B2", "Press Enter", "Check Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match formula symbols",
      prompt: "Match formula symbols",
      tokens: ["/ \u2192 Division", "* \u2192 Multiplication", "= \u2192 Formula start"],
      shuffled: ["/ \u2192 Division", "* \u2192 Multiplication", "= \u2192 Formula start"],
      expected: ["= \u2192 Formula start", "* \u2192 Multiplication", "/ \u2192 Division"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "=",
      meaning: "Formula start"
    },
    {
      id: 2,
      snippet: "*",
      meaning: "Multiplication"
    },
    {
      id: 3,
      snippet: "/",
      meaning: "Division"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Calculate Two Sales",
      scenario: "A shop stores 20 in A2 and 30 in B2.",
      prompt: "Which formula calculates their total?",
      expectedResponse: "=A2+B2 — Correct! =A2+B2 adds the two referenced values."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What character begins a normal Excel formula?",
      sampleAnswer: "Equals sign (=). Excel formulas commonly start with =."
    },
    {
      id: 2,
      question: "What does =2+3*4 calculate?",
      sampleAnswer: "14. Multiplication is evaluated before addition."
    },
    {
      id: 3,
      question: "What does =(2+3)*4 calculate?",
      sampleAnswer: "20. Parentheses change the order of operations."
    },
    {
      id: 4,
      question: "Why use cell references in formulas?",
      sampleAnswer: "Results update when referenced cell values change. Cell references make calculations reusable."
    }
    ]
  },
  '13.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.2',
    id: 43,
    topicTitle: 'Relative, Absolute and Mixed Cell References',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a relative cell reference?",
      options: [
        { key: "A", text: "A2" },
        { key: "B", text: "Column A only" },
        { key: "C", text: "$A$2" },
        { key: "D", text: "Row 2 only" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A2. A2 adjusts when copied to another location. Isliye ye option correct hai.",
      hint: "Focus on A2 to solve this problem."
    },
    {
      id: 2,
      question: "What is an absolute cell reference?",
      options: [
        { key: "A", text: "$A$2" },
        { key: "B", text: "Column A only" },
        { key: "C", text: "A2" },
        { key: "D", text: "Row 2 only" }
      ],
      correct: 0,
      explanation: "Sahi jawab: $A$2. Dollar signs lock both the column and row. Isliye ye option correct hai.",
      hint: "Focus on $A$2 to solve this problem."
    },
    {
      id: 3,
      question: "What does $A2 lock?",
      options: [
        { key: "A", text: "Row 2 only" },
        { key: "B", text: "A2" },
        { key: "C", text: "Column A only" },
        { key: "D", text: "$A$2" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Column A only. A mixed reference locks the column but not the row. Isliye ye option correct hai.",
      hint: "Focus on Column A only to solve this problem."
    },
    {
      id: 4,
      question: "What does A$2 lock?",
      options: [
        { key: "A", text: "Row 2 only" },
        { key: "B", text: "Column A only" },
        { key: "C", text: "$A$2" },
        { key: "D", text: "A2" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Row 2 only. A mixed reference locks the row but not the column. Isliye ye option correct hai.",
      hint: "Focus on Row 2 only to solve this problem."
    },
    {
      id: 5,
      question: "Why use an absolute reference for a fixed tax rate?",
      options: [
        { key: "A", text: "$A$2" },
        { key: "B", text: "To keep the tax-rate cell unchanged when copying" },
        { key: "C", text: "A2" },
        { key: "D", text: "Column A only" }
      ],
      correct: 1,
      explanation: "Sahi jawab: To keep the tax-rate cell unchanged when copying. Absolute references preserve a fixed cell reference. Isliye ye option correct hai.",
      hint: "Focus on To keep the tax-rate cell unchanged when copying to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match reference types",
      prompt: "Match reference types",
      tokens: ["$A2 \u2192 Fixed column", "$A$2 \u2192 Absolute", "A2 \u2192 Relative"],
      shuffled: ["$A2 \u2192 Fixed column", "$A$2 \u2192 Absolute", "A2 \u2192 Relative"],
      expected: ["A2 \u2192 Relative", "$A$2 \u2192 Absolute", "$A2 \u2192 Fixed column"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build an absolute reference to B1",
      prompt: "Build an absolute reference to B1",
      tokens: ["$", "B", "1", "$"],
      shuffled: ["$", "B", "1", "$"],
      expected: ["$", "B", "$", "1"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Apply a fixed tax rate",
      prompt: "Apply a fixed tax rate",
      tokens: ["Write =A2*$B$1", "Fill Formula Down", "Put Rate in B1"],
      shuffled: ["Write =A2*$B$1", "Fill Formula Down", "Put Rate in B1"],
      expected: ["Put Rate in B1", "Write =A2*$B$1", "Fill Formula Down"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "A2",
      meaning: "Relative"
    },
    {
      id: 2,
      snippet: "$A$2",
      meaning: "Absolute"
    },
    {
      id: 3,
      snippet: "$A2",
      meaning: "Fixed column"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Keep the Tax Rate Fixed",
      scenario: "A price is in A2 and tax rate is in B1. The formula will be copied down.",
      prompt: "Which reference keeps the tax-rate cell fixed?",
      expectedResponse: "$B$1 — Correct! $B$1 locks both column B and row 1."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a relative cell reference?",
      sampleAnswer: "A2. A2 adjusts when copied to another location."
    },
    {
      id: 2,
      question: "What is an absolute cell reference?",
      sampleAnswer: "$A$2. Dollar signs lock both the column and row."
    },
    {
      id: 3,
      question: "What does $A2 lock?",
      sampleAnswer: "Column A only. A mixed reference locks the column but not the row."
    },
    {
      id: 4,
      question: "What does A$2 lock?",
      sampleAnswer: "Row 2 only. A mixed reference locks the row but not the column."
    }
    ]
  },
  '13.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.3',
    id: 44,
    topicTitle: 'SUM, AVERAGE, MIN and MAX',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which function adds values in A2:A5?",
      options: [
        { key: "A", text: "=MAX(A2:A5)" },
        { key: "B", text: "=AVERAGE(A2:A5)" },
        { key: "C", text: "=MIN(A2:A5)" },
        { key: "D", text: "=SUM(A2:A5)" }
      ],
      correct: 3,
      explanation: "Sahi jawab: =SUM(A2:A5). SUM calculates the total of numeric values. Isliye ye option correct hai.",
      hint: "Focus on =SUM(A2:A5) to solve this problem."
    },
    {
      id: 2,
      question: "Which function calculates the arithmetic mean?",
      options: [
        { key: "A", text: "=SUM(A2:A5)" },
        { key: "B", text: "=MIN(A2:A5)" },
        { key: "C", text: "=AVERAGE(A2:A5)" },
        { key: "D", text: "=MAX(A2:A5)" }
      ],
      correct: 2,
      explanation: "Sahi jawab: =AVERAGE(A2:A5). AVERAGE returns the mean of numeric cells. Isliye ye option correct hai.",
      hint: "Focus on =AVERAGE(A2:A5) to solve this problem."
    },
    {
      id: 3,
      question: "Which function finds the smallest number?",
      options: [
        { key: "A", text: "=MAX(A2:A5)" },
        { key: "B", text: "=AVERAGE(A2:A5)" },
        { key: "C", text: "=MIN(A2:A5)" },
        { key: "D", text: "=SUM(A2:A5)" }
      ],
      correct: 2,
      explanation: "Sahi jawab: =MIN(A2:A5). MIN returns the lowest numeric value. Isliye ye option correct hai.",
      hint: "Focus on =MIN(A2:A5) to solve this problem."
    },
    {
      id: 4,
      question: "Which function finds the largest number?",
      options: [
        { key: "A", text: "=MAX(A2:A5)" },
        { key: "B", text: "=MIN(A2:A5)" },
        { key: "C", text: "=AVERAGE(A2:A5)" },
        { key: "D", text: "=SUM(A2:A5)" }
      ],
      correct: 0,
      explanation: "Sahi jawab: =MAX(A2:A5). MAX returns the highest numeric value. Isliye ye option correct hai.",
      hint: "Focus on =MAX(A2:A5) to solve this problem."
    },
    {
      id: 5,
      question: "What is the average of 10, 20, and 30?",
      options: [
        { key: "A", text: "=SUM(A2:A5)" },
        { key: "B", text: "20" },
        { key: "C", text: "=AVERAGE(A2:A5)" },
        { key: "D", text: "=MIN(A2:A5)" }
      ],
      correct: 1,
      explanation: "Sahi jawab: 20. The total 60 divided by 3 equals 20. Isliye ye option correct hai.",
      hint: "Focus on 20 to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match summary functions",
      prompt: "Match summary functions",
      tokens: ["MAX \u2192 Largest", "AVERAGE \u2192 Mean", "SUM \u2192 Total"],
      shuffled: ["MAX \u2192 Largest", "AVERAGE \u2192 Mean", "SUM \u2192 Total"],
      expected: ["SUM \u2192 Total", "AVERAGE \u2192 Mean", "MAX \u2192 Largest"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build the total formula",
      prompt: "Build the total formula",
      tokens: ["(", "B2:B5", ")", "=SUM"],
      shuffled: ["(", "B2:B5", ")", "=SUM"],
      expected: ["=SUM", "(", "B2:B5", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Create a basic sales summary",
      prompt: "Create a basic sales summary",
      tokens: ["Review Results", "Calculate SUM", "Select Sales Range", "Calculate AVERAGE"],
      shuffled: ["Review Results", "Calculate SUM", "Select Sales Range", "Calculate AVERAGE"],
      expected: ["Select Sales Range", "Calculate SUM", "Calculate AVERAGE", "Review Results"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SUM",
      meaning: "Total"
    },
    {
      id: 2,
      snippet: "AVERAGE",
      meaning: "Mean"
    },
    {
      id: 3,
      snippet: "MAX",
      meaning: "Largest"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find Total Daily Sales",
      scenario: "Daily sales values are stored in B2:B6.",
      prompt: "Which formula adds them?",
      expectedResponse: "=SUM(B2:B6) — Correct! SUM adds the sales amounts."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which function adds values in A2:A5?",
      sampleAnswer: "=SUM(A2:A5). SUM calculates the total of numeric values."
    },
    {
      id: 2,
      question: "Which function calculates the arithmetic mean?",
      sampleAnswer: "=AVERAGE(A2:A5). AVERAGE returns the mean of numeric cells."
    },
    {
      id: 3,
      question: "Which function finds the smallest number?",
      sampleAnswer: "=MIN(A2:A5). MIN returns the lowest numeric value."
    },
    {
      id: 4,
      question: "Which function finds the largest number?",
      sampleAnswer: "=MAX(A2:A5). MAX returns the highest numeric value."
    }
    ]
  },
  '13.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.4',
    id: 45,
    topicTitle: 'COUNT, COUNTA and COUNTBLANK',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does COUNT count?",
      options: [
        { key: "A", text: "Cells containing numeric values" },
        { key: "B", text: "=COUNT(B2:B10)" },
        { key: "C", text: "Empty cells in a range" },
        { key: "D", text: "Nonempty cells" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Cells containing numeric values. COUNT ignores text and empty cells. Isliye ye option correct hai.",
      hint: "Focus on Cells containing numeric values to solve this problem."
    },
    {
      id: 2,
      question: "What does COUNTA count?",
      options: [
        { key: "A", text: "=COUNT(B2:B10)" },
        { key: "B", text: "Empty cells in a range" },
        { key: "C", text: "Nonempty cells" },
        { key: "D", text: "Cells containing numeric values" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Nonempty cells. COUNTA counts cells containing text, numbers, or other values. Isliye ye option correct hai.",
      hint: "Focus on Nonempty cells to solve this problem."
    },
    {
      id: 3,
      question: "What does COUNTBLANK count?",
      options: [
        { key: "A", text: "Empty cells in a range" },
        { key: "B", text: "Nonempty cells" },
        { key: "C", text: "=COUNT(B2:B10)" },
        { key: "D", text: "Cells containing numeric values" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Empty cells in a range. COUNTBLANK helps identify blanks. Isliye ye option correct hai.",
      hint: "Focus on Empty cells in a range to solve this problem."
    },
    {
      id: 4,
      question: "Which formula counts numeric entries in B2:B10?",
      options: [
        { key: "A", text: "=COUNT(B2:B10)" },
        { key: "B", text: "Empty cells in a range" },
        { key: "C", text: "Cells containing numeric values" },
        { key: "D", text: "Nonempty cells" }
      ],
      correct: 0,
      explanation: "Sahi jawab: =COUNT(B2:B10). COUNT returns the number of numeric cells. Isliye ye option correct hai.",
      hint: "Focus on =COUNT(B2:B10) to solve this problem."
    },
    {
      id: 5,
      question: "Which formula counts blank entries in B2:B10?",
      options: [
        { key: "A", text: "=COUNTBLANK(B2:B10)" },
        { key: "B", text: "Cells containing numeric values" },
        { key: "C", text: "Empty cells in a range" },
        { key: "D", text: "Nonempty cells" }
      ],
      correct: 0,
      explanation: "Sahi jawab: =COUNTBLANK(B2:B10). COUNTBLANK returns the number of blank cells. Isliye ye option correct hai.",
      hint: "Focus on =COUNTBLANK(B2:B10) to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match counting functions",
      prompt: "Match counting functions",
      tokens: ["COUNTBLANK \u2192 Blank cells", "COUNTA \u2192 Nonempty cells", "COUNT \u2192 Numeric cells"],
      shuffled: ["COUNTBLANK \u2192 Blank cells", "COUNTA \u2192 Nonempty cells", "COUNT \u2192 Numeric cells"],
      expected: ["COUNT \u2192 Numeric cells", "COUNTA \u2192 Nonempty cells", "COUNTBLANK \u2192 Blank cells"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a formula to count blanks",
      prompt: "Build a formula to count blanks",
      tokens: ["(", ")", "B2:B10", "=COUNTBLANK"],
      shuffled: ["(", ")", "B2:B10", "=COUNTBLANK"],
      expected: ["=COUNTBLANK", "(", "B2:B10", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Check missing form entries",
      prompt: "Check missing form entries",
      tokens: ["Use COUNTBLANK", "Select Required Column", "Review Blank Count"],
      shuffled: ["Use COUNTBLANK", "Select Required Column", "Review Blank Count"],
      expected: ["Select Required Column", "Use COUNTBLANK", "Review Blank Count"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "COUNT",
      meaning: "Numeric cells"
    },
    {
      id: 2,
      snippet: "COUNTA",
      meaning: "Nonempty cells"
    },
    {
      id: 3,
      snippet: "COUNTBLANK",
      meaning: "Blank cells"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Count Missing Phone Numbers",
      scenario: "A registration sheet has some blank Phone cells in C2:C20.",
      prompt: "Which formula counts the blanks?",
      expectedResponse: "=COUNTBLANK(C2:C20) — Correct! COUNTBLANK counts empty cells in the selected range."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does COUNT count?",
      sampleAnswer: "Cells containing numeric values. COUNT ignores text and empty cells."
    },
    {
      id: 2,
      question: "What does COUNTA count?",
      sampleAnswer: "Nonempty cells. COUNTA counts cells containing text, numbers, or other values."
    },
    {
      id: 3,
      question: "What does COUNTBLANK count?",
      sampleAnswer: "Empty cells in a range. COUNTBLANK helps identify blanks."
    },
    {
      id: 4,
      question: "Which formula counts numeric entries in B2:B10?",
      sampleAnswer: "=COUNT(B2:B10). COUNT returns the number of numeric cells."
    }
    ]
  },
  '13.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.5',
    id: 46,
    topicTitle: 'IF and Nested IF',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does the IF function do?",
      options: [
        { key: "A", text: "Fail" },
        { key: "B", text: "An IF function placed inside another IF" },
        { key: "C", text: "Returns one result if a condition is true and another if false" },
        { key: "D", text: "Pass" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Returns one result if a condition is true and another if false. IF supports simple decision-making in formulas. Isliye ye option correct hai.",
      hint: "Focus on Returns one result if a condition is true and another if false to solve this problem."
    },
    {
      id: 2,
      question: "What does =IF(A2>=50,\"Pass\",\"Fail\") return when A2 is 70?",
      options: [
        { key: "A", text: "Fail" },
        { key: "B", text: "An IF function placed inside another IF" },
        { key: "C", text: "Pass" },
        { key: "D", text: "Returns one result if a condition is true and another if false" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Pass. 70 satisfies the condition A2>=50. Isliye ye option correct hai.",
      hint: "Focus on Pass to solve this problem."
    },
    {
      id: 3,
      question: "What does the same IF formula return when A2 is 40?",
      options: [
        { key: "A", text: "An IF function placed inside another IF" },
        { key: "B", text: "Pass" },
        { key: "C", text: "Returns one result if a condition is true and another if false" },
        { key: "D", text: "Fail" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Fail. 40 does not satisfy A2>=50. Isliye ye option correct hai.",
      hint: "Focus on Fail to solve this problem."
    },
    {
      id: 4,
      question: "What is a nested IF?",
      options: [
        { key: "A", text: "Pass" },
        { key: "B", text: "Returns one result if a condition is true and another if false" },
        { key: "C", text: "Fail" },
        { key: "D", text: "An IF function placed inside another IF" }
      ],
      correct: 3,
      explanation: "Sahi jawab: An IF function placed inside another IF. Nested IF handles more than two outcomes. Isliye ye option correct hai.",
      hint: "Focus on An IF function placed inside another IF to solve this problem."
    },
    {
      id: 5,
      question: "Which part of IF(A2>0,\"Yes\",\"No\") is the condition?",
      options: [
        { key: "A", text: "A2>0" },
        { key: "B", text: "Pass" },
        { key: "C", text: "Fail" },
        { key: "D", text: "Returns one result if a condition is true and another if false" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A2>0. The first argument is the logical test. Isliye ye option correct hai.",
      hint: "Focus on A2>0 to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match IF parts",
      prompt: "Match IF parts",
      tokens: ["Value if false \u2192 False result", "Value if true \u2192 True result", "Logical test \u2192 Condition"],
      shuffled: ["Value if false \u2192 False result", "Value if true \u2192 True result", "Logical test \u2192 Condition"],
      expected: ["Logical test \u2192 Condition", "Value if true \u2192 True result", "Value if false \u2192 False result"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a basic Pass/Fail formula",
      prompt: "Build a basic Pass/Fail formula",
      tokens: ["\"Pass\"", "=IF", ",", "A2>=50", ")", "(", ",", "\"Fail\""],
      shuffled: ["\"Pass\"", "=IF", ",", "A2>=50", ")", "(", ",", "\"Fail\""],
      expected: ["=IF", "(", "A2>=50", ",", "\"Pass\"", ",", "\"Fail\"", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Create a grade rule",
      prompt: "Create a grade rule",
      tokens: ["Set False Result", "Define Score Condition", "Test Formula", "Set True Result"],
      shuffled: ["Set False Result", "Define Score Condition", "Test Formula", "Set True Result"],
      expected: ["Define Score Condition", "Set True Result", "Set False Result", "Test Formula"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Logical test",
      meaning: "Condition"
    },
    {
      id: 2,
      snippet: "Value if true",
      meaning: "True result"
    },
    {
      id: 3,
      snippet: "Value if false",
      meaning: "False result"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Mark Student Results",
      scenario: "A student has 65 marks in A2. Passing marks are 50.",
      prompt: "Which formula displays Pass or Fail?",
      expectedResponse: "=IF(A2>=50,\"Pass\",\"Fail\") — Correct! IF checks the passing condition and returns the matching label."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does the IF function do?",
      sampleAnswer: "Returns one result if a condition is true and another if false. IF supports simple decision-making in formulas."
    },
    {
      id: 2,
      question: "What does =IF(A2>=50,\"Pass\",\"Fail\") return when A2 is 70?",
      sampleAnswer: "Pass. 70 satisfies the condition A2>=50."
    },
    {
      id: 3,
      question: "What does the same IF formula return when A2 is 40?",
      sampleAnswer: "Fail. 40 does not satisfy A2>=50."
    },
    {
      id: 4,
      question: "What is a nested IF?",
      sampleAnswer: "An IF function placed inside another IF. Nested IF handles more than two outcomes."
    }
    ]
  },
  '13.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.6',
    id: 47,
    topicTitle: 'AND, OR and NOT',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "When does AND return TRUE?",
      options: [
        { key: "A", text: "When all supplied conditions are TRUE" },
        { key: "B", text: "TRUE" },
        { key: "C", text: "FALSE" },
        { key: "D", text: "When at least one supplied condition is TRUE" }
      ],
      correct: 0,
      explanation: "Sahi jawab: When all supplied conditions are TRUE. AND requires every condition to pass. Isliye ye option correct hai.",
      hint: "Focus on When all supplied conditions are TRUE to solve this problem."
    },
    {
      id: 2,
      question: "When does OR return TRUE?",
      options: [
        { key: "A", text: "FALSE" },
        { key: "B", text: "When all supplied conditions are TRUE" },
        { key: "C", text: "When at least one supplied condition is TRUE" },
        { key: "D", text: "TRUE" }
      ],
      correct: 2,
      explanation: "Sahi jawab: When at least one supplied condition is TRUE. OR needs one or more true conditions. Isliye ye option correct hai.",
      hint: "Focus on When at least one supplied condition is TRUE to solve this problem."
    },
    {
      id: 3,
      question: "What does NOT(TRUE) return?",
      options: [
        { key: "A", text: "TRUE" },
        { key: "B", text: "When at least one supplied condition is TRUE" },
        { key: "C", text: "When all supplied conditions are TRUE" },
        { key: "D", text: "FALSE" }
      ],
      correct: 3,
      explanation: "Sahi jawab: FALSE. NOT reverses a logical value. Isliye ye option correct hai.",
      hint: "Focus on FALSE to solve this problem."
    },
    {
      id: 4,
      question: "What does =AND(5>3,2>1) return?",
      options: [
        { key: "A", text: "FALSE" },
        { key: "B", text: "When at least one supplied condition is TRUE" },
        { key: "C", text: "TRUE" },
        { key: "D", text: "When all supplied conditions are TRUE" }
      ],
      correct: 2,
      explanation: "Sahi jawab: TRUE. Both comparisons are true. Isliye ye option correct hai.",
      hint: "Focus on TRUE to solve this problem."
    },
    {
      id: 5,
      question: "What does =OR(5<3,2>1) return?",
      options: [
        { key: "A", text: "TRUE" },
        { key: "B", text: "FALSE" },
        { key: "C", text: "When all supplied conditions are TRUE" },
        { key: "D", text: "When at least one supplied condition is TRUE" }
      ],
      correct: 0,
      explanation: "Sahi jawab: TRUE. The second comparison is true. Isliye ye option correct hai.",
      hint: "Focus on TRUE to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match logical operators",
      prompt: "Match logical operators",
      tokens: ["NOT \u2192 Reverse TRUE/FALSE", "OR \u2192 At least one true", "AND \u2192 All conditions true"],
      shuffled: ["NOT \u2192 Reverse TRUE/FALSE", "OR \u2192 At least one true", "AND \u2192 All conditions true"],
      expected: ["AND \u2192 All conditions true", "OR \u2192 At least one true", "NOT \u2192 Reverse TRUE/FALSE"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build an AND formula",
      prompt: "Build an AND formula",
      tokens: ["=AND", ",", ")", "A2>0", "B2>0", "("],
      shuffled: ["=AND", ",", ")", "A2>0", "B2>0", "("],
      expected: ["=AND", "(", "A2>0", ",", "B2>0", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Test a two-condition rule",
      prompt: "Test a two-condition rule",
      tokens: ["Apply AND", "View TRUE/FALSE", "Check First Condition", "Check Second Condition"],
      shuffled: ["Apply AND", "View TRUE/FALSE", "Check First Condition", "Check Second Condition"],
      expected: ["Check First Condition", "Check Second Condition", "Apply AND", "View TRUE/FALSE"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "AND",
      meaning: "All conditions true"
    },
    {
      id: 2,
      snippet: "OR",
      meaning: "At least one true"
    },
    {
      id: 3,
      snippet: "NOT",
      meaning: "Reverse TRUE/FALSE"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Check Two Requirements",
      scenario: "A training certificate requires attendance >=80 and test score >=50. Values are in A2 and B2.",
      prompt: "Which formula checks both requirements?",
      expectedResponse: "=AND(A2>=80,B2>=50) — Correct! AND returns TRUE only when both requirements are met."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "When does AND return TRUE?",
      sampleAnswer: "When all supplied conditions are TRUE. AND requires every condition to pass."
    },
    {
      id: 2,
      question: "When does OR return TRUE?",
      sampleAnswer: "When at least one supplied condition is TRUE. OR needs one or more true conditions."
    },
    {
      id: 3,
      question: "What does NOT(TRUE) return?",
      sampleAnswer: "FALSE. NOT reverses a logical value."
    },
    {
      id: 4,
      question: "What does =AND(5>3,2>1) return?",
      sampleAnswer: "TRUE. Both comparisons are true."
    }
    ]
  },
  '13.7': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.7',
    id: 48,
    topicTitle: 'SUMIF and COUNTIF',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does SUMIF do?",
      options: [
        { key: "A", text: "=SUMIF(A2:A10,\"East\",B2:B10)" },
        { key: "B", text: "Adds values that meet one condition" },
        { key: "C", text: "=COUNTIF(A2:A10,\"Yes\")" },
        { key: "D", text: "Counts cells that meet one condition" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Adds values that meet one condition. SUMIF performs a conditional sum. Isliye ye option correct hai.",
      hint: "Focus on Adds values that meet one condition to solve this problem."
    },
    {
      id: 2,
      question: "What does COUNTIF do?",
      options: [
        { key: "A", text: "=COUNTIF(A2:A10,\"Yes\")" },
        { key: "B", text: "Adds values that meet one condition" },
        { key: "C", text: "=SUMIF(A2:A10,\"East\",B2:B10)" },
        { key: "D", text: "Counts cells that meet one condition" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Counts cells that meet one condition. COUNTIF performs a conditional count. Isliye ye option correct hai.",
      hint: "Focus on Counts cells that meet one condition to solve this problem."
    },
    {
      id: 3,
      question: "Which formula counts Yes in A2:A10?",
      options: [
        { key: "A", text: "Counts cells that meet one condition" },
        { key: "B", text: "Adds values that meet one condition" },
        { key: "C", text: "=COUNTIF(A2:A10,\"Yes\")" },
        { key: "D", text: "=SUMIF(A2:A10,\"East\",B2:B10)" }
      ],
      correct: 2,
      explanation: "Sahi jawab: =COUNTIF(A2:A10,\"Yes\"). COUNTIF counts matching text values. Isliye ye option correct hai.",
      hint: "Focus on =COUNTIF(A2:A10,\"Yes\") to solve this problem."
    },
    {
      id: 4,
      question: "Which formula sums B2:B10 when A2:A10 is East?",
      options: [
        { key: "A", text: "Counts cells that meet one condition" },
        { key: "B", text: "=COUNTIF(A2:A10,\"Yes\")" },
        { key: "C", text: "Adds values that meet one condition" },
        { key: "D", text: "=SUMIF(A2:A10,\"East\",B2:B10)" }
      ],
      correct: 3,
      explanation: "Sahi jawab: =SUMIF(A2:A10,\"East\",B2:B10). SUMIF uses the condition range and sum range. Isliye ye option correct hai.",
      hint: "Focus on =SUMIF(A2:A10,\"East\",B2:B10) to solve this problem."
    },
    {
      id: 5,
      question: "How many criteria does a single COUNTIF evaluate?",
      options: [
        { key: "A", text: "Counts cells that meet one condition" },
        { key: "B", text: "=COUNTIF(A2:A10,\"Yes\")" },
        { key: "C", text: "One criterion" },
        { key: "D", text: "Adds values that meet one condition" }
      ],
      correct: 2,
      explanation: "Sahi jawab: One criterion. Use COUNTIFS for multiple criteria. Isliye ye option correct hai.",
      hint: "Focus on One criterion to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match conditional functions",
      prompt: "Match conditional functions",
      tokens: ["Criteria \u2192 Matching rule", "COUNTIF \u2192 Conditional count", "SUMIF \u2192 Conditional total"],
      shuffled: ["Criteria \u2192 Matching rule", "COUNTIF \u2192 Conditional count", "SUMIF \u2192 Conditional total"],
      expected: ["SUMIF \u2192 Conditional total", "COUNTIF \u2192 Conditional count", "Criteria \u2192 Matching rule"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a count of Present entries",
      prompt: "Build a count of Present entries",
      tokens: [")", ",", "(", "\"Present\"", "=COUNTIF", "A2:A10"],
      shuffled: [")", ",", "(", "\"Present\"", "=COUNTIF", "A2:A10"],
      expected: ["=COUNTIF", "(", "A2:A10", ",", "\"Present\"", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Sum East region sales",
      prompt: "Sum East region sales",
      tokens: ["Identify Region Column", "Apply SUMIF", "Verify Total", "Identify Sales Column"],
      shuffled: ["Identify Region Column", "Apply SUMIF", "Verify Total", "Identify Sales Column"],
      expected: ["Identify Region Column", "Identify Sales Column", "Apply SUMIF", "Verify Total"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SUMIF",
      meaning: "Conditional total"
    },
    {
      id: 2,
      snippet: "COUNTIF",
      meaning: "Conditional count"
    },
    {
      id: 3,
      snippet: "Criteria",
      meaning: "Matching rule"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Count Present Employees",
      scenario: "Attendance status is in C2:C30.",
      prompt: "Which formula counts Present entries?",
      expectedResponse: "=COUNTIF(C2:C30,\"Present\") — Correct! COUNTIF counts cells matching Present."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does SUMIF do?",
      sampleAnswer: "Adds values that meet one condition. SUMIF performs a conditional sum."
    },
    {
      id: 2,
      question: "What does COUNTIF do?",
      sampleAnswer: "Counts cells that meet one condition. COUNTIF performs a conditional count."
    },
    {
      id: 3,
      question: "Which formula counts Yes in A2:A10?",
      sampleAnswer: "=COUNTIF(A2:A10,\"Yes\"). COUNTIF counts matching text values."
    },
    {
      id: 4,
      question: "Which formula sums B2:B10 when A2:A10 is East?",
      sampleAnswer: "=SUMIF(A2:A10,\"East\",B2:B10). SUMIF uses the condition range and sum range."
    }
    ]
  },
  '13.8': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.8',
    id: 49,
    topicTitle: 'SUMIFS and COUNTIFS',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does SUMIFS do?",
      options: [
        { key: "A", text: "The sum_range" },
        { key: "B", text: "COUNTIFS" },
        { key: "C", text: "Counts rows meeting multiple criteria" },
        { key: "D", text: "Adds values that satisfy multiple criteria" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Adds values that satisfy multiple criteria. SUMIFS can apply several conditions to a sum. Isliye ye option correct hai.",
      hint: "Focus on Adds values that satisfy multiple criteria to solve this problem."
    },
    {
      id: 2,
      question: "What does COUNTIFS do?",
      options: [
        { key: "A", text: "The sum_range" },
        { key: "B", text: "Adds values that satisfy multiple criteria" },
        { key: "C", text: "Counts rows meeting multiple criteria" },
        { key: "D", text: "COUNTIFS" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Counts rows meeting multiple criteria. COUNTIFS evaluates criteria across matching ranges. Isliye ye option correct hai.",
      hint: "Focus on Counts rows meeting multiple criteria to solve this problem."
    },
    {
      id: 3,
      question: "Which function counts East-region orders with status Paid?",
      options: [
        { key: "A", text: "COUNTIFS" },
        { key: "B", text: "Adds values that satisfy multiple criteria" },
        { key: "C", text: "Counts rows meeting multiple criteria" },
        { key: "D", text: "The sum_range" }
      ],
      correct: 0,
      explanation: "Sahi jawab: COUNTIFS. COUNTIFS handles both Region and Status criteria. Isliye ye option correct hai.",
      hint: "Focus on COUNTIFS to solve this problem."
    },
    {
      id: 4,
      question: "Which argument comes first in SUMIFS?",
      options: [
        { key: "A", text: "Counts rows meeting multiple criteria" },
        { key: "B", text: "Adds values that satisfy multiple criteria" },
        { key: "C", text: "The sum_range" },
        { key: "D", text: "COUNTIFS" }
      ],
      correct: 2,
      explanation: "Sahi jawab: The sum_range. SUMIFS syntax begins with the range to sum. Isliye ye option correct hai.",
      hint: "Focus on The sum_range to solve this problem."
    },
    {
      id: 5,
      question: "What is important about criteria ranges in COUNTIFS?",
      options: [
        { key: "A", text: "COUNTIFS" },
        { key: "B", text: "They must have matching dimensions" },
        { key: "C", text: "Adds values that satisfy multiple criteria" },
        { key: "D", text: "Counts rows meeting multiple criteria" }
      ],
      correct: 1,
      explanation: "Sahi jawab: They must have matching dimensions. Criteria ranges need compatible sizes and shapes. Isliye ye option correct hai.",
      hint: "Focus on They must have matching dimensions to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match multi-criteria terms",
      prompt: "Match multi-criteria terms",
      tokens: ["sum_range \u2192 Values to add", "COUNTIFS \u2192 Multiple-condition count", "SUMIFS \u2192 Multiple-condition total"],
      shuffled: ["sum_range \u2192 Values to add", "COUNTIFS \u2192 Multiple-condition count", "SUMIFS \u2192 Multiple-condition total"],
      expected: ["SUMIFS \u2192 Multiple-condition total", "COUNTIFS \u2192 Multiple-condition count", "sum_range \u2192 Values to add"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a two-condition COUNTIFS",
      prompt: "Build a two-condition COUNTIFS",
      tokens: ["=COUNTIFS", "\"Paid\"", ")", "\"East\"", ",", "A2:A10", "(", ",", "B2:B10", ","],
      shuffled: ["=COUNTIFS", "\"Paid\"", ")", "\"East\"", ",", "A2:A10", "(", ",", "B2:B10", ","],
      expected: ["=COUNTIFS", "(", "A2:A10", ",", "\"East\"", ",", "B2:B10", ",", "\"Paid\"", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Count paid orders from East",
      prompt: "Count paid orders from East",
      tokens: ["Select Status Range", "Check Count", "Add Both Criteria", "Select Region Range"],
      shuffled: ["Select Status Range", "Check Count", "Add Both Criteria", "Select Region Range"],
      expected: ["Select Region Range", "Select Status Range", "Add Both Criteria", "Check Count"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SUMIFS",
      meaning: "Multiple-condition total"
    },
    {
      id: 2,
      snippet: "COUNTIFS",
      meaning: "Multiple-condition count"
    },
    {
      id: 3,
      snippet: "sum_range",
      meaning: "Values to add"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Count Paid East Orders",
      scenario: "Region is in A2:A20 and Status is in B2:B20.",
      prompt: "Which formula counts rows where Region is East and Status is Paid?",
      expectedResponse: "=COUNTIFS(A2:A20,\"East\",B2:B20,\"Paid\") — Correct! COUNTIFS checks both conditions on each row."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does SUMIFS do?",
      sampleAnswer: "Adds values that satisfy multiple criteria. SUMIFS can apply several conditions to a sum."
    },
    {
      id: 2,
      question: "What does COUNTIFS do?",
      sampleAnswer: "Counts rows meeting multiple criteria. COUNTIFS evaluates criteria across matching ranges."
    },
    {
      id: 3,
      question: "Which function counts East-region orders with status Paid?",
      sampleAnswer: "COUNTIFS. COUNTIFS handles both Region and Status criteria."
    },
    {
      id: 4,
      question: "Which argument comes first in SUMIFS?",
      sampleAnswer: "The sum_range. SUMIFS syntax begins with the range to sum."
    }
    ]
  },
  '13.9': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 13,
    moduleName: 'Module 13: Formulas and Core Functions',
    topicKey: '13.9',
    id: 50,
    topicTitle: 'IFERROR and Error Handling',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does IFERROR do?",
      options: [
        { key: "A", text: "An unrecognized function or name" },
        { key: "B", text: "Check" },
        { key: "C", text: "Returns a fallback value if a formula evaluates to an error" },
        { key: "D", text: "#DIV/0!" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Returns a fallback value if a formula evaluates to an error. IFERROR handles many formula errors with a chosen result. Isliye ye option correct hai.",
      hint: "Focus on Returns a fallback value if a formula evaluates to an error to solve this problem."
    },
    {
      id: 2,
      question: "What error commonly appears when dividing by zero?",
      options: [
        { key: "A", text: "#DIV/0!" },
        { key: "B", text: "Check" },
        { key: "C", text: "Returns a fallback value if a formula evaluates to an error" },
        { key: "D", text: "An unrecognized function or name" }
      ],
      correct: 0,
      explanation: "Sahi jawab: #DIV/0!. Excel reports division by zero as #DIV/0!. Isliye ye option correct hai.",
      hint: "Focus on #DIV/0! to solve this problem."
    },
    {
      id: 3,
      question: "What does =IFERROR(10/0,\"Check\") return?",
      options: [
        { key: "A", text: "#DIV/0!" },
        { key: "B", text: "Returns a fallback value if a formula evaluates to an error" },
        { key: "C", text: "An unrecognized function or name" },
        { key: "D", text: "Check" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Check. IFERROR replaces the division error with the fallback text. Isliye ye option correct hai.",
      hint: "Focus on Check to solve this problem."
    },
    {
      id: 4,
      question: "What does #NAME? often indicate?",
      options: [
        { key: "A", text: "Check" },
        { key: "B", text: "An unrecognized function or name" },
        { key: "C", text: "Returns a fallback value if a formula evaluates to an error" },
        { key: "D", text: "#DIV/0!" }
      ],
      correct: 1,
      explanation: "Sahi jawab: An unrecognized function or name. A misspelled function can produce #NAME?. Isliye ye option correct hai.",
      hint: "Focus on An unrecognized function or name to solve this problem."
    },
    {
      id: 5,
      question: "Why should you investigate the original error before hiding it?",
      options: [
        { key: "A", text: "Returns a fallback value if a formula evaluates to an error" },
        { key: "B", text: "Check" },
        { key: "C", text: "#DIV/0!" },
        { key: "D", text: "To fix the underlying problem" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To fix the underlying problem. A fallback message does not repair incorrect logic or source data. Isliye ye option correct hai.",
      hint: "Focus on To fix the underlying problem to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match Excel errors",
      prompt: "Match Excel errors",
      tokens: ["IFERROR \u2192 Fallback on error", "NAME? \u2192 Unrecognized name", "DIV/0 \u2192 Division by zero"],
      shuffled: ["IFERROR \u2192 Fallback on error", "NAME? \u2192 Unrecognized name", "DIV/0 \u2192 Division by zero"],
      expected: ["DIV/0 \u2192 Division by zero", "NAME? \u2192 Unrecognized name", "IFERROR \u2192 Fallback on error"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a safe division formula",
      prompt: "Build a safe division formula",
      tokens: [")", "(", "\"Check\"", ",", "=IFERROR", "A2/B2"],
      shuffled: [")", "(", "\"Check\"", ",", "=IFERROR", "A2/B2"],
      expected: ["=IFERROR", "(", "A2/B2", ",", "\"Check\"", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Debug a formula error",
      prompt: "Debug a formula error",
      tokens: ["Check Inputs", "Correct Formula", "Validate Result", "Inspect Error"],
      shuffled: ["Check Inputs", "Correct Formula", "Validate Result", "Inspect Error"],
      expected: ["Inspect Error", "Check Inputs", "Correct Formula", "Validate Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "DIV/0",
      meaning: "Division by zero"
    },
    {
      id: 2,
      snippet: "NAME?",
      meaning: "Unrecognized name"
    },
    {
      id: 3,
      snippet: "IFERROR",
      meaning: "Fallback on error"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Handle an Empty Denominator",
      scenario: "A report divides Sales by Units, but Units may be zero.",
      prompt: "Which formula displays Check instead of a division error?",
      expectedResponse: "=IFERROR(A2/B2,\"Check\") — Correct! IFERROR can display a fallback, but the source issue should still be reviewed."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does IFERROR do?",
      sampleAnswer: "Returns a fallback value if a formula evaluates to an error. IFERROR handles many formula errors with a chosen result."
    },
    {
      id: 2,
      question: "What error commonly appears when dividing by zero?",
      sampleAnswer: "#DIV/0!. Excel reports division by zero as #DIV/0!."
    },
    {
      id: 3,
      question: "What does =IFERROR(10/0,\"Check\") return?",
      sampleAnswer: "Check. IFERROR replaces the division error with the fallback text."
    },
    {
      id: 4,
      question: "What does #NAME? often indicate?",
      sampleAnswer: "An unrecognized function or name. A misspelled function can produce #NAME?."
    }
    ]
  },
  '14.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.1',
    id: 51,
    topicTitle: 'LEFT, RIGHT, MID and LEN',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does LEFT(\"EXCEL\",2) return?",
      options: [
        { key: "A", text: "EL" },
        { key: "B", text: "5" },
        { key: "C", text: "XCE" },
        { key: "D", text: "EX" }
      ],
      correct: 3,
      explanation: "Sahi jawab: EX. LEFT extracts characters from the beginning of text. Isliye ye option correct hai.",
      hint: "Focus on EX to solve this problem."
    },
    {
      id: 2,
      question: "What does RIGHT(\"EXCEL\",2) return?",
      options: [
        { key: "A", text: "EX" },
        { key: "B", text: "XCE" },
        { key: "C", text: "5" },
        { key: "D", text: "EL" }
      ],
      correct: 3,
      explanation: "Sahi jawab: EL. RIGHT extracts characters from the end of text. Isliye ye option correct hai.",
      hint: "Focus on EL to solve this problem."
    },
    {
      id: 3,
      question: "What does MID(\"EXCEL\",2,3) return?",
      options: [
        { key: "A", text: "EL" },
        { key: "B", text: "EX" },
        { key: "C", text: "5" },
        { key: "D", text: "XCE" }
      ],
      correct: 3,
      explanation: "Sahi jawab: XCE. MID extracts characters starting at a specified position. Isliye ye option correct hai.",
      hint: "Focus on XCE to solve this problem."
    },
    {
      id: 4,
      question: "What does LEN(\"EXCEL\") return?",
      options: [
        { key: "A", text: "EL" },
        { key: "B", text: "XCE" },
        { key: "C", text: "5" },
        { key: "D", text: "EX" }
      ],
      correct: 2,
      explanation: "Sahi jawab: 5. LEN counts characters in a text string. Isliye ye option correct hai.",
      hint: "Focus on 5 to solve this problem."
    },
    {
      id: 5,
      question: "Which function extracts text from the middle?",
      options: [
        { key: "A", text: "EX" },
        { key: "B", text: "EL" },
        { key: "C", text: "MID" },
        { key: "D", text: "XCE" }
      ],
      correct: 2,
      explanation: "Sahi jawab: MID. MID uses a start position and number of characters. Isliye ye option correct hai.",
      hint: "Focus on MID to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match text functions",
      prompt: "Match text functions",
      tokens: ["LEN \u2192 Text length", "RIGHT \u2192 Last characters", "LEFT \u2192 First characters"],
      shuffled: ["LEN \u2192 Text length", "RIGHT \u2192 Last characters", "LEFT \u2192 First characters"],
      expected: ["LEFT \u2192 First characters", "RIGHT \u2192 Last characters", "LEN \u2192 Text length"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a formula to get first 3 characters",
      prompt: "Build a formula to get first 3 characters",
      tokens: ["=LEFT", "3", ",", "A2", "(", ")"],
      shuffled: ["=LEFT", "3", ",", "A2", "(", ")"],
      expected: ["=LEFT", "(", "A2", ",", "3", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Extract an ID prefix",
      prompt: "Extract an ID prefix",
      tokens: ["Choose LEFT", "Specify Character Count", "Check Result", "Identify ID Cell"],
      shuffled: ["Choose LEFT", "Specify Character Count", "Check Result", "Identify ID Cell"],
      expected: ["Identify ID Cell", "Choose LEFT", "Specify Character Count", "Check Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "LEFT",
      meaning: "First characters"
    },
    {
      id: 2,
      snippet: "RIGHT",
      meaning: "Last characters"
    },
    {
      id: 3,
      snippet: "LEN",
      meaning: "Text length"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Read Product Code Prefix",
      scenario: "Product code in A2 starts with ABC followed by digits.",
      prompt: "Which formula extracts the first three characters?",
      expectedResponse: "=LEFT(A2,3) — Correct! LEFT extracts characters from the start of the code."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does LEFT(\"EXCEL\",2) return?",
      sampleAnswer: "EX. LEFT extracts characters from the beginning of text."
    },
    {
      id: 2,
      question: "What does RIGHT(\"EXCEL\",2) return?",
      sampleAnswer: "EL. RIGHT extracts characters from the end of text."
    },
    {
      id: 3,
      question: "What does MID(\"EXCEL\",2,3) return?",
      sampleAnswer: "XCE. MID extracts characters starting at a specified position."
    },
    {
      id: 4,
      question: "What does LEN(\"EXCEL\") return?",
      sampleAnswer: "5. LEN counts characters in a text string."
    }
    ]
  },
  '14.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.2',
    id: 52,
    topicTitle: 'TRIM, CLEAN, UPPER, LOWER and PROPER',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does TRIM(\"  Riya  \") return?",
      options: [
        { key: "A", text: "Riya" },
        { key: "B", text: "DELHI" },
        { key: "C", text: "delhi" },
        { key: "D", text: "Many nonprinting characters" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Riya. TRIM removes extra ordinary spaces. Isliye ye option correct hai.",
      hint: "Focus on Riya to solve this problem."
    },
    {
      id: 2,
      question: "What does CLEAN remove from text?",
      options: [
        { key: "A", text: "DELHI" },
        { key: "B", text: "delhi" },
        { key: "C", text: "Riya" },
        { key: "D", text: "Many nonprinting characters" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Many nonprinting characters. CLEAN targets certain nonprinting ASCII characters. Isliye ye option correct hai.",
      hint: "Focus on Many nonprinting characters to solve this problem."
    },
    {
      id: 3,
      question: "What does UPPER(\"delhi\") return?",
      options: [
        { key: "A", text: "Many nonprinting characters" },
        { key: "B", text: "DELHI" },
        { key: "C", text: "Riya" },
        { key: "D", text: "delhi" }
      ],
      correct: 1,
      explanation: "Sahi jawab: DELHI. UPPER converts letters to uppercase. Isliye ye option correct hai.",
      hint: "Focus on DELHI to solve this problem."
    },
    {
      id: 4,
      question: "What does LOWER(\"DELHI\") return?",
      options: [
        { key: "A", text: "DELHI" },
        { key: "B", text: "delhi" },
        { key: "C", text: "Riya" },
        { key: "D", text: "Many nonprinting characters" }
      ],
      correct: 1,
      explanation: "Sahi jawab: delhi. LOWER converts letters to lowercase. Isliye ye option correct hai.",
      hint: "Focus on delhi to solve this problem."
    },
    {
      id: 5,
      question: "What does PROPER(\"riya sharma\") return?",
      options: [
        { key: "A", text: "Riya Sharma" },
        { key: "B", text: "Many nonprinting characters" },
        { key: "C", text: "DELHI" },
        { key: "D", text: "Riya" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Riya Sharma. PROPER capitalizes the first letter of each word. Isliye ye option correct hai.",
      hint: "Focus on Riya Sharma to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match text-cleaning functions",
      prompt: "Match text-cleaning functions",
      tokens: ["PROPER \u2192 Title-style capitalization", "CLEAN \u2192 Nonprinting characters", "TRIM \u2192 Extra ordinary spaces"],
      shuffled: ["PROPER \u2192 Title-style capitalization", "CLEAN \u2192 Nonprinting characters", "TRIM \u2192 Extra ordinary spaces"],
      expected: ["TRIM \u2192 Extra ordinary spaces", "CLEAN \u2192 Nonprinting characters", "PROPER \u2192 Title-style capitalization"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a name-cleaning formula",
      prompt: "Build a name-cleaning formula",
      tokens: ["=PROPER", "(", "(", ")", "TRIM", ")", "A2"],
      shuffled: ["=PROPER", "(", "(", ")", "TRIM", ")", "A2"],
      expected: ["=PROPER", "(", "TRIM", "(", "A2", ")", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Clean a customer-name column",
      prompt: "Clean a customer-name column",
      tokens: ["Review Names", "Apply PROPER", "Apply TRIM", "Check Raw Names"],
      shuffled: ["Review Names", "Apply PROPER", "Apply TRIM", "Check Raw Names"],
      expected: ["Check Raw Names", "Apply TRIM", "Apply PROPER", "Review Names"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "TRIM",
      meaning: "Extra ordinary spaces"
    },
    {
      id: 2,
      snippet: "CLEAN",
      meaning: "Nonprinting characters"
    },
    {
      id: 3,
      snippet: "PROPER",
      meaning: "Title-style capitalization"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Standardize Customer Names",
      scenario: "A customer name in A2 is \"  riya sharma  \".",
      prompt: "Which formula removes extra spaces and formats the name?",
      expectedResponse: "=PROPER(TRIM(A2)) — Correct! TRIM cleans spaces and PROPER capitalizes each word."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does TRIM(\"  Riya  \") return?",
      sampleAnswer: "Riya. TRIM removes extra ordinary spaces."
    },
    {
      id: 2,
      question: "What does CLEAN remove from text?",
      sampleAnswer: "Many nonprinting characters. CLEAN targets certain nonprinting ASCII characters."
    },
    {
      id: 3,
      question: "What does UPPER(\"delhi\") return?",
      sampleAnswer: "DELHI. UPPER converts letters to uppercase."
    },
    {
      id: 4,
      question: "What does LOWER(\"DELHI\") return?",
      sampleAnswer: "delhi. LOWER converts letters to lowercase."
    }
    ]
  },
  '14.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.3',
    id: 53,
    topicTitle: 'CONCAT and TEXTJOIN',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does CONCAT do?",
      options: [
        { key: "A", text: "DataAnalyst" },
        { key: "B", text: "A chosen delimiter between combined items" },
        { key: "C", text: "Combines text values" },
        { key: "D", text: "=TEXTJOIN(\" \",TRUE,A2,B2)" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Combines text values. CONCAT joins strings and cell values. Isliye ye option correct hai.",
      hint: "Focus on Combines text values to solve this problem."
    },
    {
      id: 2,
      question: "What does TEXTJOIN add compared with basic CONCAT?",
      options: [
        { key: "A", text: "=TEXTJOIN(\" \",TRUE,A2,B2)" },
        { key: "B", text: "DataAnalyst" },
        { key: "C", text: "Combines text values" },
        { key: "D", text: "A chosen delimiter between combined items" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A chosen delimiter between combined items. TEXTJOIN supports a delimiter and ignoring empty values. Isliye ye option correct hai.",
      hint: "Focus on A chosen delimiter between combined items to solve this problem."
    },
    {
      id: 3,
      question: "What does =CONCAT(\"Data\",\"Analyst\") return?",
      options: [
        { key: "A", text: "A chosen delimiter between combined items" },
        { key: "B", text: "=TEXTJOIN(\" \",TRUE,A2,B2)" },
        { key: "C", text: "Combines text values" },
        { key: "D", text: "DataAnalyst" }
      ],
      correct: 3,
      explanation: "Sahi jawab: DataAnalyst. CONCAT does not add a separator automatically. Isliye ye option correct hai.",
      hint: "Focus on DataAnalyst to solve this problem."
    },
    {
      id: 4,
      question: "Which formula joins A2 and B2 with a space?",
      options: [
        { key: "A", text: "=TEXTJOIN(\" \",TRUE,A2,B2)" },
        { key: "B", text: "DataAnalyst" },
        { key: "C", text: "Combines text values" },
        { key: "D", text: "A chosen delimiter between combined items" }
      ],
      correct: 0,
      explanation: "Sahi jawab: =TEXTJOIN(\" \",TRUE,A2,B2). TEXTJOIN uses a space delimiter and ignores empty values. Isliye ye option correct hai.",
      hint: "Focus on =TEXTJOIN(\" \",TRUE,A2,B2) to solve this problem."
    },
    {
      id: 5,
      question: "What does the TRUE argument mean in TEXTJOIN(\" \",TRUE,A2:B2)?",
      options: [
        { key: "A", text: "A chosen delimiter between combined items" },
        { key: "B", text: "DataAnalyst" },
        { key: "C", text: "Ignore empty cells" },
        { key: "D", text: "Combines text values" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Ignore empty cells. TRUE tells TEXTJOIN to ignore empty values. Isliye ye option correct hai.",
      hint: "Focus on Ignore empty cells to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match joining concepts",
      prompt: "Match joining concepts",
      tokens: ["Delimiter \u2192 Separator", "TEXTJOIN \u2192 Combine with delimiter", "CONCAT \u2192 Combine text"],
      shuffled: ["Delimiter \u2192 Separator", "TEXTJOIN \u2192 Combine with delimiter", "CONCAT \u2192 Combine text"],
      expected: ["CONCAT \u2192 Combine text", "TEXTJOIN \u2192 Combine with delimiter", "Delimiter \u2192 Separator"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a formula to join first and last name",
      prompt: "Build a formula to join first and last name",
      tokens: ["B2", "A2", "=TEXTJOIN", ")", ",", ",", "(", "TRUE", ",", "\" \""],
      shuffled: ["B2", "A2", "=TEXTJOIN", ")", ",", ",", "(", "TRUE", ",", "\" \""],
      expected: ["=TEXTJOIN", "(", "\" \"", ",", "TRUE", ",", "A2", ",", "B2", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Create full names",
      prompt: "Create full names",
      tokens: ["Join with Space", "Identify Last Name", "Review Result", "Identify First Name"],
      shuffled: ["Join with Space", "Identify Last Name", "Review Result", "Identify First Name"],
      expected: ["Identify First Name", "Identify Last Name", "Join with Space", "Review Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CONCAT",
      meaning: "Combine text"
    },
    {
      id: 2,
      snippet: "TEXTJOIN",
      meaning: "Combine with delimiter"
    },
    {
      id: 3,
      snippet: "Delimiter",
      meaning: "Separator"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Create Full Employee Names",
      scenario: "First Name is in A2 and Last Name is in B2.",
      prompt: "Which formula combines them with a space?",
      expectedResponse: "=TEXTJOIN(\" \",TRUE,A2,B2) — Correct! TEXTJOIN inserts a space between the two names."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does CONCAT do?",
      sampleAnswer: "Combines text values. CONCAT joins strings and cell values."
    },
    {
      id: 2,
      question: "What does TEXTJOIN add compared with basic CONCAT?",
      sampleAnswer: "A chosen delimiter between combined items. TEXTJOIN supports a delimiter and ignoring empty values."
    },
    {
      id: 3,
      question: "What does =CONCAT(\"Data\",\"Analyst\") return?",
      sampleAnswer: "DataAnalyst. CONCAT does not add a separator automatically."
    },
    {
      id: 4,
      question: "Which formula joins A2 and B2 with a space?",
      sampleAnswer: "=TEXTJOIN(\" \",TRUE,A2,B2). TEXTJOIN uses a space delimiter and ignores empty values."
    }
    ]
  },
  '14.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.4',
    id: 54,
    topicTitle: 'TODAY, NOW, DATE and YEAR',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does TODAY() return?",
      options: [
        { key: "A", text: "A date for 15 January 2026" },
        { key: "B", text: "The current date" },
        { key: "C", text: "The year number" },
        { key: "D", text: "The current date and time" }
      ],
      correct: 1,
      explanation: "Sahi jawab: The current date. TODAY updates based on the system date when recalculated. Isliye ye option correct hai.",
      hint: "Focus on The current date to solve this problem."
    },
    {
      id: 2,
      question: "What does NOW() return?",
      options: [
        { key: "A", text: "The year number" },
        { key: "B", text: "The current date and time" },
        { key: "C", text: "A date for 15 January 2026" },
        { key: "D", text: "The current date" }
      ],
      correct: 1,
      explanation: "Sahi jawab: The current date and time. NOW includes both date and time. Isliye ye option correct hai.",
      hint: "Focus on The current date and time to solve this problem."
    },
    {
      id: 3,
      question: "What does DATE(2026,1,15) create?",
      options: [
        { key: "A", text: "The current date and time" },
        { key: "B", text: "A date for 15 January 2026" },
        { key: "C", text: "The year number" },
        { key: "D", text: "The current date" }
      ],
      correct: 1,
      explanation: "Sahi jawab: A date for 15 January 2026. DATE builds an Excel date from year, month, and day. Isliye ye option correct hai.",
      hint: "Focus on A date for 15 January 2026 to solve this problem."
    },
    {
      id: 4,
      question: "What does YEAR(A2) extract from a valid date?",
      options: [
        { key: "A", text: "The current date and time" },
        { key: "B", text: "A date for 15 January 2026" },
        { key: "C", text: "The current date" },
        { key: "D", text: "The year number" }
      ],
      correct: 3,
      explanation: "Sahi jawab: The year number. YEAR returns the year component of an Excel date. Isliye ye option correct hai.",
      hint: "Focus on The year number to solve this problem."
    },
    {
      id: 5,
      question: "Which function is best for a live date without time?",
      options: [
        { key: "A", text: "The current date and time" },
        { key: "B", text: "The current date" },
        { key: "C", text: "A date for 15 January 2026" },
        { key: "D", text: "=TODAY()" }
      ],
      correct: 3,
      explanation: "Sahi jawab: =TODAY(). TODAY returns a date without the time component. Isliye ye option correct hai.",
      hint: "Focus on =TODAY() to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match date functions",
      prompt: "Match date functions",
      tokens: ["YEAR \u2192 Year component", "NOW \u2192 Current date and time", "TODAY \u2192 Current date"],
      shuffled: ["YEAR \u2192 Year component", "NOW \u2192 Current date and time", "TODAY \u2192 Current date"],
      expected: ["TODAY \u2192 Current date", "NOW \u2192 Current date and time", "YEAR \u2192 Year component"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a DATE formula for 15 January 2026",
      prompt: "Build a DATE formula for 15 January 2026",
      tokens: [",", "15", "(", ")", "=DATE", "2026", ",", "1"],
      shuffled: [",", "15", "(", ")", "=DATE", "2026", ",", "1"],
      expected: ["=DATE", "(", "2026", ",", "1", ",", "15", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Display an order year",
      prompt: "Display an order year",
      tokens: ["Apply YEAR", "Format Result as Number", "Select Order Date"],
      shuffled: ["Apply YEAR", "Format Result as Number", "Select Order Date"],
      expected: ["Select Order Date", "Apply YEAR", "Format Result as Number"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "TODAY",
      meaning: "Current date"
    },
    {
      id: 2,
      snippet: "NOW",
      meaning: "Current date and time"
    },
    {
      id: 3,
      snippet: "YEAR",
      meaning: "Year component"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Show Today’s Date",
      scenario: "An office report should show the current date automatically.",
      prompt: "Which formula should be used?",
      expectedResponse: "=TODAY() — Correct! TODAY returns the current date."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does TODAY() return?",
      sampleAnswer: "The current date. TODAY updates based on the system date when recalculated."
    },
    {
      id: 2,
      question: "What does NOW() return?",
      sampleAnswer: "The current date and time. NOW includes both date and time."
    },
    {
      id: 3,
      question: "What does DATE(2026,1,15) create?",
      sampleAnswer: "A date for 15 January 2026. DATE builds an Excel date from year, month, and day."
    },
    {
      id: 4,
      question: "What does YEAR(A2) extract from a valid date?",
      sampleAnswer: "The year number. YEAR returns the year component of an Excel date."
    }
    ]
  },
  '14.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.5',
    id: 55,
    topicTitle: 'MONTH, DAY and Date Calculations',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does MONTH(DATE(2026,5,12)) return?",
      options: [
        { key: "A", text: "=B2-A2" },
        { key: "B", text: "Moves the date forward seven days" },
        { key: "C", text: "12" },
        { key: "D", text: "5" }
      ],
      correct: 3,
      explanation: "Sahi jawab: 5. MONTH extracts the month number. Isliye ye option correct hai.",
      hint: "Focus on 5 to solve this problem."
    },
    {
      id: 2,
      question: "What does DAY(DATE(2026,5,12)) return?",
      options: [
        { key: "A", text: "=B2-A2" },
        { key: "B", text: "12" },
        { key: "C", text: "5" },
        { key: "D", text: "Moves the date forward seven days" }
      ],
      correct: 1,
      explanation: "Sahi jawab: 12. DAY extracts the day of the month. Isliye ye option correct hai.",
      hint: "Focus on 12 to solve this problem."
    },
    {
      id: 3,
      question: "How can Excel calculate days between two valid dates in A2 and B2?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "12" },
        { key: "C", text: "Moves the date forward seven days" },
        { key: "D", text: "=B2-A2" }
      ],
      correct: 3,
      explanation: "Sahi jawab: =B2-A2. Excel dates are stored as serial numbers that can be subtracted. Isliye ye option correct hai.",
      hint: "Focus on =B2-A2 to solve this problem."
    },
    {
      id: 4,
      question: "What does adding 7 to a valid Excel date usually do?",
      options: [
        { key: "A", text: "Moves the date forward seven days" },
        { key: "B", text: "=B2-A2" },
        { key: "C", text: "12" },
        { key: "D", text: "5" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Moves the date forward seven days. Adding 7 advances a date by one week. Isliye ye option correct hai.",
      hint: "Focus on Moves the date forward seven days to solve this problem."
    },
    {
      id: 5,
      question: "Which function extracts a month number from a date in A2?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "12" },
        { key: "C", text: "=B2-A2" },
        { key: "D", text: "=MONTH(A2)" }
      ],
      correct: 3,
      explanation: "Sahi jawab: =MONTH(A2). MONTH returns a number from 1 through 12. Isliye ye option correct hai.",
      hint: "Focus on =MONTH(A2) to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match date calculations",
      prompt: "Match date calculations",
      tokens: ["End-Start \u2192 Days elapsed", "DAY \u2192 Day number", "MONTH \u2192 Month number"],
      shuffled: ["End-Start \u2192 Days elapsed", "DAY \u2192 Day number", "MONTH \u2192 Month number"],
      expected: ["MONTH \u2192 Month number", "DAY \u2192 Day number", "End-Start \u2192 Days elapsed"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a formula for days between dates",
      prompt: "Build a formula for days between dates",
      tokens: ["A2", "=", "B2", "-"],
      shuffled: ["A2", "=", "B2", "-"],
      expected: ["=", "B2", "-", "A2"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Calculate delivery duration",
      prompt: "Calculate delivery duration",
      tokens: ["Check Start Date", "Format as Number", "Subtract Dates", "Check End Date"],
      shuffled: ["Check Start Date", "Format as Number", "Subtract Dates", "Check End Date"],
      expected: ["Check Start Date", "Check End Date", "Subtract Dates", "Format as Number"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "MONTH",
      meaning: "Month number"
    },
    {
      id: 2,
      snippet: "DAY",
      meaning: "Day number"
    },
    {
      id: 3,
      snippet: "End-Start",
      meaning: "Days elapsed"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Calculate Delivery Days",
      scenario: "Order date is in A2 and delivery date is in B2. Both are valid Excel dates.",
      prompt: "Which formula calculates elapsed days?",
      expectedResponse: "=B2-A2 — Correct! Subtracting valid Excel dates gives the day difference."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does MONTH(DATE(2026,5,12)) return?",
      sampleAnswer: "5. MONTH extracts the month number."
    },
    {
      id: 2,
      question: "What does DAY(DATE(2026,5,12)) return?",
      sampleAnswer: "12. DAY extracts the day of the month."
    },
    {
      id: 3,
      question: "How can Excel calculate days between two valid dates in A2 and B2?",
      sampleAnswer: "=B2-A2. Excel dates are stored as serial numbers that can be subtracted."
    },
    {
      id: 4,
      question: "What does adding 7 to a valid Excel date usually do?",
      sampleAnswer: "Moves the date forward seven days. Adding 7 advances a date by one week."
    }
    ]
  },
  '14.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.6',
    id: 56,
    topicTitle: 'XLOOKUP',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does XLOOKUP primarily do?",
      options: [
        { key: "A", text: "lookup_array" },
        { key: "B", text: "Finds a matching value and returns related data" },
        { key: "C", text: "lookup_value" },
        { key: "D", text: "return_array" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Finds a matching value and returns related data. XLOOKUP searches one range and returns from another. Isliye ye option correct hai.",
      hint: "Focus on Finds a matching value and returns related data to solve this problem."
    },
    {
      id: 2,
      question: "What is the first argument of XLOOKUP?",
      options: [
        { key: "A", text: "return_array" },
        { key: "B", text: "lookup_array" },
        { key: "C", text: "Finds a matching value and returns related data" },
        { key: "D", text: "lookup_value" }
      ],
      correct: 3,
      explanation: "Sahi jawab: lookup_value. The lookup_value is what you want to find. Isliye ye option correct hai.",
      hint: "Focus on lookup_value to solve this problem."
    },
    {
      id: 3,
      question: "What is the second argument of XLOOKUP?",
      options: [
        { key: "A", text: "lookup_array" },
        { key: "B", text: "lookup_value" },
        { key: "C", text: "Finds a matching value and returns related data" },
        { key: "D", text: "return_array" }
      ],
      correct: 0,
      explanation: "Sahi jawab: lookup_array. The lookup_array is the range searched. Isliye ye option correct hai.",
      hint: "Focus on lookup_array to solve this problem."
    },
    {
      id: 4,
      question: "What is the third argument of XLOOKUP?",
      options: [
        { key: "A", text: "lookup_value" },
        { key: "B", text: "Finds a matching value and returns related data" },
        { key: "C", text: "lookup_array" },
        { key: "D", text: "return_array" }
      ],
      correct: 3,
      explanation: "Sahi jawab: return_array. The return_array contains the desired result. Isliye ye option correct hai.",
      hint: "Focus on return_array to solve this problem."
    },
    {
      id: 5,
      question: "What match type does XLOOKUP use by default?",
      options: [
        { key: "A", text: "Exact match" },
        { key: "B", text: "Finds a matching value and returns related data" },
        { key: "C", text: "lookup_value" },
        { key: "D", text: "lookup_array" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Exact match. XLOOKUP defaults to an exact match when match_mode is omitted. Isliye ye option correct hai.",
      hint: "Focus on Exact match to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match XLOOKUP arguments",
      prompt: "Match XLOOKUP arguments",
      tokens: ["return_array \u2192 Result range", "lookup_array \u2192 Search range", "lookup_value \u2192 Value to find"],
      shuffled: ["return_array \u2192 Result range", "lookup_array \u2192 Search range", "lookup_value \u2192 Value to find"],
      expected: ["lookup_value \u2192 Value to find", "lookup_array \u2192 Search range", "return_array \u2192 Result range"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build an XLOOKUP for product price",
      prompt: "Build an XLOOKUP for product price",
      tokens: ["A2:A10", ",", "(", ",", "E2", ")", "=XLOOKUP", "B2:B10"],
      shuffled: ["A2:A10", ",", "(", ",", "E2", ")", "=XLOOKUP", "B2:B10"],
      expected: ["=XLOOKUP", "(", "E2", ",", "A2:A10", ",", "B2:B10", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Find a product price",
      prompt: "Find a product price",
      tokens: ["Identify Product Code", "Run XLOOKUP", "Select Price Column", "Select Code Column"],
      shuffled: ["Identify Product Code", "Run XLOOKUP", "Select Price Column", "Select Code Column"],
      expected: ["Identify Product Code", "Select Code Column", "Select Price Column", "Run XLOOKUP"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "lookup_value",
      meaning: "Value to find"
    },
    {
      id: 2,
      snippet: "lookup_array",
      meaning: "Search range"
    },
    {
      id: 3,
      snippet: "return_array",
      meaning: "Result range"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find a Product Price",
      scenario: "Product codes are in A2:A10, prices in B2:B10, and searched code in E2.",
      prompt: "Which formula returns the matching price?",
      expectedResponse: "=XLOOKUP(E2,A2:A10,B2:B10) — Correct! XLOOKUP finds the code and returns the corresponding price."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does XLOOKUP primarily do?",
      sampleAnswer: "Finds a matching value and returns related data. XLOOKUP searches one range and returns from another."
    },
    {
      id: 2,
      question: "What is the first argument of XLOOKUP?",
      sampleAnswer: "lookup_value. The lookup_value is what you want to find."
    },
    {
      id: 3,
      question: "What is the second argument of XLOOKUP?",
      sampleAnswer: "lookup_array. The lookup_array is the range searched."
    },
    {
      id: 4,
      question: "What is the third argument of XLOOKUP?",
      sampleAnswer: "return_array. The return_array contains the desired result."
    }
    ]
  },
  '14.7': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.7',
    id: 57,
    topicTitle: 'VLOOKUP and HLOOKUP Concepts',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which direction does VLOOKUP search its first table column?",
      options: [
        { key: "A", text: "FALSE" },
        { key: "B", text: "Horizontally across the row" },
        { key: "C", text: "Vertically down the column" },
        { key: "D", text: "Which column in the table array to return" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Vertically down the column. VLOOKUP searches the leftmost column of its table array. Isliye ye option correct hai.",
      hint: "Focus on Vertically down the column to solve this problem."
    },
    {
      id: 2,
      question: "Which direction does HLOOKUP search the first row?",
      options: [
        { key: "A", text: "FALSE" },
        { key: "B", text: "Which column in the table array to return" },
        { key: "C", text: "Vertically down the column" },
        { key: "D", text: "Horizontally across the row" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Horizontally across the row. HLOOKUP searches the top row of its table array. Isliye ye option correct hai.",
      hint: "Focus on Horizontally across the row to solve this problem."
    },
    {
      id: 3,
      question: "What does the column index number in VLOOKUP specify?",
      options: [
        { key: "A", text: "FALSE" },
        { key: "B", text: "Which column in the table array to return" },
        { key: "C", text: "Vertically down the column" },
        { key: "D", text: "Horizontally across the row" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Which column in the table array to return. The first table-array column has index 1. Isliye ye option correct hai.",
      hint: "Focus on Which column in the table array to return to solve this problem."
    },
    {
      id: 4,
      question: "Which argument requests an exact match in VLOOKUP?",
      options: [
        { key: "A", text: "Horizontally across the row" },
        { key: "B", text: "Vertically down the column" },
        { key: "C", text: "Which column in the table array to return" },
        { key: "D", text: "FALSE" }
      ],
      correct: 3,
      explanation: "Sahi jawab: FALSE. FALSE requests exact matching. Isliye ye option correct hai.",
      hint: "Focus on FALSE to solve this problem."
    },
    {
      id: 5,
      question: "What is a common limitation of VLOOKUP?",
      options: [
        { key: "A", text: "Which column in the table array to return" },
        { key: "B", text: "Vertically down the column" },
        { key: "C", text: "Horizontally across the row" },
        { key: "D", text: "It normally returns values to the right of the lookup column" }
      ],
      correct: 3,
      explanation: "Sahi jawab: It normally returns values to the right of the lookup column. VLOOKUP cannot directly return a column to the left of its first search column. Isliye ye option correct hai.",
      hint: "Focus on It normally returns values to the right of the lookup column to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match lookup directions",
      prompt: "Match lookup directions",
      tokens: ["FALSE \u2192 Exact match", "HLOOKUP \u2192 Horizontal search", "VLOOKUP \u2192 Vertical search"],
      shuffled: ["FALSE \u2192 Exact match", "HLOOKUP \u2192 Horizontal search", "VLOOKUP \u2192 Vertical search"],
      expected: ["VLOOKUP \u2192 Vertical search", "HLOOKUP \u2192 Horizontal search", "FALSE \u2192 Exact match"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build an exact-match VLOOKUP",
      prompt: "Build an exact-match VLOOKUP",
      tokens: ["(", "2", "A2:C10", "FALSE", ",", ")", "E2", "=VLOOKUP", ",", ","],
      shuffled: ["(", "2", "A2:C10", "FALSE", ",", ")", "E2", "=VLOOKUP", ",", ","],
      expected: ["=VLOOKUP", "(", "E2", ",", "A2:C10", ",", "2", ",", "FALSE", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Use VLOOKUP safely",
      prompt: "Use VLOOKUP safely",
      tokens: ["Check Lookup Column", "Choose Return Index", "Set Exact Match", "Select Table Array"],
      shuffled: ["Check Lookup Column", "Choose Return Index", "Set Exact Match", "Select Table Array"],
      expected: ["Check Lookup Column", "Select Table Array", "Choose Return Index", "Set Exact Match"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "VLOOKUP",
      meaning: "Vertical search"
    },
    {
      id: 2,
      snippet: "HLOOKUP",
      meaning: "Horizontal search"
    },
    {
      id: 3,
      snippet: "FALSE",
      meaning: "Exact match"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find a Student Grade",
      scenario: "Student IDs are in the first column of A2:C20, grades are in column 3, and searched ID is in E2.",
      prompt: "Which formula returns the matching grade?",
      expectedResponse: "=VLOOKUP(E2,A2:C20,3,FALSE) — Correct! VLOOKUP searches the first column and returns column 3."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which direction does VLOOKUP search its first table column?",
      sampleAnswer: "Vertically down the column. VLOOKUP searches the leftmost column of its table array."
    },
    {
      id: 2,
      question: "Which direction does HLOOKUP search the first row?",
      sampleAnswer: "Horizontally across the row. HLOOKUP searches the top row of its table array."
    },
    {
      id: 3,
      question: "What does the column index number in VLOOKUP specify?",
      sampleAnswer: "Which column in the table array to return. The first table-array column has index 1."
    },
    {
      id: 4,
      question: "Which argument requests an exact match in VLOOKUP?",
      sampleAnswer: "FALSE. FALSE requests exact matching."
    }
    ]
  },
  '14.8': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.8',
    id: 58,
    topicTitle: 'INDEX and MATCH',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does MATCH return?",
      options: [
        { key: "A", text: "A value at a specified row or column position" },
        { key: "B", text: "Exact match" },
        { key: "C", text: "To find a position and return a related value" },
        { key: "D", text: "The relative position of a matching item" }
      ],
      correct: 3,
      explanation: "Sahi jawab: The relative position of a matching item. MATCH locates an item’s position in a range. Isliye ye option correct hai.",
      hint: "Focus on The relative position of a matching item to solve this problem."
    },
    {
      id: 2,
      question: "What does INDEX return?",
      options: [
        { key: "A", text: "Exact match" },
        { key: "B", text: "The relative position of a matching item" },
        { key: "C", text: "To find a position and return a related value" },
        { key: "D", text: "A value at a specified row or column position" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A value at a specified row or column position. INDEX retrieves data from a range. Isliye ye option correct hai.",
      hint: "Focus on A value at a specified row or column position to solve this problem."
    },
    {
      id: 3,
      question: "What does MATCH(E2,A2:A10,0) use 0 for?",
      options: [
        { key: "A", text: "The relative position of a matching item" },
        { key: "B", text: "Exact match" },
        { key: "C", text: "To find a position and return a related value" },
        { key: "D", text: "A value at a specified row or column position" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Exact match. Match type 0 requests an exact match. Isliye ye option correct hai.",
      hint: "Focus on Exact match to solve this problem."
    },
    {
      id: 4,
      question: "Why combine INDEX and MATCH?",
      options: [
        { key: "A", text: "To find a position and return a related value" },
        { key: "B", text: "A value at a specified row or column position" },
        { key: "C", text: "The relative position of a matching item" },
        { key: "D", text: "Exact match" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To find a position and return a related value. MATCH locates the row; INDEX returns the result. Isliye ye option correct hai.",
      hint: "Focus on To find a position and return a related value to solve this problem."
    },
    {
      id: 5,
      question: "Which formula returns a price from B2:B10 for a code in E2 matched in A2:A10?",
      options: [
        { key: "A", text: "=INDEX(B2:B10,MATCH(E2,A2:A10,0))" },
        { key: "B", text: "Exact match" },
        { key: "C", text: "A value at a specified row or column position" },
        { key: "D", text: "The relative position of a matching item" }
      ],
      correct: 0,
      explanation: "Sahi jawab: =INDEX(B2:B10,MATCH(E2,A2:A10,0)). INDEX uses the row position found by MATCH. Isliye ye option correct hai.",
      hint: "Focus on =INDEX(B2:B10,MATCH(E2,A2:A10,0)) to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match lookup functions",
      prompt: "Match lookup functions",
      tokens: ["0 in MATCH \u2192 Exact match", "INDEX \u2192 Value at position", "MATCH \u2192 Position"],
      shuffled: ["0 in MATCH \u2192 Exact match", "INDEX \u2192 Value at position", "MATCH \u2192 Position"],
      expected: ["MATCH \u2192 Position", "INDEX \u2192 Value at position", "0 in MATCH \u2192 Exact match"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build INDEX with MATCH",
      prompt: "Build INDEX with MATCH",
      tokens: ["MATCH", "(", "B2:B10", ",", ",", ",", "0", "A2:A10", ")", "E2", ")", "(", "=INDEX"],
      shuffled: ["MATCH", "(", "B2:B10", ",", ",", ",", "0", "A2:A10", ")", "E2", ")", "(", "=INDEX"],
      expected: ["=INDEX", "(", "B2:B10", ",", "MATCH", "(", "E2", ",", "A2:A10", ",", "0", ")", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Find a price using INDEX and MATCH",
      prompt: "Find a price using INDEX and MATCH",
      tokens: ["MATCH Its Position", "Verify Result", "INDEX the Price", "Find Product Code"],
      shuffled: ["MATCH Its Position", "Verify Result", "INDEX the Price", "Find Product Code"],
      expected: ["Find Product Code", "MATCH Its Position", "INDEX the Price", "Verify Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "MATCH",
      meaning: "Position"
    },
    {
      id: 2,
      snippet: "INDEX",
      meaning: "Value at position"
    },
    {
      id: 3,
      snippet: "0 in MATCH",
      meaning: "Exact match"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Look Up a Price",
      scenario: "Codes are in A2:A10, prices in B2:B10, and search code in E2.",
      prompt: "Which formula finds the matching price?",
      expectedResponse: "=INDEX(B2:B10,MATCH(E2,A2:A10,0)) — Correct! MATCH finds the row position and INDEX returns the price."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does MATCH return?",
      sampleAnswer: "The relative position of a matching item. MATCH locates an item’s position in a range."
    },
    {
      id: 2,
      question: "What does INDEX return?",
      sampleAnswer: "A value at a specified row or column position. INDEX retrieves data from a range."
    },
    {
      id: 3,
      question: "What does MATCH(E2,A2:A10,0) use 0 for?",
      sampleAnswer: "Exact match. Match type 0 requests an exact match."
    },
    {
      id: 4,
      question: "Why combine INDEX and MATCH?",
      sampleAnswer: "To find a position and return a related value. MATCH locates the row; INDEX returns the result."
    }
    ]
  },
  '14.9': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 14,
    moduleName: 'Module 14: Text, Date and Lookup Functions',
    topicKey: '14.9',
    id: 59,
    topicTitle: 'Choosing and Troubleshooting Lookup Functions',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What can cause #N/A in an exact-match lookup?",
      options: [
        { key: "A", text: "Hidden spaces or inconsistent data types" },
        { key: "B", text: "The lookup value is not found" },
        { key: "C", text: "XLOOKUP" },
        { key: "D", text: "The column index number" }
      ],
      correct: 1,
      explanation: "Sahi jawab: The lookup value is not found. #N/A often means there is no matching value. Isliye ye option correct hai.",
      hint: "Focus on The lookup value is not found to solve this problem."
    },
    {
      id: 2,
      question: "Which function is usually flexible for exact lookups in modern Excel?",
      options: [
        { key: "A", text: "XLOOKUP" },
        { key: "B", text: "The column index number" },
        { key: "C", text: "The lookup value is not found" },
        { key: "D", text: "Hidden spaces or inconsistent data types" }
      ],
      correct: 0,
      explanation: "Sahi jawab: XLOOKUP. XLOOKUP supports separate search and return ranges. Isliye ye option correct hai.",
      hint: "Focus on XLOOKUP to solve this problem."
    },
    {
      id: 3,
      question: "Why might a lookup fail even when text looks identical?",
      options: [
        { key: "A", text: "XLOOKUP" },
        { key: "B", text: "Hidden spaces or inconsistent data types" },
        { key: "C", text: "The lookup value is not found" },
        { key: "D", text: "The column index number" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Hidden spaces or inconsistent data types. Whitespace and text-versus-number differences can prevent matching. Isliye ye option correct hai.",
      hint: "Focus on Hidden spaces or inconsistent data types to solve this problem."
    },
    {
      id: 4,
      question: "What should you check when VLOOKUP returns the wrong field?",
      options: [
        { key: "A", text: "Hidden spaces or inconsistent data types" },
        { key: "B", text: "The lookup value is not found" },
        { key: "C", text: "The column index number" },
        { key: "D", text: "XLOOKUP" }
      ],
      correct: 2,
      explanation: "Sahi jawab: The column index number. An incorrect return-column index can select the wrong data. Isliye ye option correct hai.",
      hint: "Focus on The column index number to solve this problem."
    },
    {
      id: 5,
      question: "What should you do before replacing a lookup error with blank text?",
      options: [
        { key: "A", text: "Hidden spaces or inconsistent data types" },
        { key: "B", text: "XLOOKUP" },
        { key: "C", text: "Verify the source data and matching rule" },
        { key: "D", text: "The lookup value is not found" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Verify the source data and matching rule. Hiding errors can conceal missing or incorrect records. Isliye ye option correct hai.",
      hint: "Focus on Verify the source data and matching rule to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Troubleshoot a failed lookup",
      prompt: "Troubleshoot a failed lookup",
      tokens: ["Retest", "Check Match Mode", "Check Search Value", "Check Data Types and Spaces"],
      shuffled: ["Retest", "Check Match Mode", "Check Search Value", "Check Data Types and Spaces"],
      expected: ["Check Search Value", "Check Data Types and Spaces", "Check Match Mode", "Retest"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match lookup problems",
      prompt: "Match lookup problems",
      tokens: ["Extra spaces \u2192 Text mismatch", "Wrong field \u2192 Incorrect return column", "N/A \u2192 No match found"],
      shuffled: ["Extra spaces \u2192 Text mismatch", "Wrong field \u2192 Incorrect return column", "N/A \u2192 No match found"],
      expected: ["N/A \u2192 No match found", "Wrong field \u2192 Incorrect return column", "Extra spaces \u2192 Text mismatch"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Choose a lookup approach",
      prompt: "Choose a lookup approach",
      tokens: ["Test Matches", "Check Excel Version", "Identify Lookup Direction", "Choose Function"],
      shuffled: ["Test Matches", "Check Excel Version", "Identify Lookup Direction", "Choose Function"],
      expected: ["Identify Lookup Direction", "Check Excel Version", "Choose Function", "Test Matches"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "N/A",
      meaning: "No match found"
    },
    {
      id: 2,
      snippet: "Wrong field",
      meaning: "Incorrect return column"
    },
    {
      id: 3,
      snippet: "Extra spaces",
      meaning: "Text mismatch"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Fix a Missing Product Lookup",
      scenario: "A product lookup returns #N/A even though the code looks correct.",
      prompt: "What should the employee check first?",
      expectedResponse: "Whether the code and source values match exactly — Correct! Check the source code, spaces, and data types before hiding errors."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What can cause #N/A in an exact-match lookup?",
      sampleAnswer: "The lookup value is not found. #N/A often means there is no matching value."
    },
    {
      id: 2,
      question: "Which function is usually flexible for exact lookups in modern Excel?",
      sampleAnswer: "XLOOKUP. XLOOKUP supports separate search and return ranges."
    },
    {
      id: 3,
      question: "Why might a lookup fail even when text looks identical?",
      sampleAnswer: "Hidden spaces or inconsistent data types. Whitespace and text-versus-number differences can prevent matching."
    },
    {
      id: 4,
      question: "What should you check when VLOOKUP returns the wrong field?",
      sampleAnswer: "The column index number. An incorrect return-column index can select the wrong data."
    }
    ]
  },
  '15.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.1',
    id: 60,
    topicTitle: 'Conditional Formatting',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Conditional Formatting?",
      options: [
        { key: "A", text: "Formatting that changes based on rules" },
        { key: "B", text: "Greater Than rule" },
        { key: "C", text: "Relative low and high values" },
        { key: "D", text: "Bars inside cells showing relative magnitude" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Formatting that changes based on rules. It visually highlights cells meeting conditions. Isliye ye option correct hai.",
      hint: "Focus on Formatting that changes based on rules to solve this problem."
    },
    {
      id: 2,
      question: "Which rule highlights sales above a target?",
      options: [
        { key: "A", text: "Formatting that changes based on rules" },
        { key: "B", text: "Relative low and high values" },
        { key: "C", text: "Greater Than rule" },
        { key: "D", text: "Bars inside cells showing relative magnitude" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Greater Than rule. A Greater Than rule can highlight values above a threshold. Isliye ye option correct hai.",
      hint: "Focus on Greater Than rule to solve this problem."
    },
    {
      id: 3,
      question: "What does a color scale help show?",
      options: [
        { key: "A", text: "Formatting that changes based on rules" },
        { key: "B", text: "Relative low and high values" },
        { key: "C", text: "Greater Than rule" },
        { key: "D", text: "Bars inside cells showing relative magnitude" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Relative low and high values. Color scales show differences across numeric values. Isliye ye option correct hai.",
      hint: "Focus on Relative low and high values to solve this problem."
    },
    {
      id: 4,
      question: "What are data bars in Conditional Formatting?",
      options: [
        { key: "A", text: "Relative low and high values" },
        { key: "B", text: "Greater Than rule" },
        { key: "C", text: "Bars inside cells showing relative magnitude" },
        { key: "D", text: "Formatting that changes based on rules" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Bars inside cells showing relative magnitude. Longer bars represent larger values within the formatted range. Isliye ye option correct hai.",
      hint: "Focus on Bars inside cells showing relative magnitude to solve this problem."
    },
    {
      id: 5,
      question: "Does Conditional Formatting normally change the underlying number?",
      options: [
        { key: "A", text: "No, it changes appearance" },
        { key: "B", text: "Formatting that changes based on rules" },
        { key: "C", text: "Relative low and high values" },
        { key: "D", text: "Greater Than rule" }
      ],
      correct: 0,
      explanation: "Sahi jawab: No, it changes appearance. Formatting affects display, not the stored value. Isliye ye option correct hai.",
      hint: "Focus on No, it changes appearance to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Highlight low sales",
      prompt: "Highlight low sales",
      tokens: ["Open Conditional Formatting", "Enter Threshold", "Select Sales Range", "Choose Less Than"],
      shuffled: ["Open Conditional Formatting", "Enter Threshold", "Select Sales Range", "Choose Less Than"],
      expected: ["Select Sales Range", "Open Conditional Formatting", "Choose Less Than", "Enter Threshold"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match formatting rules",
      prompt: "Match formatting rules",
      tokens: ["Greater Than \u2192 Above threshold", "Color Scale \u2192 Value intensity", "Data Bars \u2192 Relative size"],
      shuffled: ["Greater Than \u2192 Above threshold", "Color Scale \u2192 Value intensity", "Data Bars \u2192 Relative size"],
      expected: ["Data Bars \u2192 Relative size", "Color Scale \u2192 Value intensity", "Greater Than \u2192 Above threshold"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Review a conditional rule",
      prompt: "Review a conditional rule",
      tokens: ["Adjust Threshold", "Create Rule", "Inspect Highlighted Cells"],
      shuffled: ["Adjust Threshold", "Create Rule", "Inspect Highlighted Cells"],
      expected: ["Create Rule", "Inspect Highlighted Cells", "Adjust Threshold"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Data Bars",
      meaning: "Relative size"
    },
    {
      id: 2,
      snippet: "Color Scale",
      meaning: "Value intensity"
    },
    {
      id: 3,
      snippet: "Greater Than",
      meaning: "Above threshold"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Highlight Low Attendance",
      scenario: "Attendance percentages are in B2:B20. The manager wants values below 75% highlighted.",
      prompt: "Which feature should be used?",
      expectedResponse: "Conditional Formatting with Less Than 75% — Correct! Conditional Formatting highlights cells meeting a rule."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Conditional Formatting?",
      sampleAnswer: "Formatting that changes based on rules. It visually highlights cells meeting conditions."
    },
    {
      id: 2,
      question: "Which rule highlights sales above a target?",
      sampleAnswer: "Greater Than rule. A Greater Than rule can highlight values above a threshold."
    },
    {
      id: 3,
      question: "What does a color scale help show?",
      sampleAnswer: "Relative low and high values. Color scales show differences across numeric values."
    },
    {
      id: 4,
      question: "What are data bars in Conditional Formatting?",
      sampleAnswer: "Bars inside cells showing relative magnitude. Longer bars represent larger values within the formatted range."
    }
    ]
  },
  '15.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.2',
    id: 61,
    topicTitle: 'Create and Format PivotTables',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a PivotTable used for?",
      options: [
        { key: "A", text: "Sales are summarized using an aggregation" },
        { key: "B", text: "Insert tab" },
        { key: "C", text: "Regions become row categories" },
        { key: "D", text: "Summarizing and analyzing tabular data" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Summarizing and analyzing tabular data. PivotTables group and aggregate records quickly. Isliye ye option correct hai.",
      hint: "Focus on Summarizing and analyzing tabular data to solve this problem."
    },
    {
      id: 2,
      question: "Where are PivotTables commonly inserted from?",
      options: [
        { key: "A", text: "Summarizing and analyzing tabular data" },
        { key: "B", text: "Regions become row categories" },
        { key: "C", text: "Sales are summarized using an aggregation" },
        { key: "D", text: "Insert tab" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Insert tab. Excel offers PivotTable creation from the Insert tab. Isliye ye option correct hai.",
      hint: "Focus on Insert tab to solve this problem."
    },
    {
      id: 3,
      question: "What happens when you place Region in PivotTable Rows?",
      options: [
        { key: "A", text: "Insert tab" },
        { key: "B", text: "Summarizing and analyzing tabular data" },
        { key: "C", text: "Sales are summarized using an aggregation" },
        { key: "D", text: "Regions become row categories" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Regions become row categories. Row fields group records by category. Isliye ye option correct hai.",
      hint: "Focus on Regions become row categories to solve this problem."
    },
    {
      id: 4,
      question: "What happens when you place Sales in Values?",
      options: [
        { key: "A", text: "Insert tab" },
        { key: "B", text: "Summarizing and analyzing tabular data" },
        { key: "C", text: "Regions become row categories" },
        { key: "D", text: "Sales are summarized using an aggregation" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Sales are summarized using an aggregation. Numeric values are often summed by default. Isliye ye option correct hai.",
      hint: "Focus on Sales are summarized using an aggregation to solve this problem."
    },
    {
      id: 5,
      question: "Why should source data have clear headers?",
      options: [
        { key: "A", text: "PivotTable fields use column headers" },
        { key: "B", text: "Summarizing and analyzing tabular data" },
        { key: "C", text: "Insert tab" },
        { key: "D", text: "Regions become row categories" }
      ],
      correct: 0,
      explanation: "Sahi jawab: PivotTable fields use column headers. Clean headers make PivotTable fields understandable. Isliye ye option correct hai.",
      hint: "Focus on PivotTable fields use column headers to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Create a sales PivotTable",
      prompt: "Create a sales PivotTable",
      tokens: ["Select Data", "Insert PivotTable", "Put Sales in Values", "Put Region in Rows"],
      shuffled: ["Select Data", "Insert PivotTable", "Put Sales in Values", "Put Region in Rows"],
      expected: ["Select Data", "Insert PivotTable", "Put Region in Rows", "Put Sales in Values"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match PivotTable areas",
      prompt: "Match PivotTable areas",
      tokens: ["Values \u2192 Aggregated numbers", "Columns \u2192 Categories across columns", "Rows \u2192 Categories down rows"],
      shuffled: ["Values \u2192 Aggregated numbers", "Columns \u2192 Categories across columns", "Rows \u2192 Categories down rows"],
      expected: ["Rows \u2192 Categories down rows", "Columns \u2192 Categories across columns", "Values \u2192 Aggregated numbers"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Format a PivotTable",
      prompt: "Format a PivotTable",
      tokens: ["Review Totals", "Set Number Format", "Choose Style", "Create PivotTable"],
      shuffled: ["Review Totals", "Set Number Format", "Choose Style", "Create PivotTable"],
      expected: ["Create PivotTable", "Set Number Format", "Choose Style", "Review Totals"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Rows",
      meaning: "Categories down rows"
    },
    {
      id: 2,
      snippet: "Columns",
      meaning: "Categories across columns"
    },
    {
      id: 3,
      snippet: "Values",
      meaning: "Aggregated numbers"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Summarize Sales by Region",
      scenario: "A sales table contains Region and Sales columns.",
      prompt: "What is the easiest Excel tool to summarize total sales by Region?",
      expectedResponse: "PivotTable — Correct! A PivotTable can group Regions and sum Sales."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a PivotTable used for?",
      sampleAnswer: "Summarizing and analyzing tabular data. PivotTables group and aggregate records quickly."
    },
    {
      id: 2,
      question: "Where are PivotTables commonly inserted from?",
      sampleAnswer: "Insert tab. Excel offers PivotTable creation from the Insert tab."
    },
    {
      id: 3,
      question: "What happens when you place Region in PivotTable Rows?",
      sampleAnswer: "Regions become row categories. Row fields group records by category."
    },
    {
      id: 4,
      question: "What happens when you place Sales in Values?",
      sampleAnswer: "Sales are summarized using an aggregation. Numeric values are often summed by default."
    }
    ]
  },
  '15.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.3',
    id: 62,
    topicTitle: 'Group and Summarize Data',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does grouping dates by month in a PivotTable help show?",
      options: [
        { key: "A", text: "Mean numeric value" },
        { key: "B", text: "Number of records or values" },
        { key: "C", text: "Monthly summaries" },
        { key: "D", text: "Total numeric value" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Monthly summaries. Grouping can roll daily dates into months. Isliye ye option correct hai.",
      hint: "Focus on Monthly summaries to solve this problem."
    },
    {
      id: 2,
      question: "What does Sum summarize?",
      options: [
        { key: "A", text: "Mean numeric value" },
        { key: "B", text: "Number of records or values" },
        { key: "C", text: "Monthly summaries" },
        { key: "D", text: "Total numeric value" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Total numeric value. Sum adds the values in a group. Isliye ye option correct hai.",
      hint: "Focus on Total numeric value to solve this problem."
    },
    {
      id: 3,
      question: "What does Count summarize?",
      options: [
        { key: "A", text: "Mean numeric value" },
        { key: "B", text: "Number of records or values" },
        { key: "C", text: "Total numeric value" },
        { key: "D", text: "Monthly summaries" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Number of records or values. Count measures how many entries are in a group. Isliye ye option correct hai.",
      hint: "Focus on Number of records or values to solve this problem."
    },
    {
      id: 4,
      question: "What does Average summarize?",
      options: [
        { key: "A", text: "Total numeric value" },
        { key: "B", text: "Number of records or values" },
        { key: "C", text: "Mean numeric value" },
        { key: "D", text: "Monthly summaries" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Mean numeric value. Average is the total divided by the count of numeric values. Isliye ye option correct hai.",
      hint: "Focus on Mean numeric value to solve this problem."
    },
    {
      id: 5,
      question: "Why group transactions by category?",
      options: [
        { key: "A", text: "To compare totals across categories" },
        { key: "B", text: "Number of records or values" },
        { key: "C", text: "Monthly summaries" },
        { key: "D", text: "Total numeric value" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To compare totals across categories. Grouping makes category-level patterns visible. Isliye ye option correct hai.",
      hint: "Focus on To compare totals across categories to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Summarize sales by month",
      prompt: "Summarize sales by month",
      tokens: ["Sum Sales", "Create PivotTable", "Group by Months", "Add Date Field"],
      shuffled: ["Sum Sales", "Create PivotTable", "Group by Months", "Add Date Field"],
      expected: ["Create PivotTable", "Add Date Field", "Group by Months", "Sum Sales"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match summary types",
      prompt: "Match summary types",
      tokens: ["Average \u2192 Mean", "Count \u2192 Number of entries", "Sum \u2192 Total"],
      shuffled: ["Average \u2192 Mean", "Count \u2192 Number of entries", "Sum \u2192 Total"],
      expected: ["Sum \u2192 Total", "Count \u2192 Number of entries", "Average \u2192 Mean"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Review category totals",
      prompt: "Review category totals",
      tokens: ["Add Sales Values", "Group by Category", "Check Grand Total"],
      shuffled: ["Add Sales Values", "Group by Category", "Check Grand Total"],
      expected: ["Group by Category", "Add Sales Values", "Check Grand Total"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Sum",
      meaning: "Total"
    },
    {
      id: 2,
      snippet: "Count",
      meaning: "Number of entries"
    },
    {
      id: 3,
      snippet: "Average",
      meaning: "Mean"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: See Monthly Sales",
      scenario: "A manager has daily sales records and wants one total for each month.",
      prompt: "Which action is most suitable?",
      expectedResponse: "Group dates by Month in a PivotTable — Correct! Grouping dates helps summarize sales by month."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does grouping dates by month in a PivotTable help show?",
      sampleAnswer: "Monthly summaries. Grouping can roll daily dates into months."
    },
    {
      id: 2,
      question: "What does Sum summarize?",
      sampleAnswer: "Total numeric value. Sum adds the values in a group."
    },
    {
      id: 3,
      question: "What does Count summarize?",
      sampleAnswer: "Number of records or values. Count measures how many entries are in a group."
    },
    {
      id: 4,
      question: "What does Average summarize?",
      sampleAnswer: "Mean numeric value. Average is the total divided by the count of numeric values."
    }
    ]
  },
  '15.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.4',
    id: 63,
    topicTitle: 'PivotCharts',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a PivotChart?",
      options: [
        { key: "A", text: "To visualize grouped summaries" },
        { key: "B", text: "The PivotChart updates to reflect the filter" },
        { key: "C", text: "Column chart" },
        { key: "D", text: "A chart linked to PivotTable-style summarized data" }
      ],
      correct: 3,
      explanation: "Sahi jawab: A chart linked to PivotTable-style summarized data. PivotCharts visualize PivotTable summaries. Isliye ye option correct hai.",
      hint: "Focus on A chart linked to PivotTable-style summarized data to solve this problem."
    },
    {
      id: 2,
      question: "What happens when the connected PivotTable is filtered?",
      options: [
        { key: "A", text: "To visualize grouped summaries" },
        { key: "B", text: "The PivotChart updates to reflect the filter" },
        { key: "C", text: "A chart linked to PivotTable-style summarized data" },
        { key: "D", text: "Column chart" }
      ],
      correct: 1,
      explanation: "Sahi jawab: The PivotChart updates to reflect the filter. PivotCharts respond to PivotTable filtering. Isliye ye option correct hai.",
      hint: "Focus on The PivotChart updates to reflect the filter to solve this problem."
    },
    {
      id: 3,
      question: "Which chart type is often useful for category comparisons?",
      options: [
        { key: "A", text: "Column chart" },
        { key: "B", text: "To visualize grouped summaries" },
        { key: "C", text: "The PivotChart updates to reflect the filter" },
        { key: "D", text: "A chart linked to PivotTable-style summarized data" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Column chart. Columns compare values across categories. Isliye ye option correct hai.",
      hint: "Focus on Column chart to solve this problem."
    },
    {
      id: 4,
      question: "Why use a PivotChart in a report?",
      options: [
        { key: "A", text: "To visualize grouped summaries" },
        { key: "B", text: "A chart linked to PivotTable-style summarized data" },
        { key: "C", text: "The PivotChart updates to reflect the filter" },
        { key: "D", text: "Column chart" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To visualize grouped summaries. Charts make aggregated data easier to interpret. Isliye ye option correct hai.",
      hint: "Focus on To visualize grouped summaries to solve this problem."
    },
    {
      id: 5,
      question: "What should you check before presenting a PivotChart?",
      options: [
        { key: "A", text: "That labels and summaries are accurate" },
        { key: "B", text: "Column chart" },
        { key: "C", text: "The PivotChart updates to reflect the filter" },
        { key: "D", text: "A chart linked to PivotTable-style summarized data" }
      ],
      correct: 0,
      explanation: "Sahi jawab: That labels and summaries are accurate. Correct labels and totals support clear reporting. Isliye ye option correct hai.",
      hint: "Focus on That labels and summaries are accurate to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Create a PivotChart",
      prompt: "Create a PivotChart",
      tokens: ["Select PivotTable", "Create PivotTable", "Insert PivotChart", "Choose Chart Type"],
      shuffled: ["Select PivotTable", "Create PivotTable", "Insert PivotChart", "Choose Chart Type"],
      expected: ["Create PivotTable", "Select PivotTable", "Insert PivotChart", "Choose Chart Type"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match PivotChart concepts",
      prompt: "Match PivotChart concepts",
      tokens: ["Filter \u2192 Restrict displayed groups", "PivotChart \u2192 Visual summary", "PivotTable \u2192 Summary data"],
      shuffled: ["Filter \u2192 Restrict displayed groups", "PivotChart \u2192 Visual summary", "PivotTable \u2192 Summary data"],
      expected: ["PivotTable \u2192 Summary data", "PivotChart \u2192 Visual summary", "Filter \u2192 Restrict displayed groups"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Update a PivotChart view",
      prompt: "Update a PivotChart view",
      tokens: ["Review Chart", "Clear Filter", "Apply Pivot Filter"],
      shuffled: ["Review Chart", "Clear Filter", "Apply Pivot Filter"],
      expected: ["Apply Pivot Filter", "Review Chart", "Clear Filter"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "PivotTable",
      meaning: "Summary data"
    },
    {
      id: 2,
      snippet: "PivotChart",
      meaning: "Visual summary"
    },
    {
      id: 3,
      snippet: "Filter",
      meaning: "Restrict displayed groups"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Show Regional Performance",
      scenario: "A PivotTable shows total Sales for North, South, and East.",
      prompt: "What should the analyst insert to visualize the comparison?",
      expectedResponse: "PivotChart — Correct! A PivotChart visualizes the grouped sales summary."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a PivotChart?",
      sampleAnswer: "A chart linked to PivotTable-style summarized data. PivotCharts visualize PivotTable summaries."
    },
    {
      id: 2,
      question: "What happens when the connected PivotTable is filtered?",
      sampleAnswer: "The PivotChart updates to reflect the filter. PivotCharts respond to PivotTable filtering."
    },
    {
      id: 3,
      question: "Which chart type is often useful for category comparisons?",
      sampleAnswer: "Column chart. Columns compare values across categories."
    },
    {
      id: 4,
      question: "Why use a PivotChart in a report?",
      sampleAnswer: "To visualize grouped summaries. Charts make aggregated data easier to interpret."
    }
    ]
  },
  '15.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.5',
    id: 64,
    topicTitle: 'Slicers and Report Filters',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a slicer?",
      options: [
        { key: "A", text: "A visual control for filtering data" },
        { key: "B", text: "Filters the PivotTable by a selected field" },
        { key: "C", text: "Users can filter reports with clicks" },
        { key: "D", text: "Yes, through Report Connections" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A visual control for filtering data. Slicers provide clickable filter buttons. Isliye ye option correct hai.",
      hint: "Focus on A visual control for filtering data to solve this problem."
    },
    {
      id: 2,
      question: "What does a PivotTable report filter do?",
      options: [
        { key: "A", text: "Filters the PivotTable by a selected field" },
        { key: "B", text: "Users can filter reports with clicks" },
        { key: "C", text: "A visual control for filtering data" },
        { key: "D", text: "Yes, through Report Connections" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Filters the PivotTable by a selected field. Report filters restrict the displayed summary. Isliye ye option correct hai.",
      hint: "Focus on Filters the PivotTable by a selected field to solve this problem."
    },
    {
      id: 3,
      question: "Why are slicers useful on dashboards?",
      options: [
        { key: "A", text: "Yes, through Report Connections" },
        { key: "B", text: "Users can filter reports with clicks" },
        { key: "C", text: "A visual control for filtering data" },
        { key: "D", text: "Filters the PivotTable by a selected field" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Users can filter reports with clicks. Slicers make filtering accessible and visible. Isliye ye option correct hai.",
      hint: "Focus on Users can filter reports with clicks to solve this problem."
    },
    {
      id: 4,
      question: "Can one slicer connect to multiple compatible PivotTables?",
      options: [
        { key: "A", text: "Users can filter reports with clicks" },
        { key: "B", text: "Yes, through Report Connections" },
        { key: "C", text: "Filters the PivotTable by a selected field" },
        { key: "D", text: "A visual control for filtering data" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Yes, through Report Connections. Compatible PivotTables can share a slicer. Isliye ye option correct hai.",
      hint: "Focus on Yes, through Report Connections to solve this problem."
    },
    {
      id: 5,
      question: "How can you restore all slicer selections?",
      options: [
        { key: "A", text: "A visual control for filtering data" },
        { key: "B", text: "Users can filter reports with clicks" },
        { key: "C", text: "Filters the PivotTable by a selected field" },
        { key: "D", text: "Use the Clear Filter control" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Use the Clear Filter control. Clearing the slicer filter restores the unfiltered view. Isliye ye option correct hai.",
      hint: "Focus on Use the Clear Filter control to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Add a slicer for Region",
      prompt: "Add a slicer for Region",
      tokens: ["Select PivotTable", "Click a Region", "Choose Region", "Insert Slicer"],
      shuffled: ["Select PivotTable", "Click a Region", "Choose Region", "Insert Slicer"],
      expected: ["Select PivotTable", "Insert Slicer", "Choose Region", "Click a Region"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match filtering controls",
      prompt: "Match filtering controls",
      tokens: ["Clear Filter \u2192 Show all", "Report Filter \u2192 Pivot field filter", "Slicer \u2192 Clickable buttons"],
      shuffled: ["Clear Filter \u2192 Show all", "Report Filter \u2192 Pivot field filter", "Slicer \u2192 Clickable buttons"],
      expected: ["Slicer \u2192 Clickable buttons", "Report Filter \u2192 Pivot field filter", "Clear Filter \u2192 Show all"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Compare two regions using slicer",
      prompt: "Compare two regions using slicer",
      tokens: ["Compare", "Review Totals", "Select First Region", "Select Second Region"],
      shuffled: ["Compare", "Review Totals", "Select First Region", "Select Second Region"],
      expected: ["Select First Region", "Review Totals", "Select Second Region", "Compare"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Slicer",
      meaning: "Clickable buttons"
    },
    {
      id: 2,
      snippet: "Report Filter",
      meaning: "Pivot field filter"
    },
    {
      id: 3,
      snippet: "Clear Filter",
      meaning: "Show all"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Filter a Sales Dashboard",
      scenario: "A manager wants to click East or West to see regional sales instantly.",
      prompt: "Which Excel feature provides clickable region buttons?",
      expectedResponse: "Slicer — Correct! A slicer provides easy visual filtering."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a slicer?",
      sampleAnswer: "A visual control for filtering data. Slicers provide clickable filter buttons."
    },
    {
      id: 2,
      question: "What does a PivotTable report filter do?",
      sampleAnswer: "Filters the PivotTable by a selected field. Report filters restrict the displayed summary."
    },
    {
      id: 3,
      question: "Why are slicers useful on dashboards?",
      sampleAnswer: "Users can filter reports with clicks. Slicers make filtering accessible and visible."
    },
    {
      id: 4,
      question: "Can one slicer connect to multiple compatible PivotTables?",
      sampleAnswer: "Yes, through Report Connections. Compatible PivotTables can share a slicer."
    }
    ]
  },
  '15.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.6',
    id: 65,
    topicTitle: 'Build a KPI Summary Report',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does KPI stand for?",
      options: [
        { key: "A", text: "Number of Orders" },
        { key: "B", text: "Key Performance Indicator" },
        { key: "C", text: "To compare performance with the goal" },
        { key: "D", text: "Total Revenue" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Key Performance Indicator. A KPI tracks a measure important to business goals. Isliye ye option correct hai.",
      hint: "Focus on Key Performance Indicator to solve this problem."
    },
    {
      id: 2,
      question: "Which is an example of a sales KPI?",
      options: [
        { key: "A", text: "To compare performance with the goal" },
        { key: "B", text: "Number of Orders" },
        { key: "C", text: "Total Revenue" },
        { key: "D", text: "Key Performance Indicator" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Total Revenue. Revenue measures sales performance. Isliye ye option correct hai.",
      hint: "Focus on Total Revenue to solve this problem."
    },
    {
      id: 3,
      question: "Why show a KPI target beside its actual value?",
      options: [
        { key: "A", text: "To compare performance with the goal" },
        { key: "B", text: "Number of Orders" },
        { key: "C", text: "Key Performance Indicator" },
        { key: "D", text: "Total Revenue" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To compare performance with the goal. Target comparisons help identify gaps. Isliye ye option correct hai.",
      hint: "Focus on To compare performance with the goal to solve this problem."
    },
    {
      id: 4,
      question: "What is a useful KPI for order volume?",
      options: [
        { key: "A", text: "Total Revenue" },
        { key: "B", text: "Key Performance Indicator" },
        { key: "C", text: "To compare performance with the goal" },
        { key: "D", text: "Number of Orders" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Number of Orders. Order count measures transaction volume. Isliye ye option correct hai.",
      hint: "Focus on Number of Orders to solve this problem."
    },
    {
      id: 5,
      question: "What should a KPI report display clearly?",
      options: [
        { key: "A", text: "Key Performance Indicator" },
        { key: "B", text: "Metric name, value, and relevant context" },
        { key: "C", text: "To compare performance with the goal" },
        { key: "D", text: "Total Revenue" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Metric name, value, and relevant context. A KPI needs a clear label and interpretable value. Isliye ye option correct hai.",
      hint: "Focus on Metric name, value, and relevant context to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Build a simple KPI report",
      prompt: "Build a simple KPI report",
      tokens: ["Calculate Values", "Choose KPI Metrics", "Add Labels", "Compare with Targets"],
      shuffled: ["Calculate Values", "Choose KPI Metrics", "Add Labels", "Compare with Targets"],
      expected: ["Choose KPI Metrics", "Calculate Values", "Add Labels", "Compare with Targets"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match KPIs",
      prompt: "Match KPIs",
      tokens: ["Target Gap \u2192 Actual versus goal", "Orders \u2192 Transaction count", "Revenue \u2192 Sales amount"],
      shuffled: ["Target Gap \u2192 Actual versus goal", "Orders \u2192 Transaction count", "Revenue \u2192 Sales amount"],
      expected: ["Revenue \u2192 Sales amount", "Orders \u2192 Transaction count", "Target Gap \u2192 Actual versus goal"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Validate a KPI card",
      prompt: "Validate a KPI card",
      tokens: ["Format Number", "Check Source Data", "Verify Formula", "Review Label"],
      shuffled: ["Format Number", "Check Source Data", "Verify Formula", "Review Label"],
      expected: ["Check Source Data", "Verify Formula", "Format Number", "Review Label"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Revenue",
      meaning: "Sales amount"
    },
    {
      id: 2,
      snippet: "Orders",
      meaning: "Transaction count"
    },
    {
      id: 3,
      snippet: "Target Gap",
      meaning: "Actual versus goal"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Show Total Revenue",
      scenario: "A manager asks for one large number showing total sales amount.",
      prompt: "Which KPI should appear on the report?",
      expectedResponse: "Total Revenue — Correct! Total Revenue summarizes the sales amount."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does KPI stand for?",
      sampleAnswer: "Key Performance Indicator. A KPI tracks a measure important to business goals."
    },
    {
      id: 2,
      question: "Which is an example of a sales KPI?",
      sampleAnswer: "Total Revenue. Revenue measures sales performance."
    },
    {
      id: 3,
      question: "Why show a KPI target beside its actual value?",
      sampleAnswer: "To compare performance with the goal. Target comparisons help identify gaps."
    },
    {
      id: 4,
      question: "What is a useful KPI for order volume?",
      sampleAnswer: "Number of Orders. Order count measures transaction volume."
    }
    ]
  },
  '15.7': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.7',
    id: 66,
    topicTitle: 'Excel Charts: Column, Bar, Line and Pie',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which chart is commonly suitable for monthly sales trends?",
      options: [
        { key: "A", text: "Column chart" },
        { key: "B", text: "Pie chart" },
        { key: "C", text: "Line chart" },
        { key: "D", text: "Bar chart" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Line chart. A line chart shows change across ordered time points. Isliye ye option correct hai.",
      hint: "Focus on Line chart to solve this problem."
    },
    {
      id: 2,
      question: "Which chart is suitable for comparing product categories?",
      options: [
        { key: "A", text: "Column chart" },
        { key: "B", text: "Line chart" },
        { key: "C", text: "Pie chart" },
        { key: "D", text: "Bar chart" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Column chart. Columns make category differences easy to compare. Isliye ye option correct hai.",
      hint: "Focus on Column chart to solve this problem."
    },
    {
      id: 3,
      question: "Which chart is useful for comparing categories with long labels?",
      options: [
        { key: "A", text: "Bar chart" },
        { key: "B", text: "Column chart" },
        { key: "C", text: "Line chart" },
        { key: "D", text: "Pie chart" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Bar chart. Horizontal bars can fit long category labels. Isliye ye option correct hai.",
      hint: "Focus on Bar chart to solve this problem."
    },
    {
      id: 4,
      question: "Which chart is suited to a few parts of one whole?",
      options: [
        { key: "A", text: "Pie chart" },
        { key: "B", text: "Line chart" },
        { key: "C", text: "Bar chart" },
        { key: "D", text: "Column chart" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Pie chart. A pie chart can show proportions that sum to a whole. Isliye ye option correct hai.",
      hint: "Focus on Pie chart to solve this problem."
    },
    {
      id: 5,
      question: "What should a chart title communicate?",
      options: [
        { key: "A", text: "What the chart shows" },
        { key: "B", text: "Line chart" },
        { key: "C", text: "Column chart" },
        { key: "D", text: "Bar chart" }
      ],
      correct: 0,
      explanation: "Sahi jawab: What the chart shows. A clear title explains the measure and context. Isliye ye option correct hai.",
      hint: "Focus on What the chart shows to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match charts to tasks",
      prompt: "Match charts to tasks",
      tokens: ["Pie \u2192 Parts of a whole", "Column \u2192 Category comparison", "Line \u2192 Trend over time"],
      shuffled: ["Pie \u2192 Parts of a whole", "Column \u2192 Category comparison", "Line \u2192 Trend over time"],
      expected: ["Line \u2192 Trend over time", "Column \u2192 Category comparison", "Pie \u2192 Parts of a whole"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Create a monthly sales chart",
      prompt: "Create a monthly sales chart",
      tokens: ["Check Axis Labels", "Insert Line Chart", "Add Title", "Select Month and Sales"],
      shuffled: ["Check Axis Labels", "Insert Line Chart", "Add Title", "Select Month and Sales"],
      expected: ["Select Month and Sales", "Insert Line Chart", "Add Title", "Check Axis Labels"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Match chart elements",
      prompt: "Match chart elements",
      tokens: ["Legend \u2192 Series names", "Axis \u2192 Measurement scale", "Title \u2192 Subject"],
      shuffled: ["Legend \u2192 Series names", "Axis \u2192 Measurement scale", "Title \u2192 Subject"],
      expected: ["Title \u2192 Subject", "Axis \u2192 Measurement scale", "Legend \u2192 Series names"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Line",
      meaning: "Trend over time"
    },
    {
      id: 2,
      snippet: "Column",
      meaning: "Category comparison"
    },
    {
      id: 3,
      snippet: "Pie",
      meaning: "Parts of a whole"
    },
    {
      id: 1,
      snippet: "Title",
      meaning: "Subject"
    },
    {
      id: 2,
      snippet: "Axis",
      meaning: "Measurement scale"
    },
    {
      id: 3,
      snippet: "Legend",
      meaning: "Series names"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Show Monthly Growth",
      scenario: "A company wants to see whether revenue increased or decreased over six months.",
      prompt: "Which chart is most suitable?",
      expectedResponse: "Line Chart — Correct! A line chart makes month-to-month trends easy to see."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which chart is commonly suitable for monthly sales trends?",
      sampleAnswer: "Line chart. A line chart shows change across ordered time points."
    },
    {
      id: 2,
      question: "Which chart is suitable for comparing product categories?",
      sampleAnswer: "Column chart. Columns make category differences easy to compare."
    },
    {
      id: 3,
      question: "Which chart is useful for comparing categories with long labels?",
      sampleAnswer: "Bar chart. Horizontal bars can fit long category labels."
    },
    {
      id: 4,
      question: "Which chart is suited to a few parts of one whole?",
      sampleAnswer: "Pie chart. A pie chart can show proportions that sum to a whole."
    }
    ]
  },
  '15.8': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.8',
    id: 67,
    topicTitle: 'Dashboard Layout and Formatting',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is the main purpose of an Excel dashboard?",
      options: [
        { key: "A", text: "They can distract from the main insights" },
        { key: "B", text: "In a prominent, easy-to-scan area" },
        { key: "C", text: "Show key information in one easy-to-read view" },
        { key: "D", text: "To make values easy to compare" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Show key information in one easy-to-read view. Dashboards combine important metrics and visuals. Isliye ye option correct hai.",
      hint: "Focus on Show key information in one easy-to-read view to solve this problem."
    },
    {
      id: 2,
      question: "Where should the most important KPIs usually appear?",
      options: [
        { key: "A", text: "Show key information in one easy-to-read view" },
        { key: "B", text: "In a prominent, easy-to-scan area" },
        { key: "C", text: "To make values easy to compare" },
        { key: "D", text: "They can distract from the main insights" }
      ],
      correct: 1,
      explanation: "Sahi jawab: In a prominent, easy-to-scan area. Important metrics should be visible quickly. Isliye ye option correct hai.",
      hint: "Focus on In a prominent, easy-to-scan area to solve this problem."
    },
    {
      id: 3,
      question: "Why use consistent number formats?",
      options: [
        { key: "A", text: "Show key information in one easy-to-read view" },
        { key: "B", text: "They can distract from the main insights" },
        { key: "C", text: "To make values easy to compare" },
        { key: "D", text: "In a prominent, easy-to-scan area" }
      ],
      correct: 2,
      explanation: "Sahi jawab: To make values easy to compare. Consistent formats reduce confusion. Isliye ye option correct hai.",
      hint: "Focus on To make values easy to compare to solve this problem."
    },
    {
      id: 4,
      question: "Why avoid too many colors and charts?",
      options: [
        { key: "A", text: "They can distract from the main insights" },
        { key: "B", text: "Show key information in one easy-to-read view" },
        { key: "C", text: "To make values easy to compare" },
        { key: "D", text: "In a prominent, easy-to-scan area" }
      ],
      correct: 0,
      explanation: "Sahi jawab: They can distract from the main insights. A clean layout improves readability. Isliye ye option correct hai.",
      hint: "Focus on They can distract from the main insights to solve this problem."
    },
    {
      id: 5,
      question: "What should a dashboard filter clearly indicate?",
      options: [
        { key: "A", text: "Show key information in one easy-to-read view" },
        { key: "B", text: "To make values easy to compare" },
        { key: "C", text: "In a prominent, easy-to-scan area" },
        { key: "D", text: "Which data is currently displayed" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Which data is currently displayed. Users need to understand the active selection. Isliye ye option correct hai.",
      hint: "Focus on Which data is currently displayed to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange a basic dashboard",
      prompt: "Arrange a basic dashboard",
      tokens: ["Add Dashboard Title", "Place KPI Cards", "Add Filters", "Add Charts"],
      shuffled: ["Add Dashboard Title", "Place KPI Cards", "Add Filters", "Add Charts"],
      expected: ["Add Dashboard Title", "Place KPI Cards", "Add Charts", "Add Filters"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match layout elements",
      prompt: "Match layout elements",
      tokens: ["Slicer \u2192 Interactive filter", "Chart \u2192 Visual pattern", "KPI Card \u2192 Key metric"],
      shuffled: ["Slicer \u2192 Interactive filter", "Chart \u2192 Visual pattern", "KPI Card \u2192 Key metric"],
      expected: ["KPI Card \u2192 Key metric", "Chart \u2192 Visual pattern", "Slicer \u2192 Interactive filter"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Polish a dashboard",
      prompt: "Polish a dashboard",
      tokens: ["Standardize Colors", "Check Alignment", "Test Filters", "Check Labels"],
      shuffled: ["Standardize Colors", "Check Alignment", "Test Filters", "Check Labels"],
      expected: ["Check Alignment", "Standardize Colors", "Check Labels", "Test Filters"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "KPI Card",
      meaning: "Key metric"
    },
    {
      id: 2,
      snippet: "Chart",
      meaning: "Visual pattern"
    },
    {
      id: 3,
      snippet: "Slicer",
      meaning: "Interactive filter"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Improve a Busy Dashboard",
      scenario: "A dashboard has many overlapping charts and tiny text.",
      prompt: "What should the analyst do first?",
      expectedResponse: "Simplify layout and improve readability — Correct! Clear spacing and readable labels help users understand results."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is the main purpose of an Excel dashboard?",
      sampleAnswer: "Show key information in one easy-to-read view. Dashboards combine important metrics and visuals."
    },
    {
      id: 2,
      question: "Where should the most important KPIs usually appear?",
      sampleAnswer: "In a prominent, easy-to-scan area. Important metrics should be visible quickly."
    },
    {
      id: 3,
      question: "Why use consistent number formats?",
      sampleAnswer: "To make values easy to compare. Consistent formats reduce confusion."
    },
    {
      id: 4,
      question: "Why avoid too many colors and charts?",
      sampleAnswer: "They can distract from the main insights. A clean layout improves readability."
    }
    ]
  },
  '15.9': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 15,
    moduleName: 'Module 15: Analysis and Reporting with Excel',
    topicKey: '15.9',
    id: 68,
    topicTitle: 'Excel Analysis Mini Project',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a sensible first step in a sales analysis project?",
      options: [
        { key: "A", text: "PivotTable" },
        { key: "B", text: "Define the business question" },
        { key: "C", text: "To find missing, duplicate, or invalid records" },
        { key: "D", text: "Line chart" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Define the business question. The question guides the analysis. Isliye ye option correct hai.",
      hint: "Focus on Define the business question to solve this problem."
    },
    {
      id: 2,
      question: "Why inspect source data before building charts?",
      options: [
        { key: "A", text: "To find missing, duplicate, or invalid records" },
        { key: "B", text: "Define the business question" },
        { key: "C", text: "Line chart" },
        { key: "D", text: "PivotTable" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To find missing, duplicate, or invalid records. Data quality affects the accuracy of reports. Isliye ye option correct hai.",
      hint: "Focus on To find missing, duplicate, or invalid records to solve this problem."
    },
    {
      id: 3,
      question: "Which tool can summarize sales by product category?",
      options: [
        { key: "A", text: "To find missing, duplicate, or invalid records" },
        { key: "B", text: "Define the business question" },
        { key: "C", text: "Line chart" },
        { key: "D", text: "PivotTable" }
      ],
      correct: 3,
      explanation: "Sahi jawab: PivotTable. PivotTables aggregate category totals. Isliye ye option correct hai.",
      hint: "Focus on PivotTable to solve this problem."
    },
    {
      id: 4,
      question: "Which chart can show monthly sales trends?",
      options: [
        { key: "A", text: "PivotTable" },
        { key: "B", text: "Line chart" },
        { key: "C", text: "To find missing, duplicate, or invalid records" },
        { key: "D", text: "Define the business question" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Line chart. Line charts are useful for time trends. Isliye ye option correct hai.",
      hint: "Focus on Line chart to solve this problem."
    },
    {
      id: 5,
      question: "What should a final analysis report include?",
      options: [
        { key: "A", text: "To find missing, duplicate, or invalid records" },
        { key: "B", text: "PivotTable" },
        { key: "C", text: "Findings supported by checked data" },
        { key: "D", text: "Define the business question" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Findings supported by checked data. A report should connect evidence to a clear conclusion. Isliye ye option correct hai.",
      hint: "Focus on Findings supported by checked data to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Complete a simple Excel analysis",
      prompt: "Complete a simple Excel analysis",
      tokens: ["Create Chart", "Clean Data", "Define Question", "Report Finding", "Summarize Sales"],
      shuffled: ["Create Chart", "Clean Data", "Define Question", "Report Finding", "Summarize Sales"],
      expected: ["Define Question", "Clean Data", "Summarize Sales", "Create Chart", "Report Finding"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match project stages",
      prompt: "Match project stages",
      tokens: ["Chart \u2192 Visualize", "PivotTable \u2192 Summarize", "Cleaning \u2192 Fix data issues"],
      shuffled: ["Chart \u2192 Visualize", "PivotTable \u2192 Summarize", "Cleaning \u2192 Fix data issues"],
      expected: ["Cleaning \u2192 Fix data issues", "PivotTable \u2192 Summarize", "Chart \u2192 Visualize"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Check a final report",
      prompt: "Check a final report",
      tokens: ["Review Chart Labels", "Share Report", "Verify Source", "Check Totals"],
      shuffled: ["Review Chart Labels", "Share Report", "Verify Source", "Check Totals"],
      expected: ["Verify Source", "Check Totals", "Review Chart Labels", "Share Report"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Cleaning",
      meaning: "Fix data issues"
    },
    {
      id: 2,
      snippet: "PivotTable",
      meaning: "Summarize"
    },
    {
      id: 3,
      snippet: "Chart",
      meaning: "Visualize"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Find the Best-Selling Category",
      scenario: "A shop has Product Category and Sales columns and needs a simple category comparison.",
      prompt: "Which approach is best?",
      expectedResponse: "Create a PivotTable summing Sales by Category — Correct! Summarizing sales by category reveals the largest category total."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a sensible first step in a sales analysis project?",
      sampleAnswer: "Define the business question. The question guides the analysis."
    },
    {
      id: 2,
      question: "Why inspect source data before building charts?",
      sampleAnswer: "To find missing, duplicate, or invalid records. Data quality affects the accuracy of reports."
    },
    {
      id: 3,
      question: "Which tool can summarize sales by product category?",
      sampleAnswer: "PivotTable. PivotTables aggregate category totals."
    },
    {
      id: 4,
      question: "Which chart can show monthly sales trends?",
      sampleAnswer: "Line chart. Line charts are useful for time trends."
    }
    ]
  },
  '16.1': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.1',
    id: 69,
    topicTitle: 'What Is Power Query?',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is Power Query mainly used for?",
      options: [
        { key: "A", text: "A recorded sequence of transformations" },
        { key: "B", text: "Loads the query result into Excel or a connection" },
        { key: "C", text: "A workspace for applying data transformations" },
        { key: "D", text: "Importing, transforming, and cleaning data" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Importing, transforming, and cleaning data. Power Query supports repeatable data preparation. Isliye ye option correct hai.",
      hint: "Focus on Importing, transforming, and cleaning data to solve this problem."
    },
    {
      id: 2,
      question: "What is the Power Query Editor?",
      options: [
        { key: "A", text: "Importing, transforming, and cleaning data" },
        { key: "B", text: "A recorded sequence of transformations" },
        { key: "C", text: "A workspace for applying data transformations" },
        { key: "D", text: "Loads the query result into Excel or a connection" }
      ],
      correct: 2,
      explanation: "Sahi jawab: A workspace for applying data transformations. The editor lets users shape and inspect data. Isliye ye option correct hai.",
      hint: "Focus on A workspace for applying data transformations to solve this problem."
    },
    {
      id: 3,
      question: "What are Applied Steps?",
      options: [
        { key: "A", text: "A recorded sequence of transformations" },
        { key: "B", text: "Importing, transforming, and cleaning data" },
        { key: "C", text: "A workspace for applying data transformations" },
        { key: "D", text: "Loads the query result into Excel or a connection" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A recorded sequence of transformations. Power Query keeps a history of transformation steps. Isliye ye option correct hai.",
      hint: "Focus on A recorded sequence of transformations to solve this problem."
    },
    {
      id: 4,
      question: "What does Close & Load do in Excel Power Query?",
      options: [
        { key: "A", text: "Loads the query result into Excel or a connection" },
        { key: "B", text: "Importing, transforming, and cleaning data" },
        { key: "C", text: "A recorded sequence of transformations" },
        { key: "D", text: "A workspace for applying data transformations" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Loads the query result into Excel or a connection. Close & Load sends the transformed result to the chosen destination. Isliye ye option correct hai.",
      hint: "Focus on Loads the query result into Excel or a connection to solve this problem."
    },
    {
      id: 5,
      question: "Why is Power Query useful for repeated reports?",
      options: [
        { key: "A", text: "Saved transformations can run again on refresh" },
        { key: "B", text: "A workspace for applying data transformations" },
        { key: "C", text: "A recorded sequence of transformations" },
        { key: "D", text: "Importing, transforming, and cleaning data" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Saved transformations can run again on refresh. It reduces repeated manual cleaning. Isliye ye option correct hai.",
      hint: "Focus on Saved transformations can run again on refresh to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Prepare data using Power Query",
      prompt: "Prepare data using Power Query",
      tokens: ["Close & Load", "Review Applied Steps", "Transform in Editor", "Import Data"],
      shuffled: ["Close & Load", "Review Applied Steps", "Transform in Editor", "Import Data"],
      expected: ["Import Data", "Transform in Editor", "Review Applied Steps", "Close & Load"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match Power Query terms",
      prompt: "Match Power Query terms",
      tokens: ["Refresh \u2192 Rerun query", "Applied Steps \u2192 Recorded changes", "Editor \u2192 Transform data"],
      shuffled: ["Refresh \u2192 Rerun query", "Applied Steps \u2192 Recorded changes", "Editor \u2192 Transform data"],
      expected: ["Editor \u2192 Transform data", "Applied Steps \u2192 Recorded changes", "Refresh \u2192 Rerun query"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Clean a simple import",
      prompt: "Clean a simple import",
      tokens: ["Load Source", "Load Result", "Remove Unneeded Columns", "Set Data Types"],
      shuffled: ["Load Source", "Load Result", "Remove Unneeded Columns", "Set Data Types"],
      expected: ["Load Source", "Remove Unneeded Columns", "Set Data Types", "Load Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Editor",
      meaning: "Transform data"
    },
    {
      id: 2,
      snippet: "Applied Steps",
      meaning: "Recorded changes"
    },
    {
      id: 3,
      snippet: "Refresh",
      meaning: "Rerun query"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Clean Weekly Sales Files",
      scenario: "An analyst receives similar weekly sales files and repeats the same cleanup.",
      prompt: "Which Excel tool helps save repeatable cleaning steps?",
      expectedResponse: "Power Query — Correct! Power Query records transformation steps that can be refreshed."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is Power Query mainly used for?",
      sampleAnswer: "Importing, transforming, and cleaning data. Power Query supports repeatable data preparation."
    },
    {
      id: 2,
      question: "What is the Power Query Editor?",
      sampleAnswer: "A workspace for applying data transformations. The editor lets users shape and inspect data."
    },
    {
      id: 3,
      question: "What are Applied Steps?",
      sampleAnswer: "A recorded sequence of transformations. Power Query keeps a history of transformation steps."
    },
    {
      id: 4,
      question: "What does Close & Load do in Excel Power Query?",
      sampleAnswer: "Loads the query result into Excel or a connection. Close & Load sends the transformed result to the chosen destination."
    }
    ]
  },
  '16.2': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.2',
    id: 70,
    topicTitle: 'Import Data from CSV, Excel and Folders',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does CSV stand for?",
      options: [
        { key: "A", text: "Comma-Separated Values" },
        { key: "B", text: "To avoid incorrect text, number, or date interpretation" },
        { key: "C", text: "Data > Get Data" },
        { key: "D", text: "Files from the same folder with compatible structure" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Comma-Separated Values. CSV stores tabular data as delimited text. Isliye ye option correct hai.",
      hint: "Focus on Comma-Separated Values to solve this problem."
    },
    {
      id: 2,
      question: "Which Excel area is commonly used to import data with Power Query?",
      options: [
        { key: "A", text: "Files from the same folder with compatible structure" },
        { key: "B", text: "Comma-Separated Values" },
        { key: "C", text: "Data > Get Data" },
        { key: "D", text: "To avoid incorrect text, number, or date interpretation" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Data > Get Data. Get Data connects Excel to external sources. Isliye ye option correct hai.",
      hint: "Focus on Data > Get Data to solve this problem."
    },
    {
      id: 3,
      question: "What can From Folder help combine?",
      options: [
        { key: "A", text: "To avoid incorrect text, number, or date interpretation" },
        { key: "B", text: "Files from the same folder with compatible structure" },
        { key: "C", text: "Comma-Separated Values" },
        { key: "D", text: "Data > Get Data" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Files from the same folder with compatible structure. Folder queries can process batches of similar files. Isliye ye option correct hai.",
      hint: "Focus on Files from the same folder with compatible structure to solve this problem."
    },
    {
      id: 4,
      question: "Why preview column types during import?",
      options: [
        { key: "A", text: "Comma-Separated Values" },
        { key: "B", text: "To avoid incorrect text, number, or date interpretation" },
        { key: "C", text: "Data > Get Data" },
        { key: "D", text: "Files from the same folder with compatible structure" }
      ],
      correct: 1,
      explanation: "Sahi jawab: To avoid incorrect text, number, or date interpretation. Type detection may need correction. Isliye ye option correct hai.",
      hint: "Focus on To avoid incorrect text, number, or date interpretation to solve this problem."
    },
    {
      id: 5,
      question: "What should you check before combining files from a folder?",
      options: [
        { key: "A", text: "Data > Get Data" },
        { key: "B", text: "Files from the same folder with compatible structure" },
        { key: "C", text: "Comma-Separated Values" },
        { key: "D", text: "Whether their column structures are compatible" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Whether their column structures are compatible. Inconsistent layouts can cause combination errors. Isliye ye option correct hai.",
      hint: "Focus on Whether their column structures are compatible to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Import a CSV file",
      prompt: "Import a CSV file",
      tokens: ["Load", "Preview", "Data > Get Data", "Choose Text/CSV", "Select File"],
      shuffled: ["Load", "Preview", "Data > Get Data", "Choose Text/CSV", "Select File"],
      expected: ["Data > Get Data", "Choose Text/CSV", "Select File", "Preview", "Load"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match import sources",
      prompt: "Match import sources",
      tokens: ["Folder \u2192 Multiple files", "Excel Workbook \u2192 Sheets and tables", "CSV \u2192 Delimited text"],
      shuffled: ["Folder \u2192 Multiple files", "Excel Workbook \u2192 Sheets and tables", "CSV \u2192 Delimited text"],
      expected: ["CSV \u2192 Delimited text", "Excel Workbook \u2192 Sheets and tables", "Folder \u2192 Multiple files"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Combine monthly files",
      prompt: "Combine monthly files",
      tokens: ["Review Columns", "Connect From Folder", "Put Similar Files in Folder", "Combine"],
      shuffled: ["Review Columns", "Connect From Folder", "Put Similar Files in Folder", "Combine"],
      expected: ["Put Similar Files in Folder", "Connect From Folder", "Combine", "Review Columns"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CSV",
      meaning: "Delimited text"
    },
    {
      id: 2,
      snippet: "Excel Workbook",
      meaning: "Sheets and tables"
    },
    {
      id: 3,
      snippet: "Folder",
      meaning: "Multiple files"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Import Monthly CSV Reports",
      scenario: "A company stores monthly sales exports as CSV files.",
      prompt: "Which Excel feature should be used to import one CSV through Power Query?",
      expectedResponse: "Data > Get Data > From Text/CSV — Correct! Get Data can import CSV records for transformation."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does CSV stand for?",
      sampleAnswer: "Comma-Separated Values. CSV stores tabular data as delimited text."
    },
    {
      id: 2,
      question: "Which Excel area is commonly used to import data with Power Query?",
      sampleAnswer: "Data > Get Data. Get Data connects Excel to external sources."
    },
    {
      id: 3,
      question: "What can From Folder help combine?",
      sampleAnswer: "Files from the same folder with compatible structure. Folder queries can process batches of similar files."
    },
    {
      id: 4,
      question: "Why preview column types during import?",
      sampleAnswer: "To avoid incorrect text, number, or date interpretation. Type detection may need correction."
    }
    ]
  },
  '16.3': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.3',
    id: 71,
    topicTitle: 'Transform and Clean Data in Power Query',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which Power Query command removes unwanted columns?",
      options: [
        { key: "A", text: "Remove Columns" },
        { key: "B", text: "Filter out null values" },
        { key: "C", text: "Remove Duplicates" },
        { key: "D", text: "Applied Steps pane" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Remove Columns. Removing unused fields simplifies the dataset. Isliye ye option correct hai.",
      hint: "Focus on Remove Columns to solve this problem."
    },
    {
      id: 2,
      question: "Which Power Query command eliminates duplicate rows based on selected columns?",
      options: [
        { key: "A", text: "Remove Duplicates" },
        { key: "B", text: "Remove Columns" },
        { key: "C", text: "Applied Steps pane" },
        { key: "D", text: "Filter out null values" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Remove Duplicates. Duplicate removal uses the selected fields as matching keys. Isliye ye option correct hai.",
      hint: "Focus on Remove Duplicates to solve this problem."
    },
    {
      id: 3,
      question: "Which command can remove rows containing null values in a chosen field?",
      options: [
        { key: "A", text: "Filter out null values" },
        { key: "B", text: "Remove Duplicates" },
        { key: "C", text: "Applied Steps pane" },
        { key: "D", text: "Remove Columns" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Filter out null values. A filter can exclude rows with nulls in that column. Isliye ye option correct hai.",
      hint: "Focus on Filter out null values to solve this problem."
    },
    {
      id: 4,
      question: "Where can you review previous transformations?",
      options: [
        { key: "A", text: "Remove Duplicates" },
        { key: "B", text: "Applied Steps pane" },
        { key: "C", text: "Remove Columns" },
        { key: "D", text: "Filter out null values" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Applied Steps pane. Applied Steps lists the query transformations. Isliye ye option correct hai.",
      hint: "Focus on Applied Steps pane to solve this problem."
    },
    {
      id: 5,
      question: "Why check row counts after cleaning?",
      options: [
        { key: "A", text: "Filter out null values" },
        { key: "B", text: "Remove Columns" },
        { key: "C", text: "To catch unintended data loss" },
        { key: "D", text: "Remove Duplicates" }
      ],
      correct: 2,
      explanation: "Sahi jawab: To catch unintended data loss. Cleaning can remove records unexpectedly. Isliye ye option correct hai.",
      hint: "Focus on To catch unintended data loss to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Clean imported customer data",
      prompt: "Clean imported customer data",
      tokens: ["Remove Duplicate IDs", "Check Row Count", "Remove Unused Columns", "Filter Null IDs"],
      shuffled: ["Remove Duplicate IDs", "Check Row Count", "Remove Unused Columns", "Filter Null IDs"],
      expected: ["Remove Unused Columns", "Filter Null IDs", "Remove Duplicate IDs", "Check Row Count"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match transformations",
      prompt: "Match transformations",
      tokens: ["Remove Duplicates \u2192 Drop repeated matches", "Filter Rows \u2192 Keep matching records", "Remove Columns \u2192 Drop fields"],
      shuffled: ["Remove Duplicates \u2192 Drop repeated matches", "Filter Rows \u2192 Keep matching records", "Remove Columns \u2192 Drop fields"],
      expected: ["Remove Columns \u2192 Drop fields", "Filter Rows \u2192 Keep matching records", "Remove Duplicates \u2192 Drop repeated matches"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Review query cleaning",
      prompt: "Review query cleaning",
      tokens: ["Confirm Row Counts", "Load", "Check Preview", "Inspect Applied Steps"],
      shuffled: ["Confirm Row Counts", "Load", "Check Preview", "Inspect Applied Steps"],
      expected: ["Inspect Applied Steps", "Check Preview", "Confirm Row Counts", "Load"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Remove Columns",
      meaning: "Drop fields"
    },
    {
      id: 2,
      snippet: "Filter Rows",
      meaning: "Keep matching records"
    },
    {
      id: 3,
      snippet: "Remove Duplicates",
      meaning: "Drop repeated matches"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Remove Extra Columns",
      scenario: "An imported sales file contains an unused Notes column.",
      prompt: "Which Power Query action removes it?",
      expectedResponse: "Remove Columns — Correct! Remove Columns removes unnecessary fields from the query result."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which Power Query command removes unwanted columns?",
      sampleAnswer: "Remove Columns. Removing unused fields simplifies the dataset."
    },
    {
      id: 2,
      question: "Which Power Query command eliminates duplicate rows based on selected columns?",
      sampleAnswer: "Remove Duplicates. Duplicate removal uses the selected fields as matching keys."
    },
    {
      id: 3,
      question: "Which command can remove rows containing null values in a chosen field?",
      sampleAnswer: "Filter out null values. A filter can exclude rows with nulls in that column."
    },
    {
      id: 4,
      question: "Where can you review previous transformations?",
      sampleAnswer: "Applied Steps pane. Applied Steps lists the query transformations."
    }
    ]
  },
  '16.4': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.4',
    id: 72,
    topicTitle: 'Change Data Types and Split Columns',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Why change a sales amount column to Decimal Number?",
      options: [
        { key: "A", text: "To enable correct numeric calculations" },
        { key: "B", text: "Numeric calculations may fail or behave incorrectly" },
        { key: "C", text: "Separates one text column using a chosen character" },
        { key: "D", text: "To support valid date operations and grouping" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To enable correct numeric calculations. Numeric types allow proper arithmetic. Isliye ye option correct hai.",
      hint: "Focus on To enable correct numeric calculations to solve this problem."
    },
    {
      id: 2,
      question: "What does Split Column by Delimiter do?",
      options: [
        { key: "A", text: "Separates one text column using a chosen character" },
        { key: "B", text: "To support valid date operations and grouping" },
        { key: "C", text: "Numeric calculations may fail or behave incorrectly" },
        { key: "D", text: "To enable correct numeric calculations" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Separates one text column using a chosen character. A comma or dash can separate values. Isliye ye option correct hai.",
      hint: "Focus on Separates one text column using a chosen character to solve this problem."
    },
    {
      id: 3,
      question: "Why must dates have the correct data type?",
      options: [
        { key: "A", text: "Separates one text column using a chosen character" },
        { key: "B", text: "Numeric calculations may fail or behave incorrectly" },
        { key: "C", text: "To enable correct numeric calculations" },
        { key: "D", text: "To support valid date operations and grouping" }
      ],
      correct: 3,
      explanation: "Sahi jawab: To support valid date operations and grouping. Date operations require date-compatible values. Isliye ye option correct hai.",
      hint: "Focus on To support valid date operations and grouping to solve this problem."
    },
    {
      id: 4,
      question: "What can happen if a numeric column remains Text?",
      options: [
        { key: "A", text: "Separates one text column using a chosen character" },
        { key: "B", text: "To enable correct numeric calculations" },
        { key: "C", text: "Numeric calculations may fail or behave incorrectly" },
        { key: "D", text: "To support valid date operations and grouping" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Numeric calculations may fail or behave incorrectly. Text values are not automatically treated as numeric. Isliye ye option correct hai.",
      hint: "Focus on Numeric calculations may fail or behave incorrectly to solve this problem."
    },
    {
      id: 5,
      question: "What should you do after splitting a column?",
      options: [
        { key: "A", text: "To enable correct numeric calculations" },
        { key: "B", text: "To support valid date operations and grouping" },
        { key: "C", text: "Check the resulting fields and data types" },
        { key: "D", text: "Separates one text column using a chosen character" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Check the resulting fields and data types. Reviewing catches incorrect splits and type detection. Isliye ye option correct hai.",
      hint: "Focus on Check the resulting fields and data types to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Split a City-State field",
      prompt: "Split a City-State field",
      tokens: ["Check New Columns", "Select Column", "Choose Comma", "Split by Delimiter"],
      shuffled: ["Check New Columns", "Select Column", "Choose Comma", "Split by Delimiter"],
      expected: ["Select Column", "Split by Delimiter", "Choose Comma", "Check New Columns"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match data types",
      prompt: "Match data types",
      tokens: ["Text \u2192 Names and codes", "Date \u2192 Calendar values", "Decimal Number \u2192 Numeric amounts"],
      shuffled: ["Text \u2192 Names and codes", "Date \u2192 Calendar values", "Decimal Number \u2192 Numeric amounts"],
      expected: ["Decimal Number \u2192 Numeric amounts", "Date \u2192 Calendar values", "Text \u2192 Names and codes"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fix an imported amount column",
      prompt: "Fix an imported amount column",
      tokens: ["Check Errors", "Verify Values", "Select Amount", "Set Decimal Number"],
      shuffled: ["Check Errors", "Verify Values", "Select Amount", "Set Decimal Number"],
      expected: ["Select Amount", "Set Decimal Number", "Check Errors", "Verify Values"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Decimal Number",
      meaning: "Numeric amounts"
    },
    {
      id: 2,
      snippet: "Date",
      meaning: "Calendar values"
    },
    {
      id: 3,
      snippet: "Text",
      meaning: "Names and codes"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Fix Imported Prices",
      scenario: "An imported Price column contains numeric values stored as Text.",
      prompt: "Which transformation should the analyst try after checking the values?",
      expectedResponse: "Change Data Type to Decimal Number — Correct! Setting a numeric data type supports calculations."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why change a sales amount column to Decimal Number?",
      sampleAnswer: "To enable correct numeric calculations. Numeric types allow proper arithmetic."
    },
    {
      id: 2,
      question: "What does Split Column by Delimiter do?",
      sampleAnswer: "Separates one text column using a chosen character. A comma or dash can separate values."
    },
    {
      id: 3,
      question: "Why must dates have the correct data type?",
      sampleAnswer: "To support valid date operations and grouping. Date operations require date-compatible values."
    },
    {
      id: 4,
      question: "What can happen if a numeric column remains Text?",
      sampleAnswer: "Numeric calculations may fail or behave incorrectly. Text values are not automatically treated as numeric."
    }
    ]
  },
  '16.5': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.5',
    id: 73,
    topicTitle: 'Merge Queries and Append Queries',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Merge Queries do?",
      options: [
        { key: "A", text: "Joins tables using matching key columns" },
        { key: "B", text: "Stacks rows from tables" },
        { key: "C", text: "Merge Queries" },
        { key: "D", text: "Append Queries" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Joins tables using matching key columns. Merge adds related columns based on a join condition. Isliye ye option correct hai.",
      hint: "Focus on Joins tables using matching key columns to solve this problem."
    },
    {
      id: 2,
      question: "What does Append Queries do?",
      options: [
        { key: "A", text: "Stacks rows from tables" },
        { key: "B", text: "Merge Queries" },
        { key: "C", text: "Append Queries" },
        { key: "D", text: "Joins tables using matching key columns" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Stacks rows from tables. Append combines records vertically. Isliye ye option correct hai.",
      hint: "Focus on Stacks rows from tables to solve this problem."
    },
    {
      id: 3,
      question: "Which operation is suitable for adding February sales rows below January sales?",
      options: [
        { key: "A", text: "Joins tables using matching key columns" },
        { key: "B", text: "Append Queries" },
        { key: "C", text: "Stacks rows from tables" },
        { key: "D", text: "Merge Queries" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Append Queries. Append stacks records from matching datasets. Isliye ye option correct hai.",
      hint: "Focus on Append Queries to solve this problem."
    },
    {
      id: 4,
      question: "Which operation is suitable for adding Customer Names to Orders using Customer ID?",
      options: [
        { key: "A", text: "Append Queries" },
        { key: "B", text: "Merge Queries" },
        { key: "C", text: "Stacks rows from tables" },
        { key: "D", text: "Joins tables using matching key columns" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Merge Queries. Merge joins records using a common key. Isliye ye option correct hai.",
      hint: "Focus on Merge Queries to solve this problem."
    },
    {
      id: 5,
      question: "Why check key columns before a merge?",
      options: [
        { key: "A", text: "Joins tables using matching key columns" },
        { key: "B", text: "Append Queries" },
        { key: "C", text: "To ensure matches are accurate" },
        { key: "D", text: "Stacks rows from tables" }
      ],
      correct: 2,
      explanation: "Sahi jawab: To ensure matches are accurate. Incorrect keys can cause missing or duplicated matches. Isliye ye option correct hai.",
      hint: "Focus on To ensure matches are accurate to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match query operations",
      prompt: "Match query operations",
      tokens: ["Key \u2192 Matching field", "Append \u2192 Stack rows", "Merge \u2192 Join columns by key"],
      shuffled: ["Key \u2192 Matching field", "Append \u2192 Stack rows", "Merge \u2192 Join columns by key"],
      expected: ["Merge \u2192 Join columns by key", "Append \u2192 Stack rows", "Key \u2192 Matching field"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Combine monthly sales rows",
      prompt: "Combine monthly sales rows",
      tokens: ["Append Queries", "Import February", "Import January", "Verify Row Count"],
      shuffled: ["Append Queries", "Import February", "Import January", "Verify Row Count"],
      expected: ["Import January", "Import February", "Append Queries", "Verify Row Count"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Add customer details to orders",
      prompt: "Add customer details to orders",
      tokens: ["Import Orders", "Expand Name", "Import Customers", "Merge on Customer ID"],
      shuffled: ["Import Orders", "Expand Name", "Import Customers", "Merge on Customer ID"],
      expected: ["Import Orders", "Import Customers", "Merge on Customer ID", "Expand Name"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Merge",
      meaning: "Join columns by key"
    },
    {
      id: 2,
      snippet: "Append",
      meaning: "Stack rows"
    },
    {
      id: 3,
      snippet: "Key",
      meaning: "Matching field"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Combine Two Months",
      scenario: "January and February sales files have the same columns. The analyst wants one combined dataset.",
      prompt: "Which Power Query operation should be used?",
      expectedResponse: "Append Queries — Correct! Append stacks January and February records."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Merge Queries do?",
      sampleAnswer: "Joins tables using matching key columns. Merge adds related columns based on a join condition."
    },
    {
      id: 2,
      question: "What does Append Queries do?",
      sampleAnswer: "Stacks rows from tables. Append combines records vertically."
    },
    {
      id: 3,
      question: "Which operation is suitable for adding February sales rows below January sales?",
      sampleAnswer: "Append Queries. Append stacks records from matching datasets."
    },
    {
      id: 4,
      question: "Which operation is suitable for adding Customer Names to Orders using Customer ID?",
      sampleAnswer: "Merge Queries. Merge joins records using a common key."
    }
    ]
  },
  '16.6': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.6',
    id: 74,
    topicTitle: 'Refreshable Data Workflows',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Refresh do in Power Query?",
      options: [
        { key: "A", text: "Reruns the query against its data source" },
        { key: "B", text: "No, source changes and errors still need validation" },
        { key: "C", text: "To reduce manual work in recurring reports" },
        { key: "D", text: "Refresh may fail to find the source" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Reruns the query against its data source. Refresh reapplies saved transformations to current source data. Isliye ye option correct hai.",
      hint: "Focus on Reruns the query against its data source to solve this problem."
    },
    {
      id: 2,
      question: "What happens if the source file is moved without updating its path?",
      options: [
        { key: "A", text: "To reduce manual work in recurring reports" },
        { key: "B", text: "Refresh may fail to find the source" },
        { key: "C", text: "Reruns the query against its data source" },
        { key: "D", text: "No, source changes and errors still need validation" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Refresh may fail to find the source. Queries depend on accessible source connections. Isliye ye option correct hai.",
      hint: "Focus on Refresh may fail to find the source to solve this problem."
    },
    {
      id: 3,
      question: "Why use repeatable transformation steps?",
      options: [
        { key: "A", text: "To reduce manual work in recurring reports" },
        { key: "B", text: "Reruns the query against its data source" },
        { key: "C", text: "Refresh may fail to find the source" },
        { key: "D", text: "No, source changes and errors still need validation" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To reduce manual work in recurring reports. A saved query can rerun the same preparation logic. Isliye ye option correct hai.",
      hint: "Focus on To reduce manual work in recurring reports to solve this problem."
    },
    {
      id: 4,
      question: "Does refreshing always guarantee correct results?",
      options: [
        { key: "A", text: "Refresh may fail to find the source" },
        { key: "B", text: "No, source changes and errors still need validation" },
        { key: "C", text: "Reruns the query against its data source" },
        { key: "D", text: "To reduce manual work in recurring reports" }
      ],
      correct: 1,
      explanation: "Sahi jawab: No, source changes and errors still need validation. Refresh can succeed while data quality issues remain. Isliye ye option correct hai.",
      hint: "Focus on No, source changes and errors still need validation to solve this problem."
    },
    {
      id: 5,
      question: "What should be checked after refresh?",
      options: [
        { key: "A", text: "Reruns the query against its data source" },
        { key: "B", text: "Refresh may fail to find the source" },
        { key: "C", text: "Row counts, data types, and summary totals" },
        { key: "D", text: "To reduce manual work in recurring reports" }
      ],
      correct: 2,
      explanation: "Sahi jawab: Row counts, data types, and summary totals. Validation helps detect unexpected source changes. Isliye ye option correct hai.",
      hint: "Focus on Row counts, data types, and summary totals to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Update a weekly report",
      prompt: "Update a weekly report",
      tokens: ["Update Source File", "Refresh Query", "Review Report", "Validate Rows"],
      shuffled: ["Update Source File", "Refresh Query", "Review Report", "Validate Rows"],
      expected: ["Update Source File", "Refresh Query", "Validate Rows", "Review Report"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match workflow terms",
      prompt: "Match workflow terms",
      tokens: ["Validation \u2192 Check result quality", "Source Path \u2192 File location", "Refresh \u2192 Rerun query"],
      shuffled: ["Validation \u2192 Check result quality", "Source Path \u2192 File location", "Refresh \u2192 Rerun query"],
      expected: ["Refresh \u2192 Rerun query", "Source Path \u2192 File location", "Validation \u2192 Check result quality"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fix a failed refresh",
      prompt: "Fix a failed refresh",
      tokens: ["Check Source Connection", "Refresh Again", "Read Error", "Correct Path"],
      shuffled: ["Check Source Connection", "Refresh Again", "Read Error", "Correct Path"],
      expected: ["Read Error", "Check Source Connection", "Correct Path", "Refresh Again"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Refresh",
      meaning: "Rerun query"
    },
    {
      id: 2,
      snippet: "Source Path",
      meaning: "File location"
    },
    {
      id: 3,
      snippet: "Validation",
      meaning: "Check result quality"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Update a Weekly Report",
      scenario: "A new weekly sales CSV replaces the old file at the same path with the same structure.",
      prompt: "What should the analyst do to update a connected query?",
      expectedResponse: "Refresh the query — Correct! Refresh reruns saved steps against the updated source."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Refresh do in Power Query?",
      sampleAnswer: "Reruns the query against its data source. Refresh reapplies saved transformations to current source data."
    },
    {
      id: 2,
      question: "What happens if the source file is moved without updating its path?",
      sampleAnswer: "Refresh may fail to find the source. Queries depend on accessible source connections."
    },
    {
      id: 3,
      question: "Why use repeatable transformation steps?",
      sampleAnswer: "To reduce manual work in recurring reports. A saved query can rerun the same preparation logic."
    },
    {
      id: 4,
      question: "Does refreshing always guarantee correct results?",
      sampleAnswer: "No, source changes and errors still need validation. Refresh can succeed while data quality issues remain."
    }
    ]
  },
  '16.7': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.7',
    id: 75,
    topicTitle: 'Introduction to Dynamic Array Functions',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does UNIQUE return?",
      options: [
        { key: "A", text: "Distinct values from a range or array" },
        { key: "B", text: "Values or rows that meet a condition" },
        { key: "C", text: "A sorted array" },
        { key: "D", text: "Multiple cells filled by one dynamic array formula" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Distinct values from a range or array. UNIQUE removes repeated items in its result. Isliye ye option correct hai.",
      hint: "Focus on Distinct values from a range or array to solve this problem."
    },
    {
      id: 2,
      question: "What does FILTER return?",
      options: [
        { key: "A", text: "Values or rows that meet a condition" },
        { key: "B", text: "Multiple cells filled by one dynamic array formula" },
        { key: "C", text: "Distinct values from a range or array" },
        { key: "D", text: "A sorted array" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Values or rows that meet a condition. FILTER dynamically returns matching records. Isliye ye option correct hai.",
      hint: "Focus on Values or rows that meet a condition to solve this problem."
    },
    {
      id: 3,
      question: "What does SORT return?",
      options: [
        { key: "A", text: "A sorted array" },
        { key: "B", text: "Values or rows that meet a condition" },
        { key: "C", text: "Distinct values from a range or array" },
        { key: "D", text: "Multiple cells filled by one dynamic array formula" }
      ],
      correct: 0,
      explanation: "Sahi jawab: A sorted array. SORT creates a sorted dynamic result. Isliye ye option correct hai.",
      hint: "Focus on A sorted array to solve this problem."
    },
    {
      id: 4,
      question: "What does a spill range mean?",
      options: [
        { key: "A", text: "Multiple cells filled by one dynamic array formula" },
        { key: "B", text: "A sorted array" },
        { key: "C", text: "Values or rows that meet a condition" },
        { key: "D", text: "Distinct values from a range or array" }
      ],
      correct: 0,
      explanation: "Sahi jawab: Multiple cells filled by one dynamic array formula. Dynamic results can extend beyond the formula cell. Isliye ye option correct hai.",
      hint: "Focus on Multiple cells filled by one dynamic array formula to solve this problem."
    },
    {
      id: 5,
      question: "What can cause a #SPILL! error?",
      options: [
        { key: "A", text: "A sorted array" },
        { key: "B", text: "Something blocking the intended output range" },
        { key: "C", text: "Values or rows that meet a condition" },
        { key: "D", text: "Distinct values from a range or array" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Something blocking the intended output range. Spill results need empty destination cells. Isliye ye option correct hai.",
      hint: "Focus on Something blocking the intended output range to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match dynamic array functions",
      prompt: "Match dynamic array functions",
      tokens: ["SORT \u2192 Ordered values", "FILTER \u2192 Matching rows", "UNIQUE \u2192 Distinct items"],
      shuffled: ["SORT \u2192 Ordered values", "FILTER \u2192 Matching rows", "UNIQUE \u2192 Distinct items"],
      expected: ["UNIQUE \u2192 Distinct items", "FILTER \u2192 Matching rows", "SORT \u2192 Ordered values"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Build a UNIQUE formula",
      prompt: "Build a UNIQUE formula",
      tokens: ["A2:A10", "=UNIQUE", "(", ")"],
      shuffled: ["A2:A10", "=UNIQUE", "(", ")"],
      expected: ["=UNIQUE", "(", "A2:A10", ")"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Fix a blocked spill range",
      prompt: "Fix a blocked spill range",
      tokens: ["Find Blocking Cells", "Recheck Result", "Clear Obstruction", "Inspect SPILL Error"],
      shuffled: ["Find Blocking Cells", "Recheck Result", "Clear Obstruction", "Inspect SPILL Error"],
      expected: ["Inspect SPILL Error", "Find Blocking Cells", "Clear Obstruction", "Recheck Result"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "UNIQUE",
      meaning: "Distinct items"
    },
    {
      id: 2,
      snippet: "FILTER",
      meaning: "Matching rows"
    },
    {
      id: 3,
      snippet: "SORT",
      meaning: "Ordered values"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: List Unique Cities",
      scenario: "A City column in A2:A20 repeats city names. The manager wants a dynamic list of distinct cities.",
      prompt: "Which formula is suitable in supported Excel versions?",
      expectedResponse: "=UNIQUE(A2:A20) — Correct! UNIQUE returns distinct city names and can spill into adjacent cells."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does UNIQUE return?",
      sampleAnswer: "Distinct values from a range or array. UNIQUE removes repeated items in its result."
    },
    {
      id: 2,
      question: "What does FILTER return?",
      sampleAnswer: "Values or rows that meet a condition. FILTER dynamically returns matching records."
    },
    {
      id: 3,
      question: "What does SORT return?",
      sampleAnswer: "A sorted array. SORT creates a sorted dynamic result."
    },
    {
      id: 4,
      question: "What does a spill range mean?",
      sampleAnswer: "Multiple cells filled by one dynamic array formula. Dynamic results can extend beyond the formula cell."
    }
    ]
  },
  '16.8': {
    tabId: 3,
    tabName: 'Excel for Data Analysis',
    moduleId: 16,
    moduleName: 'Module 16: Power Query and Advanced Excel',
    topicKey: '16.8',
    id: 76,
    topicTitle: 'Audit Formulas and Validate Results',
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does Trace Precedents help show?",
      options: [
        { key: "A", text: "Formulas that refer to the selected cell" },
        { key: "B", text: "Cells feeding a selected formula" },
        { key: "C", text: "Inspect calculation steps" },
        { key: "D", text: "To confirm calculations are accurate" }
      ],
      correct: 1,
      explanation: "Sahi jawab: Cells feeding a selected formula. Precedents reveal source references. Isliye ye option correct hai.",
      hint: "Focus on Cells feeding a selected formula to solve this problem."
    },
    {
      id: 2,
      question: "What does Trace Dependents help show?",
      options: [
        { key: "A", text: "To confirm calculations are accurate" },
        { key: "B", text: "Cells feeding a selected formula" },
        { key: "C", text: "Inspect calculation steps" },
        { key: "D", text: "Formulas that refer to the selected cell" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Formulas that refer to the selected cell. Dependents show where a cell is used. Isliye ye option correct hai.",
      hint: "Focus on Formulas that refer to the selected cell to solve this problem."
    },
    {
      id: 3,
      question: "What does Evaluate Formula help do?",
      options: [
        { key: "A", text: "To confirm calculations are accurate" },
        { key: "B", text: "Formulas that refer to the selected cell" },
        { key: "C", text: "Cells feeding a selected formula" },
        { key: "D", text: "Inspect calculation steps" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Inspect calculation steps. Evaluate Formula helps troubleshoot complex expressions. Isliye ye option correct hai.",
      hint: "Focus on Inspect calculation steps to solve this problem."
    },
    {
      id: 4,
      question: "Why compare report totals with source data?",
      options: [
        { key: "A", text: "To confirm calculations are accurate" },
        { key: "B", text: "Cells feeding a selected formula" },
        { key: "C", text: "Formulas that refer to the selected cell" },
        { key: "D", text: "Inspect calculation steps" }
      ],
      correct: 0,
      explanation: "Sahi jawab: To confirm calculations are accurate. Reconciliation can reveal missing or duplicated records. Isliye ye option correct hai.",
      hint: "Focus on To confirm calculations are accurate to solve this problem."
    },
    {
      id: 5,
      question: "What should an analyst do when a formula result seems incorrect?",
      options: [
        { key: "A", text: "Cells feeding a selected formula" },
        { key: "B", text: "Inspect calculation steps" },
        { key: "C", text: "Formulas that refer to the selected cell" },
        { key: "D", text: "Check references, source values, and calculation logic" }
      ],
      correct: 3,
      explanation: "Sahi jawab: Check references, source values, and calculation logic. Auditing helps find the root cause before reporting. Isliye ye option correct hai.",
      hint: "Focus on Check references, source values, and calculation logic to solve this problem."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Match auditing tools",
      prompt: "Match auditing tools",
      tokens: ["Evaluate Formula \u2192 Calculation steps", "Trace Dependents \u2192 Linked formulas", "Trace Precedents \u2192 Source cells"],
      shuffled: ["Evaluate Formula \u2192 Calculation steps", "Trace Dependents \u2192 Linked formulas", "Trace Precedents \u2192 Source cells"],
      expected: ["Trace Precedents \u2192 Source cells", "Trace Dependents \u2192 Linked formulas", "Evaluate Formula \u2192 Calculation steps"],
      hint: "Sahi! Har item ko uske correct meaning ya use se match kiya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Investigate a wrong total",
      prompt: "Investigate a wrong total",
      tokens: ["Correct and Recheck", "Evaluate Formula", "Check Source Data", "Trace References"],
      shuffled: ["Correct and Recheck", "Evaluate Formula", "Check Source Data", "Trace References"],
      expected: ["Check Source Data", "Trace References", "Evaluate Formula", "Correct and Recheck"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    },
    {
      id: 3,
      title: "Puzzle 3 — Validate a final workbook",
      prompt: "Validate a final workbook",
      tokens: ["Check Row Counts", "Save Reviewed File", "Reconcile Totals", "Review Errors"],
      shuffled: ["Check Row Counts", "Save Reviewed File", "Reconcile Totals", "Review Errors"],
      expected: ["Check Row Counts", "Reconcile Totals", "Review Errors", "Save Reviewed File"],
      hint: "Correct! Steps ya formula ko sahi order mein arrange kiya."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Trace Precedents",
      meaning: "Source cells"
    },
    {
      id: 2,
      snippet: "Trace Dependents",
      meaning: "Linked formulas"
    },
    {
      id: 3,
      snippet: "Evaluate Formula",
      meaning: "Calculation steps"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Check a Suspicious Total",
      scenario: "A monthly sales total looks too high compared with the source sheet.",
      prompt: "What should the analyst do first?",
      expectedResponse: "Audit the formula references and source data — Correct! Validate the formula and source before sharing the report."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does Trace Precedents help show?",
      sampleAnswer: "Cells feeding a selected formula. Precedents reveal source references."
    },
    {
      id: 2,
      question: "What does Trace Dependents help show?",
      sampleAnswer: "Formulas that refer to the selected cell. Dependents show where a cell is used."
    },
    {
      id: 3,
      question: "What does Evaluate Formula help do?",
      sampleAnswer: "Inspect calculation steps. Evaluate Formula helps troubleshoot complex expressions."
    },
    {
      id: 4,
      question: "Why compare report totals with source data?",
      sampleAnswer: "To confirm calculations are accurate. Reconciliation can reveal missing or duplicated records."
    }
    ]
  },
};

export const TAB3_EXCEL_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  27: TAB3_EXCEL_QUESTION_BANK['11.1'],
  111: TAB3_EXCEL_QUESTION_BANK['11.1'],
  28: TAB3_EXCEL_QUESTION_BANK['11.2'],
  112: TAB3_EXCEL_QUESTION_BANK['11.2'],
  29: TAB3_EXCEL_QUESTION_BANK['11.3'],
  113: TAB3_EXCEL_QUESTION_BANK['11.3'],
  30: TAB3_EXCEL_QUESTION_BANK['11.4'],
  114: TAB3_EXCEL_QUESTION_BANK['11.4'],
  31: TAB3_EXCEL_QUESTION_BANK['11.5'],
  115: TAB3_EXCEL_QUESTION_BANK['11.5'],
  32: TAB3_EXCEL_QUESTION_BANK['11.6'],
  116: TAB3_EXCEL_QUESTION_BANK['11.6'],
  33: TAB3_EXCEL_QUESTION_BANK['12.1'],
  121: TAB3_EXCEL_QUESTION_BANK['12.1'],
  34: TAB3_EXCEL_QUESTION_BANK['12.2'],
  122: TAB3_EXCEL_QUESTION_BANK['12.2'],
  35: TAB3_EXCEL_QUESTION_BANK['12.3'],
  123: TAB3_EXCEL_QUESTION_BANK['12.3'],
  36: TAB3_EXCEL_QUESTION_BANK['12.4'],
  124: TAB3_EXCEL_QUESTION_BANK['12.4'],
  37: TAB3_EXCEL_QUESTION_BANK['12.5'],
  125: TAB3_EXCEL_QUESTION_BANK['12.5'],
  38: TAB3_EXCEL_QUESTION_BANK['12.6'],
  126: TAB3_EXCEL_QUESTION_BANK['12.6'],
  39: TAB3_EXCEL_QUESTION_BANK['12.7'],
  127: TAB3_EXCEL_QUESTION_BANK['12.7'],
  40: TAB3_EXCEL_QUESTION_BANK['12.8'],
  128: TAB3_EXCEL_QUESTION_BANK['12.8'],
  41: TAB3_EXCEL_QUESTION_BANK['12.9'],
  129: TAB3_EXCEL_QUESTION_BANK['12.9'],
  42: TAB3_EXCEL_QUESTION_BANK['13.1'],
  131: TAB3_EXCEL_QUESTION_BANK['13.1'],
  43: TAB3_EXCEL_QUESTION_BANK['13.2'],
  132: TAB3_EXCEL_QUESTION_BANK['13.2'],
  44: TAB3_EXCEL_QUESTION_BANK['13.3'],
  133: TAB3_EXCEL_QUESTION_BANK['13.3'],
  45: TAB3_EXCEL_QUESTION_BANK['13.4'],
  134: TAB3_EXCEL_QUESTION_BANK['13.4'],
  46: TAB3_EXCEL_QUESTION_BANK['13.5'],
  135: TAB3_EXCEL_QUESTION_BANK['13.5'],
  47: TAB3_EXCEL_QUESTION_BANK['13.6'],
  136: TAB3_EXCEL_QUESTION_BANK['13.6'],
  48: TAB3_EXCEL_QUESTION_BANK['13.7'],
  137: TAB3_EXCEL_QUESTION_BANK['13.7'],
  49: TAB3_EXCEL_QUESTION_BANK['13.8'],
  138: TAB3_EXCEL_QUESTION_BANK['13.8'],
  50: TAB3_EXCEL_QUESTION_BANK['13.9'],
  139: TAB3_EXCEL_QUESTION_BANK['13.9'],
  51: TAB3_EXCEL_QUESTION_BANK['14.1'],
  141: TAB3_EXCEL_QUESTION_BANK['14.1'],
  52: TAB3_EXCEL_QUESTION_BANK['14.2'],
  142: TAB3_EXCEL_QUESTION_BANK['14.2'],
  53: TAB3_EXCEL_QUESTION_BANK['14.3'],
  143: TAB3_EXCEL_QUESTION_BANK['14.3'],
  54: TAB3_EXCEL_QUESTION_BANK['14.4'],
  144: TAB3_EXCEL_QUESTION_BANK['14.4'],
  55: TAB3_EXCEL_QUESTION_BANK['14.5'],
  145: TAB3_EXCEL_QUESTION_BANK['14.5'],
  56: TAB3_EXCEL_QUESTION_BANK['14.6'],
  146: TAB3_EXCEL_QUESTION_BANK['14.6'],
  57: TAB3_EXCEL_QUESTION_BANK['14.7'],
  147: TAB3_EXCEL_QUESTION_BANK['14.7'],
  58: TAB3_EXCEL_QUESTION_BANK['14.8'],
  148: TAB3_EXCEL_QUESTION_BANK['14.8'],
  59: TAB3_EXCEL_QUESTION_BANK['14.9'],
  149: TAB3_EXCEL_QUESTION_BANK['14.9'],
  60: TAB3_EXCEL_QUESTION_BANK['15.1'],
  151: TAB3_EXCEL_QUESTION_BANK['15.1'],
  61: TAB3_EXCEL_QUESTION_BANK['15.2'],
  152: TAB3_EXCEL_QUESTION_BANK['15.2'],
  62: TAB3_EXCEL_QUESTION_BANK['15.3'],
  153: TAB3_EXCEL_QUESTION_BANK['15.3'],
  63: TAB3_EXCEL_QUESTION_BANK['15.4'],
  154: TAB3_EXCEL_QUESTION_BANK['15.4'],
  64: TAB3_EXCEL_QUESTION_BANK['15.5'],
  155: TAB3_EXCEL_QUESTION_BANK['15.5'],
  65: TAB3_EXCEL_QUESTION_BANK['15.6'],
  156: TAB3_EXCEL_QUESTION_BANK['15.6'],
  66: TAB3_EXCEL_QUESTION_BANK['15.7'],
  157: TAB3_EXCEL_QUESTION_BANK['15.7'],
  67: TAB3_EXCEL_QUESTION_BANK['15.8'],
  158: TAB3_EXCEL_QUESTION_BANK['15.8'],
  68: TAB3_EXCEL_QUESTION_BANK['15.9'],
  159: TAB3_EXCEL_QUESTION_BANK['15.9'],
  69: TAB3_EXCEL_QUESTION_BANK['16.1'],
  161: TAB3_EXCEL_QUESTION_BANK['16.1'],
  70: TAB3_EXCEL_QUESTION_BANK['16.2'],
  162: TAB3_EXCEL_QUESTION_BANK['16.2'],
  71: TAB3_EXCEL_QUESTION_BANK['16.3'],
  163: TAB3_EXCEL_QUESTION_BANK['16.3'],
  72: TAB3_EXCEL_QUESTION_BANK['16.4'],
  164: TAB3_EXCEL_QUESTION_BANK['16.4'],
  73: TAB3_EXCEL_QUESTION_BANK['16.5'],
  165: TAB3_EXCEL_QUESTION_BANK['16.5'],
  74: TAB3_EXCEL_QUESTION_BANK['16.6'],
  166: TAB3_EXCEL_QUESTION_BANK['16.6'],
  75: TAB3_EXCEL_QUESTION_BANK['16.7'],
  167: TAB3_EXCEL_QUESTION_BANK['16.7'],
  76: TAB3_EXCEL_QUESTION_BANK['16.8'],
  168: TAB3_EXCEL_QUESTION_BANK['16.8'],
};
