import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2,
  CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Bot, Sparkles, Circle, Database, Key, Search, Filter, Layers,
  Calendar, GitMerge, Workflow, FileCode, Terminal, Sliders, BarChart3,
  TrendingUp, LineChart, Edit3, Server, Eye, ShieldCheck, Binary,
  Gauge, FileJson, PieChart, Share2
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

const SQL_COLOR = '#7c3aed';

const SQL_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Introduction to SQL and Databases',
    free: true,
    color: SQL_COLOR,
    desc: 'Foundations of databases & SQL: what is data and a database, SQL vs Excel vs Python, relational vs non-relational, tables, rows and columns, PostgreSQL & MySQL, and pgAdmin setup.',
    icon: <Database />,
    lessons: [
      { title: '1.1 What is data?', time: '05:30', status: 'todo' },
      { title: '1.2 What is a database?', time: '06:15', status: 'todo' },
      { title: '1.3 What is SQL?', time: '06:45', status: 'todo' },
      { title: '1.4 Why businesses use SQL', time: '07:00', status: 'todo' },
      { title: '1.5 SQL vs Excel', time: '06:20', status: 'todo' },
      { title: '1.6 SQL vs Python', time: '07:30', status: 'todo' },
      { title: '1.7 Relational vs non-relational databases', time: '07:15', status: 'todo' },
      { title: '1.8 Tables, rows and columns', time: '06:40', status: 'todo' },
      { title: '1.9 Introduction to PostgreSQL and MySQL', time: '08:00', status: 'todo' },
      { title: '1.10 Installing PostgreSQL and pgAdmin', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Database Fundamentals',
    color: SQL_COLOR,
    desc: 'Core architecture: schemas & tables, data types, primary and foreign keys, unique & NOT NULL constraints, default values, relationships (1:1, 1:N, N:N), and ER diagrams.',
    icon: <Key />,
    lessons: [
      { title: '2.1 Understanding schemas and tables', time: '06:30', status: 'todo' },
      { title: '2.2 Database data types', time: '07:15', status: 'todo' },
      { title: '2.3 Primary keys', time: '06:45', status: 'todo' },
      { title: '2.4 Foreign keys', time: '07:30', status: 'todo' },
      { title: '2.5 Unique constraints', time: '06:10', status: 'todo' },
      { title: '2.6 NOT NULL constraints', time: '05:50', status: 'todo' },
      { title: '2.7 Default values', time: '06:00', status: 'todo' },
      { title: '2.8 Relationships between tables', time: '08:15', status: 'todo' },
      { title: '2.9 One-to-one, one-to-many and many-to-many relationships', time: '09:00', status: 'todo' },
      { title: '2.10 Understanding an ER diagram', time: '08:45', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'Writing Your First SQL Queries',
    color: SQL_COLOR,
    desc: 'Query structure: SELECT statements, specific column retrieval, DISTINCT, aliases with AS, arithmetic calculations, ORDER BY (ASC/DESC), LIMIT, OFFSET, and query formatting best practices.',
    icon: <Search />,
    lessons: [
      { title: '3.1 Understanding SQL query structure', time: '06:00', status: 'todo' },
      { title: '3.2 SELECT statement', time: '06:30', status: 'todo' },
      { title: '3.3 Selecting specific columns', time: '05:45', status: 'todo' },
      { title: '3.4 SELECT DISTINCT', time: '06:50', status: 'todo' },
      { title: '3.5 Column aliases using AS', time: '06:15', status: 'todo' },
      { title: '3.6 Arithmetic expressions', time: '07:10', status: 'todo' },
      { title: '3.7 ORDER BY', time: '06:40', status: 'todo' },
      { title: '3.8 ASC and DESC', time: '06:00', status: 'todo' },
      { title: '3.9 LIMIT and OFFSET', time: '07:20', status: 'todo' },
      { title: '3.10 Writing readable SQL queries', time: '08:00', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'Filtering Data with WHERE',
    color: SQL_COLOR,
    desc: 'Precise record filtering: comparison operators, logical AND/OR/NOT, BETWEEN, IN / NOT IN, pattern matching with LIKE & wildcards (% and _), IS NULL / IS NOT NULL, and compound filters.',
    icon: <Filter />,
    lessons: [
      { title: '4.1 WHERE clause', time: '06:15', status: 'todo' },
      { title: '4.2 Comparison operators', time: '06:45', status: 'todo' },
      { title: '4.3 AND, OR and NOT', time: '07:30', status: 'todo' },
      { title: '4.4 BETWEEN', time: '06:20', status: 'todo' },
      { title: '4.5 IN and NOT IN', time: '07:00', status: 'todo' },
      { title: '4.6 LIKE and NOT LIKE', time: '07:15', status: 'todo' },
      { title: '4.7 Wildcards % and _', time: '06:50', status: 'todo' },
      { title: '4.8 IS NULL and IS NOT NULL', time: '06:35', status: 'todo' },
      { title: '4.9 Combining multiple conditions', time: '08:10', status: 'todo' },
      { title: '4.10 Solving business filtering problems', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'SQL Functions',
    color: SQL_COLOR,
    desc: 'Aggregate vs scalar functions: COUNT, SUM, AVG, MIN, MAX, ROUND, string manipulation (UPPER, LOWER, LENGTH, TRIM, CONCAT, SUBSTRING, REPLACE), COALESCE, NULLIF, and CAST conversion.',
    icon: <FileCode />,
    lessons: [
      { title: '5.1 What are SQL functions?', time: '05:40', status: 'todo' },
      { title: '5.2 Aggregate vs scalar functions', time: '06:30', status: 'todo' },
      { title: '5.3 COUNT, SUM, AVG, MIN and MAX', time: '07:45', status: 'todo' },
      { title: '5.4 ROUND and numeric functions', time: '06:50', status: 'todo' },
      { title: '5.5 UPPER, LOWER and LENGTH', time: '06:15', status: 'todo' },
      { title: '5.6 TRIM and CONCAT', time: '06:40', status: 'todo' },
      { title: '5.7 SUBSTRING and REPLACE', time: '07:20', status: 'todo' },
      { title: '5.8 COALESCE and NULLIF', time: '07:50', status: 'todo' },
      { title: '5.9 Type conversion using CAST', time: '07:10', status: 'todo' },
      { title: '5.10 Handling NULL values correctly', time: '08:20', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'GROUP BY and HAVING',
    color: SQL_COLOR,
    desc: 'Data aggregation & summaries: single and multiple column grouping, aggregate functions with GROUP BY, WHERE vs HAVING filter comparison, category sales, monthly revenue, and unique counting.',
    icon: <Layers />,
    lessons: [
      { title: '6.1 Understanding data aggregation', time: '06:20', status: 'todo' },
      { title: '6.2 GROUP BY single columns', time: '07:00', status: 'todo' },
      { title: '6.3 GROUP BY multiple columns', time: '07:30', status: 'todo' },
      { title: '6.4 Aggregate functions with GROUP BY', time: '08:15', status: 'todo' },
      { title: '6.5 WHERE vs HAVING', time: '08:00', status: 'todo' },
      { title: '6.6 Filtering aggregated results', time: '07:45', status: 'todo' },
      { title: '6.7 Counting unique customers', time: '06:50', status: 'todo' },
      { title: '6.8 Category-wise sales analysis', time: '08:30', status: 'todo' },
      { title: '6.9 Monthly revenue summaries', time: '09:00', status: 'todo' },
      { title: '6.10 Solving practical aggregation problems', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'SQL Date and Time Operations',
    color: SQL_COLOR,
    desc: 'Temporal analytics: DATE and TIMESTAMP types, EXTRACT (year, month, day), DATE_TRUNC, date arithmetic, intervals, CURRENT_DATE / CURRENT_TIMESTAMP, duration calculation, and quarterly trends.',
    icon: <Calendar />,
    lessons: [
      { title: '7.1 DATE and TIMESTAMP data types', time: '06:10', status: 'todo' },
      { title: '7.2 Extracting year, month and day', time: '06:40', status: 'todo' },
      { title: '7.3 EXTRACT and date parts', time: '07:15', status: 'todo' },
      { title: '7.4 DATE_TRUNC', time: '07:45', status: 'todo' },
      { title: '7.5 Date arithmetic and intervals', time: '08:00', status: 'todo' },
      { title: '7.6 Current date and current timestamp', time: '06:20', status: 'todo' },
      { title: '7.7 Filtering date ranges', time: '07:30', status: 'todo' },
      { title: '7.8 Monthly and quarterly analysis', time: '08:40', status: 'todo' },
      { title: '7.9 Calculating duration between dates', time: '08:15', status: 'todo' },
      { title: '7.10 Customer and sales date analysis', time: '09:20', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'SQL Joins Fundamentals',
    color: SQL_COLOR,
    desc: 'Relational data combinations: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, joining 2+ tables, understanding join keys, and spotting unmatched orphan records.',
    icon: <GitMerge />,
    lessons: [
      { title: '8.1 Why joins are needed', time: '06:00', status: 'todo' },
      { title: '8.2 Understanding table relationships', time: '06:45', status: 'todo' },
      { title: '8.3 INNER JOIN', time: '07:30', status: 'todo' },
      { title: '8.4 LEFT JOIN', time: '08:00', status: 'todo' },
      { title: '8.5 RIGHT JOIN', time: '07:15', status: 'todo' },
      { title: '8.6 FULL OUTER JOIN', time: '07:45', status: 'todo' },
      { title: '8.7 CROSS JOIN', time: '06:30', status: 'todo' },
      { title: '8.8 Joining two tables', time: '08:15', status: 'todo' },
      { title: '8.9 Joining multiple tables', time: '09:00', status: 'todo' },
      { title: '8.10 Identifying unmatched records', time: '08:40', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'Advanced Joins and Set Operations',
    color: SQL_COLOR,
    desc: 'Advanced relational operations: SELF JOIN, multi-condition joins, handling 1:N duplication, UNION vs UNION ALL, INTERSECT, EXCEPT, query consolidation, and missing record audits.',
    icon: <Workflow />,
    lessons: [
      { title: '9.1 SELF JOIN', time: '07:15', status: 'todo' },
      { title: '9.2 Joining a table to itself', time: '07:45', status: 'todo' },
      { title: '9.3 Joining tables with multiple conditions', time: '08:10', status: 'todo' },
      { title: '9.4 Understanding one-to-many join duplication', time: '08:30', status: 'todo' },
      { title: '9.5 UNION vs UNION ALL', time: '07:30', status: 'todo' },
      { title: '9.6 INTERSECT', time: '06:45', status: 'todo' },
      { title: '9.7 EXCEPT', time: '07:00', status: 'todo' },
      { title: '9.8 Combining results from different queries', time: '08:20', status: 'todo' },
      { title: '9.9 Finding missing records across tables', time: '08:50', status: 'todo' },
      { title: '9.10 Solving complex business join problems', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Subqueries',
    color: SQL_COLOR,
    desc: 'Nested query design: single-row, multiple-row, and scalar subqueries, subqueries in WHERE, SELECT, and FROM, IN/NOT IN, EXISTS/NOT EXISTS, correlated vs non-correlated subqueries.',
    icon: <FileCode />,
    lessons: [
      { title: '10.1 What is a subquery?', time: '06:10', status: 'todo' },
      { title: '10.2 Single-row subqueries', time: '07:00', status: 'todo' },
      { title: '10.3 Multiple-row subqueries', time: '07:45', status: 'todo' },
      { title: '10.4 Scalar subqueries', time: '06:30', status: 'todo' },
      { title: '10.5 Subqueries in WHERE', time: '08:15', status: 'todo' },
      { title: '10.6 Subqueries in SELECT', time: '07:50', status: 'todo' },
      { title: '10.7 Subqueries in FROM', time: '08:20', status: 'todo' },
      { title: '10.8 IN and NOT IN with subqueries', time: '07:40', status: 'todo' },
      { title: '10.9 EXISTS and NOT EXISTS', time: '08:35', status: 'todo' },
      { title: '10.10 Correlated vs non-correlated subqueries', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Common Table Expressions (CTEs)',
    color: SQL_COLOR,
    desc: 'Modular query building: WITH clause, clean multi-step query pipelines, chaining multiple CTEs, joins and aggregations in CTEs, CTEs vs subqueries, and recursive CTE hierarchies.',
    icon: <Terminal />,
    lessons: [
      { title: '11.1 What is a CTE?', time: '06:30', status: 'todo' },
      { title: '11.2 WITH clause', time: '07:15', status: 'todo' },
      { title: '11.3 Writing readable multi-step queries', time: '08:00', status: 'todo' },
      { title: '11.4 Multiple CTEs', time: '08:30', status: 'todo' },
      { title: '11.5 CTEs with joins', time: '08:15', status: 'todo' },
      { title: '11.6 CTEs with aggregation', time: '08:45', status: 'todo' },
      { title: '11.7 CTEs with subqueries', time: '08:20', status: 'todo' },
      { title: '11.8 CTEs vs subqueries', time: '07:50', status: 'todo' },
      { title: '11.9 Recursive CTE introduction', time: '09:30', status: 'todo' },
      { title: '11.10 Hierarchy and reporting problems', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'Conditional Logic in SQL',
    color: SQL_COLOR,
    desc: 'Business rules in SQL: CASE WHEN syntax, multiple WHEN conditions, simple vs searched CASE, conditional aggregations, customer segmenting, performance tagging, and handling NULLs.',
    icon: <Sliders />,
    lessons: [
      { title: '12.1 CASE WHEN', time: '06:40', status: 'todo' },
      { title: '12.2 Multiple WHEN conditions', time: '07:20', status: 'todo' },
      { title: '12.3 Simple CASE vs searched CASE', time: '07:05', status: 'todo' },
      { title: '12.4 Conditional aggregation', time: '08:30', status: 'todo' },
      { title: '12.5 Using CASE with GROUP BY', time: '07:50', status: 'todo' },
      { title: '12.6 Using CASE with ORDER BY', time: '07:15', status: 'todo' },
      { title: '12.7 Creating customer segments', time: '08:45', status: 'todo' },
      { title: '12.8 Categorizing sales and performance', time: '08:25', status: 'todo' },
      { title: '12.9 Handling NULL values with conditional logic', time: '07:35', status: 'todo' },
      { title: '12.10 Building business rules in SQL', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'Window Functions Fundamentals',
    color: SQL_COLOR,
    desc: 'Analytical window calculations: OVER clause, PARTITION BY, ORDER BY in windows, ROW_NUMBER, RANK, DENSE_RANK, NTILE, and ranking employees, products, and customers without grouping.',
    icon: <BarChart3 />,
    lessons: [
      { title: '13.1 What are window functions?', time: '06:50', status: 'todo' },
      { title: '13.2 Window functions vs aggregate functions', time: '07:20', status: 'todo' },
      { title: '13.3 OVER clause', time: '07:45', status: 'todo' },
      { title: '13.4 PARTITION BY', time: '08:30', status: 'todo' },
      { title: '13.5 ORDER BY inside a window', time: '07:55', status: 'todo' },
      { title: '13.6 ROW_NUMBER', time: '07:40', status: 'todo' },
      { title: '13.7 RANK', time: '07:35', status: 'todo' },
      { title: '13.8 DENSE_RANK', time: '07:50', status: 'todo' },
      { title: '13.9 NTILE', time: '08:15', status: 'todo' },
      { title: '13.10 Ranking employees, products and customers', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'Advanced Window Functions',
    color: SQL_COLOR,
    desc: 'Time-series & comparative metrics: LAG and LEAD, FIRST_VALUE / LAST_VALUE, running totals, cumulative & moving averages, % of total, MoM & YoY growth, and top records per category.',
    icon: <TrendingUp />,
    lessons: [
      { title: '14.1 LAG and LEAD', time: '08:10', status: 'todo' },
      { title: '14.2 FIRST_VALUE and LAST_VALUE', time: '07:50', status: 'todo' },
      { title: '14.3 Running totals', time: '08:35', status: 'todo' },
      { title: '14.4 Cumulative averages', time: '08:00', status: 'todo' },
      { title: '14.5 Moving averages', time: '09:15', status: 'todo' },
      { title: '14.6 Percentage of total', time: '08:20', status: 'todo' },
      { title: '14.7 Month-over-month comparisons', time: '09:00', status: 'todo' },
      { title: '14.8 Year-over-year comparisons', time: '09:10', status: 'todo' },
      { title: '14.9 Identifying top-performing records per group', time: '09:40', status: 'todo' },
      { title: '14.10 Solving advanced analytical problems', time: '10:15', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'Advanced Analytical SQL',
    color: SQL_COLOR,
    desc: 'Complex interview patterns: duplicate detection, second-highest salary, top N per group, consecutive dates, gaps & islands, customer retention, repeat purchase, cohort & funnel analysis.',
    icon: <LineChart />,
    lessons: [
      { title: '15.1 Finding duplicate records', time: '07:30', status: 'todo' },
      { title: '15.2 Finding the second-highest salary', time: '08:00', status: 'todo' },
      { title: '15.3 Finding top N records per group', time: '08:45', status: 'todo' },
      { title: '15.4 Identifying consecutive dates', time: '09:15', status: 'todo' },
      { title: '15.5 Gaps and islands problems', time: '10:30', status: 'todo' },
      { title: '15.6 Customer retention analysis', time: '09:00', status: 'todo' },
      { title: '15.7 Repeat purchase analysis', time: '08:40', status: 'todo' },
      { title: '15.8 Cohort analysis fundamentals', time: '10:00', status: 'todo' },
      { title: '15.9 Funnel analysis fundamentals', time: '09:30', status: 'todo' },
      { title: '15.10 Solving real-world business case studies', time: '11:00', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'Data Manipulation — INSERT, UPDATE and DELETE',
    color: SQL_COLOR,
    desc: 'Data modification operations: single & multi-row INSERT, INSERT INTO ... SELECT, conditional UPDATE, DELETE vs TRUNCATE, RETURNING in PostgreSQL, safety transactions, and rollbacks.',
    icon: <Edit3 />,
    lessons: [
      { title: '16.1 INSERT INTO', time: '06:30', status: 'todo' },
      { title: '16.2 Inserting single and multiple rows', time: '07:15', status: 'todo' },
      { title: '16.3 INSERT using SELECT', time: '07:45', status: 'todo' },
      { title: '16.4 UPDATE statement', time: '07:20', status: 'todo' },
      { title: '16.5 Updating records with conditions', time: '08:00', status: 'todo' },
      { title: '16.6 DELETE statement', time: '07:05', status: 'todo' },
      { title: '16.7 DELETE vs TRUNCATE', time: '06:50', status: 'todo' },
      { title: '16.8 RETURNING in PostgreSQL', time: '07:35', status: 'todo' },
      { title: '16.9 Avoiding accidental data changes', time: '07:10', status: 'todo' },
      { title: '16.10 Using transactions for safe modifications', time: '08:40', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'Database Definition and Constraints',
    color: SQL_COLOR,
    desc: 'DDL and schema creation: CREATE / ALTER / DROP DATABASE & TABLE, column constraints (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK, NOT NULL, DEFAULT), referential integrity, and table design.',
    icon: <Server />,
    lessons: [
      { title: '17.1 CREATE DATABASE', time: '06:15', status: 'todo' },
      { title: '17.2 CREATE TABLE', time: '07:30', status: 'todo' },
      { title: '17.3 ALTER TABLE', time: '07:45', status: 'todo' },
      { title: '17.4 DROP TABLE', time: '06:00', status: 'todo' },
      { title: '17.5 Data types and type selection', time: '07:15', status: 'todo' },
      { title: '17.6 PRIMARY KEY and FOREIGN KEY', time: '08:00', status: 'todo' },
      { title: '17.7 UNIQUE and CHECK constraints', time: '07:20', status: 'todo' },
      { title: '17.8 DEFAULT and NOT NULL', time: '06:40', status: 'todo' },
      { title: '17.9 Referential integrity', time: '08:15', status: 'todo' },
      { title: '17.10 Designing reliable database tables', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'Views, Temporary Tables and Materialized Views',
    color: SQL_COLOR,
    desc: 'Virtual & temporary objects: CREATE VIEW, updating through views, temporary tables, PostgreSQL materialized views, REFRESH MATERIALIZED VIEW, query modularity, and reporting layers.',
    icon: <Eye />,
    lessons: [
      { title: '18.1 What is a view?', time: '06:20', status: 'todo' },
      { title: '18.2 Creating and replacing views', time: '07:10', status: 'todo' },
      { title: '18.3 Views vs tables', time: '06:45', status: 'todo' },
      { title: '18.4 Updating data through views and limitations', time: '07:30', status: 'todo' },
      { title: '18.5 Temporary tables', time: '07:40', status: 'todo' },
      { title: '18.6 Common use cases for temporary tables', time: '07:15', status: 'todo' },
      { title: '18.7 Materialized views in PostgreSQL', time: '08:30', status: 'todo' },
      { title: '18.8 Refreshing materialized views', time: '08:00', status: 'todo' },
      { title: '18.9 Reusable query logic', time: '07:50', status: 'todo' },
      { title: '18.10 Creating reporting-friendly database objects', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'SQL Transactions and Database Safety',
    color: SQL_COLOR,
    desc: 'Concurrency & ACID guarantees: COMMIT, ROLLBACK, Atomicity, Consistency, Isolation, Durability, BEGIN blocks, SAVEPOINT, concurrent locking, failure recovery, and banking scenarios.',
    icon: <ShieldCheck />,
    lessons: [
      { title: '19.1 What is a transaction?', time: '06:45', status: 'todo' },
      { title: '19.2 COMMIT and ROLLBACK', time: '07:20', status: 'todo' },
      { title: '19.3 Understanding ACID properties', time: '08:15', status: 'todo' },
      { title: '19.4 BEGIN and transaction blocks', time: '07:00', status: 'todo' },
      { title: '19.5 SAVEPOINT', time: '07:30', status: 'todo' },
      { title: '19.6 Transaction consistency', time: '07:45', status: 'todo' },
      { title: '19.7 Concurrent database operations', time: '08:30', status: 'todo' },
      { title: '19.8 Introduction to locking', time: '08:00', status: 'todo' },
      { title: '19.9 Handling failed operations safely', time: '08:15', status: 'todo' },
      { title: '19.10 Practical transaction exercises', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Database Design and Normalization',
    color: SQL_COLOR,
    desc: 'Data architecture & schema modeling: redundancy reduction, functional dependencies, 1NF, 2NF, 3NF, BCNF overview, normalization vs denormalization, fact vs dimension tables, and schemas.',
    icon: <Binary />,
    lessons: [
      { title: '20.1 Database design fundamentals', time: '07:00', status: 'todo' },
      { title: '20.2 Understanding redundancy', time: '06:45', status: 'todo' },
      { title: '20.3 Functional dependencies', time: '07:50', status: 'todo' },
      { title: '20.4 First Normal Form (1NF)', time: '07:30', status: 'todo' },
      { title: '20.5 Second Normal Form (2NF)', time: '08:10', status: 'todo' },
      { title: '20.6 Third Normal Form (3NF)', time: '08:45', status: 'todo' },
      { title: '20.7 Boyce–Codd Normal Form (BCNF) overview', time: '08:30', status: 'todo' },
      { title: '20.8 Normalization vs denormalization', time: '08:00', status: 'todo' },
      { title: '20.9 Designing fact and dimension tables', time: '09:15', status: 'todo' },
      { title: '20.10 Creating a normalized business database', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 21,
    title: 'Indexes and Query Performance',
    color: SQL_COLOR,
    desc: 'Indexing mechanisms: how indexes work, B-tree indexes, single-column & composite indexes, unique indexes, sequential vs index scans, EXPLAIN, EXPLAIN ANALYZE, and diagnosing slow queries.',
    icon: <Zap />,
    lessons: [
      { title: '21.1 What is an index?', time: '06:30', status: 'todo' },
      { title: '21.2 How indexes work', time: '07:20', status: 'todo' },
      { title: '21.3 B-tree indexes', time: '07:50', status: 'todo' },
      { title: '21.4 Single-column and composite indexes', time: '08:15', status: 'todo' },
      { title: '21.5 Unique indexes', time: '07:00', status: 'todo' },
      { title: '21.6 When indexes help and when they do not', time: '08:30', status: 'todo' },
      { title: '21.7 Understanding sequential scans and index scans', time: '08:45', status: 'todo' },
      { title: '21.8 EXPLAIN', time: '08:10', status: 'todo' },
      { title: '21.9 EXPLAIN ANALYZE', time: '09:20', status: 'todo' },
      { title: '21.10 Diagnosing slow SQL queries', time: '10:00', status: 'todo' },
    ],
  },
  {
    id: 22,
    title: 'Advanced SQL Performance Optimization',
    color: SQL_COLOR,
    desc: 'Execution plan optimization: optimizing joins, filter/aggregation tuning, avoiding SELECT *, table statistics, CTE materialization, pagination, and benchmarking query execution speed.',
    icon: <Gauge />,
    lessons: [
      { title: '22.1 Understanding query execution plans', time: '08:00', status: 'todo' },
      { title: '22.2 Optimizing joins', time: '08:45', status: 'todo' },
      { title: '22.3 Optimizing filters and aggregations', time: '08:30', status: 'todo' },
      { title: '22.4 Avoiding unnecessary SELECT *', time: '06:50', status: 'todo' },
      { title: '22.5 Index usage and limitations', time: '08:15', status: 'todo' },
      { title: '22.6 Understanding table statistics', time: '07:45', status: 'todo' },
      { title: '22.7 Query planning fundamentals', time: '08:20', status: 'todo' },
      { title: '22.8 CTE materialization considerations', time: '08:50', status: 'todo' },
      { title: '22.9 Pagination and large result sets', time: '09:10', status: 'todo' },
      { title: '22.10 Measuring performance improvements', time: '09:40', status: 'todo' },
    ],
  },
  {
    id: 23,
    title: 'PostgreSQL Advanced Features',
    color: SQL_COLOR,
    desc: 'PostgreSQL powerhouse features: JSON & JSONB querying, array data types, STRING_AGG, conditional aggregation with FILTER, UPSERT (ON CONFLICT), sequences, stored procedures & triggers.',
    icon: <FileJson />,
    lessons: [
      { title: '23.1 PostgreSQL-specific data types', time: '07:15', status: 'todo' },
      { title: '23.2 JSON and JSONB basics', time: '08:00', status: 'todo' },
      { title: '23.3 Querying JSON data', time: '08:45', status: 'todo' },
      { title: '23.4 Array data types', time: '07:50', status: 'todo' },
      { title: '23.5 String aggregation using STRING_AGG', time: '07:30', status: 'todo' },
      { title: '23.6 Conditional aggregation with FILTER', time: '08:15', status: 'todo' },
      { title: '23.7 UPSERT using ON CONFLICT', time: '08:35', status: 'todo' },
      { title: '23.8 Sequences and identity columns', time: '07:10', status: 'todo' },
      { title: '23.9 Stored functions and procedures overview', time: '09:00', status: 'todo' },
      { title: '23.10 Triggers and their practical use cases', time: '09:30', status: 'todo' },
    ],
  },
  {
    id: 24,
    title: 'SQL for Data Analytics',
    color: SQL_COLOR,
    desc: 'Translating business logic to SQL: revenue & profit formulas, sales growth, customer segmentation, CLV, product performance, retention/churn, top customer leaderboards, and executive KPIs.',
    icon: <PieChart />,
    lessons: [
      { title: '24.1 Translating business questions into SQL', time: '07:30', status: 'todo' },
      { title: '24.2 Calculating revenue and profit', time: '08:00', status: 'todo' },
      { title: '24.3 Sales growth and trend analysis', time: '08:45', status: 'todo' },
      { title: '24.4 Customer segmentation', time: '08:30', status: 'todo' },
      { title: '24.5 Customer lifetime value fundamentals', time: '09:15', status: 'todo' },
      { title: '24.6 Product performance analysis', time: '08:20', status: 'todo' },
      { title: '24.7 Retention and repeat purchase metrics', time: '09:00', status: 'todo' },
      { title: '24.8 Ranking top customers and products', time: '08:40', status: 'todo' },
      { title: '24.9 Building KPI summaries', time: '09:30', status: 'todo' },
      { title: '24.10 Validating analytical results', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 25,
    title: 'SQL with Excel, Power BI and Python',
    color: SQL_COLOR,
    desc: 'Cross-tool integration: connecting Excel to SQL, loading SQL into Power BI, DirectQuery & query folding, Python psycopg2/SQLAlchemy, pandas read_sql, writing results, and full ETL workflows.',
    icon: <Share2 />,
    lessons: [
      { title: '25.1 Connecting Excel to SQL databases', time: '08:00', status: 'todo' },
      { title: '25.2 Loading SQL data into Power BI', time: '08:30', status: 'todo' },
      { title: '25.3 Connecting Power BI to PostgreSQL', time: '08:45', status: 'todo' },
      { title: '25.4 Using SQL queries as data sources', time: '07:50', status: 'todo' },
      { title: '25.5 Understanding query folding at a high level', time: '08:15', status: 'todo' },
      { title: '25.6 Connecting Python to PostgreSQL', time: '09:00', status: 'todo' },
      { title: '25.7 Reading SQL data with pandas', time: '08:40', status: 'todo' },
      { title: '25.8 Writing analysis results back to a database', time: '09:10', status: 'todo' },
      { title: '25.9 Choosing between SQL and Power Query for transformations', time: '08:25', status: 'todo' },
      { title: '25.10 Building an end-to-end analytics workflow', time: '10:30', status: 'todo' },
    ],
  },
  {
    id: 26,
    title: 'SQL with GenAI',
    color: SQL_COLOR,
    desc: 'AI-assisted SQL programming: natural language to SQL, AI query generators, explaining complex SQL, syntax and logic debugging, AI query tuning, test data generation, and hallucination safety.',
    icon: <Bot />,
    lessons: [
      { title: '26.1 Introduction to AI-assisted SQL', time: '07:00', status: 'todo' },
      { title: '26.2 Converting natural-language questions into SQL', time: '08:15', status: 'todo' },
      { title: '26.3 Generating queries with AI tools', time: '08:30', status: 'todo' },
      { title: '26.4 Explaining complex queries with AI', time: '07:45', status: 'todo' },
      { title: '26.5 Debugging syntax and logic errors', time: '08:20', status: 'todo' },
      { title: '26.6 Optimizing queries with AI assistance', time: '08:50', status: 'todo' },
      { title: '26.7 Generating test data and sample datasets', time: '08:10', status: 'todo' },
      { title: '26.8 Validating AI-generated joins and aggregations', time: '08:40', status: 'todo' },
      { title: '26.9 Database privacy and safe AI usage', time: '07:30', status: 'todo' },
      { title: '26.10 Recognizing hallucinations and incorrect query results', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 27,
    title: 'Real-World SQL Projects',
    color: SQL_COLOR,
    desc: '7 Industry portfolio projects: Retail Sales, E-commerce Customers, HR Analytics, Banking Transactions, Supply Chain, Cohort Retention, and Marketing Campaign Performance with report delivery.',
    icon: <FolderKanban />,
    lessons: [
      { title: '27.1 Project 1: Retail Sales Analysis', time: '15:00', status: 'todo' },
      { title: '27.2 Project 2: E-commerce Customer Analysis', time: '15:00', status: 'todo' },
      { title: '27.3 Project 3: Employee and HR Analytics', time: '14:30', status: 'todo' },
      { title: '27.4 Project 4: Banking Transactions Analysis', time: '16:00', status: 'todo' },
      { title: '27.5 Project 5: Inventory and Supply Chain Analysis', time: '15:30', status: 'todo' },
      { title: '27.6 Project 6: Customer Retention and Cohort Analysis', time: '16:30', status: 'todo' },
      { title: '27.7 Project 7: Marketing Campaign Performance', time: '15:00', status: 'todo' },
      { title: '27.8 Creating tables and relationships', time: '12:00', status: 'todo' },
      { title: '27.9 Writing analytical queries and validating results', time: '14:00', status: 'todo' },
      { title: '27.10 Presenting insights through reports and dashboards', time: '13:30', status: 'todo' },
    ],
  },
  {
    id: 28,
    title: 'SQL Interview and Career Preparation',
    color: SQL_COLOR,
    desc: 'Career mastery: fundamentals, filtering/aggregation, complex joins, subqueries & CTEs, window function puzzles, 2nd-highest salary & top N, duplicate deduplication, query tuning & live timed practice.',
    icon: <Award />,
    lessons: [
      { title: '28.1 SQL fundamentals interview questions', time: '11:00', status: 'todo' },
      { title: '28.2 Filtering and aggregation questions', time: '11:30', status: 'todo' },
      { title: '28.3 Join-based interview problems', time: '12:15', status: 'todo' },
      { title: '28.4 Subqueries and CTE questions', time: '12:30', status: 'todo' },
      { title: '28.5 Window function challenges', time: '13:00', status: 'todo' },
      { title: '28.6 Second-highest salary and top N problems', time: '12:00', status: 'todo' },
      { title: '28.7 Duplicate and missing-record scenarios', time: '11:45', status: 'todo' },
      { title: '28.8 Query optimization questions', time: '12:30', status: 'todo' },
      { title: '28.9 Business case-based SQL assessments', time: '14:00', status: 'todo' },
      { title: '28.10 Mock interviews and timed SQL practice', time: '15:30', status: 'todo' },
    ],
  },
];

const ACTIONS = [
  { step: 'video', label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video' },
  { step: 'mcq', label: 'MCQ', icon: <FileText className="w-3 h-3" />, cls: 'act-mcq' },
  { step: 'game', label: 'Game', icon: <Gamepad2 className="w-3 h-3" />, cls: 'act-game' },
  { step: 'code', label: 'Code', icon: <Code2 className="w-3 h-3" />, cls: 'act-code' },
];

export const SqlChapterView: React.FC<Props> = ({ onBack, onOpenAdvisor }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const totalLessons = SQL_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = SQL_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter(l => l.status === 'completed').length, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="scv-root">
      {/* ================= LEFT ================= */}
      <div className="scv-left">
        {/* Hero */}
        <section className="scv-hero scv-hero-sql">
          <img
            className="scv-hero-bg"
            src="/images/dashboard/sql_hero_banner_2050.jpg"
            alt="SQL &amp; Databases 2050"
          />
          <div className="scv-hero-fade" />
          <nav className="scv-crumbs">
            <button onClick={onBack}>Home</button>
            <ChevronRight />
            <button onClick={onBack}>Data Analytics with GenAI</button>
            <ChevronRight />
            <strong>SQL Mastery</strong>
          </nav>
          <div className="scv-hero-body">
            <div className="scv-logo-halo">
              <img src="/images/sql_logo_3d_hd.png" alt="SQL 3D" className="scv-hero-logo" />
            </div>
            <div className="scv-hero-text">
              <h1>SQL &amp; PostgreSQL for <span>Data Analytics &amp; AI</span></h1>
              <p>Master SQL from beginner to enterprise mastery: Database Architecture, Multi-Table Joins, Window Functions, CTEs, Performance Optimization, GenAI Querying, 7 Real-World Projects &amp; Placement Preparation.</p>
              <div className="scv-hero-pills">
                <span className="scv-pill"><BookOpen /> {totalLessons} Lessons</span>
                <span className="scv-pill"><FolderKanban /> 7 Projects</span>
                <span className="scv-pill"><Wrench /> PostgreSQL &amp; pgAdmin 4</span>
                <span className="scv-pill scv-free">100% FREE</span>
              </div>
            </div>
          </div>
          <div className="scv-bubble">“Master SQL to query any database with AI! 🗄️⚡”</div>
        </section>

        {/* Chapters list */}
        <section className="scv-chapters">
          {SQL_CHAPTERS.map((c, idx) => {
            const isOpen = openId === c.id;
            const done = c.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / c.lessons.length) * 100);
            return (
              <div key={c.id} id={`scv-chapter-${c.id}`} className={`scv-chapter ${isOpen ? 'open' : ''}`}>
                <div className="scv-chapter-head" onClick={() => setOpenId(isOpen ? null : c.id)}>
                  <span className="scv-num" style={{ background: c.color }}>{idx + 1}</span>
                  <span className="scv-cicon" style={{ color: c.color, background: `${c.color}14` }}>{c.icon}</span>
                  <div className="scv-ctext">
                    <h3>{c.title} {c.free && <em className="scv-free-tag">FREE</em>}</h3>
                  </div>
                  <div className="scv-cprog">
                    <span className="scv-cprog-label">{c.lessons.length} Lessons</span>
                    <div className="scv-cprog-row">
                      <div className="scv-bar"><i style={{ width: `${tp}%` }} /></div>
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
                        <div
                          key={l.title}
                          className="scv-lesson"
                          title={`Open ${l.title}`}
                        >
                          <span className="scv-lnum" style={{ color: c.color, fontWeight: 700 }}>{c.id}.{li + 1}</span>
                          <button
                            className="scv-lplay"
                            style={{ background: c.color }}
                            title={`Play ${l.title}`}
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
                            <button className="scv-continue">
                              Continue <ArrowRight />
                            </button>
                          ) : (
                            <button className="scv-lgo">
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
            <div className="scv-ring" style={{ background: `conic-gradient(#7c3aed 0 ${pct * 0.5}%, #a855f7 ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="scv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="scv-bar big"><i style={{ width: `${pct}%` }} /></div>
            </div>
          </div>
          <div className="scv-mini-stats">
            <div><FolderKanban className="c-purple" /><b>7</b><span>Projects</span></div>
            <div><Zap className="c-amber" /><b>28</b><span>Quizzes</span></div>
            <div><Award className="c-pink" /><b>1</b><span>Certificate</span></div>
            <div><Timer className="c-teal" /><b>0 hr</b><span>Time Spent</span></div>
          </div>
        </div>

        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Learning Path</h4>
            <button className="scv-link">View All <ArrowRight /></button>
          </div>
          <ul className="scv-path">
            {SQL_CHAPTERS.map((c, i) => {
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
            <p>Ask anything about SQL. Get query explanations, practice questions, join examples, and real-world database use cases.</p>
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

export default SqlChapterView;
