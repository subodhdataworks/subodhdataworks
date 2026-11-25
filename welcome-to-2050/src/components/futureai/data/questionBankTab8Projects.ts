// ═══════════════════════════════════════════════════════════════════════════════
// TAB 8: PROJECTS & CAREER PREPARATION — MODULES 38 TO 41 MASTER QUESTION BANK
// 29 Topics • 145 MCQs • 87 Puzzles • 29 Missions • 116 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB8_PROJECTS_QUESTION_BANK: Record<string, TopicQuestionBank> = {

  "38.1": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.1",
    id: 317,
    topicTitle: "Retail Sales Analysis with Excel",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Excel feature can summarize revenue by store?",
        options: [
          { key: "A", text: "PivotTable" },
          { key: "B", text: "Page Break Preview" },
          { key: "C", text: "Text Orientation" },
          { key: "D", text: "Spell Check" },
        ],
        correct: 0,
        explanation: "PivotTable Rows aur Values se store-wise total summarize hota hai.",
        hint: "Focus on PivotTable to master this interview concept."
      },
      {
        id: 2,
        question: "What should you check before summing a sales column?",
        options: [
          { key: "A", text: "Whether the header is blue" },
          { key: "B", text: "Whether sales values are numeric" },
          { key: "C", text: "Whether the workbook has a logo" },
          { key: "D", text: "Whether the sheet is zoomed in" },
        ],
        correct: 1,
        explanation: "Numeric data type check karne se wrong totals avoid hote hain.",
        hint: "Focus on Whether sales values are numeric to master this interview concept."
      },
      {
        id: 3,
        question: "Which formula totals sales values in cells D2 through D20?",
        options: [
          { key: "A", text: "=SUM(D2:D20)" },
          { key: "B", text: "=MAX(D2:D20)" },
          { key: "C", text: "=LEFT(D2:D20)" },
          { key: "D", text: "=COUNT(D2:D20)" },
        ],
        correct: 0,
        explanation: "SUM given range ki numeric values add karta hai.",
        hint: "Focus on =SUM(D2:D20) to master this interview concept."
      },
      {
        id: 4,
        question: "Which chart best compares revenue across product categories?",
        options: [
          { key: "A", text: "Scatter plot of dates" },
          { key: "B", text: "Column chart" },
          { key: "C", text: "Pie chart with hundreds of slices" },
          { key: "D", text: "Blank worksheet" },
        ],
        correct: 1,
        explanation: "Column chart category-wise comparisons clear dikhata hai.",
        hint: "Focus on Column chart to master this interview concept."
      },
      {
        id: 5,
        question: "Why compare a PivotTable grand total with the source total?",
        options: [
          { key: "A", text: "To hide missing values" },
          { key: "B", text: "To increase the number of rows" },
          { key: "C", text: "To validate the summary" },
          { key: "D", text: "To change the file name" },
        ],
        correct: 2,
        explanation: "Source aur summary total match hona quality check hai.",
        hint: "Focus on To validate the summary to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Prepare the retail file",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Open the provided workbook", "Inspect sales columns and formats", "Convert the range into an Excel Table", "Check blank and duplicate records"],
        shuffled: ["Inspect sales columns and formats", "Check blank and duplicate records", "Convert the range into an Excel Table", "Open the provided workbook"],
        expected: ["Open the provided workbook", "Inspect sales columns and formats", "Convert the range into an Excel Table", "Check blank and duplicate records"],
        hint: "Data ko summarize karne se pehle source quality check karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Build a category summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Select the sales Table", "Insert a PivotTable", "Put Category in Rows", "Put Sales in Values", "Verify the grand total"],
        shuffled: ["Put Sales in Values", "Put Category in Rows", "Insert a PivotTable", "Select the sales Table", "Verify the grand total"],
        expected: ["Select the sales Table", "Insert a PivotTable", "Put Category in Rows", "Put Sales in Values", "Verify the grand total"],
        hint: "PivotTable se category-wise revenue summary milti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Present a retail finding",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify highest-revenue category", "Create a comparison chart", "Add a clear chart title", "Write a short evidence-based observation"],
        shuffled: ["Identify highest-revenue category", "Add a clear chart title", "Write a short evidence-based observation", "Create a comparison chart"],
        expected: ["Identify highest-revenue category", "Create a comparison chart", "Add a clear chart title", "Write a short evidence-based observation"],
        hint: "Finding ke saath chart aur context dikhana zaroori hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you begin an Excel retail sales project?",
        meaning: "I would confirm the business question, inspect the sale..."
      },
      {
        id: 2,
        snippet: "What is a PivotTable useful for?",
        meaning: "A PivotTable quickly groups and summarizes data, such a..."
      },
      {
        id: 3,
        snippet: "How would you validate an Excel sales report?",
        meaning: "I would reconcile totals with the source data, check fi..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Retail Sales Analysis with Excel",
        scenario: "A retail manager wants to see total sales for each store without manually adding every row.",
        prompt: "Which Excel feature should you choose?",
        expectedResponse: "C — PivotTable store-wise sums quickly banata hai; result ko source totals se verify karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you begin an Excel retail sales project?",
        sampleAnswer: "I would confirm the business question, inspect the sales file, check data types and missing values, and then calculate the required metrics."
      },
      {
        id: 2,
        question: "What is a PivotTable useful for?",
        sampleAnswer: "A PivotTable quickly groups and summarizes data, such as total revenue by store or product category."
      },
      {
        id: 3,
        question: "How would you validate an Excel sales report?",
        sampleAnswer: "I would reconcile totals with the source data, check filters and dates, and investigate missing or duplicate records."
      },
      {
        id: 4,
        question: "How would you communicate the key finding?",
        sampleAnswer: "I would use a suitable chart, state the metric and time period, and explain the business implication without overstating it."
      },
    ]
  },
  "38.2": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.2",
    id: 318,
    topicTitle: "Customer and Order Analysis with SQL",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which SQL clause combines matching customer and order records?",
        options: [
          { key: "A", text: "JOIN with an ON condition" },
          { key: "B", text: "LIMIT alone" },
          { key: "C", text: "DISTINCT alone" },
          { key: "D", text: "ORDER BY alone" },
        ],
        correct: 0,
        explanation: "JOIN related tables ko matching key ke basis par combine karta hai.",
        hint: "Focus on JOIN with an ON condition to master this interview concept."
      },
      {
        id: 2,
        question: "Which aggregate returns total order amount?",
        options: [
          { key: "A", text: "LOWER(order_amount)" },
          { key: "B", text: "SUM(order_amount)" },
          { key: "C", text: "LENGTH(order_amount)" },
          { key: "D", text: "COUNT(customer_name)" },
        ],
        correct: 1,
        explanation: "SUM numeric order amounts ko add karta hai.",
        hint: "Focus on SUM(order_amount) to master this interview concept."
      },
      {
        id: 3,
        question: "How can you count unique customers who ordered?",
        options: [
          { key: "A", text: "COUNT(DISTINCT customer_id)" },
          { key: "B", text: "ORDER BY customer_id" },
          { key: "C", text: "MAX(customer_id)" },
          { key: "D", text: "COUNT(*) from customers without filters" },
        ],
        correct: 0,
        explanation: "DISTINCT repeated customer IDs ko ek baar count karta hai.",
        hint: "Focus on COUNT(DISTINCT customer_id) to master this interview concept."
      },
      {
        id: 4,
        question: "Which join keeps customers who have no orders?",
        options: [
          { key: "A", text: "CROSS JOIN" },
          { key: "B", text: "INNER JOIN only" },
          { key: "C", text: "SELF JOIN only" },
          { key: "D", text: "LEFT JOIN from customers to orders" },
        ],
        correct: 3,
        explanation: "LEFT JOIN left table ke unmatched customers bhi rakhta hai.",
        hint: "Focus on LEFT JOIN from customers to orders to master this interview concept."
      },
      {
        id: 5,
        question: "What should you inspect before joining customers and orders?",
        options: [
          { key: "A", text: "Whether join keys are unique at the expected grain" },
          { key: "B", text: "Database theme" },
          { key: "C", text: "Column font size" },
          { key: "D", text: "SQL client window position" },
        ],
        correct: 0,
        explanation: "Join grain check karne se duplicate totals ka risk kam hota hai.",
        hint: "Focus on Whether join keys are unique at the expected grain to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Explore customer orders",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Inspect customers table columns", "Inspect orders table columns", "Identify customer_id relationship", "Check duplicate and missing join keys"],
        shuffled: ["Identify customer_id relationship", "Inspect customers table columns", "Check duplicate and missing join keys", "Inspect orders table columns"],
        expected: ["Inspect customers table columns", "Inspect orders table columns", "Identify customer_id relationship", "Check duplicate and missing join keys"],
        hint: "Join se pehle tables ka grain aur key samjho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Create an order summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Join orders to customers on customer_id", "Filter the intended date range", "Group by customer", "Calculate order count and revenue", "Validate a sample customer"],
        shuffled: ["Group by customer", "Validate a sample customer", "Filter the intended date range", "Join orders to customers on customer_id", "Calculate order count and revenue"],
        expected: ["Join orders to customers on customer_id", "Filter the intended date range", "Group by customer", "Calculate order count and revenue", "Validate a sample customer"],
        hint: "Grouping aur validation se useful customer summary milti hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Investigate customers with no orders",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Start with customers", "LEFT JOIN orders", "Find rows where order key is NULL", "Count and inspect unmatched customers"],
        shuffled: ["Start with customers", "Count and inspect unmatched customers", "LEFT JOIN orders", "Find rows where order key is NULL"],
        expected: ["Start with customers", "LEFT JOIN orders", "Find rows where order key is NULL", "Count and inspect unmatched customers"],
        hint: "LEFT JOIN missing order relationships identify karne mein help karta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you analyze customer and order data in S",
        meaning: "I would inspect both tables, identify their keys, join ..."
      },
      {
        id: 2,
        snippet: "Why can joins accidentally inflate revenue?",
        meaning: "A one-to-many or many-to-many join can duplicate order ..."
      },
      {
        id: 3,
        snippet: "How do you count unique ordering customers?",
        meaning: "I use COUNT(DISTINCT customer_id) on the relevant filte..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Customer and Order Analysis with SQL",
        scenario: "A manager asks for the number of distinct customers who placed orders.",
        prompt: "Which expression should you use?",
        expectedResponse: "A — COUNT(DISTINCT customer_id) repeated orders wale customer ko sirf ek baar count karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you analyze customer and order data in SQL?",
        sampleAnswer: "I would inspect both tables, identify their keys, join at the correct grain, calculate metrics, and validate results."
      },
      {
        id: 2,
        question: "Why can joins accidentally inflate revenue?",
        sampleAnswer: "A one-to-many or many-to-many join can duplicate order rows if the grain and keys are not handled correctly."
      },
      {
        id: 3,
        question: "How do you count unique ordering customers?",
        sampleAnswer: "I use COUNT(DISTINCT customer_id) on the relevant filtered order records."
      },
      {
        id: 4,
        question: "How do you identify customers without orders?",
        sampleAnswer: "I can LEFT JOIN customers to orders and filter for NULL on a non-nullable order key."
      },
    ]
  },
  "38.3": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.3",
    id: 319,
    topicTitle: "Exploratory Data Analysis with Python",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Pandas method shows the first few DataFrame rows?",
        options: [
          { key: "A", text: "df.merge()" },
          { key: "B", text: "df.to_csv()" },
          { key: "C", text: "df.head()" },
          { key: "D", text: "df.dropna()" },
        ],
        correct: 2,
        explanation: "head() se sample records inspect kar sakte hain.",
        hint: "Focus on df.head() to master this interview concept."
      },
      {
        id: 2,
        question: "Which method reports column types and non-null counts?",
        options: [
          { key: "A", text: "df.info()" },
          { key: "B", text: "df.rename()" },
          { key: "C", text: "df.plot()" },
          { key: "D", text: "df.sort_values()" },
        ],
        correct: 0,
        explanation: "info() schema aur missing-data overview deta hai.",
        hint: "Focus on df.info() to master this interview concept."
      },
      {
        id: 3,
        question: "Which expression counts missing values by column?",
        options: [
          { key: "A", text: "df.isna().sum()" },
          { key: "B", text: "df.head().sum()" },
          { key: "C", text: "df.reset_index()" },
          { key: "D", text: "df.columns.sum()" },
        ],
        correct: 0,
        explanation: "isna() missing entries mark karta hai aur sum() unhe count karta hai.",
        hint: "Focus on df.isna().sum() to master this interview concept."
      },
      {
        id: 4,
        question: "Which plot helps inspect a numeric variable's distribution?",
        options: [
          { key: "A", text: "Network topology diagram" },
          { key: "B", text: "Calendar view only" },
          { key: "C", text: "Folder tree" },
          { key: "D", text: "Histogram" },
        ],
        correct: 3,
        explanation: "Histogram values ke frequency distribution ko dikhata hai.",
        hint: "Focus on Histogram to master this interview concept."
      },
      {
        id: 5,
        question: "What should you do before dropping outliers?",
        options: [
          { key: "A", text: "Delete all negative values" },
          { key: "B", text: "Remove every maximum value" },
          { key: "C", text: "Ignore the business context" },
          { key: "D", text: "Investigate whether they are valid observations or errors" },
        ],
        correct: 3,
        explanation: "Outliers real events bhi ho sakte hain; blindly remove mat karo.",
        hint: "Focus on Investigate whether they are valid observations or errors to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Start a Python EDA notebook",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Load the dataset", "Inspect shape and column names", "Check types and missing values", "Review descriptive statistics"],
        shuffled: ["Review descriptive statistics", "Load the dataset", "Check types and missing values", "Inspect shape and column names"],
        expected: ["Load the dataset", "Inspect shape and column names", "Check types and missing values", "Review descriptive statistics"],
        hint: "Pehle data structure samjho, phir analysis karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Explore sales distribution",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Select numeric sales column", "Check missing and invalid values", "Plot a histogram", "Inspect unusually high or low observations"],
        shuffled: ["Check missing and invalid values", "Select numeric sales column", "Inspect unusually high or low observations", "Plot a histogram"],
        expected: ["Select numeric sales column", "Check missing and invalid values", "Plot a histogram", "Inspect unusually high or low observations"],
        hint: "Distribution aur unusual observations ko context ke saath samjho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Document EDA findings",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Calculate relevant group summaries", "Validate a few records", "Create a clear plot", "Write a finding and a limitation"],
        shuffled: ["Write a finding and a limitation", "Calculate relevant group summaries", "Validate a few records", "Create a clear plot"],
        expected: ["Calculate relevant group summaries", "Validate a few records", "Create a clear plot", "Write a finding and a limitation"],
        hint: "Evidence aur limitation dono report mein include karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is exploratory data analysis?",
        meaning: "EDA is the process of inspecting data quality, distribu..."
      },
      {
        id: 2,
        snippet: "Which Pandas checks would you run first?",
        meaning: "I would inspect shape, head(), info(), missing values, ..."
      },
      {
        id: 3,
        snippet: "How would you handle an outlier?",
        meaning: "I would investigate its source and business meaning bef..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Exploratory Data Analysis with Python",
        scenario: "Your DataFrame may contain missing values in the revenue column.",
        prompt: "Which Pandas expression identifies the missing count?",
        expectedResponse: "B — isna().sum() selected column mein missing values count karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is exploratory data analysis?",
        sampleAnswer: "EDA is the process of inspecting data quality, distributions, relationships, and patterns before drawing conclusions."
      },
      {
        id: 2,
        question: "Which Pandas checks would you run first?",
        sampleAnswer: "I would inspect shape, head(), info(), missing values, duplicates, and descriptive statistics."
      },
      {
        id: 3,
        question: "How would you handle an outlier?",
        sampleAnswer: "I would investigate its source and business meaning before deciding whether to retain, correct, or exclude it."
      },
      {
        id: 4,
        question: "How would you present an EDA finding?",
        sampleAnswer: "I would state the observed pattern, the metric and segment involved, and any relevant limitations."
      },
    ]
  },
  "38.4": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.4",
    id: 320,
    topicTitle: "Power BI Business Dashboard",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Power BI feature lets users filter visuals interactively?",
        options: [
          { key: "A", text: "Slicer" },
          { key: "B", text: "Data category label" },
          { key: "C", text: "Page wallpaper" },
          { key: "D", text: "Static text box" },
        ],
        correct: 0,
        explanation: "Slicer se user selected category ya date par report filter kar sakta hai.",
        hint: "Focus on Slicer to master this interview concept."
      },
      {
        id: 2,
        question: "What should be defined before choosing dashboard visuals?",
        options: [
          { key: "A", text: "Background image" },
          { key: "B", text: "Business questions and KPIs" },
          { key: "C", text: "Font license" },
          { key: "D", text: "Export file size" },
        ],
        correct: 1,
        explanation: "Business question pehle define karne se right visuals choose hote hain.",
        hint: "Focus on Business questions and KPIs to master this interview concept."
      },
      {
        id: 3,
        question: "Which model layout often simplifies analytical reporting?",
        options: [
          { key: "A", text: "Star schema" },
          { key: "B", text: "One giant text column" },
          { key: "C", text: "Unrelated tables with no keys" },
          { key: "D", text: "Duplicate fact tables" },
        ],
        correct: 0,
        explanation: "Star schema facts aur dimensions ko clearly organize karta hai.",
        hint: "Focus on Star schema to master this interview concept."
      },
      {
        id: 4,
        question: "Which DAX object usually responds dynamically to report filters?",
        options: [
          { key: "A", text: "Measure" },
          { key: "B", text: "CSV filename" },
          { key: "C", text: "Static screenshot" },
          { key: "D", text: "Column header color" },
        ],
        correct: 0,
        explanation: "Measures filter context ke according recalculate hote hain.",
        hint: "Focus on Measure to master this interview concept."
      },
      {
        id: 5,
        question: "What should you test before sharing a dashboard?",
        options: [
          { key: "A", text: "Only theme color" },
          { key: "B", text: "Filters, totals, relationships, and permissions" },
          { key: "C", text: "Only page height" },
          { key: "D", text: "Only title spelling" },
        ],
        correct: 1,
        explanation: "Accurate metrics aur access controls dashboard quality ka part hain.",
        hint: "Focus on Filters, totals, relationships, and permissions to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Plan a business dashboard",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify audience and decisions", "Define KPIs and metric rules", "Review available data", "Sketch a simple report layout"],
        shuffled: ["Identify audience and decisions", "Review available data", "Define KPIs and metric rules", "Sketch a simple report layout"],
        expected: ["Identify audience and decisions", "Define KPIs and metric rules", "Review available data", "Sketch a simple report layout"],
        hint: "Layout se pehle KPIs aur audience clear karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Build the dashboard",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Import or connect data", "Validate model relationships", "Create and test measures", "Add visuals and slicers", "Check interactions"],
        shuffled: ["Import or connect data", "Add visuals and slicers", "Check interactions", "Validate model relationships", "Create and test measures"],
        expected: ["Import or connect data", "Validate model relationships", "Create and test measures", "Add visuals and slicers", "Check interactions"],
        hint: "Visuals ke numbers model aur filters se consistent hone chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 — Review before sharing",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Compare totals with source", "Test slicers and drill paths", "Check readability and accessibility", "Review workspace permissions"],
        shuffled: ["Check readability and accessibility", "Review workspace permissions", "Test slicers and drill paths", "Compare totals with source"],
        expected: ["Compare totals with source", "Test slicers and drill paths", "Check readability and accessibility", "Review workspace permissions"],
        hint: "Dashboard publish karne se pehle quality aur security test karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What makes a useful Power BI dashboard?",
        meaning: "A useful dashboard answers clear business questions wit..."
      },
      {
        id: 2,
        snippet: "Why is data modeling important?",
        meaning: "Correct relationships and a clear model help measures p..."
      },
      {
        id: 3,
        snippet: "What is a DAX measure?",
        meaning: "A measure is a calculation evaluated in the current fil..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Power BI Business Dashboard",
        scenario: "A regional manager wants to switch a sales dashboard between regions with one click.",
        prompt: "Which Power BI visual should you add?",
        expectedResponse: "B — Slicer report visuals ko selected region ke basis par filter kar sakta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What makes a useful Power BI dashboard?",
        sampleAnswer: "A useful dashboard answers clear business questions with accurate KPIs, readable visuals, and relevant interactions."
      },
      {
        id: 2,
        question: "Why is data modeling important?",
        sampleAnswer: "Correct relationships and a clear model help measures produce reliable results across filters."
      },
      {
        id: 3,
        question: "What is a DAX measure?",
        sampleAnswer: "A measure is a calculation evaluated in the current filter context, such as total sales for a selected region."
      },
      {
        id: 4,
        question: "What checks are needed before publishing?",
        sampleAnswer: "I validate measures, relationships, slicers, accessibility, data freshness, and access permissions."
      },
    ]
  },
  "38.5": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.5",
    id: 321,
    topicTitle: "GenAI-Assisted Analysis with Verification",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should you do with an AI-generated revenue percentage?",
        options: [
          { key: "A", text: "Remove the source data" },
          { key: "B", text: "Recalculate it from verified source values" },
          { key: "C", text: "Publish it immediately" },
          { key: "D", text: "Assume confident wording proves it" },
        ],
        correct: 1,
        explanation: "AI calculation ko actual data se verify karna zaroori hai.",
        hint: "Focus on Recalculate it from verified source values to master this interview concept."
      },
      {
        id: 2,
        question: "What is safest when prompting a public AI tool?",
        options: [
          { key: "A", text: "Share passwords for context" },
          { key: "B", text: "Upload private contracts without approval" },
          { key: "C", text: "Use approved anonymized or synthetic data" },
          { key: "D", text: "Paste confidential customer IDs" },
        ],
        correct: 2,
        explanation: "Sensitive information sirf approved tools aur policies ke according use karo.",
        hint: "Focus on Use approved anonymized or synthetic data to master this interview concept."
      },
      {
        id: 3,
        question: "Which output is a warning sign of an AI hallucination?",
        options: [
          { key: "A", text: "A request for clarification" },
          { key: "B", text: "A cited source that can be checked" },
          { key: "C", text: "A clearly labeled assumption" },
          { key: "D", text: "A precise statistic with no supporting data" },
        ],
        correct: 3,
        explanation: "Unsupported numbers ko evidence nahi maanna chahiye.",
        hint: "Focus on A precise statistic with no supporting data to master this interview concept."
      },
      {
        id: 4,
        question: "How can AI help with an analysis plan?",
        options: [
          { key: "A", text: "Draft steps for human review" },
          { key: "B", text: "Decide business policy automatically" },
          { key: "C", text: "Guarantee a correct conclusion" },
          { key: "D", text: "Replace all data validation" },
        ],
        correct: 0,
        explanation: "AI planning mein assist karta hai, final validation human ki responsibility hai.",
        hint: "Focus on Draft steps for human review to master this interview concept."
      },
      {
        id: 5,
        question: "What should accompany an AI-assisted report?",
        options: [
          { key: "A", text: "Fabricated sample size" },
          { key: "B", text: "Verified evidence and disclosed limitations" },
          { key: "C", text: "Hidden assumptions" },
          { key: "D", text: "Unchecked references" },
        ],
        correct: 1,
        explanation: "Report ko source evidence aur limitations ke saath present karo.",
        hint: "Focus on Verified evidence and disclosed limitations to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Safely prepare an AI request",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check workplace AI policy", "Remove or mask sensitive fields", "State the business question", "Ask for a reviewable draft"],
        shuffled: ["Check workplace AI policy", "State the business question", "Remove or mask sensitive fields", "Ask for a reviewable draft"],
        expected: ["Check workplace AI policy", "Remove or mask sensitive fields", "State the business question", "Ask for a reviewable draft"],
        hint: "Confidential data share karne se pehle approval aur minimization zaroori hai."
      },
      {
        id: 2,
        title: "Puzzle 2 — Verify an AI claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify the stated metric", "Find authoritative source values", "Recalculate independently", "Compare results", "Correct or remove unsupported claim"],
        shuffled: ["Find authoritative source values", "Recalculate independently", "Identify the stated metric", "Compare results", "Correct or remove unsupported claim"],
        expected: ["Identify the stated metric", "Find authoritative source values", "Recalculate independently", "Compare results", "Correct or remove unsupported claim"],
        hint: "Confident AI answer ko bhi source data se check karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Finalize an AI-assisted summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Separate facts from suggestions", "Verify every important number", "Review fairness and privacy", "Add limitations", "Obtain responsible human approval"],
        shuffled: ["Review fairness and privacy", "Obtain responsible human approval", "Verify every important number", "Separate facts from suggestions", "Add limitations"],
        expected: ["Separate facts from suggestions", "Verify every important number", "Review fairness and privacy", "Add limitations", "Obtain responsible human approval"],
        hint: "AI-assisted reporting mein accountability human ki rehti hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you use GenAI in analytics responsibly?",
        meaning: "I would use it to draft plans, explanations, or code wh..."
      },
      {
        id: 2,
        snippet: "What is an AI hallucination?",
        meaning: "It is content generated by an AI system that appears pl..."
      },
      {
        id: 3,
        snippet: "How do you verify an AI-generated insight?",
        meaning: "I trace it to approved source data, recompute the metri..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "GenAI-Assisted Analysis with Verification",
        scenario: "AI claims sales grew 35%, but your verified report shows 12%.",
        prompt: "What is the correct next step?",
        expectedResponse: "C — Verified data ko priority do; AI-generated 35% claim ko correct ya remove karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you use GenAI in analytics responsibly?",
        sampleAnswer: "I would use it to draft plans, explanations, or code while protecting data and independently validating important outputs."
      },
      {
        id: 2,
        question: "What is an AI hallucination?",
        sampleAnswer: "It is content generated by an AI system that appears plausible but is unsupported or incorrect."
      },
      {
        id: 3,
        question: "How do you verify an AI-generated insight?",
        sampleAnswer: "I trace it to approved source data, recompute the metric, check assumptions, and review the interpretation."
      },
      {
        id: 4,
        question: "Who is accountable for the final business report?",
        sampleAnswer: "The responsible human analyst and organization remain accountable, even if AI helped prepare a draft."
      },
    ]
  },
  "38.6": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 38,
    moduleName: "Module 38: Guided Analytics Projects",
    topicKey: "38.6",
    id: 322,
    topicTitle: "Combine Tools in One End-to-End Workflow",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which tool is especially suited to querying relational transaction data?",
        options: [
          { key: "A", text: "Slide transitions" },
          { key: "B", text: "Image cropping" },
          { key: "C", text: "Audio editing" },
          { key: "D", text: "SQL" },
        ],
        correct: 3,
        explanation: "SQL relational tables ko filter, join aur aggregate karne ke kaam aata hai.",
        hint: "Focus on SQL to master this interview concept."
      },
      {
        id: 2,
        question: "Which tool is commonly used for exploratory analysis and custom data cleaning?",
        options: [
          { key: "A", text: "Email signatures" },
          { key: "B", text: "PowerPoint animations" },
          { key: "C", text: "Browser bookmarks" },
          { key: "D", text: "Python with Pandas" },
        ],
        correct: 3,
        explanation: "Pandas data cleaning aur EDA ke liye useful hai.",
        hint: "Focus on Python with Pandas to master this interview concept."
      },
      {
        id: 3,
        question: "Which tool is commonly used to publish interactive business reports?",
        options: [
          { key: "A", text: "Notepad alone" },
          { key: "B", text: "Plain calculator" },
          { key: "C", text: "File compression utility" },
          { key: "D", text: "Power BI" },
        ],
        correct: 3,
        explanation: "Power BI interactive visuals aur sharing support karta hai.",
        hint: "Focus on Power BI to master this interview concept."
      },
      {
        id: 4,
        question: "What keeps an end-to-end workflow trustworthy?",
        options: [
          { key: "A", text: "Documented transformations and reconciled metrics" },
          { key: "B", text: "Copying numbers by hand without checks" },
          { key: "C", text: "Deleting raw data" },
          { key: "D", text: "Changing KPI definitions across tools" },
        ],
        correct: 0,
        explanation: "Same metric definition aur lineage maintain karna zaroori hai.",
        hint: "Focus on Documented transformations and reconciled metrics to master this interview concept."
      },
      {
        id: 5,
        question: "What should happen when source data is updated?",
        options: [
          { key: "A", text: "Refresh dependent steps and revalidate outputs" },
          { key: "B", text: "Keep old dashboard numbers forever" },
          { key: "C", text: "Change the metric formula secretly" },
          { key: "D", text: "Remove date filters" },
        ],
        correct: 0,
        explanation: "Refresh ke baad checks repeat karo.",
        hint: "Focus on Refresh dependent steps and revalidate outputs to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Plan the tool workflow",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define business question and KPIs", "Identify approved data sources", "Assign tasks to SQL, Python, Excel, and Power BI", "Define validation checkpoints"],
        shuffled: ["Identify approved data sources", "Assign tasks to SQL, Python, Excel, and Power BI", "Define validation checkpoints", "Define business question and KPIs"],
        expected: ["Define business question and KPIs", "Identify approved data sources", "Assign tasks to SQL, Python, Excel, and Power BI", "Define validation checkpoints"],
        hint: "Har tool ka role aur checks pehle clear karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Build the analytics pipeline",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Extract approved data with SQL", "Clean and explore with Python or Excel", "Validate metric totals", "Model and visualize in Power BI", "Document findings"],
        shuffled: ["Clean and explore with Python or Excel", "Validate metric totals", "Model and visualize in Power BI", "Extract approved data with SQL", "Document findings"],
        expected: ["Extract approved data with SQL", "Clean and explore with Python or Excel", "Validate metric totals", "Model and visualize in Power BI", "Document findings"],
        hint: "Tools connect karte waqt metric consistency maintain karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Deliver a reproducible report",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Save query and cleaning steps", "Record data date and definitions", "Refresh and test outputs", "Review recommendations", "Share with authorized audience"],
        shuffled: ["Share with authorized audience", "Refresh and test outputs", "Save query and cleaning steps", "Record data date and definitions", "Review recommendations"],
        expected: ["Save query and cleaning steps", "Record data date and definitions", "Refresh and test outputs", "Review recommendations", "Share with authorized audience"],
        hint: "Reproducibility aur access control final delivery ka part hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you combine SQL, Python, and Power BI?",
        meaning: "I would extract and aggregate data in SQL, clean and ex..."
      },
      {
        id: 2,
        snippet: "Where does Excel fit in an end-to-end workflow?",
        meaning: "Excel can support source inspection, lightweight checks..."
      },
      {
        id: 3,
        snippet: "How do you prevent inconsistent KPI values across ",
        meaning: "I document metric definitions, use consistent filters a..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Combine Tools in One End-to-End Workflow",
        scenario: "A team needs database extraction, data cleaning, and an interactive dashboard.",
        prompt: "Which workflow best fits?",
        expectedResponse: "B — SQL se extract, Python se clean aur Power BI se report build kar sakte hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you combine SQL, Python, and Power BI?",
        sampleAnswer: "I would extract and aggregate data in SQL, clean and explore it in Python, and build a validated interactive report in Power BI."
      },
      {
        id: 2,
        question: "Where does Excel fit in an end-to-end workflow?",
        sampleAnswer: "Excel can support source inspection, lightweight checks, business review, and reconciliation where appropriate."
      },
      {
        id: 3,
        question: "How do you prevent inconsistent KPI values across tools?",
        sampleAnswer: "I document metric definitions, use consistent filters and grains, and reconcile outputs at each stage."
      },
      {
        id: 4,
        question: "How would you make the workflow repeatable?",
        sampleAnswer: "I would save queries and scripts, record assumptions, automate approved refreshes, and validate each new run."
      },
    ]
  },
  "39.1": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.1",
    id: 323,
    topicTitle: "Choose a Portfolio Problem",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which portfolio problem is most clearly measurable?",
        options: [
          { key: "A", text: "Identify why monthly order cancellations increased" },
          { key: "B", text: "Copy a random chart" },
          { key: "C", text: "Make a colorful dashboard without a question" },
          { key: "D", text: "Use every available tool regardless of need" },
        ],
        correct: 0,
        explanation: "Measurable business question se focused analysis banta hai.",
        hint: "Focus on Identify why monthly order cancellations increased to master this interview concept."
      },
      {
        id: 2,
        question: "What should a good project question identify?",
        options: [
          { key: "A", text: "Business decision and metric" },
          { key: "B", text: "Laptop brand" },
          { key: "C", text: "Number of slides first" },
          { key: "D", text: "Only preferred chart color" },
        ],
        correct: 0,
        explanation: "Question ko decision aur measurable KPI se link karo.",
        hint: "Focus on Business decision and metric to master this interview concept."
      },
      {
        id: 3,
        question: "Which project scope is best for a beginner portfolio?",
        options: [
          { key: "A", text: "An impossible real-time global model" },
          { key: "B", text: "Every industry problem at once" },
          { key: "C", text: "A dataset with no permitted use" },
          { key: "D", text: "A manageable question with accessible data" },
        ],
        correct: 3,
        explanation: "Focused scope se end-to-end quality show hoti hai.",
        hint: "Focus on A manageable question with accessible data to master this interview concept."
      },
      {
        id: 4,
        question: "Why state the intended audience?",
        options: [
          { key: "A", text: "To tailor analysis to the decision-maker" },
          { key: "B", text: "To skip limitations" },
          { key: "C", text: "To avoid validating numbers" },
          { key: "D", text: "To change the source file name" },
        ],
        correct: 0,
        explanation: "Audience ke needs analysis aur storytelling ko guide karte hain.",
        hint: "Focus on To tailor analysis to the decision-maker to master this interview concept."
      },
      {
        id: 5,
        question: "What makes a portfolio project credible?",
        options: [
          { key: "A", text: "Only a large title" },
          { key: "B", text: "Screenshots with no explanation" },
          { key: "C", text: "Unsupported claims of impact" },
          { key: "D", text: "Clear problem, reproducible method, evidence, and limitations" },
        ],
        correct: 3,
        explanation: "Credibility evidence aur transparent process se aati hai.",
        hint: "Focus on Clear problem, reproducible method, evidence, and limitations to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Select a project idea",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List business areas of interest", "Identify a specific decision problem", "Check data availability and permissions", "Narrow the question to a feasible scope"],
        shuffled: ["Check data availability and permissions", "Narrow the question to a feasible scope", "List business areas of interest", "Identify a specific decision problem"],
        expected: ["List business areas of interest", "Identify a specific decision problem", "Check data availability and permissions", "Narrow the question to a feasible scope"],
        hint: "Feasible scope se project complete aur explainable rahega."
      },
      {
        id: 2,
        title: "Puzzle 2 — Turn an idea into a question",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State target audience", "Define the decision to support", "Choose a measurable outcome", "Write the project objective"],
        shuffled: ["State target audience", "Define the decision to support", "Write the project objective", "Choose a measurable outcome"],
        expected: ["State target audience", "Define the decision to support", "Choose a measurable outcome", "Write the project objective"],
        hint: "Good objective audience aur measurable result se connected hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Review project feasibility",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Estimate available time", "Confirm data access", "Identify required skills", "Remove unnecessary features", "Finalize deliverables"],
        shuffled: ["Estimate available time", "Confirm data access", "Finalize deliverables", "Remove unnecessary features", "Identify required skills"],
        expected: ["Estimate available time", "Confirm data access", "Identify required skills", "Remove unnecessary features", "Finalize deliverables"],
        hint: "Portfolio mein quality quantity se zyada important hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you choose a portfolio problem?",
        meaning: "I select a relevant business question that is measurabl..."
      },
      {
        id: 2,
        snippet: "What makes a portfolio project valuable to recruit",
        meaning: "It shows problem framing, data handling, analysis, comm..."
      },
      {
        id: 3,
        snippet: "How do you avoid an oversized project?",
        meaning: "I narrow the scope to a specific audience, metric, time..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Portfolio Problem",
        scenario: "You have retail sales data and two weeks to complete a portfolio project.",
        prompt: "Which problem should you choose?",
        expectedResponse: "C — Clear, achievable business question choose karna best starting point hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you choose a portfolio problem?",
        sampleAnswer: "I select a relevant business question that is measurable, feasible, and supported by accessible data."
      },
      {
        id: 2,
        question: "What makes a portfolio project valuable to recruiters?",
        sampleAnswer: "It shows problem framing, data handling, analysis, communication, and honest limitations."
      },
      {
        id: 3,
        question: "How do you avoid an oversized project?",
        sampleAnswer: "I narrow the scope to a specific audience, metric, timeframe, and deliverable."
      },
      {
        id: 4,
        question: "What would you write as a project objective?",
        sampleAnswer: "I would describe the business decision, the metric to analyze, and the expected output without promising a result."
      },
    ]
  },
  "39.2": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.2",
    id: 324,
    topicTitle: "Find and Assess a Dataset",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should you check before using a public dataset?",
        options: [
          { key: "A", text: "License and permitted use" },
          { key: "B", text: "Keyboard layout" },
          { key: "C", text: "Screen resolution" },
          { key: "D", text: "Chart theme" },
        ],
        correct: 0,
        explanation: "Dataset license aur usage terms follow karna zaroori hai.",
        hint: "Focus on License and permitted use to master this interview concept."
      },
      {
        id: 2,
        question: "What does one row per order mean?",
        options: [
          { key: "A", text: "Every row is a month" },
          { key: "B", text: "Every row is a chart" },
          { key: "C", text: "The dataset grain is an order" },
          { key: "D", text: "Every row is a customer" },
        ],
        correct: 2,
        explanation: "Grain batata hai ki ek row kis entity ko represent karti hai.",
        hint: "Focus on The dataset grain is an order to master this interview concept."
      },
      {
        id: 3,
        question: "Which issue can distort customer counts?",
        options: [
          { key: "A", text: "Duplicate customer records" },
          { key: "B", text: "A short column header" },
          { key: "C", text: "Worksheet zoom" },
          { key: "D", text: "A gray background" },
        ],
        correct: 0,
        explanation: "Duplicates count ko inflate kar sakte hain.",
        hint: "Focus on Duplicate customer records to master this interview concept."
      },
      {
        id: 4,
        question: "What is a data dictionary used for?",
        options: [
          { key: "A", text: "Replacing the raw dataset" },
          { key: "B", text: "Hiding missing values" },
          { key: "C", text: "Explaining columns and their meanings" },
          { key: "D", text: "Encrypting screenshots" },
        ],
        correct: 2,
        explanation: "Data dictionary fields aur units ko document karta hai.",
        hint: "Focus on Explaining columns and their meanings to master this interview concept."
      },
      {
        id: 5,
        question: "What should you do if dataset provenance is unclear?",
        options: [
          { key: "A", text: "Ignore usage restrictions" },
          { key: "B", text: "Treat it as verified" },
          { key: "C", text: "Investigate source credibility before use" },
          { key: "D", text: "Invent a source" },
        ],
        correct: 2,
        explanation: "Unknown provenance se trust aur legal risks ho sakte hain.",
        hint: "Focus on Investigate source credibility before use to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Assess a dataset source",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify publisher and source link", "Review license and allowed use", "Check publication and update dates", "Record provenance"],
        shuffled: ["Record provenance", "Check publication and update dates", "Review license and allowed use", "Identify publisher and source link"],
        expected: ["Identify publisher and source link", "Review license and allowed use", "Check publication and update dates", "Record provenance"],
        hint: "Data use se pehle source aur permission verify karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Inspect dataset quality",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Load a small sample", "Identify grain and column meanings", "Check types and missing values", "Inspect duplicates and date coverage"],
        shuffled: ["Load a small sample", "Inspect duplicates and date coverage", "Identify grain and column meanings", "Check types and missing values"],
        expected: ["Load a small sample", "Identify grain and column meanings", "Check types and missing values", "Inspect duplicates and date coverage"],
        hint: "Dataset fitness question ke according assess karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Decide if data is usable",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Compare available fields with project KPIs", "Review coverage and bias", "Note limitations", "Accept dataset or find an alternative"],
        shuffled: ["Review coverage and bias", "Note limitations", "Compare available fields with project KPIs", "Accept dataset or find an alternative"],
        expected: ["Compare available fields with project KPIs", "Review coverage and bias", "Note limitations", "Accept dataset or find an alternative"],
        hint: "Har dataset har business question ke liye suitable nahi hota."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you evaluate a dataset for a portfolio p",
        meaning: "I would review its source, license, grain, coverage, co..."
      },
      {
        id: 2,
        snippet: "What is data grain?",
        meaning: "Data grain describes what one row represents, such as o..."
      },
      {
        id: 3,
        snippet: "Why is dataset provenance important?",
        meaning: "Provenance helps establish trust, reproducibility, and ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Find and Assess a Dataset",
        scenario: "A dataset has no clear source, license, or description.",
        prompt: "What should you do first?",
        expectedResponse: "A — Source aur license confirm kiye bina use mat karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you evaluate a dataset for a portfolio project?",
        sampleAnswer: "I would review its source, license, grain, coverage, completeness, data types, and relevance to the question."
      },
      {
        id: 2,
        question: "What is data grain?",
        sampleAnswer: "Data grain describes what one row represents, such as one order or one transaction line."
      },
      {
        id: 3,
        question: "Why is dataset provenance important?",
        sampleAnswer: "Provenance helps establish trust, reproducibility, and whether the data can be used and shared."
      },
      {
        id: 4,
        question: "How would you document dataset limitations?",
        sampleAnswer: "I would note missing periods, sampling bias, unclear fields, and any restrictions that affect interpretation."
      },
    ]
  },
  "39.3": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.3",
    id: 325,
    topicTitle: "Define KPIs and Success Criteria",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What does KPI stand for?",
        options: [
          { key: "A", text: "Knowledge Process Index" },
          { key: "B", text: "Key Price Inventory" },
          { key: "C", text: "Key Performance Indicator" },
          { key: "D", text: "Known Program Interface" },
        ],
        correct: 2,
        explanation: "KPI measurable performance indicator hota hai.",
        hint: "Focus on Key Performance Indicator to master this interview concept."
      },
      {
        id: 2,
        question: "Which formula calculates order cancellation rate?",
        options: [
          { key: "A", text: "Cancelled orders divided by total orders" },
          { key: "B", text: "Cancelled orders plus total orders" },
          { key: "C", text: "Customers multiplied by products" },
          { key: "D", text: "Total revenue divided by employees" },
        ],
        correct: 0,
        explanation: "Cancellation rate ke numerator aur denominator clear hone chahiye.",
        hint: "Focus on Cancelled orders divided by total orders to master this interview concept."
      },
      {
        id: 3,
        question: "Why define a KPI's time period?",
        options: [
          { key: "A", text: "To hide data quality issues" },
          { key: "B", text: "To make comparisons consistent" },
          { key: "C", text: "To improve chart color" },
          { key: "D", text: "To remove all filters" },
        ],
        correct: 1,
        explanation: "Same period definition se fair comparison hota hai.",
        hint: "Focus on To make comparisons consistent to master this interview concept."
      },
      {
        id: 4,
        question: "What is a baseline?",
        options: [
          { key: "A", text: "A duplicate dataset" },
          { key: "B", text: "A dashboard footer" },
          { key: "C", text: "An invalid SQL keyword" },
          { key: "D", text: "A reference value used for comparison" },
        ],
        correct: 3,
        explanation: "Baseline se improvement ya change measure karte hain.",
        hint: "Focus on A reference value used for comparison to master this interview concept."
      },
      {
        id: 5,
        question: "What is a reasonable success criterion?",
        options: [
          { key: "A", text: "A number with no data source" },
          { key: "B", text: "A specific, measurable outcome tied to the goal" },
          { key: "C", text: "An unrelated social media count" },
          { key: "D", text: "A vague promise of success" },
        ],
        correct: 1,
        explanation: "Success criterion measurable aur relevant hona chahiye.",
        hint: "Focus on A specific, measurable outcome tied to the goal to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Define a cancellation KPI",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify cancelled orders", "Identify all eligible orders", "Set period and exclusions", "Write numerator and denominator"],
        shuffled: ["Identify cancelled orders", "Write numerator and denominator", "Set period and exclusions", "Identify all eligible orders"],
        expected: ["Identify cancelled orders", "Identify all eligible orders", "Set period and exclusions", "Write numerator and denominator"],
        hint: "KPI calculation ki definition explicit rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Set project success criteria",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Confirm business objective", "Choose primary KPI", "Record baseline and target method", "Define how results will be validated"],
        shuffled: ["Define how results will be validated", "Record baseline and target method", "Confirm business objective", "Choose primary KPI"],
        expected: ["Confirm business objective", "Choose primary KPI", "Record baseline and target method", "Define how results will be validated"],
        hint: "Target ko evidence aur business goal se connect karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Check metric consistency",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Apply same date range", "Apply same eligibility filters", "Recalculate numerator and denominator", "Reconcile reported percentage"],
        shuffled: ["Recalculate numerator and denominator", "Reconcile reported percentage", "Apply same date range", "Apply same eligibility filters"],
        expected: ["Apply same date range", "Apply same eligibility filters", "Recalculate numerator and denominator", "Reconcile reported percentage"],
        hint: "Different filters misleading comparison bana sakte hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is a KPI?",
        meaning: "A KPI is a measurable indicator used to track performan..."
      },
      {
        id: 2,
        snippet: "How would you define a cancellation rate?",
        meaning: "I would divide the number of cancelled eligible orders ..."
      },
      {
        id: 3,
        snippet: "What is the role of a baseline?",
        meaning: "A baseline provides a reference for measuring changes o..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Define KPIs and Success Criteria",
        scenario: "A project tracks cancelled orders out of all eligible orders.",
        prompt: "Which metric should be reported?",
        expectedResponse: "A — Cancellation rate ko clearly defined numerator aur denominator se calculate karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a KPI?",
        sampleAnswer: "A KPI is a measurable indicator used to track performance against a business objective."
      },
      {
        id: 2,
        question: "How would you define a cancellation rate?",
        sampleAnswer: "I would divide the number of cancelled eligible orders by total eligible orders for the same period and state any exclusions."
      },
      {
        id: 3,
        question: "What is the role of a baseline?",
        sampleAnswer: "A baseline provides a reference for measuring changes or progress."
      },
      {
        id: 4,
        question: "How would you validate a KPI?",
        sampleAnswer: "I would document its formula, source, grain, filters, time period, and reconciliation checks."
      },
    ]
  },
  "39.4": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.4",
    id: 326,
    topicTitle: "Document Cleaning and Analysis Steps",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Why record data-cleaning steps?",
        options: [
          { key: "A", text: "To avoid version control" },
          { key: "B", text: "To hide deleted rows" },
          { key: "C", text: "To increase file size" },
          { key: "D", text: "So another analyst can reproduce the result" },
        ],
        correct: 3,
        explanation: "Documented steps reproducibility improve karte hain.",
        hint: "Focus on So another analyst can reproduce the result to master this interview concept."
      },
      {
        id: 2,
        question: "What should a cleaning log record?",
        options: [
          { key: "A", text: "Only a screenshot of the final chart" },
          { key: "B", text: "The transformation, reason, and affected fields" },
          { key: "C", text: "Unverified business impact" },
          { key: "D", text: "Only the analyst's favorite color" },
        ],
        correct: 1,
        explanation: "Cleaning log mein what, why aur impact clear hona chahiye.",
        hint: "Focus on The transformation, reason, and affected fields to master this interview concept."
      },
      {
        id: 3,
        question: "What is a data dictionary?",
        options: [
          { key: "A", text: "A chart palette" },
          { key: "B", text: "A list of computer passwords" },
          { key: "C", text: "A file deletion command" },
          { key: "D", text: "A reference describing field names and meanings" },
        ],
        correct: 3,
        explanation: "Field definitions se analysis interpretation consistent rehta hai.",
        hint: "Focus on A reference describing field names and meanings to master this interview concept."
      },
      {
        id: 4,
        question: "Why preserve the raw data?",
        options: [
          { key: "A", text: "To make charts colorful" },
          { key: "B", text: "To avoid checking duplicates" },
          { key: "C", text: "To allow rechecking and reproducibility" },
          { key: "D", text: "To guarantee no errors" },
        ],
        correct: 2,
        explanation: "Raw source ko untouched rakhna audit mein helpful hai.",
        hint: "Focus on To allow rechecking and reproducibility to master this interview concept."
      },
      {
        id: 5,
        question: "What is a good practice when removing duplicates?",
        options: [
          { key: "A", text: "Document the duplicate rule and verify the result" },
          { key: "B", text: "Delete all repeated values blindly" },
          { key: "C", text: "Remove every second row" },
          { key: "D", text: "Hide duplicate counts" },
        ],
        correct: 0,
        explanation: "Duplicate definition grain aur business rule par depend karti hai.",
        hint: "Focus on Document the duplicate rule and verify the result to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Record a cleaning decision",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify the issue", "Define the correction rule", "Apply the transformation", "Record before and after counts"],
        shuffled: ["Apply the transformation", "Identify the issue", "Record before and after counts", "Define the correction rule"],
        expected: ["Identify the issue", "Define the correction rule", "Apply the transformation", "Record before and after counts"],
        hint: "Cleaning rule aur impact transparent rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Make an analysis reproducible",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Preserve original source", "Save scripts or query steps", "Document parameters and versions", "Re-run and compare outputs"],
        shuffled: ["Document parameters and versions", "Save scripts or query steps", "Preserve original source", "Re-run and compare outputs"],
        expected: ["Preserve original source", "Save scripts or query steps", "Document parameters and versions", "Re-run and compare outputs"],
        hint: "Same inputs par consistent outputs reproduce hone chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 — Prepare a handover note",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Write dataset source and grain", "List cleaning decisions", "Define calculated metrics", "Record unresolved limitations"],
        shuffled: ["Write dataset source and grain", "Define calculated metrics", "Record unresolved limitations", "List cleaning decisions"],
        expected: ["Write dataset source and grain", "List cleaning decisions", "Define calculated metrics", "Record unresolved limitations"],
        hint: "Handover document next analyst ko context deta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "Why document data cleaning?",
        meaning: "Documentation explains what changed, why it changed, an..."
      },
      {
        id: 2,
        snippet: "What belongs in a cleaning log?",
        meaning: "The issue, affected columns, transformation rule, befor..."
      },
      {
        id: 3,
        snippet: "Why keep an untouched raw dataset?",
        meaning: "It allows revalidation, audit, and rebuilding the analy..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Document Cleaning and Analysis Steps",
        scenario: "You remove duplicate orders from a dataset.",
        prompt: "What should you document?",
        expectedResponse: "A — Duplicate removal rule aur row counts record karo taaki work reproducible rahe."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "Why document data cleaning?",
        sampleAnswer: "Documentation explains what changed, why it changed, and how another analyst can reproduce the output."
      },
      {
        id: 2,
        question: "What belongs in a cleaning log?",
        sampleAnswer: "The issue, affected columns, transformation rule, before-and-after counts, and unresolved exceptions."
      },
      {
        id: 3,
        question: "Why keep an untouched raw dataset?",
        sampleAnswer: "It allows revalidation, audit, and rebuilding the analysis if assumptions change."
      },
      {
        id: 4,
        question: "How would you explain duplicate removal?",
        sampleAnswer: "I would define the business key and grain, justify the rule, and report the impact on row counts and metrics."
      },
    ]
  },
  "39.5": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.5",
    id: 327,
    topicTitle: "Create Visuals and a Dashboard",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which chart is usually best for monthly sales trends?",
        options: [
          { key: "A", text: "Line chart" },
          { key: "B", text: "Single KPI card only" },
          { key: "C", text: "Pie chart with 30 slices" },
          { key: "D", text: "Random color grid" },
        ],
        correct: 0,
        explanation: "Line chart time-series trend ko clearly dikhata hai.",
        hint: "Focus on Line chart to master this interview concept."
      },
      {
        id: 2,
        question: "Which chart is usually best for comparing product categories?",
        options: [
          { key: "A", text: "Bar chart" },
          { key: "B", text: "A text paragraph only" },
          { key: "C", text: "A scatter plot of IDs" },
          { key: "D", text: "A map without locations" },
        ],
        correct: 0,
        explanation: "Bar chart categories compare karne mein useful hai.",
        hint: "Focus on Bar chart to master this interview concept."
      },
      {
        id: 3,
        question: "Why include a clear chart title?",
        options: [
          { key: "A", text: "To increase totals" },
          { key: "B", text: "To fix missing values automatically" },
          { key: "C", text: "To state the metric and context" },
          { key: "D", text: "To change source data" },
        ],
        correct: 2,
        explanation: "Title reader ko batata hai chart kya show kar raha hai.",
        hint: "Focus on To state the metric and context to master this interview concept."
      },
      {
        id: 4,
        question: "What makes a dashboard accessible?",
        options: [
          { key: "A", text: "Hidden units" },
          { key: "B", text: "Readable labels, contrast, and non-color cues" },
          { key: "C", text: "Tiny text" },
          { key: "D", text: "Color alone for meaning" },
        ],
        correct: 1,
        explanation: "Accessible design zyada users ko report samajhne mein help karta hai.",
        hint: "Focus on Readable labels, contrast, and non-color cues to master this interview concept."
      },
      {
        id: 5,
        question: "What should you verify before presenting a chart?",
        options: [
          { key: "A", text: "That the background is dark" },
          { key: "B", text: "That all values are rounded upward" },
          { key: "C", text: "That displayed values match validated calculations" },
          { key: "D", text: "That every chart has animation" },
        ],
        correct: 2,
        explanation: "Visual ke underlying metrics accurate hone chahiye.",
        hint: "Focus on That displayed values match validated calculations to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Choose dashboard visuals",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define audience and KPI", "Match each question to a chart type", "Sketch a simple layout", "Prioritize key findings"],
        shuffled: ["Define audience and KPI", "Sketch a simple layout", "Match each question to a chart type", "Prioritize key findings"],
        expected: ["Define audience and KPI", "Match each question to a chart type", "Sketch a simple layout", "Prioritize key findings"],
        hint: "Chart choice question ke according honi chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 — Build a clear dashboard",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Add KPI cards", "Add trend and comparison charts", "Include relevant filters", "Label axes, units, and dates"],
        shuffled: ["Label axes, units, and dates", "Add KPI cards", "Include relevant filters", "Add trend and comparison charts"],
        expected: ["Add KPI cards", "Add trend and comparison charts", "Include relevant filters", "Label axes, units, and dates"],
        hint: "Dashboard ko understandable aur navigable rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Quality-check the report",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Validate numbers against source", "Test filters and interactions", "Check contrast and labels", "Record caveats"],
        shuffled: ["Check contrast and labels", "Test filters and interactions", "Record caveats", "Validate numbers against source"],
        expected: ["Validate numbers against source", "Test filters and interactions", "Check contrast and labels", "Record caveats"],
        hint: "Dashboard visual aur data dono validate karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you choose a chart?",
        meaning: "I match the chart to the question: bars for comparison,..."
      },
      {
        id: 2,
        snippet: "What should a portfolio dashboard contain?",
        meaning: "It should contain validated KPIs, clear visuals, useful..."
      },
      {
        id: 3,
        snippet: "How do you prevent misleading visuals?",
        meaning: "I use appropriate scales, clear units, consistent perio..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Create Visuals and a Dashboard",
        scenario: "A recruiter wants to see how monthly revenue changed across one year.",
        prompt: "Which visual best communicates the trend?",
        expectedResponse: "B — Line chart time ke across change ko easily show karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you choose a chart?",
        sampleAnswer: "I match the chart to the question: bars for comparison, lines for trends, and suitable plots for distributions or relationships."
      },
      {
        id: 2,
        question: "What should a portfolio dashboard contain?",
        sampleAnswer: "It should contain validated KPIs, clear visuals, useful filters, labels, and a concise explanation of findings."
      },
      {
        id: 3,
        question: "How do you prevent misleading visuals?",
        sampleAnswer: "I use appropriate scales, clear units, consistent periods, and avoid hiding important context."
      },
      {
        id: 4,
        question: "How would you check dashboard accessibility?",
        sampleAnswer: "I would review text size, contrast, descriptive labels, and whether meaning depends only on color."
      },
    ]
  },
  "39.6": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.6",
    id: 328,
    topicTitle: "Write a Project Case Study",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which section should explain the business question?",
        options: [
          { key: "A", text: "Animation settings" },
          { key: "B", text: "Export history" },
          { key: "C", text: "Font settings" },
          { key: "D", text: "Problem statement" },
        ],
        correct: 3,
        explanation: "Problem statement project ka purpose define karta hai.",
        hint: "Focus on Problem statement to master this interview concept."
      },
      {
        id: 2,
        question: "What should the methods section describe?",
        options: [
          { key: "A", text: "Only final screenshots" },
          { key: "B", text: "Unverified results" },
          { key: "C", text: "Data sources, cleaning, analysis, and tools" },
          { key: "D", text: "Personal hobbies" },
        ],
        correct: 2,
        explanation: "Methods reader ko batata hai analysis kaise hua.",
        hint: "Focus on Data sources, cleaning, analysis, and tools to master this interview concept."
      },
      {
        id: 3,
        question: "How should project impact be described without real deployment evidence?",
        options: [
          { key: "A", text: "As a potential implication, not a proven business result" },
          { key: "B", text: "As a confirmed company decision" },
          { key: "C", text: "As guaranteed profit" },
          { key: "D", text: "As an invented revenue increase" },
        ],
        correct: 0,
        explanation: "Unsupported business impact claim nahi karna chahiye.",
        hint: "Focus on As a potential implication, not a proven business result to master this interview concept."
      },
      {
        id: 4,
        question: "What belongs in the limitations section?",
        options: [
          { key: "A", text: "Data gaps and assumptions that affect conclusions" },
          { key: "B", text: "Hidden calculations" },
          { key: "C", text: "Only praise for the project" },
          { key: "D", text: "A list of unrelated tools" },
        ],
        correct: 0,
        explanation: "Limitations transparency aur trust improve karti hain.",
        hint: "Focus on Data gaps and assumptions that affect conclusions to master this interview concept."
      },
      {
        id: 5,
        question: "Why include a reproducible repository or workflow?",
        options: [
          { key: "A", text: "So reviewers can inspect how results were produced" },
          { key: "B", text: "To guarantee job offers" },
          { key: "C", text: "To avoid describing the data" },
          { key: "D", text: "To replace all conclusions" },
        ],
        correct: 0,
        explanation: "Reproducibility technical credibility build karti hai.",
        hint: "Focus on So reviewers can inspect how results were produced to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Structure the case study",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Write business problem and audience", "Describe data and scope", "Explain cleaning and methods", "Present findings and recommendations", "State limitations"],
        shuffled: ["Present findings and recommendations", "Describe data and scope", "State limitations", "Explain cleaning and methods", "Write business problem and audience"],
        expected: ["Write business problem and audience", "Describe data and scope", "Explain cleaning and methods", "Present findings and recommendations", "State limitations"],
        hint: "Case study problem se evidence aur recommendation tak flow kare."
      },
      {
        id: 2,
        title: "Puzzle 2 — Support each finding",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State the observed metric", "Link to a table or chart", "Explain the business relevance", "Note important caveats"],
        shuffled: ["Note important caveats", "State the observed metric", "Link to a table or chart", "Explain the business relevance"],
        expected: ["State the observed metric", "Link to a table or chart", "Explain the business relevance", "Note important caveats"],
        hint: "Finding ko verifiable evidence se connect karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Prepare portfolio publication",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Review accuracy and permissions", "Remove sensitive information", "Add reproducibility instructions", "Proofread and publish"],
        shuffled: ["Remove sensitive information", "Review accuracy and permissions", "Add reproducibility instructions", "Proofread and publish"],
        expected: ["Review accuracy and permissions", "Remove sensitive information", "Add reproducibility instructions", "Proofread and publish"],
        hint: "Public portfolio mein confidentiality aur accuracy check karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is the ideal structure of a project case stud",
        meaning: "I use problem, data, methods, validated findings, recom..."
      },
      {
        id: 2,
        snippet: "How do you make a case study credible?",
        meaning: "I connect each claim to a chart, calculation, or source..."
      },
      {
        id: 3,
        snippet: "Can you claim business impact from a practice data",
        meaning: "I can discuss potential impact, but I should not claim ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Write a Project Case Study",
        scenario: "Your analysis suggests a possible sales opportunity but the company has not acted on it.",
        prompt: "How should the case study describe impact?",
        expectedResponse: "B — Potential impact aur actual measured outcome ko clearly separate karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is the ideal structure of a project case study?",
        sampleAnswer: "I use problem, data, methods, validated findings, recommendations, limitations, and reproducibility details."
      },
      {
        id: 2,
        question: "How do you make a case study credible?",
        sampleAnswer: "I connect each claim to a chart, calculation, or source and clearly state assumptions."
      },
      {
        id: 3,
        question: "Can you claim business impact from a practice dataset?",
        sampleAnswer: "I can discuss potential impact, but I should not claim actual business results without evidence of implementation."
      },
      {
        id: 4,
        question: "How do you explain technical work to recruiters?",
        sampleAnswer: "I focus on the decision problem, my approach, the tools I chose, and what the results mean."
      },
    ]
  },
  "39.7": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 39,
    moduleName: "Module 39: Portfolio and Case Studies",
    topicKey: "39.7",
    id: 329,
    topicTitle: "Present Findings and Recommendations",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should an executive presentation start with?",
        options: [
          { key: "A", text: "Every line of source code" },
          { key: "B", text: "All raw rows" },
          { key: "C", text: "A long list of unrelated tools" },
          { key: "D", text: "The decision or business question" },
        ],
        correct: 3,
        explanation: "Audience ko pehle business context chahiye.",
        hint: "Focus on The decision or business question to master this interview concept."
      },
      {
        id: 2,
        question: "What makes a recommendation actionable?",
        options: [
          { key: "A", text: "An unsupported promise" },
          { key: "B", text: "Clear action, owner or next step, and supporting evidence" },
          { key: "C", text: "An unrelated chart" },
          { key: "D", text: "A vague statement like improve sales" },
        ],
        correct: 1,
        explanation: "Actionable recommendation mein next step clear hota hai.",
        hint: "Focus on Clear action, owner or next step, and supporting evidence to master this interview concept."
      },
      {
        id: 3,
        question: "How should you respond to an unsupported follow-up question?",
        options: [
          { key: "A", text: "Change the metric definition" },
          { key: "B", text: "Ignore the question" },
          { key: "C", text: "State what is unknown and how you would investigate" },
          { key: "D", text: "Invent a confident answer" },
        ],
        correct: 2,
        explanation: "Uncertainty ko honestly communicate karo.",
        hint: "Focus on State what is unknown and how you would investigate to master this interview concept."
      },
      {
        id: 4,
        question: "What should accompany a surprising trend?",
        options: [
          { key: "A", text: "Validation and relevant context" },
          { key: "B", text: "Only dramatic wording" },
          { key: "C", text: "No source reference" },
          { key: "D", text: "A hidden axis" },
        ],
        correct: 0,
        explanation: "Surprising finding ko verify aur contextualize karo.",
        hint: "Focus on Validation and relevant context to master this interview concept."
      },
      {
        id: 5,
        question: "Why tailor language to stakeholders?",
        options: [
          { key: "A", text: "To change data" },
          { key: "B", text: "To skip questions" },
          { key: "C", text: "To conceal limitations" },
          { key: "D", text: "Different audiences need different levels of detail" },
        ],
        correct: 3,
        explanation: "Clear communication audience ke decision ko support karti hai.",
        hint: "Focus on Different audiences need different levels of detail to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Prepare a stakeholder presentation",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify audience and decision", "Choose the strongest verified findings", "Organize supporting visuals", "Draft actionable recommendations"],
        shuffled: ["Organize supporting visuals", "Identify audience and decision", "Choose the strongest verified findings", "Draft actionable recommendations"],
        expected: ["Identify audience and decision", "Choose the strongest verified findings", "Organize supporting visuals", "Draft actionable recommendations"],
        hint: "Presentation ko decision-focused rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Explain one finding",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State the observation", "Show evidence and timeframe", "Explain business implication", "Suggest a measured next step"],
        shuffled: ["Suggest a measured next step", "Show evidence and timeframe", "State the observation", "Explain business implication"],
        expected: ["State the observation", "Show evidence and timeframe", "Explain business implication", "Suggest a measured next step"],
        hint: "Observation aur recommendation ke beech logic clear rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Handle stakeholder questions",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Listen and restate the question", "Check whether data supports an answer", "Respond with evidence or uncertainty", "Record follow-up action"],
        shuffled: ["Record follow-up action", "Check whether data supports an answer", "Respond with evidence or uncertainty", "Listen and restate the question"],
        expected: ["Listen and restate the question", "Check whether data supports an answer", "Respond with evidence or uncertainty", "Record follow-up action"],
        hint: "Unknown answer ko invent karne ke bajay investigate karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you present findings to a nontechnical s",
        meaning: "I would start with the business question, show a few cl..."
      },
      {
        id: 2,
        snippet: "What makes a recommendation strong?",
        meaning: "It is specific, supported by evidence, feasible, and cl..."
      },
      {
        id: 3,
        snippet: "How do you handle difficult follow-up questions?",
        meaning: "I answer from verified evidence and state what I need t..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Present Findings and Recommendations",
        scenario: "A manager asks why a sales decline happened, but your data only shows when it happened.",
        prompt: "What should you say?",
        expectedResponse: "A — Observation aur cause ko mix mat karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you present findings to a nontechnical stakeholder?",
        sampleAnswer: "I would start with the business question, show a few clear findings, explain impact, and recommend a next step."
      },
      {
        id: 2,
        question: "What makes a recommendation strong?",
        sampleAnswer: "It is specific, supported by evidence, feasible, and clear about expected outcomes and uncertainties."
      },
      {
        id: 3,
        question: "How do you handle difficult follow-up questions?",
        sampleAnswer: "I answer from verified evidence and state what I need to investigate if the data does not support a conclusion."
      },
      {
        id: 4,
        question: "How would you close a presentation?",
        sampleAnswer: "I would summarize the key decision, recommended action, owner or next step, and major limitations."
      },
    ]
  },
  "40.1": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.1",
    id: 330,
    topicTitle: "Excel Interview Questions and Exercises",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Excel function sums values using multiple criteria?",
        options: [
          { key: "A", text: "COUNTBLANK" },
          { key: "B", text: "LEFT" },
          { key: "C", text: "SUMIFS" },
          { key: "D", text: "TODAY" },
        ],
        correct: 2,
        explanation: "SUMIFS multiple conditions ke basis par values add karta hai.",
        hint: "Focus on SUMIFS to master this interview concept."
      },
      {
        id: 2,
        question: "What does $A$1 mean in an Excel formula?",
        options: [
          { key: "A", text: "Only the row is relative" },
          { key: "B", text: "Only the column is relative" },
          { key: "C", text: "The cell is blank" },
          { key: "D", text: "Both column and row are absolute" },
        ],
        correct: 3,
        explanation: "$A$1 copy karne par reference fixed rakhta hai.",
        hint: "Focus on Both column and row are absolute to master this interview concept."
      },
      {
        id: 3,
        question: "Which feature summarizes sales by region without writing many formulas?",
        options: [
          { key: "A", text: "Spell Check" },
          { key: "B", text: "PivotTable" },
          { key: "C", text: "Page Setup" },
          { key: "D", text: "Freeze Panes" },
        ],
        correct: 1,
        explanation: "PivotTable categories ko group karke summary banata hai.",
        hint: "Focus on PivotTable to master this interview concept."
      },
      {
        id: 4,
        question: "Which function can look up a product code and return its price in modern Excel?",
        options: [
          { key: "A", text: "REPLACE" },
          { key: "B", text: "ROUNDUP" },
          { key: "C", text: "UPPER" },
          { key: "D", text: "XLOOKUP" },
        ],
        correct: 3,
        explanation: "XLOOKUP lookup value ke basis par matching result return kar sakta hai.",
        hint: "Focus on XLOOKUP to master this interview concept."
      },
      {
        id: 5,
        question: "How should you investigate a #N/A lookup result?",
        options: [
          { key: "A", text: "Assume the price is zero" },
          { key: "B", text: "Hide the error permanently" },
          { key: "C", text: "Delete the whole workbook" },
          { key: "D", text: "Check lookup value, data types, spaces, and match settings" },
        ],
        correct: 3,
        explanation: "#N/A ka root cause identify karna correct debugging hai.",
        hint: "Focus on Check lookup value, data types, spaces, and match settings to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Solve a sales formula task",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Read the requested metric", "Identify sum range and criteria", "Write SUMIFS with matching ranges", "Check a small manual example"],
        shuffled: ["Read the requested metric", "Write SUMIFS with matching ranges", "Identify sum range and criteria", "Check a small manual example"],
        expected: ["Read the requested metric", "Identify sum range and criteria", "Write SUMIFS with matching ranges", "Check a small manual example"],
        hint: "Formula ka result independently verify karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Prepare a lookup exercise",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify lookup key", "Select lookup and return ranges", "Write XLOOKUP", "Test found and missing keys"],
        shuffled: ["Select lookup and return ranges", "Identify lookup key", "Write XLOOKUP", "Test found and missing keys"],
        expected: ["Identify lookup key", "Select lookup and return ranges", "Write XLOOKUP", "Test found and missing keys"],
        hint: "Missing keys ke case ko bhi test karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Answer an Excel interview task",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Clarify the question", "Explain selected function", "Demonstrate on sample cells", "Validate result and edge cases"],
        shuffled: ["Demonstrate on sample cells", "Validate result and edge cases", "Clarify the question", "Explain selected function"],
        expected: ["Clarify the question", "Explain selected function", "Demonstrate on sample cells", "Validate result and edge cases"],
        hint: "Interview mein logic aur verification dono explain karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "When would you use SUMIFS?",
        meaning: "I use SUMIFS when I need to add values that satisfy mul..."
      },
      {
        id: 2,
        snippet: "What is the difference between relative and absolu",
        meaning: "Relative references change when copied, while absolute ..."
      },
      {
        id: 3,
        snippet: "How do you explain a PivotTable in an interview?",
        meaning: "A PivotTable groups and summarizes data, for example re..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Excel Interview Questions and Exercises",
        scenario: "An interviewer asks for total revenue where Region is East and Status is Completed.",
        prompt: "Which Excel function is most suitable?",
        expectedResponse: "A — SUMIFS multiple criteria ke saath revenue sum karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "When would you use SUMIFS?",
        sampleAnswer: "I use SUMIFS when I need to add values that satisfy multiple conditions, such as region and order status."
      },
      {
        id: 2,
        question: "What is the difference between relative and absolute references?",
        sampleAnswer: "Relative references change when copied, while absolute references such as $A$1 remain fixed."
      },
      {
        id: 3,
        question: "How do you explain a PivotTable in an interview?",
        sampleAnswer: "A PivotTable groups and summarizes data, for example revenue by category and month."
      },
      {
        id: 4,
        question: "How would you debug an XLOOKUP error?",
        sampleAnswer: "I would check key values, formats, extra spaces, lookup ranges, match behavior, and missing records."
      },
    ]
  },
  "40.2": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.2",
    id: 331,
    topicTitle: "SQL Fundamentals and Query Challenges",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which clause filters individual rows before aggregation?",
        options: [
          { key: "A", text: "WHERE" },
          { key: "B", text: "HAVING only" },
          { key: "C", text: "ORDER BY" },
          { key: "D", text: "LIMIT" },
        ],
        correct: 0,
        explanation: "WHERE row-level conditions apply karta hai.",
        hint: "Focus on WHERE to master this interview concept."
      },
      {
        id: 2,
        question: "Which clause filters grouped aggregate results?",
        options: [
          { key: "A", text: "DISTINCT alone" },
          { key: "B", text: "HAVING" },
          { key: "C", text: "AS" },
          { key: "D", text: "FROM" },
        ],
        correct: 1,
        explanation: "HAVING grouped result par condition lagata hai.",
        hint: "Focus on HAVING to master this interview concept."
      },
      {
        id: 3,
        question: "What does COUNT(*) count?",
        options: [
          { key: "A", text: "Unique customers automatically" },
          { key: "B", text: "Rows in the result, including rows with NULL fields" },
          { key: "C", text: "Only non-NULL values of one column" },
          { key: "D", text: "Total sales amount" },
        ],
        correct: 1,
        explanation: "COUNT(*) qualifying rows count karta hai.",
        hint: "Focus on Rows in the result, including rows with NULL fields to master this interview concept."
      },
      {
        id: 4,
        question: "Which expression counts unique customer IDs?",
        options: [
          { key: "A", text: "MAX(customer_id)" },
          { key: "B", text: "COUNT(DISTINCT customer_id)" },
          { key: "C", text: "COUNT(*) on all rows" },
          { key: "D", text: "SUM(customer_id)" },
        ],
        correct: 1,
        explanation: "DISTINCT repeated customer IDs ko exclude karta hai.",
        hint: "Focus on COUNT(DISTINCT customer_id) to master this interview concept."
      },
      {
        id: 5,
        question: "How do you check whether a column is NULL in SQL?",
        options: [
          { key: "A", text: "IN NULL" },
          { key: "B", text: "IS NULL" },
          { key: "C", text: "LIKE NULL" },
          { key: "D", text: "= NULL" },
        ],
        correct: 1,
        explanation: "SQL mein NULL test ke liye IS NULL use hota hai.",
        hint: "Focus on IS NULL to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Build a filtered query",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify table and columns", "Add FROM and SELECT", "Add WHERE conditions", "Check sample rows"],
        shuffled: ["Add FROM and SELECT", "Add WHERE conditions", "Check sample rows", "Identify table and columns"],
        expected: ["Identify table and columns", "Add FROM and SELECT", "Add WHERE conditions", "Check sample rows"],
        hint: "Filtered result business condition se match hona chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 — Summarize orders by region",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Filter eligible orders", "GROUP BY region", "Calculate SUM(amount)", "ORDER BY result", "Validate totals"],
        shuffled: ["Validate totals", "GROUP BY region", "Calculate SUM(amount)", "Filter eligible orders", "ORDER BY result"],
        expected: ["Filter eligible orders", "GROUP BY region", "Calculate SUM(amount)", "ORDER BY result", "Validate totals"],
        hint: "Aggregation se pehle row eligibility define karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Debug an unexpected count",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Review join and filter logic", "Check NULL values", "Compare COUNT(*) with COUNT(DISTINCT key)", "Inspect duplicate records"],
        shuffled: ["Check NULL values", "Review join and filter logic", "Compare COUNT(*) with COUNT(DISTINCT key)", "Inspect duplicate records"],
        expected: ["Review join and filter logic", "Check NULL values", "Compare COUNT(*) with COUNT(DISTINCT key)", "Inspect duplicate records"],
        hint: "COUNT difference ka reason grain ya duplicate records ho sakta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is the difference between WHERE and HAVING?",
        meaning: "WHERE filters rows before grouping, while HAVING filter..."
      },
      {
        id: 2,
        snippet: "How does COUNT(*) differ from COUNT(column)?",
        meaning: "COUNT(*) counts qualifying rows, while COUNT(column) co..."
      },
      {
        id: 3,
        snippet: "How would you count distinct customers?",
        meaning: "I would use COUNT(DISTINCT customer_id) after applying ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "SQL Fundamentals and Query Challenges",
        scenario: "An interviewer wants only orders with amount greater than 100.",
        prompt: "Which clause filters those rows?",
        expectedResponse: "C — WHERE row-level order amount ko filter karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is the difference between WHERE and HAVING?",
        sampleAnswer: "WHERE filters rows before grouping, while HAVING filters grouped results after aggregation."
      },
      {
        id: 2,
        question: "How does COUNT(*) differ from COUNT(column)?",
        sampleAnswer: "COUNT(*) counts qualifying rows, while COUNT(column) counts non-NULL values in that column."
      },
      {
        id: 3,
        question: "How would you count distinct customers?",
        sampleAnswer: "I would use COUNT(DISTINCT customer_id) after applying the appropriate filters."
      },
      {
        id: 4,
        question: "How do you debug an incorrect SQL total?",
        sampleAnswer: "I would inspect filters, join cardinality, duplicate keys, NULL handling, and aggregation grain."
      },
    ]
  },
  "40.3": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.3",
    id: 332,
    topicTitle: "SQL Joins and Window Function Practice",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which join keeps all customers even if they have no orders?",
        options: [
          { key: "A", text: "CROSS JOIN" },
          { key: "B", text: "LEFT JOIN customers to orders" },
          { key: "C", text: "RIGHT JOIN orders to customers with customers on left" },
          { key: "D", text: "INNER JOIN only" },
        ],
        correct: 1,
        explanation: "LEFT JOIN left-side customers ko retain karta hai.",
        hint: "Focus on LEFT JOIN customers to orders to master this interview concept."
      },
      {
        id: 2,
        question: "Which function assigns a unique sequential number within each window partition?",
        options: [
          { key: "A", text: "SUM() without OVER" },
          { key: "B", text: "COALESCE()" },
          { key: "C", text: "ROW_NUMBER()" },
          { key: "D", text: "LOWER()" },
        ],
        correct: 2,
        explanation: "ROW_NUMBER partition aur ORDER BY ke according sequence deta hai.",
        hint: "Focus on ROW_NUMBER() to master this interview concept."
      },
      {
        id: 3,
        question: "Which ranking function leaves gaps after ties?",
        options: [
          { key: "A", text: "ABS()" },
          { key: "B", text: "COUNT()" },
          { key: "C", text: "RANK()" },
          { key: "D", text: "DENSE_RANK()" },
        ],
        correct: 2,
        explanation: "RANK ties ke baad rank numbers skip kar sakta hai.",
        hint: "Focus on RANK() to master this interview concept."
      },
      {
        id: 4,
        question: "Which clause divides a window calculation into groups?",
        options: [
          { key: "A", text: "DISTINCT" },
          { key: "B", text: "HAVING" },
          { key: "C", text: "PARTITION BY" },
          { key: "D", text: "GROUP BY only" },
        ],
        correct: 2,
        explanation: "PARTITION BY window ko logical groups mein split karta hai.",
        hint: "Focus on PARTITION BY to master this interview concept."
      },
      {
        id: 5,
        question: "What commonly causes inflated revenue after a JOIN?",
        options: [
          { key: "A", text: "Sorting descending" },
          { key: "B", text: "Adding an alias" },
          { key: "C", text: "Joining at the wrong grain or with duplicate keys" },
          { key: "D", text: "Selecting fewer columns" },
        ],
        correct: 2,
        explanation: "Wrong cardinality se one-to-many multiplication ho sakta hai.",
        hint: "Focus on Joining at the wrong grain or with duplicate keys to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Validate a customer-order join",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Inspect keys and table grain", "Choose join type", "Join on matching customer_id", "Compare row counts and sample records"],
        shuffled: ["Join on matching customer_id", "Compare row counts and sample records", "Choose join type", "Inspect keys and table grain"],
        expected: ["Inspect keys and table grain", "Choose join type", "Join on matching customer_id", "Compare row counts and sample records"],
        hint: "Join ke baad counts aur grain validate karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Rank orders within customers",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose customer partition", "Order transactions by amount", "Apply ROW_NUMBER with OVER", "Review tied values and ordering"],
        shuffled: ["Review tied values and ordering", "Order transactions by amount", "Choose customer partition", "Apply ROW_NUMBER with OVER"],
        expected: ["Choose customer partition", "Order transactions by amount", "Apply ROW_NUMBER with OVER", "Review tied values and ordering"],
        hint: "Deterministic ordering aur ties ko samjho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Debug duplicate totals",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Reproduce the join", "Check duplicate keys on each side", "Inspect one-to-many matches", "Aggregate at the correct grain", "Reconcile source totals"],
        shuffled: ["Check duplicate keys on each side", "Aggregate at the correct grain", "Reproduce the join", "Inspect one-to-many matches", "Reconcile source totals"],
        expected: ["Reproduce the join", "Check duplicate keys on each side", "Inspect one-to-many matches", "Aggregate at the correct grain", "Reconcile source totals"],
        hint: "Duplicate join rows ko blindly DISTINCT se hide mat karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do INNER JOIN and LEFT JOIN differ?",
        meaning: "INNER JOIN returns matching rows; LEFT JOIN keeps all l..."
      },
      {
        id: 2,
        snippet: "When would you use ROW_NUMBER()?",
        meaning: "I use ROW_NUMBER() to assign ordered positions within g..."
      },
      {
        id: 3,
        snippet: "What is the difference between RANK and DENSE_RANK",
        meaning: "Both assign equal ranks to ties, but RANK leaves gaps a..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "SQL Joins and Window Function Practice",
        scenario: "An interviewer wants each customer's latest order ranked first.",
        prompt: "Which approach fits?",
        expectedResponse: "B — ROW_NUMBER customer-wise latest order identify karta hai; tie-breaker deterministic result deta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do INNER JOIN and LEFT JOIN differ?",
        sampleAnswer: "INNER JOIN returns matching rows; LEFT JOIN keeps all left-side rows and adds NULLs for unmatched right-side columns."
      },
      {
        id: 2,
        question: "When would you use ROW_NUMBER()?",
        sampleAnswer: "I use ROW_NUMBER() to assign ordered positions within groups, such as the latest order per customer."
      },
      {
        id: 3,
        question: "What is the difference between RANK and DENSE_RANK?",
        sampleAnswer: "Both assign equal ranks to ties, but RANK leaves gaps after ties while DENSE_RANK does not."
      },
      {
        id: 4,
        question: "How do you prevent join-related double counting?",
        sampleAnswer: "I inspect table grain and key uniqueness, choose the correct join, and aggregate at the intended level."
      },
    ]
  },
  "40.4": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.4",
    id: 333,
    topicTitle: "Python and Pandas Interview Practice",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Pandas function reads a CSV file?",
        options: [
          { key: "A", text: "pd.to_excel()" },
          { key: "B", text: "pd.read_csv()" },
          { key: "C", text: "pd.isna()" },
          { key: "D", text: "pd.merge()" },
        ],
        correct: 1,
        explanation: "read_csv() CSV ko DataFrame mein load karta hai.",
        hint: "Focus on pd.read_csv() to master this interview concept."
      },
      {
        id: 2,
        question: "Which expression counts missing values by column?",
        options: [
          { key: "A", text: "df.head().sum()" },
          { key: "B", text: "df.columns()" },
          { key: "C", text: "df.isna().sum()" },
          { key: "D", text: "df.drop_duplicates().mean()" },
        ],
        correct: 2,
        explanation: "isna().sum() per-column missing counts deta hai.",
        hint: "Focus on df.isna().sum() to master this interview concept."
      },
      {
        id: 3,
        question: "Which method groups rows to calculate revenue by category?",
        options: [
          { key: "A", text: "reset_index() only" },
          { key: "B", text: "sample() only" },
          { key: "C", text: "groupby()" },
          { key: "D", text: "rename()" },
        ],
        correct: 2,
        explanation: "groupby categories ke according aggregation allow karta hai.",
        hint: "Focus on groupby() to master this interview concept."
      },
      {
        id: 4,
        question: "Which accessor selects rows and columns by labels?",
        options: [
          { key: "A", text: "shape" },
          { key: "B", text: "dtypes" },
          { key: "C", text: "loc" },
          { key: "D", text: "iloc" },
        ],
        correct: 2,
        explanation: "loc label-based selection karta hai.",
        hint: "Focus on loc to master this interview concept."
      },
      {
        id: 5,
        question: "What should you do before dropping duplicate rows?",
        options: [
          { key: "A", text: "Remove all repeated amounts" },
          { key: "B", text: "Define the business key and expected grain" },
          { key: "C", text: "Rename the file" },
          { key: "D", text: "Sort columns alphabetically" },
        ],
        correct: 1,
        explanation: "Duplicate meaning dataset grain par depend karta hai.",
        hint: "Focus on Define the business key and expected grain to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Inspect a CSV in Pandas",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Load with read_csv", "Inspect head and info", "Count missing values", "Check duplicates and numeric summaries"],
        shuffled: ["Count missing values", "Check duplicates and numeric summaries", "Inspect head and info", "Load with read_csv"],
        expected: ["Load with read_csv", "Inspect head and info", "Count missing values", "Check duplicates and numeric summaries"],
        hint: "Data cleaning se pehle quality inspect karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Create a category summary",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Validate category and revenue fields", "Group by category", "Sum revenue", "Compare grand total to source"],
        shuffled: ["Group by category", "Sum revenue", "Compare grand total to source", "Validate category and revenue fields"],
        expected: ["Validate category and revenue fields", "Group by category", "Sum revenue", "Compare grand total to source"],
        hint: "Aggregation ko source total se reconcile karo."
      },
      {
        id: 3,
        title: "Puzzle 3 — Explain a Pandas solution",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State expected input and output", "Describe transformation steps", "Show a small validation check", "Discuss missing and edge cases"],
        shuffled: ["Describe transformation steps", "Discuss missing and edge cases", "Show a small validation check", "State expected input and output"],
        expected: ["State expected input and output", "Describe transformation steps", "Show a small validation check", "Discuss missing and edge cases"],
        hint: "Interview mein reasoning aur testing important hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you inspect a new Pandas DataFrame?",
        meaning: "I would use head(), shape, info(), describe(), and chec..."
      },
      {
        id: 2,
        snippet: "What does groupby() do?",
        meaning: "It groups records by one or more keys so I can calculat..."
      },
      {
        id: 3,
        snippet: "What is the difference between loc and iloc?",
        meaning: "loc selects by labels, while iloc selects by integer po..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Python and Pandas Interview Practice",
        scenario: "A DataFrame has a revenue column with missing entries.",
        prompt: "Which expression counts them?",
        expectedResponse: "B — isna().sum() missing revenue entries count karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you inspect a new Pandas DataFrame?",
        sampleAnswer: "I would use head(), shape, info(), describe(), and checks for missing and duplicate records."
      },
      {
        id: 2,
        question: "What does groupby() do?",
        sampleAnswer: "It groups records by one or more keys so I can calculate summaries such as total revenue per category."
      },
      {
        id: 3,
        question: "What is the difference between loc and iloc?",
        sampleAnswer: "loc selects by labels, while iloc selects by integer positions."
      },
      {
        id: 4,
        question: "How would you explain a data-cleaning decision?",
        sampleAnswer: "I would describe the issue, business rule, transformation, and validation of the resulting data."
      },
    ]
  },
  "40.5": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.5",
    id: 334,
    topicTitle: "Power BI and DAX Interview Practice",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which DAX object is evaluated in the current filter context?",
        options: [
          { key: "A", text: "Static report title" },
          { key: "B", text: "Imported file name" },
          { key: "C", text: "Measure" },
          { key: "D", text: "Screenshot" },
        ],
        correct: 2,
        explanation: "Measure selected filters ke according recalculate hota hai.",
        hint: "Focus on Measure to master this interview concept."
      },
      {
        id: 2,
        question: "Which DAX function modifies filter context for an expression?",
        options: [
          { key: "A", text: "RENAMECOLUMNS only" },
          { key: "B", text: "FORMAT alone" },
          { key: "C", text: "CALCULATE" },
          { key: "D", text: "LEFT" },
        ],
        correct: 2,
        explanation: "CALCULATE expression ko modified filter context mein evaluate karta hai.",
        hint: "Focus on CALCULATE to master this interview concept."
      },
      {
        id: 3,
        question: "Which function is safer than direct division when denominator may be zero?",
        options: [
          { key: "A", text: "SUM" },
          { key: "B", text: "CONCATENATE" },
          { key: "C", text: "COUNTROWS" },
          { key: "D", text: "DIVIDE" },
        ],
        correct: 3,
        explanation: "DIVIDE zero denominator ke liye alternate result support karta hai.",
        hint: "Focus on DIVIDE to master this interview concept."
      },
      {
        id: 4,
        question: "What is a common benefit of a star schema?",
        options: [
          { key: "A", text: "Removing all filters" },
          { key: "B", text: "Clear relationships between fact and dimension tables" },
          { key: "C", text: "Storing everything as text" },
          { key: "D", text: "Avoiding data validation" },
        ],
        correct: 1,
        explanation: "Star schema report model ko understandable aur reliable banata hai.",
        hint: "Focus on Clear relationships between fact and dimension tables to master this interview concept."
      },
      {
        id: 5,
        question: "What should you check when a card total changes unexpectedly with a slicer?",
        options: [
          { key: "A", text: "Export filename" },
          { key: "B", text: "Visual border radius" },
          { key: "C", text: "Filter context and relationships" },
          { key: "D", text: "Page background" },
        ],
        correct: 2,
        explanation: "Slicer filter context aur relationships measures ko affect karte hain.",
        hint: "Focus on Filter context and relationships to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Build a basic DAX KPI",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define business metric", "Identify fact table and column", "Create a measure", "Test under slicer selections"],
        shuffled: ["Create a measure", "Define business metric", "Test under slicer selections", "Identify fact table and column"],
        expected: ["Define business metric", "Identify fact table and column", "Create a measure", "Test under slicer selections"],
        hint: "DAX measure ko multiple filters ke saath validate karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Debug an unexpected KPI",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Confirm source totals", "Inspect model relationships", "Check CALCULATE filters", "Test visual filter context", "Reconcile result"],
        shuffled: ["Confirm source totals", "Test visual filter context", "Check CALCULATE filters", "Reconcile result", "Inspect model relationships"],
        expected: ["Confirm source totals", "Inspect model relationships", "Check CALCULATE filters", "Test visual filter context", "Reconcile result"],
        hint: "DAX issue ka cause filter context ya model bhi ho sakta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Explain a report design",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State audience and KPI", "Describe model and measures", "Demonstrate visuals and slicers", "Explain validation and limitations"],
        shuffled: ["State audience and KPI", "Demonstrate visuals and slicers", "Describe model and measures", "Explain validation and limitations"],
        expected: ["State audience and KPI", "Describe model and measures", "Demonstrate visuals and slicers", "Explain validation and limitations"],
        hint: "Interview mein dashboard decisions justify karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is the difference between a calculated column",
        meaning: "A calculated column is computed per row and stored in t..."
      },
      {
        id: 2,
        snippet: "What does CALCULATE do?",
        meaning: "CALCULATE evaluates an expression under a modified filt..."
      },
      {
        id: 3,
        snippet: "Why use a star schema in Power BI?",
        meaning: "It separates fact and dimension tables, making relation..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Power BI and DAX Interview Practice",
        scenario: "A profit margin measure sometimes divides by zero revenue.",
        prompt: "Which DAX function is most suitable?",
        expectedResponse: "C — DIVIDE numerator aur denominator ko safely handle karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is the difference between a calculated column and a measure?",
        sampleAnswer: "A calculated column is computed per row and stored in the model, while a measure is evaluated at query time in filter context."
      },
      {
        id: 2,
        question: "What does CALCULATE do?",
        sampleAnswer: "CALCULATE evaluates an expression under a modified filter context."
      },
      {
        id: 3,
        question: "Why use a star schema in Power BI?",
        sampleAnswer: "It separates fact and dimension tables, making relationships and filtering easier to reason about."
      },
      {
        id: 4,
        question: "How do you validate a DAX measure?",
        sampleAnswer: "I compare it with trusted source totals and test it across slicers, time periods, and edge cases."
      },
    ]
  },
  "40.6": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.6",
    id: 335,
    topicTitle: "Statistics and Business Case Questions",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which measure is often robust to a very high salary outlier?",
        options: [
          { key: "A", text: "Median" },
          { key: "B", text: "Sum" },
          { key: "C", text: "Maximum" },
          { key: "D", text: "Mean only" },
        ],
        correct: 0,
        explanation: "Median extreme outlier se mean ke comparison mein less affected hota hai.",
        hint: "Focus on Median to master this interview concept."
      },
      {
        id: 2,
        question: "What does correlation alone prove?",
        options: [
          { key: "A", text: "A definite cause-and-effect relationship" },
          { key: "B", text: "That the sample is unbiased" },
          { key: "C", text: "That there is no confounding" },
          { key: "D", text: "Association, not causation" },
        ],
        correct: 3,
        explanation: "Correlation ko causal proof nahi samajhna chahiye.",
        hint: "Focus on Association, not causation to master this interview concept."
      },
      {
        id: 3,
        question: "What is a sample?",
        options: [
          { key: "A", text: "A subset of a population" },
          { key: "B", text: "A chart title" },
          { key: "C", text: "A data-cleaning function" },
          { key: "D", text: "Every possible observation always" },
        ],
        correct: 0,
        explanation: "Sample population ke subset ko represent karta hai.",
        hint: "Focus on A subset of a population to master this interview concept."
      },
      {
        id: 4,
        question: "What does a p-value measure under a statistical test?",
        options: [
          { key: "A", text: "Probability the business decision is correct" },
          { key: "B", text: "Percentage of missing rows" },
          { key: "C", text: "How unusual the observed or more extreme result is under the null model" },
          { key: "D", text: "Probability that the null hypothesis is true" },
        ],
        correct: 2,
        explanation: "p-value ko null true hone ki probability mat samjho.",
        hint: "Focus on How unusual the observed or more extreme result is under the null model to master this interview concept."
      },
      {
        id: 5,
        question: "Why report uncertainty with a business estimate?",
        options: [
          { key: "A", text: "Because sample results may vary and assumptions matter" },
          { key: "B", text: "To avoid explaining the data" },
          { key: "C", text: "To make the report longer" },
          { key: "D", text: "To guarantee a conclusion" },
        ],
        correct: 0,
        explanation: "Confidence aur uncertainty business decisions mein important hain.",
        hint: "Focus on Because sample results may vary and assumptions matter to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Approach a statistics case",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Clarify the business question", "Identify population and sample", "Choose relevant statistic", "Check assumptions and uncertainty", "Explain result"],
        shuffled: ["Explain result", "Check assumptions and uncertainty", "Choose relevant statistic", "Clarify the business question", "Identify population and sample"],
        expected: ["Clarify the business question", "Identify population and sample", "Choose relevant statistic", "Check assumptions and uncertainty", "Explain result"],
        hint: "Business question aur sampling assumptions clear rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Evaluate a correlation claim",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Plot the relationship", "Calculate association", "Check outliers and confounders", "Avoid causal wording without evidence"],
        shuffled: ["Avoid causal wording without evidence", "Plot the relationship", "Calculate association", "Check outliers and confounders"],
        expected: ["Plot the relationship", "Calculate association", "Check outliers and confounders", "Avoid causal wording without evidence"],
        hint: "Correlation aur causation alag concepts hain."
      },
      {
        id: 3,
        title: "Puzzle 3 — Present a hypothesis test",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State null and alternative", "Choose test and check assumptions", "Calculate test statistic and p-value", "Interpret effect size and uncertainty"],
        shuffled: ["Calculate test statistic and p-value", "State null and alternative", "Choose test and check assumptions", "Interpret effect size and uncertainty"],
        expected: ["State null and alternative", "Choose test and check assumptions", "Calculate test statistic and p-value", "Interpret effect size and uncertainty"],
        hint: "Statistical significance alone business impact prove nahi karti."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do mean and median differ?",
        meaning: "Mean is the arithmetic average, while median is the mid..."
      },
      {
        id: 2,
        snippet: "Why does correlation not imply causation?",
        meaning: "A relationship can be affected by confounding variables..."
      },
      {
        id: 3,
        snippet: "How would you interpret a p-value?",
        meaning: "It describes how unusual the observed or more extreme d..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Statistics and Business Case Questions",
        scenario: "Most salaries are around 25,000 but one salary is 300,000.",
        prompt: "Which statistic better represents a typical salary?",
        expectedResponse: "A — Median extreme salary ke impact ko reduce karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do mean and median differ?",
        sampleAnswer: "Mean is the arithmetic average, while median is the middle value after sorting and is less sensitive to outliers."
      },
      {
        id: 2,
        question: "Why does correlation not imply causation?",
        sampleAnswer: "A relationship can be affected by confounding variables, reverse causality, or coincidence."
      },
      {
        id: 3,
        question: "How would you interpret a p-value?",
        sampleAnswer: "It describes how unusual the observed or more extreme data would be under the null model and assumptions; it is not the probability the null is true."
      },
      {
        id: 4,
        question: "How would you approach an ambiguous business case?",
        sampleAnswer: "I would clarify the decision, define metrics, check data quality, analyze plausible explanations, and communicate uncertainty."
      },
    ]
  },
  "40.7": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.7",
    id: 336,
    topicTitle: "Behavioral Answers Using STAR",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What does the S in STAR stand for?",
        options: [
          { key: "A", text: "Solution" },
          { key: "B", text: "Summary" },
          { key: "C", text: "Skill" },
          { key: "D", text: "Situation" },
        ],
        correct: 3,
        explanation: "STAR mein Situation context explain karta hai.",
        hint: "Focus on Situation to master this interview concept."
      },
      {
        id: 2,
        question: "What does the T in STAR stand for?",
        options: [
          { key: "A", text: "Team" },
          { key: "B", text: "Time" },
          { key: "C", text: "Tool" },
          { key: "D", text: "Task" },
        ],
        correct: 3,
        explanation: "Task aapki responsibility ko define karta hai.",
        hint: "Focus on Task to master this interview concept."
      },
      {
        id: 3,
        question: "What should the Action section focus on?",
        options: [
          { key: "A", text: "What you personally did" },
          { key: "B", text: "What others might have done" },
          { key: "C", text: "A list of unrelated tools" },
          { key: "D", text: "Only the company's reputation" },
        ],
        correct: 0,
        explanation: "Interviewer ko aapka contribution samajhna chahiye.",
        hint: "Focus on What you personally did to master this interview concept."
      },
      {
        id: 4,
        question: "What belongs in the Result section?",
        options: [
          { key: "A", text: "Only a vague compliment" },
          { key: "B", text: "Outcome and evidence, including honest limitations" },
          { key: "C", text: "A made-up revenue figure" },
          { key: "D", text: "A list of interview questions" },
        ],
        correct: 1,
        explanation: "Result measurable ho to use karo, warna accurate qualitative outcome batao.",
        hint: "Focus on Outcome and evidence, including honest limitations to master this interview concept."
      },
      {
        id: 5,
        question: "How should you discuss a project setback?",
        options: [
          { key: "A", text: "Hide all mistakes" },
          { key: "B", text: "Explain the challenge, response, learning, and outcome honestly" },
          { key: "C", text: "Blame colleagues without evidence" },
          { key: "D", text: "Invent success" },
        ],
        correct: 1,
        explanation: "Honest reflection aur learning strong answer banata hai.",
        hint: "Focus on Explain the challenge, response, learning, and outcome honestly to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Build a STAR answer",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Describe the Situation", "State your Task", "Explain your Actions", "Share the Result and learning"],
        shuffled: ["State your Task", "Share the Result and learning", "Explain your Actions", "Describe the Situation"],
        expected: ["Describe the Situation", "State your Task", "Explain your Actions", "Share the Result and learning"],
        hint: "STAR se answer clear aur structured hota hai."
      },
      {
        id: 2,
        title: "Puzzle 2 — Prepare a teamwork example",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Recall a real collaboration challenge", "Identify your own responsibility", "Describe how you communicated and acted", "State the observed outcome"],
        shuffled: ["Identify your own responsibility", "Describe how you communicated and acted", "Recall a real collaboration challenge", "State the observed outcome"],
        expected: ["Recall a real collaboration challenge", "Identify your own responsibility", "Describe how you communicated and acted", "State the observed outcome"],
        hint: "Team story mein personal contribution clear rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Practice a behavioral response",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Choose a truthful example", "Outline STAR in short notes", "Rehearse concise delivery", "Remove unsupported claims"],
        shuffled: ["Rehearse concise delivery", "Outline STAR in short notes", "Remove unsupported claims", "Choose a truthful example"],
        expected: ["Choose a truthful example", "Outline STAR in short notes", "Rehearse concise delivery", "Remove unsupported claims"],
        hint: "Interview mein authentic evidence use karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is the STAR method?",
        meaning: "STAR stands for Situation, Task, Action, and Result; it..."
      },
      {
        id: 2,
        snippet: "How do you explain your role in a team project?",
        meaning: "I describe the shared context, my assigned responsibili..."
      },
      {
        id: 3,
        snippet: "What if you do not have a numerical result?",
        meaning: "I give an accurate qualitative outcome or learning rath..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Behavioral Answers Using STAR",
        scenario: "An interviewer asks about a time you fixed a reporting mistake.",
        prompt: "Which answer structure should you use?",
        expectedResponse: "C — STAR real example ko logical order mein explain karne mein help karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is the STAR method?",
        sampleAnswer: "STAR stands for Situation, Task, Action, and Result; it structures answers about past experiences."
      },
      {
        id: 2,
        question: "How do you explain your role in a team project?",
        sampleAnswer: "I describe the shared context, my assigned responsibility, the actions I personally took, and the outcome."
      },
      {
        id: 3,
        question: "What if you do not have a numerical result?",
        sampleAnswer: "I give an accurate qualitative outcome or learning rather than inventing metrics."
      },
      {
        id: 4,
        question: "How do you discuss a mistake professionally?",
        sampleAnswer: "I explain what happened, how I addressed it, what I learned, and how I would prevent it again."
      },
    ]
  },
  "40.8": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 40,
    moduleName: "Module 40: Interview Preparation",
    topicKey: "40.8",
    id: 337,
    topicTitle: "Explain Projects Clearly",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should you explain first when discussing a project?",
        options: [
          { key: "A", text: "The chart color" },
          { key: "B", text: "Every library imported" },
          { key: "C", text: "The business problem and goal" },
          { key: "D", text: "The number of folders" },
        ],
        correct: 2,
        explanation: "Interviewer ko pehle project ka purpose samajhna chahiye.",
        hint: "Focus on The business problem and goal to master this interview concept."
      },
      {
        id: 2,
        question: "What best demonstrates ownership?",
        options: [
          { key: "A", text: "Explaining your own decisions and contributions" },
          { key: "B", text: "Avoiding follow-up questions" },
          { key: "C", text: "Listing tools without context" },
          { key: "D", text: "Claiming all team work as yours" },
        ],
        correct: 0,
        explanation: "Personal contribution ko specific examples se explain karo.",
        hint: "Focus on Explaining your own decisions and contributions to master this interview concept."
      },
      {
        id: 3,
        question: "How should you describe results from a practice dataset?",
        options: [
          { key: "A", text: "As a deployed production result" },
          { key: "B", text: "As verified customer behavior in every market" },
          { key: "C", text: "As findings from that dataset, not proven company impact" },
          { key: "D", text: "As guaranteed profit" },
        ],
        correct: 2,
        explanation: "Practice project aur real-world impact ko separate rakho.",
        hint: "Focus on As findings from that dataset, not proven company impact to master this interview concept."
      },
      {
        id: 4,
        question: "What should you do if asked why you chose a tool?",
        options: [
          { key: "A", text: "Change the question" },
          { key: "B", text: "Claim all tools are identical" },
          { key: "C", text: "Say it was random" },
          { key: "D", text: "Explain its fit for the problem and constraints" },
        ],
        correct: 3,
        explanation: "Tool choice ko project need se justify karo.",
        hint: "Focus on Explain its fit for the problem and constraints to master this interview concept."
      },
      {
        id: 5,
        question: "Why mention project limitations?",
        options: [
          { key: "A", text: "To hide data source" },
          { key: "B", text: "To avoid any recommendation" },
          { key: "C", text: "To show honest interpretation and critical thinking" },
          { key: "D", text: "To make results look weaker without reason" },
        ],
        correct: 2,
        explanation: "Limitations explain karna professionalism dikhata hai.",
        hint: "Focus on To show honest interpretation and critical thinking to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Prepare a project walkthrough",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State problem and audience", "Describe data and scope", "Explain tools and approach", "Present verified findings", "Discuss limitations and next steps"],
        shuffled: ["Present verified findings", "State problem and audience", "Discuss limitations and next steps", "Describe data and scope", "Explain tools and approach"],
        expected: ["State problem and audience", "Describe data and scope", "Explain tools and approach", "Present verified findings", "Discuss limitations and next steps"],
        hint: "Project story concise aur evidence-based rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Answer a technical follow-up",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Restate the question", "Explain your design decision", "Show relevant validation or example", "State trade-offs"],
        shuffled: ["Explain your design decision", "State trade-offs", "Restate the question", "Show relevant validation or example"],
        expected: ["Restate the question", "Explain your design decision", "Show relevant validation or example", "State trade-offs"],
        hint: "Follow-up mein reasoning aur trade-offs dikhane hain."
      },
      {
        id: 3,
        title: "Puzzle 3 — Practice the interview demo",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Open working project assets", "Rehearse a short summary", "Test a chart or query", "Prepare to explain limitations"],
        shuffled: ["Prepare to explain limitations", "Test a chart or query", "Open working project assets", "Rehearse a short summary"],
        expected: ["Open working project assets", "Rehearse a short summary", "Test a chart or query", "Prepare to explain limitations"],
        hint: "Demo ka evidence accessible aur functional hona chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you introduce a project in 30 seconds?",
        meaning: "I would state the business problem, dataset, main tools..."
      },
      {
        id: 2,
        snippet: "How do you explain tool selection?",
        meaning: "I connect each tool to a specific need, such as SQL for..."
      },
      {
        id: 3,
        snippet: "How would you answer a question about limitations?",
        meaning: "I would explain data gaps, assumptions, and how they af..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Explain Projects Clearly",
        scenario: "An interviewer asks what you personally did on a team dashboard project.",
        prompt: "Which response is best?",
        expectedResponse: "C — Specific personal contribution interview mein credibility build karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you introduce a project in 30 seconds?",
        sampleAnswer: "I would state the business problem, dataset, main tools, key verified finding, and why it matters."
      },
      {
        id: 2,
        question: "How do you explain tool selection?",
        sampleAnswer: "I connect each tool to a specific need, such as SQL for extraction, Python for analysis, or Power BI for reporting."
      },
      {
        id: 3,
        question: "How would you answer a question about limitations?",
        sampleAnswer: "I would explain data gaps, assumptions, and how they affect the strength of the conclusion."
      },
      {
        id: 4,
        question: "What would you show during a portfolio walkthrough?",
        sampleAnswer: "I would show the project objective, source and method, a validated result, the dashboard, and reproducibility details."
      },
    ]
  },
  "41.1": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.1",
    id: 338,
    topicTitle: "Choose a Capstone Business Problem",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which capstone problem is best scoped?",
        options: [
          { key: "A", text: "Build visuals with no business question" },
          { key: "B", text: "Predict outcomes without any data" },
          { key: "C", text: "Solve every global business problem" },
          { key: "D", text: "Investigate changes in retail sales by region and month" },
        ],
        correct: 3,
        explanation: "Focused business question capstone ko manageable banata hai.",
        hint: "Focus on Investigate changes in retail sales by region and month to master this interview concept."
      },
      {
        id: 2,
        question: "What should the capstone objective include?",
        options: [
          { key: "A", text: "Only the final slide count" },
          { key: "B", text: "Only programming languages" },
          { key: "C", text: "Only a logo" },
          { key: "D", text: "Audience, decision, metric, and scope" },
        ],
        correct: 3,
        explanation: "Objective se analysis ka purpose clear hota hai.",
        hint: "Focus on Audience, decision, metric, and scope to master this interview concept."
      },
      {
        id: 3,
        question: "Why confirm data access early?",
        options: [
          { key: "A", text: "To remove documentation" },
          { key: "B", text: "To guarantee a result" },
          { key: "C", text: "To ensure the problem is feasible and compliant" },
          { key: "D", text: "To avoid defining KPIs" },
        ],
        correct: 2,
        explanation: "Approved data availability capstone feasibility decide karti hai.",
        hint: "Focus on To ensure the problem is feasible and compliant to master this interview concept."
      },
      {
        id: 4,
        question: "Which deliverable shows business usefulness?",
        options: [
          { key: "A", text: "A list of unrelated code snippets" },
          { key: "B", text: "A dashboard with no labels" },
          { key: "C", text: "Evidence-based recommendation linked to a KPI" },
          { key: "D", text: "An invented impact number" },
        ],
        correct: 2,
        explanation: "Capstone output ko decision support karna chahiye.",
        hint: "Focus on Evidence-based recommendation linked to a KPI to master this interview concept."
      },
      {
        id: 5,
        question: "What should you do if the dataset cannot answer the question?",
        options: [
          { key: "A", text: "Revise the question or obtain appropriate data" },
          { key: "B", text: "Hide the limitation" },
          { key: "C", text: "Invent missing observations" },
          { key: "D", text: "Continue with unsupported conclusions" },
        ],
        correct: 0,
        explanation: "Data aur question ka fit essential hai.",
        hint: "Focus on Revise the question or obtain appropriate data to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Select capstone focus",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["List relevant business decisions", "Choose one measurable question", "Check approved data availability", "Narrow timeframe and scope"],
        shuffled: ["Narrow timeframe and scope", "Choose one measurable question", "List relevant business decisions", "Check approved data availability"],
        expected: ["List relevant business decisions", "Choose one measurable question", "Check approved data availability", "Narrow timeframe and scope"],
        hint: "Feasible aur measurable problem choose karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Write a capstone brief",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Define audience", "State business question", "Specify KPIs and grain", "List intended deliverables", "Record assumptions"],
        shuffled: ["Specify KPIs and grain", "Record assumptions", "Define audience", "State business question", "List intended deliverables"],
        expected: ["Define audience", "State business question", "Specify KPIs and grain", "List intended deliverables", "Record assumptions"],
        hint: "Clear brief project ko guide karta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Approve project feasibility",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check data permissions", "Estimate cleaning effort", "Review tool requirements", "Identify risks and dependencies", "Finalize scope"],
        shuffled: ["Identify risks and dependencies", "Check data permissions", "Estimate cleaning effort", "Review tool requirements", "Finalize scope"],
        expected: ["Check data permissions", "Estimate cleaning effort", "Review tool requirements", "Identify risks and dependencies", "Finalize scope"],
        hint: "Early feasibility check rework reduce karta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How do you choose a capstone business problem?",
        meaning: "I choose a measurable business question with clear audi..."
      },
      {
        id: 2,
        snippet: "What belongs in a capstone project brief?",
        meaning: "The objective, KPIs, data sources, grain, timeframe, de..."
      },
      {
        id: 3,
        snippet: "What if the data does not support the initial ques",
        meaning: "I would revise the scope or seek suitable approved data..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Choose a Capstone Business Problem",
        scenario: "You have approved retail order data and limited project time.",
        prompt: "Which capstone question is most suitable?",
        expectedResponse: "A — Focused question available data se answer ho sakta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How do you choose a capstone business problem?",
        sampleAnswer: "I choose a measurable business question with clear audience, feasible scope, and approved data."
      },
      {
        id: 2,
        question: "What belongs in a capstone project brief?",
        sampleAnswer: "The objective, KPIs, data sources, grain, timeframe, deliverables, assumptions, and risks."
      },
      {
        id: 3,
        question: "What if the data does not support the initial question?",
        sampleAnswer: "I would revise the scope or seek suitable approved data rather than invent conclusions."
      },
      {
        id: 4,
        question: "How do you define capstone success?",
        sampleAnswer: "I define a reproducible analysis, validated metrics, clear visuals, and defensible recommendations."
      },
    ]
  },
  "41.2": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.2",
    id: 339,
    topicTitle: "Create a Reproducible Analysis Plan",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What makes an analysis reproducible?",
        options: [
          { key: "A", text: "Only screenshots" },
          { key: "B", text: "Saved inputs, transformations, parameters, and validation steps" },
          { key: "C", text: "Unrecorded manual edits" },
          { key: "D", text: "Different KPI rules each run" },
        ],
        correct: 1,
        explanation: "Reproducible workflow ko repeat karke results verify kiye ja sakte hain.",
        hint: "Focus on Saved inputs, transformations, parameters, and validation steps to master this interview concept."
      },
      {
        id: 2,
        question: "What should be defined before analysis?",
        options: [
          { key: "A", text: "Final chart title alone" },
          { key: "B", text: "Only theme colors" },
          { key: "C", text: "A random sample conclusion" },
          { key: "D", text: "Business question, metrics, grain, and validation criteria" },
        ],
        correct: 3,
        explanation: "Planning se metric inconsistency avoid hoti hai.",
        hint: "Focus on Business question, metrics, grain, and validation criteria to master this interview concept."
      },
      {
        id: 3,
        question: "Why record data source versions or dates?",
        options: [
          { key: "A", text: "To avoid checking freshness" },
          { key: "B", text: "To change conclusions" },
          { key: "C", text: "To increase storage without purpose" },
          { key: "D", text: "To know which inputs produced the result" },
        ],
        correct: 3,
        explanation: "Source version result traceability improve karta hai.",
        hint: "Focus on To know which inputs produced the result to master this interview concept."
      },
      {
        id: 4,
        question: "Which item is a validation checkpoint?",
        options: [
          { key: "A", text: "Add more animations" },
          { key: "B", text: "Reconcile total revenue with trusted source" },
          { key: "C", text: "Choose a new font" },
          { key: "D", text: "Delete the query log" },
        ],
        correct: 1,
        explanation: "Checkpoint result accuracy verify karta hai.",
        hint: "Focus on Reconcile total revenue with trusted source to master this interview concept."
      },
      {
        id: 5,
        question: "How should a workflow handle unexpected input changes?",
        options: [
          { key: "A", text: "Silently ignore them" },
          { key: "B", text: "Invent missing fields" },
          { key: "C", text: "Skip all tests" },
          { key: "D", text: "Detect and review them before accepting outputs" },
        ],
        correct: 3,
        explanation: "Schema aur quality changes ko monitor karna zaroori hai.",
        hint: "Focus on Detect and review them before accepting outputs to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Draft analysis workflow",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State question and KPIs", "List sources and permissions", "Define cleaning and analysis steps", "Specify validation checks", "Plan outputs"],
        shuffled: ["Specify validation checks", "Plan outputs", "List sources and permissions", "Define cleaning and analysis steps", "State question and KPIs"],
        expected: ["State question and KPIs", "List sources and permissions", "Define cleaning and analysis steps", "Specify validation checks", "Plan outputs"],
        hint: "Reproducible plan mein checks pehle define karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Prepare project files",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Preserve raw input", "Organize queries and scripts", "Record parameters and dependencies", "Write run instructions"],
        shuffled: ["Write run instructions", "Organize queries and scripts", "Record parameters and dependencies", "Preserve raw input"],
        expected: ["Preserve raw input", "Organize queries and scripts", "Record parameters and dependencies", "Write run instructions"],
        hint: "Clear structure se project repeat karna easy hota hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Test reproducibility",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Run pipeline on recorded input", "Compare expected counts and totals", "Check warnings and failures", "Document the run outcome"],
        shuffled: ["Run pipeline on recorded input", "Check warnings and failures", "Compare expected counts and totals", "Document the run outcome"],
        expected: ["Run pipeline on recorded input", "Compare expected counts and totals", "Check warnings and failures", "Document the run outcome"],
        hint: "Re-run validation se reproducibility prove hoti hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "What is a reproducible analysis plan?",
        meaning: "It documents the question, data, transformations, metri..."
      },
      {
        id: 2,
        snippet: "Why should raw data be preserved?",
        meaning: "It supports auditing and rebuilding results if rules or..."
      },
      {
        id: 3,
        snippet: "What validation checkpoints would you add?",
        meaning: "I would check schema, row counts, missing values, key u..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Create a Reproducible Analysis Plan",
        scenario: "A reviewer wants to reproduce your capstone results.",
        prompt: "What should you provide?",
        expectedResponse: "C — Reproducibility ke liye process aur inputs traceable hone chahiye."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "What is a reproducible analysis plan?",
        sampleAnswer: "It documents the question, data, transformations, metrics, validation checks, and steps needed to rerun the work."
      },
      {
        id: 2,
        question: "Why should raw data be preserved?",
        sampleAnswer: "It supports auditing and rebuilding results if rules or assumptions change."
      },
      {
        id: 3,
        question: "What validation checkpoints would you add?",
        sampleAnswer: "I would check schema, row counts, missing values, key uniqueness, and reconciliation of key metrics."
      },
      {
        id: 4,
        question: "How would you hand off the project?",
        sampleAnswer: "I would provide documented sources, scripts, dependencies, run instructions, and known limitations."
      },
    ]
  },
  "41.3": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.3",
    id: 340,
    topicTitle: "Collect, Clean and Validate Data",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should be checked before using a dataset?",
        options: [
          { key: "A", text: "Keyboard model" },
          { key: "B", text: "Source, permission, grain, and quality" },
          { key: "C", text: "Chart color" },
          { key: "D", text: "Slide count" },
        ],
        correct: 1,
        explanation: "Source quality aur permitted use pehle verify karo.",
        hint: "Focus on Source, permission, grain, and quality to master this interview concept."
      },
      {
        id: 2,
        question: "Which check identifies missing values in Pandas?",
        options: [
          { key: "A", text: "df.columns.sort()" },
          { key: "B", text: "df.head().mean()" },
          { key: "C", text: "df.rename()" },
          { key: "D", text: "df.isna().sum()" },
        ],
        correct: 3,
        explanation: "isna().sum() missing counts identify karta hai.",
        hint: "Focus on df.isna().sum() to master this interview concept."
      },
      {
        id: 3,
        question: "Why define duplicate keys before removing rows?",
        options: [
          { key: "A", text: "Duplicates never affect totals" },
          { key: "B", text: "Repeated values are not always duplicate records" },
          { key: "C", text: "All repeated prices are errors" },
          { key: "D", text: "Every table has a single key" },
        ],
        correct: 1,
        explanation: "Duplicate definition business grain ke according hoti hai.",
        hint: "Focus on Repeated values are not always duplicate records to master this interview concept."
      },
      {
        id: 4,
        question: "What should you do with an invalid date?",
        options: [
          { key: "A", text: "Delete the whole dataset" },
          { key: "B", text: "Replace every date with today" },
          { key: "C", text: "Investigate, correct if supported, or flag it" },
          { key: "D", text: "Invent a date" },
        ],
        correct: 2,
        explanation: "Invalid values ke liye documented rule chahiye.",
        hint: "Focus on Investigate, correct if supported, or flag it to master this interview concept."
      },
      {
        id: 5,
        question: "What is a strong post-cleaning validation?",
        options: [
          { key: "A", text: "Hide NULLs" },
          { key: "B", text: "Only change the sheet name" },
          { key: "C", text: "Skip all reconciliation" },
          { key: "D", text: "Compare counts and key totals with expected source results" },
        ],
        correct: 3,
        explanation: "Cleaning ke baad row counts aur KPIs recheck karo.",
        hint: "Focus on Compare counts and key totals with expected source results to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Collect data responsibly",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify approved source", "Check permissions and usage terms", "Record extraction date and scope", "Preserve raw copy"],
        shuffled: ["Record extraction date and scope", "Identify approved source", "Preserve raw copy", "Check permissions and usage terms"],
        expected: ["Identify approved source", "Check permissions and usage terms", "Record extraction date and scope", "Preserve raw copy"],
        hint: "Source provenance aur privacy maintain karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Clean a transaction file",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Inspect types and missing values", "Define duplicate and invalid-value rules", "Apply documented transformations", "Record affected rows"],
        shuffled: ["Define duplicate and invalid-value rules", "Record affected rows", "Inspect types and missing values", "Apply documented transformations"],
        expected: ["Inspect types and missing values", "Define duplicate and invalid-value rules", "Apply documented transformations", "Record affected rows"],
        hint: "Cleaning impact transparent rakho."
      },
      {
        id: 3,
        title: "Puzzle 3 — Validate the cleaned dataset",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check row counts and keys", "Reconcile numeric totals", "Inspect edge cases", "Log unresolved issues"],
        shuffled: ["Reconcile numeric totals", "Inspect edge cases", "Log unresolved issues", "Check row counts and keys"],
        expected: ["Check row counts and keys", "Reconcile numeric totals", "Inspect edge cases", "Log unresolved issues"],
        hint: "Clean data ka matlab automatically correct data nahi hota."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you collect capstone data responsibly?",
        meaning: "I would use approved sources, follow usage rules, recor..."
      },
      {
        id: 2,
        snippet: "How do you decide whether a record is a duplicate?",
        meaning: "I define the expected grain and business key before ide..."
      },
      {
        id: 3,
        snippet: "What do you do with missing or invalid values?",
        meaning: "I investigate their meaning, apply documented rules, an..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Collect, Clean and Validate Data",
        scenario: "You find repeated order IDs in a sales dataset.",
        prompt: "What should you do before deleting rows?",
        expectedResponse: "B — Order lines aur duplicate orders mein difference samajhna zaroori hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you collect capstone data responsibly?",
        sampleAnswer: "I would use approved sources, follow usage rules, record provenance, and protect sensitive information."
      },
      {
        id: 2,
        question: "How do you decide whether a record is a duplicate?",
        sampleAnswer: "I define the expected grain and business key before identifying and removing duplicates."
      },
      {
        id: 3,
        question: "What do you do with missing or invalid values?",
        sampleAnswer: "I investigate their meaning, apply documented rules, and report unresolved issues."
      },
      {
        id: 4,
        question: "How do you validate cleaned data?",
        sampleAnswer: "I compare row counts, key uniqueness, data types, and important totals with trusted sources."
      },
    ]
  },
  "41.4": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.4",
    id: 341,
    topicTitle: "Analyze Data with SQL and Python",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which SQL clause calculates revenue per region?",
        options: [
          { key: "A", text: "ORDER BY alone" },
          { key: "B", text: "LIMIT without aggregation" },
          { key: "C", text: "GROUP BY region with SUM(revenue)" },
          { key: "D", text: "DISTINCT without a metric" },
        ],
        correct: 2,
        explanation: "GROUP BY aur SUM region-wise revenue calculate karte hain.",
        hint: "Focus on GROUP BY region with SUM(revenue) to master this interview concept."
      },
      {
        id: 2,
        question: "Which Pandas method groups rows for aggregation?",
        options: [
          { key: "A", text: "head() alone" },
          { key: "B", text: "groupby()" },
          { key: "C", text: "to_csv()" },
          { key: "D", text: "rename()" },
        ],
        correct: 1,
        explanation: "groupby() grouped metrics create karne mein useful hai.",
        hint: "Focus on groupby() to master this interview concept."
      },
      {
        id: 3,
        question: "Why validate SQL and Python totals against each other?",
        options: [
          { key: "A", text: "To catch inconsistent filters, joins, or transformations" },
          { key: "B", text: "To remove all assumptions" },
          { key: "C", text: "To change the source currency" },
          { key: "D", text: "To guarantee causation" },
        ],
        correct: 0,
        explanation: "Cross-tool reconciliation se calculation mistakes mil sakti hain.",
        hint: "Focus on To catch inconsistent filters, joins, or transformations to master this interview concept."
      },
      {
        id: 4,
        question: "What should be checked before calculating average order value?",
        options: [
          { key: "A", text: "Chart font" },
          { key: "B", text: "File extension only" },
          { key: "C", text: "Revenue and eligible order-count definitions" },
          { key: "D", text: "Dashboard title" },
        ],
        correct: 2,
        explanation: "Average order value mein numerator denominator consistency chahiye.",
        hint: "Focus on Revenue and eligible order-count definitions to master this interview concept."
      },
      {
        id: 5,
        question: "What should an analyst do with an unexpected spike?",
        options: [
          { key: "A", text: "Ignore it" },
          { key: "B", text: "Call it a proven promotion effect" },
          { key: "C", text: "Automatically delete it" },
          { key: "D", text: "Investigate source records and business context" },
        ],
        correct: 3,
        explanation: "Spike error bhi ho sakta hai aur real event bhi.",
        hint: "Focus on Investigate source records and business context to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Write the SQL analysis",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Confirm grain and date filters", "Join only needed tables", "Group and calculate KPIs", "Validate query totals"],
        shuffled: ["Join only needed tables", "Confirm grain and date filters", "Group and calculate KPIs", "Validate query totals"],
        expected: ["Confirm grain and date filters", "Join only needed tables", "Group and calculate KPIs", "Validate query totals"],
        hint: "SQL result expected business grain par hona chahiye."
      },
      {
        id: 2,
        title: "Puzzle 2 — Explore in Python",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Load validated extract", "Inspect distributions and missing values", "Calculate segment summaries", "Investigate outliers"],
        shuffled: ["Inspect distributions and missing values", "Calculate segment summaries", "Load validated extract", "Investigate outliers"],
        expected: ["Load validated extract", "Inspect distributions and missing values", "Calculate segment summaries", "Investigate outliers"],
        hint: "Python EDA se SQL findings ko context milta hai."
      },
      {
        id: 3,
        title: "Puzzle 3 — Reconcile cross-tool metrics",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Compare source and SQL totals", "Recalculate key KPI in Python", "Investigate mismatches", "Document final metric rules"],
        shuffled: ["Document final metric rules", "Investigate mismatches", "Recalculate key KPI in Python", "Compare source and SQL totals"],
        expected: ["Compare source and SQL totals", "Recalculate key KPI in Python", "Investigate mismatches", "Document final metric rules"],
        hint: "Same definition aur filters se totals match hone chahiye."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you split analysis between SQL and Pytho",
        meaning: "I would use SQL for extraction, joins, and aggregation,..."
      },
      {
        id: 2,
        snippet: "How do you avoid double counting in SQL?",
        meaning: "I check the grain, join cardinality, grouping keys, and..."
      },
      {
        id: 3,
        snippet: "How would you investigate an unusual trend in Pyth",
        meaning: "I would inspect the underlying records, missing values,..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Analyze Data with SQL and Python",
        scenario: "SQL reports revenue of 120,000 but Python reports 150,000 for the same month.",
        prompt: "What should you do first?",
        expectedResponse: "B — Mismatch ko investigate karke correct calculation identify karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you split analysis between SQL and Python?",
        sampleAnswer: "I would use SQL for extraction, joins, and aggregation, and Python for validation, EDA, and additional analysis."
      },
      {
        id: 2,
        question: "How do you avoid double counting in SQL?",
        sampleAnswer: "I check the grain, join cardinality, grouping keys, and source reconciliation."
      },
      {
        id: 3,
        question: "How would you investigate an unusual trend in Python?",
        sampleAnswer: "I would inspect the underlying records, missing values, segment breakdowns, and possible data-quality issues."
      },
      {
        id: 4,
        question: "How do you ensure SQL and Python results agree?",
        sampleAnswer: "I use consistent KPI definitions, filters, and date ranges and compare totals on matching subsets."
      },
    ]
  },
  "41.5": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.5",
    id: 342,
    topicTitle: "Build a Power BI Dashboard",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "Which Power BI feature supports interactive category filtering?",
        options: [
          { key: "A", text: "File icon" },
          { key: "B", text: "Theme name" },
          { key: "C", text: "Slicer" },
          { key: "D", text: "Static image" },
        ],
        correct: 2,
        explanation: "Slicer user selection ke according report filter karta hai.",
        hint: "Focus on Slicer to master this interview concept."
      },
      {
        id: 2,
        question: "What should be validated before adding KPI cards?",
        options: [
          { key: "A", text: "Logo alignment only" },
          { key: "B", text: "Page wallpaper" },
          { key: "C", text: "Card corner radius" },
          { key: "D", text: "Measure definitions and source totals" },
        ],
        correct: 3,
        explanation: "KPI cards accurate calculations par based hone chahiye.",
        hint: "Focus on Measure definitions and source totals to master this interview concept."
      },
      {
        id: 3,
        question: "Which chart is suitable for monthly revenue trends?",
        options: [
          { key: "A", text: "Pie chart with one slice per day" },
          { key: "B", text: "Scatter plot of customer IDs" },
          { key: "C", text: "Blank page" },
          { key: "D", text: "Line chart" },
        ],
        correct: 3,
        explanation: "Line chart time-based trend clearly show karta hai.",
        hint: "Focus on Line chart to master this interview concept."
      },
      {
        id: 4,
        question: "Why use a star schema where appropriate?",
        options: [
          { key: "A", text: "To guarantee no missing data" },
          { key: "B", text: "To remove all keys" },
          { key: "C", text: "To organize facts and dimensions with clear relationships" },
          { key: "D", text: "To avoid all DAX" },
        ],
        correct: 2,
        explanation: "Clear model se filters aur measures reliable bante hain.",
        hint: "Focus on To organize facts and dimensions with clear relationships to master this interview concept."
      },
      {
        id: 5,
        question: "What should be reviewed before dashboard sharing?",
        options: [
          { key: "A", text: "Only background color" },
          { key: "B", text: "Only animation speed" },
          { key: "C", text: "Accuracy, refresh status, accessibility, and permissions" },
          { key: "D", text: "Only number of pages" },
        ],
        correct: 2,
        explanation: "Publishing se pehle data aur access checks zaroori hain.",
        hint: "Focus on Accuracy, refresh status, accessibility, and permissions to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Model capstone data",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Import validated tables", "Confirm grain and relationships", "Create KPI measures", "Reconcile totals"],
        shuffled: ["Create KPI measures", "Reconcile totals", "Import validated tables", "Confirm grain and relationships"],
        expected: ["Import validated tables", "Confirm grain and relationships", "Create KPI measures", "Reconcile totals"],
        hint: "Visuals se pehle model aur measures validate karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Design dashboard pages",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Place headline KPIs", "Add trend and comparison visuals", "Add relevant slicers", "Label units and dates", "Check readability"],
        shuffled: ["Place headline KPIs", "Add relevant slicers", "Check readability", "Label units and dates", "Add trend and comparison visuals"],
        expected: ["Place headline KPIs", "Add trend and comparison visuals", "Add relevant slicers", "Label units and dates", "Check readability"],
        hint: "Dashboard audience ke questions answer kare."
      },
      {
        id: 3,
        title: "Puzzle 3 — Validate before publish",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Test filter interactions", "Compare metrics with source", "Check refresh and permissions", "Record known limitations"],
        shuffled: ["Record known limitations", "Check refresh and permissions", "Test filter interactions", "Compare metrics with source"],
        expected: ["Test filter interactions", "Compare metrics with source", "Check refresh and permissions", "Record known limitations"],
        hint: "Accurate aur secure dashboard hi share karo."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you design a capstone Power BI dashboard",
        meaning: "I would start with the audience and KPIs, validate the ..."
      },
      {
        id: 2,
        snippet: "Why do relationships matter in Power BI?",
        meaning: "Relationships determine how filters flow between tables..."
      },
      {
        id: 3,
        snippet: "How would you validate a dashboard?",
        meaning: "I would reconcile KPIs with source data, test slicers, ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Build a Power BI Dashboard",
        scenario: "A business leader wants to filter a sales dashboard by region.",
        prompt: "What should you add?",
        expectedResponse: "B — Region slicer interactive filtering provide karta hai."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you design a capstone Power BI dashboard?",
        sampleAnswer: "I would start with the audience and KPIs, validate the model, and build clear visuals and useful slicers."
      },
      {
        id: 2,
        question: "Why do relationships matter in Power BI?",
        sampleAnswer: "Relationships determine how filters flow between tables and affect measure results."
      },
      {
        id: 3,
        question: "How would you validate a dashboard?",
        sampleAnswer: "I would reconcile KPIs with source data, test slicers, and check edge cases and data freshness."
      },
      {
        id: 4,
        question: "What should be checked before sharing?",
        sampleAnswer: "I would review permissions, privacy, refresh status, accessibility, and the report's limitations."
      },
    ]
  },
  "41.6": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.6",
    id: 343,
    topicTitle: "Use GenAI Responsibly to Draft Insights",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What is a safe use of GenAI in a capstone?",
        options: [
          { key: "A", text: "Draft an insight summary for human verification" },
          { key: "B", text: "Replace all source validation" },
          { key: "C", text: "Invent missing KPI values" },
          { key: "D", text: "Upload confidential raw data without approval" },
        ],
        correct: 0,
        explanation: "GenAI drafting mein help karta hai; verification analyst karega.",
        hint: "Focus on Draft an insight summary for human verification to master this interview concept."
      },
      {
        id: 2,
        question: "What should you do if AI cites a source you cannot find?",
        options: [
          { key: "A", text: "Invent a matching report" },
          { key: "B", text: "Treat the citation as unverified and investigate" },
          { key: "C", text: "Trust it because it looks formal" },
          { key: "D", text: "Remove all references" },
        ],
        correct: 1,
        explanation: "Unverifiable citations ko evidence nahi maanna chahiye.",
        hint: "Focus on Treat the citation as unverified and investigate to master this interview concept."
      },
      {
        id: 3,
        question: "What should happen before sharing sensitive records with AI?",
        options: [
          { key: "A", text: "Check approved tools, permissions, and data minimization" },
          { key: "B", text: "Ignore workplace policy" },
          { key: "C", text: "Share all customer details" },
          { key: "D", text: "Paste passwords for better context" },
        ],
        correct: 0,
        explanation: "Privacy aur workplace rules first priority hain.",
        hint: "Focus on Check approved tools, permissions, and data minimization to master this interview concept."
      },
      {
        id: 4,
        question: "How should AI-generated recommendations be assessed?",
        options: [
          { key: "A", text: "By how dramatic they sound" },
          { key: "B", text: "By number of paragraphs" },
          { key: "C", text: "Against verified findings, assumptions, and feasibility" },
          { key: "D", text: "By confidence of wording alone" },
        ],
        correct: 2,
        explanation: "Recommendation ko evidence aur practicality se assess karo.",
        hint: "Focus on Against verified findings, assumptions, and feasibility to master this interview concept."
      },
      {
        id: 5,
        question: "Who is responsible for the final capstone conclusion?",
        options: [
          { key: "A", text: "The CSV parser" },
          { key: "B", text: "The AI system alone" },
          { key: "C", text: "The human author and responsible reviewers" },
          { key: "D", text: "The dashboard theme" },
        ],
        correct: 2,
        explanation: "Final accountability human aur organization ki hoti hai.",
        hint: "Focus on The human author and responsible reviewers to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Prepare a safe AI draft",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Review AI usage policy", "Use approved anonymized or synthetic context", "Provide verified metrics", "Request a clearly labeled draft"],
        shuffled: ["Use approved anonymized or synthetic context", "Provide verified metrics", "Request a clearly labeled draft", "Review AI usage policy"],
        expected: ["Review AI usage policy", "Use approved anonymized or synthetic context", "Provide verified metrics", "Request a clearly labeled draft"],
        hint: "AI ko only permitted data share karo."
      },
      {
        id: 2,
        title: "Puzzle 2 — Validate generated insights",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Extract each factual claim", "Recalculate from source", "Verify references and assumptions", "Revise unsupported statements"],
        shuffled: ["Extract each factual claim", "Revise unsupported statements", "Verify references and assumptions", "Recalculate from source"],
        expected: ["Extract each factual claim", "Recalculate from source", "Verify references and assumptions", "Revise unsupported statements"],
        hint: "Har important number source se match hona chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 — Finalize human-reviewed report",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Check privacy and fairness", "Separate evidence from speculation", "State limitations", "Obtain responsible review", "Publish approved summary"],
        shuffled: ["Publish approved summary", "Separate evidence from speculation", "Obtain responsible review", "State limitations", "Check privacy and fairness"],
        expected: ["Check privacy and fairness", "Separate evidence from speculation", "State limitations", "Obtain responsible review", "Publish approved summary"],
        hint: "Human-in-the-loop workflow trust improve karta hai."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you use GenAI responsibly in a capstone?",
        meaning: "I would use approved tools for drafting and brainstormi..."
      },
      {
        id: 2,
        snippet: "How do you detect hallucinated statistics?",
        meaning: "I compare generated figures and references against auth..."
      },
      {
        id: 3,
        snippet: "What is human-in-the-loop review?",
        meaning: "It means a responsible person reviews, corrects, and ap..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Use GenAI Responsibly to Draft Insights",
        scenario: "AI writes that customer retention improved by 40%, but your dataset has no retention metric.",
        prompt: "What should you do?",
        expectedResponse: "B — Unsupported AI claim ko final report mein fact ki tarah use mat karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you use GenAI responsibly in a capstone?",
        sampleAnswer: "I would use approved tools for drafting and brainstorming, protect sensitive data, and verify every important claim."
      },
      {
        id: 2,
        question: "How do you detect hallucinated statistics?",
        sampleAnswer: "I compare generated figures and references against authoritative source records and recompute the metrics."
      },
      {
        id: 3,
        question: "What is human-in-the-loop review?",
        sampleAnswer: "It means a responsible person reviews, corrects, and approves AI-assisted work before use."
      },
      {
        id: 4,
        question: "How would you disclose limitations in AI-assisted writing?",
        sampleAnswer: "I would separate verified findings from suggestions and explain uncertainty or missing evidence."
      },
    ]
  },
  "41.7": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.7",
    id: 344,
    topicTitle: "Present Final Recommendations and Limitations",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should a final recommendation be based on?",
        options: [
          { key: "A", text: "Verified analysis and business context" },
          { key: "B", text: "An unsupported AI claim" },
          { key: "C", text: "A random chart color" },
          { key: "D", text: "Personal preference alone" },
        ],
        correct: 0,
        explanation: "Recommendation evidence aur context par based honi chahiye.",
        hint: "Focus on Verified analysis and business context to master this interview concept."
      },
      {
        id: 2,
        question: "Which statement is appropriately cautious?",
        options: [
          { key: "A", text: "Sales declined in the observed period; causes need further investigation" },
          { key: "B", text: "No uncertainty exists" },
          { key: "C", text: "Profit will definitely double" },
          { key: "D", text: "This chart proves one exact cause" },
        ],
        correct: 0,
        explanation: "Observation aur causation ko separate rakho.",
        hint: "Focus on Sales declined in the observed period; causes need further investigation to master this interview concept."
      },
      {
        id: 3,
        question: "Why mention limitations in the final presentation?",
        options: [
          { key: "A", text: "To avoid all decisions" },
          { key: "B", text: "To explain how assumptions and data gaps affect conclusions" },
          { key: "C", text: "To hide mistakes" },
          { key: "D", text: "To reduce chart size" },
        ],
        correct: 1,
        explanation: "Limitations stakeholder ko confidence boundaries samjhati hain.",
        hint: "Focus on To explain how assumptions and data gaps affect conclusions to master this interview concept."
      },
      {
        id: 4,
        question: "What makes a recommendation actionable?",
        options: [
          { key: "A", text: "A claim without evidence" },
          { key: "B", text: "Specific next step and success measure" },
          { key: "C", text: "An unrelated screenshot" },
          { key: "D", text: "A vague request to do better" },
        ],
        correct: 1,
        explanation: "Next step aur measurable check define karo.",
        hint: "Focus on Specific next step and success measure to master this interview concept."
      },
      {
        id: 5,
        question: "How should you respond to a question outside the data scope?",
        options: [
          { key: "A", text: "Ignore the question" },
          { key: "B", text: "Acknowledge uncertainty and propose follow-up analysis" },
          { key: "C", text: "Invent a precise answer" },
          { key: "D", text: "Rewrite the dataset" },
        ],
        correct: 1,
        explanation: "Honest uncertainty professional communication ka part hai.",
        hint: "Focus on Acknowledge uncertainty and propose follow-up analysis to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Build the final narrative",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["State business question", "Present verified findings", "Explain implications", "Recommend practical actions", "State limitations"],
        shuffled: ["State limitations", "Explain implications", "Recommend practical actions", "Present verified findings", "State business question"],
        expected: ["State business question", "Present verified findings", "Explain implications", "Recommend practical actions", "State limitations"],
        hint: "Decision-focused story clear rakho."
      },
      {
        id: 2,
        title: "Puzzle 2 — Make a recommendation testable",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Identify proposed action", "Name responsible team or owner", "Define success KPI", "Set a review plan"],
        shuffled: ["Identify proposed action", "Name responsible team or owner", "Set a review plan", "Define success KPI"],
        expected: ["Identify proposed action", "Name responsible team or owner", "Define success KPI", "Set a review plan"],
        hint: "Recommendation ke impact ko later measure karna possible hona chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 — Prepare for stakeholder review",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Validate final charts", "List assumptions and caveats", "Rehearse concise explanation", "Prepare evidence for questions"],
        shuffled: ["List assumptions and caveats", "Rehearse concise explanation", "Validate final charts", "Prepare evidence for questions"],
        expected: ["Validate final charts", "List assumptions and caveats", "Rehearse concise explanation", "Prepare evidence for questions"],
        hint: "Evidence aur limitations ready rakho."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you structure a final recommendation pre",
        meaning: "I would state the business problem, key verified findin..."
      },
      {
        id: 2,
        snippet: "How do you distinguish a finding from a recommenda",
        meaning: "A finding describes what the data shows; a recommendati..."
      },
      {
        id: 3,
        snippet: "How do you communicate uncertainty?",
        meaning: "I explain relevant assumptions, missing data, sample li..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Present Final Recommendations and Limitations",
        scenario: "Your capstone shows falling orders but lacks marketing campaign data.",
        prompt: "Which conclusion is appropriate?",
        expectedResponse: "C — Data jitna support karta hai utna hi conclude karo."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you structure a final recommendation presentation?",
        sampleAnswer: "I would state the business problem, key verified findings, business implications, recommended next steps, and limitations."
      },
      {
        id: 2,
        question: "How do you distinguish a finding from a recommendation?",
        sampleAnswer: "A finding describes what the data shows; a recommendation proposes an action based on that evidence."
      },
      {
        id: 3,
        question: "How do you communicate uncertainty?",
        sampleAnswer: "I explain relevant assumptions, missing data, sample limits, and what additional analysis is needed."
      },
      {
        id: 4,
        question: "How would you make a recommendation measurable?",
        sampleAnswer: "I would specify an action, owner, KPI, and review point for evaluating results."
      },
    ]
  },
  "41.8": {
    tabId: 8,
    tabName: "Projects and Career Preparation",
    moduleId: 41,
    moduleName: "Module 41: Capstone and Career Launch",
    topicKey: "41.8",
    id: 345,
    topicTitle: "Prepare a Portfolio Walkthrough",
    mode: "Portfolio, Capstone & Interview Mastery",
    game1Quiz: [
      {
        id: 1,
        question: "What should a portfolio walkthrough begin with?",
        options: [
          { key: "A", text: "Business problem and goal" },
          { key: "B", text: "Animation settings" },
          { key: "C", text: "Unrelated personal details" },
          { key: "D", text: "Every source file line" },
        ],
        correct: 0,
        explanation: "Interviewer ko project purpose pehle samjhao.",
        hint: "Focus on Business problem and goal to master this interview concept."
      },
      {
        id: 2,
        question: "Which item demonstrates technical ownership?",
        options: [
          { key: "A", text: "Listing tools without explanation" },
          { key: "B", text: "Claiming every team contribution" },
          { key: "C", text: "Explaining your decisions, validation, and contributions" },
          { key: "D", text: "Only showing a logo" },
        ],
        correct: 2,
        explanation: "Specific work aur reasoning credibility build karte hain.",
        hint: "Focus on Explaining your decisions, validation, and contributions to master this interview concept."
      },
      {
        id: 3,
        question: "What should be included in a reproducible portfolio?",
        options: [
          { key: "A", text: "Only a final screenshot" },
          { key: "B", text: "Source description, code or steps, and run instructions" },
          { key: "C", text: "An invented success claim" },
          { key: "D", text: "Confidential raw customer records" },
        ],
        correct: 1,
        explanation: "Reviewer ko process inspect karne ka option do.",
        hint: "Focus on Source description, code or steps, and run instructions to master this interview concept."
      },
      {
        id: 4,
        question: "How should you describe business impact from a simulated project?",
        options: [
          { key: "A", text: "As confirmed profit gained" },
          { key: "B", text: "As a guarantee" },
          { key: "C", text: "As a real client testimonial" },
          { key: "D", text: "As a potential implication, not a proven deployed result" },
        ],
        correct: 3,
        explanation: "Practice project ke results ko actual company impact mat batao.",
        hint: "Focus on As a potential implication, not a proven deployed result to master this interview concept."
      },
      {
        id: 5,
        question: "What is a good way to close a walkthrough?",
        options: [
          { key: "A", text: "Introduce a new unrelated project" },
          { key: "B", text: "Summarize findings, limitations, and next steps" },
          { key: "C", text: "Hide unanswered questions" },
          { key: "D", text: "Repeat every chart label" },
        ],
        correct: 1,
        explanation: "Concise close project ki business value communicate karta hai.",
        hint: "Focus on Summarize findings, limitations, and next steps to master this interview concept."
      },
    ],
    game2Puzzles: [
      {
        id: 1,
        title: "Puzzle 1 — Plan a portfolio walkthrough",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Introduce business problem", "Explain data and methodology", "Demonstrate validated result", "Show dashboard or report", "Discuss limitations"],
        shuffled: ["Explain data and methodology", "Discuss limitations", "Demonstrate validated result", "Introduce business problem", "Show dashboard or report"],
        expected: ["Introduce business problem", "Explain data and methodology", "Demonstrate validated result", "Show dashboard or report", "Discuss limitations"],
        hint: "Story problem se outcome tak logically flow kare."
      },
      {
        id: 2,
        title: "Puzzle 2 — Prepare technical evidence",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Organize repository and documentation", "Check queries or notebooks run", "Confirm dashboard links and permissions", "Prepare a small validation example"],
        shuffled: ["Check queries or notebooks run", "Organize repository and documentation", "Confirm dashboard links and permissions", "Prepare a small validation example"],
        expected: ["Organize repository and documentation", "Check queries or notebooks run", "Confirm dashboard links and permissions", "Prepare a small validation example"],
        hint: "Interview demo reliable aur inspectable hona chahiye."
      },
      {
        id: 3,
        title: "Puzzle 3 — Practice recruiter questions",
        prompt: "Cards ko sahi sequence mein arrange karo.",
        tokens: ["Rehearse a short project pitch", "Explain tool choices and your contribution", "Prepare limitations and trade-offs", "Close with lessons and next steps"],
        shuffled: ["Prepare limitations and trade-offs", "Close with lessons and next steps", "Explain tool choices and your contribution", "Rehearse a short project pitch"],
        expected: ["Rehearse a short project pitch", "Explain tool choices and your contribution", "Prepare limitations and trade-offs", "Close with lessons and next steps"],
        hint: "Authentic examples aur clear communication important hain."
      },
    ],
    game3MatchPairs: [
      {
        id: 1,
        snippet: "How would you explain your capstone in one minute?",
        meaning: "I would cover the business question, data, methods, key..."
      },
      {
        id: 2,
        snippet: "What should you show in a portfolio walkthrough?",
        meaning: "I would show the objective, relevant source and code, a..."
      },
      {
        id: 3,
        snippet: "How do you explain your personal contribution?",
        meaning: "I identify the specific tasks, decisions, and checks I ..."
      },
    ],
    game4Missions: [
      {
        id: 1,
        title: "Prepare a Portfolio Walkthrough",
        scenario: "A recruiter asks for a five-minute demonstration of your capstone.",
        prompt: "Which plan is best?",
        expectedResponse: "A — Structured walkthrough se technical aur business understanding dono dikhte hain."
      },
    ],
    mockInterview: [
      {
        id: 1,
        question: "How would you explain your capstone in one minute?",
        sampleAnswer: "I would cover the business question, data, methods, key verified insight, recommendation, and limitation."
      },
      {
        id: 2,
        question: "What should you show in a portfolio walkthrough?",
        sampleAnswer: "I would show the objective, relevant source and code, a validation example, and the dashboard or final report."
      },
      {
        id: 3,
        question: "How do you explain your personal contribution?",
        sampleAnswer: "I identify the specific tasks, decisions, and checks I performed, distinguishing them from team contributions."
      },
      {
        id: 4,
        question: "How do you answer questions about project impact?",
        sampleAnswer: "I separate observed findings and potential business value from any outcomes that were actually measured after implementation."
      },
    ]
  },
};

