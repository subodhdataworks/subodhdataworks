// Complete SQL Coding Practice Question Bank (25 Topics + Recursive CTE + 4 Popular Challenges)
export interface SqlChallengeTask {
  id: number;
  taskNumber: number;
  title: string;
  points: number;
  successRate: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  problemStatement: string;
  highlightedKeyword: string;
  tableSchema: string;
  sampleInput: string;
  sampleOutput: string;
  starterCode: string;
  hint: string;
  solution: string;
  testCases?: {
    inputDesc: string;
    expected: string;
    hidden?: boolean;
  }[];
  validate?: (query: string) => { passed: boolean; message: string; rows?: any[] };
}

export interface SqlTopicDefinition {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  maxScore: number;
  skill: string;
  description: string;
  tabs: ('all' | 'basic' | 'intermediate' | 'advanced' | 'popular')[];
  solved?: boolean;
  bookmarked?: boolean;
  questions: SqlChallengeTask[];
}

function makeSqlTask(
  topicId: number,
  taskNumber: number,
  title: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  skill: string,
  points: number,
  successRate: string,
  problemStatement: string,
  highlightedKeyword: string,
  tableSchema: string,
  sampleInput: string,
  sampleOutput: string,
  hint: string,
  solution: string
): SqlChallengeTask {
  return {
    id: topicId * 100 + taskNumber,
    taskNumber,
    title,
    points,
    successRate,
    skill,
    difficulty,
    problemStatement,
    highlightedKeyword,
    tableSchema,
    sampleInput,
    sampleOutput,
    starterCode: '-- Write your SQL query here\n',
    hint,
    solution,
    testCases: [
      {
        inputDesc: 'Sample dataset execution',
        expected: sampleOutput,
        hidden: false
      },
      {
        inputDesc: 'Edge case (null / empty check)',
        expected: 'Valid relational result set structure',
        hidden: true
      },
      {
        inputDesc: 'Large volume execution benchmark',
        expected: 'Deterministic ordering & column projection',
        hidden: true
      }
    ]
  };
}

// ─────────────────────────────────────────────────────────────
// 1. SELECT Basics (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_1_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(1, 1, 'Select All Columns from Employees', 'Easy', 'SQL Basics', 5, '98.2%',
    'Write a SQL query to retrieve all columns and all records from the employees table.',
    'SELECT *',
    'employees (emp_id INT, first_name VARCHAR, last_name VARCHAR, department VARCHAR, salary INT)',
    'emp_id | first_name | last_name | department  | salary\n101    | Rahul      | Sharma    | Engineering | 85000\n102    | Priya      | Patel     | Marketing   | 62000\n103    | Amit       | Verma     | Engineering | 91000',
    'emp_id | first_name | last_name | department  | salary\n101    | Rahul      | Sharma    | Engineering | 85000\n102    | Priya      | Patel     | Marketing   | 62000\n103    | Amit       | Verma     | Engineering | 91000',
    'Use SELECT * FROM employees;',
    'SELECT * FROM employees;'),
  makeSqlTask(1, 2, 'Select Specific Columns: Name and Salary', 'Easy', 'SQL Basics', 5, '97.5%',
    'Retrieve only the first_name, last_name, and salary columns from the employees table.',
    'SELECT columns',
    'employees (emp_id INT, first_name VARCHAR, last_name VARCHAR, salary INT)',
    'first_name | last_name | salary\nRahul      | Sharma    | 85000\nPriya      | Patel     | 62000',
    'first_name | last_name | salary\nRahul      | Sharma    | 85000\nPriya      | Patel     | 62000',
    'List columns separated by commas: SELECT first_name, last_name, salary FROM employees;',
    'SELECT first_name, last_name, salary FROM employees;'),
  makeSqlTask(1, 3, 'Select Product Names and Unit Prices with Aliases', 'Easy', 'SQL Basics', 5, '96.1%',
    'Query the products table to return product_name as "Item" and unit_price as "Price".',
    'AS alias',
    'products (product_id INT, product_name VARCHAR, unit_price DECIMAL)',
    'Item       | Price\nLaptop     | 75000.00\nWireless Mouse | 1200.00',
    'Item       | Price\nLaptop     | 75000.00\nWireless Mouse | 1200.00',
    'Use the AS keyword: SELECT product_name AS Item, unit_price AS Price FROM products;',
    'SELECT product_name AS Item, unit_price AS Price FROM products;'),
  makeSqlTask(1, 4, 'Select Calculated Total Cost (Price * Quantity)', 'Easy', 'SQL Basics', 5, '94.8%',
    'Calculate the total revenue per item by multiplying price by quantity as total_cost.',
    'Arithmetic Expression',
    'order_items (item_id INT, price DECIMAL, quantity INT)',
    'item_id | total_cost\n1       | 500.00\n2       | 1200.00',
    'item_id | total_cost\n1       | 500.00\n2       | 1200.00',
    'SELECT item_id, (price * quantity) AS total_cost FROM order_items;',
    'SELECT item_id, (price * quantity) AS total_cost FROM order_items;'),
  makeSqlTask(1, 5, 'Select Constant Literals and Static Labels', 'Easy', 'SQL Basics', 5, '93.4%',
    'Select the company name "Future AI Corp" as company and the current version number 2050.',
    'Literal Values',
    'No table required or use dual',
    'company        | version\nFuture AI Corp | 2050',
    'company        | version\nFuture AI Corp | 2050',
    'SELECT \'Future AI Corp\' AS company, 2050 AS version;',
    'SELECT \'Future AI Corp\' AS company, 2050 AS version;')
];

// ─────────────────────────────────────────────────────────────
// 2. WHERE Clause (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_2_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(2, 1, 'Filter Employees with Salary Greater Than 70000', 'Easy', 'Data Querying', 5, '96.5%',
    'Find all employees whose salary is strictly greater than 70000.',
    'WHERE salary > 70000',
    'employees (emp_id INT, name VARCHAR, salary INT)',
    'emp_id | name  | salary\n101    | Rahul | 85000\n103    | Amit  | 91000',
    'emp_id | name  | salary\n101    | Rahul | 85000\n103    | Amit  | 91000',
    'Use WHERE salary > 70000;',
    'SELECT * FROM employees WHERE salary > 70000;'),
  makeSqlTask(2, 2, 'Filter by Department and Location using AND', 'Easy', 'Data Querying', 5, '95.0%',
    'Find employees who work in the "Engineering" department AND are located in "Bengaluru".',
    'WHERE ... AND ...',
    'employees (emp_id INT, name VARCHAR, department VARCHAR, city VARCHAR)',
    'emp_id | name  | department  | city\n101    | Rahul | Engineering | Bengaluru',
    'emp_id | name  | department  | city\n101    | Rahul | Engineering | Bengaluru',
    'WHERE department = \'Engineering\' AND city = \'Bengaluru\';',
    'SELECT * FROM employees WHERE department = \'Engineering\' AND city = \'Bengaluru\';'),
  makeSqlTask(2, 3, 'Filter Records with OR Condition', 'Easy', 'Data Querying', 5, '94.2%',
    'Select orders with status equal to either "PENDING" or "PROCESSING".',
    'WHERE ... OR ...',
    'orders (order_id INT, amount DECIMAL, status VARCHAR)',
    'order_id | amount | status\n501      | 3400   | PENDING\n503      | 1200   | PROCESSING',
    'order_id | amount | status\n501      | 3400   | PENDING\n503      | 1200   | PROCESSING',
    'WHERE status = \'PENDING\' OR status = \'PROCESSING\';',
    'SELECT * FROM orders WHERE status = \'PENDING\' OR status = \'PROCESSING\';'),
  makeSqlTask(2, 4, 'Filter Numbers in a Range using BETWEEN', 'Easy', 'Data Querying', 5, '93.1%',
    'Find products with price between 1000 and 5000 inclusive.',
    'BETWEEN ... AND ...',
    'products (product_id INT, name VARCHAR, price DECIMAL)',
    'product_id | name     | price\n12         | Keyboard | 2500\n14         | Mouse    | 1200',
    'product_id | name     | price\n12         | Keyboard | 2500\n14         | Mouse    | 1200',
    'WHERE price BETWEEN 1000 AND 5000;',
    'SELECT * FROM products WHERE price BETWEEN 1000 AND 5000;'),
  makeSqlTask(2, 5, 'Filter Using IN Operator for Multiple IDs', 'Easy', 'Data Querying', 5, '95.8%',
    'Retrieve details of customers whose customer_id is 101, 105, or 109.',
    'IN (...)',
    'customers (customer_id INT, name VARCHAR, country VARCHAR)',
    'customer_id | name    | country\n101         | Neha    | India\n105         | Vikram  | India',
    'customer_id | name    | country\n101         | Neha    | India\n105         | Vikram  | India',
    'WHERE customer_id IN (101, 105, 109);',
    'SELECT * FROM customers WHERE customer_id IN (101, 105, 109);')
];

// ─────────────────────────────────────────────────────────────
// 3. ORDER BY (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_3_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(3, 1, 'Sort Employees by Salary Descending', 'Easy', 'SQL Basics', 5, '97.1%',
    'List all employees sorted from the highest salary to the lowest salary.',
    'ORDER BY ... DESC',
    'employees (emp_id INT, name VARCHAR, salary INT)',
    'emp_id | name   | salary\n103    | Amit   | 91000\n101    | Rahul  | 85000\n102    | Priya  | 62000',
    'emp_id | name   | salary\n103    | Amit   | 91000\n101    | Rahul  | 85000\n102    | Priya  | 62000',
    'ORDER BY salary DESC;',
    'SELECT * FROM employees ORDER BY salary DESC;'),
  makeSqlTask(3, 2, 'Sort by Department Ascending and Salary Descending', 'Easy', 'SQL Basics', 5, '94.7%',
    'Sort employees alphabetically by department name, then by salary in descending order within each department.',
    'Multi-column sort',
    'employees (emp_id INT, name VARCHAR, department VARCHAR, salary INT)',
    'name   | department  | salary\nAmit   | Engineering | 91000\nRahul  | Engineering | 85000\nPriya  | Marketing   | 62000',
    'name   | department  | salary\nAmit   | Engineering | 91000\nRahul  | Engineering | 85000\nPriya  | Marketing   | 62000',
    'ORDER BY department ASC, salary DESC;',
    'SELECT * FROM employees ORDER BY department ASC, salary DESC;'),
  makeSqlTask(3, 3, 'Sort by Calculated Column Alias', 'Easy', 'SQL Basics', 5, '93.5%',
    'Calculate annual_bonus as salary * 0.15 and sort the result by annual_bonus descending.',
    'ORDER BY alias',
    'employees (name VARCHAR, salary INT)',
    'name  | annual_bonus\nAmit  | 13650.0\nRahul | 12750.0',
    'name  | annual_bonus\nAmit  | 13650.0\nRahul | 12750.0',
    'SELECT name, salary * 0.15 AS annual_bonus FROM employees ORDER BY annual_bonus DESC;',
    'SELECT name, salary * 0.15 AS annual_bonus FROM employees ORDER BY annual_bonus DESC;'),
  makeSqlTask(3, 4, 'Sort Customers by Registration Date Chronologically', 'Easy', 'SQL Basics', 5, '95.2%',
    'Retrieve all customers ordered from newest joined to oldest joined.',
    'ORDER BY joined_date DESC',
    'customers (customer_id INT, name VARCHAR, joined_date DATE)',
    'customer_id | name  | joined_date\n204         | Sara  | 2024-03-15\n101         | Rahul | 2022-01-10',
    'customer_id | name  | joined_date\n204         | Sara  | 2024-03-15\n101         | Rahul | 2022-01-10',
    'ORDER BY joined_date DESC;',
    'SELECT * FROM customers ORDER BY joined_date DESC;'),
  makeSqlTask(3, 5, 'Sort with NULLS LAST or ISNULL Precedence', 'Easy', 'SQL Basics', 5, '91.8%',
    'Display products sorted by discount percentage in descending order with NULL discounts appearing at the end.',
    'NULLS LAST',
    'products (product_id INT, name VARCHAR, discount INT)',
    'name    | discount\nMonitor | 20\nLaptop  | 10\nMouse   | NULL',
    'name    | discount\nMonitor | 20\nLaptop  | 10\nMouse   | NULL',
    'ORDER BY discount DESC NULLS LAST;',
    'SELECT name, discount FROM products ORDER BY discount DESC NULLS LAST;')
];

