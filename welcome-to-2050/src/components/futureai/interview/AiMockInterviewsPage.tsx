import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Bot,
  Sparkles,
  BarChart3,
  FileText,
  Target,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Sliders,
  Clock,
  ArrowRight,
  Play,
  Square,
  Volume2,
  VolumeX,
  Briefcase,
  Brain,
  Cpu,
  Code2,
  BookOpen,
  HelpCircle,
  Users,
  Check,
  X,
  GraduationCap,
  Award,
  TrendingUp,
  Layers,
  Send,
  Eye,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';

// ─── TYPES & INTERFACES ───────────────────────────────────────────────────────

export type InterviewTrackId =
  | 'data-analyst'
  | 'business-analyst'
  | 'data-scientist'
  | 'ml-engineer'
  | 'ai-engineer'
  | 'full-stack'
  | 'general';

export type InterviewModeId = 'ai' | 'video';

export interface InterviewTrack {
  id: InterviewTrackId;
  name: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export interface QuestionItem {
  id: number;
  question: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  keywords: string[];
  keyConcepts: string[];
  modelAnswer: string;
}

export interface SavedInterviewRecord {
  id: string;
  role: string;
  trackId: InterviewTrackId;
  mode: InterviewModeId;
  date: string;
  score: number;
  maxScore: number;
  totalQuestions: number;
  answers: {
    question: string;
    userAnswer: string;
    score: number;
    feedback: string;
    strengths: string[];
    improvements: string[];
    modelAnswer: string;
  }[];
}

// ─── TRACK DATA ───────────────────────────────────────────────────────────────

export const INTERVIEW_TRACKS: InterviewTrack[] = [
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    subtitle: '200+ Interview Questions',
    icon: BarChart3,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 'business-analyst',
    name: 'Business Analyst',
    subtitle: '180+ Interview Questions',
    icon: Users,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    subtitle: '220+ Interview Questions',
    icon: Brain,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    id: 'ml-engineer',
    name: 'ML Engineer',
    subtitle: '200+ Interview Questions',
    icon: Cpu,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 'ai-engineer',
    name: 'AI Engineer',
    subtitle: '200+ Interview Questions',
    icon: Bot,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    id: 'full-stack',
    name: 'Full Stack Developer',
    subtitle: '250+ Interview Questions',
    icon: Layers,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    id: 'general',
    name: 'General (All Roles)',
    subtitle: '300+ Common Questions',
    icon: BookOpen,
    iconBg: 'bg-fuchsia-50',
    iconColor: 'text-fuchsia-600',
  },
];

// ─── QUESTIONS PER TRACK ──────────────────────────────────────────────────────

