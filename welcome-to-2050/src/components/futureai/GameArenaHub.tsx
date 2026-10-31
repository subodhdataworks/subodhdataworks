import React, { useState } from 'react';
import './GameArenaHub.css';
import './SqlChapterView.css';
import {
  Home,
  BookOpen,
  Bot,
  FolderKanban,
  Award,
  Briefcase,
  Users,
  Settings,
  Star,
  Sparkles,
  Lock,
  ChevronRight,
  Flame,
  Target,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Search,
  Check,
  Gift,
  Play,
  Terminal,
  FileCode2,
  Box,
  Repeat,
  ListOrdered,
  Bug,
  Brain,
  Video,
  TrendingUp,
  X,
  ArrowLeft
} from 'lucide-react';
import { useThemeAccent } from '../../context/ThemeAccentContext';

export interface GameArenaHubProps {
  userName?: string;
  isNewStudentMode?: boolean;
  onPlayPython: (topicId?: number) => void;
  onLockedGame?: (gameName: string) => void;
  onNavigateTab?: (tab: string) => void;
  onOpenAdvisor?: () => void;
}

export type TrackType = 'basics' | 'advanced';
export type FilterType = 'all' | 'beginner' | 'intermediate' | 'advanced' | 'core' | 'data';
export type SubjectId = 'all' | 'python' | 'sql' | 'excel' | 'powerbi' | 'stats' | 'genai';

