// Complete SQL Coding Practice Question Bank (25 Topics + 4 Popular Challenges = 290 Questions)
export interface SchemaColumn {
  name: string;
  type: string;
  desc: string;
}

export interface OutputColumn {
  name: string;
  desc: string;
}

export interface SqlChallengeTask {
  id: number;
  taskNumber: number;
  title: string;
  points: number;
  successRate: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  concept?: string;
  problemStatement: string;
  highlightedKeyword: string;
  tableName?: string;
  schemaColumns?: SchemaColumn[];
  inputFormat?: string;
  outputFormat?: string;
  outputColumns?: OutputColumn[];
  constraints?: string[];
  note?: string;
  sampleInputRows?: Record<string, string | number>[];
  sampleInputHeaders?: string[];
  expectedOutputRows?: Record<string, string | number>[];
  expectedOutputHeaders?: string[];
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

const COMMON_EMPLOYEES_SCHEMA: SchemaColumn[] = [
  { name: 'id', type: 'INT', desc: 'Unique employee ID' },
  { name: 'name', type: 'VARCHAR(100)', desc: 'Employee name' },
  { name: 'age', type: 'INT', desc: 'Employee age' },
  { name: 'department', type: 'VARCHAR(50)', desc: 'Department name' },
  { name: 'salary', type: 'INT', desc: 'Monthly salary' }
];

const COMMON_EMPLOYEES_INPUT_HEADERS = ['id', 'name', 'age', 'department', 'salary'];

const COMMON_EMPLOYEES_INPUT_ROWS = [
  { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 },
  { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 },
  { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 },
  { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 },
  { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }
];

const COMMON_SAMPLE_INPUT_STR = 'id | name | age | department | salary\n1 | Rahul Sharma | 28 | IT | 60000\n2 | Priya Singh | 25 | HR | 50000\n3 | Amit Kumar | 32 | Finance | 70000\n4 | Neha Gupta | 29 | Marketing | 55000\n5 | Vikram Mehta | 30 | IT | 65000';

function makeTask(
  topicId: number,
  taskNumber: number,
  title: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  skill: string,
  points: number,
  successRate: string,
  concept: string,
  problemStatement: string,
  hint: string,
  solution: string,
  expectedHeaders: string[],
  expectedRows: Record<string, string | number>[],
  note?: string,
  customSchema?: SchemaColumn[],
  customInputHeaders?: string[],
  customInputRows?: Record<string, string | number>[],
  customSampleInputStr?: string
): SqlChallengeTask {
  const headers = expectedHeaders;
  const rows = expectedRows;
  const sampleOutputStr = headers.join(' | ') + '\n' + rows.map(r => headers.map(h => r[h] !== undefined ? r[h] : '').join(' | ')).join('\n');

  return {
    id: topicId * 100 + taskNumber,
    taskNumber,
    title,
    points,
    successRate,
    skill,
    difficulty,
    concept,
    problemStatement,
    highlightedKeyword: 'employees',
    tableName: 'employees',
    schemaColumns: customSchema || COMMON_EMPLOYEES_SCHEMA,
    inputFormat: 'No input is required.',
    outputFormat: 'Return the matching table rows:',
    outputColumns: headers.map(h => ({ name: h, desc: h })),
    constraints: ['Use only valid SQL statements.', 'Row order does not matter unless specified.'],
    note,
    sampleInputHeaders: customInputHeaders || COMMON_EMPLOYEES_INPUT_HEADERS,
    sampleInputRows: customInputRows || COMMON_EMPLOYEES_INPUT_ROWS,
    expectedOutputHeaders: headers,
    expectedOutputRows: rows,
    tableSchema: 'employees (id INT, name VARCHAR, age INT, department VARCHAR, salary INT)',
    sampleInput: customSampleInputStr || COMMON_SAMPLE_INPUT_STR,
    sampleOutput: sampleOutputStr,
    starterCode: '-- Write your SQL query here\n',
    hint,
    solution,
    testCases: [
      { inputDesc: 'Public: Sample Table Output', expected: sampleOutputStr, hidden: false },
      { inputDesc: 'Hidden Test Case 1 (Constraint check)', expected: 'Matches problem constraints and edge filters', hidden: true },
      { inputDesc: 'Hidden Test Case 2 (Scalability check)', expected: 'Correct column projections on high row counts', hidden: true }
    ]
  };
}

// ─────────────────────────────────────────────────────────────
// 1. SELECT Basics (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_1_QUESTIONS: SqlChallengeTask[] = [
  makeTask(1, 1, 'Retrieve All Columns', 'Easy', 'SQL Basics', 5, '98.5%', 'SELECT *', 'Retrieve all columns and all records from the employees table.', 'Use * to select every column: SELECT * FROM employees;', 'SELECT * FROM employees;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(1, 2, 'Select One Column', 'Easy', 'SQL Basics', 5, '97.8%', 'Selecting a specific column.', 'Display only the name of every employee.', 'Write the column name after SELECT: SELECT name FROM employees;', 'SELECT name FROM employees;', ['name'], [{ name: 'Rahul Sharma' }, { name: 'Priya Singh' }, { name: 'Amit Kumar' }, { name: 'Neha Gupta' }, { name: 'Vikram Mehta' }]),
  makeTask(1, 3, 'Select Multiple Columns', 'Easy', 'SQL Basics', 5, '96.5%', 'Selecting multiple columns.', 'Display each employee\'s name and age, in that order.', 'Separate column names with a comma: SELECT name, age FROM employees;', 'SELECT name, age FROM employees;', ['name', 'age'], [{ name: 'Rahul Sharma', age: 28 }, { name: 'Priya Singh', age: 25 }, { name: 'Amit Kumar', age: 32 }, { name: 'Neha Gupta', age: 29 }, { name: 'Vikram Mehta', age: 30 }]),
  makeTask(1, 4, 'Display Department Names', 'Easy', 'SQL Basics', 5, '95.2%', 'Selecting a text column.', 'Display the department of every employee.', 'Select only the department column: SELECT department FROM employees;', 'SELECT department FROM employees;', ['department'], [{ department: 'IT' }, { department: 'HR' }, { department: 'Finance' }, { department: 'Marketing' }, { department: 'IT' }], 'Repeated department names should remain in the result.'),
  makeTask(1, 5, 'Display Employee Salaries', 'Easy', 'SQL Basics', 5, '96.0%', 'Selecting relevant data for a report.', 'Display each employee\'s name and salary.', 'Select exactly these two columns: SELECT name, salary FROM employees;', 'SELECT name, salary FROM employees;', ['name', 'salary'], [{ name: 'Rahul Sharma', salary: 60000 }, { name: 'Priya Singh', salary: 50000 }, { name: 'Amit Kumar', salary: 70000 }, { name: 'Neha Gupta', salary: 55000 }, { name: 'Vikram Mehta', salary: 65000 }]),
  makeTask(1, 6, 'Rename Columns', 'Easy', 'SQL Basics', 10, '93.5%', 'Column aliases using AS.', 'Display employee names as employee_name and salaries as monthly_salary.', 'Use AS: SELECT name AS employee_name, salary AS monthly_salary FROM employees;', 'SELECT name AS employee_name, salary AS monthly_salary FROM employees;', ['employee_name', 'monthly_salary'], [{ employee_name: 'Rahul Sharma', monthly_salary: 60000 }, { employee_name: 'Priya Singh', monthly_salary: 50000 }, { employee_name: 'Amit Kumar', monthly_salary: 70000 }, { employee_name: 'Neha Gupta', monthly_salary: 55000 }, { employee_name: 'Vikram Mehta', monthly_salary: 65000 }]),
  makeTask(1, 7, 'Calculate Annual Salary', 'Medium', 'SQL Basics', 10, '91.8%', 'Arithmetic in a SELECT statement.', 'Display each employee\'s name and annual salary, calculated by multiplying monthly salary by 12. Name the calculated column annual_salary.', 'Multiply salary by 12: SELECT name, (salary * 12) AS annual_salary FROM employees;', 'SELECT name, (salary * 12) AS annual_salary FROM employees;', ['name', 'annual_salary'], [{ name: 'Rahul Sharma', annual_salary: 720000 }, { name: 'Priya Singh', annual_salary: 600000 }, { name: 'Amit Kumar', annual_salary: 840000 }, { name: 'Neha Gupta', annual_salary: 660000 }, { name: 'Vikram Mehta', annual_salary: 780000 }]),
  makeTask(1, 8, 'Add a Fixed Text Value', 'Medium', 'SQL Basics', 10, '92.4%', 'Selecting a literal value.', 'Display every employee\'s name alongside the text Future IT Industry, using the column alias company.', 'Put fixed text in single quotes: SELECT name, \'Future IT Industry\' AS company FROM employees;', 'SELECT name, \'Future IT Industry\' AS company FROM employees;', ['name', 'company'], [{ name: 'Rahul Sharma', company: 'Future IT Industry' }, { name: 'Priya Singh', company: 'Future IT Industry' }, { name: 'Amit Kumar', company: 'Future IT Industry' }, { name: 'Neha Gupta', company: 'Future IT Industry' }, { name: 'Vikram Mehta', company: 'Future IT Industry' }]),
  makeTask(1, 9, 'Display Unique Departments', 'Medium', 'SQL Basics', 10, '93.1%', 'DISTINCT', 'Display every department only once.', 'Place DISTINCT immediately after SELECT: SELECT DISTINCT department FROM employees;', 'SELECT DISTINCT department FROM employees;', ['department'], [{ department: 'IT' }, { department: 'HR' }, { department: 'Finance' }, { department: 'Marketing' }], 'The row order may vary because no ORDER BY clause is specified.'),
  makeTask(1, 10, 'Build an Employee Report', 'Hard', 'SQL Basics', 15, '89.4%', 'Combining columns, aliases and calculations.', 'Display each employee\'s name, department, monthly salary and annual salary (salary x 12) with respective aliases.', 'SELECT name AS employee_name, department AS department_name, salary AS monthly_salary, (salary * 12) AS annual_salary FROM employees;', 'SELECT name AS employee_name, department AS department_name, salary AS monthly_salary, (salary * 12) AS annual_salary FROM employees;', ['employee_name', 'department_name', 'monthly_salary', 'annual_salary'], [{ employee_name: 'Rahul Sharma', department_name: 'IT', monthly_salary: 60000, annual_salary: 720000 }, { employee_name: 'Priya Singh', department_name: 'HR', monthly_salary: 50000, annual_salary: 600000 }, { employee_name: 'Amit Kumar', department_name: 'Finance', monthly_salary: 70000, annual_salary: 840000 }, { employee_name: 'Neha Gupta', department_name: 'Marketing', monthly_salary: 55000, annual_salary: 660000 }, { employee_name: 'Vikram Mehta', department_name: 'IT', monthly_salary: 65000, annual_salary: 780000 }])
];

// ─────────────────────────────────────────────────────────────
// 2. WHERE Clause (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_2_QUESTIONS: SqlChallengeTask[] = [
  makeTask(2, 1, 'Filter IT Department Employees', 'Easy', 'Data Querying', 5, '97.2%', 'rows ko conditions ke basis par filter karna.', 'employees table se sirf IT department ke employees display karo.', 'WHERE department = \'IT\'', 'SELECT * FROM employees WHERE department = \'IT\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(2, 2, 'Employees with Age Greater Than 30', 'Easy', 'Data Querying', 5, '96.5%', 'Filter numbers with > operator', 'Un employees ko display karo jinki age 30 se zyada hai.', 'WHERE age > 30', 'SELECT * FROM employees WHERE age > 30;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(2, 3, 'Employees with Salary Less Than 60,000', 'Easy', 'Data Querying', 5, '95.8%', 'Filter with < operator', 'Un employees ko display karo jinki salary ₹60,000 se kam hai.', 'WHERE salary < 60000', 'SELECT * FROM employees WHERE salary < 60000;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(2, 4, 'Employees with Age Exactly 28', 'Easy', 'Data Querying', 5, '97.0%', 'Exact equality = operator', 'Un employees ko display karo jinki age exactly 28 hai.', 'WHERE age = 28', 'SELECT * FROM employees WHERE age = 28;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(2, 5, 'Employees with Salary >= 50,000', 'Easy', 'Data Querying', 5, '96.1%', 'Greater than or equal >= operator', 'Un employees ko display karo jinki salary ₹50,000 ya usse zyada hai.', 'WHERE salary >= 50000', 'SELECT * FROM employees WHERE salary >= 50000;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(2, 6, 'IT Department and Salary > 60,000', 'Easy', 'Data Querying', 5, '94.5%', 'Logical AND operator', 'Un employees ko display karo jo IT department mein hain aur jinki salary ₹60,000 se zyada hai.', 'WHERE department = \'IT\' AND salary > 60000', 'SELECT * FROM employees WHERE department = \'IT\' AND salary > 60000;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(2, 7, 'HR or Finance Department Employees', 'Easy', 'Data Querying', 5, '95.0%', 'Logical OR / IN operator', 'Un employees ko display karo jo HR ya Finance department mein hain.', 'WHERE department IN (\'HR\', \'Finance\') or department = \'HR\' OR department = \'Finance\'', 'SELECT * FROM employees WHERE department IN (\'HR\', \'Finance\');', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(2, 8, 'Age Between 25 and 30 Inclusive', 'Easy', 'Data Querying', 5, '94.8%', 'BETWEEN ... AND ...', 'Un employees ko display karo jinki age 25 se 30 ke beech hai, including both limits.', 'WHERE age BETWEEN 25 AND 30', 'SELECT * FROM employees WHERE age BETWEEN 25 AND 30;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(2, 9, 'Employees Not in IT Department', 'Easy', 'Data Querying', 5, '95.4%', 'Not equal != or <>', 'Un employees ko display karo jo IT department mein nahi hain.', 'WHERE department != \'IT\'', 'SELECT * FROM employees WHERE department != \'IT\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(2, 10, 'Salary > 55,000 and Age < 30', 'Easy', 'Data Querying', 5, '93.9%', 'Compound AND condition', 'Un employees ko display karo jinki salary ₹55,000 se zyada hai aur age 30 se kam hai.', 'WHERE salary > 55000 AND age < 30', 'SELECT * FROM employees WHERE salary > 55000 AND age < 30;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }])
];

// ─────────────────────────────────────────────────────────────
// 3. ORDER BY (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_3_QUESTIONS: SqlChallengeTask[] = [
  makeTask(3, 1, 'Sort by Name Alphabetical', 'Easy', 'SQL Basics', 5, '98.0%', 'results ko ascending order mein sort karna.', 'Employees ko name ke alphabetical order mein display karo.', 'ORDER BY name ASC', 'SELECT * FROM employees ORDER BY name ASC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(3, 2, 'Sort by Salary Ascending', 'Easy', 'SQL Basics', 5, '97.2%', 'ORDER BY column ASC', 'Employees ko salary ke ascending order mein sort karo.', 'ORDER BY salary ASC', 'SELECT * FROM employees ORDER BY salary ASC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(3, 3, 'Sort by Salary Descending', 'Easy', 'SQL Basics', 5, '97.5%', 'ORDER BY column DESC', 'Employees ko salary ke descending order mein sort karo.', 'ORDER BY salary DESC', 'SELECT * FROM employees ORDER BY salary DESC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(3, 4, 'Sort by Age Ascending', 'Easy', 'SQL Basics', 5, '96.8%', 'ORDER BY age ASC', 'Employees ko age ke ascending order mein display karo.', 'ORDER BY age ASC', 'SELECT * FROM employees ORDER BY age ASC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(3, 5, 'Sort by Department Alphabetical', 'Easy', 'SQL Basics', 5, '96.4%', 'ORDER BY department ASC', 'Employees ko department ke alphabetical order mein sort karo.', 'ORDER BY department ASC', 'SELECT * FROM employees ORDER BY department ASC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(3, 6, 'Department Ascending then Salary Descending', 'Easy', 'SQL Basics', 5, '94.2%', 'Multi-column ORDER BY', 'Employees ko pehle department ascending, phir salary descending order mein sort karo.', 'ORDER BY department ASC, salary DESC', 'SELECT * FROM employees ORDER BY department ASC, salary DESC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(3, 7, 'Sort by Age Descending', 'Easy', 'SQL Basics', 5, '96.0%', 'ORDER BY age DESC', 'Employees ko age descending order mein sort karo.', 'ORDER BY age DESC', 'SELECT * FROM employees ORDER BY age DESC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(3, 8, 'Name Reverse Alphabetical', 'Easy', 'SQL Basics', 5, '95.5%', 'ORDER BY name DESC', 'Employees ko name ke reverse alphabetical order mein display karo.', 'ORDER BY name DESC', 'SELECT * FROM employees ORDER BY name DESC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(3, 9, 'Salary Ascending and Age Descending', 'Easy', 'SQL Basics', 5, '93.8%', 'ORDER BY salary ASC, age DESC', 'Employees ko salary ascending aur age descending order mein sort karo.', 'ORDER BY salary ASC, age DESC', 'SELECT * FROM employees ORDER BY salary ASC, age DESC;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(3, 10, 'Top Salary Employee First', 'Easy', 'SQL Basics', 5, '95.1%', 'ORDER BY salary DESC LIMIT 1', 'Sabse zyada salary wale employee ko result mein pehle dikhane wali query likho.', 'ORDER BY salary DESC LIMIT 1', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }])
];

// ─────────────────────────────────────────────────────────────
// 4. Aggregate Functions (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_4_QUESTIONS: SqlChallengeTask[] = [
  makeTask(4, 1, 'Total Employees Count', 'Easy', 'Aggregation', 5, '98.2%', 'COUNT(*)', 'Total employees ki count nikalo.', 'SELECT COUNT(*) FROM employees;', 'SELECT COUNT(*) AS total_employees FROM employees;', ['total_employees'], [{ total_employees: 5 }]),
  makeTask(4, 2, 'Total Salary of All Employees', 'Easy', 'Aggregation', 5, '97.5%', 'SUM(salary)', 'Sabhi employees ki total salary nikalo.', 'SELECT SUM(salary) FROM employees;', 'SELECT SUM(salary) AS total_salary FROM employees;', ['total_salary'], [{ total_salary: 300000 }]),
  makeTask(4, 3, 'Average Salary of Employees', 'Easy', 'Aggregation', 5, '96.8%', 'AVG(salary)', 'Employees ki average salary nikalo.', 'SELECT AVG(salary) FROM employees;', 'SELECT AVG(salary) AS average_salary FROM employees;', ['average_salary'], [{ average_salary: 60000 }]),
  makeTask(4, 4, 'Maximum Salary', 'Easy', 'Aggregation', 5, '97.9%', 'MAX(salary)', 'Sabse zyada salary nikalo.', 'SELECT MAX(salary) FROM employees;', 'SELECT MAX(salary) AS max_salary FROM employees;', ['max_salary'], [{ max_salary: 70000 }]),
  makeTask(4, 5, 'Minimum Salary', 'Easy', 'Aggregation', 5, '97.4%', 'MIN(salary)', 'Sabse kam salary nikalo.', 'SELECT MIN(salary) FROM employees;', 'SELECT MIN(salary) AS min_salary FROM employees;', ['min_salary'], [{ min_salary: 50000 }]),
  makeTask(4, 6, 'Total Department Records Count', 'Easy', 'Aggregation', 5, '95.2%', 'COUNT(department)', 'Total departments ke employee records ki count nikalo.', 'SELECT COUNT(department) FROM employees;', 'SELECT COUNT(department) AS total_departments FROM employees;', ['total_departments'], [{ total_departments: 5 }]),
  makeTask(4, 7, 'IT Department Total Salary', 'Easy', 'Aggregation', 5, '94.8%', 'SUM with WHERE condition', 'IT department ki total salary calculate karo.', 'WHERE department = \'IT\'', 'SELECT SUM(salary) AS it_total_salary FROM employees WHERE department = \'IT\';', ['it_total_salary'], [{ it_total_salary: 125000 }]),
  makeTask(4, 8, 'IT Department Average Salary', 'Easy', 'Aggregation', 5, '94.2%', 'AVG with WHERE condition', 'IT department ki average salary calculate karo.', 'WHERE department = \'IT\'', 'SELECT AVG(salary) AS it_avg_salary FROM employees WHERE department = \'IT\';', ['it_avg_salary'], [{ it_avg_salary: 62500 }]),
  makeTask(4, 9, 'Employees with Age >= 30 Count', 'Easy', 'Aggregation', 5, '95.6%', 'COUNT with WHERE condition', '30 saal ya usse zyada age wale employees ki count nikalo.', 'WHERE age >= 30', 'SELECT COUNT(*) AS count_age_30_plus FROM employees WHERE age >= 30;', ['count_age_30_plus'], [{ count_age_30_plus: 2 }]),
  makeTask(4, 10, 'Comprehensive Salary Summary', 'Easy', 'Aggregation', 5, '93.5%', 'Combined Aggregate Functions', 'Total salary, average salary, minimum salary aur maximum salary ek hi query mein display karo.', 'SELECT SUM(salary), AVG(salary), MIN(salary), MAX(salary) FROM employees;', 'SELECT SUM(salary) AS total_salary, AVG(salary) AS average_salary, MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM employees;', ['total_salary', 'average_salary', 'min_salary', 'max_salary'], [{ total_salary: 300000, average_salary: 60000, min_salary: 50000, max_salary: 70000 }])
];

// ─────────────────────────────────────────────────────────────
// 5. GROUP BY (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_5_QUESTIONS: SqlChallengeTask[] = [
  makeTask(5, 1, 'Department Employee Count', 'Medium', 'Aggregation', 10, '94.5%', 'GROUP BY department', 'Har department mein employees ki count nikalo.', 'SELECT department, COUNT(*) FROM employees GROUP BY department;', 'SELECT department, COUNT(*) AS employee_count FROM employees GROUP BY department;', ['department', 'employee_count'], [{ department: 'IT', employee_count: 2 }, { department: 'HR', employee_count: 1 }, { department: 'Finance', employee_count: 1 }, { department: 'Marketing', employee_count: 1 }]),
  makeTask(5, 2, 'Department Total Salary', 'Medium', 'Aggregation', 10, '93.8%', 'GROUP BY department with SUM', 'Har department ki total salary calculate karo.', 'SELECT department, SUM(salary) FROM employees GROUP BY department;', 'SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department;', ['department', 'total_salary'], [{ department: 'IT', total_salary: 125000 }, { department: 'HR', total_salary: 50000 }, { department: 'Finance', total_salary: 70000 }, { department: 'Marketing', total_salary: 55000 }]),
  makeTask(5, 3, 'Department Average Salary', 'Medium', 'Aggregation', 10, '92.6%', 'GROUP BY department with AVG', 'Har department ki average salary calculate karo.', 'SELECT department, AVG(salary) FROM employees GROUP BY department;', 'SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department;', ['department', 'avg_salary'], [{ department: 'IT', avg_salary: 62500 }, { department: 'HR', avg_salary: 50000 }, { department: 'Finance', avg_salary: 70000 }, { department: 'Marketing', avg_salary: 55000 }]),
  makeTask(5, 4, 'Department Maximum Salary', 'Medium', 'Aggregation', 10, '93.0%', 'GROUP BY department with MAX', 'Har department ki maximum salary nikalo.', 'SELECT department, MAX(salary) FROM employees GROUP BY department;', 'SELECT department, MAX(salary) AS max_salary FROM employees GROUP BY department;', ['department', 'max_salary'], [{ department: 'IT', max_salary: 65000 }, { department: 'HR', max_salary: 50000 }, { department: 'Finance', max_salary: 70000 }, { department: 'Marketing', max_salary: 55000 }]),
  makeTask(5, 5, 'Department Minimum Salary', 'Medium', 'Aggregation', 10, '93.4%', 'GROUP BY department with MIN', 'Har department ki minimum salary nikalo.', 'SELECT department, MIN(salary) FROM employees GROUP BY department;', 'SELECT department, MIN(salary) AS min_salary FROM employees GROUP BY department;', ['department', 'min_salary'], [{ department: 'IT', min_salary: 60000 }, { department: 'HR', min_salary: 50000 }, { department: 'Finance', min_salary: 70000 }, { department: 'Marketing', min_salary: 55000 }]),
  makeTask(5, 6, 'Count and Average Salary by Department', 'Medium', 'Aggregation', 10, '91.8%', 'Multiple Aggregates in GROUP BY', 'Har department mein employees ki count aur average salary display karo.', 'SELECT department, COUNT(*), AVG(salary) FROM employees GROUP BY department;', 'SELECT department, COUNT(*) AS employee_count, AVG(salary) AS avg_salary FROM employees GROUP BY department;', ['department', 'employee_count', 'avg_salary'], [{ department: 'IT', employee_count: 2, avg_salary: 62500 }, { department: 'HR', employee_count: 1, avg_salary: 50000 }, { department: 'Finance', employee_count: 1, avg_salary: 70000 }, { department: 'Marketing', employee_count: 1, avg_salary: 55000 }]),
  makeTask(5, 7, 'Group Employees by Age', 'Medium', 'Aggregation', 10, '92.0%', 'GROUP BY age', 'Employees ko age ke basis par group karke har age ki count nikalo.', 'SELECT age, COUNT(*) FROM employees GROUP BY age;', 'SELECT age, COUNT(*) AS count FROM employees GROUP BY age;', ['age', 'count'], [{ age: 28, count: 1 }, { age: 25, count: 1 }, { age: 32, count: 1 }, { age: 29, count: 1 }, { age: 30, count: 1 }]),
  makeTask(5, 8, 'Employees Earning > 60,000 per Department', 'Medium', 'Aggregation', 10, '90.5%', 'WHERE with GROUP BY', 'Har department mein ₹60,000 se zyada salary wale employees ki count nikalo.', 'WHERE salary > 60000 GROUP BY department', 'SELECT department, COUNT(*) AS count FROM employees WHERE salary > 60000 GROUP BY department;', ['department', 'count'], [{ department: 'Finance', count: 1 }, { department: 'IT', count: 1 }]),
  makeTask(5, 9, 'Department Salary Expense Highest First', 'Medium', 'Aggregation', 10, '91.2%', 'GROUP BY with ORDER BY DESC', 'Har department ka total salary expense display karo, highest expense pehle.', 'GROUP BY department ORDER BY total_expense DESC', 'SELECT department, SUM(salary) AS total_expense FROM employees GROUP BY department ORDER BY total_expense DESC;', ['department', 'total_expense'], [{ department: 'IT', total_expense: 125000 }, { department: 'Finance', total_expense: 70000 }, { department: 'Marketing', total_expense: 55000 }, { department: 'HR', total_expense: 50000 }]),
  makeTask(5, 10, 'Department Full Summary Report', 'Medium', 'Aggregation', 10, '89.6%', 'Comprehensive Department Report', 'Department-wise employee count, total salary aur average salary report banao.', 'SELECT department, COUNT(*), SUM(salary), AVG(salary) FROM employees GROUP BY department;', 'SELECT department, COUNT(*) AS employee_count, SUM(salary) AS total_salary, AVG(salary) AS avg_salary FROM employees GROUP BY department;', ['department', 'employee_count', 'total_salary', 'avg_salary'], [{ department: 'IT', employee_count: 2, total_salary: 125000, avg_salary: 62500 }, { department: 'HR', employee_count: 1, total_salary: 50000, avg_salary: 50000 }, { department: 'Finance', employee_count: 1, total_salary: 70000, avg_salary: 70000 }, { department: 'Marketing', employee_count: 1, total_salary: 55000, avg_salary: 55000 }])
];

// ─────────────────────────────────────────────────────────────
// 6. HAVING Clause (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_6_QUESTIONS: SqlChallengeTask[] = [
  makeTask(6, 1, 'Departments with > 2 Employees', 'Medium', 'Aggregation', 10, '91.4%', 'HAVING COUNT(*) > 2', 'Sirf un departments ko display karo jahan 2 se zyada employees hain.', 'HAVING COUNT(*) > 2', 'SELECT department, COUNT(*) AS count FROM employees GROUP BY department HAVING COUNT(*) > 2;', ['department', 'count'], []),
  makeTask(6, 2, 'Departments with Total Salary > 100,000', 'Medium', 'Aggregation', 10, '92.1%', 'HAVING SUM(salary) > 100000', 'Un departments ko display karo jinki total salary ₹100,000 se zyada hai.', 'HAVING SUM(salary) > 100000', 'SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING SUM(salary) > 100000;', ['department', 'total_salary'], [{ department: 'IT', total_salary: 125000 }]),
  makeTask(6, 3, 'Departments with Avg Salary > 60,000', 'Medium', 'Aggregation', 10, '90.8%', 'HAVING AVG(salary) > 60000', 'Un departments ko display karo jinki average salary ₹60,000 se zyada hai.', 'HAVING AVG(salary) > 60000', 'SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) > 60000;', ['department', 'avg_salary'], [{ department: 'IT', avg_salary: 62500 }, { department: 'Finance', avg_salary: 70000 }]),
  makeTask(6, 4, 'Departments with Max Salary > 65,000', 'Medium', 'Aggregation', 10, '91.5%', 'HAVING MAX(salary) > 65000', 'Un departments ko display karo jahan maximum salary ₹65,000 se zyada hai.', 'HAVING MAX(salary) > 65000', 'SELECT department, MAX(salary) AS max_salary FROM employees GROUP BY department HAVING MAX(salary) > 65000;', ['department', 'max_salary'], [{ department: 'Finance', max_salary: 70000 }]),
  makeTask(6, 5, 'Departments with Min Salary >= 55,000', 'Medium', 'Aggregation', 10, '89.5%', 'HAVING MIN(salary) >= 55000', 'Un departments ko display karo jahan minimum salary ₹55,000 se zyada hai.', 'HAVING MIN(salary) > 55000', 'SELECT department, MIN(salary) AS min_salary FROM employees GROUP BY department HAVING MIN(salary) > 55000;', ['department', 'min_salary'], [{ department: 'IT', min_salary: 60000 }, { department: 'Finance', min_salary: 70000 }]),
  makeTask(6, 6, 'Departments with Count > 1', 'Medium', 'Aggregation', 10, '93.2%', 'HAVING COUNT(*) > 1', 'Sirf un departments ko display karo jahan employee count 1 se zyada hai.', 'HAVING COUNT(*) > 1', 'SELECT department, COUNT(*) AS count FROM employees GROUP BY department HAVING COUNT(*) > 1;', ['department', 'count'], [{ department: 'IT', count: 2 }]),
  makeTask(6, 7, 'Departments with Total Salary >= 120,000', 'Medium', 'Aggregation', 10, '90.7%', 'HAVING SUM(salary) >= 120000', 'Un departments ko display karo jahan total salary ₹120,000 ya usse zyada hai.', 'HAVING SUM(salary) >= 120000', 'SELECT department, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING SUM(salary) >= 120000;', ['department', 'total_salary'], [{ department: 'IT', total_salary: 125000 }]),
  makeTask(6, 8, 'Departments with Avg Age > 28', 'Medium', 'Aggregation', 10, '89.4%', 'HAVING AVG(age) > 28', 'Un departments ko display karo jahan average age 28 se zyada hai.', 'HAVING AVG(age) > 28', 'SELECT department, AVG(age) AS avg_age FROM employees GROUP BY department HAVING AVG(age) > 28;', ['department', 'avg_age'], [{ department: 'IT', avg_age: 29 }, { department: 'Finance', avg_age: 32 }, { department: 'Marketing', avg_age: 29 }]),
  makeTask(6, 9, 'Departments with Exactly 2 Employees', 'Medium', 'Aggregation', 10, '92.4%', 'HAVING COUNT(*) = 2', 'Un departments ko display karo jahan employee count 2 hai.', 'HAVING COUNT(*) = 2', 'SELECT department, COUNT(*) AS count FROM employees GROUP BY department HAVING COUNT(*) = 2;', ['department', 'count'], [{ department: 'IT', count: 2 }]),
  makeTask(6, 10, 'Count > 1 AND Total Salary > 100,000', 'Medium', 'Aggregation', 10, '88.5%', 'Compound HAVING condition', 'Department-wise count aur total salary nikalo, lekin sirf un groups ko rakho jahan count 1 se zyada aur total salary ₹100,000 se zyada ho.', 'HAVING COUNT(*) > 1 AND SUM(salary) > 100000', 'SELECT department, COUNT(*) AS count, SUM(salary) AS total_salary FROM employees GROUP BY department HAVING COUNT(*) > 1 AND SUM(salary) > 100000;', ['department', 'count', 'total_salary'], [{ department: 'IT', count: 2, total_salary: 125000 }])
];

// Helper for Relational JOIN Tables
const JOIN_EMPLOYEES_SCHEMA: SchemaColumn[] = [
  { name: 'id', type: 'INT', desc: 'Employee ID' },
  { name: 'name', type: 'VARCHAR(100)', desc: 'Employee name' },
  { name: 'department_id', type: 'INT', desc: 'Department reference ID' },
  { name: 'salary', type: 'INT', desc: 'Monthly salary' }
];

const JOIN_DEPARTMENTS_SCHEMA: SchemaColumn[] = [
  { name: 'department_id', type: 'INT', desc: 'Unique Department ID' },
  { name: 'department_name', type: 'VARCHAR(50)', desc: 'Department Name' }
];

const JOIN_SAMPLE_INPUT_STR = 'Table employees:\nid | name | department_id | salary\n1 | Rahul Sharma | 1 | 60000\n2 | Priya Singh | 2 | 50000\n3 | Amit Kumar | 3 | 70000\n4 | Neha Gupta | 4 | 55000\n5 | Vikram Mehta | 1 | 65000\n\nTable departments:\ndepartment_id | department_name\n1 | IT\n2 | HR\n3 | Finance\n4 | Marketing';

// ─────────────────────────────────────────────────────────────
// 7. JOIN Operations (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_7_QUESTIONS: SqlChallengeTask[] = [
  makeTask(7, 1, 'Employees and Department ID', 'Medium', 'Joins', 10, '95.0%', 'Selecting keys', 'Employees ke naam aur department ID display karo.', 'SELECT name, department_id FROM employees;', 'SELECT name, department_id FROM employees;', ['name', 'department_id'], [{ name: 'Rahul Sharma', department_id: 1 }, { name: 'Priya Singh', department_id: 2 }, { name: 'Amit Kumar', department_id: 3 }, { name: 'Neha Gupta', department_id: 4 }, { name: 'Vikram Mehta', department_id: 1 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 2, 'Employee Name with Department Name', 'Medium', 'Joins', 10, '94.2%', 'Relational JOIN', 'Employees ke naam ke saath department ka naam display karo.', 'JOIN departments ON e.department_id = d.department_id', 'SELECT e.name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Neha Gupta', department_name: 'Marketing' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 3, 'Join on Department ID', 'Medium', 'Joins', 10, '93.5%', 'Table Join Condition', 'Employees aur departments ko department_id ke basis par join karo.', 'SELECT * FROM employees e JOIN departments d ON e.department_id = d.department_id;', 'SELECT * FROM employees e JOIN departments d ON e.department_id = d.department_id;', ['id', 'name', 'department_id', 'salary', 'department_name'], [{ id: 1, name: 'Rahul Sharma', department_id: 1, salary: 60000, department_name: 'IT' }, { id: 2, name: 'Priya Singh', department_id: 2, salary: 50000, department_name: 'HR' }, { id: 3, name: 'Amit Kumar', department_id: 3, salary: 70000, department_name: 'Finance' }, { id: 4, name: 'Neha Gupta', department_id: 4, salary: 55000, department_name: 'Marketing' }, { id: 5, name: 'Vikram Mehta', department_id: 1, salary: 65000, department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 4, 'Matching Department Records Only', 'Medium', 'Joins', 10, '92.8%', 'INNER JOIN', 'Sirf un employees ko display karo jinka matching department hai.', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', ['id', 'name', 'department_id', 'salary'], [{ id: 1, name: 'Rahul Sharma', department_id: 1, salary: 60000 }, { id: 2, name: 'Priya Singh', department_id: 2, salary: 50000 }, { id: 3, name: 'Amit Kumar', department_id: 3, salary: 70000 }, { id: 4, name: 'Neha Gupta', department_id: 4, salary: 55000 }, { id: 5, name: 'Vikram Mehta', department_id: 1, salary: 65000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 5, 'Employee Name, Department and Salary', 'Medium', 'Joins', 10, '94.0%', 'Three-column Join Selection', 'Employee name, department name aur salary display karo.', 'SELECT e.name, d.department_name, e.salary FROM employees e JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, d.department_name, e.salary FROM employees e JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name', 'salary'], [{ name: 'Rahul Sharma', department_name: 'IT', salary: 60000 }, { name: 'Priya Singh', department_name: 'HR', salary: 50000 }, { name: 'Amit Kumar', department_name: 'Finance', salary: 70000 }, { name: 'Neha Gupta', department_name: 'Marketing', salary: 55000 }, { name: 'Vikram Mehta', department_name: 'IT', salary: 65000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 6, 'IT Department Employees via Join', 'Medium', 'Joins', 10, '93.1%', 'JOIN with WHERE Filter', 'IT department ke employees ke naam display karo.', 'WHERE d.department_name = \'IT\'', 'SELECT e.name FROM employees e JOIN departments d ON e.department_id = d.department_id WHERE d.department_name = \'IT\';', ['name'], [{ name: 'Rahul Sharma' }, { name: 'Vikram Mehta' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 7, 'Employee Details with Department Name', 'Medium', 'Joins', 10, '92.5%', 'Join Projections', 'Har employee ke saath department ki details display karo.', 'SELECT e.id, e.name, e.salary, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.id, e.name, e.salary, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id;', ['id', 'name', 'salary', 'department_name'], [{ id: 1, name: 'Rahul Sharma', salary: 60000, department_name: 'IT' }, { id: 2, name: 'Priya Singh', salary: 50000, department_name: 'HR' }, { id: 3, name: 'Amit Kumar', salary: 70000, department_name: 'Finance' }, { id: 4, name: 'Neha Gupta', salary: 55000, department_name: 'Marketing' }, { id: 5, name: 'Vikram Mehta', salary: 65000, department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 8, 'Sort Employees by Department Name', 'Medium', 'Joins', 10, '91.8%', 'JOIN with ORDER BY', 'Employees ko unke department names ke alphabetical order mein display karo.', 'ORDER BY d.department_name ASC', 'SELECT e.name, d.department_name FROM employees e JOIN departments d ON e.department_id = d.department_id ORDER BY d.department_name ASC;', ['name', 'department_name'], [{ name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Vikram Mehta', department_name: 'IT' }, { name: 'Neha Gupta', department_name: 'Marketing' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 9, 'Department Employee Count via Join', 'Medium', 'Joins', 10, '90.2%', 'JOIN with GROUP BY', 'Department-wise employee count nikalo using a join.', 'GROUP BY d.department_name', 'SELECT d.department_name, COUNT(e.id) AS employee_count FROM departments d JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', ['department_name', 'employee_count'], [{ department_name: 'IT', employee_count: 2 }, { department_name: 'HR', employee_count: 1 }, { department_name: 'Finance', employee_count: 1 }, { department_name: 'Marketing', employee_count: 1 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(7, 10, 'Department Total Salary via Join', 'Medium', 'Joins', 10, '91.0%', 'JOIN with SUM Aggregation', 'Department name aur department ki total salary display karo.', 'SELECT d.department_name, SUM(e.salary) AS total_salary FROM departments d JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', 'SELECT d.department_name, SUM(e.salary) AS total_salary FROM departments d JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', ['department_name', 'total_salary'], [{ department_name: 'IT', total_salary: 125000 }, { department_name: 'HR', total_salary: 50000 }, { department_name: 'Finance', total_salary: 70000 }, { department_name: 'Marketing', total_salary: 55000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR)
];

// ─────────────────────────────────────────────────────────────
// 8. Subqueries (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_8_QUESTIONS: SqlChallengeTask[] = [
  makeTask(8, 1, 'Salary Greater than Average Salary', 'Medium', 'Subqueries', 10, '90.5%', 'Scalar Subquery in WHERE', 'Average salary se zyada salary wale employees find karo.', 'WHERE salary > (SELECT AVG(salary) FROM employees)', 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(8, 2, 'Highest Paid Employee via Subquery', 'Medium', 'Subqueries', 10, '92.0%', 'Subquery with MAX()', 'Sabse zyada salary wale employee ko subquery se find karo.', 'WHERE salary = (SELECT MAX(salary) FROM employees)', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(8, 3, 'Lowest Paid Employee via Subquery', 'Medium', 'Subqueries', 10, '91.4%', 'Subquery with MIN()', 'Sabse kam salary wale employee ko find karo.', 'WHERE salary = (SELECT MIN(salary) FROM employees)', 'SELECT * FROM employees WHERE salary = (SELECT MIN(salary) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(8, 4, 'Salary > IT Department Average', 'Medium', 'Subqueries', 10, '88.9%', 'Subquery with filtered aggregate', 'Un employees ko find karo jinki salary IT department ki average salary se zyada hai.', 'WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = \'IT\')', 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = \'IT\');', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(8, 5, 'Employees in Existing Department', 'Medium', 'Subqueries', 10, '91.8%', 'IN (subquery)', 'Un employees ko find karo jo kisi existing department mein kaam karte hain.', 'WHERE department IN (SELECT DISTINCT department FROM employees)', 'SELECT * FROM employees WHERE department IN (SELECT DISTINCT department FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(8, 6, 'Departments with at least One Employee', 'Medium', 'Subqueries', 10, '93.0%', 'Correlated / Distinct subquery', 'Un departments ko find karo jahan kam se kam ek employee kaam karta hai.', 'SELECT DISTINCT department FROM employees WHERE department IS NOT NULL;', 'SELECT DISTINCT department FROM employees WHERE department IS NOT NULL;', ['department'], [{ department: 'IT' }, { department: 'HR' }, { department: 'Finance' }, { department: 'Marketing' }]),
  makeTask(8, 7, 'Salary Within 10,000 of Max Salary', 'Medium', 'Subqueries', 10, '87.4%', 'Arithmetic in Subquery comparison', 'Un employees ko find karo jinki salary company ki maximum salary se ₹10,000 kam ya usse zyada hai.', 'WHERE salary >= (SELECT MAX(salary) - 10000 FROM employees)', 'SELECT * FROM employees WHERE salary >= (SELECT MAX(salary) - 10000 FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(8, 8, 'Age Greater than Company Average Age', 'Medium', 'Subqueries', 10, '90.1%', 'Subquery on Age comparison', 'Company ki average age se zyada age wale employees find karo.', 'WHERE age > (SELECT AVG(age) FROM employees)', 'SELECT * FROM employees WHERE age > (SELECT AVG(age) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(8, 9, 'Salary Above Department Average', 'Medium', 'Subqueries', 10, '85.6%', 'Correlated Subquery', 'Un employees ko find karo jinki salary unke department ki average salary se zyada hai.', 'WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department)', 'SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(8, 10, 'Second Highest Salary via Subquery', 'Medium', 'Subqueries', 10, '84.2%', 'Nested Subquery max-less-than-max', 'Second-highest distinct salary wale employees find karo using a subquery.', 'WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees))', 'SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }])
];

// ─────────────────────────────────────────────────────────────
// 9. Window Functions (Advanced) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_9_QUESTIONS: SqlChallengeTask[] = [
  makeTask(9, 1, 'Overall ROW_NUMBER()', 'Hard', 'Window Functions', 15, '85.2%', 'ROW_NUMBER() OVER ()', 'Har employee ke saath overall ROW_NUMBER() display karo.', 'ROW_NUMBER() OVER (ORDER BY id)', 'SELECT id, name, ROW_NUMBER() OVER (ORDER BY id) AS row_num FROM employees;', ['id', 'name', 'row_num'], [{ id: 1, name: 'Rahul Sharma', row_num: 1 }, { id: 2, name: 'Priya Singh', row_num: 2 }, { id: 3, name: 'Amit Kumar', row_num: 3 }, { id: 4, name: 'Neha Gupta', row_num: 4 }, { id: 5, name: 'Vikram Mehta', row_num: 5 }]),
  makeTask(9, 2, 'Rank Employees by Salary using RANK()', 'Hard', 'Window Functions', 15, '83.4%', 'RANK() OVER (ORDER BY ...)', 'Employees ko salary descending order mein rank karo using RANK().', 'RANK() OVER (ORDER BY salary DESC)', 'SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS rank FROM employees;', ['name', 'salary', 'rank'], [{ name: 'Amit Kumar', salary: 70000, rank: 1 }, { name: 'Vikram Mehta', salary: 65000, rank: 2 }, { name: 'Rahul Sharma', salary: 60000, rank: 3 }, { name: 'Neha Gupta', salary: 55000, rank: 4 }, { name: 'Priya Singh', salary: 50000, rank: 5 }]),
  makeTask(9, 3, 'Generate DENSE_RANK() by Salary', 'Hard', 'Window Functions', 15, '84.0%', 'DENSE_RANK() OVER (...)', 'Salary ke basis par DENSE_RANK() generate karo.', 'DENSE_RANK() OVER (ORDER BY salary DESC)', 'SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank FROM employees;', ['name', 'salary', 'dense_rank'], [{ name: 'Amit Kumar', salary: 70000, dense_rank: 1 }, { name: 'Vikram Mehta', salary: 65000, dense_rank: 2 }, { name: 'Rahul Sharma', salary: 60000, dense_rank: 3 }, { name: 'Neha Gupta', salary: 55000, dense_rank: 4 }, { name: 'Priya Singh', salary: 50000, dense_rank: 5 }]),
  makeTask(9, 4, 'Salary and Overall Average Salary', 'Hard', 'Window Functions', 15, '86.1%', 'AVG() OVER ()', 'Har employee ki salary aur overall average salary display karo.', 'AVG(salary) OVER ()', 'SELECT name, salary, AVG(salary) OVER () AS avg_salary FROM employees;', ['name', 'salary', 'avg_salary'], [{ name: 'Rahul Sharma', salary: 60000, avg_salary: 60000 }, { name: 'Priya Singh', salary: 50000, avg_salary: 60000 }, { name: 'Amit Kumar', salary: 70000, avg_salary: 60000 }, { name: 'Neha Gupta', salary: 55000, avg_salary: 60000 }, { name: 'Vikram Mehta', salary: 65000, avg_salary: 60000 }]),
  makeTask(9, 5, 'Salary with Company Total Salary', 'Hard', 'Window Functions', 15, '87.0%', 'SUM() OVER ()', 'Har employee ki salary ke saath company ki total salary display karo.', 'SUM(salary) OVER ()', 'SELECT name, salary, SUM(salary) OVER () AS total_salary FROM employees;', ['name', 'salary', 'total_salary'], [{ name: 'Rahul Sharma', salary: 60000, total_salary: 300000 }, { name: 'Priya Singh', salary: 50000, total_salary: 300000 }, { name: 'Amit Kumar', salary: 70000, total_salary: 300000 }, { name: 'Neha Gupta', salary: 55000, total_salary: 300000 }, { name: 'Vikram Mehta', salary: 65000, total_salary: 300000 }]),
  makeTask(9, 6, 'Rank Employees within Department', 'Hard', 'Window Functions', 15, '81.5%', 'PARTITION BY department', 'Department ke andar employees ko salary ke basis par rank karo.', 'RANK() OVER (PARTITION BY department ORDER BY salary DESC)', 'SELECT name, department, salary, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;', ['name', 'department', 'salary', 'dept_rank'], [{ name: 'Vikram Mehta', department: 'IT', salary: 65000, dept_rank: 1 }, { name: 'Rahul Sharma', department: 'IT', salary: 60000, dept_rank: 2 }, { name: 'Priya Singh', department: 'HR', salary: 50000, dept_rank: 1 }, { name: 'Amit Kumar', department: 'Finance', salary: 70000, dept_rank: 1 }, { name: 'Neha Gupta', department: 'Marketing', salary: 55000, dept_rank: 1 }]),
  makeTask(9, 7, 'Highest Paid Employee per Department', 'Hard', 'Window Functions', 15, '79.4%', 'Window function filter', 'Har department ke highest-paid employee ko find karo using a window function.', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT * FROM Ranked WHERE rnk = 1;', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT id, name, age, department, salary FROM Ranked WHERE rnk = 1;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(9, 8, 'Previous Row Salary using LAG()', 'Hard', 'Window Functions', 15, '82.0%', 'LAG() OVER (ORDER BY ...)', 'Har employee ki salary aur uske previous row ki salary display karo using LAG().', 'LAG(salary) OVER (ORDER BY salary)', 'SELECT name, salary, LAG(salary) OVER (ORDER BY salary) AS prev_salary FROM employees;', ['name', 'salary', 'prev_salary'], [{ name: 'Priya Singh', salary: 50000, prev_salary: 'NULL' }, { name: 'Neha Gupta', salary: 55000, prev_salary: 50000 }, { name: 'Rahul Sharma', salary: 60000, prev_salary: 55000 }, { name: 'Vikram Mehta', salary: 65000, prev_salary: 60000 }, { name: 'Amit Kumar', salary: 70000, prev_salary: 65000 }]),
  makeTask(9, 9, 'Next Row Salary using LEAD()', 'Hard', 'Window Functions', 15, '82.5%', 'LEAD() OVER (ORDER BY ...)', 'Har employee ki salary aur next row ki salary display karo using LEAD().', 'LEAD(salary) OVER (ORDER BY salary)', 'SELECT name, salary, LEAD(salary) OVER (ORDER BY salary) AS next_salary FROM employees;', ['name', 'salary', 'next_salary'], [{ name: 'Priya Singh', salary: 50000, next_salary: 55000 }, { name: 'Neha Gupta', salary: 55000, next_salary: 60000 }, { name: 'Rahul Sharma', salary: 60000, next_salary: 65000 }, { name: 'Vikram Mehta', salary: 65000, next_salary: 70000 }, { name: 'Amit Kumar', salary: 70000, next_salary: 'NULL' }]),
  makeTask(9, 10, 'Cumulative Salary Total per Department', 'Hard', 'Window Functions', 15, '80.0%', 'Running Total with PARTITION BY', 'Har department ke andar cumulative salary total calculate karo.', 'SUM(salary) OVER (PARTITION BY department ORDER BY salary)', 'SELECT department, name, salary, SUM(salary) OVER (PARTITION BY department ORDER BY salary) AS cumulative_salary FROM employees;', ['department', 'name', 'salary', 'cumulative_salary'], [{ department: 'IT', name: 'Rahul Sharma', salary: 60000, cumulative_salary: 60000 }, { department: 'IT', name: 'Vikram Mehta', salary: 65000, cumulative_salary: 125000 }, { department: 'HR', name: 'Priya Singh', salary: 50000, cumulative_salary: 50000 }, { department: 'Finance', name: 'Amit Kumar', salary: 70000, cumulative_salary: 70000 }, { department: 'Marketing', name: 'Neha Gupta', salary: 55000, cumulative_salary: 55000 }])
];

// ─────────────────────────────────────────────────────────────
// 10. CTE (Common Table Expressions) (Advanced) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_10_QUESTIONS: SqlChallengeTask[] = [
  makeTask(10, 1, 'Basic CTE All Employees', 'Hard', 'Advanced SQL', 15, '91.2%', 'WITH clause', 'CTE bana kar saare employees display karo.', 'WITH EmpCTE AS (SELECT * FROM employees) SELECT * FROM EmpCTE;', 'WITH EmpCTE AS (SELECT * FROM employees) SELECT * FROM EmpCTE;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(10, 2, 'Filter IT Employees via CTE', 'Hard', 'Advanced SQL', 15, '90.5%', 'WITH CTE with filter', 'CTE se IT department ke employees filter karo.', 'WITH IT_Emps AS (SELECT * FROM employees WHERE department = \'IT\') SELECT * FROM IT_Emps;', 'WITH IT_Emps AS (SELECT * FROM employees WHERE department = \'IT\') SELECT * FROM IT_Emps;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(10, 3, 'Calculate Average Salary in CTE', 'Hard', 'Advanced SQL', 15, '89.4%', 'Scalar CTE aggregation', 'CTE se average salary calculate karo.', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_salary FROM employees) SELECT * FROM AvgSal;', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_salary FROM employees) SELECT * FROM AvgSal;', ['avg_salary'], [{ avg_salary: 60000 }]),
  makeTask(10, 4, 'Employees Above Average Salary via CTE', 'Hard', 'Advanced SQL', 15, '86.5%', 'CTE join / scalar filter', 'CTE use karke average salary se zyada salary wale employees find karo.', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_val FROM employees) SELECT e.* FROM employees e, AvgSal a WHERE e.salary > a.avg_val;', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_val FROM employees) SELECT e.id, e.name, e.age, e.department, e.salary FROM employees e, AvgSal a WHERE e.salary > a.avg_val;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(10, 5, 'Department Employee Count via CTE', 'Hard', 'Advanced SQL', 15, '88.0%', 'CTE with GROUP BY', 'CTE se department-wise employee count nikalo.', 'WITH DeptCounts AS (SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department) SELECT * FROM DeptCounts;', 'WITH DeptCounts AS (SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department) SELECT * FROM DeptCounts;', ['department', 'emp_count'], [{ department: 'IT', emp_count: 2 }, { department: 'HR', emp_count: 1 }, { department: 'Finance', emp_count: 1 }, { department: 'Marketing', emp_count: 1 }]),
  makeTask(10, 6, 'Annual Salary Calculation in CTE', 'Hard', 'Advanced SQL', 15, '89.0%', 'CTE with arithmetic expression', 'CTE mein annual salary calculate karke result display karo.', 'WITH AnnualPay AS (SELECT name, (salary * 12) AS annual_salary FROM employees) SELECT * FROM AnnualPay;', 'WITH AnnualPay AS (SELECT name, (salary * 12) AS annual_salary FROM employees) SELECT * FROM AnnualPay;', ['name', 'annual_salary'], [{ name: 'Rahul Sharma', annual_salary: 720000 }, { name: 'Priya Singh', annual_salary: 600000 }, { name: 'Amit Kumar', annual_salary: 840000 }, { name: 'Neha Gupta', annual_salary: 660000 }, { name: 'Vikram Mehta', annual_salary: 780000 }]),
  makeTask(10, 7, 'Find Highest Paid Employee via CTE', 'Hard', 'Advanced SQL', 15, '85.2%', 'CTE with MAX condition', 'CTE se highest-paid employee find karo.', 'WITH MaxPay AS (SELECT MAX(salary) AS max_sal FROM employees) SELECT e.* FROM employees e, MaxPay m WHERE e.salary = m.max_sal;', 'WITH MaxPay AS (SELECT MAX(salary) AS max_sal FROM employees) SELECT e.id, e.name, e.age, e.department, e.salary FROM employees e, MaxPay m WHERE e.salary = m.max_sal;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(10, 8, 'Departments with Avg Salary > 60,000 via CTE', 'Hard', 'Advanced SQL', 15, '84.8%', 'CTE with threshold filter', 'CTE se department-wise average salary calculate karke ₹60,000 se zyada average wale departments display karo.', 'WITH DeptAvg AS (SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department) SELECT * FROM DeptAvg WHERE avg_salary > 60000;', 'WITH DeptAvg AS (SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department) SELECT * FROM DeptAvg WHERE avg_salary > 60000;', ['department', 'avg_salary'], [{ department: 'IT', avg_salary: 62500 }, { department: 'Finance', avg_salary: 70000 }]),
  makeTask(10, 9, 'Chained CTE Department Totals', 'Hard', 'Advanced SQL', 15, '83.0%', 'Chaining two CTEs', 'Ek CTE mein department totals calculate karo aur doosre mein un totals ko filter karo.', 'WITH DeptTotals AS (SELECT department, SUM(salary) AS total_sal FROM employees GROUP BY department), Filtered AS (SELECT * FROM DeptTotals WHERE total_sal > 60000) SELECT * FROM Filtered;', 'WITH DeptTotals AS (SELECT department, SUM(salary) AS total_sal FROM employees GROUP BY department), Filtered AS (SELECT * FROM DeptTotals WHERE total_sal > 60000) SELECT * FROM Filtered;', ['department', 'total_sal'], [{ department: 'IT', total_sal: 125000 }, { department: 'Finance', total_sal: 70000 }]),
  makeTask(10, 10, 'Full Department Metrics Report via CTE', 'Hard', 'Advanced SQL', 15, '82.5%', 'Comprehensive CTE Report', 'Multiple CTEs use karke department-wise employee count, average salary aur total salary report banao.', 'WITH DeptSummary AS (SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary, SUM(salary) AS total_salary FROM employees GROUP BY department) SELECT * FROM DeptSummary;', 'WITH DeptSummary AS (SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_salary, SUM(salary) AS total_salary FROM employees GROUP BY department) SELECT * FROM DeptSummary;', ['department', 'emp_count', 'avg_salary', 'total_salary'], [{ department: 'IT', emp_count: 2, avg_salary: 62500, total_salary: 125000 }, { department: 'HR', emp_count: 1, avg_salary: 50000, total_salary: 50000 }, { department: 'Finance', emp_count: 1, avg_salary: 70000, total_salary: 70000 }, { department: 'Marketing', emp_count: 1, avg_salary: 55000, total_salary: 55000 }])
];

// ─────────────────────────────────────────────────────────────
// 11. DISTINCT Keyword (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_11_QUESTIONS: SqlChallengeTask[] = [
  makeTask(11, 1, 'Unique Department Names', 'Easy', 'SQL Basics', 5, '98.0%', 'DISTINCT', 'Saare unique department names display karo.', 'SELECT DISTINCT department FROM employees;', 'SELECT DISTINCT department FROM employees;', ['department'], [{ department: 'IT' }, { department: 'HR' }, { department: 'Finance' }, { department: 'Marketing' }]),
  makeTask(11, 2, 'Unique Employee Ages', 'Easy', 'SQL Basics', 5, '97.2%', 'DISTINCT age', 'Saare unique employee ages display karo.', 'SELECT DISTINCT age FROM employees;', 'SELECT DISTINCT age FROM employees;', ['age'], [{ age: 28 }, { age: 25 }, { age: 32 }, { age: 29 }, { age: 30 }]),
  makeTask(11, 3, 'Unique Salary Values', 'Easy', 'SQL Basics', 5, '96.5%', 'DISTINCT salary', 'Saare unique salary values display karo.', 'SELECT DISTINCT salary FROM employees;', 'SELECT DISTINCT salary FROM employees;', ['salary'], [{ salary: 60000 }, { salary: 50000 }, { salary: 70000 }, { salary: 55000 }, { salary: 65000 }]),
  makeTask(11, 4, 'Unique Department & Age Pairs', 'Easy', 'SQL Basics', 5, '95.0%', 'DISTINCT col1, col2', 'Unique department aur age combinations display karo.', 'SELECT DISTINCT department, age FROM employees;', 'SELECT DISTINCT department, age FROM employees;', ['department', 'age'], [{ department: 'IT', age: 28 }, { department: 'HR', age: 25 }, { department: 'Finance', age: 32 }, { department: 'Marketing', age: 29 }, { department: 'IT', age: 30 }]),
  makeTask(11, 5, 'Unique Department & Salary Pairs', 'Easy', 'SQL Basics', 5, '95.2%', 'DISTINCT col1, col2', 'Unique department aur salary combinations display karo.', 'SELECT DISTINCT department, salary FROM employees;', 'SELECT DISTINCT department, salary FROM employees;', ['department', 'salary'], [{ department: 'IT', salary: 60000 }, { department: 'HR', salary: 50000 }, { department: 'Finance', salary: 70000 }, { department: 'Marketing', salary: 55000 }, { department: 'IT', salary: 65000 }]),
  makeTask(11, 6, 'Count Unique Departments', 'Easy', 'SQL Basics', 5, '96.0%', 'COUNT(DISTINCT ...)', 'Total unique departments ki count nikalo.', 'SELECT COUNT(DISTINCT department) FROM employees;', 'SELECT COUNT(DISTINCT department) AS unique_departments FROM employees;', ['unique_departments'], [{ unique_departments: 4 }]),
  makeTask(11, 7, 'Count Unique Age Values', 'Easy', 'SQL Basics', 5, '96.2%', 'COUNT(DISTINCT age)', 'Total unique age values ki count nikalo.', 'SELECT COUNT(DISTINCT age) FROM employees;', 'SELECT COUNT(DISTINCT age) AS unique_ages FROM employees;', ['unique_ages'], [{ unique_ages: 5 }]),
  makeTask(11, 8, 'Count Unique Department & Age Pairs', 'Easy', 'SQL Basics', 5, '94.0%', 'COUNT(DISTINCT combo)', 'Unique department aur age combinations ki count nikalo.', 'SELECT COUNT(DISTINCT department || \'-\' || age) FROM employees;', 'SELECT COUNT(DISTINCT department || \'-\' || age) AS unique_combinations FROM employees;', ['unique_combinations'], [{ unique_combinations: 5 }]),
  makeTask(11, 9, 'Unique Cities from Customers', 'Easy', 'SQL Basics', 5, '95.5%', 'DISTINCT on another table', 'Customer table se unique cities display karo.', 'SELECT DISTINCT city FROM customers;', 'SELECT DISTINCT city FROM customers;', ['city'], [{ city: 'Bengaluru' }, { city: 'Mumbai' }, { city: 'Delhi' }]),
  makeTask(11, 10, 'Count Unique Customers in Orders', 'Easy', 'SQL Basics', 5, '96.8%', 'COUNT(DISTINCT customer_id)', 'Orders table se unique customer IDs ki count nikalo.', 'SELECT COUNT(DISTINCT customer_id) FROM orders;', 'SELECT COUNT(DISTINCT customer_id) AS unique_customers FROM orders;', ['unique_customers'], [{ unique_customers: 120 }])
];

// ─────────────────────────────────────────────────────────────
// 12. LIMIT & OFFSET (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_12_QUESTIONS: SqlChallengeTask[] = [
  makeTask(12, 1, 'First 3 Employees', 'Easy', 'SQL Basics', 5, '98.5%', 'LIMIT 3', 'Pehle 3 employees display karo.', 'SELECT * FROM employees LIMIT 3;', 'SELECT * FROM employees LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS.slice(0, 3)),
  makeTask(12, 2, 'First 5 Employees', 'Easy', 'SQL Basics', 5, '98.0%', 'LIMIT 5', 'Pehle 5 employees display karo.', 'SELECT * FROM employees LIMIT 5;', 'SELECT * FROM employees LIMIT 5;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(12, 3, 'Top 2 Highest Paid Employees', 'Easy', 'SQL Basics', 5, '97.0%', 'ORDER BY salary DESC LIMIT 2', 'Salary descending order mein top 2 employees display karo.', 'ORDER BY salary DESC LIMIT 2', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(12, 4, 'Bottom 3 Lowest Paid Employees', 'Easy', 'SQL Basics', 5, '96.4%', 'ORDER BY salary ASC LIMIT 3', 'Salary ascending order mein pehle 3 employees display karo.', 'ORDER BY salary ASC LIMIT 3', 'SELECT * FROM employees ORDER BY salary ASC LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(12, 5, 'Skip First 2 Records and Fetch Next 2', 'Easy', 'SQL Basics', 5, '94.8%', 'LIMIT 2 OFFSET 2', 'Sorted employee list ke first 2 records skip karke next 2 display karo.', 'LIMIT 2 OFFSET 2', 'SELECT * FROM employees ORDER BY id ASC LIMIT 2 OFFSET 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(12, 6, 'Third Highest Salary Record', 'Easy', 'SQL Basics', 5, '93.5%', 'LIMIT 1 OFFSET 2', 'Salary descending order mein third-highest record display karo using LIMIT and OFFSET.', 'ORDER BY salary DESC LIMIT 1 OFFSET 2', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(12, 7, 'Pagination Page 1 (2 per page)', 'Easy', 'SQL Basics', 5, '95.0%', 'LIMIT 2 OFFSET 0', 'Employees ko 2 records per page ke hisaab se display karo, first page se start karke.', 'LIMIT 2 OFFSET 0', 'SELECT * FROM employees ORDER BY id ASC LIMIT 2 OFFSET 0;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(12, 8, 'Positions 3 to 5 Alphabetically', 'Easy', 'SQL Basics', 5, '93.0%', 'LIMIT 3 OFFSET 2', 'Alphabetically sorted names mein se positions 3–5 display karo.', 'ORDER BY name ASC LIMIT 3 OFFSET 2', 'SELECT * FROM employees ORDER BY name ASC LIMIT 3 OFFSET 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(12, 9, 'Top 3 Salary Earners', 'Easy', 'SQL Basics', 5, '96.2%', 'ORDER BY salary DESC LIMIT 3', 'Salary descending order mein top 3 employees display karo.', 'ORDER BY salary DESC LIMIT 3', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(12, 10, 'Pagination Page 2 (3 per page)', 'Easy', 'SQL Basics', 5, '94.5%', 'LIMIT 3 OFFSET 3', 'ORDER BY, LIMIT aur OFFSET use karke second page of employees retrieve karo, with 3 employees per page.', 'ORDER BY id ASC LIMIT 3 OFFSET 3', 'SELECT * FROM employees ORDER BY id ASC LIMIT 3 OFFSET 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }])
];

// ─────────────────────────────────────────────────────────────
// 13. LIKE Operator (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_13_QUESTIONS: SqlChallengeTask[] = [
  makeTask(13, 1, 'Names Starting with R', 'Easy', 'Data Querying', 5, '97.4%', 'LIKE \'R%\'', 'Un employees ko find karo jinke names R se start hote hain.', 'WHERE name LIKE \'R%\'', 'SELECT * FROM employees WHERE name LIKE \'R%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(13, 2, 'Names Ending with a', 'Easy', 'Data Querying', 5, '96.8%', 'LIKE \'%a\'', 'Un employees ko find karo jinke names a par end hote hain.', 'WHERE name LIKE \'%a\'', 'SELECT * FROM employees WHERE name LIKE \'%a\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(13, 3, 'Names Containing "ha"', 'Easy', 'Data Querying', 5, '96.0%', 'LIKE \'%ha%\'', 'Un employees ko find karo jinke names mein ha aata hai.', 'WHERE name LIKE \'%ha%\'', 'SELECT * FROM employees WHERE name LIKE \'%ha%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(13, 4, 'Names with Exactly 5 Characters in First Word', 'Easy', 'Data Querying', 5, '92.5%', 'Underscore wildcard _', 'Un employees ko find karo jinke names mein exactly 5 characters hain (or first name 5 chars).', 'WHERE name LIKE \'_____ %\' OR name LIKE \'_____\'', 'SELECT * FROM employees WHERE name LIKE \'_____ %\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(13, 5, 'Names Starting with A', 'Easy', 'Data Querying', 5, '97.2%', 'LIKE \'A%\'', 'Un employees ko find karo jinke names A se start hote hain.', 'WHERE name LIKE \'A%\'', 'SELECT * FROM employees WHERE name LIKE \'A%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(13, 6, 'Departments Containing "i"', 'Easy', 'Data Querying', 5, '95.0%', 'LIKE on department', 'Un employees ko find karo jinke department names mein i aata hai.', 'WHERE department LIKE \'%i%\' OR department LIKE \'%I%\'', 'SELECT * FROM employees WHERE LOWER(department) LIKE \'%i%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(13, 7, 'Names with Second Character "a"', 'Easy', 'Data Querying', 5, '93.8%', 'Underscore wildcard _a%', 'Un employees ko find karo jinke names ka second character a hai.', 'WHERE name LIKE \'_a%\'', 'SELECT * FROM employees WHERE name LIKE \'_a%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(13, 8, 'Names Containing "ar"', 'Easy', 'Data Querying', 5, '95.5%', 'LIKE \'%ar%\'', 'Un employees ko find karo jinke names mein ar aata hai.', 'WHERE name LIKE \'%ar%\'', 'SELECT * FROM employees WHERE name LIKE \'%ar%\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }]),
  makeTask(13, 9, 'Names Starting with S or Ending in a', 'Easy', 'Data Querying', 5, '94.2%', 'LIKE with OR', 'Un employees ko find karo jinke names S se start hote hain ya a par end hote hain.', 'WHERE name LIKE \'S%\' OR name LIKE \'%a\'', 'SELECT * FROM employees WHERE name LIKE \'S%\' OR name LIKE \'%a\';', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(13, 10, 'Emails Ending in gmail.com', 'Easy', 'Data Querying', 5, '96.0%', 'LIKE \'%gmail.com\'', 'Customer table se un customers ko find karo jinke email addresses gmail.com par end hote hain.', 'WHERE email LIKE \'%gmail.com\'', 'SELECT * FROM customers WHERE email LIKE \'%gmail.com\';', ['customer_id', 'name', 'email'], [{ customer_id: 1, name: 'Rahul', email: 'rahul@gmail.com' }, { customer_id: 2, name: 'Priya', email: 'priya@gmail.com' }])
];

// ─────────────────────────────────────────────────────────────
// 14. IS NULL / IS NOT NULL (Basic) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_14_QUESTIONS: SqlChallengeTask[] = [
  makeTask(14, 1, 'Salary IS NULL', 'Easy', 'SQL Basics', 5, '97.2%', 'IS NULL', 'Un employees ko display karo jinki salary NULL hai.', 'WHERE salary IS NULL', 'SELECT * FROM employees WHERE salary IS NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, []),
  makeTask(14, 2, 'Salary IS NOT NULL', 'Easy', 'SQL Basics', 5, '97.8%', 'IS NOT NULL', 'Un employees ko display karo jinki salary NULL nahi hai.', 'WHERE salary IS NOT NULL', 'SELECT * FROM employees WHERE salary IS NOT NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(14, 3, 'Department Missing (IS NULL)', 'Easy', 'SQL Basics', 5, '96.5%', 'IS NULL check', 'Un employees ko find karo jinka department missing hai.', 'WHERE department IS NULL', 'SELECT * FROM employees WHERE department IS NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, []),
  makeTask(14, 4, 'Department Available (IS NOT NULL)', 'Easy', 'SQL Basics', 5, '97.0%', 'IS NOT NULL check', 'Un employees ko find karo jinka department available hai.', 'WHERE department IS NOT NULL', 'SELECT * FROM employees WHERE department IS NOT NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(14, 5, 'Age Missing (IS NULL)', 'Easy', 'SQL Basics', 5, '96.0%', 'IS NULL on age', 'Un employees ko find karo jinki age missing hai.', 'WHERE age IS NULL', 'SELECT * FROM employees WHERE age IS NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, []),
  makeTask(14, 6, 'Count Missing Salaries', 'Easy', 'SQL Basics', 5, '95.5%', 'COUNT with IS NULL', 'Count karo kitne employees ki salary missing hai.', 'SELECT COUNT(*) FROM employees WHERE salary IS NULL;', 'SELECT COUNT(*) AS missing_salary_count FROM employees WHERE salary IS NULL;', ['missing_salary_count'], [{ missing_salary_count: 0 }]),
  makeTask(14, 7, 'Count Missing Departments', 'Easy', 'SQL Basics', 5, '95.0%', 'COUNT with IS NULL on department', 'Count karo kitne employees ke department missing hain.', 'SELECT COUNT(*) FROM employees WHERE department IS NULL;', 'SELECT COUNT(*) AS missing_dept_count FROM employees WHERE department IS NULL;', ['missing_dept_count'], [{ missing_dept_count: 0 }]),
  makeTask(14, 8, 'Salary and Department Both NOT NULL', 'Easy', 'SQL Basics', 5, '96.4%', 'Compound IS NOT NULL', 'Un employees ko display karo jinki salary aur department dono NULL nahi hain.', 'WHERE salary IS NOT NULL AND department IS NOT NULL', 'SELECT * FROM employees WHERE salary IS NOT NULL AND department IS NOT NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(14, 9, 'Age or Salary Missing (IS NULL)', 'Easy', 'SQL Basics', 5, '94.2%', 'IS NULL with OR', 'Un employees ko find karo jinki age ya salary mein se kam se kam ek value missing hai.', 'WHERE age IS NULL OR salary IS NULL', 'SELECT * FROM employees WHERE age IS NULL OR salary IS NULL;', COMMON_EMPLOYEES_INPUT_HEADERS, []),
  makeTask(14, 10, 'Department-wise Missing Salaries', 'Easy', 'SQL Basics', 5, '93.0%', 'Conditional count with GROUP BY', 'Har department ke employee records mein missing salary entries ki count calculate karo.', 'SELECT department, COUNT(CASE WHEN salary IS NULL THEN 1 END) AS missing_salaries FROM employees GROUP BY department;', 'SELECT department, COUNT(CASE WHEN salary IS NULL THEN 1 END) AS missing_salaries FROM employees GROUP BY department;', ['department', 'missing_salaries'], [{ department: 'IT', missing_salaries: 0 }, { department: 'HR', missing_salaries: 0 }, { department: 'Finance', missing_salaries: 0 }, { department: 'Marketing', missing_salaries: 0 }])
];

// Helper for UNION compatibility
const UNION_SAMPLE_INPUT_STR = 'Table customers_2025:\ncustomer_name\nRahul Sharma\nAmit Kumar\nSara Ali\n\nTable customers_2026:\ncustomer_name\nAmit Kumar\nNeha Gupta\nVikram Mehta';

// ─────────────────────────────────────────────────────────────
// 15. UNION & UNION ALL (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_15_QUESTIONS: SqlChallengeTask[] = [
  makeTask(15, 1, 'Combine Customers with UNION', 'Medium', 'Set Operations', 10, '94.5%', 'UNION', 'Dono tables ke customer names combine karo using UNION.', 'SELECT customer_name FROM customers_2025 UNION SELECT customer_name FROM customers_2026;', 'SELECT customer_name FROM customers_2025 UNION SELECT customer_name FROM customers_2026;', ['customer_name'], [{ customer_name: 'Rahul Sharma' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Sara Ali' }, { customer_name: 'Neha Gupta' }, { customer_name: 'Vikram Mehta' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 2, 'Combine Customers with UNION ALL', 'Medium', 'Set Operations', 10, '95.0%', 'UNION ALL', 'Dono tables ke customer names combine karo using UNION ALL.', 'SELECT customer_name FROM customers_2025 UNION ALL SELECT customer_name FROM customers_2026;', 'SELECT customer_name FROM customers_2025 UNION ALL SELECT customer_name FROM customers_2026;', ['customer_name'], [{ customer_name: 'Rahul Sharma' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Sara Ali' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Neha Gupta' }, { customer_name: 'Vikram Mehta' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 3, 'Unique Customer Names from Both Tables', 'Medium', 'Set Operations', 10, '94.0%', 'UNION Deduplication', 'Dono tables se unique customer names display karo.', 'SELECT customer_name FROM customers_2025 UNION SELECT customer_name FROM customers_2026;', 'SELECT customer_name FROM customers_2025 UNION SELECT customer_name FROM customers_2026;', ['customer_name'], [{ customer_name: 'Rahul Sharma' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Sara Ali' }, { customer_name: 'Neha Gupta' }, { customer_name: 'Vikram Mehta' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 4, 'Preserve Duplicates with UNION ALL', 'Medium', 'Set Operations', 10, '95.2%', 'UNION ALL Preservation', 'Dono tables se duplicate customer names preserve karte hue result display karo.', 'SELECT customer_name FROM customers_2025 UNION ALL SELECT customer_name FROM customers_2026;', 'SELECT customer_name FROM customers_2025 UNION ALL SELECT customer_name FROM customers_2026;', ['customer_name'], [{ customer_name: 'Rahul Sharma' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Sara Ali' }, { customer_name: 'Amit Kumar' }, { customer_name: 'Neha Gupta' }, { customer_name: 'Vikram Mehta' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 5, 'Combine and Sort Customers Alphabetically', 'Medium', 'Set Operations', 10, '93.5%', 'UNION with ORDER BY', 'Dono years ke customer names combine karo aur result alphabetically sort karo.', 'UNION ... ORDER BY customer_name ASC', 'SELECT customer_name FROM customers_2025 UNION SELECT customer_name FROM customers_2026 ORDER BY customer_name ASC;', ['customer_name'], [{ customer_name: 'Amit Kumar' }, { customer_name: 'Neha Gupta' }, { customer_name: 'Rahul Sharma' }, { customer_name: 'Sara Ali' }, { customer_name: 'Vikram Mehta' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 6, 'Unique Cities from Two Customer Tables', 'Medium', 'Set Operations', 10, '93.8%', 'UNION on cities', 'Dono tables ke city columns ko combine karke unique cities display karo.', 'SELECT city FROM customers_2025 UNION SELECT city FROM customers_2026;', 'SELECT city FROM customers_2025 UNION SELECT city FROM customers_2026;', ['city'], [{ city: 'Bengaluru' }, { city: 'Mumbai' }, { city: 'Delhi' }], undefined, undefined, undefined, undefined, UNION_SAMPLE_INPUT_STR),
  makeTask(15, 7, 'Combine Transaction IDs using UNION ALL', 'Medium', 'Set Operations', 10, '94.1%', 'UNION ALL on IDs', 'Do sales tables se transaction IDs combine karo using UNION ALL.', 'SELECT txn_id FROM sales_online UNION ALL SELECT txn_id FROM sales_offline;', 'SELECT txn_id FROM sales_online UNION ALL SELECT txn_id FROM sales_offline;', ['txn_id'], [{ txn_id: 101 }, { txn_id: 102 }, { txn_id: 201 }, { txn_id: 202 }]),
  makeTask(15, 8, 'Combine Current and Archived Employees', 'Medium', 'Set Operations', 10, '92.5%', 'UNION ALL on tables', 'Current aur archived employee tables se employee names combine karo.', 'SELECT name FROM employees UNION ALL SELECT name FROM employees_archived;', 'SELECT name FROM employees UNION ALL SELECT name FROM employees_archived;', ['name'], [{ name: 'Rahul Sharma' }, { name: 'Priya Singh' }, { name: 'Sunil Verma' }]),
  makeTask(15, 9, 'Deduplicate Product Names from Two Tables', 'Medium', 'Set Operations', 10, '93.0%', 'UNION on products', 'Do tables se product names combine karo, duplicate names ko remove karke.', 'SELECT product_name FROM products_a UNION SELECT product_name FROM products_b;', 'SELECT product_name FROM products_a UNION SELECT product_name FROM products_b;', ['product_name'], [{ product_name: 'Laptop' }, { product_name: 'Mouse' }, { product_name: 'Keyboard' }]),
  makeTask(15, 10, 'Three Tables Combined with UNION', 'Medium', 'Set Operations', 10, '91.4%', 'Multi-table UNION', 'Three yearly sales tables se customer IDs combine karo using UNION, with unique IDs only.', 'SELECT customer_id FROM sales_2024 UNION SELECT customer_id FROM sales_2025 UNION SELECT customer_id FROM sales_2026;', 'SELECT customer_id FROM sales_2024 UNION SELECT customer_id FROM sales_2025 UNION SELECT customer_id FROM sales_2026;', ['customer_id'], [{ customer_id: 1 }, { customer_id: 2 }, { customer_id: 3 }, { customer_id: 4 }])
];

// ─────────────────────────────────────────────────────────────
// 16. CASE Statement (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_16_QUESTIONS: SqlChallengeTask[] = [
  makeTask(16, 1, 'Salary High or Low Category', 'Medium', 'Data Transformation', 10, '95.0%', 'CASE WHEN condition', 'Salary ₹60,000 ya usse zyada ho to High, warna Low display karo.', 'CASE WHEN salary >= 60000 THEN \'High\' ELSE \'Low\' END', 'SELECT name, salary, CASE WHEN salary >= 60000 THEN \'High\' ELSE \'Low\' END AS salary_grade FROM employees;', ['name', 'salary', 'salary_grade'], [{ name: 'Rahul Sharma', salary: 60000, salary_grade: 'High' }, { name: 'Priya Singh', salary: 50000, salary_grade: 'Low' }, { name: 'Amit Kumar', salary: 70000, salary_grade: 'High' }, { name: 'Neha Gupta', salary: 55000, salary_grade: 'Low' }, { name: 'Vikram Mehta', salary: 65000, salary_grade: 'High' }]),
  makeTask(16, 2, 'Age Senior or Junior Category', 'Medium', 'Data Transformation', 10, '94.2%', 'CASE WHEN age', 'Age 30 ya usse zyada ho to Senior, warna Junior display karo.', 'CASE WHEN age >= 30 THEN \'Senior\' ELSE \'Junior\' END', 'SELECT name, age, CASE WHEN age >= 30 THEN \'Senior\' ELSE \'Junior\' END AS age_group FROM employees;', ['name', 'age', 'age_group'], [{ name: 'Rahul Sharma', age: 28, age_group: 'Junior' }, { name: 'Priya Singh', age: 25, age_group: 'Junior' }, { name: 'Amit Kumar', age: 32, age_group: 'Senior' }, { name: 'Neha Gupta', age: 29, age_group: 'Junior' }, { name: 'Vikram Mehta', age: 30, age_group: 'Senior' }]),
  makeTask(16, 3, 'Low, Medium and High Salary Tiers', 'Medium', 'Data Transformation', 10, '93.5%', 'Multiple WHEN branches', 'Salary ke basis par Low, Medium aur High salary categories banao.', 'CASE WHEN salary >= 70000 THEN \'High\' WHEN salary >= 60000 THEN \'Medium\' ELSE \'Low\' END', 'SELECT name, salary, CASE WHEN salary >= 70000 THEN \'High\' WHEN salary >= 60000 THEN \'Medium\' ELSE \'Low\' END AS salary_category FROM employees;', ['name', 'salary', 'salary_category'], [{ name: 'Rahul Sharma', salary: 60000, salary_category: 'Medium' }, { name: 'Priya Singh', salary: 50000, salary_category: 'Low' }, { name: 'Amit Kumar', salary: 70000, salary_category: 'High' }, { name: 'Neha Gupta', salary: 55000, salary_category: 'Low' }, { name: 'Vikram Mehta', salary: 65000, salary_category: 'Medium' }]),
  makeTask(16, 4, 'Adult and Young Age Groups', 'Medium', 'Data Transformation', 10, '94.0%', 'Binary classification', 'Age ke basis par Adult aur Young categories banao.', 'CASE WHEN age >= 30 THEN \'Adult\' ELSE \'Young\' END', 'SELECT name, age, CASE WHEN age >= 30 THEN \'Adult\' ELSE \'Young\' END AS category FROM employees;', ['name', 'age', 'category'], [{ name: 'Rahul Sharma', age: 28, category: 'Young' }, { name: 'Priya Singh', age: 25, category: 'Young' }, { name: 'Amit Kumar', age: 32, category: 'Adult' }, { name: 'Neha Gupta', age: 29, category: 'Young' }, { name: 'Vikram Mehta', age: 30, category: 'Adult' }]),
  makeTask(16, 5, 'Technical vs Non-Technical Departments', 'Medium', 'Data Transformation', 10, '94.5%', 'String comparison in CASE', 'IT department ke employees ko Technical, baaki ko Non-Technical label do.', 'CASE WHEN department = \'IT\' THEN \'Technical\' ELSE \'Non-Technical\' END', 'SELECT name, department, CASE WHEN department = \'IT\' THEN \'Technical\' ELSE \'Non-Technical\' END AS dept_type FROM employees;', ['name', 'department', 'dept_type'], [{ name: 'Rahul Sharma', department: 'IT', dept_type: 'Technical' }, { name: 'Priya Singh', department: 'HR', dept_type: 'Non-Technical' }, { name: 'Amit Kumar', department: 'Finance', dept_type: 'Non-Technical' }, { name: 'Neha Gupta', department: 'Marketing', dept_type: 'Non-Technical' }, { name: 'Vikram Mehta', department: 'IT', dept_type: 'Technical' }]),
  makeTask(16, 6, 'Grade Generation from Marks', 'Medium', 'Data Transformation', 10, '92.0%', 'Academic grade bins', 'Marks ke basis par A, B, C aur Fail grades generate karo.', 'CASE WHEN marks >= 80 THEN \'A\' WHEN marks >= 60 THEN \'B\' WHEN marks >= 40 THEN \'C\' ELSE \'Fail\' END', 'SELECT name, marks, CASE WHEN marks >= 80 THEN \'A\' WHEN marks >= 60 THEN \'B\' WHEN marks >= 40 THEN \'C\' ELSE \'Fail\' END AS grade FROM students;', ['name', 'marks', 'grade'], [{ name: 'Rahul', marks: 85, grade: 'A' }, { name: 'Priya', marks: 65, grade: 'B' }, { name: 'Amit', marks: 45, grade: 'C' }]),
  makeTask(16, 7, 'Salary Eligibility Status', 'Medium', 'Data Transformation', 10, '94.8%', 'Boolean flag label', 'Salary ₹60,000 se zyada ho to Eligible, warna Not Eligible display karo.', 'CASE WHEN salary > 60000 THEN \'Eligible\' ELSE \'Not Eligible\' END', 'SELECT name, salary, CASE WHEN salary > 60000 THEN \'Eligible\' ELSE \'Not Eligible\' END AS status FROM employees;', ['name', 'salary', 'status'], [{ name: 'Rahul Sharma', salary: 60000, status: 'Not Eligible' }, { name: 'Priya Singh', salary: 50000, status: 'Not Eligible' }, { name: 'Amit Kumar', salary: 70000, status: 'Eligible' }, { name: 'Neha Gupta', salary: 55000, status: 'Not Eligible' }, { name: 'Vikram Mehta', salary: 65000, status: 'Eligible' }]),
  makeTask(16, 8, 'Custom Department Names', 'Medium', 'Data Transformation', 10, '93.2%', 'Mapping department labels', 'Department ke basis par custom department labels create karo.', 'CASE department WHEN \'IT\' THEN \'Technology\' WHEN \'HR\' THEN \'People\' ELSE department END', 'SELECT name, CASE department WHEN \'IT\' THEN \'Technology\' WHEN \'HR\' THEN \'People\' ELSE department END AS custom_dept FROM employees;', ['name', 'custom_dept'], [{ name: 'Rahul Sharma', custom_dept: 'Technology' }, { name: 'Priya Singh', custom_dept: 'People' }, { name: 'Amit Kumar', custom_dept: 'Finance' }, { name: 'Neha Gupta', custom_dept: 'Marketing' }, { name: 'Vikram Mehta', custom_dept: 'Technology' }]),
  makeTask(16, 9, 'Annual Salary Categories', 'Medium', 'Data Transformation', 10, '92.4%', 'Calculated field in CASE', 'CASE se monthly salary ko annual salary categories mein classify karo.', 'CASE WHEN salary * 12 >= 800000 THEN \'Tier 1\' ELSE \'Tier 2\' END', 'SELECT name, salary * 12 AS annual_sal, CASE WHEN salary * 12 >= 800000 THEN \'Tier 1\' ELSE \'Tier 2\' END AS annual_tier FROM employees;', ['name', 'annual_sal', 'annual_tier'], [{ name: 'Rahul Sharma', annual_sal: 720000, annual_tier: 'Tier 2' }, { name: 'Priya Singh', annual_sal: 600000, annual_tier: 'Tier 2' }, { name: 'Amit Kumar', annual_sal: 840000, annual_tier: 'Tier 1' }, { name: 'Neha Gupta', annual_sal: 660000, annual_tier: 'Tier 2' }, { name: 'Vikram Mehta', annual_sal: 780000, annual_tier: 'Tier 2' }]),
  makeTask(16, 10, 'Dual Classification Report', 'Medium', 'Data Transformation', 10, '91.0%', 'Two CASE columns', 'Ek employee report banao jisme salary category aur age category dono calculated columns hon.', 'SELECT name, CASE WHEN salary >= 60000 THEN \'High\' ELSE \'Low\' END AS salary_cat, CASE WHEN age >= 30 THEN \'Senior\' ELSE \'Junior\' END AS age_cat FROM employees;', 'SELECT name, CASE WHEN salary >= 60000 THEN \'High\' ELSE \'Low\' END AS salary_cat, CASE WHEN age >= 30 THEN \'Senior\' ELSE \'Junior\' END AS age_cat FROM employees;', ['name', 'salary_cat', 'age_cat'], [{ name: 'Rahul Sharma', salary_cat: 'High', age_cat: 'Junior' }, { name: 'Priya Singh', salary_cat: 'Low', age_cat: 'Junior' }, { name: 'Amit Kumar', salary_cat: 'High', age_cat: 'Senior' }, { name: 'Neha Gupta', salary_cat: 'Low', age_cat: 'Junior' }, { name: 'Vikram Mehta', salary_cat: 'High', age_cat: 'Senior' }])
];

// ─────────────────────────────────────────────────────────────
// 17. Date & Time Functions (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_17_QUESTIONS: SqlChallengeTask[] = [
  makeTask(17, 1, 'Display Employee Hire Date', 'Medium', 'Date Functions', 10, '96.0%', 'Date Column Selection', 'Har employee ki hiring date display karo.', 'SELECT name, hire_date FROM employees;', 'SELECT name, hire_date FROM employees;', ['name', 'hire_date'], [{ name: 'Rahul Sharma', hire_date: '2025-01-15' }, { name: 'Priya Singh', hire_date: '2025-03-20' }, { name: 'Amit Kumar', hire_date: '2024-11-10' }]),
  makeTask(17, 2, 'Extract Hiring Year', 'Medium', 'Date Functions', 10, '95.2%', 'EXTRACT(YEAR FROM date)', 'Hiring year extract karo.', 'EXTRACT(YEAR FROM hire_date)', 'SELECT name, EXTRACT(YEAR FROM hire_date) AS hire_year FROM employees;', ['name', 'hire_year'], [{ name: 'Rahul Sharma', hire_year: 2025 }, { name: 'Priya Singh', hire_year: 2025 }, { name: 'Amit Kumar', hire_year: 2024 }]),
  makeTask(17, 3, 'Extract Hiring Month', 'Medium', 'Date Functions', 10, '94.8%', 'EXTRACT(MONTH FROM date)', 'Hiring month extract karo.', 'EXTRACT(MONTH FROM hire_date)', 'SELECT name, EXTRACT(MONTH FROM hire_date) AS hire_month FROM employees;', ['name', 'hire_month'], [{ name: 'Rahul Sharma', hire_month: 1 }, { name: 'Priya Singh', hire_month: 3 }, { name: 'Amit Kumar', hire_month: 11 }]),
  makeTask(17, 4, 'Extract Hiring Day', 'Medium', 'Date Functions', 10, '95.0%', 'EXTRACT(DAY FROM date)', 'Hiring day extract karo.', 'EXTRACT(DAY FROM hire_date)', 'SELECT name, EXTRACT(DAY FROM hire_date) AS hire_day FROM employees;', ['name', 'hire_day'], [{ name: 'Rahul Sharma', hire_day: 15 }, { name: 'Priya Singh', hire_day: 20 }, { name: 'Amit Kumar', hire_day: 10 }]),
  makeTask(17, 5, 'Sort by Hiring Date', 'Medium', 'Date Functions', 10, '96.2%', 'ORDER BY date ASC', 'Hiring date ke basis par employees ko sort karo.', 'ORDER BY hire_date ASC', 'SELECT * FROM employees ORDER BY hire_date ASC;', ['id', 'name', 'hire_date'], [{ id: 3, name: 'Amit Kumar', hire_date: '2024-11-10' }, { id: 1, name: 'Rahul Sharma', hire_date: '2025-01-15' }, { id: 2, name: 'Priya Singh', hire_date: '2025-03-20' }]),
  makeTask(17, 6, 'Employees Hired in 2025', 'Medium', 'Date Functions', 10, '94.0%', 'Filter on extracted year', '2025 mein hire hue employees find karo.', 'WHERE EXTRACT(YEAR FROM hire_date) = 2025', 'SELECT * FROM employees WHERE EXTRACT(YEAR FROM hire_date) = 2025;', ['id', 'name', 'hire_date'], [{ id: 1, name: 'Rahul Sharma', hire_date: '2025-01-15' }, { id: 2, name: 'Priya Singh', hire_date: '2025-03-20' }]),
  makeTask(17, 7, 'Display Current Date', 'Medium', 'Date Functions', 10, '97.5%', 'CURRENT_DATE', 'Current date display karo.', 'SELECT CURRENT_DATE AS today;', 'SELECT CURRENT_DATE AS today;', ['today'], [{ today: '2026-10-25' }]),
  makeTask(17, 8, 'Employee Tenure in Days', 'Medium', 'Date Functions', 10, '91.2%', 'Date subtraction', 'Har employee ke tenure ko days mein calculate karo.', 'CURRENT_DATE - hire_date', 'SELECT name, (CURRENT_DATE - hire_date) AS tenure_days FROM employees;', ['name', 'tenure_days'], [{ name: 'Rahul Sharma', tenure_days: 648 }, { name: 'Priya Singh', tenure_days: 584 }]),
  makeTask(17, 9, 'Monthly Orders Count', 'Medium', 'Date Functions', 10, '92.5%', 'GROUP BY Month', 'Har month ke orders ki count nikalo.', 'SELECT EXTRACT(MONTH FROM order_date) AS month, COUNT(*) AS total_orders FROM orders GROUP BY EXTRACT(MONTH FROM order_date);', 'SELECT EXTRACT(MONTH FROM order_date) AS month, COUNT(*) AS total_orders FROM orders GROUP BY EXTRACT(MONTH FROM order_date);', ['month', 'total_orders'], [{ month: 1, total_orders: 45 }, { month: 2, total_orders: 52 }, { month: 3, total_orders: 68 }]),
  makeTask(17, 10, 'Monthly Sales Revenue Report', 'Medium', 'Date Functions', 10, '90.4%', 'Monthly Revenue Report', 'Monthly sales report banao jisme order month aur total sales display ho.', 'SELECT EXTRACT(MONTH FROM order_date) AS order_month, SUM(amount) AS total_sales FROM orders GROUP BY order_month ORDER BY order_month;', 'SELECT EXTRACT(MONTH FROM order_date) AS order_month, SUM(amount) AS total_sales FROM orders GROUP BY order_month ORDER BY order_month;', ['order_month', 'total_sales'], [{ order_month: 1, total_sales: 125000 }, { order_month: 2, total_sales: 148000 }])
];

// ─────────────────────────────────────────────────────────────
// 18. String Functions (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_18_QUESTIONS: SqlChallengeTask[] = [
  makeTask(18, 1, 'Names in UPPERCASE', 'Medium', 'String Functions', 10, '97.8%', 'UPPER()', 'Employee names ko uppercase mein display karo.', 'SELECT UPPER(name) FROM employees;', 'SELECT UPPER(name) AS upper_name FROM employees;', ['upper_name'], [{ upper_name: 'RAHUL SHARMA' }, { upper_name: 'PRIYA SINGH' }, { upper_name: 'AMIT KUMAR' }, { upper_name: 'NEHA GUPTA' }, { upper_name: 'VIKRAM MEHTA' }]),
  makeTask(18, 2, 'Names in LOWERCASE', 'Medium', 'String Functions', 10, '97.5%', 'LOWER()', 'Employee names ko lowercase mein display karo.', 'SELECT LOWER(name) FROM employees;', 'SELECT LOWER(name) AS lower_name FROM employees;', ['lower_name'], [{ lower_name: 'rahul sharma' }, { lower_name: 'priya singh' }, { lower_name: 'amit kumar' }, { lower_name: 'neha gupta' }, { lower_name: 'vikram mehta' }]),
  makeTask(18, 3, 'Length of Employee Names', 'Medium', 'String Functions', 10, '96.2%', 'LENGTH()', 'Har employee name ki length calculate karo.', 'SELECT name, LENGTH(name) FROM employees;', 'SELECT name, LENGTH(name) AS name_length FROM employees;', ['name', 'name_length'], [{ name: 'Rahul Sharma', name_length: 12 }, { name: 'Priya Singh', name_length: 11 }, { name: 'Amit Kumar', name_length: 10 }, { name: 'Neha Gupta', name_length: 10 }, { name: 'Vikram Mehta', name_length: 12 }]),
  makeTask(18, 4, 'TRIM Extra Whitespace', 'Medium', 'String Functions', 10, '95.0%', 'TRIM()', 'Names ke aage aur peeche ke extra spaces remove karo using TRIM().', 'SELECT TRIM(name) FROM employees;', 'SELECT TRIM(name) AS clean_name FROM employees;', ['clean_name'], [{ clean_name: 'Rahul Sharma' }, { clean_name: 'Priya Singh' }, { clean_name: 'Amit Kumar' }, { clean_name: 'Neha Gupta' }, { clean_name: 'Vikram Mehta' }]),
  makeTask(18, 5, 'First 3 Characters of Name', 'Medium', 'String Functions', 10, '94.2%', 'SUBSTRING / LEFT', 'Employee name ke first 3 characters display karo.', 'SUBSTRING(name, 1, 3)', 'SELECT SUBSTRING(name, 1, 3) AS short_name FROM employees;', ['short_name'], [{ short_name: 'Rah' }, { short_name: 'Pri' }, { short_name: 'Ami' }, { short_name: 'Neh' }, { short_name: 'Vik' }]),
  makeTask(18, 6, 'Uppercase Department Names', 'Medium', 'String Functions', 10, '96.5%', 'UPPER(department)', 'Department names ko uppercase mein convert karo.', 'SELECT UPPER(department) FROM employees;', 'SELECT UPPER(department) AS dept_upper FROM employees;', ['dept_upper'], [{ dept_upper: 'IT' }, { dept_upper: 'HR' }, { dept_upper: 'FINANCE' }, { dept_upper: 'MARKETING' }, { dept_upper: 'IT' }]),
  makeTask(18, 7, 'Replace String with REPLACE()', 'Medium', 'String Functions', 10, '93.4%', 'REPLACE(col, from, to)', 'Employee name mein ek specified word replace karo using REPLACE().', 'REPLACE(name, \'Kumar\', \'Singh\')', 'SELECT REPLACE(name, \'Kumar\', \'Singh\') AS updated_name FROM employees;', ['updated_name'], [{ updated_name: 'Rahul Sharma' }, { updated_name: 'Priya Singh' }, { updated_name: 'Amit Singh' }, { updated_name: 'Neha Gupta' }, { updated_name: 'Vikram Mehta' }]),
  makeTask(18, 8, 'Concatenate Full Name', 'Medium', 'String Functions', 10, '95.8%', 'CONCAT or ||', 'First name aur last name ko combine karke full name display karo.', 'SELECT first_name || \' \' || last_name AS full_name FROM employees;', 'SELECT first_name || \' \' || last_name AS full_name FROM employees;', ['full_name'], [{ full_name: 'Rahul Sharma' }, { full_name: 'Priya Singh' }]),
  makeTask(18, 9, 'Prefix and Suffix Characters', 'Medium', 'String Functions', 10, '92.0%', 'LEFT and RIGHT', 'Employee names ke first 2 characters aur last 2 characters display karo.', 'SELECT LEFT(name, 2) AS prefix, RIGHT(name, 2) AS suffix FROM employees;', 'SELECT LEFT(name, 2) AS prefix, RIGHT(name, 2) AS suffix FROM employees;', ['prefix', 'suffix'], [{ prefix: 'Ra', suffix: 'ma' }, { prefix: 'Pr', suffix: 'gh' }, { prefix: 'Am', suffix: 'ar' }]),
  makeTask(18, 10, 'Name Cleaning Summary Report', 'Medium', 'String Functions', 10, '91.5%', 'Composite String Functions', 'Name cleaning report banao jisme trimmed name, uppercase name aur name length ho.', 'SELECT TRIM(name) AS clean_name, UPPER(TRIM(name)) AS upper_name, LENGTH(TRIM(name)) AS name_len FROM employees;', 'SELECT TRIM(name) AS clean_name, UPPER(TRIM(name)) AS upper_name, LENGTH(TRIM(name)) AS name_len FROM employees;', ['clean_name', 'upper_name', 'name_len'], [{ clean_name: 'Rahul Sharma', upper_name: 'RAHUL SHARMA', name_len: 12 }, { clean_name: 'Priya Singh', upper_name: 'PRIYA SINGH', name_len: 11 }])
];

// ─────────────────────────────────────────────────────────────
// 19. INNER JOIN (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_19_QUESTIONS: SqlChallengeTask[] = [
  makeTask(19, 1, 'Employees and Matching Departments', 'Medium', 'Joins', 10, '95.5%', 'INNER JOIN on department_id', 'Employees aur matching departments display karo.', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Neha Gupta', department_name: 'Marketing' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 2, 'Employee Name and Department Name', 'Medium', 'Joins', 10, '95.0%', 'Two-column INNER JOIN', 'Employee name aur department name display karo.', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Neha Gupta', department_name: 'Marketing' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 3, 'Filter IT Department via INNER JOIN', 'Medium', 'Joins', 10, '94.2%', 'INNER JOIN with WHERE', 'Sirf IT department ke employees display karo.', 'WHERE d.department_name = \'IT\'', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id WHERE d.department_name = \'IT\';', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 4, 'Finance Department Employee Names', 'Medium', 'Joins', 10, '94.8%', 'INNER JOIN with WHERE Finance', 'Finance department ke employee names display karo.', 'WHERE d.department_name = \'Finance\'', 'SELECT e.name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id WHERE d.department_name = \'Finance\';', ['name'], [{ name: 'Amit Kumar' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 5, 'Name, Department ID and Department Name', 'Medium', 'Joins', 10, '93.6%', 'Projecting Foreign Key and Name', 'Employee name aur department ID display karo along with matching department name.', 'SELECT e.name, e.department_id, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, e.department_id, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_id', 'department_name'], [{ name: 'Rahul Sharma', department_id: 1, department_name: 'IT' }, { name: 'Priya Singh', department_id: 2, department_name: 'HR' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 6, 'Sort by Department Name Alphabetical', 'Medium', 'Joins', 10, '92.8%', 'INNER JOIN with ORDER BY', 'Employees ko department name ke alphabetical order mein sort karo.', 'ORDER BY d.department_name ASC', 'SELECT e.name, d.department_name FROM employees e INNER JOIN departments d ON e.department_id = d.department_id ORDER BY d.department_name ASC;', ['name', 'department_name'], [{ name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Vikram Mehta', department_name: 'IT' }, { name: 'Neha Gupta', department_name: 'Marketing' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 7, 'Employee Count per Matching Department', 'Medium', 'Joins', 10, '91.4%', 'INNER JOIN with GROUP BY', 'Har matching department mein employees ki count nikalo.', 'SELECT d.department_name, COUNT(*) AS emp_count FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(*) AS emp_count FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'emp_count'], [{ department_name: 'IT', emp_count: 2 }, { department_name: 'HR', emp_count: 1 }, { department_name: 'Finance', emp_count: 1 }, { department_name: 'Marketing', emp_count: 1 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 8, 'Total Salary Expense per Department', 'Medium', 'Joins', 10, '92.0%', 'INNER JOIN with SUM', 'Har department ka total salary expense calculate karo.', 'SELECT d.department_name, SUM(e.salary) AS total_expense FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, SUM(e.salary) AS total_expense FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'total_expense'], [{ department_name: 'IT', total_expense: 125000 }, { department_name: 'HR', total_expense: 50000 }, { department_name: 'Finance', total_expense: 70000 }, { department_name: 'Marketing', total_expense: 55000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 9, 'Matching Records Verification', 'Medium', 'Joins', 10, '93.5%', 'INNER JOIN validation', 'Un employees ko find karo jinka department table mein matching record hai.', 'SELECT e.* FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.id, e.name, e.department_id, e.salary FROM employees e INNER JOIN departments d ON e.department_id = d.department_id;', ['id', 'name', 'department_id', 'salary'], [{ id: 1, name: 'Rahul Sharma', department_id: 1, salary: 60000 }, { id: 2, name: 'Priya Singh', department_id: 2, salary: 50000 }, { id: 3, name: 'Amit Kumar', department_id: 3, salary: 70000 }, { id: 4, name: 'Neha Gupta', department_id: 4, salary: 55000 }, { id: 5, name: 'Vikram Mehta', department_id: 1, salary: 65000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(19, 10, 'Count and Average Salary for Matching Records', 'Medium', 'Joins', 10, '90.2%', 'Composite Join Report', 'Department-wise employee count aur average salary display karo, sirf matching records ke liye.', 'SELECT d.department_name, COUNT(*) AS emp_count, AVG(e.salary) AS avg_salary FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(*) AS emp_count, AVG(e.salary) AS avg_salary FROM employees e INNER JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'emp_count', 'avg_salary'], [{ department_name: 'IT', emp_count: 2, avg_salary: 62500 }, { department_name: 'HR', emp_count: 1, avg_salary: 50000 }, { department_name: 'Finance', emp_count: 1, avg_salary: 70000 }, { department_name: 'Marketing', emp_count: 1, avg_salary: 55000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR)
];

// ─────────────────────────────────────────────────────────────
// 20. LEFT JOIN (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_20_QUESTIONS: SqlChallengeTask[] = [
  makeTask(20, 1, 'All Employees Regardless of Department Match', 'Medium', 'Joins', 10, '94.0%', 'LEFT JOIN preserve left table', 'Saare employees display karo, chahe department match ho ya nahi.', 'SELECT e.name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, d.department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Neha Gupta', department_name: 'Marketing' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(20, 2, 'Retain Missing Departments via COALESCE', 'Medium', 'Joins', 10, '93.2%', 'LEFT JOIN with COALESCE', 'Employee names ke saath department names display karo, missing departments ko bhi retain karo.', 'SELECT e.name, COALESCE(d.department_name, \'No Department\') AS department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, COALESCE(d.department_name, \'No Department\') AS department_name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id;', ['name', 'department_name'], [{ name: 'Rahul Sharma', department_name: 'IT' }, { name: 'Priya Singh', department_name: 'HR' }, { name: 'Amit Kumar', department_name: 'Finance' }, { name: 'Neha Gupta', department_name: 'Marketing' }, { name: 'Vikram Mehta', department_name: 'IT' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(20, 3, 'Find Unmatched Employees', 'Medium', 'Joins', 10, '92.5%', 'LEFT JOIN ... WHERE right.key IS NULL', 'Un employees ko find karo jinka matching department nahi hai.', 'WHERE d.department_id IS NULL', 'SELECT e.name FROM employees e LEFT JOIN departments d ON e.department_id = d.department_id WHERE d.department_id IS NULL;', ['name'], [], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(20, 4, 'Count per Department Including Zero', 'Medium', 'Joins', 10, '91.8%', 'LEFT JOIN count', 'Har department ke employees ki count nikalo, including departments with zero employees.', 'SELECT d.department_name, COUNT(e.id) AS emp_count FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(e.id) AS emp_count FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', ['department_name', 'emp_count'], [{ department_name: 'IT', emp_count: 2 }, { department_name: 'HR', emp_count: 1 }, { department_name: 'Finance', emp_count: 1 }, { department_name: 'Marketing', emp_count: 1 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(20, 5, 'Department Salary Including Empty', 'Medium', 'Joins', 10, '90.5%', 'LEFT JOIN with COALESCE(SUM, 0)', 'Department-wise total salary calculate karo, including empty departments.', 'SELECT d.department_name, COALESCE(SUM(e.salary), 0) AS total_salary FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COALESCE(SUM(e.salary), 0) AS total_salary FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', ['department_name', 'total_salary'], [{ department_name: 'IT', total_salary: 125000 }, { department_name: 'HR', total_salary: 50000 }, { department_name: 'Finance', total_salary: 70000 }, { department_name: 'Marketing', total_salary: 55000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(20, 6, 'Employee with Manager Name via LEFT JOIN', 'Medium', 'Joins', 10, '89.4%', 'Self LEFT JOIN', 'Har employee ke saath manager name display karo using a self-referencing employee table and LEFT JOIN.', 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ['employee', 'manager'], [{ employee: 'Rahul Sharma', manager: 'Amit Kumar' }, { employee: 'Priya Singh', manager: 'Amit Kumar' }, { employee: 'Amit Kumar', manager: 'NULL' }, { employee: 'Neha Gupta', manager: 'Amit Kumar' }, { employee: 'Vikram Mehta', manager: 'Rahul Sharma' }]),
  makeTask(20, 7, 'All Customers Including Zero Orders', 'Medium', 'Joins', 10, '93.0%', 'Customer orders LEFT JOIN', 'Saare customers display karo, including those who have never placed an order.', 'SELECT c.customer_name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;', 'SELECT c.customer_name, o.order_id FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;', ['customer_name', 'order_id'], [{ customer_name: 'Rahul', order_id: 101 }, { customer_name: 'Amit', order_id: 'NULL' }]),
  makeTask(20, 8, 'Customers with No Orders', 'Medium', 'Joins', 10, '92.4%', 'WHERE o.order_id IS NULL', 'Un customers ko find karo jinke orders nahi hain.', 'SELECT c.customer_name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;', 'SELECT c.customer_name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;', ['customer_name'], [{ customer_name: 'Amit' }]),
  makeTask(20, 9, 'Products Never Ordered', 'Medium', 'Joins', 10, '91.6%', 'LEFT JOIN products with order_items', 'Saare products display karo, including products that have never been ordered.', 'SELECT p.product_name FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id WHERE oi.product_id IS NULL;', 'SELECT p.product_name FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id WHERE oi.product_id IS NULL;', ['product_name'], [{ product_name: 'Gaming Headset' }]),
  makeTask(20, 10, 'Complete Department Summary via LEFT JOIN', 'Medium', 'Joins', 10, '89.8%', 'Comprehensive LEFT JOIN report', 'Department-wise employee count aur total salary display karo, including departments with no employees.', 'SELECT d.department_name, COUNT(e.id) AS emp_count, COALESCE(SUM(e.salary), 0) AS total_salary FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(e.id) AS emp_count, COALESCE(SUM(e.salary), 0) AS total_salary FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id GROUP BY d.department_name;', ['department_name', 'emp_count', 'total_salary'], [{ department_name: 'IT', emp_count: 2, total_salary: 125000 }, { department_name: 'HR', emp_count: 1, total_salary: 50000 }, { department_name: 'Finance', emp_count: 1, total_salary: 70000 }, { department_name: 'Marketing', emp_count: 1, total_salary: 55000 }])
];

// ─────────────────────────────────────────────────────────────
// 21. RIGHT JOIN (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_21_QUESTIONS: SqlChallengeTask[] = [
  makeTask(21, 1, 'All Departments and Matching Employees', 'Medium', 'Joins', 10, '92.5%', 'RIGHT JOIN on departments', 'Saare departments aur unke matching employees display karo.', 'SELECT d.department_name, e.name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', 'SELECT d.department_name, e.name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', ['department_name', 'name'], [{ department_name: 'IT', name: 'Rahul Sharma' }, { department_name: 'IT', name: 'Vikram Mehta' }, { department_name: 'HR', name: 'Priya Singh' }, { department_name: 'Finance', name: 'Amit Kumar' }, { department_name: 'Marketing', name: 'Neha Gupta' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 2, 'Departments Without Employees Included', 'Medium', 'Joins', 10, '91.8%', 'RIGHT JOIN inclusion', 'Employees ke bina departments bhi result mein rakho.', 'SELECT d.department_name, e.name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', 'SELECT d.department_name, e.name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', ['department_name', 'name'], [{ department_name: 'IT', name: 'Rahul Sharma' }, { department_name: 'IT', name: 'Vikram Mehta' }, { department_name: 'HR', name: 'Priya Singh' }, { department_name: 'Finance', name: 'Amit Kumar' }, { department_name: 'Marketing', name: 'Neha Gupta' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 3, 'Identify Empty Departments via RIGHT JOIN', 'Medium', 'Joins', 10, '90.2%', 'RIGHT JOIN ... WHERE e.id IS NULL', 'Un departments ko identify karo jahan koi employee nahi hai.', 'WHERE e.id IS NULL', 'SELECT d.department_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id WHERE e.id IS NULL;', ['department_name'], [], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 4, 'Department Count via RIGHT JOIN', 'Medium', 'Joins', 10, '91.0%', 'COUNT with RIGHT JOIN', 'Har department ke employees ki count nikalo, including zero.', 'SELECT d.department_name, COUNT(e.id) AS emp_count FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(e.id) AS emp_count FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'emp_count'], [{ department_name: 'IT', emp_count: 2 }, { department_name: 'HR', emp_count: 1 }, { department_name: 'Finance', emp_count: 1 }, { department_name: 'Marketing', emp_count: 1 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 5, 'Department Total Salary via RIGHT JOIN', 'Medium', 'Joins', 10, '89.6%', 'COALESCE(SUM) with RIGHT JOIN', 'Har department ka total salary calculate karo, including departments without employees.', 'SELECT d.department_name, COALESCE(SUM(e.salary), 0) AS total_salary FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COALESCE(SUM(e.salary), 0) AS total_salary FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'total_salary'], [{ department_name: 'IT', total_salary: 125000 }, { department_name: 'HR', total_salary: 50000 }, { department_name: 'Finance', total_salary: 70000 }, { department_name: 'Marketing', total_salary: 55000 }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 6, 'Department Name and Matching Employees', 'Medium', 'Joins', 10, '92.0%', 'Column projection with RIGHT JOIN', 'Department name aur matching employee names display karo.', 'SELECT d.department_name, e.name AS employee_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', 'SELECT d.department_name, e.name AS employee_name FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id;', ['department_name', 'employee_name'], [{ department_name: 'IT', employee_name: 'Rahul Sharma' }, { department_name: 'IT', employee_name: 'Vikram Mehta' }, { department_name: 'HR', employee_name: 'Priya Singh' }, { department_name: 'Finance', employee_name: 'Amit Kumar' }, { department_name: 'Marketing', employee_name: 'Neha Gupta' }], undefined, JOIN_EMPLOYEES_SCHEMA, undefined, undefined, JOIN_SAMPLE_INPUT_STR),
  makeTask(21, 7, 'All Products and Orders via RIGHT JOIN', 'Medium', 'Joins', 10, '90.5%', 'RIGHT JOIN products with orders', 'Saare products aur unke matching order records display karo.', 'SELECT p.product_name, oi.order_id FROM order_items oi RIGHT JOIN products p ON oi.product_id = p.product_id;', 'SELECT p.product_name, oi.order_id FROM order_items oi RIGHT JOIN products p ON oi.product_id = p.product_id;', ['product_name', 'order_id'], [{ product_name: 'Laptop', order_id: 101 }, { product_name: 'Mouse', order_id: 102 }]),
  makeTask(21, 8, 'Unordered Products via RIGHT JOIN', 'Medium', 'Joins', 10, '89.2%', 'WHERE oi.order_id IS NULL', 'Un products ko find karo jinke orders nahi hain.', 'SELECT p.product_name FROM order_items oi RIGHT JOIN products p ON oi.product_id = p.product_id WHERE oi.order_id IS NULL;', 'SELECT p.product_name FROM order_items oi RIGHT JOIN products p ON oi.product_id = p.product_id WHERE oi.order_id IS NULL;', ['product_name'], [{ product_name: 'Monitor' }]),
  makeTask(21, 9, 'All Customers and Orders via RIGHT JOIN', 'Medium', 'Joins', 10, '91.2%', 'RIGHT JOIN on customers', 'Saare customers aur matching orders display karo, including orders ke bina customers.', 'SELECT c.customer_name, o.order_id FROM orders o RIGHT JOIN customers c ON o.customer_id = c.customer_id;', 'SELECT c.customer_name, o.order_id FROM orders o RIGHT JOIN customers c ON o.customer_id = c.customer_id;', ['customer_name', 'order_id'], [{ customer_name: 'Rahul', order_id: 101 }, { customer_name: 'Amit', order_id: 'NULL' }]),
  makeTask(21, 10, 'Complete Salary Report via RIGHT JOIN', 'Medium', 'Joins', 10, '88.8%', 'RIGHT JOIN Aggregate Report', 'RIGHT JOIN use karke complete department-wise salary report banao.', 'SELECT d.department_name, COUNT(e.id) AS total_emps, COALESCE(SUM(e.salary), 0) AS total_sal FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(e.id) AS total_emps, COALESCE(SUM(e.salary), 0) AS total_sal FROM employees e RIGHT JOIN departments d ON e.department_id = d.department_id GROUP BY d.department_name;', ['department_name', 'total_emps', 'total_sal'], [{ department_name: 'IT', total_emps: 2, total_sal: 125000 }, { department_name: 'HR', total_emps: 1, total_sal: 50000 }, { department_name: 'Finance', total_emps: 1, total_sal: 70000 }, { department_name: 'Marketing', total_emps: 1, total_sal: 55000 }])
];

// Helper for Self Join Table
const SELF_JOIN_EMPLOYEES_SCHEMA: SchemaColumn[] = [
  { name: 'id', type: 'INT', desc: 'Employee ID' },
  { name: 'name', type: 'VARCHAR(100)', desc: 'Employee Name' },
  { name: 'manager_id', type: 'INT', desc: 'Direct Manager ID' },
  { name: 'department_id', type: 'INT', desc: 'Department ID' },
  { name: 'salary', type: 'INT', desc: 'Salary' }
];

const SELF_JOIN_SAMPLE_INPUT_STR = 'id | name | manager_id | department_id | salary\n1 | Rahul Sharma | 3 | 1 | 60000\n2 | Priya Singh | 3 | 2 | 50000\n3 | Amit Kumar | NULL | 3 | 70000\n4 | Neha Gupta | 3 | 4 | 55000\n5 | Vikram Mehta | 1 | 1 | 65000';

// ─────────────────────────────────────────────────────────────
// 22. Self Join (Intermediate) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_22_QUESTIONS: SqlChallengeTask[] = [
  makeTask(22, 1, 'Employees and Their Manager Names', 'Medium', 'Joins', 10, '93.5%', 'Self join e JOIN m ON e.manager_id = m.id', 'Employee names ke saath unke manager names display karo.', 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', 'SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ['employee', 'manager'], [{ employee: 'Rahul Sharma', manager: 'Amit Kumar' }, { employee: 'Priya Singh', manager: 'Amit Kumar' }, { employee: 'Amit Kumar', manager: 'NULL' }, { employee: 'Neha Gupta', manager: 'Amit Kumar' }, { employee: 'Vikram Mehta', manager: 'Rahul Sharma' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 2, 'Employees Without Manager', 'Medium', 'Joins', 10, '95.0%', 'WHERE manager_id IS NULL', 'Un employees ko find karo jinka manager nahi hai.', 'SELECT name FROM employees WHERE manager_id IS NULL;', 'SELECT name FROM employees WHERE manager_id IS NULL;', ['name'], [{ name: 'Amit Kumar' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 3, 'Employees with Existing Manager in Table', 'Medium', 'Joins', 10, '94.0%', 'INNER Self Join', 'Un employees ko find karo jinka manager bhi same table mein listed hai.', 'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id;', 'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id;', ['name'], [{ name: 'Rahul Sharma' }, { name: 'Priya Singh' }, { name: 'Neha Gupta' }, { name: 'Vikram Mehta' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 4, 'Department-wise Employees and Managers', 'Medium', 'Joins', 10, '91.8%', 'Self Join with department', 'Employees aur unke managers ko department-wise display karo.', 'SELECT e.department_id, e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', 'SELECT e.department_id, e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ['department_id', 'employee', 'manager'], [{ department_id: 1, employee: 'Rahul Sharma', manager: 'Amit Kumar' }, { department_id: 1, employee: 'Vikram Mehta', manager: 'Rahul Sharma' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 5, 'Pairs in Same Department', 'Medium', 'Joins', 10, '90.2%', 'Same department join e1.dept = e2.dept', 'Un employee pairs ko find karo jo same department mein kaam karte hain.', 'SELECT e1.name AS emp1, e2.name AS emp2, e1.department_id FROM employees e1 JOIN employees e2 ON e1.department_id = e2.department_id AND e1.id < e2.id;', 'SELECT e1.name AS emp1, e2.name AS emp2, e1.department_id FROM employees e1 JOIN employees e2 ON e1.department_id = e2.department_id AND e1.id < e2.id;', ['emp1', 'emp2', 'department_id'], [{ emp1: 'Rahul Sharma', emp2: 'Vikram Mehta', department_id: 1 }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 6, 'Unique Non-reversed Employee Pairs', 'Medium', 'Joins', 10, '91.0%', 'Condition e1.id < e2.id', 'Same department ke employees ke pairs display karo, duplicate reversed pairs ko avoid karke.', 'SELECT e1.name AS emp1, e2.name AS emp2 FROM employees e1 JOIN employees e2 ON e1.department_id = e2.department_id AND e1.id < e2.id;', 'SELECT e1.name AS emp1, e2.name AS emp2 FROM employees e1 JOIN employees e2 ON e1.department_id = e2.department_id AND e1.id < e2.id;', ['emp1', 'emp2'], [{ emp1: 'Rahul Sharma', emp2: 'Vikram Mehta' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 7, 'Employees Earning More than Manager', 'Medium', 'Joins', 10, '88.4%', 'Salary comparison in Self Join', 'Un employees ko find karo jinki salary unke manager se zyada hai.', 'WHERE e.salary > m.salary', 'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary > m.salary;', ['name'], [{ name: 'Vikram Mehta' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 8, 'Employees Earning Less than Manager', 'Medium', 'Joins', 10, '91.2%', 'WHERE e.salary < m.salary', 'Un employees ko find karo jinki salary unke manager se kam hai.', 'WHERE e.salary < m.salary', 'SELECT e.name FROM employees e JOIN employees m ON e.manager_id = m.id WHERE e.salary < m.salary;', ['name'], [{ name: 'Rahul Sharma' }, { name: 'Priya Singh' }, { name: 'Neha Gupta' }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 9, 'Direct Reports Count per Manager', 'Medium', 'Joins', 10, '89.5%', 'Self Join with COUNT GROUP BY', 'Har manager ke direct reports ki count nikalo.', 'SELECT m.name AS manager, COUNT(e.id) AS reports_count FROM employees e JOIN employees m ON e.manager_id = m.id GROUP BY m.name;', 'SELECT m.name AS manager, COUNT(e.id) AS reports_count FROM employees e JOIN employees m ON e.manager_id = m.id GROUP BY m.name;', ['manager', 'reports_count'], [{ manager: 'Amit Kumar', reports_count: 3 }, { manager: 'Rahul Sharma', reports_count: 1 }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR),
  makeTask(22, 10, 'Employee Manager Salary Report', 'Medium', 'Joins', 10, '88.0%', 'Comprehensive Self Join Report', 'Employee-manager report banao jisme employee name, manager name, department aur dono ki salaries ho.', 'SELECT e.name AS emp_name, m.name AS mgr_name, e.department_id, e.salary AS emp_salary, m.salary AS mgr_salary FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', 'SELECT e.name AS emp_name, m.name AS mgr_name, e.department_id, e.salary AS emp_salary, m.salary AS mgr_salary FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ['emp_name', 'mgr_name', 'department_id', 'emp_salary', 'mgr_salary'], [{ emp_name: 'Rahul Sharma', mgr_name: 'Amit Kumar', department_id: 1, emp_salary: 60000, mgr_salary: 70000 }, { emp_name: 'Vikram Mehta', mgr_name: 'Rahul Sharma', department_id: 1, emp_salary: 65000, mgr_salary: 60000 }], undefined, SELF_JOIN_EMPLOYEES_SCHEMA, undefined, undefined, SELF_JOIN_SAMPLE_INPUT_STR)
];

// ─────────────────────────────────────────────────────────────
// 23. Query Optimization (Advanced) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_23_QUESTIONS: SqlChallengeTask[] = [
  makeTask(23, 1, 'Select Required Columns Only', 'Hard', 'Optimization', 15, '94.0%', 'Avoiding SELECT *', 'SELECT * ki jagah required columns select karke query rewrite karo.', 'SELECT id, name, salary FROM employees;', 'SELECT id, name, salary FROM employees;', ['id', 'name', 'salary'], [{ id: 1, name: 'Rahul Sharma', salary: 60000 }, { id: 2, name: 'Priya Singh', salary: 50000 }, { id: 3, name: 'Amit Kumar', salary: 70000 }, { id: 4, name: 'Neha Gupta', salary: 55000 }, { id: 5, name: 'Vikram Mehta', salary: 65000 }]),
  makeTask(23, 2, 'Row Reduction via Early WHERE', 'Hard', 'Optimization', 15, '92.5%', 'Early filter predicate', 'Filtered report ke liye WHERE condition use karke unnecessary rows ko reduce karo.', 'SELECT name, salary FROM employees WHERE department = \'IT\';', 'SELECT name, salary FROM employees WHERE department = \'IT\';', ['name', 'salary'], [{ name: 'Rahul Sharma', salary: 60000 }, { name: 'Vikram Mehta', salary: 65000 }]),
  makeTask(23, 3, 'Index-Friendly Date Search', 'Hard', 'Optimization', 15, '88.4%', 'SARGable date predicate', 'Date range search ko index-friendly condition ke saath likho.', 'WHERE order_date >= \'2025-01-01\' AND order_date < \'2025-02-01\'', 'SELECT * FROM orders WHERE order_date >= \'2025-01-01\' AND order_date < \'2025-02-01\';', ['order_id', 'order_date'], [{ order_id: 1, order_date: '2025-01-15' }]),
  makeTask(23, 4, 'Rewrite OR with UNION ALL', 'Hard', 'Optimization', 15, '86.5%', 'Index optimization with UNION ALL', 'OR conditions wali query ko suitable case mein UNION ALL se rewrite karo aur compare karo.', 'SELECT name, salary FROM employees WHERE department = \'IT\' UNION ALL SELECT name, salary FROM employees WHERE department = \'HR\';', 'SELECT name, salary FROM employees WHERE department = \'IT\' UNION ALL SELECT name, salary FROM employees WHERE department = \'HR\';', ['name', 'salary'], [{ name: 'Rahul Sharma', salary: 60000 }, { name: 'Vikram Mehta', salary: 65000 }, { name: 'Priya Singh', salary: 50000 }]),
  makeTask(23, 5, 'Rewrite Correlated Subquery to JOIN', 'Hard', 'Optimization', 15, '84.0%', 'Join over correlated subquery', 'Correlated subquery ko join mein rewrite karo, jab equivalent ho.', 'SELECT e.name, e.salary FROM employees e JOIN departments d ON e.department_id = d.department_id;', 'SELECT e.name, e.salary FROM employees e JOIN departments d ON e.department_id = d.department_id;', ['name', 'salary'], [{ name: 'Rahul Sharma', salary: 60000 }, { name: 'Priya Singh', salary: 50000 }]),
  makeTask(23, 6, 'Simplify Calculations via CTE', 'Hard', 'Optimization', 15, '85.2%', 'CTE materialization', 'Repeated subquery calculations ko CTE ya aggregate join se simplify karo.', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_s FROM employees) SELECT e.name, e.salary FROM employees e, AvgSal a WHERE e.salary > a.avg_s;', 'WITH AvgSal AS (SELECT AVG(salary) AS avg_s FROM employees) SELECT e.name, e.salary FROM employees e, AvgSal a WHERE e.salary > a.avg_s;', ['name', 'salary'], [{ name: 'Amit Kumar', salary: 70000 }, { name: 'Vikram Mehta', salary: 65000 }]),
  makeTask(23, 7, 'Remove Unnecessary DISTINCT', 'Hard', 'Optimization', 15, '91.0%', 'Removing sort overhead', 'Unnecessary DISTINCT remove karke result correctness check karo.', 'SELECT id, name FROM employees;', 'SELECT id, name FROM employees;', ['id', 'name'], [{ id: 1, name: 'Rahul Sharma' }, { id: 2, name: 'Priya Singh' }]),
  makeTask(23, 8, 'Deterministic Pagination with ORDER BY', 'Hard', 'Optimization', 15, '89.0%', 'Keyset / Ordered Pagination', 'Large result ke liye pagination ko deterministic ORDER BY ke saath implement karo.', 'SELECT * FROM employees ORDER BY id ASC LIMIT 5 OFFSET 0;', 'SELECT * FROM employees ORDER BY id ASC LIMIT 5 OFFSET 0;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS),
  makeTask(23, 9, 'Inspect Plan with EXPLAIN', 'Hard', 'Optimization', 15, '87.5%', 'EXPLAIN query plan', 'EXPLAIN use karke query plan inspect karo aur scan operations identify karo.', 'EXPLAIN SELECT * FROM employees WHERE salary > 60000;', 'EXPLAIN SELECT * FROM employees WHERE salary > 60000;', ['query_plan'], [{ query_plan: 'Seq Scan on employees' }]),
  makeTask(23, 10, 'Department Salary Query Plan Improvement', 'Hard', 'Optimization', 15, '85.0%', 'EXPLAIN on Group By', 'Slow department-wise salary report ka query plan inspect karke indexes aur query structure ke possible improvements suggest karo.', 'EXPLAIN SELECT department, AVG(salary) FROM employees GROUP BY department;', 'EXPLAIN SELECT department, AVG(salary) FROM employees GROUP BY department;', ['query_plan'], [{ query_plan: 'HashAggregate on department' }])
];

// ─────────────────────────────────────────────────────────────
// 24. Complex Joins (Advanced) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_24_QUESTIONS: SqlChallengeTask[] = [
  makeTask(24, 1, 'Employees, Departments and Projects', 'Hard', 'Joins', 15, '83.2%', '3-Table INNER JOIN', 'Employee names, department names aur assigned project names display karo.', 'SELECT e.name, d.department_name, p.project_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.project_id;', 'SELECT e.name, d.department_name, p.project_name FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.project_id;', ['name', 'department_name', 'project_name'], [{ name: 'Rahul Sharma', department_name: 'IT', project_name: 'AI Portal' }]),
  makeTask(24, 2, 'Employees with All Projects (Inc Unassigned)', 'Hard', 'Joins', 15, '82.0%', 'LEFT JOIN on Projects', 'Saare employees aur unke assigned projects display karo, including unassigned employees.', 'SELECT e.name, p.project_name FROM employees e LEFT JOIN employee_projects ep ON e.id = ep.employee_id LEFT JOIN projects p ON ep.project_id = p.project_id;', 'SELECT e.name, p.project_name FROM employees e LEFT JOIN employee_projects ep ON e.id = ep.employee_id LEFT JOIN projects p ON ep.project_id = p.project_id;', ['name', 'project_name'], [{ name: 'Rahul Sharma', project_name: 'AI Portal' }, { name: 'Priya Singh', project_name: 'NULL' }]),
  makeTask(24, 3, 'Unassigned Projects', 'Hard', 'Joins', 15, '84.5%', 'LEFT JOIN ... WHERE ep.employee_id IS NULL', 'Un projects ko find karo jinke saath koi employee assigned nahi hai.', 'WHERE ep.employee_id IS NULL', 'SELECT p.project_name FROM projects p LEFT JOIN employee_projects ep ON p.project_id = ep.project_id WHERE ep.employee_id IS NULL;', ['project_name'], [{ project_name: 'Cloud Migration' }]),
  makeTask(24, 4, 'Distinct Projects Count per Department', 'Hard', 'Joins', 15, '81.0%', 'COUNT(DISTINCT project_id)', 'Har department mein distinct assigned projects ki count nikalo.', 'SELECT d.department_name, COUNT(DISTINCT ep.project_id) AS project_count FROM departments d JOIN employees e ON d.department_id = e.department_id JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(DISTINCT ep.project_id) AS project_count FROM departments d JOIN employees e ON d.department_id = e.department_id JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY d.department_name;', ['department_name', 'project_count'], [{ department_name: 'IT', project_count: 2 }]),
  makeTask(24, 5, 'Employee, Project and Start Date', 'Hard', 'Joins', 15, '83.0%', 'Multiple column selection', 'Employee name, project name aur project start date display karo.', 'SELECT e.name, p.project_name, p.start_date FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.project_id;', 'SELECT e.name, p.project_name, p.start_date FROM employees e JOIN employee_projects ep ON e.id = ep.employee_id JOIN projects p ON ep.project_id = p.project_id;', ['name', 'project_name', 'start_date'], [{ name: 'Rahul Sharma', project_name: 'AI Portal', start_date: '2025-01-01' }]),
  makeTask(24, 6, 'Customer Orders and Order Items', 'Hard', 'Joins', 15, '82.4%', 'Order items detail join', 'Customers, orders aur order items join karke order-wise product details display karo.', 'SELECT c.customer_name, o.order_id, oi.product_name, oi.quantity FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id;', 'SELECT c.customer_name, o.order_id, oi.product_name, oi.quantity FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id;', ['customer_name', 'order_id', 'product_name', 'quantity'], [{ customer_name: 'Rahul', order_id: 101, product_name: 'Laptop', quantity: 1 }]),
  makeTask(24, 7, 'Customer Total Order Amount', 'Hard', 'Joins', 15, '81.5%', 'Join with quantity * price SUM', 'Har customer ka total order amount calculate karo using orders and order items.', 'SELECT c.customer_name, SUM(oi.quantity * oi.unit_price) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id GROUP BY c.customer_name;', 'SELECT c.customer_name, SUM(oi.quantity * oi.unit_price) AS total_spent FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id GROUP BY c.customer_name;', ['customer_name', 'total_spent'], [{ customer_name: 'Rahul', total_spent: 60000 }]),
  makeTask(24, 8, 'Customers with Multiple Distinct Products', 'Hard', 'Joins', 15, '79.8%', 'HAVING COUNT(DISTINCT) > 1', 'Un customers ko find karo jinhone ek se zyada distinct products kharide hain.', 'HAVING COUNT(DISTINCT oi.product_id) > 1', 'SELECT c.customer_name FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id GROUP BY c.customer_name HAVING COUNT(DISTINCT oi.product_id) > 1;', ['customer_name'], [{ customer_name: 'Rahul' }]),
  makeTask(24, 9, 'Project and Employee Counts by Department', 'Hard', 'Joins', 15, '78.5%', 'COUNT(DISTINCT) prevention of fanout', 'Departments aur projects join karke department-wise project count aur employee count calculate karo, double counting se bachkar.', 'SELECT d.department_name, COUNT(DISTINCT e.id) AS emp_cnt, COUNT(DISTINCT ep.project_id) AS proj_cnt FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id LEFT JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY d.department_name;', 'SELECT d.department_name, COUNT(DISTINCT e.id) AS emp_cnt, COUNT(DISTINCT ep.project_id) AS proj_cnt FROM departments d LEFT JOIN employees e ON d.department_id = e.department_id LEFT JOIN employee_projects ep ON e.id = ep.employee_id GROUP BY d.department_name;', ['department_name', 'emp_cnt', 'proj_cnt'], [{ department_name: 'IT', emp_cnt: 2, proj_cnt: 2 }]),
  makeTask(24, 10, 'Comprehensive Customer Sales Dashboard', 'Hard', 'Joins', 15, '77.0%', 'Multi-table Master Analytics', 'Customer sales report banao jisme customer name, order count, distinct products purchased aur total spend ho.', 'SELECT c.customer_name, COUNT(DISTINCT o.order_id) AS orders_cnt, COUNT(DISTINCT oi.product_id) AS products_cnt, SUM(oi.quantity * oi.unit_price) AS total_spend FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id GROUP BY c.customer_name;', 'SELECT c.customer_name, COUNT(DISTINCT o.order_id) AS orders_cnt, COUNT(DISTINCT oi.product_id) AS products_cnt, SUM(oi.quantity * oi.unit_price) AS total_spend FROM customers c JOIN orders o ON c.customer_id = o.customer_id JOIN order_items oi ON o.order_id = oi.order_id GROUP BY c.customer_name;', ['customer_name', 'orders_cnt', 'products_cnt', 'total_spend'], [{ customer_name: 'Rahul', orders_cnt: 2, products_cnt: 3, total_spend: 60000 }])
];

// ─────────────────────────────────────────────────────────────
// 25. Data Analysis Queries (Advanced) - 10 Questions
// ─────────────────────────────────────────────────────────────
const TOPIC_25_QUESTIONS: SqlChallengeTask[] = [
  makeTask(25, 1, 'Department Employee Count Report', 'Hard', 'Analytics', 15, '94.0%', 'Department count distribution', 'Department-wise employee count report banao.', 'SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department;', 'SELECT department, COUNT(*) AS emp_count FROM employees GROUP BY department;', ['department', 'emp_count'], [{ department: 'IT', emp_count: 2 }, { department: 'HR', emp_count: 1 }, { department: 'Finance', emp_count: 1 }, { department: 'Marketing', emp_count: 1 }]),
  makeTask(25, 2, 'Department Average Salary Report', 'Hard', 'Analytics', 15, '93.5%', 'Department avg salary', 'Department-wise average salary report banao.', 'SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department;', 'SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department;', ['department', 'avg_sal'], [{ department: 'IT', avg_sal: 62500 }, { department: 'HR', avg_sal: 50000 }, { department: 'Finance', avg_sal: 70000 }, { department: 'Marketing', avg_sal: 55000 }]),
  makeTask(25, 3, 'Top 3 Highest Salary Employees', 'Hard', 'Analytics', 15, '95.0%', 'Top 3 earners', 'Highest salary wale top 3 employees find karo.', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 3;', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(25, 4, 'Above Average Salary Employees', 'Hard', 'Analytics', 15, '91.8%', 'Company benchmark comparison', 'Company ki average salary se zyada salary wale employees find karo.', 'WHERE salary > (SELECT AVG(salary) FROM employees)', 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(25, 5, 'Highest Paid Employee in Each Department', 'Hard', 'Analytics', 15, '88.5%', 'Department Top Earners', 'Har department ka highest-paid employee find karo.', 'WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department)', 'SELECT e.* FROM employees e WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(25, 6, 'Salary Tier Segmentation (Low, Med, High)', 'Hard', 'Analytics', 15, '92.0%', 'Salary Bucketing', 'Salary ke basis par employees ko low, medium aur high categories mein divide karo.', 'CASE WHEN salary >= 70000 THEN \'High\' WHEN salary >= 60000 THEN \'Medium\' ELSE \'Low\' END', 'SELECT name, salary, CASE WHEN salary >= 70000 THEN \'High\' WHEN salary >= 60000 THEN \'Medium\' ELSE \'Low\' END AS category FROM employees;', ['name', 'salary', 'category'], [{ name: 'Rahul Sharma', salary: 60000, category: 'Medium' }, { name: 'Priya Singh', salary: 50000, category: 'Low' }, { name: 'Amit Kumar', salary: 70000, category: 'High' }, { name: 'Neha Gupta', salary: 55000, category: 'Low' }, { name: 'Vikram Mehta', salary: 65000, category: 'Medium' }]),
  makeTask(25, 7, 'Monthly Orders and Sales Revenue', 'Hard', 'Analytics', 15, '90.4%', 'Time-series aggregation', 'Monthly orders aur total sales calculate karo.', 'SELECT EXTRACT(MONTH FROM order_date) AS month, COUNT(*) AS orders_count, SUM(total_amount) AS total_sales FROM orders GROUP BY month;', 'SELECT EXTRACT(MONTH FROM order_date) AS month, COUNT(*) AS orders_count, SUM(total_amount) AS total_sales FROM orders GROUP BY month;', ['month', 'orders_count', 'total_sales'], [{ month: 1, orders_count: 45, total_sales: 125000 }, { month: 2, orders_count: 52, total_sales: 148000 }]),
  makeTask(25, 8, 'Top 5 Customers by Spending', 'Hard', 'Analytics', 15, '89.0%', 'Customer spending leaderboard', 'Top 5 customers by total spending find karo.', 'SELECT customer_name, SUM(total_amount) AS total_spend FROM orders JOIN customers USING (customer_id) GROUP BY customer_name ORDER BY total_spend DESC LIMIT 5;', 'SELECT customer_name, SUM(total_amount) AS total_spend FROM orders JOIN customers USING (customer_id) GROUP BY customer_name ORDER BY total_spend DESC LIMIT 5;', ['customer_name', 'total_spend'], [{ customer_name: 'Rahul', total_spend: 95000 }, { customer_name: 'Priya', total_spend: 82000 }]),
  makeTask(25, 9, 'Top Selling Products by Volume', 'Hard', 'Analytics', 15, '88.2%', 'Product volume ranking', 'Un products ko find karo jinki sales sabse zyada hain.', 'SELECT product_id, SUM(quantity) AS total_sold FROM order_items GROUP BY product_id ORDER BY total_sold DESC LIMIT 3;', 'SELECT product_id, SUM(quantity) AS total_sold FROM order_items GROUP BY product_id ORDER BY total_sold DESC LIMIT 3;', ['product_id', 'total_sold'], [{ product_id: 101, total_sold: 450 }, { product_id: 102, total_sold: 380 }]),
  makeTask(25, 10, 'Executive Business KPI Summary', 'Hard', 'Analytics', 15, '87.0%', 'Enterprise Payroll Summary', 'Ek business summary query banao jisme total employees, average salary, maximum salary aur total payroll display ho.', 'SELECT COUNT(*) AS total_employees, AVG(salary) AS average_salary, MAX(salary) AS max_salary, SUM(salary) AS total_payroll FROM employees;', 'SELECT COUNT(*) AS total_employees, AVG(salary) AS average_salary, MAX(salary) AS max_salary, SUM(salary) AS total_payroll FROM employees;', ['total_employees', 'average_salary', 'max_salary', 'total_payroll'], [{ total_employees: 5, average_salary: 60000, max_salary: 70000, total_payroll: 300000 }])
];

// ─────────────────────────────────────────────────────────────
// POPULAR 1: Top N Records (10 Tasks)
// ─────────────────────────────────────────────────────────────
const POPULAR_1_QUESTIONS: SqlChallengeTask[] = [
  makeTask(101, 1, 'Top 3 Highest Paid Employees', 'Medium', 'Popular Challenges', 10, '94.0%', 'ORDER BY salary DESC LIMIT 3', 'Highest salary wale top 3 employees find karo.', 'ORDER BY salary DESC LIMIT 3', 'SELECT * FROM employees ORDER BY salary DESC LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(101, 2, 'Top 3 Lowest Paid Employees', 'Medium', 'Popular Challenges', 10, '93.5%', 'ORDER BY salary ASC LIMIT 3', 'Lowest salary wale top 3 employees find karo.', 'ORDER BY salary ASC LIMIT 3', 'SELECT * FROM employees ORDER BY salary ASC LIMIT 3;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(101, 3, 'Top 5 Customers by Total Spending', 'Medium', 'Popular Challenges', 10, '91.8%', 'ORDER BY SUM(total_amount) DESC LIMIT 5', 'Top 5 customers by total spending find karo.', 'LIMIT 5', 'SELECT customer_name, SUM(total_amount) AS total_spend FROM orders JOIN customers USING (customer_id) GROUP BY customer_name ORDER BY total_spend DESC LIMIT 5;', ['customer_name', 'total_spend'], [{ customer_name: 'Rahul', total_spend: 95000 }, { customer_name: 'Priya', total_spend: 82000 }]),
  makeTask(101, 4, 'Top 3 Products by Revenue', 'Medium', 'Popular Challenges', 10, '90.2%', 'ORDER BY SUM(quantity * price) DESC LIMIT 3', 'Highest revenue wale top 3 products find karo.', 'LIMIT 3', 'SELECT product_id, SUM(quantity * unit_price) AS total_rev FROM order_items GROUP BY product_id ORDER BY total_rev DESC LIMIT 3;', ['product_id', 'total_rev'], [{ product_id: 101, total_rev: 450000 }, { product_id: 102, total_rev: 320000 }]),
  makeTask(101, 5, 'Highest Paid Employee in Each Department', 'Medium', 'Popular Challenges', 10, '89.0%', 'Correlated subquery / window function', 'Har department ka highest-paid employee find karo.', 'WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department)', 'SELECT e.* FROM employees e WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(101, 6, 'Top 2 Earners in Each Department', 'Medium', 'Popular Challenges', 10, '86.4%', 'DENSE_RANK() <= 2', 'Har department ke top 2 earners find karo.', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT * FROM Ranked WHERE rnk <= 2;', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT id, name, age, department, salary FROM Ranked WHERE rnk <= 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }]),
  makeTask(101, 7, 'Second Highest Distinct Salary', 'Medium', 'Popular Challenges', 10, '92.0%', 'ORDER BY salary DESC LIMIT 1 OFFSET 1', 'Second-highest distinct salary find karo.', 'LIMIT 1 OFFSET 1', 'SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;', ['salary'], [{ salary: 65000 }]),
  makeTask(101, 8, 'Third Highest Distinct Salary', 'Medium', 'Popular Challenges', 10, '91.5%', 'ORDER BY salary DESC LIMIT 1 OFFSET 2', 'Third-highest distinct salary find karo.', 'LIMIT 1 OFFSET 2', 'SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;', ['salary'], [{ salary: 60000 }]),
  makeTask(101, 9, 'Top 3 Products by Sales Each Month', 'Medium', 'Popular Challenges', 10, '84.8%', 'Monthly Window Ranking', 'Har month ke top 3 products by sales find karo.', 'WITH M_Ranked AS (SELECT EXTRACT(MONTH FROM order_date) as month, product_id, SUM(quantity) as qty, DENSE_RANK() OVER (PARTITION BY EXTRACT(MONTH FROM order_date) ORDER BY SUM(quantity) DESC) as rnk FROM order_items JOIN orders USING (order_id) GROUP BY month, product_id) SELECT * FROM M_Ranked WHERE rnk <= 3;', 'WITH M_Ranked AS (SELECT EXTRACT(MONTH FROM order_date) as month, product_id, SUM(quantity) as qty, DENSE_RANK() OVER (PARTITION BY EXTRACT(MONTH FROM order_date) ORDER BY SUM(quantity) DESC) as rnk FROM order_items JOIN orders USING (order_id) GROUP BY month, product_id) SELECT month, product_id, qty FROM M_Ranked WHERE rnk <= 3;', ['month', 'product_id', 'qty'], [{ month: 1, product_id: 101, qty: 50 }, { month: 1, product_id: 102, qty: 35 }]),
  makeTask(101, 10, 'Top 3 Employees by Salary with Window Function', 'Medium', 'Popular Challenges', 10, '85.5%', 'DENSE_RANK() OVER (PARTITION BY department)', 'Har department ke top 3 employees by salary find karo using a window function.', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT * FROM Ranked WHERE rnk <= 3;', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT id, name, age, department, salary FROM Ranked WHERE rnk <= 3;', COMMON_EMPLOYEES_INPUT_HEADERS, COMMON_EMPLOYEES_INPUT_ROWS)
];

// ─────────────────────────────────────────────────────────────
// POPULAR 2: Employee Analysis (10 Tasks)
// ─────────────────────────────────────────────────────────────
const POPULAR_2_QUESTIONS: SqlChallengeTask[] = [
  makeTask(102, 1, 'Employees Earning Above Average', 'Medium', 'Popular Challenges', 10, '92.4%', 'Subquery AVG comparison', 'Average salary se zyada salary wale employees find karo.', 'WHERE salary > (SELECT AVG(salary) FROM employees)', 'SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(102, 2, 'Department Average Salary Metric', 'Medium', 'Popular Challenges', 10, '94.0%', 'AVG(salary) GROUP BY department', 'Har department ki average salary calculate karo.', 'SELECT department, AVG(salary) FROM employees GROUP BY department;', 'SELECT department, AVG(salary) AS avg_sal FROM employees GROUP BY department;', ['department', 'avg_sal'], [{ department: 'IT', avg_sal: 62500 }, { department: 'HR', avg_sal: 50000 }, { department: 'Finance', avg_sal: 70000 }, { department: 'Marketing', avg_sal: 55000 }]),
  makeTask(102, 3, 'Compare Employee and Manager Salary', 'Medium', 'Popular Challenges', 10, '88.5%', 'Self Join Salary Comparison', 'Har employee aur manager ki salary compare karo.', 'SELECT e.name AS emp, e.salary AS emp_sal, m.name AS mgr, m.salary AS mgr_sal FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', 'SELECT e.name AS emp, e.salary AS emp_sal, m.name AS mgr, m.salary AS mgr_sal FROM employees e LEFT JOIN employees m ON e.manager_id = m.id;', ['emp', 'emp_sal', 'mgr', 'mgr_sal'], [{ emp: 'Rahul Sharma', emp_sal: 60000, mgr: 'Amit Kumar', mgr_sal: 70000 }, { emp: 'Vikram Mehta', emp_sal: 65000, mgr: 'Rahul Sharma', mgr_sal: 60000 }]),
  makeTask(102, 4, 'Department Highest Earner', 'Medium', 'Popular Challenges', 10, '91.0%', 'Correlated Max Subquery', 'Har department ka highest-paid employee find karo.', 'WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department)', 'SELECT e.* FROM employees e WHERE salary = (SELECT MAX(salary) FROM employees WHERE department = e.department);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }, { id: 2, name: 'Priya Singh', age: 25, department: 'HR', salary: 50000 }, { id: 3, name: 'Amit Kumar', age: 32, department: 'Finance', salary: 70000 }, { id: 4, name: 'Neha Gupta', age: 29, department: 'Marketing', salary: 55000 }]),
  makeTask(102, 5, 'Company Salary Ranking', 'Medium', 'Popular Challenges', 10, '92.5%', 'DENSE_RANK() OVER (ORDER BY salary DESC)', 'Company ke salary ranking mein har employee ka rank calculate karo.', 'DENSE_RANK() OVER (ORDER BY salary DESC)', 'SELECT name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rank FROM employees;', ['name', 'salary', 'rank'], [{ name: 'Amit Kumar', salary: 70000, rank: 1 }, { name: 'Vikram Mehta', salary: 65000, rank: 2 }, { name: 'Rahul Sharma', salary: 60000, rank: 3 }, { name: 'Neha Gupta', salary: 55000, rank: 4 }, { name: 'Priya Singh', salary: 50000, rank: 5 }]),
  makeTask(102, 6, 'Department Salary Ranking', 'Medium', 'Popular Challenges', 10, '90.0%', 'PARTITION BY department', 'Har department mein salary ke basis par employee ranking nikalo.', 'DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC)', 'SELECT name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;', ['name', 'department', 'salary', 'dept_rank'], [{ name: 'Vikram Mehta', department: 'IT', salary: 65000, dept_rank: 1 }, { name: 'Rahul Sharma', department: 'IT', salary: 60000, dept_rank: 2 }, { name: 'Priya Singh', department: 'HR', salary: 50000, dept_rank: 1 }, { name: 'Amit Kumar', department: 'Finance', salary: 70000, dept_rank: 1 }, { name: 'Neha Gupta', department: 'Marketing', salary: 55000, dept_rank: 1 }]),
  makeTask(102, 7, 'Salary Above Department Average', 'Medium', 'Popular Challenges', 10, '87.4%', 'Correlated Department Average', 'Un employees ko find karo jinki salary unke department ki average salary se zyada hai.', 'WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department)', 'SELECT * FROM employees e1 WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department = e1.department);', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 5, name: 'Vikram Mehta', age: 30, department: 'IT', salary: 65000 }]),
  makeTask(102, 8, 'Department Employee Count & Total Payroll', 'Medium', 'Popular Challenges', 10, '93.0%', 'Department Payroll Rollup', 'Har department mein employee count aur total payroll calculate karo.', 'SELECT department, COUNT(*) AS emp_cnt, SUM(salary) AS total_payroll FROM employees GROUP BY department;', 'SELECT department, COUNT(*) AS emp_cnt, SUM(salary) AS total_payroll FROM employees GROUP BY department;', ['department', 'emp_cnt', 'total_payroll'], [{ department: 'IT', emp_cnt: 2, total_payroll: 125000 }, { department: 'HR', emp_cnt: 1, total_payroll: 50000 }, { department: 'Finance', emp_cnt: 1, total_payroll: 70000 }, { department: 'Marketing', emp_cnt: 1, total_payroll: 55000 }]),
  makeTask(102, 9, 'Second Highest Earner in Department', 'Medium', 'Popular Challenges', 10, '84.0%', 'Dense Rank = 2', 'Un employees ko find karo jo apne department mein second-highest salary earn karte hain.', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT * FROM Ranked WHERE rnk = 2;', 'WITH Ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rnk FROM employees) SELECT id, name, age, department, salary FROM Ranked WHERE rnk = 2;', COMMON_EMPLOYEES_INPUT_HEADERS, [{ id: 1, name: 'Rahul Sharma', age: 28, department: 'IT', salary: 60000 }]),
  makeTask(102, 10, 'Comprehensive Employee Performance Report', 'Medium', 'Popular Challenges', 10, '85.0%', 'Multi-level Ranking Dashboard', 'Employee performance report banao jisme department, salary, company rank aur department rank ho.', 'SELECT name, department, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS company_rank, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;', 'SELECT name, department, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS company_rank, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank FROM employees;', ['name', 'department', 'salary', 'company_rank', 'dept_rank'], [{ name: 'Amit Kumar', department: 'Finance', salary: 70000, company_rank: 1, dept_rank: 1 }, { name: 'Vikram Mehta', department: 'IT', salary: 65000, company_rank: 2, dept_rank: 1 }, { name: 'Rahul Sharma', department: 'IT', salary: 60000, company_rank: 3, dept_rank: 2 }])
];

// ─────────────────────────────────────────────────────────────
// POPULAR 3: Sales Analytics (10 Tasks)
// ─────────────────────────────────────────────────────────────
const POPULAR_3_QUESTIONS: SqlChallengeTask[] = [
  makeTask(103, 1, 'Total Sales Revenue', 'Hard', 'Popular Challenges', 15, '96.0%', 'SUM(total_amount)', 'Total sales revenue calculate karo.', 'SELECT SUM(total_amount) AS total_revenue FROM orders;', 'SELECT SUM(total_amount) AS total_revenue FROM orders;', ['total_revenue'], [{ total_revenue: 540000 }]),
  makeTask(103, 2, 'Total Orders Count', 'Hard', 'Popular Challenges', 15, '97.2%', 'COUNT(*)', 'Total orders ki count nikalo.', 'SELECT COUNT(*) AS total_orders FROM orders;', 'SELECT COUNT(*) AS total_orders FROM orders;', ['total_orders'], [{ total_orders: 142 }]),
  makeTask(103, 3, 'Average Order Value (AOV)', 'Hard', 'Popular Challenges', 15, '94.5%', 'AVG(total_amount)', 'Average order value calculate karo.', 'SELECT AVG(total_amount) AS avg_order_value FROM orders;', 'SELECT AVG(total_amount) AS avg_order_value FROM orders;', ['avg_order_value'], [{ avg_order_value: 3802.81 }]),
  makeTask(103, 4, 'Month-wise Total Sales', 'Hard', 'Popular Challenges', 15, '92.0%', 'EXTRACT Month with SUM', 'Month-wise total sales display karo.', 'SELECT EXTRACT(MONTH FROM order_date) AS month, SUM(total_amount) AS sales FROM orders GROUP BY month;', 'SELECT EXTRACT(MONTH FROM order_date) AS month, SUM(total_amount) AS sales FROM orders GROUP BY month;', ['month', 'sales'], [{ month: 1, sales: 150000 }, { month: 2, sales: 180000 }, { month: 3, sales: 210000 }]),
  makeTask(103, 5, 'Top 5 Highest Revenue Customers', 'Hard', 'Popular Challenges', 15, '91.2%', 'GROUP BY customer_id ORDER BY SUM DESC LIMIT 5', 'Highest revenue wale top 5 customers find karo.', 'SELECT customer_id, SUM(total_amount) AS revenue FROM orders GROUP BY customer_id ORDER BY revenue DESC LIMIT 5;', 'SELECT customer_id, SUM(total_amount) AS revenue FROM orders GROUP BY customer_id ORDER BY revenue DESC LIMIT 5;', ['customer_id', 'revenue'], [{ customer_id: 101, revenue: 85000 }, { customer_id: 104, revenue: 62000 }]),
  makeTask(103, 6, 'Top 5 Products by Quantity Sold', 'Hard', 'Popular Challenges', 15, '90.5%', 'GROUP BY product_id SUM(quantity)', 'Top 5 products by quantity sold find karo.', 'SELECT product_id, SUM(quantity) AS total_qty FROM order_items GROUP BY product_id ORDER BY total_qty DESC LIMIT 5;', 'SELECT product_id, SUM(quantity) AS total_qty FROM order_items GROUP BY product_id ORDER BY total_qty DESC LIMIT 5;', ['product_id', 'total_qty'], [{ product_id: 1, total_qty: 350 }, { product_id: 2, total_qty: 280 }]),
  makeTask(103, 7, 'Compare Month Sales with Previous Month', 'Hard', 'Popular Challenges', 15, '85.4%', 'LAG() Window Function', 'Har month ki sales ko previous month se compare karo.', 'WITH M_Sales AS (SELECT EXTRACT(MONTH FROM order_date) as month, SUM(total_amount) as sales FROM orders GROUP BY month) SELECT month, sales, LAG(sales) OVER (ORDER BY month) AS prev_month_sales FROM M_Sales;', 'WITH M_Sales AS (SELECT EXTRACT(MONTH FROM order_date) as month, SUM(total_amount) as sales FROM orders GROUP BY month) SELECT month, sales, LAG(sales) OVER (ORDER BY month) AS prev_month_sales FROM M_Sales;', ['month', 'sales', 'prev_month_sales'], [{ month: 1, sales: 150000, prev_month_sales: 'NULL' }, { month: 2, sales: 180000, prev_month_sales: 150000 }]),
  makeTask(103, 8, 'Monthly Sales Growth Percentage', 'Hard', 'Popular Challenges', 15, '82.0%', 'Percentage Growth Formula', 'Har month ke sales growth percentage calculate karo.', 'WITH M_Sales AS (SELECT EXTRACT(MONTH FROM order_date) as month, SUM(total_amount) as sales FROM orders GROUP BY month) SELECT month, ROUND(((sales - LAG(sales) OVER (ORDER BY month)) / LAG(sales) OVER (ORDER BY month)) * 100, 2) AS growth_pct FROM M_Sales;', 'WITH M_Sales AS (SELECT EXTRACT(MONTH FROM order_date) as month, SUM(total_amount) as sales FROM orders GROUP BY month) SELECT month, ROUND(((sales - LAG(sales) OVER (ORDER BY month)) / LAG(sales) OVER (ORDER BY month)) * 100, 2) AS growth_pct FROM M_Sales;', ['month', 'growth_pct'], [{ month: 1, growth_pct: 'NULL' }, { month: 2, growth_pct: 20.00 }]),
  makeTask(103, 9, 'Customer Total Orders and Revenue Report', 'Hard', 'Popular Challenges', 15, '89.5%', 'Customer Summary', 'Customer-wise total orders aur total revenue report banao.', 'SELECT customer_id, COUNT(*) AS orders_count, SUM(total_amount) AS revenue FROM orders GROUP BY customer_id;', 'SELECT customer_id, COUNT(*) AS orders_count, SUM(total_amount) AS revenue FROM orders GROUP BY customer_id;', ['customer_id', 'orders_count', 'revenue'], [{ customer_id: 101, orders_count: 5, revenue: 85000 }, { customer_id: 102, orders_count: 3, revenue: 42000 }]),
  makeTask(103, 10, 'Executive Sales Dashboard Query', 'Hard', 'Popular Challenges', 15, '81.0%', 'Multi-metric Sales Dashboard', 'Revenue, order count, average order value aur month-over-month growth ke saath sales dashboard query banao.', 'WITH MonthlyStats AS (SELECT EXTRACT(MONTH FROM order_date) as month, COUNT(*) as orders_count, SUM(total_amount) as revenue, AVG(total_amount) as aov FROM orders GROUP BY month) SELECT month, orders_count, revenue, ROUND(aov, 2) as aov, ROUND(((revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month)) * 100, 2) as mom_growth FROM MonthlyStats;', 'WITH MonthlyStats AS (SELECT EXTRACT(MONTH FROM order_date) as month, COUNT(*) as orders_count, SUM(total_amount) as revenue, AVG(total_amount) as aov FROM orders GROUP BY month) SELECT month, orders_count, revenue, ROUND(aov, 2) as aov, ROUND(((revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month)) * 100, 2) as mom_growth FROM MonthlyStats;', ['month', 'orders_count', 'revenue', 'aov', 'mom_growth'], [{ month: 1, orders_count: 45, revenue: 150000, aov: 3333.33, mom_growth: 'NULL' }, { month: 2, orders_count: 52, revenue: 180000, aov: 3461.54, mom_growth: 20.00 }])
];

// ─────────────────────────────────────────────────────────────
// POPULAR 4: Customer Segmentation (10 Tasks)
// ─────────────────────────────────────────────────────────────
const POPULAR_4_QUESTIONS: SqlChallengeTask[] = [
  makeTask(104, 1, 'All Customers and Their Orders', 'Medium', 'Popular Challenges', 10, '94.0%', 'LEFT JOIN customers orders', 'Saare customers aur unke orders display karo.', 'SELECT c.customer_name, o.order_id, o.total_amount FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;', 'SELECT c.customer_name, o.order_id, o.total_amount FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id;', ['customer_name', 'order_id', 'total_amount'], [{ customer_name: 'Rahul', order_id: 101, total_amount: 5000 }, { customer_name: 'Priya', order_id: 'NULL', total_amount: 'NULL' }]),
  makeTask(104, 2, 'Customers Who Never Ordered', 'Medium', 'Popular Challenges', 10, '93.2%', 'WHERE o.order_id IS NULL', 'Un customers ko find karo jinhone kabhi order nahi kiya.', 'SELECT c.customer_name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;', 'SELECT c.customer_name FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id WHERE o.order_id IS NULL;', ['customer_name'], [{ customer_name: 'Priya' }]),
  makeTask(104, 3, 'Total Orders per Customer', 'Medium', 'Popular Challenges', 10, '92.5%', 'COUNT(order_id) GROUP BY customer', 'Har customer ke total orders calculate karo.', 'SELECT c.customer_name, COUNT(o.order_id) AS total_orders FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_name;', 'SELECT c.customer_name, COUNT(o.order_id) AS total_orders FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_name;', ['customer_name', 'total_orders'], [{ customer_name: 'Rahul', total_orders: 5 }, { customer_name: 'Priya', total_orders: 0 }]),
  makeTask(104, 4, 'Total Spending per Customer', 'Medium', 'Popular Challenges', 10, '91.8%', 'COALESCE(SUM, 0)', 'Har customer ka total spending calculate karo.', 'SELECT c.customer_name, COALESCE(SUM(o.total_amount), 0) AS total_spending FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_name;', 'SELECT c.customer_name, COALESCE(SUM(o.total_amount), 0) AS total_spending FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_name;', ['customer_name', 'total_spending'], [{ customer_name: 'Rahul', total_spending: 45000 }, { customer_name: 'Priya', total_spending: 0 }]),
  makeTask(104, 5, 'High, Medium and Low Customer Segments', 'Medium', 'Popular Challenges', 10, '89.4%', 'CASE based on total_spent', 'Customers ko spending ke basis par High, Medium aur Low segments mein divide karo.', 'WITH Spend AS (SELECT customer_id, SUM(total_amount) as spent FROM orders GROUP BY customer_id) SELECT customer_id, CASE WHEN spent >= 50000 THEN \'High\' WHEN spent >= 20000 THEN \'Medium\' ELSE \'Low\' END AS segment FROM Spend;', 'WITH Spend AS (SELECT customer_id, SUM(total_amount) as spent FROM orders GROUP BY customer_id) SELECT customer_id, CASE WHEN spent >= 50000 THEN \'High\' WHEN spent >= 20000 THEN \'Medium\' ELSE \'Low\' END AS segment FROM Spend;', ['customer_id', 'segment'], [{ customer_id: 101, segment: 'High' }, { customer_id: 102, segment: 'Medium' }]),
  makeTask(104, 6, 'Loyal Customers (> 5 Orders)', 'Medium', 'Popular Challenges', 10, '90.2%', 'HAVING COUNT > 5', 'Un customers ko find karo jinhone 5 se zyada orders place kiye hain.', 'SELECT customer_id, COUNT(*) AS orders_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 5;', 'SELECT customer_id, COUNT(*) AS orders_count FROM orders GROUP BY customer_id HAVING COUNT(*) > 5;', ['customer_id', 'orders_count'], [{ customer_id: 101, orders_count: 8 }]),
  makeTask(104, 7, 'Inactive Customers in Last 90 Days', 'Medium', 'Popular Challenges', 10, '87.0%', 'Reference date difference', 'Un customers ko find karo jinhone pichhle 90 din mein order nahi kiya, using a supplied reference date.', 'SELECT customer_id FROM orders GROUP BY customer_id HAVING MAX(order_date) < CURRENT_DATE - INTERVAL \'90 days\';', 'SELECT customer_id FROM orders GROUP BY customer_id HAVING MAX(order_date) < CURRENT_DATE - INTERVAL \'90 days\';', ['customer_id'], [{ customer_id: 105 }]),
  makeTask(104, 8, 'Customer Average Order Value', 'Medium', 'Popular Challenges', 10, '91.0%', 'AVG(total_amount) per customer', 'Customer-wise average order value calculate karo.', 'SELECT customer_id, AVG(total_amount) AS aov FROM orders GROUP BY customer_id;', 'SELECT customer_id, AVG(total_amount) AS aov FROM orders GROUP BY customer_id;', ['customer_id', 'aov'], [{ customer_id: 101, aov: 6200.00 }]),
  makeTask(104, 9, 'Rank Customers by Total Spending', 'Medium', 'Popular Challenges', 10, '88.5%', 'DENSE_RANK() by total spend', 'Customers ko total spending ke basis par rank karo.', 'WITH Spend AS (SELECT customer_id, SUM(total_amount) as total FROM orders GROUP BY customer_id) SELECT customer_id, total, DENSE_RANK() OVER (ORDER BY total DESC) as rank FROM Spend;', 'WITH Spend AS (SELECT customer_id, SUM(total_amount) as total FROM orders GROUP BY customer_id) SELECT customer_id, total, DENSE_RANK() OVER (ORDER BY total DESC) as rank FROM Spend;', ['customer_id', 'total', 'rank'], [{ customer_id: 101, total: 95000, rank: 1 }, { customer_id: 104, total: 68000, rank: 2 }]),
  makeTask(104, 10, 'Master Customer Segmentation Report', 'Medium', 'Popular Challenges', 10, '85.2%', 'Segmentation Dashboard', 'Customer segmentation report banao jisme order count, total spending, average order value aur customer segment ho.', 'WITH CustomerMetrics AS (SELECT customer_id, COUNT(*) as order_count, SUM(total_amount) as total_spend, AVG(total_amount) as aov FROM orders GROUP BY customer_id) SELECT customer_id, order_count, total_spend, ROUND(aov, 2) as aov, CASE WHEN total_spend >= 50000 THEN \'Platinum\' WHEN total_spend >= 20000 THEN \'Gold\' ELSE \'Silver\' END as segment FROM CustomerMetrics;', 'WITH CustomerMetrics AS (SELECT customer_id, COUNT(*) as order_count, SUM(total_amount) as total_spend, AVG(total_amount) as aov FROM orders GROUP BY customer_id) SELECT customer_id, order_count, total_spend, ROUND(aov, 2) as aov, CASE WHEN total_spend >= 50000 THEN \'Platinum\' WHEN total_spend >= 20000 THEN \'Gold\' ELSE \'Silver\' END as segment FROM CustomerMetrics;', ['customer_id', 'order_count', 'total_spend', 'aov', 'segment'], [{ customer_id: 101, order_count: 8, total_spend: 95000, aov: 11875.00, segment: 'Platinum' }, { customer_id: 102, order_count: 4, total_spend: 28000, aov: 7000.00, segment: 'Gold' }])
];

// ─────────────────────────────────────────────────────────────
// COMPLETE LIST OF ALL TOPICS EXPORT (25 Topics + 4 Popular Challenges = 290 Questions)
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
    description: 'Sort query results ascending and descending, perform multi-column sorting, and control ordering.',
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
    description: 'Safely test for missing database values and handle nullability using IS NULL and IS NOT NULL.',
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
    description: 'Extract date parts, compute date intervals, calculate tenure, and format date strings.',
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
    description: 'Improve execution plans using index-friendly queries, avoiding SELECT *, and inspecting EXPLAIN plans.',
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
    description: 'Construct multi-table enterprise relational joins and multi-entity dashboards.',
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
    description: 'Calculate real-world business KPIs like employee distributions, top spending customers, and payroll summaries.',
    tabs: ['all', 'advanced'],
    solved: false,
    questions: TOPIC_25_QUESTIONS
  },
  // Popular Challenge 1
  {
    id: 101,
    title: 'Popular Challenge 1 — Top N Records',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Popular Challenges',
    description: 'Extract Top N performing products, employees, and sales across diverse market categories.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_1_QUESTIONS
  },
  // Popular Challenge 2
  {
    id: 102,
    title: 'Popular Challenge 2 — Employee Analysis',
    difficulty: 'Medium',
    maxScore: 10,
    skill: 'Popular Challenges',
    description: 'Perform deep HR workforce analytics, tenure calculation, and department salary comparisons.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_2_QUESTIONS
  },
  // Popular Challenge 3
  {
    id: 103,
    title: 'Popular Challenge 3 — Sales Analytics',
    difficulty: 'Hard',
    maxScore: 15,
    skill: 'Popular Challenges',
    description: 'Build end-to-end sales cohorts, monthly revenue velocity, and sales KPI dashboards.',
    tabs: ['all', 'popular'],
    solved: false,
    questions: POPULAR_3_QUESTIONS
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
    questions: POPULAR_4_QUESTIONS
  }
];