export const TAB8_PROJECTS_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {};

Object.entries(TAB8_PROJECTS_QUESTION_BANK).forEach(([key, bank]) => {
  TAB8_PROJECTS_QUESTION_BANK_BY_ID[bank.id] = bank;
});

// Alias mapping for continuous sequential IDs (237..265) and decimal shorthand (381..418)

TAB8_PROJECTS_QUESTION_BANK_BY_ID[237] = TAB8_PROJECTS_QUESTION_BANK["38.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[381] = TAB8_PROJECTS_QUESTION_BANK["38.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[238] = TAB8_PROJECTS_QUESTION_BANK["38.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[382] = TAB8_PROJECTS_QUESTION_BANK["38.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[239] = TAB8_PROJECTS_QUESTION_BANK["38.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[383] = TAB8_PROJECTS_QUESTION_BANK["38.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[240] = TAB8_PROJECTS_QUESTION_BANK["38.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[384] = TAB8_PROJECTS_QUESTION_BANK["38.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[241] = TAB8_PROJECTS_QUESTION_BANK["38.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[385] = TAB8_PROJECTS_QUESTION_BANK["38.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[242] = TAB8_PROJECTS_QUESTION_BANK["38.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[386] = TAB8_PROJECTS_QUESTION_BANK["38.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[243] = TAB8_PROJECTS_QUESTION_BANK["39.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[391] = TAB8_PROJECTS_QUESTION_BANK["39.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[244] = TAB8_PROJECTS_QUESTION_BANK["39.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[392] = TAB8_PROJECTS_QUESTION_BANK["39.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[245] = TAB8_PROJECTS_QUESTION_BANK["39.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[393] = TAB8_PROJECTS_QUESTION_BANK["39.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[246] = TAB8_PROJECTS_QUESTION_BANK["39.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[394] = TAB8_PROJECTS_QUESTION_BANK["39.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[247] = TAB8_PROJECTS_QUESTION_BANK["39.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[395] = TAB8_PROJECTS_QUESTION_BANK["39.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[248] = TAB8_PROJECTS_QUESTION_BANK["39.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[396] = TAB8_PROJECTS_QUESTION_BANK["39.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[249] = TAB8_PROJECTS_QUESTION_BANK["39.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[397] = TAB8_PROJECTS_QUESTION_BANK["39.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[250] = TAB8_PROJECTS_QUESTION_BANK["40.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[401] = TAB8_PROJECTS_QUESTION_BANK["40.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[251] = TAB8_PROJECTS_QUESTION_BANK["40.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[402] = TAB8_PROJECTS_QUESTION_BANK["40.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[252] = TAB8_PROJECTS_QUESTION_BANK["40.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[403] = TAB8_PROJECTS_QUESTION_BANK["40.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[253] = TAB8_PROJECTS_QUESTION_BANK["40.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[404] = TAB8_PROJECTS_QUESTION_BANK["40.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[254] = TAB8_PROJECTS_QUESTION_BANK["40.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[405] = TAB8_PROJECTS_QUESTION_BANK["40.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[255] = TAB8_PROJECTS_QUESTION_BANK["40.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[406] = TAB8_PROJECTS_QUESTION_BANK["40.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[256] = TAB8_PROJECTS_QUESTION_BANK["40.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[407] = TAB8_PROJECTS_QUESTION_BANK["40.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[257] = TAB8_PROJECTS_QUESTION_BANK["40.8"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[408] = TAB8_PROJECTS_QUESTION_BANK["40.8"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[258] = TAB8_PROJECTS_QUESTION_BANK["41.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[411] = TAB8_PROJECTS_QUESTION_BANK["41.1"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[259] = TAB8_PROJECTS_QUESTION_BANK["41.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[412] = TAB8_PROJECTS_QUESTION_BANK["41.2"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[260] = TAB8_PROJECTS_QUESTION_BANK["41.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[413] = TAB8_PROJECTS_QUESTION_BANK["41.3"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[261] = TAB8_PROJECTS_QUESTION_BANK["41.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[414] = TAB8_PROJECTS_QUESTION_BANK["41.4"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[262] = TAB8_PROJECTS_QUESTION_BANK["41.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[415] = TAB8_PROJECTS_QUESTION_BANK["41.5"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[263] = TAB8_PROJECTS_QUESTION_BANK["41.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[416] = TAB8_PROJECTS_QUESTION_BANK["41.6"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[264] = TAB8_PROJECTS_QUESTION_BANK["41.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[417] = TAB8_PROJECTS_QUESTION_BANK["41.7"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[265] = TAB8_PROJECTS_QUESTION_BANK["41.8"];
TAB8_PROJECTS_QUESTION_BANK_BY_ID[418] = TAB8_PROJECTS_QUESTION_BANK["41.8"];