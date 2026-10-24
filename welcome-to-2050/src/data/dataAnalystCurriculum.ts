export interface TopicItem {
  id: string;
  topicNum: number; // 1 to 120
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'project' | 'reading';
  status: 'completed' | 'in-progress' | 'locked';
}

export interface ChapterItem {
  id: string;
  chapterNum: number;
  title: string;
  subtitle: string;
  topics: TopicItem[];
}

export interface TabItem {
  id: string;
  tabNum: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  iconName: 'chart' | 'excel' | 'sql' | 'python' | 'powerbi' | 'genai' | 'target' | 'project';
  isFree?: boolean;
  chapters: ChapterItem[];
}

export const DATA_ANALYST_CURRICULUM: TabItem[] = [
  // ─── TAB 1: DATA ANALYTICS FOUNDATIONS (Topics 1 - 15) ─────────────────────
  {
    id: 'tab-1',
    tabNum: 1,
    title: 'Data Analytics Foundations',
    shortTitle: 'Data Analytics Foundations',
    subtitle: 'Build a strong foundation in data analytics, business thinking and data quality.',
    iconName: 'chart',
    isFree: true,
    chapters: [
      {
        id: 'ch-1',
        chapterNum: 1,
        title: 'Chapter 1: Introduction to Data Analytics',
        subtitle: 'Understand what data analytics is, roles, types and real-world analytics lifecycles.',
        topics: [
          { id: 't-1', topicNum: 1, title: 'What Is Data Analytics?', duration: 'Video • 6 min', type: 'video', status: 'completed' },
          { id: 't-2', topicNum: 2, title: 'Data Analyst Roles and Responsibilities', duration: 'Video • 7 min', type: 'video', status: 'completed' },
          { id: 't-3', topicNum: 3, title: 'Types of Analytics: Descriptive to Prescriptive', duration: 'Video • 8 min', type: 'video', status: 'completed' },
          { id: 't-4', topicNum: 4, title: 'Analytics Lifecycle', duration: 'Video • 6 min', type: 'video', status: 'in-progress' },
          { id: 't-5', topicNum: 5, title: 'Business Questions and KPIs', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-2',
        chapterNum: 2,
        title: 'Chapter 2: Data and Business Thinking',
        subtitle: 'Learn about data formats, metrics, dimensions and how to think with business context.',
        topics: [
          { id: 't-6', topicNum: 6, title: 'Structured and Unstructured Data', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-7', topicNum: 7, title: 'Data Sources and Formats', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-8', topicNum: 8, title: 'Metrics, Dimensions and Measures', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-9', topicNum: 9, title: 'Understanding Business Context', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-10', topicNum: 10, title: 'Turning Questions into Analysis Plans', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-3',
        chapterNum: 3,
        title: 'Chapter 3: Data Collection and Data Quality',
        subtitle: 'Collect data accurately, handle anomalies, duplicates, and document quality pipelines.',
        topics: [
          { id: 't-11', topicNum: 11, title: 'Collecting Data from Files and Systems', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-12', topicNum: 12, title: 'Data Types and Schemas', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-13', topicNum: 13, title: 'Missing and Duplicate Values', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-14', topicNum: 14, title: 'Accuracy, Completeness and Consistency', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-15', topicNum: 15, title: 'Data Quality Checks and Documentation', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 2: EXCEL FOR DATA ANALYSIS (Topics 16 - 30) ───────────────────────
  {
    id: 'tab-2',
    tabNum: 2,
    title: 'Excel for Data Analysis',
    shortTitle: 'Excel for Data Analysis',
    subtitle: 'Master enterprise workbooks, nested formulas, XLOOKUP, PivotTables and dynamic reporting.',
    iconName: 'excel',
    chapters: [
      {
        id: 'ch-4',
        chapterNum: 4,
        title: 'Chapter 4: Excel Essentials',
        subtitle: 'Workbooks, tables, data references, validation rules, and error prevention.',
        topics: [
          { id: 't-16', topicNum: 16, title: 'Workbooks, Worksheets and Tables', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-17', topicNum: 17, title: 'Cell References and Data Types', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-18', topicNum: 18, title: 'Sorting and Filtering', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-19', topicNum: 19, title: 'Formatting and Data Validation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-20', topicNum: 20, title: 'Common Errors and Data Hygiene', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-5',
        chapterNum: 5,
        title: 'Chapter 5: Excel Formulas and Functions',
        subtitle: 'Dynamic array functions, statistical calculations, modern lookups and conditional logic.',
        topics: [
          { id: 't-21', topicNum: 21, title: 'SUM, AVERAGE, COUNT and IF', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-22', topicNum: 22, title: 'SUMIFS and COUNTIFS', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-23', topicNum: 23, title: 'Text and Date Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-24', topicNum: 24, title: 'XLOOKUP and INDEX-MATCH', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-25', topicNum: 25, title: 'Logical and Error-Handling Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-6',
        chapterNum: 6,
        title: 'Chapter 6: PivotTables and Reporting',
        subtitle: 'Summarize multidimensional data, build interactive PivotCharts, and generate executive summaries.',
        topics: [
          { id: 't-26', topicNum: 26, title: 'Create and Format PivotTables', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-27', topicNum: 27, title: 'Group and Summarize Data', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-28', topicNum: 28, title: 'PivotCharts and Slicers', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-29', topicNum: 29, title: 'Conditional Formatting', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-30', topicNum: 30, title: 'Build a Summary Report', duration: 'Video • 11 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 3: SQL FOR ANALYTICS (Topics 31 - 45) ─────────────────────────────
  {
    id: 'tab-3',
    tabNum: 3,
    title: 'SQL for Analytics',
    shortTitle: 'SQL for Analytics',
    subtitle: 'Query relational databases, master joins, subqueries, CTEs, and advanced window functions.',
    iconName: 'sql',
    chapters: [
      {
        id: 'ch-7',
        chapterNum: 7,
        title: 'Chapter 7: SQL Fundamentals',
        subtitle: 'Core query clauses, filtering syntax, NULL safety, and aggregate metrics.',
        topics: [
          { id: 't-31', topicNum: 31, title: 'SELECT and DISTINCT', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-32', topicNum: 32, title: 'WHERE, ORDER BY and LIMIT', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-33', topicNum: 33, title: 'Filtering with AND, OR and IN', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-34', topicNum: 34, title: 'NULL Handling and COALESCE', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-35', topicNum: 35, title: 'Aggregate Functions', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-8',
        chapterNum: 8,
        title: 'Chapter 8: Joins and Subqueries',
        subtitle: 'Relate multi-table schemas, combine sets with UNION, and author nested subqueries.',
        topics: [
          { id: 't-36', topicNum: 36, title: 'INNER and LEFT JOIN', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-37', topicNum: 37, title: 'RIGHT and FULL JOIN Concepts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-38', topicNum: 38, title: 'Joining Multiple Tables', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-39', topicNum: 39, title: 'Subqueries and EXISTS', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-40', topicNum: 40, title: 'UNION vs UNION ALL', duration: 'Video • 7 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-9',
        chapterNum: 9,
        title: 'Chapter 9: Advanced SQL Analysis',
        subtitle: 'Common table expressions, window partition rankings, CASE WHEN logic, and query tuning.',
        topics: [
          { id: 't-41', topicNum: 41, title: 'Common Table Expressions (CTEs)', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-42', topicNum: 42, title: 'Window Functions', duration: 'Video • 12 min', type: 'video', status: 'locked' },
          { id: 't-43', topicNum: 43, title: 'CASE WHEN Logic', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-44', topicNum: 44, title: 'Date and Text Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-45', topicNum: 45, title: 'Query Validation and Performance Basics', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 4: PYTHON FOR DATA ANALYTICS (Topics 46 - 60) ─────────────────────
  {
    id: 'tab-4',
    tabNum: 4,
    title: 'Python for Data Analytics',
    shortTitle: 'Python for Data Analytics',
    subtitle: 'Automate data processing, wrangle DataFrames with Pandas & NumPy, and build visual charts.',
    iconName: 'python',
    chapters: [
      {
        id: 'ch-10',
        chapterNum: 10,
        title: 'Chapter 10: Python Foundations',
        subtitle: 'Variables, data collections, flow control, reusable functions, and robust exception handling.',
        topics: [
          { id: 't-46', topicNum: 46, title: 'Variables and Data Types', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-47', topicNum: 47, title: 'Conditions and Loops', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-48', topicNum: 48, title: 'Lists, Dictionaries and Functions', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-49', topicNum: 49, title: 'File Handling and Exceptions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-50', topicNum: 50, title: 'Writing Reusable Code', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-11',
        chapterNum: 11,
        title: 'Chapter 11: NumPy and Pandas',
        subtitle: 'Array vectorized math, series operations, CSV ingest, filtering, and grouped aggregations.',
        topics: [
          { id: 't-51', topicNum: 51, title: 'NumPy Arrays and Operations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-52', topicNum: 52, title: 'Pandas Series and DataFrames', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-53', topicNum: 53, title: 'Read CSV and Excel Files', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-54', topicNum: 54, title: 'Filter, Sort and Select Data', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-55', topicNum: 55, title: 'GroupBy, Merge and Concatenate', duration: 'Video • 11 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-12',
        chapterNum: 12,
        title: 'Chapter 12: Data Cleaning and Visualization',
        subtitle: 'Diagnose anomalies, fix schema types, handle outliers, and plot graphs with Matplotlib.',
        topics: [
          { id: 't-56', topicNum: 56, title: 'Handle Missing Values', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-57', topicNum: 57, title: 'Remove Duplicates and Fix Data Types', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-58', topicNum: 58, title: 'Detect Outliers and Inconsistencies', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-59', topicNum: 59, title: 'Charts with Matplotlib', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-60', topicNum: 60, title: 'Validate and Explain Findings', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 5: POWER BI AND DASHBOARDS (Topics 61 - 75) ───────────────────────
  {
    id: 'tab-5',
    tabNum: 5,
    title: 'Power BI and Dashboards',
    shortTitle: 'Power BI and Dashboards',
    subtitle: 'Build enterprise BI dashboards, configure Star Schemas, and write advanced DAX formulas.',
    iconName: 'powerbi',
    chapters: [
      {
        id: 'ch-13',
        chapterNum: 13,
        title: 'Chapter 13: Power BI Fundamentals',
        subtitle: 'Connect disparate data silos, author Power Query ETL pipelines, and manage refreshes.',
        topics: [
          { id: 't-61', topicNum: 61, title: 'Power BI Desktop and Service', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-62', topicNum: 62, title: 'Import Data from Multiple Sources', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-63', topicNum: 63, title: 'Power Query Editor', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-64', topicNum: 64, title: 'Data Types and Transformations', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-65', topicNum: 65, title: 'Refresh and Data Source Settings', duration: 'Video • 7 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-14',
        chapterNum: 14,
        title: 'Chapter 14: Data Modeling and DAX',
        subtitle: 'Configure dimensional tables, star relationships, measure context, and time intelligence.',
        topics: [
          { id: 't-66', topicNum: 66, title: 'Relationships and Cardinality', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-67', topicNum: 67, title: 'Star Schema Basics', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-68', topicNum: 68, title: 'Calculated Columns vs Measures', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-69', topicNum: 69, title: 'DAX Measures and Filter Context', duration: 'Video • 11 min', type: 'video', status: 'locked' },
          { id: 't-70', topicNum: 70, title: 'Time Intelligence Fundamentals', duration: 'Video • 10 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-15',
        chapterNum: 15,
        title: 'Chapter 15: Dashboard Design and Sharing',
        subtitle: 'Executive UI layout design, drill-through cards, cloud publishing, and row-level security.',
        topics: [
          { id: 't-71', topicNum: 71, title: 'Choose KPIs and Visuals', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-72', topicNum: 72, title: 'Slicers, Filters and Drill-Through', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-73', topicNum: 73, title: 'Layout, Color and Accessibility', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-74', topicNum: 74, title: 'Publish and Share Reports', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-75', topicNum: 75, title: 'Row-Level Security Overview', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 6: GENERATIVE AI FOR ANALYSTS (Topics 76 - 90) ────────────────────
  {
    id: 'tab-6',
    tabNum: 6,
    title: 'Generative AI for Analysts',
    shortTitle: 'Generative AI for Analysts',
    subtitle: 'Accelerate analysis, prompt engineering for SQL & Python, and AI-assisted insight synthesis.',
    iconName: 'genai',
    chapters: [
      {
        id: 'ch-16',
        chapterNum: 16,
        title: 'Chapter 16: Generative AI Fundamentals',
        subtitle: 'LLM foundations, hallucination prevention, data privacy compliance, and human verification.',
        topics: [
          { id: 't-76', topicNum: 76, title: 'What Is Generative AI?', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-77', topicNum: 77, title: 'Large Language Models and Limitations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-78', topicNum: 78, title: 'Responsible Use and Data Privacy', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-79', topicNum: 79, title: 'Hallucinations and Fact-Checking', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-80', topicNum: 80, title: 'Human Review in Analytics', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-17',
        chapterNum: 17,
        title: 'Chapter 17: Prompt Engineering for Data Work',
        subtitle: 'Author structured analysis prompts, debug formulas with AI, and evaluate generated code.',
        topics: [
          { id: 't-81', topicNum: 81, title: 'Write Clear Analysis Prompts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-82', topicNum: 82, title: 'Provide Context and Output Requirements', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-83', topicNum: 83, title: 'Ask AI to Explain SQL and Python', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-84', topicNum: 84, title: 'Generate and Refine Formulas', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-85', topicNum: 85, title: 'Evaluate AI-Generated Results', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-18',
        chapterNum: 18,
        title: 'Chapter 18: AI-Assisted Analytics Workflows',
        subtitle: 'Generate execution plans, summarize table trends, draft narratives, and verify metrics.',
        topics: [
          { id: 't-86', topicNum: 86, title: 'Generate an Analysis Plan', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-87', topicNum: 87, title: 'Summarize Tables and Trends', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-88', topicNum: 88, title: 'Draft Insight Narratives', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-89', topicNum: 89, title: 'Create Documentation and Report Summaries', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-90', topicNum: 90, title: 'Verify Every Claim Against Data', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 7: BUSINESS INSIGHTS AND COMMUNICATION (Topics 91 - 105) ──────────
  {
    id: 'tab-7',
    tabNum: 7,
    title: 'Business Insights and Communication',
    shortTitle: 'Business Insights and Communication',
    subtitle: 'Exploratory data analysis, practical business statistics, stakeholder storytelling and slide memos.',
    iconName: 'target',
    chapters: [
      {
        id: 'ch-19',
        chapterNum: 19,
        title: 'Chapter 19: Exploratory Data Analysis',
        subtitle: 'Cohort analysis, trend distributions, anomaly identification, and analytical hygiene.',
        topics: [
          { id: 't-91', topicNum: 91, title: 'Ask Questions Before Analyzing', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-92', topicNum: 92, title: 'Understand Distributions and Trends', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-93', topicNum: 93, title: 'Compare Segments and Cohorts', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-94', topicNum: 94, title: 'Find Outliers and Relationships', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-95', topicNum: 95, title: 'Avoid Common Analytical Errors', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-20',
        chapterNum: 20,
        title: 'Chapter 20: Statistics for Analysts',
        subtitle: 'Descriptive stats, variance, standard deviation, sampling bias, and introductory hypothesis tests.',
        topics: [
          { id: 't-96', topicNum: 96, title: 'Mean, Median and Percentiles', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-97', topicNum: 97, title: 'Variance and Standard Deviation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-98', topicNum: 98, title: 'Sampling and Bias', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-99', topicNum: 99, title: 'Correlation vs Causation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-100', topicNum: 100, title: 'Introductory Hypothesis Testing', duration: 'Video • 10 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-21',
        chapterNum: 21,
        title: 'Chapter 21: Storytelling and Stakeholder Reporting',
        subtitle: 'Structure executive insights, select optimal visual charts, and present actionable proposals.',
        topics: [
          { id: 't-101', topicNum: 101, title: 'Structure an Insight Story', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-102', topicNum: 102, title: 'Explain Impact and Business Context', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-103', topicNum: 103, title: 'Choose Clear Charts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-104', topicNum: 104, title: 'Write Executive Summaries', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-105', topicNum: 105, title: 'Present Recommendations and Limitations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 8: PROJECTS AND CAREER PREPARATION (Topics 106 - 120) ─────────────
  {
    id: 'tab-8',
    tabNum: 8,
    title: 'Projects and Career Preparation',
    shortTitle: 'Projects and Career Preparation',
    subtitle: 'End-to-end industry portfolio pipeline, interview question preparation, and capstone launch.',
    iconName: 'project',
    chapters: [
      {
        id: 'ch-22',
        chapterNum: 22,
        title: 'Chapter 22: End-to-End Analytics Project',
        subtitle: 'Synthesize SQL, Python, Power BI, and AI insight summaries into a production deliverable.',
        topics: [
          { id: 't-106', topicNum: 106, title: 'Define a Business Problem and KPIs', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
          { id: 't-107', topicNum: 107, title: 'Acquire and Clean a Dataset', duration: 'Project • 2.5 hrs', type: 'project', status: 'locked' },
          { id: 't-108', topicNum: 108, title: 'Analyze with SQL or Python', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-109', topicNum: 109, title: 'Build a Power BI Dashboard', duration: 'Project • 3.5 hrs', type: 'project', status: 'locked' },
          { id: 't-110', topicNum: 110, title: 'Use AI to Draft and Validate Insights', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
        ],
      },
      {
        id: 'ch-23',
        chapterNum: 23,
        title: 'Chapter 23: Portfolio and Interview Preparation',
        subtitle: 'Write case studies, explain SQL & Excel tradeoffs, practice STAR behavioral questions.',
        topics: [
          { id: 't-111', topicNum: 111, title: 'Write a Project Case Study', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-112', topicNum: 112, title: 'Explain SQL and Excel Decisions', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-113', topicNum: 113, title: 'Practice Python and Power BI Questions', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-114', topicNum: 114, title: 'Answer Behavioral Questions with STAR', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-115', topicNum: 115, title: 'Present Findings Clearly', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-24',
        chapterNum: 24,
        title: 'Chapter 24: Career Launch and Capstone',
        subtitle: 'Publish your reproducible GitHub project, deliver recommendations, and present your portfolio.',
        topics: [
          { id: 't-116', topicNum: 116, title: 'Choose a Realistic Business Dataset', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-117', topicNum: 117, title: 'Build a Reproducible Analysis Workflow', duration: 'Project • 3.5 hrs', type: 'project', status: 'locked' },
          { id: 't-118', topicNum: 118, title: 'Document Assumptions and Quality Checks', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
          { id: 't-119', topicNum: 119, title: 'Deliver a Dashboard and Recommendation', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-120', topicNum: 120, title: 'Prepare a Portfolio Presentation', duration: 'Project • 2.5 hrs', type: 'project', status: 'locked' },
        ],
      },
    ],
  },
];
