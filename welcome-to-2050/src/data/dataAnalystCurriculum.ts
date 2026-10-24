export interface TopicItem {
  id: string;
  topicNum: string; // e.g. "1.1", "1.2"
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
  // ─── TAB 1 ─────────────────────────────────────────────────────────────
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
        subtitle: 'Understand what data analytics is, its types and real-world applications.',
        topics: [
          { id: 't-1-1', topicNum: '1.1', title: 'What Is Data Analytics?', duration: 'Video • 6 min', type: 'video', status: 'completed' },
          { id: 't-1-2', topicNum: '1.2', title: 'Types of Analytics: Descriptive to Prescriptive', duration: 'Video • 8 min', type: 'video', status: 'completed' },
          { id: 't-1-3', topicNum: '1.3', title: 'Data Analyst Roles and Responsibilities', duration: 'Video • 7 min', type: 'video', status: 'completed' },
          { id: 't-1-4', topicNum: '1.4', title: 'Analytics Lifecycle', duration: 'Video • 6 min', type: 'video', status: 'in-progress' },
          { id: 't-1-5', topicNum: '1.5', title: 'Business Questions and KPIs', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-2',
        chapterNum: 2,
        title: 'Chapter 2: Data and Business Thinking',
        subtitle: 'Learn about different data types, sources and how to think from a business perspective.',
        topics: [
          { id: 't-2-1', topicNum: '2.1', title: 'Structured and Unstructured Data', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-2-2', topicNum: '2.2', title: 'Data Sources and Formats', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-2-3', topicNum: '2.3', title: 'Metrics, Dimensions and Measures', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-2-4', topicNum: '2.4', title: 'Understanding Business Context', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-2-5', topicNum: '2.5', title: 'Turning Questions into Analysis Plans', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-3',
        chapterNum: 3,
        title: 'Chapter 3: Data Collection and Data Quality',
        subtitle: 'Collect data from systems and apply rigorous quality and cleaning checks.',
        topics: [
          { id: 't-3-1', topicNum: '3.1', title: 'Collecting Data from Files and Systems', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-3-2', topicNum: '3.2', title: 'Data Types and Schemas', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-3-3', topicNum: '3.3', title: 'Missing and Duplicate Values', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-3-4', topicNum: '3.4', title: 'Accuracy, Completeness and Consistency', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-3-5', topicNum: '3.5', title: 'Data Quality Checks and Documentation', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 2 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-2',
    tabNum: 2,
    title: 'Excel for Data Analysis',
    shortTitle: 'Excel for Data Analysis',
    subtitle: 'Master enterprise spreadsheets, nested formulas, XLOOKUP, PivotTables and Power Query.',
    iconName: 'excel',
    chapters: [
      {
        id: 'ch-4',
        chapterNum: 4,
        title: 'Chapter 4: Excel Essentials',
        subtitle: 'Core navigation, structured tables, formatting, and data hygiene rules.',
        topics: [
          { id: 't-4-1', topicNum: '4.1', title: 'Workbooks, Worksheets and Tables', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-4-2', topicNum: '4.2', title: 'Cell References and Data Types', duration: 'Video • 6 min', type: 'video', status: 'locked' },
          { id: 't-4-3', topicNum: '4.3', title: 'Sorting and Filtering', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-4-4', topicNum: '4.4', title: 'Formatting and Data Validation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-4-5', topicNum: '4.5', title: 'Common Errors and Data Hygiene', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-5',
        chapterNum: 5,
        title: 'Chapter 5: Excel Formulas and Functions',
        subtitle: 'Dynamic calculations with logical conditions, modern lookups and text manipulation.',
        topics: [
          { id: 't-5-1', topicNum: '5.1', title: 'SUM, AVERAGE, COUNT and IF', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-5-2', topicNum: '5.2', title: 'SUMIFS and COUNTIFS', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-5-3', topicNum: '5.3', title: 'Text and Date Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-5-4', topicNum: '5.4', title: 'XLOOKUP and INDEX-MATCH', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-5-5', topicNum: '5.5', title: 'Logical and Error-Handling Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-6',
        chapterNum: 6,
        title: 'Chapter 6: PivotTables and Reporting',
        subtitle: 'Slice, dice and visualize summary insights with interactive dashboards in Excel.',
        topics: [
          { id: 't-6-1', topicNum: '6.1', title: 'Create and Format PivotTables', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-6-2', topicNum: '6.2', title: 'Group and Summarize Data', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-6-3', topicNum: '6.3', title: 'PivotCharts and Slicers', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-6-4', topicNum: '6.4', title: 'Conditional Formatting', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-6-5', topicNum: '6.5', title: 'Build a Summary Report', duration: 'Video • 11 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 3 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-3',
    tabNum: 3,
    title: 'SQL for Analytics',
    shortTitle: 'SQL for Analytics',
    subtitle: 'Extract, transform and aggregate enterprise relational data with production SQL.',
    iconName: 'sql',
    chapters: [
      {
        id: 'ch-7',
        chapterNum: 7,
        title: 'Chapter 7: SQL Fundamentals',
        subtitle: 'Foundations of query syntax, filters, aggregate metrics, and data ordering.',
        topics: [
          { id: 't-7-1', topicNum: '7.1', title: 'SELECT and DISTINCT', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-7-2', topicNum: '7.2', title: 'WHERE, ORDER BY and LIMIT', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-7-3', topicNum: '7.3', title: 'Filtering with AND, OR and IN', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-7-4', topicNum: '7.4', title: 'NULL Handling and COALESCE', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-7-5', topicNum: '7.5', title: 'Aggregate Functions', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-8',
        chapterNum: 8,
        title: 'Chapter 8: Joins and Subqueries',
        subtitle: 'Merge tables, resolve relationships, and construct nested data pipelines.',
        topics: [
          { id: 't-8-1', topicNum: '8.1', title: 'INNER and LEFT JOIN', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-8-2', topicNum: '8.2', title: 'RIGHT and FULL JOIN Concepts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-8-3', topicNum: '8.3', title: 'Joining Multiple Tables', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-8-4', topicNum: '8.4', title: 'Subqueries and EXISTS', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-8-5', topicNum: '8.5', title: 'UNION vs UNION ALL', duration: 'Video • 7 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-9',
        chapterNum: 9,
        title: 'Chapter 9: Advanced SQL Analysis',
        subtitle: 'CTEs, window analytical ranks, conditional logic, and query optimization.',
        topics: [
          { id: 't-9-1', topicNum: '9.1', title: 'Common Table Expressions (CTEs)', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-9-2', topicNum: '9.2', title: 'Window Functions', duration: 'Video • 12 min', type: 'video', status: 'locked' },
          { id: 't-9-3', topicNum: '9.3', title: 'CASE WHEN Logic', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-9-4', topicNum: '9.4', title: 'Date and Text Functions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-9-5', topicNum: '9.5', title: 'Query Validation and Performance Basics', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 4 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-4',
    tabNum: 4,
    title: 'Python for Data Analytics',
    shortTitle: 'Python for Data Analytics',
    subtitle: 'Wrangle datasets, automate reporting, and discover patterns with Pandas and NumPy.',
    iconName: 'python',
    chapters: [
      {
        id: 'ch-10',
        chapterNum: 10,
        title: 'Chapter 10: Python Foundations',
        subtitle: 'Syntax, variables, collections, loops, modular functions, and robust error handling.',
        topics: [
          { id: 't-10-1', topicNum: '10.1', title: 'Variables and Data Types', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-10-2', topicNum: '10.2', title: 'Conditions and Loops', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-10-3', topicNum: '10.3', title: 'Lists, Dictionaries and Functions', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-10-4', topicNum: '10.4', title: 'File Handling and Exceptions', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-10-5', topicNum: '10.5', title: 'Writing Reusable Code', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-11',
        chapterNum: 11,
        title: 'Chapter 11: NumPy and Pandas',
        subtitle: 'High-performance vector operations and flexible DataFrame manipulations.',
        topics: [
          { id: 't-11-1', topicNum: '11.1', title: 'NumPy Arrays and Operations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-11-2', topicNum: '11.2', title: 'Pandas Series and DataFrames', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-11-3', topicNum: '11.3', title: 'Read CSV and Excel Files', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-11-4', topicNum: '11.4', title: 'Filter, Sort and Select Data', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-11-5', topicNum: '11.5', title: 'GroupBy, Merge and Concatenate', duration: 'Video • 11 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-12',
        chapterNum: 12,
        title: 'Chapter 12: Data Cleaning and Visualization',
        subtitle: 'Detect anomalies, handle missing values, and generate clear Matplotlib plots.',
        topics: [
          { id: 't-12-1', topicNum: '12.1', title: 'Handle Missing Values', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-12-2', topicNum: '12.2', title: 'Remove Duplicates and Fix Data Types', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-12-3', topicNum: '12.3', title: 'Detect Outliers and Inconsistencies', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-12-4', topicNum: '12.4', title: 'Charts with Matplotlib', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-12-5', topicNum: '12.5', title: 'Validate and Explain Findings', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 5 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-5',
    tabNum: 5,
    title: 'Power BI and Dashboards',
    shortTitle: 'Power BI and Dashboards',
    subtitle: 'Design interactive, production-grade BI dashboards with Star Schema and DAX.',
    iconName: 'powerbi',
    chapters: [
      {
        id: 'ch-13',
        chapterNum: 13,
        title: 'Chapter 13: Power BI Fundamentals',
        subtitle: 'Connect disparate sources, transform schemas, and build your initial visuals.',
        topics: [
          { id: 't-13-1', topicNum: '13.1', title: 'Power BI Desktop and Service', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-13-2', topicNum: '13.2', title: 'Import Data from Multiple Sources', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-13-3', topicNum: '13.3', title: 'Power Query Editor', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-13-4', topicNum: '13.4', title: 'Data Types and Transformations', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-13-5', topicNum: '13.5', title: 'Refresh and Data Source Settings', duration: 'Video • 7 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-14',
        chapterNum: 14,
        title: 'Chapter 14: Data Modeling and DAX',
        subtitle: 'Relationships, star schemas, measures, filter context and time intelligence.',
        topics: [
          { id: 't-14-1', topicNum: '14.1', title: 'Relationships and Cardinality', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-14-2', topicNum: '14.2', title: 'Star Schema Basics', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-14-3', topicNum: '14.3', title: 'Calculated Columns vs Measures', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-14-4', topicNum: '14.4', title: 'DAX Measures and Filter Context', duration: 'Video • 11 min', type: 'video', status: 'locked' },
          { id: 't-14-5', topicNum: '14.5', title: 'Time Intelligence Fundamentals', duration: 'Video • 10 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-15',
        chapterNum: 15,
        title: 'Chapter 15: Dashboard Design and Sharing',
        subtitle: 'UX layout rules, cross-filtering, publishing, and row-level enterprise security.',
        topics: [
          { id: 't-15-1', topicNum: '15.1', title: 'Choose KPIs and Visuals', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-15-2', topicNum: '15.2', title: 'Slicers, Filters and Drill-Through', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-15-3', topicNum: '15.3', title: 'Layout, Color and Accessibility', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-15-4', topicNum: '15.4', title: 'Publish and Share Reports', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-15-5', topicNum: '15.5', title: 'Row-Level Security Overview', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 6 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-6',
    tabNum: 6,
    title: 'Generative AI for Analysts',
    shortTitle: 'Generative AI for Analysts',
    subtitle: 'Accelerate analysis, query drafting, report summaries and insight discovery with GenAI.',
    iconName: 'genai',
    chapters: [
      {
        id: 'ch-16',
        chapterNum: 16,
        title: 'Chapter 16: Generative AI Fundamentals',
        subtitle: 'LLM mechanics, hallucination management, ethics, and human-in-the-loop review.',
        topics: [
          { id: 't-16-1', topicNum: '16.1', title: 'What Is Generative AI?', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-16-2', topicNum: '16.2', title: 'Large Language Models and Limitations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-16-3', topicNum: '16.3', title: 'Responsible Use and Data Privacy', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-16-4', topicNum: '16.4', title: 'Hallucinations and Fact-Checking', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-16-5', topicNum: '16.5', title: 'Human Review in Analytics', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-17',
        chapterNum: 17,
        title: 'Chapter 17: Prompt Engineering for Data Work',
        subtitle: 'Craft precision prompts for SQL generation, formula debugging, and code explanation.',
        topics: [
          { id: 't-17-1', topicNum: '17.1', title: 'Write Clear Analysis Prompts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-17-2', topicNum: '17.2', title: 'Provide Context and Output Requirements', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-17-3', topicNum: '17.3', title: 'Ask AI to Explain SQL and Python', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-17-4', topicNum: '17.4', title: 'Generate and Refine Formulas', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-17-5', topicNum: '17.5', title: 'Evaluate AI-Generated Results', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-18',
        chapterNum: 18,
        title: 'Chapter 18: AI-Assisted Analytics Workflows',
        subtitle: 'Synthesize data tables, author narratives, and automate workflow documentation.',
        topics: [
          { id: 't-18-1', topicNum: '18.1', title: 'Generate an Analysis Plan', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-18-2', topicNum: '18.2', title: 'Summarize Tables and Trends', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-18-3', topicNum: '18.3', title: 'Draft Insight Narratives', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-18-4', topicNum: '18.4', title: 'Create Documentation and Report Summaries', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-18-5', topicNum: '18.5', title: 'Verify Every Claim Against Data', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 7 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-7',
    tabNum: 7,
    title: 'Business Insights and Communication',
    shortTitle: 'Business Insights and Communication',
    subtitle: 'Translate complex numbers into compelling executive narratives and strategic roadmaps.',
    iconName: 'target',
    chapters: [
      {
        id: 'ch-19',
        chapterNum: 19,
        title: 'Chapter 19: Exploratory Data Analysis',
        subtitle: 'Investigate cohorts, distributions, correlation patterns, and anomaly root causes.',
        topics: [
          { id: 't-19-1', topicNum: '19.1', title: 'Ask Questions Before Analyzing', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-19-2', topicNum: '19.2', title: 'Understand Distributions and Trends', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-19-3', topicNum: '19.3', title: 'Compare Segments and Cohorts', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-19-4', topicNum: '19.4', title: 'Find Outliers and Relationships', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-19-5', topicNum: '19.5', title: 'Avoid Common Analytical Errors', duration: 'Video • 8 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-20',
        chapterNum: 20,
        title: 'Chapter 20: Statistics for Analysts',
        subtitle: 'Practical descriptive metrics, dispersion, statistical sampling, and hypothesis tests.',
        topics: [
          { id: 't-20-1', topicNum: '20.1', title: 'Mean, Median and Percentiles', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-20-2', topicNum: '20.2', title: 'Variance and Standard Deviation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-20-3', topicNum: '20.3', title: 'Sampling and Bias', duration: 'Video • 7 min', type: 'video', status: 'locked' },
          { id: 't-20-4', topicNum: '20.4', title: 'Correlation vs Causation', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-20-5', topicNum: '20.5', title: 'Introductory Hypothesis Testing', duration: 'Video • 10 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-21',
        chapterNum: 21,
        title: 'Chapter 21: Storytelling and Stakeholder Reporting',
        subtitle: 'Structure slide decks, write executive memos, and present clear action items.',
        topics: [
          { id: 't-21-1', topicNum: '21.1', title: 'Structure an Insight Story', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-21-2', topicNum: '21.2', title: 'Explain Impact and Business Context', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-21-3', topicNum: '21.3', title: 'Choose Clear Charts', duration: 'Video • 8 min', type: 'video', status: 'locked' },
          { id: 't-21-4', topicNum: '21.4', title: 'Write Executive Summaries', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-21-5', topicNum: '21.5', title: 'Present Recommendations and Limitations', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
    ],
  },

  // ─── TAB 8 ─────────────────────────────────────────────────────────────
  {
    id: 'tab-8',
    tabNum: 8,
    title: 'Projects and Career Preparation',
    shortTitle: 'Projects and Career Preparation',
    subtitle: 'Deploy end-to-end portfolio projects, polish GitHub repositories, and crack interviews.',
    iconName: 'project',
    chapters: [
      {
        id: 'ch-22',
        chapterNum: 22,
        title: 'Chapter 22: End-to-End Analytics Project',
        subtitle: 'Build a production pipeline combining SQL, Python, Power BI and AI insight notes.',
        topics: [
          { id: 't-22-1', topicNum: '22.1', title: 'Define a Business Problem and KPIs', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
          { id: 't-22-2', topicNum: '22.2', title: 'Acquire and Clean a Dataset', duration: 'Project • 2.5 hrs', type: 'project', status: 'locked' },
          { id: 't-22-3', topicNum: '22.3', title: 'Analyze with SQL or Python', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-22-4', topicNum: '22.4', title: 'Build a Power BI Dashboard', duration: 'Project • 3.5 hrs', type: 'project', status: 'locked' },
          { id: 't-22-5', topicNum: '22.5', title: 'Use AI to Draft and Validate Insights', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
        ],
      },
      {
        id: 'ch-23',
        chapterNum: 23,
        title: 'Chapter 23: Portfolio and Interview Preparation',
        subtitle: 'STAR storytelling, technical challenge prep, and interview defense strategies.',
        topics: [
          { id: 't-23-1', topicNum: '23.1', title: 'Write a Project Case Study', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-23-2', topicNum: '23.2', title: 'Explain SQL and Excel Decisions', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-23-3', topicNum: '23.3', title: 'Practice Python and Power BI Questions', duration: 'Video • 10 min', type: 'video', status: 'locked' },
          { id: 't-23-4', topicNum: '23.4', title: 'Answer Behavioral Questions with STAR', duration: 'Video • 9 min', type: 'video', status: 'locked' },
          { id: 't-23-5', topicNum: '23.5', title: 'Present Findings Clearly', duration: 'Video • 9 min', type: 'video', status: 'locked' },
        ],
      },
      {
        id: 'ch-24',
        chapterNum: 24,
        title: 'Chapter 24: Career Launch and Capstone',
        subtitle: 'Final capstone validation, portfolio review, resume audit, and interview referrals.',
        topics: [
          { id: 't-24-1', topicNum: '24.1', title: 'Choose a Realistic Business Dataset', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-24-2', topicNum: '24.2', title: 'Build a Reproducible Analysis Workflow', duration: 'Project • 3.5 hrs', type: 'project', status: 'locked' },
          { id: 't-24-3', topicNum: '24.3', title: 'Document Assumptions and Quality Checks', duration: 'Project • 2 hrs', type: 'project', status: 'locked' },
          { id: 't-24-4', topicNum: '24.4', title: 'Deliver a Dashboard and Recommendation', duration: 'Project • 3 hrs', type: 'project', status: 'locked' },
          { id: 't-24-5', topicNum: '24.5', title: 'Prepare a Portfolio Presentation', duration: 'Project • 2.5 hrs', type: 'project', status: 'locked' },
        ],
      },
    ],
  },
];
