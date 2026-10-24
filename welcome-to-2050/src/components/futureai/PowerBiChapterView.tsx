import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2, Mic,
  BarChart3, CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Bot, Sparkles, Circle, PieChart, Database, Cpu, Layers, TrendingUp
} from 'lucide-react';
import './SqlChapterView.css';
import { PowerBiLesson1Workspace } from './PowerBiLesson1Workspace';

interface Props {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
  onOpenLesson?: (lessonId: string, initialTab?: 'video' | 'mcq' | 'game') => void;
}

type LessonStatus = 'completed' | 'progress' | 'todo';
interface Lesson { title: string; time: string; status: LessonStatus }
interface Chapter {
  id: number;
  title: string;
  desc: string;
  free?: boolean;
  color: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

const POWERBI_COLOR = '#f59e0b';

const POWERBI_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Introduction to Power BI',
    free: true,
    color: POWERBI_COLOR,
    desc: 'Foundations of Power BI: What is Power BI, Why businesses use it, Power BI vs Excel, Ecosystem, Business Intelligence, Use cases, Installation, Interface, Workflow, and First Report.',
    icon: <BarChart3 />,
    lessons: [
      { title: '1.1 What is Power BI?', time: '06:10', status: 'todo' },
      { title: '1.2 Why do businesses use Power BI?', time: '06:50', status: 'todo' },
      { title: '1.3 Power BI vs Excel', time: '07:20', status: 'todo' },
      { title: '1.4 Power BI Desktop, Service and Mobile', time: '07:45', status: 'todo' },
      { title: '1.5 Understanding Business Intelligence', time: '07:15', status: 'todo' },
      { title: '1.6 Real-world use cases of Power BI', time: '06:40', status: 'todo' },
      { title: '1.7 Installing Power BI Desktop', time: '05:30', status: 'todo' },
      { title: '1.8 Exploring the Power BI interface', time: '08:10', status: 'todo' },
      { title: '1.9 Understanding the Power BI workflow', time: '07:05', status: 'todo' },
      { title: '1.10 Creating your first report', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Understanding Data and Datasets',
    color: '#d97706',
    desc: 'Data foundations for reporting: Rows, columns & records, Data types, Structured vs unstructured, Dimensions vs measures, Keys, Business datasets (Sales, Finance, HR), and Data quality.',
    icon: <Database />,
    lessons: [
      { title: '2.1 What is data and a dataset?', time: '06:00', status: 'todo' },
      { title: '2.2 Rows, columns and records', time: '06:30', status: 'todo' },
      { title: '2.3 Data types: text, numbers, dates and Boolean', time: '07:15', status: 'todo' },
      { title: '2.4 Structured vs unstructured data', time: '06:45', status: 'todo' },
      { title: '2.5 Dimensions vs measures', time: '07:40', status: 'todo' },
      { title: '2.6 Primary keys and foreign keys', time: '08:00', status: 'todo' },
      { title: '2.7 Understanding business datasets', time: '07:10', status: 'todo' },
      { title: '2.8 Reading sales, finance and HR datasets', time: '08:25', status: 'todo' },
      { title: '2.9 Identifying data quality problems', time: '07:30', status: 'todo' },
      { title: '2.10 Selecting the right dataset for analysis', time: '07:50', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'Connecting to Data Sources',
    color: '#059669',
    desc: 'Data ingestion channels: Excel, CSV, text, SQL Server, PostgreSQL, folder connector, web data, SharePoint, Import vs DirectQuery, Live connections, and Credentials.',
    icon: <Database />,
    lessons: [
      { title: '3.1 Importing Excel files', time: '06:30', status: 'todo' },
      { title: '3.2 Connecting to CSV and text files', time: '06:15', status: 'todo' },
      { title: '3.3 Connecting to SQL Server', time: '08:45', status: 'todo' },
      { title: '3.4 Connecting to PostgreSQL', time: '08:20', status: 'todo' },
      { title: '3.5 Connecting to folders containing multiple files', time: '08:50', status: 'todo' },
      { title: '3.6 Connecting to web data', time: '07:30', status: 'todo' },
      { title: '3.7 Understanding SharePoint and cloud sources', time: '07:45', status: 'todo' },
      { title: '3.8 Import mode vs DirectQuery', time: '09:10', status: 'todo' },
      { title: '3.9 Live connections and semantic models', time: '08:00', status: 'todo' },
      { title: '3.10 Managing data source credentials', time: '06:40', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'Power Query Editor Fundamentals',
    color: '#0284c7',
    desc: 'The ETL workspace: Queries and applied steps, Renaming & removing columns, Filtering and sorting, Types, Duplicates, Blank & nulls, Error replacement, and Refresh.',
    icon: <Wrench />,
    lessons: [
      { title: '4.1 What is Power Query?', time: '06:10', status: 'todo' },
      { title: '4.2 Opening Power Query Editor', time: '05:45', status: 'todo' },
      { title: '4.3 Understanding queries and applied steps', time: '07:50', status: 'todo' },
      { title: '4.4 Renaming and removing columns', time: '06:20', status: 'todo' },
      { title: '4.5 Filtering and sorting rows', time: '06:40', status: 'todo' },
      { title: '4.6 Changing data types', time: '07:00', status: 'todo' },
      { title: '4.7 Removing duplicates', time: '06:35', status: 'todo' },
      { title: '4.8 Handling blank and null values', time: '07:30', status: 'todo' },
      { title: '4.9 Replacing values and fixing errors', time: '07:15', status: 'todo' },
      { title: '4.10 Refreshing transformed data', time: '06:50', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'Data Cleaning and Transformation',
    color: '#7c3aed',
    desc: 'Transform raw data into gold: Cleaning text & spaces, Splitting/merging columns, Extracting text/numbers, Date/time manipulations, Standardizing formats, and Error detection.',
    icon: <Wrench />,
    lessons: [
      { title: '5.1 Identifying missing and inconsistent data', time: '07:10', status: 'todo' },
      { title: '5.2 Cleaning text and removing extra spaces', time: '06:50', status: 'todo' },
      { title: '5.3 Splitting and merging columns', time: '07:30', status: 'todo' },
      { title: '5.4 Extracting text and numbers', time: '07:15', status: 'todo' },
      { title: '5.5 Working with dates and times', time: '08:00', status: 'todo' },
      { title: '5.6 Replacing null values', time: '06:40', status: 'todo' },
      { title: '5.7 Removing unwanted rows and columns', time: '06:20', status: 'todo' },
      { title: '5.8 Standardizing categories and formats', time: '07:45', status: 'todo' },
      { title: '5.9 Detecting and handling errors', time: '07:25', status: 'todo' },
      { title: '5.10 Building a complete data-cleaning workflow', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'Advanced Power Query',
    color: '#e11d48',
    desc: 'Enterprise ETL: Append vs Merge queries, Table joins, Group By & aggregations, Pivot/Unpivot, Conditional & custom columns, Indexing, Parameters, M code, and Query folding.',
    icon: <Cpu />,
    lessons: [
      { title: '6.1 Append Queries vs Merge Queries', time: '08:00', status: 'todo' },
      { title: '6.2 Joining tables in Power Query', time: '08:45', status: 'todo' },
      { title: '6.3 Group By and aggregations', time: '08:15', status: 'todo' },
      { title: '6.4 Pivoting and unpivoting columns', time: '09:00', status: 'todo' },
      { title: '6.5 Creating conditional columns', time: '07:30', status: 'todo' },
      { title: '6.6 Creating custom columns', time: '07:50', status: 'todo' },
      { title: '6.7 Index columns and ranking', time: '06:40', status: 'todo' },
      { title: '6.8 Combining multiple Excel or CSV files', time: '08:35', status: 'todo' },
      { title: '6.9 Parameters and reusable transformations', time: '08:10', status: 'todo' },
      { title: '6.10 Introduction to M language and query folding', time: '09:20', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'Data Modeling Fundamentals',
    color: '#2563eb',
    desc: 'Relational data architecture: Fact vs dimension tables, Cardinality (1:1, 1:Many, Many:Many), Active/Inactive links, Filtering direction, Star vs Snowflake, Date tables, and Sales models.',
    icon: <Layers />,
    lessons: [
      { title: '7.1 What is data modeling?', time: '07:00', status: 'todo' },
      { title: '7.2 Fact tables and dimension tables', time: '08:10', status: 'todo' },
      { title: '7.3 Primary and foreign keys', time: '07:30', status: 'todo' },
      { title: '7.4 One-to-one, one-to-many and many-to-many relationships', time: '09:15', status: 'todo' },
      { title: '7.5 Active vs inactive relationships', time: '08:00', status: 'todo' },
      { title: '7.6 Single-direction vs bidirectional filtering', time: '08:40', status: 'todo' },
      { title: '7.7 Star schema vs snowflake schema', time: '09:00', status: 'todo' },
      { title: '7.8 Handling duplicate keys', time: '07:20', status: 'todo' },
      { title: '7.9 Creating a proper date table', time: '09:30', status: 'todo' },
      { title: '7.10 Building a sales data model', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'DAX Fundamentals',
    color: '#0891b2',
    desc: 'The formula language: DAX syntax & operators, Calculated columns vs measures, SUM, AVERAGE, MIN, MAX, COUNT, COUNTROWS, DISTINCTCOUNT, DIVIDE, IF, SWITCH, SUMX, VAR/RETURN, and KPIs.',
    icon: <BarChart3 />,
    lessons: [
      { title: '8.1 What is DAX?', time: '06:50', status: 'todo' },
      { title: '8.2 DAX syntax and operators', time: '07:20', status: 'todo' },
      { title: '8.3 Calculated columns vs measures', time: '08:40', status: 'todo' },
      { title: '8.4 Creating your first measure', time: '07:10', status: 'todo' },
      { title: '8.5 SUM, AVERAGE, MIN and MAX', time: '07:35', status: 'todo' },
      { title: '8.6 COUNT, COUNTROWS and DISTINCTCOUNT', time: '08:00', status: 'todo' },
      { title: '8.7 DIVIDE, IF and SWITCH', time: '08:20', status: 'todo' },
      { title: '8.8 SUMX, AVERAGEX and other iterators', time: '09:10', status: 'todo' },
      { title: '8.9 Variables using VAR and RETURN', time: '08:30', status: 'todo' },
      { title: '8.10 Creating business KPIs with DAX', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'DAX Filter Context and Advanced Calculations',
    color: '#10b981',
    desc: 'Master the evaluation engine: Row context vs filter context, CALCULATE, FILTER, ALL, REMOVEFILTERS, ALLEXCEPT, ALLSELECTED, RELATED, SELECTEDVALUE, and Context transition.',
    icon: <BarChart3 />,
    lessons: [
      { title: '9.1 Row context vs filter context', time: '09:20', status: 'todo' },
      { title: '9.2 Understanding CALCULATE', time: '09:50', status: 'todo' },
      { title: '9.3 Using FILTER', time: '08:40', status: 'todo' },
      { title: '9.4 ALL, REMOVEFILTERS and ALLEXCEPT', time: '09:00', status: 'todo' },
      { title: '9.5 ALLSELECTED', time: '08:15', status: 'todo' },
      { title: '9.6 RELATED and RELATEDTABLE', time: '07:50', status: 'todo' },
      { title: '9.7 SELECTEDVALUE and HASONEVALUE', time: '08:10', status: 'todo' },
      { title: '9.8 Understanding context transition', time: '09:30', status: 'todo' },
      { title: '9.9 Creating dynamic measures', time: '09:10', status: 'todo' },
      { title: '9.10 Debugging and validating DAX calculations', time: '08:45', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Date and Time Intelligence',
    color: '#f59e0b',
    desc: 'Time-series analysis: Calendar table, Marking date tables, Year/Quarter/Month/Day analysis, MTD, QTD, YTD, Previous month/year, MoM & YoY growth, and Rolling averages.',
    icon: <Clock />,
    lessons: [
      { title: '10.1 Creating a calendar table', time: '08:30', status: 'todo' },
      { title: '10.2 Marking a date table', time: '06:40', status: 'todo' },
      { title: '10.3 Year, quarter, month and day analysis', time: '08:10', status: 'todo' },
      { title: '10.4 Month-to-date calculations', time: '08:20', status: 'todo' },
      { title: '10.5 Quarter-to-date calculations', time: '08:00', status: 'todo' },
      { title: '10.6 Year-to-date calculations', time: '08:50', status: 'todo' },
      { title: '10.7 Previous month and previous year', time: '08:40', status: 'todo' },
      { title: '10.8 Month-over-month growth', time: '09:15', status: 'todo' },
      { title: '10.9 Year-over-year growth', time: '09:30', status: 'todo' },
      { title: '10.10 Rolling averages and running totals', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Data Visualization Fundamentals',
    color: '#dc2626',
    desc: 'Visual storytelling: Chart selection, Bar & column, Line & area, Pie & donut, Scatter plots, Tables & matrix, Cards, KPI cards & gauges, Maps, and Formatting legends & labels.',
    icon: <BarChart3 />,
    lessons: [
      { title: '11.1 Choosing the right chart for the data', time: '07:30', status: 'todo' },
      { title: '11.2 Bar and column charts', time: '08:00', status: 'todo' },
      { title: '11.3 Line and area charts', time: '07:45', status: 'todo' },
      { title: '11.4 Pie and donut charts', time: '06:50', status: 'todo' },
      { title: '11.5 Scatter plots', time: '07:40', status: 'todo' },
      { title: '11.6 Tables and matrix visuals', time: '08:20', status: 'todo' },
      { title: '11.7 Cards, KPI cards and gauges', time: '08:50', status: 'todo' },
      { title: '11.8 Maps and geographical visuals', time: '08:15', status: 'todo' },
      { title: '11.9 Formatting titles, labels and legends', time: '07:25', status: 'todo' },
      { title: '11.10 Avoiding misleading charts', time: '07:10', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'Interactive Reports and Filtering',
    color: '#7c3aed',
    desc: 'Dynamic UX: Filters at visual/page/report levels, Slicers & formatting, Date slicers, Drill-down/up, Drillthrough pages, Cross-filtering, Bookmarks, Buttons, and Tooltips.',
    icon: <Sparkles />,
    lessons: [
      { title: '12.1 Filters at visual, page and report levels', time: '08:00', status: 'todo' },
      { title: '12.2 Slicers and slicer formatting', time: '07:40', status: 'todo' },
      { title: '12.3 Date and range slicers', time: '07:50', status: 'todo' },
      { title: '12.4 Drill-down and drill-up', time: '07:30', status: 'todo' },
      { title: '12.5 Drillthrough pages', time: '09:10', status: 'todo' },
      { title: '12.6 Cross-filtering and cross-highlighting', time: '08:20', status: 'todo' },
      { title: '12.7 Bookmarks and buttons', time: '09:00', status: 'todo' },
      { title: '12.8 Page navigation', time: '07:45', status: 'todo' },
      { title: '12.9 Report page tooltips', time: '08:50', status: 'todo' },
      { title: '12.10 Dynamic titles and field parameters', time: '09:20', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'Advanced Visuals and Report Design',
    color: '#059669',
    desc: 'Next-level visuals: Conditional formatting, Waterfall, funnel & ribbon charts, Decomposition tree, Key influencers, Small multiples, AppSource visuals, Themes, and Mobile layouts.',
    icon: <BarChart3 />,
    lessons: [
      { title: '13.1 Conditional formatting', time: '08:15', status: 'todo' },
      { title: '13.2 Waterfall, funnel and ribbon charts', time: '08:30', status: 'todo' },
      { title: '13.3 Decomposition tree', time: '08:45', status: 'todo' },
      { title: '13.4 Key influencers visual', time: '09:00', status: 'todo' },
      { title: '13.5 Small multiples', time: '07:50', status: 'todo' },
      { title: '13.6 Custom visuals from AppSource', time: '08:10', status: 'todo' },
      { title: '13.7 Designing report layouts', time: '08:40', status: 'todo' },
      { title: '13.8 Themes, colours and typography', time: '07:35', status: 'todo' },
      { title: '13.9 Accessibility and mobile layouts', time: '08:20', status: 'todo' },
      { title: '13.10 Building professional, interactive reports', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'Dashboard Design and Data Storytelling',
    color: '#d97706',
    desc: 'Executive analytics: Business requirements, KPI selection, Executive layout, Sales, finance & HR dashboards, Trends & exceptions, Executive summaries, and Stakeholder presentations.',
    icon: <TrendingUp />,
    lessons: [
      { title: '14.1 Understanding business requirements', time: '07:30', status: 'todo' },
      { title: '14.2 Identifying the right KPIs', time: '08:00', status: 'todo' },
      { title: '14.3 Designing an executive dashboard', time: '09:30', status: 'todo' },
      { title: '14.4 Choosing an effective layout', time: '08:15', status: 'todo' },
      { title: '14.5 Creating a sales performance dashboard', time: '10:00', status: 'todo' },
      { title: '14.6 Creating finance and HR dashboards', time: '10:30', status: 'todo' },
      { title: '14.7 Highlighting trends and exceptions', time: '08:20', status: 'todo' },
      { title: '14.8 Turning charts into business insights', time: '09:00', status: 'todo' },
      { title: '14.9 Writing an executive summary', time: '08:45', status: 'todo' },
      { title: '14.10 Presenting findings to stakeholders', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'Power BI Service and Sharing',
    color: '#0284c7',
    desc: 'Cloud deployment: Desktop vs Service, Publishing online, Workspaces, Reports vs dashboards vs semantic models, Secure sharing, Power BI Apps, Subscriptions, and Access management.',
    icon: <Bot />,
    lessons: [
      { title: '15.1 Power BI Desktop vs Power BI Service', time: '07:20', status: 'todo' },
      { title: '15.2 Publishing reports online', time: '06:50', status: 'todo' },
      { title: '15.3 Understanding workspaces', time: '08:00', status: 'todo' },
      { title: '15.4 Reports vs dashboards vs semantic models', time: '08:30', status: 'todo' },
      { title: '15.5 Creating and managing dashboards', time: '08:45', status: 'todo' },
      { title: '15.6 Sharing reports securely', time: '07:40', status: 'todo' },
      { title: '15.7 Creating Power BI apps', time: '09:10', status: 'todo' },
      { title: '15.8 Subscriptions and alerts', time: '07:15', status: 'todo' },
      { title: '15.9 Exporting and commenting on reports', time: '07:30', status: 'todo' },
      { title: '15.10 Managing workspace access and permissions', time: '08:15', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'Data Refresh, Gateway and Deployment',
    color: '#10b981',
    desc: 'Automation & DevOps: Manual and scheduled refresh, Refresh failures, Credential management, On-premises data gateway, Incremental refresh, Parameters, and Deployment pipelines.',
    icon: <Cpu />,
    lessons: [
      { title: '16.1 Manual and scheduled refresh', time: '08:00', status: 'todo' },
      { title: '16.2 Understanding refresh failures', time: '07:30', status: 'todo' },
      { title: '16.3 Managing credentials', time: '06:50', status: 'todo' },
      { title: '16.4 What is an on-premises data gateway?', time: '08:15', status: 'todo' },
      { title: '16.5 Configuring a gateway', time: '09:00', status: 'todo' },
      { title: '16.6 Incremental refresh', time: '09:30', status: 'todo' },
      { title: '16.7 Managing parameters and data sources', time: '08:20', status: 'todo' },
      { title: '16.8 Development, testing and production environments', time: '08:40', status: 'todo' },
      { title: '16.9 Deployment pipelines', time: '09:10', status: 'todo' },
      { title: '16.10 Monitoring refresh and deployment issues', time: '08:05', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'Security and Governance',
    color: '#ef4444',
    desc: 'Enterprise security: Row-Level Security (RLS), Static vs dynamic RLS, USERPRINCIPALNAME, Object-Level Security (OLS), Workspace roles, Sensitivity labels, and Certification.',
    icon: <Award />,
    lessons: [
      { title: '17.1 Row-Level Security (RLS)', time: '08:20', status: 'todo' },
      { title: '17.2 Static vs dynamic RLS', time: '09:00', status: 'todo' },
      { title: '17.3 Using USERPRINCIPALNAME', time: '08:40', status: 'todo' },
      { title: '17.4 Object-Level Security (OLS)', time: '08:15', status: 'todo' },
      { title: '17.5 Workspace roles and permissions', time: '08:30', status: 'todo' },
      { title: '17.6 Managing sensitive data', time: '07:45', status: 'todo' },
      { title: '17.7 Sensitivity labels', time: '07:20', status: 'todo' },
      { title: '17.8 Semantic model endorsement and certification', time: '08:00', status: 'todo' },
      { title: '17.9 Naming conventions and documentation', time: '07:10', status: 'todo' },
      { title: '17.10 Testing report access and security', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'Power BI Performance Optimization',
    color: '#8b5cf6',
    desc: 'Turbocharging reports: Model optimization, Column/row reduction, Data types, VertiPaq engine basics, Cardinality reduction, Efficient DAX, Performance Analyzer, and DAX Studio.',
    icon: <Zap />,
    lessons: [
      { title: '18.1 Understanding slow reports', time: '07:45', status: 'todo' },
      { title: '18.2 Optimizing data models', time: '08:50', status: 'todo' },
      { title: '18.3 Reducing unnecessary columns and rows', time: '07:30', status: 'todo' },
      { title: '18.4 Choosing efficient data types', time: '07:15', status: 'todo' },
      { title: '18.5 Understanding VertiPaq basics', time: '09:20', status: 'todo' },
      { title: '18.6 Reducing high-cardinality columns', time: '08:30', status: 'todo' },
      { title: '18.7 Writing efficient DAX', time: '09:10', status: 'todo' },
      { title: '18.8 Using Performance Analyzer', time: '08:40', status: 'todo' },
      { title: '18.9 Introduction to DAX Studio', time: '09:45', status: 'todo' },
      { title: '18.10 Diagnosing and improving report performance', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'Advanced Analytics in Power BI',
    color: '#0ea5e9',
    desc: 'Data science features: Quick measures, Trend analysis, Forecasting, Anomaly detection, What-if parameters, Scenario & sensitivity analysis, Statistical summaries, and Python visuals.',
    icon: <BarChart3 />,
    lessons: [
      { title: '19.1 Quick measures', time: '07:30', status: 'todo' },
      { title: '19.2 Trend analysis', time: '08:10', status: 'todo' },
      { title: '19.3 Forecasting', time: '08:45', status: 'todo' },
      { title: '19.4 Anomaly detection', time: '08:20', status: 'todo' },
      { title: '19.5 What-if parameters', time: '09:00', status: 'todo' },
      { title: '19.6 Scenario and sensitivity analysis', time: '09:15', status: 'todo' },
      { title: '19.7 Statistical summaries', time: '08:00', status: 'todo' },
      { title: '19.8 Introduction to Python visuals', time: '09:30', status: 'todo' },
      { title: '19.9 Understanding analytical limitations', time: '07:15', status: 'todo' },
      { title: '19.10 Interpreting results responsibly', time: '07:40', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Power BI with GenAI and Copilot',
    color: '#ec4899',
    desc: 'AI integration: Copilot capabilities, Natural-language Q&A, AI page drafting, Generating & explaining DAX, Debugging Power Query with AI, Business narratives, and Verification.',
    icon: <Bot />,
    lessons: [
      { title: '20.1 Introduction to AI in Power BI', time: '07:15', status: 'todo' },
      { title: '20.2 Understanding Copilot capabilities', time: '08:20', status: 'todo' },
      { title: '20.3 Asking natural-language questions about data', time: '07:50', status: 'todo' },
      { title: '20.4 Generating report pages with AI', time: '09:10', status: 'todo' },
      { title: '20.5 Generating and explaining DAX with AI', time: '09:30', status: 'todo' },
      { title: '20.6 Debugging Power Query and DAX using AI', time: '08:40', status: 'todo' },
      { title: '20.7 Summarizing report insights', time: '08:00', status: 'todo' },
      { title: '20.8 Generating business narratives', time: '08:15', status: 'todo' },
      { title: '20.9 Verifying AI-generated calculations', time: '07:45', status: 'todo' },
      { title: '20.10 AI privacy, security and feature limitations', time: '07:30', status: 'todo' },
    ],
  },
  {
    id: 21,
    title: 'Power BI with Excel and SQL',
    color: '#059669',
    desc: 'Ecosystem synergy: Importing Excel reports, Power Query data prep, Connecting to SQL databases, SQL reporting queries, Views & aggregated tables, and Large dataset strategies.',
    icon: <Database />,
    lessons: [
      { title: '21.1 Importing Excel reports into Power BI', time: '07:45', status: 'todo' },
      { title: '21.2 Preparing Excel data with Power Query', time: '08:15', status: 'todo' },
      { title: '21.3 Connecting Power BI to SQL databases', time: '08:50', status: 'todo' },
      { title: '21.4 Understanding SQL queries used for reporting', time: '09:10', status: 'todo' },
      { title: '21.5 Combining SQL and Power Query transformations', time: '09:00', status: 'todo' },
      { title: '21.6 Using views and aggregated tables', time: '08:30', status: 'todo' },
      { title: '21.7 Choosing between SQL and Power Query for cleaning', time: '08:00', status: 'todo' },
      { title: '21.8 Handling large datasets', time: '08:45', status: 'todo' },
      { title: '21.9 Troubleshooting source connectivity', time: '07:40', status: 'todo' },
      { title: '21.10 Building an end-to-end reporting workflow', time: '10:30', status: 'todo' },
    ],
  },
  {
    id: 22,
    title: 'Power BI with Microsoft Fabric',
    color: '#2563eb',
    desc: 'The unified analytics platform: Microsoft Fabric, Fabric integration, OneLake, Lakehouses & Warehouses, Fabric semantic models, Direct Lake mode, Pipelines, and Dataflows.',
    icon: <Cpu />,
    lessons: [
      { title: '22.1 Introduction to Microsoft Fabric', time: '08:10', status: 'todo' },
      { title: '22.2 Power BI and Fabric integration', time: '08:45', status: 'todo' },
      { title: '22.3 Understanding OneLake', time: '08:20', status: 'todo' },
      { title: '22.4 Introduction to Lakehouses and Warehouses', time: '09:15', status: 'todo' },
      { title: '22.5 Understanding Fabric semantic models', time: '08:50', status: 'todo' },
      { title: '22.6 Direct Lake mode overview', time: '09:30', status: 'todo' },
      { title: '22.7 Working with data pipelines', time: '09:00', status: 'todo' },
      { title: '22.8 Understanding dataflows', time: '08:15', status: 'todo' },
      { title: '22.9 Real-time analytics overview', time: '08:35', status: 'todo' },
      { title: '22.10 When to use Fabric with Power BI', time: '08:00', status: 'todo' },
    ],
  },
  {
    id: 23,
    title: 'Real-World Power BI Projects',
    color: '#d97706',
    desc: '7 end-to-end capstone portfolio dashboards: Sales Performance, Financial Analysis, HR Analytics, E-commerce, Customer Retention, Inventory & Supply Chain, and Marketing Campaign.',
    icon: <FolderKanban />,
    lessons: [
      { title: '23.1 Project 1: Sales Performance Dashboard', time: '13:00', status: 'todo' },
      { title: '23.2 Project 2: Financial Analysis Dashboard', time: '13:30', status: 'todo' },
      { title: '23.3 Project 3: HR Analytics Dashboard', time: '12:00', status: 'todo' },
      { title: '23.4 Project 4: E-commerce Performance Dashboard', time: '12:45', status: 'todo' },
      { title: '23.5 Project 5: Customer Retention Analysis', time: '12:15', status: 'todo' },
      { title: '23.6 Project 6: Inventory and Supply Chain Dashboard', time: '13:10', status: 'todo' },
      { title: '23.7 Project 7: Marketing Campaign Analysis', time: '12:30', status: 'todo' },
      { title: '23.8 Cleaning and transforming project data', time: '11:00', status: 'todo' },
      { title: '23.9 Building data models and DAX measures', time: '12:00', status: 'todo' },
      { title: '23.10 Presenting insights and publishing the final reports', time: '11:30', status: 'todo' },
    ],
  },
  {
    id: 24,
    title: 'Power BI Interview and Career Preparation',
    color: POWERBI_COLOR,
    desc: 'Master the recruitment process: Fundamentals, Power Query & M, Data modeling, DAX functions, Filter context, CALCULATE, Import vs DirectQuery, Service & gateway, and Scenario mocks.',
    icon: <Award />,
    lessons: [
      { title: '24.1 Power BI fundamentals interview questions', time: '10:00', status: 'todo' },
      { title: '24.2 Power Query and M language questions', time: '10:30', status: 'todo' },
      { title: '24.3 Data modeling and relationship questions', time: '11:00', status: 'todo' },
      { title: '24.4 DAX functions and measures questions', time: '11:30', status: 'todo' },
      { title: '24.5 Row context vs filter context', time: '10:45', status: 'todo' },
      { title: '24.6 CALCULATE and time intelligence questions', time: '11:15', status: 'todo' },
      { title: '24.7 Import vs DirectQuery questions', time: '09:40', status: 'todo' },
      { title: '24.8 Power BI Service, refresh and gateway questions', time: '10:15', status: 'todo' },
      { title: '24.9 RLS and performance optimization questions', time: '10:50', status: 'todo' },
      { title: '24.10 Scenario-based interview questions and mock interviews', time: '15:00', status: 'todo' },
    ],
  },
];

const ACTIONS = [
  { step: 'video', label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video video' },
  { step: 'mcq', label: 'MCQ', icon: <FileText className="w-3 h-3" />, cls: 'act-mcq mcq' },
  { step: 'interview', label: 'Mock Interview', icon: <Mic className="w-3 h-3" />, cls: 'act-interview interview' },
];

export const PowerBiChapterView: React.FC<Props> = ({ onBack, onOpenAdvisor }) => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeLessonWorkspace, setActiveLessonWorkspace] = useState<{ id: string; tab: 'video' | 'mcq' | 'game' } | null>(null);

  if (activeLessonWorkspace) {
    return (
      <PowerBiLesson1Workspace
        onBack={() => setActiveLessonWorkspace(null)}
        initialTab={activeLessonWorkspace.tab}
      />
    );
  }

  const totalLessons = POWERBI_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = POWERBI_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter(l => l.status === 'completed').length, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="scv-root">
      {/* ================= LEFT ================= */}
      <div className="scv-left">
        {/* Hero */}
        <section className="scv-hero scv-hero-powerbi">
          <video
            className="scv-hero-bg"
            src="/videos/card_video_powerbi.mp4"
            poster="/images/dashboard/powerbi_hero_banner_2050.jpg"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="scv-hero-fade scv-hero-fade-powerbi" />
          <nav className="scv-crumbs">
            <button onClick={onBack}>Home</button>
            <ChevronRight />
            <button onClick={onBack}>Data Analytics with GenAI</button>
            <ChevronRight />
            <strong>Power BI &amp; Business Intelligence</strong>
          </nav>
          <div className="scv-hero-body">
            <div className="scv-logo-halo scv-logo-halo-powerbi">
              <img src="/images/powerbi_logo_3d_hd.png" alt="Power BI 3D" className="scv-hero-logo" />
            </div>
            <div className="scv-hero-text">
              <h1>Power BI for <span>Business Intelligence &amp; AI</span></h1>
              <p>Master Power BI from Beginner to Enterprise Architect: Power Query ETL, Star Schema Modeling, Advanced DAX Measures, Time Intelligence, Interactive Storytelling, Microsoft Fabric, Copilot AI &amp; 7 Executive Capstones.</p>
              
              {/* DAX & BI Mastery Ribbon — highly useful for learners */}
              <div className="pb-dax-ribbon">
                <span className="pb-dax-badge"><i>DAX</i> Core Skills:</span>
                <span className="pb-dax-chip">CALCULATE</span>
                <span className="pb-dax-chip">RELATED</span>
                <span className="pb-dax-chip">Time Intelligence</span>
                <span className="pb-dax-chip">Star Schema</span>
                <span className="pb-dax-chip">Fabric &amp; Copilot</span>
                <span className="pb-dax-chip">KPI Dashboards</span>
              </div>

              <div className="scv-hero-pills">
                <span className="scv-pill"><BookOpen /> {totalLessons} Lessons</span>
                <span className="scv-pill"><FolderKanban /> 7 Projects</span>
                <span className="scv-pill"><Wrench /> Microsoft Fabric &amp; DAX</span>
                <span className="scv-pill scv-free">100% FREE</span>
              </div>
            </div>
          </div>
          <div className="scv-bubble scv-bubble-powerbi">“Turn raw data into executive dashboards &amp; DAX models! 📈⚡”</div>
        </section>

        {/* Chapters list */}
        <section className="scv-chapters">
          {POWERBI_CHAPTERS.map((c, idx) => {
            const isOpen = openId === c.id;
            const done = c.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / c.lessons.length) * 100);
            return (
              <div key={c.id} id={`pbcv-chapter-${c.id}`} className={`scv-chapter ${isOpen ? 'open' : ''}`}>
                <div className="scv-chapter-head" onClick={() => setOpenId(isOpen ? null : c.id)}>
                  <span className="scv-num" style={{ background: c.color }}>{idx + 1}</span>
                  <span className="scv-cicon" style={{ color: c.color, background: `${c.color}14` }}>{c.icon}</span>
                  <div className="scv-ctext">
                    <h3>{c.title} {c.free && <em className="scv-free-tag">FREE</em>}</h3>
                  </div>
                  <div className="scv-cprog">
                    <span className="scv-cprog-label">{c.lessons.length} Lessons</span>
                    <div className="scv-cprog-row">
                      <div className="scv-bar"><i style={{ width: `${tp}%`, background: c.color }} /></div>
                      <span className="scv-cprog-count">{done} / {c.lessons.length} completed</span>
                      <b>{tp}%</b>
                    </div>
                  </div>
                  <button className="scv-chev" aria-label="toggle">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {isOpen && (
                  <div className="scv-lessons">
                    {c.lessons.map((l, li) => {
                      const displayTitle = l.title.replace(/^\d+\.\d+\s*/, '');
                      const isLesson1_1 = c.id === 1 && li === 0;

                      const handleOpenThisLesson = (tab: 'video' | 'mcq' | 'game' = 'video') => {
                        if (isLesson1_1) {
                          setActiveLessonWorkspace({ id: '1.1', tab });
                        }
                      };

                      return (
                        <div
                          key={l.title}
                          className="scv-lesson"
                          title={`Open ${l.title}`}
                          onClick={() => handleOpenThisLesson('video')}
                          style={{ cursor: isLesson1_1 ? 'pointer' : 'default' }}
                        >
                          <span className="scv-lnum" style={{ color: c.color, fontWeight: 700 }}>{c.id}.{li + 1}</span>
                          <button
                            className="scv-lplay"
                            style={{ background: c.color }}
                            title={`Play ${l.title}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenThisLesson('video');
                            }}
                          >
                            <Play />
                          </button>
                          <span
                            className="scv-ltitle"
                            style={{ color: c.color }}
                            title={`Click to start ${l.title}`}
                          >
                            {displayTitle}
                          </span>
                          <span className="scv-ltime"><Clock /> {l.time}</span>
                          <div className="scv-actions">
                            {ACTIONS.map(a => (
                              <button
                                key={a.step}
                                className={`scv-act ${a.cls}`}
                                title={`Open ${a.label} for ${l.title}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenThisLesson(a.step === 'mcq' ? 'mcq' : a.step === 'game' ? 'game' : 'video');
                                }}
                              >
                                {a.icon}{a.label}
                              </button>
                            ))}
                          </div>
                          <div className="scv-lstatus">
                            {l.status === 'completed' && <span className="st-done"><CheckCircle2 /> Completed</span>}
                            {l.status === 'progress' && <span className="st-prog"><Circle /> In Progress</span>}
                            {l.status === 'todo' && <span className="st-todo">Not Started</span>}
                          </div>
                          {l.status === 'progress' ? (
                            <button
                              className="scv-continue"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenThisLesson('video');
                              }}
                            >
                              Continue <ArrowRight />
                            </button>
                          ) : (
                            <button
                              className="scv-lgo"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenThisLesson('video');
                              }}
                            >
                              <ChevronRight />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      {/* ================= RIGHT ================= */}
      <aside className="scv-right">
        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Your Progress</h4>
            <button className="scv-link">View Details <ArrowRight /></button>
          </div>
          <div className="scv-prog-top">
            <div className="scv-ring" style={{ background: `conic-gradient(${POWERBI_COLOR} 0 ${pct * 0.5}%, #fbbf24 ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="scv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="scv-bar big"><i style={{ width: `${pct}%`, background: POWERBI_COLOR }} /></div>
            </div>
          </div>
          <div className="scv-mini-stats">
            <div><FolderKanban style={{ color: POWERBI_COLOR }} /><b>7</b><span>Projects</span></div>
            <div><Zap className="c-amber" /><b>0</b><span>Quiz</span></div>
            <div><Award className="c-pink" /><b>0</b><span>Certificate</span></div>
            <div><Timer className="c-teal" /><b>0 hr</b><span>Time Spent</span></div>
          </div>
        </div>

        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Learning Path</h4>
            <button className="scv-link">View All <ArrowRight /></button>
          </div>
          <ul className="scv-path">
            {POWERBI_CHAPTERS.map((c, i) => {
              const done = c.lessons.filter(l => l.status === 'completed').length;
              const active = i === 0;
              return (
                <li key={c.id} className={active ? 'active' : ''} onClick={() => setOpenId(c.id)}>
                  <span className="scv-path-num">{i + 1}</span>
                  <span className="scv-path-check">{active ? <CheckCircle2 /> : <Circle />}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{done} / {c.lessons.length} lessons</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="scv-card scv-mentor">
          <div className="scv-mentor-text">
            <h4>AI Mentor</h4>
            <p>Ask anything about Power BI. Get DAX formula help, data modeling advice, Fabric questions, visual recommendations and interview prep.</p>
            <button className="scv-mentor-btn" onClick={() => onOpenAdvisor?.()}>
              <Bot /> Ask AI Mentor <ArrowRight />
            </button>
          </div>
          <img src="/images/pcv_ai_robot.jpg" alt="AI Mentor" />
          <Sparkles className="scv-spark" />
        </div>
      </aside>
    </div>
  );
};

export default PowerBiChapterView;
