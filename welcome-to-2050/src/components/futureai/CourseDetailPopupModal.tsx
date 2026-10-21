import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Download, 
  Code2, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Unlock, 
  Briefcase, 
  Layers, 
  Database, 
  BarChart3, 
  Bot, 
  Cpu, 
  Palette, 
  Globe 
} from 'lucide-react';
import { REACT_FRONTEND_AI_CURRICULUM } from '../../data/reactFrontEndCurriculum';

export interface CourseDetailData {
  id: string;
  badge: string;
  headlineTitle: string;
  headlineSubtitle: string;
  salaryRange: string;
  subjectsCovered: string[];
  courseContent: {
    num: string;
    title: string;
    topics: string[];
  }[];
}

// 8 Complete Industry Course Curriculums
export const ALL_COURSES_DETAIL: Record<string, CourseDetailData> = {
  'react-frontend-dev': {
    id: 'react-frontend-dev',
    badge: '⭐ Front-End & AI Specialization',
    headlineTitle: 'React Front-End Development with AI',
    headlineSubtitle: 'Complete Roadmap covering Web Fundamentals, HTML, CSS, JavaScript, React 19, Tailwind, UI/UX, AI-Assisted Dev & Deployment.',
    salaryRange: '₹8 LPA – ₹20 LPA',
    subjectsCovered: [
      'HTML5 & Semantic Web',
      'CSS3, Flexbox & CSS Grid',
      'Tailwind CSS & Responsive Design',
      'Modern JavaScript (ES6+)',
      'DOM & Asynchronous APIs',
      'React 19 Core & JSX',
      'React Hooks (useState, useEffect, custom Hooks)',
      'React Router & Multi-Page Flow',
      'State Management & Context API',
      'AI Coding Tools (Copilot, Cursor, v0)',
      'Git, GitHub & Cloud CI/CD Vercel Deploy'
    ],
    courseContent: REACT_FRONTEND_AI_CURRICULUM.map(ch => ({
      num: ch.num,
      title: ch.title,
      topics: ch.topics
    }))
  },
  'data-analyst-genai': {
    id: 'data-analyst-genai',
    badge: '🔥 Flagship • Active Cohort',
    headlineTitle: 'Data Analyst with GenAI',
    headlineSubtitle: 'End-to-end data analytics program: Python, SQL, Excel, Power BI, Statistics, Generative AI & Corporate Capstone.',
    salaryRange: '₹8 LPA – ₹18 LPA',
    subjectsCovered: [
      'Python Programming for Data',
      'NumPy, Pandas & Data Cleaning',
      'SQL & Relational Databases',
      'Advanced Microsoft Excel & Power Query',
      'Power BI & DAX Dashboards',
      'Applied Business Statistics',
      'Generative AI for Analytics (LLMs, Prompts)',
      'Real-World Enterprise Capstone',
      'Placement & AI Mock Interviews'
    ],
    courseContent: [
      { num: '01', title: 'Python for Data Analysis & Automation', topics: ['Variables, Loops, Data Structures', 'NumPy Arrays & Pandas DataFrames', 'Data Cleaning & Transformation', 'Automated ETL Pipelines'] },
      { num: '02', title: 'Relational Databases & SQL Mastery', topics: ['SELECT, WHERE, GROUP BY, HAVING', 'Multi-table INNER/LEFT/FULL JOINs', 'Window Functions & Aggregations', 'Database Indexing & Query Plans'] },
      { num: '03', title: 'Advanced Microsoft Excel & Modeling', topics: ['VLOOKUP, XLOOKUP, INDEX/MATCH', 'Pivot Tables & Dynamic Slicers', 'Financial & Statistical Modeling', 'Power Query Automation'] },
      { num: '04', title: 'Power BI & Executive Dashboarding', topics: ['Data Modeling & Star Schemas', 'DAX Measures & Calculated Columns', 'Executive C-Suite KPI Dashboards', 'Power BI Service Publishing'] },
      { num: '05', title: 'Statistics & Probability for Decision Making', topics: ['Descriptive & Inferential Statistics', 'Hypothesis Testing (A/B Testing)', 'Confidence Intervals & P-values', 'Regression & Trend Modeling'] },
      { num: '06', title: 'Generative AI & LLM Automation', topics: ['Prompt Engineering for Analytics', 'Automated SQL & Python Generation', 'Synthesizing Unstructured Text & Docs', 'Building Custom AI Analytics Agents'] },
      { num: '07', title: 'Real-World Industry Capstone Projects', topics: ['End-to-End Enterprise Datasets', 'Data Ingestion to Visual Insights', 'GitHub Portfolio Publishing', 'Executive Deck Presentation'] },
      { num: '08', title: 'Verified Virtual Internship', topics: ['Agile 2-week Sprint Workflow', 'Weekly Standups & Code Reviews', 'Verified Industry Credentials', 'Production Deliverables'] },
      { num: '09', title: 'AI Mock Interviews & Placement', topics: ['1-on-1 AI Mock Interviews', 'ATS Resume Optimization', '700+ Hiring Partners Direct Drives', 'Salary Negotiation Framework'] }
    ]
  },
  'python-dsa': {
    id: 'python-dsa',
    badge: '🐍 Most Popular • Zero to Hero',
    headlineTitle: 'Python Mastery & Coding Practice',
    headlineSubtitle: 'Learn Python through hands-on coding challenges, problem solving, data structures, algorithms and practical automation scripts.',
    salaryRange: '₹7 LPA – ₹16 LPA',
    subjectsCovered: [
      'Python Syntax & OOP',
      'Interactive Coding Practice',
      'Data Structures (Arrays, Trees, Graphs)',
      'Sorting & Searching Algorithms',
      'Time & Space Complexity (Big-O)',
      'File Handling & Exception Safety',
      'Web Scraping & APIs',
      'LeetCode 75 Curated Solutions'
    ],
    courseContent: [
      { num: '01', title: 'Python Fundamentals & Logic', topics: ['Variables, Types & Operations', 'Conditionals & Loops', 'Functions & Variable Scope', 'Memory Model & References'] },
      { num: '02', title: 'Data Structures Deep Dive', topics: ['Lists, Tuples, Dictionaries & Sets', 'List Comprehensions & Generators', 'Stacks, Queues & Deques', 'Linked Lists Implementation'] },
      { num: '03', title: 'Object-Oriented Programming (OOP)', topics: ['Classes & Objects', 'Inheritance & Polymorphism', 'Encapsulation & Dunder Methods', 'Design Patterns in Python'] },
      { num: '04', title: 'Algorithms & Problem Solving', topics: ['Recursion & Backtracking', 'Binary Search & Sorting Algos', 'Two Pointers & Sliding Window', 'Dynamic Programming Fundamentals'] },
      { num: '05', title: 'Python for Real-World Automation', topics: ['File I/O & CSV/JSON Parsing', 'Web Scraping with BeautifulSoup', 'REST API Integration with Requests', 'Automating Daily Desktop Tasks'] },
      { num: '06', title: 'Tech Interview Coding Rounds', topics: ['Top 50 Interview DSA Problems', 'System Design Basics for Python', 'Mock Coding Simulator', 'GitHub Portfolio Deployment'] }
    ]
  },
  'sql-databases': {
    id: 'sql-databases',
    badge: '📊 Database Engineering & SQL',
    headlineTitle: 'SQL & Database Engineering',
    headlineSubtitle: 'Master queries, schema architecture, performance tuning, indexing and analytical data pipelines.',
    salaryRange: '₹7 LPA – ₹15 LPA',
    subjectsCovered: [
      'Relational Database Theory',
      'Complex Joins & Subqueries',
      'Window Functions (RANK, DENSE_RANK)',
      'Common Table Expressions (CTEs)',
      'Indexes, EXPLAIN & Performance Tuning',
      'Stored Procedures & Triggers',
      'Database Normalization (1NF to 3NF)',
      'Cloud Data Warehouses (Snowflake, BigQuery)'
    ],
    courseContent: [
      { num: '01', title: 'SQL Basics & Querying', topics: ['SELECT, FROM, WHERE Filtering', 'ORDER BY & LIMIT / OFFSET', 'Aggregations (COUNT, SUM, AVG)', 'GROUP BY & HAVING Clauses'] },
      { num: '02', title: 'Table Relationships & Multi-Joins', topics: ['INNER JOIN vs OUTER JOINs', 'CROSS JOIN & Self Joins', 'Subqueries & Correlated Subqueries', 'UNION & UNION ALL Operators'] },
      { num: '03', title: 'Advanced Analytical SQL', topics: ['Window Functions (ROW_NUMBER, LEAD/LAG)', 'Running Totals & Moving Averages', 'CTEs & Recursive Queries', 'PIVOT & CASE WHEN Logic'] },
      { num: '04', title: 'Database Design & Architecture', topics: ['Schema Creation & Constraints', 'Primary & Foreign Key Architecture', 'Normalization (1NF, 2NF, 3NF)', 'ACID Properties & Transactions'] },
      { num: '05', title: 'Query Optimization & Production Tuning', topics: ['B-Tree Indexes & Composite Indexes', 'EXPLAIN ANALYZE Execution Plans', 'Handling Large Data Sets', 'Cloud Warehouses: BigQuery & Snowflake'] },
      { num: '06', title: 'SQL Interview Mastery', topics: ['FAANG SQL Coding Questions', 'Business Metrics Calculation', 'Real-world E-commerce Case Studies', 'Mock SQL Coding Interviews'] }
    ]
  },
  'powerbi-analytics': {
    id: 'powerbi-analytics',
    badge: '📈 Corporate Favorite • Fast Track',
    headlineTitle: 'Power BI & DAX Business Analytics',
    headlineSubtitle: 'Design interactive corporate dashboards, star schema models, custom DAX measures and automated business reports.',
    salaryRange: '₹8 LPA – ₹17 LPA',
    subjectsCovered: [
      'Power BI Desktop Interface',
      'Power Query & ETL Cleaning',
      'Data Modeling & Star Schemas',
      'DAX Measures & Calculated Columns',
      'Time Intelligence Calculations',
      'Interactive Slicers & Visuals',
      'Power BI Service & Cloud Workspaces',
      'Row-Level Security (RLS)'
    ],
    courseContent: [
      { num: '01', title: 'Power BI Fundamentals & Data Connection', topics: ['Importing Excel, SQL & Web Data', 'Power Query Editor Transformations', 'Data Types & Column Profiling', 'Merging & Appending Queries'] },
      { num: '02', title: 'Data Modeling & Relationships', topics: ['Fact & Dimension Tables', 'Star Schema vs Snowflake Schema', 'One-to-Many Relationships', 'Bidirectional Cross-Filtering'] },
      { num: '03', title: 'DAX Formulas & Calculations', topics: ['CALCULATE, FILTER & ALL Functions', 'Time Intelligence (YTD, MTD, YoY)', 'SUMX, AVERAGEX Iterators', 'Variables in DAX for Speed'] },
      { num: '04', title: 'Visuals, Cards & Interactive Design', topics: ['Bar, Line, Waterfall & Matrix Charts', 'Dynamic Drill-Down & Tooltips', 'Custom Bookmarks & Page Navigation', 'Mobile Layout Optimization'] },
      { num: '05', title: 'Power BI Service & Sharing', topics: ['Publishing to Cloud Workspaces', 'Automated Scheduled Data Refresh', 'Dashboard Tiles & Alerts', 'Row-Level Security (RLS) Setup'] },
      { num: '06', title: 'Executive Portfolio Dashboards', topics: ['C-Suite Executive Sales Dashboard', 'HR Analytics & Attrition Tracker', 'Supply Chain Inventory Dashboard', 'Client Presentation Best Practices'] }
    ]
  },
  'data-science-agentic-ai': {
    id: 'data-science-agentic-ai',
    badge: '🤖 Future Tech • Flagship 2050',
    headlineTitle: 'Data Science & Agentic AI',
    headlineSubtitle: 'Build intelligent machine learning pipelines, deep learning models, RAG systems and autonomous AI agents.',
    salaryRange: '₹12 LPA – ₹25 LPA',
    subjectsCovered: [
      'Machine Learning Algorithms',
      'Scikit-Learn & Feature Engineering',
      'Deep Learning & Neural Networks',
      'Large Language Models (LLMs)',
      'Vector Databases & Embeddings',
      'LangChain & LlamaIndex',
      'Autonomous Multi-Agent Frameworks',
      'Model Deployment & MLOps'
    ],
    courseContent: [
      { num: '01', title: 'Machine Learning Fundamentals', topics: ['Supervised vs Unsupervised Learning', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Model Evaluation & Cross-Validation'] },
      { num: '02', title: 'Feature Engineering & Preprocessing', topics: ['Handling Missing Data & Outliers', 'One-Hot & Target Encoding', 'Scaling & Normalization', 'Dimensionality Reduction (PCA)'] },
      { num: '03', title: 'Deep Learning & Neural Networks', topics: ['Perceptrons & Backpropagation', 'Convolutional Networks (CNN)', 'Recurrent Networks (RNN/LSTM)', 'Transfer Learning with PyTorch'] },
      { num: '04', title: 'Generative AI & LLM Systems', topics: ['Transformer Architecture & Attention', 'Prompt Engineering & Fine-Tuning', 'Vector Databases (Pinecone, ChromaDB)', 'Retrieval-Augmented Generation (RAG)'] },
      { num: '05', title: 'Agentic AI & Multi-Agent Workflows', topics: ['Autonomous AI Agents Architecture', 'LangChain & CrewAI Frameworks', 'Tool Calling & Web Search Agents', 'Self-Healing Code Execution Loops'] },
      { num: '06', title: 'Production AI Deployment & Capstone', topics: ['FastAPI Backend for AI Models', 'Docker Containerization', 'Deploying on Cloud (AWS/GCP)', 'End-to-End Autonomous AI Application'] }
    ]
  },
  'full-stack-web-dev': {
    id: 'full-stack-web-dev',
    badge: '💻 Enterprise • Full Stack',
    headlineTitle: 'Full Stack Web Development',
    headlineSubtitle: 'Master front-end, back-end APIs, databases, authentication, real-time WebSockets and cloud deployment.',
    salaryRange: '₹9 LPA – ₹22 LPA',
    subjectsCovered: [
      'React & Modern Front-End UI',
      'Node.js & Express.js Back-End',
      'MongoDB & PostgreSQL Databases',
      'REST APIs & GraphQL',
      'JWT Authentication & OAuth',
      'WebSockets & Real-Time Sync',
      'Docker & Containerization',
      'Cloud Deployment (AWS, Vercel, Render)'
    ],
    courseContent: [
      { num: '01', title: 'Modern Front-End with React', topics: ['Component Architecture & Hooks', 'Tailwind CSS Styling Systems', 'State Management & Context API', 'Client-Side Routing & Navigation'] },
      { num: '02', title: 'Back-End Development with Node.js', topics: ['Node.js Runtime & Event Loop', 'Express.js Framework & Middleware', 'RESTful API Design Standards', 'Error Handling & Request Validation'] },
      { num: '03', title: 'Databases: SQL & NoSQL', topics: ['PostgreSQL Database Design & Prisma', 'MongoDB & Mongoose Object Modeling', 'Database Indexing & Aggregations', 'Data Migrations in Production'] },
      { num: '04', title: 'Authentication & Security', topics: ['JWT Token Authentication', 'Bcrypt Password Hashing', 'Google OAuth 2.0 Integration', 'CORS, Rate Limiting & Helmet Security'] },
      { num: '05', title: 'Real-Time Systems & DevOps', topics: ['Socket.io Real-Time Chat & Alerts', 'File Uploads with AWS S3', 'Docker Containerization Basics', 'GitHub Actions Automated CI/CD'] },
      { num: '06', title: 'Production Capstone SaaS Application', topics: ['Building a Live Production SaaS', 'Payment Gateway Integration (Razorpay/Stripe)', 'Performance Profiling & SEO', 'Cloud Deployment & Monitoring'] }
    ]
  },
  'ui-ux-design-ai': {
    id: 'ui-ux-design-ai',
    badge: '🎨 Creative • Product Design',
    headlineTitle: 'UI/UX Design with Figma & AI',
    headlineSubtitle: 'Craft human-centric digital interfaces, interactive prototypes, scalable design systems and AI-powered UI workflows.',
    salaryRange: '₹6 LPA – ₹18 LPA',
    subjectsCovered: [
      'User Research & Empathy Maps',
      'Information Architecture & Wireframes',
      'Figma Mastery & Auto Layout',
      'Design Tokens & Design Systems',
      'High-Fidelity Interactive Prototypes',
      'Micro-Animations & Transitions',
      'AI Design Tools (Midjourney, Relume, v0)',
      'Design Handoff to Developers'
    ],
    courseContent: [
      { num: '01', title: 'UX Research & Product Strategy', topics: ['User Personas & Journey Mapping', 'Information Architecture & Site Maps', 'Competitor Analysis & UX Benchmarking', 'Usability Testing Methodologies'] },
      { num: '02', title: 'Wireframing & Low-Fidelity Prototyping', topics: ['Paper Sketching & Rapid Wireframes', 'Lo-Fi Digital Wireframes in Figma', 'Clickable Flow Validation', 'User Feedback Synthesis'] },
      { num: '03', title: 'Figma Mastery & Component Systems', topics: ['Figma Auto Layout & Constraints', 'Component Variants & Properties', 'Scalable Typography & Color Tokens', 'Global Design Systems Architecture'] },
      { num: '04', title: 'Interactive High-Fidelity Prototypes', topics: ['Smart Animate & Micro-Interactions', 'Interactive Form Fields & States', 'Mobile App & Web Responsive Grids', 'Dark Mode & Light Mode Theming'] },
      { num: '05', title: 'AI-Powered UI/UX Acceleration', topics: ['Generating Moodboards with Midjourney', 'Relume AI for Rapid Wireframing', 'v0.dev for UI Prompt-to-Code', 'Figma AI Plugins & Workflow Speedups'] },
      { num: '06', title: 'Design Handoff & Portfolio Review', topics: ['Exporting Assets & Developer Specs', 'Design Token Handoff with Storybook', 'Case Study Writing for Dribbble/Behance', 'Live Portfolio Presentation for Hiring'] }
    ]
  },
  'ml-engineering': {
    id: 'ml-engineering',
    badge: '👑 Advanced Tech • MLOps',
    headlineTitle: 'Machine Learning Engineering & MLOps',
    headlineSubtitle: 'Build and deploy scalable ML models, PyTorch, TensorFlow, distributed training and automated MLOps pipelines.',
    salaryRange: '₹12 LPA – ₹28 LPA',
    subjectsCovered: [
      'Scikit-Learn & Advanced Algorithms',
      'PyTorch & Deep Learning Architecture',
      'MLOps Pipelines & Versioning (DVC, MLflow)',
      'Docker & Containerized Model Serving',
      'Model Monitoring & Drift Detection',
      'Cloud Deployment (AWS SageMaker, GCP Vertex AI)'
    ],
    courseContent: [
      { num: '01', title: 'Classical ML at Scale', topics: ['Ensemble Methods (XGBoost, LightGBM)', 'Hyperparameter Optimization (Optuna)', 'Feature Stores & Pipeline Architecture'] },
      { num: '02', title: 'PyTorch Deep Learning', topics: ['Custom Tensors & Autograd', 'CNN & Vision Transformers', 'Transfer Learning & Fine-Tuning'] },
      { num: '03', title: 'Production MLOps Pipelines', topics: ['Model Experiment Tracking with MLflow', 'Data & Model Versioning with DVC', 'FastAPI High-Throughput Inference Server'] },
      { num: '04', title: 'Containerization & Cloud Deployment', topics: ['Docker Container for Inference', 'Kubernetes Cluster Deployment', 'CI/CD Automated Retraining Workflows'] }
    ]
  },
  'msoffice-365-copilot': {
    id: 'msoffice-365-copilot',
    badge: '📊 Productivity • AI Copilot',
    headlineTitle: 'Microsoft Office 365 with Copilot',
    headlineSubtitle: 'Master AI-powered Excel, Word, PowerPoint, Outlook & Teams with Copilot automation for workplace 10x speed.',
    salaryRange: '₹5 LPA – ₹12 LPA',
    subjectsCovered: [
      'Excel Copilot & Automated Analysis',
      'PowerPoint AI Slide Generation',
      'Word Copilot Executive Summaries',
      'Teams & Outlook Email Automation',
      'Power Automate Workplace Workflows'
    ],
    courseContent: [
      { num: '01', title: 'Microsoft Excel Copilot Mastery', topics: ['Natural Language Data Analysis', 'Auto-generating Complex Formulas & Macros', 'Visual Trend Discovery with AI'] },
      { num: '02', title: 'AI PowerPoint & Word Automation', topics: ['Prompt-to-Deck Instant Presentations', 'Executive Briefs & Document Drafting', 'Brand Styling & Corporate Guidelines'] },
      { num: '03', title: 'Outlook & Teams AI Workflows', topics: ['Automated Meeting Catch-ups & Action Items', 'Smart Email Thread Synthesis & Drafts', 'Power Automate Enterprise Integration'] }
    ]
  },
  'ai-career-accelerator': {
    id: 'ai-career-accelerator',
    badge: '🚀 Career Mastery • High Impact',
    headlineTitle: 'AI Career Accelerator & Portfolio Program',
    headlineSubtitle: 'Comprehensive career acceleration: LinkedIn branding, GitHub proof of work, ATS resume crafting and AI mock interviews.',
    salaryRange: '₹8 LPA – ₹24 LPA',
    subjectsCovered: [
      'AI Portfolio & GitHub Proof of Work',
      'ATS-Optimized Tech Resumes',
      'LinkedIn Thought Leadership Branding',
      'Technical & Behavioral AI Mock Rounds',
      'Direct Job Referrals with 700+ Partners'
    ],
    courseContent: [
      { num: '01', title: 'Proof-of-Work Portfolio', topics: ['Building Real-World GitHub Repos', 'Live Interactive Demos & READMEs', 'Technical Case Studies Showcase'] },
      { num: '02', title: 'High-Conversion ATS Resumes', topics: ['Keyword Matching for Job Descriptions', 'Quantified Achievement Bullet Points', 'ATS Formatting Best Practices'] },
      { num: '03', title: 'Interview Simulation & Placement', topics: ['Technical Coding & System Questions', 'HR Behavioral STAR Method Mastery', 'Salary Negotiation & Offer Analysis'] }
    ]
  },
  'ai-for-techies-30days': {
    id: 'ai-for-techies-30days',
    badge: '⚡ 30-Day Sprint • Intensive',
    headlineTitle: 'AI for Techies (30 Days Python Sprint)',
    headlineSubtitle: 'Intensive 30-day coding sprint: Python core, OOP, NumPy, Pandas, API scripting and practical AI automation.',
    salaryRange: '₹6 LPA – ₹15 LPA',
    subjectsCovered: [
      'Python Fast-Track Fundamentals',
      'Data Manipulation with Pandas',
      'REST APIs & Web Automation',
      'OpenAI & Gemini API Scripting',
      '30 Daily Coding Challenges & Projects'
    ],
    courseContent: [
      { num: '01', title: 'Week 1: Core Logic & Speed Coding', topics: ['Python Syntax, Loops & Functions', 'Data Structures & Algorithmic Thinking', 'Daily Hands-On Practice Labs'] },
      { num: '02', title: 'Week 2: Data Wrangling & Parsing', topics: ['Pandas Data Cleaning & Aggregations', 'Working with JSON, CSV & Excel Data', 'Automated Report Generation'] },
      { num: '03', title: 'Week 3: APIs & Cloud Connectivity', topics: ['Connecting to Web APIs with Requests', 'Database Connectivity with SQLite/Postgres', 'Scraping Data for Competitive Insights'] },
      { num: '04', title: 'Week 4: AI Scripting & Capstone Sprint', topics: ['Integrating LLM APIs (OpenAI, Gemini)', 'Building an Automated AI Assistant Tool', 'Deployment & Final Sprint Certificate'] }
    ]
  }
};

interface CourseDetailPopupModalProps {
  isOpen: boolean;
  courseId: string;
  onClose: () => void;
  onUnlock: () => void;
}

export const CourseDetailPopupModal: React.FC<CourseDetailPopupModalProps> = ({
  isOpen,
  courseId,
  onClose,
  onUnlock,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  if (!isOpen) return null;

  // Resolve course detail or fallback to react-frontend-dev
  const course = ALL_COURSES_DETAIL[courseId] || ALL_COURSES_DETAIL['react-frontend-dev'];

  const filteredChapters = course.courseContent.filter(ch =>
    ch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ch.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDownloadSyllabus = () => {
    alert(`${course.headlineTitle} Syllabus Brochure PDF download started!`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* ── 1. COURSE TITLE (ONLY TITLE, NO SUBTITLE, NO EXTRA BADGES) ── */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            {course.headlineTitle}
          </h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-3"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── 2. SUBJECT COVERED ── */}
        <div className="py-3 border-b border-slate-100">
          <div className="flex items-center gap-1.5 mb-2">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Subject Covered
            </h4>
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
            {course.subjectsCovered.map((subject, idx) => (
              <span
                key={idx}
                className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. COURSE CONTENT (CHAPTERS / MODULES WITH SEARCH) ── */}
        <div className="pt-3 pb-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-600" />
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">
              Course Content ({course.courseContent.length} Modules)
            </h4>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics in curriculum..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 bg-slate-50/50"
            />
          </div>
        </div>

        {/* Scrollable Chapters List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2 pr-1.5">
          {filteredChapters.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              No modules found matching "{searchQuery}"
            </div>
          ) : (
            filteredChapters.map((ch) => {
              const isExpanded = expandedChapter === ch.num || searchQuery.length > 0;
              return (
                <div
                  key={ch.num}
                  className="rounded-2xl border border-slate-200/90 bg-white hover:border-blue-300 transition-all overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedChapter(expandedChapter === ch.num ? null : ch.num)}
                    className="w-full p-3 flex items-center justify-between gap-3 text-left hover:bg-slate-50/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-mono text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                        {ch.num}
                      </span>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                          {ch.title}
                        </h5>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {ch.topics.length} Key Topics
                        </span>
                      </div>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 hover:text-slate-700 shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-3 pt-1 border-t border-slate-100 bg-slate-50/40">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {ch.topics.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="leading-tight">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* ── 4. FOOTER: DOWNLOAD SYLLABUS & UNLOCK NOW RS 987 ── */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <button
            onClick={handleDownloadSyllabus}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Syllabus</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onUnlock();
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 active:scale-95 transition-transform cursor-pointer"
          >
            <Unlock className="w-3.5 h-3.5" />
            <span>Unlock Now Rs 987</span>
          </button>
        </div>

      </div>
    </div>
  );
};
