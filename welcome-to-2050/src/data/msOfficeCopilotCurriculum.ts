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

export const MS_OFFICE_COPILOT_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "Microsoft 365 and Copilot Fundamentals",
    "shortTitle": "Microsoft 365 and Copilot Fundamentals",
    "subtitle": "Microsoft 365 ecosystem, OneDrive, SharePoint, cloud setup, and Copilot AI safety.",
    "iconName": "genai",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Introduction to Microsoft 365",
        "subtitle": "Practical concepts and real-world exercises for Introduction to Microsoft 365.",
        "topics": [
          {
            "id": "ms-t-1",
            "topicNum": 1,
            "title": "What Is Microsoft 365?",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "completed"
          },
          {
            "id": "ms-t-2",
            "topicNum": 2,
            "title": "Microsoft 365 vs Microsoft Office",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ms-t-3",
            "topicNum": 3,
            "title": "Overview of Word, Excel and PowerPoint",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "ms-t-4",
            "topicNum": 4,
            "title": "Introduction to Outlook and Teams",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-5",
            "topicNum": 5,
            "title": "Introduction to OneDrive and SharePoint",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-6",
            "topicNum": 6,
            "title": "Understanding Microsoft 365 Plans",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-7",
            "topicNum": 7,
            "title": "Personal Microsoft Account vs Work or School Account",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-8",
            "topicNum": 8,
            "title": "Signing In and Navigating Microsoft 365",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-9",
            "topicNum": 9,
            "title": "Desktop Apps vs Web Apps",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-10",
            "topicNum": 10,
            "title": "Understanding Cloud-Based Productivity",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Introduction to Microsoft Copilot AI",
        "subtitle": "Practical concepts and real-world exercises for Introduction to Microsoft Copilot AI.",
        "topics": [
          {
            "id": "ms-t-11",
            "topicNum": 1,
            "title": "What Is Microsoft Copilot?",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-12",
            "topicNum": 2,
            "title": "What Is Microsoft 365 Copilot?",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-13",
            "topicNum": 3,
            "title": "Copilot Chat vs Copilot Inside Microsoft 365 Apps",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-14",
            "topicNum": 4,
            "title": "How Generative AI Works at a High Level",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-15",
            "topicNum": 5,
            "title": "Understanding AI Prompts",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-16",
            "topicNum": 6,
            "title": "Writing Your First Copilot Prompt",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-17",
            "topicNum": 7,
            "title": "Providing Context and Instructions",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-18",
            "topicNum": 8,
            "title": "Using Copilot to Summarize Information",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-19",
            "topicNum": 9,
            "title": "Understanding AI Limitations and Hallucinations",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-20",
            "topicNum": 10,
            "title": "Verifying AI-Generated Information",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-21",
            "topicNum": 11,
            "title": "Copilot Feature Availability and Licensing",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: OneDrive, SharePoint and File Management",
        "subtitle": "Practical concepts and real-world exercises for OneDrive, SharePoint and File Management.",
        "topics": [
          {
            "id": "ms-t-22",
            "topicNum": 1,
            "title": "Introduction to OneDrive",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-23",
            "topicNum": 2,
            "title": "Uploading and Downloading Files",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-24",
            "topicNum": 3,
            "title": "Creating Folders and Organizing Documents",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-25",
            "topicNum": 4,
            "title": "Searching for Files",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-26",
            "topicNum": 5,
            "title": "Sharing Files and Folders",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-27",
            "topicNum": 6,
            "title": "Understanding View and Edit Permissions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-28",
            "topicNum": 7,
            "title": "Introduction to SharePoint",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-29",
            "topicNum": 8,
            "title": "SharePoint Sites and Document Libraries",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-30",
            "topicNum": 9,
            "title": "Co-Authoring Documents",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-31",
            "topicNum": 10,
            "title": "Version History and File Recovery",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-32",
            "topicNum": 11,
            "title": "OneDrive vs SharePoint",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-33",
            "topicNum": 12,
            "title": "Preparing Files for Copilot Workflows",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: AI Productivity, Privacy and Security",
        "subtitle": "Practical concepts and real-world exercises for AI Productivity, Privacy and Security.",
        "topics": [
          {
            "id": "ms-t-34",
            "topicNum": 1,
            "title": "Responsible Use of Copilot",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-35",
            "topicNum": 2,
            "title": "Protecting Sensitive Information",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-36",
            "topicNum": 3,
            "title": "Understanding Organizational Data Permissions",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-37",
            "topicNum": 4,
            "title": "Checking File Sharing and Access",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-38",
            "topicNum": 5,
            "title": "Recognizing AI-Generated Errors",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-39",
            "topicNum": 6,
            "title": "Fact-Checking Important Information",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-40",
            "topicNum": 7,
            "title": "Copyright and Attribution Basics",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-41",
            "topicNum": 8,
            "title": "Accessibility and Inclusive Content",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-42",
            "topicNum": 9,
            "title": "Human Review of AI-Generated Documents",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-43",
            "topicNum": 10,
            "title": "Creating a Safe AI Usage Checklist",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-2",
    "tabNum": 2,
    "title": "Microsoft Word and Copilot",
    "shortTitle": "Microsoft Word and Copilot",
    "subtitle": "Word formatting, drafting with Copilot, tone refinement, and executive reports.",
    "iconName": "excel",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: Microsoft Word Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Microsoft Word Fundamentals.",
        "topics": [
          {
            "id": "ms-t-44",
            "topicNum": 1,
            "title": "Introduction to the Word Interface",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-45",
            "topicNum": 2,
            "title": "Creating, Opening and Saving Documents",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-46",
            "topicNum": 3,
            "title": "Editing and Formatting Text",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-47",
            "topicNum": 4,
            "title": "Fonts, Paragraphs and Alignment",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-48",
            "topicNum": 5,
            "title": "Bullets and Numbered Lists",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-49",
            "topicNum": 6,
            "title": "Styles and Heading Levels",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-50",
            "topicNum": 7,
            "title": "Page Layout and Margins",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-51",
            "topicNum": 8,
            "title": "Page Breaks and Section Breaks",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-52",
            "topicNum": 9,
            "title": "Headers, Footers and Page Numbers",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-53",
            "topicNum": 10,
            "title": "Tables, Images and Hyperlinks",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-54",
            "topicNum": 11,
            "title": "Find and Replace",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-55",
            "topicNum": 12,
            "title": "Spelling and Grammar Checks",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-56",
            "topicNum": 13,
            "title": "Exporting Documents to PDF",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: Copilot in Word",
        "subtitle": "Practical concepts and real-world exercises for Copilot in Word.",
        "topics": [
          {
            "id": "ms-t-57",
            "topicNum": 1,
            "title": "Understanding Copilot in Word",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-58",
            "topicNum": 2,
            "title": "Drafting Documents from Prompts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-59",
            "topicNum": 3,
            "title": "Creating a First Draft from Instructions",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-60",
            "topicNum": 4,
            "title": "Rewriting and Improving Text",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-61",
            "topicNum": 5,
            "title": "Adjusting Tone and Formality",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-62",
            "topicNum": 6,
            "title": "Summarizing Long Documents",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-63",
            "topicNum": 7,
            "title": "Creating Content from Existing Files",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-64",
            "topicNum": 8,
            "title": "Expanding Notes into Complete Documents",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-65",
            "topicNum": 9,
            "title": "Generating Lists and Tables",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-66",
            "topicNum": 10,
            "title": "Refining AI-Generated Content",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-67",
            "topicNum": 11,
            "title": "Reviewing and Accepting Suggested Changes",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-68",
            "topicNum": 12,
            "title": "Verifying Facts and References",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: Professional Documents with Word and Copilot",
        "subtitle": "Practical concepts and real-world exercises for Professional Documents with Word and Copilot.",
        "topics": [
          {
            "id": "ms-t-69",
            "topicNum": 1,
            "title": "Creating Professional Business Letters",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-70",
            "topicNum": 2,
            "title": "Drafting Memos and Internal Notices",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-71",
            "topicNum": 3,
            "title": "Preparing Business Reports",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-72",
            "topicNum": 4,
            "title": "Creating Proposals and Project Documents",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-73",
            "topicNum": 5,
            "title": "Writing Meeting Minutes",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-74",
            "topicNum": 6,
            "title": "Extracting Action Items from Notes",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-75",
            "topicNum": 7,
            "title": "Creating Standard Operating Procedures",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-76",
            "topicNum": 8,
            "title": "Developing Reusable Document Templates",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-77",
            "topicNum": 9,
            "title": "Maintaining Formatting Consistency",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-78",
            "topicNum": 10,
            "title": "Proofreading and Final Quality Checks",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-79",
            "topicNum": 11,
            "title": "Project: Create a Professional Business Report",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Microsoft Excel and Copilot",
    "shortTitle": "Microsoft Excel and Copilot",
    "subtitle": "XLOOKUP, formulas, PivotTables, dashboard design, and Copilot data analysis.",
    "iconName": "excel",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: Microsoft Excel Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Microsoft Excel Fundamentals.",
        "topics": [
          {
            "id": "ms-t-80",
            "topicNum": 1,
            "title": "Introduction to the Excel Interface",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-81",
            "topicNum": 2,
            "title": "Workbooks, Worksheets, Rows and Columns",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-82",
            "topicNum": 3,
            "title": "Entering and Editing Data",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-83",
            "topicNum": 4,
            "title": "Cell References and Data Types",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-84",
            "topicNum": 5,
            "title": "Number, Date and Text Formatting",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-85",
            "topicNum": 6,
            "title": "Basic Arithmetic Formulas",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-86",
            "topicNum": 7,
            "title": "Relative and Absolute Cell References",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-87",
            "topicNum": 8,
            "title": "SUM, AVERAGE, MIN and MAX",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-88",
            "topicNum": 9,
            "title": "COUNT, COUNTA and COUNTIF",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-89",
            "topicNum": 10,
            "title": "IF and Nested IF",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-90",
            "topicNum": 11,
            "title": "Sorting and Filtering Data",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-91",
            "topicNum": 12,
            "title": "Excel Tables",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-92",
            "topicNum": 13,
            "title": "Conditional Formatting",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-93",
            "topicNum": 14,
            "title": "Creating Basic Charts",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Intermediate and Advanced Excel",
        "subtitle": "Practical concepts and real-world exercises for Intermediate and Advanced Excel.",
        "topics": [
          {
            "id": "ms-t-94",
            "topicNum": 1,
            "title": "Working with Text Functions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-95",
            "topicNum": 2,
            "title": "LEFT, RIGHT, MID and TRIM",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-96",
            "topicNum": 3,
            "title": "Date and Time Functions",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-97",
            "topicNum": 4,
            "title": "SUMIF and SUMIFS",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-98",
            "topicNum": 5,
            "title": "COUNTIF and COUNTIFS",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-99",
            "topicNum": 6,
            "title": "XLOOKUP Fundamentals",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-100",
            "topicNum": 7,
            "title": "INDEX and MATCH",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-101",
            "topicNum": 8,
            "title": "IFERROR and Error Handling",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-102",
            "topicNum": 9,
            "title": "Data Validation and Drop-Down Lists",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-103",
            "topicNum": 10,
            "title": "Removing Duplicates",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-104",
            "topicNum": 11,
            "title": "Cleaning Inconsistent Data",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-105",
            "topicNum": 12,
            "title": "PivotTables",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-106",
            "topicNum": 13,
            "title": "PivotCharts and Slicers",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-107",
            "topicNum": 14,
            "title": "Dashboard Fundamentals",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-108",
            "topicNum": 15,
            "title": "Interpreting Trends and Outliers",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Copilot in Excel",
        "subtitle": "Practical concepts and real-world exercises for Copilot in Excel.",
        "topics": [
          {
            "id": "ms-t-109",
            "topicNum": 1,
            "title": "Understanding Copilot in Excel",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-110",
            "topicNum": 2,
            "title": "Preparing Data for AI Analysis",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-111",
            "topicNum": 3,
            "title": "Asking Questions About a Dataset",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-112",
            "topicNum": 4,
            "title": "Generating and Explaining Formulas",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-113",
            "topicNum": 5,
            "title": "Understanding Existing Formulas",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-114",
            "topicNum": 6,
            "title": "Summarizing Trends and Patterns",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-115",
            "topicNum": 7,
            "title": "Identifying Potential Outliers",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-116",
            "topicNum": 8,
            "title": "Suggesting Charts and Visualizations",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-117",
            "topicNum": 9,
            "title": "Exploring Data with Natural-Language Questions",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-118",
            "topicNum": 10,
            "title": "Validating AI-Generated Formulas",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-119",
            "topicNum": 11,
            "title": "Checking Calculations Against Source Data",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-120",
            "topicNum": 12,
            "title": "Understanding Feature and Data-Format Limitations",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Excel Reporting and Business Analysis",
        "subtitle": "Practical concepts and real-world exercises for Excel Reporting and Business Analysis.",
        "topics": [
          {
            "id": "ms-t-121",
            "topicNum": 1,
            "title": "Cleaning a Raw Business Dataset",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-122",
            "topicNum": 2,
            "title": "Creating a Sales Summary",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-123",
            "topicNum": 3,
            "title": "Analyzing Monthly Performance",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-124",
            "topicNum": 4,
            "title": "Comparing Products and Regions",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-125",
            "topicNum": 5,
            "title": "Building PivotTable Reports",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-126",
            "topicNum": 6,
            "title": "Creating KPI Cards and Charts",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-127",
            "topicNum": 7,
            "title": "Designing an Interactive Dashboard",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-128",
            "topicNum": 8,
            "title": "Using Copilot to Summarize Business Findings",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-129",
            "topicNum": 9,
            "title": "Writing an Executive Summary",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-130",
            "topicNum": 10,
            "title": "Project: Sales Analysis and Dashboard",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "Microsoft PowerPoint and Copilot",
    "shortTitle": "Microsoft PowerPoint and Copilot",
    "subtitle": "Deck creation, slide storytelling, Copilot generation from Word, and visual design.",
    "iconName": "powerbi",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Microsoft PowerPoint Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Microsoft PowerPoint Fundamentals.",
        "topics": [
          {
            "id": "ms-t-131",
            "topicNum": 1,
            "title": "Introduction to the PowerPoint Interface",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-132",
            "topicNum": 2,
            "title": "Creating and Managing Slides",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-133",
            "topicNum": 3,
            "title": "Slide Layouts and Themes",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-134",
            "topicNum": 4,
            "title": "Adding and Formatting Text",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-135",
            "topicNum": 5,
            "title": "Inserting Images, Icons and Shapes",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-136",
            "topicNum": 6,
            "title": "Tables and Charts",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-137",
            "topicNum": 7,
            "title": "SmartArt Fundamentals",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-138",
            "topicNum": 8,
            "title": "Aligning and Arranging Objects",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-139",
            "topicNum": 9,
            "title": "Slide Transitions and Animations",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-140",
            "topicNum": 10,
            "title": "Speaker Notes",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-141",
            "topicNum": 11,
            "title": "Slide Show and Presentation Modes",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-142",
            "topicNum": 12,
            "title": "Exporting Presentations",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Copilot in PowerPoint",
        "subtitle": "Practical concepts and real-world exercises for Copilot in PowerPoint.",
        "topics": [
          {
            "id": "ms-t-143",
            "topicNum": 1,
            "title": "Understanding Copilot in PowerPoint",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-144",
            "topicNum": 2,
            "title": "Creating a Presentation from a Prompt",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-145",
            "topicNum": 3,
            "title": "Drafting Slides from a Word Document",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-146",
            "topicNum": 4,
            "title": "Generating Slide Outlines",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-147",
            "topicNum": 5,
            "title": "Summarizing Long Documents into Slides",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-148",
            "topicNum": 6,
            "title": "Reorganizing Slide Content",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-149",
            "topicNum": 7,
            "title": "Improving Titles and Bullet Points",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-150",
            "topicNum": 8,
            "title": "Creating Speaker Notes",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-151",
            "topicNum": 9,
            "title": "Refining Slide Structure and Messaging",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-152",
            "topicNum": 10,
            "title": "Reviewing AI-Generated Presentations",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-153",
            "topicNum": 11,
            "title": "Checking Facts, Charts and References",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Professional Business Presentations",
        "subtitle": "Practical concepts and real-world exercises for Professional Business Presentations.",
        "topics": [
          {
            "id": "ms-t-154",
            "topicNum": 1,
            "title": "Understanding the Audience and Objective",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-155",
            "topicNum": 2,
            "title": "Building a Clear Presentation Story",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-156",
            "topicNum": 3,
            "title": "Creating Project Update Presentations",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-157",
            "topicNum": 4,
            "title": "Developing Sales and Marketing Decks",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-158",
            "topicNum": 5,
            "title": "Preparing Training Presentations",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-159",
            "topicNum": 6,
            "title": "Presenting Data and Business Insights",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-160",
            "topicNum": 7,
            "title": "Designing Executive Summary Slides",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-161",
            "topicNum": 8,
            "title": "Applying Visual Hierarchy",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-162",
            "topicNum": 9,
            "title": "Reducing Text Clutter",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-163",
            "topicNum": 10,
            "title": "Maintaining Brand Consistency",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-164",
            "topicNum": 11,
            "title": "Rehearsing and Delivering Presentations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-165",
            "topicNum": 12,
            "title": "Project: Create a Business Presentation with Copilot",
            "duration": "Video • 10 min",
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
    "title": "Microsoft Outlook and Copilot",
    "shortTitle": "Microsoft Outlook and Copilot",
    "subtitle": "Inbox management, professional email drafting with Copilot, and calendar efficiency.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: Microsoft Outlook Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Microsoft Outlook Fundamentals.",
        "topics": [
          {
            "id": "ms-t-166",
            "topicNum": 1,
            "title": "Introduction to Outlook",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-167",
            "topicNum": 2,
            "title": "Sending and Receiving Emails",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-168",
            "topicNum": 3,
            "title": "Email Formatting and Attachments",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-169",
            "topicNum": 4,
            "title": "Reply, Reply All and Forward",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-170",
            "topicNum": 5,
            "title": "Managing Folders and Categories",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-171",
            "topicNum": 6,
            "title": "Searching and Filtering Emails",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-172",
            "topicNum": 7,
            "title": "Managing Junk and Important Emails",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-173",
            "topicNum": 8,
            "title": "Calendar and Appointment Basics",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-174",
            "topicNum": 9,
            "title": "Scheduling Meetings",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-175",
            "topicNum": 10,
            "title": "Managing Contacts",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-176",
            "topicNum": 11,
            "title": "Tasks, Flags and Follow-Ups",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-177",
            "topicNum": 12,
            "title": "Professional Email Etiquette",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: Copilot in Outlook",
        "subtitle": "Practical concepts and real-world exercises for Copilot in Outlook.",
        "topics": [
          {
            "id": "ms-t-178",
            "topicNum": 1,
            "title": "Understanding Copilot in Outlook",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-179",
            "topicNum": 2,
            "title": "Drafting Professional Emails",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-180",
            "topicNum": 3,
            "title": "Adjusting Tone and Length",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-181",
            "topicNum": 4,
            "title": "Rewriting Unclear Messages",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-182",
            "topicNum": 5,
            "title": "Summarizing Long Email Threads",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-183",
            "topicNum": 6,
            "title": "Preparing Replies from Email Context",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-184",
            "topicNum": 7,
            "title": "Extracting Decisions and Action Items",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-185",
            "topicNum": 8,
            "title": "Preparing Meeting Briefs",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-186",
            "topicNum": 9,
            "title": "Summarizing Relevant Email Information",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-187",
            "topicNum": 10,
            "title": "Reviewing AI-Generated Replies",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-188",
            "topicNum": 11,
            "title": "Verifying Context Before Sending",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: Email and Calendar Productivity",
        "subtitle": "Practical concepts and real-world exercises for Email and Calendar Productivity.",
        "topics": [
          {
            "id": "ms-t-189",
            "topicNum": 1,
            "title": "Organizing Inbox Priorities",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-190",
            "topicNum": 2,
            "title": "Creating Email Templates",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-191",
            "topicNum": 3,
            "title": "Planning a Daily Work Schedule",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-192",
            "topicNum": 4,
            "title": "Preparing for Meetings",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-193",
            "topicNum": 5,
            "title": "Scheduling Meetings Efficiently",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-194",
            "topicNum": 6,
            "title": "Identifying Follow-Up Tasks",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-195",
            "topicNum": 7,
            "title": "Drafting Meeting Agendas",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-196",
            "topicNum": 8,
            "title": "Creating Follow-Up Messages",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-197",
            "topicNum": 9,
            "title": "Managing Calendar Conflicts",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-198",
            "topicNum": 10,
            "title": "Designing a Personal Productivity Workflow",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-199",
            "topicNum": 11,
            "title": "Project: Email and Calendar Management",
            "duration": "Video • 14 min",
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
    "title": "Microsoft Teams, Forms and Collaboration",
    "shortTitle": "Microsoft Teams, Forms and Collaboration",
    "subtitle": "Teams channels, meeting recaps with Copilot, Microsoft Forms, and feedback analytics.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: Microsoft Teams Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Microsoft Teams Fundamentals.",
        "topics": [
          {
            "id": "ms-t-200",
            "topicNum": 1,
            "title": "Introduction to Microsoft Teams",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-201",
            "topicNum": 2,
            "title": "Chats and Group Chats",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-202",
            "topicNum": 3,
            "title": "Teams and Channels",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-203",
            "topicNum": 4,
            "title": "Creating and Managing Meetings",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-204",
            "topicNum": 5,
            "title": "Meeting Invitations and Settings",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-205",
            "topicNum": 6,
            "title": "Screen Sharing and Collaboration",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-206",
            "topicNum": 7,
            "title": "Sharing Files in Teams",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-207",
            "topicNum": 8,
            "title": "Notifications and Activity Feed",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-208",
            "topicNum": 9,
            "title": "Searching Messages and Files",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-209",
            "topicNum": 10,
            "title": "Managing Team Communication",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-210",
            "topicNum": 11,
            "title": "Collaboration and Meeting Etiquette",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Copilot in Microsoft Teams",
        "subtitle": "Practical concepts and real-world exercises for Copilot in Microsoft Teams.",
        "topics": [
          {
            "id": "ms-t-211",
            "topicNum": 1,
            "title": "Understanding Copilot in Teams",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-212",
            "topicNum": 2,
            "title": "Meeting Recaps and Summaries",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-213",
            "topicNum": 3,
            "title": "Summarizing Discussions",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-214",
            "topicNum": 4,
            "title": "Identifying Decisions and Action Items",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-215",
            "topicNum": 5,
            "title": "Asking Questions About Meeting Context",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-216",
            "topicNum": 6,
            "title": "Preparing Meeting Agendas",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-217",
            "topicNum": 7,
            "title": "Drafting Meeting Minutes",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-218",
            "topicNum": 8,
            "title": "Following Up on Team Decisions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-219",
            "topicNum": 9,
            "title": "Reviewing Transcripts and AI Summaries",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-220",
            "topicNum": 10,
            "title": "Verifying Summaries Against Meeting Records",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-221",
            "topicNum": 11,
            "title": "Understanding Meeting and Licensing Requirements",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Microsoft Forms and Response Analysis",
        "subtitle": "Practical concepts and real-world exercises for Microsoft Forms and Response Analysis.",
        "topics": [
          {
            "id": "ms-t-222",
            "topicNum": 1,
            "title": "Introduction to Microsoft Forms",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-223",
            "topicNum": 2,
            "title": "Creating Surveys and Questionnaires",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-224",
            "topicNum": 3,
            "title": "Question Types and Settings",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-225",
            "topicNum": 4,
            "title": "Required Questions and Branching",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-226",
            "topicNum": 5,
            "title": "Sharing Forms",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-227",
            "topicNum": 6,
            "title": "Collecting Responses",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-228",
            "topicNum": 7,
            "title": "Reviewing Response Summaries",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-229",
            "topicNum": 8,
            "title": "Exporting Responses to Excel",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-230",
            "topicNum": 9,
            "title": "Analyzing Survey Results",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-231",
            "topicNum": 10,
            "title": "Using AI to Summarize Feedback",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-232",
            "topicNum": 11,
            "title": "Project: Employee Feedback Survey",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Power Automate and Integrated AI Workflows",
    "shortTitle": "Power Automate and Integrated AI Workflows",
    "subtitle": "Cloud flows, automated approval triggers, multi-app workflows, and Copilot integration.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: Power Automate Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for Power Automate Fundamentals.",
        "topics": [
          {
            "id": "ms-t-233",
            "topicNum": 1,
            "title": "What Is Microsoft Power Automate?",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-234",
            "topicNum": 2,
            "title": "Understanding Triggers and Actions",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-235",
            "topicNum": 3,
            "title": "Automated vs Instant vs Scheduled Flows",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-236",
            "topicNum": 4,
            "title": "Creating Your First Cloud Flow",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-237",
            "topicNum": 5,
            "title": "Connecting Microsoft 365 Services",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-238",
            "topicNum": 6,
            "title": "Automating Email Notifications",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-239",
            "topicNum": 7,
            "title": "Creating Reminders",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-240",
            "topicNum": 8,
            "title": "Connecting Forms with Excel",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-241",
            "topicNum": 9,
            "title": "Introduction to Approval Workflows",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-242",
            "topicNum": 10,
            "title": "Conditions and Branching",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-243",
            "topicNum": 11,
            "title": "Testing and Troubleshooting Flows",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-244",
            "topicNum": 12,
            "title": "Understanding Connector and Licensing Limitations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Business Process Automation",
        "subtitle": "Practical concepts and real-world exercises for Business Process Automation.",
        "topics": [
          {
            "id": "ms-t-245",
            "topicNum": 1,
            "title": "Mapping a Repetitive Business Process",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-246",
            "topicNum": 2,
            "title": "Automating Form Submission Notifications",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-247",
            "topicNum": 3,
            "title": "Routing Requests to the Right Team",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-248",
            "topicNum": 4,
            "title": "Creating Document Approval Workflows",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-249",
            "topicNum": 5,
            "title": "Sending Automated Follow-Up Reminders",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-250",
            "topicNum": 6,
            "title": "Organizing Documents in SharePoint",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-251",
            "topicNum": 7,
            "title": "Updating Tracking Records in Excel",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-252",
            "topicNum": 8,
            "title": "Managing Failed Workflow Runs",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-253",
            "topicNum": 9,
            "title": "Handling Duplicate and Invalid Requests",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-254",
            "topicNum": 10,
            "title": "Adding Human Approval Checkpoints",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-255",
            "topicNum": 11,
            "title": "Documenting Workflow Responsibilities",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-256",
            "topicNum": 12,
            "title": "Project: Build a Business Approval Workflow",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: Integrated Microsoft 365 with Copilot",
        "subtitle": "Practical concepts and real-world exercises for Integrated Microsoft 365 with Copilot.",
        "topics": [
          {
            "id": "ms-t-257",
            "topicNum": 1,
            "title": "Planning a Project in Microsoft Teams",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-258",
            "topicNum": 2,
            "title": "Storing Documents in OneDrive and SharePoint",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-259",
            "topicNum": 3,
            "title": "Drafting Project Documents in Word",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-260",
            "topicNum": 4,
            "title": "Tracking Tasks and Data in Excel",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-261",
            "topicNum": 5,
            "title": "Communicating Updates Through Outlook",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-262",
            "topicNum": 6,
            "title": "Preparing Progress Presentations in PowerPoint",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-263",
            "topicNum": 7,
            "title": "Collecting Feedback with Microsoft Forms",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-264",
            "topicNum": 8,
            "title": "Automating Notifications with Power Automate",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-265",
            "topicNum": 9,
            "title": "Using Copilot to Summarize Project Information",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-266",
            "topicNum": 10,
            "title": "Connecting Outputs Across Microsoft 365",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-267",
            "topicNum": 11,
            "title": "Checking Permissions and Data Accuracy",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-268",
            "topicNum": 12,
            "title": "Project: End-to-End Project Management Workflow",
            "duration": "Video • 12 min",
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
    "title": "Projects, Security and Career Readiness",
    "shortTitle": "Projects, Security and Career Readiness",
    "subtitle": "Integrated enterprise capstone, privacy checks, security audit, and assessment.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: Professional Office Projects",
        "subtitle": "Practical concepts and real-world exercises for Professional Office Projects.",
        "topics": [
          {
            "id": "ms-t-269",
            "topicNum": 1,
            "title": "Create a Business Report in Word",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-270",
            "topicNum": 2,
            "title": "Analyze a Sales Dataset in Excel",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-271",
            "topicNum": 3,
            "title": "Build a KPI Dashboard",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-272",
            "topicNum": 4,
            "title": "Create a Business Presentation in PowerPoint",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-273",
            "topicNum": 5,
            "title": "Prepare a Professional Outlook Email Workflow",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-274",
            "topicNum": 6,
            "title": "Generate Meeting Minutes with Teams",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-275",
            "topicNum": 7,
            "title": "Build a Feedback Form with Microsoft Forms",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-276",
            "topicNum": 8,
            "title": "Automate an Approval Process",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-277",
            "topicNum": 9,
            "title": "Document the Complete Workflow",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-278",
            "topicNum": 10,
            "title": "Present the Final Deliverables",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: Security, Privacy and Responsible Copilot Use",
        "subtitle": "Practical concepts and real-world exercises for Security, Privacy and Responsible Copilot Use.",
        "topics": [
          {
            "id": "ms-t-279",
            "topicNum": 1,
            "title": "Understanding Microsoft 365 Access Permissions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-280",
            "topicNum": 2,
            "title": "Reviewing OneDrive and SharePoint Sharing",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-281",
            "topicNum": 3,
            "title": "Protecting Confidential Business Information",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-282",
            "topicNum": 4,
            "title": "Understanding Organizational Data Boundaries",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-283",
            "topicNum": 5,
            "title": "Reviewing AI-Generated Content",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-284",
            "topicNum": 6,
            "title": "Verifying Formulas and Calculations",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-285",
            "topicNum": 7,
            "title": "Checking Sources and References",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-286",
            "topicNum": 8,
            "title": "Recognizing AI Errors and Hallucinations",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-287",
            "topicNum": 9,
            "title": "Accessibility and Inclusive Documents",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-288",
            "topicNum": 10,
            "title": "Understanding Data Retention and Organizational Policies",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-289",
            "topicNum": 11,
            "title": "Creating a Responsible Copilot Usage Checklist",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: Final Capstone and Assessment",
        "subtitle": "Practical concepts and real-world exercises for Final Capstone and Assessment.",
        "topics": [
          {
            "id": "ms-t-290",
            "topicNum": 1,
            "title": "Select a Real-World Business Scenario",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-291",
            "topicNum": 2,
            "title": "Define Requirements and Success Criteria",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-292",
            "topicNum": 3,
            "title": "Create the Required Business Documents",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-293",
            "topicNum": 4,
            "title": "Analyze Data and Build an Excel Dashboard",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-294",
            "topicNum": 5,
            "title": "Develop a Supporting Presentation",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "ms-t-295",
            "topicNum": 6,
            "title": "Prepare Emails and Meeting Documentation",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "ms-t-296",
            "topicNum": 7,
            "title": "Create a Microsoft Forms Survey",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-297",
            "topicNum": 8,
            "title": "Automate a Business Workflow",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-298",
            "topicNum": 9,
            "title": "Review Security and Permissions",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "ms-t-299",
            "topicNum": 10,
            "title": "Test All Deliverables",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-300",
            "topicNum": 11,
            "title": "Present the Integrated Microsoft 365 Solution",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "ms-t-301",
            "topicNum": 12,
            "title": "Complete the Final Knowledge Assessment",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
