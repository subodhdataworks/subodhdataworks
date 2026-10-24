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
  iconName: string;
  isFree?: boolean;
  chapters: ChapterItem[];
}

export const DATA_SCIENCE_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "Data Science Foundations",
    "shortTitle": "Data Science Foundations",
    "subtitle": "Core data science concepts, real-life lifecycles, and data quality workflows.",
    "iconName": "chart",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Introduction to Data Science",
        "subtitle": "Core industry concepts and practical exercises for Introduction to Data Science.",
        "topics": [
          {
            "id": "ds-t-1",
            "topicNum": 1,
            "title": "What Is Data Science?",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "completed"
          },
          {
            "id": "ds-t-2",
            "topicNum": 2,
            "title": "How Data Science Works in Real Life",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ds-t-3",
            "topicNum": 3,
            "title": "Why Businesses Use Data Science",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ds-t-4",
            "topicNum": 4,
            "title": "Data vs Information vs Insights",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-5",
            "topicNum": 5,
            "title": "Data Science vs Data Analytics",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-6",
            "topicNum": 6,
            "title": "Data Science vs Machine Learning vs AI",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-7",
            "topicNum": 7,
            "title": "Real-World Data Science Applications",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-8",
            "topicNum": 8,
            "title": "The Data Science Lifecycle",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Problem-Solving and Business Understanding",
        "subtitle": "Core industry concepts and practical exercises for Problem-Solving and Business Understanding.",
        "topics": [
          {
            "id": "ds-t-9",
            "topicNum": 1,
            "title": "Identifying a Business Problem",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-10",
            "topicNum": 2,
            "title": "Converting Business Problems into Data Questions",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-11",
            "topicNum": 3,
            "title": "Defining Objectives and Success Metrics",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-12",
            "topicNum": 4,
            "title": "Understanding Features and Targets",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-13",
            "topicNum": 5,
            "title": "Selecting the Right Data for a Problem",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-14",
            "topicNum": 6,
            "title": "Building an Analysis Plan",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-15",
            "topicNum": 7,
            "title": "Common Data Science Mistakes",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: Data Types, Sources and Collection",
        "subtitle": "Core industry concepts and practical exercises for Data Types, Sources and Collection.",
        "topics": [
          {
            "id": "ds-t-16",
            "topicNum": 1,
            "title": "Structured, Semi-Structured and Unstructured Data",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-17",
            "topicNum": 2,
            "title": "Numerical and Categorical Data",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-18",
            "topicNum": 3,
            "title": "Data Sources: Files, Databases and APIs",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-19",
            "topicNum": 4,
            "title": "CSV, Excel, JSON and Parquet Formats",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-20",
            "topicNum": 5,
            "title": "Introduction to Public Datasets",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-21",
            "topicNum": 6,
            "title": "Collecting Data from Different Sources",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-22",
            "topicNum": 7,
            "title": "Understanding Data Schemas",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-23",
            "topicNum": 8,
            "title": "Data Privacy and Responsible Collection",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: Data Quality and Preparation",
        "subtitle": "Core industry concepts and practical exercises for Data Quality and Preparation.",
        "topics": [
          {
            "id": "ds-t-24",
            "topicNum": 1,
            "title": "Understanding Data Quality",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-25",
            "topicNum": 2,
            "title": "Missing Values and Duplicate Records",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-26",
            "topicNum": 3,
            "title": "Inconsistent Values and Data Types",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-27",
            "topicNum": 4,
            "title": "Outliers and Invalid Records",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-28",
            "topicNum": 5,
            "title": "Data Validation Rules",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-29",
            "topicNum": 6,
            "title": "Data Cleaning Workflow",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-30",
            "topicNum": 7,
            "title": "Documenting Data Preparation",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-31",
            "topicNum": 8,
            "title": "Creating a Reusable Cleaning Checklist",
            "duration": "Video • 18 min",
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
    "title": "Python Programming for Data Science",
    "shortTitle": "Python Programming for Data Science",
    "subtitle": "From basic syntax, loops, and data structures to functions, OOP, and Git.",
    "iconName": "python",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: Introduction to Programming and Python",
        "subtitle": "Core industry concepts and practical exercises for Introduction to Programming and Python.",
        "topics": [
          {
            "id": "ds-t-32",
            "topicNum": 1,
            "title": "What Is Programming?",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-33",
            "topicNum": 2,
            "title": "How Do Computers Follow Instructions?",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-34",
            "topicNum": 3,
            "title": "What Is Python?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-35",
            "topicNum": 4,
            "title": "Why Python Is Used in Data Science",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-36",
            "topicNum": 5,
            "title": "Python Applications in Everyday Life",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-37",
            "topicNum": 6,
            "title": "Installing Python",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-38",
            "topicNum": 7,
            "title": "Setting Up VS Code and Jupyter Notebook",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-39",
            "topicNum": 8,
            "title": "Understanding the Python Editor",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-40",
            "topicNum": 9,
            "title": "Writing and Running Your First Python Program",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-41",
            "topicNum": 10,
            "title": "Understanding Program Output",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: Python Syntax and Fundamentals",
        "subtitle": "Core industry concepts and practical exercises for Python Syntax and Fundamentals.",
        "topics": [
          {
            "id": "ds-t-42",
            "topicNum": 1,
            "title": "Python Syntax and Indentation",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-43",
            "topicNum": 2,
            "title": "Comments and Readable Code",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-44",
            "topicNum": 3,
            "title": "The print() Function",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-45",
            "topicNum": 4,
            "title": "Variables and Storing Information",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-46",
            "topicNum": 5,
            "title": "Naming Variables Correctly",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-47",
            "topicNum": 6,
            "title": "Strings, Integers and Floats",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-48",
            "topicNum": 7,
            "title": "Boolean Data Type",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-49",
            "topicNum": 8,
            "title": "Checking Data Types with type()",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-50",
            "topicNum": 9,
            "title": "Type Conversion",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-51",
            "topicNum": 10,
            "title": "User Input with input()",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-52",
            "topicNum": 11,
            "title": "Common Syntax Errors",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-53",
            "topicNum": 12,
            "title": "Debugging Your First Programs",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: Operators and Conditional Logic",
        "subtitle": "Core industry concepts and practical exercises for Operators and Conditional Logic.",
        "topics": [
          {
            "id": "ds-t-54",
            "topicNum": 1,
            "title": "Arithmetic Operators",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-55",
            "topicNum": 2,
            "title": "Comparison Operators",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-56",
            "topicNum": 3,
            "title": "Assignment Operators",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-57",
            "topicNum": 4,
            "title": "Logical Operators",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-58",
            "topicNum": 5,
            "title": "Membership and Identity Operators",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-59",
            "topicNum": 6,
            "title": "Operator Precedence",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-60",
            "topicNum": 7,
            "title": "Introduction to Conditional Statements",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-61",
            "topicNum": 8,
            "title": "The if Statement",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-62",
            "topicNum": 9,
            "title": "The if-else Statement",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-63",
            "topicNum": 10,
            "title": "The elif Statement",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-64",
            "topicNum": 11,
            "title": "Nested Conditions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-65",
            "topicNum": 12,
            "title": "Practical Decision-Making Programs",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: Loops and Problem-Solving",
        "subtitle": "Core industry concepts and practical exercises for Loops and Problem-Solving.",
        "topics": [
          {
            "id": "ds-t-66",
            "topicNum": 1,
            "title": "Why Loops Are Needed",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-67",
            "topicNum": 2,
            "title": "The for Loop",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-68",
            "topicNum": 3,
            "title": "The while Loop",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-69",
            "topicNum": 4,
            "title": "The range() Function",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-70",
            "topicNum": 5,
            "title": "Looping Through Strings",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-71",
            "topicNum": 6,
            "title": "Looping Through Lists",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-72",
            "topicNum": 7,
            "title": "Nested Loops",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-73",
            "topicNum": 8,
            "title": "break, continue and pass",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-74",
            "topicNum": 9,
            "title": "Avoiding Infinite Loops",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-75",
            "topicNum": 10,
            "title": "Solving Problems with Loops",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Python Data Structures",
        "subtitle": "Core industry concepts and practical exercises for Python Data Structures.",
        "topics": [
          {
            "id": "ds-t-76",
            "topicNum": 1,
            "title": "Introduction to Data Structures",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-77",
            "topicNum": 2,
            "title": "Lists and List Indexing",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-78",
            "topicNum": 3,
            "title": "List Slicing and Methods",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-79",
            "topicNum": 4,
            "title": "Tuples and Tuple Operations",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-80",
            "topicNum": 5,
            "title": "Sets and Set Operations",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-81",
            "topicNum": 6,
            "title": "Dictionaries and Key-Value Pairs",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-82",
            "topicNum": 7,
            "title": "Dictionary Methods",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-83",
            "topicNum": 8,
            "title": "Strings and String Indexing",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-84",
            "topicNum": 9,
            "title": "String Slicing and Methods",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-85",
            "topicNum": 10,
            "title": "Nested Lists and Dictionaries",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-86",
            "topicNum": 11,
            "title": "Choosing the Right Data Structure",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-87",
            "topicNum": 12,
            "title": "Practical Data Structure Exercises",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Functions, Modules and Error Handling",
        "subtitle": "Core industry concepts and practical exercises for Functions, Modules and Error Handling.",
        "topics": [
          {
            "id": "ds-t-88",
            "topicNum": 1,
            "title": "Why Functions Are Useful",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-89",
            "topicNum": 2,
            "title": "Defining and Calling Functions",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-90",
            "topicNum": 3,
            "title": "Parameters and Arguments",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-91",
            "topicNum": 4,
            "title": "Return Values",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-92",
            "topicNum": 5,
            "title": "Default and Keyword Arguments",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-93",
            "topicNum": 6,
            "title": "Variable Scope",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-94",
            "topicNum": 7,
            "title": "Lambda Functions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-95",
            "topicNum": 8,
            "title": "Built-in Functions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-96",
            "topicNum": 9,
            "title": "Importing Python Modules",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-97",
            "topicNum": 10,
            "title": "Working with Python Packages",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-98",
            "topicNum": 11,
            "title": "Exceptions and Error Messages",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-99",
            "topicNum": 12,
            "title": "try, except, else and finally",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-100",
            "topicNum": 13,
            "title": "File Reading and Writing",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-101",
            "topicNum": 14,
            "title": "Writing Reusable Python Code",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Object-Oriented Programming and Development Tools",
        "subtitle": "Core industry concepts and practical exercises for Object-Oriented Programming and Development Tools.",
        "topics": [
          {
            "id": "ds-t-102",
            "topicNum": 1,
            "title": "Introduction to Object-Oriented Programming",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-103",
            "topicNum": 2,
            "title": "Classes and Objects",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-104",
            "topicNum": 3,
            "title": "Attributes and Methods",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-105",
            "topicNum": 4,
            "title": "Constructors and __init__()",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-106",
            "topicNum": 5,
            "title": "Inheritance Basics",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-107",
            "topicNum": 6,
            "title": "Organizing Code into Modules",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-108",
            "topicNum": 7,
            "title": "Virtual Environments and Package Installation",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-109",
            "topicNum": 8,
            "title": "Introduction to Git and GitHub",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-110",
            "topicNum": 9,
            "title": "Debugging and Testing Python Programs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-111",
            "topicNum": 10,
            "title": "Python Programming Mini Project",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Mathematics, Statistics and Data Preparation",
    "shortTitle": "Mathematics, Statistics and Data Preparation",
    "subtitle": "Linear algebra, calculus intuition, statistical inference, and feature engineering.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Mathematics for Data Science",
        "subtitle": "Core industry concepts and practical exercises for Mathematics for Data Science.",
        "topics": [
          {
            "id": "ds-t-112",
            "topicNum": 1,
            "title": "Why Mathematics Matters in Data Science",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-113",
            "topicNum": 2,
            "title": "Basic Algebra and Equations",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-114",
            "topicNum": 3,
            "title": "Functions and Graphs",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-115",
            "topicNum": 4,
            "title": "Exponents and Logarithms",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-116",
            "topicNum": 5,
            "title": "Vectors and Vector Operations",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-117",
            "topicNum": 6,
            "title": "Matrices and Matrix Operations",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-118",
            "topicNum": 7,
            "title": "Dot Products and Matrix Multiplication",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-119",
            "topicNum": 8,
            "title": "Introduction to Derivatives",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-120",
            "topicNum": 9,
            "title": "Gradients and Optimization Intuition",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-121",
            "topicNum": 10,
            "title": "Mathematical Concepts in Machine Learning",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Descriptive Statistics",
        "subtitle": "Core industry concepts and practical exercises for Descriptive Statistics.",
        "topics": [
          {
            "id": "ds-t-122",
            "topicNum": 1,
            "title": "Population and Sample",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-123",
            "topicNum": 2,
            "title": "Mean, Median and Mode",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-124",
            "topicNum": 3,
            "title": "Minimum, Maximum and Range",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-125",
            "topicNum": 4,
            "title": "Variance and Standard Deviation",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-126",
            "topicNum": 5,
            "title": "Quartiles and Percentiles",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-127",
            "topicNum": 6,
            "title": "Interquartile Range",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-128",
            "topicNum": 7,
            "title": "Skewness and Distribution Shape",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-129",
            "topicNum": 8,
            "title": "Detecting Statistical Outliers",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-130",
            "topicNum": 9,
            "title": "Interpreting Summary Statistics",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Probability and Statistical Inference",
        "subtitle": "Core industry concepts and practical exercises for Probability and Statistical Inference.",
        "topics": [
          {
            "id": "ds-t-131",
            "topicNum": 1,
            "title": "Introduction to Probability",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-132",
            "topicNum": 2,
            "title": "Events and Sample Spaces",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-133",
            "topicNum": 3,
            "title": "Conditional Probability",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-134",
            "topicNum": 4,
            "title": "Independent and Dependent Events",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-135",
            "topicNum": 5,
            "title": "Bayes’ Theorem Basics",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-136",
            "topicNum": 6,
            "title": "Probability Distributions",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-137",
            "topicNum": 7,
            "title": "Normal and Binomial Distributions",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-138",
            "topicNum": 8,
            "title": "Sampling Methods",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-139",
            "topicNum": 9,
            "title": "Sampling Bias",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-140",
            "topicNum": 10,
            "title": "Confidence Intervals",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-141",
            "topicNum": 11,
            "title": "Hypothesis Testing",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-142",
            "topicNum": 12,
            "title": "P-Values and Statistical Significance",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-143",
            "topicNum": 13,
            "title": "Type I and Type II Errors",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-144",
            "topicNum": 14,
            "title": "Correlation vs Causation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: Data Preparation and Feature Engineering",
        "subtitle": "Core industry concepts and practical exercises for Data Preparation and Feature Engineering.",
        "topics": [
          {
            "id": "ds-t-145",
            "topicNum": 1,
            "title": "Importing and Inspecting Datasets",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-146",
            "topicNum": 2,
            "title": "Identifying Missing Values",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-147",
            "topicNum": 3,
            "title": "Handling Missing Data",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-148",
            "topicNum": 4,
            "title": "Removing Duplicate Records",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-149",
            "topicNum": 5,
            "title": "Correcting Data Types",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-150",
            "topicNum": 6,
            "title": "Detecting and Handling Outliers",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-151",
            "topicNum": 7,
            "title": "Encoding Categorical Variables",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-152",
            "topicNum": 8,
            "title": "Feature Scaling and Standardization",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-153",
            "topicNum": 9,
            "title": "Normalization",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-154",
            "topicNum": 10,
            "title": "Creating New Features",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-155",
            "topicNum": 11,
            "title": "Preventing Data Leakage",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-156",
            "topicNum": 12,
            "title": "Building a Reproducible Data Pipeline",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "NumPy, Pandas, SQL and Data Engineering",
    "shortTitle": "NumPy, Pandas, SQL and Data Engineering",
    "subtitle": "Numerical computing with NumPy, Pandas data wrangling, SQL queries, and EDA.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: NumPy for Numerical Computing",
        "subtitle": "Core industry concepts and practical exercises for NumPy for Numerical Computing.",
        "topics": [
          {
            "id": "ds-t-157",
            "topicNum": 1,
            "title": "What Is NumPy?",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-158",
            "topicNum": 2,
            "title": "Creating NumPy Arrays",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-159",
            "topicNum": 3,
            "title": "Array Dimensions and Shapes",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-160",
            "topicNum": 4,
            "title": "Array Indexing and Slicing",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-161",
            "topicNum": 5,
            "title": "Vectorized Operations",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-162",
            "topicNum": 6,
            "title": "Broadcasting",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-163",
            "topicNum": 7,
            "title": "Mathematical Operations on Arrays",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-164",
            "topicNum": 8,
            "title": "Aggregation and Summary Statistics",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-165",
            "topicNum": 9,
            "title": "Boolean Indexing and Filtering",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-166",
            "topicNum": 10,
            "title": "Reshaping and Combining Arrays",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-167",
            "topicNum": 11,
            "title": "NumPy Practical Exercises",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: Pandas for Data Science",
        "subtitle": "Core industry concepts and practical exercises for Pandas for Data Science.",
        "topics": [
          {
            "id": "ds-t-168",
            "topicNum": 1,
            "title": "What Is Pandas?",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-169",
            "topicNum": 2,
            "title": "Series and DataFrames",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-170",
            "topicNum": 3,
            "title": "Reading CSV and Excel Files",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-171",
            "topicNum": 4,
            "title": "Inspecting Data with head(), info() and describe()",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-172",
            "topicNum": 5,
            "title": "Selecting Rows and Columns",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-173",
            "topicNum": 6,
            "title": "Filtering and Sorting Data",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-174",
            "topicNum": 7,
            "title": "Creating and Renaming Columns",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-175",
            "topicNum": 8,
            "title": "Handling Missing Values",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-176",
            "topicNum": 9,
            "title": "Removing Duplicate Records",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-177",
            "topicNum": 10,
            "title": "Applying Functions to DataFrames",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-178",
            "topicNum": 11,
            "title": "GroupBy and Aggregation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-179",
            "topicNum": 12,
            "title": "Merge, Join and Concatenate",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-180",
            "topicNum": 13,
            "title": "Working with Dates and Times",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-181",
            "topicNum": 14,
            "title": "Text Processing with Pandas",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-182",
            "topicNum": 15,
            "title": "Exporting Processed Data",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: SQL for Data Science",
        "subtitle": "Core industry concepts and practical exercises for SQL for Data Science.",
        "topics": [
          {
            "id": "ds-t-183",
            "topicNum": 1,
            "title": "What Is a Relational Database?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-184",
            "topicNum": 2,
            "title": "Tables, Rows, Columns and Keys",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-185",
            "topicNum": 3,
            "title": "Introduction to SQL and PostgreSQL",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-186",
            "topicNum": 4,
            "title": "SELECT and DISTINCT",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-187",
            "topicNum": 5,
            "title": "WHERE, AND, OR and IN",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-188",
            "topicNum": 6,
            "title": "ORDER BY and LIMIT",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-189",
            "topicNum": 7,
            "title": "Aggregate Functions and GROUP BY",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-190",
            "topicNum": 8,
            "title": "HAVING and CASE WHEN",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-191",
            "topicNum": 9,
            "title": "INNER, LEFT, RIGHT and FULL JOIN",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-192",
            "topicNum": 10,
            "title": "Subqueries and EXISTS",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-193",
            "topicNum": 11,
            "title": "Common Table Expressions",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-194",
            "topicNum": 12,
            "title": "Window Functions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-195",
            "topicNum": 13,
            "title": "Ranking and Running Totals",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-196",
            "topicNum": 14,
            "title": "Date and Text Functions",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-197",
            "topicNum": 15,
            "title": "Query Validation and Performance Basics",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Data Pipelines and Engineering Basics",
        "subtitle": "Core industry concepts and practical exercises for Data Pipelines and Engineering Basics.",
        "topics": [
          {
            "id": "ds-t-198",
            "topicNum": 1,
            "title": "Introduction to Data Engineering",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-199",
            "topicNum": 2,
            "title": "Data Ingestion Concepts",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-200",
            "topicNum": 3,
            "title": "Batch Processing vs Streaming",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-201",
            "topicNum": 4,
            "title": "ETL vs ELT",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-202",
            "topicNum": 5,
            "title": "Data Transformation Pipelines",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-203",
            "topicNum": 6,
            "title": "Data Formats and Schema Validation",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-204",
            "topicNum": 7,
            "title": "APIs and Data Collection Basics",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-205",
            "topicNum": 8,
            "title": "Introduction to Data Warehouses",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-206",
            "topicNum": 9,
            "title": "Reproducible Data Workflows",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-207",
            "topicNum": 10,
            "title": "Logging and Pipeline Error Handling",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Exploratory Data Analysis and Visualization",
        "subtitle": "Core industry concepts and practical exercises for Exploratory Data Analysis and Visualization.",
        "topics": [
          {
            "id": "ds-t-208",
            "topicNum": 1,
            "title": "What Is Exploratory Data Analysis?",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-209",
            "topicNum": 2,
            "title": "Asking Questions Before Analyzing",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-210",
            "topicNum": 3,
            "title": "Univariate Analysis",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-211",
            "topicNum": 4,
            "title": "Bivariate and Multivariate Analysis",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-212",
            "topicNum": 5,
            "title": "Understanding Data Distributions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-213",
            "topicNum": 6,
            "title": "Identifying Patterns and Outliers",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-214",
            "topicNum": 7,
            "title": "Matplotlib Fundamentals",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-215",
            "topicNum": 8,
            "title": "Seaborn Fundamentals",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-216",
            "topicNum": 9,
            "title": "Bar Charts and Line Charts",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-217",
            "topicNum": 10,
            "title": "Histograms and Box Plots",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-218",
            "topicNum": 11,
            "title": "Scatter Plots and Correlation Heatmaps",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-219",
            "topicNum": 12,
            "title": "Choosing Effective Visualizations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-220",
            "topicNum": 13,
            "title": "Communicating EDA Findings",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-221",
            "topicNum": 14,
            "title": "Exploratory Data Analysis Project",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "Machine Learning",
    "shortTitle": "Machine Learning",
    "subtitle": "Supervised & unsupervised algorithms, regression, classification, and model tuning.",
    "iconName": "chart",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: Machine Learning Fundamentals",
        "subtitle": "Core industry concepts and practical exercises for Machine Learning Fundamentals.",
        "topics": [
          {
            "id": "ds-t-222",
            "topicNum": 1,
            "title": "What Is Machine Learning?",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-223",
            "topicNum": 2,
            "title": "Types of Machine Learning",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-224",
            "topicNum": 3,
            "title": "Supervised vs Unsupervised Learning",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-225",
            "topicNum": 4,
            "title": "Regression vs Classification",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-226",
            "topicNum": 5,
            "title": "Features and Target Variables",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-227",
            "topicNum": 6,
            "title": "Training, Validation and Test Sets",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-228",
            "topicNum": 7,
            "title": "Baseline Models",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-229",
            "topicNum": 8,
            "title": "Overfitting and Underfitting",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-230",
            "topicNum": 9,
            "title": "Bias-Variance Trade-Off",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-231",
            "topicNum": 10,
            "title": "The Machine Learning Workflow",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Regression Algorithms",
        "subtitle": "Core industry concepts and practical exercises for Regression Algorithms.",
        "topics": [
          {
            "id": "ds-t-232",
            "topicNum": 1,
            "title": "What Is Regression?",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-233",
            "topicNum": 2,
            "title": "Simple Linear Regression",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-234",
            "topicNum": 3,
            "title": "Multiple Linear Regression",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-235",
            "topicNum": 4,
            "title": "Regression Assumptions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-236",
            "topicNum": 5,
            "title": "Polynomial Regression",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-237",
            "topicNum": 6,
            "title": "Decision Tree Regression",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-238",
            "topicNum": 7,
            "title": "Random Forest Regression",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-239",
            "topicNum": 8,
            "title": "MAE, MSE, RMSE and R²",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-240",
            "topicNum": 9,
            "title": "Comparing Regression Models",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-241",
            "topicNum": 10,
            "title": "Regression Project: House Price Prediction",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: Classification Algorithms",
        "subtitle": "Core industry concepts and practical exercises for Classification Algorithms.",
        "topics": [
          {
            "id": "ds-t-242",
            "topicNum": 1,
            "title": "What Is Classification?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-243",
            "topicNum": 2,
            "title": "Logistic Regression",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-244",
            "topicNum": 3,
            "title": "K-Nearest Neighbors",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-245",
            "topicNum": 4,
            "title": "Decision Tree Classification",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-246",
            "topicNum": 5,
            "title": "Random Forest Classification",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-247",
            "topicNum": 6,
            "title": "Support Vector Machines",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-248",
            "topicNum": 7,
            "title": "Naive Bayes",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-249",
            "topicNum": 8,
            "title": "Confusion Matrix",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-250",
            "topicNum": 9,
            "title": "Precision, Recall and F1-Score",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-251",
            "topicNum": 10,
            "title": "ROC Curve and AUC",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-252",
            "topicNum": 11,
            "title": "Class Imbalance and Resampling",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-253",
            "topicNum": 12,
            "title": "Classification Project: Customer Churn",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: Unsupervised Learning",
        "subtitle": "Core industry concepts and practical exercises for Unsupervised Learning.",
        "topics": [
          {
            "id": "ds-t-254",
            "topicNum": 1,
            "title": "What Is Unsupervised Learning?",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-255",
            "topicNum": 2,
            "title": "Clustering Fundamentals",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-256",
            "topicNum": 3,
            "title": "K-Means Clustering",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-257",
            "topicNum": 4,
            "title": "Choosing the Number of Clusters",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-258",
            "topicNum": 5,
            "title": "Hierarchical Clustering",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-259",
            "topicNum": 6,
            "title": "DBSCAN Basics",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-260",
            "topicNum": 7,
            "title": "Principal Component Analysis",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-261",
            "topicNum": 8,
            "title": "Dimensionality Reduction",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-262",
            "topicNum": 9,
            "title": "Anomaly Detection",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-263",
            "topicNum": 10,
            "title": "Evaluating Clustering Results",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-264",
            "topicNum": 11,
            "title": "Customer Segmentation Project",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: Model Evaluation and Improvement",
        "subtitle": "Core industry concepts and practical exercises for Model Evaluation and Improvement.",
        "topics": [
          {
            "id": "ds-t-265",
            "topicNum": 1,
            "title": "Model Evaluation Strategy",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-266",
            "topicNum": 2,
            "title": "Cross-Validation",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-267",
            "topicNum": 3,
            "title": "Feature Selection",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-268",
            "topicNum": 4,
            "title": "Feature Engineering for Machine Learning",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-269",
            "topicNum": 5,
            "title": "Hyperparameter Tuning",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-270",
            "topicNum": 6,
            "title": "Grid Search and Random Search",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-271",
            "topicNum": 7,
            "title": "Data Leakage and Validation Errors",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-272",
            "topicNum": 8,
            "title": "Error Analysis",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-273",
            "topicNum": 9,
            "title": "Model Interpretability Basics",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-274",
            "topicNum": 10,
            "title": "Building a Reproducible ML Pipeline",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-275",
            "topicNum": 11,
            "title": "Saving and Loading Models",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-6",
    "tabNum": 6,
    "title": "Deep Learning and Generative AI",
    "shortTitle": "Deep Learning and Generative AI",
    "subtitle": "Deep neural networks, computer vision, NLP, transformers, and LLM fine-tuning.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: Deep Learning Foundations",
        "subtitle": "Core industry concepts and practical exercises for Deep Learning Foundations.",
        "topics": [
          {
            "id": "ds-t-276",
            "topicNum": 1,
            "title": "What Is Deep Learning?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-277",
            "topicNum": 2,
            "title": "Machine Learning vs Deep Learning",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-278",
            "topicNum": 3,
            "title": "Neural Network Architecture",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-279",
            "topicNum": 4,
            "title": "Neurons, Layers and Activation Functions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-280",
            "topicNum": 5,
            "title": "Forward Propagation",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-281",
            "topicNum": 6,
            "title": "Loss Functions",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-282",
            "topicNum": 7,
            "title": "Gradient Descent",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-283",
            "topicNum": 8,
            "title": "Backpropagation Intuition",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-284",
            "topicNum": 9,
            "title": "Learning Rate and Optimizers",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-285",
            "topicNum": 10,
            "title": "Epochs, Batches and Training",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-286",
            "topicNum": 11,
            "title": "Overfitting and Regularization",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Module 27: Practical Deep Learning",
        "subtitle": "Core industry concepts and practical exercises for Practical Deep Learning.",
        "topics": [
          {
            "id": "ds-t-287",
            "topicNum": 1,
            "title": "Introduction to TensorFlow and Keras",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-288",
            "topicNum": 2,
            "title": "Introduction to PyTorch",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-289",
            "topicNum": 3,
            "title": "Preparing Data for Neural Networks",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-290",
            "topicNum": 4,
            "title": "Building a Basic Neural Network",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-291",
            "topicNum": 5,
            "title": "Training and Validating a Model",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-292",
            "topicNum": 6,
            "title": "Monitoring Training Performance",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-293",
            "topicNum": 7,
            "title": "Saving and Loading a Neural Network",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-294",
            "topicNum": 8,
            "title": "Introduction to Convolutional Neural Networks",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-295",
            "topicNum": 9,
            "title": "Computer Vision Use Cases",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-296",
            "topicNum": 10,
            "title": "Deep Learning Mini Project",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Module 28: NLP, Transformers and Large Language Models",
        "subtitle": "Core industry concepts and practical exercises for NLP, Transformers and Large Language Models.",
        "topics": [
          {
            "id": "ds-t-297",
            "topicNum": 1,
            "title": "What Is Natural Language Processing?",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-298",
            "topicNum": 2,
            "title": "Text Cleaning and Preprocessing",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-299",
            "topicNum": 3,
            "title": "Tokenization",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-300",
            "topicNum": 4,
            "title": "Bag-of-Words and TF-IDF",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-301",
            "topicNum": 5,
            "title": "Word Embeddings",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-302",
            "topicNum": 6,
            "title": "Semantic Similarity",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-303",
            "topicNum": 7,
            "title": "Attention Mechanism",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-304",
            "topicNum": 8,
            "title": "Transformer Architecture",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-305",
            "topicNum": 9,
            "title": "Encoder and Decoder Concepts",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-306",
            "topicNum": 10,
            "title": "What Is a Large Language Model?",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-307",
            "topicNum": 11,
            "title": "Tokens and Context Windows",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-308",
            "topicNum": 12,
            "title": "LLM Limitations and Hallucinations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Module 29: Generative AI and LLM Applications",
        "subtitle": "Core industry concepts and practical exercises for Generative AI and LLM Applications.",
        "topics": [
          {
            "id": "ds-t-309",
            "topicNum": 1,
            "title": "What Is Generative AI?",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-310",
            "topicNum": 2,
            "title": "Generative AI vs Traditional Machine Learning",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-311",
            "topicNum": 3,
            "title": "Prompt Engineering Fundamentals",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-312",
            "topicNum": 4,
            "title": "Zero-Shot and Few-Shot Prompting",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-313",
            "topicNum": 5,
            "title": "Structured Outputs and JSON",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-314",
            "topicNum": 6,
            "title": "Using LLM APIs",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-315",
            "topicNum": 7,
            "title": "Temperature and Generation Parameters",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-316",
            "topicNum": 8,
            "title": "Embeddings and Vector Representations",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-317",
            "topicNum": 9,
            "title": "Vector Databases and Semantic Search",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-318",
            "topicNum": 10,
            "title": "Retrieval-Augmented Generation (RAG)",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-319",
            "topicNum": 11,
            "title": "Grounding, Citations and Source Verification",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-320",
            "topicNum": 12,
            "title": "Evaluating Generative AI Outputs",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Agentic AI and Reliable AI Systems",
    "shortTitle": "Agentic AI and Reliable AI Systems",
    "subtitle": "Autonomous AI agents, memory systems, LangChain, RAG architecture, and safety.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-30",
        "chapterNum": 30,
        "title": "Module 30: Introduction to Agentic AI",
        "subtitle": "Core industry concepts and practical exercises for Introduction to Agentic AI.",
        "topics": [
          {
            "id": "ds-t-321",
            "topicNum": 1,
            "title": "What Is Agentic AI?",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-322",
            "topicNum": 2,
            "title": "AI Assistants vs AI Agents",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-323",
            "topicNum": 3,
            "title": "Agent Goals and Task Decomposition",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-324",
            "topicNum": 4,
            "title": "Understanding Agent Architecture",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-325",
            "topicNum": 5,
            "title": "Tools, Actions and Observations",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-326",
            "topicNum": 6,
            "title": "Planning and Execution Loops",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-327",
            "topicNum": 7,
            "title": "State and Context in Agents",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-328",
            "topicNum": 8,
            "title": "When to Use an Agent",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-329",
            "topicNum": 9,
            "title": "When Not to Use an Agent",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-330",
            "topicNum": 10,
            "title": "Building a Simple Rule-Based Agent",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-31",
        "chapterNum": 31,
        "title": "Module 31: Building AI Agents with Python",
        "subtitle": "Core industry concepts and practical exercises for Building AI Agents with Python.",
        "topics": [
          {
            "id": "ds-t-331",
            "topicNum": 1,
            "title": "Preparing the Agent Development Environment",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-332",
            "topicNum": 2,
            "title": "Connecting an LLM to Python",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-333",
            "topicNum": 3,
            "title": "Sending Requests to an LLM API",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-334",
            "topicNum": 4,
            "title": "Parsing Structured Model Responses",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-335",
            "topicNum": 5,
            "title": "Tool Calling Fundamentals",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-336",
            "topicNum": 6,
            "title": "Defining Tools and Their Parameters",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-337",
            "topicNum": 7,
            "title": "Executing Tool Calls Safely",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-338",
            "topicNum": 8,
            "title": "Handling Tool Results",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-339",
            "topicNum": 9,
            "title": "Building an Agent Execution Loop",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-340",
            "topicNum": 10,
            "title": "Creating a Basic AI Assistant",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-32",
        "chapterNum": 32,
        "title": "Module 32: Memory, Workflows and Orchestration",
        "subtitle": "Core industry concepts and practical exercises for Memory, Workflows and Orchestration.",
        "topics": [
          {
            "id": "ds-t-341",
            "topicNum": 1,
            "title": "Short-Term Memory Concepts",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-342",
            "topicNum": 2,
            "title": "Persistent Memory Concepts",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-343",
            "topicNum": 3,
            "title": "Conversation State Management",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-344",
            "topicNum": 4,
            "title": "Context Window Management",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-345",
            "topicNum": 5,
            "title": "Workflow Orchestration",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-346",
            "topicNum": 6,
            "title": "Sequential and Conditional Workflows",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-347",
            "topicNum": 7,
            "title": "Retries and Timeouts",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-348",
            "topicNum": 8,
            "title": "Error Handling and Fallbacks",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-349",
            "topicNum": 9,
            "title": "Human Approval Steps",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-350",
            "topicNum": 10,
            "title": "Workflow Testing and Debugging",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-33",
        "chapterNum": 33,
        "title": "Module 33: RAG and Knowledge-Based Agents",
        "subtitle": "Core industry concepts and practical exercises for RAG and Knowledge-Based Agents.",
        "topics": [
          {
            "id": "ds-t-351",
            "topicNum": 1,
            "title": "What Is a Knowledge-Based Agent?",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-352",
            "topicNum": 2,
            "title": "Loading Documents and Data Sources",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-353",
            "topicNum": 3,
            "title": "Document Parsing and Text Extraction",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-354",
            "topicNum": 4,
            "title": "Document Chunking Strategies",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-355",
            "topicNum": 5,
            "title": "Creating Embeddings",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-356",
            "topicNum": 6,
            "title": "Storing Embeddings in a Vector Database",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-357",
            "topicNum": 7,
            "title": "Semantic and Metadata Search",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-358",
            "topicNum": 8,
            "title": "Building a Retrieval Pipeline",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-359",
            "topicNum": 9,
            "title": "Connecting Retrieval to an LLM",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-360",
            "topicNum": 10,
            "title": "Building a Grounded Question-Answering Agent",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-361",
            "topicNum": 11,
            "title": "Citations and Source Verification",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-362",
            "topicNum": 12,
            "title": "Evaluating Retrieval and Answer Quality",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-34",
        "chapterNum": 34,
        "title": "Module 34: Advanced Agent Patterns",
        "subtitle": "Core industry concepts and practical exercises for Advanced Agent Patterns.",
        "topics": [
          {
            "id": "ds-t-363",
            "topicNum": 1,
            "title": "Single-Agent vs Multi-Agent Systems",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-364",
            "topicNum": 2,
            "title": "Agent Roles and Responsibilities",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-365",
            "topicNum": 3,
            "title": "Task Delegation and Handoffs",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-366",
            "topicNum": 4,
            "title": "Shared State and Agent Communication",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-367",
            "topicNum": 5,
            "title": "Sequential and Parallel Agent Workflows",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-368",
            "topicNum": 6,
            "title": "Coordination and Conflict Handling",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-369",
            "topicNum": 7,
            "title": "Tool Selection and Planning Strategies",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-370",
            "topicNum": 8,
            "title": "Human-in-the-Loop Agent Design",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-371",
            "topicNum": 9,
            "title": "Evaluating Multi-Agent Workflows",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-372",
            "topicNum": 10,
            "title": "Building a Multi-Agent Prototype",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-35",
        "chapterNum": 35,
        "title": "Module 35: Agent Safety, Testing and Reliability",
        "subtitle": "Core industry concepts and practical exercises for Agent Safety, Testing and Reliability.",
        "topics": [
          {
            "id": "ds-t-373",
            "topicNum": 1,
            "title": "Common AI Agent Failure Modes",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-374",
            "topicNum": 2,
            "title": "Prompt Injection and Untrusted Inputs",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-375",
            "topicNum": 3,
            "title": "Least-Privilege Tool Access",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-376",
            "topicNum": 4,
            "title": "Protecting Secrets and API Keys",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-377",
            "topicNum": 5,
            "title": "Human Approval for Sensitive Actions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-378",
            "topicNum": 6,
            "title": "Input and Output Validation",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-379",
            "topicNum": 7,
            "title": "Logging and Audit Trails",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-380",
            "topicNum": 8,
            "title": "Testing Tool Calls and Agent Decisions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-381",
            "topicNum": 9,
            "title": "Measuring Accuracy and Reliability",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-382",
            "topicNum": 10,
            "title": "Cost, Latency and Token Monitoring",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-383",
            "topicNum": 11,
            "title": "Regression Testing",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-384",
            "topicNum": 12,
            "title": "Safe Recovery and Fallback Strategies",
            "duration": "Video • 20 min",
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
    "title": "Deployment, Projects and Career Readiness",
    "shortTitle": "Deployment, Projects and Career Readiness",
    "subtitle": "FastAPI deployment, Docker containerization, MLOps, capstones, and interview prep.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-36",
        "chapterNum": 36,
        "title": "Module 36: Deployment and MLOps Fundamentals",
        "subtitle": "Core industry concepts and practical exercises for Deployment and MLOps Fundamentals.",
        "topics": [
          {
            "id": "ds-t-385",
            "topicNum": 1,
            "title": "What Is Model Deployment?",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-386",
            "topicNum": 2,
            "title": "Saving and Loading Trained Models",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-387",
            "topicNum": 3,
            "title": "Introduction to REST APIs",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-388",
            "topicNum": 4,
            "title": "Building a Basic API with FastAPI",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-389",
            "topicNum": 5,
            "title": "Serving Predictions Through an API",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-390",
            "topicNum": 6,
            "title": "Environment Variables and Secret Management",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-391",
            "topicNum": 7,
            "title": "Dependency Management",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-392",
            "topicNum": 8,
            "title": "Docker Fundamentals",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-393",
            "topicNum": 9,
            "title": "Model Versioning and Reproducibility",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-394",
            "topicNum": 10,
            "title": "Logging, Monitoring and Error Handling",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-395",
            "topicNum": 11,
            "title": "Deployment and Rollback Basics",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-37",
        "chapterNum": 37,
        "title": "Module 37: Data Science Capstone Project",
        "subtitle": "Core industry concepts and practical exercises for Data Science Capstone Project.",
        "topics": [
          {
            "id": "ds-t-396",
            "topicNum": 1,
            "title": "Selecting a Real-World Problem",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-397",
            "topicNum": 2,
            "title": "Defining Objectives and Success Metrics",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-398",
            "topicNum": 3,
            "title": "Collecting and Inspecting Data",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-399",
            "topicNum": 4,
            "title": "Cleaning and Validating Data",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-400",
            "topicNum": 5,
            "title": "Performing Exploratory Data Analysis",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-401",
            "topicNum": 6,
            "title": "Engineering Features",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-402",
            "topicNum": 7,
            "title": "Training Baseline and Candidate Models",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-403",
            "topicNum": 8,
            "title": "Evaluating and Comparing Models",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-404",
            "topicNum": 9,
            "title": "Interpreting Results and Limitations",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-405",
            "topicNum": 10,
            "title": "Documenting the Final Solution",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-38",
        "chapterNum": 38,
        "title": "Module 38: Agentic AI Capstone Project",
        "subtitle": "Core industry concepts and practical exercises for Agentic AI Capstone Project.",
        "topics": [
          {
            "id": "ds-t-406",
            "topicNum": 1,
            "title": "Identifying a Useful Agent Task",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-407",
            "topicNum": 2,
            "title": "Designing the Agent Architecture",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-408",
            "topicNum": 3,
            "title": "Connecting an LLM and Tools",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-409",
            "topicNum": 4,
            "title": "Adding a Knowledge Source with RAG",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-410",
            "topicNum": 5,
            "title": "Implementing Planning and Approval Steps",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-411",
            "topicNum": 6,
            "title": "Handling Failures and Invalid Inputs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-412",
            "topicNum": 7,
            "title": "Testing Accuracy, Safety and Reliability",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-413",
            "topicNum": 8,
            "title": "Measuring Latency and Cost",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-414",
            "topicNum": 9,
            "title": "Documenting the Working Prototype",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-415",
            "topicNum": 10,
            "title": "Demonstrating the Agent End to End",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-39",
        "chapterNum": 39,
        "title": "Module 39: Portfolio and Interview Preparation",
        "subtitle": "Core industry concepts and practical exercises for Portfolio and Interview Preparation.",
        "topics": [
          {
            "id": "ds-t-416",
            "topicNum": 1,
            "title": "Writing Data Science Project Case Studies",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-417",
            "topicNum": 2,
            "title": "Explaining Data Cleaning and Feature Engineering",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-418",
            "topicNum": 3,
            "title": "Python Coding Interview Practice",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-419",
            "topicNum": 4,
            "title": "SQL Interview Practice",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-420",
            "topicNum": 5,
            "title": "Mathematics and Statistics Interview Questions",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-421",
            "topicNum": 6,
            "title": "Machine Learning Concepts and Model Metrics",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-422",
            "topicNum": 7,
            "title": "Deep Learning and LLM Interview Questions",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ds-t-423",
            "topicNum": 8,
            "title": "Explaining RAG Architecture",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-424",
            "topicNum": 9,
            "title": "Explaining Agent Architecture and Trade-Offs",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ds-t-425",
            "topicNum": 10,
            "title": "Behavioral Interview Preparation",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ds-t-426",
            "topicNum": 11,
            "title": "GitHub Portfolio and Project Documentation",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ds-t-427",
            "topicNum": 12,
            "title": "Final Portfolio Presentation and Learning Roadmap",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
