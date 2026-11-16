export interface TopicItem {
  id: string;
  topicNum: number;
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
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "Data Analytics Foundations",
    "shortTitle": "Foundations",
    "subtitle": "Build a strong foundation in data analytics, business thinking and data quality.",
    "iconName": "chart",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Understanding Data Analytics",
        "subtitle": "Core industry concepts and practical exercises for Understanding Data Analytics.",
        "topics": [
          {
            "id": "t-1",
            "topicNum": 1,
            "title": "What Is Data Analytics?",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "in-progress"
          },
          {
            "id": "t-2",
            "topicNum": 2,
            "title": "Why Businesses Need Data Analytics",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-3",
            "topicNum": 3,
            "title": "Real-Life Examples of Data Analytics",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-4",
            "topicNum": 4,
            "title": "Data vs Information vs Insight",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-5",
            "topicNum": 5,
            "title": "The Role of Data in Decision-Making",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Data Analyst Essentials",
        "subtitle": "Core industry concepts and practical exercises for Data Analyst Essentials.",
        "topics": [
          {
            "id": "t-6",
            "topicNum": 1,
            "title": "Data Analyst Roles and Responsibilities",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-7",
            "topicNum": 2,
            "title": "Data Analyst vs Data Scientist vs Data Engineer",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-8",
            "topicNum": 3,
            "title": "Types of Data Analytics",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-9",
            "topicNum": 4,
            "title": "Understanding Data Types, Sources and Quality",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-10",
            "topicNum": 5,
            "title": "Data Analytics Workflow: From Question to Action",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-2",
    "tabNum": 2,
    "title": "Python with Data Analytics",
    "shortTitle": "Python",
    "subtitle": "From programming fundamentals to vectorized analysis and charting with Pandas & NumPy.",
    "iconName": "python",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: Introduction to Programming and Python",
        "subtitle": "Core industry concepts and practical exercises for Introduction to Programming and Python.",
        "topics": [
          {
            "id": "t-11",
            "topicNum": 1,
            "title": "What Is Programming?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-12",
            "topicNum": 2,
            "title": "How Computers Follow Instructions",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-13",
            "topicNum": 3,
            "title": "What Is Python and Why Use It?",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-14",
            "topicNum": 4,
            "title": "Python in Data Analytics and Real Life",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-15",
            "topicNum": 5,
            "title": "Setting Up Python and Your Coding Environment",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-16",
            "topicNum": 6,
            "title": "Writing and Running Your First Python Program",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: Python Syntax and Core Basics",
        "subtitle": "Core industry concepts and practical exercises for Python Syntax and Core Basics.",
        "topics": [
          {
            "id": "t-17",
            "topicNum": 1,
            "title": "Python Syntax, Indentation and Comments",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-18",
            "topicNum": 2,
            "title": "print() and Displaying Output",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-19",
            "topicNum": 3,
            "title": "Variables and Storing Information",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-20",
            "topicNum": 4,
            "title": "Python Data Types and type()",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-21",
            "topicNum": 5,
            "title": "Type Conversion",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-22",
            "topicNum": 6,
            "title": "input() and User Input",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-23",
            "topicNum": 7,
            "title": "Operators and Expressions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: Conditions, Loops and Problem-Solving",
          "subtitle": "Master decision-making, repetitive loops, error handling and practical real-life analytics projects.",
          "topics": [
            {
              "id": "t-24",
              "topicNum": 1,
              "title": "Comparison and Logical Operators",
              "duration": "10 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-25",
              "topicNum": 2,
              "title": "if Statements and Decision-Making",
              "duration": "9 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-26",
              "topicNum": 3,
              "title": "if-else and elif Statements",
              "duration": "12 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-27",
              "topicNum": 4,
              "title": "Nested Conditions",
              "duration": "8 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-28",
              "topicNum": 5,
              "title": "for Loops and range()",
              "duration": "14 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-29",
              "topicNum": 6,
              "title": "while Loops",
              "duration": "10 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-30",
              "topicNum": 7,
              "title": "break, continue and pass",
              "duration": "9 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-31",
              "topicNum": 8,
              "title": "Common Python Errors and Debugging",
              "duration": "12 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-32",
              "topicNum": 9,
              "title": "Practical Problem-Solving with Conditions and Loops",
              "duration": "18 min",
              "type": "video",
              "status": "completed"
            }
          ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: Python Collections and Strings",
          "subtitle": "Master strings, lists, tuples, sets, dictionaries, nested records, and data cleaning pipelines.",
          "topics": [
            {
              "id": "t-33",
              "topicNum": 1,
              "title": "Strings, Indexing and Slicing",
              "duration": "11 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-34",
              "topicNum": 2,
              "title": "String Methods and Text Processing",
              "duration": "13 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-35",
              "topicNum": 3,
              "title": "Lists, Indexing and Slicing",
              "duration": "10 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-36",
              "topicNum": 4,
              "title": "List Methods and Operations",
              "duration": "12 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-37",
              "topicNum": 5,
              "title": "Tuples and Sets",
              "duration": "11 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-38",
              "topicNum": 6,
              "title": "Dictionaries and Key-Value Pairs",
              "duration": "14 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-39",
              "topicNum": 7,
              "title": "Looping Through Collections",
              "duration": "12 min",
              "type": "video",
              "status": "completed"
            },
            {
              "id": "t-40",
              "topicNum": 8,
              "title": "Nested Collections and Real-Life Data",
              "duration": "18 min",
              "type": "video",
              "status": "completed"
            }
          ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: Functions, Modules and Files",
        "subtitle": "Core industry concepts and practical exercises for Functions, Modules, File I/O, CSV Processing and Exception Handling.",
        "topics": [
          {
            "id": "t-41",
            "topicNum": 1,
            "title": "Introduction to Functions",
            "duration": "12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-42",
            "topicNum": 2,
            "title": "Function Parameters and Return Values",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-43",
            "topicNum": 3,
            "title": "Default Arguments and Keyword Arguments",
            "duration": "13 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-44",
            "topicNum": 4,
            "title": "Variable Scope and Built-in Functions",
            "duration": "15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-45",
            "topicNum": 5,
            "title": "Python Modules and Imports",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-46",
            "topicNum": 6,
            "title": "Working with Dates and Time",
            "duration": "16 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-47",
            "topicNum": 7,
            "title": "Reading and Writing Files and CSV",
            "duration": "18 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-48",
            "topicNum": 8,
            "title": "Exception Handling and Debugging",
            "duration": "16 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-49",
            "topicNum": 9,
            "title": "Writing Reusable Code and Practical Projects",
            "duration": "22 min",
            "type": "video",
            "status": "completed"
          }
        ]
      },
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: NumPy for Numerical Analysis",
        "subtitle": "Core industry concepts and practical exercises for Numerical Python, ndarrays, Vectorization, Broadcasting, Summary Statistics and Retail Analytics Dashboard Logic.",
        "topics": [
          {
            "id": "t-50",
            "topicNum": 1,
            "title": "What Is NumPy?",
            "duration": "12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-51",
            "topicNum": 2,
            "title": "Creating NumPy Arrays",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-52",
            "topicNum": 3,
            "title": "Array Shapes and Dimensions",
            "duration": "13 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-53",
            "topicNum": 4,
            "title": "Indexing and Slicing Arrays",
            "duration": "15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-54",
            "topicNum": 5,
            "title": "Vectorized Operations and Broadcasting",
            "duration": "16 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-55",
            "topicNum": 6,
            "title": "Aggregation and Summary Statistics",
            "duration": "15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-56",
            "topicNum": 7,
            "title": "Boolean Masks and Filtering",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-57",
            "topicNum": 8,
            "title": "Reshaping, Combining Arrays & Sales Analytics Dashboard",
            "duration": "24 min",
            "type": "video",
            "status": "completed"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Pandas for Data Analysis",
        "subtitle": "Core industry concepts and practical exercises for Series, DataFrames, Data Cleaning, Missing Values, Duplicates, GroupBy, Merging and Retail Sales Analytics.",
        "topics": [
          {
            "id": "t-58",
            "topicNum": 1,
            "title": "What Is Pandas?",
            "duration": "10 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-59",
            "topicNum": 2,
            "title": "Series and DataFrames",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-60",
            "topicNum": 3,
            "title": "Reading CSV and Excel Files",
            "duration": "12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-61",
            "topicNum": 4,
            "title": "Inspecting Data with head(), info() and describe()",
            "duration": "15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-62",
            "topicNum": 5,
            "title": "Selecting Columns and Rows (loc & iloc)",
            "duration": "13 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-63",
            "topicNum": 6,
            "title": "Filtering and Sorting DataFrames",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-64",
            "topicNum": 7,
            "title": "Creating and Renaming Columns",
            "duration": "12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-65",
            "topicNum": 8,
            "title": "Handling Missing Values (NaN & None)",
            "duration": "16 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-66",
            "topicNum": 9,
            "title": "Removing Duplicates",
            "duration": "12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-67",
            "topicNum": 10,
            "title": "GroupBy and Aggregation",
            "duration": "16 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-68",
            "topicNum": 11,
            "title": "Merge, Join and Concatenate",
            "duration": "18 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-69",
            "topicNum": 12,
            "title": "Dates and Text in Pandas",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-70",
            "topicNum": 13,
            "title": "Exporting Clean Data & Final Project",
            "duration": "25 min",
            "type": "video",
            "status": "completed"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Python Data Visualization and Analytics",
        "subtitle": "Core industry concepts and practical exercises for Matplotlib, Bar Charts, Line Trends, Histograms, Scatter Plots, EDA, and Retail Performance Analytics.",
        "topics": [
          {
            "id": "t-71",
            "topicNum": 1,
            "title": "Why Data Visualization Matters",
            "duration": "8 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-72",
            "topicNum": 2,
            "title": "Matplotlib Basics",
            "duration": "11 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-73",
            "topicNum": 3,
            "title": "Bar and Column Charts",
            "duration": "7 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-74",
            "topicNum": 4,
            "title": "Line Charts and Trends",
            "duration": "10 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-75",
            "topicNum": 5,
            "title": "Histograms and Distributions",
            "duration": "6 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-76",
            "topicNum": 6,
            "title": "Scatter Plots and Relationships",
            "duration": "9 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-77",
            "topicNum": 7,
            "title": "Labels, Legends and Titles",
            "duration": "5 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-78",
            "topicNum": 8,
            "title": "Choosing the Right Chart",
            "duration": "8 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-79",
            "topicNum": 9,
            "title": "Exploratory Data Analysis with Pandas",
            "duration": "11 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "t-80",
            "topicNum": 10,
            "title": "Python Data Analysis Mini Project",
            "duration": "15 min",
            "type": "video",
            "status": "completed"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Excel for Data Analysis",
    "shortTitle": "Excel",
    "subtitle": "Master modern spreadsheets, complex formulas, PivotTables and Power Query workflows.",
    "iconName": "excel",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Getting Started with Excel",
        "subtitle": "Core industry concepts and practical exercises for Getting Started with Excel.",
        "topics": [
          {
            "id": "t-27",
            "topicNum": 1,
            "title": "What Is a Spreadsheet and Why Analysts Use Excel",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-28",
            "topicNum": 2,
            "title": "Excel Interface: Ribbon, Workbook, Worksheet and Cells",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-29",
            "topicNum": 3,
            "title": "Rows, Columns, Ranges and Cell Addresses",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-30",
            "topicNum": 4,
            "title": "Entering and Editing Data",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-31",
            "topicNum": 5,
            "title": "Saving, Naming and Organizing Workbooks",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-32",
            "topicNum": 6,
            "title": "Working with Excel Tables",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Data Preparation in Excel",
        "subtitle": "Core industry concepts and practical exercises for Data Preparation in Excel.",
        "topics": [
          {
            "id": "t-33",
            "topicNum": 1,
            "title": "Text, Number, Date and Percentage Formats",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-34",
            "topicNum": 2,
            "title": "Sorting Data Correctly",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-35",
            "topicNum": 3,
            "title": "Filtering Rows and Using Search",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-36",
            "topicNum": 4,
            "title": "Find and Replace",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-37",
            "topicNum": 5,
            "title": "Remove Duplicates",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-38",
            "topicNum": 6,
            "title": "Text to Columns",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-39",
            "topicNum": 7,
            "title": "Flash Fill",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-40",
            "topicNum": 8,
            "title": "Data Validation and Drop-Down Lists",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-41",
            "topicNum": 9,
            "title": "Cleaning Spaces and Inconsistent Values",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Formulas and Core Functions",
        "subtitle": "Core industry concepts and practical exercises for Formulas and Core Functions.",
        "topics": [
          {
            "id": "t-42",
            "topicNum": 1,
            "title": "Formula Basics and Order of Operations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-43",
            "topicNum": 2,
            "title": "Relative, Absolute and Mixed Cell References",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-44",
            "topicNum": 3,
            "title": "SUM, AVERAGE, MIN and MAX",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-45",
            "topicNum": 4,
            "title": "COUNT, COUNTA and COUNTBLANK",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-46",
            "topicNum": 5,
            "title": "IF and Nested IF",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-47",
            "topicNum": 6,
            "title": "AND, OR and NOT",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-48",
            "topicNum": 7,
            "title": "SUMIF and COUNTIF",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-49",
            "topicNum": 8,
            "title": "SUMIFS and COUNTIFS",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-50",
            "topicNum": 9,
            "title": "IFERROR and Error Handling",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Text, Date and Lookup Functions",
        "subtitle": "Core industry concepts and practical exercises for Text, Date and Lookup Functions.",
        "topics": [
          {
            "id": "t-51",
            "topicNum": 1,
            "title": "LEFT, RIGHT, MID and LEN",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-52",
            "topicNum": 2,
            "title": "TRIM, CLEAN, UPPER, LOWER and PROPER",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-53",
            "topicNum": 3,
            "title": "CONCAT and TEXTJOIN",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-54",
            "topicNum": 4,
            "title": "TODAY, NOW, DATE and YEAR",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-55",
            "topicNum": 5,
            "title": "MONTH, DAY and Date Calculations",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-56",
            "topicNum": 6,
            "title": "XLOOKUP",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-57",
            "topicNum": 7,
            "title": "VLOOKUP and HLOOKUP Concepts",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-58",
            "topicNum": 8,
            "title": "INDEX and MATCH",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-59",
            "topicNum": 9,
            "title": "Choosing and Troubleshooting Lookup Functions",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: Analysis and Reporting with Excel",
        "subtitle": "Core industry concepts and practical exercises for Analysis and Reporting with Excel.",
        "topics": [
          {
            "id": "t-60",
            "topicNum": 1,
            "title": "Conditional Formatting",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-61",
            "topicNum": 2,
            "title": "Create and Format PivotTables",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-62",
            "topicNum": 3,
            "title": "Group and Summarize Data",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-63",
            "topicNum": 4,
            "title": "PivotCharts",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-64",
            "topicNum": 5,
            "title": "Slicers and Report Filters",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-65",
            "topicNum": 6,
            "title": "Build a KPI Summary Report",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-66",
            "topicNum": 7,
            "title": "Excel Charts: Column, Bar, Line and Pie",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-67",
            "topicNum": 8,
            "title": "Dashboard Layout and Formatting",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-68",
            "topicNum": 9,
            "title": "Excel Analysis Mini Project",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: Power Query and Advanced Excel",
        "subtitle": "Core industry concepts and practical exercises for Power Query and Advanced Excel.",
        "topics": [
          {
            "id": "t-69",
            "topicNum": 1,
            "title": "What Is Power Query?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-70",
            "topicNum": 2,
            "title": "Import Data from CSV, Excel and Folders",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-71",
            "topicNum": 3,
            "title": "Transform and Clean Data in Power Query",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-72",
            "topicNum": 4,
            "title": "Change Data Types and Split Columns",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-73",
            "topicNum": 5,
            "title": "Merge Queries and Append Queries",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-74",
            "topicNum": 6,
            "title": "Refreshable Data Workflows",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-75",
            "topicNum": 7,
            "title": "Introduction to Dynamic Array Functions",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-76",
            "topicNum": 8,
            "title": "Audit Formulas and Validate Results",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "SQL for Analytics",
    "shortTitle": "SQL",
    "subtitle": "Query production databases, write multi-table joins, subqueries, and window functions.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: Databases and SQL Fundamentals",
        "subtitle": "Core industry concepts and practical exercises for Databases and SQL Fundamentals.",
        "topics": [
          {
            "id": "t-77",
            "topicNum": 1,
            "title": "What Is a Database?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-78",
            "topicNum": 2,
            "title": "Tables, Rows, Columns and Primary Keys",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-79",
            "topicNum": 3,
            "title": "What Is SQL and Why Analysts Use It?",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-80",
            "topicNum": 4,
            "title": "Understanding a Relational Database",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-81",
            "topicNum": 5,
            "title": "Connecting to PostgreSQL with a SQL Client",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-82",
            "topicNum": 6,
            "title": "SELECT and Choosing Columns",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-83",
            "topicNum": 7,
            "title": "DISTINCT and Unique Values",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-84",
            "topicNum": 8,
            "title": "Aliases with AS",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: Filtering, Sorting and Calculations",
        "subtitle": "Core industry concepts and practical exercises for Filtering, Sorting and Calculations.",
        "topics": [
          {
            "id": "t-85",
            "topicNum": 1,
            "title": "WHERE Clause",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-86",
            "topicNum": 2,
            "title": "Comparison Operators",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-87",
            "topicNum": 3,
            "title": "AND, OR and NOT",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-88",
            "topicNum": 4,
            "title": "IN, BETWEEN and LIKE",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-89",
            "topicNum": 5,
            "title": "ORDER BY and Sorting Results",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-90",
            "topicNum": 6,
            "title": "LIMIT and TOP Concepts",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-91",
            "topicNum": 7,
            "title": "Working with NULL Values",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-92",
            "topicNum": 8,
            "title": "COALESCE and NULL Handling",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-93",
            "topicNum": 9,
            "title": "Arithmetic Expressions in SQL",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Aggregate Functions and Grouping",
        "subtitle": "Core industry concepts and practical exercises for Aggregate Functions and Grouping.",
        "topics": [
          {
            "id": "t-94",
            "topicNum": 1,
            "title": "COUNT, SUM, AVG, MIN and MAX",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-95",
            "topicNum": 2,
            "title": "GROUP BY",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-96",
            "topicNum": 3,
            "title": "HAVING vs WHERE",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-97",
            "topicNum": 4,
            "title": "Aggregate Multiple Categories",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-98",
            "topicNum": 5,
            "title": "Conditional Aggregation",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-99",
            "topicNum": 6,
            "title": "CASE WHEN Expressions",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-100",
            "topicNum": 7,
            "title": "Date Grouping and Period Analysis",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Joins and Relationships",
        "subtitle": "Core industry concepts and practical exercises for Joins and Relationships.",
        "topics": [
          {
            "id": "t-101",
            "topicNum": 1,
            "title": "Understanding Primary and Foreign Keys",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-102",
            "topicNum": 2,
            "title": "INNER JOIN",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-103",
            "topicNum": 3,
            "title": "LEFT JOIN",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-104",
            "topicNum": 4,
            "title": "RIGHT JOIN",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-105",
            "topicNum": 5,
            "title": "FULL OUTER JOIN",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-106",
            "topicNum": 6,
            "title": "Joining More Than Two Tables",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-107",
            "topicNum": 7,
            "title": "Self Join",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-108",
            "topicNum": 8,
            "title": "Cross Join",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-109",
            "topicNum": 9,
            "title": "Avoiding Duplicate Rows After Joins",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: Subqueries and Set Operations",
        "subtitle": "Core industry concepts and practical exercises for Subqueries and Set Operations.",
        "topics": [
          {
            "id": "t-110",
            "topicNum": 1,
            "title": "What Is a Subquery?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-111",
            "topicNum": 2,
            "title": "Scalar and Multi-Row Subqueries",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-112",
            "topicNum": 3,
            "title": "IN and EXISTS",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-113",
            "topicNum": 4,
            "title": "NOT EXISTS",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-114",
            "topicNum": 5,
            "title": "UNION and UNION ALL",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-115",
            "topicNum": 6,
            "title": "INTERSECT and EXCEPT",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-116",
            "topicNum": 7,
            "title": "Subqueries vs Joins",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Advanced SQL for Analysts",
        "subtitle": "Core industry concepts and practical exercises for Advanced SQL for Analysts.",
        "topics": [
          {
            "id": "t-117",
            "topicNum": 1,
            "title": "Common Table Expressions (CTEs)",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-118",
            "topicNum": 2,
            "title": "Multiple and Recursive CTE Concepts",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-119",
            "topicNum": 3,
            "title": "Window Functions Overview",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-120",
            "topicNum": 4,
            "title": "ROW_NUMBER, RANK and DENSE_RANK",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-121",
            "topicNum": 5,
            "title": "PARTITION BY and ORDER BY in Windows",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-122",
            "topicNum": 6,
            "title": "LAG and LEAD",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-123",
            "topicNum": 7,
            "title": "Running Totals and Moving Averages",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-124",
            "topicNum": 8,
            "title": "Date and Text Functions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-125",
            "topicNum": 9,
            "title": "Query Validation and Performance Basics",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-126",
            "topicNum": 10,
            "title": "SQL Analytics Project",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "Power BI and Dashboards",
    "shortTitle": "Power BI",
    "subtitle": "Build dynamic enterprise dashboards, Star Schema data models, and advanced DAX measures.",
    "iconName": "powerbi",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: Getting Started with Power BI",
        "subtitle": "Core industry concepts and practical exercises for Getting Started with Power BI.",
        "topics": [
          {
            "id": "t-207",
            "topicNum": 1,
            "title": "What Is Power BI?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-208",
            "topicNum": 2,
            "title": "Power BI Desktop, Service and Mobile",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-209",
            "topicNum": 3,
            "title": "Installing and Exploring Power BI Desktop",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-210",
            "topicNum": 4,
            "title": "Connecting to Excel and CSV",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-211",
            "topicNum": 5,
            "title": "Import Mode and DirectQuery Overview",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-212",
            "topicNum": 6,
            "title": "Navigating Report, Data and Model Views",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: Power Query and Data Transformation",
        "subtitle": "Core industry concepts and practical exercises for Power Query and Data Transformation.",
        "topics": [
          {
            "id": "t-213",
            "topicNum": 1,
            "title": "Power Query Editor Interface",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-214",
            "topicNum": 2,
            "title": "Change Data Types",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-215",
            "topicNum": 3,
            "title": "Remove Rows and Columns",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-216",
            "topicNum": 4,
            "title": "Replace Values and Handle Nulls",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-217",
            "topicNum": 5,
            "title": "Split and Merge Columns",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-218",
            "topicNum": 6,
            "title": "Pivot and Unpivot Columns",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-219",
            "topicNum": 7,
            "title": "Append Queries",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-220",
            "topicNum": 8,
            "title": "Merge Queries",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-221",
            "topicNum": 9,
            "title": "Applied Steps and Refresh",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: Data Modeling",
        "subtitle": "Core industry concepts and practical exercises for Data Modeling.",
        "topics": [
          {
            "id": "t-222",
            "topicNum": 1,
            "title": "Why Data Models Matter",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-223",
            "topicNum": 2,
            "title": "Fact Tables and Dimension Tables",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-224",
            "topicNum": 3,
            "title": "Relationships and Cardinality",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-225",
            "topicNum": 4,
            "title": "One-to-Many and Many-to-One Relationships",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-226",
            "topicNum": 5,
            "title": "Star Schema Design",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-227",
            "topicNum": 6,
            "title": "Date Tables",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-228",
            "topicNum": 7,
            "title": "Model Validation and Common Relationship Errors",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: DAX and Measures",
        "subtitle": "Core industry concepts and practical exercises for DAX and Measures.",
        "topics": [
          {
            "id": "t-229",
            "topicNum": 1,
            "title": "What Is DAX?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-230",
            "topicNum": 2,
            "title": "Calculated Columns vs Measures",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-231",
            "topicNum": 3,
            "title": "SUM, COUNTROWS and DISTINCTCOUNT",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-232",
            "topicNum": 4,
            "title": "CALCULATE Basics",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-233",
            "topicNum": 5,
            "title": "Filter Context",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-234",
            "topicNum": 6,
            "title": "Row Context Overview",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-235",
            "topicNum": 7,
            "title": "DIVIDE and Safe Calculations",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-236",
            "topicNum": 8,
            "title": "IF and SWITCH in DAX",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-237",
            "topicNum": 9,
            "title": "Time Intelligence Fundamentals",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-238",
            "topicNum": 10,
            "title": "Validate DAX Results",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Module 27: Visuals and Dashboard Design",
        "subtitle": "Core industry concepts and practical exercises for Visuals and Dashboard Design.",
        "topics": [
          {
            "id": "t-239",
            "topicNum": 1,
            "title": "Choosing KPIs and Visuals",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-240",
            "topicNum": 2,
            "title": "Cards, Tables and Matrices",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-241",
            "topicNum": 3,
            "title": "Bar, Line and Combo Charts",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-242",
            "topicNum": 4,
            "title": "Slicers and Filters",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-243",
            "topicNum": 5,
            "title": "Drill-Down and Drill-Through",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-244",
            "topicNum": 6,
            "title": "Tooltips and Bookmarks",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-245",
            "topicNum": 7,
            "title": "Layout, Color and Accessibility",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-246",
            "topicNum": 8,
            "title": "Designing an Executive Dashboard",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Module 28: Publishing, Security and Projects",
        "subtitle": "Core industry concepts and practical exercises for Publishing, Security and Projects.",
        "topics": [
          {
            "id": "t-247",
            "topicNum": 1,
            "title": "Publish Reports to Power BI Service",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-248",
            "topicNum": 2,
            "title": "Workspaces and Sharing Permissions",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-249",
            "topicNum": 3,
            "title": "Scheduled Refresh and Credentials",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-250",
            "topicNum": 4,
            "title": "Row-Level Security Overview",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-251",
            "topicNum": 5,
            "title": "Performance and Usability Checks",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-252",
            "topicNum": 6,
            "title": "Power BI Sales Dashboard Project",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-6",
    "tabNum": 6,
    "title": "Generative AI for Analysts",
    "shortTitle": "GenAI",
    "subtitle": "Use LLMs, prompt engineering, and AI-assisted workflows to accelerate analysis responsibly.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Module 29: Generative AI Foundations",
        "subtitle": "Core industry concepts and practical exercises for Generative AI Foundations.",
        "topics": [
          {
            "id": "t-253",
            "topicNum": 1,
            "title": "What Is Artificial Intelligence?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-254",
            "topicNum": 2,
            "title": "AI vs Machine Learning vs Generative AI",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-255",
            "topicNum": 3,
            "title": "What Is a Large Language Model?",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-256",
            "topicNum": 4,
            "title": "How AI Generates Text and Code",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-257",
            "topicNum": 5,
            "title": "Common GenAI Tools for Analysts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-258",
            "topicNum": 6,
            "title": "Strengths and Limitations of GenAI",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-30",
        "chapterNum": 30,
        "title": "Module 30: Responsible and Safe AI Use",
        "subtitle": "Core industry concepts and practical exercises for Responsible and Safe AI Use.",
        "topics": [
          {
            "id": "t-259",
            "topicNum": 1,
            "title": "Hallucinations and Why They Happen",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-260",
            "topicNum": 2,
            "title": "Fact-Checking AI Outputs",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-261",
            "topicNum": 3,
            "title": "Data Privacy and Confidential Information",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-262",
            "topicNum": 4,
            "title": "Bias, Fairness and Responsible Use",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-263",
            "topicNum": 5,
            "title": "Human Review and Accountability",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-264",
            "topicNum": 6,
            "title": "Using AI Within Workplace Policies",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-31",
        "chapterNum": 31,
        "title": "Module 31: Prompt Engineering Basics",
        "subtitle": "Core industry concepts and practical exercises for Prompt Engineering Basics.",
        "topics": [
          {
            "id": "t-265",
            "topicNum": 1,
            "title": "What Is a Prompt?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-266",
            "topicNum": 2,
            "title": "Writing Clear and Specific Prompts",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-267",
            "topicNum": 3,
            "title": "Adding Context and Constraints",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-268",
            "topicNum": 4,
            "title": "Specifying Output Formats",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-269",
            "topicNum": 5,
            "title": "Few-Shot Examples",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-270",
            "topicNum": 6,
            "title": "Iterating and Improving Prompts",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-271",
            "topicNum": 7,
            "title": "Evaluating Prompt Quality",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-32",
        "chapterNum": 32,
        "title": "Module 32: AI for Excel, SQL and Python",
        "subtitle": "Core industry concepts and practical exercises for AI for Excel, SQL and Python.",
        "topics": [
          {
            "id": "t-272",
            "topicNum": 1,
            "title": "Ask AI to Explain Excel Formulas",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-273",
            "topicNum": 2,
            "title": "Generate and Validate Excel Formulas",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-274",
            "topicNum": 3,
            "title": "Ask AI to Draft SQL Queries",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-275",
            "topicNum": 4,
            "title": "Debug and Explain SQL",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-276",
            "topicNum": 5,
            "title": "Generate Python Code Safely",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-277",
            "topicNum": 6,
            "title": "Debug Python with AI",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-278",
            "topicNum": 7,
            "title": "Test AI-Generated Code with Sample Data",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-33",
        "chapterNum": 33,
        "title": "Module 33: AI-Assisted Analytics Workflows",
        "subtitle": "Core industry concepts and practical exercises for AI-Assisted Analytics Workflows.",
        "topics": [
          {
            "id": "t-279",
            "topicNum": 1,
            "title": "Use AI to Draft an Analysis Plan",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-280",
            "topicNum": 2,
            "title": "Summarize Verified Tables and Trends",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-281",
            "topicNum": 3,
            "title": "Draft Insight Narratives",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-282",
            "topicNum": 4,
            "title": "Generate Documentation and Data Dictionaries",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-283",
            "topicNum": 5,
            "title": "Create Executive Report Summaries",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-284",
            "topicNum": 6,
            "title": "Verify Claims Against Data",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-285",
            "topicNum": 7,
            "title": "Build a Repeatable Human-in-the-Loop Workflow",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Business Insights and Communication",
    "shortTitle": "Insights",
    "subtitle": "Translate numbers into high-impact executive stories, statistics, and presentations.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-34",
        "chapterNum": 34,
        "title": "Module 34: Exploratory Data Analysis",
        "subtitle": "Core industry concepts and practical exercises for Exploratory Data Analysis.",
        "topics": [
          {
            "id": "t-286",
            "topicNum": 1,
            "title": "Define Questions Before Analysis",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-287",
            "topicNum": 2,
            "title": "Inspect Data Shape and Distributions",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-288",
            "topicNum": 3,
            "title": "Summary Statistics and Percentiles",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-289",
            "topicNum": 4,
            "title": "Analyze Trends Over Time",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-290",
            "topicNum": 5,
            "title": "Compare Segments and Cohorts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-291",
            "topicNum": 6,
            "title": "Identify Outliers",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-292",
            "topicNum": 7,
            "title": "Explore Relationships Between Variables",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-293",
            "topicNum": 8,
            "title": "Avoid Common Analytical Errors",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-35",
        "chapterNum": 35,
        "title": "Module 35: Statistics for Data Analysts",
        "subtitle": "Core industry concepts and practical exercises for Statistics for Data Analysts.",
        "topics": [
          {
            "id": "t-302",
            "topicNum": 1,
            "title": "Population and Sample",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-303",
            "topicNum": 2,
            "title": "Mean, Median and Mode",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-304",
            "topicNum": 3,
            "title": "Range, Variance and Standard Deviation",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-305",
            "topicNum": 4,
            "title": "Percentiles and Quartiles",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-306",
            "topicNum": 5,
            "title": "Sampling Methods and Bias",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-307",
            "topicNum": 6,
            "title": "Probability Basics",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-308",
            "topicNum": 7,
            "title": "Correlation vs Causation",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-309",
            "topicNum": 8,
            "title": "Hypothesis Testing Introduction",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-310",
            "topicNum": 9,
            "title": "Interpreting Statistical Results Carefully",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-36",
        "chapterNum": 36,
        "title": "Module 36: Data Visualization and Storytelling",
        "subtitle": "Core industry concepts and practical exercises for Data Visualization and Storytelling.",
        "topics": [
          {
            "id": "t-294",
            "topicNum": 1,
            "title": "Choose a Chart for the Question",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-295",
            "topicNum": 2,
            "title": "Comparison and Ranking Charts",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-296",
            "topicNum": 3,
            "title": "Trend and Time-Series Charts",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-297",
            "topicNum": 4,
            "title": "Distribution and Relationship Charts",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-298",
            "topicNum": 5,
            "title": "Avoid Misleading Visuals",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-299",
            "topicNum": 6,
            "title": "Structure an Insight Story",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-300",
            "topicNum": 7,
            "title": "Write Executive Summaries",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-301",
            "topicNum": 8,
            "title": "Communicate Limitations and Uncertainty",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-37",
        "chapterNum": 37,
        "title": "Module 37: Business Reporting and Stakeholders",
        "subtitle": "Core industry concepts and practical exercises for Business Reporting and Stakeholders.",
        "topics": [
          {
            "id": "t-311",
            "topicNum": 1,
            "title": "Understand the Audience and Business Goal",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-312",
            "topicNum": 2,
            "title": "Translate Analysis into Business Impact",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-313",
            "topicNum": 3,
            "title": "Write Clear Recommendations",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-314",
            "topicNum": 4,
            "title": "Present Findings in a Meeting",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-315",
            "topicNum": 5,
            "title": "Answer Stakeholder Follow-Up Questions",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-316",
            "topicNum": 6,
            "title": "Document Assumptions and Decisions",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },

  {
    "id": "tab-8",
    "tabNum": 8,
    "title": "Projects and Career Preparation",
    "shortTitle": "Projects",
    "subtitle": "Complete real-world industry capstones, polish portfolio case studies, and crack interviews.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-38",
        "chapterNum": 38,
        "title": "Module 38: Guided Analytics Projects",
        "subtitle": "Core industry concepts and practical exercises for Guided Analytics Projects.",
        "topics": [
          {
            "id": "t-317",
            "topicNum": 1,
            "title": "Retail Sales Analysis with Excel",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-318",
            "topicNum": 2,
            "title": "Customer and Order Analysis with SQL",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-319",
            "topicNum": 3,
            "title": "Exploratory Data Analysis with Python",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-320",
            "topicNum": 4,
            "title": "Power BI Business Dashboard",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-321",
            "topicNum": 5,
            "title": "GenAI-Assisted Analysis with Verification",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-322",
            "topicNum": 6,
            "title": "Combine Tools in One End-to-End Workflow",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-39",
        "chapterNum": 39,
        "title": "Module 39: Portfolio and Case Studies",
        "subtitle": "Core industry concepts and practical exercises for Portfolio and Case Studies.",
        "topics": [
          {
            "id": "t-323",
            "topicNum": 1,
            "title": "Choose a Portfolio Problem",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-324",
            "topicNum": 2,
            "title": "Find and Assess a Dataset",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-325",
            "topicNum": 3,
            "title": "Define KPIs and Success Criteria",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-326",
            "topicNum": 4,
            "title": "Document Cleaning and Analysis Steps",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-327",
            "topicNum": 5,
            "title": "Create Visuals and a Dashboard",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-328",
            "topicNum": 6,
            "title": "Write a Project Case Study",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-329",
            "topicNum": 7,
            "title": "Present Findings and Recommendations",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-40",
        "chapterNum": 40,
        "title": "Module 40: Interview Preparation",
        "subtitle": "Core industry concepts and practical exercises for Interview Preparation.",
        "topics": [
          {
            "id": "t-330",
            "topicNum": 1,
            "title": "Excel Interview Questions and Exercises",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-331",
            "topicNum": 2,
            "title": "SQL Fundamentals and Query Challenges",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-332",
            "topicNum": 3,
            "title": "SQL Joins and Window Function Practice",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-333",
            "topicNum": 4,
            "title": "Python and Pandas Interview Practice",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-334",
            "topicNum": 5,
            "title": "Power BI and DAX Interview Practice",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-335",
            "topicNum": 6,
            "title": "Statistics and Business Case Questions",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-336",
            "topicNum": 7,
            "title": "Behavioral Answers Using STAR",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-337",
            "topicNum": 8,
            "title": "Explain Projects Clearly",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-41",
        "chapterNum": 41,
        "title": "Module 41: Capstone and Career Launch",
        "subtitle": "Core industry concepts and practical exercises for Capstone and Career Launch.",
        "topics": [
          {
            "id": "t-338",
            "topicNum": 1,
            "title": "Choose a Capstone Business Problem",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-339",
            "topicNum": 2,
            "title": "Create a Reproducible Analysis Plan",
            "duration": "Video • 11 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-340",
            "topicNum": 3,
            "title": "Collect, Clean and Validate Data",
            "duration": "Video • 7 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-341",
            "topicNum": 4,
            "title": "Analyze Data with SQL and Python",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-342",
            "topicNum": 5,
            "title": "Build a Power BI Dashboard",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-343",
            "topicNum": 6,
            "title": "Use GenAI Responsibly to Draft Insights",
            "duration": "Video • 9 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-344",
            "topicNum": 7,
            "title": "Present Final Recommendations and Limitations",
            "duration": "Video • 5 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "t-345",
            "topicNum": 8,
            "title": "Prepare a Portfolio Walkthrough",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  }
];

export interface TopicHierarchyLookup {
  tabId: string;
  chapterId: string;
  topicId: string;
  topicNum: number;
}

export function findTabAndChapterForTopic(
  topicIdOrNum: string | number,
  preferredTabId?: string | number
): TopicHierarchyLookup | null {
  if (!topicIdOrNum) return null;
  const rawStr = String(topicIdOrNum).trim();
  const numericPart = parseInt(rawStr.replace(/\D/g, ''), 10);
  const formattedId = rawStr.startsWith('t-') ? rawStr : `t-${numericPart}`;

  // 1. Determine preferred tab (explicit argument or session storage fallback)
  let normTab: string | null = null;
  if (preferredTabId) {
    const pStr = String(preferredTabId).trim();
    normTab = pStr.startsWith('tab-') ? pStr : `tab-${pStr}`;
  } else if (typeof window !== 'undefined') {
    try {
      const stored = sessionStorage.getItem('futureai_active_curriculum_tab');
      if (stored) {
        normTab = stored.startsWith('tab-') ? stored : `tab-${stored}`;
      }
    } catch {}
  }

  // Helper to search within a single tab
  const searchTab = (tab: (typeof DATA_ANALYST_CURRICULUM)[number]): TopicHierarchyLookup | null => {
    for (const chapter of tab.chapters) {
      for (const topic of chapter.topics) {
        if (
          topic.id === formattedId ||
          topic.id === rawStr ||
          (!isNaN(numericPart) && topic.id === `t-${numericPart}`)
        ) {
          return {
            tabId: tab.id,
            chapterId: chapter.id,
            topicId: topic.id,
            topicNum: topic.topicNum,
          };
        }
      }
    }
    return null;
  };

  // 2. If a preferred tab is identified, search it first to avoid cross-tab ID collisions (e.g. Tab 2 Python vs Tab 3 Excel)
  if (normTab) {
    const targetTab = DATA_ANALYST_CURRICULUM.find((t) => t.id === normTab);
    if (targetTab) {
      const match = searchTab(targetTab);
      if (match) return match;
    }
  }

  // 3. Fallback: search all tabs sequentially
  for (const tab of DATA_ANALYST_CURRICULUM) {
    if (normTab && tab.id === normTab) continue; // Already searched
    const match = searchTab(tab);
    if (match) return match;
  }
  return null;
}