// ─────────────────────────────────────────────────────────────
// 4. Aggregate Functions (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_4_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(4, 1, 'Calculate Total, Average, Min and Max Salary', 'Easy', 'Aggregation', 5, '96.2%',
    'Find the SUM, AVG, MIN, and MAX salary across all employees in the organization.',
    'SUM, AVG, MIN, MAX',
    'employees (emp_id INT, salary INT)',
    'total_salary | avg_salary | min_salary | max_salary\n238000       | 79333.33   | 62000      | 91000',
    'total_salary | avg_salary | min_salary | max_salary\n238000       | 79333.33   | 62000      | 91000',
    'SELECT SUM(salary) AS total_salary, AVG(salary) AS avg_salary, MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;',
    'SELECT SUM(salary) AS total_salary, AVG(salary) AS avg_salary, MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;'),
  makeSqlTask(4, 2, 'Count Total Number of Active Orders', 'Easy', 'Aggregation', 5, '97.0%',
    'Count the total number of orders placed in the orders table.',
    'COUNT(*)',
    'orders (order_id INT, customer_id INT, amount DECIMAL)',
    'total_orders\n1420',
    'total_orders\n1420',
    'SELECT COUNT(*) AS total_orders FROM orders;',
    'SELECT COUNT(*) AS total_orders FROM orders;'),
  makeSqlTask(4, 3, 'Count Non-Null Values in Commission Column', 'Easy', 'Aggregation', 5, '94.1%',
    'Count the number of sales representatives who have a non-null commission percentage.',
    'COUNT(commission)',
    'sales_reps (rep_id INT, name VARCHAR, commission DECIMAL)',
    'reps_with_commission\n18',
    'reps_with_commission\n18',
    'SELECT COUNT(commission) AS reps_with_commission FROM sales_reps;',
    'SELECT COUNT(commission) AS reps_with_commission FROM sales_reps;'),
  makeSqlTask(4, 4, 'Find Average Order Value Rounded to 2 Decimals', 'Easy', 'Aggregation', 5, '92.9%',
    'Compute the average order amount rounded to two decimal places.',
    'ROUND(AVG(...), 2)',
    'orders (order_id INT, amount DECIMAL)',
    'average_amount\n1249.50',
    'average_amount\n1249.50',
    'SELECT ROUND(AVG(amount), 2) AS average_amount FROM orders;',
    'SELECT ROUND(AVG(amount), 2) AS average_amount FROM orders;'),
  makeSqlTask(4, 5, 'Count Distinct Cities Where Customers Reside', 'Easy', 'Aggregation', 5, '95.3%',
    'Count how many unique cities have at least one registered customer.',
    'COUNT(DISTINCT city)',
    'customers (customer_id INT, city VARCHAR)',
    'unique_cities\n45',
    'unique_cities\n45',
    'SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;',
    'SELECT COUNT(DISTINCT city) AS unique_cities FROM customers;')
];

// ─────────────────────────────────────────────────────────────
// 5. GROUP BY (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_5_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(5, 1, 'Total Salary and Employee Count by Department', 'Medium', 'Aggregation', 10, '91.4%',
    'Calculate the total salary payout and number of employees for each department.',
    'GROUP BY department',
    'employees (emp_id INT, department VARCHAR, salary INT)',
    'department  | total_payout | emp_count\nEngineering | 176000       | 2\nMarketing   | 62000        | 1',
    'department  | total_payout | emp_count\nEngineering | 176000       | 2\nMarketing   | 62000        | 1',
    'SELECT department, SUM(salary) AS total_payout, COUNT(*) AS emp_count FROM employees GROUP BY department;',
    'SELECT department, SUM(salary) AS total_payout, COUNT(*) AS emp_count FROM employees GROUP BY department;'),
  makeSqlTask(5, 2, 'Average Order Amount by Customer', 'Medium', 'Aggregation', 10, '89.6%',
    'Find each customer_id and their average purchase order amount, sorted descending by average amount.',
    'GROUP BY customer_id',
    'orders (order_id INT, customer_id INT, amount DECIMAL)',
    'customer_id | avg_order\n101         | 4500.00\n104         | 2100.50',
    'customer_id | avg_order\n101         | 4500.00\n104         | 2100.50',
    'SELECT customer_id, AVG(amount) AS avg_order FROM orders GROUP BY customer_id ORDER BY avg_order DESC;',
    'SELECT customer_id, AVG(amount) AS avg_order FROM orders GROUP BY customer_id ORDER BY avg_order DESC;'),
  makeSqlTask(5, 3, 'Group by Year and Month of Sale', 'Medium', 'Aggregation', 10, '87.2%',
    'Extract the year and month from order_date and summarize total sales revenue.',
    'GROUP BY EXTRACT(...)',
    'orders (order_id INT, order_date DATE, total_amount DECIMAL)',
    'sale_year | sale_month | monthly_revenue\n2024      | 1          | 850000.00\n2024      | 2          | 920000.00',
    'sale_year | sale_month | monthly_revenue\n2024      | 1          | 850000.00\n2024      | 2          | 920000.00',
    'SELECT EXTRACT(YEAR FROM order_date) AS sale_year, EXTRACT(MONTH FROM order_date) AS sale_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY sale_year, sale_month;',
    'SELECT EXTRACT(YEAR FROM order_date) AS sale_year, EXTRACT(MONTH FROM order_date) AS sale_month, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY 1, 2;'),
  makeSqlTask(5, 4, 'Count Products by Category and Availability Status', 'Medium', 'Aggregation', 10, '88.5%',
    'Group products by category and in_stock status to get total count per segment.',
    'Multiple Grouping Columns',
    'products (product_id INT, category VARCHAR, in_stock BOOLEAN)',
    'category    | in_stock | total_items\nElectronics | true     | 35\nElectronics | false    | 8',
    'category    | in_stock | total_items\nElectronics | true     | 35\nElectronics | false    | 8',
    'SELECT category, in_stock, COUNT(*) AS total_items FROM products GROUP BY category, in_stock;',
    'SELECT category, in_stock, COUNT(*) AS total_items FROM products GROUP BY category, in_stock;'),
  makeSqlTask(5, 5, 'Find Maximum and Minimum Price in Each Product Brand', 'Medium', 'Aggregation', 10, '90.1%',
    'For each brand, show the brand name, lowest price, and highest price.',
    'GROUP BY brand',
    'products (brand VARCHAR, price DECIMAL)',
    'brand | min_price | max_price\nApple | 45000     | 180000\nDell  | 35000     | 120000',
    'brand | min_price | max_price\nApple | 45000     | 180000\nDell  | 35000     | 120000',
    'SELECT brand, MIN(price) AS min_price, MAX(price) AS max_price FROM products GROUP BY brand;',
    'SELECT brand, MIN(price) AS min_price, MAX(price) AS max_price FROM products GROUP BY brand;')
];

// ─────────────────────────────────────────────────────────────
// 6. HAVING Clause (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_6_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(6, 1, 'Filter Departments with More than 5 Employees', 'Medium', 'Aggregation', 10, '88.9%',
    'Find all departments having strictly more than 5 employees.',
    'HAVING COUNT(*) > 5',
    'employees (emp_id INT, department VARCHAR)',
    'department  | emp_count\nEngineering | 18\nOperations  | 7',
    'department  | emp_count\nEngineering | 18\nOperations  | 7',
    'SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department HAVING COUNT(*) > 5;',
    'SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department HAVING COUNT(*) > 5;'),
  makeSqlTask(6, 2, 'Departments with Average Salary Greater than 80000', 'Medium', 'Aggregation', 10, '87.4%',
    'List departments where the average employee salary exceeds 80000.',
    'HAVING AVG(salary) > 80000',
    'employees (emp_id INT, department VARCHAR, salary INT)',
    'department  | avg_salary\nEngineering | 88000.00\nExecutive   | 150000.00',
    'department  | avg_salary\nEngineering | 88000.00\nExecutive   | 150000.00',
    'SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 80000;',
    'SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 80000;'),
  makeSqlTask(6, 3, 'Customers with More Than 3 Orders and Total Spending > 5000', 'Medium', 'Aggregation', 10, '85.6%',
    'Identify VIP customers who placed more than 3 orders and spent in total over 5000.',
    'HAVING with multiple conditions',
    'orders (order_id INT, customer_id INT, amount DECIMAL)',
    'customer_id | total_spent | order_count\n101         | 7400.00     | 4\n109         | 9200.00     | 6',
    'customer_id | total_spent | order_count\n101         | 7400.00     | 4\n109         | 9200.00     | 6',
    'SELECT customer_id, SUM(amount) AS total_spent, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 3 AND SUM(amount) > 5000;',
    'SELECT customer_id, SUM(amount) AS total_spent, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 3 AND SUM(amount) > 5000;'),
  makeSqlTask(6, 4, 'Categories with Minimum Price Above 500', 'Medium', 'Aggregation', 10, '89.2%',
    'Select categories where even the lowest-priced product is greater than 500.',
    'HAVING MIN(price) > 500',
    'products (category VARCHAR, price DECIMAL)',
    'category    | min_price\nLaptops     | 35000.00\nSmartphones | 12000.00',
    'category    | min_price\nLaptops     | 35000.00\nSmartphones | 12000.00',
    'SELECT category, MIN(price) AS min_price FROM products GROUP BY category HAVING MIN(price) > 500;',
    'SELECT category, MIN(price) AS min_price FROM products GROUP BY category HAVING MIN(price) > 500;'),
  makeSqlTask(6, 5, 'Cities with Total Sales Exceeding 100,000', 'Medium', 'Aggregation', 10, '86.5%',
    'Display customer cities where total customer billing exceeds 100,000.',
    'HAVING SUM(amount) > 100000',
    'orders join customers (city VARCHAR, amount DECIMAL)',
    'city      | total_sales\nMumbai    | 240000.00\nBengaluru | 310000.00',
    'city      | total_sales\nMumbai    | 240000.00\nBengaluru | 310000.00',
    'SELECT c.city, SUM(o.amount) AS total_sales FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.city HAVING SUM(o.amount) > 100000;',
    'SELECT c.city, SUM(o.amount) AS total_sales FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.city HAVING SUM(o.amount) > 100000;')
];

// ─────────────────────────────────────────────────────────────
// 7. JOIN Operations (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_7_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(7, 1, 'Join Customers and Orders with Customer Details', 'Medium', 'Joins', 10, '90.2%',
    'Retrieve customer name, order_id, order_date, and amount by joining customers and orders.',
    'JOIN customers AND orders',
    'customers (customer_id, name), orders (order_id, customer_id, order_date, amount)',
    'name  | order_id | order_date | amount\nRahul | 5001     | 2024-02-01 | 1500.00\nPriya | 5002     | 2024-02-03 | 2400.00',
    'name  | order_id | order_date | amount\nRahul | 5001     | 2024-02-01 | 1500.00\nPriya | 5002     | 2024-02-03 | 2400.00',
    'SELECT c.name, o.order_id, o.order_date, o.amount FROM customers c JOIN orders o ON c.customer_id = o.customer_id;',
    'SELECT c.name, o.order_id, o.order_date, o.amount FROM customers c JOIN orders o ON c.customer_id = o.customer_id;'),
  makeSqlTask(7, 2, 'Join Employees and Departments by Department ID', 'Medium', 'Joins', 10, '91.8%',
    'Match employees with their corresponding department name from the departments table.',
    'JOIN on dept_id',
    'employees (emp_id, name, dept_id), departments (dept_id, dept_name)',
    'emp_id | name  | dept_name\n101    | Rahul | Software Development\n102    | Priya | Brand Marketing',
    'emp_id | name  | dept_name\n101    | Rahul | Software Development\n102    | Priya | Brand Marketing',
    'SELECT e.emp_id, e.name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id;',
    'SELECT e.emp_id, e.name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id;'),
  makeSqlTask(7, 3, 'Find Total Spending per Customer via Join & Aggregation', 'Medium', 'Joins', 10, '88.3%',
    'Show each customer name and their cumulative expenditure from orders.',
    'JOIN + GROUP BY',
    'customers (customer_id, name), orders (customer_id, amount)',
    'name  | total_spent\nRahul | 14500.00\nPriya | 8900.00',
    'name  | total_spent\nRahul | 14500.00\nPriya | 8900.00',
    'SELECT c.name, SUM(o.amount) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.name;',
    'SELECT c.name, SUM(o.amount) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.name;'),
  makeSqlTask(7, 4, '3-Table Join: Customer, Order, and Order Items', 'Medium', 'Joins', 10, '84.9%',
    'Join customers, orders, and order_items to find which products were bought by "Rahul".',
    'Multiple Table Joins',
    'customers, orders, order_items, products',
    'customer_name | order_id | product_name\nRahul         | 5001     | Wireless Mouse\nRahul         | 5001     | Mechanical Keyboard',
    'customer_name | order_id | product_name\nRahul         | 5001     | Wireless Mouse\nRahul         | 5001     | Mechanical Keyboard',
    'SELECT c.name AS customer_name, o.order_id, p.product_name FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id JOIN products p ON oi.product_id = p.product_id WHERE c.name = \'Rahul\';',
    'SELECT c.name AS customer_name, o.order_id, p.product_name FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id JOIN products p ON oi.product_id = p.product_id WHERE c.name = \'Rahul\';'),
  makeSqlTask(7, 5, 'Cross Join for Matrix Combination', 'Medium', 'Joins', 10, '86.1%',
    'Generate all possible combinations of sizes and colors using a CROSS JOIN.',
    'CROSS JOIN',
    'sizes (size_name), colors (color_name)',
    'size_name | color_name\nS         | Red\nS         | Blue\nM         | Red\nM         | Blue',
    'size_name | color_name\nS         | Red\nS         | Blue\nM         | Red\nM         | Blue',
    'SELECT s.size_name, c.color_name FROM sizes s CROSS JOIN colors c;',
    'SELECT s.size_name, c.color_name FROM sizes s CROSS JOIN colors c;')
];

