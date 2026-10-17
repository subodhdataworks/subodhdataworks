import fs from 'fs';
import path from 'path';

const content = `import { CourseModule } from '../types';

export const COURSES_CATALOG: CourseModule[] = [
  {
    id: 'python',
    title: 'Python for Data Analytics & AI',
    tagline: 'From zero logic to handling millions of records with NumPy and Pandas.',
    badge: 'CORE PILLAR 01',
    iconName: 'Code2',
    themeColor: '#00B8A9',
    description: 'Master the world\\'s #1 programming language for data analysis, manipulation, automated pipelines, and machine learning.',
    duration: '16 Industry-Grade Units (Module 1 & 2)',
    totalTopics: 16,
    freeTopicsCount: 3,
    topics: [
      // MODULE 1: GETTING STARTED WITH PYTHON
      {
        id: 'py_01',
        topicNumber: 1,
        title: 'Module 1 Overview: Getting Started with Python',
        tagline: 'Your systematic roadmap from zero code to enterprise-ready computational logic.',
        isFree: true,
        whatIsIt: 'Module 1 establishes your foundational command over Python, the world\\'s most versatile analytics programming language. You will master variables, memory architecture, data types, indexing, and operators.',
        whyDoWeUseIt: 'Every modern data analytics workflow, machine learning pipeline, and automated reporting script begins with these essential computational building blocks.',
        indianRealLifeMetaphor: 'Like learning the alphabet before writing investigative journalism, mastering Python\\'s core syntax allows you to express any business logic effortlessly.',
        syntax: '# Python Module 1 Architecture\\ncore_skills = ["Syntax", "Data Types", "Indexing", "Operators", "Methods"]',
        starterCode: '# Welcome to Module 1: Getting Started with Python\\nskills = ["1. Syntax", "2. Data Types", "3. Indexing & Slicing", "4. Operators", "5. Methods"]\\nprint("=== WELCOME TO 2050 DATA ACADEMY ===")\\nfor skill in skills:\\n    print(f"Mastering: {skill}")',
        expectedOutput: '=== WELCOME TO 2050 DATA ACADEMY ===\\nMastering: 1. Syntax\\nMastering: 2. Data Types\\nMastering: 3. Indexing & Slicing\\nMastering: 4. Operators\\nMastering: 5. Methods',
        lineByLineExplanation: [
          { line: 'skills = [...]', explanation: 'Defines an ordered Python list holding the key curriculum competencies.' },
          { line: 'for skill in skills:', explanation: 'Iterates through each competency, preparing your learning trajectory.' }
        ],
        realDataAnalystUse: 'Structuring automated pipeline stages and establishing logging checkpoints for enterprise data flows.',
        commonMistakes: [
          'Skipping syntax fundamentals to rush into complex machine learning libraries without understanding memory behavior.'
        ],
        interviewAnswer: {
          question: 'What is Python and why has it become the undisputed industry standard for data analytics?',
          answer20s: 'Python is an interpreted, high-level programming language that pairs human-readable syntax with an unbeatable analytics ecosystem—libraries like Pandas and NumPy process millions of records in milliseconds, reducing pipeline development time by over 70%.',
          audioPrompt: 'Python is an interpreted high-level language with an unbeatable ecosystem like Pandas and NumPy that process millions of records in milliseconds.'
        },
        practiceQuestion: {
          prompt: 'Write two print statements displaying your target Data Analyst career goal and target salary expectation.',
          hints: ['Use quotes around your text', 'Use lowercase print()']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_02',
        topicNumber: 2,
        title: 'Progress Tracker Overview',
        tagline: 'Track empirical mastery, active recall retention, and interview velocity.',
        isFree: true,
        whatIsIt: 'The Progress Tracker is an automated analytics engine built into 2050 that evaluates your retention curve, daily workout streaks, and problem-solving speed in real-time.',
        whyDoWeUseIt: 'Passive watching leads to the illusion of competence. Empirical tracking ensures you retain syntax and can write code on a blank whiteboard under interview conditions.',
        indianRealLifeMetaphor: 'Like an airplane cockpit instrument cluster showing altitude, fuel, and airspeed, your progress tracker guarantees you never veer off course.',
        syntax: 'progress = {"completed": 2, "total": 16, "retention": "98%"}',
        starterCode: '# Track your personal analytics mastery\\ncompleted_units = 2\\ntotal_units = 16\\nretention_pct = 98.4\\n\\nprogress_rate = (completed_units / total_units) * 100\\nprint(f"Units Completed: {completed_units} / {total_units}")\\nprint(f"Overall Progress: {progress_rate:.1f}%")\\nprint(f"Retention Health: {retention_pct}% (Active Recall Verified)")',
        expectedOutput: 'Units Completed: 2 / 16\\nOverall Progress: 12.5%\\nRetention Health: 98.4% (Active Recall Verified)',
        lineByLineExplanation: [
          { line: 'completed_units = 2', explanation: 'Assigns an integer variable tracking your mastered units.' },
          { line: 'progress_rate = (...)', explanation: 'Computes your completion percentage using arithmetic division.' }
        ],
        realDataAnalystUse: 'Engineering automated KPI progress indicators and service level agreement (SLA) burn-down dashboards.',
        commonMistakes: [
          'Integer division in legacy Python 2 used to truncate decimals; in Python 3, single slash / always returns a precise float.'
        ],
        interviewAnswer: {
          question: 'How do you measure productivity and data accuracy in an automated analytics workflow?',
          answer20s: 'In production analytics, we implement quantitative telemetry trackers that log processing throughput, error rates, and schema validation flags, ensuring stakeholders receive validated reports with verifiable audit trails.',
          audioPrompt: 'We implement quantitative telemetry to monitor throughput, schema validation, and pipeline health with verifiable audit logs.'
        },
        practiceQuestion: {
          prompt: 'Calculate the percentage of items processed if 450 records succeeded out of 500 total rows.',
          hints: ['Formula: (450 / 500) * 100']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_03',
        topicNumber: 3,
        title: 'Learning Objective: Foundations to Analytics',
        tagline: 'Bridge raw logic to actionable business problem solving.',
        isFree: true,
        whatIsIt: 'This foundational learning objective establishes the mental bridge between programming syntax and real-world business analytics. You learn how computers read data and execute operations.',
        whyDoWeUseIt: 'Companies do not hire analysts to write code; they hire analysts to solve expensive operational bottlenecks, detect revenue leaks, and guide strategic investments.',
        indianRealLifeMetaphor: 'A stethoscope does not heal a patient; a doctor uses it to diagnose the problem. Python is your analytical stethoscope for raw business data.',
        syntax: 'objective = "Transform raw data into business intelligence"',
        starterCode: '# The 2050 Data Analyst Objective\\nrevenue_q1 = 450000\\nrevenue_q2 = 585000\\n\\ngrowth_amount = revenue_q2 - revenue_q1\\ngrowth_pct = (growth_amount / revenue_q1) * 100\\n\\nprint(f"Revenue Growth: Rs. {growth_amount:,}")\\nprint(f"Quarterly Growth: {growth_pct:.2f}%")\\nprint("Objective Achieved: Quantified executive growth metric.")',
        expectedOutput: 'Revenue Growth: Rs. 135,000\\nQuarterly Growth: 30.00%\\nObjective Achieved: Quantified executive growth metric.',
        lineByLineExplanation: [
          { line: 'growth_amount = revenue_q2 - revenue_q1', explanation: 'Calculates the net financial delta between quarters.' },
          { line: 'print(f"Revenue Growth: ...")', explanation: 'Formats large financial numbers with readable commas using :, formatting.' }
        ],
        realDataAnalystUse: 'Quarterly financial variance reporting and executive board performance briefings.',
        commonMistakes: [
          'Presenting unformatted numbers like 135000.00000001 instead of polished business numbers with currency and commas.'
        ],
        interviewAnswer: {
          question: 'What is the role of a modern Data Analyst in a high-growth tech organization?',
          answer20s: 'A modern Data Analyst bridges raw operational data and executive decision-making. By writing robust Python and SQL scripts, we clean chaotic transactional logs, uncover underlying churn drivers, and present quantifiable growth strategies.',
          audioPrompt: 'A Data Analyst bridges raw data and executive strategy, transforming chaotic logs into validated business growth insights.'
        },
        practiceQuestion: {
          prompt: 'Calculate the profit margin percentage given revenue = 80000 and cost = 52000.',
          hints: ['profit = revenue - cost', 'margin = (profit / revenue) * 100']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_04',
        topicNumber: 4,
        title: 'Introduction to Python Programming',
        tagline: 'Master precision syntax, print execution, and clean f-string formatting.',
        isFree: false,
        whatIsIt: 'Python is a high-level, interpreted language where code runs sequentially line-by-line. The print() function outputs data, while modern f-strings embed dynamic values directly inside text.',
        whyDoWeUseIt: 'Python is read like clean English, allowing teams to collaborate and deploy ETL data pipelines rapidly without low-level memory allocation overhead.',
        indianRealLifeMetaphor: 'Like giving a clear, step-by-step checklist to a warehouse manager, Python executes your exact steps without deviation.',
        syntax: 'print(f"Result: {variable}")',
        starterCode: 'analyst_name = "Alex"\\nactive_dataset = "ecommerce_orders.csv"\\nrow_count = 15420\\n\\nprint(f"Lead Analyst: {analyst_name}")\\nprint(f"Loading Dataset: {active_dataset}")\\nprint(f"Records Ingested: {row_count:,} rows verified.")',
        expectedOutput: 'Lead Analyst: Alex\\nLoading Dataset: ecommerce_orders.csv\\nRecords Ingested: 15,420 rows verified.',
        lineByLineExplanation: [
          { line: 'analyst_name = "Alex"', explanation: 'Stores text string in RAM.' },
          { line: 'print(f"... {row_count:,}")', explanation: 'Inserts variable directly into text and formats with thousands comma separators.' }
        ],
        realDataAnalystUse: 'Automated data pipeline logging, status reporting, and data validation alerts.',
        commonMistakes: [
          'Forgetting the f before quotes: print("Total: {row_count}") prints literal curly braces instead of the value.'
        ],
        interviewAnswer: {
          question: 'What happens when Python executes a script, and why are f-strings favored in production?',
          answer20s: 'Python compiles source code into intermediate bytecode (.pyc) and executes it on the Python Virtual Machine. f-strings, introduced in Python 3.6, evaluate expressions at runtime faster than the legacy .format() method and provide clean, readable syntax for logging metrics.',
          audioPrompt: 'Python compiles to bytecode and executes on the virtual machine. f-strings evaluate inline expressions faster with superior readability.'
        },
        practiceQuestion: {
          prompt: 'Create variables city = "Bangalore" and temp = 28.5. Print: "Current temperature in Bangalore is 28.5 C" using an f-string.',
          hints: ['Use f"Current temperature in {city} is {temp} C"']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_05',
        topicNumber: 5,
        title: 'Data Types in Python',
        tagline: 'Strings, Integers, Floats, Booleans, Lists, Tuples, Sets, and Dictionaries.',
        isFree: false,
        whatIsIt: 'A data type defines the kind of value an object holds and what operations can be performed on it. Python provides str, int, float, bool, list, tuple, set, and dict, with automatic dynamic typing.',
        whyDoWeUseIt: 'Understanding data types prevents critical bugs. For example, adding "100" + "200" results in text concatenation "100200" instead of mathematical addition 300.',
        indianRealLifeMetaphor: 'Like separate compartments in a cash register for coins, paper notes, and receipts, each data type has a distinct purpose and rules.',
        syntax: 'type(variable)',
        starterCode: '# Inspecting diverse analytics data types\\ncustomer_id = 9021\\ncustomer_name = "Priya"\\norder_amount = 1450.75\\nis_prime_member = True\\nitems_purchased = ["Laptop Bag", "Wireless Mouse"]\\n\\nprint("Type of ID:", type(customer_id).__name__)\\nprint("Type of Amount:", type(order_amount).__name__)\\nprint("Type of Items:", type(items_purchased).__name__)\\nprint(f"Customer {customer_name} spent Rs. {order_amount} (Prime: {is_prime_member})")',
        expectedOutput: 'Type of ID: int\\nType of Amount: float\\nType of Items: list\\nCustomer Priya spent Rs. 1450.75 (Prime: True)',
        lineByLineExplanation: [
          { line: 'order_amount = 1450.75', explanation: 'Stores a decimal floating-point number in memory.' },
          { line: 'type(order_amount).__name__', explanation: 'Inspects and prints the exact data type name ("float").' }
        ],
        realDataAnalystUse: 'Auditing messy CSV columns, checking data types before SQL database insertion, and preventing TypeErrors during aggregations.',
        commonMistakes: [
          'Assuming input() returns a number: input() ALWAYS returns a string (str) that must be cast with int() or float().'
        ],
        interviewAnswer: {
          question: 'What are mutable vs immutable data types in Python, and why does this matter for data processing?',
          answer20s: 'Immutable types—such as integers, floats, strings, and tuples—cannot be altered after creation, ensuring data integrity and hashability. Mutable types like lists and dictionaries can be modified in-place, offering fast updates but requiring caution to avoid unintended side effects across pipeline functions.',
          audioPrompt: 'Immutable types like strings and tuples cannot be altered after creation. Mutable types like lists and dictionaries allow in-place modification.'
        },
        practiceQuestion: {
          prompt: 'Create an integer x = 50 and cast it to a string using str(x). Verify its type with type().',
          hints: ['x_str = str(x)', 'print(type(x_str))']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_06',
        topicNumber: 6,
        title: 'Indexing & Slicing',
        tagline: 'Precision data extraction using zero-based indices and slice notation.',
        isFree: false,
        whatIsIt: 'Indexing retrieves a single element from an ordered sequence using square brackets [index], starting at 0. Slicing extracts a sub-sequence using [start:stop:step], where stop is exclusive.',
        whyDoWeUseIt: 'Real datasets require extracting specific subsets—such as the first 5 records, the last transaction with [-1], or reversing sequences with [::-1].',
        indianRealLifeMetaphor: 'Like slicing a loaf of bread into exact slices or picking book #1 from a numbered library shelf.',
        syntax: 'sequence[start:stop:step]',
        starterCode: 'orders = ["ORD_101", "ORD_102", "ORD_103", "ORD_104", "ORD_105"]\\n\\n# 1. Fetch first order (index 0)\\nfirst_order = orders[0]\\n\\n# 2. Fetch last order (index -1)\\nlatest_order = orders[-1]\\n\\n# 3. Slice the middle three orders (index 1 to 4 exclusive)\\nmiddle_orders = orders[1:4]\\n\\nprint("First Order:", first_order)\\nprint("Latest Order:", latest_order)\\nprint("Middle Batch:", middle_orders)',
        expectedOutput: 'First Order: ORD_101\\nLatest Order: ORD_105\\nMiddle Batch: [\\'ORD_102\\', \\'ORD_103\\', \\'ORD_104\\']',
        lineByLineExplanation: [
          { line: 'first_order = orders[0]', explanation: 'Extracts the item at position 0.' },
          { line: 'latest_order = orders[-1]', explanation: 'Uses negative indexing to cleanly access the last item without needing len().' },
          { line: 'orders[1:4]', explanation: 'Slices from index 1 up to (but not including) index 4.' }
        ],
        realDataAnalystUse: 'Splitting time-series dates (e.g., date[:4] for year), isolating train-test splits, and sampling dataset batches.',
        commonMistakes: [
          'Off-by-one errors: Forgetting that the stop index is exclusive (e.g., [0:3] gives indices 0, 1, 2 only).'
        ],
        interviewAnswer: {
          question: 'Explain Python slice syntax and how negative indices operate under the hood.',
          answer20s: 'Python slice syntax follows [start:stop:step]. When a negative index -k is used, Python resolves it internally as len(sequence) - k. Slicing returns a shallow copy of the requested elements without modifying the original sequence, executing in O(k) time.',
          audioPrompt: 'Slice syntax is start:stop:step. Negative indices resolve as length minus index, returning a shallow copy in linear time.'
        },
        practiceQuestion: {
          prompt: 'Given date_string = "2026-09-26", extract the year "2026" using slicing.',
          hints: ['Use date_string[:4]']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_07',
        topicNumber: 7,
        title: 'Operators in Data Types',
        tagline: 'Arithmetic, comparison, logical, and membership operations.',
        isFree: false,
        whatIsIt: 'Operators perform computations on data: Arithmetic (+, -, *, /, //, %, **), Comparison (==, !=, <, >), Logical (and, or, not), and Membership (in, not in).',
        whyDoWeUseIt: 'Every analytical decision—such as checking if a customer spent more than ₹1,000 or whether a churn flag is present—relies on operators.',
        indianRealLifeMetaphor: 'Like a digital weighing scale that compares weights and beeps when a package exceeds the cargo limit.',
        syntax: 'is_valid = (amount > 1000) and ("PREMIUM" in tags)',
        starterCode: 'order_value = 1850\\ndiscount_threshold = 1500\\nallowed_cities = ["Delhi", "Mumbai", "Bangalore"]\\ncustomer_city = "Mumbai"\\n\\n# 1. Comparison & Logical\\nqualifies_for_discount = (order_value >= discount_threshold) and (customer_city in allowed_cities)\\n\\nprint(f"Order Value: Rs. {order_value}")\\nprint(f"City: {customer_city}")\\nprint(f"Discount Eligible: {qualifies_for_discount}")',
        expectedOutput: 'Order Value: Rs. 1850\\nCity: Mumbai\\nDiscount Eligible: True',
        lineByLineExplanation: [
          { line: 'order_value >= discount_threshold', explanation: 'Evaluates if order meets minimum spend (True).' },
          { line: 'customer_city in allowed_cities', explanation: 'Checks membership inside the authorized cities list (True).' }
        ],
        realDataAnalystUse: 'Constructing multi-criteria filtering masks in Pandas: df[(df["sales"] > 5000) & (df["region"] == "North")].',
        commonMistakes: [
          'Using single = (assignment) instead of double == (comparison) in condition checks.'
        ],
        interviewAnswer: {
          question: 'What is short-circuit evaluation in Python logical operators?',
          answer20s: 'In Python, logical operators and and or use short-circuit evaluation. In an and expression, if the first operand evaluates to False, Python immediately returns False without evaluating the second operand, optimizing speed and preventing runtime errors like dividing by zero or index lookups.',
          audioPrompt: 'Python logical operators use short-circuit evaluation, stopping as soon as the overall truth value is conclusively determined.'
        },
        practiceQuestion: {
          prompt: 'Write an expression checking if price is greater than 500 AND city is "Delhi". Test with price = 650, city = "Delhi".',
          hints: ['(price > 500) and (city == "Delhi")']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_08',
        topicNumber: 8,
        title: 'In-Built Functions & Methods',
        tagline: 'Harness Python\\'s powerful string, list, and dictionary manipulation tools.',
        isFree: false,
        whatIsIt: 'In-built functions like len(), sum(), min(), max() operate globally on objects, while object methods like .strip(), .lower(), .replace(), .append(), .keys() are built-in functions attached directly to specific data types.',
        whyDoWeUseIt: 'Raw real-world business data is filled with whitespace, mismatched letter cases, and missing keys. In-built methods allow instant data cleaning with single-line commands.',
        indianRealLifeMetaphor: 'Like an automated car wash where high-pressure jets strip dirt, polish surfaces, and clean windows in one continuous conveyor pass.',
        syntax: 'clean_text = raw_text.strip().lower()',
        starterCode: 'raw_email = "   Customer.Service@Domain.COM  \\n"\\nclean_email = raw_email.strip().lower()\\n\\nmetric_scores = [85, 92, 78, 96, 89]\\ntotal_sum = sum(metric_scores)\\navg_score = total_sum / len(metric_scores)\\n\\nprint("Raw Email:", repr(raw_email))\\nprint("Clean Email:", clean_email)\\nprint(f"Average Score: {avg_score:.1f} (Max: {max(metric_scores)})")',
        expectedOutput: 'Raw Email: \\'   Customer.Service@Domain.COM  \\\\n\\'\\nClean Email: customer.service@domain.com\\nAverage Score: 88.0 (Max: 96)',
        lineByLineExplanation: [
          { line: 'raw_email.strip().lower()', explanation: 'Chains methods: strips whitespace then converts all characters to lowercase.' },
          { line: 'sum(metric_scores) / len(metric_scores)', explanation: 'Computes arithmetic mean using built-in mathematical functions.' }
        ],
        realDataAnalystUse: 'Standardizing user email inputs, normalizing category names, and calculating statistical summaries across batches.',
        commonMistakes: [
          'Calling methods on incompatible types, e.g., calling .strip() on an integer or float instead of casting to str first.'
        ],
        interviewAnswer: {
          question: 'What is the architectural difference between a Python function and a method?',
          answer20s: 'A function is a self-contained block of code called by name that receives arguments explicitly, such as len(data). A method is a function bound to an object class, called via dot-notation, that implicitly receives the calling instance as its first self argument, such as text.upper().',
          audioPrompt: 'A function is independent, like len(). A method is bound to an object class and called using dot notation, like string.strip().'
        },
        practiceQuestion: {
          prompt: 'Given dirty_name = "  rahul sharma ", strip the whitespace and title-case it using .strip().title().',
          hints: ['dirty_name.strip().title()']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_09',
        topicNumber: 9,
        title: 'Skill Mastery Challenge - Getting Started with Python',
        tagline: 'Validate your Module 1 command: Parse customer records, validate status, and compute metrics.',
        isFree: false,
        whatIsIt: 'This end-of-module challenge tests your holistic command over Module 1: string parsing, data type coercion, indexing, operators, and formatting on an actual e-commerce transaction batch.',
        whyDoWeUseIt: 'Real analytics interviews do not test concepts in isolation. They present a raw business problem requiring multiple foundational techniques combined seamlessly.',
        indianRealLifeMetaphor: 'Like a pilot taking the flight simulator test in stormy weather before taking command of a commercial airliner.',
        syntax: '# Complete customer batch parser\\nprocessed = [clean(r) for r in raw_batch]',
        starterCode: '# Raw transactional feed from payment gateway\\nraw_record = "ORD-9481,Rahul Verma,5400.50,CONFIRMED"\\n\\n# 1. Parse fields using .split()\\nfields = raw_record.split(",")\\norder_id = fields[0]\\ncustomer_name = fields[1]\\namount = float(fields[2])\\nstatus = fields[3]\\n\\n# 2. Compute 18% GST\\ntax_amount = amount * 0.18\\ntotal_payable = amount + tax_amount\\n\\nprint(f"=== INVOICE DISPATCH: {order_id} ===")\\nprint(f"Client: {customer_name}")\\nprint(f"Subtotal: Rs. {amount:,.2f}")\\nprint(f"GST (18%): Rs. {tax_amount:,.2f}")\\nprint(f"Final Total: Rs. {total_payable:,.2f}")\\nprint(f"Status: {status} [PASSED VALIDATION]")',
        expectedOutput: '=== INVOICE DISPATCH: ORD-9481 ===\\nClient: Rahul Verma\\nSubtotal: Rs. 5,400.50\\nGST (18%): Rs. 972.09\\nFinal Total: Rs. 6,372.59\\nStatus: CONFIRMED [PASSED VALIDATION]',
        lineByLineExplanation: [
          { line: 'fields = raw_record.split(",")', explanation: 'Splits comma-separated string into a structured 4-element list.' },
          { line: 'amount = float(fields[2])', explanation: 'Casts extracted string into a float so mathematical calculations can execute.' }
        ],
        realDataAnalystUse: 'Building ingestion connectors that parse delimited log feeds into structured database staging tables.',
        commonMistakes: [
          'Attempting math directly on string elements from .split() without casting to float or int first.'
        ],
        interviewAnswer: {
          question: 'How would you architect a fault-tolerant Python ingestion script for unvalidated transactional feeds?',
          answer20s: 'I would parse records into structured arrays using delimiter splitting, validate schema types with try-except blocks, cast monetary values to exact numeric types, and log corrupted rows into a dead-letter quarantine file rather than halting the entire batch pipeline.',
          audioPrompt: 'I parse raw feeds with delimiter splits, validate schema types with exception handling, and route malformed rows to quarantine logs.'
        },
        practiceQuestion: {
          prompt: 'Add a 5% loyalty discount deduction to the subtotal before calculating the 18% GST.',
          hints: ['discount = amount * 0.05', 'taxable = amount - discount', 'tax = taxable * 0.18']
        },
        simulationType: 'python_memory'
      },

      // MODULE 2: PYTHON FOR DATA ANALYSIS & WRANGLING
      {
        id: 'py_10',
        topicNumber: 10,
        title: 'Module 2 Overview: Python for Data Analysis & Wrangling',
        tagline: 'Transition from pure Python syntax to high-performance analytics with NumPy & Pandas.',
        isFree: false,
        whatIsIt: 'Module 2 elevates your analytical power by introducing NumPy arrays and Pandas DataFrames. You will learn to clean corrupted datasets, handle missing values, and execute multi-dimensional data aggregations.',
        whyDoWeUseIt: 'Enterprise datasets contain millions of rows. Standard Python loops are too slow; vectorized NumPy and Pandas operations execute computations up to 100x faster in compiled C memory.',
        indianRealLifeMetaphor: 'If pure Python is a bicycle for navigating city streets, NumPy and Pandas are high-speed bullet trains engineered for moving massive freight across nations.',
        syntax: 'import numpy as np\\nimport pandas as pd',
        starterCode: '# Vectorized Analytics vs Manual Python Loops\\nimport numpy as np\\n\\nprices = np.array([120, 250, 480, 95, 310])\\n# 10% inflation applied to all 5 items in a single vectorized step!\\nupdated_prices = prices * 1.10\\n\\nprint("Original Prices:", prices)\\nprint("Vectorized 10% Hike:", updated_prices.round(2))',
        expectedOutput: 'Original Prices: [120 250 480  95 310]\\nVectorized 10% Hike: [132.  275.  528.  104.5 341. ]',
        lineByLineExplanation: [
          { line: 'prices = np.array([...])', explanation: 'Creates a contiguous homogeneous C-array in RAM.' },
          { line: 'prices * 1.10', explanation: 'Applies vector multiplication across all elements simultaneously without writing a for-loop.' }
        ],
        realDataAnalystUse: 'Batch pricing adjustments, algorithmic financial modeling, and vectorized risk calculations.',
        commonMistakes: [
          'Writing manual for-loops over Pandas DataFrames instead of using vectorized operations or .apply().'
        ],
        interviewAnswer: {
          question: 'Why is NumPy significantly faster than native Python lists for numerical analytics?',
          answer20s: 'NumPy arrays store elements in contiguous blocks of memory with fixed C data types, enabling vectorized CPU operations with SIMD instructions and eliminating the memory overhead and type-checking of Python object pointers.',
          audioPrompt: 'NumPy stores elements in contiguous memory with fixed C types, enabling SIMD vectorization and avoiding Python object overhead.'
        },
        practiceQuestion: {
          prompt: 'Create a numpy array of sales = [1000, 2000, 3000] and add a flat bonus of 250 to all items.',
          hints: ['sales = np.array([1000, 2000, 3000])', 'sales + 250']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_11',
        topicNumber: 11,
        title: 'Learning Objective: Clean & Transform Messy Real-World Data',
        tagline: 'Transform raw chaotic CSV dumps into pristine, trustworthy business dashboards.',
        isFree: false,
        whatIsIt: 'Over 80% of an analyst\\'s workday is spent data wrangling—imputing missing values, stripping unwanted symbols, parsing irregular dates, and filtering out erroneous outlier records.',
        whyDoWeUseIt: 'Garbage in, garbage out. Running an executive machine learning model or revenue forecast on uncleaned data leads to catastrophic business losses.',
        indianRealLifeMetaphor: 'Like refining crude oil extracted from an offshore oil rig into pure, high-octane jet fuel.',
        syntax: 'clean_df = raw_df.dropna().drop_duplicates()',
        starterCode: '# Cleaning raw transactional anomalies\\nraw_data = {\\n    "tx_id": ["TX1", "TX2", "TX3", "TX4"],\\n    "amount": [1200, None, 4500, -999]  # Notice: missing value & corrupt negative\\n}\\n\\n# Filter valid positive transactions only\\nvalid_transactions = [\\n    amt for amt in raw_data["amount"] \\n    if amt is not None and amt > 0\\n]\\n\\nprint("Raw Amounts:", raw_data["amount"])\\nprint("Validated Clean Amounts:", valid_transactions)\\nprint(f"Clean Total Revenue: Rs. {sum(valid_transactions):,}")',
        expectedOutput: 'Raw Amounts: [1200, None, 4500, -999]\\nValidated Clean Amounts: [1200, 4500]\\nClean Total Revenue: Rs. 5,700',
        lineByLineExplanation: [
          { line: 'amt is not None and amt > 0', explanation: 'Compound condition eliminating both missing nulls and corrupted negative amounts.' }
        ],
        realDataAnalystUse: 'Audit data pipelines before sending automated daily metrics to CFO and leadership dashboards.',
        commonMistakes: [
          'Calculating summary averages before dropping or imputing null values, leading to skewed or misleading metrics.'
        ],
        interviewAnswer: {
          question: 'What is your standard protocol when encountering missing values in a production dataset?',
          answer20s: 'First, I inspect the missingness pattern—whether it is Missing Completely at Random or correlated with a specific segment. If under 5%, dropping rows may be acceptable; otherwise, I impute using median for skewed numeric distributions, mode for categorical fields, or model-based imputation, always documenting assumptions.',
          audioPrompt: 'I analyze the missingness pattern, then either drop rows if minimal or impute with median for skewed distributions, documenting all steps.'
        },
        practiceQuestion: {
          prompt: 'Filter a list of prices [150, 0, -20, 400] to keep only strictly positive prices (> 0).',
          hints: ['[p for p in prices if p > 0]']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_12',
        topicNumber: 12,
        title: 'Getting Started with Numpy & Pandas',
        tagline: 'Master Series, DataFrames, column slicing, and indexing with .loc and .iloc.',
        isFree: false,
        whatIsIt: 'Pandas is the premier data analysis library built on top of NumPy. Its primary data structure, the DataFrame, represents a two-dimensional labeled tabular grid with rows and columns.',
        whyDoWeUseIt: 'A Pandas DataFrame provides Excel-like spreadsheet flexibility combined with the high-performance computation and scalability of Python.',
        indianRealLifeMetaphor: 'Like an infinite, lightning-fast digital spreadsheet that can sort, filter, and calculate 10 million rows in 0.05 seconds.',
        syntax: 'df = pd.DataFrame(data)',
        starterCode: '# Introducing the Pandas DataFrame architecture\\nstore_data = {\\n    "Store": ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout"],\\n    "Daily_Sales": [142000, 185000, 94000, 163000],\\n    "Staff_Count": [12, 15, 8, 14]\\n}\\n\\n# Simulating DataFrame columnar extraction\\nstores = store_data["Store"]\\nsales = store_data["Daily_Sales"]\\nstaff = store_data["Staff_Count"]\\n\\ntotal_sales = sum(sales)\\nhighest_store_idx = sales.index(max(sales))\\n\\nprint("=== BENGALURU REGIONAL SALES SUMMARY ===")\\nfor i in range(len(stores)):\\n    print(f"• {stores[i]}: Rs. {sales[i]:,} ({staff[i]} staff)")\\nprint(f"Top Performing Store: {stores[highest_store_idx]} (Rs. {sales[highest_store_idx]:,})")',
        expectedOutput: '=== BENGALURU REGIONAL SALES SUMMARY ===\\n• Koramangala: Rs. 142,000 (12 staff)\\n• Indiranagar: Rs. 185,000 (15 staff)\\n• Whitefield: Rs. 94,000 (8 staff)\\n• HSR Layout: Rs. 163,000 (14 staff)\\nTop Performing Store: Indiranagar (Rs. 185,000)',
        lineByLineExplanation: [
          { line: 'store_data = {...}', explanation: 'Constructs dictionary representation of multi-column tabular data.' },
          { line: 'highest_store_idx = sales.index(max(sales))', explanation: 'Locates the index coordinate of the maximum sales value.' }
        ],
        realDataAnalystUse: 'Loading raw SQL extraction outputs into DataFrames for fast exploratory data analysis (EDA).',
        commonMistakes: [
          'Confusing .loc (label-based indexing) with .iloc (integer position-based indexing).'
        ],
        interviewAnswer: {
          question: 'What is the fundamental difference between .loc and .iloc in Pandas?',
          answer20s: '.loc is label-based, selecting data by index label or column name, and its slice ranges include both start and stop boundaries. .iloc is purely integer position-based, selecting by 0-indexed integer coordinates, and its slice stop boundary is exclusive.',
          audioPrompt: 'loc selects by index and column labels with inclusive stops. iloc selects by integer coordinates with exclusive stops.'
        },
        practiceQuestion: {
          prompt: 'Calculate sales per staff member for each store by dividing Daily_Sales by Staff_Count.',
          hints: ['sales[i] / staff[i]']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_13',
        topicNumber: 13,
        title: 'Mastering Data Wrangling',
        tagline: 'Handling null values (.dropna, .fillna), row filtering, and deduplication.',
        isFree: false,
        whatIsIt: 'Data wrangling involves transforming messy raw inputs into a clean, structured format. Core operations include handling missing values, filtering rows by logical predicates, and removing duplicates.',
        whyDoWeUseIt: 'Customer surveys, transaction feeds, and warehouse logs frequently contain duplicate entries and missing fields that skew business intelligence metrics.',
        indianRealLifeMetaphor: 'Like sifting flour to remove impurities before baking bread, wrangling ensures only clean ingredients enter the analysis.',
        syntax: 'df.dropna(subset=["critical_col"]).drop_duplicates()',
        starterCode: '# Data Wrangling: Deduplication and Default Imputation\\norders_feed = [\\n    {"id": "A101", "city": "Delhi", "amt": 500},\\n    {"id": "A102", "city": None, "amt": 850},     # Missing city\\n    {"id": "A101", "city": "Delhi", "amt": 500},     # Duplicate!\\n    {"id": "A103", "city": "Patna", "amt": 1200}\\n]\\n\\n# 1. Deduplicate by unique order ID\\nseen_ids = set()\\nclean_orders = []\\nfor order in orders_feed:\\n    if order["id"] not in seen_ids:\\n        seen_ids.add(order["id"])\\n        # Impute missing city with "Unknown"\\n        city = order["city"] if order["city"] is not None else "Unknown"\\n        clean_orders.append({**order, "city": city})\\n\\nprint(f"Raw Records: {len(orders_feed)} | Clean Unique Records: {len(clean_orders)}")\\nfor o in clean_orders:\\n    oid, ocity, oamt = o["id"], o["city"], o["amt"]\\n    print(f"Order {oid}: City={ocity}, Amount=Rs. {oamt}")',
        expectedOutput: 'Raw Records: 4 | Clean Unique Records: 3\\nOrder A101: City=Delhi, Amount=Rs. 500\\nOrder A102: City=Unknown, Amount=Rs. 850\\nOrder A103: City=Patna, Amount=Rs. 1200',
        lineByLineExplanation: [
          { line: 'seen_ids = set()', explanation: 'Leverages O(1) set lookup to detect and discard duplicate records instantly.' },
          { line: 'city = order["city"] if ... else "Unknown"', explanation: 'Imputes missing categorical value with standard placeholder.' }
        ],
        realDataAnalystUse: 'Deduplicating multiple user clicks in web analytics and imputing missing delivery timestamps in courier feeds.',
        commonMistakes: [
          'Using inplace=True in Pandas; modern Pandas best practice recommends reassigning df = df.drop_duplicates() for cleaner method chaining.'
        ],
        interviewAnswer: {
          question: 'How do you detect and handle duplicate records in enterprise transactional datasets?',
          answer20s: 'I inspect duplicates using df.duplicated(subset=[keys], keep=False) to evaluate both original and duplicate records. Depending on whether they are true duplicates from network retries or valid recurring purchases, I either drop them using .drop_duplicates() or retain the latest timestamp.',
          audioPrompt: 'I inspect duplicates using duplicated with subset keys, and remove them using drop duplicates while documenting whether they were network retries.'
        },
        practiceQuestion: {
          prompt: 'Write a condition to replace None values in a list [100, None, 300] with the number 0.',
          hints: ['[x if x is not None else 0 for x in list]']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_14',
        topicNumber: 14,
        title: 'Advanced Data Wrangling Concepts',
        tagline: 'groupby aggregations, pivot tables, and relational table merging.',
        isFree: false,
        whatIsIt: 'Advanced wrangling unleashes the split-apply-combine paradigm using groupby(), reshapes data using pivot tables, and joins multiple relational data sources using pd.merge().',
        whyDoWeUseIt: 'Business questions are always aggregated: What is the total revenue per city? Which department had the highest attrition? How do monthly orders compare across categories?',
        indianRealLifeMetaphor: 'Like sorting mail bags by postal PIN code and calculating the total parcel count for each post office in the district.',
        syntax: 'df.groupby("category")["sales"].agg(["sum", "mean"])',
        starterCode: '# Split-Apply-Combine Aggregation Engine\\ntransactions = [\\n    {"zone": "North", "amount": 25000},\\n    {"zone": "South", "amount": 42000},\\n    {"zone": "North", "amount": 31000},\\n    {"zone": "West",  "amount": 18000},\\n    {"zone": "South", "amount": 56000}\\n]\\n\\nzone_totals = {}\\nfor tx in transactions:\\n    z = tx["zone"]\\n    zone_totals[z] = zone_totals.get(z, 0) + tx["amount"]\\n\\nprint("=== REGIONAL AGGREGATION SUMMARY ===")\\nfor zone, total in sorted(zone_totals.items()):\\n    print(f"• {zone} Zone: Rs. {total:,}")',
        expectedOutput: '=== REGIONAL AGGREGATION SUMMARY ===\\n• North Zone: Rs. 56,000\\n• South Zone: Rs. 98,000\\n• West Zone: Rs. 18,000',
        lineByLineExplanation: [
          { line: 'zone_totals[z] = zone_totals.get(z, 0) + tx["amount"]', explanation: 'Accumulates sums dynamically per category key.' }
        ],
        realDataAnalystUse: 'Generating monthly regional revenue summaries and calculating customer lifetime value (CLV) per cohort.',
        commonMistakes: [
          'Confusing merging methods: Using an inner merge when you intended a left join, accidentally dropping customers who have zero orders.'
        ],
        interviewAnswer: {
          question: 'Explain the split-apply-combine strategy and how groupby() executes in Pandas.',
          answer20s: 'The split-apply-combine strategy splits a dataset into distinct groups based on specified keys, applies an aggregation function like sum or mean to each group independently, and combines the resulting metrics into a structured summary DataFrame.',
          audioPrompt: 'The split-apply-combine strategy splits data by key, applies an aggregation like sum or mean, and combines results into a summary DataFrame.'
        },
        practiceQuestion: {
          prompt: 'Count the number of transactions per zone from the transactions list.',
          hints: ['zone_counts[z] = zone_counts.get(z, 0) + 1']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_15',
        topicNumber: 15,
        title: 'Data Wrangling on Different Data Formats',
        tagline: 'Loading and transforming CSV, JSON, Excel (.xlsx), and SQL query outputs.',
        isFree: false,
        whatIsIt: 'Modern data analysts work across heterogeneous file formats: comma-separated CSVs (pd.read_csv), nested hierarchical JSON payloads (pd.read_json / json_normalize), Excel spreadsheets (pd.read_excel), and SQL database connections (pd.read_sql).',
        whyDoWeUseIt: 'Real enterprise architectures rarely provide clean single-format data. Mobile apps send JSON, finance uses Excel, and databases store SQL records.',
        indianRealLifeMetaphor: 'Like a universal adapter plug that lets you plug in Indian, US, and UK power cords into the same electrical socket.',
        syntax: 'df_csv = pd.read_csv("file.csv")\\ndf_json = pd.json_normalize(api_response)',
        starterCode: '# Parsing nested JSON API responses into flat analytical records\\napi_response = [\\n    {"user": "Rohan", "metrics": {"sessions": 14, "spend": 3200}},\\n    {"user": "Simran", "metrics": {"sessions": 22, "spend": 7800}}\\n]\\n\\nflattened_records = []\\nfor item in api_response:\\n    flattened_records.append({\\n        "username": item["user"],\\n        "sessions": item["metrics"]["sessions"],\\n        "spend": item["metrics"]["spend"],\\n        "avg_spend_per_session": item["metrics"]["spend"] / item["metrics"]["sessions"]\\n    })\\n\\nprint("=== FLATTENED JSON ANALYTICS ===")\\nfor r in flattened_records:\\n    u, s, a = r["username"], r["spend"], r["avg_spend_per_session"]\\n    print(f"User: {u} | Spend: Rs. {s} | Avg/Session: Rs. {a:.2f}")',
        expectedOutput: '=== FLATTENED JSON ANALYTICS ===\\nUser: Rohan | Spend: Rs. 3200 | Avg/Session: Rs. 228.57\\nUser: Simran | Spend: Rs. 7800 | Avg/Session: Rs. 354.55',
        lineByLineExplanation: [
          { line: 'item["metrics"]["sessions"]', explanation: 'Navigates nested hierarchical JSON dictionary keys.' },
          { line: 'flattened_records.append({...})', explanation: 'Constructs flat 2D tabular dictionary ready for DataFrame ingestion.' }
        ],
        realDataAnalystUse: 'Consolidating multi-channel marketing data from Google Ads API (JSON) with monthly accounting spreadsheets (Excel).',
        commonMistakes: [
          'Attempting to load heavily nested JSON directly into pd.DataFrame() without using pd.json_normalize() to unpack nested sub-dictionaries.'
        ],
        interviewAnswer: {
          question: 'How do you handle nested JSON objects when flattening API payloads into a Pandas DataFrame?',
          answer20s: 'I use pandas.json_normalize(), which flattens semi-structured JSON hierarchies into tabular columns using dot notation for nested keys, and specify record_path and meta arguments to unpack embedded sub-arrays cleanly.',
          audioPrompt: 'I use pandas.json_normalize to unpack semi-structured nested JSON payloads into flat tabular columns using record path and meta arguments.'
        },
        practiceQuestion: {
          prompt: 'Given api_data = [{"id": 1, "geo": {"lat": 12.97, "lng": 77.59}}], extract lat and lng into top-level keys.',
          hints: ['item["geo"]["lat"]', 'item["geo"]["lng"]']
        },
        simulationType: 'python_memory'
      },
      {
        id: 'py_16',
        topicNumber: 16,
        title: 'Skill Mastery Challenge - Data Wrangling Mastery',
        tagline: 'End-to-End Retail Data Pipeline: Cleaning, Deduplication, Aggregation, and KPI Output.',
        isFree: false,
        whatIsIt: 'The ultimate Module 2 capstone challenge: Ingest a raw, multi-regional retail transaction dataset containing duplicate records, missing values, and corrupted amounts; clean the records; perform regional grouping; and output executive KPIs.',
        whyDoWeUseIt: 'Proves your end-to-end data wrangling competence. This exact project structure mirrors senior data analyst take-home assessments at leading technology firms.',
        indianRealLifeMetaphor: 'Like passing your full commercial driver\\'s license test across highways, city traffic, and night driving.',
        syntax: '# Full End-to-End Pipeline\\nclean_df = raw_df.pipe(clean_data).pipe(aggregate_kpis)',
        starterCode: '# End-to-End Capstone Data Wrangling Pipeline\\nraw_sales = [\\n    {"tx": "T01", "region": "North", "amount": 12500, "valid": True},\\n    {"tx": "T02", "region": "South", "amount": None,  "valid": True},  # Missing amt\\n    {"tx": "T03", "region": "North", "amount": 18200, "valid": True},\\n    {"tx": "T01", "region": "North", "amount": 12500, "valid": True},  # Duplicate!\\n    {"tx": "T04", "region": "South", "amount": 29400, "valid": True},\\n    {"tx": "T05", "region": "West",  "amount": 15600, "valid": True}\\n]\\n\\n# 1. Clean & Deduplicate\\nseen = set()\\ncleaned = []\\nfor r in raw_sales:\\n    if r["tx"] not in seen and r["amount"] is not None:\\n        seen.add(r["tx"])\\n        cleaned.append(r)\\n\\n# 2. Regional Aggregation\\nregion_kpis = {}\\nfor r in cleaned:\\n    reg = r["region"]\\n    region_kpis[reg] = region_kpis.get(reg, 0) + r["amount"]\\n\\ntotal_rev = sum(region_kpis.values())\\n\\nprint("=== EXECUTIVE RETAIL PERFORMANCE REPORT ===")\\nfor reg, rev in sorted(region_kpis.items()):\\n    share = (rev / total_rev) * 100\\n    print(f"• {reg} Region: Rs. {rev:,} ({share:.1f}% market share)")\\nprint(f"Total Validated Revenue: Rs. {total_rev:,} [AUDIT PASSED]")',
        expectedOutput: '=== EXECUTIVE RETAIL PERFORMANCE REPORT ===\\n• North Region: Rs. 30,700 (40.6% market share)\\n• South Region: Rs. 29,400 (38.8% market share)\\n• West Region: Rs. 15,600 (20.6% market share)\\nTotal Validated Revenue: Rs. 75,700 [AUDIT PASSED]',
        lineByLineExplanation: [
          { line: 'if r["tx"] not in seen and r["amount"] is not None:', explanation: 'Simultaneously filters out duplicates and missing values in a single high-efficiency pass.' },
          { line: 'share = (rev / total_rev) * 100', explanation: 'Computes market share percentage for executive decision making.' }
        ],
        realDataAnalystUse: 'Constructing robust automated ETL pipelines that feed executive sales dashboards and quarterly investor briefings.',
        commonMistakes: [
          'Calculating percentages before removing duplicates, resulting in inflated and falsified market share metrics.'
        ],
        interviewAnswer: {
          question: 'Walk me through how you design an end-to-end data cleaning pipeline in Python.',
          answer20s: 'I design pipelines using functional method chaining: first profiling schema and missingness distributions, second handling nulls and deduplication with business-logic rules, third standardizing timestamps and categorical casings, and finally generating validated aggregations with automated sanity checks.',
          audioPrompt: 'I design pipelines using functional chaining: profiling schema, handling nulls and deduplication, normalizing types, and validating aggregations.'
        },
        practiceQuestion: {
          prompt: 'Add an East region transaction T06 with amount 22000 and observe how market share dynamically recalculates.',
          hints: ['Add {"tx": "T06", "region": "East", "amount": 22000, "valid": True} to raw_sales']
        },
        simulationType: 'python_memory'
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL: Zero to Advanced Query Mastery',
    tagline: 'The universal declarative language to query enterprise databases.',
    badge: 'CORE PILLAR 02',
    iconName: 'Database',
    themeColor: '#4C7DFF',
    description: 'Master SELECT, WHERE, GROUP BY, Window Functions, and complex multi-table JOINs on real enterprise payment and e-commerce datasets.',
    duration: '10 Hands-on Interactive Modules',
    totalTopics: 10,
    freeTopicsCount: 3,
    topics: [
      {
        id: 'sql_01',
        topicNumber: 1,
        title: 'What is a Database & Why Excel Dies at 1 Million Rows',
        tagline: 'Relational databases are engineered to store and query millions of records safely.',
        isFree: true,
        whatIsIt: 'A Relational Database Management System (RDBMS) stores structured data across related tables with columns and rows. SQL (Structured Query Language) is the ANSI standard language used to query and manipulate it.',
        whyDoWeUseIt: 'Microsoft Excel crashes or freezes when exceeding 1 million rows and lacks concurrent multi-user write locks. Relational databases like PostgreSQL effortlessly manage terabytes of records with ACID compliance.',
        indianRealLifeMetaphor: 'A pocket notebook is Excel. But the entire core banking system of State Bank of India handling millions of transactions every second is a relational SQL database.',
        syntax: 'SELECT column1, column2 FROM table_name;',
        starterCode: '-- SQL queries fetch exact columns\\nSELECT customer_name, city, account_balance \\nFROM bank_customers \\nWHERE account_balance > 50000;',
        expectedOutput: 'Previewing Query: Fetching high-value customers with balance > 50,000 from database.',
        lineByLineExplanation: [
          { line: 'SELECT customer_name, city...', explanation: 'Specifies the exact columns required from storage.' },
          { line: 'FROM bank_customers', explanation: 'Identifies the target table.' },
          { line: 'WHERE account_balance > 50000', explanation: 'Filters rows meeting the minimum balance criterion.' }
        ],
        realDataAnalystUse: 'Connecting Python pipelines to enterprise data warehouses (PostgreSQL, Snowflake, BigQuery) for reporting.',
        commonMistakes: [
          'Running SELECT * on massive tables with hundreds of millions of rows, causing network and memory bottlenecks.'
        ],
        interviewAnswer: {
          question: 'What is SQL and why do data analysts need it when tools like Excel already exist?',
          answer20s: 'SQL is the declarative standard for relational databases. Unlike Excel, which has a 1,048,576 row ceiling and lacks concurrent user concurrency, SQL databases process terabytes of data with ACID compliance, atomic transactions, and scalable indexing.',
          audioPrompt: 'SQL is the declarative database standard. Unlike Excel which crashes with large datasets, SQL queries millions of records with high speed and ACID compliance.'
        },
        practiceQuestion: {
          prompt: 'Write a query to fetch order_id and order_amount from a table named orders.',
          hints: ['SELECT order_id, order_amount FROM orders;']
        },
        simulationType: 'sql_table'
      },
      {
        id: 'sql_02',
        topicNumber: 2,
        title: 'The SELECT Statement & Column Aliasing',
        tagline: 'Extract clean columns and rename fields for executive clarity.',
        isFree: true,
        whatIsIt: 'SELECT defines the columns you wish to retrieve from a table. The AS keyword assigns an alias, renaming columns for downstream business readability.',
        whyDoWeUseIt: 'Database column names like cust_ph_no_v2 are confusing. Aliasing renames them as customer_phone in executive reports.',
        indianRealLifeMetaphor: 'Like labeling raw grain jars with neat labels before placing them on the kitchen shelf.',
        syntax: 'SELECT column_name AS display_name FROM table_name;',
        starterCode: 'SELECT \\n    order_id AS transaction_number,\\n    order_amount * 0.18 AS gst_tax_incurred,\\n    order_status AS delivery_stage\\nFROM ecommerce_orders;',
        expectedOutput: 'Query output: Aliased columns returned (transaction_number, gst_tax_incurred, delivery_stage).',
        lineByLineExplanation: [
          { line: 'order_amount * 0.18 AS gst_tax_incurred', explanation: 'Computes inline arithmetic and aliases the calculated column.' }
        ],
        realDataAnalystUse: 'Standardizing raw column names before feeding data into Power BI or Tableau dashboards.',
        commonMistakes: [
          'Using spaces in alias names without wrapping them in double quotes.'
        ],
        interviewAnswer: {
          question: 'What is the logical query processing order in SQL, and where does SELECT execute?',
          answer20s: 'Although written first, SELECT executes near the end of the query processing lifecycle: after FROM, WHERE, GROUP BY, and HAVING. Aliases defined in SELECT cannot be referenced in the WHERE clause because WHERE evaluates before SELECT.',
          audioPrompt: 'SELECT executes after FROM, WHERE, and GROUP BY, which is why SELECT aliases cannot be referenced in the WHERE clause.'
        },
        practiceQuestion: {
          prompt: 'Select employee_id and annual_salary * 0.10 AS bonus from employees table.',
          hints: ['SELECT employee_id, annual_salary * 0.10 AS bonus FROM employees;']
        },
        simulationType: 'sql_table'
      },
      {
        id: 'sql_03',
        topicNumber: 3,
        title: 'WHERE Filtering & Logical Operators (AND, OR, IN, BETWEEN)',
        tagline: 'Row-level precision filtering for business anomaly detection.',
        isFree: true,
        whatIsIt: 'The WHERE clause restricts rows returned by a query based on Boolean conditions using =, !=, <, >, AND, OR, IN, and BETWEEN.',
        whyDoWeUseIt: 'An analyst never extracts raw unfiltered tables. Filtering isolates specific geographical zones, high-value orders, and date ranges.',
        indianRealLifeMetaphor: 'Like a security guard at an airport gate checking boarding passes to allow only passengers on the designated flight.',
        syntax: 'SELECT * FROM table WHERE condition1 AND condition2;',
        starterCode: 'SELECT order_id, customer_name, order_value, city\\nFROM food_delivery_orders\\nWHERE order_value >= 1000 \\n  AND city IN (\\'Delhi\\', \\'Mumbai\\', \\'Bangalore\\')\\n  AND order_status = \\'DELIVERED\\';',
        expectedOutput: 'Filtered records: High-value delivered orders in top metropolitan hubs.',
        lineByLineExplanation: [
          { line: 'city IN (\\'Delhi\\', ...)', explanation: 'Matches any city in the specified list efficiently.' }
        ],
        realDataAnalystUse: 'Cohort segmentation, fraud detection (flagging transactions > ₹100,000 between midnight and 4 AM).',
        commonMistakes: [
          'Using OR without parentheses, which causes operator precedence to override AND conditions.'
        ],
        interviewAnswer: {
          question: 'How does indexing influence the execution speed of a WHERE clause in an enterprise SQL database?',
          answer20s: 'A B-tree index on filtered columns allows the database engine to perform an index seek in O(log N) time rather than a full table scan in O(N) time, speeding up queries on million-row tables from seconds to milliseconds.',
          audioPrompt: 'An index allows the database to perform an index seek in logarithmic time rather than a full table scan, speeding up queries exponentially.'
        },
        practiceQuestion: {
          prompt: 'Write a query to find orders where order_status is "CANCELLED" and refund_status is "PENDING".',
          hints: ['WHERE order_status = \\'CANCELLED\\' AND refund_status = \\'PENDING\\'']
        },
        simulationType: 'sql_table'
      }
    ]
  },
  {
    id: 'excel',
    title: 'Advanced Excel & Business Automation',
    tagline: 'The spreadsheet engine of global business: XLOOKUP, Pivot Tables, and Power Query.',
    badge: 'CORE PILLAR 03',
    iconName: 'FileSpreadsheet',
    themeColor: '#059669',
    description: 'Learn modern Excel modeling: dynamic arrays, XLOOKUP, multi-criteria SUMIFS, automated Power Query ETL, and executive KPI dashboards.',
    duration: '10 Interactive Business Scenarios',
    totalTopics: 10,
    freeTopicsCount: 3,
    topics: [
      {
        id: 'xl_01',
        topicNumber: 1,
        title: 'Modern Excel Foundations & Absolute Cell Referencing ($)',
        tagline: 'Build formulas that never break when copied across thousands of rows.',
        isFree: true,
        whatIsIt: 'Excel formulas execute cell calculations. Cell references are either relative (A1, shifting when dragged) or absolute ($A$1, locked in place with dollar signs).',
        whyDoWeUseIt: 'Financial models break when fixed parameters like GST tax rate (18%) shift during formula dragging. Absolute references lock key cells permanently.',
        indianRealLifeMetaphor: 'The dollar sign ($) is like an anchor nail. It nails the row and column in place so formula dragging cannot budge it.',
        syntax: '=$B$1 * C2',
        starterCode: '# Formula in cell D2:\\n=C2 * (1 + $B$1)\\n# Where B1 is fixed GST Rate (0.18) and C2 is Base Price',
        expectedOutput: 'Formula output: Correctly locks tax rate across 5,000 product rows.',
        lineByLineExplanation: [
          { line: '$B$1', explanation: 'Locks both column B and row 1 so formula dragging does not drift.' }
        ],
        realDataAnalystUse: 'Commission payout calculators, corporate tax modeling, and retail margin templates.',
        commonMistakes: [
          'Forgetting to press F4 to add dollar signs, causing formula drift and #VALUE! errors.'
        ],
        interviewAnswer: {
          question: 'What is the difference between relative, absolute, and mixed cell references in Excel?',
          answer20s: 'Relative references (A1) adjust both row and column when dragged. Absolute references ($A$1) lock both coordinates. Mixed references ($A1 or A$1) lock either the column or the row, which is essential for multi-dimensional sensitivity matrices.',
          audioPrompt: 'Relative references shift when copied, absolute references lock both row and column, and mixed references lock either one coordinate.'
        },
        practiceQuestion: {
          prompt: 'Write a formula calculating sales commission where base sales is in A2 and fixed commission rate is in $F$1.',
          hints: ['=A2 * $F$1']
        },
        simulationType: 'excel_grid'
      },
      {
        id: 'xl_02',
        topicNumber: 2,
        title: 'XLOOKUP: The Modern Replacement for VLOOKUP & HLOOKUP',
        tagline: 'Left-lookups, exact match defaults, and zero #N/A breakages.',
        isFree: true,
        whatIsIt: 'XLOOKUP searches a range or array and returns the item corresponding to the first match found, replacing VLOOKUP, HLOOKUP, and INDEX/MATCH.',
        whyDoWeUseIt: 'VLOOKUP breaks when columns are inserted, cannot look to the left, and defaults dangerously to approximate match. XLOOKUP eliminates all these flaws.',
        indianRealLifeMetaphor: 'VLOOKUP is like looking through a peephole that only sees to the right. XLOOKUP is a 360-degree security camera that looks in every direction.',
        syntax: '=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])',
        starterCode: '=XLOOKUP(A2, Products!$A$2:$A$500, Products!$C$2:$C$500, "Item Not Found")',
        expectedOutput: 'Fetches product price from column C using Product ID in column A with native missing value handling.',
        lineByLineExplanation: [
          { line: 'Products!$A$2:$A$500', explanation: 'Explicit lookup range containing the search keys.' },
          { line: '"Item Not Found"', explanation: 'Custom fallback text when a key does not exist, replacing #N/A.' }
        ],
        realDataAnalystUse: 'Monthly invoice reconciliation, employee salary lookups, and inventory stock matching.',
        commonMistakes: [
          'Using unequal lookup and return array lengths, which causes an immediate #VALUE! error.'
        ],
        interviewAnswer: {
          question: 'Why should enterprise financial teams migrate from VLOOKUP to XLOOKUP?',
          answer20s: 'XLOOKUP defaults to exact match, searches both left and right, includes native error handling without IFERROR, and references explicit arrays so inserting new columns does not corrupt calculations.',
          audioPrompt: 'XLOOKUP defaults to exact match, searches left and right, does not break when columns are added, and includes native error handling.'
        },
        practiceQuestion: {
          prompt: 'Write an XLOOKUP formula finding student marks in C2:C10 matching student name in A2 from names in B2:B10.',
          hints: ['=XLOOKUP(A2, B2:B10, C2:C10, "Not Found")']
        },
        simulationType: 'excel_grid'
      },
      {
        id: 'xl_03',
        topicNumber: 3,
        title: 'Multi-Criteria Aggregations: SUMIFS, COUNTIFS, and AVERAGEIFS',
        tagline: 'Aggregate metrics across multiple business dimensions.',
        isFree: true,
        whatIsIt: 'SUMIFS, COUNTIFS, and AVERAGEIFS calculate totals, counts, and averages for cells that meet multiple criteria simultaneously.',
        whyDoWeUseIt: 'Business questions are multi-conditional: What was total revenue for "North" region for "Laptops" in "Q3"?',
        indianRealLifeMetaphor: 'Like an automated coin sorter that counts only ₹10 coins minted after 2020.',
        syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2)',
        starterCode: '=SUMIFS(Sales!$D$2:$D$1000, Sales!$B$2:$B$1000, "North", Sales!$C$2:$C$1000, "Electronics")',
        expectedOutput: 'Calculates total electronics revenue for the North region across 1,000 sales transactions.',
        lineByLineExplanation: [
          { line: 'Sales!$D$2:$D$1000', explanation: 'The numeric column being summed.' },
          { line: 'Sales!$B$2:$B$1000, "North"', explanation: 'The first filter condition.' }
        ],
        realDataAnalystUse: 'Quarterly variance analysis, regional sales commission bonuses, and fleet operational reporting.',
        commonMistakes: [
          'Remembering that SUMIFS puts the sum_range FIRST, whereas legacy SUMIF puts it LAST.'
        ],
        interviewAnswer: {
          question: 'What is the syntax difference between SUMIF and SUMIFS in Excel?',
          answer20s: 'In SUMIF, the sum_range is the optional final argument. In SUMIFS, the sum_range is the mandatory first argument, followed by pairs of criteria_range and criteria, accommodating up to 127 criteria pairs.',
          audioPrompt: 'In SUMIFS, the sum range is always the first argument, followed by criteria range and condition pairs, handling multiple criteria cleanly.'
        },
        practiceQuestion: {
          prompt: 'Count how many orders in status range C2:C50 are marked "COMPLETED".',
          hints: ['=COUNTIF(C2:C50, "COMPLETED")']
        },
        simulationType: 'excel_grid'
      }
    ]
  },
  {
    id: 'powerbi',
    title: 'Power BI & Visual Analytics',
    tagline: 'Interactive visual storytelling connecting raw data to executive strategy.',
    badge: 'CORE PILLAR 04',
    iconName: 'BarChart3',
    themeColor: '#D97706',
    description: 'Transform spreadsheets into interactive executive dashboards: Star Schema data modeling, DAX measures, and drill-down storytelling.',
    duration: '10 Interactive Business Scenarios',
    totalTopics: 10,
    freeTopicsCount: 3,
    topics: [
      {
        id: 'pbi_01',
        topicNumber: 1,
        title: 'Power BI Architecture: Power Query, Data Model, and Visual Canvas',
        tagline: 'Understand the end-to-end Power BI pipeline from ingestion to deployment.',
        isFree: true,
        whatIsIt: 'Power BI is Microsoft\\'s enterprise business intelligence platform consisting of Power Query (ETL data preparation engine), VertiPaq (in-memory columnar data model), and the Visual Canvas for interactive dashboards.',
        whyDoWeUseIt: 'Static PDF reports and email spreadsheets fail to provide real-time drill-down capabilities. Power BI equips executives to explore regional performance with a single click.',
        indianRealLifeMetaphor: 'Power Query is the kitchen preparing fresh ingredients, the Data Model is the organized pantry, and the Visual Canvas is the dining table banquet.',
        syntax: '// End-to-End Pipeline\\nData Source -> Power Query (ETL) -> Star Schema Model -> DAX Measures -> Visuals',
        starterCode: '// Power BI M-Code in Power Query\\nlet\\n    Source = Csv.Document(File.Contents("orders.csv")),\\n    #"Promoted Headers" = Table.PromoteHeaders(Source),\\n    #"Changed Type" = Table.TransformColumnTypes(#"Promoted Headers",{{"Sales", type number}})\\nin\\n    #"Changed Type"',
        expectedOutput: 'Data transformation pipeline ingested into VertiPaq engine.',
        lineByLineExplanation: [
          { line: 'Table.PromoteHeaders(...)', explanation: 'Elevates first row into official dataset column headers.' }
        ],
        realDataAnalystUse: 'Automating executive daily revenue tracking and supply chain delivery performance dashboards.',
        commonMistakes: [
          'Performing heavy data transformations in DAX calculated columns instead of upstream in Power Query.'
        ],
        interviewAnswer: {
          question: 'What is the VertiPaq engine in Power BI and how does it achieve high compression?',
          answer20s: 'VertiPaq is Power BI\\'s proprietary in-memory columnar database engine. It achieves up to 10x data compression by using dictionary encoding, run-length encoding, and bit-packing, allowing instant cross-filtering across millions of rows.',
          audioPrompt: 'VertiPaq is Power BIs in-memory columnar engine, achieving massive compression through dictionary encoding and bit packing for instant filtering.'
        },
        practiceQuestion: {
          prompt: 'Identify the three core components of Power BI Desktop.',
          hints: ['Power Query, Data Modeling, Visual Canvas']
        },
        simulationType: 'powerbi_visual'
      },
      {
        id: 'pbi_02',
        topicNumber: 2,
        title: 'Star Schema Architecture: Fact Tables vs Dimension Tables',
        tagline: 'The gold standard relational data modeling framework for lightning-fast dashboards.',
        isFree: true,
        whatIsIt: 'A Star Schema organizes data into central Fact Tables (holding numerical measurements and transactional keys) surrounded by Dimension Tables (holding descriptive business attributes like Customer, Product, Date).',
        whyDoWeUseIt: 'Connecting multiple flat tables randomly creates bidirectional relationship cycles and sluggish dashboard performance. Star Schema provides optimized 1-to-many relationship paths.',
        indianRealLifeMetaphor: 'The sun (Fact Table) at the center surrounded by planets (Dimension Tables) connected in clear circular orbits.',
        syntax: 'FactOrders (1) <---> (*) DimCustomers\\nFactOrders (1) <---> (*) DimProducts',
        starterCode: '// Star Schema Relational Model Definition\\nFactSales[CustomerID]  (*) ---> (1)  DimCustomer[CustomerID]\\nFactSales[ProductID]   (*) ---> (1)  DimProduct[ProductID]\\nFactSales[OrderDate]   (*) ---> (1)  DimDate[Date]',
        expectedOutput: 'Optimized 1-to-Many single-direction relationship model established.',
        lineByLineExplanation: [
          { line: 'FactSales (*) ---> (1) DimCustomer', explanation: 'Creates a clean one-to-many relationship from Dimension to Fact.' }
        ],
        realDataAnalystUse: 'Architecting enterprise semantic models in Power BI Service for company-wide self-serve reporting.',
        commonMistakes: [
          'Creating Many-to-Many bidirectional relationships, which causes ambiguous filter paths and severe performance degradation.'
        ],
        interviewAnswer: {
          question: 'Why is Star Schema preferred over Snowflake Schema in Power BI data modeling?',
          answer20s: 'Star Schema features denormalized dimension tables requiring fewer table joins, which aligns perfectly with Power BI\\'s VertiPaq columnar storage, resulting in faster DAX query execution and simpler dashboard measures compared to normalized Snowflake models.',
          audioPrompt: 'Star Schema uses denormalized dimensions requiring fewer joins, which maximizes VertiPaq columnar performance and simplifies DAX calculations.'
        },
        practiceQuestion: {
          prompt: 'Classify whether order_amount belongs in a Fact table or a Dimension table.',
          hints: ['Numeric metrics belong in Fact tables']
        },
        simulationType: 'powerbi_visual'
      },
      {
        id: 'pbi_03',
        topicNumber: 3,
        title: 'DAX Fundamentals: Calculated Columns vs DAX Measures',
        tagline: 'Master the foundation of Power BI calculations: Row Context vs Filter Context.',
        isFree: true,
        whatIsIt: 'DAX (Data Analysis Expressions) is the formula language of Power BI. Calculated Columns compute values row-by-row during data refresh and consume RAM. Measures compute aggregations dynamically at query time based on user slicers.',
        whyDoWeUseIt: 'Creating calculated columns for simple sums inflates file size needlessly. Measures consume zero storage and recalculate instantaneously when an executive clicks a slicer.',
        indianRealLifeMetaphor: 'A calculated column is like printing pre-calculated receipts and storing them in warehouse filing cabinets. A measure is a digital calculator computing results on demand in 0.001 seconds.',
        syntax: 'Total Sales = SUM(FactSales[SalesAmount])',
        starterCode: '// DAX Measure: Evaluates dynamically based on active filter context\\nTotal Sales = SUM(FactOrders[OrderAmount])\\n\\n// Safe Division Measure\\nProfit Margin % = \\nDIVIDE(\\n    [Total Profit],\\n    [Total Sales],\\n    0\\n)',
        expectedOutput: 'Measures registered: Total Sales and Profit Margin % with safe divide error handling.',
        lineByLineExplanation: [
          { line: 'Total Sales = SUM(...)', explanation: 'Creates dynamic scalar aggregation measure.' },
          { line: 'DIVIDE(..., 0)', explanation: 'Safely divides values, returning 0 if denominator is 0 instead of NaN.' }
        ],
        realDataAnalystUse: 'Building dynamic Year-over-Year (YoY) growth metrics, profit margins, and churn rates in executive KPI cards.',
        commonMistakes: [
          'Using the division slash (/) instead of the DIVIDE() function, which crashes visuals when sales are zero.'
        ],
        interviewAnswer: {
          question: 'What is the architectural difference between a Calculated Column and a DAX Measure in Power BI?',
          answer20s: 'A calculated column is evaluated row-by-row during data refresh and stored permanently in memory, consuming RAM. A DAX measure is evaluated dynamically at query time based on active filter context in the visual, consuming zero persistent storage and recalculating in milliseconds.',
          audioPrompt: 'A calculated column evaluates at refresh and consumes RAM. A measure evaluates dynamically at query time based on visual filter context.'
        },
        practiceQuestion: {
          prompt: 'Write a DAX measure computing Average Order Value using DIVIDE, [Total Sales], and [Total Orders].',
          hints: ['Average Order Value = DIVIDE([Total Sales], [Total Orders], 0)']
        },
        simulationType: 'powerbi_visual'
      }
    ]
  }
];
`;

fs.writeFileSync(path.resolve('src/data/coursesCatalog.ts'), content, 'utf8');
console.log('Successfully updated src/data/coursesCatalog.ts with 16 Python units & clean English curriculum!');