export const TRACK_QUESTIONS: Record<InterviewTrackId, QuestionItem[]> = {
  'data-analyst': [
    {
      id: 1,
      question: 'Explain the difference between WHERE and HAVING clause in SQL with a practical business scenario.',
      category: 'SQL & Database',
      difficulty: 'Easy',
      keywords: ['where', 'having', 'aggregate', 'group by', 'filter', 'rows', 'groups'],
      keyConcepts: ['Row-level vs aggregated filtering', 'Execution order (WHERE before GROUP BY, HAVING after)'],
      modelAnswer:
        'The WHERE clause filters individual rows before any grouping or aggregation takes place. The HAVING clause filters grouped records after the GROUP BY clause and aggregate functions (like SUM, COUNT, AVG) have been applied. For example, WHERE department = "Sales" filters row-by-row, while HAVING SUM(sales) > 50000 filters aggregated department totals.',
    },
    {
      id: 2,
      question: 'How do you clean and handle missing or duplicate values when preparing a dataset for reporting?',
      category: 'Data Cleaning & Preprocessing',
      difficulty: 'Medium',
      keywords: ['null', 'imputation', 'median', 'mean', 'drop', 'duplicates', 'outliers', 'distribution'],
      keyConcepts: ['Missing data mechanism (MCAR/MAR)', 'Imputation vs deletion', 'Deduplication strategy'],
      modelAnswer:
        'First, I inspect the percentage and pattern of missing values. If missing data is minimal (<5%) and random, row removal or mean/median imputation works. For skewed numerical features, median or KNN imputation is preferred to avoid outlier distortion. For categorical variables, mode imputation or a "Missing" category is used. For duplicates, I verify unique primary business keys before removing redundant rows.',
    },
    {
      id: 3,
      question: 'What is the difference between Star Schema and Snowflake Schema in Power BI / Data Warehousing?',
      category: 'Business Intelligence & Modeling',
      difficulty: 'Medium',
      keywords: ['fact', 'dimension', 'normalized', 'denormalized', 'star', 'snowflake', 'performance', 'joins'],
      keyConcepts: ['Normalization levels', 'DAX query performance in Power BI', 'Storage vs join complexity'],
      modelAnswer:
        'A Star Schema features a central Fact table directly connected to denormalized Dimension tables via single-hop relationships, delivering the fastest query performance and simplest DAX calculations. A Snowflake Schema normalizes dimension tables into sub-dimensions (e.g., Product splits into Subcategory and Category), reducing redundancy at the cost of additional joins and slower dashboard rendering.',
    },
    {
      id: 4,
      question: 'How would you measure Customer Churn Rate and propose data-driven retention actions?',
      category: 'Business Metrics & Analytics',
      difficulty: 'Hard',
      keywords: ['churn', 'retention', 'cohort', 'ltv', 'customer', 'active', 'funnel', 'kpi'],
      keyConcepts: ['Formula: churned / total at start', 'Cohort analysis', 'Leading churn indicators'],
      modelAnswer:
        'Churn Rate is calculated as (Customers Lost during Period) / (Customers at Start of Period). Beyond the raw metric, I perform cohort analysis to find when drop-offs peak, segmented by acquisition channel and product usage frequency. If feature inactivity precedes churn by 14 days, I recommend triggered automated email outreach, discounts, or customer success check-ins before cancellation happens.',
    },
  ],
  'business-analyst': [
    {
      id: 1,
      question: 'How do you gather, validate, and document business requirements from non-technical stakeholders?',
      category: 'Requirement Engineering',
      difficulty: 'Easy',
      keywords: ['brd', 'frd', 'stakeholder', 'interviews', 'user stories', 'acceptance criteria', 'workshop'],
      keyConcepts: ['Stakeholder discovery', 'Translating business need to technical requirements', 'Sign-off process'],
      modelAnswer:
        'I conduct 1-on-1 interviews, workshops, and shadow operational workflows to understand the root business problem. I translate these findings into a Business Requirements Document (BRD) and agile User Stories with strict Gherkin Given-When-Then acceptance criteria, followed by walkthrough sessions to ensure formal alignment.',
    },
    {
      id: 2,
      question: 'Explain the difference between Agile Scrum and Kanban methodologies in sprint delivery.',
      category: 'Agile Methodologies',
      difficulty: 'Medium',
      keywords: ['scrum', 'kanban', 'sprint', 'wip', 'standup', 'backlog', 'velocity', 'cycle time'],
      keyConcepts: ['Time-boxed sprints vs continuous flow', 'WIP limits in Kanban'],
      modelAnswer:
        'Scrum relies on fixed time-boxed sprints (usually 2 weeks) with designated ceremonies (Planning, Daily Standup, Review, Retrospective) and committed story points. Kanban is a continuous flow system focused on visualizing work and enforcing Work-In-Progress (WIP) limits to prevent bottlenecks, making it ideal for maintenance or support teams.',
    },
    {
      id: 3,
      question: 'How do you conduct a Root Cause Analysis using the 5 Whys and Fishbone diagram?',
      category: 'Problem Solving & Analytics',
      difficulty: 'Medium',
      keywords: ['root cause', '5 whys', 'fishbone', 'ishikawa', 'process', 'people', 'technology'],
      keyConcepts: ['Iterative questioning', 'Categorical breakdown (People, Process, Tech, Policy)'],
      modelAnswer:
        'I start with an Ishikawa (Fishbone) diagram categorizing potential failure modes across People, Process, Technology, and Governance. Once candidate causes are identified, I drill down using the 5 Whys technique, asking "Why did this happen?" repeatedly until the foundational breakdown is uncovered, allowing us to implement preventative rather than reactive fixes.',
    },
    {
      id: 4,
      question: 'Walk me through how you prioritize product features using the MoSCoW framework.',
      category: 'Product Prioritization',
      difficulty: 'Hard',
      keywords: ['moscow', 'must have', 'should have', 'could have', 'wont have', 'mvp', 'scope'],
      keyConcepts: ['MoSCoW quadrants', 'MVP definition', 'Managing stakeholder expectations'],
      modelAnswer:
        'The MoSCoW framework categorizes requirements into Must-haves (non-negotiable core functionality for legal or MVP release), Should-haves (critical features with workarounds), Could-haves (enhancements implemented if time permits), and Won\'t-haves (agreed out of scope for the current sprint cycle), ensuring disciplined scope management and on-time delivery.',
    },
  ],
  'data-scientist': [
    {
      id: 1,
      question: 'How do you detect and address class imbalance in a classification model?',
      category: 'Machine Learning Fundamentals',
      difficulty: 'Medium',
      keywords: ['imbalance', 'smote', 'undersampling', 'oversampling', 'roc-auc', 'precision', 'recall', 'f1-score'],
      keyConcepts: ['Metric selection (F1/AUC vs accuracy)', 'Resampling techniques', 'Cost-sensitive learning'],
      modelAnswer:
        'Standard accuracy is misleading in imbalanced datasets. First, I shift evaluation to Precision-Recall AUC, F1-Score, and Confusion Matrix. On the data side, I apply SMOTE (Synthetic Minority Over-sampling Technique) or targeted undersampling on the training split only. Algorithmically, I use cost-sensitive learning or class_weight="balanced" in tree and logistic algorithms.',
    },
    {
      id: 2,
      question: 'Explain the Bias-Variance tradeoff and how L1 (Lasso) and L2 (Ridge) regularization help.',
      category: 'Statistical Learning',
      difficulty: 'Medium',
      keywords: ['bias', 'variance', 'overfitting', 'underfitting', 'regularization', 'l1', 'l2', 'lasso', 'ridge'],
      keyConcepts: ['Underfitting vs overfitting balance', 'Sparsity with L1 vs shrinkage with L2'],
      modelAnswer:
        'High bias causes underfitting by oversimplifying patterns, while high variance causes overfitting by modeling training noise. Regularization constrains model weights: L1 (Lasso) adds an absolute penalty (|w|), driving irrelevant feature coefficients exactly to zero for automated feature selection. L2 (Ridge) adds a squared penalty (w²), shrinking weights smoothly to reduce variance without eliminating features.',
    },
    {
      id: 3,
      question: 'How do Random Forest and Gradient Boosted Trees (XGBoost/LightGBM) differ in ensemble logic?',
      category: 'Ensemble Learning',
      difficulty: 'Hard',
      keywords: ['random forest', 'gradient boosting', 'bagging', 'boosting', 'parallel', 'sequential', 'residuals'],
      keyConcepts: ['Bagging vs Boosting', 'Independent trees vs residual correction'],
      modelAnswer:
        'Random Forest uses Bagging (Bootstrap Aggregating) to train deep, unpruned decision trees in parallel on random data and feature subsets, reducing variance through averaging. Gradient Boosting trains shallow trees sequentially, where each new tree specifically predicts and corrects the pseudo-residuals (errors) of the preceding ensemble, reducing both bias and variance.',
    },
    {
      id: 4,
      question: 'How would you design an end-to-end A/B test for a recommendation system?',
      category: 'Experimentation & Hypothesis Testing',
      difficulty: 'Hard',
      keywords: ['ab test', 'p-value', 'power', 'sample size', 'control', 'treatment', 'statistical significance'],
      keyConcepts: ['Sample size calculation', 'Randomization unit', 'Novelty effect and primary KPI'],
      modelAnswer:
        'First, I formulate the null hypothesis and choose a primary business metric (e.g., Conversion Rate or Click-Through Rate) alongside guardrail metrics (e.g., unsubscribe rate). I run a power analysis to calculate minimum required sample size based on baseline conversion, Minimum Detectable Effect (MDE), 80% statistical power, and alpha=0.05. I ensure user-level hash randomization, run the test for full weekly cycles, and evaluate statistical significance via two-tailed hypothesis tests.',
    },
  ],
  'ml-engineer': [
    {
      id: 1,
      question: 'How do you containerize and serve an ML inference service using Docker and FastAPI?',
      category: 'Model Serving & DevOps',
      difficulty: 'Medium',
      keywords: ['docker', 'fastapi', 'uvicorn', 'container', 'latency', 'batching', 'onnx', 'dockerfile'],
      keyConcepts: ['Asynchronous serving', 'Multi-stage Docker build', 'Preloading model weights in memory'],
      modelAnswer:
        'I load the serialized model (or ONNX runtime) during FastAPI startup lifecycle so weights persist in memory rather than reloading per request. I wrap endpoints with Pydantic schemas for request validation. In the multi-stage Dockerfile, I pin slim base images, install dependencies without cache, set non-root user permissions, and run Uvicorn with worker processes matched to CPU cores.',
    },
    {
      id: 2,
      question: 'What is the difference between Data Drift and Concept Drift, and how do you monitor them?',
      category: 'MLOps & Model Monitoring',
      difficulty: 'Hard',
      keywords: ['data drift', 'concept drift', 'distribution', 'ks-test', 'evidently', 'monitoring', 'retraining'],
      keyConcepts: ['P(X) shift vs P(Y|X) shift', 'Statistical distance metrics (PSI, KS-Test)'],
      modelAnswer:
        'Data Drift (Covariate Shift) occurs when the input feature distribution P(X) changes over time (e.g., user demographics change) while the underlying relationship remains intact. Concept Drift occurs when the statistical mapping between inputs and targets P(Y|X) changes (e.g., spending habits shift during economic inflation). I monitor data drift using Population Stability Index (PSI) and Kolmogorov-Smirnov tests with tools like Evidently AI, triggering automated alerting and model retraining pipelines.',
    },
    {
      id: 3,
      question: 'How do you scale hyperparameter optimization using Bayesian optimization and Optuna?',
      category: 'Model Optimization',
      difficulty: 'Hard',
      keywords: ['optuna', 'bayesian', 'pruning', 'tpe', 'hyperparameters', 'search space'],
      keyConcepts: ['Tree-structured Parzen Estimator (TPE)', 'Early stopping / pruning unpromising trials'],
      modelAnswer:
        'Instead of brute-force Grid Search or unfocused Random Search, Optuna uses Bayesian optimization via Tree-structured Parzen Estimators (TPE) to model past trial performance and guide future sampling toward high-reward parameter spaces. Crucially, its Median Pruner terminates unpromising trials early based on validation curves, saving 60-80% compute time.',
    },
    {
      id: 4,
      question: 'Explain how you build an automated CI/CD retraining pipeline for production ML.',
      category: 'MLOps Architecture',
      difficulty: 'Hard',
      keywords: ['cicd', 'pipeline', 'mlflow', 'model registry', 'github actions', 'canary', 'shadow'],
      keyConcepts: ['Automated validation gates', 'Model Registry versioning', 'Shadow/Canary deployment'],
      modelAnswer:
        'The pipeline triggers upon new labeled batch availability or drift alert. GitHub Actions or Airflow triggers data extraction, validation, and training. The resulting model is evaluated against the current production baseline on holdout datasets. If performance exceeds champion thresholds, weights are registered to MLflow Model Registry and deployed via a Canary or Shadow deployment to verify real-world latency before routing 100% traffic.',
    },
  ],
  'ai-engineer': [
    {
      id: 1,
      question: 'What is Retrieval-Augmented Generation (RAG) and how does chunking strategy affect retrieval accuracy?',
      category: 'Generative AI & LLMs',
      difficulty: 'Medium',
      keywords: ['rag', 'retrieval', 'chunking', 'embeddings', 'vector', 'overlap', 'hallucination', 'context'],
      keyConcepts: ['Vector similarity retrieval', 'Chunk size and overlap balance', 'Semantic chunking'],
      modelAnswer:
        'RAG enriches LLM prompts with dynamic external context retrieved from proprietary databases, eliminating knowledge cutoff and drastically reducing hallucinations. Chunking strategy is critical: oversized chunks dilute semantic embeddings with extraneous noise, while undersized chunks fragment vital context. Using 500-1000 tokens with 10-20% overlap or semantic recursive character chunking ensures high cosine similarity without context loss.',
    },
    {
      id: 2,
      question: 'How do Vector Databases work with dense embeddings, and what indexing algorithms are used?',
      category: 'Vector Search & Architecture',
      difficulty: 'Medium',
      keywords: ['vector', 'hnsw', 'cosine', 'dense', 'faiss', 'qdrant', 'pinecone', 'ann'],
      keyConcepts: ['Approximate Nearest Neighbor (ANN)', 'HNSW graph indexing', 'Distance metrics'],
      modelAnswer:
        'Vector databases store high-dimensional dense embeddings generated by models like text-embedding-3-small. To search millions of vectors in single-digit milliseconds without O(N) exhaustive scanning, they use Approximate Nearest Neighbor (ANN) algorithms. The gold standard is HNSW (Hierarchical Navigable Small World), which constructs multi-layered graphs for logarithmic search time combined with Cosine or Dot-Product similarity.',
    },
    {
      id: 3,
      question: 'Compare Fine-Tuning (LoRA/QLoRA) vs Prompt Engineering vs RAG for enterprise applications.',
      category: 'LLM Adaptation',
      difficulty: 'Hard',
      keywords: ['lora', 'qlora', 'fine-tuning', 'prompt engineering', 'rag', 'cost', 'knowledge'],
      keyConcepts: ['Knowledge injection (RAG) vs behavior/tone formatting (LoRA)', 'Compute costs'],
      modelAnswer:
        'Prompt Engineering is fastest and cheapest for prototyping. RAG is best when knowledge updates frequently, references must be cited, and private data must remain secure without retraining. Fine-Tuning (LoRA/QLoRA) is best when teaching an LLM specific syntax, specialized terminology, novel reasoning formats, or consistent JSON structures where prompt instructions prove insufficient.',
    },
    {
      id: 4,
      question: 'How do you design an Autonomous AI Agent with Tool Calling and memory?',
      category: 'AI Agents & LangGraph',
      difficulty: 'Hard',
      keywords: ['agent', 'tool calling', 'langchain', 'langgraph', 'memory', 'react', 'reasoning', 'loop'],
      keyConcepts: ['ReAct (Reason + Act) loop', 'Stateful graph execution', 'Short vs long term memory'],
      modelAnswer:
        'An AI Agent uses the ReAct (Reasoning and Acting) loop where the LLM evaluates the user objective, decides which external tool to call (via JSON schema function calling), inspects tool outputs, and iterates until the goal is achieved. In production, I build agents using LangGraph for cyclic graph state management, pairing short-term conversational buffer memory with vector-based long-term retrieval memory.',
    },
  ],
  'full-stack': [
    {
      id: 1,
      question: 'Explain how the React Virtual DOM and reconciliation algorithm (Fiber) optimize UI renders.',
      category: 'Frontend Engineering',
      difficulty: 'Medium',
      keywords: ['virtual dom', 'reconciliation', 'fiber', 'diffing', 'keys', 'rerender', 'performance'],
      keyConcepts: ['In-memory tree comparison', 'Incremental rendering with Fiber', 'Key prop importance'],
      modelAnswer:
        'When state changes, React constructs a new Virtual DOM tree in memory and compares it against the previous tree using a heuristic O(N) diffing algorithm. With the Fiber reconciliation architecture, React can pause, prioritize, and resume work asynchronously. It calculates minimal DOM mutations and batches updates to the real browser DOM, preventing costly layout reflows.',
    },
    {
      id: 2,
      question: 'How does the Node.js Event Loop work with asynchronous tasks (Microtasks vs Macrotasks)?',
      category: 'Backend Architecture',
      difficulty: 'Medium',
      keywords: ['event loop', 'microtask', 'macrotask', 'promises', 'settimeout', 'non-blocking', 'libuv'],
      keyConcepts: ['Single-threaded event loop', 'Microtask queue priority (Promise/process.nextTick)'],
      modelAnswer:
        'Node.js runs on a single-threaded V8 engine backed by Libuv for non-blocking I/O. The Event Loop processes phases: Timers (setTimeout), Pending Callbacks, Poll (I/O), and Check (setImmediate). Crucially, after each operation, the Microtask Queue (Promises and process.nextTick) drains completely before the next Macrotask queue item executes, ensuring promises resolve with immediate priority.',
    },
    {
      id: 3,
      question: 'How do you secure a production REST/GraphQL API against common vulnerabilities?',
      category: 'Web Security',
      difficulty: 'Hard',
      keywords: ['jwt', 'cors', 'rate limiting', 'sanitize', 'sql injection', 'xss', 'csrf', 'helmet'],
      keyConcepts: ['Authentication vs authorization', 'Input sanitization', 'Defense in depth'],
      modelAnswer:
        'I implement defense in depth: HTTPS with Helmet for secure response headers; CORS restricted to trusted client domains; JWTs stored in httpOnly, Secure, SameSite cookies to mitigate XSS and CSRF; parameterized SQL queries / ORMs to eliminate injection attacks; bcrypt/argon2 for password hashing; and Redis-based rate limiting to prevent DDoS or credential stuffing.',
    },
    {
      id: 4,
      question: 'Compare SQL (PostgreSQL) vs NoSQL (MongoDB) for transactional consistency vs scalability.',
      category: 'Database Design',
      difficulty: 'Hard',
      keywords: ['sql', 'nosql', 'acid', 'transactions', 'indexes', 'schema', 'sharding', 'normalization'],
      keyConcepts: ['ACID compliance', 'CAP theorem trade-offs', 'Schema rigidity vs flexibility'],
      modelAnswer:
        'PostgreSQL guarantees strict ACID compliance, relational foreign-key integrity, and complex join querying, making it ideal for financial transactions, billing, and interconnected business domains. MongoDB offers horizontal sharding and flexible document schemas, ideal for rapidly evolving unstructured payloads, event logging, and catalogs. Modern PostgreSQL also supports JSONB indexing, bridging the document gap.',
    },
  ],
  'general': [
    {
      id: 1,
      question: 'Tell me about yourself and your journey transitioning into the tech industry.',
      category: 'Behavioral & Introduction',
      difficulty: 'Easy',
      keywords: ['background', 'projects', 'skills', 'transition', 'learning', 'passion', 'industry'],
      keyConcepts: ['Present, Past, Future structure', 'Highlighting tangible project achievements'],
      modelAnswer:
        'I follow the Present-Past-Future structure: I introduce my current expertise in modern technology stacks and hands-on project accomplishments with Future IT Industry. I then briefly touch upon my academic or professional background and why I committed to this high-growth field. Finally, I connect my skills directly to the specific impact I look forward to making in this role.',
    },
    {
      id: 2,
      question: 'Describe a challenging technical roadblock you encountered and how you solved it.',
      category: 'Problem Solving & Resilience',
      difficulty: 'Medium',
      keywords: ['star', 'situation', 'task', 'action', 'result', 'debug', 'solution', 'outcome'],
      keyConcepts: ['STAR method', 'Systematic debugging approach', 'Measurable result'],
      modelAnswer:
        'Using the STAR framework: During a critical pipeline build, our query performance degraded by 400% on production data. As the lead analyst, my task was to isolate the bottleneck without service downtime. I used EXPLAIN ANALYZE, identified missing composite indexes and excessive joins, refactored the SQL query, and added caching. The action reduced execution latency from 14s to 380ms.',
    },
    {
      id: 3,
      question: 'How do you handle tight project deadlines and conflicting stakeholder priorities?',
      category: 'Teamwork & Communication',
      difficulty: 'Medium',
      keywords: ['prioritization', 'communication', 'trade-offs', 'scope', 'transparency', 'stakeholders'],
      keyConcepts: ['Proactive communication', 'Transparent trade-off discussions', 'MoSCoW scoping'],
      modelAnswer:
        'I prioritize radical transparency and proactive communication. Rather than letting deadlines slip silently, I schedule an immediate alignment call with project leads. I present clear data on current velocity, outline realistic trade-offs between scope, quality, and delivery date, and propose an MVP delivery of core features with secondary items scheduled for the subsequent sprint.',
    },
    {
      id: 4,
      question: 'Where do you see yourself in 3 years, and what career milestones do you aim to achieve?',
      category: 'Career Vision',
      difficulty: 'Easy',
      keywords: ['growth', 'mentorship', 'leadership', 'technical expertise', 'contributions', 'value'],
      keyConcepts: ['Technical mastery progression', 'Mentorship and business impact goals'],
      modelAnswer:
        'In three years, I see myself as a seasoned core contributor who not only executes high-complexity technical deliverables independently, but also mentors junior talent and bridges the gap between engineering and strategic business goals. I want to build deep domain authority within the company and drive measurable product innovations.',
    },
  ],
};