// ─────────────────────────────────────────────────────────────
// 8. Subqueries (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_8_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(8, 1, 'Find Employees Earning Above Average Salary', 'Medium', 'Subqueries', 10, '87.2%',
    'Retrieve all employees whose salary is strictly greater than the overall company average salary.',
    'WHERE salary > (SELECT AVG(...))',
    'employees (emp_id INT, name VARCHAR, salary INT)',
    'emp_id | name  | salary\n101    | Rahul | 85000\n103    | Amit  | 91000',
    'emp_id | name  | salary\n101    | Rahul | 85000\n103    | Amit  | 91000',
    'Use a scalar subquery in WHERE: WHERE salary > (SELECT AVG(salary) FROM employees);',
    'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);'),
  makeSqlTask(8, 2, 'Find Customers Who Have Never Placed an Order', 'Medium', 'Subqueries', 10, '88.5%',
    'Find customer records whose customer_id does NOT appear in the orders table.',
    'WHERE customer_id NOT IN (SELECT ...)',
    'customers (customer_id, name), orders (customer_id)',
    'customer_id | name\n105         | Deepa\n108         | Manish',
    'customer_id | name\n105         | Deepa\n108         | Manish',
    'SELECT customer_id, name FROM customers WHERE customer_id NOT IN (SELECT DISTINCT customer_id FROM orders WHERE customer_id IS NOT NULL);',
    'SELECT customer_id, name FROM customers WHERE customer_id NOT IN (SELECT DISTINCT customer_id FROM orders WHERE customer_id IS NOT NULL);'),
  makeSqlTask(8, 3, 'Correlated Subquery: Top Earner in Each Department', 'Medium', 'Subqueries', 10, '82.1%',
    'Find employees who earn the highest salary within their own department.',
    'Correlated subquery',
    'employees (emp_id, name, department, salary)',
    'emp_id | name  | department  | salary\n103    | Amit  | Engineering | 91000\n107    | Sneha | Marketing   | 78000',
    'emp_id | name  | department  | salary\n103    | Amit  | Engineering | 91000\n107    | Sneha | Marketing   | 78000',
    'WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e2.department = e1.department)',
    'SELECT * FROM employees e1 WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e2.department = e1.department);'),
  makeSqlTask(8, 4, 'Subquery in FROM Clause (Derived Table)', 'Medium', 'Subqueries', 10, '85.4%',
    'Calculate the average of total departmental payrolls using a derived table.',
    'FROM (SELECT ... GROUP BY ...) AS dt',
    'employees (department, salary)',
    'avg_dept_spend\n119000.00',
    'avg_dept_spend\n119000.00',
    'SELECT AVG(dept_total) AS avg_dept_spend FROM (SELECT department, SUM(salary) AS dept_total FROM employees GROUP BY department) AS dt;',
    'SELECT AVG(dept_total) AS avg_dept_spend FROM (SELECT department, SUM(salary) AS dept_total FROM employees GROUP BY department) AS dt;'),
  makeSqlTask(8, 5, 'Find Products Priced Higher than All Accessories', 'Medium', 'Subqueries', 10, '84.0%',
    'Find products whose price is strictly greater than ALL products in the "Accessories" category.',
    '> ALL (SELECT ...)',
    'products (product_id, name, category, price)',
    'product_id | name   | price\n1          | Laptop | 75000',
    'product_id | name   | price\n1          | Laptop | 75000',
    'WHERE price > ALL (SELECT price FROM products WHERE category = \'Accessories\');',
    'SELECT * FROM products WHERE price > ALL (SELECT price FROM products WHERE category = \'Accessories\');')
];

// ─────────────────────────────────────────────────────────────
// 9. Window Functions (Advanced)
// ─────────────────────────────────────────────────────────────
const TOPIC_9_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(9, 1, 'Rank Employees by Salary within Department using DENSE_RANK()', 'Hard', 'Window Functions', 15, '79.2%',
    'Assign a dense rank to employees within each department based on salary in descending order.',
    'DENSE_RANK() OVER (PARTITION BY ...)',
    'employees (emp_id, name, department, salary)',
    'name  | department  | salary | dept_rank\nAmit  | Engineering | 91000  | 1\nRahul | Engineering | 85000  | 2',
    'name  | department  | salary | dept_rank\nAmit  | Engineering | 91000  | 1\nRahul | Engineering | 85000  | 2',
    'SELECT name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;',
    'SELECT name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;'),
  makeSqlTask(9, 2, 'Calculate Running Cumulative Sales using SUM() OVER()', 'Hard', 'Window Functions', 15, '81.4%',
    'Compute a running cumulative total of order amounts sorted chronologically by order_date.',
    'SUM(amount) OVER (ORDER BY ...)',
    'orders (order_id, order_date, amount)',
    'order_id | order_date | amount | running_total\n1        | 2024-01-01 | 1000   | 1000\n2        | 2024-01-02 | 2500   | 3500',
    'order_id | order_date | amount | running_total\n1        | 2024-01-01 | 1000   | 1000\n2        | 2024-01-02 | 2500   | 3500',
    'SELECT order_id, order_date, amount, SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM orders;',
    'SELECT order_id, order_date, amount, SUM(amount) OVER (ORDER BY order_date) AS running_total FROM orders;'),
  makeSqlTask(9, 3, 'Compare Current Month Sales with Previous Month using LAG()', 'Hard', 'Window Functions', 15, '76.8%',
    'Use LAG() to display each month’s sales along with the previous month’s sales.',
    'LAG(monthly_sales) OVER (...)',
    'monthly_sales (month_num INT, sales DECIMAL)',
    'month_num | sales   | prev_sales\n1         | 50000   | NULL\n2         | 62000   | 50000',
    'month_num | sales   | prev_sales\n1         | 50000   | NULL\n2         | 62000   | 50000',
    'SELECT month_num, sales, LAG(sales, 1) OVER (ORDER BY month_num) AS prev_sales FROM monthly_sales;',
    'SELECT month_num, sales, LAG(sales, 1) OVER (ORDER BY month_num) AS prev_sales FROM monthly_sales;'),
  makeSqlTask(9, 4, 'Segment Customers into Quartiles using NTILE(4)', 'Hard', 'Window Functions', 15, '78.5%',
    'Divide customers into 4 spending buckets (quartiles) based on their total spending.',
    'NTILE(4) OVER (...)',
    'customer_spending (customer_id, total_spent)',
    'customer_id | total_spent | quartile\n101         | 95000       | 1\n104         | 72000       | 1\n109         | 34000       | 2',
    'customer_id | total_spent | quartile\n101         | 95000       | 1\n104         | 72000       | 1\n109         | 34000       | 2',
    'SELECT customer_id, total_spent, NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile FROM customer_spending;',
    'SELECT customer_id, total_spent, NTILE(4) OVER (ORDER BY total_spent DESC) AS quartile FROM customer_spending;'),
  makeSqlTask(9, 5, 'Find Top 3 Highest Paid Employees per Department using ROW_NUMBER()', 'Hard', 'Window Functions', 15, '75.3%',
    'Using ROW_NUMBER(), select only the top 3 earners for each department.',
    'ROW_NUMBER() + subquery / CTE',
    'employees (emp_id, name, department, salary)',
    'name  | department  | salary | rank_num\nAmit  | Engineering | 91000  | 1\nRahul | Engineering | 85000  | 2\nVikas | Engineering | 80000  | 3',
    'name  | department  | salary | rank_num\nAmit  | Engineering | 91000  | 1\nRahul | Engineering | 85000  | 2\nVikas | Engineering | 80000  | 3',
    'WITH RankedEmps AS (SELECT name, department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank_num FROM employees) SELECT * FROM RankedEmps WHERE rank_num <= 3;',
    'WITH RankedEmps AS (SELECT name, department, salary, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) as rank_num FROM employees) SELECT * FROM RankedEmps WHERE rank_num <= 3;')
];

// ─────────────────────────────────────────────────────────────
// 10. CTE (Common Table Expressions) (Advanced)
// ─────────────────────────────────────────────────────────────
const TOPIC_10_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(10, 1, 'Basic CTE: High Value Orders', 'Hard', 'Advanced SQL', 15, '82.0%',
    'Define a CTE named HighValueOrders that selects orders with amount > 10000, then count how many customers are in that set.',
    'WITH HighValueOrders AS (...)',
    'orders (order_id, customer_id, amount)',
    'total_high_value_orders | distinct_customers\n42                      | 28',
    'total_high_value_orders | distinct_customers\n42                      | 28',
    'WITH HighValueOrders AS (SELECT * FROM orders WHERE amount > 10000) SELECT COUNT(*) AS total_high_value_orders, COUNT(DISTINCT customer_id) AS distinct_customers FROM HighValueOrders;',
    'WITH HighValueOrders AS (SELECT * FROM orders WHERE amount > 10000) SELECT COUNT(*) AS total_high_value_orders, COUNT(DISTINCT customer_id) AS distinct_customers FROM HighValueOrders;'),
  makeSqlTask(10, 2, 'Multiple CTEs: Department Avg vs Company Avg', 'Hard', 'Advanced SQL', 15, '79.5%',
    'Define two CTEs: one for DeptAvg and one for CompanyAvg, then show departments beating the company average.',
    'WITH CTE1 AS (...), CTE2 AS (...)',
    'employees (department, salary)',
    'department  | dept_avg\nEngineering | 88000.00',
    'department  | dept_avg\nEngineering | 88000.00',
    'WITH DeptAvg AS (SELECT department, AVG(salary) AS dept_avg FROM employees GROUP BY department), CompAvg AS (SELECT AVG(salary) AS overall_avg FROM employees) SELECT d.department, d.dept_avg FROM DeptAvg d, CompAvg c WHERE d.dept_avg > c.overall_avg;',
    'WITH DeptAvg AS (SELECT department, AVG(salary) AS dept_avg FROM employees GROUP BY department), CompAvg AS (SELECT AVG(salary) AS overall_avg FROM employees) SELECT d.department, d.dept_avg FROM DeptAvg d, CompAvg c WHERE d.dept_avg > c.overall_avg;'),
  makeSqlTask(10, 3, 'CTE with Aggregation and Join', 'Hard', 'Advanced SQL', 15, '81.2%',
    'Use a CTE to pre-aggregate customer orders, then join with customer profile details.',
    'WITH OrderSummary AS (...)',
    'customers (customer_id, name, email), orders (order_id, customer_id, amount)',
    'name  | email            | total_spend\nRahul | rahul@future.ai  | 14500.00',
    'name  | email            | total_spend\nRahul | rahul@future.ai  | 14500.00',
    'WITH OrderSummary AS (SELECT customer_id, SUM(amount) AS total_spend FROM orders GROUP BY customer_id) SELECT c.name, c.email, os.total_spend FROM customers c JOIN OrderSummary os ON c.customer_id = os.customer_id;',
    'WITH OrderSummary AS (SELECT customer_id, SUM(amount) AS total_spend FROM orders GROUP BY customer_id) SELECT c.name, c.email, os.total_spend FROM customers c JOIN OrderSummary os ON c.customer_id = os.customer_id;'),
  makeSqlTask(10, 4, 'Chained CTEs for Multi-step Analytics', 'Hard', 'Advanced SQL', 15, '77.3%',
    'Chain three CTEs to filter active users, calculate their monthly active days, and compute the cohort retention rate.',
    'Chained CTE pipeline',
    'user_logins (user_id, login_date)',
    'cohort_month | active_users | avg_days\n2024-01      | 1200         | 14.2',
    'cohort_month | active_users | avg_days\n2024-01      | 1200         | 14.2',
    'WITH ActiveUsers AS (SELECT DISTINCT user_id FROM user_logins), UserDays AS (SELECT user_id, COUNT(DISTINCT login_date) as days FROM user_logins GROUP BY user_id) SELECT \'2024-01\' AS cohort_month, COUNT(user_id) AS active_users, ROUND(AVG(days), 1) AS avg_days FROM UserDays;',
    'WITH ActiveUsers AS (SELECT DISTINCT user_id FROM user_logins), UserDays AS (SELECT user_id, COUNT(DISTINCT login_date) as days FROM user_logins GROUP BY user_id) SELECT \'2024-01\' AS cohort_month, COUNT(user_id) AS active_users, ROUND(AVG(days), 1) AS avg_days FROM UserDays;'),
  makeSqlTask(10, 5, 'CTE for De-duplicating Records', 'Hard', 'Advanced SQL', 15, '78.0%',
    'Use a CTE with ROW_NUMBER() to identify and flag duplicate emails in the contacts table.',
    'WITH RankedContacts AS (...)',
    'contacts (id, email, created_at)',
    'id | email           | duplicate_rank\n5  | test@example.com | 2',
    'id | email           | duplicate_rank\n5  | test@example.com | 2',
    'WITH RankedContacts AS (SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at ASC) as rn FROM contacts) SELECT id, email, rn AS duplicate_rank FROM RankedContacts WHERE rn > 1;',
    'WITH RankedContacts AS (SELECT id, email, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at ASC) as rn FROM contacts) SELECT id, email, rn AS duplicate_rank FROM RankedContacts WHERE rn > 1;')
];

