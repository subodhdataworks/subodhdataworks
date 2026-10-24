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

export const FULL_STACK_MERN_CURRICULUM: TabItem[] = [
  {
    "id": "tab-1",
    "tabNum": 1,
    "title": "Web & Internet Foundations",
    "shortTitle": "Web & Internet Foundations",
    "subtitle": "Web architecture, AI dev assistants, internet protocols, VS Code setup, and HTML5 core structure.",
    "iconName": "bizanalytics",
    "isFree": true,
    "chapters": [
      {
        "id": "mod-1",
        "chapterNum": 1,
        "title": "Chapter 01: Introduction to Web Development",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to Web Development.",
        "topics": [
          {
            "id": "fs-t-1",
            "topicNum": 1,
            "title": "What is web development?",
            "duration": "13 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "fs-t-2",
            "topicNum": 2,
            "title": "Websites vs web applications",
            "duration": "14 min",
            "type": "video",
            "status": "completed"
          },
          {
            "id": "fs-t-3",
            "topicNum": 3,
            "title": "Frontend vs backend development",
            "duration": "15 min",
            "type": "reading",
            "status": "completed"
          },
          {
            "id": "fs-t-4",
            "topicNum": 4,
            "title": "Full-stack development overview",
            "duration": "16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-5",
            "topicNum": 5,
            "title": "How the web works",
            "duration": "17 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-6",
            "topicNum": 6,
            "title": "Popular web technologies",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-7",
            "topicNum": 7,
            "title": "Web developer roles and career paths",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-2",
        "chapterNum": 2,
        "title": "Chapter 02: Introduction to AI in Web Development",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to AI in Web Development.",
        "topics": [
          {
            "id": "fs-t-8",
            "topicNum": 1,
            "title": "What AI can do for web developers",
            "duration": "20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-9",
            "topicNum": 2,
            "title": "AI coding assistants overview",
            "duration": "21 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-10",
            "topicNum": 3,
            "title": "AI design and website-generation tools",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-11",
            "topicNum": 4,
            "title": "Using ChatGPT for learning and coding",
            "duration": "23 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-12",
            "topicNum": 5,
            "title": "GitHub Copilot overview",
            "duration": "24 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-13",
            "topicNum": 6,
            "title": "Galileo AI and Uizard AI overview",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-14",
            "topicNum": 7,
            "title": "Framer AI and Wix Studio AI overview",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-15",
            "topicNum": 8,
            "title": "Responsible AI use and verification",
            "duration": "27 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-16",
            "topicNum": 9,
            "title": "Protecting passwords, API keys, and private code",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-3",
        "chapterNum": 3,
        "title": "Chapter 03: Computer & Internet Fundamentals",
        "subtitle": "Comprehensive topics and practical exercises for Computer & Internet Fundamentals.",
        "topics": [
          {
            "id": "fs-t-17",
            "topicNum": 1,
            "title": "Computer basics for developers",
            "duration": "29 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-18",
            "topicNum": 2,
            "title": "Internet and web basics",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-19",
            "topicNum": 3,
            "title": "Browser fundamentals",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-20",
            "topicNum": 4,
            "title": "URLs and domain names",
            "duration": "14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-21",
            "topicNum": 5,
            "title": "DNS basics",
            "duration": "15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-22",
            "topicNum": 6,
            "title": "HTTP and HTTPS",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-23",
            "topicNum": 7,
            "title": "Hosting and servers",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-24",
            "topicNum": 8,
            "title": "Local files vs live websites",
            "duration": "18 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-4",
        "chapterNum": 4,
        "title": "Chapter 04: VS Code & Developer Tools",
        "subtitle": "Comprehensive topics and practical exercises for VS Code & Developer Tools.",
        "topics": [
          {
            "id": "fs-t-25",
            "topicNum": 1,
            "title": "Installing VS Code",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-26",
            "topicNum": 2,
            "title": "Useful extensions",
            "duration": "20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-27",
            "topicNum": 3,
            "title": "Project folders and files",
            "duration": "21 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-28",
            "topicNum": 4,
            "title": "Terminal basics",
            "duration": "22 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-29",
            "topicNum": 5,
            "title": "Browser DevTools",
            "duration": "23 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-30",
            "topicNum": 6,
            "title": "Console, Elements, and Network tabs",
            "duration": "24 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-31",
            "topicNum": 7,
            "title": "Live Server and developer workflow",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-5",
        "chapterNum": 5,
        "title": "Chapter 05: Introduction to HTML5",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to HTML5.",
        "topics": [
          {
            "id": "fs-t-32",
            "topicNum": 1,
            "title": "What HTML is",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-33",
            "topicNum": 2,
            "title": "HTML document structure",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-34",
            "topicNum": 3,
            "title": "html, head, and body elements",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-35",
            "topicNum": 4,
            "title": "Headings and paragraphs",
            "duration": "29 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-36",
            "topicNum": 5,
            "title": "Text formatting",
            "duration": "12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-37",
            "topicNum": 6,
            "title": "Links and navigation",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-38",
            "topicNum": 7,
            "title": "Images and attributes",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-39",
            "topicNum": 8,
            "title": "Lists",
            "duration": "15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-40",
            "topicNum": 9,
            "title": "Tables",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-41",
            "topicNum": 10,
            "title": "HTML comments",
            "duration": "17 min",
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
    "title": "HTML5, CSS3 & Responsive Design",
    "shortTitle": "HTML5, CSS3 & Responsive Design",
    "subtitle": "Forms, audio/video multimedia, semantic tags, modern CSS3 styling, Flexbox, and mobile-first layouts.",
    "iconName": "toolbox",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-6",
        "chapterNum": 6,
        "title": "Chapter 06: Forms & Multimedia in HTML",
        "subtitle": "Comprehensive topics and practical exercises for Forms & Multimedia in HTML.",
        "topics": [
          {
            "id": "fs-t-42",
            "topicNum": 1,
            "title": "Why forms are important",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-43",
            "topicNum": 2,
            "title": "form and input elements",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-44",
            "topicNum": 3,
            "title": "Input types and labels",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-45",
            "topicNum": 4,
            "title": "textarea and select",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-46",
            "topicNum": 5,
            "title": "Radio buttons and checkboxes",
            "duration": "22 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-47",
            "topicNum": 6,
            "title": "Buttons and form validation",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-48",
            "topicNum": 7,
            "title": "Audio and video elements",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-49",
            "topicNum": 8,
            "title": "Embedding content with iframe",
            "duration": "25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-50",
            "topicNum": 9,
            "title": "Form usability and accessibility",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-7",
        "chapterNum": 7,
        "title": "Chapter 07: Advanced HTML5 Concepts",
        "subtitle": "Comprehensive topics and practical exercises for Advanced HTML5 Concepts.",
        "topics": [
          {
            "id": "fs-t-51",
            "topicNum": 1,
            "title": "Semantic HTML",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-52",
            "topicNum": 2,
            "title": "header, nav, main, section, article, and footer",
            "duration": "28 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-53",
            "topicNum": 3,
            "title": "Meta tags",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-54",
            "topicNum": 4,
            "title": "SEO basics",
            "duration": "12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-55",
            "topicNum": 5,
            "title": "Image alt text",
            "duration": "13 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-56",
            "topicNum": 6,
            "title": "Accessibility fundamentals",
            "duration": "14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-57",
            "topicNum": 7,
            "title": "HTML best practices",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-58",
            "topicNum": 8,
            "title": "Developer handoff basics",
            "duration": "16 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-8",
        "chapterNum": 8,
        "title": "Chapter 08: Introduction to CSS3",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to CSS3.",
        "topics": [
          {
            "id": "fs-t-59",
            "topicNum": 1,
            "title": "What CSS does",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-60",
            "topicNum": 2,
            "title": "Inline, internal, and external CSS",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-61",
            "topicNum": 3,
            "title": "Selectors and specificity",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-62",
            "topicNum": 4,
            "title": "Colors and backgrounds",
            "duration": "20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-63",
            "topicNum": 5,
            "title": "Typography",
            "duration": "21 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-64",
            "topicNum": 6,
            "title": "CSS units: px, %, rem, em, vh, vw",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-65",
            "topicNum": 7,
            "title": "Margin, padding, borders",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-66",
            "topicNum": 8,
            "title": "CSS box model",
            "duration": "24 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-9",
        "chapterNum": 9,
        "title": "Chapter 09: Layout Design with CSS",
        "subtitle": "Comprehensive topics and practical exercises for Layout Design with CSS.",
        "topics": [
          {
            "id": "fs-t-67",
            "topicNum": 1,
            "title": "Normal document flow",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-68",
            "topicNum": 2,
            "title": "Display property",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-69",
            "topicNum": 3,
            "title": "Flexbox fundamentals",
            "duration": "27 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-70",
            "topicNum": 4,
            "title": "Flex alignment and wrapping",
            "duration": "28 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-71",
            "topicNum": 5,
            "title": "CSS Grid fundamentals",
            "duration": "29 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-72",
            "topicNum": 6,
            "title": "Grid columns, rows, and gaps",
            "duration": "12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-73",
            "topicNum": 7,
            "title": "Positioning: relative, absolute, fixed, sticky",
            "duration": "13 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-74",
            "topicNum": 8,
            "title": "Z-index and stacking contexts",
            "duration": "14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-75",
            "topicNum": 9,
            "title": "Overflow and layout patterns",
            "duration": "15 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-10",
        "chapterNum": 10,
        "title": "Chapter 10: Responsive Web Design",
        "subtitle": "Comprehensive topics and practical exercises for Responsive Web Design.",
        "topics": [
          {
            "id": "fs-t-76",
            "topicNum": 1,
            "title": "Responsive design principles",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-77",
            "topicNum": 2,
            "title": "Mobile-first workflow",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-78",
            "topicNum": 3,
            "title": "Viewport meta tag",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-79",
            "topicNum": 4,
            "title": "Media queries and breakpoints",
            "duration": "19 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-80",
            "topicNum": 5,
            "title": "Fluid layouts and responsive typography",
            "duration": "20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-81",
            "topicNum": 6,
            "title": "Responsive images",
            "duration": "21 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-82",
            "topicNum": 7,
            "title": "Mobile navigation and touch targets",
            "duration": "22 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-83",
            "topicNum": 8,
            "title": "Testing across screen sizes",
            "duration": "23 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-3",
    "tabNum": 3,
    "title": "Modern UI Frameworks (Tailwind & Bootstrap)",
    "shortTitle": "Tailwind CSS & Bootstrap",
    "subtitle": "CSS animations, Tailwind utility-first styling, responsive grids, components, and Bootstrap 5 ecosystem.",
    "iconName": "powerbi",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-11",
        "chapterNum": 11,
        "title": "Chapter 11: Animations & Advanced CSS",
        "subtitle": "Comprehensive topics and practical exercises for Animations & Advanced CSS.",
        "topics": [
          {
            "id": "fs-t-84",
            "topicNum": 1,
            "title": "Pseudo-classes and pseudo-elements",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-85",
            "topicNum": 2,
            "title": "CSS variables and design tokens",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-86",
            "topicNum": 3,
            "title": "Transitions and transforms",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-87",
            "topicNum": 4,
            "title": "Keyframe animations",
            "duration": "27 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-88",
            "topicNum": 5,
            "title": "Hover and focus states",
            "duration": "28 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-89",
            "topicNum": 6,
            "title": "Gradients, shadows, and glassmorphism",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-90",
            "topicNum": 7,
            "title": "Reduced-motion accessibility",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-91",
            "topicNum": 8,
            "title": "Reusable CSS patterns",
            "duration": "13 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-12",
        "chapterNum": 12,
        "title": "Chapter 12: Tailwind CSS Framework",
        "subtitle": "Comprehensive topics and practical exercises for Tailwind CSS Framework.",
        "topics": [
          {
            "id": "fs-t-92",
            "topicNum": 1,
            "title": "Utility-first CSS approach",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-93",
            "topicNum": 2,
            "title": "Installing and configuring Tailwind CSS",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-94",
            "topicNum": 3,
            "title": "Spacing, sizing, and typography utilities",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-95",
            "topicNum": 4,
            "title": "Colors and backgrounds",
            "duration": "17 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-96",
            "topicNum": 5,
            "title": "Flexbox and Grid utilities",
            "duration": "18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-97",
            "topicNum": 6,
            "title": "Responsive prefixes",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-98",
            "topicNum": 7,
            "title": "Hover and focus variants",
            "duration": "20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-99",
            "topicNum": 8,
            "title": "Reusable component patterns",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-100",
            "topicNum": 9,
            "title": "Theme customization and dark mode",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-101",
            "topicNum": 10,
            "title": "Accessible Tailwind UI",
            "duration": "23 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-13",
        "chapterNum": 13,
        "title": "Chapter 13: Bootstrap Framework",
        "subtitle": "Comprehensive topics and practical exercises for Bootstrap Framework.",
        "topics": [
          {
            "id": "fs-t-102",
            "topicNum": 1,
            "title": "Bootstrap overview and setup",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-103",
            "topicNum": 2,
            "title": "Containers and breakpoints",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-104",
            "topicNum": 3,
            "title": "Grid system",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-105",
            "topicNum": 4,
            "title": "Utility classes",
            "duration": "27 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-106",
            "topicNum": 5,
            "title": "Typography and colors",
            "duration": "28 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-107",
            "topicNum": 6,
            "title": "Buttons, cards, alerts, and badges",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-108",
            "topicNum": 7,
            "title": "Forms and validation styles",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-109",
            "topicNum": 8,
            "title": "Responsive navbar and components",
            "duration": "13 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-110",
            "topicNum": 9,
            "title": "Theme customization",
            "duration": "14 min",
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
    "title": "JavaScript & DOM Programming",
    "shortTitle": "JavaScript & DOM Programming",
    "subtitle": "Core JS syntax, event-driven DOM manipulation, ES6+ features, async promises, and hands-on mini projects.",
    "iconName": "python",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-14",
        "chapterNum": 14,
        "title": "Chapter 14: Introduction to JavaScript",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to JavaScript.",
        "topics": [
          {
            "id": "fs-t-111",
            "topicNum": 1,
            "title": "What JavaScript does",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-112",
            "topicNum": 2,
            "title": "Variables: let, const, var",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-113",
            "topicNum": 3,
            "title": "Data types and type conversion",
            "duration": "17 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-114",
            "topicNum": 4,
            "title": "Operators",
            "duration": "18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-115",
            "topicNum": 5,
            "title": "Strings and template literals",
            "duration": "19 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-116",
            "topicNum": 6,
            "title": "Conditionals",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-117",
            "topicNum": 7,
            "title": "Loops",
            "duration": "21 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-118",
            "topicNum": 8,
            "title": "Functions and parameters",
            "duration": "22 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-119",
            "topicNum": 9,
            "title": "Scope basics",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-120",
            "topicNum": 10,
            "title": "Debugging with console",
            "duration": "24 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-15",
        "chapterNum": 15,
        "title": "Chapter 15: DOM Manipulation",
        "subtitle": "Comprehensive topics and practical exercises for DOM Manipulation.",
        "topics": [
          {
            "id": "fs-t-121",
            "topicNum": 1,
            "title": "DOM tree overview",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-122",
            "topicNum": 2,
            "title": "Selecting elements",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-123",
            "topicNum": 3,
            "title": "Changing text, attributes, and classes",
            "duration": "27 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-124",
            "topicNum": 4,
            "title": "Creating and removing elements",
            "duration": "28 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-125",
            "topicNum": 5,
            "title": "Event listeners",
            "duration": "29 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-126",
            "topicNum": 6,
            "title": "Event object and propagation",
            "duration": "12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-127",
            "topicNum": 7,
            "title": "Form submission and validation",
            "duration": "13 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-128",
            "topicNum": 8,
            "title": "Keyboard and pointer events",
            "duration": "14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-129",
            "topicNum": 9,
            "title": "Preventing default behavior",
            "duration": "15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-130",
            "topicNum": 10,
            "title": "Safe DOM updates",
            "duration": "16 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-16",
        "chapterNum": 16,
        "title": "Chapter 16: Advanced JavaScript",
        "subtitle": "Comprehensive topics and practical exercises for Advanced JavaScript.",
        "topics": [
          {
            "id": "fs-t-131",
            "topicNum": 1,
            "title": "Arrays and common methods",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-132",
            "topicNum": 2,
            "title": "Objects and nested data",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-133",
            "topicNum": 3,
            "title": "map, filter, find, and reduce",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-134",
            "topicNum": 4,
            "title": "Destructuring",
            "duration": "20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-135",
            "topicNum": 5,
            "title": "Spread and rest syntax",
            "duration": "21 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-136",
            "topicNum": 6,
            "title": "Optional chaining and nullish coalescing",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-137",
            "topicNum": 7,
            "title": "Modules: import and export",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-138",
            "topicNum": 8,
            "title": "ES6+ best practices",
            "duration": "24 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-139",
            "topicNum": 9,
            "title": "Error handling",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-17",
        "chapterNum": 17,
        "title": "Chapter 17: Asynchronous JavaScript",
        "subtitle": "Comprehensive topics and practical exercises for Asynchronous JavaScript.",
        "topics": [
          {
            "id": "fs-t-140",
            "topicNum": 1,
            "title": "Synchronous vs asynchronous code",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-141",
            "topicNum": 2,
            "title": "Callbacks and promises",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-142",
            "topicNum": 3,
            "title": "async and await",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-143",
            "topicNum": 4,
            "title": "try/catch for async errors",
            "duration": "29 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-144",
            "topicNum": 5,
            "title": "HTTP methods and status codes",
            "duration": "12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-145",
            "topicNum": 6,
            "title": "fetch() basics",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-146",
            "topicNum": 7,
            "title": "Parsing JSON",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-147",
            "topicNum": 8,
            "title": "Loading, success, empty, and error states",
            "duration": "15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-148",
            "topicNum": 9,
            "title": "CORS basics",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-149",
            "topicNum": 10,
            "title": "AbortController overview",
            "duration": "17 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-18",
        "chapterNum": 18,
        "title": "Chapter 18: JavaScript Mini Projects",
        "subtitle": "Comprehensive topics and practical exercises for JavaScript Mini Projects.",
        "topics": [
          {
            "id": "fs-t-150",
            "topicNum": 1,
            "title": "Interactive counter",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-151",
            "topicNum": 2,
            "title": "To-do list",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-152",
            "topicNum": 3,
            "title": "Form validation app",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-153",
            "topicNum": 4,
            "title": "Search and filter interface",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-154",
            "topicNum": 5,
            "title": "Weather UI using an API",
            "duration": "22 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-155",
            "topicNum": 6,
            "title": "Quiz application",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-156",
            "topicNum": 7,
            "title": "Product filter page",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-157",
            "topicNum": 8,
            "title": "Project debugging and code review",
            "duration": "25 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-5",
    "tabNum": 5,
    "title": "React.js & Frontend Architecture",
    "shortTitle": "React.js & Frontend Architecture",
    "subtitle": "Component-driven architecture, JSX, props, state management, built-in React Hooks, and SPA React Router.",
    "iconName": "genai",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-19",
        "chapterNum": 19,
        "title": "Chapter 19: Introduction to React.js",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to React.js.",
        "topics": [
          {
            "id": "fs-t-158",
            "topicNum": 1,
            "title": "What React is and why it is used",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-159",
            "topicNum": 2,
            "title": "Single-page applications",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-160",
            "topicNum": 3,
            "title": "Node.js and npm overview",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-161",
            "topicNum": 4,
            "title": "Creating a React app with Vite",
            "duration": "29 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-162",
            "topicNum": 5,
            "title": "Project structure",
            "duration": "12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-163",
            "topicNum": 6,
            "title": "Running the development server",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-164",
            "topicNum": 7,
            "title": "JSX basics",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-165",
            "topicNum": 8,
            "title": "Using assets",
            "duration": "15 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-166",
            "topicNum": 9,
            "title": "First React component",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-20",
        "chapterNum": 20,
        "title": "Chapter 20: React Components & Props",
        "subtitle": "Comprehensive topics and practical exercises for React Components & Props.",
        "topics": [
          {
            "id": "fs-t-167",
            "topicNum": 1,
            "title": "Function components",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-168",
            "topicNum": 2,
            "title": "JSX rules",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-169",
            "topicNum": 3,
            "title": "Embedding expressions in JSX",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-170",
            "topicNum": 4,
            "title": "Props and one-way data flow",
            "duration": "20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-171",
            "topicNum": 5,
            "title": "Default prop values",
            "duration": "21 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-172",
            "topicNum": 6,
            "title": "Component composition",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-173",
            "topicNum": 7,
            "title": "Children prop",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-174",
            "topicNum": 8,
            "title": "Reusable UI components",
            "duration": "24 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-175",
            "topicNum": 9,
            "title": "Splitting components into files",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-21",
        "chapterNum": 21,
        "title": "Chapter 21: State Management in React",
        "subtitle": "Comprehensive topics and practical exercises for State Management in React.",
        "topics": [
          {
            "id": "fs-t-176",
            "topicNum": 1,
            "title": "What state means",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-177",
            "topicNum": 2,
            "title": "useState fundamentals",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-178",
            "topicNum": 3,
            "title": "Updating state immutably",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-179",
            "topicNum": 4,
            "title": "Handling events",
            "duration": "29 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-180",
            "topicNum": 5,
            "title": "Conditional rendering",
            "duration": "12 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-181",
            "topicNum": 6,
            "title": "Derived state",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-182",
            "topicNum": 7,
            "title": "Lifting state up",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-183",
            "topicNum": 8,
            "title": "Avoiding direct state mutation",
            "duration": "15 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-22",
        "chapterNum": 22,
        "title": "Chapter 22: React Hooks",
        "subtitle": "Comprehensive topics and practical exercises for React Hooks.",
        "topics": [
          {
            "id": "fs-t-184",
            "topicNum": 1,
            "title": "Rules of Hooks",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-185",
            "topicNum": 2,
            "title": "useState review",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-186",
            "topicNum": 3,
            "title": "useEffect and synchronization",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-187",
            "topicNum": 4,
            "title": "Dependency arrays and cleanup",
            "duration": "19 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-188",
            "topicNum": 5,
            "title": "useRef for DOM access",
            "duration": "20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-189",
            "topicNum": 6,
            "title": "useContext fundamentals",
            "duration": "21 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-190",
            "topicNum": 7,
            "title": "Creating custom Hooks",
            "duration": "22 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-191",
            "topicNum": 8,
            "title": "Avoiding unnecessary effects",
            "duration": "23 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-23",
        "chapterNum": 23,
        "title": "Chapter 23: React Routing",
        "subtitle": "Comprehensive topics and practical exercises for React Routing.",
        "topics": [
          {
            "id": "fs-t-192",
            "topicNum": 1,
            "title": "Client-side routing",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-193",
            "topicNum": 2,
            "title": "Installing React Router",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-194",
            "topicNum": 3,
            "title": "Routes and route elements",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-195",
            "topicNum": 4,
            "title": "Link and NavLink",
            "duration": "27 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-196",
            "topicNum": 5,
            "title": "Route parameters",
            "duration": "28 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-197",
            "topicNum": 6,
            "title": "Nested routes and layouts",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-198",
            "topicNum": 7,
            "title": "404 routes",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-199",
            "topicNum": 8,
            "title": "Navigation after actions",
            "duration": "13 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-200",
            "topicNum": 9,
            "title": "Protected-route concepts",
            "duration": "14 min",
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
    "title": "Advanced React & Modern Frontend",
    "shortTitle": "Advanced React & UI/UX",
    "subtitle": "Form validation, REST API integration, Context API, performance optimization, and Figma-to-code workflows.",
    "iconName": "target",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-24",
        "chapterNum": 24,
        "title": "Chapter 24: React Forms & Validation",
        "subtitle": "Comprehensive topics and practical exercises for React Forms & Validation.",
        "topics": [
          {
            "id": "fs-t-201",
            "topicNum": 1,
            "title": "Controlled vs uncontrolled inputs",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-202",
            "topicNum": 2,
            "title": "Managing form state",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-203",
            "topicNum": 3,
            "title": "Text, select, radio, and checkbox fields",
            "duration": "17 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-204",
            "topicNum": 4,
            "title": "Form validation",
            "duration": "18 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-205",
            "topicNum": 5,
            "title": "Accessible labels and error messages",
            "duration": "19 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-206",
            "topicNum": 6,
            "title": "Submitting and resetting forms",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-207",
            "topicNum": 7,
            "title": "Reusable form components",
            "duration": "21 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-25",
        "chapterNum": 25,
        "title": "Chapter 25: API Integration in React",
        "subtitle": "Comprehensive topics and practical exercises for API Integration in React.",
        "topics": [
          {
            "id": "fs-t-208",
            "topicNum": 1,
            "title": "Planning API data flow",
            "duration": "22 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-209",
            "topicNum": 2,
            "title": "GET, POST, PUT, PATCH, DELETE",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-210",
            "topicNum": 3,
            "title": "Fetching data in React",
            "duration": "24 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-211",
            "topicNum": 4,
            "title": "Loading and error states",
            "duration": "25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-212",
            "topicNum": 5,
            "title": "Submitting data",
            "duration": "26 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-213",
            "topicNum": 6,
            "title": "Pagination and filtering",
            "duration": "27 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-214",
            "topicNum": 7,
            "title": "Handling network failures",
            "duration": "28 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-215",
            "topicNum": 8,
            "title": "Data transformation",
            "duration": "29 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-216",
            "topicNum": 9,
            "title": "Environment variables and secret safety",
            "duration": "12 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-26",
        "chapterNum": 26,
        "title": "Chapter 26: Advanced React Concepts",
        "subtitle": "Comprehensive topics and practical exercises for Advanced React Concepts.",
        "topics": [
          {
            "id": "fs-t-217",
            "topicNum": 1,
            "title": "Component lifecycle concepts",
            "duration": "13 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-218",
            "topicNum": 2,
            "title": "Context and reducer patterns",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-219",
            "topicNum": 3,
            "title": "Performance profiling",
            "duration": "15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-220",
            "topicNum": 4,
            "title": "React.memo overview",
            "duration": "16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-221",
            "topicNum": 5,
            "title": "useMemo and useCallback trade-offs",
            "duration": "17 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-222",
            "topicNum": 6,
            "title": "Code splitting and lazy loading",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-223",
            "topicNum": 7,
            "title": "Suspense overview",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-224",
            "topicNum": 8,
            "title": "Error boundaries",
            "duration": "20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-225",
            "topicNum": 9,
            "title": "Project architecture",
            "duration": "21 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-226",
            "topicNum": 10,
            "title": "Accessibility and performance",
            "duration": "22 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-27",
        "chapterNum": 27,
        "title": "Chapter 27: Figma for Frontend Developers",
        "subtitle": "Comprehensive topics and practical exercises for Figma for Frontend Developers.",
        "topics": [
          {
            "id": "fs-t-227",
            "topicNum": 1,
            "title": "Figma workspace overview",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-228",
            "topicNum": 2,
            "title": "Frames and layout grids",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-229",
            "topicNum": 3,
            "title": "Auto Layout",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-230",
            "topicNum": 4,
            "title": "Components and variants",
            "duration": "26 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-231",
            "topicNum": 5,
            "title": "Styles and variables",
            "duration": "27 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-232",
            "topicNum": 6,
            "title": "Prototyping interactions",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-233",
            "topicNum": 7,
            "title": "Inspecting spacing and typography",
            "duration": "29 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-234",
            "topicNum": 8,
            "title": "Exporting assets",
            "duration": "12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-235",
            "topicNum": 9,
            "title": "Translating designs into React",
            "duration": "13 min",
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
    "title": "Node.js & Express.js Backend",
    "shortTitle": "Node.js & Express Backend",
    "subtitle": "Node runtime, event loop, asynchronous file I/O, Express routing, middleware, RESTful API design, and controllers.",
    "iconName": "sql",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-28",
        "chapterNum": 28,
        "title": "Chapter 28: Introduction to Node.js",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to Node.js.",
        "topics": [
          {
            "id": "fs-t-236",
            "topicNum": 1,
            "title": "What Node.js is",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-237",
            "topicNum": 2,
            "title": "Browser JavaScript vs Node.js",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-238",
            "topicNum": 3,
            "title": "Installing Node.js and npm",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-239",
            "topicNum": 4,
            "title": "Running JavaScript files",
            "duration": "17 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-240",
            "topicNum": 5,
            "title": "Node.js use cases",
            "duration": "18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-241",
            "topicNum": 6,
            "title": "Creating a basic project",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-242",
            "topicNum": 7,
            "title": "package.json overview",
            "duration": "20 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-29",
        "chapterNum": 29,
        "title": "Chapter 29: Core Concepts of Node.js",
        "subtitle": "Comprehensive topics and practical exercises for Core Concepts of Node.js.",
        "topics": [
          {
            "id": "fs-t-243",
            "topicNum": 1,
            "title": "Modules and require/import",
            "duration": "21 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-244",
            "topicNum": 2,
            "title": "Built-in modules",
            "duration": "22 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-245",
            "topicNum": 3,
            "title": "File system basics",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-246",
            "topicNum": 4,
            "title": "Path and URL modules",
            "duration": "24 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-247",
            "topicNum": 5,
            "title": "Events and EventEmitter overview",
            "duration": "25 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-248",
            "topicNum": 6,
            "title": "npm packages",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-249",
            "topicNum": 7,
            "title": "Environment variables",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-250",
            "topicNum": 8,
            "title": "Asynchronous programming in Node.js",
            "duration": "28 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-30",
        "chapterNum": 30,
        "title": "Chapter 30: Introduction to Express.js",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to Express.js.",
        "topics": [
          {
            "id": "fs-t-251",
            "topicNum": 1,
            "title": "What Express.js is",
            "duration": "29 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-252",
            "topicNum": 2,
            "title": "Creating an Express app",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-253",
            "topicNum": 3,
            "title": "Routes and HTTP methods",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-254",
            "topicNum": 4,
            "title": "Request and response objects",
            "duration": "14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-255",
            "topicNum": 5,
            "title": "Middleware basics",
            "duration": "15 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-256",
            "topicNum": 6,
            "title": "Serving static files",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-257",
            "topicNum": 7,
            "title": "Error handling overview",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-31",
        "chapterNum": 31,
        "title": "Chapter 31: Building APIs with Express.js",
        "subtitle": "Comprehensive topics and practical exercises for Building APIs with Express.js.",
        "topics": [
          {
            "id": "fs-t-258",
            "topicNum": 1,
            "title": "REST API principles",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-259",
            "topicNum": 2,
            "title": "Designing resource routes",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-260",
            "topicNum": 3,
            "title": "GET and POST endpoints",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-261",
            "topicNum": 4,
            "title": "PUT, PATCH, and DELETE endpoints",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-262",
            "topicNum": 5,
            "title": "Request parameters and query strings",
            "duration": "22 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-263",
            "topicNum": 6,
            "title": "Request body validation",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-264",
            "topicNum": 7,
            "title": "Consistent JSON responses",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-265",
            "topicNum": 8,
            "title": "Status codes",
            "duration": "25 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-266",
            "topicNum": 9,
            "title": "Testing APIs with Postman or similar tools",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-32",
        "chapterNum": 32,
        "title": "Chapter 32: Advanced Express.js Concepts",
        "subtitle": "Comprehensive topics and practical exercises for Advanced Express.js Concepts.",
        "topics": [
          {
            "id": "fs-t-267",
            "topicNum": 1,
            "title": "Middleware order and composition",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-268",
            "topicNum": 2,
            "title": "Centralized error handling",
            "duration": "28 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-269",
            "topicNum": 3,
            "title": "Input validation and sanitization",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-270",
            "topicNum": 4,
            "title": "Logging basics",
            "duration": "12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-271",
            "topicNum": 5,
            "title": "CORS configuration",
            "duration": "13 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-272",
            "topicNum": 6,
            "title": "Rate limiting overview",
            "duration": "14 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-273",
            "topicNum": 7,
            "title": "Configuration by environment",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-274",
            "topicNum": 8,
            "title": "Security headers",
            "duration": "16 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-275",
            "topicNum": 9,
            "title": "API versioning concepts",
            "duration": "17 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  },
  {
    "id": "tab-8",
    "tabNum": 8,
    "title": "MongoDB, Full-Stack Auth, AI & Deployment",
    "shortTitle": "MongoDB, Auth, AI & Cloud",
    "subtitle": "NoSQL document schemas, Mongoose ODM, JWT security, GitHub Copilot AI, Git workflows, Vercel/Render, and WebSockets.",
    "iconName": "capstone",
    "isFree": false,
    "chapters": [
      {
        "id": "mod-33",
        "chapterNum": 33,
        "title": "Chapter 33: Introduction to MongoDB and NoSQL Databases",
        "subtitle": "Comprehensive topics and practical exercises for Introduction to MongoDB and NoSQL Databases.",
        "topics": [
          {
            "id": "fs-t-276",
            "topicNum": 1,
            "title": "Relational vs NoSQL databases",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-277",
            "topicNum": 2,
            "title": "Document database concepts",
            "duration": "19 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-278",
            "topicNum": 3,
            "title": "Collections and documents",
            "duration": "20 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-279",
            "topicNum": 4,
            "title": "MongoDB use cases",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-280",
            "topicNum": 5,
            "title": "MongoDB Atlas overview",
            "duration": "22 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-281",
            "topicNum": 6,
            "title": "Planning data models",
            "duration": "23 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-34",
        "chapterNum": 34,
        "title": "Chapter 34: MongoDB Database Fundamentals",
        "subtitle": "Comprehensive topics and practical exercises for MongoDB Database Fundamentals.",
        "topics": [
          {
            "id": "fs-t-282",
            "topicNum": 1,
            "title": "CRUD operations",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-283",
            "topicNum": 2,
            "title": "MongoDB query filters",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-284",
            "topicNum": 3,
            "title": "Projection and sorting",
            "duration": "26 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-285",
            "topicNum": 4,
            "title": "Updates and deletes",
            "duration": "27 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-286",
            "topicNum": 5,
            "title": "Embedded vs referenced documents",
            "duration": "28 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-287",
            "topicNum": 6,
            "title": "Indexes overview",
            "duration": "29 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-288",
            "topicNum": 7,
            "title": "Aggregation pipeline basics",
            "duration": "12 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-289",
            "topicNum": 8,
            "title": "Database access and permissions",
            "duration": "13 min",
            "type": "quiz",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-35",
        "chapterNum": 35,
        "title": "Chapter 35: MongoDB with MERN Stack Integration",
        "subtitle": "Comprehensive topics and practical exercises for MongoDB with MERN Stack Integration.",
        "topics": [
          {
            "id": "fs-t-290",
            "topicNum": 1,
            "title": "MERN architecture overview",
            "duration": "14 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-291",
            "topicNum": 2,
            "title": "Connecting Node.js to MongoDB",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-292",
            "topicNum": 3,
            "title": "Mongoose overview",
            "duration": "16 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-293",
            "topicNum": 4,
            "title": "Defining schemas and models",
            "duration": "17 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-294",
            "topicNum": 5,
            "title": "CRUD operations through Mongoose",
            "duration": "18 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-295",
            "topicNum": 6,
            "title": "Validation and timestamps",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-296",
            "topicNum": 7,
            "title": "Relationships and population",
            "duration": "20 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-297",
            "topicNum": 8,
            "title": "Environment variables for database credentials",
            "duration": "21 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-298",
            "topicNum": 9,
            "title": "Handling database errors",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-36",
        "chapterNum": 36,
        "title": "Chapter 36: Authentication and Authorization",
        "subtitle": "Comprehensive topics and practical exercises for Authentication and Authorization.",
        "topics": [
          {
            "id": "fs-t-299",
            "topicNum": 1,
            "title": "Authentication vs authorization",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-300",
            "topicNum": 2,
            "title": "Registration and login flow",
            "duration": "24 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-301",
            "topicNum": 3,
            "title": "Password hashing concepts",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-302",
            "topicNum": 4,
            "title": "Sessions and token concepts",
            "duration": "26 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-303",
            "topicNum": 5,
            "title": "JWT overview",
            "duration": "27 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-304",
            "topicNum": 6,
            "title": "Role-based access control",
            "duration": "28 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-305",
            "topicNum": 7,
            "title": "Protected API routes",
            "duration": "29 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-306",
            "topicNum": 8,
            "title": "Secure cookies and HTTPS",
            "duration": "12 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-307",
            "topicNum": 9,
            "title": "CORS and CSRF overview",
            "duration": "13 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-308",
            "topicNum": 10,
            "title": "Logout and expired sessions",
            "duration": "14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-309",
            "topicNum": 11,
            "title": "Never expose secrets in frontend code",
            "duration": "15 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-37",
        "chapterNum": 37,
        "title": "Chapter 37: GitHub Copilot and AI Coding Tools",
        "subtitle": "Comprehensive topics and practical exercises for GitHub Copilot and AI Coding Tools.",
        "topics": [
          {
            "id": "fs-t-310",
            "topicNum": 1,
            "title": "AI coding tools overview",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-311",
            "topicNum": 2,
            "title": "GitHub Copilot fundamentals",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-312",
            "topicNum": 3,
            "title": "Prompting for code generation",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-313",
            "topicNum": 4,
            "title": "Explaining unfamiliar code",
            "duration": "19 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-314",
            "topicNum": 5,
            "title": "AI-assisted debugging",
            "duration": "20 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-315",
            "topicNum": 6,
            "title": "Refactoring and test generation",
            "duration": "21 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-316",
            "topicNum": 7,
            "title": "Reviewing AI output",
            "duration": "22 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-317",
            "topicNum": 8,
            "title": "Checking accessibility and security",
            "duration": "23 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-318",
            "topicNum": 9,
            "title": "Protecting private data and API keys",
            "duration": "24 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-38",
        "chapterNum": 38,
        "title": "Chapter 38: Git and GitHub",
        "subtitle": "Comprehensive topics and practical exercises for Git and GitHub.",
        "topics": [
          {
            "id": "fs-t-319",
            "topicNum": 1,
            "title": "Version control fundamentals",
            "duration": "25 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-320",
            "topicNum": 2,
            "title": "Git installation and configuration",
            "duration": "26 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-321",
            "topicNum": 3,
            "title": "Repositories and commits",
            "duration": "27 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-322",
            "topicNum": 4,
            "title": "status, add, commit, and log",
            "duration": "28 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-323",
            "topicNum": 5,
            "title": "Branches and merging",
            "duration": "29 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-324",
            "topicNum": 6,
            "title": "Resolving merge conflicts",
            "duration": "12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-325",
            "topicNum": 7,
            "title": "GitHub repositories and remotes",
            "duration": "13 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-326",
            "topicNum": 8,
            "title": "Clone, push, and pull",
            "duration": "14 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-327",
            "topicNum": 9,
            "title": "Pull requests and code review",
            "duration": "15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-328",
            "topicNum": 10,
            "title": ".gitignore and secret hygiene",
            "duration": "16 min",
            "type": "project",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-39",
        "chapterNum": 39,
        "title": "Chapter 39: Frontend Deployment",
        "subtitle": "Comprehensive topics and practical exercises for Frontend Deployment.",
        "topics": [
          {
            "id": "fs-t-329",
            "topicNum": 1,
            "title": "Production builds",
            "duration": "17 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-330",
            "topicNum": 2,
            "title": "Environment configuration",
            "duration": "18 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-331",
            "topicNum": 3,
            "title": "Deploying React applications",
            "duration": "19 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-332",
            "topicNum": 4,
            "title": "Hosting platforms overview",
            "duration": "20 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-333",
            "topicNum": 5,
            "title": "Domain and DNS setup",
            "duration": "21 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-334",
            "topicNum": 6,
            "title": "SPA routing fallback",
            "duration": "22 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-335",
            "topicNum": 7,
            "title": "HTTPS basics",
            "duration": "23 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-336",
            "topicNum": 8,
            "title": "Image and asset optimization",
            "duration": "24 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-337",
            "topicNum": 9,
            "title": "Performance checks",
            "duration": "25 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-338",
            "topicNum": 10,
            "title": "SEO metadata",
            "duration": "26 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-339",
            "topicNum": 11,
            "title": "Production testing and releases",
            "duration": "27 min",
            "type": "video",
            "status": "locked"
          }
        ]
      },
      {
        "id": "mod-40",
        "chapterNum": 40,
        "title": "Chapter 40: Real-Time MERN Applications",
        "subtitle": "Comprehensive topics and practical exercises for Real-Time MERN Applications.",
        "topics": [
          {
            "id": "fs-t-340",
            "topicNum": 1,
            "title": "Real-time application use cases",
            "duration": "28 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-341",
            "topicNum": 2,
            "title": "Client-server event flow",
            "duration": "29 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-342",
            "topicNum": 3,
            "title": "WebSocket and Socket.IO overview",
            "duration": "12 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-343",
            "topicNum": 4,
            "title": "Setting up real-time communication",
            "duration": "13 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-344",
            "topicNum": 5,
            "title": "Live notifications",
            "duration": "14 min",
            "type": "project",
            "status": "locked"
          },
          {
            "id": "fs-t-345",
            "topicNum": 6,
            "title": "Chat application architecture",
            "duration": "15 min",
            "type": "reading",
            "status": "locked"
          },
          {
            "id": "fs-t-346",
            "topicNum": 7,
            "title": "Authentication for real-time events",
            "duration": "16 min",
            "type": "video",
            "status": "locked"
          },
          {
            "id": "fs-t-347",
            "topicNum": 8,
            "title": "Handling disconnects and reconnects",
            "duration": "17 min",
            "type": "quiz",
            "status": "locked"
          },
          {
            "id": "fs-t-348",
            "topicNum": 9,
            "title": "Testing and deploying real-time features",
            "duration": "18 min",
            "type": "reading",
            "status": "locked"
          }
        ]
      }
    ]
  }
];