// ─── MAIN COMPONENT PROPS ─────────────────────────────────────────────────────

export interface AiMockInterviewsPageProps {
  userName: string;
  onBack?: () => void;
  onOpenLogin?: () => void;
}

export const AiMockInterviewsPage: React.FC<AiMockInterviewsPageProps> = ({
  userName = 'Rahul Sharma',
  onBack,
  onOpenLogin,
}) => {
  const { playClick } = useThemeAccent();

  // Active track selection
  const [selectedTrack, setSelectedTrack] = useState<InterviewTrackId>('data-analyst');

  // Active mode selection
  const [selectedMode, setSelectedMode] = useState<InterviewModeId>('ai');



  // Active interview state
  const [isInterviewActive, setIsInterviewActive] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [currentAnswerText, setCurrentAnswerText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [isSpeakingQuestion, setIsSpeakingQuestion] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(120);

  // Video stream state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Speech recognition ref
  const recognitionRef = useRef<any>(null);

  // Interview results modal state
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [activeReport, setActiveReport] = useState<SavedInterviewRecord | null>(null);

  // Saved interview history from localStorage
  const [interviewHistory, setInterviewHistory] = useState<SavedInterviewRecord[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const saved = localStorage.getItem(`futureai_mock_interviews_${userName}`);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load mock interview history:', e);
    }
    return [];
  });

  // Calculate real performance metrics from student history
  const performanceMetrics = useMemo(() => {
    const total = interviewHistory.length;
    if (total === 0) {
      return {
        completedCount: 0,
        averageScore: null,
        improvementPercent: null,
      };
    }
    const sumScores = interviewHistory.reduce((acc, curr) => acc + curr.score, 0);
    const avg = (sumScores / total).toFixed(1);

    let improvement = 0;
    if (total > 1) {
      const firstScore = interviewHistory[total - 1].score;
      const latestScore = interviewHistory[0].score;
      if (firstScore > 0) {
        improvement = Math.round(((latestScore - firstScore) / firstScore) * 100);
      }
    } else {
      improvement = Math.round((interviewHistory[0].score / 10) * 100);
    }

    return {
      completedCount: total,
      averageScore: avg,
      improvementPercent: Math.max(0, improvement),
    };
  }, [interviewHistory]);

  const activeTrackObj = useMemo(
    () => INTERVIEW_TRACKS.find((t) => t.id === selectedTrack) || INTERVIEW_TRACKS[0],
    [selectedTrack]
  );

  const activeQuestions = useMemo(() => {
    return TRACK_QUESTIONS[selectedTrack] || TRACK_QUESTIONS['data-analyst'];
  }, [selectedTrack]);

  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];

  // ─── TIMER EFFECT ───────────────────────────────────────────────────────────
  useEffect(() => {
    let timer: any = null;
    if (isInterviewActive && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isInterviewActive, secondsRemaining]);

  // ─── CLEANUP MEDIA STREAMS ──────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ─── START INTERVIEW HANDLER ────────────────────────────────────────────────
  const handleStartInterview = async () => {
    playClick();

    // If Video mode, request camera & mic permissions
    if (selectedMode === 'video' || selectedMode === 'ai') {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: selectedMode === 'video',
            audio: true,
          });
          streamRef.current = stream;
          setHasCameraPermission(true);
          setCameraError(null);
          if (videoRef.current && selectedMode === 'video') {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(() => {});
          }
        }
      } catch (err: any) {
        console.warn('Camera/Mic permission warning:', err);
        setCameraError(
          'Microphone or Camera access was denied or not available. You can continue using Text responses.'
        );
      }
    }

    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setCurrentAnswerText('');
    setSecondsRemaining(120);
    setIsInterviewActive(true);

    // Speak initial question if in AI mode
    if (selectedMode === 'ai' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      speakQuestionText(activeQuestions[0].question);
    }
  };

  // ─── VOICE SPEECH SYNTHESIS ─────────────────────────────────────────────────
  const speakQuestionText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsSpeakingQuestion(true);
      utterance.onend = () => setIsSpeakingQuestion(false);
      utterance.onerror = () => setIsSpeakingQuestion(false);
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      setIsSpeakingQuestion(false);
    }
  };

  const handleToggleSpeak = () => {
    if (isSpeakingQuestion) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeakingQuestion(false);
    } else {
      speakQuestionText(currentQuestion.question);
    }
  };

  // ─── SPEECH TO TEXT (MIC) ───────────────────────────────────────────────────
  const handleToggleRecording = () => {
    playClick();
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Native Web Speech Recognition is not supported in this browser. Please type your response.');
      return;
    }

    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setCurrentAnswerText((prev) => (prev ? prev + ' ' + transcript : transcript));
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.warn('Speech recognition start failed:', e);
      setIsRecording(false);
    }
  };

  // ─── NEXT / FINISH QUESTION HANDLER ─────────────────────────────────────────
  const handleSaveAndNext = () => {
    playClick();
    if (isSpeakingQuestion && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeakingQuestion(false);
    }
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    const updatedAnswers = {
      ...userAnswers,
      [currentQuestionIndex]: currentAnswerText.trim(),
    };
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < activeQuestions.length) {
      // Go to next question
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      setCurrentAnswerText(updatedAnswers[nextIdx] || '');
      setSecondsRemaining(120);
      if (selectedMode === 'ai') {
        speakQuestionText(activeQuestions[nextIdx].question);
      }
    } else {
      // Finish interview and evaluate
      finishAndEvaluateInterview(updatedAnswers);
    }
  };

  // ─── FINISH & EVALUATION ENGINE ─────────────────────────────────────────────
  const finishAndEvaluateInterview = (finalAnswers: Record<number, string>) => {
    // Stop streams
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }

    const evaluatedDetails = activeQuestions.map((q, idx) => {
      const ans = (finalAnswers[idx] || '').trim();
      const lowerAns = ans.toLowerCase();

      // Deterministic scoring based on keyword coverage and length
      let matches = 0;
      q.keywords.forEach((kw) => {
        if (lowerAns.includes(kw.toLowerCase())) matches++;
      });

      const keywordRatio = q.keywords.length > 0 ? matches / q.keywords.length : 0.5;
      const wordCount = ans.split(/\s+/).filter(Boolean).length;

      let score = 0;
      if (wordCount === 0) {
        score = 0;
      } else {
        // Base score calculated from keywords + depth
        const depthScore = Math.min(4, (wordCount / 40) * 4);
        const keywordScore = keywordRatio * 6;
        score = Math.min(10, Math.max(2, parseFloat((depthScore + keywordScore).toFixed(1))));
      }

      const strengths: string[] = [];
      const improvements: string[] = [];

      if (matches >= 2) {
        strengths.push(`Good grasp of key technical terminology (${matches} core keywords mentioned).`);
      }
      if (wordCount > 35) {
        strengths.push('Elaborated with structured reasoning and clear explanation.');
      } else {
        improvements.push('Expand your answer with a concrete business or technical scenario.');
      }
      if (keywordRatio < 0.5) {
        improvements.push(`Review key architectural concepts: ${q.keyConcepts.join(', ')}.`);
      }

      return {
        question: q.question,
        userAnswer: ans || '(No answer provided)',
        score,
        feedback:
          score >= 7.5
            ? 'Strong response showing industry readiness and solid conceptual clarity.'
            : score >= 5
            ? 'Satisfactory foundational understanding, but lacks technical depth and business impact.'
            : 'Needs improvement. Focus on key industry keywords and structured explanation.',
        strengths,
        improvements,
        modelAnswer: q.modelAnswer,
      };
    });

    const totalQuestions = evaluatedDetails.length;
    const avgScore =
      totalQuestions > 0
        ? parseFloat(
            (
              evaluatedDetails.reduce((acc, curr) => acc + curr.score, 0) / totalQuestions
            ).toFixed(1)
          )
        : 0;

    const newRecord: SavedInterviewRecord = {
      id: `int_${Date.now()}`,
      role: activeTrackObj.name,
      trackId: selectedTrack,
      mode: selectedMode,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      score: avgScore,
      maxScore: 10,
      totalQuestions,
      answers: evaluatedDetails,
    };

    // Save to localStorage & update state
    const updatedHistory = [newRecord, ...interviewHistory];
    setInterviewHistory(updatedHistory);
    try {
      localStorage.setItem(`futureai_mock_interviews_${userName}`, JSON.stringify(updatedHistory));
    } catch (e) {
      console.warn('Failed to save interview record:', e);
    }

    setIsInterviewActive(false);
    setActiveReport(newRecord);
    setIsReportOpen(true);
  };

  // ─── EXIT / CANCEL INTERVIEW ────────────────────────────────────────────────
  const handleExitInterview = () => {
    playClick();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsInterviewActive(false);
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full min-h-screen bg-[#f8faff] text-slate-900 pb-16">
      <div className="max-w-[1520px] mx-auto px-3 sm:px-4 lg:px-6 pt-3 space-y-4">
        
        {/* ─── BREADCRUMB / TOP BAR ─── */}
        <div className="flex items-center justify-between py-1">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
            <button
              type="button"
              onClick={() => {
                playClick();
                if (onBack) onBack();
                else if (typeof window !== 'undefined') window.location.hash = '#dashboard';
              }}
              className="hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Dashboard</span>
            </button>
            <span>/</span>
            <span className="text-blue-600 font-bold">AI-Powered Mock Interviews</span>
          </div>

          {onBack && (
            <button
              type="button"
              onClick={() => {
                playClick();
                onBack();
              }}
              className="text-xs font-bold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
            >
              ← Back to Dashboard
            </button>
          )}
        </div>

        {/* ─── 1. HERO BANNER (MATCHING REFERENCE IMAGE 1:1) ─── */}
        <section className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-indigo-900/30 bg-gradient-to-r from-[#031b4e] via-[#092570] to-[#451282] min-h-[140px] sm:min-h-[160px] lg:min-h-[175px] flex items-center">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT: Celebrating Student Image (Seamless blend) */}
          <div className="absolute left-0 bottom-0 top-0 w-[180px] sm:w-[220px] lg:w-[260px] pointer-events-none select-none z-10 flex items-end">
            <img
              src="/images/dashboard/placement_hero_student_hd.png"
              alt="Student"
              className="h-full w-auto object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/dashboard/hero_student_celebrating.png';
              }}
            />
            {/* Soft subtle gradient blend on right of student */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-transparent pointer-events-none" />
          </div>

          {/* RIGHT: Cute AI Interviewer Robot (From reference image) */}
          <div className="absolute right-0 bottom-0 top-0 w-[160px] sm:w-[200px] lg:w-[240px] pointer-events-none select-none z-10 flex items-center justify-end pr-2 sm:pr-4">
            <img
              src="/images/dashboard/generated_mock_robot_hd.png"
              alt="AI Interviewer Robot"
              className="h-[85%] sm:h-[92%] w-auto object-contain filter drop-shadow-[0_8px_24px_rgba(30,58,138,0.6)]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          {/* CENTER: Headline + Subtitle + 5 Feature Icons */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 py-4 sm:py-5 pl-[140px] sm:pl-[200px] lg:pl-[240px] pr-[130px] sm:pr-[190px] lg:pr-[230px]">
            
            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl lg:text-[32px] xl:text-[35px] font-black tracking-tight text-white leading-tight">
              AI-Powered <span className="text-[#00D2FF]">Mock Interviews</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[11px] sm:text-xs lg:text-[13.5px] text-white/90 font-medium mt-1 max-w-xl">
              Practice real interview questions, get instant AI feedback and be interview ready.
            </p>

            {/* 5 Feature Icons Row */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 lg:gap-5 mt-3 sm:mt-3.5">
              {[
                { icon: Video, label: 'Real Interview\nExperience' },
                { icon: Cpu, label: 'AI\nInterviewer' },
                { icon: BarChart3, label: 'Instant\nFeedback' },
                { icon: FileText, label: 'Detailed\nReport' },
                { icon: Target, label: 'Improve\n& Re-Attempt' },
              ].map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-sm group-hover:bg-white/25 transition-all">
                      <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-300 stroke-[2.2]" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-white/90 mt-1 leading-tight text-center whitespace-pre-line">
                      {feat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ─── 2. THREE-COLUMN DASHBOARD LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start">
          
          {/* ═══════════════════════════════════════════════════════════════
              COLUMN 1: CHOOSE INTERVIEW TRACK (Left, col-span-3)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2.5">
            <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
              <h2 className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight">
                Choose Interview Track
              </h2>
            </div>

            <div className="space-y-1.5">
              {INTERVIEW_TRACKS.map((track) => {
                const isSelected = selectedTrack === track.id;
                const IconComp = track.icon;

                return (
                  <div
                    key={track.id}
                    onClick={() => {
                      playClick();
                      setSelectedTrack(track.id);
                    }}
                    className={`w-full px-3 py-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-[#e0f2fe] border-sky-400 text-blue-900 shadow-sm'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/70 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : `${track.iconBg} ${track.iconColor} border-slate-200/60`
                        }`}
                      >
                        <IconComp className="w-4 h-4 stroke-[2.2]" />
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="text-xs sm:text-[13px] font-bold truncate leading-tight">
                          {track.name}
                        </div>
                        <div className="text-[10px] sm:text-[10.5px] text-slate-500 font-medium truncate mt-0.5">
                          {track.subtitle}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              COLUMN 2: MOCK INTERVIEW CENTER PANEL (col-span-6)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-4">
            
            {/* Header: Title + Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                Mock Interview – <span className="text-blue-600">{activeTrackObj.name}</span>
              </h2>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-slate-100 text-slate-700 border border-slate-200/90 flex items-center gap-1">
                  <Users className="w-3 h-3 text-slate-500" />
                  <span>12,840+ Interviews Taken</span>
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                  <span>AI Powered</span>
                </span>
              </div>
            </div>

            {/* 2 Selectable Interview Modes (AI & Video) */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { id: 'ai' as InterviewModeId, label: 'AI Interview', sub: '(Recommended)', icon: Bot },
                { id: 'video' as InterviewModeId, label: 'Video Interview', icon: Video },
              ].map((mode) => {
                const isSelected = selectedMode === mode.id;
                const IconComp = mode.icon;

                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setSelectedMode(mode.id);
                    }}
                    className={`px-2.5 py-2 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-center ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white border-blue-600 shadow-md shadow-blue-500/25'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`} />
                      <span className="text-[11.5px] font-bold truncate leading-tight">
                        {mode.label}
                      </span>
                    </div>
                    {mode.sub && (
                      <span
                        className={`text-[9px] font-medium leading-none mt-0.5 ${
                          isSelected ? 'text-white/80' : 'text-slate-400'
                        }`}
                      >
                        {mode.sub}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Central Video Call Preview Box + Start Info */}
            <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50/70 via-white to-blue-50/30 p-3 sm:p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
                
                {/* Left: Video Call Screen Preview Image */}
                <div className="md:col-span-6 rounded-xl overflow-hidden border border-slate-300/80 shadow-md bg-slate-900 relative group aspect-[16/10] flex items-center justify-center">
                  <img
                    src="/images/dashboard/generated_mock_interview_screen.png"
                    alt="AI Interviewer Call"
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/dashboard/mock_interviewer_screen.png';
                    }}
                  />
                  {/* Subtle video overlay pill */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live AI Host</span>
                  </div>
                </div>

                {/* Right: Start Your Mock Interview Info & Benefits */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base sm:text-[17px] font-black text-slate-900 leading-tight">
                      Start Your <span className="text-purple-600">Mock Interview</span>
                    </h3>
                    <div className="text-xs font-bold text-blue-600 mt-0.5">
                      Role: <span className="text-slate-800">{activeTrackObj.name}</span>
                    </div>

                    {/* Green check benefits */}
                    <div className="space-y-1.5 mt-2.5">
                      {[
                        'Realistic interview questions',
                        'AI-driven follow-up questions',
                        'Instant feedback & scoring',
                        'Detailed improvement tips',
                      ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] text-slate-700 font-medium">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    type="button"
                    onClick={handleStartInterview}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2563eb] via-[#6366f1] to-[#9333ea] hover:from-[#1d4ed8] hover:to-[#7e22ce] shadow-md shadow-purple-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>
                      Start {selectedMode === 'video' ? 'Video' : 'AI'} Interview →
                    </span>
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom: 4 Connected Visual Steps */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-center px-2 sm:px-4">
                
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shadow-xs">
                    <Video className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1 leading-tight max-w-[70px]">
                    Choose Role & Mode
                  </span>
                </div>

                <div className="h-0.5 flex-1 bg-slate-200 mx-2 -mt-4" />

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shadow-xs">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1 leading-tight max-w-[70px]">
                    Start Interview
                  </span>
                </div>

                <div className="h-0.5 flex-1 bg-slate-200 mx-2 -mt-4" />

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1 leading-tight max-w-[70px]">
                    Get AI Feedback
                  </span>
                </div>

                <div className="h-0.5 flex-1 bg-slate-200 mx-2 -mt-4" />

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 mt-1 leading-tight max-w-[70px]">
                    View Report & Improve
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              COLUMN 3: PERFORMANCE & HISTORY PANEL (Right, col-span-3)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-3.5">
            
            {/* Card 1: Your Interview Performance */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2.5">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-600" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-tight">
                  Your Interview Performance
                </h3>
              </div>

              {/* 3 Pastel Metric Cards */}
              <div className="grid grid-cols-3 gap-2 text-center">
                
                {/* Metric 1: Interviews */}
                <div className="bg-[#f5f3ff] border border-[#ddd6fe] rounded-xl p-2 flex flex-col justify-center">
                  <span className="text-base sm:text-lg font-black text-[#7c3aed] leading-none">
                    {performanceMetrics.completedCount}
                  </span>
                  <span className="text-[9.5px] font-semibold text-slate-600 mt-1 leading-tight">
                    Interviews
                  </span>
                </div>

                {/* Metric 2: Avg. Score */}
                <div className="bg-[#fffbeb] border border-[#fde68a] rounded-xl p-2 flex flex-col justify-center">
                  <span className="text-base sm:text-lg font-black text-[#d97706] leading-none">
                    {performanceMetrics.averageScore ? `${performanceMetrics.averageScore}/10` : '-'}
                  </span>
                  <span className="text-[9.5px] font-semibold text-slate-600 mt-1 leading-tight">
                    Avg. Score
                  </span>
                </div>

                {/* Metric 3: Improvement */}
                <div className="bg-[#ecfdf5] border border-[#a7f3d0] rounded-xl p-2 flex flex-col justify-center">
                  <span className="text-base sm:text-lg font-black text-[#059669] leading-none">
                    {performanceMetrics.improvementPercent !== null ? `${performanceMetrics.improvementPercent}%` : '-'}
                  </span>
                  <span className="text-[9.5px] font-semibold text-slate-600 mt-1 leading-tight">
                    Improvement
                  </span>
                </div>

              </div>
            </div>

            {/* Card 2: Why Practice Mock Interviews? */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2.5">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-tight">
                  Why Practice Mock Interviews?
                </h3>
              </div>

              <div className="space-y-2">
                {[
                  'Build real interview confidence',
                  'Get instant AI feedback',
                  'Identify and improve weak areas',
                  'Practice anytime, unlimited times',
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-[11.5px] text-slate-700 font-medium leading-tight">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Recent Interviews */}
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-600" />
                  <h3 className="text-xs sm:text-[13px] font-black text-slate-900 tracking-tight">
                    Recent Interviews
                  </h3>
                </div>
                {interviewHistory.length > 2 && (
                  <span className="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                    View All
                  </span>
                )}
              </div>

              {interviewHistory.length === 0 ? (
                <div className="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center text-xs text-slate-500 font-medium">
                  No interviews yet. Start your first mock interview!
                </div>
              ) : (
                <div className="space-y-2">
                  {interviewHistory.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 flex items-center justify-between gap-2 transition-all"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11.5px] font-bold text-slate-900 truncate">
                            {item.role} – Mock Interview
                          </div>
                          <div className="text-[10px] font-bold text-emerald-600">
                            Score: {item.score}/10
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          playClick();
                          setActiveReport(item);
                          setIsReportOpen(true);
                        }}
                        className="px-2.5 py-1 rounded-lg text-[10.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors shrink-0 cursor-pointer"
                      >
                        View Report
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* ─── 3. LIVE INTERACTIVE INTERVIEW MODAL / ROOM ─── */}
      {isInterviewActive && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white leading-tight">
                    {activeTrackObj.name} Mock Interview ({selectedMode.toUpperCase()} Mode)
                  </h3>
                  <p className="text-[10.5px] text-slate-400 font-medium">
                    Question {currentQuestionIndex + 1} of {activeQuestions.length}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Timer Pill */}
                <div className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-amber-400/30 text-xs font-mono font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTimer(secondsRemaining)}</span>
                </div>

                {/* Exit Button */}
                <button
                  type="button"
                  onClick={handleExitInterview}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-900/40 text-slate-400 hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              
              {/* Question Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200/90 shadow-2xs">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-300">
                      {currentQuestion.category} • {currentQuestion.difficulty}
                    </span>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 pt-1 leading-snug">
                      {currentQuestion.question}
                    </h4>
                  </div>

                  {/* Audio Listen Button */}
                  <button
                    type="button"
                    onClick={handleToggleSpeak}
                    className={`p-2 rounded-xl border transition-all cursor-pointer shrink-0 ${
                      isSpeakingQuestion
                        ? 'bg-blue-600 text-white border-blue-600 animate-pulse'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-blue-50'
                    }`}
                    title="Listen to question"
                  >
                    {isSpeakingQuestion ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Video Camera Box (if Video mode) */}
              {selectedMode === 'video' && (
                <div className="rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 aspect-[16/8] max-h-48 relative flex items-center justify-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                  {!hasCameraPermission && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                      <VideoOff className="w-8 h-8 mb-2" />
                      <p className="text-xs">Camera feed unavailable or permission pending.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Text / Voice Answer Area */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Your Answer:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleToggleRecording}
                      className={`px-3 py-1 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 cursor-pointer ${
                        isRecording
                          ? 'bg-red-500 text-white border-red-600 animate-pulse'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400'
                      }`}
                    >
                      {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{isRecording ? 'Stop Recording' : 'Speak Answer'}</span>
                    </button>
                  </div>
                </div>

                <textarea
                  value={currentAnswerText}
                  onChange={(e) => setCurrentAnswerText(e.target.value)}
                  placeholder="Type or speak your answer here. Provide specific technical details and practical examples..."
                  rows={5}
                  className="w-full p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                />

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>
                    Word Count: <strong className="text-slate-800">{currentAnswerText.split(/\s+/).filter(Boolean).length}</strong> words
                  </span>
                  <span>
                    Target keywords: {currentQuestion.keywords.slice(0, 4).join(', ')}...
                  </span>
                </div>
              </div>

            </div>

            {/* Modal Footer Controls */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={handleExitInterview}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors cursor-pointer"
              >
                Cancel Interview
              </button>

              <button
                type="button"
                onClick={handleSaveAndNext}
                className="px-5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 flex items-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <span>
                  {currentQuestionIndex + 1 < activeQuestions.length ? 'Next Question →' : 'Finish & Evaluate →'}
                </span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ─── 4. DETAILED REPORT MODAL ─── */}
      {isReportOpen && activeReport && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white leading-tight">
                    Mock Interview Performance Report
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {activeReport.role} • {activeReport.date}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsReportOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
              
              {/* Overall Score Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                    Overall Performance
                  </span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                    {activeReport.score >= 8
                      ? '🎉 Outstanding! Placement Ready'
                      : activeReport.score >= 6
                      ? '👍 Good Effort! Keep Practicing'
                      : '💡 Foundation Needs Practice'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-md">
                    Evaluated against real industry standards and key technical benchmarks.
                  </p>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-center shrink-0">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600">
                    {activeReport.score} <span className="text-base text-slate-400">/ 10</span>
                  </div>
                  <div className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    Score
                  </div>
                </div>
              </div>

              {/* Question by Question Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900">
                  Question Breakdown & AI Feedback
                </h4>

                <div className="space-y-3">
                  {activeReport.answers.map((ans, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200/90 bg-white space-y-2.5 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="text-xs sm:text-[13px] font-black text-slate-900">
                          Q{idx + 1}: {ans.question}
                        </h5>
                        <span className="px-2 py-0.5 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                          {ans.score} / 10
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <strong className="text-slate-800">Your Answer:</strong> {ans.userAnswer}
                      </div>

                      <div className="text-xs text-slate-700 space-y-1">
                        <div className="text-emerald-700 font-bold">
                          ✓ Strengths: {ans.strengths.join(' ')}
                        </div>
                        {ans.improvements.length > 0 && (
                          <div className="text-amber-700 font-bold">
                            ⚠ Improvement Tip: {ans.improvements.join(' ')}
                          </div>
                        )}
                      </div>

                      <details className="text-xs text-slate-600 bg-purple-50/60 p-2.5 rounded-xl border border-purple-100">
                        <summary className="font-bold text-purple-700 cursor-pointer select-none">
                          View Model Answer (High-Scoring Template)
                        </summary>
                        <p className="mt-2 text-slate-700 leading-relaxed">
                          {ans.modelAnswer}
                        </p>
                      </details>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setIsReportOpen(false);
                  handleStartInterview();
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-Attempt This Track</span>
              </button>

              <button
                type="button"
                onClick={() => setIsReportOpen(false)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 cursor-pointer transition-colors"
              >
                Close Report
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