// ─────────────────────────────────────────────────────────────
// 11. DISTINCT Keyword (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_11_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(11, 1, 'Select Unique Job Titles from Employees', 'Easy', 'SQL Basics', 5, '97.8%',
    'Retrieve all distinct job_title values available in the employees table without duplicates.',
    'SELECT DISTINCT',
    'employees (emp_id INT, job_title VARCHAR)',
    'job_title\nData Analyst\nSoftware Engineer\nProduct Manager',
    'job_title\nData Analyst\nSoftware Engineer\nProduct Manager',
    'SELECT DISTINCT job_title FROM employees;',
    'SELECT DISTINCT job_title FROM employees;'),
  makeSqlTask(11, 2, 'Distinct Combinations of Department and City', 'Easy', 'SQL Basics', 5, '95.5%',
    'Find all unique combinations of department and office_city.',
    'DISTINCT col1, col2',
    'departments (dept_id INT, department VARCHAR, office_city VARCHAR)',
    'department  | office_city\nEngineering | Bengaluru\nEngineering | Hyderabad\nMarketing   | Mumbai',
    'department  | office_city\nEngineering | Bengaluru\nEngineering | Hyderabad\nMarketing   | Mumbai',
    'SELECT DISTINCT department, office_city FROM departments;',
    'SELECT DISTINCT department, office_city FROM departments;'),
  makeSqlTask(11, 3, 'Count Unique Customer IDs in Orders', 'Easy', 'SQL Basics', 5, '96.2%',
    'Find how many individual customers have placed at least one order.',
    'COUNT(DISTINCT ...)',
    'orders (order_id INT, customer_id INT)',
    'unique_buyers\n382',
    'unique_buyers\n382',
    'SELECT COUNT(DISTINCT customer_id) AS unique_buyers FROM orders;',
    'SELECT COUNT(DISTINCT customer_id) AS unique_buyers FROM orders;'),
  makeSqlTask(11, 4, 'Distinct Countries with Active Subscriptions', 'Easy', 'SQL Basics', 5, '94.3%',
    'Select unique country names where customers have subscription_status = \'ACTIVE\'.',
    'DISTINCT with WHERE',
    'subscriptions (user_id INT, country VARCHAR, subscription_status VARCHAR)',
    'country\nIndia\nUnited States\nGermany',
    'country\nIndia\nUnited States\nGermany',
    'SELECT DISTINCT country FROM subscriptions WHERE subscription_status = \'ACTIVE\';',
    'SELECT DISTINCT country FROM subscriptions WHERE subscription_status = \'ACTIVE\';'),
  makeSqlTask(11, 5, 'Unique Product Brands Sorted Alphabetically', 'Easy', 'SQL Basics', 5, '95.0%',
    'Query unique brand names from products and sort them in alphabetical order.',
    'DISTINCT + ORDER BY',
    'products (brand VARCHAR)',
    'brand\nApple\nDell\nLenovo\nSamsung',
    'brand\nApple\nDell\nLenovo\nSamsung',
    'SELECT DISTINCT brand FROM products ORDER BY brand ASC;',
    'SELECT DISTINCT brand FROM products ORDER BY brand ASC;')
];

// ─────────────────────────────────────────────────────────────
// 12. LIMIT & OFFSET (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_12_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(12, 1, 'Retrieve Top 5 Highest-Paid Employees', 'Easy', 'SQL Basics', 5, '97.0%',
    'Fetch only the top 5 records of employees with the highest salaries.',
    'LIMIT 5',
    'employees (emp_id INT, name VARCHAR, salary INT)',
    'emp_id | name   | salary\n103    | Amit   | 91000\n101    | Rahul  | 85000\n109    | Rajesh | 82000\n114    | Priya  | 80000\n105    | Vikram | 79000',
    'emp_id | name   | salary\n103    | Amit   | 91000\n101    | Rahul  | 85000\n109    | Rajesh | 82000\n114    | Priya  | 80000\n105    | Vikram | 79000',
    'SELECT * FROM employees ORDER BY salary DESC LIMIT 5;',
    'SELECT * FROM employees ORDER BY salary DESC LIMIT 5;'),
  makeSqlTask(12, 2, 'Pagination: Page 2 of Products (Items 11 to 20)', 'Easy', 'SQL Basics', 5, '93.8%',
    'Skip the first 10 items and return the next 10 products sorted by product_id.',
    'LIMIT 10 OFFSET 10',
    'products (product_id INT, name VARCHAR, price DECIMAL)',
    'product_id | name           | price\n11         | USB Cable      | 299.00\n12         | Type-C Hub     | 1499.00',
    'product_id | name           | price\n11         | USB Cable      | 299.00\n12         | Type-C Hub     | 1499.00',
    'SELECT * FROM products ORDER BY product_id ASC LIMIT 10 OFFSET 10;',
    'SELECT * FROM products ORDER BY product_id ASC LIMIT 10 OFFSET 10;'),
  makeSqlTask(12, 3, 'Find the 2nd Highest Salary in the Company', 'Easy', 'SQL Basics', 5, '91.2%',
    'Using ORDER BY, LIMIT, and OFFSET, retrieve the exact 2nd highest distinct salary.',
    'LIMIT 1 OFFSET 1',
    'employees (salary INT)',
    'second_highest_salary\n85000',
    'second_highest_salary\n85000',
    'SELECT DISTINCT salary AS second_highest_salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;',
    'SELECT DISTINCT salary AS second_highest_salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;'),
  makeSqlTask(12, 4, 'Fetch Top 3 Most Recent Orders', 'Easy', 'SQL Basics', 5, '96.1%',
    'Select the 3 most recently created orders ordered by created_at descending.',
    'LIMIT 3',
    'orders (order_id INT, created_at TIMESTAMP, amount DECIMAL)',
    'order_id | created_at          | amount\n9042     | 2024-03-20 14:32:00 | 4500\n9041     | 2024-03-20 14:15:00 | 1200\n9040     | 2024-03-20 13:50:00 | 8900',
    'order_id | created_at          | amount\n9042     | 2024-03-20 14:32:00 | 4500\n9041     | 2024-03-20 14:15:00 | 1200\n9040     | 2024-03-20 13:50:00 | 8900',
    'SELECT * FROM orders ORDER BY created_at DESC LIMIT 3;',
    'SELECT * FROM orders ORDER BY created_at DESC LIMIT 3;'),
  makeSqlTask(12, 5, 'Top 1 Most Frequent Customer', 'Easy', 'SQL Basics', 5, '94.5%',
    'Find the customer_id with the highest number of orders using LIMIT 1.',
    'ORDER BY COUNT(*) DESC LIMIT 1',
    'orders (customer_id INT)',
    'customer_id | order_count\n101         | 24',
    'customer_id | order_count\n101         | 24',
    'SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id ORDER BY order_count DESC LIMIT 1;',
    'SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id ORDER BY order_count DESC LIMIT 1;')
];

// ─────────────────────────────────────────────────────────────
// 13. LIKE Operator (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_13_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(13, 1, 'Find Customers Whose Name Starts with "A"', 'Easy', 'Data Querying', 5, '97.5%',
    'Query customers whose first_name starts with the capital letter "A".',
    'LIKE \'A%\'',
    'customers (customer_id INT, first_name VARCHAR)',
    'customer_id | first_name\n103         | Amit\n108         | Ananya',
    'customer_id | first_name\n103         | Amit\n108         | Ananya',
    'SELECT * FROM customers WHERE first_name LIKE \'A%\';',
    'SELECT * FROM customers WHERE first_name LIKE \'A%\';'),
  makeSqlTask(13, 2, 'Find Emails Ending in "@gmail.com"', 'Easy', 'Data Querying', 5, '96.3%',
    'Filter users whose email domain ends with @gmail.com.',
    'LIKE \'%@gmail.com\'',
    'users (user_id INT, email VARCHAR)',
    'user_id | email\n1       | rahul.sharma@gmail.com\n4       | priya.p@gmail.com',
    'user_id | email\n1       | rahul.sharma@gmail.com\n4       | priya.p@gmail.com',
    'SELECT * FROM users WHERE email LIKE \'%@gmail.com\';',
    'SELECT * FROM users WHERE email LIKE \'%@gmail.com\';'),
  makeSqlTask(13, 3, 'Find Products Containing "Pro" in Name', 'Easy', 'Data Querying', 5, '95.1%',
    'Find all items containing the word substring "Pro" anywhere in product_name.',
    'LIKE \'%Pro%\'',
    'products (product_id INT, product_name VARCHAR)',
    'product_id | product_name\n1          | MacBook Pro 16\n4          | iPhone 15 Pro',
    'product_id | product_name\n1          | MacBook Pro 16\n4          | iPhone 15 Pro',
    'SELECT * FROM products WHERE product_name LIKE \'%Pro%\';',
    'SELECT * FROM products WHERE product_name LIKE \'%Pro%\';'),
  makeSqlTask(13, 4, 'Match Fixed Length Pattern using Underscore Wildcard', 'Easy', 'Data Querying', 5, '92.4%',
    'Find 5-character postal codes that start with "56" followed by exactly 3 digits.',
    'LIKE \'56___\'',
    'addresses (address_id INT, postal_code VARCHAR)',
    'address_id | postal_code\n201        | 56001\n205        | 56004',
    'address_id | postal_code\n201        | 56001\n205        | 56004',
    'SELECT * FROM addresses WHERE postal_code LIKE \'56___\';',
    'SELECT * FROM addresses WHERE postal_code LIKE \'56___\';'),
  makeSqlTask(13, 5, 'Case-Insensitive Pattern Match using ILIKE / LOWER', 'Easy', 'Data Querying', 5, '93.7%',
    'Search for job titles containing "developer" regardless of upper or lower case.',
    'ILIKE or LOWER(title) LIKE',
    'jobs (job_id INT, title VARCHAR)',
    'job_id | title\n10     | React Developer\n14     | SENIOR PYTHON DEVELOPER',
    'job_id | title\n10     | React Developer\n14     | SENIOR PYTHON DEVELOPER',
    'SELECT * FROM jobs WHERE LOWER(title) LIKE \'%developer%\';',
    'SELECT * FROM jobs WHERE LOWER(title) LIKE \'%developer%\';')
];

