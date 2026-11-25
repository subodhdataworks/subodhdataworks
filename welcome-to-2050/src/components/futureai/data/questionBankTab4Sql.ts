// ═══════════════════════════════════════════════════════════════════════════════
// TAB 4: SQL FOR ANALYTICS — MODULES 17 TO 22 MASTER QUESTION BANK
// 50 Topics • 250 MCQs • 150 Puzzles • 50 Missions • 200 Mock Interview Q&As
// Authentic Curriculum for Future IT Industry Master Course
// ═══════════════════════════════════════════════════════════════════════════════

import { TopicQuestionBank } from './questionBankRegistry';

export const TAB4_SQL_QUESTION_BANK: Record<string, TopicQuestionBank> = {
  '17.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.1',
    id: 77,
    topicTitle: "What Is a Database?",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a database?",
      options: [
        { key: "A", text: "A keyboard" },
        { key: "B", text: "A display monitor" },
        { key: "C", text: "A Wi-Fi password" },
        { key: "D", text: "An organized collection of data" }
      ],
      correct: 3,
      explanation: "Database mein related information systematically store hoti hai.",
      hint: "Focus on An organized collection of data to solve this query challenge."
    },
    {
      id: 2,
      question: "Why do organizations use databases?",
      options: [
        { key: "A", text: "To store and retrieve information efficiently" },
        { key: "B", text: "To increase monitor brightness" },
        { key: "C", text: "To replace electricity" },
        { key: "D", text: "To paint office walls" }
      ],
      correct: 0,
      explanation: "Database se records ko manage aur search karna easier hota hai.",
      hint: "Focus on To store and retrieve information efficiently to solve this query challenge."
    },
    {
      id: 3,
      question: "Which is an example of database information?",
      options: [
        { key: "A", text: "A keyboard's weight" },
        { key: "B", text: "Customer names and orders" },
        { key: "C", text: "Only computer wallpaper" },
        { key: "D", text: "A desk's color" }
      ],
      correct: 1,
      explanation: "Customer aur order records database mein store ho sakte hain.",
      hint: "Focus on Customer names and orders to solve this query challenge."
    },
    {
      id: 4,
      question: "What does a database record represent?",
      options: [
        { key: "A", text: "A screen resolution" },
        { key: "B", text: "A printer cartridge" },
        { key: "C", text: "Information about one item or entity" },
        { key: "D", text: "An internet cable" }
      ],
      correct: 2,
      explanation: "Record ek customer ya order ki information represent kar sakta hai.",
      hint: "Focus on Information about one item or entity to solve this query challenge."
    },
    {
      id: 5,
      question: "Which action is commonly performed on database data?",
      options: [
        { key: "A", text: "Physically repairing a laptop" },
        { key: "B", text: "Charging a mouse" },
        { key: "C", text: "Cleaning a desk" },
        { key: "D", text: "Searching for a customer's order" }
      ],
      correct: 3,
      explanation: "Database se required records retrieve kiye ja sakte hain.",
      hint: "Focus on Searching for a customer's order to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Retrieve needed information", "Identify data to store", "Organize related records", "Store data in database"],
      shuffled: ["Retrieve needed information", "Identify data to store", "Organize related records", "Store data in database"],
      expected: ["Identify data to store", "Organize related records", "Store data in database", "Retrieve needed information"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Query → Request to retrieve data", "Record → Information about one item", "Database → Organized collection of data"],
      shuffled: ["Query → Request to retrieve data", "Record → Information about one item", "Database → Organized collection of data"],
      expected: ["Database → Organized collection of data", "Record → Information about one item", "Query → Request to retrieve data"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: Database = computer monitor",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Database = only internet speed", "Database = organized data storage", "Database = keyboard buttons"],
      shuffled: ["Database = only internet speed", "Database = organized data storage", "Database = keyboard buttons"],
      expected: ["Database = organized data storage"],
      hint: "Database ko hardware se confuse nahi karna hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Database",
      meaning: "Organized collection of data"
    },
    {
      id: 2,
      snippet: "Record",
      meaning: "Information about one item"
    },
    {
      id: 3,
      snippet: "Query",
      meaning: "Request to retrieve data"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: What Is a Database?",
      scenario: "Ek school ko students ke names aur attendance save karne hain.",
      prompt: "Kaunsa option useful hai?",
      expectedResponse: "Student database — Correct! Database mein student records safely organize kiye ja sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a database?",
      sampleAnswer: "A database is an organized collection of data that can be stored, managed and retrieved."
    },
    {
      id: 2,
      question: "Why do companies use databases?",
      sampleAnswer: "They use databases to organize records and find information efficiently."
    },
    {
      id: 3,
      question: "Give an example of data stored in a database.",
      sampleAnswer: "A shop may store customers, products and orders in a database."
    },
    {
      id: 4,
      question: "What is a record?",
      sampleAnswer: "A record contains information about one item, such as a customer or order."
    }
    ]
  },
  '17.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.2',
    id: 78,
    topicTitle: "Tables, Rows, Columns and Primary Keys",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does a row represent in a table?",
      options: [
        { key: "A", text: "One record" },
        { key: "B", text: "A database server" },
        { key: "C", text: "A SQL client" },
        { key: "D", text: "A folder" }
      ],
      correct: 0,
      explanation: "Har row ek individual record represent karti hai.",
      hint: "Focus on One record to solve this query challenge."
    },
    {
      id: 2,
      question: "What does a column represent?",
      options: [
        { key: "A", text: "An entire application" },
        { key: "B", text: "One attribute or field" },
        { key: "C", text: "A complete database" },
        { key: "D", text: "A keyboard shortcut" }
      ],
      correct: 1,
      explanation: "Column name, price ya city jaise field ko show karta hai.",
      hint: "Focus on One attribute or field to solve this query challenge."
    },
    {
      id: 3,
      question: "What is the purpose of a primary key?",
      options: [
        { key: "A", text: "Store only images" },
        { key: "B", text: "Change table color" },
        { key: "C", text: "Uniquely identify each row" },
        { key: "D", text: "Sort every row alphabetically" }
      ],
      correct: 2,
      explanation: "Primary key har row ko unique identify karti hai.",
      hint: "Focus on Uniquely identify each row to solve this query challenge."
    },
    {
      id: 4,
      question: "Can a primary key contain NULL in PostgreSQL?",
      options: [
        { key: "A", text: "Yes, always" },
        { key: "B", text: "Only in the first row" },
        { key: "C", text: "Only in text columns" },
        { key: "D", text: "No" }
      ],
      correct: 3,
      explanation: "Primary key columns NULL accept nahi karti.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 5,
      question: "Which is a suitable primary key for a customers table?",
      options: [
        { key: "A", text: "customer_id with unique values" },
        { key: "B", text: "city when many customers share it" },
        { key: "C", text: "customer_name when names repeat" },
        { key: "D", text: "age when many customers share it" }
      ],
      correct: 0,
      explanation: "Unique customer_id reliable identifier ho sakta hai.",
      hint: "Focus on customer_id with unique values to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Use unique customer_id as primary key", "Insert one customer per row", "Add columns customer_id and customer_name", "Create a customers table"],
      shuffled: ["Use unique customer_id as primary key", "Insert one customer per row", "Add columns customer_id and customer_name", "Create a customers table"],
      expected: ["Create a customers table", "Add columns customer_id and customer_name", "Insert one customer per row", "Use unique customer_id as primary key"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Primary key → Unique row identifier", "Column → One field", "Row → One record"],
      shuffled: ["Primary key → Unique row identifier", "Column → One field", "Row → One record"],
      expected: ["Row → One record", "Column → One field", "Primary key → Unique row identifier"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: Primary key may repeat for different customers",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Primary key value must be unique", "Primary key is a sorting direction", "Primary key is a chart title"],
      shuffled: ["Primary key value must be unique", "Primary key is a sorting direction", "Primary key is a chart title"],
      expected: ["Primary key value must be unique"],
      hint: "Primary key duplicate nahi hoti."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Row",
      meaning: "One record"
    },
    {
      id: 2,
      snippet: "Column",
      meaning: "One field"
    },
    {
      id: 3,
      snippet: "Primary key",
      meaning: "Unique row identifier"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Tables, Rows, Columns and Primary Keys",
      scenario: "Office mein 3 employees ka same name ho sakta hai.",
      prompt: "Unko uniquely identify karne ke liye kya use karein?",
      expectedResponse: "Unique employee_id — Correct! Unique employee_id se har employee ko identify kar sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a row in SQL?",
      sampleAnswer: "A row represents one record in a table."
    },
    {
      id: 2,
      question: "What is a column?",
      sampleAnswer: "A column stores one attribute, such as a customer name."
    },
    {
      id: 3,
      question: "What is a primary key?",
      sampleAnswer: "A primary key uniquely identifies each table row and cannot be NULL."
    },
    {
      id: 4,
      question: "Why is customer_id better than customer_name as a primary key?",
      sampleAnswer: "Different customers can share names, but a unique customer_id distinguishes them."
    }
    ]
  },
  '17.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.3',
    id: 79,
    topicTitle: "What Is SQL and Why Analysts Use It?",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does SQL stand for?",
      options: [
        { key: "A", text: "Stored Question Logic" },
        { key: "B", text: "Structured Query Language" },
        { key: "C", text: "Simple Quick Login" },
        { key: "D", text: "System Quality List" }
      ],
      correct: 1,
      explanation: "SQL ka full form Structured Query Language hai.",
      hint: "Focus on Structured Query Language to solve this query challenge."
    },
    {
      id: 2,
      question: "What is SQL mainly used for?",
      options: [
        { key: "A", text: "Repairing printers" },
        { key: "B", text: "Playing audio" },
        { key: "C", text: "Working with relational database data" },
        { key: "D", text: "Editing photos" }
      ],
      correct: 2,
      explanation: "SQL se database data retrieve aur manage karte hain.",
      hint: "Focus on Working with relational database data to solve this query challenge."
    },
    {
      id: 3,
      question: "Which SQL command retrieves data?",
      options: [
        { key: "A", text: "PAINT" },
        { key: "B", text: "OPENFILE" },
        { key: "C", text: "PLAY" },
        { key: "D", text: "SELECT" }
      ],
      correct: 3,
      explanation: "SELECT database se required data read karta hai.",
      hint: "Focus on SELECT to solve this query challenge."
    },
    {
      id: 4,
      question: "Why do analysts learn SQL?",
      options: [
        { key: "A", text: "To query and summarize business data" },
        { key: "B", text: "To install a keyboard" },
        { key: "C", text: "To change monitor size" },
        { key: "D", text: "To draw logos only" }
      ],
      correct: 0,
      explanation: "Analysts SQL se business records analyze karte hain.",
      hint: "Focus on To query and summarize business data to solve this query challenge."
    },
    {
      id: 5,
      question: "Which is a valid SQL keyword?",
      options: [
        { key: "A", text: "PUBLISHPHOTO" },
        { key: "B", text: "FROM" },
        { key: "C", text: "DISPLAYSCREEN" },
        { key: "D", text: "GOTOFILE" }
      ],
      correct: 1,
      explanation: "FROM query mein data source table specify karta hai.",
      hint: "Focus on FROM to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Read result rows", "Write SQL query", "Business question", "Run query against database"],
      shuffled: ["Read result rows", "Write SQL query", "Business question", "Run query against database"],
      expected: ["Business question", "Write SQL query", "Run query against database", "Read result rows"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["FROM → Specify source table", "SELECT → Choose data to retrieve", "SQL → Structured Query Language"],
      shuffled: ["FROM → Specify source table", "SELECT → Choose data to retrieve", "SQL → Structured Query Language"],
      expected: ["SQL → Structured Query Language", "SELECT → Choose data to retrieve", "FROM → Specify source table"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELEC name FROM customers;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["PICK name FROM customers;", "SELECT name FROM customers;", "GET name OF customers;"],
      shuffled: ["PICK name FROM customers;", "SELECT name FROM customers;", "GET name OF customers;"],
      expected: ["SELECT name FROM customers;"],
      hint: "SELECT keyword sahi spelling se likhna zaroori hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SQL",
      meaning: "Structured Query Language"
    },
    {
      id: 2,
      snippet: "SELECT",
      meaning: "Choose data to retrieve"
    },
    {
      id: 3,
      snippet: "FROM",
      meaning: "Specify source table"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: What Is SQL and Why Analysts Use It?",
      scenario: "Manager ko customer list chahiye jo database mein stored hai.",
      prompt: "Kaunsa language useful hai?",
      expectedResponse: "SQL — Correct! SQL database se customer list retrieve kar sakta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is SQL?",
      sampleAnswer: "SQL stands for Structured Query Language and is used with relational databases."
    },
    {
      id: 2,
      question: "Why is SQL important for analysts?",
      sampleAnswer: "It helps analysts retrieve, filter and summarize business data."
    },
    {
      id: 3,
      question: "What does SELECT do?",
      sampleAnswer: "SELECT specifies the data columns or expressions to retrieve."
    },
    {
      id: 4,
      question: "What does FROM do?",
      sampleAnswer: "FROM specifies the table used by the query."
    }
    ]
  },
  '17.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.4',
    id: 80,
    topicTitle: "Understanding a Relational Database",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a relational database?",
      options: [
        { key: "A", text: "A single spreadsheet chart" },
        { key: "B", text: "A monitor setting" },
        { key: "C", text: "Data stored in related tables" },
        { key: "D", text: "Only a collection of images" }
      ],
      correct: 2,
      explanation: "Relational database related tables ko organize karta hai.",
      hint: "Focus on Data stored in related tables to solve this query challenge."
    },
    {
      id: 2,
      question: "How can two tables be connected?",
      options: [
        { key: "A", text: "By matching table colors" },
        { key: "B", text: "By placing them on one screen" },
        { key: "C", text: "By renaming the computer" },
        { key: "D", text: "Through related key columns" }
      ],
      correct: 3,
      explanation: "Related keys tables ko logically connect karte hain.",
      hint: "Focus on Through related key columns to solve this query challenge."
    },
    {
      id: 3,
      question: "Which pair of tables is commonly related?",
      options: [
        { key: "A", text: "customers and orders" },
        { key: "B", text: "mouse and monitor brightness" },
        { key: "C", text: "paint and wallpaper" },
        { key: "D", text: "keyboard and cable length" }
      ],
      correct: 0,
      explanation: "Customer orders customer_id se relate ho sakte hain.",
      hint: "Focus on customers and orders to solve this query challenge."
    },
    {
      id: 4,
      question: "What is a foreign key?",
      options: [
        { key: "A", text: "A sorting command" },
        { key: "B", text: "A column referencing a key in another or the same table" },
        { key: "C", text: "A password for foreign websites" },
        { key: "D", text: "A table color" }
      ],
      correct: 1,
      explanation: "Foreign key referential relationship enforce kar sakti hai.",
      hint: "Focus on A column referencing a key in another or the same table to solve this query challenge."
    },
    {
      id: 5,
      question: "Why split customer and order details into separate tables?",
      options: [
        { key: "A", text: "To remove all IDs" },
        { key: "B", text: "To prevent storing orders" },
        { key: "C", text: "To reduce unnecessary duplication and model relationships" },
        { key: "D", text: "To make every query impossible" }
      ],
      correct: 2,
      explanation: "Separate related tables duplication kam karne mein help karte hain.",
      hint: "Focus on To reduce unnecessary duplication and model relationships to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Create orders table", "Link orders to customers using customer_id", "Create customers table", "Store customer_id in each order"],
      shuffled: ["Create orders table", "Link orders to customers using customer_id", "Create customers table", "Store customer_id in each order"],
      expected: ["Create customers table", "Create orders table", "Store customer_id in each order", "Link orders to customers using customer_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Foreign key → References a key in a related table", "Primary key → Unique row identifier", "Relational database → Related tables"],
      shuffled: ["Foreign key → References a key in a related table", "Primary key → Unique row identifier", "Relational database → Related tables"],
      expected: ["Relational database → Related tables", "Primary key → Unique row identifier", "Foreign key → References a key in a related table"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: orders.customer_id has no relationship to customers.customer_id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["All tables must have the same name", "orders.customer_id can reference customers.customer_id", "Every column must be text"],
      shuffled: ["All tables must have the same name", "orders.customer_id can reference customers.customer_id", "Every column must be text"],
      expected: ["orders.customer_id can reference customers.customer_id"],
      hint: "Related customer_id columns customer aur orders ko connect kar sakte hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Relational database",
      meaning: "Related tables"
    },
    {
      id: 2,
      snippet: "Primary key",
      meaning: "Unique row identifier"
    },
    {
      id: 3,
      snippet: "Foreign key",
      meaning: "References a key in a related table"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Understanding a Relational Database",
      scenario: "Shop mein customers aur orders alag tables mein hain.",
      prompt: "Orders ko customers se link karne ke liye kya use karein?",
      expectedResponse: "customer_id — Correct! customer_id se orders ko related customer record ke saath connect kar sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a relational database?",
      sampleAnswer: "It stores data in tables that can be related through keys."
    },
    {
      id: 2,
      question: "What is a foreign key?",
      sampleAnswer: "A foreign key references a key in another or the same table to maintain a relationship."
    },
    {
      id: 3,
      question: "Why are customers and orders often separate tables?",
      sampleAnswer: "They represent different entities, and separating them helps reduce redundant customer details."
    },
    {
      id: 4,
      question: "How would you connect orders to customers?",
      sampleAnswer: "I would relate orders.customer_id to customers.customer_id."
    }
    ]
  },
  '17.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.5',
    id: 81,
    topicTitle: "Connecting to PostgreSQL with a SQL Client",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is PostgreSQL?",
      options: [
        { key: "A", text: "A photo editor" },
        { key: "B", text: "A browser theme" },
        { key: "C", text: "A keyboard brand" },
        { key: "D", text: "An open-source relational database management system" }
      ],
      correct: 3,
      explanation: "PostgreSQL relational database manage karta hai.",
      hint: "Focus on An open-source relational database management system to solve this query challenge."
    },
    {
      id: 2,
      question: "What is a SQL client used for?",
      options: [
        { key: "A", text: "Connecting to a database and running queries" },
        { key: "B", text: "Charging a laptop" },
        { key: "C", text: "Drawing icons" },
        { key: "D", text: "Playing games only" }
      ],
      correct: 0,
      explanation: "SQL client se database connection aur query execution hota hai.",
      hint: "Focus on Connecting to a database and running queries to solve this query challenge."
    },
    {
      id: 3,
      question: "Which connection detail identifies the database server location?",
      options: [
        { key: "A", text: "Screen resolution" },
        { key: "B", text: "Host" },
        { key: "C", text: "Font color" },
        { key: "D", text: "Wallpaper" }
      ],
      correct: 1,
      explanation: "Host server address specify karta hai.",
      hint: "Focus on Host to solve this query challenge."
    },
    {
      id: 4,
      question: "What does the port field represent?",
      options: [
        { key: "A", text: "A row identifier" },
        { key: "B", text: "A file extension" },
        { key: "C", text: "Network port used by the database service" },
        { key: "D", text: "Number of table columns" }
      ],
      correct: 2,
      explanation: "PostgreSQL ka default port commonly 5432 hota hai.",
      hint: "Focus on Network port used by the database service to solve this query challenge."
    },
    {
      id: 5,
      question: "Which information is usually needed to connect?",
      options: [
        { key: "A", text: "Only monitor size" },
        { key: "B", text: "Only table color" },
        { key: "C", text: "Only mouse brand" },
        { key: "D", text: "Host, port, database, username and password" }
      ],
      correct: 3,
      explanation: "Client ko valid connection details aur permissions chahiye.",
      hint: "Focus on Host, port, database, username and password to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Test and connect", "Enter authorized credentials", "Open SQL client", "Enter host, port and database"],
      shuffled: ["Test and connect", "Enter authorized credentials", "Open SQL client", "Enter host, port and database"],
      expected: ["Open SQL client", "Enter host, port and database", "Enter authorized credentials", "Test and connect"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["SQL client → Tool to run queries", "Port → Database service endpoint", "Host → Database server address"],
      shuffled: ["SQL client → Tool to run queries", "Port → Database service endpoint", "Host → Database server address"],
      expected: ["Host → Database server address", "Port → Database service endpoint", "SQL client → Tool to run queries"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: Host = screen brightness",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Port = employee salary", "Username = table name", "Host = server address"],
      shuffled: ["Port = employee salary", "Username = table name", "Host = server address"],
      expected: ["Host = server address"],
      hint: "Host server ka address hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Host",
      meaning: "Database server address"
    },
    {
      id: 2,
      snippet: "Port",
      meaning: "Database service endpoint"
    },
    {
      id: 3,
      snippet: "SQL client",
      meaning: "Tool to run queries"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Connecting to PostgreSQL with a SQL Client",
      scenario: "Student ko PostgreSQL database se connect hona hai.",
      prompt: "Kaunsa detail connection mein useful hai?",
      expectedResponse: "Database host address — Correct! Host aur baaki authorized connection details required hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is PostgreSQL?",
      sampleAnswer: "PostgreSQL is an open-source relational database management system."
    },
    {
      id: 2,
      question: "What is a SQL client?",
      sampleAnswer: "A SQL client lets users connect to a database and execute SQL queries."
    },
    {
      id: 3,
      question: "What connection details do you typically need?",
      sampleAnswer: "Host, port, database name, username and authentication details."
    },
    {
      id: 4,
      question: "What is PostgreSQL’s common default port?",
      sampleAnswer: "The commonly used default port is 5432, though servers can use another port."
    }
    ]
  },
  '17.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.6',
    id: 82,
    topicTitle: "SELECT and Choosing Columns",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which keyword retrieves columns in SQL?",
      options: [
        { key: "A", text: "SELECT" },
        { key: "B", text: "ORDER" },
        { key: "C", text: "GROUP" },
        { key: "D", text: "INSERT" }
      ],
      correct: 0,
      explanation: "SELECT output columns choose karta hai.",
      hint: "Focus on SELECT to solve this query challenge."
    },
    {
      id: 2,
      question: "What does SELECT customer_name FROM customers return?",
      options: [
        { key: "A", text: "A deleted customer list" },
        { key: "B", text: "customer_name values from customers" },
        { key: "C", text: "Every database table" },
        { key: "D", text: "Only table names" }
      ],
      correct: 1,
      explanation: "SELECT specified column retrieve karta hai.",
      hint: "Focus on customer_name values from customers to solve this query challenge."
    },
    {
      id: 3,
      question: "Which syntax selects two columns?",
      options: [
        { key: "A", text: "FROM customers SELECT;" },
        { key: "B", text: "SHOW COLUMNS customer_id;" },
        { key: "C", text: "SELECT customer_id, customer_name FROM customers;" },
        { key: "D", text: "SELECT customer_id AND customer_name FROM customers;" }
      ],
      correct: 2,
      explanation: "Multiple columns comma se separate hoti hain.",
      hint: "Focus on SELECT customer_id, customer_name FROM customers; to solve this query challenge."
    },
    {
      id: 4,
      question: "What does SELECT * mean?",
      options: [
        { key: "A", text: "Multiply all rows" },
        { key: "B", text: "Delete all columns" },
        { key: "C", text: "Select one random row" },
        { key: "D", text: "Select all columns" }
      ],
      correct: 3,
      explanation: "Asterisk all columns select karta hai.",
      hint: "Focus on Select all columns to solve this query challenge."
    },
    {
      id: 5,
      question: "Which clause names the source table?",
      options: [
        { key: "A", text: "FROM" },
        { key: "B", text: "AS" },
        { key: "C", text: "DISTINCT" },
        { key: "D", text: "WHERE ONLY" }
      ],
      correct: 0,
      explanation: "FROM source table specify karta hai.",
      hint: "Focus on FROM to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SELECT customer_id, customer_name", "Review selected columns", "FROM customers", "Run query"],
      shuffled: ["SELECT customer_id, customer_name", "Review selected columns", "FROM customers", "Run query"],
      expected: ["SELECT customer_id, customer_name", "FROM customers", "Run query", "Review selected columns"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["* → All columns", "FROM → Choose source table", "SELECT → Choose output columns"],
      shuffled: ["* → All columns", "FROM → Choose source table", "SELECT → Choose output columns"],
      expected: ["SELECT → Choose output columns", "FROM → Choose source table", "* → All columns"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT customer_name customers;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT customer_name FROM customers;", "FROM customers SELECT customer_name;", "GET customer_name AT customers;"],
      shuffled: ["SELECT customer_name FROM customers;", "FROM customers SELECT customer_name;", "GET customer_name AT customers;"],
      expected: ["SELECT customer_name FROM customers;"],
      hint: "SELECT ke baad FROM table name aata hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "SELECT",
      meaning: "Choose output columns"
    },
    {
      id: 2,
      snippet: "FROM",
      meaning: "Choose source table"
    },
    {
      id: 3,
      snippet: "*",
      meaning: "All columns"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: SELECT and Choosing Columns",
      scenario: "Manager ko customers table se sirf names chahiye.",
      prompt: "Kaunsi query use karein?",
      expectedResponse: "SELECT customer_name FROM customers; — Correct! Sirf customer_name column retrieve hua."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does SELECT do?",
      sampleAnswer: "SELECT specifies the columns or expressions to return."
    },
    {
      id: 2,
      question: "How do you select multiple columns?",
      sampleAnswer: "List the columns after SELECT separated by commas."
    },
    {
      id: 3,
      question: "What does SELECT * do?",
      sampleAnswer: "It retrieves all columns from the specified table."
    },
    {
      id: 4,
      question: "How do you retrieve customer names?",
      sampleAnswer: "SELECT customer_name FROM customers;"
    }
    ]
  },
  '17.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.7',
    id: 83,
    topicTitle: "DISTINCT and Unique Values",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does DISTINCT do in SELECT?",
      options: [
        { key: "A", text: "Renames columns" },
        { key: "B", text: "Removes duplicate result combinations" },
        { key: "C", text: "Deletes duplicate rows from the source table" },
        { key: "D", text: "Sorts every row" }
      ],
      correct: 1,
      explanation: "DISTINCT query result ke duplicate rows remove karta hai.",
      hint: "Focus on Removes duplicate result combinations to solve this query challenge."
    },
    {
      id: 2,
      question: "Which query returns unique customer cities?",
      options: [
        { key: "A", text: "SELECT ALL city FROM customers;" },
        { key: "B", text: "DELETE DISTINCT city FROM customers;" },
        { key: "C", text: "SELECT DISTINCT city FROM customers;" },
        { key: "D", text: "SELECT city UNIQUE customers;" }
      ],
      correct: 2,
      explanation: "DISTINCT city unique values return karta hai.",
      hint: "Focus on SELECT DISTINCT city FROM customers; to solve this query challenge."
    },
    {
      id: 3,
      question: "Does DISTINCT permanently change the source table?",
      options: [
        { key: "A", text: "Yes, always" },
        { key: "B", text: "Only for text" },
        { key: "C", text: "Only for numbers" },
        { key: "D", text: "No" }
      ],
      correct: 3,
      explanation: "DISTINCT result ko affect karta hai, source table ko nahi.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 4,
      question: "What does SELECT DISTINCT city, customer_name consider unique?",
      options: [
        { key: "A", text: "The combination of both selected columns" },
        { key: "B", text: "Only city" },
        { key: "C", text: "Only customer_name" },
        { key: "D", text: "The row position" }
      ],
      correct: 0,
      explanation: "DISTINCT selected columns ke combination par apply hota hai.",
      hint: "Focus on The combination of both selected columns to solve this query challenge."
    },
    {
      id: 5,
      question: "Which keyword appears immediately after SELECT to remove duplicate result rows?",
      options: [
        { key: "A", text: "UNION ALL" },
        { key: "B", text: "DISTINCT" },
        { key: "C", text: "DELETE" },
        { key: "D", text: "WHERE" }
      ],
      correct: 1,
      explanation: "SELECT DISTINCT standard syntax hai.",
      hint: "Focus on DISTINCT to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM customers", "Read unique cities", "SELECT DISTINCT city", "Run query"],
      shuffled: ["FROM customers", "Read unique cities", "SELECT DISTINCT city", "Run query"],
      expected: ["SELECT DISTINCT city", "FROM customers", "Run query", "Read unique cities"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Duplicate → Repeated value or row", "SELECT → Choose columns", "DISTINCT → Unique result combinations"],
      shuffled: ["Duplicate → Repeated value or row", "SELECT → Choose columns", "DISTINCT → Unique result combinations"],
      expected: ["DISTINCT → Unique result combinations", "SELECT → Choose columns", "Duplicate → Repeated value or row"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT city DISTINCT FROM customers;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT DISTINCT city FROM customers;", "SELECT UNIQUE city OF customers;", "DISTINCT SELECT city FROM customers;"],
      shuffled: ["SELECT DISTINCT city FROM customers;", "SELECT UNIQUE city OF customers;", "DISTINCT SELECT city FROM customers;"],
      expected: ["SELECT DISTINCT city FROM customers;"],
      hint: "DISTINCT ko SELECT ke turant baad likhte hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "DISTINCT",
      meaning: "Unique result combinations"
    },
    {
      id: 2,
      snippet: "SELECT",
      meaning: "Choose columns"
    },
    {
      id: 3,
      snippet: "Duplicate",
      meaning: "Repeated value or row"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: DISTINCT and Unique Values",
      scenario: "Customer table mein Delhi city 20 baar repeat hota hai.",
      prompt: "Sirf unique city names kaise dekhen?",
      expectedResponse: "SELECT DISTINCT city FROM customers; — Correct! DISTINCT se duplicate city values result mein repeat nahi hongi."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is DISTINCT in SQL?",
      sampleAnswer: "DISTINCT removes duplicate rows from a query result based on selected expressions."
    },
    {
      id: 2,
      question: "How do you find unique cities?",
      sampleAnswer: "Use SELECT DISTINCT city FROM customers."
    },
    {
      id: 3,
      question: "Does DISTINCT delete rows from the table?",
      sampleAnswer: "No, it only changes the query result."
    },
    {
      id: 4,
      question: "How does DISTINCT work with two columns?",
      sampleAnswer: "It returns unique combinations of the two selected columns."
    }
    ]
  },
  '17.8': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 17,
    moduleName: "Module 17: Databases and SQL Fundamentals",
    topicKey: '17.8',
    id: 84,
    topicTitle: "Aliases with AS",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is an alias in SQL?",
      options: [
        { key: "A", text: "A database password" },
        { key: "B", text: "A row count" },
        { key: "C", text: "A temporary name for a column or table in a query" },
        { key: "D", text: "A permanent table deletion" }
      ],
      correct: 2,
      explanation: "Alias output ko readable banata hai.",
      hint: "Focus on A temporary name for a column or table in a query to solve this query challenge."
    },
    {
      id: 2,
      question: "Which query renames customer_name in the result?",
      options: [
        { key: "A", text: "RENAME customer_name TO name FROM customers;" },
        { key: "B", text: "SELECT customer_name IS name FROM customers;" },
        { key: "C", text: "SELECT customer_name WHERE name FROM customers;" },
        { key: "D", text: "SELECT customer_name AS name FROM customers;" }
      ],
      correct: 3,
      explanation: "AS se column alias assign hota hai.",
      hint: "Focus on SELECT customer_name AS name FROM customers; to solve this query challenge."
    },
    {
      id: 3,
      question: "Does a SELECT alias permanently rename the table column?",
      options: [
        { key: "A", text: "No" },
        { key: "B", text: "Yes, always" },
        { key: "C", text: "Only on Mondays" },
        { key: "D", text: "Only when sorted" }
      ],
      correct: 0,
      explanation: "Query alias source schema change nahi karta.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 4,
      question: "Which is a valid table alias?",
      options: [
        { key: "A", text: "SELECT customer_name ALIAS;" },
        { key: "B", text: "SELECT c.customer_name FROM customers AS c;" },
        { key: "C", text: "SELECT customers IS c.customer_name;" },
        { key: "D", text: "SELECT c FROM customers NAME;" }
      ],
      correct: 1,
      explanation: "Table alias se c.customer_name jaisa reference use kar sakte hain.",
      hint: "Focus on SELECT c.customer_name FROM customers AS c; to solve this query challenge."
    },
    {
      id: 5,
      question: "Why use an alias for SUM(amount)?",
      options: [
        { key: "A", text: "To encrypt data" },
        { key: "B", text: "To change server port" },
        { key: "C", text: "To label a calculated result clearly" },
        { key: "D", text: "To remove all amounts" }
      ],
      correct: 2,
      explanation: "SUM(amount) AS total_sales result heading clear karta hai.",
      hint: "Focus on To label a calculated result clearly to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "Run query", "SELECT SUM(amount) AS total_sales", "Read total_sales column"],
      shuffled: ["FROM orders", "Run query", "SELECT SUM(amount) AS total_sales", "Read total_sales column"],
      expected: ["SELECT SUM(amount) AS total_sales", "FROM orders", "Run query", "Read total_sales column"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Table alias → Short reference for a table", "Column alias → Temporary result heading", "AS → Introduces alias"],
      shuffled: ["Table alias → Short reference for a table", "Column alias → Temporary result heading", "AS → Introduces alias"],
      expected: ["AS → Introduces alias", "Column alias → Temporary result heading", "Table alias → Short reference for a table"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT amount NAME price FROM orders;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT amount ORDER price FROM orders;", "SELECT amount WHERE price FROM orders;", "SELECT amount AS price FROM orders;"],
      shuffled: ["SELECT amount ORDER price FROM orders;", "SELECT amount WHERE price FROM orders;", "SELECT amount AS price FROM orders;"],
      expected: ["SELECT amount AS price FROM orders;"],
      hint: "AS se readable output label set hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "AS",
      meaning: "Introduces alias"
    },
    {
      id: 2,
      snippet: "Column alias",
      meaning: "Temporary result heading"
    },
    {
      id: 3,
      snippet: "Table alias",
      meaning: "Short reference for a table"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Aliases with AS",
      scenario: "Manager ko report mein amount column ka heading Total Amount chahiye.",
      prompt: "Kaunsa SQL expression correct hai?",
      expectedResponse: "amount AS \"Total Amount\" — Correct! Alias result heading change karta hai, stored column nahi."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is an alias in SQL?",
      sampleAnswer: "An alias is a temporary name used for a column or table in a query."
    },
    {
      id: 2,
      question: "How do you alias a column?",
      sampleAnswer: "For example, SELECT customer_name AS name FROM customers."
    },
    {
      id: 3,
      question: "Does AS rename the stored column?",
      sampleAnswer: "No, the alias affects the query result, not the stored schema."
    },
    {
      id: 4,
      question: "Why use table aliases?",
      sampleAnswer: "They shorten references and make multi-table queries easier to read."
    }
    ]
  },
  '18.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.1',
    id: 85,
    topicTitle: "WHERE Clause",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is WHERE used for?",
      options: [
        { key: "A", text: "Creating a database" },
        { key: "B", text: "Sorting only" },
        { key: "C", text: "Filtering rows that meet a condition" },
        { key: "D", text: "Renaming a table" }
      ],
      correct: 2,
      explanation: "WHERE condition ke according rows filter karta hai.",
      hint: "Focus on Filtering rows that meet a condition to solve this query challenge."
    },
    {
      id: 2,
      question: "Which query returns orders above 100?",
      options: [
        { key: "A", text: "SELECT * FROM orders ORDER BY amount > 100;" },
        { key: "B", text: "SELECT * FROM orders AS amount > 100;" },
        { key: "C", text: "SELECT WHERE amount FROM orders;" },
        { key: "D", text: "SELECT * FROM orders WHERE amount > 100;" }
      ],
      correct: 3,
      explanation: "WHERE amount > 100 matching orders return karta hai.",
      hint: "Focus on SELECT * FROM orders WHERE amount > 100; to solve this query challenge."
    },
    {
      id: 3,
      question: "When is WHERE evaluated relative to returned rows?",
      options: [
        { key: "A", text: "Before selecting the final matching rows" },
        { key: "B", text: "Only after exporting CSV" },
        { key: "C", text: "Only when saving the database" },
        { key: "D", text: "Never" }
      ],
      correct: 0,
      explanation: "WHERE filter result mein unwanted rows hata deta hai.",
      hint: "Focus on Before selecting the final matching rows to solve this query challenge."
    },
    {
      id: 4,
      question: "Which operator checks equality in SQL WHERE?",
      options: [
        { key: "A", text: "===" },
        { key: "B", text: "=" },
        { key: "C", text: "==" },
        { key: "D", text: ":=" }
      ],
      correct: 1,
      explanation: "SQL mein equality ke liye = use hota hai.",
      hint: "Focus on = to solve this query challenge."
    },
    {
      id: 5,
      question: "Which condition filters city Delhi?",
      options: [
        { key: "A", text: "WHERE city > 'Delhi'" },
        { key: "B", text: "WHERE city INTO 'Delhi'" },
        { key: "C", text: "WHERE city = 'Delhi'" },
        { key: "D", text: "WHERE city AS 'Delhi'" }
      ],
      correct: 2,
      explanation: "Text literal single quotes mein likha jaata hai.",
      hint: "Focus on WHERE city = 'Delhi' to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Run query", "SELECT *", "WHERE city = 'Delhi'", "FROM customers"],
      shuffled: ["Run query", "SELECT *", "WHERE city = 'Delhi'", "FROM customers"],
      expected: ["SELECT *", "FROM customers", "WHERE city = 'Delhi'", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["> → Greater than", "= → Equal to", "WHERE → Filter rows"],
      shuffled: ["> → Greater than", "= → Equal to", "WHERE → Filter rows"],
      expected: ["WHERE → Filter rows", "= → Equal to", "> → Greater than"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT * FROM customers WHERE city == 'Delhi';",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT * FROM customers FILTER city = 'Delhi';", "SELECT * FROM customers WHERE city AS 'Delhi';", "SELECT * FROM customers WHERE city = 'Delhi';"],
      shuffled: ["SELECT * FROM customers FILTER city = 'Delhi';", "SELECT * FROM customers WHERE city AS 'Delhi';", "SELECT * FROM customers WHERE city = 'Delhi';"],
      expected: ["SELECT * FROM customers WHERE city = 'Delhi';"],
      hint: "SQL equality operator = hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "WHERE",
      meaning: "Filter rows"
    },
    {
      id: 2,
      snippet: "=",
      meaning: "Equal to"
    },
    {
      id: 3,
      snippet: ">",
      meaning: "Greater than"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: WHERE Clause",
      scenario: "Manager ko sirf Delhi ke customers dekhne hain.",
      prompt: "Kaunsi query correct hai?",
      expectedResponse: "SELECT * FROM customers WHERE city = 'Delhi'; — Correct! WHERE matching city wale records return karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is WHERE used for?",
      sampleAnswer: "Filtering rows that meet a condition. WHERE condition ke according rows filter karta hai."
    },
    {
      id: 2,
      question: "Which query returns orders above 100?",
      sampleAnswer: "SELECT * FROM orders WHERE amount > 100;. WHERE amount > 100 matching orders return karta hai."
    },
    {
      id: 3,
      question: "When is WHERE evaluated relative to returned rows?",
      sampleAnswer: "Before selecting the final matching rows. WHERE filter result mein unwanted rows hata deta hai."
    },
    {
      id: 4,
      question: "Which operator checks equality in SQL WHERE?",
      sampleAnswer: "=. SQL mein equality ke liye = use hota hai."
    }
    ]
  },
  '18.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.2',
    id: 86,
    topicTitle: "Comparison Operators",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which SQL operator means greater than?",
      options: [
        { key: "A", text: "<" },
        { key: "B", text: "=" },
        { key: "C", text: "<>" },
        { key: "D", text: ">" }
      ],
      correct: 3,
      explanation: "> greater than compare karta hai.",
      hint: "Focus on > to solve this query challenge."
    },
    {
      id: 2,
      question: "Which operator means not equal in PostgreSQL?",
      options: [
        { key: "A", text: "<>" },
        { key: "B", text: "==" },
        { key: "C", text: "><" },
        { key: "D", text: ":=" }
      ],
      correct: 0,
      explanation: "<> standard not-equal operator hai.",
      hint: "Focus on <> to solve this query challenge."
    },
    {
      id: 3,
      question: "What does amount >= 500 mean?",
      options: [
        { key: "A", text: "Amount is NULL" },
        { key: "B", text: "Amount is at least 500" },
        { key: "C", text: "Amount is below 500" },
        { key: "D", text: "Amount is exactly 0" }
      ],
      correct: 1,
      explanation: ">= greater-than-or-equal comparison hai.",
      hint: "Focus on Amount is at least 500 to solve this query challenge."
    },
    {
      id: 4,
      question: "What does salary < 30000 select?",
      options: [
        { key: "A", text: "Salaries exactly 30000" },
        { key: "B", text: "All rows" },
        { key: "C", text: "Salaries below 30000" },
        { key: "D", text: "Salaries above 30000" }
      ],
      correct: 2,
      explanation: "< less-than operator hai.",
      hint: "Focus on Salaries below 30000 to solve this query challenge."
    },
    {
      id: 5,
      question: "Which condition matches exactly 100?",
      options: [
        { key: "A", text: "amount > 100" },
        { key: "B", text: "amount <> 100" },
        { key: "C", text: "amount < 100" },
        { key: "D", text: "amount = 100" }
      ],
      correct: 3,
      explanation: "= exact equality test karta hai.",
      hint: "Focus on amount = 100 to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SELECT *", "WHERE price >= 100", "Run query", "FROM products"],
      shuffled: ["SELECT *", "WHERE price >= 100", "Run query", "FROM products"],
      expected: ["SELECT *", "FROM products", "WHERE price >= 100", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["<> → Not equal to", "<= → Less than or equal to", "> → Greater than"],
      shuffled: ["<> → Not equal to", "<= → Less than or equal to", "> → Greater than"],
      expected: ["> → Greater than", "<= → Less than or equal to", "<> → Not equal to"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE price => 100",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE price =< 100", "WHERE price >< 100", "WHERE price >= 100"],
      shuffled: ["WHERE price =< 100", "WHERE price >< 100", "WHERE price >= 100"],
      expected: ["WHERE price >= 100"],
      hint: "Greater-than-or-equal ka correct operator >= hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: ">",
      meaning: "Greater than"
    },
    {
      id: 2,
      snippet: "<=",
      meaning: "Less than or equal to"
    },
    {
      id: 3,
      snippet: "<>",
      meaning: "Not equal to"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Comparison Operators",
      scenario: "Shop ko ₹500 ya usse mehange products dekhne hain.",
      prompt: "Kaunsi condition correct hai?",
      expectedResponse: "price >= 500 — Correct! >= se 500 aur usse upar ke prices filter honge."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which SQL operator means greater than?",
      sampleAnswer: ">. > greater than compare karta hai."
    },
    {
      id: 2,
      question: "Which operator means not equal in PostgreSQL?",
      sampleAnswer: "<>. <> standard not-equal operator hai."
    },
    {
      id: 3,
      question: "What does amount >= 500 mean?",
      sampleAnswer: "Amount is at least 500. >= greater-than-or-equal comparison hai."
    },
    {
      id: 4,
      question: "What does salary < 30000 select?",
      sampleAnswer: "Salaries below 30000. < less-than operator hai."
    }
    ]
  },
  '18.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.3',
    id: 87,
    topicTitle: "AND, OR and NOT",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "When does AND return TRUE?",
      options: [
        { key: "A", text: "When both conditions are TRUE" },
        { key: "B", text: "When either condition is TRUE" },
        { key: "C", text: "When both are FALSE" },
        { key: "D", text: "Always" }
      ],
      correct: 0,
      explanation: "AND dono conditions satisfy hone par TRUE hota hai.",
      hint: "Focus on When both conditions are TRUE to solve this query challenge."
    },
    {
      id: 2,
      question: "When does OR return TRUE?",
      options: [
        { key: "A", text: "Never" },
        { key: "B", text: "When at least one condition is TRUE" },
        { key: "C", text: "Only when both are FALSE" },
        { key: "D", text: "Only for numbers" }
      ],
      correct: 1,
      explanation: "OR mein ek condition TRUE ho to result TRUE ho sakta hai.",
      hint: "Focus on When at least one condition is TRUE to solve this query challenge."
    },
    {
      id: 3,
      question: "What does NOT do?",
      options: [
        { key: "A", text: "Sorts rows" },
        { key: "B", text: "Renames a column" },
        { key: "C", text: "Negates a Boolean condition" },
        { key: "D", text: "Adds numbers" }
      ],
      correct: 2,
      explanation: "NOT condition ko reverse karta hai.",
      hint: "Focus on Negates a Boolean condition to solve this query challenge."
    },
    {
      id: 4,
      question: "Which condition selects Delhi customers with active status?",
      options: [
        { key: "A", text: "city = 'Delhi' OR status = 'Active'" },
        { key: "B", text: "city <> 'Delhi'" },
        { key: "C", text: "NOT status = 'Active'" },
        { key: "D", text: "city = 'Delhi' AND status = 'Active'" }
      ],
      correct: 3,
      explanation: "AND dono requirements enforce karta hai.",
      hint: "Focus on city = 'Delhi' AND status = 'Active' to solve this query challenge."
    },
    {
      id: 5,
      question: "Which condition selects customers in Delhi or Mumbai?",
      options: [
        { key: "A", text: "city = 'Delhi' OR city = 'Mumbai'" },
        { key: "B", text: "city = 'Delhi' AND city = 'Mumbai'" },
        { key: "C", text: "city <> 'Delhi'" },
        { key: "D", text: "NOT city = 'Mumbai'" }
      ],
      correct: 0,
      explanation: "OR alternative cities allow karta hai.",
      hint: "Focus on city = 'Delhi' OR city = 'Mumbai' to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["WHERE city = 'Delhi' AND status = 'Active'", "FROM customers", "SELECT *", "Run query"],
      shuffled: ["WHERE city = 'Delhi' AND status = 'Active'", "FROM customers", "SELECT *", "Run query"],
      expected: ["SELECT *", "FROM customers", "WHERE city = 'Delhi' AND status = 'Active'", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["NOT → Negate condition", "OR → At least one true", "AND → Both conditions true"],
      shuffled: ["NOT → Negate condition", "OR → At least one true", "AND → Both conditions true"],
      expected: ["AND → Both conditions true", "OR → At least one true", "NOT → Negate condition"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE city = 'Delhi' AND city = 'Mumbai'",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE city = 'Delhi' AS city = 'Mumbai'", "WHERE city = 'Delhi' NOT city = 'Mumbai'", "WHERE city = 'Delhi' OR city = 'Mumbai'"],
      shuffled: ["WHERE city = 'Delhi' AS city = 'Mumbai'", "WHERE city = 'Delhi' NOT city = 'Mumbai'", "WHERE city = 'Delhi' OR city = 'Mumbai'"],
      expected: ["WHERE city = 'Delhi' OR city = 'Mumbai'"],
      hint: "Different city choices ke liye OR use hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "AND",
      meaning: "Both conditions true"
    },
    {
      id: 2,
      snippet: "OR",
      meaning: "At least one true"
    },
    {
      id: 3,
      snippet: "NOT",
      meaning: "Negate condition"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: AND, OR and NOT",
      scenario: "Company ko Delhi ya Mumbai ke customers chahiye.",
      prompt: "Kaunsa operator use karein?",
      expectedResponse: "OR — Correct! OR se kisi bhi city ka record include ho sakta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "When does AND return TRUE?",
      sampleAnswer: "When both conditions are TRUE. AND dono conditions satisfy hone par TRUE hota hai."
    },
    {
      id: 2,
      question: "When does OR return TRUE?",
      sampleAnswer: "When at least one condition is TRUE. OR mein ek condition TRUE ho to result TRUE ho sakta hai."
    },
    {
      id: 3,
      question: "What does NOT do?",
      sampleAnswer: "Negates a Boolean condition. NOT condition ko reverse karta hai."
    },
    {
      id: 4,
      question: "Which condition selects Delhi customers with active status?",
      sampleAnswer: "city = 'Delhi' AND status = 'Active'. AND dono requirements enforce karta hai."
    }
    ]
  },
  '18.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.4',
    id: 88,
    topicTitle: "IN, BETWEEN and LIKE",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does IN do?",
      options: [
        { key: "A", text: "Counts rows only" },
        { key: "B", text: "Checks whether a value is in a specified list" },
        { key: "C", text: "Creates a table" },
        { key: "D", text: "Changes text to number" }
      ],
      correct: 1,
      explanation: "IN multiple allowed values compare karta hai.",
      hint: "Focus on Checks whether a value is in a specified list to solve this query challenge."
    },
    {
      id: 2,
      question: "Which expression filters Delhi and Mumbai?",
      options: [
        { key: "A", text: "city LIKE ('Delhi', 'Mumbai')" },
        { key: "B", text: "city AS ('Delhi', 'Mumbai')" },
        { key: "C", text: "city IN ('Delhi', 'Mumbai')" },
        { key: "D", text: "city BETWEEN ('Delhi', 'Mumbai')" }
      ],
      correct: 2,
      explanation: "IN list of choices ke liye useful hai.",
      hint: "Focus on city IN ('Delhi', 'Mumbai') to solve this query challenge."
    },
    {
      id: 3,
      question: "Does BETWEEN include both endpoints?",
      options: [
        { key: "A", text: "No" },
        { key: "B", text: "Only the lower endpoint" },
        { key: "C", text: "Only the upper endpoint" },
        { key: "D", text: "Yes" }
      ],
      correct: 3,
      explanation: "BETWEEN inclusive boundaries use karta hai.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 4,
      question: "What does LIKE 'A%' mean?",
      options: [
        { key: "A", text: "Text starting with A" },
        { key: "B", text: "Text ending with A" },
        { key: "C", text: "Text containing only digits" },
        { key: "D", text: "Text exactly A%" }
      ],
      correct: 0,
      explanation: "% zero ya more characters match karta hai.",
      hint: "Focus on Text starting with A to solve this query challenge."
    },
    {
      id: 5,
      question: "Which condition matches amount between 100 and 500 inclusive?",
      options: [
        { key: "A", text: "amount AS 100 AND 500" },
        { key: "B", text: "amount BETWEEN 100 AND 500" },
        { key: "C", text: "amount IN 100 AND 500" },
        { key: "D", text: "amount LIKE 100 AND 500" }
      ],
      correct: 1,
      explanation: "BETWEEN range ki inclusive boundaries match karta hai.",
      hint: "Focus on amount BETWEEN 100 AND 500 to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM products", "WHERE price BETWEEN 100 AND 500", "Run query", "SELECT *"],
      shuffled: ["FROM products", "WHERE price BETWEEN 100 AND 500", "Run query", "SELECT *"],
      expected: ["SELECT *", "FROM products", "WHERE price BETWEEN 100 AND 500", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["LIKE → Text pattern matching", "BETWEEN → Inclusive range", "IN → Membership in a list"],
      shuffled: ["LIKE → Text pattern matching", "BETWEEN → Inclusive range", "IN → Membership in a list"],
      expected: ["IN → Membership in a list", "BETWEEN → Inclusive range", "LIKE → Text pattern matching"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE city IN 'Delhi', 'Mumbai'",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE city IN ('Delhi', 'Mumbai')", "WHERE city BETWEEN 'Delhi' OR 'Mumbai'", "WHERE city LIKE ('Delhi', 'Mumbai')"],
      shuffled: ["WHERE city IN ('Delhi', 'Mumbai')", "WHERE city BETWEEN 'Delhi' OR 'Mumbai'", "WHERE city LIKE ('Delhi', 'Mumbai')"],
      expected: ["WHERE city IN ('Delhi', 'Mumbai')"],
      hint: "IN list parentheses mein hoti hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "IN",
      meaning: "Membership in a list"
    },
    {
      id: 2,
      snippet: "BETWEEN",
      meaning: "Inclusive range"
    },
    {
      id: 3,
      snippet: "LIKE",
      meaning: "Text pattern matching"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: IN, BETWEEN and LIKE",
      scenario: "Shop ko ₹100 se ₹500 tak ke products dekhne hain.",
      prompt: "Kaunsa filter correct hai?",
      expectedResponse: "price BETWEEN 100 AND 500 — Correct! BETWEEN dono boundaries include karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does IN do?",
      sampleAnswer: "Checks whether a value is in a specified list. IN multiple allowed values compare karta hai."
    },
    {
      id: 2,
      question: "Which expression filters Delhi and Mumbai?",
      sampleAnswer: "city IN ('Delhi', 'Mumbai'). IN list of choices ke liye useful hai."
    },
    {
      id: 3,
      question: "Does BETWEEN include both endpoints?",
      sampleAnswer: "Yes. BETWEEN inclusive boundaries use karta hai."
    },
    {
      id: 4,
      question: "What does LIKE 'A%' mean?",
      sampleAnswer: "Text starting with A. % zero ya more characters match karta hai."
    }
    ]
  },
  '18.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.5',
    id: 89,
    topicTitle: "ORDER BY and Sorting Results",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does ORDER BY do?",
      options: [
        { key: "A", text: "Creates keys" },
        { key: "B", text: "Counts NULL only" },
        { key: "C", text: "Sorts query results" },
        { key: "D", text: "Deletes rows" }
      ],
      correct: 2,
      explanation: "ORDER BY result ka order control karta hai.",
      hint: "Focus on Sorts query results to solve this query challenge."
    },
    {
      id: 2,
      question: "What is the default sort direction in ORDER BY?",
      options: [
        { key: "A", text: "DESC" },
        { key: "B", text: "RANDOM" },
        { key: "C", text: "NONE" },
        { key: "D", text: "ASC" }
      ],
      correct: 3,
      explanation: "Default ascending order hota hai.",
      hint: "Focus on ASC to solve this query challenge."
    },
    {
      id: 3,
      question: "Which clause sorts highest salary first?",
      options: [
        { key: "A", text: "ORDER BY salary DESC" },
        { key: "B", text: "ORDER BY salary ASC" },
        { key: "C", text: "WHERE salary DESC" },
        { key: "D", text: "GROUP BY salary DESC" }
      ],
      correct: 0,
      explanation: "DESC descending order deta hai.",
      hint: "Focus on ORDER BY salary DESC to solve this query challenge."
    },
    {
      id: 4,
      question: "Can ORDER BY use multiple columns?",
      options: [
        { key: "A", text: "Only text columns" },
        { key: "B", text: "Yes" },
        { key: "C", text: "No" },
        { key: "D", text: "Only one number column" }
      ],
      correct: 1,
      explanation: "Multiple sort keys comma-separated use ho sakte hain.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 5,
      question: "Which keyword means ascending order?",
      options: [
        { key: "A", text: "SUM" },
        { key: "B", text: "HAVING" },
        { key: "C", text: "ASC" },
        { key: "D", text: "DESC" }
      ],
      correct: 2,
      explanation: "ASC low-to-high ya alphabetical order deta hai.",
      hint: "Focus on ASC to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Run query", "FROM customers", "SELECT customer_name, city", "ORDER BY city ASC, customer_name ASC"],
      shuffled: ["Run query", "FROM customers", "SELECT customer_name, city", "ORDER BY city ASC, customer_name ASC"],
      expected: ["SELECT customer_name, city", "FROM customers", "ORDER BY city ASC, customer_name ASC", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["DESC → Descending", "ASC → Ascending", "ORDER BY → Sort results"],
      shuffled: ["DESC → Descending", "ASC → Ascending", "ORDER BY → Sort results"],
      expected: ["ORDER BY → Sort results", "ASC → Ascending", "DESC → Descending"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT * FROM orders SORT BY amount DESC;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT * FROM orders WHERE amount DESC;", "SELECT * FROM orders GROUP BY amount DESC;", "SELECT * FROM orders ORDER BY amount DESC;"],
      shuffled: ["SELECT * FROM orders WHERE amount DESC;", "SELECT * FROM orders GROUP BY amount DESC;", "SELECT * FROM orders ORDER BY amount DESC;"],
      expected: ["SELECT * FROM orders ORDER BY amount DESC;"],
      hint: "SQL mein ORDER BY clause sorting karta hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "ORDER BY",
      meaning: "Sort results"
    },
    {
      id: 2,
      snippet: "ASC",
      meaning: "Ascending"
    },
    {
      id: 3,
      snippet: "DESC",
      meaning: "Descending"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: ORDER BY and Sorting Results",
      scenario: "Manager ko sabse mehange products pehle dekhne hain.",
      prompt: "Kaunsa sorting clause choose karein?",
      expectedResponse: "ORDER BY price DESC — Correct! DESC se highest price top par aayega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does ORDER BY do?",
      sampleAnswer: "Sorts query results. ORDER BY result ka order control karta hai."
    },
    {
      id: 2,
      question: "What is the default sort direction in ORDER BY?",
      sampleAnswer: "ASC. Default ascending order hota hai."
    },
    {
      id: 3,
      question: "Which clause sorts highest salary first?",
      sampleAnswer: "ORDER BY salary DESC. DESC descending order deta hai."
    },
    {
      id: 4,
      question: "Can ORDER BY use multiple columns?",
      sampleAnswer: "Yes. Multiple sort keys comma-separated use ho sakte hain."
    }
    ]
  },
  '18.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.6',
    id: 90,
    topicTitle: "LIMIT and TOP Concepts",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which PostgreSQL clause restricts returned row count?",
      options: [
        { key: "A", text: "TOP" },
        { key: "B", text: "SHOW" },
        { key: "C", text: "CAP" },
        { key: "D", text: "LIMIT" }
      ],
      correct: 3,
      explanation: "PostgreSQL mein LIMIT use hota hai.",
      hint: "Focus on LIMIT to solve this query challenge."
    },
    {
      id: 2,
      question: "Which query returns at most 5 rows in PostgreSQL?",
      options: [
        { key: "A", text: "SELECT * FROM orders LIMIT 5;" },
        { key: "B", text: "SELECT TOP 5 * FROM orders;" },
        { key: "C", text: "SELECT * FROM orders TAKE 5;" },
        { key: "D", text: "SELECT * FROM orders ONLY 5;" }
      ],
      correct: 0,
      explanation: "LIMIT PostgreSQL syntax hai.",
      hint: "Focus on SELECT * FROM orders LIMIT 5; to solve this query challenge."
    },
    {
      id: 3,
      question: "Which database commonly uses SELECT TOP 5 syntax?",
      options: [
        { key: "A", text: "MariaDB" },
        { key: "B", text: "SQL Server" },
        { key: "C", text: "PostgreSQL" },
        { key: "D", text: "SQLite" }
      ],
      correct: 1,
      explanation: "SQL Server mein TOP commonly use hota hai.",
      hint: "Focus on SQL Server to solve this query challenge."
    },
    {
      id: 4,
      question: "Why combine ORDER BY with LIMIT?",
      options: [
        { key: "A", text: "To create foreign keys" },
        { key: "B", text: "To encrypt data" },
        { key: "C", text: "To choose a predictable top-N by sort criterion" },
        { key: "D", text: "To delete extra rows" }
      ],
      correct: 2,
      explanation: "ORDER BY desired ranking define karta hai.",
      hint: "Focus on To choose a predictable top-N by sort criterion to solve this query challenge."
    },
    {
      id: 5,
      question: "Does LIMIT without ORDER BY guarantee the same five rows?",
      options: [
        { key: "A", text: "Yes, always" },
        { key: "B", text: "Only if there are 10 rows" },
        { key: "C", text: "Only for strings" },
        { key: "D", text: "No" }
      ],
      correct: 3,
      explanation: "Without ORDER BY row selection deterministic nahi hota.",
      hint: "Focus on No to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "SELECT *", "ORDER BY amount DESC", "LIMIT 5"],
      shuffled: ["FROM orders", "SELECT *", "ORDER BY amount DESC", "LIMIT 5"],
      expected: ["SELECT *", "FROM orders", "ORDER BY amount DESC", "LIMIT 5"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["ORDER BY → Sort before choosing top rows", "TOP → SQL Server row cap", "LIMIT → PostgreSQL row cap"],
      shuffled: ["ORDER BY → Sort before choosing top rows", "TOP → SQL Server row cap", "LIMIT → PostgreSQL row cap"],
      expected: ["LIMIT → PostgreSQL row cap", "TOP → SQL Server row cap", "ORDER BY → Sort before choosing top rows"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT TOP 5 * FROM orders; (PostgreSQL)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT * FROM orders TOP 5;", "SELECT * FROM orders TAKE 5;", "SELECT * FROM orders LIMIT 5;"],
      shuffled: ["SELECT * FROM orders TOP 5;", "SELECT * FROM orders TAKE 5;", "SELECT * FROM orders LIMIT 5;"],
      expected: ["SELECT * FROM orders LIMIT 5;"],
      hint: "PostgreSQL mein LIMIT, SQL Server mein TOP syntax hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "LIMIT",
      meaning: "PostgreSQL row cap"
    },
    {
      id: 2,
      snippet: "TOP",
      meaning: "SQL Server row cap"
    },
    {
      id: 3,
      snippet: "ORDER BY",
      meaning: "Sort before choosing top rows"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: LIMIT and TOP Concepts",
      scenario: "Manager ko highest amount wale 3 orders chahiye.",
      prompt: "Kaunsa PostgreSQL query correct hai?",
      expectedResponse: "SELECT * FROM orders ORDER BY amount DESC LIMIT 3; — Correct! ORDER BY DESC aur LIMIT 3 top 3 amounts select karte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which PostgreSQL clause restricts returned row count?",
      sampleAnswer: "LIMIT. PostgreSQL mein LIMIT use hota hai."
    },
    {
      id: 2,
      question: "Which query returns at most 5 rows in PostgreSQL?",
      sampleAnswer: "SELECT * FROM orders LIMIT 5;. LIMIT PostgreSQL syntax hai."
    },
    {
      id: 3,
      question: "Which database commonly uses SELECT TOP 5 syntax?",
      sampleAnswer: "SQL Server. SQL Server mein TOP commonly use hota hai."
    },
    {
      id: 4,
      question: "Why combine ORDER BY with LIMIT?",
      sampleAnswer: "To choose a predictable top-N by sort criterion. ORDER BY desired ranking define karta hai."
    }
    ]
  },
  '18.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.7',
    id: 91,
    topicTitle: "Working with NULL Values",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does NULL represent in SQL?",
      options: [
        { key: "A", text: "Missing or unknown value" },
        { key: "B", text: "Always zero" },
        { key: "C", text: "Always empty string" },
        { key: "D", text: "Always FALSE" }
      ],
      correct: 0,
      explanation: "NULL missing ya unknown value ko represent karta hai.",
      hint: "Focus on Missing or unknown value to solve this query challenge."
    },
    {
      id: 2,
      question: "Which condition finds NULL city values?",
      options: [
        { key: "A", text: "city LIKE NULL" },
        { key: "B", text: "city IS NULL" },
        { key: "C", text: "city = NULL" },
        { key: "D", text: "city == NULL" }
      ],
      correct: 1,
      explanation: "NULL check karne ke liye IS NULL use hota hai.",
      hint: "Focus on city IS NULL to solve this query challenge."
    },
    {
      id: 3,
      question: "Which condition finds non-NULL values?",
      options: [
        { key: "A", text: "city = NOT NULL" },
        { key: "B", text: "NOT city = NULL" },
        { key: "C", text: "city IS NOT NULL" },
        { key: "D", text: "city <> NULL" }
      ],
      correct: 2,
      explanation: "IS NOT NULL missing values exclude karta hai.",
      hint: "Focus on city IS NOT NULL to solve this query challenge."
    },
    {
      id: 4,
      question: "What is the result of NULL = NULL in SQL?",
      options: [
        { key: "A", text: "TRUE" },
        { key: "B", text: "FALSE" },
        { key: "C", text: "Zero" },
        { key: "D", text: "UNKNOWN (NULL)" }
      ],
      correct: 3,
      explanation: "NULL comparison UNKNOWN produce karta hai.",
      hint: "Focus on UNKNOWN (NULL) to solve this query challenge."
    },
    {
      id: 5,
      question: "Does COUNT(column_name) count NULL values?",
      options: [
        { key: "A", text: "No" },
        { key: "B", text: "Yes, always" },
        { key: "C", text: "Only for dates" },
        { key: "D", text: "Only in PostgreSQL" }
      ],
      correct: 0,
      explanation: "COUNT(column) NULL values skip karta hai.",
      hint: "Focus on No to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["WHERE city IS NULL", "SELECT *", "FROM customers", "Run query"],
      shuffled: ["WHERE city IS NULL", "SELECT *", "FROM customers", "Run query"],
      expected: ["SELECT *", "FROM customers", "WHERE city IS NULL", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["IS NOT NULL → Find present values", "IS NULL → Find missing values", "NULL → Unknown or missing value"],
      shuffled: ["IS NOT NULL → Find present values", "IS NULL → Find missing values", "NULL → Unknown or missing value"],
      expected: ["NULL → Unknown or missing value", "IS NULL → Find missing values", "IS NOT NULL → Find present values"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT * FROM customers WHERE city = NULL;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT * FROM customers WHERE city IS NULL;", "SELECT * FROM customers WHERE city IN NULL;", "SELECT * FROM customers WHERE city == NULL;"],
      shuffled: ["SELECT * FROM customers WHERE city IS NULL;", "SELECT * FROM customers WHERE city IN NULL;", "SELECT * FROM customers WHERE city == NULL;"],
      expected: ["SELECT * FROM customers WHERE city IS NULL;"],
      hint: "NULL ko IS NULL se check karna hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "NULL",
      meaning: "Unknown or missing value"
    },
    {
      id: 2,
      snippet: "IS NULL",
      meaning: "Find missing values"
    },
    {
      id: 3,
      snippet: "IS NOT NULL",
      meaning: "Find present values"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Working with NULL Values",
      scenario: "Customer records mein kuch city missing hai.",
      prompt: "Missing city kaise identify karein?",
      expectedResponse: "WHERE city IS NULL — Correct! IS NULL missing records filter karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does NULL represent in SQL?",
      sampleAnswer: "Missing or unknown value. NULL missing ya unknown value ko represent karta hai."
    },
    {
      id: 2,
      question: "Which condition finds NULL city values?",
      sampleAnswer: "city IS NULL. NULL check karne ke liye IS NULL use hota hai."
    },
    {
      id: 3,
      question: "Which condition finds non-NULL values?",
      sampleAnswer: "city IS NOT NULL. IS NOT NULL missing values exclude karta hai."
    },
    {
      id: 4,
      question: "What is the result of NULL = NULL in SQL?",
      sampleAnswer: "UNKNOWN (NULL). NULL comparison UNKNOWN produce karta hai."
    }
    ]
  },
  '18.8': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.8',
    id: 92,
    topicTitle: "COALESCE and NULL Handling",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does COALESCE return?",
      options: [
        { key: "A", text: "The sum of all arguments" },
        { key: "B", text: "The first non-NULL argument" },
        { key: "C", text: "The last argument always" },
        { key: "D", text: "Only NULL" }
      ],
      correct: 1,
      explanation: "COALESCE first non-NULL value return karta hai.",
      hint: "Focus on The first non-NULL argument to solve this query challenge."
    },
    {
      id: 2,
      question: "What is COALESCE(NULL, 'Unknown')?",
      options: [
        { key: "A", text: "0" },
        { key: "B", text: "FALSE" },
        { key: "C", text: "Unknown" },
        { key: "D", text: "NULL" }
      ],
      correct: 2,
      explanation: "Fallback text Unknown return hota hai.",
      hint: "Focus on Unknown to solve this query challenge."
    },
    {
      id: 3,
      question: "Why use COALESCE in reports?",
      options: [
        { key: "A", text: "To delete source rows" },
        { key: "B", text: "To sort automatically" },
        { key: "C", text: "To create primary keys" },
        { key: "D", text: "To show a fallback when a value is NULL" }
      ],
      correct: 3,
      explanation: "Missing display value ko default se replace kar sakte hain.",
      hint: "Focus on To show a fallback when a value is NULL to solve this query challenge."
    },
    {
      id: 4,
      question: "What is COALESCE(NULL, NULL, 5)?",
      options: [
        { key: "A", text: "5" },
        { key: "B", text: "0" },
        { key: "C", text: "NULL" },
        { key: "D", text: "10" }
      ],
      correct: 0,
      explanation: "First non-NULL value 5 hai.",
      hint: "Focus on 5 to solve this query challenge."
    },
    {
      id: 5,
      question: "Does SELECT COALESCE(city, 'Unknown') permanently update the table?",
      options: [
        { key: "A", text: "Only with ORDER BY" },
        { key: "B", text: "No" },
        { key: "C", text: "Yes" },
        { key: "D", text: "Only with LIMIT" }
      ],
      correct: 1,
      explanation: "COALESCE in SELECT source data modify nahi karta.",
      hint: "Focus on No to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM customers", "COALESCE(city, 'Unknown') AS city_display", "Run query", "SELECT customer_name,"],
      shuffled: ["FROM customers", "COALESCE(city, 'Unknown') AS city_display", "Run query", "SELECT customer_name,"],
      expected: ["SELECT customer_name,", "COALESCE(city, 'Unknown') AS city_display", "FROM customers", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Fallback → Value shown when original is NULL", "NULL → Missing or unknown", "COALESCE → First non-NULL value"],
      shuffled: ["Fallback → Value shown when original is NULL", "NULL → Missing or unknown", "COALESCE → First non-NULL value"],
      expected: ["COALESCE → First non-NULL value", "NULL → Missing or unknown", "Fallback → Value shown when original is NULL"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT COALESCE(city) 'Unknown' FROM customers;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT COALESCE(city, 'Unknown') FROM customers;", "SELECT COALESCE(city AS 'Unknown') FROM customers;", "SELECT COALESCE city, 'Unknown' FROM customers;"],
      shuffled: ["SELECT COALESCE(city, 'Unknown') FROM customers;", "SELECT COALESCE(city AS 'Unknown') FROM customers;", "SELECT COALESCE city, 'Unknown' FROM customers;"],
      expected: ["SELECT COALESCE(city, 'Unknown') FROM customers;"],
      hint: "COALESCE arguments parentheses mein comma-separated hote hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "COALESCE",
      meaning: "First non-NULL value"
    },
    {
      id: 2,
      snippet: "NULL",
      meaning: "Missing or unknown"
    },
    {
      id: 3,
      snippet: "Fallback",
      meaning: "Value shown when original is NULL"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: COALESCE and NULL Handling",
      scenario: "Report mein missing city ki jagah Unknown show karna hai.",
      prompt: "Kaunsa expression choose karein?",
      expectedResponse: "COALESCE(city, 'Unknown') — Correct! COALESCE NULL hone par fallback return karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does COALESCE return?",
      sampleAnswer: "The first non-NULL argument. COALESCE first non-NULL value return karta hai."
    },
    {
      id: 2,
      question: "What is COALESCE(NULL, 'Unknown')?",
      sampleAnswer: "Unknown. Fallback text Unknown return hota hai."
    },
    {
      id: 3,
      question: "Why use COALESCE in reports?",
      sampleAnswer: "To show a fallback when a value is NULL. Missing display value ko default se replace kar sakte hain."
    },
    {
      id: 4,
      question: "What is COALESCE(NULL, NULL, 5)?",
      sampleAnswer: "5. First non-NULL value 5 hai."
    }
    ]
  },
  '18.9': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 18,
    moduleName: "Module 18: Filtering, Sorting and Calculations",
    topicKey: '18.9',
    id: 93,
    topicTitle: "Arithmetic Expressions in SQL",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which operator multiplies values in SQL?",
      options: [
        { key: "A", text: "/" },
        { key: "B", text: "%" },
        { key: "C", text: "*" },
        { key: "D", text: "+" }
      ],
      correct: 2,
      explanation: "* multiplication karta hai.",
      hint: "Focus on * to solve this query challenge."
    },
    {
      id: 2,
      question: "What is the result of 10 + 5 in SQL?",
      options: [
        { key: "A", text: "105" },
        { key: "B", text: "5" },
        { key: "C", text: "50" },
        { key: "D", text: "15" }
      ],
      correct: 3,
      explanation: "+ numeric addition karta hai.",
      hint: "Focus on 15 to solve this query challenge."
    },
    {
      id: 3,
      question: "Which expression calculates total line amount?",
      options: [
        { key: "A", text: "quantity * unit_price" },
        { key: "B", text: "quantity + unit_price" },
        { key: "C", text: "quantity = unit_price" },
        { key: "D", text: "quantity AND unit_price" }
      ],
      correct: 0,
      explanation: "Quantity multiplied by unit price amount deta hai.",
      hint: "Focus on quantity * unit_price to solve this query challenge."
    },
    {
      id: 4,
      question: "Which expression calculates a 10 percent discount amount?",
      options: [
        { key: "A", text: "price = 10" },
        { key: "B", text: "price * 0.10" },
        { key: "C", text: "price + 10" },
        { key: "D", text: "price / 0" }
      ],
      correct: 1,
      explanation: "10 percent of price = price * 0.10.",
      hint: "Focus on price * 0.10 to solve this query challenge."
    },
    {
      id: 5,
      question: "Which operator is used for subtraction?",
      options: [
        { key: "A", text: "+" },
        { key: "B", text: "=" },
        { key: "C", text: "-" },
        { key: "D", text: "*" }
      ],
      correct: 2,
      explanation: "Minus sign subtraction karta hai.",
      hint: "Focus on - to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM order_items", "Run query", "quantity * unit_price AS line_total", "SELECT product_id,"],
      shuffled: ["FROM order_items", "Run query", "quantity * unit_price AS line_total", "SELECT product_id,"],
      expected: ["SELECT product_id,", "quantity * unit_price AS line_total", "FROM order_items", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["- → Subtraction", "+ → Addition", "* → Multiplication"],
      shuffled: ["- → Subtraction", "+ → Addition", "* → Multiplication"],
      expected: ["* → Multiplication", "+ → Addition", "- → Subtraction"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT quantity x unit_price FROM order_items;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT quantity AND unit_price FROM order_items;", "SELECT quantity PLUS unit_price FROM order_items;", "SELECT quantity * unit_price FROM order_items;"],
      shuffled: ["SELECT quantity AND unit_price FROM order_items;", "SELECT quantity PLUS unit_price FROM order_items;", "SELECT quantity * unit_price FROM order_items;"],
      expected: ["SELECT quantity * unit_price FROM order_items;"],
      hint: "SQL multiplication operator * hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "*",
      meaning: "Multiplication"
    },
    {
      id: 2,
      snippet: "+",
      meaning: "Addition"
    },
    {
      id: 3,
      snippet: "-",
      meaning: "Subtraction"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Arithmetic Expressions in SQL",
      scenario: "Customer ne 4 items kharide, each ₹50.",
      prompt: "Correct total calculation select karo.",
      expectedResponse: "4 * 50 — Correct! Multiplication se total ₹200 hota hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which operator multiplies values in SQL?",
      sampleAnswer: "*. * multiplication karta hai."
    },
    {
      id: 2,
      question: "What is the result of 10 + 5 in SQL?",
      sampleAnswer: "15. + numeric addition karta hai."
    },
    {
      id: 3,
      question: "Which expression calculates total line amount?",
      sampleAnswer: "quantity * unit_price. Quantity multiplied by unit price amount deta hai."
    },
    {
      id: 4,
      question: "Which expression calculates a 10 percent discount amount?",
      sampleAnswer: "price * 0.10. 10 percent of price = price * 0.10."
    }
    ]
  },
  '19.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.1',
    id: 94,
    topicTitle: "COUNT, SUM, AVG, MIN and MAX",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does COUNT(*) return?",
      options: [
        { key: "A", text: "Average value" },
        { key: "B", text: "Number of rows" },
        { key: "C", text: "Sum of amounts" },
        { key: "D", text: "Highest value" }
      ],
      correct: 1,
      explanation: "COUNT(*) rows count karta hai.",
      hint: "Focus on Number of rows to solve this query challenge."
    },
    {
      id: 2,
      question: "What does SUM(amount) calculate?",
      options: [
        { key: "A", text: "Smallest amount" },
        { key: "B", text: "Longest text" },
        { key: "C", text: "Total of non-NULL amounts" },
        { key: "D", text: "Number of rows" }
      ],
      correct: 2,
      explanation: "SUM numeric values add karta hai.",
      hint: "Focus on Total of non-NULL amounts to solve this query challenge."
    },
    {
      id: 3,
      question: "What does AVG(amount) calculate?",
      options: [
        { key: "A", text: "Only highest amount" },
        { key: "B", text: "Row count only" },
        { key: "C", text: "Text length" },
        { key: "D", text: "Average of non-NULL amounts" }
      ],
      correct: 3,
      explanation: "AVG arithmetic mean calculate karta hai.",
      hint: "Focus on Average of non-NULL amounts to solve this query challenge."
    },
    {
      id: 4,
      question: "Which function returns the lowest price?",
      options: [
        { key: "A", text: "MIN(price)" },
        { key: "B", text: "MAX(price)" },
        { key: "C", text: "COUNT(price)" },
        { key: "D", text: "SUM(price)" }
      ],
      correct: 0,
      explanation: "MIN smallest non-NULL value deta hai.",
      hint: "Focus on MIN(price) to solve this query challenge."
    },
    {
      id: 5,
      question: "Which function returns the highest price?",
      options: [
        { key: "A", text: "MIN(price)" },
        { key: "B", text: "MAX(price)" },
        { key: "C", text: "AVG(price)" },
        { key: "D", text: "COUNT(price)" }
      ],
      correct: 1,
      explanation: "MAX highest non-NULL value deta hai.",
      hint: "Focus on MAX(price) to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SELECT COUNT(*) AS order_count,", "FROM orders", "Run query", "SUM(amount) AS total_amount"],
      shuffled: ["SELECT COUNT(*) AS order_count,", "FROM orders", "Run query", "SUM(amount) AS total_amount"],
      expected: ["SELECT COUNT(*) AS order_count,", "SUM(amount) AS total_amount", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["AVG → Calculate average", "SUM → Add numeric values", "COUNT → Count rows or values"],
      shuffled: ["AVG → Calculate average", "SUM → Add numeric values", "COUNT → Count rows or values"],
      expected: ["COUNT → Count rows or values", "SUM → Add numeric values", "AVG → Calculate average"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT TOTAL(amount) FROM orders;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT MAXIMUM(amount) FROM orders;", "SELECT COUNT(amount) + ALL FROM orders;", "SELECT SUM(amount) FROM orders;"],
      shuffled: ["SELECT MAXIMUM(amount) FROM orders;", "SELECT COUNT(amount) + ALL FROM orders;", "SELECT SUM(amount) FROM orders;"],
      expected: ["SELECT SUM(amount) FROM orders;"],
      hint: "SUM numeric total calculate karta hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "COUNT",
      meaning: "Count rows or values"
    },
    {
      id: 2,
      snippet: "SUM",
      meaning: "Add numeric values"
    },
    {
      id: 3,
      snippet: "AVG",
      meaning: "Calculate average"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: COUNT, SUM, AVG, MIN and MAX",
      scenario: "Shopkeeper ko aaj ke order amounts ka total chahiye.",
      prompt: "Kaunsa function use karein?",
      expectedResponse: "SUM(amount) — Correct! SUM amount column ka total return karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does COUNT(*) return?",
      sampleAnswer: "Number of rows. COUNT(*) rows count karta hai."
    },
    {
      id: 2,
      question: "What does SUM(amount) calculate?",
      sampleAnswer: "Total of non-NULL amounts. SUM numeric values add karta hai."
    },
    {
      id: 3,
      question: "What does AVG(amount) calculate?",
      sampleAnswer: "Average of non-NULL amounts. AVG arithmetic mean calculate karta hai."
    },
    {
      id: 4,
      question: "Which function returns the lowest price?",
      sampleAnswer: "MIN(price). MIN smallest non-NULL value deta hai."
    }
    ]
  },
  '19.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.2',
    id: 95,
    topicTitle: "GROUP BY",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does GROUP BY do?",
      options: [
        { key: "A", text: "Deletes duplicates from source" },
        { key: "B", text: "Renames a database" },
        { key: "C", text: "Groups rows with the same grouping values" },
        { key: "D", text: "Sorts rows only" }
      ],
      correct: 2,
      explanation: "GROUP BY categories ke basis par rows group karta hai.",
      hint: "Focus on Groups rows with the same grouping values to solve this query challenge."
    },
    {
      id: 2,
      question: "Which query counts orders per status?",
      options: [
        { key: "A", text: "SELECT status, COUNT(*) FROM orders;" },
        { key: "B", text: "SELECT status FROM orders WHERE COUNT(*);" },
        { key: "C", text: "SELECT COUNT(*) ORDER BY status;" },
        { key: "D", text: "SELECT status, COUNT(*) FROM orders GROUP BY status;" }
      ],
      correct: 3,
      explanation: "Non-aggregate selected status ko GROUP BY mein include karna hota hai.",
      hint: "Focus on SELECT status, COUNT(*) FROM orders GROUP BY status; to solve this query challenge."
    },
    {
      id: 3,
      question: "Which clause usually comes after FROM and WHERE before ORDER BY?",
      options: [
        { key: "A", text: "GROUP BY" },
        { key: "B", text: "LIMIT" },
        { key: "C", text: "AS" },
        { key: "D", text: "DISTINCT" }
      ],
      correct: 0,
      explanation: "GROUP BY aggregation grouping define karta hai.",
      hint: "Focus on GROUP BY to solve this query challenge."
    },
    {
      id: 4,
      question: "Can SUM(amount) be calculated for each status?",
      options: [
        { key: "A", text: "Only using LIMIT" },
        { key: "B", text: "Yes, with GROUP BY status" },
        { key: "C", text: "No, never" },
        { key: "D", text: "Only using DISTINCT" }
      ],
      correct: 1,
      explanation: "GROUP BY status se category-wise totals milte hain.",
      hint: "Focus on Yes, with GROUP BY status to solve this query challenge."
    },
    {
      id: 5,
      question: "What is the result grain of GROUP BY city?",
      options: [
        { key: "A", text: "One row per database" },
        { key: "B", text: "Only NULL rows" },
        { key: "C", text: "One row per distinct city group" },
        { key: "D", text: "One row per customer always" }
      ],
      correct: 2,
      explanation: "Each city group ka summary row milta hai.",
      hint: "Focus on One row per distinct city group to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "GROUP BY status", "ORDER BY status", "SELECT status, COUNT(*) AS orders_count"],
      shuffled: ["FROM orders", "GROUP BY status", "ORDER BY status", "SELECT status, COUNT(*) AS orders_count"],
      expected: ["SELECT status, COUNT(*) AS orders_count", "FROM orders", "GROUP BY status", "ORDER BY status"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["SUM(amount) → Total per group", "COUNT(*) → Count rows in each group", "GROUP BY → Create category groups"],
      shuffled: ["SUM(amount) → Total per group", "COUNT(*) → Count rows in each group", "GROUP BY → Create category groups"],
      expected: ["GROUP BY → Create category groups", "COUNT(*) → Count rows in each group", "SUM(amount) → Total per group"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT status, COUNT(*) FROM orders;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT status, COUNT(*) FROM orders GROUP BY status;", "SELECT status, COUNT(*) FROM orders ORDER BY status;", "SELECT status, COUNT(*) FROM orders WHERE status;"],
      shuffled: ["SELECT status, COUNT(*) FROM orders GROUP BY status;", "SELECT status, COUNT(*) FROM orders ORDER BY status;", "SELECT status, COUNT(*) FROM orders WHERE status;"],
      expected: ["SELECT status, COUNT(*) FROM orders GROUP BY status;"],
      hint: "Status ke saath aggregate use karne par GROUP BY required hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "GROUP BY",
      meaning: "Create category groups"
    },
    {
      id: 2,
      snippet: "COUNT(*)",
      meaning: "Count rows in each group"
    },
    {
      id: 3,
      snippet: "SUM(amount)",
      meaning: "Total per group"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: GROUP BY",
      scenario: "Manager ko har order status mein kitne orders hain dekhna hai.",
      prompt: "Kaunsa clause use karein?",
      expectedResponse: "GROUP BY status — Correct! GROUP BY status se per-status count milega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does GROUP BY do?",
      sampleAnswer: "Groups rows with the same grouping values. GROUP BY categories ke basis par rows group karta hai."
    },
    {
      id: 2,
      question: "Which query counts orders per status?",
      sampleAnswer: "SELECT status, COUNT(*) FROM orders GROUP BY status;. Non-aggregate selected status ko GROUP BY mein include karna hota hai."
    },
    {
      id: 3,
      question: "Which clause usually comes after FROM and WHERE before ORDER BY?",
      sampleAnswer: "GROUP BY. GROUP BY aggregation grouping define karta hai."
    },
    {
      id: 4,
      question: "Can SUM(amount) be calculated for each status?",
      sampleAnswer: "Yes, with GROUP BY status. GROUP BY status se category-wise totals milte hain."
    }
    ]
  },
  '19.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.3',
    id: 96,
    topicTitle: "HAVING vs WHERE",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does WHERE filter?",
      options: [
        { key: "A", text: "Grouped results after aggregation" },
        { key: "B", text: "Only column names" },
        { key: "C", text: "Only sorted rows" },
        { key: "D", text: "Rows before grouping" }
      ],
      correct: 3,
      explanation: "WHERE row-level filter hai.",
      hint: "Focus on Rows before grouping to solve this query challenge."
    },
    {
      id: 2,
      question: "What does HAVING filter?",
      options: [
        { key: "A", text: "Groups after aggregation" },
        { key: "B", text: "Individual source rows only" },
        { key: "C", text: "Table names" },
        { key: "D", text: "Database connections" }
      ],
      correct: 0,
      explanation: "HAVING aggregate groups filter karta hai.",
      hint: "Focus on Groups after aggregation to solve this query challenge."
    },
    {
      id: 3,
      question: "Which clause filters groups with COUNT(*) > 5?",
      options: [
        { key: "A", text: "AS COUNT(*) > 5" },
        { key: "B", text: "HAVING COUNT(*) > 5" },
        { key: "C", text: "WHERE COUNT(*) > 5" },
        { key: "D", text: "ORDER BY COUNT(*) > 5" }
      ],
      correct: 1,
      explanation: "Aggregate condition HAVING mein hoti hai.",
      hint: "Focus on HAVING COUNT(*) > 5 to solve this query challenge."
    },
    {
      id: 4,
      question: "Which clause filters orders with amount > 100 before grouping?",
      options: [
        { key: "A", text: "LIMIT amount > 100" },
        { key: "B", text: "AS amount > 100" },
        { key: "C", text: "WHERE amount > 100" },
        { key: "D", text: "HAVING amount > 100 without grouping" }
      ],
      correct: 2,
      explanation: "WHERE row-level filter ke liye hai.",
      hint: "Focus on WHERE amount > 100 to solve this query challenge."
    },
    {
      id: 5,
      question: "Which sequence is valid?",
      options: [
        { key: "A", text: "HAVING then WHERE then GROUP BY" },
        { key: "B", text: "GROUP BY then WHERE then HAVING" },
        { key: "C", text: "ORDER BY then WHERE" },
        { key: "D", text: "WHERE then GROUP BY then HAVING" }
      ],
      correct: 3,
      explanation: "SQL clauses ka logical order WHERE, GROUP BY, HAVING hai.",
      hint: "Focus on WHERE then GROUP BY then HAVING to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "SELECT status, COUNT(*)", "GROUP BY status", "HAVING COUNT(*) > 5"],
      shuffled: ["FROM orders", "SELECT status, COUNT(*)", "GROUP BY status", "HAVING COUNT(*) > 5"],
      expected: ["SELECT status, COUNT(*)", "FROM orders", "GROUP BY status", "HAVING COUNT(*) > 5"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["HAVING → Filter grouped results", "GROUP BY → Make groups", "WHERE → Filter source rows"],
      shuffled: ["HAVING → Filter grouped results", "GROUP BY → Make groups", "WHERE → Filter source rows"],
      expected: ["WHERE → Filter source rows", "GROUP BY → Make groups", "HAVING → Filter grouped results"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT status, COUNT(*) FROM orders WHERE COUNT(*) > 5 GROUP BY status;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT status, COUNT(*) FROM orders GROUP BY status HAVING COUNT(*) > 5;", "SELECT status, COUNT(*) FROM orders HAVING COUNT(*) > 5 WHERE status;", "SELECT status, COUNT(*) FROM orders GROUP BY COUNT(*) > 5;"],
      shuffled: ["SELECT status, COUNT(*) FROM orders GROUP BY status HAVING COUNT(*) > 5;", "SELECT status, COUNT(*) FROM orders HAVING COUNT(*) > 5 WHERE status;", "SELECT status, COUNT(*) FROM orders GROUP BY COUNT(*) > 5;"],
      expected: ["SELECT status, COUNT(*) FROM orders GROUP BY status HAVING COUNT(*) > 5;"],
      hint: "Aggregate count par HAVING use karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "WHERE",
      meaning: "Filter source rows"
    },
    {
      id: 2,
      snippet: "GROUP BY",
      meaning: "Make groups"
    },
    {
      id: 3,
      snippet: "HAVING",
      meaning: "Filter grouped results"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: HAVING vs WHERE",
      scenario: "Manager ko sirf woh statuses chahiye jinke 5 se zyada orders hain.",
      prompt: "Kaunsa clause correct hai?",
      expectedResponse: "HAVING COUNT(*) > 5 — Correct! HAVING group count ko filter karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does WHERE filter?",
      sampleAnswer: "Rows before grouping. WHERE row-level filter hai."
    },
    {
      id: 2,
      question: "What does HAVING filter?",
      sampleAnswer: "Groups after aggregation. HAVING aggregate groups filter karta hai."
    },
    {
      id: 3,
      question: "Which clause filters groups with COUNT(*) > 5?",
      sampleAnswer: "HAVING COUNT(*) > 5. Aggregate condition HAVING mein hoti hai."
    },
    {
      id: 4,
      question: "Which clause filters orders with amount > 100 before grouping?",
      sampleAnswer: "WHERE amount > 100. WHERE row-level filter ke liye hai."
    }
    ]
  },
  '19.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.4',
    id: 97,
    topicTitle: "Aggregate Multiple Categories",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "How do you summarize by city and status?",
      options: [
        { key: "A", text: "GROUP BY city, status" },
        { key: "B", text: "GROUP BY city OR status" },
        { key: "C", text: "ORDER BY city AND status" },
        { key: "D", text: "WHERE city, status" }
      ],
      correct: 0,
      explanation: "Multiple grouping columns comma se separate hoti hain.",
      hint: "Focus on GROUP BY city, status to solve this query challenge."
    },
    {
      id: 2,
      question: "What does GROUP BY city, status produce?",
      options: [
        { key: "A", text: "Only city values" },
        { key: "B", text: "One group per unique city-status combination" },
        { key: "C", text: "One row per order always" },
        { key: "D", text: "Only one row total" }
      ],
      correct: 1,
      explanation: "Grouping combination-based hoti hai.",
      hint: "Focus on One group per unique city-status combination to solve this query challenge."
    },
    {
      id: 3,
      question: "Which function can total sales for each category?",
      options: [
        { key: "A", text: "COUNT(city_name) only" },
        { key: "B", text: "LENGTH(amount)" },
        { key: "C", text: "SUM(amount)" },
        { key: "D", text: "MIN(city)" }
      ],
      correct: 2,
      explanation: "SUM grouped numeric total calculate karta hai.",
      hint: "Focus on SUM(amount) to solve this query challenge."
    },
    {
      id: 4,
      question: "Why group by multiple dimensions?",
      options: [
        { key: "A", text: "To delete duplicate customers" },
        { key: "B", text: "To update passwords" },
        { key: "C", text: "To change table schema" },
        { key: "D", text: "To compare metrics across category combinations" }
      ],
      correct: 3,
      explanation: "Multiple categories detailed breakdown deti hain.",
      hint: "Focus on To compare metrics across category combinations to solve this query challenge."
    },
    {
      id: 5,
      question: "Which clause sorts grouped results?",
      options: [
        { key: "A", text: "ORDER BY" },
        { key: "B", text: "GROUP BY ONLY" },
        { key: "C", text: "DELETE" },
        { key: "D", text: "INSERT" }
      ],
      correct: 0,
      explanation: "ORDER BY summary ko sort kar sakta hai.",
      hint: "Focus on ORDER BY to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["ORDER BY city, status", "FROM order_summary", "GROUP BY city, status", "SELECT city, status, COUNT(*)"],
      shuffled: ["ORDER BY city, status", "FROM order_summary", "GROUP BY city, status", "SELECT city, status, COUNT(*)"],
      expected: ["SELECT city, status, COUNT(*)", "FROM order_summary", "GROUP BY city, status", "ORDER BY city, status"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["GROUP BY city, status → Combination-level groups", "Measure → Number summarized", "Grouping dimension → Category used for grouping"],
      shuffled: ["GROUP BY city, status → Combination-level groups", "Measure → Number summarized", "Grouping dimension → Category used for grouping"],
      expected: ["Grouping dimension → Category used for grouping", "Measure → Number summarized", "GROUP BY city, status → Combination-level groups"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: GROUP BY city AND status",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["GROUP BY city = status", "GROUP BY city, status", "GROUP BY city OR status"],
      shuffled: ["GROUP BY city = status", "GROUP BY city, status", "GROUP BY city OR status"],
      expected: ["GROUP BY city, status"],
      hint: "Multiple grouping columns commas se likhte hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Grouping dimension",
      meaning: "Category used for grouping"
    },
    {
      id: 2,
      snippet: "Measure",
      meaning: "Number summarized"
    },
    {
      id: 3,
      snippet: "GROUP BY city, status",
      meaning: "Combination-level groups"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Aggregate Multiple Categories",
      scenario: "Retail report mein city aur order status ka breakdown chahiye.",
      prompt: "Kaunsa grouping correct hai?",
      expectedResponse: "GROUP BY city, status — Correct! City-status combination ka separate summary milega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you summarize by city and status?",
      sampleAnswer: "GROUP BY city, status. Multiple grouping columns comma se separate hoti hain."
    },
    {
      id: 2,
      question: "What does GROUP BY city, status produce?",
      sampleAnswer: "One group per unique city-status combination. Grouping combination-based hoti hai."
    },
    {
      id: 3,
      question: "Which function can total sales for each category?",
      sampleAnswer: "SUM(amount). SUM grouped numeric total calculate karta hai."
    },
    {
      id: 4,
      question: "Why group by multiple dimensions?",
      sampleAnswer: "To compare metrics across category combinations. Multiple categories detailed breakdown deti hain."
    }
    ]
  },
  '19.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.5',
    id: 98,
    topicTitle: "Conditional Aggregation",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is conditional aggregation?",
      options: [
        { key: "A", text: "Removing all rows" },
        { key: "B", text: "Summarizing values only when a condition matches" },
        { key: "C", text: "Sorting text only" },
        { key: "D", text: "Creating new servers" }
      ],
      correct: 1,
      explanation: "CASE inside SUM ya COUNT condition-based totals banata hai.",
      hint: "Focus on Summarizing values only when a condition matches to solve this query challenge."
    },
    {
      id: 2,
      question: "Which expression counts completed orders in PostgreSQL?",
      options: [
        { key: "A", text: "COUNT(status = 'Completed')" },
        { key: "B", text: "MAX(status) only" },
        { key: "C", text: "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)" },
        { key: "D", text: "SUM(status = 'Completed') without conversion" }
      ],
      correct: 2,
      explanation: "CASE matching rows ko 1 aur others ko 0 assign karta hai.",
      hint: "Focus on SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) to solve this query challenge."
    },
    {
      id: 3,
      question: "What does ELSE 0 do in a conditional SUM?",
      options: [
        { key: "A", text: "Deletes unmatched rows" },
        { key: "B", text: "Sorts groups" },
        { key: "C", text: "Returns NULL always" },
        { key: "D", text: "Adds zero for non-matching rows" }
      ],
      correct: 3,
      explanation: "ELSE 0 non-matching records ko count se exclude karta hai.",
      hint: "Focus on Adds zero for non-matching rows to solve this query challenge."
    },
    {
      id: 4,
      question: "Can conditional aggregation calculate two metrics in one query?",
      options: [
        { key: "A", text: "Yes" },
        { key: "B", text: "No" },
        { key: "C", text: "Only with DELETE" },
        { key: "D", text: "Only for dates" }
      ],
      correct: 0,
      explanation: "Multiple SUM(CASE...) expressions use kar sakte hain.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 5,
      question: "What is the result of SUM(CASE WHEN amount > 100 THEN amount ELSE 0 END)?",
      options: [
        { key: "A", text: "Smallest amount" },
        { key: "B", text: "Total amount for rows above 100" },
        { key: "C", text: "Count of all rows" },
        { key: "D", text: "Average of all rows" }
      ],
      correct: 1,
      explanation: "Conditional SUM matching amounts add karta hai.",
      hint: "Focus on Total amount for rows above 100 to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count", "FROM orders", "Run query", "SELECT"],
      shuffled: ["SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count", "FROM orders", "Run query", "SELECT"],
      expected: ["SELECT", "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) AS completed_count", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["ELSE → Fallback value", "THEN → Value for matching condition", "CASE WHEN → Conditional value"],
      shuffled: ["ELSE → Fallback value", "THEN → Value for matching condition", "CASE WHEN → Conditional value"],
      expected: ["CASE WHEN → Conditional value", "THEN → Value for matching condition", "ELSE → Fallback value"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SUM(CASE status = 'Completed' THEN 1 ELSE 0 END)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0)", "SUM(CASE WHEN status = 'Completed' AS 1 ELSE 0 END)", "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)"],
      shuffled: ["SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0)", "SUM(CASE WHEN status = 'Completed' AS 1 ELSE 0 END)", "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)"],
      expected: ["SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END)"],
      hint: "CASE WHEN expression mein END required hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CASE WHEN",
      meaning: "Conditional value"
    },
    {
      id: 2,
      snippet: "THEN",
      meaning: "Value for matching condition"
    },
    {
      id: 3,
      snippet: "ELSE",
      meaning: "Fallback value"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Conditional Aggregation",
      scenario: "Shop mein completed orders ka count alag chahiye.",
      prompt: "Kaunsa expression use karein?",
      expectedResponse: "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END) — Correct! CASE based SUM completed orders count karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is conditional aggregation?",
      sampleAnswer: "Summarizing values only when a condition matches. CASE inside SUM ya COUNT condition-based totals banata hai."
    },
    {
      id: 2,
      question: "Which expression counts completed orders in PostgreSQL?",
      sampleAnswer: "SUM(CASE WHEN status = 'Completed' THEN 1 ELSE 0 END). CASE matching rows ko 1 aur others ko 0 assign karta hai."
    },
    {
      id: 3,
      question: "What does ELSE 0 do in a conditional SUM?",
      sampleAnswer: "Adds zero for non-matching rows. ELSE 0 non-matching records ko count se exclude karta hai."
    },
    {
      id: 4,
      question: "Can conditional aggregation calculate two metrics in one query?",
      sampleAnswer: "Yes. Multiple SUM(CASE...) expressions use kar sakte hain."
    }
    ]
  },
  '19.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.6',
    id: 99,
    topicTitle: "CASE WHEN Expressions",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is CASE WHEN used for?",
      options: [
        { key: "A", text: "Opening a network port" },
        { key: "B", text: "Changing data types automatically" },
        { key: "C", text: "Conditional output values" },
        { key: "D", text: "Creating database users" }
      ],
      correct: 2,
      explanation: "CASE WHEN conditions se labels assign karta hai.",
      hint: "Focus on Conditional output values to solve this query challenge."
    },
    {
      id: 2,
      question: "Which keyword ends a CASE expression?",
      options: [
        { key: "A", text: "STOP" },
        { key: "B", text: "FINISH" },
        { key: "C", text: "CLOSE" },
        { key: "D", text: "END" }
      ],
      correct: 3,
      explanation: "CASE expression END se close hota hai.",
      hint: "Focus on END to solve this query challenge."
    },
    {
      id: 3,
      question: "What does ELSE specify?",
      options: [
        { key: "A", text: "Fallback when no WHEN matches" },
        { key: "B", text: "A join condition" },
        { key: "C", text: "A primary key" },
        { key: "D", text: "A sorting direction" }
      ],
      correct: 0,
      explanation: "ELSE default result provide karta hai.",
      hint: "Focus on Fallback when no WHEN matches to solve this query challenge."
    },
    {
      id: 4,
      question: "Which expression labels amount > 100 as High?",
      options: [
        { key: "A", text: "CASE amount > 100 AS 'High'" },
        { key: "B", text: "CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END" },
        { key: "C", text: "IF amount > 100 PRINT 'High'" },
        { key: "D", text: "WHEN amount > 100 IS 'High'" }
      ],
      correct: 1,
      explanation: "CASE WHEN THEN ELSE END conditional expression hai.",
      hint: "Focus on CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END to solve this query challenge."
    },
    {
      id: 5,
      question: "Does CASE WHEN permanently update the table in SELECT?",
      options: [
        { key: "A", text: "Only with GROUP BY" },
        { key: "B", text: "Only with LIMIT" },
        { key: "C", text: "No" },
        { key: "D", text: "Yes" }
      ],
      correct: 2,
      explanation: "SELECT mein CASE calculated output return karta hai.",
      hint: "Focus on No to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "Run query", "SELECT order_id,", "CASE WHEN amount >= 500 THEN 'High' ELSE 'Regular' END AS order_size"],
      shuffled: ["FROM orders", "Run query", "SELECT order_id,", "CASE WHEN amount >= 500 THEN 'High' ELSE 'Regular' END AS order_size"],
      expected: ["SELECT order_id,", "CASE WHEN amount >= 500 THEN 'High' ELSE 'Regular' END AS order_size", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["END → Closes CASE", "WHEN → Condition", "CASE → Conditional expression"],
      shuffled: ["END → Closes CASE", "WHEN → Condition", "CASE → Conditional expression"],
      expected: ["CASE → Conditional expression", "WHEN → Condition", "END → Closes CASE"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: CASE WHEN amount > 100 THEN 'High' ELSE 'Low'",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["CASE IF amount > 100 THEN 'High' END", "WHEN amount > 100 THEN 'High' END", "CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END"],
      shuffled: ["CASE IF amount > 100 THEN 'High' END", "WHEN amount > 100 THEN 'High' END", "CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END"],
      expected: ["CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END"],
      hint: "CASE expression ko END se close karna hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CASE",
      meaning: "Conditional expression"
    },
    {
      id: 2,
      snippet: "WHEN",
      meaning: "Condition"
    },
    {
      id: 3,
      snippet: "END",
      meaning: "Closes CASE"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: CASE WHEN Expressions",
      scenario: "Orders ko High aur Regular label dena hai.",
      prompt: "Kaunsa SQL feature use karein?",
      expectedResponse: "CASE WHEN — Correct! CASE WHEN se condition-based label banega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is CASE WHEN used for?",
      sampleAnswer: "Conditional output values. CASE WHEN conditions se labels assign karta hai."
    },
    {
      id: 2,
      question: "Which keyword ends a CASE expression?",
      sampleAnswer: "END. CASE expression END se close hota hai."
    },
    {
      id: 3,
      question: "What does ELSE specify?",
      sampleAnswer: "Fallback when no WHEN matches. ELSE default result provide karta hai."
    },
    {
      id: 4,
      question: "Which expression labels amount > 100 as High?",
      sampleAnswer: "CASE WHEN amount > 100 THEN 'High' ELSE 'Low' END. CASE WHEN THEN ELSE END conditional expression hai."
    }
    ]
  },
  '19.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 19,
    moduleName: "Module 19: Aggregate Functions and Grouping",
    topicKey: '19.7',
    id: 100,
    topicTitle: "Date Grouping and Period Analysis",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which PostgreSQL function extracts year from a date?",
      options: [
        { key: "A", text: "YEAROF(order_date) only" },
        { key: "B", text: "GROUPYEAR(order_date)" },
        { key: "C", text: "YEAR(order_date) required" },
        { key: "D", text: "EXTRACT(YEAR FROM order_date)" }
      ],
      correct: 3,
      explanation: "PostgreSQL mein EXTRACT YEAR supported hai.",
      hint: "Focus on EXTRACT(YEAR FROM order_date) to solve this query challenge."
    },
    {
      id: 2,
      question: "Which function groups timestamps by month boundary?",
      options: [
        { key: "A", text: "DATE_TRUNC('month', order_date)" },
        { key: "B", text: "MONTH_GROUP(order_date)" },
        { key: "C", text: "DATE_GROUP(order_date)" },
        { key: "D", text: "SPLIT_DATE(order_date)" }
      ],
      correct: 0,
      explanation: "DATE_TRUNC month boundary return karta hai.",
      hint: "Focus on DATE_TRUNC('month', order_date) to solve this query challenge."
    },
    {
      id: 3,
      question: "Why group sales by month?",
      options: [
        { key: "A", text: "To restart the database" },
        { key: "B", text: "To compare monthly trends" },
        { key: "C", text: "To change customer names" },
        { key: "D", text: "To remove foreign keys" }
      ],
      correct: 1,
      explanation: "Month-wise summaries time trends show karti hain.",
      hint: "Focus on To compare monthly trends to solve this query challenge."
    },
    {
      id: 4,
      question: "Which expression returns the year number from order_date?",
      options: [
        { key: "A", text: "GROUP BY YEAR ONLY" },
        { key: "B", text: "WHERE YEAR" },
        { key: "C", text: "EXTRACT(YEAR FROM order_date)" },
        { key: "D", text: "ORDER BY YEAR" }
      ],
      correct: 2,
      explanation: "EXTRACT date part retrieve karta hai.",
      hint: "Focus on EXTRACT(YEAR FROM order_date) to solve this query challenge."
    },
    {
      id: 5,
      question: "What does GROUP BY DATE_TRUNC('month', order_date) do?",
      options: [
        { key: "A", text: "Groups by each second" },
        { key: "B", text: "Deletes old dates" },
        { key: "C", text: "Converts dates to prices" },
        { key: "D", text: "Groups records by month period" }
      ],
      correct: 3,
      explanation: "DATE_TRUNC month start par dates normalize karta hai.",
      hint: "Focus on Groups records by month period to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["GROUP BY DATE_TRUNC('month', order_date)", "SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount)", "ORDER BY month", "FROM orders"],
      shuffled: ["GROUP BY DATE_TRUNC('month', order_date)", "SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount)", "ORDER BY month", "FROM orders"],
      expected: ["SELECT DATE_TRUNC('month', order_date) AS month, SUM(amount)", "FROM orders", "GROUP BY DATE_TRUNC('month', order_date)", "ORDER BY month"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["GROUP BY → Aggregate by period", "DATE_TRUNC → Truncate date to period", "EXTRACT → Get date component"],
      shuffled: ["GROUP BY → Aggregate by period", "DATE_TRUNC → Truncate date to period", "EXTRACT → Get date component"],
      expected: ["EXTRACT → Get date component", "DATE_TRUNC → Truncate date to period", "GROUP BY → Aggregate by period"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: DATE_TRUNC(month, order_date)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["MONTH_TRUNC(order_date)", "DATE_TRUNC('month', order_date)", "DATE_TRUNC('months' AS order_date)"],
      shuffled: ["MONTH_TRUNC(order_date)", "DATE_TRUNC('month', order_date)", "DATE_TRUNC('months' AS order_date)"],
      expected: ["DATE_TRUNC('month', order_date)"],
      hint: "DATE_TRUNC unit ko string literal ke roop mein use karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "EXTRACT",
      meaning: "Get date component"
    },
    {
      id: 2,
      snippet: "DATE_TRUNC",
      meaning: "Truncate date to period"
    },
    {
      id: 3,
      snippet: "GROUP BY",
      meaning: "Aggregate by period"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Date Grouping and Period Analysis",
      scenario: "Manager ko monthly sales report chahiye.",
      prompt: "Kaunsa PostgreSQL expression useful hai?",
      expectedResponse: "DATE_TRUNC('month', order_date) — Correct! DATE_TRUNC se monthly groups ban sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which PostgreSQL function extracts year from a date?",
      sampleAnswer: "EXTRACT(YEAR FROM order_date). PostgreSQL mein EXTRACT YEAR supported hai."
    },
    {
      id: 2,
      question: "Which function groups timestamps by month boundary?",
      sampleAnswer: "DATE_TRUNC('month', order_date). DATE_TRUNC month boundary return karta hai."
    },
    {
      id: 3,
      question: "Why group sales by month?",
      sampleAnswer: "To compare monthly trends. Month-wise summaries time trends show karti hain."
    },
    {
      id: 4,
      question: "Which expression returns the year number from order_date?",
      sampleAnswer: "EXTRACT(YEAR FROM order_date). EXTRACT date part retrieve karta hai."
    }
    ]
  },
  '20.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.1',
    id: 101,
    topicTitle: "Understanding Primary and Foreign Keys",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a primary key?",
      options: [
        { key: "A", text: "A unique non-NULL row identifier" },
        { key: "B", text: "A table color" },
        { key: "C", text: "A sort order" },
        { key: "D", text: "A query result alias" }
      ],
      correct: 0,
      explanation: "Primary key unique identifier hota hai.",
      hint: "Focus on A unique non-NULL row identifier to solve this query challenge."
    },
    {
      id: 2,
      question: "What is a foreign key?",
      options: [
        { key: "A", text: "A numeric sum" },
        { key: "B", text: "A reference to a primary or unique key" },
        { key: "C", text: "A database password" },
        { key: "D", text: "A chart title" }
      ],
      correct: 1,
      explanation: "Foreign key related records link karti hai.",
      hint: "Focus on A reference to a primary or unique key to solve this query challenge."
    },
    {
      id: 3,
      question: "Which key can connect orders to customers?",
      options: [
        { key: "A", text: "orders.order_date referencing customers.name" },
        { key: "B", text: "orders.status referencing customers.city" },
        { key: "C", text: "orders.customer_id referencing customers.customer_id" },
        { key: "D", text: "orders.amount referencing customers.city" }
      ],
      correct: 2,
      explanation: "Related customer_id fields join key ho sakte hain.",
      hint: "Focus on orders.customer_id referencing customers.customer_id to solve this query challenge."
    },
    {
      id: 4,
      question: "Can foreign key values repeat in a child table?",
      options: [
        { key: "A", text: "No, never" },
        { key: "B", text: "Only if they are NULL" },
        { key: "C", text: "Only for dates" },
        { key: "D", text: "Yes, if multiple rows reference the same parent" }
      ],
      correct: 3,
      explanation: "One customer ke multiple orders ho sakte hain.",
      hint: "Focus on Yes, if multiple rows reference the same parent to solve this query challenge."
    },
    {
      id: 5,
      question: "Why define foreign keys?",
      options: [
        { key: "A", text: "To help enforce referential integrity" },
        { key: "B", text: "To speed up every query automatically" },
        { key: "C", text: "To remove the need for tables" },
        { key: "D", text: "To make every row unique" }
      ],
      correct: 0,
      explanation: "Foreign key invalid parent references prevent kar sakti hai.",
      hint: "Focus on To help enforce referential integrity to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Connect each order to an existing customer", "Create orders with order_id primary key", "Create customers with customer_id primary key", "Add customer_id foreign key to orders"],
      shuffled: ["Connect each order to an existing customer", "Create orders with order_id primary key", "Create customers with customer_id primary key", "Add customer_id foreign key to orders"],
      expected: ["Create customers with customer_id primary key", "Create orders with order_id primary key", "Add customer_id foreign key to orders", "Connect each order to an existing customer"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Referential integrity → Valid relationships", "Foreign key → Reference to parent key", "Primary key → Unique identifier"],
      shuffled: ["Referential integrity → Valid relationships", "Foreign key → Reference to parent key", "Primary key → Unique identifier"],
      expected: ["Primary key → Unique identifier", "Foreign key → Reference to parent key", "Referential integrity → Valid relationships"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: Foreign key means every order has a unique customer_id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Foreign keys are chart colors", "Primary keys may always be NULL", "Multiple orders may reference the same customer_id"],
      shuffled: ["Foreign keys are chart colors", "Primary keys may always be NULL", "Multiple orders may reference the same customer_id"],
      expected: ["Multiple orders may reference the same customer_id"],
      hint: "Many orders ek customer ko reference kar sakte hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Primary key",
      meaning: "Unique identifier"
    },
    {
      id: 2,
      snippet: "Foreign key",
      meaning: "Reference to parent key"
    },
    {
      id: 3,
      snippet: "Referential integrity",
      meaning: "Valid relationships"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Understanding Primary and Foreign Keys",
      scenario: "Ek customer ne 3 orders place kiye.",
      prompt: "Orders table mein kaunsa field customer ko link karega?",
      expectedResponse: "customer_id — Correct! Same customer_id multiple orders mein repeat ho sakta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a primary key?",
      sampleAnswer: "A unique non-NULL row identifier. Primary key unique identifier hota hai."
    },
    {
      id: 2,
      question: "What is a foreign key?",
      sampleAnswer: "A reference to a primary or unique key. Foreign key related records link karti hai."
    },
    {
      id: 3,
      question: "Which key can connect orders to customers?",
      sampleAnswer: "orders.customer_id referencing customers.customer_id. Related customer_id fields join key ho sakte hain."
    },
    {
      id: 4,
      question: "Can foreign key values repeat in a child table?",
      sampleAnswer: "Yes, if multiple rows reference the same parent. One customer ke multiple orders ho sakte hain."
    }
    ]
  },
  '20.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.2',
    id: 102,
    topicTitle: "INNER JOIN",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does INNER JOIN return?",
      options: [
        { key: "A", text: "Every possible pair" },
        { key: "B", text: "Rows with matching join keys in both tables" },
        { key: "C", text: "All left rows regardless of match" },
        { key: "D", text: "All right rows regardless of match" }
      ],
      correct: 1,
      explanation: "INNER JOIN matched rows return karta hai.",
      hint: "Focus on Rows with matching join keys in both tables to solve this query challenge."
    },
    {
      id: 2,
      question: "Which keyword specifies join condition?",
      options: [
        { key: "A", text: "LIMIT" },
        { key: "B", text: "HAVING" },
        { key: "C", text: "ON" },
        { key: "D", text: "AS ONLY" }
      ],
      correct: 2,
      explanation: "ON table matching condition define karta hai.",
      hint: "Focus on ON to solve this query challenge."
    },
    {
      id: 3,
      question: "Which query correctly joins orders and customers?",
      options: [
        { key: "A", text: "SELECT * FROM orders INNER customers;" },
        { key: "B", text: "SELECT * FROM orders JOIN customers WHERE;" },
        { key: "C", text: "SELECT * FROM orders ON customers;" },
        { key: "D", text: "SELECT * FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id;" }
      ],
      correct: 3,
      explanation: "INNER JOIN ON keys connect karta hai.",
      hint: "Focus on SELECT * FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id; to solve this query challenge."
    },
    {
      id: 4,
      question: "What happens to an unmatched order in INNER JOIN?",
      options: [
        { key: "A", text: "It is excluded from the result" },
        { key: "B", text: "It always appears with NULL" },
        { key: "C", text: "It is deleted from source" },
        { key: "D", text: "It becomes a new customer" }
      ],
      correct: 0,
      explanation: "Unmatched rows result mein nahi aati.",
      hint: "Focus on It is excluded from the result to solve this query challenge."
    },
    {
      id: 5,
      question: "What is a common join mistake?",
      options: [
        { key: "A", text: "Using ON with keys" },
        { key: "B", text: "Joining on unrelated columns" },
        { key: "C", text: "Using aliases" },
        { key: "D", text: "Selecting fewer columns" }
      ],
      correct: 1,
      explanation: "Incorrect keys wrong matches ya duplicates create kar sakti hain.",
      hint: "Focus on Joining on unrelated columns to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders AS o", "SELECT o.order_id, c.customer_name", "ON o.customer_id = c.customer_id", "INNER JOIN customers AS c"],
      shuffled: ["FROM orders AS o", "SELECT o.order_id, c.customer_name", "ON o.customer_id = c.customer_id", "INNER JOIN customers AS c"],
      expected: ["SELECT o.order_id, c.customer_name", "FROM orders AS o", "INNER JOIN customers AS c", "ON o.customer_id = c.customer_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Alias → Short table name", "ON → Join condition", "INNER JOIN → Matching rows only"],
      shuffled: ["Alias → Short table name", "ON → Join condition", "INNER JOIN → Matching rows only"],
      expected: ["INNER JOIN → Matching rows only", "ON → Join condition", "Alias → Short table name"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: FROM orders o INNER JOIN customers c ON o.order_id = c.customer_id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id", "FROM orders o INNER JOIN customers c WITHOUT ON", "FROM orders o INNER JOIN customers c ON o.amount = c.city"],
      shuffled: ["FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id", "FROM orders o INNER JOIN customers c WITHOUT ON", "FROM orders o INNER JOIN customers c ON o.amount = c.city"],
      expected: ["FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id"],
      hint: "Related customer_id columns correct join key hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "INNER JOIN",
      meaning: "Matching rows only"
    },
    {
      id: 2,
      snippet: "ON",
      meaning: "Join condition"
    },
    {
      id: 3,
      snippet: "Alias",
      meaning: "Short table name"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: INNER JOIN",
      scenario: "Report mein orders ke saath matching customer names dikhane hain.",
      prompt: "Kaunsa join select karein?",
      expectedResponse: "INNER JOIN — Correct! INNER JOIN matching orders aur customers ko combine karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does INNER JOIN return?",
      sampleAnswer: "Rows with matching join keys in both tables. INNER JOIN matched rows return karta hai."
    },
    {
      id: 2,
      question: "Which keyword specifies join condition?",
      sampleAnswer: "ON. ON table matching condition define karta hai."
    },
    {
      id: 3,
      question: "Which query correctly joins orders and customers?",
      sampleAnswer: "SELECT * FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id;. INNER JOIN ON keys connect karta hai."
    },
    {
      id: 4,
      question: "What happens to an unmatched order in INNER JOIN?",
      sampleAnswer: "It is excluded from the result. Unmatched rows result mein nahi aati."
    }
    ]
  },
  '20.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.3',
    id: 103,
    topicTitle: "LEFT JOIN",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does LEFT JOIN preserve?",
      options: [
        { key: "A", text: "Only matched rows" },
        { key: "B", text: "Every possible combination" },
        { key: "C", text: "All rows from the left table" },
        { key: "D", text: "Only right table rows" }
      ],
      correct: 2,
      explanation: "LEFT JOIN left table ki saari rows preserve karta hai.",
      hint: "Focus on All rows from the left table to solve this query challenge."
    },
    {
      id: 2,
      question: "What appears for unmatched right-side columns?",
      options: [
        { key: "A", text: "Zero always" },
        { key: "B", text: "Blank text always" },
        { key: "C", text: "The left key automatically" },
        { key: "D", text: "NULL" }
      ],
      correct: 3,
      explanation: "Unmatched right columns NULL hoti hain.",
      hint: "Focus on NULL to solve this query challenge."
    },
    {
      id: 3,
      question: "Which join keeps customers without orders?",
      options: [
        { key: "A", text: "customers LEFT JOIN orders" },
        { key: "B", text: "customers INNER JOIN orders" },
        { key: "C", text: "orders INNER JOIN customers" },
        { key: "D", text: "customers CROSS JOIN orders" }
      ],
      correct: 0,
      explanation: "Customers left side par hon to all customers preserve hote hain.",
      hint: "Focus on customers LEFT JOIN orders to solve this query challenge."
    },
    {
      id: 4,
      question: "Which syntax is valid?",
      options: [
        { key: "A", text: "FROM customers LEFT WITH orders" },
        { key: "B", text: "FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id" },
        { key: "C", text: "FROM customers LEFT orders ON" },
        { key: "D", text: "FROM customers LEFT JOIN orders WHERE c.customer_id" }
      ],
      correct: 1,
      explanation: "LEFT JOIN ke liye ON condition specify karte hain.",
      hint: "Focus on FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id to solve this query challenge."
    },
    {
      id: 5,
      question: "Can one customer appear multiple times in a LEFT JOIN?",
      options: [
        { key: "A", text: "Only with DISTINCT" },
        { key: "B", text: "Only if no orders exist" },
        { key: "C", text: "Yes, if multiple matching orders exist" },
        { key: "D", text: "No, never" }
      ],
      correct: 2,
      explanation: "One-to-many match multiple result rows bana sakta hai.",
      hint: "Focus on Yes, if multiple matching orders exist to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["ON c.customer_id = o.customer_id", "LEFT JOIN orders AS o", "SELECT c.customer_name, o.order_id", "FROM customers AS c"],
      shuffled: ["ON c.customer_id = o.customer_id", "LEFT JOIN orders AS o", "SELECT c.customer_name, o.order_id", "FROM customers AS c"],
      expected: ["SELECT c.customer_name, o.order_id", "FROM customers AS c", "LEFT JOIN orders AS o", "ON c.customer_id = o.customer_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["ON → Match keys", "NULL → No right-side match", "LEFT JOIN → All left rows"],
      shuffled: ["ON → Match keys", "NULL → No right-side match", "LEFT JOIN → All left rows"],
      expected: ["LEFT JOIN → All left rows", "NULL → No right-side match", "ON → Match keys"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: FROM customers c LEFT JOIN orders o ON c.city = o.amount",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c LEFT orders o"],
      shuffled: ["FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c LEFT orders o"],
      expected: ["FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id"],
      hint: "LEFT JOIN mein correct keys aur left table choose karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "LEFT JOIN",
      meaning: "All left rows"
    },
    {
      id: 2,
      snippet: "NULL",
      meaning: "No right-side match"
    },
    {
      id: 3,
      snippet: "ON",
      meaning: "Match keys"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: LEFT JOIN",
      scenario: "Company ko woh customers bhi list karne hain jinhone order nahi kiya.",
      prompt: "Kaunsa join useful hai?",
      expectedResponse: "customers LEFT JOIN orders — Correct! LEFT JOIN all customers preserve karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does LEFT JOIN preserve?",
      sampleAnswer: "All rows from the left table. LEFT JOIN left table ki saari rows preserve karta hai."
    },
    {
      id: 2,
      question: "What appears for unmatched right-side columns?",
      sampleAnswer: "NULL. Unmatched right columns NULL hoti hain."
    },
    {
      id: 3,
      question: "Which join keeps customers without orders?",
      sampleAnswer: "customers LEFT JOIN orders. Customers left side par hon to all customers preserve hote hain."
    },
    {
      id: 4,
      question: "Which syntax is valid?",
      sampleAnswer: "FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id. LEFT JOIN ke liye ON condition specify karte hain."
    }
    ]
  },
  '20.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.4',
    id: 104,
    topicTitle: "RIGHT JOIN",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does RIGHT JOIN preserve?",
      options: [
        { key: "A", text: "All left rows only" },
        { key: "B", text: "Only matched rows" },
        { key: "C", text: "No unmatched rows" },
        { key: "D", text: "All rows from the right table" }
      ],
      correct: 3,
      explanation: "RIGHT JOIN right-side rows preserve karta hai.",
      hint: "Focus on All rows from the right table to solve this query challenge."
    },
    {
      id: 2,
      question: "What happens to unmatched left-side columns?",
      options: [
        { key: "A", text: "They become NULL" },
        { key: "B", text: "They are copied from right side" },
        { key: "C", text: "They always become zero" },
        { key: "D", text: "They are deleted" }
      ],
      correct: 0,
      explanation: "Unmatched left columns NULL show hoti hain.",
      hint: "Focus on They become NULL to solve this query challenge."
    },
    {
      id: 3,
      question: "Is RIGHT JOIN supported in PostgreSQL?",
      options: [
        { key: "A", text: "Only with GROUP BY" },
        { key: "B", text: "Yes" },
        { key: "C", text: "No" },
        { key: "D", text: "Only in SQL Server" }
      ],
      correct: 1,
      explanation: "PostgreSQL RIGHT JOIN support karta hai.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 4,
      question: "Which join is logically equivalent to swapping table order in a LEFT JOIN?",
      options: [
        { key: "A", text: "CROSS JOIN" },
        { key: "B", text: "SELF JOIN" },
        { key: "C", text: "RIGHT JOIN" },
        { key: "D", text: "INNER JOIN" }
      ],
      correct: 2,
      explanation: "A RIGHT JOIN B is equivalent in row preservation to B LEFT JOIN A.",
      hint: "Focus on RIGHT JOIN to solve this query challenge."
    },
    {
      id: 5,
      question: "Which table is fully preserved in orders RIGHT JOIN customers?",
      options: [
        { key: "A", text: "orders" },
        { key: "B", text: "Both tables automatically" },
        { key: "C", text: "Neither table" },
        { key: "D", text: "customers" }
      ],
      correct: 3,
      explanation: "Right-side customers table preserve hoti hai.",
      hint: "Focus on customers to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders AS o", "SELECT c.customer_name, o.order_id", "ON o.customer_id = c.customer_id", "RIGHT JOIN customers AS c"],
      shuffled: ["FROM orders AS o", "SELECT c.customer_name, o.order_id", "ON o.customer_id = c.customer_id", "RIGHT JOIN customers AS c"],
      expected: ["SELECT c.customer_name, o.order_id", "FROM orders AS o", "RIGHT JOIN customers AS c", "ON o.customer_id = c.customer_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["NULL → Missing side of match", "LEFT JOIN → All left rows", "RIGHT JOIN → All right rows"],
      shuffled: ["NULL → Missing side of match", "LEFT JOIN → All left rows", "RIGHT JOIN → All right rows"],
      expected: ["RIGHT JOIN → All right rows", "LEFT JOIN → All left rows", "NULL → Missing side of match"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: orders RIGHT JOIN customers ON orders.order_id = customers.customer_id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["orders RIGHT JOIN customers ON orders.customer_id = customers.customer_id", "orders RIGHT customers", "orders INNER JOIN customers WITHOUT ON"],
      shuffled: ["orders RIGHT JOIN customers ON orders.customer_id = customers.customer_id", "orders RIGHT customers", "orders INNER JOIN customers WITHOUT ON"],
      expected: ["orders RIGHT JOIN customers ON orders.customer_id = customers.customer_id"],
      hint: "Related customer_id fields par join hona chahiye."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "RIGHT JOIN",
      meaning: "All right rows"
    },
    {
      id: 2,
      snippet: "LEFT JOIN",
      meaning: "All left rows"
    },
    {
      id: 3,
      snippet: "NULL",
      meaning: "Missing side of match"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: RIGHT JOIN",
      scenario: "Orders left table hain aur customers right table. Sab customers chahiye.",
      prompt: "Kaunsa join use karein?",
      expectedResponse: "RIGHT JOIN — Correct! RIGHT JOIN right table ke all customers rakhta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does RIGHT JOIN preserve?",
      sampleAnswer: "All rows from the right table. RIGHT JOIN right-side rows preserve karta hai."
    },
    {
      id: 2,
      question: "What happens to unmatched left-side columns?",
      sampleAnswer: "They become NULL. Unmatched left columns NULL show hoti hain."
    },
    {
      id: 3,
      question: "Is RIGHT JOIN supported in PostgreSQL?",
      sampleAnswer: "Yes. PostgreSQL RIGHT JOIN support karta hai."
    },
    {
      id: 4,
      question: "Which join is logically equivalent to swapping table order in a LEFT JOIN?",
      sampleAnswer: "RIGHT JOIN. A RIGHT JOIN B is equivalent in row preservation to B LEFT JOIN A."
    }
    ]
  },
  '20.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.5',
    id: 105,
    topicTitle: "FULL OUTER JOIN",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does FULL OUTER JOIN preserve?",
      options: [
        { key: "A", text: "All rows from both tables" },
        { key: "B", text: "Only matching rows" },
        { key: "C", text: "Only left rows" },
        { key: "D", text: "Only right rows" }
      ],
      correct: 0,
      explanation: "FULL OUTER JOIN dono sides ki unmatched rows bhi include karta hai.",
      hint: "Focus on All rows from both tables to solve this query challenge."
    },
    {
      id: 2,
      question: "How are unmatched columns represented?",
      options: [
        { key: "A", text: "With zero always" },
        { key: "B", text: "With NULL on the missing side" },
        { key: "C", text: "With random values" },
        { key: "D", text: "With duplicates only" }
      ],
      correct: 1,
      explanation: "Unmatched side ke fields NULL hote hain.",
      hint: "Focus on With NULL on the missing side to solve this query challenge."
    },
    {
      id: 3,
      question: "Is FULL OUTER JOIN available in PostgreSQL?",
      options: [
        { key: "A", text: "Only for numeric columns" },
        { key: "B", text: "Only with LIMIT" },
        { key: "C", text: "Yes" },
        { key: "D", text: "No" }
      ],
      correct: 2,
      explanation: "PostgreSQL FULL OUTER JOIN support karta hai.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 4,
      question: "Which join includes all customers and all orders?",
      options: [
        { key: "A", text: "INNER JOIN" },
        { key: "B", text: "CROSS JOIN" },
        { key: "C", text: "SELF JOIN" },
        { key: "D", text: "FULL OUTER JOIN" }
      ],
      correct: 3,
      explanation: "FULL OUTER JOIN dono tables ki rows preserve karta hai.",
      hint: "Focus on FULL OUTER JOIN to solve this query challenge."
    },
    {
      id: 5,
      question: "What is a common use of FULL OUTER JOIN?",
      options: [
        { key: "A", text: "Comparing two datasets including unmatched records" },
        { key: "B", text: "Sorting one table" },
        { key: "C", text: "Changing column names permanently" },
        { key: "D", text: "Removing every NULL" }
      ],
      correct: 0,
      explanation: "Unmatched differences inspect kar sakte hain.",
      hint: "Focus on Comparing two datasets including unmatched records to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM source_a AS a", "SELECT a.key, b.key", "ON a.key = b.key", "FULL OUTER JOIN source_b AS b"],
      shuffled: ["FROM source_a AS a", "SELECT a.key, b.key", "ON a.key = b.key", "FULL OUTER JOIN source_b AS b"],
      expected: ["SELECT a.key, b.key", "FROM source_a AS a", "FULL OUTER JOIN source_b AS b", "ON a.key = b.key"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["NULL → Unmatched side", "INNER JOIN → Only matches", "FULL OUTER JOIN → All rows from both sides"],
      shuffled: ["NULL → Unmatched side", "INNER JOIN → Only matches", "FULL OUTER JOIN → All rows from both sides"],
      expected: ["FULL OUTER JOIN → All rows from both sides", "INNER JOIN → Only matches", "NULL → Unmatched side"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: FROM source_a a FULL JOIN source_b b WITHOUT ON",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["FROM source_a a CROSS JOIN source_b b", "FROM source_a a FULL OUTER JOIN source_b b ON a.key = b.key", "FROM source_a a INNER JOIN source_b b ON a.key = b.key"],
      shuffled: ["FROM source_a a CROSS JOIN source_b b", "FROM source_a a FULL OUTER JOIN source_b b ON a.key = b.key", "FROM source_a a INNER JOIN source_b b ON a.key = b.key"],
      expected: ["FROM source_a a FULL OUTER JOIN source_b b ON a.key = b.key"],
      hint: "FULL OUTER JOIN matching aur unmatched dono include karta hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "FULL OUTER JOIN",
      meaning: "All rows from both sides"
    },
    {
      id: 2,
      snippet: "INNER JOIN",
      meaning: "Only matches"
    },
    {
      id: 3,
      snippet: "NULL",
      meaning: "Unmatched side"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: FULL OUTER JOIN",
      scenario: "Do systems ki customer lists compare karni hain, unmatched bhi dekhne hain.",
      prompt: "Kaunsa join select karein?",
      expectedResponse: "FULL OUTER JOIN — Correct! FULL OUTER JOIN dono sources ke unmatched records bhi show karega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does FULL OUTER JOIN preserve?",
      sampleAnswer: "All rows from both tables. FULL OUTER JOIN dono sides ki unmatched rows bhi include karta hai."
    },
    {
      id: 2,
      question: "How are unmatched columns represented?",
      sampleAnswer: "With NULL on the missing side. Unmatched side ke fields NULL hote hain."
    },
    {
      id: 3,
      question: "Is FULL OUTER JOIN available in PostgreSQL?",
      sampleAnswer: "Yes. PostgreSQL FULL OUTER JOIN support karta hai."
    },
    {
      id: 4,
      question: "Which join includes all customers and all orders?",
      sampleAnswer: "FULL OUTER JOIN. FULL OUTER JOIN dono tables ki rows preserve karta hai."
    }
    ]
  },
  '20.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.6',
    id: 106,
    topicTitle: "Joining More Than Two Tables",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Can a query join three tables?",
      options: [
        { key: "A", text: "Only when all names match" },
        { key: "B", text: "Yes" },
        { key: "C", text: "No" },
        { key: "D", text: "Only with UNION" }
      ],
      correct: 1,
      explanation: "Multiple JOIN clauses use kar sakte hain.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 2,
      question: "Which three tables help show customer, order and product details?",
      options: [
        { key: "A", text: "only customers" },
        { key: "B", text: "only products" },
        { key: "C", text: "customers, orders and order_items" },
        { key: "D", text: "customers, monitors and wallpaper" }
      ],
      correct: 2,
      explanation: "Order items bridge order aur products ko connect karte hain.",
      hint: "Focus on customers, orders and order_items to solve this query challenge."
    },
    {
      id: 3,
      question: "How do you add another table to an existing join?",
      options: [
        { key: "A", text: "Add another WHERE without table" },
        { key: "B", text: "Use SELECT twice with no FROM" },
        { key: "C", text: "Change all column names" },
        { key: "D", text: "Add another JOIN ... ON clause" }
      ],
      correct: 3,
      explanation: "Each new table ke liye relevant join condition chahiye.",
      hint: "Focus on Add another JOIN ... ON clause to solve this query challenge."
    },
    {
      id: 4,
      question: "Why use table aliases in multi-table joins?",
      options: [
        { key: "A", text: "To clarify column references" },
        { key: "B", text: "To change database passwords" },
        { key: "C", text: "To remove foreign keys" },
        { key: "D", text: "To guarantee no duplicates" }
      ],
      correct: 0,
      explanation: "Aliases ambiguity reduce karte hain.",
      hint: "Focus on To clarify column references to solve this query challenge."
    },
    {
      id: 5,
      question: "Which is a common risk with multi-table joins?",
      options: [
        { key: "A", text: "Every result has one row" },
        { key: "B", text: "Unexpected row multiplication from one-to-many relationships" },
        { key: "C", text: "All rows are always unique" },
        { key: "D", text: "Every query deletes data" }
      ],
      correct: 1,
      explanation: "Join cardinality samajhna important hai.",
      hint: "Focus on Unexpected row multiplication from one-to-many relationships to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c", "SELECT c.customer_name, o.order_id, oi.product_id", "JOIN order_items oi ON o.order_id = oi.order_id"],
      shuffled: ["JOIN orders o ON c.customer_id = o.customer_id", "FROM customers c", "SELECT c.customer_name, o.order_id, oi.product_id", "JOIN order_items oi ON o.order_id = oi.order_id"],
      expected: ["SELECT c.customer_name, o.order_id, oi.product_id", "FROM customers c", "JOIN orders o ON c.customer_id = o.customer_id", "JOIN order_items oi ON o.order_id = oi.order_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["order_items → Items in each order", "orders → Order header", "customers → Customer details"],
      shuffled: ["order_items → Items in each order", "orders → Order header", "customers → Customer details"],
      expected: ["customers → Customer details", "orders → Order header", "order_items → Items in each order"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: JOIN order_items oi ON c.customer_id = oi.product_id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["JOIN order_items oi WITHOUT ON", "JOIN order_items oi ON o.amount = oi.quantity", "JOIN order_items oi ON o.order_id = oi.order_id"],
      shuffled: ["JOIN order_items oi WITHOUT ON", "JOIN order_items oi ON o.amount = oi.quantity", "JOIN order_items oi ON o.order_id = oi.order_id"],
      expected: ["JOIN order_items oi ON o.order_id = oi.order_id"],
      hint: "Order items ko order_id se orders ke saath join karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "customers",
      meaning: "Customer details"
    },
    {
      id: 2,
      snippet: "orders",
      meaning: "Order header"
    },
    {
      id: 3,
      snippet: "order_items",
      meaning: "Items in each order"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Joining More Than Two Tables",
      scenario: "Manager ko customer, order aur item detail ek report mein chahiye.",
      prompt: "Kitni tables join karna useful hoga?",
      expectedResponse: "Three related tables — Correct! Related tables ko appropriate keys par join kar sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Can a query join three tables?",
      sampleAnswer: "Yes. Multiple JOIN clauses use kar sakte hain."
    },
    {
      id: 2,
      question: "Which three tables help show customer, order and product details?",
      sampleAnswer: "customers, orders and order_items. Order items bridge order aur products ko connect karte hain."
    },
    {
      id: 3,
      question: "How do you add another table to an existing join?",
      sampleAnswer: "Add another JOIN ... ON clause. Each new table ke liye relevant join condition chahiye."
    },
    {
      id: 4,
      question: "Why use table aliases in multi-table joins?",
      sampleAnswer: "To clarify column references. Aliases ambiguity reduce karte hain."
    }
    ]
  },
  '20.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.7',
    id: 107,
    topicTitle: "Self Join",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a self join?",
      options: [
        { key: "A", text: "A table without columns" },
        { key: "B", text: "A duplicate table backup" },
        { key: "C", text: "A table joined to itself using aliases" },
        { key: "D", text: "Two unrelated databases merged" }
      ],
      correct: 2,
      explanation: "Self join same table ke rows ke beech relation find karta hai.",
      hint: "Focus on A table joined to itself using aliases to solve this query challenge."
    },
    {
      id: 2,
      question: "Which example commonly uses a self join?",
      options: [
        { key: "A", text: "Sales totals only" },
        { key: "B", text: "Sorting products" },
        { key: "C", text: "Counting all rows" },
        { key: "D", text: "Employees and their managers" }
      ],
      correct: 3,
      explanation: "Employee aur manager same employees table mein ho sakte hain.",
      hint: "Focus on Employees and their managers to solve this query challenge."
    },
    {
      id: 3,
      question: "Why use two aliases in a self join?",
      options: [
        { key: "A", text: "To distinguish the two roles of the same table" },
        { key: "B", text: "To encrypt columns" },
        { key: "C", text: "To avoid ON clause" },
        { key: "D", text: "To create two physical tables" }
      ],
      correct: 0,
      explanation: "Aliases employee aur manager roles separate karte hain.",
      hint: "Focus on To distinguish the two roles of the same table to solve this query challenge."
    },
    {
      id: 4,
      question: "Which join condition links employee to manager?",
      options: [
        { key: "A", text: "e.employee_name = m.employee_name" },
        { key: "B", text: "e.manager_id = m.employee_id" },
        { key: "C", text: "e.employee_id = m.manager_id always" },
        { key: "D", text: "e.salary = m.salary" }
      ],
      correct: 1,
      explanation: "manager_id parent employee_id reference karta hai.",
      hint: "Focus on e.manager_id = m.employee_id to solve this query challenge."
    },
    {
      id: 5,
      question: "Can self joins use LEFT JOIN?",
      options: [
        { key: "A", text: "Only INNER JOIN" },
        { key: "B", text: "Only CROSS JOIN" },
        { key: "C", text: "Yes" },
        { key: "D", text: "No" }
      ],
      correct: 2,
      explanation: "LEFT JOIN se manager-less employees bhi show ho sakte hain.",
      hint: "Focus on Yes to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["ON e.manager_id = m.employee_id", "FROM employees e", "LEFT JOIN employees m", "SELECT e.employee_name, m.employee_name AS manager_name"],
      shuffled: ["ON e.manager_id = m.employee_id", "FROM employees e", "LEFT JOIN employees m", "SELECT e.employee_name, m.employee_name AS manager_name"],
      expected: ["SELECT e.employee_name, m.employee_name AS manager_name", "FROM employees e", "LEFT JOIN employees m", "ON e.manager_id = m.employee_id"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["m → Manager alias", "e → Employee alias", "Self join → Join table to itself"],
      shuffled: ["m → Manager alias", "e → Employee alias", "Self join → Join table to itself"],
      expected: ["Self join → Join table to itself", "e → Employee alias", "m → Manager alias"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: ON e.employee_id = m.manager_id (for employee-to-manager lookup)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["ON e.salary = m.salary", "ON e.manager_id = m.employee_id", "ON e.employee_name = m.employee_name"],
      shuffled: ["ON e.salary = m.salary", "ON e.manager_id = m.employee_id", "ON e.employee_name = m.employee_name"],
      expected: ["ON e.manager_id = m.employee_id"],
      hint: "Employee ka manager_id manager ke employee_id se match hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Self join",
      meaning: "Join table to itself"
    },
    {
      id: 2,
      snippet: "e",
      meaning: "Employee alias"
    },
    {
      id: 3,
      snippet: "m",
      meaning: "Manager alias"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Self Join",
      scenario: "HR ko employees ke saath manager names dikhane hain, same table mein stored hain.",
      prompt: "Kaunsa join pattern use karein?",
      expectedResponse: "Self join — Correct! Self join employee aur manager records connect karega."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a self join?",
      sampleAnswer: "A table joined to itself using aliases. Self join same table ke rows ke beech relation find karta hai."
    },
    {
      id: 2,
      question: "Which example commonly uses a self join?",
      sampleAnswer: "Employees and their managers. Employee aur manager same employees table mein ho sakte hain."
    },
    {
      id: 3,
      question: "Why use two aliases in a self join?",
      sampleAnswer: "To distinguish the two roles of the same table. Aliases employee aur manager roles separate karte hain."
    },
    {
      id: 4,
      question: "Which join condition links employee to manager?",
      sampleAnswer: "e.manager_id = m.employee_id. manager_id parent employee_id reference karta hai."
    }
    ]
  },
  '20.8': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.8',
    id: 108,
    topicTitle: "Cross Join",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does CROSS JOIN return?",
      options: [
        { key: "A", text: "Only matching keys" },
        { key: "B", text: "Only left rows" },
        { key: "C", text: "Only unmatched rows" },
        { key: "D", text: "Every combination of rows from two tables" }
      ],
      correct: 3,
      explanation: "CROSS JOIN Cartesian product deta hai.",
      hint: "Focus on Every combination of rows from two tables to solve this query challenge."
    },
    {
      id: 2,
      question: "If table A has 3 rows and B has 4, how many CROSS JOIN rows?",
      options: [
        { key: "A", text: "12" },
        { key: "B", text: "7" },
        { key: "C", text: "4" },
        { key: "D", text: "3" }
      ],
      correct: 0,
      explanation: "3 × 4 = 12 combinations bante hain.",
      hint: "Focus on 12 to solve this query challenge."
    },
    {
      id: 3,
      question: "Does CROSS JOIN require an ON condition?",
      options: [
        { key: "A", text: "Only for text" },
        { key: "B", text: "No" },
        { key: "C", text: "Yes, always" },
        { key: "D", text: "Only in PostgreSQL" }
      ],
      correct: 1,
      explanation: "CROSS JOIN without ON combinations generate karta hai.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 4,
      question: "Which use case suits CROSS JOIN?",
      options: [
        { key: "A", text: "Removing duplicates" },
        { key: "B", text: "Updating NULLs" },
        { key: "C", text: "All combinations of sizes and colors" },
        { key: "D", text: "Finding matched customer orders only" }
      ],
      correct: 2,
      explanation: "Size-color combinations cross join se generate ho sakte hain.",
      hint: "Focus on All combinations of sizes and colors to solve this query challenge."
    },
    {
      id: 5,
      question: "What is a risk of CROSS JOIN?",
      options: [
        { key: "A", text: "It always deletes source data" },
        { key: "B", text: "It removes all rows" },
        { key: "C", text: "It cannot use SELECT" },
        { key: "D", text: "Large result sets" }
      ],
      correct: 3,
      explanation: "Cartesian product size quickly grow kar sakta hai.",
      hint: "Focus on Large result sets to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Review combinations", "FROM sizes AS s", "SELECT s.size, c.color", "CROSS JOIN colors AS c"],
      shuffled: ["Review combinations", "FROM sizes AS s", "SELECT s.size, c.color", "CROSS JOIN colors AS c"],
      expected: ["SELECT s.size, c.color", "FROM sizes AS s", "CROSS JOIN colors AS c", "Review combinations"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Row count → Left count multiplied by right count", "Cartesian product → Every pair of rows", "CROSS JOIN → All combinations"],
      shuffled: ["Row count → Left count multiplied by right count", "Cartesian product → Every pair of rows", "CROSS JOIN → All combinations"],
      expected: ["CROSS JOIN → All combinations", "Cartesian product → Every pair of rows", "Row count → Left count multiplied by right count"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: FROM sizes CROSS JOIN colors ON sizes.id = colors.id",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["FROM sizes INNER JOIN colors WITHOUT ON", "FROM sizes CROSS JOIN colors", "FROM sizes UNION colors"],
      shuffled: ["FROM sizes INNER JOIN colors WITHOUT ON", "FROM sizes CROSS JOIN colors", "FROM sizes UNION colors"],
      expected: ["FROM sizes CROSS JOIN colors"],
      hint: "CROSS JOIN ko matching ON condition ki zaroorat nahi."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "CROSS JOIN",
      meaning: "All combinations"
    },
    {
      id: 2,
      snippet: "Cartesian product",
      meaning: "Every pair of rows"
    },
    {
      id: 3,
      snippet: "Row count",
      meaning: "Left count multiplied by right count"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Cross Join",
      scenario: "Shop mein 2 sizes aur 3 colors hain.",
      prompt: "CROSS JOIN se kitne combinations banenge?",
      expectedResponse: "6 — Correct! 2 × 3 = 6 combinations."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does CROSS JOIN return?",
      sampleAnswer: "Every combination of rows from two tables. CROSS JOIN Cartesian product deta hai."
    },
    {
      id: 2,
      question: "If table A has 3 rows and B has 4, how many CROSS JOIN rows?",
      sampleAnswer: "12. 3 × 4 = 12 combinations bante hain."
    },
    {
      id: 3,
      question: "Does CROSS JOIN require an ON condition?",
      sampleAnswer: "No. CROSS JOIN without ON combinations generate karta hai."
    },
    {
      id: 4,
      question: "Which use case suits CROSS JOIN?",
      sampleAnswer: "All combinations of sizes and colors. Size-color combinations cross join se generate ho sakte hain."
    }
    ]
  },
  '20.9': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 20,
    moduleName: "Module 20: Joins and Relationships",
    topicKey: '20.9',
    id: 109,
    topicTitle: "Avoiding Duplicate Rows After Joins",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Why can joins produce repeated customer rows?",
      options: [
        { key: "A", text: "One customer can match multiple orders" },
        { key: "B", text: "SQL always duplicates every row" },
        { key: "C", text: "ORDER BY duplicates rows" },
        { key: "D", text: "SELECT always multiplies rows" }
      ],
      correct: 0,
      explanation: "One-to-many join multiple result rows deta hai.",
      hint: "Focus on One customer can match multiple orders to solve this query challenge."
    },
    {
      id: 2,
      question: "What should you check before joining?",
      options: [
        { key: "A", text: "Server wallpaper" },
        { key: "B", text: "Join key uniqueness and relationship cardinality" },
        { key: "C", text: "Screen resolution" },
        { key: "D", text: "Text font only" }
      ],
      correct: 1,
      explanation: "Keys aur cardinality samajhna zaroori hai.",
      hint: "Focus on Join key uniqueness and relationship cardinality to solve this query challenge."
    },
    {
      id: 3,
      question: "Does DISTINCT always fix an incorrect join?",
      options: [
        { key: "A", text: "Only for dates" },
        { key: "B", text: "Only with LEFT JOIN" },
        { key: "C", text: "No" },
        { key: "D", text: "Yes, always" }
      ],
      correct: 2,
      explanation: "DISTINCT incorrect relationships ko hide kar sakta hai.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 4,
      question: "What can cause unexpectedly many joined rows?",
      options: [
        { key: "A", text: "Using clear aliases" },
        { key: "B", text: "Selecting only one column" },
        { key: "C", text: "Adding a LIMIT" },
        { key: "D", text: "Joining on non-unique or incorrect keys" }
      ],
      correct: 3,
      explanation: "Non-unique matching keys row multiplication kar sakti hain.",
      hint: "Focus on Joining on non-unique or incorrect keys to solve this query challenge."
    },
    {
      id: 5,
      question: "How can you check join result quality?",
      options: [
        { key: "A", text: "Compare row counts and inspect join keys" },
        { key: "B", text: "Delete all source rows" },
        { key: "C", text: "Remove all primary keys" },
        { key: "D", text: "Ignore duplicates" }
      ],
      correct: 0,
      explanation: "Validation se incorrect join detect hota hai.",
      hint: "Focus on Compare row counts and inspect join keys to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Check key uniqueness and relationship", "Join on correct keys", "Validate resulting row counts", "Count rows in source tables"],
      shuffled: ["Check key uniqueness and relationship", "Join on correct keys", "Validate resulting row counts", "Count rows in source tables"],
      expected: ["Count rows in source tables", "Check key uniqueness and relationship", "Join on correct keys", "Validate resulting row counts"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["DISTINCT → Remove duplicate result rows", "Join cardinality → Number of matches per key", "One-to-many → One parent with multiple children"],
      shuffled: ["DISTINCT → Remove duplicate result rows", "Join cardinality → Number of matches per key", "One-to-many → One parent with multiple children"],
      expected: ["One-to-many → One parent with multiple children", "Join cardinality → Number of matches per key", "DISTINCT → Remove duplicate result rows"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: Adding DISTINCT always proves the join is correct",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Validate keys and relationship before using DISTINCT", "Remove the ON condition", "Join on customer_name regardless of duplicates"],
      shuffled: ["Validate keys and relationship before using DISTINCT", "Remove the ON condition", "Join on customer_name regardless of duplicates"],
      expected: ["Validate keys and relationship before using DISTINCT"],
      hint: "Root cause ko fix karna DISTINCT se better hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "One-to-many",
      meaning: "One parent with multiple children"
    },
    {
      id: 2,
      snippet: "Join cardinality",
      meaning: "Number of matches per key"
    },
    {
      id: 3,
      snippet: "DISTINCT",
      meaning: "Remove duplicate result rows"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Avoiding Duplicate Rows After Joins",
      scenario: "Customer report mein ek name 5 baar aa raha hai because 5 orders hain.",
      prompt: "Sabse pehle kya check karein?",
      expectedResponse: "One-to-many relationship — Correct! Join cardinality check karke expected repetition samajh sakte hain."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Why can joins produce repeated customer rows?",
      sampleAnswer: "One customer can match multiple orders. One-to-many join multiple result rows deta hai."
    },
    {
      id: 2,
      question: "What should you check before joining?",
      sampleAnswer: "Join key uniqueness and relationship cardinality. Keys aur cardinality samajhna zaroori hai."
    },
    {
      id: 3,
      question: "Does DISTINCT always fix an incorrect join?",
      sampleAnswer: "No. DISTINCT incorrect relationships ko hide kar sakta hai."
    },
    {
      id: 4,
      question: "What can cause unexpectedly many joined rows?",
      sampleAnswer: "Joining on non-unique or incorrect keys. Non-unique matching keys row multiplication kar sakti hain."
    }
    ]
  },
  '21.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.1',
    id: 110,
    topicTitle: "What Is a Subquery?",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a subquery?",
      options: [
        { key: "A", text: "A table color" },
        { key: "B", text: "A database password" },
        { key: "C", text: "A join without tables" },
        { key: "D", text: "A query nested inside another SQL query" }
      ],
      correct: 3,
      explanation: "Subquery outer query ke andar likhi jaati hai.",
      hint: "Focus on A query nested inside another SQL query to solve this query challenge."
    },
    {
      id: 2,
      question: "Which symbols commonly surround a subquery?",
      options: [
        { key: "A", text: "Parentheses ()" },
        { key: "B", text: "Square brackets [] only" },
        { key: "C", text: "Quotation marks only" },
        { key: "D", text: "Curly braces only" }
      ],
      correct: 0,
      explanation: "Subquery commonly parentheses mein hoti hai.",
      hint: "Focus on Parentheses () to solve this query challenge."
    },
    {
      id: 3,
      question: "Which query finds orders above the average amount?",
      options: [
        { key: "A", text: "SELECT * FROM orders LIMIT AVG(amount);" },
        { key: "B", text: "SELECT * FROM orders WHERE amount > (SELECT AVG(amount) FROM orders);" },
        { key: "C", text: "SELECT * FROM orders WHERE amount > AVG(amount);" },
        { key: "D", text: "SELECT * FROM orders ORDER BY AVG(amount);" }
      ],
      correct: 1,
      explanation: "Inner SELECT average calculate karta hai.",
      hint: "Focus on SELECT * FROM orders WHERE amount > (SELECT AVG(amount) FROM orders); to solve this query challenge."
    },
    {
      id: 4,
      question: "Can a subquery appear in a WHERE clause?",
      options: [
        { key: "A", text: "Only after LIMIT" },
        { key: "B", text: "Only in CREATE TABLE" },
        { key: "C", text: "Yes" },
        { key: "D", text: "No" }
      ],
      correct: 2,
      explanation: "WHERE mein subquery result compare ho sakta hai.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 5,
      question: "Which part runs as a nested query?",
      options: [
        { key: "A", text: "The column alias only" },
        { key: "B", text: "The table name only" },
        { key: "C", text: "The semicolon" },
        { key: "D", text: "The SELECT inside parentheses" }
      ],
      correct: 3,
      explanation: "Parenthesized SELECT subquery hai.",
      hint: "Focus on The SELECT inside parentheses to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SELECT *", "WHERE amount > (SELECT AVG(amount) FROM orders)", "FROM orders", "Run query"],
      shuffled: ["SELECT *", "WHERE amount > (SELECT AVG(amount) FROM orders)", "FROM orders", "Run query"],
      expected: ["SELECT *", "FROM orders", "WHERE amount > (SELECT AVG(amount) FROM orders)", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Parentheses → Enclose nested query", "Outer query → Uses subquery result", "Subquery → Nested SELECT"],
      shuffled: ["Parentheses → Enclose nested query", "Outer query → Uses subquery result", "Subquery → Nested SELECT"],
      expected: ["Subquery → Nested SELECT", "Outer query → Uses subquery result", "Parentheses → Enclose nested query"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE amount > SELECT AVG(amount) FROM orders",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE amount > (SELECT AVG(amount) FROM orders)", "WHERE amount = SELECT AVG(amount)", "WHERE amount > AVG(amount)"],
      shuffled: ["WHERE amount > (SELECT AVG(amount) FROM orders)", "WHERE amount = SELECT AVG(amount)", "WHERE amount > AVG(amount)"],
      expected: ["WHERE amount > (SELECT AVG(amount) FROM orders)"],
      hint: "Nested SELECT ko parentheses mein rakho."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Subquery",
      meaning: "Nested SELECT"
    },
    {
      id: 2,
      snippet: "Outer query",
      meaning: "Uses subquery result"
    },
    {
      id: 3,
      snippet: "Parentheses",
      meaning: "Enclose nested query"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: What Is a Subquery?",
      scenario: "Manager ko average se mehange orders chahiye.",
      prompt: "Kaunsa technique useful hai?",
      expectedResponse: "Subquery using AVG(amount) — Correct! Subquery average calculate karke outer WHERE ko value deta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a subquery?",
      sampleAnswer: "A query nested inside another SQL query. Subquery outer query ke andar likhi jaati hai."
    },
    {
      id: 2,
      question: "Which symbols commonly surround a subquery?",
      sampleAnswer: "Parentheses (). Subquery commonly parentheses mein hoti hai."
    },
    {
      id: 3,
      question: "Which query finds orders above the average amount?",
      sampleAnswer: "SELECT * FROM orders WHERE amount > (SELECT AVG(amount) FROM orders);. Inner SELECT average calculate karta hai."
    },
    {
      id: 4,
      question: "Can a subquery appear in a WHERE clause?",
      sampleAnswer: "Yes. WHERE mein subquery result compare ho sakta hai."
    }
    ]
  },
  '21.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.2',
    id: 111,
    topicTitle: "Scalar and Multi-Row Subqueries",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does a scalar subquery return?",
      options: [
        { key: "A", text: "At most one row with one column" },
        { key: "B", text: "Always every row" },
        { key: "C", text: "An entire table with many columns" },
        { key: "D", text: "Only text" }
      ],
      correct: 0,
      explanation: "Scalar subquery single value context mein use hoti hai.",
      hint: "Focus on At most one row with one column to solve this query challenge."
    },
    {
      id: 2,
      question: "What does a multi-row subquery return?",
      options: [
        { key: "A", text: "A database name" },
        { key: "B", text: "Multiple rows, usually one column for IN" },
        { key: "C", text: "Exactly one value always" },
        { key: "D", text: "Only NULL" }
      ],
      correct: 1,
      explanation: "Multi-row result IN jaise operators ke saath useful hai.",
      hint: "Focus on Multiple rows, usually one column for IN to solve this query challenge."
    },
    {
      id: 3,
      question: "Which operator suits a list of values returned by a subquery?",
      options: [
        { key: "A", text: "+" },
        { key: "B", text: "AS" },
        { key: "C", text: "IN" },
        { key: "D", text: "= always" }
      ],
      correct: 2,
      explanation: "IN multiple returned values compare kar sakta hai.",
      hint: "Focus on IN to solve this query challenge."
    },
    {
      id: 4,
      question: "Which aggregate can produce a scalar result?",
      options: [
        { key: "A", text: "SELECT * FROM orders without limit" },
        { key: "B", text: "SELECT order_id FROM orders with many rows" },
        { key: "C", text: "SELECT customer_id FROM customers without limit" },
        { key: "D", text: "AVG(amount)" }
      ],
      correct: 3,
      explanation: "AVG aggregate one value return karta hai.",
      hint: "Focus on AVG(amount) to solve this query challenge."
    },
    {
      id: 5,
      question: "What happens if a scalar subquery used with = returns multiple rows?",
      options: [
        { key: "A", text: "PostgreSQL raises an error" },
        { key: "B", text: "It silently picks any row" },
        { key: "C", text: "It always returns TRUE" },
        { key: "D", text: "It deletes extra rows" }
      ],
      correct: 0,
      explanation: "Scalar context multiple rows accept nahi karta.",
      hint: "Focus on PostgreSQL raises an error to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')", "SELECT *", "Run query", "FROM orders"],
      shuffled: ["WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')", "SELECT *", "Run query", "FROM orders"],
      expected: ["SELECT *", "FROM orders", "WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["IN → Matches any value in set", "Multi-row subquery → Multiple values", "Scalar subquery → Single value"],
      shuffled: ["IN → Matches any value in set", "Multi-row subquery → Multiple values", "Scalar subquery → Single value"],
      expected: ["Scalar subquery → Single value", "Multi-row subquery → Multiple values", "IN → Matches any value in set"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE customer_id = (SELECT customer_id FROM customers WHERE city = 'Delhi') (when many rows possible)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE customer_id > customers", "WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')", "WHERE customer_id = ALL customers"],
      shuffled: ["WHERE customer_id > customers", "WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')", "WHERE customer_id = ALL customers"],
      expected: ["WHERE customer_id IN (SELECT customer_id FROM customers WHERE city = 'Delhi')"],
      hint: "Multiple customers ho sakte hain, isliye IN use karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Scalar subquery",
      meaning: "Single value"
    },
    {
      id: 2,
      snippet: "Multi-row subquery",
      meaning: "Multiple values"
    },
    {
      id: 3,
      snippet: "IN",
      meaning: "Matches any value in set"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Scalar and Multi-Row Subqueries",
      scenario: "Delhi mein multiple customers hain; unke orders find karne hain.",
      prompt: "Kaunsa operator suitable hai?",
      expectedResponse: "IN — Correct! IN multiple customer IDs handle karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does a scalar subquery return?",
      sampleAnswer: "At most one row with one column. Scalar subquery single value context mein use hoti hai."
    },
    {
      id: 2,
      question: "What does a multi-row subquery return?",
      sampleAnswer: "Multiple rows, usually one column for IN. Multi-row result IN jaise operators ke saath useful hai."
    },
    {
      id: 3,
      question: "Which operator suits a list of values returned by a subquery?",
      sampleAnswer: "IN. IN multiple returned values compare kar sakta hai."
    },
    {
      id: 4,
      question: "Which aggregate can produce a scalar result?",
      sampleAnswer: "AVG(amount). AVG aggregate one value return karta hai."
    }
    ]
  },
  '21.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.3',
    id: 112,
    topicTitle: "IN and EXISTS",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does IN test?",
      options: [
        { key: "A", text: "Table creation" },
        { key: "B", text: "Membership in a list or subquery result" },
        { key: "C", text: "Only numeric addition" },
        { key: "D", text: "Row sorting" }
      ],
      correct: 1,
      explanation: "IN membership test karta hai.",
      hint: "Focus on Membership in a list or subquery result to solve this query challenge."
    },
    {
      id: 2,
      question: "What does EXISTS test?",
      options: [
        { key: "A", text: "Whether a table is empty of columns" },
        { key: "B", text: "Whether every row is NULL" },
        { key: "C", text: "Whether a subquery returns at least one row" },
        { key: "D", text: "Whether a column is sorted" }
      ],
      correct: 2,
      explanation: "EXISTS row existence check karta hai.",
      hint: "Focus on Whether a subquery returns at least one row to solve this query challenge."
    },
    {
      id: 3,
      question: "Which clause finds customers who have at least one order?",
      options: [
        { key: "A", text: "WHERE COUNT(*) > 0 without grouping" },
        { key: "B", text: "WHERE customer_id AS orders" },
        { key: "C", text: "WHERE customer_name IN amount" },
        { key: "D", text: "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)" }
      ],
      correct: 3,
      explanation: "Correlated EXISTS matching order check karta hai.",
      hint: "Focus on WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id) to solve this query challenge."
    },
    {
      id: 4,
      question: "Does EXISTS depend on selected value inside subquery?",
      options: [
        { key: "A", text: "No, it checks row existence" },
        { key: "B", text: "Yes, it requires a non-NULL selected value" },
        { key: "C", text: "Only for strings" },
        { key: "D", text: "Only for dates" }
      ],
      correct: 0,
      explanation: "EXISTS rows ke presence par depend karta hai.",
      hint: "Focus on No, it checks row existence to solve this query challenge."
    },
    {
      id: 5,
      question: "Can IN be used with a subquery returning one column?",
      options: [
        { key: "A", text: "Only with LIMIT" },
        { key: "B", text: "Yes" },
        { key: "C", text: "No" },
        { key: "D", text: "Only with JOIN" }
      ],
      correct: 1,
      explanation: "IN single-column subquery result compare karta hai.",
      hint: "Focus on Yes to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "SELECT c.customer_name", "FROM customers c", "Run query"],
      shuffled: ["WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "SELECT c.customer_name", "FROM customers c", "Run query"],
      expected: ["SELECT c.customer_name", "FROM customers c", "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Correlated subquery → Uses outer row values", "EXISTS → At least one row exists", "IN → Membership test"],
      shuffled: ["Correlated subquery → Uses outer row values", "EXISTS → At least one row exists", "IN → Membership test"],
      expected: ["IN → Membership test", "EXISTS → At least one row exists", "Correlated subquery → Uses outer row values"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE EXISTS SELECT 1 FROM orders",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE EXISTS orders o.customer_id", "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "WHERE EXISTS = orders"],
      shuffled: ["WHERE EXISTS orders o.customer_id", "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "WHERE EXISTS = orders"],
      expected: ["WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)"],
      hint: "EXISTS ke andar valid subquery parentheses mein hoti hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "IN",
      meaning: "Membership test"
    },
    {
      id: 2,
      snippet: "EXISTS",
      meaning: "At least one row exists"
    },
    {
      id: 3,
      snippet: "Correlated subquery",
      meaning: "Uses outer row values"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: IN and EXISTS",
      scenario: "Manager ko customers chahiye jinke at least 1 order hain.",
      prompt: "Kaunsa operator natural hai?",
      expectedResponse: "EXISTS — Correct! EXISTS matching order ke existence ko check karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does IN test?",
      sampleAnswer: "Membership in a list or subquery result. IN membership test karta hai."
    },
    {
      id: 2,
      question: "What does EXISTS test?",
      sampleAnswer: "Whether a subquery returns at least one row. EXISTS row existence check karta hai."
    },
    {
      id: 3,
      question: "Which clause finds customers who have at least one order?",
      sampleAnswer: "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id). Correlated EXISTS matching order check karta hai."
    },
    {
      id: 4,
      question: "Does EXISTS depend on selected value inside subquery?",
      sampleAnswer: "No, it checks row existence. EXISTS rows ke presence par depend karta hai."
    }
    ]
  },
  '21.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.4',
    id: 113,
    topicTitle: "NOT EXISTS",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does NOT EXISTS mean?",
      options: [
        { key: "A", text: "All amounts are zero" },
        { key: "B", text: "Every field is NULL" },
        { key: "C", text: "The subquery returns no rows" },
        { key: "D", text: "The subquery returns at least one row" }
      ],
      correct: 2,
      explanation: "NOT EXISTS no matching row hone par TRUE hota hai.",
      hint: "Focus on The subquery returns no rows to solve this query challenge."
    },
    {
      id: 2,
      question: "Which use case fits NOT EXISTS?",
      options: [
        { key: "A", text: "Find highest salary only" },
        { key: "B", text: "Sort city names" },
        { key: "C", text: "Create a new table" },
        { key: "D", text: "Find customers with no orders" }
      ],
      correct: 3,
      explanation: "Anti-match search mein NOT EXISTS useful hai.",
      hint: "Focus on Find customers with no orders to solve this query challenge."
    },
    {
      id: 3,
      question: "Does NOT EXISTS require an equality condition in every case?",
      options: [
        { key: "A", text: "No, but correlated checks often use one" },
        { key: "B", text: "Yes, always" },
        { key: "C", text: "Only for strings" },
        { key: "D", text: "Only for aggregates" }
      ],
      correct: 0,
      explanation: "NOT EXISTS any valid subquery par apply ho sakta hai.",
      hint: "Focus on No, but correlated checks often use one to solve this query challenge."
    },
    {
      id: 4,
      question: "What is a correlated NOT EXISTS condition for customers and orders?",
      options: [
        { key: "A", text: "o.order_id = c.customer_name" },
        { key: "B", text: "o.customer_id = c.customer_id" },
        { key: "C", text: "o.amount = c.customer_name" },
        { key: "D", text: "o.order_date = c.city" }
      ],
      correct: 1,
      explanation: "Related IDs correlate outer aur inner rows.",
      hint: "Focus on o.customer_id = c.customer_id to solve this query challenge."
    },
    {
      id: 5,
      question: "When does NOT EXISTS return TRUE for a customer?",
      options: [
        { key: "A", text: "When city is not NULL" },
        { key: "B", text: "When order amount is high" },
        { key: "C", text: "When no order matches that customer" },
        { key: "D", text: "When any order matches" }
      ],
      correct: 2,
      explanation: "No match hone par customer include hota hai.",
      hint: "Focus on When no order matches that customer to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "FROM customers c", "Run query", "SELECT c.customer_name"],
      shuffled: ["WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "FROM customers c", "Run query", "SELECT c.customer_name"],
      expected: ["SELECT c.customer_name", "FROM customers c", "WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Correlation → Connect inner to outer row", "EXISTS → At least one matching row", "NOT EXISTS → No matching row"],
      shuffled: ["Correlation → Connect inner to outer row", "EXISTS → At least one matching row", "NOT EXISTS → No matching row"],
      expected: ["NOT EXISTS → No matching row", "EXISTS → At least one matching row", "Correlation → Connect inner to outer row"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WHERE NOT EXISTS orders o",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WHERE o.customer_id IS NULL without join", "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)"],
      shuffled: ["WHERE o.customer_id IS NULL without join", "WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)", "WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)"],
      expected: ["WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)"],
      hint: "NOT EXISTS correct correlated subquery ke saath use karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "NOT EXISTS",
      meaning: "No matching row"
    },
    {
      id: 2,
      snippet: "EXISTS",
      meaning: "At least one matching row"
    },
    {
      id: 3,
      snippet: "Correlation",
      meaning: "Connect inner to outer row"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: NOT EXISTS",
      scenario: "Marketing team ko un customers ki list chahiye jinhone order nahi diya.",
      prompt: "Kaunsa operator use karein?",
      expectedResponse: "NOT EXISTS — Correct! NOT EXISTS customers with no matching orders find karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does NOT EXISTS mean?",
      sampleAnswer: "The subquery returns no rows. NOT EXISTS no matching row hone par TRUE hota hai."
    },
    {
      id: 2,
      question: "Which use case fits NOT EXISTS?",
      sampleAnswer: "Find customers with no orders. Anti-match search mein NOT EXISTS useful hai."
    },
    {
      id: 3,
      question: "Does NOT EXISTS require an equality condition in every case?",
      sampleAnswer: "No, but correlated checks often use one. NOT EXISTS any valid subquery par apply ho sakta hai."
    },
    {
      id: 4,
      question: "What is a correlated NOT EXISTS condition for customers and orders?",
      sampleAnswer: "o.customer_id = c.customer_id. Related IDs correlate outer aur inner rows."
    }
    ]
  },
  '21.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.5',
    id: 114,
    topicTitle: "UNION and UNION ALL",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does UNION do?",
      options: [
        { key: "A", text: "Only sorts first query" },
        { key: "B", text: "Deletes tables" },
        { key: "C", text: "Creates keys" },
        { key: "D", text: "Combines results and removes duplicate rows" }
      ],
      correct: 3,
      explanation: "UNION duplicate result rows remove karta hai.",
      hint: "Focus on Combines results and removes duplicate rows to solve this query challenge."
    },
    {
      id: 2,
      question: "What does UNION ALL do?",
      options: [
        { key: "A", text: "Combines results and keeps duplicates" },
        { key: "B", text: "Removes all duplicates" },
        { key: "C", text: "Only joins on keys" },
        { key: "D", text: "Filters NULL only" }
      ],
      correct: 0,
      explanation: "UNION ALL duplicate rows retain karta hai.",
      hint: "Focus on Combines results and keeps duplicates to solve this query challenge."
    },
    {
      id: 3,
      question: "What must UNION branches have?",
      options: [
        { key: "A", text: "Same primary keys" },
        { key: "B", text: "Same number of columns with compatible types" },
        { key: "C", text: "Same table names always" },
        { key: "D", text: "Same row counts" }
      ],
      correct: 1,
      explanation: "Set operation column counts aur compatible types require karta hai.",
      hint: "Focus on Same number of columns with compatible types to solve this query challenge."
    },
    {
      id: 4,
      question: "Which operation is typically preferable when duplicates should remain?",
      options: [
        { key: "A", text: "DISTINCT" },
        { key: "B", text: "INTERSECT" },
        { key: "C", text: "UNION ALL" },
        { key: "D", text: "UNION" }
      ],
      correct: 2,
      explanation: "UNION ALL all rows preserve karta hai.",
      hint: "Focus on UNION ALL to solve this query challenge."
    },
    {
      id: 5,
      question: "Does UNION match rows by column names?",
      options: [
        { key: "A", text: "Yes, only by names" },
        { key: "B", text: "Only by primary key" },
        { key: "C", text: "Only by ORDER BY" },
        { key: "D", text: "No, columns align by position" }
      ],
      correct: 3,
      explanation: "Set operations positional columns align karti hain.",
      hint: "Focus on No, columns align by position to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["UNION", "SELECT city FROM suppliers", "Read unique combined cities", "SELECT city FROM customers"],
      shuffled: ["UNION", "SELECT city FROM suppliers", "Read unique combined cities", "SELECT city FROM customers"],
      expected: ["SELECT city FROM customers", "UNION", "SELECT city FROM suppliers", "Read unique combined cities"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Column position → Align corresponding expressions", "UNION ALL → Combine and retain duplicates", "UNION → Combine and deduplicate"],
      shuffled: ["Column position → Align corresponding expressions", "UNION ALL → Combine and retain duplicates", "UNION → Combine and deduplicate"],
      expected: ["UNION → Combine and deduplicate", "UNION ALL → Combine and retain duplicates", "Column position → Align corresponding expressions"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT city FROM customers UNION ALL SELECT city, name FROM suppliers;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT city FROM customers JOIN suppliers WITHOUT ON;", "SELECT city FROM customers UNION SELECT * FROM suppliers;", "SELECT city FROM customers UNION ALL SELECT city FROM suppliers;"],
      shuffled: ["SELECT city FROM customers JOIN suppliers WITHOUT ON;", "SELECT city FROM customers UNION SELECT * FROM suppliers;", "SELECT city FROM customers UNION ALL SELECT city FROM suppliers;"],
      expected: ["SELECT city FROM customers UNION ALL SELECT city FROM suppliers;"],
      hint: "UNION branches ka column count compatible hona chahiye."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "UNION",
      meaning: "Combine and deduplicate"
    },
    {
      id: 2,
      snippet: "UNION ALL",
      meaning: "Combine and retain duplicates"
    },
    {
      id: 3,
      snippet: "Column position",
      meaning: "Align corresponding expressions"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: UNION and UNION ALL",
      scenario: "Two months ki customer lists combine karni hain aur repeated names bhi retain karne hain.",
      prompt: "Kaunsa set operation use karein?",
      expectedResponse: "UNION ALL — Correct! UNION ALL duplicates ko retain karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does UNION do?",
      sampleAnswer: "Combines results and removes duplicate rows. UNION duplicate result rows remove karta hai."
    },
    {
      id: 2,
      question: "What does UNION ALL do?",
      sampleAnswer: "Combines results and keeps duplicates. UNION ALL duplicate rows retain karta hai."
    },
    {
      id: 3,
      question: "What must UNION branches have?",
      sampleAnswer: "Same number of columns with compatible types. Set operation column counts aur compatible types require karta hai."
    },
    {
      id: 4,
      question: "Which operation is typically preferable when duplicates should remain?",
      sampleAnswer: "UNION ALL. UNION ALL all rows preserve karta hai."
    }
    ]
  },
  '21.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.6',
    id: 115,
    topicTitle: "INTERSECT and EXCEPT",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does INTERSECT return?",
      options: [
        { key: "A", text: "Rows common to both query results" },
        { key: "B", text: "Rows only in first result" },
        { key: "C", text: "All rows with duplicates" },
        { key: "D", text: "Every possible pair" }
      ],
      correct: 0,
      explanation: "INTERSECT common result rows return karta hai.",
      hint: "Focus on Rows common to both query results to solve this query challenge."
    },
    {
      id: 2,
      question: "What does EXCEPT return?",
      options: [
        { key: "A", text: "Only duplicate rows" },
        { key: "B", text: "Rows in first result but not in second" },
        { key: "C", text: "Only common rows" },
        { key: "D", text: "All rows from both" }
      ],
      correct: 1,
      explanation: "EXCEPT first minus second result hai.",
      hint: "Focus on Rows in first result but not in second to solve this query challenge."
    },
    {
      id: 3,
      question: "Do INTERSECT and EXCEPT remove duplicates by default?",
      options: [
        { key: "A", text: "Only in PostgreSQL 8" },
        { key: "B", text: "Only with LIMIT" },
        { key: "C", text: "Yes" },
        { key: "D", text: "No" }
      ],
      correct: 2,
      explanation: "Without ALL, set operations distinct results deti hain.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 4,
      question: "Which operation finds customer IDs in list A but not list B?",
      options: [
        { key: "A", text: "INTERSECT" },
        { key: "B", text: "CROSS JOIN" },
        { key: "C", text: "UNION ALL" },
        { key: "D", text: "EXCEPT" }
      ],
      correct: 3,
      explanation: "EXCEPT difference find karta hai.",
      hint: "Focus on EXCEPT to solve this query challenge."
    },
    {
      id: 5,
      question: "Which operation finds IDs appearing in both lists?",
      options: [
        { key: "A", text: "INTERSECT" },
        { key: "B", text: "EXCEPT" },
        { key: "C", text: "UNION ALL" },
        { key: "D", text: "LEFT JOIN without ON" }
      ],
      correct: 0,
      explanation: "INTERSECT common IDs deta hai.",
      hint: "Focus on INTERSECT to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SELECT customer_id FROM campaign_b", "INTERSECT", "Read common customers", "SELECT customer_id FROM campaign_a"],
      shuffled: ["SELECT customer_id FROM campaign_b", "INTERSECT", "Read common customers", "SELECT customer_id FROM campaign_a"],
      expected: ["SELECT customer_id FROM campaign_a", "INTERSECT", "SELECT customer_id FROM campaign_b", "Read common customers"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["UNION → Combine distinct rows", "EXCEPT → First result minus second", "INTERSECT → Common rows"],
      shuffled: ["UNION → Combine distinct rows", "EXCEPT → First result minus second", "INTERSECT → Common rows"],
      expected: ["INTERSECT → Common rows", "EXCEPT → First result minus second", "UNION → Combine distinct rows"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT customer_id FROM campaign_a MINUS SELECT customer_id FROM campaign_b; (PostgreSQL)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT customer_id FROM campaign_a EXCEPT SELECT customer_id FROM campaign_b;", "SELECT customer_id FROM campaign_a CROSS SELECT customer_id FROM campaign_b;", "SELECT customer_id FROM campaign_a DIFFERENCE SELECT customer_id FROM campaign_b;"],
      shuffled: ["SELECT customer_id FROM campaign_a EXCEPT SELECT customer_id FROM campaign_b;", "SELECT customer_id FROM campaign_a CROSS SELECT customer_id FROM campaign_b;", "SELECT customer_id FROM campaign_a DIFFERENCE SELECT customer_id FROM campaign_b;"],
      expected: ["SELECT customer_id FROM campaign_a EXCEPT SELECT customer_id FROM campaign_b;"],
      hint: "PostgreSQL mein EXCEPT set difference ke liye use hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "INTERSECT",
      meaning: "Common rows"
    },
    {
      id: 2,
      snippet: "EXCEPT",
      meaning: "First result minus second"
    },
    {
      id: 3,
      snippet: "UNION",
      meaning: "Combine distinct rows"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: INTERSECT and EXCEPT",
      scenario: "Do campaigns mein same customers kaun hain, identify karna hai.",
      prompt: "Kaunsa operation use karein?",
      expectedResponse: "INTERSECT — Correct! INTERSECT dono lists ke common customers return karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does INTERSECT return?",
      sampleAnswer: "Rows common to both query results. INTERSECT common result rows return karta hai."
    },
    {
      id: 2,
      question: "What does EXCEPT return?",
      sampleAnswer: "Rows in first result but not in second. EXCEPT first minus second result hai."
    },
    {
      id: 3,
      question: "Do INTERSECT and EXCEPT remove duplicates by default?",
      sampleAnswer: "Yes. Without ALL, set operations distinct results deti hain."
    },
    {
      id: 4,
      question: "Which operation finds customer IDs in list A but not list B?",
      sampleAnswer: "EXCEPT. EXCEPT difference find karta hai."
    }
    ]
  },
  '21.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 21,
    moduleName: "Module 21: Subqueries and Set Operations",
    topicKey: '21.7',
    id: 116,
    topicTitle: "Subqueries vs Joins",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a join primarily used for?",
      options: [
        { key: "A", text: "Starting a server" },
        { key: "B", text: "Combining related rows from tables" },
        { key: "C", text: "Creating a password" },
        { key: "D", text: "Formatting charts" }
      ],
      correct: 1,
      explanation: "JOIN related data combine karta hai.",
      hint: "Focus on Combining related rows from tables to solve this query challenge."
    },
    {
      id: 2,
      question: "What is a subquery?",
      options: [
        { key: "A", text: "A database port" },
        { key: "B", text: "A column data type" },
        { key: "C", text: "A query inside another query" },
        { key: "D", text: "A table alias only" }
      ],
      correct: 2,
      explanation: "Subquery nested SQL statement hai.",
      hint: "Focus on A query inside another query to solve this query challenge."
    },
    {
      id: 3,
      question: "Which approach is natural for displaying order and customer names together?",
      options: [
        { key: "A", text: "NOT EXISTS only" },
        { key: "B", text: "LIMIT only" },
        { key: "C", text: "CASE only" },
        { key: "D", text: "JOIN" }
      ],
      correct: 3,
      explanation: "JOIN se columns from both tables show kar sakte hain.",
      hint: "Focus on JOIN to solve this query challenge."
    },
    {
      id: 4,
      question: "Which approach is natural for filtering above average amount?",
      options: [
        { key: "A", text: "Scalar subquery with AVG" },
        { key: "B", text: "CROSS JOIN every row" },
        { key: "C", text: "ORDER BY only" },
        { key: "D", text: "UNION ALL only" }
      ],
      correct: 0,
      explanation: "Subquery average compute karke comparison allow karta hai.",
      hint: "Focus on Scalar subquery with AVG to solve this query challenge."
    },
    {
      id: 5,
      question: "Is a JOIN always faster than a subquery?",
      options: [
        { key: "A", text: "Only when there is NULL" },
        { key: "B", text: "No, performance depends on query and plan" },
        { key: "C", text: "Yes, always" },
        { key: "D", text: "Only with LIMIT" }
      ],
      correct: 1,
      explanation: "Planner aur indexes performance affect karte hain.",
      hint: "Focus on No, performance depends on query and plan to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Choose JOIN for related columns or subquery for nested filter", "Write SQL", "Identify needed output", "Validate results"],
      shuffled: ["Choose JOIN for related columns or subquery for nested filter", "Write SQL", "Identify needed output", "Validate results"],
      expected: ["Identify needed output", "Choose JOIN for related columns or subquery for nested filter", "Write SQL", "Validate results"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Execution plan → Database execution strategy", "Subquery → Nested SELECT", "JOIN → Combine table rows"],
      shuffled: ["Execution plan → Database execution strategy", "Subquery → Nested SELECT", "JOIN → Combine table rows"],
      expected: ["JOIN → Combine table rows", "Subquery → Nested SELECT", "Execution plan → Database execution strategy"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: All subqueries are slower than joins",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Performance depends on the query and execution plan", "Joins cannot use indexes", "Subqueries always delete data"],
      shuffled: ["Performance depends on the query and execution plan", "Joins cannot use indexes", "Subqueries always delete data"],
      expected: ["Performance depends on the query and execution plan"],
      hint: "Performance assumptions ko EXPLAIN se verify karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "JOIN",
      meaning: "Combine table rows"
    },
    {
      id: 2,
      snippet: "Subquery",
      meaning: "Nested SELECT"
    },
    {
      id: 3,
      snippet: "Execution plan",
      meaning: "Database execution strategy"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Subqueries vs Joins",
      scenario: "Report mein order_id ke saath customer_name show karna hai.",
      prompt: "Kaunsa approach simple hai?",
      expectedResponse: "JOIN orders to customers — Correct! JOIN related tables se fields combine karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a join primarily used for?",
      sampleAnswer: "Combining related rows from tables. JOIN related data combine karta hai."
    },
    {
      id: 2,
      question: "What is a subquery?",
      sampleAnswer: "A query inside another query. Subquery nested SQL statement hai."
    },
    {
      id: 3,
      question: "Which approach is natural for displaying order and customer names together?",
      sampleAnswer: "JOIN. JOIN se columns from both tables show kar sakte hain."
    },
    {
      id: 4,
      question: "Which approach is natural for filtering above average amount?",
      sampleAnswer: "Scalar subquery with AVG. Subquery average compute karke comparison allow karta hai."
    }
    ]
  },
  '22.1': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.1',
    id: 117,
    topicTitle: "Common Table Expressions (CTEs)",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which keyword starts a common table expression?",
      options: [
        { key: "A", text: "LIMIT" },
        { key: "B", text: "CASE" },
        { key: "C", text: "WITH" },
        { key: "D", text: "HAVING" }
      ],
      correct: 2,
      explanation: "CTE WITH keyword se start hoti hai.",
      hint: "Focus on WITH to solve this query challenge."
    },
    {
      id: 2,
      question: "What is a CTE?",
      options: [
        { key: "A", text: "A permanent database user" },
        { key: "B", text: "A keyboard shortcut" },
        { key: "C", text: "A file extension" },
        { key: "D", text: "A named temporary query result within a statement" }
      ],
      correct: 3,
      explanation: "CTE complex SQL readable banati hai.",
      hint: "Focus on A named temporary query result within a statement to solve this query challenge."
    },
    {
      id: 3,
      question: "Which syntax defines a CTE?",
      options: [
        { key: "A", text: "WITH totals AS (SELECT ...) SELECT ... FROM totals;" },
        { key: "B", text: "CTE totals FROM SELECT ..." },
        { key: "C", text: "CREATE totals AS WITH SELECT ..." },
        { key: "D", text: "SELECT WITH totals WITHOUT AS" }
      ],
      correct: 0,
      explanation: "WITH name AS (query) valid structure hai.",
      hint: "Focus on WITH totals AS (SELECT ...) SELECT ... FROM totals; to solve this query challenge."
    },
    {
      id: 4,
      question: "Does a standard CTE automatically create a permanent table?",
      options: [
        { key: "A", text: "Only with JOIN" },
        { key: "B", text: "No" },
        { key: "C", text: "Yes" },
        { key: "D", text: "Only in PostgreSQL" }
      ],
      correct: 1,
      explanation: "CTE query statement scope mein available hoti hai.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 5,
      question: "Why use CTEs?",
      options: [
        { key: "A", text: "To remove SQL syntax" },
        { key: "B", text: "To store passwords" },
        { key: "C", text: "To organize complex queries into readable steps" },
        { key: "D", text: "To change server hardware" }
      ],
      correct: 2,
      explanation: "CTEs reusable query blocks improve readability.",
      hint: "Focus on To organize complex queries into readable steps to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM totals", "ORDER BY total DESC", "WITH totals AS (SELECT customer_id, SUM(amount) AS total FROM orders GROUP BY customer_id)", "SELECT *"],
      shuffled: ["FROM totals", "ORDER BY total DESC", "WITH totals AS (SELECT customer_id, SUM(amount) AS total FROM orders GROUP BY customer_id)", "SELECT *"],
      expected: ["WITH totals AS (SELECT customer_id, SUM(amount) AS total FROM orders GROUP BY customer_id)", "SELECT *", "FROM totals", "ORDER BY total DESC"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["CTE → Named intermediate result", "AS → Define named query", "WITH → Start CTE"],
      shuffled: ["CTE → Named intermediate result", "AS → Define named query", "WITH → Start CTE"],
      expected: ["WITH → Start CTE", "AS → Define named query", "CTE → Named intermediate result"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WITH totals = (SELECT * FROM orders) SELECT * FROM totals;",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WITH totals AS (SELECT * FROM orders) SELECT * FROM totals;", "WITH totals FROM orders SELECT *;", "SELECT * FROM WITH totals;"],
      shuffled: ["WITH totals AS (SELECT * FROM orders) SELECT * FROM totals;", "WITH totals FROM orders SELECT *;", "SELECT * FROM WITH totals;"],
      expected: ["WITH totals AS (SELECT * FROM orders) SELECT * FROM totals;"],
      hint: "CTE mein name AS (subquery) use hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "WITH",
      meaning: "Start CTE"
    },
    {
      id: 2,
      snippet: "AS",
      meaning: "Define named query"
    },
    {
      id: 3,
      snippet: "CTE",
      meaning: "Named intermediate result"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Common Table Expressions (CTEs)",
      scenario: "Analyst ko lengthy sales query ko readable steps mein divide karna hai.",
      prompt: "Kaunsa feature use karein?",
      expectedResponse: "CTE with WITH — Correct! CTE se query logical blocks mein organize hoti hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which keyword starts a common table expression?",
      sampleAnswer: "WITH. CTE WITH keyword se start hoti hai."
    },
    {
      id: 2,
      question: "What is a CTE?",
      sampleAnswer: "A named temporary query result within a statement. CTE complex SQL readable banati hai."
    },
    {
      id: 3,
      question: "Which syntax defines a CTE?",
      sampleAnswer: "WITH totals AS (SELECT ...) SELECT ... FROM totals;. WITH name AS (query) valid structure hai."
    },
    {
      id: 4,
      question: "Does a standard CTE automatically create a permanent table?",
      sampleAnswer: "No. CTE query statement scope mein available hoti hai."
    }
    ]
  },
  '22.2': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.2',
    id: 118,
    topicTitle: "Multiple and Recursive CTE Concepts",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Can WITH define multiple CTEs?",
      options: [
        { key: "A", text: "No, only one" },
        { key: "B", text: "Only in SQL Server" },
        { key: "C", text: "Only with LIMIT" },
        { key: "D", text: "Yes, separated by commas" }
      ],
      correct: 3,
      explanation: "Multiple named CTEs comma-separated hoti hain.",
      hint: "Focus on Yes, separated by commas to solve this query challenge."
    },
    {
      id: 2,
      question: "Which keyword enables recursive CTEs in PostgreSQL?",
      options: [
        { key: "A", text: "WITH RECURSIVE" },
        { key: "B", text: "REPEAT WITH" },
        { key: "C", text: "LOOP QUERY" },
        { key: "D", text: "FOREVER SELECT" }
      ],
      correct: 0,
      explanation: "WITH RECURSIVE iterative logic support karta hai.",
      hint: "Focus on WITH RECURSIVE to solve this query challenge."
    },
    {
      id: 3,
      question: "What is a common recursive CTE use case?",
      options: [
        { key: "A", text: "Renaming a column only" },
        { key: "B", text: "Employee hierarchy traversal" },
        { key: "C", text: "Changing screen brightness" },
        { key: "D", text: "Sorting one text value" }
      ],
      correct: 1,
      explanation: "Hierarchy traversal recursive query se possible hai.",
      hint: "Focus on Employee hierarchy traversal to solve this query challenge."
    },
    {
      id: 4,
      question: "What are two conceptual parts of a recursive CTE?",
      options: [
        { key: "A", text: "SUM and AVG only" },
        { key: "B", text: "HOST and PORT" },
        { key: "C", text: "Anchor and recursive member" },
        { key: "D", text: "SELECT and DELETE only" }
      ],
      correct: 2,
      explanation: "Anchor initial rows aur recursive member next rows produce karta hai.",
      hint: "Focus on Anchor and recursive member to solve this query challenge."
    },
    {
      id: 5,
      question: "Why must recursion have a stopping condition?",
      options: [
        { key: "A", text: "To add colors" },
        { key: "B", text: "To remove joins" },
        { key: "C", text: "To force DISTINCT" },
        { key: "D", text: "To avoid unbounded repeated expansion" }
      ],
      correct: 3,
      explanation: "Termination logic infinite recursion risk reduce karta hai.",
      hint: "Focus on To avoid unbounded repeated expansion to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Stop when no new rows qualify", "Define anchor query", "Define recursive member", "Combine with UNION ALL"],
      shuffled: ["Stop when no new rows qualify", "Define anchor query", "Define recursive member", "Combine with UNION ALL"],
      expected: ["Define anchor query", "Define recursive member", "Combine with UNION ALL", "Stop when no new rows qualify"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["WITH RECURSIVE → Recursive CTE syntax", "Recursive member → Build next rows", "Anchor → Starting rows"],
      shuffled: ["WITH RECURSIVE → Recursive CTE syntax", "Recursive member → Build next rows", "Anchor → Starting rows"],
      expected: ["Anchor → Starting rows", "Recursive member → Build next rows", "WITH RECURSIVE → Recursive CTE syntax"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: WITH RECURSION nums AS (...)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["WITH LOOP nums AS (...)", "RECURSE nums SELECT ...", "WITH RECURSIVE nums AS (...)"],
      shuffled: ["WITH LOOP nums AS (...)", "RECURSE nums SELECT ...", "WITH RECURSIVE nums AS (...)"],
      expected: ["WITH RECURSIVE nums AS (...)"],
      hint: "PostgreSQL keyword WITH RECURSIVE hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Anchor",
      meaning: "Starting rows"
    },
    {
      id: 2,
      snippet: "Recursive member",
      meaning: "Build next rows"
    },
    {
      id: 3,
      snippet: "WITH RECURSIVE",
      meaning: "Recursive CTE syntax"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Multiple and Recursive CTE Concepts",
      scenario: "HR ko employee-manager hierarchy ka chain explore karna hai.",
      prompt: "Kaunsa advanced SQL feature suitable hai?",
      expectedResponse: "Recursive CTE — Correct! Recursive CTE hierarchy traverse kar sakti hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Can WITH define multiple CTEs?",
      sampleAnswer: "Yes, separated by commas. Multiple named CTEs comma-separated hoti hain."
    },
    {
      id: 2,
      question: "Which keyword enables recursive CTEs in PostgreSQL?",
      sampleAnswer: "WITH RECURSIVE. WITH RECURSIVE iterative logic support karta hai."
    },
    {
      id: 3,
      question: "What is a common recursive CTE use case?",
      sampleAnswer: "Employee hierarchy traversal. Hierarchy traversal recursive query se possible hai."
    },
    {
      id: 4,
      question: "What are two conceptual parts of a recursive CTE?",
      sampleAnswer: "Anchor and recursive member. Anchor initial rows aur recursive member next rows produce karta hai."
    }
    ]
  },
  '22.3': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.3',
    id: 119,
    topicTitle: "Window Functions Overview",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a window function?",
      options: [
        { key: "A", text: "A calculation across related rows while retaining row detail" },
        { key: "B", text: "A command that deletes groups" },
        { key: "C", text: "A desktop window setting" },
        { key: "D", text: "A table backup" }
      ],
      correct: 0,
      explanation: "Window function per-row output ke saath group context calculate karti hai.",
      hint: "Focus on A calculation across related rows while retaining row detail to solve this query challenge."
    },
    {
      id: 2,
      question: "Which keyword introduces a window specification?",
      options: [
        { key: "A", text: "JOIN ON" },
        { key: "B", text: "OVER" },
        { key: "C", text: "GROUP ONLY" },
        { key: "D", text: "WINDOWS START" }
      ],
      correct: 1,
      explanation: "OVER window definition deta hai.",
      hint: "Focus on OVER to solve this query challenge."
    },
    {
      id: 3,
      question: "Does a window aggregate necessarily collapse rows like GROUP BY?",
      options: [
        { key: "A", text: "Only with COUNT" },
        { key: "B", text: "Only for dates" },
        { key: "C", text: "No" },
        { key: "D", text: "Yes, always" }
      ],
      correct: 2,
      explanation: "Window calculation rows preserve karti hai.",
      hint: "Focus on No to solve this query challenge."
    },
    {
      id: 4,
      question: "Which expression calculates overall total alongside each row?",
      options: [
        { key: "A", text: "SUM(amount) GROUP BY order_id" },
        { key: "B", text: "SUM(amount) WHERE order_id" },
        { key: "C", text: "SUM(amount) LIMIT 1" },
        { key: "D", text: "SUM(amount) OVER ()" }
      ],
      correct: 3,
      explanation: "OVER () entire result window use karta hai.",
      hint: "Focus on SUM(amount) OVER () to solve this query challenge."
    },
    {
      id: 5,
      question: "Which function can be used as a window function?",
      options: [
        { key: "A", text: "ROW_NUMBER()" },
        { key: "B", text: "DELETE()" },
        { key: "C", text: "CREATE()" },
        { key: "D", text: "INSERT()" }
      ],
      correct: 0,
      explanation: "ROW_NUMBER window numbering deta hai.",
      hint: "Focus on ROW_NUMBER() to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["SUM(amount) OVER () AS overall_total", "Run query", "SELECT order_id, amount,", "FROM orders"],
      shuffled: ["SUM(amount) OVER () AS overall_total", "Run query", "SELECT order_id, amount,", "FROM orders"],
      expected: ["SELECT order_id, amount,", "SUM(amount) OVER () AS overall_total", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["ROW_NUMBER → Sequential row numbering", "PARTITION BY → Divide rows into groups", "OVER → Window specification"],
      shuffled: ["ROW_NUMBER → Sequential row numbering", "PARTITION BY → Divide rows into groups", "OVER → Window specification"],
      expected: ["OVER → Window specification", "PARTITION BY → Divide rows into groups", "ROW_NUMBER → Sequential row numbering"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: SELECT amount, SUM(amount) FROM orders; (one total per row intended)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["SELECT amount, SUM(amount) OVER () FROM orders;", "SELECT amount, SUM(amount) BY EACH FROM orders;", "SELECT amount, SUM(amount) WINDOW FROM orders;"],
      shuffled: ["SELECT amount, SUM(amount) OVER () FROM orders;", "SELECT amount, SUM(amount) BY EACH FROM orders;", "SELECT amount, SUM(amount) WINDOW FROM orders;"],
      expected: ["SELECT amount, SUM(amount) OVER () FROM orders;"],
      hint: "OVER () window aggregate ko detail rows ke saath show karta hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "OVER",
      meaning: "Window specification"
    },
    {
      id: 2,
      snippet: "PARTITION BY",
      meaning: "Divide rows into groups"
    },
    {
      id: 3,
      snippet: "ROW_NUMBER",
      meaning: "Sequential row numbering"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Window Functions Overview",
      scenario: "Manager ko har order ke saath overall sales total bhi dikhana hai.",
      prompt: "Kaunsa feature use karein?",
      expectedResponse: "SUM(amount) OVER () — Correct! Window aggregate each row ke saath overall total show karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a window function?",
      sampleAnswer: "A calculation across related rows while retaining row detail. Window function per-row output ke saath group context calculate karti hai."
    },
    {
      id: 2,
      question: "Which keyword introduces a window specification?",
      sampleAnswer: "OVER. OVER window definition deta hai."
    },
    {
      id: 3,
      question: "Does a window aggregate necessarily collapse rows like GROUP BY?",
      sampleAnswer: "No. Window calculation rows preserve karti hai."
    },
    {
      id: 4,
      question: "Which expression calculates overall total alongside each row?",
      sampleAnswer: "SUM(amount) OVER (). OVER () entire result window use karta hai."
    }
    ]
  },
  '22.4': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.4',
    id: 120,
    topicTitle: "ROW_NUMBER, RANK and DENSE_RANK",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does ROW_NUMBER() assign?",
      options: [
        { key: "A", text: "Only NULL values" },
        { key: "B", text: "A unique sequential number per row within a window" },
        { key: "C", text: "Same number to all ties" },
        { key: "D", text: "Only group totals" }
      ],
      correct: 1,
      explanation: "ROW_NUMBER every ordered row ko unique number deta hai.",
      hint: "Focus on A unique sequential number per row within a window to solve this query challenge."
    },
    {
      id: 2,
      question: "What happens to RANK() after ties?",
      options: [
        { key: "A", text: "It removes tied rows" },
        { key: "B", text: "It changes salaries" },
        { key: "C", text: "It leaves gaps in rank numbers" },
        { key: "D", text: "It never has gaps" }
      ],
      correct: 2,
      explanation: "RANK ties ke baad gaps create karta hai.",
      hint: "Focus on It leaves gaps in rank numbers to solve this query challenge."
    },
    {
      id: 3,
      question: "What happens to DENSE_RANK() after ties?",
      options: [
        { key: "A", text: "It deletes ties" },
        { key: "B", text: "It always skips ranks" },
        { key: "C", text: "It ignores ORDER BY" },
        { key: "D", text: "No gaps in rank numbers" }
      ],
      correct: 3,
      explanation: "DENSE_RANK ties ko same rank deta hai without gaps.",
      hint: "Focus on No gaps in rank numbers to solve this query challenge."
    },
    {
      id: 4,
      question: "Which function is useful for selecting one row per category using row numbers?",
      options: [
        { key: "A", text: "ROW_NUMBER()" },
        { key: "B", text: "SUM() only" },
        { key: "C", text: "COALESCE() only" },
        { key: "D", text: "LENGTH()" }
      ],
      correct: 0,
      explanation: "ROW_NUMBER with PARTITION BY row selection help karta hai.",
      hint: "Focus on ROW_NUMBER() to solve this query challenge."
    },
    {
      id: 5,
      question: "Which clause defines ranking order within OVER?",
      options: [
        { key: "A", text: "LIMIT only" },
        { key: "B", text: "ORDER BY" },
        { key: "C", text: "WHERE only" },
        { key: "D", text: "HAVING only" }
      ],
      correct: 1,
      explanation: "Window ORDER BY rank sequence decide karta hai.",
      hint: "Focus on ORDER BY to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank", "FROM employees", "SELECT employee_name, salary,", "Run query"],
      shuffled: ["DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank", "FROM employees", "SELECT employee_name, salary,", "Run query"],
      expected: ["SELECT employee_name, salary,", "DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank", "FROM employees", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["DENSE_RANK → Ties without gaps", "RANK → Ties with gaps", "ROW_NUMBER → Unique row sequence"],
      shuffled: ["DENSE_RANK → Ties without gaps", "RANK → Ties with gaps", "ROW_NUMBER → Unique row sequence"],
      expected: ["ROW_NUMBER → Unique row sequence", "RANK → Ties with gaps", "DENSE_RANK → Ties without gaps"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: RANK() OVER (salary DESC)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["RANK() WHERE salary DESC", "RANK() OVER (ORDER BY salary DESC)", "RANK(ORDER BY salary DESC)"],
      shuffled: ["RANK() WHERE salary DESC", "RANK() OVER (ORDER BY salary DESC)", "RANK(ORDER BY salary DESC)"],
      expected: ["RANK() OVER (ORDER BY salary DESC)"],
      hint: "Window ranking mein ORDER BY OVER ke andar hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "ROW_NUMBER",
      meaning: "Unique row sequence"
    },
    {
      id: 2,
      snippet: "RANK",
      meaning: "Ties with gaps"
    },
    {
      id: 3,
      snippet: "DENSE_RANK",
      meaning: "Ties without gaps"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: ROW_NUMBER, RANK and DENSE_RANK",
      scenario: "Salaries 100, 100, 90 hain. Tied top salaries ko same rank aur next ko rank 2 chahiye.",
      prompt: "Kaunsa function choose karein?",
      expectedResponse: "DENSE_RANK() — Correct! DENSE_RANK ties ke baad gap nahi chhodta."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does ROW_NUMBER() assign?",
      sampleAnswer: "A unique sequential number per row within a window. ROW_NUMBER every ordered row ko unique number deta hai."
    },
    {
      id: 2,
      question: "What happens to RANK() after ties?",
      sampleAnswer: "It leaves gaps in rank numbers. RANK ties ke baad gaps create karta hai."
    },
    {
      id: 3,
      question: "What happens to DENSE_RANK() after ties?",
      sampleAnswer: "No gaps in rank numbers. DENSE_RANK ties ko same rank deta hai without gaps."
    },
    {
      id: 4,
      question: "Which function is useful for selecting one row per category using row numbers?",
      sampleAnswer: "ROW_NUMBER(). ROW_NUMBER with PARTITION BY row selection help karta hai."
    }
    ]
  },
  '22.5': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.5',
    id: 121,
    topicTitle: "PARTITION BY and ORDER BY in Windows",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does PARTITION BY do in a window?",
      options: [
        { key: "A", text: "Creates physical tables" },
        { key: "B", text: "Sorts only text" },
        { key: "C", text: "Divides rows into groups for the window calculation" },
        { key: "D", text: "Deletes other groups" }
      ],
      correct: 2,
      explanation: "PARTITION BY calculation ko group-wise reset karta hai.",
      hint: "Focus on Divides rows into groups for the window calculation to solve this query challenge."
    },
    {
      id: 2,
      question: "What does ORDER BY inside OVER control?",
      options: [
        { key: "A", text: "Physical storage order" },
        { key: "B", text: "Database password" },
        { key: "C", text: "Table ownership" },
        { key: "D", text: "Ordering of rows for the window function" }
      ],
      correct: 3,
      explanation: "Window ORDER BY sequence define karta hai.",
      hint: "Focus on Ordering of rows for the window function to solve this query challenge."
    },
    {
      id: 3,
      question: "Which expression numbers employees within each department?",
      options: [
        { key: "A", text: "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)" },
        { key: "B", text: "ROW_NUMBER() OVER (ORDER BY department_id) only" },
        { key: "C", text: "COUNT(*) GROUP BY department_id" },
        { key: "D", text: "LIMIT 1" }
      ],
      correct: 0,
      explanation: "Partition se numbering per department restart hoti hai.",
      hint: "Focus on ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) to solve this query challenge."
    },
    {
      id: 4,
      question: "Can PARTITION BY be used without GROUP BY?",
      options: [
        { key: "A", text: "Only with JOIN" },
        { key: "B", text: "Yes" },
        { key: "C", text: "No" },
        { key: "D", text: "Only in SELECT DISTINCT" }
      ],
      correct: 1,
      explanation: "Window partitions GROUP BY se independent hain.",
      hint: "Focus on Yes to solve this query challenge."
    },
    {
      id: 5,
      question: "Which window clause resets running calculations by customer?",
      options: [
        { key: "A", text: "HAVING customer_id" },
        { key: "B", text: "AS customer_id" },
        { key: "C", text: "PARTITION BY customer_id" },
        { key: "D", text: "LIMIT customer_id" }
      ],
      correct: 2,
      explanation: "Customer partition se independent sequence banti hai.",
      hint: "Focus on PARTITION BY customer_id to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Run query", "SELECT employee_name, department_id,", "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn", "FROM employees"],
      shuffled: ["Run query", "SELECT employee_name, department_id,", "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn", "FROM employees"],
      expected: ["SELECT employee_name, department_id,", "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rn", "FROM employees", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["OVER → Define window", "ORDER BY → Order within each group", "PARTITION BY → Separate window groups"],
      shuffled: ["OVER → Define window", "ORDER BY → Order within each group", "PARTITION BY → Separate window groups"],
      expected: ["PARTITION BY → Separate window groups", "ORDER BY → Order within each group", "OVER → Define window"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: ROW_NUMBER() OVER (GROUP BY department_id ORDER BY salary DESC)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["ROW_NUMBER(PARTITION BY department_id)", "ROW_NUMBER() WHERE department_id ORDER BY salary", "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)"],
      shuffled: ["ROW_NUMBER(PARTITION BY department_id)", "ROW_NUMBER() WHERE department_id ORDER BY salary", "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)"],
      expected: ["ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)"],
      hint: "Window partition ke liye PARTITION BY use hota hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "PARTITION BY",
      meaning: "Separate window groups"
    },
    {
      id: 2,
      snippet: "ORDER BY",
      meaning: "Order within each group"
    },
    {
      id: 3,
      snippet: "OVER",
      meaning: "Define window"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: PARTITION BY and ORDER BY in Windows",
      scenario: "HR ko har department mein salary-wise numbering chahiye.",
      prompt: "Kaunsa clause grouping reset karega?",
      expectedResponse: "PARTITION BY department_id — Correct! PARTITION BY har department mein numbering restart karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does PARTITION BY do in a window?",
      sampleAnswer: "Divides rows into groups for the window calculation. PARTITION BY calculation ko group-wise reset karta hai."
    },
    {
      id: 2,
      question: "What does ORDER BY inside OVER control?",
      sampleAnswer: "Ordering of rows for the window function. Window ORDER BY sequence define karta hai."
    },
    {
      id: 3,
      question: "Which expression numbers employees within each department?",
      sampleAnswer: "ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC). Partition se numbering per department restart hoti hai."
    },
    {
      id: 4,
      question: "Can PARTITION BY be used without GROUP BY?",
      sampleAnswer: "Yes. Window partitions GROUP BY se independent hain."
    }
    ]
  },
  '22.6': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.6',
    id: 122,
    topicTitle: "LAG and LEAD",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does LAG() access?",
      options: [
        { key: "A", text: "Only next row" },
        { key: "B", text: "All table rows at once" },
        { key: "C", text: "Only maximum value" },
        { key: "D", text: "A previous row value in the defined window order" }
      ],
      correct: 3,
      explanation: "LAG previous row reference karta hai.",
      hint: "Focus on A previous row value in the defined window order to solve this query challenge."
    },
    {
      id: 2,
      question: "What does LEAD() access?",
      options: [
        { key: "A", text: "A following row value in the defined window order" },
        { key: "B", text: "Only previous row" },
        { key: "C", text: "A database connection" },
        { key: "D", text: "Only NULL values" }
      ],
      correct: 0,
      explanation: "LEAD next row reference karta hai.",
      hint: "Focus on A following row value in the defined window order to solve this query challenge."
    },
    {
      id: 3,
      question: "Why use LAG for sales analysis?",
      options: [
        { key: "A", text: "To create primary keys" },
        { key: "B", text: "To compare current sales with previous period" },
        { key: "C", text: "To permanently update sales" },
        { key: "D", text: "To delete missing dates" }
      ],
      correct: 1,
      explanation: "LAG period-over-period comparison help karta hai.",
      hint: "Focus on To compare current sales with previous period to solve this query challenge."
    },
    {
      id: 4,
      question: "Which clause ensures a meaningful previous row?",
      options: [
        { key: "A", text: "AS only" },
        { key: "B", text: "DISTINCT only" },
        { key: "C", text: "ORDER BY inside OVER" },
        { key: "D", text: "LIMIT only" }
      ],
      correct: 2,
      explanation: "Window ORDER BY sequence define karta hai.",
      hint: "Focus on ORDER BY inside OVER to solve this query challenge."
    },
    {
      id: 5,
      question: "What can LAG return for the first row without a default?",
      options: [
        { key: "A", text: "Always 0" },
        { key: "B", text: "Always first row value" },
        { key: "C", text: "Always 1" },
        { key: "D", text: "NULL" }
      ],
      correct: 3,
      explanation: "No previous row hone par default NULL hai.",
      hint: "Focus on NULL to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["FROM orders", "SELECT order_date, amount,", "Run query", "LAG(amount) OVER (ORDER BY order_date) AS previous_amount"],
      shuffled: ["FROM orders", "SELECT order_date, amount,", "Run query", "LAG(amount) OVER (ORDER BY order_date) AS previous_amount"],
      expected: ["SELECT order_date, amount,", "LAG(amount) OVER (ORDER BY order_date) AS previous_amount", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["ORDER BY → Window row sequence", "LEAD → Next row", "LAG → Previous row"],
      shuffled: ["ORDER BY → Window row sequence", "LEAD → Next row", "LAG → Previous row"],
      expected: ["LAG → Previous row", "LEAD → Next row", "ORDER BY → Window row sequence"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: LAG(amount) WHERE order_date",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["LAG(amount) OVER (ORDER BY order_date)", "LAG(amount) GROUP BY order_date", "LAG(amount) FROM orders"],
      shuffled: ["LAG(amount) OVER (ORDER BY order_date)", "LAG(amount) GROUP BY order_date", "LAG(amount) FROM orders"],
      expected: ["LAG(amount) OVER (ORDER BY order_date)"],
      hint: "LAG ko OVER window specification chahiye."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "LAG",
      meaning: "Previous row"
    },
    {
      id: 2,
      snippet: "LEAD",
      meaning: "Next row"
    },
    {
      id: 3,
      snippet: "ORDER BY",
      meaning: "Window row sequence"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: LAG and LEAD",
      scenario: "Daily sales mein aaj ka amount kal se compare karna hai.",
      prompt: "Kaunsa function suitable hai?",
      expectedResponse: "LAG(amount) — Correct! LAG previous ordered row ka amount deta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does LAG() access?",
      sampleAnswer: "A previous row value in the defined window order. LAG previous row reference karta hai."
    },
    {
      id: 2,
      question: "What does LEAD() access?",
      sampleAnswer: "A following row value in the defined window order. LEAD next row reference karta hai."
    },
    {
      id: 3,
      question: "Why use LAG for sales analysis?",
      sampleAnswer: "To compare current sales with previous period. LAG period-over-period comparison help karta hai."
    },
    {
      id: 4,
      question: "Which clause ensures a meaningful previous row?",
      sampleAnswer: "ORDER BY inside OVER. Window ORDER BY sequence define karta hai."
    }
    ]
  },
  '22.7': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.7',
    id: 123,
    topicTitle: "Running Totals and Moving Averages",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What is a running total?",
      options: [
        { key: "A", text: "Cumulative sum through the current row" },
        { key: "B", text: "Only the current value" },
        { key: "C", text: "Only the maximum value" },
        { key: "D", text: "A count of tables" }
      ],
      correct: 0,
      explanation: "Running total cumulative sum hota hai.",
      hint: "Focus on Cumulative sum through the current row to solve this query challenge."
    },
    {
      id: 2,
      question: "Which window aggregate can calculate a running total?",
      options: [
        { key: "A", text: "COUNT(*) WHERE amount" },
        { key: "B", text: "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)" },
        { key: "C", text: "SUM(amount) GROUP BY order_date only" },
        { key: "D", text: "MAX(amount) LIMIT 1" }
      ],
      correct: 1,
      explanation: "Ordered window frame cumulative sum calculate karta hai.",
      hint: "Focus on SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) to solve this query challenge."
    },
    {
      id: 3,
      question: "What is a moving average?",
      options: [
        { key: "A", text: "Only a distinct count" },
        { key: "B", text: "A table rename" },
        { key: "C", text: "Average over a rolling window of rows or periods" },
        { key: "D", text: "The highest value overall" }
      ],
      correct: 2,
      explanation: "Moving average recent values smooth karta hai.",
      hint: "Focus on Average over a rolling window of rows or periods to solve this query challenge."
    },
    {
      id: 4,
      question: "Which frame covers current and two preceding rows?",
      options: [
        { key: "A", text: "ROWS BETWEEN 2 FOLLOWING AND CURRENT ROW" },
        { key: "B", text: "ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING" },
        { key: "C", text: "ROWS BETWEEN 0 PRECEDING AND 0 FOLLOWING" },
        { key: "D", text: "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW" }
      ],
      correct: 3,
      explanation: "Two preceding + current = 3-row frame.",
      hint: "Focus on ROWS BETWEEN 2 PRECEDING AND CURRENT ROW to solve this query challenge."
    },
    {
      id: 5,
      question: "Why specify ORDER BY for running totals?",
      options: [
        { key: "A", text: "To define accumulation sequence" },
        { key: "B", text: "To delete duplicates" },
        { key: "C", text: "To choose the server" },
        { key: "D", text: "To encrypt dates" }
      ],
      correct: 0,
      explanation: "Order se cumulative sequence meaningful hota hai.",
      hint: "Focus on To define accumulation sequence to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Run query", "FROM orders", "SUM(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total", "SELECT order_date, amount,"],
      shuffled: ["Run query", "FROM orders", "SUM(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total", "SELECT order_date, amount,"],
      expected: ["SELECT order_date, amount,", "SUM(amount) OVER (ORDER BY order_date, order_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total", "FROM orders", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Window frame → Rows included in calculation", "Moving average → Rolling mean", "Running total → Cumulative sum"],
      shuffled: ["Window frame → Rows included in calculation", "Moving average → Rolling mean", "Running total → Cumulative sum"],
      expected: ["Running total → Cumulative sum", "Moving average → Rolling mean", "Window frame → Rows included in calculation"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: ROWS BETWEEN 2 FOLLOWING AND CURRENT ROW",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["ROWS BETWEEN 2 PRECEDING AND CURRENT ROW", "ROWS BETWEEN 2 PRECEDING AND 2 PRECEDING", "ROWS BETWEEN UNBOUNDED FOLLOWING AND CURRENT ROW"],
      shuffled: ["ROWS BETWEEN 2 PRECEDING AND CURRENT ROW", "ROWS BETWEEN 2 PRECEDING AND 2 PRECEDING", "ROWS BETWEEN UNBOUNDED FOLLOWING AND CURRENT ROW"],
      expected: ["ROWS BETWEEN 2 PRECEDING AND CURRENT ROW"],
      hint: "Rolling 3 rows ke liye 2 PRECEDING se CURRENT ROW use karo."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Running total",
      meaning: "Cumulative sum"
    },
    {
      id: 2,
      snippet: "Moving average",
      meaning: "Rolling mean"
    },
    {
      id: 3,
      snippet: "Window frame",
      meaning: "Rows included in calculation"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Running Totals and Moving Averages",
      scenario: "Manager ko har order ke baad accumulated sales total chahiye.",
      prompt: "Kaunsa calculation suitable hai?",
      expectedResponse: "Running SUM with ordered window — Correct! Ordered SUM window cumulative sales return karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What is a running total?",
      sampleAnswer: "Cumulative sum through the current row. Running total cumulative sum hota hai."
    },
    {
      id: 2,
      question: "Which window aggregate can calculate a running total?",
      sampleAnswer: "SUM(amount) OVER (ORDER BY order_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW). Ordered window frame cumulative sum calculate karta hai."
    },
    {
      id: 3,
      question: "What is a moving average?",
      sampleAnswer: "Average over a rolling window of rows or periods. Moving average recent values smooth karta hai."
    },
    {
      id: 4,
      question: "Which frame covers current and two preceding rows?",
      sampleAnswer: "ROWS BETWEEN 2 PRECEDING AND CURRENT ROW. Two preceding + current = 3-row frame."
    }
    ]
  },
  '22.8': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.8',
    id: 124,
    topicTitle: "Date and Text Functions",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "Which PostgreSQL function extracts a year from a date?",
      options: [
        { key: "A", text: "GETYEAR(order_date)" },
        { key: "B", text: "EXTRACT(YEAR FROM order_date)" },
        { key: "C", text: "YEARONLY(order_date)" },
        { key: "D", text: "YEAR_OF(order_date)" }
      ],
      correct: 1,
      explanation: "EXTRACT year component deta hai.",
      hint: "Focus on EXTRACT(YEAR FROM order_date) to solve this query challenge."
    },
    {
      id: 2,
      question: "Which PostgreSQL function converts text to uppercase?",
      options: [
        { key: "A", text: "TITLE(text_value)" },
        { key: "B", text: "TOP(text_value)" },
        { key: "C", text: "UPPER(text_value)" },
        { key: "D", text: "CAPS(text_value)" }
      ],
      correct: 2,
      explanation: "UPPER text uppercase karta hai.",
      hint: "Focus on UPPER(text_value) to solve this query challenge."
    },
    {
      id: 3,
      question: "Which function removes leading and trailing spaces?",
      options: [
        { key: "A", text: "COUNT(text_value)" },
        { key: "B", text: "AVG(text_value)" },
        { key: "C", text: "JOIN(text_value)" },
        { key: "D", text: "TRIM(text_value)" }
      ],
      correct: 3,
      explanation: "TRIM extra edge spaces remove karta hai.",
      hint: "Focus on TRIM(text_value) to solve this query challenge."
    },
    {
      id: 4,
      question: "Which function returns text length?",
      options: [
        { key: "A", text: "LENGTH(text_value)" },
        { key: "B", text: "SUM(text_value)" },
        { key: "C", text: "DATE_TRUNC(text_value)" },
        { key: "D", text: "MAXIMUM(text_value)" }
      ],
      correct: 0,
      explanation: "LENGTH characters count karta hai.",
      hint: "Focus on LENGTH(text_value) to solve this query challenge."
    },
    {
      id: 5,
      question: "Which PostgreSQL expression truncates date to month?",
      options: [
        { key: "A", text: "GROUP_MONTH(order_date)" },
        { key: "B", text: "DATE_TRUNC('month', order_date)" },
        { key: "C", text: "TRIM('month', order_date)" },
        { key: "D", text: "UPPER(order_date)" }
      ],
      correct: 1,
      explanation: "DATE_TRUNC monthly period normalize karta hai.",
      hint: "Focus on DATE_TRUNC('month', order_date) to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Run query", "FROM customers", "SELECT customer_name,", "UPPER(TRIM(customer_name)) AS clean_name"],
      shuffled: ["Run query", "FROM customers", "SELECT customer_name,", "UPPER(TRIM(customer_name)) AS clean_name"],
      expected: ["SELECT customer_name,", "UPPER(TRIM(customer_name)) AS clean_name", "FROM customers", "Run query"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["EXTRACT → Get date component", "TRIM → Remove edge spaces", "UPPER → Uppercase text"],
      shuffled: ["EXTRACT → Get date component", "TRIM → Remove edge spaces", "UPPER → Uppercase text"],
      expected: ["UPPER → Uppercase text", "TRIM → Remove edge spaces", "EXTRACT → Get date component"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: UPPER TRIM(customer_name)",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["TRIM(UPPER, customer_name)", "CAPS(TRIM(customer_name))", "UPPER(TRIM(customer_name))"],
      shuffled: ["TRIM(UPPER, customer_name)", "CAPS(TRIM(customer_name))", "UPPER(TRIM(customer_name))"],
      expected: ["UPPER(TRIM(customer_name))"],
      hint: "Nested UPPER(TRIM(...)) valid PostgreSQL expression hai."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "UPPER",
      meaning: "Uppercase text"
    },
    {
      id: 2,
      snippet: "TRIM",
      meaning: "Remove edge spaces"
    },
    {
      id: 3,
      snippet: "EXTRACT",
      meaning: "Get date component"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Date and Text Functions",
      scenario: "Customer names mein extra spaces hain aur uppercase report chahiye.",
      prompt: "Kaunsa expression useful hai?",
      expectedResponse: "UPPER(TRIM(customer_name)) — Correct! TRIM spaces remove karta hai aur UPPER uppercase convert karta hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "Which PostgreSQL function extracts a year from a date?",
      sampleAnswer: "EXTRACT(YEAR FROM order_date). EXTRACT year component deta hai."
    },
    {
      id: 2,
      question: "Which PostgreSQL function converts text to uppercase?",
      sampleAnswer: "UPPER(text_value). UPPER text uppercase karta hai."
    },
    {
      id: 3,
      question: "Which function removes leading and trailing spaces?",
      sampleAnswer: "TRIM(text_value). TRIM extra edge spaces remove karta hai."
    },
    {
      id: 4,
      question: "Which function returns text length?",
      sampleAnswer: "LENGTH(text_value). LENGTH characters count karta hai."
    }
    ]
  },
  '22.9': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.9',
    id: 125,
    topicTitle: "Query Validation and Performance Basics",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What does EXPLAIN show in PostgreSQL?",
      options: [
        { key: "A", text: "Only table colors" },
        { key: "B", text: "Only query comments" },
        { key: "C", text: "The planned query execution strategy" },
        { key: "D", text: "A list of all passwords" }
      ],
      correct: 2,
      explanation: "EXPLAIN planner ka execution plan show karta hai.",
      hint: "Focus on The planned query execution strategy to solve this query challenge."
    },
    {
      id: 2,
      question: "Why inspect query results before trusting a report?",
      options: [
        { key: "A", text: "To change screen color" },
        { key: "B", text: "To speed up typing" },
        { key: "C", text: "To delete all NULLs" },
        { key: "D", text: "To catch logic and data errors" }
      ],
      correct: 3,
      explanation: "Validation business mistakes avoid karti hai.",
      hint: "Focus on To catch logic and data errors to solve this query challenge."
    },
    {
      id: 3,
      question: "What is an index commonly used for?",
      options: [
        { key: "A", text: "Helping certain searches and joins run faster" },
        { key: "B", text: "Changing table font" },
        { key: "C", text: "Encrypting every query automatically" },
        { key: "D", text: "Guaranteeing no duplicates for every index" }
      ],
      correct: 0,
      explanation: "Indexes suitable access patterns mein performance improve kar sakte hain.",
      hint: "Focus on Helping certain searches and joins run faster to solve this query challenge."
    },
    {
      id: 4,
      question: "Why check row counts after a JOIN?",
      options: [
        { key: "A", text: "To avoid writing SELECT" },
        { key: "B", text: "To detect unexpected row multiplication or loss" },
        { key: "C", text: "To change server hostname" },
        { key: "D", text: "To remove all aliases" }
      ],
      correct: 1,
      explanation: "Row counts join validation mein help karte hain.",
      hint: "Focus on To detect unexpected row multiplication or loss to solve this query challenge."
    },
    {
      id: 5,
      question: "Does EXPLAIN ANALYZE execute the query?",
      options: [
        { key: "A", text: "Only for SELECT DISTINCT" },
        { key: "B", text: "Only with LIMIT" },
        { key: "C", text: "Yes" },
        { key: "D", text: "No, never" }
      ],
      correct: 2,
      explanation: "EXPLAIN ANALYZE query execute karke actual timings collect karta hai.",
      hint: "Focus on Yes to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Use EXPLAIN when performance needs investigation", "Run and inspect result rows", "Check query requirements", "Validate counts and totals"],
      shuffled: ["Use EXPLAIN when performance needs investigation", "Run and inspect result rows", "Check query requirements", "Validate counts and totals"],
      expected: ["Check query requirements", "Run and inspect result rows", "Validate counts and totals", "Use EXPLAIN when performance needs investigation"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Index → Data access structure", "EXPLAIN ANALYZE → Run and measure execution", "EXPLAIN → Estimated execution plan"],
      shuffled: ["Index → Data access structure", "EXPLAIN ANALYZE → Run and measure execution", "EXPLAIN → Estimated execution plan"],
      expected: ["EXPLAIN → Estimated execution plan", "EXPLAIN ANALYZE → Run and measure execution", "Index → Data access structure"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: EXPLAIN ANALYZE never executes SQL",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Every index guarantees faster queries", "EXPLAIN ANALYZE executes the statement", "EXPLAIN always changes data"],
      shuffled: ["Every index guarantees faster queries", "EXPLAIN ANALYZE executes the statement", "EXPLAIN always changes data"],
      expected: ["EXPLAIN ANALYZE executes the statement"],
      hint: "EXPLAIN ANALYZE actually statement execute karta hai; modifying queries ke saath caution chahiye."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "EXPLAIN",
      meaning: "Estimated execution plan"
    },
    {
      id: 2,
      snippet: "EXPLAIN ANALYZE",
      meaning: "Run and measure execution"
    },
    {
      id: 3,
      snippet: "Index",
      meaning: "Data access structure"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: Query Validation and Performance Basics",
      scenario: "Sales report mein totals unexpectedly double ho gaye after JOIN.",
      prompt: "Sabse pehle kya check karein?",
      expectedResponse: "Join keys and row counts — Correct! Join validation se duplicate multiplication identify hoti hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "What does EXPLAIN show in PostgreSQL?",
      sampleAnswer: "The planned query execution strategy. EXPLAIN planner ka execution plan show karta hai."
    },
    {
      id: 2,
      question: "Why inspect query results before trusting a report?",
      sampleAnswer: "To catch logic and data errors. Validation business mistakes avoid karti hai."
    },
    {
      id: 3,
      question: "What is an index commonly used for?",
      sampleAnswer: "Helping certain searches and joins run faster. Indexes suitable access patterns mein performance improve kar sakte hain."
    },
    {
      id: 4,
      question: "Why check row counts after a JOIN?",
      sampleAnswer: "To detect unexpected row multiplication or loss. Row counts join validation mein help karte hain."
    }
    ]
  },
  '22.10': {
    tabId: 4,
    tabName: 'SQL for Analytics',
    moduleId: 22,
    moduleName: "Module 22: Advanced SQL for Analysts",
    topicKey: '22.10',
    id: 126,
    topicTitle: "SQL Analytics Project",
    mode: 'Coding/tool practice',
    game1Quiz: [
    {
      id: 1,
      question: "What should an SQL analytics project start with?",
      options: [
        { key: "A", text: "A random query" },
        { key: "B", text: "Deleting raw tables" },
        { key: "C", text: "Changing passwords" },
        { key: "D", text: "A clear business question" }
      ],
      correct: 3,
      explanation: "Business question project direction define karta hai.",
      hint: "Focus on A clear business question to solve this query challenge."
    },
    {
      id: 2,
      question: "Which step helps verify the final sales summary?",
      options: [
        { key: "A", text: "Compare totals and row counts with source data" },
        { key: "B", text: "Trust every query without checking" },
        { key: "C", text: "Ignore NULL values always" },
        { key: "D", text: "Use LIMIT 1 only" }
      ],
      correct: 0,
      explanation: "Validation report accuracy improve karti hai.",
      hint: "Focus on Compare totals and row counts with source data to solve this query challenge."
    },
    {
      id: 3,
      question: "Which query concept is useful for category-wise revenue?",
      options: [
        { key: "A", text: "SELECT only without aggregating" },
        { key: "B", text: "GROUP BY with SUM" },
        { key: "C", text: "DELETE FROM products" },
        { key: "D", text: "DROP TABLE orders" }
      ],
      correct: 1,
      explanation: "Category revenue GROUP BY SUM se summarize hota hai.",
      hint: "Focus on GROUP BY with SUM to solve this query challenge."
    },
    {
      id: 4,
      question: "Which SQL feature helps combine orders with customer details?",
      options: [
        { key: "A", text: "DROP" },
        { key: "B", text: "VACUUM only" },
        { key: "C", text: "JOIN" },
        { key: "D", text: "TRUNCATE" }
      ],
      correct: 2,
      explanation: "JOIN related business tables connect karta hai.",
      hint: "Focus on JOIN to solve this query challenge."
    },
    {
      id: 5,
      question: "What should a final project deliver?",
      options: [
        { key: "A", text: "Only an unexplained query" },
        { key: "B", text: "Only screenshots of code" },
        { key: "C", text: "Only table names" },
        { key: "D", text: "A validated insight and clear recommendation" }
      ],
      correct: 3,
      explanation: "Analysis ka goal business insight aur action hai.",
      hint: "Focus on A validated insight and clear recommendation to solve this query challenge."
    }
    ],
    game2Puzzles: [
    {
      id: 1,
      title: "Puzzle 1 — Arrange the Steps",
      prompt: "Cards ko correct order mein arrange karo.",
      tokens: ["Join and aggregate correctly", "Define sales business question", "Validate results and present insight", "Retrieve and clean relevant data"],
      shuffled: ["Join and aggregate correctly", "Define sales business question", "Validate results and present insight", "Retrieve and clean relevant data"],
      expected: ["Define sales business question", "Retrieve and clean relevant data", "Join and aggregate correctly", "Validate results and present insight"],
      hint: "Correct! Steps ka logical order samajh aa gaya."
    },
    {
      id: 2,
      title: "Puzzle 2 — Match the Concepts",
      prompt: "Har SQL term ko uske correct meaning se match karo.",
      tokens: ["Insight → Actionable interpretation", "Validation → Check correctness", "Business question → Goal of analysis"],
      shuffled: ["Insight → Actionable interpretation", "Validation → Check correctness", "Business question → Goal of analysis"],
      expected: ["Business question → Goal of analysis", "Validation → Check correctness", "Insight → Actionable interpretation"],
      hint: "Great! Sab concepts sahi match hue."
    },
    {
      id: 3,
      title: "Puzzle 3 — Spot and Fix: A query that runs is automatically correct",
      prompt: "Incorrect code ya statement ko sahi option se replace karo.",
      tokens: ["Use CROSS JOIN for every table", "Ignore all missing values", "Validate business logic and source totals before reporting"],
      shuffled: ["Use CROSS JOIN for every table", "Ignore all missing values", "Validate business logic and source totals before reporting"],
      expected: ["Validate business logic and source totals before reporting"],
      hint: "Successful execution aur correct analysis alag cheezein hain."
    }
    ],
    game3MatchPairs: [
    {
      id: 1,
      snippet: "Business question",
      meaning: "Goal of analysis"
    },
    {
      id: 2,
      snippet: "Validation",
      meaning: "Check correctness"
    },
    {
      id: 3,
      snippet: "Insight",
      meaning: "Actionable interpretation"
    }
    ],
    game4Missions: [
    {
      id: 1,
      title: "Mission: SQL Analytics Project",
      scenario: "Shop owner ko best-selling category identify karni hai.",
      prompt: "Kaunsa analysis useful hai?",
      expectedResponse: "SUM sales by category with GROUP BY — Correct! Category-wise sales summary business decision support karti hai."
    }
    ],
    mockInterview: [
    {
      id: 1,
      question: "How do you begin an SQL analytics project?",
      sampleAnswer: "I define the business question, success metric and required data sources."
    },
    {
      id: 2,
      question: "How do you prepare data for an SQL report?",
      sampleAnswer: "I inspect tables, validate keys, handle missing values appropriately and filter relevant records."
    },
    {
      id: 3,
      question: "How do you calculate category revenue?",
      sampleAnswer: "I join order_items to products by product_id and group by product category, summing quantity times unit_price."
    },
    {
      id: 4,
      question: "How do you validate and communicate findings?",
      sampleAnswer: "I reconcile row counts and totals with source data, then summarize insights and limitations clearly."
    }
    ]
  },
};

