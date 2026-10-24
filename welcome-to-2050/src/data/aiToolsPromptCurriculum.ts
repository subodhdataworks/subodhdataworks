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

export const AI_TOOLS_PROMPT_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "AI Foundations",
    "shortTitle": "AI Foundations",
    "subtitle": "Understanding LLMs, tokens, context windows, bias, and personal AI safety.",
    "iconName": "genai",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Module 1: Introduction to Artificial Intelligence",
        "subtitle": "Practical concepts and real-world exercises for Introduction to Artificial Intelligence.",
        "topics": [
          {
            "id": "pt-t-1",
            "topicNum": 1,
            "title": "What Is Artificial Intelligence?",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-2",
            "topicNum": 2,
            "title": "AI in Everyday Life",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-3",
            "topicNum": 3,
            "title": "Types of AI: Narrow AI and General AI",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-4",
            "topicNum": 4,
            "title": "AI vs Traditional Software",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-5",
            "topicNum": 5,
            "title": "AI vs Machine Learning vs Deep Learning",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-6",
            "topicNum": 6,
            "title": "Understanding AI Models",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-7",
            "topicNum": 7,
            "title": "Common AI Terminology",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-8",
            "topicNum": 8,
            "title": "Capabilities and Limitations of AI",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-9",
            "topicNum": 9,
            "title": "Real-World AI Applications",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-10",
            "topicNum": 10,
            "title": "Choosing the Right AI Solution for a Task",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Module 2: Generative AI and Language Models",
        "subtitle": "Practical concepts and real-world exercises for Generative AI and Language Models.",
        "topics": [
          {
            "id": "pt-t-11",
            "topicNum": 1,
            "title": "What Is Generative AI?",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-12",
            "topicNum": 2,
            "title": "How Generative AI Creates New Content",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-13",
            "topicNum": 3,
            "title": "Text Generation Fundamentals",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-14",
            "topicNum": 4,
            "title": "Image Generation Fundamentals",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-15",
            "topicNum": 5,
            "title": "Audio and Speech Generation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-16",
            "topicNum": 6,
            "title": "Video Generation Fundamentals",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-17",
            "topicNum": 7,
            "title": "What Are Large Language Models?",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-18",
            "topicNum": 8,
            "title": "How AI Chat Assistants Respond",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-19",
            "topicNum": 9,
            "title": "Tokens and Context Windows",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-20",
            "topicNum": 10,
            "title": "AI Hallucinations and Incorrect Information",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-21",
            "topicNum": 11,
            "title": "Understanding AI Model Updates",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-22",
            "topicNum": 12,
            "title": "Verifying AI-Generated Answers",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Module 3: Responsible and Safe AI Use",
        "subtitle": "Practical concepts and real-world exercises for Responsible and Safe AI Use.",
        "topics": [
          {
            "id": "pt-t-23",
            "topicNum": 1,
            "title": "Protecting Personal and Sensitive Information",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-24",
            "topicNum": 2,
            "title": "What Information Should Never Be Shared?",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-25",
            "topicNum": 3,
            "title": "AI Bias and Fairness",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-26",
            "topicNum": 4,
            "title": "Copyright and Attribution Basics",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-27",
            "topicNum": 5,
            "title": "Ownership and Commercial Use Considerations",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-28",
            "topicNum": 6,
            "title": "Recognizing Misleading AI Content",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-29",
            "topicNum": 7,
            "title": "Human Review of AI Outputs",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-30",
            "topicNum": 8,
            "title": "Responsible Use of AI-Generated Images and Videos",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-31",
            "topicNum": 9,
            "title": "Deepfakes and Synthetic Media Awareness",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-32",
            "topicNum": 10,
            "title": "Building a Personal AI Safety Checklist",
            "duration": "Video • 14 min",
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
    "title": "AI Tools and Their Applications",
    "shortTitle": "AI Tools and Their Applications",
    "subtitle": "ChatGPT, Gemini, Copilot, document research, media creation, and productivity tools.",
    "iconName": "stats",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Module 4: AI Chat Assistants",
        "subtitle": "Practical concepts and real-world exercises for AI Chat Assistants.",
        "topics": [
          {
            "id": "pt-t-33",
            "topicNum": 1,
            "title": "Introduction to ChatGPT",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-34",
            "topicNum": 2,
            "title": "Introduction to Google Gemini",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-35",
            "topicNum": 3,
            "title": "Introduction to Microsoft Copilot",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-36",
            "topicNum": 4,
            "title": "Understanding AI Chat Interfaces",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-37",
            "topicNum": 5,
            "title": "Writing Your First AI Prompt",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-38",
            "topicNum": 6,
            "title": "Asking Follow-Up Questions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-39",
            "topicNum": 7,
            "title": "Working with Conversation Context",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-40",
            "topicNum": 8,
            "title": "Uploading Files and Asking Questions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-41",
            "topicNum": 9,
            "title": "Comparing Responses from Different Assistants",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-42",
            "topicNum": 10,
            "title": "Choosing an AI Assistant for a Task",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Module 5: AI Writing, Research and Document Tools",
        "subtitle": "Practical concepts and real-world exercises for AI Writing, Research and Document Tools.",
        "topics": [
          {
            "id": "pt-t-43",
            "topicNum": 1,
            "title": "AI Tools for Writing and Editing",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-44",
            "topicNum": 2,
            "title": "Drafting Articles and Blog Posts",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-45",
            "topicNum": 3,
            "title": "Summarizing Long Documents",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-46",
            "topicNum": 4,
            "title": "Extracting Information from Documents",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-47",
            "topicNum": 5,
            "title": "Research Assistance with AI",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-48",
            "topicNum": 6,
            "title": "Finding and Verifying Sources",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-49",
            "topicNum": 7,
            "title": "Working with PDFs and Reports",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-50",
            "topicNum": 8,
            "title": "Organizing Notes and Ideas",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-51",
            "topicNum": 9,
            "title": "Creating Study Notes with AI",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-52",
            "topicNum": 10,
            "title": "Checking Facts and Citations",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-53",
            "topicNum": 11,
            "title": "Understanding AI Research Limitations",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Module 6: AI Image, Audio and Video Tools",
        "subtitle": "Practical concepts and real-world exercises for AI Image, Audio and Video Tools.",
        "topics": [
          {
            "id": "pt-t-54",
            "topicNum": 1,
            "title": "Introduction to Text-to-Image Tools",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-55",
            "topicNum": 2,
            "title": "Generating Images from Text Prompts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-56",
            "topicNum": 3,
            "title": "AI-Powered Image Editing",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-57",
            "topicNum": 4,
            "title": "Background Removal and Image Enhancement",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-58",
            "topicNum": 5,
            "title": "Introduction to Text-to-Video Tools",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-59",
            "topicNum": 6,
            "title": "Creating Videos from Reference Images",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-60",
            "topicNum": 7,
            "title": "AI Voice and Speech Generation",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-61",
            "topicNum": 8,
            "title": "Text-to-Speech and Voiceovers",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-62",
            "topicNum": 9,
            "title": "AI Music and Sound Generation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-63",
            "topicNum": 10,
            "title": "Reviewing Generated Media for Errors",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-64",
            "topicNum": 11,
            "title": "Choosing the Right Media Tool",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Module 7: AI Tools for Productivity",
        "subtitle": "Practical concepts and real-world exercises for AI Tools for Productivity.",
        "topics": [
          {
            "id": "pt-t-65",
            "topicNum": 1,
            "title": "AI for Email and Communication",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-66",
            "topicNum": 2,
            "title": "AI for Document Creation",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-67",
            "topicNum": 3,
            "title": "AI for Presentations",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-68",
            "topicNum": 4,
            "title": "AI for Spreadsheets and Data Tasks",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-69",
            "topicNum": 5,
            "title": "AI for Meeting Notes and Summaries",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-70",
            "topicNum": 6,
            "title": "AI for Task Planning",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-71",
            "topicNum": 7,
            "title": "AI for Learning and Exam Preparation",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-72",
            "topicNum": 8,
            "title": "AI for Resume and Career Preparation",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-73",
            "topicNum": 9,
            "title": "AI for Brainstorming",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-74",
            "topicNum": 10,
            "title": "Building a Personal AI Productivity Toolkit",
            "duration": "Reading • 8 min",
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
    "title": "Prompt Engineering Fundamentals",
    "shortTitle": "Prompt Engineering Fundamentals",
    "subtitle": "Anatomy of prompts, role prompting, few-shot examples, and reusable frameworks.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Module 8: Anatomy of an Effective Prompt",
        "subtitle": "Practical concepts and real-world exercises for Anatomy of an Effective Prompt.",
        "topics": [
          {
            "id": "pt-t-75",
            "topicNum": 1,
            "title": "What Is a Prompt?",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-76",
            "topicNum": 2,
            "title": "How Instructions Influence AI Outputs",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-77",
            "topicNum": 3,
            "title": "Defining the Goal of a Prompt",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-78",
            "topicNum": 4,
            "title": "Providing Context and Background",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-79",
            "topicNum": 5,
            "title": "Specifying the Role and Audience",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-80",
            "topicNum": 6,
            "title": "Defining the Expected Output",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-81",
            "topicNum": 7,
            "title": "Setting Length and Formatting Requirements",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-82",
            "topicNum": 8,
            "title": "Adding Constraints and Restrictions",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-83",
            "topicNum": 9,
            "title": "Defining Success Criteria",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-84",
            "topicNum": 10,
            "title": "Identifying Ambiguous Instructions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-85",
            "topicNum": 11,
            "title": "Improving Weak Prompts",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-86",
            "topicNum": 12,
            "title": "Writing Your First Effective Prompt",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Module 9: Core Prompting Techniques",
        "subtitle": "Practical concepts and real-world exercises for Core Prompting Techniques.",
        "topics": [
          {
            "id": "pt-t-87",
            "topicNum": 1,
            "title": "Zero-Shot Prompting",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-88",
            "topicNum": 2,
            "title": "One-Shot Prompting",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-89",
            "topicNum": 3,
            "title": "Few-Shot Prompting",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-90",
            "topicNum": 4,
            "title": "Role-Based Prompting",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-91",
            "topicNum": 5,
            "title": "Example-Based Prompting",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-92",
            "topicNum": 6,
            "title": "Instruction-Based Prompting",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-93",
            "topicNum": 7,
            "title": "Context-Rich Prompting",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-94",
            "topicNum": 8,
            "title": "Using Positive and Negative Constraints",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-95",
            "topicNum": 9,
            "title": "Asking Clarifying Questions",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-96",
            "topicNum": 10,
            "title": "Iterative Prompt Improvement",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-97",
            "topicNum": 11,
            "title": "Combining Multiple Prompting Techniques",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Module 10: Prompt Frameworks and Reusable Templates",
        "subtitle": "Practical concepts and real-world exercises for Prompt Frameworks and Reusable Templates.",
        "topics": [
          {
            "id": "pt-t-98",
            "topicNum": 1,
            "title": "Breaking a Prompt into Components",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-99",
            "topicNum": 2,
            "title": "Task, Context and Output Framework",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-100",
            "topicNum": 3,
            "title": "Role, Goal and Constraints Framework",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-101",
            "topicNum": 4,
            "title": "Input-Process-Output Framework",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-102",
            "topicNum": 5,
            "title": "Creating Reusable Prompt Templates",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-103",
            "topicNum": 6,
            "title": "Using Placeholders in Prompts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-104",
            "topicNum": 7,
            "title": "Creating Prompt Checklists",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-105",
            "topicNum": 8,
            "title": "Organizing a Personal Prompt Library",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-106",
            "topicNum": 9,
            "title": "Naming and Categorizing Prompts",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-107",
            "topicNum": 10,
            "title": "Adapting Prompts Across AI Tools",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-108",
            "topicNum": 11,
            "title": "Documenting Prompt Versions",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-109",
            "topicNum": 12,
            "title": "Building a Reusable Prompt Playbook",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-4",
    "tabNum": 4,
    "title": "Advanced Prompt Engineering",
    "shortTitle": "Advanced Prompt Engineering",
    "subtitle": "Multi-step prompt chaining, reasoning, structured JSON outputs, and testing.",
    "iconName": "python",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Module 11: Multi-Step Prompting and Complex Tasks",
        "subtitle": "Practical concepts and real-world exercises for Multi-Step Prompting and Complex Tasks.",
        "topics": [
          {
            "id": "pt-t-110",
            "topicNum": 1,
            "title": "Breaking Complex Tasks into Smaller Steps",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-111",
            "topicNum": 2,
            "title": "Prompt Chaining Fundamentals",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-112",
            "topicNum": 3,
            "title": "Multi-Turn Conversations",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-113",
            "topicNum": 4,
            "title": "Passing Outputs Between Prompts",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-114",
            "topicNum": 5,
            "title": "Planning and Refinement Loops",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-115",
            "topicNum": 6,
            "title": "Generating and Comparing Multiple Drafts",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-116",
            "topicNum": 7,
            "title": "Combining Outputs from Different Tools",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-117",
            "topicNum": 8,
            "title": "Handling Long and Complex Instructions",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-118",
            "topicNum": 9,
            "title": "Managing Context Across Multiple Steps",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-119",
            "topicNum": 10,
            "title": "Creating Repeatable Multi-Step Workflows",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Module 12: Reasoning and Structured Outputs",
        "subtitle": "Practical concepts and real-world exercises for Reasoning and Structured Outputs.",
        "topics": [
          {
            "id": "pt-t-120",
            "topicNum": 1,
            "title": "Breaking Problems into Subtasks",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-121",
            "topicNum": 2,
            "title": "Asking AI to State Assumptions",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-122",
            "topicNum": 3,
            "title": "Requesting Explanations and Evidence",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-123",
            "topicNum": 4,
            "title": "Identifying Missing Information",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-124",
            "topicNum": 5,
            "title": "Asking for Alternatives and Trade-Offs",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-125",
            "topicNum": 6,
            "title": "Tables and Structured Responses",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-126",
            "topicNum": 7,
            "title": "JSON Output Fundamentals",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-127",
            "topicNum": 8,
            "title": "Schema-Based Output Requirements",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-128",
            "topicNum": 9,
            "title": "Validating Structured Outputs",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-129",
            "topicNum": 10,
            "title": "Checking Complex Answers",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-130",
            "topicNum": 11,
            "title": "Distinguishing Facts, Estimates and Opinions",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Module 13: Prompt Testing and Optimization",
        "subtitle": "Practical concepts and real-world exercises for Prompt Testing and Optimization.",
        "topics": [
          {
            "id": "pt-t-131",
            "topicNum": 1,
            "title": "Why Prompts Need Testing",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-132",
            "topicNum": 2,
            "title": "Defining Output Quality Criteria",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-133",
            "topicNum": 3,
            "title": "Creating Test Inputs",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-134",
            "topicNum": 4,
            "title": "Comparing Prompt Variants",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-135",
            "topicNum": 5,
            "title": "Testing Edge Cases",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-136",
            "topicNum": 6,
            "title": "Identifying Common Failure Patterns",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-137",
            "topicNum": 7,
            "title": "Measuring Relevance and Accuracy",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-138",
            "topicNum": 8,
            "title": "Improving Consistency",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-139",
            "topicNum": 9,
            "title": "Testing Across Different AI Models",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-140",
            "topicNum": 10,
            "title": "Versioning Prompts",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-141",
            "topicNum": 11,
            "title": "Maintaining a Prompt Test Dataset",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-142",
            "topicNum": 12,
            "title": "Building a Prompt Evaluation Scorecard",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Module 14: Research, Fact-Checking and Source-Based Prompting",
        "subtitle": "Practical concepts and real-world exercises for Research, Fact-Checking and Source-Based Prompting.",
        "topics": [
          {
            "id": "pt-t-143",
            "topicNum": 1,
            "title": "Writing Research-Oriented Prompts",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-144",
            "topicNum": 2,
            "title": "Defining a Research Question",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-145",
            "topicNum": 3,
            "title": "Requesting Sources and References",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-146",
            "topicNum": 4,
            "title": "Separating Evidence from Interpretation",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-147",
            "topicNum": 5,
            "title": "Checking Dates and Source Relevance",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-148",
            "topicNum": 6,
            "title": "Comparing Conflicting Information",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-149",
            "topicNum": 7,
            "title": "Identifying Unsupported Claims",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-150",
            "topicNum": 8,
            "title": "Summarizing Multiple Sources",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-151",
            "topicNum": 9,
            "title": "Asking AI to Identify Uncertainty",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-152",
            "topicNum": 10,
            "title": "Creating a Source-Verification Workflow",
            "duration": "Reading • 6 min",
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
    "title": "AI for Productivity and Professional Work",
    "shortTitle": "AI for Productivity and Professional Work",
    "subtitle": "Professional writing, business analysis, safe AI coding, and career prep.",
    "iconName": "excel",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Module 15: AI for Writing and Communication",
        "subtitle": "Practical concepts and real-world exercises for AI for Writing and Communication.",
        "topics": [
          {
            "id": "pt-t-153",
            "topicNum": 1,
            "title": "Drafting Professional Emails",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-154",
            "topicNum": 2,
            "title": "Writing Business Messages",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-155",
            "topicNum": 3,
            "title": "Creating Reports and Summaries",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-156",
            "topicNum": 4,
            "title": "Rewriting Content for Clarity",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-157",
            "topicNum": 5,
            "title": "Adjusting Tone and Formality",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-158",
            "topicNum": 6,
            "title": "Adapting Content for Different Audiences",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-159",
            "topicNum": 7,
            "title": "Editing and Proofreading",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-160",
            "topicNum": 8,
            "title": "Writing Social Media Captions",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-161",
            "topicNum": 9,
            "title": "Creating Product Descriptions",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-162",
            "topicNum": 10,
            "title": "Writing Proposals and Business Documents",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-163",
            "topicNum": 11,
            "title": "Checking Consistency and Accuracy",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-164",
            "topicNum": 12,
            "title": "Building a Professional Writing Workflow",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Module 16: AI for Analysis, Planning and Decision Support",
        "subtitle": "Practical concepts and real-world exercises for AI for Analysis, Planning and Decision Support.",
        "topics": [
          {
            "id": "pt-t-165",
            "topicNum": 1,
            "title": "Brainstorming and Idea Generation",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-166",
            "topicNum": 2,
            "title": "Evaluating Ideas with Clear Criteria",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-167",
            "topicNum": 3,
            "title": "Creating Project Plans",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-168",
            "topicNum": 4,
            "title": "Breaking Goals into Tasks",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-169",
            "topicNum": 5,
            "title": "Building Timelines and Checklists",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-170",
            "topicNum": 6,
            "title": "Extracting Action Items from Documents",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-171",
            "topicNum": 7,
            "title": "Summarizing Tables and Reports",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-172",
            "topicNum": 8,
            "title": "Comparing Options and Trade-Offs",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-173",
            "topicNum": 9,
            "title": "Using AI for Basic Data Interpretation",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-174",
            "topicNum": 10,
            "title": "Verifying Calculations and Conclusions",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-175",
            "topicNum": 11,
            "title": "Recognizing AI Reasoning Limitations",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-176",
            "topicNum": 12,
            "title": "Building a Decision-Support Workflow",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Module 17: AI for Coding and Technical Problem-Solving",
        "subtitle": "Practical concepts and real-world exercises for AI for Coding and Technical Problem-Solving.",
        "topics": [
          {
            "id": "pt-t-177",
            "topicNum": 1,
            "title": "Using AI to Understand Programming Concepts",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-178",
            "topicNum": 2,
            "title": "Generating Code from Requirements",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-179",
            "topicNum": 3,
            "title": "Explaining Existing Code",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-180",
            "topicNum": 4,
            "title": "Debugging Errors with AI",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-181",
            "topicNum": 5,
            "title": "Requesting Step-by-Step Implementation Guidance",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-182",
            "topicNum": 6,
            "title": "Generating Test Cases",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-183",
            "topicNum": 7,
            "title": "Reviewing Code for Quality",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-184",
            "topicNum": 8,
            "title": "Identifying Potential Security Issues",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-185",
            "topicNum": 9,
            "title": "Refactoring Code with AI Assistance",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-186",
            "topicNum": 10,
            "title": "Understanding Generated Dependencies",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-187",
            "topicNum": 11,
            "title": "Testing AI-Generated Code",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-188",
            "topicNum": 12,
            "title": "Building a Safe AI-Assisted Coding Workflow",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Module 18: AI for Learning and Career Development",
        "subtitle": "Practical concepts and real-world exercises for AI for Learning and Career Development.",
        "topics": [
          {
            "id": "pt-t-189",
            "topicNum": 1,
            "title": "Creating a Personalized Learning Plan",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-190",
            "topicNum": 2,
            "title": "Explaining Difficult Topics Simply",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-191",
            "topicNum": 3,
            "title": "Generating Practice Questions",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-192",
            "topicNum": 4,
            "title": "Creating MCQs and Answer Keys",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-193",
            "topicNum": 5,
            "title": "Using AI as a Practice Interviewer",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-194",
            "topicNum": 6,
            "title": "Preparing Technical Interview Questions",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-195",
            "topicNum": 7,
            "title": "Improving a Resume with AI",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-196",
            "topicNum": 8,
            "title": "Drafting Cover Letters",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-197",
            "topicNum": 9,
            "title": "Preparing LinkedIn Content",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-198",
            "topicNum": 10,
            "title": "Practicing Communication Skills",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-199",
            "topicNum": 11,
            "title": "Checking AI-Generated Study Material",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-200",
            "topicNum": 12,
            "title": "Building a Personal Learning Assistant",
            "duration": "Video • 18 min",
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
    "title": "AI Content Creation and Creative Prompting",
    "shortTitle": "AI Content Creation and Creative Prompting",
    "subtitle": "Image generation styles, video/voice scripting, presentations, and marketing copy.",
    "iconName": "chart",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Module 19: Image Generation and Design Prompting",
        "subtitle": "Practical concepts and real-world exercises for Image Generation and Design Prompting.",
        "topics": [
          {
            "id": "pt-t-201",
            "topicNum": 1,
            "title": "Anatomy of an Image Prompt",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-202",
            "topicNum": 2,
            "title": "Describing Subjects and Scenes",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-203",
            "topicNum": 3,
            "title": "Specifying Composition and Framing",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-204",
            "topicNum": 4,
            "title": "Lighting, Color and Mood",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-205",
            "topicNum": 5,
            "title": "Camera Angles and Perspective",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-206",
            "topicNum": 6,
            "title": "Visual Styles and Artistic Direction",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-207",
            "topicNum": 7,
            "title": "Background and Environment Details",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-208",
            "topicNum": 8,
            "title": "Brand Identity and Design Constraints",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-209",
            "topicNum": 9,
            "title": "Generating Variations",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-210",
            "topicNum": 10,
            "title": "Improving Image Consistency",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-211",
            "topicNum": 11,
            "title": "Editing and Refining Generated Images",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-212",
            "topicNum": 12,
            "title": "Evaluating Image Quality",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-213",
            "topicNum": 13,
            "title": "Creating Marketing Images with AI",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Module 20: Video, Audio and Voice Prompting",
        "subtitle": "Practical concepts and real-world exercises for Video, Audio and Voice Prompting.",
        "topics": [
          {
            "id": "pt-t-214",
            "topicNum": 1,
            "title": "Anatomy of a Video Prompt",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-215",
            "topicNum": 2,
            "title": "Describing Actions and Motion",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-216",
            "topicNum": 3,
            "title": "Scene-by-Scene Video Planning",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-217",
            "topicNum": 4,
            "title": "Camera Movement and Shot Composition",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-218",
            "topicNum": 5,
            "title": "Character and Visual Consistency",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-219",
            "topicNum": 6,
            "title": "Creating Short Educational Videos",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-220",
            "topicNum": 7,
            "title": "Writing Video Scripts with AI",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-221",
            "topicNum": 8,
            "title": "Generating Voiceovers",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-222",
            "topicNum": 9,
            "title": "Controlling Speech Style and Delivery",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-223",
            "topicNum": 10,
            "title": "Creating Sound Effects and Background Audio",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-224",
            "topicNum": 11,
            "title": "Reviewing Audio and Video Quality",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-225",
            "topicNum": 12,
            "title": "Fixing Common AI Video Problems",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Module 21: AI Presentations and Marketing Content",
        "subtitle": "Practical concepts and real-world exercises for AI Presentations and Marketing Content.",
        "topics": [
          {
            "id": "pt-t-226",
            "topicNum": 1,
            "title": "Turning Ideas into Presentation Outlines",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-227",
            "topicNum": 2,
            "title": "Creating Slide-by-Slide Content",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-228",
            "topicNum": 3,
            "title": "Writing Effective Slide Titles",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-229",
            "topicNum": 4,
            "title": "Generating Visual Concepts for Slides",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-230",
            "topicNum": 5,
            "title": "Creating Training and Educational Material",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-231",
            "topicNum": 6,
            "title": "Building Social Media Content Calendars",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-232",
            "topicNum": 7,
            "title": "Creating Marketing Campaign Concepts",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-233",
            "topicNum": 8,
            "title": "Writing Advertising Copy",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-234",
            "topicNum": 9,
            "title": "Developing Product Launch Content",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-235",
            "topicNum": 10,
            "title": "Maintaining Brand Consistency",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-236",
            "topicNum": 11,
            "title": "Reviewing Presentations for Accuracy",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-237",
            "topicNum": 12,
            "title": "Preparing Final Content Deliverables",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Module 22: Multi-Tool Creative Workflows",
        "subtitle": "Practical concepts and real-world exercises for Multi-Tool Creative Workflows.",
        "topics": [
          {
            "id": "pt-t-238",
            "topicNum": 1,
            "title": "Choosing Tools for a Creative Task",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-239",
            "topicNum": 2,
            "title": "Planning the Complete Content Workflow",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-240",
            "topicNum": 3,
            "title": "Moving Text Between AI Tools",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-241",
            "topicNum": 4,
            "title": "Turning Scripts into Visual Content",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-242",
            "topicNum": 5,
            "title": "Combining Images, Audio and Video",
            "duration": "Reading • 12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-243",
            "topicNum": 6,
            "title": "Maintaining Files and Version History",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-244",
            "topicNum": 7,
            "title": "Reusing Brand Assets and Templates",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-245",
            "topicNum": 8,
            "title": "Checking Licensing and Usage Rights",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-246",
            "topicNum": 9,
            "title": "Reviewing Content Across Different Devices",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-247",
            "topicNum": 10,
            "title": "Quality Control for Final Deliverables",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-248",
            "topicNum": 11,
            "title": "Creating a Repeatable Content Production Workflow",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-7",
    "tabNum": 7,
    "title": "Automation and AI Workflows",
    "shortTitle": "Automation and AI Workflows",
    "subtitle": "AI workflow design, Zapier/Make automation, no-code integrations, and optimization.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Module 23: AI Workflow Design",
        "subtitle": "Practical concepts and real-world exercises for AI Workflow Design.",
        "topics": [
          {
            "id": "pt-t-249",
            "topicNum": 1,
            "title": "What Is an AI Workflow?",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-250",
            "topicNum": 2,
            "title": "Identifying Repetitive Tasks",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-251",
            "topicNum": 3,
            "title": "Mapping a Manual Workflow",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-252",
            "topicNum": 4,
            "title": "Selecting Tasks Suitable for AI",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-253",
            "topicNum": 5,
            "title": "Dividing Work into Workflow Steps",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-254",
            "topicNum": 6,
            "title": "Defining Inputs and Outputs",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-255",
            "topicNum": 7,
            "title": "Human Approval Checkpoints",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-256",
            "topicNum": 8,
            "title": "Validation and Fallback Steps",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-257",
            "topicNum": 9,
            "title": "Measuring Time Saved and Output Quality",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-258",
            "topicNum": 10,
            "title": "Documenting Workflow Responsibilities",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-259",
            "topicNum": 11,
            "title": "Identifying Tasks That Should Not Be Automated",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Module 24: No-Code Automation Fundamentals",
        "subtitle": "Practical concepts and real-world exercises for No-Code Automation Fundamentals.",
        "topics": [
          {
            "id": "pt-t-260",
            "topicNum": 1,
            "title": "What Is No-Code Automation?",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-261",
            "topicNum": 2,
            "title": "Triggers and Actions",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-262",
            "topicNum": 3,
            "title": "Connecting Applications and Services",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-263",
            "topicNum": 4,
            "title": "Introduction to Automation Platforms",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-264",
            "topicNum": 5,
            "title": "Passing Data Between Applications",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-265",
            "topicNum": 6,
            "title": "Creating Automated Notifications",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-266",
            "topicNum": 7,
            "title": "Scheduling Repetitive Tasks",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-267",
            "topicNum": 8,
            "title": "Handling Conditional Workflow Branches",
            "duration": "Project • 6 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-268",
            "topicNum": 9,
            "title": "Adding Approval Steps",
            "duration": "Reading • 8 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-269",
            "topicNum": 10,
            "title": "Testing and Troubleshooting Automations",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-270",
            "topicNum": 11,
            "title": "Handling Failed Workflow Runs",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-271",
            "topicNum": 12,
            "title": "Protecting Credentials in Automation Tools",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Module 25: Building Prompt-Powered Systems",
        "subtitle": "Practical concepts and real-world exercises for Building Prompt-Powered Systems.",
        "topics": [
          {
            "id": "pt-t-272",
            "topicNum": 1,
            "title": "Defining a User Problem",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-273",
            "topicNum": 2,
            "title": "Designing a Prompt-Based Workflow",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-274",
            "topicNum": 3,
            "title": "Creating Reusable Prompt Templates",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-275",
            "topicNum": 4,
            "title": "Connecting Prompts to Inputs and Outputs",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-276",
            "topicNum": 5,
            "title": "Structuring Multi-Step AI Tasks",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-277",
            "topicNum": 6,
            "title": "Validating AI-Generated Results",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-278",
            "topicNum": 7,
            "title": "Adding Error Handling and Fallbacks",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-279",
            "topicNum": 8,
            "title": "Creating Human Review Checkpoints",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-280",
            "topicNum": 9,
            "title": "Testing Different Inputs",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-281",
            "topicNum": 10,
            "title": "Documenting System Limitations",
            "duration": "Project • 12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-282",
            "topicNum": 11,
            "title": "Maintaining Prompt and Workflow Versions",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-283",
            "topicNum": 12,
            "title": "Building a Prompt-Powered Work Assistant",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Module 26: AI Workflow Integration and Optimization",
        "subtitle": "Practical concepts and real-world exercises for AI Workflow Integration and Optimization.",
        "topics": [
          {
            "id": "pt-t-284",
            "topicNum": 1,
            "title": "Connecting Multiple AI Tools",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-285",
            "topicNum": 2,
            "title": "Selecting the Right Tool for Each Step",
            "duration": "Quiz • 15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-286",
            "topicNum": 3,
            "title": "Reducing Unnecessary AI Calls",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-287",
            "topicNum": 4,
            "title": "Managing Usage Limits and Costs",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-288",
            "topicNum": 5,
            "title": "Reusing Outputs Between Workflow Steps",
            "duration": "Project • 20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-289",
            "topicNum": 6,
            "title": "Handling Long Documents and Large Inputs",
            "duration": "Reading • 6 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-290",
            "topicNum": 7,
            "title": "Testing Workflow Reliability",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-291",
            "topicNum": 8,
            "title": "Monitoring Workflow Results",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-292",
            "topicNum": 9,
            "title": "Measuring Productivity Improvements",
            "duration": "Quiz • 12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-293",
            "topicNum": 10,
            "title": "Improving a Workflow Through Feedback",
            "duration": "Video • 15 min",
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
    "title": "Projects, Assessment and Mastery",
    "shortTitle": "Projects, Assessment and Mastery",
    "subtitle": "Productivity packs, campaign creation, portfolio playbook, and final capstone.",
    "iconName": "project",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Module 27: Practical AI Productivity Projects",
        "subtitle": "Practical concepts and real-world exercises for Practical AI Productivity Projects.",
        "topics": [
          {
            "id": "pt-t-294",
            "topicNum": 1,
            "title": "Create a Professional Email and Report Pack",
            "duration": "Reading • 15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-295",
            "topicNum": 2,
            "title": "Build a Research Summary with Verified Sources",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-296",
            "topicNum": 3,
            "title": "Create a Personalized Learning Assistant",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-297",
            "topicNum": 4,
            "title": "Develop an AI-Assisted Resume Workflow",
            "duration": "Quiz • 20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-298",
            "topicNum": 5,
            "title": "Create a Structured Meeting Summary System",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-299",
            "topicNum": 6,
            "title": "Build an AI-Powered Project Planning Workflow",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-300",
            "topicNum": 7,
            "title": "Document Inputs, Outputs and Limitations",
            "duration": "Project • 10 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Module 28: AI Content Creation Project",
        "subtitle": "Practical concepts and real-world exercises for AI Content Creation Project.",
        "topics": [
          {
            "id": "pt-t-301",
            "topicNum": 1,
            "title": "Select a Product or Campaign",
            "duration": "Video • 14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-302",
            "topicNum": 2,
            "title": "Define the Target Audience",
            "duration": "Project • 18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-303",
            "topicNum": 3,
            "title": "Develop a Content Strategy",
            "duration": "Reading • 20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-304",
            "topicNum": 4,
            "title": "Create Image Prompts",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-305",
            "topicNum": 5,
            "title": "Generate and Refine Visual Assets",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-306",
            "topicNum": 6,
            "title": "Write a Video Script",
            "duration": "Quiz • 10 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-307",
            "topicNum": 7,
            "title": "Design Scene-by-Scene Video Prompts",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-308",
            "topicNum": 8,
            "title": "Create Supporting Copy and Captions",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-309",
            "topicNum": 9,
            "title": "Review Brand Consistency and Quality",
            "duration": "Project • 14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-310",
            "topicNum": 10,
            "title": "Present the Final Content Campaign",
            "duration": "Reading • 18 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Module 29: Prompt Engineering Portfolio",
        "subtitle": "Practical concepts and real-world exercises for Prompt Engineering Portfolio.",
        "topics": [
          {
            "id": "pt-t-311",
            "topicNum": 1,
            "title": "Selecting Representative Prompts",
            "duration": "Quiz • 18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-312",
            "topicNum": 2,
            "title": "Documenting the Problem Each Prompt Solves",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-313",
            "topicNum": 3,
            "title": "Recording Inputs and Outputs",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-314",
            "topicNum": 4,
            "title": "Comparing Prompt Versions",
            "duration": "Project • 8 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-315",
            "topicNum": 5,
            "title": "Showing Before-and-After Improvements",
            "duration": "Reading • 10 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-316",
            "topicNum": 6,
            "title": "Documenting Test Cases",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-317",
            "topicNum": 7,
            "title": "Explaining Limitations and Failure Cases",
            "duration": "Video • 15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-318",
            "topicNum": 8,
            "title": "Organizing a Reusable Prompt Library",
            "duration": "Quiz • 14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-319",
            "topicNum": 9,
            "title": "Creating a Prompt Playbook",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-320",
            "topicNum": 10,
            "title": "Presenting Portfolio Case Studies",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-30",
        "chapterNum": 30,
        "title": "Module 30: Final Capstone and Assessment",
        "subtitle": "Practical concepts and real-world exercises for Final Capstone and Assessment.",
        "topics": [
          {
            "id": "pt-t-321",
            "topicNum": 1,
            "title": "Choosing a Real-World Use Case",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-322",
            "topicNum": 2,
            "title": "Defining Requirements and Success Criteria",
            "duration": "Video • 6 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-323",
            "topicNum": 3,
            "title": "Planning the AI Workflow",
            "duration": "Quiz • 8 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-324",
            "topicNum": 4,
            "title": "Selecting Appropriate AI Tools",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-325",
            "topicNum": 5,
            "title": "Designing and Testing Prompts",
            "duration": "Video • 12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-326",
            "topicNum": 6,
            "title": "Creating Reusable Templates",
            "duration": "Project • 15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "pt-t-327",
            "topicNum": 7,
            "title": "Checking Accuracy and Source Quality",
            "duration": "Reading • 14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "pt-t-328",
            "topicNum": 8,
            "title": "Reviewing Privacy and Safety",
            "duration": "Video • 18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-329",
            "topicNum": 9,
            "title": "Measuring Output Quality and Efficiency",
            "duration": "Video • 20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-330",
            "topicNum": 10,
            "title": "Improving the Workflow from Test Results",
            "duration": "Quiz • 6 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "pt-t-331",
            "topicNum": 11,
            "title": "Preparing Documentation and Demonstration",
            "duration": "Video • 8 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "pt-t-332",
            "topicNum": 12,
            "title": "Presenting the Final Solution",
            "duration": "Video • 10 min",
            "type": "video",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