// ─────────────────────────────────────────────────────────────
// 14. IS NULL / IS NOT NULL (Basic)
// ─────────────────────────────────────────────────────────────
const TOPIC_14_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(14, 1, 'Find Employees Without a Assigned Manager', 'Easy', 'SQL Basics', 5, '96.8%',
    'Identify top-level executives who have manager_id IS NULL.',
    'IS NULL',
    'employees (emp_id INT, name VARCHAR, manager_id INT)',
    'emp_id | name     | manager_id\n1      | CEO Boss | NULL',
    'emp_id | name     | manager_id\n1      | CEO Boss | NULL',
    'SELECT * FROM employees WHERE manager_id IS NULL;',
    'SELECT * FROM employees WHERE manager_id IS NULL;'),
  makeSqlTask(14, 2, 'Filter Customers with a Verified Phone Number', 'Easy', 'SQL Basics', 5, '95.4%',
    'Retrieve all customer accounts where phone_number IS NOT NULL.',
    'IS NOT NULL',
    'customers (customer_id INT, name VARCHAR, phone_number VARCHAR)',
    'customer_id | name  | phone_number\n101         | Rahul | +91-9876543210\n102         | Priya | +91-9123456789',
    'customer_id | name  | phone_number\n101         | Rahul | +91-9876543210\n102         | Priya | +91-9123456789',
    'SELECT * FROM customers WHERE phone_number IS NOT NULL;',
    'SELECT * FROM customers WHERE phone_number IS NOT NULL;'),
  makeSqlTask(14, 3, 'Replace NULL Values using COALESCE', 'Easy', 'SQL Basics', 5, '94.2%',
    'Return customer name and phone, displaying "Not Provided" if the phone is null.',
    'COALESCE(phone, \'Not Provided\')',
    'customers (name VARCHAR, phone VARCHAR)',
    'name   | contact_phone\nRahul  | +91-9876543210\nDeepak | Not Provided',
    'name   | contact_phone\nRahul  | +91-9876543210\nDeepak | Not Provided',
    'SELECT name, COALESCE(phone, \'Not Provided\') AS contact_phone FROM customers;',
    'SELECT name, COALESCE(phone, \'Not Provided\') AS contact_phone FROM customers;'),
  makeSqlTask(14, 4, 'Count Number of Missing Delivery Dates', 'Easy', 'SQL Basics', 5, '95.0%',
    'Count how many placed orders have not yet been delivered (delivery_date IS NULL).',
    'COUNT with IS NULL',
    'orders (order_id INT, delivery_date DATE)',
    'undelivered_orders\n34',
    'undelivered_orders\n34',
    'SELECT COUNT(*) AS undelivered_orders FROM orders WHERE delivery_date IS NULL;',
    'SELECT COUNT(*) AS undelivered_orders FROM orders WHERE delivery_date IS NULL;'),
  makeSqlTask(14, 5, 'Filter Records Where Either Column is NULL', 'Easy', 'SQL Basics', 5, '93.0%',
    'Find user profiles missing either bio or avatar_url.',
    'col1 IS NULL OR col2 IS NULL',
    'profiles (user_id INT, bio TEXT, avatar_url VARCHAR)',
    'user_id | bio  | avatar_url\n102     | NULL | https://img.png\n105     | Dev  | NULL',
    'user_id | bio  | avatar_url\n102     | NULL | https://img.png\n105     | Dev  | NULL',
    'SELECT * FROM profiles WHERE bio IS NULL OR avatar_url IS NULL;',
    'SELECT * FROM profiles WHERE bio IS NULL OR avatar_url IS NULL;')
];

// ─────────────────────────────────────────────────────────────
// 15. UNION & UNION ALL (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_15_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(15, 1, 'Combine Customer and Supplier Cities using UNION', 'Medium', 'Set Operations', 10, '89.4%',
    'Get a combined, deduplicated list of all cities where customers or suppliers reside.',
    'UNION',
    'customers (city VARCHAR), suppliers (city VARCHAR)',
    'city\nBengaluru\nMumbai\nDelhi\nHyderabad',
    'city\nBengaluru\nMumbai\nDelhi\nHyderabad',
    'SELECT city FROM customers UNION SELECT city FROM suppliers;',
    'SELECT city FROM customers UNION SELECT city FROM suppliers;'),
  makeSqlTask(15, 2, 'Combine All Transactions without Deduplication using UNION ALL', 'Medium', 'Set Operations', 10, '91.2%',
    'Combine domestic_orders and international_orders retaining all duplicate transaction rows.',
    'UNION ALL',
    'domestic_orders (txn_id, amount), international_orders (txn_id, amount)',
    'txn_id | amount\n1001   | 5000\n1002   | 3200\n2001   | 14500',
    'txn_id | amount\n1001   | 5000\n1002   | 3200\n2001   | 14500',
    'SELECT txn_id, amount FROM domestic_orders UNION ALL SELECT txn_id, amount FROM international_orders;',
    'SELECT txn_id, amount FROM domestic_orders UNION ALL SELECT txn_id, amount FROM international_orders;'),
  makeSqlTask(15, 3, 'Tag Source Table in Combined Result', 'Medium', 'Set Operations', 10, '88.7%',
    'Combine clients and leads into one list with a column "source" labeled as \'Client\' or \'Lead\'.',
    'UNION with static literal',
    'clients (id, name), leads (id, name)',
    'id | name  | source\n1  | Rahul | Client\n10 | Ankit | Lead',
    'id | name  | source\n1  | Rahul | Client\n10 | Ankit | Lead',
    'SELECT id, name, \'Client\' AS source FROM clients UNION ALL SELECT id, name, \'Lead\' AS source FROM leads;',
    'SELECT id, name, \'Client\' AS source FROM clients UNION ALL SELECT id, name, \'Lead\' AS source FROM leads;'),
  makeSqlTask(15, 4, 'Sort Combined UNION Result by Order Date', 'Medium', 'Set Operations', 10, '87.1%',
    'Union online and in-store purchases and sort the final combined output by purchase_date descending.',
    'UNION + ORDER BY at end',
    'online_sales (sale_id, sale_date, amount), retail_sales (sale_id, sale_date, amount)',
    'sale_id | sale_date  | amount\n501     | 2024-03-22 | 8900\n801     | 2024-03-21 | 4200',
    'sale_id | sale_date  | amount\n501     | 2024-03-22 | 8900\n801     | 2024-03-21 | 4200',
    'SELECT sale_id, sale_date, amount FROM online_sales UNION ALL SELECT sale_id, sale_date, amount FROM retail_sales ORDER BY sale_date DESC;',
    'SELECT sale_id, sale_date, amount FROM online_sales UNION ALL SELECT sale_id, sale_date, amount FROM retail_sales ORDER BY sale_date DESC;'),
  makeSqlTask(15, 5, 'Find Mutual Elements using INTERSECT simulation', 'Medium', 'Set Operations', 10, '85.9%',
    'Find product IDs present in both 2023_catalog and 2024_catalog.',
    'INTERSECT or IN',
    'catalog_2023 (product_id), catalog_2024 (product_id)',
    'product_id\n101\n104\n107',
    'product_id\n101\n104\n107',
    'SELECT product_id FROM catalog_2023 INTERSECT SELECT product_id FROM catalog_2024;',
    'SELECT product_id FROM catalog_2023 INTERSECT SELECT product_id FROM catalog_2024;')
];

// ─────────────────────────────────────────────────────────────
// 16. CASE Statement (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_16_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(16, 1, 'Categorize Salary Tiers (Low, Medium, High)', 'Medium', 'Data Transformation', 10, '92.1%',
    'Label employees as "High" if salary >= 80000, "Medium" if salary >= 50000, else "Low" as salary_tier.',
    'CASE WHEN ... THEN ... ELSE ... END',
    'employees (name VARCHAR, salary INT)',
    'name  | salary | salary_tier\nRahul | 85000  | High\nPriya | 62000  | Medium\nAnil  | 35000  | Low',
    'name  | salary | salary_tier\nRahul | 85000  | High\nPriya | 62000  | Medium\nAnil  | 35000  | Low',
    'SELECT name, salary, CASE WHEN salary >= 80000 THEN \'High\' WHEN salary >= 50000 THEN \'Medium\' ELSE \'Low\' END AS salary_tier FROM employees;',
    'SELECT name, salary, CASE WHEN salary >= 80000 THEN \'High\' WHEN salary >= 50000 THEN \'Medium\' ELSE \'Low\' END AS salary_tier FROM employees;'),
  makeSqlTask(16, 2, 'Conditional Aggregation: Count Orders by Status', 'Medium', 'Data Transformation', 10, '89.6%',
    'In a single query, count how many orders are "Completed", "Pending", and "Cancelled" as separate columns.',
    'SUM(CASE WHEN status = ... THEN 1 ELSE 0 END)',
    'orders (order_id, status)',
    'completed_cnt | pending_cnt | cancelled_cnt\n120           | 15          | 5',
    'completed_cnt | pending_cnt | cancelled_cnt\n120           | 15          | 5',
    'SELECT SUM(CASE WHEN status = \'Completed\' THEN 1 ELSE 0 END) AS completed_cnt, SUM(CASE WHEN status = \'Pending\' THEN 1 ELSE 0 END) AS pending_cnt, SUM(CASE WHEN status = \'Cancelled\' THEN 1 ELSE 0 END) AS cancelled_cnt FROM orders;',
    'SELECT SUM(CASE WHEN status = \'Completed\' THEN 1 ELSE 0 END) AS completed_cnt, SUM(CASE WHEN status = \'Pending\' THEN 1 ELSE 0 END) AS pending_cnt, SUM(CASE WHEN status = \'Cancelled\' THEN 1 ELSE 0 END) AS cancelled_cnt FROM orders;'),
  makeSqlTask(16, 3, 'Apply Dynamic Discount Based on Order Value', 'Medium', 'Data Transformation', 10, '90.4%',
    'Calculate final_price by applying 15% discount for amount > 5000, 10% for amount > 2000, else 0% discount.',
    'CASE calculation',
    'orders (order_id, amount)',
    'order_id | original_amount | final_price\n1        | 6000            | 5100.00\n2        | 3000            | 2700.00',
    'order_id | original_amount | final_price\n1        | 6000            | 5100.00\n2        | 3000            | 2700.00',
    'SELECT order_id, amount AS original_amount, CASE WHEN amount > 5000 THEN amount * 0.85 WHEN amount > 2000 THEN amount * 0.90 ELSE amount END AS final_price FROM orders;',
    'SELECT order_id, amount AS original_amount, CASE WHEN amount > 5000 THEN amount * 0.85 WHEN amount > 2000 THEN amount * 0.90 ELSE amount END AS final_price FROM orders;'),
  makeSqlTask(16, 4, 'Transform Gender Codes to Full Text', 'Medium', 'Data Transformation', 10, '94.0%',
    'Map gender code \'M\' to \'Male\', \'F\' to \'Female\', and \'O\' to \'Other\'.',
    'CASE simple expression',
    'users (name, gender_code)',
    'name  | gender\nRahul | Male\nPriya | Female',
    'name  | gender\nRahul | Male\nPriya | Female',
    'SELECT name, CASE gender_code WHEN \'M\' THEN \'Male\' WHEN \'F\' THEN \'Female\' ELSE \'Other\' END AS gender FROM users;',
    'SELECT name, CASE gender_code WHEN \'M\' THEN \'Male\' WHEN \'F\' THEN \'Female\' ELSE \'Other\' END AS gender FROM users;'),
  makeSqlTask(16, 5, 'Conditional Ordering using CASE in ORDER BY', 'Medium', 'Data Transformation', 10, '86.8%',
    'Sort priority orders: VIP customers first, then regular customers sorted by order_date.',
    'ORDER BY CASE WHEN ...',
    'orders (order_id, customer_type, order_date)',
    'order_id | customer_type | order_date\n201      | VIP           | 2024-03-01\n104      | REGULAR       | 2024-03-05',
    'order_id | customer_type | order_date\n201      | VIP           | 2024-03-01\n104      | REGULAR       | 2024-03-05',
    'SELECT * FROM orders ORDER BY CASE WHEN customer_type = \'VIP\' THEN 1 ELSE 2 END, order_date DESC;',
    'SELECT * FROM orders ORDER BY CASE WHEN customer_type = \'VIP\' THEN 1 ELSE 2 END, order_date DESC;')
];