export const TAB4_SQL_QUESTION_BANK_BY_ID: Record<number, TopicQuestionBank> = {
  77: TAB4_SQL_QUESTION_BANK['17.1'],
  171: TAB4_SQL_QUESTION_BANK['17.1'],
  78: TAB4_SQL_QUESTION_BANK['17.2'],
  172: TAB4_SQL_QUESTION_BANK['17.2'],
  79: TAB4_SQL_QUESTION_BANK['17.3'],
  173: TAB4_SQL_QUESTION_BANK['17.3'],
  80: TAB4_SQL_QUESTION_BANK['17.4'],
  174: TAB4_SQL_QUESTION_BANK['17.4'],
  81: TAB4_SQL_QUESTION_BANK['17.5'],
  175: TAB4_SQL_QUESTION_BANK['17.5'],
  82: TAB4_SQL_QUESTION_BANK['17.6'],
  176: TAB4_SQL_QUESTION_BANK['17.6'],
  83: TAB4_SQL_QUESTION_BANK['17.7'],
  177: TAB4_SQL_QUESTION_BANK['17.7'],
  84: TAB4_SQL_QUESTION_BANK['17.8'],
  178: TAB4_SQL_QUESTION_BANK['17.8'],
  85: TAB4_SQL_QUESTION_BANK['18.1'],
  181: TAB4_SQL_QUESTION_BANK['18.1'],
  86: TAB4_SQL_QUESTION_BANK['18.2'],
  182: TAB4_SQL_QUESTION_BANK['18.2'],
  87: TAB4_SQL_QUESTION_BANK['18.3'],
  183: TAB4_SQL_QUESTION_BANK['18.3'],
  88: TAB4_SQL_QUESTION_BANK['18.4'],
  184: TAB4_SQL_QUESTION_BANK['18.4'],
  89: TAB4_SQL_QUESTION_BANK['18.5'],
  185: TAB4_SQL_QUESTION_BANK['18.5'],
  90: TAB4_SQL_QUESTION_BANK['18.6'],
  186: TAB4_SQL_QUESTION_BANK['18.6'],
  91: TAB4_SQL_QUESTION_BANK['18.7'],
  187: TAB4_SQL_QUESTION_BANK['18.7'],
  92: TAB4_SQL_QUESTION_BANK['18.8'],
  188: TAB4_SQL_QUESTION_BANK['18.8'],
  93: TAB4_SQL_QUESTION_BANK['18.9'],
  189: TAB4_SQL_QUESTION_BANK['18.9'],
  94: TAB4_SQL_QUESTION_BANK['19.1'],
  191: TAB4_SQL_QUESTION_BANK['19.1'],
  95: TAB4_SQL_QUESTION_BANK['19.2'],
  192: TAB4_SQL_QUESTION_BANK['19.2'],
  96: TAB4_SQL_QUESTION_BANK['19.3'],
  193: TAB4_SQL_QUESTION_BANK['19.3'],
  97: TAB4_SQL_QUESTION_BANK['19.4'],
  194: TAB4_SQL_QUESTION_BANK['19.4'],
  98: TAB4_SQL_QUESTION_BANK['19.5'],
  195: TAB4_SQL_QUESTION_BANK['19.5'],
  99: TAB4_SQL_QUESTION_BANK['19.6'],
  196: TAB4_SQL_QUESTION_BANK['19.6'],
  100: TAB4_SQL_QUESTION_BANK['19.7'],
  197: TAB4_SQL_QUESTION_BANK['19.7'],
  101: TAB4_SQL_QUESTION_BANK['20.1'],
  201: TAB4_SQL_QUESTION_BANK['20.1'],
  102: TAB4_SQL_QUESTION_BANK['20.2'],
  202: TAB4_SQL_QUESTION_BANK['20.2'],
  103: TAB4_SQL_QUESTION_BANK['20.3'],
  203: TAB4_SQL_QUESTION_BANK['20.3'],
  104: TAB4_SQL_QUESTION_BANK['20.4'],
  204: TAB4_SQL_QUESTION_BANK['20.4'],
  105: TAB4_SQL_QUESTION_BANK['20.5'],
  205: TAB4_SQL_QUESTION_BANK['20.5'],
  106: TAB4_SQL_QUESTION_BANK['20.6'],
  206: TAB4_SQL_QUESTION_BANK['20.6'],
  107: TAB4_SQL_QUESTION_BANK['20.7'],
  207: TAB4_SQL_QUESTION_BANK['20.7'],
  108: TAB4_SQL_QUESTION_BANK['20.8'],
  208: TAB4_SQL_QUESTION_BANK['20.8'],
  109: TAB4_SQL_QUESTION_BANK['20.9'],
  209: TAB4_SQL_QUESTION_BANK['20.9'],
  110: TAB4_SQL_QUESTION_BANK['21.1'],
  211: TAB4_SQL_QUESTION_BANK['21.1'],
  111: TAB4_SQL_QUESTION_BANK['21.2'],
  212: TAB4_SQL_QUESTION_BANK['21.2'],
  112: TAB4_SQL_QUESTION_BANK['21.3'],
  213: TAB4_SQL_QUESTION_BANK['21.3'],
  113: TAB4_SQL_QUESTION_BANK['21.4'],
  214: TAB4_SQL_QUESTION_BANK['21.4'],
  114: TAB4_SQL_QUESTION_BANK['21.5'],
  215: TAB4_SQL_QUESTION_BANK['21.5'],
  115: TAB4_SQL_QUESTION_BANK['21.6'],
  216: TAB4_SQL_QUESTION_BANK['21.6'],
  116: TAB4_SQL_QUESTION_BANK['21.7'],
  217: TAB4_SQL_QUESTION_BANK['21.7'],
  117: TAB4_SQL_QUESTION_BANK['22.1'],
  221: TAB4_SQL_QUESTION_BANK['22.1'],
  118: TAB4_SQL_QUESTION_BANK['22.2'],
  222: TAB4_SQL_QUESTION_BANK['22.2'],
  119: TAB4_SQL_QUESTION_BANK['22.3'],
  223: TAB4_SQL_QUESTION_BANK['22.3'],
  120: TAB4_SQL_QUESTION_BANK['22.4'],
  224: TAB4_SQL_QUESTION_BANK['22.4'],
  121: TAB4_SQL_QUESTION_BANK['22.5'],
  225: TAB4_SQL_QUESTION_BANK['22.5'],
  122: TAB4_SQL_QUESTION_BANK['22.6'],
  226: TAB4_SQL_QUESTION_BANK['22.6'],
  123: TAB4_SQL_QUESTION_BANK['22.7'],
  227: TAB4_SQL_QUESTION_BANK['22.7'],
  124: TAB4_SQL_QUESTION_BANK['22.8'],
  228: TAB4_SQL_QUESTION_BANK['22.8'],
  125: TAB4_SQL_QUESTION_BANK['22.9'],
  229: TAB4_SQL_QUESTION_BANK['22.9'],
  126: TAB4_SQL_QUESTION_BANK['22.10'],
  2210: TAB4_SQL_QUESTION_BANK['22.10'],
};
