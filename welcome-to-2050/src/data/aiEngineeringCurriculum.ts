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

export const AI_ENGINEERING_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "AI Engineering Foundations",
    "shortTitle": "AI Engineering Foundations",
    "subtitle": "Core engineering principles, Python OOP, Git workflows, APIs and databases.",
    "iconName": "python",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Introduction to AI Engineering",
        "subtitle": "Production concepts and practical exercises for Introduction to AI Engineering.",
        "topics": [
          {
            "id": "ai-t-1",
            "topicNum": 1,
            "title": "What Is Artificial Intelligence?",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "completed"
          },
          {
            "id": "ai-t-2",
            "topicNum": 2,
            "title": "What Is AI Engineering?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ai-t-3",
            "topicNum": 3,
            "title": "AI vs Machine Learning vs Deep Learning",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ai-t-4",
            "topicNum": 4,
            "title": "AI Engineering vs Data Science",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "in-progress"
          },
          {
            "id": "ai-t-5",
            "topicNum": 5,
            "title": "AI Engineering vs ML Engineering",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-6",
            "topicNum": 6,
            "title": "Traditional Software vs AI-Powered Applications",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-7",
            "topicNum": 7,
            "title": "Real-World Applications of AI Engineering",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-8",
            "topicNum": 8,
            "title": "AI Product Lifecycle",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-9",
            "topicNum": 9,
            "title": "AI Engineer Roles and Responsibilities",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-10",
            "topicNum": 10,
            "title": "Defining Quality, Cost, Latency and Reliability Goals",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Python Programming for AI",
        "subtitle": "Production concepts and practical exercises for Python Programming for AI.",
        "topics": [
          {
            "id": "ai-t-11",
            "topicNum": 1,
            "title": "What Is Programming?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-12",
            "topicNum": 2,
            "title": "Introduction to Python",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-13",
            "topicNum": 3,
            "title": "Installing Python and Setting Up VS Code",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-14",
            "topicNum": 4,
            "title": "Writing and Running Your First Python Program",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-15",
            "topicNum": 5,
            "title": "Variables and Data Types",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-16",
            "topicNum": 6,
            "title": "Operators and Expressions",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-17",
            "topicNum": 7,
            "title": "Conditional Statements",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-18",
            "topicNum": 8,
            "title": "Loops and Iteration",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-19",
            "topicNum": 9,
            "title": "Lists, Tuples, Sets and Dictionaries",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-20",
            "topicNum": 10,
            "title": "Functions and Return Values",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-21",
            "topicNum": 11,
            "title": "Modules, Packages and Imports",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-22",
            "topicNum": 12,
            "title": "File Handling and Exception Handling",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-23",
            "topicNum": 13,
            "title": "Working with JSON Data",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-24",
            "topicNum": 14,
            "title": "Building Reusable Python Code",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: Software Engineering for AI Applications",
        "subtitle": "Production concepts and practical exercises for Software Engineering for AI Applications.",
        "topics": [
          {
            "id": "ai-t-25",
            "topicNum": 1,
            "title": "Writing Readable Python Code",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-26",
            "topicNum": 2,
            "title": "Object-Oriented Programming Fundamentals",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-27",
            "topicNum": 3,
            "title": "Classes, Objects and Methods",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-28",
            "topicNum": 4,
            "title": "Organizing an AI Project",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-29",
            "topicNum": 5,
            "title": "Virtual Environments and Dependencies",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-30",
            "topicNum": 6,
            "title": "Git and Version Control",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-31",
            "topicNum": 7,
            "title": "GitHub and Repository Management",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-32",
            "topicNum": 8,
            "title": "Type Hints and Documentation",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-33",
            "topicNum": 9,
            "title": "Unit Testing Fundamentals",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-34",
            "topicNum": 10,
            "title": "Debugging and Logging",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-35",
            "topicNum": 11,
            "title": "Managing Configuration Files",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-36",
            "topicNum": 12,
            "title": "Reproducible Development Environments",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: APIs, Web and Database Fundamentals",
        "subtitle": "Production concepts and practical exercises for APIs, Web and Database Fundamentals.",
        "topics": [
          {
            "id": "ai-t-37",
            "topicNum": 1,
            "title": "What Is an API?",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-38",
            "topicNum": 2,
            "title": "Client-Server Architecture",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-39",
            "topicNum": 3,
            "title": "HTTP Methods and Status Codes",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-40",
            "topicNum": 4,
            "title": "REST API Fundamentals",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-41",
            "topicNum": 5,
            "title": "Sending HTTP Requests with Python",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-42",
            "topicNum": 6,
            "title": "JSON and Structured Data",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-43",
            "topicNum": 7,
            "title": "Query Parameters and Request Headers",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-44",
            "topicNum": 8,
            "title": "Introduction to SQL Databases",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-45",
            "topicNum": 9,
            "title": "Connecting Python to a Database",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-46",
            "topicNum": 10,
            "title": "Authentication and Authorization Basics",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-47",
            "topicNum": 11,
            "title": "Environment Variables and Secret Keys",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-48",
            "topicNum": 12,
            "title": "Protecting API Credentials",
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
    "title": "Machine Learning and Model Integration",
    "shortTitle": "Machine Learning and Model Integration",
    "subtitle": "ML evaluation metrics, pretrained model hubs, and scalable inference serving.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: Machine Learning Concepts for AI Engineers",
        "subtitle": "Production concepts and practical exercises for Machine Learning Concepts for AI Engineers.",
        "topics": [
          {
            "id": "ai-t-49",
            "topicNum": 1,
            "title": "What Is Machine Learning?",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-50",
            "topicNum": 2,
            "title": "Supervised and Unsupervised Learning",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-51",
            "topicNum": 3,
            "title": "Features, Labels and Predictions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-52",
            "topicNum": 4,
            "title": "Training, Validation and Test Data",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-53",
            "topicNum": 5,
            "title": "Classification and Regression",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-54",
            "topicNum": 6,
            "title": "Model Evaluation Metrics",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-55",
            "topicNum": 7,
            "title": "Overfitting and Underfitting",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-56",
            "topicNum": 8,
            "title": "Error Analysis and Generalization",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-57",
            "topicNum": 9,
            "title": "Model Bias and Limitations",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-58",
            "topicNum": 10,
            "title": "Choosing Between an Existing Model and an LLM",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: Pretrained Models and Model Hubs",
        "subtitle": "Production concepts and practical exercises for Pretrained Models and Model Hubs.",
        "topics": [
          {
            "id": "ai-t-59",
            "topicNum": 1,
            "title": "What Is a Pretrained Model?",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-60",
            "topicNum": 2,
            "title": "Introduction to Model Hubs",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-61",
            "topicNum": 3,
            "title": "Understanding Model Cards",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-62",
            "topicNum": 4,
            "title": "Choosing a Model for a Specific Task",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-63",
            "topicNum": 5,
            "title": "Loading Models with Python",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-64",
            "topicNum": 6,
            "title": "Understanding Model Inputs and Outputs",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-65",
            "topicNum": 7,
            "title": "Tokenizers and Preprocessing",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-66",
            "topicNum": 8,
            "title": "Inference Parameters and Configuration",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-67",
            "topicNum": 9,
            "title": "Batch vs Online Inference",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-68",
            "topicNum": 10,
            "title": "Model Licensing and Usage Restrictions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-69",
            "topicNum": 11,
            "title": "Evaluating Model Quality Before Integration",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: Model Serving and Integration",
        "subtitle": "Production concepts and practical exercises for Model Serving and Integration.",
        "topics": [
          {
            "id": "ai-t-70",
            "topicNum": 1,
            "title": "What Is Model Serving?",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-71",
            "topicNum": 2,
            "title": "Loading and Calling a Trained Model",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-72",
            "topicNum": 3,
            "title": "Building an Inference Function",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-73",
            "topicNum": 4,
            "title": "Creating a Prediction API",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-74",
            "topicNum": 5,
            "title": "Validating Requests and Responses",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-75",
            "topicNum": 6,
            "title": "Handling Invalid Inputs",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-76",
            "topicNum": 7,
            "title": "Timeouts and Failed Predictions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-77",
            "topicNum": 8,
            "title": "Model and API Versioning",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-78",
            "topicNum": 9,
            "title": "Testing Model Integration",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-79",
            "topicNum": 10,
            "title": "Integrating an ML Model into an Application",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Generative AI and LLM Applications",
    "shortTitle": "Generative AI and LLM Applications",
    "subtitle": "LLM APIs, prompt engineering, structured JSON output schemas, and caching.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: Generative AI Fundamentals",
        "subtitle": "Production concepts and practical exercises for Generative AI Fundamentals.",
        "topics": [
          {
            "id": "ai-t-80",
            "topicNum": 1,
            "title": "What Is Generative AI?",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-81",
            "topicNum": 2,
            "title": "Generative AI vs Traditional AI",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-82",
            "topicNum": 3,
            "title": "What Is a Large Language Model?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-83",
            "topicNum": 4,
            "title": "How LLMs Generate Text",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-84",
            "topicNum": 5,
            "title": "Tokens and Tokenization",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-85",
            "topicNum": 6,
            "title": "Context Windows and Context Limits",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-86",
            "topicNum": 7,
            "title": "Model Parameters and Generation Settings",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-87",
            "topicNum": 8,
            "title": "LLM Capabilities and Limitations",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-88",
            "topicNum": 9,
            "title": "Hallucinations and Incorrect Answers",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-89",
            "topicNum": 10,
            "title": "Privacy, Copyright and Responsible AI",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Prompt Engineering",
        "subtitle": "Production concepts and practical exercises for Prompt Engineering.",
        "topics": [
          {
            "id": "ai-t-90",
            "topicNum": 1,
            "title": "What Is Prompt Engineering?",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-91",
            "topicNum": 2,
            "title": "Writing Clear Task Instructions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-92",
            "topicNum": 3,
            "title": "System, User and Assistant Messages",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-93",
            "topicNum": 4,
            "title": "Providing Context and Background",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-94",
            "topicNum": 5,
            "title": "Zero-Shot Prompting",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-95",
            "topicNum": 6,
            "title": "Few-Shot Prompting",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-96",
            "topicNum": 7,
            "title": "Role and Format Instructions",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-97",
            "topicNum": 8,
            "title": "Breaking Complex Tasks into Steps",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-98",
            "topicNum": 9,
            "title": "Prompt Templates and Reusable Prompts",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-99",
            "topicNum": 10,
            "title": "Testing and Refining Prompts",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-100",
            "topicNum": 11,
            "title": "Common Prompting Failures",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-101",
            "topicNum": 12,
            "title": "Building a Prompt Evaluation Checklist",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Structured Outputs and LLM APIs",
        "subtitle": "Production concepts and practical exercises for Structured Outputs and LLM APIs.",
        "topics": [
          {
            "id": "ai-t-102",
            "topicNum": 1,
            "title": "Connecting to an LLM API",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-103",
            "topicNum": 2,
            "title": "Managing API Keys Securely",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-104",
            "topicNum": 3,
            "title": "Sending Requests and Reading Responses",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-105",
            "topicNum": 4,
            "title": "Understanding Chat Message Formats",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-106",
            "topicNum": 5,
            "title": "Requesting Structured JSON Outputs",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-107",
            "topicNum": 6,
            "title": "Validating Model-Generated JSON",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-108",
            "topicNum": 7,
            "title": "Schema-Based Output Validation",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-109",
            "topicNum": 8,
            "title": "Streaming Responses",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-110",
            "topicNum": 9,
            "title": "Maintaining Conversation Context",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-111",
            "topicNum": 10,
            "title": "Rate Limits and Quotas",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-112",
            "topicNum": 11,
            "title": "Retries, Timeouts and Error Handling",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-113",
            "topicNum": 12,
            "title": "Token Usage and API Cost Calculation",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Building LLM-Powered Applications",
        "subtitle": "Production concepts and practical exercises for Building LLM-Powered Applications.",
        "topics": [
          {
            "id": "ai-t-114",
            "topicNum": 1,
            "title": "Designing an LLM Application Workflow",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-115",
            "topicNum": 2,
            "title": "Connecting User Interfaces to LLM APIs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-116",
            "topicNum": 3,
            "title": "Building a Question-Answering Interface",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-117",
            "topicNum": 4,
            "title": "Creating Text Summarization Applications",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-118",
            "topicNum": 5,
            "title": "Developing Information Extraction Tools",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-119",
            "topicNum": 6,
            "title": "Building Text Classification Applications",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-120",
            "topicNum": 7,
            "title": "Managing Conversation History",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-121",
            "topicNum": 8,
            "title": "Handling Long Inputs",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-122",
            "topicNum": 9,
            "title": "Caching Repeated Requests",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-123",
            "topicNum": 10,
            "title": "Improving Response Latency",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-124",
            "topicNum": 11,
            "title": "Validating AI-Generated Results",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-125",
            "topicNum": 12,
            "title": "Building an LLM Application Mini Project",
            "duration": "Video • 20 min",
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
    "title": "RAG and Knowledge Systems",
    "shortTitle": "RAG and Knowledge Systems",
    "subtitle": "Vector embeddings, semantic search, document ingestion pipelines, and RAG.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Embeddings and Semantic Search",
        "subtitle": "Production concepts and practical exercises for Embeddings and Semantic Search.",
        "topics": [
          {
            "id": "ai-t-126",
            "topicNum": 1,
            "title": "What Are Embeddings?",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-127",
            "topicNum": 2,
            "title": "How Text Becomes a Vector",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-128",
            "topicNum": 3,
            "title": "Semantic Similarity Fundamentals",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-129",
            "topicNum": 4,
            "title": "Cosine Similarity",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-130",
            "topicNum": 5,
            "title": "Euclidean Distance and Other Similarity Measures",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-131",
            "topicNum": 6,
            "title": "Choosing an Embedding Model",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-132",
            "topicNum": 7,
            "title": "Text Chunking Fundamentals",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-133",
            "topicNum": 8,
            "title": "Metadata and Document Identifiers",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-134",
            "topicNum": 9,
            "title": "Vector Indexing",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-135",
            "topicNum": 10,
            "title": "Introduction to Vector Databases",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-136",
            "topicNum": 11,
            "title": "Metadata Filtering",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-137",
            "topicNum": 12,
            "title": "Evaluating Search Relevance",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Document Ingestion and Knowledge Preparation",
        "subtitle": "Production concepts and practical exercises for Document Ingestion and Knowledge Preparation.",
        "topics": [
          {
            "id": "ai-t-138",
            "topicNum": 1,
            "title": "Designing a Document Ingestion Pipeline",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-139",
            "topicNum": 2,
            "title": "Loading PDF Documents",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-140",
            "topicNum": 3,
            "title": "Extracting Text from Documents",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-141",
            "topicNum": 4,
            "title": "Processing Word and Text Files",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-142",
            "topicNum": 5,
            "title": "Handling Tables and Structured Content",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-143",
            "topicNum": 6,
            "title": "Cleaning and Normalizing Extracted Text",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-144",
            "topicNum": 7,
            "title": "Chunk Size and Chunk Overlap",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-145",
            "topicNum": 8,
            "title": "Creating Metadata for Documents",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-146",
            "topicNum": 9,
            "title": "Generating and Storing Embeddings",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-147",
            "topicNum": 10,
            "title": "Detecting Duplicate Documents",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-148",
            "topicNum": 11,
            "title": "Updating and Removing Outdated Content",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-149",
            "topicNum": 12,
            "title": "Tracking Sources and Data Permissions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Retrieval-Augmented Generation",
        "subtitle": "Production concepts and practical exercises for Retrieval-Augmented Generation.",
        "topics": [
          {
            "id": "ai-t-150",
            "topicNum": 1,
            "title": "What Is Retrieval-Augmented Generation?",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-151",
            "topicNum": 2,
            "title": "Why LLMs Need External Knowledge",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-152",
            "topicNum": 3,
            "title": "RAG Architecture and Data Flow",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-153",
            "topicNum": 4,
            "title": "Retrieving Relevant Document Chunks",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-154",
            "topicNum": 5,
            "title": "Passing Context to an LLM",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-155",
            "topicNum": 6,
            "title": "Grounding Answers in Source Material",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-156",
            "topicNum": 7,
            "title": "Generating Citations",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-157",
            "topicNum": 8,
            "title": "Handling Missing or Insufficient Information",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-158",
            "topicNum": 9,
            "title": "When an AI Should Abstain from Answering",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-159",
            "topicNum": 10,
            "title": "RAG vs Fine-Tuning",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-160",
            "topicNum": 11,
            "title": "Common RAG Failure Modes",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-161",
            "topicNum": 12,
            "title": "Building a Document Question-Answering System",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: Advanced Retrieval and RAG Evaluation",
        "subtitle": "Production concepts and practical exercises for Advanced Retrieval and RAG Evaluation.",
        "topics": [
          {
            "id": "ai-t-162",
            "topicNum": 1,
            "title": "Keyword Search vs Semantic Search",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-163",
            "topicNum": 2,
            "title": "Hybrid Search Fundamentals",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-164",
            "topicNum": 3,
            "title": "Query Rewriting",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-165",
            "topicNum": 4,
            "title": "Metadata-Based Retrieval",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-166",
            "topicNum": 5,
            "title": "Reranking Retrieved Documents",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-167",
            "topicNum": 6,
            "title": "Context Selection and Compression",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-168",
            "topicNum": 7,
            "title": "Retrieval Precision and Recall",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-169",
            "topicNum": 8,
            "title": "Evaluating Answer Relevance",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-170",
            "topicNum": 9,
            "title": "Evaluating Groundedness and Faithfulness",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-171",
            "topicNum": 10,
            "title": "Building a RAG Test Dataset",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-172",
            "topicNum": 11,
            "title": "Testing Difficult and Ambiguous Questions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-173",
            "topicNum": 12,
            "title": "Improving RAG Quality Systematically",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "AI Agents and Tool Use",
    "shortTitle": "AI Agents and Tool Use",
    "subtitle": "Function calling, tool integration, multi-step orchestration, and multi-agents.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: AI Agent Fundamentals",
        "subtitle": "Production concepts and practical exercises for AI Agent Fundamentals.",
        "topics": [
          {
            "id": "ai-t-174",
            "topicNum": 1,
            "title": "What Is an AI Agent?",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-175",
            "topicNum": 2,
            "title": "AI Assistants vs AI Agents",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-176",
            "topicNum": 3,
            "title": "Agents vs Traditional Automation",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-177",
            "topicNum": 4,
            "title": "Goals and Task Decomposition",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-178",
            "topicNum": 5,
            "title": "Agent State and Context",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-179",
            "topicNum": 6,
            "title": "Tools, Actions and Observations",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-180",
            "topicNum": 7,
            "title": "Planning and Execution Loops",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-181",
            "topicNum": 8,
            "title": "Single-Step vs Multi-Step Tasks",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-182",
            "topicNum": 9,
            "title": "When a Simple Workflow Is Better",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-183",
            "topicNum": 10,
            "title": "Designing Bounded Agent Responsibilities",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-184",
            "topicNum": 11,
            "title": "Common Agent Failure Modes",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: Tool Calling and Function Integration",
        "subtitle": "Production concepts and practical exercises for Tool Calling and Function Integration.",
        "topics": [
          {
            "id": "ai-t-185",
            "topicNum": 1,
            "title": "What Is Tool Calling?",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-186",
            "topicNum": 2,
            "title": "Defining Tools for an AI Agent",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-187",
            "topicNum": 3,
            "title": "Function Schemas and Parameters",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-188",
            "topicNum": 4,
            "title": "Requesting Tool Calls from an LLM",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-189",
            "topicNum": 5,
            "title": "Validating Tool Inputs",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-190",
            "topicNum": 6,
            "title": "Executing Tool Calls in Python",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-191",
            "topicNum": 7,
            "title": "Returning Tool Results to the Model",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-192",
            "topicNum": 8,
            "title": "Handling Invalid Tool Calls",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-193",
            "topicNum": 9,
            "title": "Managing Tool Permissions",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-194",
            "topicNum": 10,
            "title": "Connecting Database Search as a Tool",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-195",
            "topicNum": 11,
            "title": "Connecting External APIs as Tools",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-196",
            "topicNum": 12,
            "title": "Building a Tool-Using AI Assistant",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: Agent Workflows and Orchestration",
        "subtitle": "Production concepts and practical exercises for Agent Workflows and Orchestration.",
        "topics": [
          {
            "id": "ai-t-197",
            "topicNum": 1,
            "title": "What Is Workflow Orchestration?",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-198",
            "topicNum": 2,
            "title": "Sequential AI Workflows",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-199",
            "topicNum": 3,
            "title": "Conditional Workflow Branches",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-200",
            "topicNum": 4,
            "title": "Breaking Tasks into Subtasks",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-201",
            "topicNum": 5,
            "title": "Managing State Across Steps",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-202",
            "topicNum": 6,
            "title": "Passing Context Between Components",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-203",
            "topicNum": 7,
            "title": "Retries and Timeouts",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-204",
            "topicNum": 8,
            "title": "Fallback Strategies",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-205",
            "topicNum": 9,
            "title": "Human Approval Steps",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-206",
            "topicNum": 10,
            "title": "Managing Long-Running Tasks",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-207",
            "topicNum": 11,
            "title": "Testing Multi-Step Workflows",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-208",
            "topicNum": 12,
            "title": "Building a Workflow-Based AI Application",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Multi-Agent Systems",
        "subtitle": "Production concepts and practical exercises for Multi-Agent Systems.",
        "topics": [
          {
            "id": "ai-t-209",
            "topicNum": 1,
            "title": "What Is a Multi-Agent System?",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-210",
            "topicNum": 2,
            "title": "Single-Agent vs Multi-Agent Architecture",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-211",
            "topicNum": 3,
            "title": "Defining Agent Roles",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-212",
            "topicNum": 4,
            "title": "Task Delegation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-213",
            "topicNum": 5,
            "title": "Agent Handoffs",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-214",
            "topicNum": 6,
            "title": "Communication Between Agents",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-215",
            "topicNum": 7,
            "title": "Shared State and Coordination",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-216",
            "topicNum": 8,
            "title": "Sequential and Parallel Agent Execution",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-217",
            "topicNum": 9,
            "title": "Managing Conflicting Outputs",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-218",
            "topicNum": 10,
            "title": "Evaluating Multi-Agent Performance",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-219",
            "topicNum": 11,
            "title": "Debugging Multi-Agent Failures",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-220",
            "topicNum": 12,
            "title": "When Multi-Agent Systems Are Worth the Complexity",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-6",
    "tabNum": 6,
    "title": "AI Safety, Evaluation and Reliability",
    "shortTitle": "AI Safety, Evaluation and Reliability",
    "subtitle": "Automated evaluation rubrics, prompt injection defense, and observability.",
    "iconName": "chart",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Evaluating AI Applications",
        "subtitle": "Production concepts and practical exercises for Evaluating AI Applications.",
        "topics": [
          {
            "id": "ai-t-221",
            "topicNum": 1,
            "title": "Why AI Applications Need Evaluation",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-222",
            "topicNum": 2,
            "title": "Defining Quality Criteria",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-223",
            "topicNum": 3,
            "title": "Creating Representative Test Sets",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-224",
            "topicNum": 4,
            "title": "Establishing Baseline Performance",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-225",
            "topicNum": 5,
            "title": "Evaluating Accuracy and Relevance",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-226",
            "topicNum": 6,
            "title": "Measuring Groundedness",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-227",
            "topicNum": 7,
            "title": "Testing Structured Outputs",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-228",
            "topicNum": 8,
            "title": "Evaluating Tool-Calling Accuracy",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-229",
            "topicNum": 9,
            "title": "Measuring Latency and Cost",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-230",
            "topicNum": 10,
            "title": "Regression Testing for AI Applications",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-231",
            "topicNum": 11,
            "title": "Human Evaluation and Rating Rubrics",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-232",
            "topicNum": 12,
            "title": "Building an Automated Evaluation Pipeline",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: AI Security and Responsible AI",
        "subtitle": "Production concepts and practical exercises for AI Security and Responsible AI.",
        "topics": [
          {
            "id": "ai-t-233",
            "topicNum": 1,
            "title": "Common AI Application Security Risks",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-234",
            "topicNum": 2,
            "title": "Prompt Injection Fundamentals",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-235",
            "topicNum": 3,
            "title": "Direct and Indirect Prompt Injection",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-236",
            "topicNum": 4,
            "title": "Handling Untrusted Documents and Content",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-237",
            "topicNum": 5,
            "title": "Protecting Personal and Sensitive Data",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-238",
            "topicNum": 6,
            "title": "Least-Privilege Tool Access",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-239",
            "topicNum": 7,
            "title": "Input and Output Validation",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-240",
            "topicNum": 8,
            "title": "Human Approval for High-Impact Actions",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-241",
            "topicNum": 9,
            "title": "Preventing Unauthorized Tool Execution",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-242",
            "topicNum": 10,
            "title": "Audit Trails and Access Control",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-243",
            "topicNum": 11,
            "title": "Abuse Prevention and Rate Limiting",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-244",
            "topicNum": 12,
            "title": "Responsible AI and Governance Basics",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Observability and Reliability",
        "subtitle": "Production concepts and practical exercises for Observability and Reliability.",
        "topics": [
          {
            "id": "ai-t-245",
            "topicNum": 1,
            "title": "What Is AI Observability?",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-246",
            "topicNum": 2,
            "title": "Application Logs and Traces",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-247",
            "topicNum": 3,
            "title": "Monitoring Errors and Latency",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-248",
            "topicNum": 4,
            "title": "Tracking Model and Prompt Versions",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-249",
            "topicNum": 5,
            "title": "Monitoring Token Usage and Cost",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-250",
            "topicNum": 6,
            "title": "Rate Limits and Exponential Backoff",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-251",
            "topicNum": 7,
            "title": "Graceful Degradation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-252",
            "topicNum": 8,
            "title": "Fallback Models and Alternative Responses",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-253",
            "topicNum": 9,
            "title": "Handling External Service Outages",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-254",
            "topicNum": 10,
            "title": "Incident Investigation",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-255",
            "topicNum": 11,
            "title": "Reliability Testing",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-256",
            "topicNum": 12,
            "title": "Continuous Improvement from Production Feedback",
            "duration": "Reading • 12 min",
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
    "title": "Deployment and AI Operations",
    "shortTitle": "Deployment and AI Operations",
    "subtitle": "Production FastAPI services, Docker containers, cloud hosting, and CI/CD.",
    "iconName": "excel",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: Building Production-Ready AI Services",
        "subtitle": "Production concepts and practical exercises for Building Production-Ready AI Services.",
        "topics": [
          {
            "id": "ai-t-257",
            "topicNum": 1,
            "title": "Designing APIs for AI Features",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-258",
            "topicNum": 2,
            "title": "Creating AI Endpoints with FastAPI",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-259",
            "topicNum": 3,
            "title": "Request and Response Validation",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-260",
            "topicNum": 4,
            "title": "Centralized Error Handling",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-261",
            "topicNum": 5,
            "title": "Asynchronous Requests Fundamentals",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-262",
            "topicNum": 6,
            "title": "Background Tasks and Queues",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-263",
            "topicNum": 7,
            "title": "Streaming AI Responses",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-264",
            "topicNum": 8,
            "title": "Caching AI Results",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-265",
            "topicNum": 9,
            "title": "API Documentation",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-266",
            "topicNum": 10,
            "title": "Authentication and Authorization",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-267",
            "topicNum": 11,
            "title": "Database Integration",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-268",
            "topicNum": 12,
            "title": "Testing AI Service Endpoints",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: Docker and Cloud Deployment",
        "subtitle": "Production concepts and practical exercises for Docker and Cloud Deployment.",
        "topics": [
          {
            "id": "ai-t-269",
            "topicNum": 1,
            "title": "What Is Application Deployment?",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-270",
            "topicNum": 2,
            "title": "Development vs Production Environments",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-271",
            "topicNum": 3,
            "title": "Docker Fundamentals",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-272",
            "topicNum": 4,
            "title": "Writing a Dockerfile",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-273",
            "topicNum": 5,
            "title": "Building and Running Containers",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-274",
            "topicNum": 6,
            "title": "Environment-Based Configuration",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-275",
            "topicNum": 7,
            "title": "Managing Secrets in Deployment",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-276",
            "topicNum": 8,
            "title": "Deploying an AI Web API",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-277",
            "topicNum": 9,
            "title": "Cloud Hosting Fundamentals",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-278",
            "topicNum": 10,
            "title": "Resource Limits and Scaling",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-279",
            "topicNum": 11,
            "title": "Monitoring a Deployed Service",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-280",
            "topicNum": 12,
            "title": "Deployment Testing and Rollback",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: CI/CD and AI Lifecycle Management",
        "subtitle": "Production concepts and practical exercises for CI/CD and AI Lifecycle Management.",
        "topics": [
          {
            "id": "ai-t-281",
            "topicNum": 1,
            "title": "What Is CI/CD?",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-282",
            "topicNum": 2,
            "title": "Automated Tests in Continuous Integration",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-283",
            "topicNum": 3,
            "title": "Build and Release Pipelines",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-284",
            "topicNum": 4,
            "title": "Versioning Code and Dependencies",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-285",
            "topicNum": 5,
            "title": "Versioning Prompts and Model Configurations",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-286",
            "topicNum": 6,
            "title": "Managing Model and Dataset Versions",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-287",
            "topicNum": 7,
            "title": "Releasing Changes Safely",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-288",
            "topicNum": 8,
            "title": "Monitoring Usage and Costs",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-289",
            "topicNum": 9,
            "title": "Regression Evaluation Before Release",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-290",
            "topicNum": 10,
            "title": "Rollbacks and Change Management",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-291",
            "topicNum": 11,
            "title": "Managing Application Updates",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-292",
            "topicNum": 12,
            "title": "Continuous Improvement of AI Systems",
            "duration": "Video • 18 min",
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
    "title": "Projects and Career Readiness",
    "shortTitle": "Projects and Career Readiness",
    "subtitle": "Knowledge assistants, autonomous agents, enterprise capstones, and interviews.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: AI Knowledge Assistant Project",
        "subtitle": "Production concepts and practical exercises for AI Knowledge Assistant Project.",
        "topics": [
          {
            "id": "ai-t-293",
            "topicNum": 1,
            "title": "Identifying User Needs and Requirements",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-294",
            "topicNum": 2,
            "title": "Defining the Project Scope",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-295",
            "topicNum": 3,
            "title": "Collecting and Preparing Documents",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-296",
            "topicNum": 4,
            "title": "Building a Document Ingestion Pipeline",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-297",
            "topicNum": 5,
            "title": "Creating Embeddings and a Vector Index",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-298",
            "topicNum": 6,
            "title": "Implementing Retrieval and Answer Generation",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-299",
            "topicNum": 7,
            "title": "Adding Citations and Source References",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-300",
            "topicNum": 8,
            "title": "Handling Unanswerable Questions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-301",
            "topicNum": 9,
            "title": "Creating an Evaluation Test Set",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-302",
            "topicNum": 10,
            "title": "Testing Quality, Security and Latency",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-303",
            "topicNum": 11,
            "title": "Deploying the Knowledge Assistant",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-304",
            "topicNum": 12,
            "title": "Documenting Results and Limitations",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Module 27: AI Agent Application Project",
        "subtitle": "Production concepts and practical exercises for AI Agent Application Project.",
        "topics": [
          {
            "id": "ai-t-305",
            "topicNum": 1,
            "title": "Choosing a Well-Defined Task",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-306",
            "topicNum": 2,
            "title": "Designing the Agent Architecture",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-307",
            "topicNum": 3,
            "title": "Connecting an LLM",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-308",
            "topicNum": 4,
            "title": "Defining and Validating Tools",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-309",
            "topicNum": 5,
            "title": "Integrating External APIs",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-310",
            "topicNum": 6,
            "title": "Managing State and Context",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-311",
            "topicNum": 7,
            "title": "Adding Human Approval Where Needed",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-312",
            "topicNum": 8,
            "title": "Handling Errors and Edge Cases",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-313",
            "topicNum": 9,
            "title": "Testing Agent Decisions and Tool Calls",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-314",
            "topicNum": 10,
            "title": "Measuring Cost and Latency",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-315",
            "topicNum": 11,
            "title": "Deploying and Monitoring the Agent",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-316",
            "topicNum": 12,
            "title": "Presenting the Complete Working Application",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Module 28: Production AI Capstone",
        "subtitle": "Production concepts and practical exercises for Production AI Capstone.",
        "topics": [
          {
            "id": "ai-t-317",
            "topicNum": 1,
            "title": "Selecting a Real-World AI Problem",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-318",
            "topicNum": 2,
            "title": "Gathering Functional and Non-Functional Requirements",
            "duration": "Project • 16 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-319",
            "topicNum": 3,
            "title": "Designing the Complete AI Architecture",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-320",
            "topicNum": 4,
            "title": "Choosing Models and Application Components",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-321",
            "topicNum": 5,
            "title": "Building the Core AI Workflow",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-322",
            "topicNum": 6,
            "title": "Adding RAG or Tool Use Where Appropriate",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-323",
            "topicNum": 7,
            "title": "Implementing Security and Validation",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-324",
            "topicNum": 8,
            "title": "Building Automated Evaluations",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-325",
            "topicNum": 9,
            "title": "Deploying the Application",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-326",
            "topicNum": 10,
            "title": "Adding Logging and Monitoring",
            "duration": "Reading • 16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-327",
            "topicNum": 11,
            "title": "Testing Failure Recovery",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-328",
            "topicNum": 12,
            "title": "Documenting Architecture and Trade-Offs",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-329",
            "topicNum": 13,
            "title": "Demonstrating the Final Application",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Module 29: Portfolio and Interview Preparation",
        "subtitle": "Production concepts and practical exercises for Portfolio and Interview Preparation.",
        "topics": [
          {
            "id": "ai-t-330",
            "topicNum": 1,
            "title": "Building an AI Engineering GitHub Portfolio",
            "duration": "Quiz • 16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-331",
            "topicNum": 2,
            "title": "Writing Technical Project Case Studies",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-332",
            "topicNum": 3,
            "title": "Python Coding Interview Practice",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-333",
            "topicNum": 4,
            "title": "REST API and Backend Interview Questions",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-334",
            "topicNum": 5,
            "title": "LLM and Prompt Engineering Questions",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-335",
            "topicNum": 6,
            "title": "Embeddings and Vector Search Questions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-336",
            "topicNum": 7,
            "title": "RAG Architecture and Evaluation Questions",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-337",
            "topicNum": 8,
            "title": "AI Agent and Tool-Calling Questions",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ai-t-338",
            "topicNum": 9,
            "title": "AI Security and Prompt Injection Questions",
            "duration": "Video • 16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-339",
            "topicNum": 10,
            "title": "Deployment and Observability Questions",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-340",
            "topicNum": 11,
            "title": "AI System Design and Cost Trade-Offs",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ai-t-341",
            "topicNum": 12,
            "title": "Explaining Projects in Technical Interviews",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ai-t-342",
            "topicNum": 13,
            "title": "Resume and Portfolio Presentation",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ai-t-343",
            "topicNum": 14,
            "title": "Creating a Continued Learning Roadmap",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