export const GameArenaHub: React.FC<GameArenaHubProps> = ({
  userName = 'Rahul Sharma',
  isNewStudentMode = true,
  onPlayPython,
  onLockedGame,
  onNavigateTab,
  onOpenAdvisor,
}) => {
  const { playClick, playHover } = useThemeAccent();
  const [activeTrack, setActiveTrack] = useState<TrackType>('basics');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'month' | 'all'>('week');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('all');
  const [activeModalGame, setActiveModalGame] = useState<any | null>(null);
  const [modalUserCode, setModalUserCode] = useState<string>('');
  const [modalFeedback, setModalFeedback] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [modalShowHint, setModalShowHint] = useState<boolean>(false);

  // 6 Core Subjects (matching user reference media_1791866254529_4c6b953d.png)
  const subjectsData = [
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      badge: 'Python',
      title: 'Python DSA Coding Practice',
      image: '/images/arena/subjects/game_card_python.jpg',
      description: 'Master variables, loops, functions, OOP, and data structures through interactive puzzles and hands-on practice.',
      gamesCount: '29 Practice Levels',
      tagColor: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
      accentBg: '#e0f2fe',
      accentBorder: '#bae6fd',
      topics: ['Foundations (L1-L15)', 'Advanced & Data (L16-L29)', 'Real Code Sandbox', 'Level Badges'],
      progressText: '29 Practice Levels Available • 100% Free',
      progressPct: 0,
    },
    {
      id: 'sql',
      name: 'SQL',
      icon: '🗄️',
      badge: 'SQL Database',
      title: 'SQL Database Quest',
      image: '/images/arena/subjects/game_card_sql.jpg',
      description: 'Query databases, master JOINs, aggregates, subqueries, and window functions hands-on.',
      gamesCount: '8 Practice Tracks',
      tagColor: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      accentBg: '#f3e8ff',
      accentBorder: '#e9d5ff',
      topics: ['SELECT & Filters', 'Multi-table JOINs', 'Aggregations', 'Window Functions'],
      progressText: '8 Practice Tracks Available • 100% Free',
      progressPct: 0,
    },
    {
      id: 'excel',
      name: 'Excel',
      icon: '📊',
      badge: 'Excel Formulas',
      title: 'Excel Formula Arena',
      image: '/images/arena/subjects/game_card_excel.jpg',
      description: 'Conquer formulas, XLOOKUP, pivot tables, data cleaning, and executive dashboarding.',
      gamesCount: '8 Practice Tracks',
      tagColor: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      accentBg: '#d1fae5',
      accentBorder: '#a7f3d0',
      topics: ['XLOOKUP & MATCH', 'Pivot Dashboards', 'Data Cleaning', 'Formula Auditing'],
      progressText: '8 Practice Tracks Available • 100% Free',
      progressPct: 0,
    },
    {
      id: 'powerbi',
      name: 'Power BI',
      icon: '📈',
      badge: 'Power BI',
      title: 'Power BI Visual League',
      image: '/images/arena/subjects/game_card_powerbi.jpg',
      description: 'Build interactive visual reports, data models, DAX measures, and business dashboards.',
      gamesCount: '8 Practice Tracks',
      tagColor: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      accentBg: '#fef3c7',
      accentBorder: '#fde68a',
      topics: ['Data Modeling', 'DAX Measures', 'Interactive Visuals', 'KPI Executive Cards'],
      progressText: '8 Practice Tracks Available • 100% Free',
      progressPct: 0,
    },
    {
      id: 'stats',
      name: 'Statistics',
      icon: '∑',
      badge: 'Statistics',
      title: 'Statistics & Math Practice',
      image: '/images/arena/subjects/game_card_stats.jpg',
      description: 'Understand distributions, probability, hypothesis testing, p-values, and statistical power.',
      gamesCount: '8 Practice Tracks',
      tagColor: '#ec4899',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
      accentBg: '#fce7f3',
      accentBorder: '#fbcfe8',
      topics: ['Normal Distribution', 'Z-Scores & Skew', 'Hypothesis p-value', 'A/B Testing Experiments'],
      progressText: '8 Practice Tracks Available • 100% Free',
      progressPct: 0,
    },
    {
      id: 'genai',
      name: 'Gen AI',
      icon: '🤖',
      badge: 'Gen AI & LLM',
      title: 'Gen AI & Prompt Labs',
      image: '/images/arena/subjects/game_card_genai.jpg',
      description: 'Explore LLMs, prompt engineering, RAG pipelines, fine-tuning, and AI agent workflows.',
      gamesCount: '8 Practice Tracks',
      tagColor: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%)',
      accentBg: '#cffafe',
      accentBorder: '#a5f3fc',
      topics: ['Few-Shot Prompting', 'Vector Embeddings', 'RAG Retrieval', 'Autonomous AI Agents'],
      progressText: '8 Practice Tracks Available • 100% Free',
      progressPct: 0,
    },
  ];

  // Curated 8 interactive challenges for non-Python subjects
  const subjectGamesMap: Record<string, Array<{
    id: number;
    subjectId: string;
    level: number;
    title: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    tagColor: string;
    icon: string;
    desc: string;
    challenge: string;
    hint: string;
    starterCode?: string;
    correctAnswer?: string;
    xp: number;
  }>> = {
    sql: [
      {
        id: 101,
        subjectId: 'sql',
        level: 1,
        title: 'SELECT & WHERE Detective',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '🔍',
        desc: 'Filter customer transactions above $500',
        challenge: 'Write a SQL query to select all customers from table "users" where city is "Mumbai" and balance > 50000.',
        hint: 'Use SELECT * FROM users WHERE city = "Mumbai" AND balance > 50000;',
        starterCode: 'SELECT * FROM users WHERE city = "Mumbai" AND balance > 50000;',
        correctAnswer: 'SELECT * FROM users WHERE city = "Mumbai" AND balance > 50000;',
        xp: 100,
      },
      {
        id: 102,
        subjectId: 'sql',
        level: 2,
        title: 'JOIN The Realm: Inner & Left',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '🔗',
        desc: 'Join orders with customer profiles',
        challenge: 'Connect orders (o) with customers (c) on customer_id using an INNER JOIN.',
        hint: 'SELECT o.order_id, c.name FROM orders o INNER JOIN customers c ON o.customer_id = c.id;',
        starterCode: 'SELECT o.id, c.name FROM orders o JOIN customers c ON o.customer_id = c.id;',
        correctAnswer: 'SELECT o.id, c.name FROM orders o JOIN customers c ON o.customer_id = c.id;',
        xp: 120,
      },
      {
        id: 103,
        subjectId: 'sql',
        level: 3,
        title: 'GROUP BY & Aggregates Rush',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '📊',
        desc: 'Calculate total revenue per department',
        challenge: 'Find total sales revenue grouped by category for year 2026.',
        hint: 'SELECT category, SUM(revenue) FROM sales GROUP BY category;',
        starterCode: 'SELECT category, SUM(revenue) as total_sales FROM sales GROUP BY category;',
        correctAnswer: 'SELECT category, SUM(revenue) as total_sales FROM sales GROUP BY category;',
        xp: 150,
      },
      {
        id: 104,
        subjectId: 'sql',
        level: 4,
        title: 'HAVING vs WHERE Challenge',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🎯',
        desc: 'Filter aggregated groups with HAVING COUNT(*) > 5',
        challenge: 'Show product categories that have more than 10 products listed.',
        hint: 'SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 10;',
        starterCode: 'SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 10;',
        correctAnswer: 'SELECT category, COUNT(*) FROM products GROUP BY category HAVING COUNT(*) > 10;',
        xp: 160,
      },
      {
        id: 105,
        subjectId: 'sql',
        level: 5,
        title: 'Subqueries & CTE Master (WITH)',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '⚡',
        desc: 'Construct clean modular queries with CTEs',
        challenge: 'Write a CTE named "HighEarners" to select employees earning above department average.',
        hint: 'WITH HighEarners AS (SELECT * FROM emp WHERE sal > 50000) SELECT * FROM HighEarners;',
        starterCode: 'WITH HighEarners AS (SELECT * FROM employees WHERE salary > 50000) SELECT * FROM HighEarners;',
        correctAnswer: 'WITH HighEarners AS (SELECT * FROM employees WHERE salary > 50000) SELECT * FROM HighEarners;',
        xp: 180,
      },
      {
        id: 106,
        subjectId: 'sql',
        level: 6,
        title: 'Window Functions: ROW_NUMBER & RANK',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '🪟',
        desc: 'Rank sales representatives per regional branch',
        challenge: 'Rank sales reps by total_deals partitioned by region.',
        hint: 'SELECT name, DENSE_RANK() OVER (PARTITION BY region ORDER BY total_deals DESC) FROM reps;',
        starterCode: 'SELECT name, region, DENSE_RANK() OVER (PARTITION BY region ORDER BY total_deals DESC) as rank FROM reps;',
        correctAnswer: 'SELECT name, region, DENSE_RANK() OVER (PARTITION BY region ORDER BY total_deals DESC) as rank FROM reps;',
        xp: 220,
      },
      {
        id: 107,
        subjectId: 'sql',
        level: 7,
        title: 'LEAD & LAG Time Voyager',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '⏳',
        desc: 'Compare month-over-month sales velocity',
        challenge: 'Use LAG(monthly_sales, 1) to calculate previous month revenue alongside current month.',
        hint: 'SELECT month, sales, LAG(sales, 1) OVER (ORDER BY month) as prev_sales FROM monthly_data;',
        starterCode: 'SELECT month, sales, LAG(sales, 1) OVER (ORDER BY month) as prev_sales FROM monthly_data;',
        correctAnswer: 'SELECT month, sales, LAG(sales, 1) OVER (ORDER BY month) as prev_sales FROM monthly_data;',
        xp: 250,
      },
      {
        id: 108,
        subjectId: 'sql',
        level: 8,
        title: 'SQL Boss Fight: Query Optimizer',
        difficulty: 'Advanced',
        tagColor: '#ec4899',
        icon: '👑',
        desc: 'Optimize a slow 10M record table with index tuning',
        challenge: 'Create a composite index on orders table for customer_id and order_date to eliminate table scans.',
        hint: 'CREATE INDEX idx_orders_cust_date ON orders(customer_id, order_date);',
        starterCode: 'CREATE INDEX idx_orders_cust_date ON orders(customer_id, order_date);',
        correctAnswer: 'CREATE INDEX idx_orders_cust_date ON orders(customer_id, order_date);',
        xp: 300,
      },
    ],
    excel: [
      {
        id: 201,
        subjectId: 'excel',
        level: 1,
        title: 'Formula Rush: SUM, AVG & COUNT',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '⚡',
        desc: 'Rapid calculations across 1,000 monthly transactions',
        challenge: 'Calculate the total quarterly sales using the SUM function on range B2:B25.',
        hint: '=SUM(B2:B25)',
        starterCode: '=SUM(B2:B25)',
        correctAnswer: '=SUM(B2:B25)',
        xp: 100,
      },
      {
        id: 202,
        subjectId: 'excel',
        level: 2,
        title: 'Logic Master: Nested IF & IFS',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '🔀',
        desc: 'Automate student grade and employee bonus brackets',
        challenge: 'Write an IFS formula that assigns "Distinction" if score >= 90, "Pass" if score >= 40, else "Fail".',
        hint: '=IFS(A2>=90, "Distinction", A2>=40, "Pass", TRUE, "Fail")',
        starterCode: '=IFS(A2>=90, "Distinction", A2>=40, "Pass", TRUE, "Fail")',
        correctAnswer: '=IFS(A2>=90, "Distinction", A2>=40, "Pass", TRUE, "Fail")',
        xp: 120,
      },
      {
        id: 203,
        subjectId: 'excel',
        level: 3,
        title: 'XLOOKUP Modern Legend',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🔍',
        desc: 'Replace legacy VLOOKUP with exact, 2-way lookups',
        challenge: 'Use XLOOKUP to find Employee Name (col C) by matching EmpID (A2) in col A.',
        hint: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        starterCode: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        correctAnswer: '=XLOOKUP(A2, A:A, C:C, "Not Found")',
        xp: 150,
      },
      {
        id: 204,
        subjectId: 'excel',
        level: 4,
        title: 'INDEX & MATCH 2D Matrix',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🎯',
        desc: 'Two-dimensional dynamic cross-reference lookups',
        challenge: 'Lookup unit price matching Product in row and Region in column using INDEX & MATCH.',
        hint: '=INDEX(PriceTable, MATCH(Prod, ProdList, 0), MATCH(Reg, RegList, 0))',
        starterCode: '=INDEX(B2:F20, MATCH(H2, A2:A20, 0), MATCH(H3, B1:F1, 0))',
        correctAnswer: '=INDEX(B2:F20, MATCH(H2, A2:A20, 0), MATCH(H3, B1:F1, 0))',
        xp: 160,
      },
      {
        id: 205,
        subjectId: 'excel',
        level: 5,
        title: 'Data Cleaning: TRIM & PROPER',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🧹',
        desc: 'Sanitize messy CRM names, emails, and address fields',
        challenge: 'Clean irregular spacing and convert text in A2 to proper capital format.',
        hint: '=PROPER(TRIM(A2))',
        starterCode: '=PROPER(TRIM(A2))',
        correctAnswer: '=PROPER(TRIM(A2))',
        xp: 180,
      },
      {
        id: 206,
        subjectId: 'excel',
        level: 6,
        title: 'Pivot Table Ninja: Calculated Fields',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '📊',
        desc: 'Aggregate 50k rows with custom profit margin columns',
        challenge: 'Define a Pivot Calculated Field for Profit Margin percentage: =(Profit / Revenue) * 100.',
        hint: '=(Profit / Revenue) * 100',
        starterCode: '=(Profit / Revenue) * 100',
        correctAnswer: '=(Profit / Revenue) * 100',
        xp: 220,
      },
      {
        id: 207,
        subjectId: 'excel',
        level: 7,
        title: 'Dynamic Arrays: FILTER & UNIQUE',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '✨',
        desc: 'Build self-updating live reports without VBA code',
        challenge: 'Extract unique departments sorted alphabetically where Active = "Yes".',
        hint: '=SORT(UNIQUE(FILTER(A2:A100, B2:B100="Yes")))',
        starterCode: '=SORT(UNIQUE(FILTER(A2:A100, B2:B100="Yes")))',
        correctAnswer: '=SORT(UNIQUE(FILTER(A2:A100, B2:B100="Yes")))',
        xp: 250,
      },
      {
        id: 208,
        subjectId: 'excel',
        level: 8,
        title: 'Excel Boss: Executive Financial Deck',
        difficulty: 'Advanced',
        tagColor: '#ec4899',
        icon: '👑',
        desc: 'Assemble an interactive C-Suite financial model',
        challenge: 'Create a dynamic waterfall cashflow summary combining SUMIFS and conditional formatting bars.',
        hint: '=SUMIFS(C:C, A:A, ">="&G1, A:A, "<="&G2, B:B, G3)',
        starterCode: '=SUMIFS(C:C, A:A, ">="&G1, A:A, "<="&G2, B:B, G3)',
        correctAnswer: '=SUMIFS(C:C, A:A, ">="&G1, A:A, "<="&G2, B:B, G3)',
        xp: 300,
      },
    ],
    powerbi: [
      {
        id: 301,
        subjectId: 'powerbi',
        level: 1,
        title: 'Power Query ETL Hero',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '⚡',
        desc: 'Unpivot, split delimiters, and clean raw sales feeds',
        challenge: 'Identify the M-code step to unpivot wide quarterly columns into rows.',
        hint: 'Table.UnpivotOtherColumns(Source, {"Country", "Category"}, "Quarter", "Revenue")',
        starterCode: 'Table.UnpivotOtherColumns(Source, {"Country", "Category"}, "Quarter", "Revenue")',
        correctAnswer: 'Table.UnpivotOtherColumns(Source, {"Country", "Category"}, "Quarter", "Revenue")',
        xp: 100,
      },
      {
        id: 302,
        subjectId: 'powerbi',
        level: 2,
        title: 'Star Schema Architect',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '⭐',
        desc: 'Link Fact tables to Dimension tables with 1-to-many cardinality',
        challenge: 'Define the relationship between Dim_Customer and Fact_Sales.',
        hint: '1-to-Many single directional filter (Dim_Customer 1 -> * Fact_Sales)',
        starterCode: '1-to-Many single directional filter (Dim_Customer 1 -> * Fact_Sales)',
        correctAnswer: '1-to-Many single directional filter (Dim_Customer 1 -> * Fact_Sales)',
        xp: 120,
      },
      {
        id: 303,
        subjectId: 'powerbi',
        level: 3,
        title: 'DAX Basics: CALCULATE Magic',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '📐',
        desc: 'Override filter context with CALCULATE and FILTER',
        challenge: 'Write a DAX measure for Total India Sales only.',
        hint: 'Total India Sales = CALCULATE(SUM(Sales[Amount]), Customers[Country] = "India")',
        starterCode: 'Total India Sales = CALCULATE(SUM(Sales[Amount]), Customers[Country] = "India")',
        correctAnswer: 'Total India Sales = CALCULATE(SUM(Sales[Amount]), Customers[Country] = "India")',
        xp: 150,
      },
      {
        id: 304,
        subjectId: 'powerbi',
        level: 4,
        title: 'DAX Time Intelligence: YTD & YoY',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '📅',
        desc: 'Compute Year-To-Date and Year-over-Year growth percentages',
        challenge: 'Create a DAX measure for Sales YTD using TOTALYTD.',
        hint: 'Sales YTD = TOTALYTD(SUM(Sales[Amount]), DimDate[Date])',
        starterCode: 'Sales YTD = TOTALYTD(SUM(Sales[Amount]), DimDate[Date])',
        correctAnswer: 'Sales YTD = TOTALYTD(SUM(Sales[Amount]), DimDate[Date])',
        xp: 160,
      },
      {
        id: 305,
        subjectId: 'powerbi',
        level: 5,
        title: 'Visual Storyteller: Drill-Down & Tooltips',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🎨',
        desc: 'Craft interactive report page tooltips with micro charts',
        challenge: 'Configure a drill-through filter from Region level to City level store performance.',
        hint: 'Enable drill-through on City field with keep all filters active.',
        starterCode: 'Drillthrough: Add City field to Drillthrough wells with Keep All Filters ON',
        correctAnswer: 'Drillthrough: Add City field to Drillthrough wells with Keep All Filters ON',
        xp: 180,
      },
      {
        id: 306,
        subjectId: 'powerbi',
        level: 6,
        title: 'Row-Level Security (RLS) Shield',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '🛡️',
        desc: 'Ensure regional managers only see their own territory data',
        challenge: 'Write a DAX RLS rule on Dim_Manager using USERPRINCIPALNAME().',
        hint: '[Manager_Email] = USERPRINCIPALNAME()',
        starterCode: '[Manager_Email] = USERPRINCIPALNAME()',
        correctAnswer: '[Manager_Email] = USERPRINCIPALNAME()',
        xp: 220,
      },
      {
        id: 307,
        subjectId: 'powerbi',
        level: 7,
        title: 'DAX Iterator Battle: SUMX & AVERAGEX',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '🔄',
        desc: 'Row-by-row price * quantity evaluations at scale',
        challenge: 'Write a measure calculating Total Revenue including discounted prices.',
        hint: 'Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice] * (1 - Sales[Discount]))',
        starterCode: 'Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice] * (1 - Sales[Discount]))',
        correctAnswer: 'Revenue = SUMX(Sales, Sales[Qty] * Sales[UnitPrice] * (1 - Sales[Discount]))',
        xp: 250,
      },
      {
        id: 308,
        subjectId: 'powerbi',
        level: 8,
        title: 'Power BI Boss: Executive KPI Dashboard',
        difficulty: 'Advanced',
        tagColor: '#ec4899',
        icon: '👑',
        desc: 'Deploy an automated C-Suite dashboard with bookmarks and drill-throughs',
        challenge: 'Assemble an interactive executive dashboard with dynamic switch measures using SELECTEDVALUE.',
        hint: 'SwitchMetric = SWITCH(SELECTEDVALUE(MetricChoice[Choice]), "Sales", [Total Sales], "Profit", [Total Profit], [Total Sales])',
        starterCode: 'SwitchMetric = SWITCH(SELECTEDVALUE(MetricChoice[Choice]), "Sales", [Total Sales], "Profit", [Total Profit], [Total Sales])',
        correctAnswer: 'SwitchMetric = SWITCH(SELECTEDVALUE(MetricChoice[Choice]), "Sales", [Total Sales], "Profit", [Total Profit], [Total Sales])',
        xp: 300,
      },
    ],
    stats: [
      {
        id: 401,
        subjectId: 'stats',
        level: 1,
        title: 'Central Tendency: Mean, Median & Mode',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '🎯',
        desc: 'Discover which measure resists extreme income outliers',
        challenge: 'For dataset [20, 22, 25, 28, 30, 200], which metric is the most robust measure of central tendency?',
        hint: 'Median resists extreme right-skewed outliers.',
        starterCode: 'Median',
        correctAnswer: 'Median',
        xp: 100,
      },
      {
        id: 402,
        subjectId: 'stats',
        level: 2,
        title: 'Dispersion: Variance & Std Dev (σ)',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '📊',
        desc: 'Measure data spread and volatility in stock returns',
        challenge: 'If sample variance is 64, what is the standard deviation (σ)?',
        hint: 'Standard Deviation = sqrt(Variance) = sqrt(64) = 8',
        starterCode: '8',
        correctAnswer: '8',
        xp: 120,
      },
      {
        id: 403,
        subjectId: 'stats',
        level: 3,
        title: 'Normal Bell Curve & 68-95-99.7 Rule',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🔔',
        desc: 'Harness the empirical rule to predict test percentiles',
        challenge: 'What percentage of normal distribution data lies within 2 standard deviations of the mean?',
        hint: '68% (1σ), 95% (2σ), 99.7% (3σ).',
        starterCode: '95%',
        correctAnswer: '95%',
        xp: 150,
      },
      {
        id: 404,
        subjectId: 'stats',
        level: 4,
        title: 'Z-Score Normalizer',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '📏',
        desc: 'Standardize scores across different exams and scales',
        challenge: 'Calculate Z-score for value X = 85 where mean μ = 70 and standard deviation σ = 10.',
        hint: 'Z = (X - μ) / σ = (85 - 70) / 10 = 1.5',
        starterCode: '1.5',
        correctAnswer: '1.5',
        xp: 160,
      },
      {
        id: 405,
        subjectId: 'stats',
        level: 5,
        title: 'Probability Roulette & Bayes Theorem',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🎲',
        desc: 'Update spam detection probabilities with prior beliefs',
        challenge: 'Calculate posterior probability P(A|B) = P(B|A)*P(A) / P(B).',
        hint: 'Use Bayes Theorem formula to invert conditional probabilities.',
        starterCode: 'P(A|B) = (P(B|A) * P(A)) / P(B)',
        correctAnswer: 'P(A|B) = (P(B|A) * P(A)) / P(B)',
        xp: 180,
      },
      {
        id: 406,
        subjectId: 'stats',
        level: 6,
        title: 'Hypothesis Arena: Null vs Alternative',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '⚖️',
        desc: 'Evaluate clinical trials and feature rollout significance',
        challenge: 'If p-value is 0.012 and significance level α is 0.05, do you reject or fail to reject the null hypothesis?',
        hint: 'Since p-value (0.012) < α (0.05), we reject the null hypothesis.',
        starterCode: 'Reject Null Hypothesis',
        correctAnswer: 'Reject Null Hypothesis',
        xp: 220,
      },
      {
        id: 407,
        subjectId: 'stats',
        level: 7,
        title: 'Confidence Intervals & CLT',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '🎯',
        desc: 'Compute 95% CI margins of error for population parameters',
        challenge: 'Write the 95% Confidence Interval formula for a sample mean x̄: x̄ ± 1.96 * (s / sqrt(n)).',
        hint: 'Margin of error = 1.96 * (s / sqrt(n))',
        starterCode: 'x̄ ± 1.96 * (s / sqrt(n))',
        correctAnswer: 'x̄ ± 1.96 * (s / sqrt(n))',
        xp: 250,
      },
      {
        id: 408,
        subjectId: 'stats',
        level: 8,
        title: 'Stats Boss: A/B Testing Simulator',
        difficulty: 'Advanced',
        tagColor: '#ec4899',
        icon: '👑',
        desc: 'Run a 2-sample t-test on website conversion uplift',
        challenge: 'Decide if a +4.2% conversion uplift on variant B across 10,000 visitors is statistically significant at p < 0.001.',
        hint: 'With sample size 10k each, large t-stat confirms statistically significant uplift.',
        starterCode: 'Statistically Significant (Adopt Variant B)',
        correctAnswer: 'Statistically Significant (Adopt Variant B)',
        xp: 300,
      },
    ],
    genai: [
      {
        id: 501,
        subjectId: 'genai',
        level: 1,
        title: 'Prompt Doctor: Few-Shot Mastery',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '💬',
        desc: 'Craft clear role instructions, constraints, and 3 few-shot examples',
        challenge: 'Structure a system prompt for JSON output: "You are an expert data assistant. Output ONLY valid JSON matching this schema: {...}"',
        hint: 'Include Role, Task, Format constraints and Examples.',
        starterCode: 'You are an expert data assistant. Output ONLY valid JSON matching schema: {"insights": []}',
        correctAnswer: 'You are an expert data assistant. Output ONLY valid JSON matching schema: {"insights": []}',
        xp: 100,
      },
      {
        id: 502,
        subjectId: 'genai',
        level: 2,
        title: 'Token & Temperature Sandbox',
        difficulty: 'Beginner',
        tagColor: '#10b981',
        icon: '🌡️',
        desc: 'Balance deterministic factual code vs creative brainstorming',
        challenge: 'What temperature setting is optimal for deterministic SQL query generation (0.0 or 1.2)?',
        hint: 'Temperature 0.0 ensures lowest randomness and deterministic responses.',
        starterCode: '0.0',
        correctAnswer: '0.0',
        xp: 120,
      },
      {
        id: 503,
        subjectId: 'genai',
        level: 3,
        title: 'Vector Embeddings & Cosine Distance',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🧭',
        desc: 'Map text phrases to 1536-dimensional space for semantic search',
        challenge: 'Calculate semantic similarity score range for normalized cosine similarity vectors.',
        hint: 'Cosine similarity ranges from -1 (opposite) to +1 (identical match).',
        starterCode: '-1 to 1',
        correctAnswer: '-1 to 1',
        xp: 150,
      },
      {
        id: 504,
        subjectId: 'genai',
        level: 4,
        title: 'RAG Pipeline Builder (Chunk & Retrieve)',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '📚',
        desc: 'Index company PDF manuals into chunks and retrieve top-K context',
        challenge: 'Arrange the 4 core steps of RAG: Document Parsing -> Chunking -> Vector Embedding -> Context Injection.',
        hint: 'Parse -> Chunk -> Embed -> Retrieve & Inject.',
        starterCode: 'Parse -> Chunk -> Embed -> Retrieve & Inject',
        correctAnswer: 'Parse -> Chunk -> Embed -> Retrieve & Inject',
        xp: 160,
      },
      {
        id: 505,
        subjectId: 'genai',
        level: 5,
        title: 'Function Calling & Tool Use Arena',
        difficulty: 'Intermediate',
        tagColor: '#f59e0b',
        icon: '🛠️',
        desc: 'Equip LLMs with SQL executors and real-time stock price API calls',
        challenge: 'Define an OpenAI tools schema for function "fetch_stock_price(ticker: string)".',
        hint: '{"type": "function", "function": {"name": "fetch_stock_price", "parameters": {"type": "object", "properties": {"ticker": {"type": "string"}}}}}',
        starterCode: '{"name": "fetch_stock_price", "parameters": {"type": "object", "properties": {"ticker": {"type": "string"}}}}',
        correctAnswer: '{"name": "fetch_stock_price", "parameters": {"type": "object", "properties": {"ticker": {"type": "string"}}}}',
        xp: 180,
      },
      {
        id: 506,
        subjectId: 'genai',
        level: 6,
        title: 'Agentic Loops: ReAct (Reason + Act)',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '🤖',
        desc: 'Deploy self-correcting autonomous multi-step reasoning agents',
        challenge: 'What are the 3 repeating stages in a ReAct agent cycle?',
        hint: 'Thought -> Action -> Observation.',
        starterCode: 'Thought -> Action -> Observation',
        correctAnswer: 'Thought -> Action -> Observation',
        xp: 220,
      },
      {
        id: 507,
        subjectId: 'genai',
        level: 7,
        title: 'Multimodal Vision & Data Extraction',
        difficulty: 'Advanced',
        tagColor: '#ef4444',
        icon: '👁️',
        desc: 'Extract structured revenue metrics from chart images and screenshots',
        challenge: 'Provide the multimodal prompt to convert bar chart image to structured markdown table.',
        hint: 'Examine the attached chart image and convert all bar series and labels into a clean markdown table.',
        starterCode: 'Convert chart image data points into a clean markdown table with columns [Category, Value].',
        correctAnswer: 'Convert chart image data points into a clean markdown table with columns [Category, Value].',
        xp: 250,
      },
      {
        id: 508,
        subjectId: 'genai',
        level: 8,
        title: 'GenAI Boss: Autonomous Research Agent',
        difficulty: 'Advanced',
        tagColor: '#ec4899',
        icon: '👑',
        desc: 'Build a multi-agent system that searches web, synthesizes datasets, and generates reports',
        challenge: 'Configure supervisor agent orchestrating Researcher, Data Analyst, and Report Writer sub-agents.',
        hint: 'Supervisor routing with state graph and final synthesis review.',
        starterCode: 'Supervisor Agent: Route query -> Researcher -> Analyst -> Writer -> Final Review',
        correctAnswer: 'Supervisor Agent: Route query -> Researcher -> Analyst -> Writer -> Final Review',
        xp: 300,
      },
    ],
  };

  // Helper to open interactive modal challenge
  const handleOpenGameChallenge = (game: any) => {
    playClick();
    setActiveModalGame(game);
    setModalUserCode(game.starterCode || '');
    setModalFeedback('idle');
    setModalShowHint(false);
  };

  const handleValidateGameChallenge = () => {
    playClick();
    if (activeModalGame) {
      setModalFeedback('correct');
    }
  };

  const currentSubjectObj = subjectsData.find(s => s.id === selectedSubject);

  // 15 Full Basics Levels (1:1 with media_1791884531034_0ca4e6a0.jpg)
  const basicsGames = [
    {
      id: 1,
      title: 'START YOUR PYTHON JOURNEY',
      subtitle: 'Introduction & Setup',
      level: 1,
      difficulty: 'Beginner',
      tagColor: '#00e5ff',
      themeColor: '#00e5ff',
      glowColor: 'rgba(0, 229, 255, 0.75)',
      btnGradient: 'linear-gradient(135deg, #0091ea 0%, #00e5ff 100%)',
      image: '/images/arena/python/cards/level_1.jpg',
      iconImage: '/images/arena/python/cards/icon_1.jpg',
      icon: '🚀',
      category: 'beginner',
    },
    {
      id: 2,
      title: 'VARIABLES & DATA TYPES',
      subtitle: 'Values, Types & Cast',
      level: 2,
      difficulty: 'Beginner',
      tagColor: '#00e676',
      themeColor: '#00e676',
      glowColor: 'rgba(0, 230, 118, 0.75)',
      btnGradient: 'linear-gradient(135deg, #00c853 0%, #00e676 100%)',
      image: '/images/arena/python/cards/level_2_variables.jpg',
      iconImage: '/images/arena/python/cards/icon_2.jpg',
      icon: '💎',
      category: 'beginner',
    },
    {
      id: 3,
      title: 'INPUT, OUTPUT & USER INTERACTION',
      subtitle: 'print(), input() & Formatting',
      level: 3,
      difficulty: 'Beginner',
      tagColor: '#d500f9',
      themeColor: '#d500f9',
      glowColor: 'rgba(213, 0, 249, 0.75)',
      btnGradient: 'linear-gradient(135deg, #aa00ff 0%, #d500f9 100%)',
      image: '/images/arena/python/cards/level_3_input_output.jpg',
      iconImage: '/images/arena/python/cards/icon_3.jpg',
      icon: '💻',
      category: 'beginner',
    },
    {
      id: 4,
      title: 'OPERATORS & LOGIC',
      subtitle: 'Arithmetic, Comparison & Logic',
      level: 4,
      difficulty: 'Beginner',
      tagColor: '#ff9100',
      themeColor: '#ff9100',
      glowColor: 'rgba(255, 145, 0, 0.75)',
      btnGradient: 'linear-gradient(135deg, #ff6d00 0%, #ff9100 100%)',
      image: '/images/arena/python/cards/level_4_operators.jpg',
      iconImage: '/images/arena/python/cards/icon_4.jpg',
      icon: '🧮',
      category: 'beginner',
    },
    {
      id: 5,
      title: 'TYPE CASTING & CONVERSION',
      subtitle: 'int(), float(), str(), bool() & Types',
      level: 5,
      difficulty: 'Beginner',
      tagColor: '#ff1744',
      themeColor: '#ff1744',
      glowColor: 'rgba(255, 23, 68, 0.75)',
      btnGradient: 'linear-gradient(135deg, #d50000 0%, #ff1744 100%)',
      image: '/images/arena/python/cards/level_5_type_casting.jpg',
      iconImage: '/images/arena/python/cards/icon_5.jpg',
      icon: '🔀',
      category: 'beginner',
    },
    {
      id: 6,
      title: 'CONDITIONAL STATEMENTS',
      subtitle: 'if, elif, else & Decisions',
      level: 6,
      difficulty: 'Beginner',
      tagColor: '#00b0ff',
      themeColor: '#00b0ff',
      glowColor: 'rgba(0, 176, 255, 0.75)',
      btnGradient: 'linear-gradient(135deg, #0284c7 0%, #00b0ff 100%)',
      image: '/images/arena/python/cards/level_6_conditionals.jpg',
      iconImage: '/images/arena/python/cards/icon_6.jpg',
      icon: '🔄',
      category: 'beginner',
    },
    {
      id: 7,
      title: 'LOOPS & ITERATION',
      subtitle: 'for, while & Iterables',
      level: 7,
      difficulty: 'Beginner',
      tagColor: '#f50057',
      themeColor: '#f50057',
      glowColor: 'rgba(245, 0, 87, 0.75)',
      btnGradient: 'linear-gradient(135deg, #c2185b 0%, #f50057 100%)',
      image: '/images/arena/python/cards/level_7_loops.jpg',
      iconImage: '/images/arena/python/cards/icon_7.jpg',
      icon: '🔤',
      category: 'beginner',
    },
    {
      id: 8,
      title: 'STRINGS & TEXT PROCESSING',
      subtitle: 'Slicing, Methods & f-Strings',
      level: 8,
      difficulty: 'Intermediate',
      tagColor: '#ffab00',
      themeColor: '#ffab00',
      glowColor: 'rgba(255, 171, 0, 0.75)',
      btnGradient: 'linear-gradient(135deg, #e65100 0%, #ffab00 100%)',
      image: '/images/arena/python/cards/level_8_strings.jpg',
      iconImage: '/images/arena/python/cards/icon_8.jpg',
      icon: '📋',
      category: 'intermediate',
    },
    {
      id: 9,
      title: 'FUNCTIONS & REUSABLE CODE',
      subtitle: 'def, return, lambda & Scope',
      level: 9,
      difficulty: 'Intermediate',
      tagColor: '#3d5afe',
      themeColor: '#3d5afe',
      glowColor: 'rgba(61, 90, 254, 0.75)',
      btnGradient: 'linear-gradient(135deg, #304ffe 0%, #3d5afe 100%)',
      image: '/images/arena/python/cards/level_9_functions.jpg',
      iconImage: '/images/arena/python/cards/icon_9.jpg',
      icon: 'ƒ()',
      category: 'intermediate',
    },
    {
      id: 10,
      title: 'EXCEPTION HANDLING & ERRORS',
      subtitle: 'try, except, raise & Debug',
      level: 10,
      difficulty: 'Intermediate',
      tagColor: '#00e676',
      themeColor: '#00e676',
      glowColor: 'rgba(0, 230, 118, 0.75)',
      btnGradient: 'linear-gradient(135deg, #00b248 0%, #00e676 100%)',
      image: '/images/arena/python/cards/level_10_exceptions_v2.jpg',
      iconImage: '/images/arena/python/cards/icon_10.jpg',
      icon: '🛡️',
      category: 'intermediate',
    },
    {
      id: 11,
      title: 'MODULES & PACKAGES',
      subtitle: 'import, pip & Environment',
      level: 11,
      difficulty: 'Intermediate',
      tagColor: '#ff1744',
      themeColor: '#ff1744',
      glowColor: 'rgba(255, 23, 68, 0.75)',
      btnGradient: 'linear-gradient(135deg, #b71c1c 0%, #ff1744 100%)',
      image: '/images/arena/python/cards/level_11_modules.jpg',
      iconImage: '/images/arena/python/cards/icon_11.jpg',
      icon: '📦',
      category: 'intermediate',
    },
    {
      id: 12,
      title: 'OBJECT-ORIENTED PROGRAMMING (OOP)',
      subtitle: 'Classes, Objects & Constructors',
      level: 12,
      difficulty: 'Intermediate',
      tagColor: '#2979ff',
      themeColor: '#2979ff',
      glowColor: 'rgba(41, 121, 255, 0.75)',
      btnGradient: 'linear-gradient(135deg, #1565c0 0%, #2979ff 100%)',
      image: '/images/arena/python/cards/level_12_oop.jpg',
      iconImage: '/images/arena/python/cards/icon_12.jpg',
      icon: '🧩',
      category: 'intermediate',
    },
    {
      id: 13,
      title: 'FILE HANDLING IN PYTHON',
      subtitle: 'Read, Write, Append & Paths',
      level: 13,
      difficulty: 'Intermediate',
      tagColor: '#d500f9',
      themeColor: '#d500f9',
      glowColor: 'rgba(213, 0, 249, 0.75)',
      btnGradient: 'linear-gradient(135deg, #8e24aa 0%, #d500f9 100%)',
      image: '/images/arena/python/cards/level_13_file_handling.jpg',
      iconImage: '/images/arena/python/cards/icon_13.jpg',
      icon: '📄',
      category: 'intermediate',
    },
    {
      id: 14,
      title: 'DATA STRUCTURES IN PYTHON',
      subtitle: 'Lists, Tuples, Dictionaries & Sets',
      level: 14,
      difficulty: 'Intermediate',
      tagColor: '#ff9100',
      themeColor: '#ff9100',
      glowColor: 'rgba(255, 145, 0, 0.75)',
      btnGradient: 'linear-gradient(135deg, #ef6c00 0%, #ff9100 100%)',
      image: '/images/arena/python/cards/level_14_data_structures.jpg',
      iconImage: '/images/arena/python/cards/icon_14.jpg',
      icon: '🧊',
      category: 'intermediate',
    },
    {
      id: 15,
      title: 'NUMPY IN PYTHON',
      subtitle: 'Arrays, Slicing & Operations',
      level: 15,
      difficulty: 'Intermediate',
      tagColor: '#f50057',
      themeColor: '#f50057',
      glowColor: 'rgba(245, 0, 87, 0.75)',
      btnGradient: 'linear-gradient(135deg, #c51162 0%, #f50057 100%)',
      image: '/images/arena/python/cards/level_15_numpy.jpg',
      iconImage: '/images/arena/python/cards/icon_15.jpg',
      icon: '🏆',
      category: 'intermediate',
    },
  ];

  // Advanced 14 Levels (Level 16 to Level 29)
  const advancedGames = [
    {
      id: 16,
      title: 'Data Analysis with Pandas',
      desc: 'Master Series, DataFrames, indexing, filtering, and summary statistics.',
      difficulty: 'Advanced',
      tagColor: '#0ea5e9',
      image: '/images/arena/advanced/level_16_pandas.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    },
    {
      id: 17,
      title: 'Data Cleaning with Pandas',
      desc: 'Handling missing values, duplicate records, outlier detection, and string cleaning.',
      difficulty: 'Advanced',
      tagColor: '#0ea5e9',
      image: '/images/arena/advanced/level_17_cleaning.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    },
    {
      id: 18,
      title: 'Data Transformation with Pandas',
      desc: 'GroupBy, pivots, melt, merging, concatenating, and applying functions.',
      difficulty: 'Advanced',
      tagColor: '#0ea5e9',
      image: '/images/arena/advanced/level_18_transformation.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    },
    {
      id: 19,
      title: 'Exploratory Data Analysis',
      desc: 'Formulate hypotheses, find trends, distributions, correlations, and insights.',
      difficulty: 'Advanced',
      tagColor: '#ec4899',
      image: '/images/arena/advanced/level_19_eda.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',
    },
    {
      id: 20,
      title: 'Data Visualization with Python',
      desc: 'Stunning charts & visual storytelling with Matplotlib, Seaborn, and Plotly.',
      difficulty: 'Advanced',
      tagColor: '#ec4899',
      image: '/images/arena/advanced/level_20_viz.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #d946ef 0%, #ec4899 100%)',
    },
    {
      id: 21,
      title: 'SQL & Database Connectivity',
      desc: 'Connect SQLite, PostgreSQL, run SQL queries in Python, and load into DataFrames.',
      difficulty: 'Advanced',
      tagColor: '#8b5cf6',
      image: '/images/arena/advanced/level_21_sql.jpg',
      category: 'core',
      btnBg: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    },
    {
      id: 22,
      title: 'APIs and Web Data',
      desc: 'REST APIs, requests, JSON handling, authentication tokens, and web scraping.',
      difficulty: 'Advanced',
      tagColor: '#8b5cf6',
      image: '/images/arena/advanced/level_22_apis.jpg',
      category: 'core',
      btnBg: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
    },
    {
      id: 23,
      title: 'Automation with Python',
      desc: 'Automate Excel files, PDFs, emails, scheduled batch jobs, and repetitive tasks.',
      difficulty: 'Advanced',
      tagColor: '#f59e0b',
      image: '/images/arena/advanced/01_modules_packages.jpg',
      category: 'core',
      btnBg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    },
    {
      id: 24,
      title: 'Statistics & Business Analytics',
      desc: 'Hypothesis testing, probability, confidence intervals, p-values, and KPIs.',
      difficulty: 'Advanced',
      tagColor: '#ec4899',
      image: '/images/arena/advanced/level_24_stats.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #db2777 0%, #9333ea 100%)',
    },
    {
      id: 25,
      title: 'Writing Production-Ready Code',
      desc: 'PEP 8 guidelines, typing hints, clean modular architecture, and unit testing.',
      difficulty: 'Advanced',
      tagColor: '#0ea5e9',
      image: '/images/arena/advanced/04_oop.jpg',
      category: 'core',
      btnBg: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)',
    },
    {
      id: 26,
      title: 'Python with GenAI',
      desc: 'OpenAI/Anthropic API, LangChain, RAG pipelines, prompts, and intelligent AI agents.',
      difficulty: 'Advanced',
      tagColor: '#06b6d4',
      image: '/images/arena/subjects/game_card_genai.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    },
    {
      id: 27,
      title: 'Introduction to Machine Learning',
      desc: 'Scikit-Learn, regression, classification, clustering, and model evaluation metrics.',
      difficulty: 'Advanced',
      tagColor: '#a855f7',
      image: '/images/arena/advanced/05_pandas_numpy.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #9333ea 0%, #c084fc 100%)',
    },
    {
      id: 28,
      title: 'Real-World Python Projects',
      desc: 'End-to-end industry portfolio projects with datasets from Finance, Healthcare & Tech.',
      difficulty: 'Advanced',
      tagColor: '#10b981',
      image: '/images/arena/advanced/level_28_projects.jpg',
      category: 'data',
      btnBg: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    },
    {
      id: 29,
      title: 'Python Interview & Career Prep',
      desc: 'Live coding challenges, algorithmic puzzles, mock interview questions & portfolio polish.',
      difficulty: 'Advanced',
      tagColor: '#f43f5e',
      image: '/images/arena/subjects/game_card_python.jpg',
      category: 'core',
      btnBg: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)',
    },
  ];

  // Filtering
  const filteredBasics = basicsGames.filter((g) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'beginner') return g.difficulty.toLowerCase() === 'beginner';
    if (activeFilter === 'intermediate') return g.difficulty.toLowerCase() === 'intermediate';
    return true;
  });

  const filteredAdvanced = advancedGames.filter((g) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'core') return g.category === 'core';
    if (activeFilter === 'data') return g.category === 'data';
    return true;
  });

  // Preview cards for bottom bar in Basics
  const lockedPreviewTopics = [
    { title: 'Pandas Data Analysis', icon: '📊' },
    { title: 'Data Cleaning & Prep', icon: '🧹' },
    { title: 'Exploratory Data Analysis', icon: '🔍' },
    { title: 'Data Visualization', icon: '📈' },
    { title: 'SQL & Databases', icon: '🗄️' },
    { title: 'APIs & Web Automation', icon: '⚡' },
    { title: 'Python with GenAI', icon: '🤖' },
    { title: 'Machine Learning & Projects', icon: '🚀' },
  ];

  // Learning flow steps in Advanced
  const learningFlowSteps = [
    { num: 1, title: 'Watch Lesson', sub: 'Short & Easy Videos', icon: <Video className="w-5 h-5 text-white" />, bg: '#8b5cf6' },
    { num: 2, title: 'DSA Coding Practice', sub: 'Solve Fun Challenges', icon: <Code2 className="w-5 h-5 text-white" />, bg: '#a855f7' },
    { num: 3, title: 'Write Code', sub: 'In-Built Code Editor', icon: <Code2 className="w-5 h-5 text-white" />, bg: '#3b82f6' },
    { num: 4, title: 'Take Quiz', sub: 'Test Your Knowledge', icon: <FileCode2 className="w-5 h-5 text-white" />, bg: '#ec4899' },
    { num: 5, title: 'Earn Rewards', sub: 'XP, Coins & Badges', icon: <Trophy className="w-5 h-5 text-white" />, bg: '#f59e0b' },
    { num: 6, title: 'Move to Next Level', sub: 'Keep Learning', icon: <TrendingUp className="w-5 h-5 text-white" />, bg: '#10b981' },
  ];

  return (
    <>
      <div>
        <div className="py-arena-page-root">
      


      {/* =========================================================================
          MAIN ARENA LAYOUT (Center Content + Right Analytics Column)
          ========================================================================= */}
      <div className="py-arena-content-layout">
        
        {/* ─── CENTER FEED ─── */}
        <main className="py-arena-center-feed">

          {selectedSubject === 'all' ? (
            <>
              {/* 1. HERO BANNER: 6 LPA to 15 LPA JOB by Playing (Ultra-Smooth Animated Video Banner) */}
              <div className="py-arena-cinema-banner-wrapper">
                <img
                  className="py-arena-cinema-banner-backdrop"
                  src="/images/arena/coding_practice_hero_banner.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <video
                  className="py-arena-cinema-banner-video"
                  src="/videos/coding_practice_banner.mp4"
                  poster="/images/arena/coding_practice_hero_banner.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

          {/* =========================================================================
              2. CHOOSE A SUBJECT TO PLAY (1:1 with user reference media_1791866254529_4c6b953d.png)
              ========================================================================= */}
          <section className="py-choose-subject-container">
            {/* Subject Section Header: Line 1 */}
            <div className="py-cs-header">
              <div className="py-cs-header-left">
                <h2 className="py-cs-main-heading">
                  <Code2 className="w-4 h-4 text-cyan-500 inline mr-1.5" />
                  Choose a Subject for DSA Coding Practice
                  <span className="py-cs-sub-heading-inline"> — Select a topic for hands-on coding practice &amp; earn points</span>
                </h2>
              </div>
              <div className="py-cs-badge-stat">
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>6 Subjects • 65+ Practice Challenges</span>
              </div>
            </div>

            {/* Filter Pills Row: Line 2 */}
            <div className="py-cs-filter-pills-row">
              <button
                className={`py-cs-filter-pill ${selectedSubject === 'all' ? 'active' : ''}`}
                onClick={() => { playClick(); setSelectedSubject('all'); }}
              >
                💻 All Practice Modules
              </button>
              {subjectsData.map((subj) => (
                <button
                  key={subj.id}
                  className={`py-cs-filter-pill ${selectedSubject === subj.id ? 'active' : ''}`}
                  onClick={() => {
                    playClick();
                    setSelectedSubject(subj.id as SubjectId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span>{subj.icon}</span> {subj.name} Practice
                </button>
              ))}
            </div>

            {/* 6 Subject Cards Grid (matching reference image) */}
            <div className="py-subject-cards-grid">
              {subjectsData.map((subj) => {
                const isSelected = selectedSubject === subj.id;
                return (
                  <div
                    key={subj.id}
                    className={`py-subject-card ${isSelected ? 'is-selected-card' : ''}`}
                    onClick={() => {
                      playClick();
                      setSelectedSubject(subj.id as SubjectId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onMouseEnter={playHover}
                  >
                    {/* Top 3D Generated Artwork Image */}
                    <div className="py-sc-image-wrapper">
                      <img src={subj.image} alt={subj.name} className="py-sc-artwork-img" />
                      <div className="py-sc-overlay-glow" />
                      <span className="py-sc-game-count-badge">
                        <Code2 className="w-3 h-3 inline mr-1" />
                        {subj.gamesCount}
                      </span>
                      <span className="py-sc-topic-tag" style={{ color: subj.tagColor }}>
                        {subj.badge}
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div className="py-sc-body">
                      <div className="py-sc-title-row">
                        <span className="py-sc-icon-emoji">{subj.icon}</span>
                        <h3 className="py-sc-title">{subj.name} Practice</h3>
                      </div>

                      {/* Progress / Status Strip */}
                      <div className="py-sc-progress-wrap">
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                          <span className="text-slate-700 font-extrabold">{subj.progressText}</span>
                          <span className="text-cyan-600 font-black">{subj.progressPct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${subj.progressPct}%`,
                              background: subj.gradient,
                            }}
                          />
                        </div>
                      </div>

                      {/* Action Button: Start Playing */}
                      <button
                        className="py-sc-play-btn"
                        style={{ background: subj.gradient }}
                        onClick={(e) => {
                          e.stopPropagation();
                          playClick();
                          setSelectedSubject(subj.id as SubjectId);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <span>Start Playing</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </>
      ) : selectedSubject === 'python' ? (
        <div id="python-track-section" className="py-python-track-wrapper">
              {/* Python Video Banner: Khel Khel Mein Basis to Advanced Python Sikho Badi Asani Se (Moved to very top) */}
              <div className="py-python-cinema-banner-wrapper">
                <img
                  className="py-python-cinema-banner-backdrop"
                  src="/images/arena/coding_practice_hero_banner.jpg"
                  alt=""
                  aria-hidden="true"
                />
                <video
                  className="py-python-cinema-banner-video"
                  src="/videos/coding_practice_banner.mp4"
                  poster="/images/arena/coding_practice_hero_banner.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* SLEEK & SLIM TRACK SELECTOR PILL DOCK */}
              <div className="py-sleek-track-dock">
                <div className="py-track-pills-cluster">
                  <button
                    className="py-slim-tab py-slim-all-subjects-btn"
                    onClick={() => {
                      playClick();
                      setSelectedSubject('all');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    title="Return to All Subjects"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                    <span className="py-slim-tab-title">All Subjects</span>
                  </button>

                  <button
                    className={`py-slim-tab ${activeTrack === 'basics' ? 'active-basics' : ''}`}
                    onClick={() => {
                      playClick();
                      setActiveTrack('basics');
                      setActiveFilter('all');
                    }}
                  >
                    <span className="py-slim-tab-dot"></span>
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="py-slim-tab-title">Basics (Levels 1–15)</span>
                    <span className="py-slim-tab-badge">15 Levels</span>
                  </button>

                  <button
                    className={`py-slim-tab ${activeTrack === 'advanced' ? 'active-adv' : ''}`}
                    onClick={() => {
                      playClick();
                      setActiveTrack('advanced');
                      setActiveFilter('all');
                    }}
                  >
                    <span className="py-slim-tab-dot"></span>
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="py-slim-tab-title">Advanced &amp; Data (Levels 16–29)</span>
                    <span className="py-slim-tab-badge adv-badge">14 Levels</span>
                  </button>
                </div>

                {/* Filter Pills Inline in the Dock */}
                <div className="py-slim-filter-group">
                  <span className="py-filter-label">Filter:</span>
                  {activeTrack === 'basics' ? (
                    <>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('all'); }}
                      >
                        All (15)
                      </button>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'beginner' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('beginner'); }}
                      >
                        <span className="py-dot bg-emerald-500"></span> Beginner
                      </button>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'intermediate' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('intermediate'); }}
                      >
                        <span className="py-dot bg-amber-500"></span> Intermediate
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('all'); }}
                      >
                        All (14)
                      </button>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'core' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('core'); }}
                      >
                        <span className="py-dot bg-emerald-500"></span> Core &amp; Automation
                      </button>
                      <button
                        className={`py-slim-filter-chip ${activeFilter === 'data' ? 'active' : ''}`}
                        onClick={() => { playClick(); setActiveFilter('data'); }}
                      >
                        <span className="py-dot bg-purple-500"></span> Data, ML &amp; AI
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* 4. GAMES GRID (15 Basics or 14 Advanced) */}
              {activeTrack === 'basics' ? (
                /* 15 BASICS CARDS (3 rows x 5 cards) — Floating Lightning Animated Arena (media_1791884531034_0ca4e6a0.jpg) */
                <div className="py-floating-neon-arena">
                  {/* Floating ambient lighting background elements */}
                  <div className="py-ambient-light light-cyan" />
                  <div className="py-ambient-light light-magenta" />
                  <div className="py-ambient-light light-emerald" />
                  <div className="py-ambient-light light-gold" />

                  <div className="py-games-grid py-basics-neon-grid">
                    {filteredBasics.map((game) => (
                      <div
                        key={game.id}
                        className="py-neon-game-card"
                        style={{
                          '--card-theme': game.themeColor,
                          '--card-glow': game.glowColor,
                          '--card-btn-grad': game.btnGradient,
                        } as React.CSSProperties}
                        onMouseEnter={playHover}
                      >
                        {/* Shimmering Electric Neon Border & Inner Glow */}
                        <div className="py-card-lightning-border" />
                        <div className="py-card-inner-glow" />


                        {/* Center Glowing 3D Artwork */}
                        <div className="py-neon-card-artwork-box">
                          <img
                            src={game.image}
                            alt={game.title}
                            className="py-neon-card-img"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="py-neon-art-glow" />
                        </div>


                        {/* Glowing Play Level Button */}
                        <button
                          className="py-neon-play-btn"
                          style={{
                            background: game.btnGradient,
                            boxShadow: `0 4px 18px ${game.glowColor}, 0 0 10px ${game.themeColor}`,
                          }}
                          onClick={() => {
                            playClick();
                            onPlayPython(game.id);
                          }}
                        >
                          <Code2 className="w-3.5 h-3.5 mr-1" />
                          <span>PLAY</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* 14 ADVANCED CARDS — Floating White Lightning Animated Arena */
                <div className="py-floating-white-arena">
                  {/* Floating ambient lighting background elements (White Floating Theme) */}
                  <div className="py-ambient-light light-pure-white" />
                  <div className="py-ambient-light light-ice-white" />
                  <div className="py-ambient-light light-silver-white" />
                  <div className="py-ambient-light light-diamond-white" />

                  <div className="py-games-grid py-basics-neon-grid">
                    {filteredAdvanced.map((game) => (
                      <div
                        key={game.id}
                        className="py-neon-game-card py-white-neon-card"
                        onMouseEnter={playHover}
                      >
                        {/* Shimmering Electric White Neon Border & Inner Glow */}
                        <div className="py-card-lightning-border py-white-lightning-border" />
                        <div className="py-card-inner-glow py-white-inner-glow" />

                        {/* Center Glowing 3D Artwork */}
                        <div className="py-neon-card-artwork-box">
                          <img
                            src={game.image}
                            alt={game.title}
                            className="py-neon-card-img"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="py-neon-art-glow" style={{ background: '#ffffff', filter: 'blur(28px)', opacity: 0.35 }} />
                        </div>

                        {/* Glowing Play Level Button */}
                        <button
                          className="py-white-play-btn"
                          onClick={() => {
                            playClick();
                            onPlayPython(game.id);
                          }}
                        >
                          <Code2 className="w-3.5 h-3.5 mr-1" />
                          <span>PLAY</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. BOTTOM SECTION (Basics Preview vs Advanced Flow) — Slim & Sleek Design */}
              {activeTrack === 'basics' ? (
                /* Python Advanced Game (Preview) Banner — Slim Futuristic Strip */
                <div className="py-slim-preview-banner">
                  <div className="py-spb-brand">
                    <div className="py-spb-badge">
                      <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                      <span>NEXT STAGE</span>
                    </div>
                    <div className="py-spb-text">
                      <strong className="py-spb-title">Python Advanced Path</strong>
                      <span className="py-spb-sub">14 High-Impact Levels (Levels 16–29)</span>
                    </div>
                  </div>

                  {/* 8 Compact Topic Chips */}
                  <div className="py-spb-chips-strip">
                    {lockedPreviewTopics.map((topic, i) => (
                      <span key={i} className="py-spb-chip">
                        <span className="py-spb-chip-icon">{topic.icon}</span>
                        <span className="py-spb-chip-title">{topic.title}</span>
                        <Lock className="w-2.5 h-2.5 text-slate-400 py-spb-lock" />
                      </span>
                    ))}
                  </div>

                  {/* Unlock Action Button */}
                  <button 
                    className="py-spb-cta-btn"
                    onClick={() => {
                      playClick();
                      setActiveTrack('advanced');
                    }}
                  >
                    <Crown className="w-3.5 h-3.5 text-amber-300" />
                    <span>Unlock Track</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Learning Flow for Each Game — Slim Streamlined Strip */
                <div className="py-slim-flow-banner">
                  <div className="py-sfb-label">
                    <span className="py-sfb-tag">4-STEP FLOW</span>
                    <strong className="py-sfb-title">DSA Coding Practice Path</strong>
                  </div>

                  <div className="py-sfb-steps">
                    {learningFlowSteps.map((step, idx) => (
                      <div key={step.num} className="py-sfb-step-item">
                        <div className="py-sfb-step-num">{step.num}</div>
                        <div className="py-sfb-step-icon" style={{ backgroundColor: step.bg }}>
                          {step.icon}
                        </div>
                        <div className="py-sfb-step-info">
                          <strong className="py-sfb-step-title">{step.title}</strong>
                          <span className="py-sfb-step-sub">{step.sub}</span>
                        </div>
                        {idx < learningFlowSteps.length - 1 && (
                          <div className="py-sfb-step-arrow">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* NON-PYTHON SUBJECT TRACK (SQL, Excel, Power BI, Statistics, Gen AI) */
            <div id="subject-track-section" className="py-other-subject-track-wrapper">
              {currentSubjectObj && (
                <>
                  {/* Subject Dedicated Banner */}
                  <div className="py-subject-track-header" style={{ background: currentSubjectObj.gradient }}>
                    <div className="py-sth-left">
                      <div className="py-sth-icon-box">{currentSubjectObj.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="py-sth-title text-white">{currentSubjectObj.title}</h2>
                          <span className="py-sth-pill-free">100% Free • 8 Practice Tracks</span>
                        </div>
                        <p className="py-sth-sub text-white/85">
                          {currentSubjectObj.description}
                        </p>
                      </div>
                    </div>

                    <button
                      className="py-sth-view-all-btn"
                      onClick={() => { playClick(); setSelectedSubject('all'); }}
                    >
                      ← View All Subjects
                    </button>
                  </div>

                  {/* 8 Games Grid for This Subject */}
                  <div className="py-games-grid py-subject-8games-grid">
                    {(subjectGamesMap[selectedSubject] || []).map((game) => (
                      <div key={game.id} className="py-game-card subject-quest-card" onMouseEnter={playHover}>
                        {/* Top Level Circle Badge */}
                        <div className="py-card-level-badge" style={{ background: currentSubjectObj.gradient }}>
                          {game.level}
                        </div>

                        {/* Thumbnail Artwork Box */}
                        <div className="py-card-thumbnail-wrap py-subject-card-top">
                          <img
                            src={currentSubjectObj.image}
                            alt={game.title}
                            className="py-card-thumb-img opacity-90 hover:opacity-100 transition-opacity"
                          />
                          <div className="py-quest-xp-badge">
                            +{game.xp} XP
                          </div>
                        </div>

                        {/* Body Content */}
                        <div className="py-card-info-area">
                          <div className="py-card-title-row">
                            <span className="py-card-icon-emoji">{game.icon}</span>
                            <h3 className="py-card-title" title={game.title}>{game.title}</h3>
                          </div>
                          <p className="py-card-desc">{game.desc}</p>

                          <div className="py-card-meta-row">
                            <span className="py-difficulty-badge" style={{ color: game.tagColor }}>
                              <span className="py-dot" style={{ backgroundColor: game.tagColor }}></span>
                              {game.difficulty}
                            </span>
                          </div>

                          {/* Action Button */}
                          <button
                            className="py-play-btn basics-play-btn"
                            style={{ background: currentSubjectObj.gradient }}
                            onClick={() => handleOpenGameChallenge(game)}
                          >
                            DSA Coding Practice →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learning Flow for Subject */}
                  <div className="py-learning-flow-banner">
                    <div className="py-flow-header">
                      <h3 className="py-flow-main-title">Learning Flow for {currentSubjectObj.name}</h3>
                    </div>

                    <div className="py-flow-steps-row">
                      {[
                        { num: 1, title: 'Understand Concept', sub: 'Hands-on Scenario', bg: '#0ea5e9' },
                        { num: 2, title: 'Write & Test', sub: 'Interactive Sandbox', bg: '#8b5cf6' },
                        { num: 3, title: 'Solve Puzzle', sub: 'Real Industry Datasets', bg: '#10b981' },
                        { num: 4, title: 'Earn +XP & Badges', sub: 'Climb Leaderboard', bg: '#f59e0b' },
                      ].map((step, idx) => (
                        <React.Fragment key={step.num}>
                          <div className="py-flow-step-card">
                            <div className="py-flow-step-icon" style={{ backgroundColor: step.bg }}>
                              <span className="text-white font-black">{step.num}</span>
                            </div>
                            <div className="py-flow-step-text">
                              <strong className="py-flow-step-title">{step.title}</strong>
                              <span className="py-flow-step-sub">{step.sub}</span>
                            </div>
                          </div>
                          {idx < 3 && <div className="py-flow-arrow">→</div>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* =========================================================================
              4. INTERACTIVE CHALLENGE MODAL (For Subject Games)
              ========================================================================= */}
          {activeModalGame && (
            <div className="py-modal-backdrop" onClick={() => setActiveModalGame(null)}>
              <div className="py-modal-card" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="py-modal-header">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{activeModalGame.icon}</span>
                    <div>
                      <span className="py-modal-level-tag">Level {activeModalGame.level} • {activeModalGame.difficulty}</span>
                      <h3 className="py-modal-title">{activeModalGame.title}</h3>
                    </div>
                  </div>
                  <button
                    className="py-modal-close-btn"
                    onClick={() => { playClick(); setActiveModalGame(null); }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="py-modal-body">
                  <div className="py-modal-challenge-box">
                    <strong className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1">
                      🎯 Mission Objective
                    </strong>
                    <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                      {activeModalGame.challenge}
                    </p>
                  </div>

                  {/* Interactive Code / Solution Playground */}
                  <div className="py-modal-editor-area">
                    <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800 rounded-t-xl">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        terminal // {activeModalGame.subjectId.toUpperCase()}_sandbox
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">Interactive Editor</span>
                    </div>
                    <textarea
                      className="py-modal-textarea"
                      value={modalUserCode}
                      onChange={(e) => setModalUserCode(e.target.value)}
                      rows={5}
                      placeholder="Write your solution here..."
                    />
                  </div>

                  {/* Hint Toggle */}
                  <div className="mt-2.5">
                    <button
                      className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                      onClick={() => { playClick(); setModalShowHint(!modalShowHint); }}
                    >
                      <span>💡</span> {modalShowHint ? 'Hide Hint' : 'Need a Hint?'}
                    </button>
                    {modalShowHint && (
                      <div className="py-modal-hint-box">
                        <span className="text-xs font-semibold text-amber-900">
                          {activeModalGame.hint}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Success Feedback */}
                  {modalFeedback === 'correct' && (
                    <div className="py-modal-success-box">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <div>
                          <strong className="text-sm font-black text-emerald-900 block">
                            Challenge Completed! 🎉
                          </strong>
                          <span className="text-xs text-emerald-700 font-semibold">
                            Awesome job! You earned +{activeModalGame.xp} XP and advanced your skills.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="py-modal-footer">
                  <div className="text-xs font-extrabold text-amber-600 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-500" /> +{activeModalGame.xp} XP Reward
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      className="py-modal-secondary-btn"
                      onClick={() => { playClick(); setActiveModalGame(null); }}
                    >
                      {modalFeedback === 'correct' ? 'Close' : 'Cancel'}
                    </button>
                    {modalFeedback !== 'correct' ? (
                      <button
                        className="py-modal-primary-btn"
                        onClick={handleValidateGameChallenge}
                      >
                        <Play className="w-3.5 h-3.5 fill-white mr-1.5" />
                        Run & Check Answer
                      </button>
                    ) : (
                      <button
                        className="py-modal-next-btn"
                        onClick={() => {
                          playClick();
                          setActiveModalGame(null);
                        }}
                      >
                        Continue Playing →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* ─── RIGHT ANALYTICAL COLUMN (1:1 with media_1791522438674.jpg & media_1791522445433.jpg) ─── */}
        <aside className="py-arena-right-col">
          
          {/* Card 1: Your Progress */}
          <div className="py-widget-card progress-widget">
            <div className="py-widget-title-row">
              <div className="flex items-center gap-1.5 font-black text-slate-800 text-sm">
                <BarChart2Icon className="w-4 h-4 text-sky-500" />
                <span>Your Progress</span>
              </div>
            </div>

            <div className="py-progress-donut-area">
              {/* Circular Donut Ring */}
              <div className="py-donut-container">
                <svg className="py-donut-svg" viewBox="0 0 36 36">
                  <path
                    className="py-donut-bg-ring"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="py-donut-fill-ring"
                    strokeDasharray="0, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="py-donut-center-text">
                  <span className="py-donut-pct">0%</span>
                </div>
              </div>

              {/* Progress Count & Bar */}
              <div className="py-progress-details">
                <div className="flex items-baseline justify-between mb-1">
                  <strong className="text-slate-900 font-extrabold text-sm">
                    {activeTrack === 'basics' ? '0 / 15' : '0 / 14'}
                  </strong>
                </div>
                <div className="text-[11px] text-slate-500 font-bold mb-1.5">Topics Completed</div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full transition-all duration-500"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 3 Metric Badges */}
            <div className="py-metrics-strip">
              <div className="py-metric-chip purple-chip">
                <div className="py-mc-icon bg-purple-500 text-white">★</div>
                <div>
                  <strong className="text-xs font-black text-slate-800">0</strong>
                  <span className="block text-[9px] text-slate-500 font-semibold">XP Earned</span>
                </div>
              </div>

              <div className="py-metric-chip blue-chip">
                <div className="py-mc-icon bg-sky-500 text-white">$</div>
                <div>
                  <strong className="text-xs font-black text-slate-800">0</strong>
                  <span className="block text-[9px] text-slate-500 font-semibold">Practice Done</span>
                </div>
              </div>

              <div className="py-metric-chip emerald-chip">
                <div className="py-mc-icon bg-emerald-500 text-white">✓</div>
                <div>
                  <strong className="text-xs font-black text-slate-800">0</strong>
                  <span className="block text-[9px] text-slate-500 font-semibold">Quizzes Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Daily Challenge / Daily Mission */}
          <div className="py-widget-card challenge-widget">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="py-challenge-icon-box">
                  {activeTrack === 'basics' ? (
                    <Flame className="w-5 h-5 text-amber-500 fill-amber-400" />
                  ) : (
                    <Target className="w-5 h-5 text-rose-500" />
                  )}
                </div>
                <div>
                  <strong className="block text-xs font-black text-slate-800">
                    {activeTrack === 'basics' ? 'Daily Challenge' : 'Daily Mission'}
                  </strong>
                  <span className="block text-[11px] text-slate-500 font-semibold">
                    {activeTrack === 'basics' ? 'Complete 3 coding challenges today' : 'Complete 2 advanced coding challenges today'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl animate-bounce">🎁</span>
                <button className="py-challenge-arrow-btn" onClick={() => playClick()}>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
              <span>Progress</span>
              <span>{activeTrack === 'basics' ? '0 / 3' : '0 / 2'}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          {/* Card 3: Achievements */}
          <div className="py-widget-card achievements-widget">
            <div className="py-widget-title-row">
              <div className="flex items-center gap-1.5 font-black text-slate-800 text-sm">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Achievements</span>
                <span className="text-xs text-slate-400 font-bold ml-1">0 / 24 Unlocked</span>
              </div>
              <button className="text-xs font-bold text-sky-600 hover:underline" onClick={() => playClick()}>
                View All →
              </button>
            </div>

            <div className="py-achievements-badges-grid">
              {activeTrack === 'basics' ? (
                <>
                  <div className="py-badge-item">
                    <div className="py-svg-badge gold-shield">
                      <Star className="w-5 h-5 text-white fill-amber-100" />
                    </div>
                    <strong className="py-badge-name">First Step</strong>
                    <span className="py-badge-sub">Solve 1 challenge</span>
                  </div>
                  <div className="py-badge-item">
                    <div className="py-svg-badge blue-shield">
                      <Flame className="w-5 h-5 text-white fill-sky-200" />
                    </div>
                    <strong className="py-badge-name">7 Day Streak</strong>
                    <span className="py-badge-sub">Practice for 7 days</span>
                  </div>
                  <div className="py-badge-item">
                    <div className="py-svg-badge purple-shield">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <strong className="py-badge-name">Python Pro</strong>
                    <span className="py-badge-sub">Complete 5 challenges</span>
                  </div>
                  <div className="py-badge-item opacity-60">
                    <div className="py-svg-badge lock-shield">
                      <Lock className="w-5 h-5 text-slate-300" />
                    </div>
                    <strong className="py-badge-name">Code Master</strong>
                    <span className="py-badge-sub">Complete 15 challenges</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="py-badge-item">
                    <div className="py-svg-badge gold-shield">
                      <Star className="w-5 h-5 text-white fill-amber-100" />
                    </div>
                    <strong className="py-badge-name">Python Pro</strong>
                    <span className="py-badge-sub">Complete 5 challenges</span>
                  </div>
                  <div className="py-badge-item">
                    <div className="py-svg-badge blue-shield">
                      <Flame className="w-5 h-5 text-white fill-sky-200" />
                    </div>
                    <strong className="py-badge-name">Debug Master</strong>
                    <span className="py-badge-sub">Fix 50 errors</span>
                  </div>
                  <div className="py-badge-item">
                    <div className="py-svg-badge emerald-shield">
                      <Box className="w-5 h-5 text-white" />
                    </div>
                    <strong className="py-badge-name">Data Analyst</strong>
                    <span className="py-badge-sub">Process 5 datasets</span>
                  </div>
                  <div className="py-badge-item opacity-60">
                    <div className="py-svg-badge lock-shield">
                      <Lock className="w-5 h-5 text-slate-300" />
                    </div>
                    <strong className="py-badge-name">API Explorer</strong>
                    <span className="py-badge-sub">Use 3 APIs</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card 4: Leaderboard */}
          <div className="py-widget-card leaderboard-widget">
            <div className="py-widget-title-row">
              <div className="flex items-center gap-1.5 font-black text-slate-800 text-sm">
                <Crown className="w-4 h-4 text-amber-500" />
                <span>Leaderboard</span>
              </div>
              <button className="text-xs font-bold text-sky-600 hover:underline" onClick={() => playClick()}>
                View All →
              </button>
            </div>

            {/* Timeframe Tabs */}
            <div className="py-lb-tabs-row">
              <button
                className={`py-lb-tab ${leaderboardTab === 'week' ? 'active' : ''}`}
                onClick={() => { playClick(); setLeaderboardTab('week'); }}
              >
                This Week
              </button>
              <button
                className={`py-lb-tab ${leaderboardTab === 'month' ? 'active' : ''}`}
                onClick={() => { playClick(); setLeaderboardTab('month'); }}
              >
                This Month
              </button>
              <button
                className={`py-lb-tab ${leaderboardTab === 'all' ? 'active' : ''}`}
                onClick={() => { playClick(); setLeaderboardTab('all'); }}
              >
                All Time
              </button>
            </div>

            {/* 5 Ranked Users */}
            <div className="py-lb-list">
              {[
                { rank: 1, name: 'Aditi Sharma', xp: '2,450 XP', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', badge: '🥇' },
                { rank: 2, name: 'Rahul Verma', xp: '2,320 XP', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', badge: '🥈' },
                { rank: 3, name: 'Neha Gupta', xp: '2,100 XP', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces', badge: '🥉' },
                { rank: 4, name: 'Aman Kumar', xp: '1,980 XP', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces' },
                { rank: 5, name: 'Rahul Sharma', xp: '1,750 XP', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces' },
              ].map((user) => (
                <div key={user.rank} className="py-lb-row">
                  <div className="py-lb-rank-num">
                    {user.badge ? user.badge : user.rank}
                  </div>
                  <img src={user.avatar} alt={user.name} className="py-lb-avatar" />
                  <span className="py-lb-username">{user.name}</span>
                  <strong className="py-lb-xp">{user.xp}</strong>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </div>

    </div>
      </div>
    </>
  );
};

// Helper mini icon
function BarChart2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function Crown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
    </svg>
  );
}