// ─────────────────────────────────────────────────────────────
// 17. Date & Time Functions (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_17_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(17, 1, 'Extract Year, Month and Day from Order Date', 'Medium', 'Date Functions', 10, '91.0%',
    'Extract the year, month, and day as separate columns from order_timestamp.',
    'EXTRACT(YEAR/MONTH/DAY)',
    'orders (order_id, order_timestamp)',
    'order_id | o_year | o_month | o_day\n501      | 2024   | 3       | 15',
    'order_id | o_year | o_month | o_day\n501      | 2024   | 3       | 15',
    'SELECT order_id, EXTRACT(YEAR FROM order_timestamp) AS o_year, EXTRACT(MONTH FROM order_timestamp) AS o_month, EXTRACT(DAY FROM order_timestamp) AS o_day FROM orders;',
    'SELECT order_id, EXTRACT(YEAR FROM order_timestamp) AS o_year, EXTRACT(MONTH FROM order_timestamp) AS o_month, EXTRACT(DAY FROM order_timestamp) AS o_day FROM orders;'),
  makeSqlTask(17, 2, 'Calculate Employee Age in Years from Birth Date', 'Medium', 'Date Functions', 10, '88.3%',
    'Calculate the employee age in completed years using CURRENT_DATE and date_of_birth.',
    'AGE() or DATE_PART / DATEDIFF',
    'employees (name, date_of_birth)',
    'name  | age\nRahul | 28\nPriya | 26',
    'name  | age\nRahul | 28\nPriya | 26',
    'SELECT name, DATE_PART(\'year\', AGE(CURRENT_DATE, date_of_birth)) AS age FROM employees;',
    'SELECT name, DATE_PART(\'year\', AGE(CURRENT_DATE, date_of_birth)) AS age FROM employees;'),
  makeSqlTask(17, 3, 'Filter Records Placed in the Last 30 Days', 'Medium', 'Date Functions', 10, '89.5%',
    'Find orders placed within the last 30 days relative to CURRENT_DATE.',
    'WHERE order_date >= CURRENT_DATE - INTERVAL \'30 days\'',
    'orders (order_id, order_date, amount)',
    'order_id | order_date | amount\n9102     | 2024-03-18 | 3400.00',
    'order_id | order_date | amount\n9102     | 2024-03-18 | 3400.00',
    'SELECT * FROM orders WHERE order_date >= CURRENT_DATE - INTERVAL \'30 days\';',
    'SELECT * FROM orders WHERE order_date >= CURRENT_DATE - INTERVAL \'30 days\';'),
  makeSqlTask(17, 4, 'Format Date as "DD-Mon-YYYY"', 'Medium', 'Date Functions', 10, '87.0%',
    'Format the created_at timestamp into human readable string e.g. "15-Mar-2024".',
    'TO_CHAR(date, format)',
    'invoices (invoice_id, created_at)',
    'invoice_id | formatted_date\nINV-001    | 15-Mar-2024',
    'invoice_id | formatted_date\nINV-001    | 15-Mar-2024',
    'SELECT invoice_id, TO_CHAR(created_at, \'DD-Mon-YYYY\') AS formatted_date FROM invoices;',
    'SELECT invoice_id, TO_CHAR(created_at, \'DD-Mon-YYYY\') AS formatted_date FROM invoices;'),
  makeSqlTask(17, 5, 'Calculate Days Between Order and Shipment', 'Medium', 'Date Functions', 10, '90.2%',
    'Calculate delivery_lead_days by subtracting order_date from ship_date.',
    'ship_date - order_date',
    'shipments (shipment_id, order_date, ship_date)',
    'shipment_id | delivery_lead_days\nSH-101      | 3',
    'shipment_id | delivery_lead_days\nSH-101      | 3',
    'SELECT shipment_id, (ship_date - order_date) AS delivery_lead_days FROM shipments;',
    'SELECT shipment_id, (ship_date - order_date) AS delivery_lead_days FROM shipments;')
];

// ─────────────────────────────────────────────────────────────
// 18. String Functions (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_18_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(18, 1, 'Concatenate First Name and Last Name with Space', 'Medium', 'String Functions', 10, '95.2%',
    'Combine first_name and last_name as full_name using CONCAT or the || operator.',
    'CONCAT(first, \' \', last)',
    'employees (first_name, last_name)',
    'full_name\nRahul Sharma\nPriya Patel',
    'full_name\nRahul Sharma\nPriya Patel',
    'SELECT CONCAT(first_name, \' \', last_name) AS full_name FROM employees;',
    'SELECT CONCAT(first_name, \' \', last_name) AS full_name FROM employees;'),
  makeSqlTask(18, 2, 'Convert Names to UPPERCASE and Emails to LOWERCASE', 'Medium', 'String Functions', 10, '96.0%',
    'Convert employee full name to uppercase and corporate email address to lowercase.',
    'UPPER() and LOWER()',
    'users (name, email)',
    'upper_name   | lower_email\nRAHUL SHARMA | rahul@future.ai',
    'upper_name   | lower_email\nRAHUL SHARMA | rahul@future.ai',
    'SELECT UPPER(name) AS upper_name, LOWER(email) AS lower_email FROM users;',
    'SELECT UPPER(name) AS upper_name, LOWER(email) AS lower_email FROM users;'),
  makeSqlTask(18, 3, 'Extract Email Domain using SUBSTRING / SPLIT_PART', 'Medium', 'String Functions', 10, '87.9%',
    'Extract the email domain (part after @) from user emails.',
    'SPLIT_PART(email, \'@\', 2)',
    'users (user_id, email)',
    'user_id | email_domain\n1       | future.ai\n2       | google.com',
    'user_id | email_domain\n1       | future.ai\n2       | google.com',
    'SELECT user_id, SPLIT_PART(email, \'@\', 2) AS email_domain FROM users;',
    'SELECT user_id, SPLIT_PART(email, \'@\', 2) AS email_domain FROM users;'),
  makeSqlTask(18, 4, 'Trim Leading and Trailing Whitespace', 'Medium', 'String Functions', 10, '94.1%',
    'Clean input strings by removing surrounding spaces and tabs using TRIM.',
    'TRIM(column)',
    'raw_leads (lead_id, company_name)',
    'lead_id | clean_company\n101     | Future AI Labs',
    'lead_id | clean_company\n101     | Future AI Labs',
    'SELECT lead_id, TRIM(company_name) AS clean_company FROM raw_leads;',
    'SELECT lead_id, TRIM(company_name) AS clean_company FROM raw_leads;'),
  makeSqlTask(18, 5, 'Mask Sensitive Phone Numbers (Keep Last 4 Digits)', 'Medium', 'String Functions', 10, '86.4%',
    'Mask phone numbers so that only the last 4 digits are shown, preceded by "******".',
    'CONCAT(\'******\', RIGHT(phone, 4))',
    'users (name, phone)',
    'name  | masked_phone\nRahul | ******3210',
    'name  | masked_phone\nRahul | ******3210',
    'SELECT name, CONCAT(\'******\', RIGHT(phone, 4)) AS masked_phone FROM users;',
    'SELECT name, CONCAT(\'******\', RIGHT(phone, 4)) AS masked_phone FROM users;')
];

// ─────────────────────────────────────────────────────────────
// 19. INNER JOIN (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_19_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(19, 1, 'Match Students with Enrolled Courses', 'Medium', 'Joins', 10, '92.3%',
    'Retrieve student names along with their active enrolled course names using an INNER JOIN.',
    'INNER JOIN on course_id',
    'students (student_id, name), enrollments (student_id, course_id), courses (course_id, course_name)',
    'student_name | course_name\nRahul        | Data Science Bootcamp\nPriya        | Full Stack AI',
    'student_name | course_name\nRahul        | Data Science Bootcamp\nPriya        | Full Stack AI',
    'SELECT s.name AS student_name, c.course_name FROM students s INNER JOIN enrollments e ON s.student_id = e.student_id INNER JOIN courses c ON e.course_id = c.course_id;',
    'SELECT s.name AS student_name, c.course_name FROM students s INNER JOIN enrollments e ON s.student_id = e.student_id INNER JOIN courses c ON e.course_id = c.course_id;'),
  makeSqlTask(19, 2, 'Join Invoices and Payments with Matching Paid Status', 'Medium', 'Joins', 10, '90.7%',
    'Join invoices and payments where invoice_id matches and amount_paid matches the invoice total.',
    'INNER JOIN with multiple ON clauses',
    'invoices (invoice_id, total), payments (invoice_id, amount_paid)',
    'invoice_id | total   | amount_paid\nINV-100    | 1200.00 | 1200.00',
    'invoice_id | total   | amount_paid\nINV-100    | 1200.00 | 1200.00',
    'SELECT i.invoice_id, i.total, p.amount_paid FROM invoices i INNER JOIN payments p ON i.invoice_id = p.invoice_id AND i.total = p.amount_paid;',
    'SELECT i.invoice_id, i.total, p.amount_paid FROM invoices i INNER JOIN payments p ON i.invoice_id = p.invoice_id AND i.total = p.amount_paid;')
];

// ─────────────────────────────────────────────────────────────
// 20. LEFT JOIN (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_20_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(20, 1, 'List All Customers and Their Orders (Including Zero Orders)', 'Medium', 'Joins', 10, '91.5%',
    'Show all registered customers, and if they placed orders show the order_id, else NULL.',
    'LEFT JOIN customers and orders',
    'customers (customer_id, name), orders (order_id, customer_id)',
    'name    | order_id\nRahul   | 5001\nManish  | NULL',
    'name    | order_id\nRahul   | 5001\nManish  | NULL',
    'SELECT c.name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;',
    'SELECT c.name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;'),
  makeSqlTask(20, 2, 'Identify Customers with 0 Orders via LEFT JOIN and IS NULL', 'Medium', 'Joins', 10, '93.0%',
    'Find customer records that have no matching records in the orders table using a LEFT JOIN.',
    'LEFT JOIN ... WHERE o.order_id IS NULL',
    'customers (customer_id, name), orders (order_id, customer_id)',
    'customer_id | name\n108         | Manish',
    'customer_id | name\n108         | Manish',
    'SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;',
    'SELECT c.customer_id, c.name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;')
];

// ─────────────────────────────────────────────────────────────
// 21. RIGHT JOIN (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_21_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(21, 1, 'Show All Departments Even Without Assigned Staff', 'Medium', 'Joins', 10, '88.1%',
    'Use a RIGHT JOIN to guarantee every department from departments table is present in the output.',
    'RIGHT JOIN departments',
    'employees (name, dept_id), departments (dept_id, dept_name)',
    'dept_name         | employee_name\nEngineering       | Rahul\nStrategic Planning| NULL',
    'dept_name         | employee_name\nEngineering       | Rahul\nStrategic Planning| NULL',
    'SELECT d.dept_name, e.name AS employee_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.dept_id;',
    'SELECT d.dept_name, e.name AS employee_name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.dept_id;')
];

