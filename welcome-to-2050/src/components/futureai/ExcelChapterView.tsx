import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2, Mic,
  BarChart3, CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Bot, Sparkles, Circle, Table2, Layers, Cpu, TrendingUp
} from 'lucide-react';
import './SqlChapterView.css';

interface Props {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
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

const EXCEL_COLOR = '#059669';

const EXCEL_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Introduction to Microsoft Excel',
    free: true,
    color: EXCEL_COLOR,
    desc: 'Foundations of Microsoft Excel: What is Excel, Business use, Data analysis and reporting, Workbooks and worksheets, Cells and ranges, Interface, Ribbon, tabs & Quick Access Toolbar, Saving workbooks, Formats, and First worksheet.',
    icon: <Table2 />,
    lessons: [
      { title: '1.1 What is Microsoft Excel?', time: '05:30', status: 'todo' },
      { title: '1.2 Why Excel is used in businesses', time: '06:15', status: 'todo' },
      { title: '1.3 Excel for data analysis and reporting', time: '06:45', status: 'todo' },
      { title: '1.4 Understanding workbooks and worksheets', time: '07:00', status: 'todo' },
      { title: '1.5 Rows, columns, cells and ranges', time: '06:20', status: 'todo' },
      { title: '1.6 Understanding the Excel interface', time: '07:30', status: 'todo' },
      { title: '1.7 Ribbon, tabs and Quick Access Toolbar', time: '06:50', status: 'todo' },
      { title: '1.8 Creating, opening and saving workbooks', time: '06:10', status: 'todo' },
      { title: '1.9 Excel file formats: XLSX, XLS, CSV and XLSM', time: '07:15', status: 'todo' },
      { title: '1.10 Creating your first Excel worksheet', time: '08:00', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Data Entry and Worksheet Management',
    color: '#0d9488',
    desc: 'Worksheet operations: Entering text, numbers & dates, Editing and deleting, Cut/Copy/Paste, AutoFill and Flash Fill, Renaming sheets, Inserting/moving rows, Hiding sheets, Row/column sizing, Find and Replace, and Freeze Panes.',
    icon: <Table2 />,
    lessons: [
      { title: '2.1 Entering text, numbers and dates', time: '06:00', status: 'todo' },
      { title: '2.2 Editing and deleting cell contents', time: '05:40', status: 'todo' },
      { title: '2.3 Copy, cut and paste', time: '06:20', status: 'todo' },
      { title: '2.4 AutoFill and Flash Fill', time: '07:10', status: 'todo' },
      { title: '2.5 Creating and renaming worksheets', time: '06:15', status: 'todo' },
      { title: '2.6 Inserting, deleting and moving rows and columns', time: '06:50', status: 'todo' },
      { title: '2.7 Hiding and unhiding rows, columns and sheets', time: '06:30', status: 'todo' },
      { title: '2.8 Adjusting row height and column width', time: '05:50', status: 'todo' },
      { title: '2.9 Find and Replace', time: '06:40', status: 'todo' },
      { title: '2.10 Freeze Panes and Split Window', time: '07:20', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'Excel Formatting Fundamentals',
    color: '#0284c7',
    desc: 'Professional presentation: Font, size, alignment, Number, percentage & currency, Date/time formats, Decimals & separators, Borders & fills, Format Painter, Wrap Text, Merge & Center, Custom formats, and Clean spreadsheets.',
    icon: <Table2 />,
    lessons: [
      { title: '3.1 Font, size, colour and cell alignment', time: '06:10', status: 'todo' },
      { title: '3.2 Number, percentage and currency formats', time: '07:15', status: 'todo' },
      { title: '3.3 Date and time formatting', time: '06:40', status: 'todo' },
      { title: '3.4 Decimal places and thousand separators', time: '06:00', status: 'todo' },
      { title: '3.5 Cell borders and fill colours', time: '06:30', status: 'todo' },
      { title: '3.6 Format Painter', time: '05:45', status: 'todo' },
      { title: '3.7 Wrap Text and Merge & Center', time: '06:20', status: 'todo' },
      { title: '3.8 Custom number formats', time: '08:00', status: 'todo' },
      { title: '3.9 Applying professional table formatting', time: '07:30', status: 'todo' },
      { title: '3.10 Creating clean and readable spreadsheets', time: '08:15', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'Excel Formulas and Basic Operators',
    color: '#7c3aed',
    desc: 'Calculation mechanics: Equals sign, Arithmetic operators, Operator precedence, Relative references, Absolute references ($), Mixed references, Copying formulas, Formula errors, and First calculation sheet.',
    icon: <Table2 />,
    lessons: [
      { title: '4.1 What is a formula?', time: '06:00', status: 'todo' },
      { title: '4.2 Understanding the equals sign', time: '05:30', status: 'todo' },
      { title: '4.3 Arithmetic operators', time: '06:40', status: 'todo' },
      { title: '4.4 Operator precedence and brackets', time: '07:15', status: 'todo' },
      { title: '4.5 Relative cell references', time: '07:00', status: 'todo' },
      { title: '4.6 Absolute cell references using $', time: '08:20', status: 'todo' },
      { title: '4.7 Mixed cell references', time: '08:00', status: 'todo' },
      { title: '4.8 Copying formulas across rows and columns', time: '06:50', status: 'todo' },
      { title: '4.9 Understanding formula errors', time: '07:45', status: 'todo' },
      { title: '4.10 Building your first calculation sheet', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'Essential Excel Functions',
    color: '#d97706',
    desc: 'Standard functions: SUM and AVERAGE, MIN and MAX, COUNT, COUNTA and COUNTBLANK, ROUND, ROUNDUP, ROUNDDOWN, ABS, INT, SUBTOTAL, AGGREGATE, Basic dates, and Business calculation exercises.',
    icon: <Table2 />,
    lessons: [
      { title: '5.1 SUM and AVERAGE', time: '06:30', status: 'todo' },
      { title: '5.2 MIN and MAX', time: '06:15', status: 'todo' },
      { title: '5.3 COUNT, COUNTA and COUNTBLANK', time: '07:10', status: 'todo' },
      { title: '5.4 ROUND, ROUNDUP and ROUNDDOWN', time: '07:25', status: 'todo' },
      { title: '5.5 ABS and INT', time: '06:00', status: 'todo' },
      { title: '5.6 SUBTOTAL', time: '07:40', status: 'todo' },
      { title: '5.7 AGGREGATE', time: '08:15', status: 'todo' },
      { title: '5.8 Basic date calculations', time: '06:50', status: 'todo' },
      { title: '5.9 Combining multiple functions', time: '08:00', status: 'todo' },
      { title: '5.10 Practical business calculation exercises', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'Logical Functions',
    color: '#e11d48',
    desc: 'Decision-making formulas: Logical conditions, IF, Nested IF, AND and OR, NOT, IFS, SWITCH, IFERROR and IFNA, and Building commission, grading and eligibility calculators.',
    icon: <Table2 />,
    lessons: [
      { title: '6.1 Understanding logical conditions', time: '06:20', status: 'todo' },
      { title: '6.2 IF function', time: '07:15', status: 'todo' },
      { title: '6.3 Nested IF', time: '08:30', status: 'todo' },
      { title: '6.4 AND and OR', time: '07:45', status: 'todo' },
      { title: '6.5 NOT', time: '06:00', status: 'todo' },
      { title: '6.6 IFS', time: '07:30', status: 'todo' },
      { title: '6.7 SWITCH', time: '07:10', status: 'todo' },
      { title: '6.8 IFERROR and IFNA', time: '07:00', status: 'todo' },
      { title: '6.9 Combining logical and mathematical functions', time: '08:20', status: 'todo' },
      { title: '6.10 Building eligibility, grading and commission calculators', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'Text Functions',
    color: '#0891b2',
    desc: 'Text parsing and cleansing: LEFT, RIGHT and MID, LEN and TRIM, CLEAN, UPPER, LOWER and PROPER, CONCAT and CONCATENATE, TEXTJOIN, FIND and SEARCH, SUBSTITUTE and REPLACE, and Customer data standardisation.',
    icon: <Table2 />,
    lessons: [
      { title: '7.1 LEFT, RIGHT and MID', time: '07:40', status: 'todo' },
      { title: '7.2 LEN and TRIM', time: '06:30', status: 'todo' },
      { title: '7.3 CLEAN', time: '05:50', status: 'todo' },
      { title: '7.4 UPPER, LOWER and PROPER', time: '06:15', status: 'todo' },
      { title: '7.5 CONCAT and CONCATENATE', time: '06:50', status: 'todo' },
      { title: '7.6 TEXTJOIN', time: '07:20', status: 'todo' },
      { title: '7.7 FIND and SEARCH', time: '07:45', status: 'todo' },
      { title: '7.8 SUBSTITUTE and REPLACE', time: '08:10', status: 'todo' },
      { title: '7.9 TEXT and VALUE', time: '07:30', status: 'todo' },
      { title: '7.10 Cleaning and standardizing customer data', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'Date and Time Functions',
    color: '#10b981',
    desc: 'Temporal analytics: Date serial numbers, TODAY and NOW, DATE and TIME, DAY, MONTH, YEAR, HOUR, MINUTE, SECOND, EOMONTH, EDATE, DATEDIF, WORKDAY and NETWORKDAYS, and Age & tenure calculations.',
    icon: <Clock />,
    lessons: [
      { title: '8.1 Understanding Excel date serial numbers', time: '06:40', status: 'todo' },
      { title: '8.2 TODAY and NOW', time: '05:30', status: 'todo' },
      { title: '8.3 DATE and TIME', time: '06:50', status: 'todo' },
      { title: '8.4 DAY, MONTH and YEAR', time: '06:20', status: 'todo' },
      { title: '8.5 HOUR, MINUTE and SECOND', time: '06:10', status: 'todo' },
      { title: '8.6 EOMONTH and EDATE', time: '07:30', status: 'todo' },
      { title: '8.7 DATEDIF', time: '07:50', status: 'todo' },
      { title: '8.8 WORKDAY and NETWORKDAYS', time: '08:10', status: 'todo' },
      { title: '8.9 WEEKDAY and WEEKNUM', time: '07:00', status: 'todo' },
      { title: '8.10 Calculating age, tenure and business days', time: '08:45', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'Lookup and Reference Functions',
    color: '#9333ea',
    desc: 'Connecting datasets: VLOOKUP, HLOOKUP, XLOOKUP, INDEX and MATCH, Two-way lookups, Approximate vs exact matching, Handling missing lookup values, Cross-sheet lookups, and Sales lookup exercises.',
    icon: <Table2 />,
    lessons: [
      { title: '9.1 Understanding lookup functions', time: '06:30', status: 'todo' },
      { title: '9.2 VLOOKUP', time: '08:15', status: 'todo' },
      { title: '9.3 HLOOKUP', time: '06:50', status: 'todo' },
      { title: '9.4 XLOOKUP', time: '09:00', status: 'todo' },
      { title: '9.5 INDEX and MATCH', time: '09:20', status: 'todo' },
      { title: '9.6 Two-way lookups', time: '08:40', status: 'todo' },
      { title: '9.7 Approximate vs exact matching', time: '07:30', status: 'todo' },
      { title: '9.8 Handling missing lookup values', time: '07:15', status: 'todo' },
      { title: '9.9 Looking up data across worksheets', time: '08:00', status: 'todo' },
      { title: '9.10 Practical employee, product and sales lookup exercises', time: '09:45', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Conditional and Criteria-Based Functions',
    color: '#f59e0b',
    desc: 'Aggregation with criteria: SUMIF and SUMIFS, COUNTIF and COUNTIFS, AVERAGEIF and AVERAGEIFS, MAXIFS and MINIFS, Wildcards, Multiple conditions, Dynamic criteria, and Performance summary reports.',
    icon: <BarChart3 />,
    lessons: [
      { title: '10.1 SUMIF and SUMIFS', time: '08:00', status: 'todo' },
      { title: '10.2 COUNTIF and COUNTIFS', time: '07:45', status: 'todo' },
      { title: '10.3 AVERAGEIF and AVERAGEIFS', time: '07:20', status: 'todo' },
      { title: '10.4 MAXIFS and MINIFS', time: '06:50', status: 'todo' },
      { title: '10.5 Wildcards in criteria', time: '07:10', status: 'todo' },
      { title: '10.6 Multiple conditions', time: '08:15', status: 'todo' },
      { title: '10.7 Dynamic criteria using cell references', time: '07:40', status: 'todo' },
      { title: '10.8 Combining criteria-based functions with dates', time: '08:30', status: 'todo' },
      { title: '10.9 Using formulas to analyze business performance', time: '08:50', status: 'todo' },
      { title: '10.10 Creating category-wise summary reports', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Sorting, Filtering and Data Validation',
    color: '#dc2626',
    desc: 'Data control: Single column sorting, Multi-level sorting, Custom sorting, AutoFilter, Text/number/date filters, Advanced Filter, Removing duplicates, Validation rules, and Dependent drop-down lists.',
    icon: <Table2 />,
    lessons: [
      { title: '11.1 Sorting data by one column', time: '06:00', status: 'todo' },
      { title: '11.2 Multi-level sorting', time: '06:45', status: 'todo' },
      { title: '11.3 Custom sorting', time: '07:15', status: 'todo' },
      { title: '11.4 Using AutoFilter', time: '06:30', status: 'todo' },
      { title: '11.5 Text, number and date filters', time: '07:20', status: 'todo' },
      { title: '11.6 Advanced Filter', time: '08:10', status: 'todo' },
      { title: '11.7 Removing duplicate records', time: '06:15', status: 'todo' },
      { title: '11.8 Data Validation rules', time: '07:50', status: 'todo' },
      { title: '11.9 Drop-down lists', time: '07:30', status: 'todo' },
      { title: '11.10 Dependent drop-down lists and input error messages', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'Excel Tables and Structured References',
    color: '#059669',
    desc: 'The official Table object: Converting ranges to Tables, Table styles, Structured references, Automatic formula expansion, Total Row, Sorting & filtering, Dynamic ranges, and Connecting to PivotTables.',
    icon: <Table2 />,
    lessons: [
      { title: '12.1 Converting ranges into Excel Tables', time: '06:30', status: 'todo' },
      { title: '12.2 Table styles and formatting', time: '06:15', status: 'todo' },
      { title: '12.3 Structured references', time: '08:00', status: 'todo' },
      { title: '12.4 Automatic formula expansion', time: '06:45', status: 'todo' },
      { title: '12.5 Total Row', time: '06:20', status: 'todo' },
      { title: '12.6 Sorting and filtering tables', time: '06:50', status: 'todo' },
      { title: '12.7 Dynamic table ranges', time: '07:30', status: 'todo' },
      { title: '12.8 Using tables with formulas', time: '08:10', status: 'todo' },
      { title: '12.9 Connecting tables to PivotTables', time: '08:30', status: 'todo' },
      { title: '12.10 Building a reusable data-entry template', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'Data Cleaning and Preparation',
    color: '#0284c7',
    desc: 'Data hygiene: Identifying missing values, Handling duplicates, Inconsistent text/categories, Date & number formats, Text to Columns, Flash Fill, Handling errors, and Standardizing codes.',
    icon: <Wrench />,
    lessons: [
      { title: '13.1 Identifying missing values', time: '06:50', status: 'todo' },
      { title: '13.2 Handling duplicate records', time: '06:20', status: 'todo' },
      { title: '13.3 Fixing inconsistent text and categories', time: '07:30', status: 'todo' },
      { title: '13.4 Correcting date and number formats', time: '07:15', status: 'todo' },
      { title: '13.5 Splitting text into columns', time: '07:00', status: 'todo' },
      { title: '13.6 Text to Columns', time: '07:45', status: 'todo' },
      { title: '13.7 Flash Fill for pattern-based cleaning', time: '07:10', status: 'todo' },
      { title: '13.8 Handling errors and invalid values', time: '07:40', status: 'todo' },
      { title: '13.9 Standardizing names, locations and product codes', time: '08:20', status: 'todo' },
      { title: '13.10 Creating a complete data-cleaning workflow', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'PivotTables',
    color: '#7c3aed',
    desc: 'Summarization powerhouse: What is a PivotTable, Creating PivotTables, Rows, columns, values & filters, Sum/count/average, Grouping dates, Value Field Settings, Calculated fields, Slicers, and Timelines.',
    icon: <BarChart3 />,
    lessons: [
      { title: '14.1 What is a PivotTable?', time: '07:00', status: 'todo' },
      { title: '14.2 Creating a PivotTable', time: '08:00', status: 'todo' },
      { title: '14.3 Rows, columns, values and filters', time: '07:40', status: 'todo' },
      { title: '14.4 Summarizing data by sum, count and average', time: '07:20', status: 'todo' },
      { title: '14.5 Grouping dates by month, quarter and year', time: '08:15', status: 'todo' },
      { title: '14.6 Sorting and filtering PivotTables', time: '07:10', status: 'todo' },
      { title: '14.7 Value Field Settings', time: '08:30', status: 'todo' },
      { title: '14.8 Calculated fields and items where appropriate', time: '09:00', status: 'todo' },
      { title: '14.9 Slicers and timelines', time: '08:20', status: 'todo' },
      { title: '14.10 Refreshing and formatting PivotTables', time: '07:30', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'PivotCharts and Interactive Reports',
    color: '#d97706',
    desc: 'Interactive visual summaries: What is a PivotChart, Creating PivotCharts, Connecting slicers to multiple PivotTables, Timelines, Dynamic titles, Formatting, Drill-down, and Building sales reports.',
    icon: <BarChart3 />,
    lessons: [
      { title: '15.1 What is a PivotChart?', time: '06:50', status: 'todo' },
      { title: '15.2 Creating PivotCharts', time: '07:45', status: 'todo' },
      { title: '15.3 Choosing suitable chart types', time: '07:20', status: 'todo' },
      { title: '15.4 Connecting slicers to multiple PivotTables', time: '08:50', status: 'todo' },
      { title: '15.5 Using timelines for date filtering', time: '07:30', status: 'todo' },
      { title: '15.6 Creating interactive summary reports', time: '08:40', status: 'todo' },
      { title: '15.7 Dynamic chart titles', time: '07:15', status: 'todo' },
      { title: '15.8 Chart formatting and labels', time: '07:50', status: 'todo' },
      { title: '15.9 Drill-down into underlying data', time: '07:10', status: 'todo' },
      { title: '15.10 Building an interactive sales report', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'Data Visualization and Charts',
    color: '#e11d48',
    desc: 'Chart design: Column & bar, Line & area, Pie & doughnut, Scatter & bubble, Combo charts & secondary axes, Histogram & Pareto, Waterfall & funnel, Sparklines, and Avoiding misleading visuals.',
    icon: <BarChart3 />,
    lessons: [
      { title: '16.1 Choosing the right chart for a business question', time: '07:30', status: 'todo' },
      { title: '16.2 Column and bar charts', time: '07:45', status: 'todo' },
      { title: '16.3 Line and area charts', time: '07:20', status: 'todo' },
      { title: '16.4 Pie and doughnut charts', time: '06:40', status: 'todo' },
      { title: '16.5 Scatter and bubble charts', time: '07:50', status: 'todo' },
      { title: '16.6 Combo charts and secondary axes', time: '08:30', status: 'todo' },
      { title: '16.7 Histogram and Pareto charts', time: '08:15', status: 'todo' },
      { title: '16.8 Waterfall and funnel chart options', time: '08:00', status: 'todo' },
      { title: '16.9 Sparklines and conditional formatting', time: '07:10', status: 'todo' },
      { title: '16.10 Avoiding misleading visualizations', time: '07:00', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'Advanced Excel Functions',
    color: '#0891b2',
    desc: 'Modern dynamic arrays: FILTER, SORT and SORTBY, UNIQUE, SEQUENCE, TAKE and DROP, CHOOSECOLS and CHOOSEROWS, LET, LAMBDA, and Combining dynamic arrays for reusable reports.',
    icon: <Zap />,
    lessons: [
      { title: '17.1 Dynamic array formulas', time: '08:00', status: 'todo' },
      { title: '17.2 FILTER', time: '08:45', status: 'todo' },
      { title: '17.3 SORT and SORTBY', time: '07:40', status: 'todo' },
      { title: '17.4 UNIQUE', time: '07:20', status: 'todo' },
      { title: '17.5 SEQUENCE', time: '07:10', status: 'todo' },
      { title: '17.6 TAKE and DROP', time: '07:30', status: 'todo' },
      { title: '17.7 CHOOSECOLS and CHOOSEROWS', time: '07:50', status: 'todo' },
      { title: '17.8 LET', time: '08:30', status: 'todo' },
      { title: '17.9 LAMBDA', time: '09:00', status: 'todo' },
      { title: '17.10 Combining dynamic arrays to create reusable reports', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'Advanced Formula Techniques',
    color: '#10b981',
    desc: 'Expert formula architecture: Nested formula design, Multi-condition calculations, Multi-criteria lookups, Named ranges, INDIRECT & OFFSET, Formula auditing, Trace Precedents/Dependents, and Large dataset optimization.',
    icon: <Wrench />,
    lessons: [
      { title: '18.1 Nested formula design', time: '08:15', status: 'todo' },
      { title: '18.2 Multi-condition calculations', time: '08:30', status: 'todo' },
      { title: '18.3 Two-way and multi-criteria lookups', time: '09:00', status: 'todo' },
      { title: '18.4 Dynamic ranges', time: '07:50', status: 'todo' },
      { title: '18.5 Named ranges and Name Manager', time: '07:30', status: 'todo' },
      { title: '18.6 INDIRECT and OFFSET, including their limitations', time: '08:40', status: 'todo' },
      { title: '18.7 Formula auditing', time: '07:10', status: 'todo' },
      { title: '18.8 Trace Precedents and Trace Dependents', time: '07:20', status: 'todo' },
      { title: '18.9 Evaluate Formula', time: '06:50', status: 'todo' },
      { title: '18.10 Optimizing formulas for large datasets', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'Power Query in Excel',
    color: '#059669',
    desc: 'Excel ETL: Introduction to Power Query, Importing Excel/CSV files, Folder combining, Changing data types, Removing duplicates, Splitting/merging columns, Merge & Append queries, Group By, Pivot/Unpivot, and M language.',
    icon: <Cpu />,
    lessons: [
      { title: '19.1 Introduction to Power Query', time: '07:30', status: 'todo' },
      { title: '19.2 Importing data from Excel and CSV files', time: '08:00', status: 'todo' },
      { title: '19.3 Combining files from a folder', time: '08:45', status: 'todo' },
      { title: '19.4 Changing data types and column names', time: '07:15', status: 'todo' },
      { title: '19.5 Removing duplicates and handling nulls', time: '07:30', status: 'todo' },
      { title: '19.6 Splitting and merging columns', time: '07:45', status: 'todo' },
      { title: '19.7 Merge Queries and Append Queries', time: '09:00', status: 'todo' },
      { title: '19.8 Group By and Pivot/Unpivot', time: '08:50', status: 'todo' },
      { title: '19.9 Parameters and refreshable workflows', time: '08:20', status: 'todo' },
      { title: '19.10 Introduction to M language', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Data Analysis and What-If Tools',
    color: '#f59e0b',
    desc: 'Decision modelling: Goal Seek, Scenario Manager, Data Tables for sensitivity, Solver, Forecast Sheet, Trend analysis, Descriptive Statistics, Correlation, and Regression analysis using Analysis ToolPak.',
    icon: <TrendingUp />,
    lessons: [
      { title: '20.1 Goal Seek', time: '07:30', status: 'todo' },
      { title: '20.2 Scenario Manager', time: '08:15', status: 'todo' },
      { title: '20.3 Data Tables for sensitivity analysis', time: '08:45', status: 'todo' },
      { title: '20.4 Solver introduction', time: '09:10', status: 'todo' },
      { title: '20.5 Forecast Sheet', time: '07:50', status: 'todo' },
      { title: '20.6 Trend analysis', time: '08:00', status: 'todo' },
      { title: '20.7 Descriptive Statistics', time: '08:30', status: 'todo' },
      { title: '20.8 Correlation analysis', time: '08:10', status: 'todo' },
      { title: '20.9 Regression analysis using the Analysis ToolPak', time: '09:30', status: 'todo' },
      { title: '20.10 Interpreting results and understanding limitations', time: '08:20', status: 'todo' },
    ],
  },
  {
    id: 21,
    title: 'Conditional Formatting and Advanced Reporting',
    color: '#dc2626',
    desc: 'Visual indicators: Highlight Cell Rules, Top/Bottom Rules, Data Bars, Colour Scales & Icons, Formula-based conditional formatting, Highlighting duplicates, Traffic-light indicators, and Management reports.',
    icon: <BarChart3 />,
    lessons: [
      { title: '21.1 Highlight Cell Rules', time: '07:15', status: 'todo' },
      { title: '21.2 Top/Bottom Rules', time: '06:50', status: 'todo' },
      { title: '21.3 Data Bars, Colour Scales and Icon Sets', time: '07:40', status: 'todo' },
      { title: '21.4 Formula-based conditional formatting', time: '08:50', status: 'todo' },
      { title: '21.5 Highlighting duplicates and exceptions', time: '07:20', status: 'todo' },
      { title: '21.6 Traffic-light indicators', time: '07:30', status: 'todo' },
      { title: '21.7 Dynamic KPI formatting', time: '08:10', status: 'todo' },
      { title: '21.8 Managing conditional formatting rules', time: '07:00', status: 'todo' },
      { title: '21.9 Creating exception and performance reports', time: '08:30', status: 'todo' },
      { title: '21.10 Designing readable management reports', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 22,
    title: 'Excel Dashboards',
    color: '#059669',
    desc: 'Executive reporting: What is a dashboard, Business requirements, KPIs, Preparing clean datasets, PivotTables/Charts, Slicers & timelines, Dynamic KPI cards, Visual hierarchy, and Stakeholder presentations.',
    icon: <Layers />,
    lessons: [
      { title: '22.1 What is an Excel dashboard?', time: '07:20', status: 'todo' },
      { title: '22.2 Understanding business requirements', time: '07:50', status: 'todo' },
      { title: '22.3 Selecting KPIs and metrics', time: '08:10', status: 'todo' },
      { title: '22.4 Preparing a clean dashboard dataset', time: '08:45', status: 'todo' },
      { title: '22.5 Using PivotTables and PivotCharts', time: '09:00', status: 'todo' },
      { title: '22.6 Adding slicers and timelines', time: '08:30', status: 'todo' },
      { title: '22.7 Dynamic charts and KPI cards', time: '09:15', status: 'todo' },
      { title: '22.8 Dashboard layout and visual hierarchy', time: '08:40', status: 'todo' },
      { title: '22.9 Creating sales, finance and HR dashboards', time: '11:00', status: 'todo' },
      { title: '22.10 Presenting insights and business recommendations', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 23,
    title: 'Excel Automation with Macros and VBA',
    color: '#7c3aed',
    desc: 'Productivity automation: Recording macros, Macro-enabled workbooks (XLSM), Introduction to VBA, Variables & data types, Conditions and loops, Cells and ranges, Buttons, and Safe automation.',
    icon: <Cpu />,
    lessons: [
      { title: '23.1 Understanding repetitive tasks', time: '06:30', status: 'todo' },
      { title: '23.2 Recording and running macros', time: '07:45', status: 'todo' },
      { title: '23.3 Saving macro-enabled workbooks', time: '06:15', status: 'todo' },
      { title: '23.4 Introduction to VBA', time: '08:10', status: 'todo' },
      { title: '23.5 Variables and data types', time: '08:30', status: 'todo' },
      { title: '23.6 Conditions and loops', time: '09:00', status: 'todo' },
      { title: '23.7 Working with cells, ranges and worksheets', time: '08:50', status: 'todo' },
      { title: '23.8 Automating formatting and reports', time: '09:20', status: 'todo' },
      { title: '23.9 Buttons and basic user interactions', time: '08:00', status: 'todo' },
      { title: '23.10 Understanding macro security and safe automation', time: '07:30', status: 'todo' },
    ],
  },
  {
    id: 24,
    title: 'Excel with AI and Microsoft Copilot',
    color: '#e11d48',
    desc: 'Next-gen spreadsheets: Introduction to AI in Excel, Copilot capabilities, Natural-language Q&A, Formula generation, Trend detection, Cleaning & categorizing with AI, Formula documentation, and Data privacy.',
    icon: <Bot />,
    lessons: [
      { title: '24.1 Introduction to AI in Excel', time: '07:00', status: 'todo' },
      { title: '24.2 Understanding Copilot capabilities', time: '08:15', status: 'todo' },
      { title: '24.3 Asking questions about spreadsheet data', time: '07:45', status: 'todo' },
      { title: '24.4 Generating and explaining formulas with AI', time: '09:10', status: 'todo' },
      { title: '24.5 Identifying trends and anomalies', time: '08:00', status: 'todo' },
      { title: '24.6 Creating summaries and charts with AI assistance', time: '08:30', status: 'todo' },
      { title: '24.7 Using AI to help clean and categorize data', time: '08:50', status: 'todo' },
      { title: '24.8 Debugging and documenting formulas', time: '08:10', status: 'todo' },
      { title: '24.9 Validating AI-generated results', time: '07:30', status: 'todo' },
      { title: '24.10 Data privacy, feature availability and responsible AI use', time: '07:15', status: 'todo' },
    ],
  },
  {
    id: 25,
    title: 'Excel with Python and Modern Analytics',
    color: '#0891b2',
    desc: 'Python in Excel: Python-enabled calculations, pandas integration, Statistical analysis with Python, Plotly & Seaborn visualizations, Python vs external scripts, Choosing formulas vs Power Query vs Python, and Compatibility.',
    icon: <Code2 />,
    lessons: [
      { title: '25.1 Introduction to Python in Excel', time: '07:40', status: 'todo' },
      { title: '25.2 Understanding supported environments and requirements', time: '07:10', status: 'todo' },
      { title: '25.3 Basic Python concepts for spreadsheet users', time: '08:30', status: 'todo' },
      { title: '25.4 Working with Python-enabled calculations', time: '08:50', status: 'todo' },
      { title: '25.5 Exploring data with pandas where supported', time: '09:30', status: 'todo' },
      { title: '25.6 Statistical analysis with Python', time: '09:15', status: 'todo' },
      { title: '25.7 Creating visualizations', time: '08:45', status: 'todo' },
      { title: '25.8 Understanding the difference between Python in Excel and external Python scripts', time: '08:20', status: 'todo' },
      { title: '25.9 Choosing Excel formulas, Power Query or Python for a task', time: '08:00', status: 'todo' },
      { title: '25.10 Validating outputs and managing compatibility', time: '07:30', status: 'todo' },
    ],
  },
  {
    id: 26,
    title: 'Excel Performance and Professional Best Practices',
    color: '#d97706',
    desc: 'Scalability: Large datasets, Formula efficiency, Avoiding volatile functions, Optimizing workbook size, External links, Preventing reference errors, Protecting sheets & workbooks, and Version control.',
    icon: <Wrench />,
    lessons: [
      { title: '26.1 Working with large datasets', time: '08:00', status: 'todo' },
      { title: '26.2 Efficient formula design', time: '08:30', status: 'todo' },
      { title: '26.3 Avoiding unnecessary volatile functions', time: '07:45', status: 'todo' },
      { title: '26.4 Optimizing workbook size', time: '07:30', status: 'todo' },
      { title: '26.5 Managing links to external workbooks', time: '07:15', status: 'todo' },
      { title: '26.6 Preventing formula and reference errors', time: '08:10', status: 'todo' },
      { title: '26.7 Protecting sheets and workbooks', time: '07:20', status: 'todo' },
      { title: '26.8 Documenting formulas and assumptions', time: '07:00', status: 'todo' },
      { title: '26.9 File organization and version control', time: '06:45', status: 'todo' },
      { title: '26.10 Building reliable, maintainable Excel solutions', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 27,
    title: 'Real-World Excel Projects',
    color: '#059669',
    desc: '7 Capstone portfolio projects: Sales Analysis, Employee HR Analytics, Monthly Budget Tracker, Inventory Management, E-commerce Performance, Customer Segmentation, and Interactive Sales Dashboard.',
    icon: <FolderKanban />,
    lessons: [
      { title: '27.1 Project 1: Sales Analysis Report', time: '13:00', status: 'todo' },
      { title: '27.2 Project 2: Employee and HR Analytics', time: '12:30', status: 'todo' },
      { title: '27.3 Project 3: Monthly Expense and Budget Tracker', time: '11:45', status: 'todo' },
      { title: '27.4 Project 4: Inventory Management System', time: '12:15', status: 'todo' },
      { title: '27.5 Project 5: E-commerce Performance Analysis', time: '13:30', status: 'todo' },
      { title: '27.6 Project 6: Customer Segmentation and Sales Trends', time: '12:00', status: 'todo' },
      { title: '27.7 Project 7: Interactive Sales Dashboard', time: '14:00', status: 'todo' },
      { title: '27.8 Cleaning raw data and validating results', time: '10:00', status: 'todo' },
      { title: '27.9 Applying formulas, lookups and PivotTables', time: '11:00', status: 'todo' },
      { title: '27.10 Presenting findings and creating a project portfolio', time: '10:30', status: 'todo' },
    ],
  },
  {
    id: 28,
    title: 'Excel Interview and Career Preparation',
    color: EXCEL_COLOR,
    desc: 'Career mastery: Fundamentals interview questions, Formula scenarios, IF/SUMIFS/COUNTIFS, VLOOKUP vs XLOOKUP vs INDEX-MATCH, PivotTable & dashboard questions, Power Query cases, Debugging, and Mocks.',
    icon: <Award />,
    lessons: [
      { title: '28.1 Excel fundamentals interview questions', time: '11:00', status: 'todo' },
      { title: '28.2 Formula and function-based questions', time: '12:00', status: 'todo' },
      { title: '28.3 IF, SUMIFS and COUNTIFS scenarios', time: '11:30', status: 'todo' },
      { title: '28.4 VLOOKUP vs XLOOKUP vs INDEX-MATCH', time: '12:30', status: 'todo' },
      { title: '28.5 PivotTable and dashboard questions', time: '11:00', status: 'todo' },
      { title: '28.6 Power Query interview questions', time: '10:45', status: 'todo' },
      { title: '28.7 Data-cleaning case studies', time: '11:15', status: 'todo' },
      { title: '28.8 Formula debugging challenges', time: '10:30', status: 'todo' },
      { title: '28.9 Practical Excel assessment tasks', time: '13:00', status: 'todo' },
      { title: '28.10 Mock interviews and business problem-solving', time: '15:00', status: 'todo' },
    ],
  },
];

const ACTIONS = [
  { step: 'video', label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video' },
  { step: 'mcq', label: 'MCQ', icon: <FileText className="w-3 h-3" />, cls: 'act-mcq' },
  { step: 'game', label: 'Game', icon: <Gamepad2 className="w-3 h-3" />, cls: 'act-game' },
  { step: 'code', label: 'Code', icon: <Code2 className="w-3 h-3" />, cls: 'act-code' },
];

export const ExcelChapterView: React.FC<Props> = ({ onBack, onOpenAdvisor }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const totalLessons = EXCEL_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = EXCEL_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter(l => l.status === 'completed').length, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="scv-root">
      {/* ================= LEFT ================= */}
      <div className="scv-left">
        {/* Hero */}
        <section className="scv-hero scv-hero-excel">
          <video
            className="scv-hero-bg"
            src="/videos/card_video_excel.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="scv-hero-fade scv-hero-fade-excel" />
          <nav className="scv-crumbs">
            <button onClick={onBack}>Home</button>
            <ChevronRight />
            <button onClick={onBack}>Data Analytics with GenAI</button>
            <ChevronRight />
            <strong>Excel &amp; Spreadsheets Mastery</strong>
          </nav>
          <div className="scv-hero-body">
            <div className="scv-logo-halo scv-logo-halo-excel">
              <img src="/images/excel_logo_3d_hd.png" alt="Excel 3D" className="scv-hero-logo" />
            </div>
            <div className="scv-hero-text">
              <h1>Microsoft Excel for <span>Data Analysis &amp; AI</span></h1>
              <p>Master Excel from Beginner to Corporate Expert: Core Formulas, Advanced XLOOKUP &amp; INDEX-MATCH, Dynamic Pivot Tables, Power Query ETL, What-If Analysis, VBA Automation, Copilot AI, Python in Excel &amp; 7 Capstone Projects.</p>
              
              {/* Formula Bar Cheat-Sheet Ribbon — highly useful for learners */}
              <div className="ecv-formula-ribbon">
                <span className="ecv-fx-badge"><i>fx</i> Key Formulas:</span>
                <span className="ecv-formula-chip">XLOOKUP</span>
                <span className="ecv-formula-chip">INDEX / MATCH</span>
                <span className="ecv-formula-chip">SUMIFS &amp; COUNTIFS</span>
                <span className="ecv-formula-chip">Pivot Tables</span>
                <span className="ecv-formula-chip">Power Query</span>
                <span className="ecv-formula-chip">Copilot AI</span>
              </div>

              <div className="scv-hero-pills">
                <span className="scv-pill"><BookOpen /> {totalLessons} Lessons</span>
                <span className="scv-pill"><FolderKanban /> 7 Projects</span>
                <span className="scv-pill"><Wrench /> Power Query, VBA &amp; Copilot</span>
                <span className="scv-pill scv-free">100% FREE</span>
              </div>
            </div>
          </div>
          <div className="scv-bubble scv-bubble-excel">“Master Excel from SUM() to AI Copilot &amp; Power Query! 📊⚡”</div>
        </section>

        {/* Chapters list */}
        <section className="scv-chapters">
          {EXCEL_CHAPTERS.map((c, idx) => {
            const isOpen = openId === c.id;
            const done = c.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / c.lessons.length) * 100);
            return (
              <div key={c.id} id={`ecv-chapter-${c.id}`} className={`scv-chapter ${isOpen ? 'open' : ''}`}>
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
                      return (
                        <div key={l.title} className="scv-lesson" title={`Open ${l.title}`}>
                          <span className="scv-lnum" style={{ color: c.color, fontWeight: 700 }}>{c.id}.{li + 1}</span>
                          <button className="scv-lplay" style={{ background: c.color }} title={`Play ${l.title}`}>
                            <Play />
                          </button>
                          <span className="scv-ltitle" style={{ color: c.color }} title={`Click to start ${l.title}`}>
                            {displayTitle}
                          </span>
                          <span className="scv-ltime"><Clock /> {l.time}</span>
                          <div className="scv-actions">
                            {ACTIONS.map(a => (
                              <button key={a.step} className={`scv-act ${a.cls}`} title={`Open ${a.label} for ${l.title}`}>
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
                            <button className="scv-continue">Continue <ArrowRight /></button>
                          ) : (
                            <button className="scv-lgo"><ChevronRight /></button>
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
            <div className="scv-ring" style={{ background: `conic-gradient(${EXCEL_COLOR} 0 ${pct * 0.5}%, #34d399 ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="scv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="scv-bar big"><i style={{ width: `${pct}%`, background: EXCEL_COLOR }} /></div>
            </div>
          </div>
          <div className="scv-mini-stats">
            <div><FolderKanban style={{ color: EXCEL_COLOR }} /><b>7</b><span>Projects</span></div>
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
            {EXCEL_CHAPTERS.map((c, i) => {
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
            <p>Ask anything about Excel. Get formula debugging, PivotTable guidance, VBA automation scripts, and interview prep.</p>
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

export default ExcelChapterView;