// ─────────────────────────────────────────────────────────────
// 22. Self Join (Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_22_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(22, 1, 'Pair Each Employee with Their Manager Name', 'Medium', 'Joins', 10, '87.4%',
    'Self-join the employees table to list employee name and their direct manager’s name.',
    'Self join: emp e JOIN emp m ON e.manager_id = m.emp_id',
    'employees (emp_id, name, manager_id)',
    'employee_name | manager_name\nRahul         | Amit\nPriya         | Sneha',
    'employee_name | manager_name\nRahul         | Amit\nPriya         | Sneha',
    'SELECT e.name AS employee_name, m.name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;',
    'SELECT e.name AS employee_name, m.name AS manager_name FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;'),
  makeSqlTask(22, 2, 'Find Pairs of Employees in Same Department', 'Medium', 'Joins', 10, '84.8%',
    'Find pairs of employees working in the same department (avoid self-matching and duplicate reverse pairs).',
    'e1.dept_id = e2.dept_id AND e1.emp_id < e2.emp_id',
    'employees (emp_id, name, dept_id)',
    'emp1  | emp2  | department\nRahul | Amit  | Engineering',
    'emp1  | emp2  | department\nRahul | Amit  | Engineering',
    'SELECT e1.name AS emp1, e2.name AS emp2, e1.dept_id FROM employees e1 JOIN employees e2 ON e1.dept_id = e2.dept_id AND e1.emp_id < e2.emp_id;',
    'SELECT e1.name AS emp1, e2.name AS emp2, e1.dept_id FROM employees e1 JOIN employees e2 ON e1.dept_id = e2.dept_id AND e1.emp_id < e2.emp_id;')
];

// ─────────────────────────────────────────────────────────────
// 23. Query Optimization (Advanced)
// ─────────────────────────────────────────────────────────────
const TOPIC_23_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(23, 1, 'Replace IN Subquery with EXISTS for SARGable Query Plan', 'Hard', 'Optimization', 15, '81.0%',
    'Rewrite an IN subquery using EXISTS to utilize index lookups on the orders table.',
    'EXISTS (SELECT 1 FROM ...)',
    'customers (customer_id, name), orders (customer_id)',
    'customer_id | name\n101         | Rahul',
    'customer_id | name\n101         | Rahul',
    'SELECT c.customer_id, c.name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);',
    'SELECT c.customer_id, c.name FROM customers c WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);'),
  makeSqlTask(23, 2, 'Optimize Column Projection (Avoid SELECT *)', 'Hard', 'Optimization', 15, '89.5%',
    'Query only the indexed covering columns (emp_id, salary) for fastest index-only scan execution.',
    'Covering Index projection',
    'employees (emp_id, salary, bio, photo_blob)',
    'emp_id | salary\n101    | 85000\n102    | 62000',
    'emp_id | salary\n101    | 85000\n102    | 62000',
    'SELECT emp_id, salary FROM employees WHERE salary > 50000;',
    'SELECT emp_id, salary FROM employees WHERE salary > 50000;')
];

// ─────────────────────────────────────────────────────────────
// 24. Complex Joins (Advanced)
// ─────────────────────────────────────────────────────────────
const TOPIC_24_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(24, 1, '5-Table Enterprise Sales and Shipping Join', 'Hard', 'Joins', 15, '76.4%',
    'Join customers, orders, order_items, products, and shippers to construct a master logistics overview.',
    '5-way multi join',
    'customers, orders, order_items, products, shippers',
    'order_id | customer_name | product_name | shipper_name | total_cost\n5001     | Rahul         | Wireless Mouse| BlueDart      | 1200.00',
    'order_id | customer_name | product_name | shipper_name | total_cost\n5001     | Rahul         | Wireless Mouse| BlueDart      | 1200.00',
    'SELECT o.order_id, c.name AS customer_name, p.product_name, s.shipper_name, (oi.quantity * oi.unit_price) AS total_cost FROM orders o JOIN customers c ON o.customer_id = c.customer_id JOIN order_items oi ON o.order_id = oi.order_id JOIN products p ON oi.product_id = p.product_id JOIN shippers s ON o.shipper_id = s.shipper_id;',
    'SELECT o.order_id, c.name AS customer_name, p.product_name, s.shipper_name, (oi.quantity * oi.unit_price) AS total_cost FROM orders o JOIN customers c ON o.customer_id = c.customer_id JOIN order_items oi ON o.order_id = oi.order_id JOIN products p ON oi.product_id = p.product_id JOIN shippers s ON o.shipper_id = s.shipper_id;'),
  makeSqlTask(24, 2, 'Full Outer Join to Identify Discrepancies', 'Hard', 'Joins', 15, '79.2%',
    'Perform a FULL OUTER JOIN between inventory records and physical stock audit to highlight mismatched items.',
    'FULL OUTER JOIN',
    'system_inventory (sku, qty), audit_counts (sku, counted_qty)',
    'sys_sku | sys_qty | audit_sku | counted_qty\nSKU-1   | 50      | SKU-1     | 48\nSKU-2   | 10      | NULL      | NULL',
    'sys_sku | sys_qty | audit_sku | counted_qty\nSKU-1   | 50      | SKU-1     | 48\nSKU-2   | 10      | NULL      | NULL',
    'SELECT s.sku AS sys_sku, s.qty AS sys_qty, a.sku AS audit_sku, a.counted_qty FROM system_inventory s FULL OUTER JOIN audit_counts a ON s.sku = a.sku WHERE s.qty != a.counted_qty OR s.sku IS NULL OR a.sku IS NULL;',
    'SELECT s.sku AS sys_sku, s.qty AS sys_qty, a.sku AS audit_sku, a.counted_qty FROM system_inventory s FULL OUTER JOIN audit_counts a ON s.sku = a.sku WHERE s.qty != a.counted_qty OR s.sku IS NULL OR a.sku IS NULL;')
];

// ─────────────────────────────────────────────────────────────
// 25. Data Analysis Queries (Advanced / Intermediate)
// ─────────────────────────────────────────────────────────────
const TOPIC_25_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(25, 1, 'Year-over-Year (YoY) Sales Growth Rate Calculation', 'Hard', 'Analytics', 15, '74.2%',
    'Calculate the percentage revenue growth comparing each calendar year with the preceding year.',
    'LAG() + percentage calculation',
    'yearly_revenue (year INT, revenue DECIMAL)',
    'year | revenue | prev_revenue | yoy_growth_percent\n2023 | 1000000 | NULL         | NULL\n2024 | 1350000 | 1000000      | 35.00',
    'year | revenue | prev_revenue | yoy_growth_percent\n2023 | 1000000 | NULL         | NULL\n2024 | 1350000 | 1000000      | 35.00',
    'SELECT year, revenue, LAG(revenue) OVER (ORDER BY year) AS prev_revenue, ROUND(((revenue - LAG(revenue) OVER (ORDER BY year)) / LAG(revenue) OVER (ORDER BY year)) * 100, 2) AS yoy_growth_percent FROM yearly_revenue;',
    'SELECT year, revenue, LAG(revenue) OVER (ORDER BY year) AS prev_revenue, ROUND(((revenue - LAG(revenue) OVER (ORDER BY year)) / LAG(revenue) OVER (ORDER BY year)) * 100, 2) AS yoy_growth_percent FROM yearly_revenue;'),
  makeSqlTask(25, 2, 'RFM (Recency, Frequency, Monetary) Segmentation Calculation', 'Hard', 'Analytics', 15, '72.8%',
    'Compute Recency (days since last order), Frequency (order count), and Monetary (total spend) per customer.',
    'RFM Metrics',
    'orders (customer_id, order_date, amount)',
    'customer_id | recency_days | frequency | monetary_total\n101         | 4            | 18        | 45200.00\n102         | 42           | 2         | 3100.00',
    'customer_id | recency_days | frequency | monetary_total\n101         | 4            | 18        | 45200.00\n102         | 42           | 2         | 3100.00',
    'SELECT customer_id, (CURRENT_DATE - MAX(order_date)) AS recency_days, COUNT(*) AS frequency, SUM(amount) AS monetary_total FROM orders GROUP BY customer_id;',
    'SELECT customer_id, (CURRENT_DATE - MAX(order_date)) AS recency_days, COUNT(*) AS frequency, SUM(amount) AS monetary_total FROM orders GROUP BY customer_id;')
];

// ─────────────────────────────────────────────────────────────
// 26. Recursive CTE (Advanced)
// ─────────────────────────────────────────────────────────────
const TOPIC_26_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(26, 1, 'Generate Integer Sequence from 1 to 10', 'Hard', 'Advanced SQL', 15, '83.5%',
    'Use a RECURSIVE CTE to generate numbers from 1 up to 10 without any physical table.',
    'WITH RECURSIVE Numbers AS (...)',
    'Virtual Numbers generator',
    'n\n1\n2\n3\n...\n10',
    'n\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10',
    'WITH RECURSIVE Numbers AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Numbers WHERE n < 10) SELECT n FROM Numbers;',
    'WITH RECURSIVE Numbers AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM Numbers WHERE n < 10) SELECT n FROM Numbers;'),
  makeSqlTask(26, 2, 'Traverse Organizational Hierarchy (Management Tree)', 'Hard', 'Advanced SQL', 15, '71.2%',
    'Recursively traverse reporting lines to determine each employee\'s hierarchy level starting from CEO (Level 1).',
    'WITH RECURSIVE OrgChart AS (...)',
    'employees (emp_id, name, manager_id)',
    'emp_id | name  | manager_id | level\n1      | CEO   | NULL       | 1\n2      | VP    | 1          | 2\n3      | Lead  | 2          | 3',
    'emp_id | name  | manager_id | level\n1      | CEO   | NULL       | 1\n2      | VP    | 1          | 2\n3      | Lead  | 2          | 3',
    'WITH RECURSIVE OrgChart AS (SELECT emp_id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.emp_id, e.name, e.manager_id, o.level + 1 FROM employees e JOIN OrgChart o ON e.manager_id = o.emp_id) SELECT * FROM OrgChart ORDER BY level, emp_id;',
    'WITH RECURSIVE OrgChart AS (SELECT emp_id, name, manager_id, 1 AS level FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.emp_id, e.name, e.manager_id, o.level + 1 FROM employees e JOIN OrgChart o ON e.manager_id = o.emp_id) SELECT * FROM OrgChart ORDER BY level, emp_id;')
];

// ─────────────────────────────────────────────────────────────
// POPULAR CHALLENGES (4 Challenges)
// ─────────────────────────────────────────────────────────────
const POPULAR_TOPIC_1_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(101, 1, 'Top N Products by Category Revenue', 'Medium', 'Popular Challenges', 10, '89.1%',
    'Select the top 3 revenue-generating products in each product category.',
    'DENSE_RANK() <= 3',
    'products (category, name), order_items (product_id, quantity, unit_price)',
    'category    | product_name   | total_sales | rank\nElectronics | MacBook Pro 16 | 1500000     | 1\nElectronics | iPhone 15 Pro  | 1200000     | 2',
    'category    | product_name   | total_sales | rank\nElectronics | MacBook Pro 16 | 1500000     | 1\nElectronics | iPhone 15 Pro  | 1200000     | 2',
    'WITH RankedProducts AS (SELECT p.category, p.product_name, SUM(oi.quantity * oi.unit_price) AS total_sales, DENSE_RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity * oi.unit_price) DESC) AS rank FROM products p JOIN order_items oi ON p.product_id = oi.product_id GROUP BY p.category, p.product_name) SELECT * FROM RankedProducts WHERE rank <= 3;',
    'WITH RankedProducts AS (SELECT p.category, p.product_name, SUM(oi.quantity * oi.unit_price) AS total_sales, DENSE_RANK() OVER (PARTITION BY p.category ORDER BY SUM(oi.quantity * oi.unit_price) DESC) AS rank FROM products p JOIN order_items oi ON p.product_id = oi.product_id GROUP BY p.category, p.product_name) SELECT * FROM RankedProducts WHERE rank <= 3;')
];

const POPULAR_TOPIC_2_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(102, 1, 'Employee Retention & Tenureship Analysis', 'Medium', 'Popular Challenges', 10, '86.4%',
    'Analyze average employee tenure by department and identify flight risks (tenure > 5 years with no recent promotion).',
    'Tenure Analysis',
    'employees (emp_id, name, department, hire_date, last_promotion_date)',
    'department  | avg_tenure_years | flight_risk_count\nEngineering | 4.8              | 3\nOperations  | 3.2              | 1',
    'department  | avg_tenure_years | flight_risk_count\nEngineering | 4.8              | 3\nOperations  | 3.2              | 1',
    'SELECT department, ROUND(AVG(DATE_PART(\'year\', AGE(CURRENT_DATE, hire_date))), 1) AS avg_tenure_years, SUM(CASE WHEN DATE_PART(\'year\', AGE(CURRENT_DATE, hire_date)) > 5 AND (last_promotion_date IS NULL OR DATE_PART(\'year\', AGE(CURRENT_DATE, last_promotion_date)) > 3) THEN 1 ELSE 0 END) AS flight_risk_count FROM employees GROUP BY department;',
    'SELECT department, ROUND(AVG(DATE_PART(\'year\', AGE(CURRENT_DATE, hire_date))), 1) AS avg_tenure_years, SUM(CASE WHEN DATE_PART(\'year\', AGE(CURRENT_DATE, hire_date)) > 5 AND (last_promotion_date IS NULL OR DATE_PART(\'year\', AGE(CURRENT_DATE, last_promotion_date)) > 3) THEN 1 ELSE 0 END) AS flight_risk_count FROM employees GROUP BY department;')
];

const POPULAR_TOPIC_3_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(103, 1, 'Monthly Sales Velocity & Churn Cohorts', 'Hard', 'Popular Challenges', 15, '81.2%',
    'Calculate monthly repeat purchase rate and customer lifetime value (LTV).',
    'Sales Analytics Pipeline',
    'orders (order_id, customer_id, order_date, amount)',
    'cohort_month | repeat_customers | ltv_estimate\n2024-01      | 340              | 4850.00\n2024-02      | 412              | 5200.00',
    'cohort_month | repeat_customers | ltv_estimate\n2024-01      | 340              | 4850.00\n2024-02      | 412              | 5200.00',
    'SELECT TO_CHAR(order_date, \'YYYY-MM\') AS cohort_month, COUNT(DISTINCT customer_id) AS repeat_customers, ROUND(AVG(amount) * 4, 2) AS ltv_estimate FROM orders GROUP BY TO_CHAR(order_date, \'YYYY-MM\') ORDER BY cohort_month;',
    'SELECT TO_CHAR(order_date, \'YYYY-MM\') AS cohort_month, COUNT(DISTINCT customer_id) AS repeat_customers, ROUND(AVG(amount) * 4, 2) AS ltv_estimate FROM orders GROUP BY TO_CHAR(order_date, \'YYYY-MM\') ORDER BY cohort_month;')
];

const POPULAR_TOPIC_4_QUESTIONS: SqlChallengeTask[] = [
  makeSqlTask(104, 1, 'Customer Segmentation: Platinum, Gold & Silver', 'Medium', 'Popular Challenges', 10, '88.5%',
    'Segment buyers into "Platinum" (spend > 50,000), "Gold" (spend > 20,000), and "Silver" (all others).',
    'Customer Segmentation',
    'customers (customer_id, name), orders (customer_id, amount)',
    'segment  | customer_count | total_revenue\nPlatinum | 14             | 980000.00\nGold     | 58             | 1450000.00\nSilver   | 180            | 720000.00',
    'segment  | customer_count | total_revenue\nPlatinum | 14             | 980000.00\nGold     | 58             | 1450000.00\nSilver   | 180            | 720000.00',
    'WITH CustomerSpend AS (SELECT c.customer_id, SUM(o.amount) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id), Segmented AS (SELECT customer_id, total_spent, CASE WHEN total_spent > 50000 THEN \'Platinum\' WHEN total_spent > 20000 THEN \'Gold\' ELSE \'Silver\' END AS segment FROM CustomerSpend) SELECT segment, COUNT(*) AS customer_count, SUM(total_spent) AS total_revenue FROM Segmented GROUP BY segment ORDER BY total_revenue DESC;',
    'WITH CustomerSpend AS (SELECT c.customer_id, SUM(o.amount) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id), Segmented AS (SELECT customer_id, total_spent, CASE WHEN total_spent > 50000 THEN \'Platinum\' WHEN total_spent > 20000 THEN \'Gold\' ELSE \'Silver\' END AS segment FROM CustomerSpend) SELECT segment, COUNT(*) AS customer_count, SUM(total_spent) AS total_revenue FROM Segmented GROUP BY segment ORDER BY total_revenue DESC;')
];

// ─────────────────────────────────────────────────────────────
// COMPLETE LIST OF ALL SQL TOPICS (1 to 25 + Recursive CTE + 4 Popular)
// ─────────────────────────────────────────────────────────────
export const ALL_SQL_TOPICS: SqlTopicDefinition[] = [
  // 1. SELECT Basics (Basic)
  {
    id: 1,
    title: 'Topic 1 — SELECT Basics',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'SQL Basics',
    description: 'Learn foundational data querying using SELECT, specific column projections, and column aliases.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_1_QUESTIONS
  },
  // 2. WHERE Clause (Basic)
  {
    id: 2,
    title: 'Topic 2 — WHERE Clause',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Data Querying',
    description: 'Filter table records using comparison operators, logical AND/OR, BETWEEN, and IN clauses.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_2_QUESTIONS
  },
  // 3. ORDER BY (Basic)
  {
    id: 3,
    title: 'Topic 3 — ORDER BY',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'SQL Basics',
    description: 'Sort query results ascending and descending, perform multi-column sorting, and control NULL ordering.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_3_QUESTIONS
  },
  // 4. Aggregate Functions (Basic)
  {
    id: 4,
    title: 'Topic 4 — Aggregate Functions',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Aggregation',
    description: 'Calculate statistical summaries across records using SUM, AVG, MIN, MAX, and COUNT.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_4_QUESTIONS
  },
  // 5. GROUP BY (Intermediate)
  {
    id: 5,
    title: 'Topic 5 — GROUP BY',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Aggregation',
    description: 'Aggregate rows into summary categories by single and multiple grouping dimensions.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_5_QUESTIONS
  },
  // 6. HAVING Clause (Intermediate)
  {
    id: 6,
    title: 'Topic 6 — HAVING Clause',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Aggregation',
    description: 'Apply post-aggregation filters to grouped sets based on aggregate function thresholds.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_6_QUESTIONS
  },
  // 7. JOIN Operations (Intermediate)
  {
    id: 7,
    title: 'Topic 7 — JOIN Operations',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Joins',
    description: 'Combine related data across relational tables using primary keys and foreign keys.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_7_QUESTIONS
  },
  // 8. Subqueries (Intermediate)
  {
    id: 8,
    title: 'Topic 8 — Subqueries',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Subqueries',
    description: 'Master scalar, inline, and correlated subqueries in WHERE, FROM, and SELECT clauses.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_8_QUESTIONS
  },
  // 9. Window Functions (Advanced)
  {
    id: 9,
    title: 'Topic 9 — Window Functions',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Window Functions',
    description: 'Calculate running totals, rankings (DENSE_RANK, ROW_NUMBER), and lag/lead values over partitions.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_9_QUESTIONS
  },
  // 10. CTE (Common Table Expressions) (Advanced)
  {
    id: 10,
    title: 'Topic 10 — CTE (Common Table Expressions)',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Advanced SQL',
    description: 'Write maintainable, modular SQL queries using the WITH clause for single and chained CTEs.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_10_QUESTIONS
  },
  // 11. DISTINCT Keyword (Basic)
  {
    id: 11,
    title: 'Topic 11 — DISTINCT Keyword',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'SQL Basics',
    description: 'Eliminate duplicate rows from output projections and count unique entities across dataset fields.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_11_QUESTIONS
  },
  // 12. LIMIT & OFFSET (Basic)
  {
    id: 12,
    title: 'Topic 12 — LIMIT & OFFSET',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'SQL Basics',
    description: 'Constrain query row counts, fetch top records, and implement database pagination.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_12_QUESTIONS
  },
  // 13. LIKE Operator (Basic)
  {
    id: 13,
    title: 'Topic 13 — LIKE Operator',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'Data Querying',
    description: 'Search string text using wildcard pattern matching (% for arbitrary characters, _ for single characters).',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_13_QUESTIONS
  },
  // 14. IS NULL / IS NOT NULL (Basic)
  {
    id: 14,
    title: 'Topic 14 — IS NULL / IS NOT NULL',
    difficulty: 'Easy',
    maxScore: 5,
    skill: 'SQL Basics',
    description: 'Safely test for missing database values and handle nullability using COALESCE fallback values.',
    tabs: ['all', 'basic'],
    solved: false,
    questions: TOPIC_14_QUESTIONS
  },
  // 15. UNION & UNION ALL (Intermediate)
  {
    id: 15,
    title: 'Topic 15 — UNION & UNION ALL',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Set Operations',
    description: 'Stack and combine query results vertically with automatic deduplication or high-speed UNION ALL.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_15_QUESTIONS
  },
  // 16. CASE Statement (Intermediate)
  {
    id: 16,
    title: 'Topic 16 — CASE Statement',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Data Transformation',
    description: 'Implement conditional branching logic in SQL to create custom labels, bins, and dynamic aggregations.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_16_QUESTIONS
  },
  // 17. Date & Time Functions (Intermediate)
  {
    id: 17,
    title: 'Topic 17 — Date & Time Functions',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Date Functions',
    description: 'Extract date parts, compute date intervals, calculate human age, and format date strings.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_17_QUESTIONS
  },
  // 18. String Functions (Intermediate)
  {
    id: 18,
    title: 'Topic 18 — String Functions',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'String Functions',
    description: 'Manipulate strings via concatenation, substring extraction, trimming whitespace, and text masking.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_18_QUESTIONS
  },
  // 19. INNER JOIN (Intermediate)
  {
    id: 19,
    title: 'Topic 19 — INNER JOIN',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Joins',
    description: 'Perform strict relational joins keeping only matching pairs across parent and child tables.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_19_QUESTIONS
  },
  // 20. LEFT JOIN (Intermediate)
  {
    id: 20,
    title: 'Topic 20 — LEFT JOIN',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Joins',
    description: 'Preserve all rows from the primary left table while pulling matching secondary attributes.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_20_QUESTIONS
  },
  // 21. RIGHT JOIN (Intermediate)
  {
    id: 21,
    title: 'Topic 21 — RIGHT JOIN',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Joins',
    description: 'Ensure comprehensive right-table inclusion for complete master lookup analysis.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_21_QUESTIONS
  },
  // 22. Self Join (Intermediate)
  {
    id: 22,
    title: 'Topic 22 — Self Join',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Joins',
    description: 'Join a table onto itself to model employee-manager relationships and compare same-table rows.',
    tabs: ['all', 'intermediate'],
    solved: false,
    questions: TOPIC_22_QUESTIONS
  },
  // 23. Query Optimization (Advanced)
  {
    id: 23,
    title: 'Topic 23 — Query Optimization',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Optimization',
    description: 'Improve execution plans using EXISTS vs IN, selective indexing, and index-covering projections.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_23_QUESTIONS
  },
  // 24. Complex Joins (Advanced)
  {
    id: 24,
    title: 'Topic 24 — Complex Joins',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Joins',
    description: 'Construct multi-table enterprise relational joins and FULL OUTER reconciliation joins.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_24_QUESTIONS
  },
  // 25. Data Analysis Queries (Advanced)
  {
    id: 25,
    title: 'Topic 25 — Data Analysis Queries',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Analytics',
    description: 'Calculate real-world business KPIs like YoY revenue growth, RFM customer tiers, and LTV metrics.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_25_QUESTIONS
  },
  // 26. Recursive CTE (Advanced)
  {
    id: 26,
    title: 'Topic 26 — Recursive CTE',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Advanced SQL',
    description: 'Traverse hierarchical trees, generate recursive sequences, and solve graph paths with RECURSIVE.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_26_QUESTIONS
  },
  // Popular Challenge 1
  {
    id: 101,
    title: 'Popular Challenge 1 — Top N Records',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Popular Challenges',
    description: 'Extract Top N performing products and sales across diverse market categories.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_TOPIC_1_QUESTIONS
  },
  // Popular Challenge 2
  {
    id: 102,
    title: 'Popular Challenge 2 — Employee Analysis',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Popular Challenges',
    description: 'Perform deep HR workforce analytics, tenure calculation, and flight-risk detection.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_TOPIC_2_QUESTIONS
  },
  // Popular Challenge 3
  {
    id: 103,
    title: 'Popular Challenge 3 — Sales Analytics',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Popular Challenges',
    description: 'Build end-to-end sales cohorts, monthly revenue velocity, and customer lifetime value (LTV).',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_TOPIC_3_QUESTIONS
  },
  // Popular Challenge 4
  {
    id: 104,
    title: 'Popular Challenge 4 — Customer Segmentation',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Popular Challenges',
    description: 'Segment customer bases into Platinum, Gold, and Silver tiers based on purchasing volume.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_TOPIC_4_QUESTIONS
  }
];
