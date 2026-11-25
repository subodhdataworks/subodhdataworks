import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Video,
  Mic,
  Camera,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Clock,
  PhoneOff,
  Sparkles,
  Bot,
  Award,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  UserCheck,
  Send,
  Eraser,
  Volume2,
  VolumeX,
  Target,
  Trophy,
  BarChart3,
  Brain,
  Cpu,
  Layers,
  ArrowRight,
  ArrowLeft,
  Search,
  Filter,
  BookOpen,
  Shuffle,
  FileSpreadsheet,
  Terminal,
  Code2,
  TrendingUp,
  HelpCircle,
  Check,
  Crown,
  Bookmark,
  Download,
  Calendar,
  Zap,
  SlidersHorizontal,
  Play,
  MessageSquare,
  Lightbulb,
  Settings,
  Database,
  Edit3,
  LayoutGrid,
  FolderGit2,
  PieChart,
  ThumbsUp,
  XCircle,
  FileText,
  Keyboard,
  Maximize2,
  VideoOff,
  Info,
  Eye,
  ChevronsRight,
} from 'lucide-react';
import { ToolIcon } from '../CourseToolIcons';
import { StableMouthLipSyncAvatar } from './StableMouthLipSyncAvatar';
import {
  TopicInterviewResultView,
  TopicResultRightSidebar,
  InterviewSummaryView,
} from './TopicInterviewResultView';
import {
  InterviewTopicGroup,
  QuestionAnswerRecord,
  TopicAttemptResult,
  buildModuleTopics,
  evaluateTopicAnswer,
  buildTopicAttemptResult,
  saveTopicAttemptResult,
  getCourseAllTopicResults,
  getTopicHistory,
  saveTopicSessionDraft,
  loadTopicSessionDraft,
  clearTopicSessionDraft,
  computeCourseSummary,
} from '../../../services/interviewPrepEngine';
import { playSwaraVoice, stopSwaraVoice } from '../../../services/swaraAudioService';
import { soundEffects } from '../../../services/soundEffects';
import { NavigationService } from '../../../services/navigationService';
import {
  DATA_ANALYST_150_QUESTIONS,
  QUESTION_BANK_SECTIONS as DATA_ANALYST_SECTIONS,
  MasterInterviewQuestion,
  QuestionBankSection,
} from '../data/dataAnalyst150QuestionBank';
import {
  DATA_SCIENTIST_150_QUESTIONS,
  DATA_SCIENTIST_SECTIONS,
} from '../data/dataScientist150QuestionBank';
import {
  AI_ENGINEERING_150_QUESTIONS,
  AI_ENGINEERING_SECTIONS,
} from '../data/aiEngineering150QuestionBank';
import {
  ML_ENGINEERING_SECTIONS,
  ML_ENGINEERING_QUESTIONS,
  FULL_STACK_SECTIONS,
  FULL_STACK_QUESTIONS,
} from '../data/mlAndFullStackQuestions';
import './ZeroCostMockInterviewRoom.css';
import './ExecutiveHrStudio.css';
import { UniversalInterviewAnswerCard } from './UniversalInterviewAnswerCard';
import { AiRobotQuestionSpeaker } from './AiRobotQuestionSpeaker';
import { InterviewTrackBannerCarousel } from './InterviewTrackBannerCarousel';

export type HrRoundRoleKey =
  | 'data_analyst'
  | 'data_science'
  | 'ai_engineering'
  | 'ml_engineering'
  | 'full_stack';

export interface HrQuestionItem {
  id: number;
  questionEn: string;
  questionHi: string;
  category: 'introduction' | 'behavioral' | 'situational' | 'conflict_resolution' | 'career_vision';
  categoryLabel: string;
  hintEn: string;
  hintHi: string;
  keyTraits: string[];
  exampleAnswerEn: string;
  exampleAnswerHi: string;
  benchmarkPoints: string[];
}

export interface HrRoleTrackConfig {
  key: HrRoundRoleKey;
  label: string;
  roleTitle: string;
  icon: string;
  tagColor: string;
  accentBg: string;
  questions: HrQuestionItem[];
}

export const HR_ROLE_TRACKS: Record<HrRoundRoleKey, HrRoleTrackConfig> = {
  data_analyst: {
    key: 'data_analyst',
    label: 'Data Analyst Interview Prep',
    roleTitle: 'Data Analyst / Business Intelligence Associate',
    icon: '📊',
    tagColor: 'text-blue-700 bg-blue-50 border-blue-200',
    accentBg: 'from-blue-600 via-indigo-600 to-purple-600',
    questions: [
      {
        id: 141,
        category: 'introduction',
        categoryLabel: 'Sec 11 • HR & Communication',
        questionEn: 'Tell me about yourself.',
        questionHi: 'अपने बारे में बताएं।',
        hintEn: 'Elevator pitch: background in data analytics, core toolkit (SQL, Python, Excel, Power BI), and passion for data-driven decisions.',
        hintHi: 'अपनी शिक्षा, डेटा स्किल्स (SQL, Python, Excel, Power BI), और डेटा से बिजनेस ग्रोथ में योगदान पर बात करें।',
        keyTraits: ['Clear Communication', 'Data Curiosity', 'Career Clarity'],
        exampleAnswerEn: 'Hello! I am an aspiring Data Analyst with hands-on project experience in Python, SQL, Excel, and Power BI. I specialize in turning raw metrics into actionable business intelligence. During my training, I analyzed multi-thousand row datasets to uncover churn risk factors and sales funnel patterns. I am eager to join a data-driven team where I can optimize reporting workflows and deliver high-impact insights.',
        exampleAnswerHi: 'नमस्ते! मैं एक डेटा एनालिस्ट हूँ जिसके पास Python, SQL, Excel और Power BI में प्रोजेक्ट्स का प्रैक्टिकल अनुभव है। मुझे डेटा से बिजनेस के सही फैसलों को अनलॉक करना पसंद है। मैंने सेल्स फनल और कस्टमर चर्न एनालिसिस पर काम किया है और मैं आपकी टीम के साथ मिलकर डेटा-ड्रिवन इनसाइट्स देने के लिए तैयार हूँ।',
        benchmarkPoints: ['Educational and technical background', 'Passion for data storytelling', 'Concrete examples of business impact', 'Professional delivery'],
      },
      {
        id: 142,
        category: 'behavioral',
        categoryLabel: 'Sec 11 • HR & Communication',
        questionEn: 'Why do you want to become a Data Analyst?',
        questionHi: 'आप डेटा एनालिस्ट क्यों बनना चाहते हैं?',
        hintEn: 'Connect quantitative mindset to business value. Mention turning ambiguous questions into structured, evidence-backed answers.',
        hintHi: 'गणितीय और लॉजिकल सोच को बिजनेस की वैल्यू और प्रॉब्लम-सॉल्विंग से जोड़कर बताएं।',
        keyTraits: ['Intrinsic Motivation', 'Analytical Rigor', 'Business Focus'],
        exampleAnswerEn: 'I want to become a Data Analyst because I love bridging the gap between numbers and real-world business outcomes. Rather than relying on guesswork, data empowers organizations to make predictable, scalable decisions. Transforming messy transactional logs into clean dashboards that guide leadership gives me tremendous professional satisfaction.',
        exampleAnswerHi: 'मुझे डेटा एनालिस्ट इसलिए बनना है क्योंकि मुझे आंकड़ों और बिजनेस नतीजों के बीच का पुल बनना पसंद है। बिना किसी अंदाजे के, डेटा के आधार पर कंपनी को सही दिशा दिखाना और जटिल डेटा को साफ डैशबोर्ड में बदलना मुझे प्रेरित करता है।',
        benchmarkPoints: ['Passion for evidence-backed decisions', 'Enjoys problem-solving', 'Understanding of business value'],
      },
      {
        id: 143,
        category: 'behavioral',
        categoryLabel: 'Sec 11 • HR & Communication',
        questionEn: 'Why should we hire you as a Fresher?',
        questionHi: 'एक फ्रेशर के रूप में हमें आपको क्यों नियुक्त करना चाहिए?',
        hintEn: 'Highlight up-to-date modern tech stack (SQL, Python, GenAI workflows), high learning agility, and strong work ethic.',
        hintHi: 'लेटेस्ट टेक स्टैक (SQL, Python, GenAI), तेजी से सीखने की लगन और डेडिकेशन पर जोर दें।',
        keyTraits: ['Work Ethic', 'Agile Learner', 'Modern Stack'],
        exampleAnswerEn: 'As a fresher, I bring strong foundational skills in SQL, Python, Excel, and Power BI without legacy biases. I have actively practiced real-world case studies and understand modern GenAI tools for accelerated data wrangling. I am deeply coachable, energetic, and eager to roll up my sleeves and add value to your analytics pipeline from day one.',
        exampleAnswerHi: 'एक फ्रेशर के रूप में मेरे पास आधुनिक टूल्स जैसे SQL, Python, Power BI और GenAI का नया ज्ञान है। मैं बहुत तेजी से नई तकनीकें सीखता हूँ और पूरी ऊर्जा के साथ आपकी टीम के प्रोजेक्ट्स में तुरंत वैल्यू ऐड करने के लिए प्रतिबद्ध हूँ।',
        benchmarkPoints: ['Up-to-date technical skillset', 'High learnability', 'Proactive and positive attitude'],
      },
      {
        id: 144,
        category: 'situational',
        categoryLabel: 'Sec 11 • HR & Communication',
        questionEn: 'What are your strengths and weaknesses?',
        questionHi: 'आपकी ताकत और कमजोरियां क्या हैं?',
        hintEn: 'Strength: meticulous data integrity and attention to detail. Weakness: perfecting charts early -> actively mitigated through milestone tracking.',
        hintHi: 'ताकत: डेटा की सटीकता और लगन। कमजोरी: कभी-कभी विजुअल्स पर ज्यादा समय देना, जिसे अब टाइम-बॉक्सिंग से सुधार रहे हैं।',
        keyTraits: ['Self-Awareness', 'Attention to Detail', 'Growth Mindset'],
        exampleAnswerEn: 'My greatest strength is my meticulous attention to detail and data integrity; I rigorously validate aggregations and null distributions before presenting any findings. A weakness I have actively worked on is spending too much time perfecting chart styling early on; I now enforce strict milestone time-boxing to prioritize business insights first before visual polish.',
        exampleAnswerHi: 'मेरी सबसे बड़ी ताकत डेटा की सटीकता और वैलिडेशन है। मेरी एक कमजोरी थी कि मैं शुरुआत में चार्ट्स को सुंदर बनाने में ज्यादा समय लगा देता था, लेकिन अब मैं टाइम-बॉक्सिंग तकनीक अपनाकर पहले मुख्य बिजनेस इनसाइट्स पर ध्यान केंद्रित करता हूँ।',
        benchmarkPoints: ['Honest and genuine answer', 'Clear mitigation strategy', 'Relevant to data roles'],
      },
      {
        id: 147,
        category: 'conflict_resolution',
        categoryLabel: 'Sec 11 • HR & Communication',
        questionEn: 'Tell me about a challenge you faced during a project and how you resolved it.',
        questionHi: 'किसी प्रोजेक्ट की चुनौती और समाधान के बारे में बताएं।',
        hintEn: 'Use STAR method: Situation (dirty data), Task (reconciliation), Action (Python pipeline), Result (100% accuracy).',
        hintHi: 'STAR मेथड अपनाएं: स्थिति, काम, आपने क्या कदम उठाया, और क्या सकारात्मक नतीजा निकला।',
        keyTraits: ['STAR Methodology', 'Problem-Solving', 'Resilience'],
        exampleAnswerEn: 'During a milestone retail analytics project, regional CSV files had inconsistent date formats and duplicate customer IDs that broke our Power BI model. I took the initiative to build an automated Python cleaning pipeline using Pandas to standardize datetime strings and deduplicate primary keys. As a result, the refresh pipeline ran 3x faster with 100% data consistency for final reporting.',
        exampleAnswerHi: 'एक रिटेल प्रोजेक्ट के दौरान अलग-अलग रीजन की फाइलों में डेट फॉर्मेट्स और कस्टमर आईडी में गलतियां थीं। मैंने Pandas का उपयोग करके एक ऑटोमेटेड डेटा क्लीनिंग स्क्रिप्ट लिखी जिसने सभी विसंगतियों को ठीक किया और डैशबोर्ड रिफ्रेश को 3 गुना तेज और 100% सटीक बना दिया।',
        benchmarkPoints: ['Structured STAR response', 'Root-cause analysis', 'Quantifiable positive outcome'],
      },
    ],
  },
  data_science: {
    key: 'data_science',
    label: 'Data Science Interview Prep',
    roleTitle: 'Data Scientist & AI Specialist',
    icon: '🔬',
    tagColor: 'text-purple-700 bg-purple-50 border-purple-200',
    accentBg: 'from-purple-600 via-indigo-600 to-pink-600',
    questions: [
      {
        id: 201,
        category: 'introduction',
        categoryLabel: 'Introduction & ML Vision',
        questionEn: 'Can you introduce yourself and explain what excites you most about modern Data Science and Machine Learning?',
        questionHi: 'कृपया अपना परिचय दें और बताएं कि आधुनिक डेटा साइंस और मशीन लर्निंग में आपको सबसे ज्यादा क्या रोमांचित करता है?',
        hintEn: 'Highlight Python, machine learning workflows, hypothesis testing, predictive analytics, and curiosity for solving unstructured problems.',
        hintHi: 'अपने परिचय में मशीन लर्निंग, प्रेडिक्टिव मॉडल्स और अनस्ट्रक्चर्ड डेटा से रियल-वर्ल्ड प्रॉब्लम्स सुलझाने की रुचि बताएं।',
        keyTraits: ['Scientific Rigor', 'Curiosity', 'Systematic Thinking'],
        exampleAnswerEn: 'Hello, I am a passionate Data Science enthusiast specializing in predictive modeling, exploratory data analysis, and machine learning algorithms. What excites me most about modern Data Science is the bridge it builds between rigorous scientific experimentation and tangible business value. From building churn prediction algorithms to fine-tuning machine learning models, I love unraveling complex patterns in messy data and transforming theoretical math into production-ready intelligence.',
        exampleAnswerHi: 'नमस्ते, मैं एक डेटा साइंस प्रोफेशनल हूँ जो मशीन लर्निंग, प्रेडिक्टिव एनालिसिस और स्टैटिस्टिकल मॉडलिंग में रुचि रखता हूँ। मुझे सबसे ज्यादा यह बात प्रेरित करती है कि कैसे हम जटिल डेटा और गणित के जरिए बिजनेस की मुश्किल से मुश्किल समस्याओं का सटीक हल निकाल सकते हैं।',
        benchmarkPoints: ['Technical grounding in ML/Stats', 'Experimentation mindset', 'Clarity of purpose'],
      },
    ],
  },
  ai_engineering: {
    key: 'ai_engineering',
    label: 'AI Engineering Interview Prep',
    roleTitle: 'AI Systems & GenAI Application Engineer',
    icon: '🤖',
    tagColor: 'text-cyan-700 bg-cyan-50 border-cyan-200',
    accentBg: 'from-cyan-600 via-teal-600 to-indigo-600',
    questions: [
      {
        id: 301,
        category: 'introduction',
        categoryLabel: 'Background in Generative AI',
        questionEn: 'Introduce yourself and share what inspired you to specialize in AI Engineering, LLMs, and Autonomous Agent systems?',
        questionHi: 'कृपया अपना परिचय दें और बताएं कि आपको AI इंजीनियरिंग, LLMs और ऑटोनॉमस एजेंट्स के क्षेत्र में आने की प्रेरणा कहाँ से मिली?',
        hintEn: 'Highlight system design, working with APIs/LangChain/LlamaIndex, prompt engineering, RAG pipelines, and passion for building resilient AI products.',
        hintHi: 'अपने परिचय में LLM आर्किटेक्चर, RAG पाइपलाइन्स और असल जिंदगी के AI प्रोडक्ट्स बनाने के अपने पैशन को रेखांकित करें।',
        keyTraits: ['Innovation Mindset', 'Architectural Depth', 'Drive to Build'],
        exampleAnswerEn: 'Hello! I am an AI Engineer passionate about designing resilient Generative AI applications, Retrieval-Augmented Generation (RAG) architectures, and autonomous agent workflows. What drove me to this frontier is the ability to turn natural language into deterministic software actions. I focus not just on prompt engineering, but on building production-grade guardrails, caching layers, latency optimization, and vector search systems that solve real enterprise workflow bottlenecks.',
        exampleAnswerHi: 'नमस्ते! मैं एक AI इंजीनियर हूँ जो लार्ज लैंग्वेज मॉडल्स (LLMs), RAG पाइपलाइन्स और इंटेलिजेंट एजेंट्स बनाने में माहिर हूँ। मुझे यह बहुत रोमांचक लगता है कि कैसे AI अब सामान्य भाषा को सॉफ्टवेयर के फैसलों में बदल देता है। मेरा मुख्य ध्यान मजबूत AI सिस्टम्स, कम लेटेंसी और सुरक्षित enterprise सॉल्यूशंस बनाने पर है।',
        benchmarkPoints: ['Clear vision of AI Engineering', 'Focus on production viability', 'Understanding of RAG & Agents'],
      },
    ],
  },
  ml_engineering: {
    key: 'ml_engineering',
    label: 'ML Engineering Interview Prep',
    roleTitle: 'Machine Learning & MLOps Engineer',
    icon: '🧠',
    tagColor: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    accentBg: 'from-indigo-600 via-purple-600 to-blue-600',
    questions: [
      {
        id: 401,
        category: 'introduction',
        categoryLabel: 'MLOps Journey',
        questionEn: 'Tell me about yourself and your transition from traditional programming into Machine Learning and MLOps engineering.',
        questionHi: 'अपने बारे में बताएं और आपने सॉफ्टवेयर इंजीनियरिंग से मशीन लर्निंग और MLOps में कैसे कदम रखा?',
        hintEn: 'Highlight software rigor, containerization (Docker), model serving, monitoring pipelines, and CI/CD for machine learning systems.',
        hintHi: 'सॉफ्टवेयर की अच्छी आदतें, डॉकर, मॉडल डिप्लॉयमेंट, मॉनिटरिंग और CI/CD पाइपलाइन्स पर बात करें।',
        keyTraits: ['Software Discipline', 'Production Focus', 'System Reliability'],
        exampleAnswerEn: 'Hello! I am an ML Engineer who bridges the gap between statistical modeling and rock-solid software engineering. While building applications, I realized that 90% of machine learning challenges happen after training: model drift, inference latency, scalable serving, and CI/CD pipelines. I specialize in building reproducible training pipelines, Dockerized model microservices, and continuous monitoring to ensure models deliver high uptime in production.',
        exampleAnswerHi: 'नमस्ते! मैं एक ML इंजीनियर हूँ जो मॉडल बनाने से लेकर उसे प्रोडक्शन में लाइव चलाने और मॉनिटर करने तक का काम संभालता हूँ। मेरा मानना है कि केवल मॉडल ट्रेन करना काफी नहीं, उसे कम लेटेंसी, डॉकर कंटेनर्स और ऑटोमेटेड पाइपलाइन्स के साथ 24/7 बिना रुके चलाना असली इंजीनियरिंग है।',
        benchmarkPoints: ['Strong software foundations', 'Understands production lifecycle', 'DevOps & MLOps awareness'],
      },
    ],
  },
  full_stack: {
    key: 'full_stack',
    label: 'Full Stack MERN Interview Prep',
    roleTitle: 'Full Stack Web & Cloud Architect',
    icon: '💻',
    tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    accentBg: 'from-emerald-600 via-teal-600 to-cyan-600',
    questions: [
      {
        id: 501,
        category: 'introduction',
        categoryLabel: 'Full Stack Foundations',
        questionEn: 'Can you walk me through your background and what makes you passionate about full-stack web engineering with the MERN stack?',
        questionHi: 'अपने बैकग्राउंड और MERN स्टैक के साथ फुल-स्टैक वेब इंजीनियरिंग के प्रति अपने जुनून के बारे में बताएं।',
        hintEn: 'React, Node.js, Express, MongoDB, RESTful APIs, cloud deployment, and clean UI engineering.',
        hintHi: 'React, Node.js, MongoDB, API डिजाइन और मॉडर्न वेब ऐप्स बनाने के अनुभव पर बात करें।',
        keyTraits: ['Architectural Cleanliness', 'Product Polish', 'End-to-End Ownership'],
        exampleAnswerEn: 'Hello! I am a Full Stack Developer passionate about crafting responsive web applications with React, Node.js, TypeScript, and MongoDB. I enjoy owning the entire product lifecycle from designing responsive, accessible user interfaces to engineering robust API microservices with secure auth and optimized database queries. I focus heavily on component modularity, web performance, and developer experience.',
        exampleAnswerHi: 'नमस्ते! मैं एक फुल-स्टैक डेवलपर हूँ जो React, Node.js, TypeScript और MongoDB के साथ आधुनिक वेब एप्लिकेशन बनाने में माहिर हूँ। मुझे यूजर इंटरफेस के खूबसूरत डिजाइन से लेकर बैकएंड के सुरक्षित और तेज APIs बनाने तक पूरे सिस्टम का काम पसंद है।',
        benchmarkPoints: ['Full lifecycle understanding', 'Clean UI and secure API architecture', 'Commitment to performance'],
      },
    ],
  },
};

export interface DedicatedHrRoundRoomProps {
  userName?: string;
  initialRole?: HrRoundRoleKey;
  onBack?: () => void;
}

export const DedicatedHrRoundRoom: React.FC<DedicatedHrRoundRoomProps> = ({
  userName = 'Learner',
  initialRole = 'data_analyst',
  onBack,
}) => {
  // Track selection state
  const [selectedRole, setSelectedRole] = useState<HrRoundRoleKey>(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('?')) {
      const params = new URLSearchParams(window.location.hash.split('?')[1]);
      const roleParam = params.get('role') || params.get('track');
      if (roleParam && HR_ROLE_TRACKS[roleParam as HrRoundRoleKey]) {
        return roleParam as HrRoundRoleKey;
      }
    }
    return initialRole;
  });

  // Top View Mode: 150 Question Bank Explorer vs Live Studio
  const [viewMode, setViewMode] = useState<'bank' | 'studio'>('bank');

  // 150 Question Bank Explorer Filter State
  const [selectedSectionCode, setSelectedSectionCode] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'Basic' | 'Core' | 'Intermediate'>('all');
  const [expandedModelAnswerId, setExpandedModelAnswerId] = useState<number | null>(null);

  // 3-Column Reference Interface State (Matching media_1794975047636_b72b50cb.jpg)
  const [selectedMasterQuestionIndex, setSelectedMasterQuestionIndex] = useState<number>(0);
  const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false);
  const [activePracticeTab, setActivePracticeTab] = useState<'followup' | 'scenario' | 'hr_angle' | null>(null);
  const [filtersDrawerOpen, setFiltersDrawerOpen] = useState<boolean>(false);
  const [scheduleModalOpen, setScheduleModalOpen] = useState<boolean>(false);
  const [scheduleSuccess, setScheduleSuccess] = useState<boolean>(false);

  // Live Studio States (Matching media_1794985964968_e5117fff.jpg)
  const [isStudioGuidanceOpen, setIsStudioGuidanceOpen] = useState<boolean>(false);
  const [isStudioQuestionLiveOpen, setIsStudioQuestionLiveOpen] = useState<boolean>(true);
  const [isStudioBenchmarkOpen, setIsStudioBenchmarkOpen] = useState<boolean>(false);
  const [isStudioTrackDropdownOpen, setIsStudioTrackDropdownOpen] = useState<boolean>(false);

  // Saved / Bookmarked Question IDs
  const [savedQuestionIds, setSavedQuestionIds] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const local = localStorage.getItem('futureai_saved_interview_questions');
        return local ? JSON.parse(local) : [1];
      } catch (e) {
        return [1];
      }
    }
    return [1];
  });

  // Practiced Question IDs
  const [practicedQuestionIds, setPracticedQuestionIds] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const local = localStorage.getItem('futureai_practiced_interview_questions');
        return local ? JSON.parse(local) : [1, 2, 3];
      } catch (e) {
        return [1, 2, 3];
      }
    }
    return [1, 2, 3];
  });

  const handleToggleSaveQuestion = (qId: number) => {
    soundEffects.playClick();
    setSavedQuestionIds((prev) => {
      const updated = prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_saved_interview_questions', JSON.stringify(updated));
      }
      return updated;
    });
  };

  const markQuestionPracticed = (qId: number) => {
    setPracticedQuestionIds((prev) => {
      if (prev.includes(qId)) return prev;
      const updated = [...prev, qId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('futureai_practiced_interview_questions', JSON.stringify(updated));
      }
      return updated;
    });
  };

  // Selected Master Question for Studio Practice
  const [selectedMasterQuestion, setSelectedMasterQuestion] = useState<MasterInterviewQuestion | null>(null);

  const activeTrack = HR_ROLE_TRACKS[selectedRole] || HR_ROLE_TRACKS.data_analyst;
  const questions = activeTrack.questions;

  const [currentQIdx, setCurrentQIdx] = useState<number>(0);

  // Derive active question for Studio
  const effectiveQuestion = useMemo<HrQuestionItem>(() => {
    if (selectedMasterQuestion) {
      return {
        id: selectedMasterQuestion.id,
        category: 'behavioral',
        categoryLabel: `Sec ${selectedMasterQuestion.sectionCode} • ${selectedMasterQuestion.sectionTitle}`,
        questionEn: selectedMasterQuestion.questionEn,
        questionHi: selectedMasterQuestion.questionHi,
        hintEn: selectedMasterQuestion.hintEn,
        hintHi: selectedMasterQuestion.hintHi,
        keyTraits: selectedMasterQuestion.keyPoints,
        exampleAnswerEn: selectedMasterQuestion.idealAnswerEn,
        exampleAnswerHi: selectedMasterQuestion.idealAnswerHi,
        benchmarkPoints: selectedMasterQuestion.keyPoints,
      };
    }
    return questions[currentQIdx] || questions[0];
  }, [selectedMasterQuestion, questions, currentQIdx]);

  const language = 'en';
  const [sessionSecondsLeft, setSessionSecondsLeft] = useState<number>(900); // 15 mins
  const [answerElapsedSeconds, setAnswerElapsedSeconds] = useState<number>(0);

  // Avatar & Speech State
  const [speechState, setSpeechState] = useState<'idle' | 'speaking'>('idle');
  const [spokenSubtitle, setSpokenSubtitle] = useState<string>('');
  const [typedHrText, setTypedHrText] = useState<string>('');
  const hrTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Candidate Answer State
  const [confirmedAnswer, setConfirmedAnswer] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [sttError, setSttError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  // Webcam State
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(true);

  // Evaluation States
  const [evaluationsByQId, setEvaluationsByQId] = useState<
    Record<
      number,
      {
        score: number;
        verdict: 'selected' | 'needs_practice';
        competencies: { label: string; score: number }[];
        summary: string;
        feedback: string[];
        strengths: string[];
        improvements: string[];
        submittedAnswer: string;
      }
    >
  >({});
  const [showReviewAnswer, setShowReviewAnswer] = useState<boolean>(false);

  const currentEvaluation = evaluationsByQId[effectiveQuestion.id] || null;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      NavigationService.silenceAllAudio();
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (hrTypingTimerRef.current) clearInterval(hrTypingTimerRef.current);
    };
  }, []);

  // Sync role change with URL
  const handleSelectRole = (newRole: HrRoundRoleKey) => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    setSelectedRole(newRole);
    setSelectedSectionCode('all');
    setSearchQuery('');
    setExpandedModelAnswerId(null);
    setCurrentQIdx(0);
    setSelectedMasterQuestion(null);
    setConfirmedAnswer('');
    setSttError(null);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#interview-prep?role=${newRole}`);
    }
  };

  // Sync selectedRole whenever initialRole changes from parent
  useEffect(() => {
    if (initialRole && HR_ROLE_TRACKS[initialRole]) {
      handleSelectRole(initialRole);
    }
  }, [initialRole]);

  // Sync selectedRole whenever URL hash changes or custom event fires
  useEffect(() => {
    const syncRoleFromHash = () => {
      if (typeof window === 'undefined') return;
      const h = window.location.hash || '';
      if (h.includes('?')) {
        const params = new URLSearchParams(h.split('?')[1]);
        const roleParam = params.get('role') || params.get('track');
        if (roleParam && HR_ROLE_TRACKS[roleParam as HrRoundRoleKey]) {
          handleSelectRole(roleParam as HrRoundRoleKey);
        }
      }
    };

    const handleCustomEvent = (e: any) => {
      const roleParam = e.detail?.role;
      if (roleParam && HR_ROLE_TRACKS[roleParam as HrRoundRoleKey]) {
        handleSelectRole(roleParam as HrRoundRoleKey);
      }
    };

    window.addEventListener('hashchange', syncRoleFromHash);
    window.addEventListener('popstate', syncRoleFromHash);
    window.addEventListener('futureai_interview_role_change', handleCustomEvent);
    return () => {
      window.removeEventListener('hashchange', syncRoleFromHash);
      window.removeEventListener('popstate', syncRoleFromHash);
      window.removeEventListener('futureai_interview_role_change', handleCustomEvent);
    };
  }, []);

  // Webcam initialization
  useEffect(() => {
    if (viewMode === 'studio' && cameraEnabled && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }, audio: false })
        .then((stream) => {
          mediaStreamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.warn('[DedicatedHrRoundRoom] Webcam not accessible:', err);
          setCameraEnabled(false);
        });
    } else {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((t) => t.stop());
        mediaStreamRef.current = null;
      }
    }
  }, [cameraEnabled, viewMode]);

  // Overall session countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Answer stopwatch timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (viewMode === 'studio' && !currentEvaluation) {
      interval = setInterval(() => {
        setAnswerElapsedSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentEvaluation, viewMode]);

  // Teleprompter typing animation
  const typeOutInterviewerPrompt = useCallback((fullText: string) => {
    if (hrTypingTimerRef.current) clearInterval(hrTypingTimerRef.current);
    setTypedHrText('');
    let idx = 0;
    hrTypingTimerRef.current = setInterval(() => {
      idx += 3;
      if (idx <= fullText.length) {
        setTypedHrText(fullText.slice(0, idx));
      } else {
        setTypedHrText(fullText);
        if (hrTypingTimerRef.current) clearInterval(hrTypingTimerRef.current);
      }
    }, 20);
  }, []);

  // Speak HR question aloud using Indian female voice Swara
  const speakQuestionAloud = useCallback(
    async (textToSpeak: string) => {
      try {
        NavigationService.silenceAllAudio();
        stopSwaraVoice();
        setSpeechState('speaking');
        setSpokenSubtitle(textToSpeak);
        typeOutInterviewerPrompt(textToSpeak);

        await playSwaraVoice(textToSpeak, {
          gender: 'female',
          language: 'en-US',
          onStart: () => {
            setSpeechState('speaking');
          },
          onEnd: () => {
            setSpeechState('idle');
          },
          onSpeechEnd: () => {
            setSpeechState('idle');
          },
          onError: () => {
            setSpeechState('idle');
          },
        });
      } catch (err) {
        console.warn('[DedicatedHrRoundRoom] Audio playback error:', err);
      } finally {
        setSpeechState('idle');
      }
    },
    [typeOutInterviewerPrompt]
  );

  // Speak question automatically when question changes in studio view
  useEffect(() => {
    if (viewMode === 'studio') {
      const qText = effectiveQuestion.questionEn;
      const t = setTimeout(() => {
        speakQuestionAloud(qText);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [effectiveQuestion.id, viewMode, speakQuestionAloud]);

  // Speech Recognition (Candidate STT)
  const toggleListening = () => {
    soundEffects.playClick();
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSttError('Voice recognition not supported in this browser. Please type your answer below.');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
        setSttError(null);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript + ' ';
        }
        setConfirmedAnswer(transcript.trim());
      };

      recognition.onerror = (e: any) => {
        console.warn('Speech Recognition error:', e.error);
        setIsListening(false);
        if (e.error === 'not-allowed') {
          setSttError('Microphone permission blocked. Please allow mic or type your answer.');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e: any) {
      setIsListening(false);
      setSttError('Failed to start microphone: ' + (e?.message || 'Unknown error'));
    }
  };

  // Insert Benchmark Example
  const handleInsertExample = () => {
    soundEffects.playClick();
    const example = language === 'hi' ? effectiveQuestion.exampleAnswerHi : effectiveQuestion.exampleAnswerEn;
    setConfirmedAnswer(example);
    setSttError(null);
  };

  // Evaluate candidate answer deterministically
  const handleSubmitAnswer = () => {
    soundEffects.playClick();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const answer = confirmedAnswer.trim();
    if (!answer) {
      setSttError(language === 'hi' ? 'कृपया उत्तर बोलें या टाइप करें।' : 'Please speak or type your answer before submitting.');
      return;
    }

    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    let rawScore = 4.5;

    if (wordCount >= 12) rawScore += 1.0;
    if (wordCount >= 22) rawScore += 1.0;
    if (wordCount >= 40) rawScore += 1.0;

    const lowerAns = answer.toLowerCase();
    let keywordHits = 0;
    const allReferenceKeywords = [
      ...effectiveQuestion.benchmarkPoints,
      ...(effectiveQuestion.keyTraits || []),
    ];
    allReferenceKeywords.forEach((point) => {
      const words = point.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
      if (words.some((w) => lowerAns.includes(w))) {
        keywordHits += 1;
      }
    });

    if (keywordHits >= 1) rawScore += 1.0;
    if (keywordHits >= 2) rawScore += 0.5;
    if (keywordHits >= 3) rawScore += 0.5;
    if (keywordHits >= 4) rawScore += 0.5;

    const score = Math.round(Math.min(10, Math.max(3, rawScore)) * 2) / 2;
    // Strict Result Rule: > 7/10 = PASS, <= 7/10 = FAIL — Try Again
    const isPassed = score > 7;

    const commScore = Math.min(10, Math.max(4, Math.round(score + (wordCount >= 25 ? 0.5 : -0.5))));
    const techScore = Math.min(10, Math.max(4, Math.round(score)));
    const starScore = Math.min(10, Math.max(4, Math.round(score - 0.5 + Math.min(1.5, keywordHits * 0.5))));
    const confScore = Math.min(10, Math.max(5, isPassed ? Math.min(10, Math.round(score + 0.5)) : Math.round(score)));

    const strengths = isPassed
      ? [
          'Clear and structured explanation.',
          'Good use of relevant domain keywords.',
          'Shows business and real-world understanding.',
          'Confident and professional delivery.',
        ]
      : [
          wordCount >= 12 ? 'Good attempt at explaining the core idea.' : 'Direct and concise initial response.',
          keywordHits >= 1 ? 'Included relevant terminology from the topic.' : 'Clear intent to answer the question.',
        ];

    const improvements = isPassed
      ? [
          'Add a short real-life example (e.g., sales or customer data).',
          'Mention specific industry tools (e.g., Excel, SQL, Power BI, Python).',
          'Keep your closing statement crisp and outcome-focused.',
        ]
      : [
          'Expand your explanation to at least 30–50 words with clear structure.',
          'Include key technical terms and tools relevant to the role.',
          'Add a practical real-world example using the STAR format.',
          'Score above 7/10 is required to pass — try again with more depth.',
        ];

    const evaluation = {
      score,
      verdict: (isPassed ? 'selected' : 'needs_practice') as 'selected' | 'needs_practice',
      competencies: [
        { label: 'Communication & Articulation', score: commScore },
        { label: 'Technical Depth & Clarity', score: techScore },
        { label: 'STAR Methodology & Structure', score: starScore },
        { label: 'Confidence & Professionalism', score: confScore },
      ],
      summary: isPassed
        ? `Great job! You scored ${score} out of 10.`
        : `You scored ${score} out of 10. Score above 7 out of 10 is required to pass.`,
      feedback: improvements,
      strengths,
      improvements,
      submittedAnswer: answer,
    };

    setEvaluationsByQId((prev) => ({
      ...prev,
      [effectiveQuestion.id]: evaluation,
    }));
    setShowReviewAnswer(false);
    markQuestionPracticed(effectiveQuestion.id);

    if (isPassed) {
      soundEffects.playSuccess();
    } else {
      soundEffects.playComplete();
    }

    // AI Interviewer announces the result aloud in Indian female Swara voice
    const announcementText = isPassed
      ? `Congratulations! You passed this interview question with a score of ${score} out of 10. Great job! Your explanation was clear, structured, and confident. You can now move on to the next question.`
      : `You scored ${score} out of 10. Since you need more than 7 out of 10 to pass, this attempt did not pass. Please check the areas for improvement and try again.`;

    setTimeout(() => {
      speakQuestionAloud(announcementText);
    }, 350);
  };

  const handleTryAgain = () => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    setShowReviewAnswer(false);
    setEvaluationsByQId((prev) => {
      const copy = { ...prev };
      delete copy[effectiveQuestion.id];
      return copy;
    });
    setConfirmedAnswer('');
    setAnswerElapsedSeconds(0);
    setSttError(null);
  };

  const isDataScientist = selectedRole === 'data_science';
  const isAiEngineer = selectedRole === 'ai_engineering';
  const isMlEngineer = selectedRole === 'ml_engineering';
  const isFullStack = selectedRole === 'full_stack';

  const heroTitleRole = useMemo(() => {
    switch (selectedRole) {
      case 'data_analyst':
        return 'Data Analyst with GenAI';
      case 'data_science':
        return 'Data Scientist with GenAI';
      case 'ai_engineering':
        return 'AI Engineering with GenAI';
      case 'ml_engineering':
        return 'ML Engineering & MLOps';
      case 'full_stack':
        return 'Full Stack MERN Engineering';
      default:
        return 'Data Analyst with GenAI';
    }
  }, [selectedRole]);

  const genAiCheckmarkText = useMemo(() => {
    switch (selectedRole) {
      case 'data_analyst':
        return 'GenAI for Data Analysts';
      case 'data_science':
        return 'GenAI for Data Scientists';
      case 'ai_engineering':
        return 'GenAI for AI Engineers';
      case 'ml_engineering':
        return 'Production MLOps Systems';
      case 'full_stack':
        return 'GenAI & Full Stack Architecture';
      default:
        return 'GenAI for Data Analysts';
    }
  }, [selectedRole]);

  const active150Questions: MasterInterviewQuestion[] = useMemo(() => {
    if (isAiEngineer) {
      return AI_ENGINEERING_150_QUESTIONS as any;
    }
    if (isDataScientist) {
      return DATA_SCIENTIST_150_QUESTIONS as any;
    }
    if (isMlEngineer) {
      return ML_ENGINEERING_QUESTIONS as any;
    }
    if (isFullStack) {
      return FULL_STACK_QUESTIONS as any;
    }
    return DATA_ANALYST_150_QUESTIONS;
  }, [isAiEngineer, isDataScientist, isMlEngineer, isFullStack]);

  const activeSections: QuestionBankSection[] = useMemo(() => {
    if (isAiEngineer) {
      return AI_ENGINEERING_SECTIONS;
    }
    if (isDataScientist) {
      return DATA_SCIENTIST_SECTIONS;
    }
    if (isMlEngineer) {
      return ML_ENGINEERING_SECTIONS;
    }
    if (isFullStack) {
      return FULL_STACK_SECTIONS;
    }
    return DATA_ANALYST_SECTIONS;
  }, [isAiEngineer, isDataScientist, isMlEngineer, isFullStack]);

  const activeHrSectionCode = isAiEngineer
    ? '15'
    : isDataScientist
    ? '13'
    : isMlEngineer || isFullStack
    ? '08'
    : '11';

  const handleNextQuestion = () => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();

    if (selectedMasterQuestion) {
      // Advance to next master question in active 150 bank
      const currentMasterId = selectedMasterQuestion.id;
      const nextQ = active150Questions.find((q) => q.id === currentMasterId + 1);
      if (nextQ) {
        setSelectedMasterQuestion(nextQ);
        setConfirmedAnswer('');
        setAnswerElapsedSeconds(0);
        setSttError(null);
      } else {
        setViewMode('bank');
      }
      return;
    }

    if (currentQIdx < questions.length - 1) {
      setCurrentQIdx((prev) => prev + 1);
      setConfirmedAnswer('');
      setAnswerElapsedSeconds(0);
      setSttError(null);
    } else {
      setViewMode('bank');
    }
  };

  // Launch Live Studio for ANY master question
  const handlePracticeMasterQuestion = (q: MasterInterviewQuestion) => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    setSelectedMasterQuestion(q);
    setViewMode('studio');
    setConfirmedAnswer('');
    setAnswerElapsedSeconds(0);
    setSttError(null);
  };

  // Quick Action: Practice Full Placement HR Round (Q143–Q150 for AI / DS, Q141–Q150 for DA)
  const handleStartPlacementHrRound = () => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    const targetQId = (isAiEngineer || isDataScientist) ? 143 : 141;
    const targetQ = active150Questions.find((q) => q.id === targetQId) || active150Questions[targetQId - 1];
    setSelectedMasterQuestion(targetQ);
    setViewMode('studio');
    setConfirmedAnswer('');
    setAnswerElapsedSeconds(0);
    setSttError(null);
  };

  // Quick Action: Practice Random Question
  const handlePracticeRandomQuestion = () => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    const randomIdx = Math.floor(Math.random() * filteredMasterQuestions.length);
    const chosen = filteredMasterQuestions[randomIdx] || active150Questions[0];
    handlePracticeMasterQuestion(chosen);
  };

  // Auto reset question index when section, difficulty, or search changes
  useEffect(() => {
    setSelectedMasterQuestionIndex(0);
    setIsAnswerOpen(false);
    setActivePracticeTab(null);
  }, [selectedSectionCode, selectedDifficulty, searchQuery]);

  // Section Icon Mapper — Real Official Tool & Lucide Vector Icons (No Emojis)
  const getSectionIcon = (title: string, _code: string, isActive = false) => {
    const lower = title.toLowerCase();
    const wrap = (node: React.ReactNode, tintBg = 'bg-slate-50 border-slate-200/70') => (
      <span
        className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
          isActive ? 'bg-white/95 border-white/60 shadow-2xs' : tintBg
        }`}
      >
        {node}
      </span>
    );

    if (lower.includes('excel')) {
      return wrap(<ToolIcon name="excel" className="w-4 h-4 object-contain" />, 'bg-emerald-50/80 border-emerald-200/60');
    }
    if (lower.includes('sql')) {
      return wrap(<ToolIcon name="sql" className="w-4 h-4 object-contain" />, 'bg-sky-50/80 border-sky-200/60');
    }
    if (lower.includes('python')) {
      return wrap(<ToolIcon name="python" className="w-4 h-4 object-contain" />, 'bg-blue-50/80 border-blue-200/60');
    }
    if (lower.includes('power bi') || lower.includes('dax')) {
      return wrap(<ToolIcon name="power bi" className="w-4 h-4 object-contain" />, 'bg-amber-50/80 border-amber-200/60');
    }
    if (lower.includes('react')) {
      return wrap(<ToolIcon name="react" className="w-4 h-4 object-contain" />, 'bg-cyan-50/80 border-cyan-200/60');
    }
    if (lower.includes('node')) {
      return wrap(<ToolIcon name="node" className="w-4 h-4 object-contain" />, 'bg-emerald-50/80 border-emerald-200/60');
    }
    if (lower.includes('mongo')) {
      return wrap(<ToolIcon name="mongodb" className="w-4 h-4 object-contain" />, 'bg-green-50/80 border-green-200/60');
    }
    if (lower.includes('langchain')) {
      return wrap(<ToolIcon name="langchain" className="w-4 h-4 object-contain" />, 'bg-emerald-50/80 border-emerald-200/60');
    }
    if (lower.includes('rag') || lower.includes('agent')) {
      return wrap(<ToolIcon name="rag" className="w-4 h-4 object-contain" />, 'bg-indigo-50/80 border-indigo-200/60');
    }
    if (lower.includes('vector')) {
      return wrap(<ToolIcon name="vector db" className="w-4 h-4 object-contain" />, 'bg-rose-50/80 border-rose-200/60');
    }
    if (lower.includes('genai') || lower.includes('llm') || lower.includes('ai')) {
      return wrap(<ToolIcon name="genai" className="w-4 h-4 object-contain" />, 'bg-teal-50/80 border-teal-200/60');
    }
    if (lower.includes('stat')) {
      return wrap(<TrendingUp className="w-3.5 h-3.5 text-pink-600" />, 'bg-pink-50/80 border-pink-200/60');
    }
    if (lower.includes('clean') || lower.includes('visual')) {
      return wrap(<PieChart className="w-3.5 h-3.5 text-teal-600" />, 'bg-teal-50/80 border-teal-200/60');
    }
    if (lower.includes('business') || lower.includes('case')) {
      return wrap(<Briefcase className="w-3.5 h-3.5 text-violet-600" />, 'bg-violet-50/80 border-violet-200/60');
    }
    if (lower.includes('project') || lower.includes('portfolio')) {
      return wrap(<FolderGit2 className="w-3.5 h-3.5 text-orange-600" />, 'bg-orange-50/80 border-orange-200/60');
    }
    if (lower.includes('hr') || lower.includes('communicat')) {
      return wrap(<UserCheck className="w-3.5 h-3.5 text-purple-600" />, 'bg-purple-50/80 border-purple-200/60');
    }
    if (lower.includes('machine learning') || lower.includes('neural') || lower.includes('deep')) {
      return wrap(<Brain className="w-3.5 h-3.5 text-indigo-600" />, 'bg-indigo-50/80 border-indigo-200/60');
    }
    if (lower.includes('fundamental') || lower.includes('analytic')) {
      return wrap(<BarChart3 className="w-3.5 h-3.5 text-blue-600" />, 'bg-blue-50/80 border-blue-200/60');
    }
    return wrap(<Database className="w-3.5 h-3.5 text-purple-600" />, 'bg-purple-50/80 border-purple-200/60');
  };

  // Filter 150 Master Questions
  const filteredMasterQuestions = useMemo(() => {
    let list = active150Questions;

    if (selectedSectionCode !== 'all') {
      list = list.filter((q) => q.sectionCode === selectedSectionCode);
    }

    if (selectedDifficulty !== 'all') {
      list = list.filter((q) => q.difficulty === selectedDifficulty);
    }

    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase().trim();
      list = list.filter(
        (q) =>
          q.questionEn.toLowerCase().includes(qLower) ||
          q.questionHi.toLowerCase().includes(qLower) ||
          q.qNum.includes(qLower) ||
          q.category.toLowerCase().includes(qLower) ||
          q.idealAnswerEn.toLowerCase().includes(qLower) ||
          q.keyPoints.some((kp) => kp.toLowerCase().includes(qLower))
      );
    }

    return list;
  }, [active150Questions, selectedSectionCode, selectedDifficulty, searchQuery]);

  const activeSectionInfo = useMemo(() => {
    if (selectedSectionCode === 'all') return null;
    return activeSections.find((s) => s.sectionCode === selectedSectionCode) || null;
  }, [activeSections, selectedSectionCode]);

  const currentMasterQ: MasterInterviewQuestion = useMemo(() => {
    return filteredMasterQuestions[selectedMasterQuestionIndex] || filteredMasterQuestions[0] || active150Questions[0];
  }, [filteredMasterQuestions, selectedMasterQuestionIndex, active150Questions]);

  const isCurrentSaved = useMemo(() => {
    return currentMasterQ ? savedQuestionIds.includes(currentMasterQ.id) : false;
  }, [currentMasterQ, savedQuestionIds]);

  const completedSectionsCount = useMemo(() => {
    return activeSections.filter((sec) => {
      const secQs = active150Questions.filter((q) => q.sectionCode === sec.sectionCode);
      return secQs.length > 0 && secQs.every((q) => practicedQuestionIds.includes(q.id));
    }).length;
  }, [activeSections, active150Questions, practicedQuestionIds]);

  const progressPercent = useMemo(() => {
    if (!active150Questions.length) return 0;
    return Math.min(100, Math.round((practicedQuestionIds.length / active150Questions.length) * 100));
  }, [practicedQuestionIds, active150Questions]);

  // ── INTERVIEW PREP ENGINE: MODULE → TOPIC → NARRATION → RESULT ──
  const [activeModuleCode, setActiveModuleCode] = useState<string>(() => activeSections[0]?.sectionCode || '01');
  const [selectedTopicKey, setSelectedTopicKey] = useState<string>('');
  const [bankTopicQIdx, setBankTopicQIdx] = useState<number>(0);
  const [topicRecordsByQId, setTopicRecordsByQId] = useState<Record<number, QuestionAnswerRecord>>({});
  const [bankAnswerMode, setBankAnswerMode] = useState<'speak' | 'type'>('speak');
  const [bankCameraEnabled, setBankCameraEnabled] = useState<boolean>(false);
  const [bankCameraError, setBankCameraError] = useState<string | null>(null);
  const [showBankModelAnswer, setShowBankModelAnswer] = useState<boolean>(false);
  const [bankValidationError, setBankValidationError] = useState<string | null>(null);
  const [isSubmittingTopicAnswer, setIsSubmittingTopicAnswer] = useState<boolean>(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);
  const [bankScreenMode, setBankScreenMode] = useState<'interview' | 'result' | 'summary'>('interview');
  const [activeTopicResult, setActiveTopicResult] = useState<TopicAttemptResult | null>(null);
  const [resultsRevision, setResultsRevision] = useState<number>(0);
  const bankVideoContainerRef = useRef<HTMLDivElement | null>(null);
  const bankUserVideoRef = useRef<HTMLVideoElement | null>(null);
  const bankMediaStreamRef = useRef<MediaStream | null>(null);
  const lastNarratedKeyRef = useRef<string>('');
  const topicSessionStartRef = useRef<number>(Date.now());

  // Dynamic map: sectionCode -> InterviewTopicGroup[] (strictly from real configured questions)
  const topicsBySectionCode = useMemo(() => {
    const map: Record<string, InterviewTopicGroup[]> = {};
    for (const sec of activeSections) {
      map[sec.sectionCode] = buildModuleTopics(selectedRole, sec, active150Questions);
    }
    return map;
  }, [activeSections, active150Questions, selectedRole]);

  // Sync active module & topic when course/role changes
  useEffect(() => {
    const firstSec = activeSections[0];
    if (!firstSec) return;
    const validMod = activeSections.find((s) => s.sectionCode === activeModuleCode)
      ? activeModuleCode
      : firstSec.sectionCode;
    if (validMod !== activeModuleCode) {
      setActiveModuleCode(validMod);
    }
    const modTopics = topicsBySectionCode[validMod] || [];
    const currentStillValid = modTopics.some((t) => t.topicKey === selectedTopicKey);
    if (!currentStillValid) {
      const firstTopic = modTopics[0];
      setSelectedTopicKey(firstTopic?.topicKey || '');
      if (firstTopic) {
        const draft = loadTopicSessionDraft(selectedRole, firstTopic.topicKey);
        if (draft) {
          const safeIdx = Math.min(draft.currentQuestionIdx, Math.max(0, firstTopic.questions.length - 1));
          setBankTopicQIdx(safeIdx);
          setTopicRecordsByQId(draft.recordsByQuestionId || {});
          const existingQ = firstTopic.questions[safeIdx];
          setConfirmedAnswer(existingQ ? draft.recordsByQuestionId?.[existingQ.id]?.submittedAnswer || '' : '');
        } else {
          setBankTopicQIdx(0);
          setTopicRecordsByQId({});
          setConfirmedAnswer('');
        }
      } else {
        setBankTopicQIdx(0);
        setTopicRecordsByQId({});
        setConfirmedAnswer('');
      }
      setBankScreenMode('interview');
      setActiveTopicResult(null);
    }
  }, [activeSections, activeModuleCode, selectedTopicKey, topicsBySectionCode, selectedRole]);

  const activeModuleSection = useMemo(
    () => activeSections.find((s) => s.sectionCode === activeModuleCode) || activeSections[0],
    [activeSections, activeModuleCode]
  );

  const activeModuleTopics: InterviewTopicGroup[] = useMemo(
    () => (activeModuleSection ? topicsBySectionCode[activeModuleSection.sectionCode] || [] : []),
    [activeModuleSection, topicsBySectionCode]
  );

  const activeTopic: InterviewTopicGroup | null = useMemo(
    () => activeModuleTopics.find((t) => t.topicKey === selectedTopicKey) || activeModuleTopics[0] || null,
    [activeModuleTopics, selectedTopicKey]
  );

  const activeTopicQuestions = activeTopic?.questions || [];
  const activeTopicQ: MasterInterviewQuestion | null =
    activeTopicQuestions[Math.min(bankTopicQIdx, Math.max(0, activeTopicQuestions.length - 1))] || null;

  const courseResultsMap = useMemo(
    () => getCourseAllTopicResults(selectedRole),
    [selectedRole, resultsRevision]
  );

  const courseSummary = useMemo(
    () => computeCourseSummary(selectedRole, heroTitleRole, activeSections, active150Questions),
    [selectedRole, heroTitleRole, activeSections, active150Questions, resultsRevision]
  );

  const activeTopicHistory = useMemo(
    () => (activeTopic ? getTopicHistory(selectedRole, activeTopic.topicKey) : []),
    [selectedRole, activeTopic, resultsRevision]
  );

  const activeTopicLatestResult = activeTopicHistory[0] || null;

  const topicAnsweredCount = useMemo(() => {
    if (!activeTopic) return 0;
    return activeTopic.questions.filter((q) => {
      const rec = topicRecordsByQId[q.id];
      return rec && !rec.skipped && rec.submittedAnswer.trim().length > 0;
    }).length;
  }, [activeTopic, topicRecordsByQId]);

  const topicSkippedCount = useMemo(() => {
    if (!activeTopic) return 0;
    return activeTopic.questions.filter((q) => topicRecordsByQId[q.id]?.skipped).length;
  }, [activeTopic, topicRecordsByQId]);

  const topicProgressPercent = useMemo(() => {
    if (!activeTopicQuestions.length) return 0;
    return Math.min(100, Math.round((topicAnsweredCount / activeTopicQuestions.length) * 100));
  }, [topicAnsweredCount, activeTopicQuestions.length]);

  const [bankTypedQuestionText, setBankTypedQuestionText] = useState<string>('');
  const bankTypingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopBankTyping = useCallback(() => {
    if (bankTypingTimerRef.current) {
      clearInterval(bankTypingTimerRef.current);
      bankTypingTimerRef.current = null;
    }
  }, []);

  const startSynchronizedQuestionTyping = useCallback(
    (fullText: string, intervalMs = 68) => {
      stopBankTyping();
      const chars = Array.from(fullText);
      if (chars.length === 0) {
        setBankTypedQuestionText('');
        return;
      }
      setBankTypedQuestionText('');
      let idx = 0;
      // Natural slow speaking cadence (~14.5 chars/sec) synced word-for-word with voice
      bankTypingTimerRef.current = setInterval(() => {
        idx += 1;
        if (idx >= chars.length) {
          setBankTypedQuestionText(fullText);
          stopBankTyping();
        } else {
          setBankTypedQuestionText(chars.slice(0, idx).join(''));
        }
      }, intervalMs);
    },
    [stopBankTyping]
  );

  useEffect(() => {
    return () => stopBankTyping();
  }, [stopBankTyping]);

  // Automatic AI Question Narration (locked 1:1 to saved female Swara voice word boundaries)
  const triggerQuestionNarration = useCallback(
    (questionText: string) => {
      if (!questionText) return;
      NavigationService.silenceAllAudio();
      stopSwaraVoice();
      stopBankTyping();
      setAutoplayBlocked(false);
      setSpeechState('idle');
      setSpokenSubtitle(questionText);
      setBankTypedQuestionText('');

      let started = false;
      const watchdog = setTimeout(() => {
        if (!started) {
          setAutoplayBlocked(true);
          setSpeechState('idle');
        }
      }, 2800);

      playSwaraVoice(questionText, {
        onStart: () => {
          started = true;
          clearTimeout(watchdog);
          setAutoplayBlocked(false);
          setSpeechState('speaking');
        },
        onWordBoundary: (spokenSoFar) => {
          started = true;
          clearTimeout(watchdog);
          setBankTypedQuestionText(spokenSoFar);
        },
        onEnd: () => {
          clearTimeout(watchdog);
          stopBankTyping();
          setBankTypedQuestionText(questionText);
          setSpeechState('idle');
        },
        onSpeechEnd: () => {
          clearTimeout(watchdog);
          stopBankTyping();
          setBankTypedQuestionText(questionText);
          setSpeechState('idle');
        },
        onError: () => {
          clearTimeout(watchdog);
          setSpeechState('idle');
          if (!started) setAutoplayBlocked(true);
          setBankTypedQuestionText(questionText);
        },
      }).catch(() => {
        clearTimeout(watchdog);
        setSpeechState('idle');
        if (!started) setAutoplayBlocked(true);
        setBankTypedQuestionText(questionText);
      });
    },
    [stopBankTyping]
  );

  // Auto-narrate whenever Topic or Question index changes in active interview view
  useEffect(() => {
    if (viewMode !== 'bank' || bankScreenMode !== 'interview' || !activeTopic || !activeTopicQ) {
      return;
    }
    const navKey = `${selectedRole}__${activeTopic.topicKey}__${activeTopicQ.id}`;
    if (lastNarratedKeyRef.current === navKey) return;
    lastNarratedKeyRef.current = navKey;

    const timer = setTimeout(() => {
      triggerQuestionNarration(activeTopicQ.questionEn);
    }, 280);
    return () => {
      clearTimeout(timer);
    };
  }, [viewMode, bankScreenMode, selectedRole, activeTopic, activeTopicQ, triggerQuestionNarration]);

  const [bankHasLiveStream, setBankHasLiveStream] = useState<boolean>(false);

  const stopBankCameraStream = useCallback(() => {
    if (bankMediaStreamRef.current) {
      bankMediaStreamRef.current.getTracks().forEach((t) => t.stop());
      bankMediaStreamRef.current = null;
    }
    if (bankUserVideoRef.current) {
      bankUserVideoRef.current.srcObject = null;
    }
    setBankHasLiveStream(false);
  }, []);

  // Attach active MediaStream once PiP <video> mounts
  useEffect(() => {
    if (viewMode === 'bank' && bankCameraEnabled && bankMediaStreamRef.current && bankUserVideoRef.current) {
      bankUserVideoRef.current.srcObject = bankMediaStreamRef.current;
      bankUserVideoRef.current.play().catch(() => {});
    }
    if (viewMode !== 'bank') {
      stopBankCameraStream();
      setBankCameraEnabled(false);
    }
  }, [bankCameraEnabled, bankHasLiveStream, viewMode, stopBankCameraStream]);

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => stopBankCameraStream();
  }, [stopBankCameraStream]);

  // Toggle student camera PiP cleanly without blocking or showing permission error banners
  const handleToggleBankCamera = useCallback(async () => {
    soundEffects.playClick();
    if (bankCameraEnabled) {
      stopBankCameraStream();
      setBankCameraEnabled(false);
      setBankCameraError(null);
      return;
    }

    setBankCameraError(null);
    setBankCameraEnabled(true);

    // Release any lingering stream before requesting
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }
    stopBankCameraStream();

    if (!navigator.mediaDevices?.getUserMedia) {
      setBankHasLiveStream(false);
      return;
    }

    try {
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 480 }, height: { ideal: 360 }, facingMode: 'user' },
          audio: false,
        });
      } catch {
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }

      bankMediaStreamRef.current = stream;
      setBankHasLiveStream(true);
      requestAnimationFrame(() => {
        if (bankUserVideoRef.current && bankMediaStreamRef.current) {
          bankUserVideoRef.current.srcObject = bankMediaStreamRef.current;
          bankUserVideoRef.current.play().catch(() => {});
        }
      });
    } catch {
      // Gracefully keep PiP open in clean Student Live Avatar mode with zero error banner
      setBankHasLiveStream(false);
    }
  }, [bankCameraEnabled, stopBankCameraStream]);

  const persistCurrentDraft = useCallback(
    (topic: InterviewTopicGroup, nextIdx: number, nextRecords: Record<number, QuestionAnswerRecord>) => {
      saveTopicSessionDraft({
        courseKey: selectedRole,
        sectionCode: topic.sectionCode,
        topicKey: topic.topicKey,
        currentQuestionIdx: nextIdx,
        recordsByQuestionId: nextRecords,
        startedAt: new Date(topicSessionStartRef.current).toISOString(),
        updatedAt: new Date().toISOString(),
      });
    },
    [selectedRole]
  );

  const handleSelectTopic = (sectionCode: string, topicKey: string, forceFresh = false) => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    // Preserve current topic's in-progress draft before switching
    if (activeTopic && Object.keys(topicRecordsByQId).length > 0 && bankScreenMode === 'interview') {
      persistCurrentDraft(activeTopic, bankTopicQIdx, topicRecordsByQId);
    }

    setActiveModuleCode(sectionCode);
    setSelectedSectionCode(sectionCode);
    setSelectedTopicKey(topicKey);
    setBankValidationError(null);
    setSttError(null);
    setShowBankModelAnswer(false);
    setBankScreenMode('interview');
    setActiveTopicResult(null);
    lastNarratedKeyRef.current = '';

    const modTopics = topicsBySectionCode[sectionCode] || [];
    const targetTopic = modTopics.find((t) => t.topicKey === topicKey);
    if (!targetTopic) {
      setBankTopicQIdx(0);
      setTopicRecordsByQId({});
      setConfirmedAnswer('');
      return;
    }

    if (forceFresh) {
      clearTopicSessionDraft(selectedRole, topicKey);
      topicSessionStartRef.current = Date.now();
      setBankTopicQIdx(0);
      setTopicRecordsByQId({});
      setConfirmedAnswer('');
    } else {
      const draft = loadTopicSessionDraft(selectedRole, topicKey);
      if (draft) {
        topicSessionStartRef.current = draft.startedAt
          ? new Date(draft.startedAt).getTime() || Date.now()
          : Date.now();
        const safeIdx = Math.min(draft.currentQuestionIdx, Math.max(0, targetTopic.questions.length - 1));
        setBankTopicQIdx(safeIdx);
        setTopicRecordsByQId(draft.recordsByQuestionId || {});
        const existingQ = targetTopic.questions[safeIdx];
        setConfirmedAnswer(existingQ ? draft.recordsByQuestionId?.[existingQ.id]?.submittedAnswer || '' : '');
      } else {
        topicSessionStartRef.current = Date.now();
        setBankTopicQIdx(0);
        setTopicRecordsByQId({});
        setConfirmedAnswer('');
      }
    }
  };

  const handleSelectSection = (secCode: string) => {
    soundEffects.playClick();
    setActiveModuleCode(secCode);
    setSelectedSectionCode(secCode);
    const modTopics = topicsBySectionCode[secCode] || [];
    if (modTopics.length > 0 && !modTopics.some((t) => t.topicKey === selectedTopicKey)) {
      handleSelectTopic(secCode, modTopics[0].topicKey);
    }
  };

  const handleBankFullscreen = () => {
    soundEffects.playClick();
    const el = bankVideoContainerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      el.requestFullscreen?.().catch(() => {});
    }
  };

  const handleBankResetQuestion = () => {
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    setConfirmedAnswer('');
    setSttError(null);
    setBankValidationError(null);
    setShowBankModelAnswer(false);
  };

  const finalizeCurrentTopic = (finalRecords: Record<number, QuestionAnswerRecord>) => {
    if (!activeTopic) return;
    const prevHistory = getTopicHistory(selectedRole, activeTopic.topicKey);
    const elapsedSeconds = Math.max(
      1,
      Math.round((Date.now() - topicSessionStartRef.current) / 1000)
    );
    const result = buildTopicAttemptResult({
      courseKey: selectedRole,
      courseName: heroTitleRole,
      topic: activeTopic,
      recordsByQuestionId: finalRecords,
      attemptNumber: prevHistory.length + 1,
      durationSeconds: elapsedSeconds,
    });
    saveTopicAttemptResult(result);
    clearTopicSessionDraft(selectedRole, activeTopic.topicKey);
    setResultsRevision((r) => r + 1);
    setActiveTopicResult(result);
    setBankScreenMode('result');
    NavigationService.silenceAllAudio();
    stopSwaraVoice();

    const scorePct = result.overallScorePct ?? 0;
    const ansCount = result.answeredCount;
    const totCount = result.totalQuestions;
    const skipCount = result.skippedCount;

    let shortHrResultSpeech = '';
    if (ansCount === 0) {
      shortHrResultSpeech = `Your topic interview is complete. You skipped all ${totCount} questions, so your score is 0 percent. Please review the concepts and try again.`;
    } else if (scorePct >= 80) {
      shortHrResultSpeech = `Congratulations! Your topic interview is complete. You scored ${scorePct} percent and answered ${ansCount} out of ${totCount} questions. Great job!`;
    } else if (scorePct >= 50) {
      shortHrResultSpeech = `Your topic interview is complete. Your overall score is ${scorePct} percent, with ${ansCount} answered out of ${totCount} questions. Check the areas for improvement below.`;
    } else {
      shortHrResultSpeech = `Your topic interview is complete. Your overall score is ${scorePct} percent, with ${ansCount} answered and ${skipCount} skipped. Build your concepts and try again.`;
    }

    setTimeout(() => {
      playSwaraVoice(shortHrResultSpeech, {
        onStart: () => setSpeechState('speaking'),
        onEnd: () => setSpeechState('idle'),
        onError: () => setSpeechState('idle'),
      }).catch(() => setSpeechState('idle'));
    }, 240);
  };

  const handleBankSubmitAndNext = () => {
    if (isSubmittingTopicAnswer || !activeTopic || !activeTopicQ) return;
    soundEffects.playClick();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }

    const trimmed = confirmedAnswer.trim();
    if (!trimmed) {
      setBankValidationError('Please speak or type your answer before submitting, or click Skip.');
      return;
    }

    setIsSubmittingTopicAnswer(true);
    setBankValidationError(null);

    const evaluation = evaluateTopicAnswer(trimmed, activeTopicQ);
    const record: QuestionAnswerRecord = {
      questionId: activeTopicQ.id,
      qNum: activeTopicQ.qNum,
      questionText: activeTopicQ.questionEn,
      difficulty: activeTopicQ.difficulty,
      submittedAnswer: trimmed,
      inputMode: bankAnswerMode === 'speak' ? 'voice' : 'text',
      skipped: false,
      submittedAt: new Date().toISOString(),
      evaluation,
    };

    const nextRecords = { ...topicRecordsByQId, [activeTopicQ.id]: record };
    setTopicRecordsByQId(nextRecords);
    markQuestionPracticed(activeTopicQ.id);
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    setShowBankModelAnswer(false);

    if (bankTopicQIdx < activeTopicQuestions.length - 1) {
      const nextIdx = bankTopicQIdx + 1;
      const nextQ = activeTopicQuestions[nextIdx];
      setBankTopicQIdx(nextIdx);
      setConfirmedAnswer(nextQ ? nextRecords[nextQ.id]?.submittedAnswer || '' : '');
      persistCurrentDraft(activeTopic, nextIdx, nextRecords);
    } else {
      finalizeCurrentTopic(nextRecords);
    }

    setTimeout(() => setIsSubmittingTopicAnswer(false), 180);
  };

  const handleBankSkipQuestion = () => {
    if (!activeTopic || !activeTopicQ) return;
    soundEffects.playClick();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    setBankValidationError(null);
    setShowBankModelAnswer(false);

    const existing = topicRecordsByQId[activeTopicQ.id];
    const nextRecords = existing && !existing.skipped
      ? topicRecordsByQId
      : {
          ...topicRecordsByQId,
          [activeTopicQ.id]: {
            questionId: activeTopicQ.id,
            qNum: activeTopicQ.qNum,
            questionText: activeTopicQ.questionEn,
            difficulty: activeTopicQ.difficulty,
            submittedAnswer: '',
            inputMode: bankAnswerMode === 'speak' ? 'voice' : 'text',
            skipped: true,
            submittedAt: new Date().toISOString(),
            evaluation: null,
          } as QuestionAnswerRecord,
        };

    setTopicRecordsByQId(nextRecords);

    if (bankTopicQIdx < activeTopicQuestions.length - 1) {
      const nextIdx = bankTopicQIdx + 1;
      const nextQ = activeTopicQuestions[nextIdx];
      setBankTopicQIdx(nextIdx);
      setConfirmedAnswer(nextQ ? nextRecords[nextQ.id]?.submittedAnswer || '' : '');
      persistCurrentDraft(activeTopic, nextIdx, nextRecords);
    } else {
      finalizeCurrentTopic(nextRecords);
    }
  };

  const handleBankPrevious = () => {
    if (!activeTopic || bankTopicQIdx <= 0) return;
    soundEffects.playClick();
    NavigationService.silenceAllAudio();
    stopSwaraVoice();
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
    const prevIdx = bankTopicQIdx - 1;
    const prevQ = activeTopicQuestions[prevIdx];
    setBankTopicQIdx(prevIdx);
    setConfirmedAnswer(prevQ ? topicRecordsByQId[prevQ.id]?.submittedAnswer || '' : '');
    setSttError(null);
    setBankValidationError(null);
    setShowBankModelAnswer(false);
    persistCurrentDraft(activeTopic, prevIdx, topicRecordsByQId);
  };

  const nextTopicInModule = useMemo(() => {
    if (!activeModuleSection) return null;
    const secIdx = activeSections.findIndex((s) => s.sectionCode === activeModuleSection.sectionCode);
    if (secIdx >= 0 && secIdx < activeSections.length - 1) {
      const nextSec = activeSections[secIdx + 1];
      const nextSecTopics = topicsBySectionCode[nextSec.sectionCode] || [];
      return nextSecTopics[0] || null;
    }
    return null;
  }, [activeModuleSection, activeSections, topicsBySectionCode]);

  const handlePracticeCurrentQuestion = () => {
    soundEffects.playClick();
    if (currentMasterQ) {
      markQuestionPracticed(currentMasterQ.id);
      handlePracticeMasterQuestion(currentMasterQ);
    }
  };

  const handleStartPlacementHr = () => {
    soundEffects.playClick();
    handleStartPlacementHrRound();
  };

  const handleDownloadPdf = () => {
    soundEffects.playClick();
    if (typeof window === 'undefined') return;
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${activeTrack.label} — Master Interview Questions</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #0f172a; line-height: 1.5; }
            h1 { color: #581c87; font-size: 26px; border-bottom: 2px solid #ddd6fe; padding-bottom: 8px; margin-bottom: 4px; }
            .subtitle { color: #64748b; font-size: 13px; margin-bottom: 24px; font-weight: 600; }
            .section-block { margin-top: 28px; page-break-inside: avoid; }
            .section-title { font-size: 16px; font-weight: 800; color: #6d28d9; background: #f5f3ff; padding: 8px 14px; border-radius: 8px; border: 1px solid #ddd6fe; }
            .q-item { margin: 14px 0 18px 0; padding-left: 12px; border-left: 3px solid #8b5cf6; }
            .q-title { font-weight: 800; font-size: 14px; color: #0f172a; }
            .q-hi { color: #64748b; font-size: 12.5px; margin-top: 2px; }
            .q-ans { font-size: 12.5px; color: #334155; margin-top: 6px; background: #fafafa; padding: 8px 12px; border-radius: 6px; }
          </style>
        </head>
        <body>
          <h1>Future IT Industry • ${activeTrack.label}</h1>
          <div class="subtitle">Complete Master Interview Question Bank • 0–1 Year Experience Curriculum</div>
          ${activeSections.map(sec => `
            <div class="section-block">
              <div class="section-title">Section ${sec.sectionCode} • ${sec.title} (${sec.range})</div>
              ${active150Questions.filter(q => q.sectionCode === sec.sectionCode).map(q => `
                <div class="q-item">
                  <div class="q-title">Q${q.qNum}. ${q.questionEn} [${q.difficulty}]</div>
                  <div class="q-hi">${q.questionHi}</div>
                  <div class="q-ans"><strong>Ideal Answer:</strong> ${q.idealAnswerEn}</div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <div
      className="zmi-pro-shell min-h-screen flex flex-col font-sans select-text transition-colors duration-200 bg-[#f8f9fe] text-slate-900"
    >
      {/* ════════════════════════════════════════════════════════════════════════
          VIEW MODE 1: MASTER QUESTION EXPLORER & SOLUTIONS (EXACT REFERENCE DESIGN)
          ════════════════════════════════════════════════════════════════════════ */}
      {viewMode === 'bank' && (
        <div className="w-full max-w-[1420px] mx-auto px-3 sm:px-6 py-5 flex flex-col gap-4 font-sans select-text">
          
          {/* ── 1. ROLE-SYNCED PREMIUM LIGHT HERO BANNER (No Auto-Slide) ── */}
          <InterviewTrackBannerCarousel
            selectedRole={selectedRole}
            onStartPreparation={(roleKey) => {
              soundEffects.playClick();
              if (selectedRole !== roleKey) {
                handleSelectRole(roleKey);
              }
              setViewMode('studio');
            }}
            onExploreQuestions={(roleKey) => {
              soundEffects.playClick();
              if (selectedRole !== roleKey) {
                handleSelectRole(roleKey);
              }
              const el = document.getElementById('master-question-explorer-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* ── 2. MAIN 3-COLUMN INTERACTIVE AI INTERVIEWER ENGINE ── */}
          <div
            id="master-question-explorer-section"
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start"
          >
            {/* ─── COLUMN 1: MODULES & TOPICS SIDEBAR (col-span-3) ─── */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_2px_12px_rgba(109,40,217,0.04)] p-4 flex flex-col gap-1.5">
              <div className="flex items-center justify-between px-2 pb-2.5 mb-1 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#6D28D9]" />
                  <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#111827] m-0">
                    SECTIONS ({activeSections.length})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setBankScreenMode((prev) => (prev === 'summary' ? 'interview' : 'summary'));
                  }}
                  className="text-[11px] font-bold text-[#6D28D9] hover:underline cursor-pointer"
                >
                  {bankScreenMode === 'summary' ? 'Interview' : 'Summary'}
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {activeSections.map((sec) => {
                  const isModuleActive = activeModuleSection?.sectionCode === sec.sectionCode;
                  const modTopics = topicsBySectionCode[sec.sectionCode] || [];
                  const secTopic = modTopics[0];
                  const secAttempts = secTopic ? courseResultsMap[secTopic.topicKey] || [] : [];
                  const latestSecRes = secAttempts[0] || null;
                  const isSecCompleted = Boolean(latestSecRes && latestSecRes.status === 'completed');
                  const icon = getSectionIcon(sec.title, sec.sectionCode, false);

                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleSelectSection(sec.sectionCode)}
                      className={`w-full flex items-center justify-between px-2.5 py-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isModuleActive
                          ? 'bg-[#F3EEFF] border-[#DDD6FE] text-[#5B21B6] font-bold shadow-[0_1px_4px_rgba(109,40,217,0.08)]'
                          : 'bg-transparent border-transparent hover:bg-[#FAF8FF] text-[#334155] font-semibold'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        {icon}
                        <span className="text-[13px] truncate">{sec.title}</span>
                        {isSecCompleted && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        )}
                      </div>
                      <span
                        className={`text-[11px] font-bold tabular-nums px-2 py-0.5 rounded-full shrink-0 ${
                          isModuleActive
                            ? 'bg-[#E9DFFF] text-[#6D28D9]'
                            : 'bg-[#F1F5F9] text-[#64748B]'
                        }`}
                      >
                        {secTopic ? secTopic.questionCount : sec.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── COLUMN 2: INTERACTIVE AI INTERVIEWER STAGE / RESULT / SUMMARY (col-span-6) ─── */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {bankScreenMode === 'result' && activeTopicResult ? (
                <TopicInterviewResultView
                  result={activeTopicResult}
                  attemptHistory={getTopicHistory(selectedRole, activeTopicResult.topicKey)}
                  hasNextTopic={Boolean(nextTopicInModule)}
                  nextTopicTitle={nextTopicInModule?.topicTitle}
                  onSelectAttempt={(att) => setActiveTopicResult(att)}
                  onRetryTopic={() => {
                    if (activeTopic) {
                      handleSelectTopic(activeTopic.sectionCode, activeTopic.topicKey, true);
                    }
                  }}
                  onBackToTopics={() => {
                    setBankScreenMode('interview');
                    setActiveTopicResult(null);
                  }}
                  onStartNextTopic={() => {
                    if (nextTopicInModule) {
                      handleSelectTopic(nextTopicInModule.sectionCode, nextTopicInModule.topicKey, false);
                    }
                  }}
                  onOpenSummary={() => setBankScreenMode('summary')}
                />
              ) : bankScreenMode === 'summary' ? (
                <InterviewSummaryView
                  courseSummary={courseSummary}
                  activeModuleCode={activeModuleSection?.sectionCode || '01'}
                  onOpenTopicResult={(secCode, tKey, res) => {
                    setActiveModuleCode(secCode);
                    setSelectedTopicKey(tKey);
                    setActiveTopicResult(res);
                    setBankScreenMode('result');
                  }}
                  onStartTopic={(secCode, tKey) => handleSelectTopic(secCode, tKey, false)}
                  onClose={() => setBankScreenMode('interview')}
                />
              ) : !activeTopic || activeTopicQuestions.length === 0 || !activeTopicQ ? (
                /* Empty State — Never Start Fake Interview When Topic Has 0 Questions */
                <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_4px_20px_rgba(109,40,217,0.05)] p-8 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3EEFF] text-[#6D28D9] flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#111827] m-0">
                    No Interview Questions Configured for This Topic
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md m-0">
                    Select another topic from the left sidebar to begin your AI interview session.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-[0_4px_20px_rgba(109,40,217,0.05)] p-5 sm:p-6 flex flex-col gap-4">
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#6D28D9] text-white text-[12px] font-bold tabular-nums shadow-xs">
                        Question {bankTopicQIdx + 1} of {activeTopicQuestions.length}
                      </span>
                      <span className="text-[13px] font-semibold text-[#475569]">
                        {activeTopic.sectionTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Speaking / Listening Live Status Indicator */}
                      {speechState === 'speaking' ? (
                        <span className="px-2.5 py-1 rounded-full bg-purple-50 text-[#6D28D9] border border-purple-200 text-[11.5px] font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-ping" />
                          <span>Speaking</span>
                        </span>
                      ) : isListening ? (
                        <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-[11.5px] font-bold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                          <span>Listening</span>
                        </span>
                      ) : null}

                      {/* Difficulty Badge */}
                      <span
                        className={`px-3 py-1 rounded-lg text-[12px] font-semibold flex items-center gap-1.5 border ${
                          activeTopicQ.difficulty === 'Basic'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                            : activeTopicQ.difficulty === 'Core'
                            ? 'bg-sky-50 text-sky-700 border-sky-200/80'
                            : 'bg-amber-50 text-amber-700 border-amber-200/80'
                        }`}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>{activeTopicQ.difficulty}</span>
                      </span>
                    </div>
                  </div>

                  {/* Question Heading (Highlighted while AI Interviewer is speaking) */}
                  <div
                    className={`rounded-xl p-3 flex items-center justify-between gap-3 border transition-all ${
                      speechState === 'speaking'
                        ? 'bg-[#F5F2FF] border-[#C4B5FD] shadow-[0_0_0_3px_rgba(124,58,237,0.08)]'
                        : 'bg-transparent border-transparent p-0'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-[#F3EEFF] border border-[#E5DCFE] text-[#6D28D9] flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h2 className="text-[19px] sm:text-[21px] font-extrabold text-[#111827] leading-snug tracking-tight m-0 min-h-[1.5em]">
                        {bankTypedQuestionText}
                        {bankTypedQuestionText.length < activeTopicQ.questionEn.length && (
                          <span className="inline-block w-[2.5px] h-[1em] bg-[#7C3AED] ml-1 align-middle animate-pulse" />
                        )}
                      </h2>
                    </div>

                    {autoplayBlocked && speechState !== 'speaking' && (
                      <button
                        type="button"
                        onClick={() => triggerQuestionNarration(activeTopicQ.questionEn)}
                        className="px-3 py-1.5 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-xs font-bold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Play Question</span>
                      </button>
                    )}
                  </div>

                  {/* Large 16:9 AI Interviewer Video Stage (Never unmounted between questions) */}
                  <div
                    ref={bankVideoContainerRef}
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#0F172A] border border-[#E5E0F5] shadow-sm group"
                  >
                    <StableMouthLipSyncAvatar
                      imageUrl="/images/hr_interviewer_futureit_neha.jpg"
                      isSpeaking={speechState === 'speaking'}
                      speakingText={spokenSubtitle || activeTopicQ.questionEn}
                      speakingRate={1.0}
                      gender="female"
                      isLipSyncEnabled={true}
                      hideInternalBadge={true}
                      className="w-full h-full object-cover"
                    />

                    {/* Subtle bottom gradient for crisp control readability */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                    {/* Small Floating Top-Right Student Camera PiP (Rounded, Purple Border, Mirrored, "You" Label) */}
                    {bankCameraEnabled && (
                      <div className="absolute top-3 right-3 z-10 w-28 sm:w-36 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#A78BFA] bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#0F172A] shadow-[0_6px_20px_rgba(15,23,42,0.45)] flex items-center justify-center">
                        {bankHasLiveStream ? (
                          <video
                            ref={bankUserVideoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover scale-x-[-1]"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-1 text-white">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] border border-white/30 flex items-center justify-center text-sm font-extrabold shadow-md">
                              YOU
                            </div>
                          </div>
                        )}
                        <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/65 backdrop-blur-sm text-white text-[10px] font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>You</span>
                        </span>
                      </div>
                    )}

                    {/* Bottom-Left Purple Waveform Indicator */}
                    <div className="absolute bottom-3.5 left-4 z-10 flex items-center gap-1 h-7">
                      {[10, 18, 26, 16, 22, 14, 10].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full transition-all duration-200 ${
                            speechState === 'speaking' || isListening
                              ? 'bg-[#A78BFA] animate-pulse'
                              : 'bg-[#8B5CF6]/90'
                          }`}
                          style={{
                            height: `${speechState === 'speaking' || isListening ? Math.min(28, h + ((i % 2) * 4)) : h}px`,
                            animationDelay: `${i * 90}ms`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Bottom-Center 5 Circular Call Controls */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5 sm:gap-3">
                      {/* 1. Mic Toggle */}
                      <button
                        type="button"
                        onClick={toggleListening}
                        title={isListening ? 'Stop Microphone' : 'Start Microphone'}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border ${
                          isListening
                            ? 'bg-[#7C3AED] border-purple-300 text-white shadow-[0_0_16px_rgba(124,58,237,0.65)]'
                            : 'bg-black/55 hover:bg-black/75 border-white/15 text-white'
                        }`}
                      >
                        <Mic className="w-4 h-4" />
                      </button>

                      {/* 2. Camera Toggle (Small PiP on Top-Right) */}
                      <button
                        type="button"
                        onClick={handleToggleBankCamera}
                        title={bankCameraEnabled ? 'Turn Camera Off' : 'Turn Camera On'}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border ${
                          bankCameraEnabled
                            ? 'bg-[#7C3AED] border-purple-300 text-white shadow-[0_0_14px_rgba(124,58,237,0.55)]'
                            : 'bg-[#EF4444] hover:bg-[#DC2626] border-red-400/50 text-white shadow-sm'
                        }`}
                      >
                        {bankCameraEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                      </button>

                      {/* 3. Play / Speak Question Aloud */}
                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          triggerQuestionNarration(activeTopicQ.questionEn);
                        }}
                        title="Play Question Audio"
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border ${
                          speechState === 'speaking'
                            ? 'bg-[#7C3AED] border-purple-300 text-white shadow-[0_0_16px_rgba(124,58,237,0.55)]'
                            : 'bg-black/55 hover:bg-black/75 border-white/15 text-white'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      {/* 4. Replay Question */}
                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          triggerQuestionNarration(activeTopicQ.questionEn);
                        }}
                        title="Replay Question"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-black/55 hover:bg-black/75 border border-white/15 text-white transition-all cursor-pointer backdrop-blur-md"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      {/* 5. Stop Audio & Reset Input */}
                      <button
                        type="button"
                        onClick={() => {
                          handleBankResetQuestion();
                          stopBankCameraStream();
                          setBankCameraEnabled(false);
                        }}
                        title="Stop Audio & Reset"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-[#EF4444] hover:bg-[#DC2626] border border-red-400/50 text-white transition-all cursor-pointer shadow-sm"
                      >
                        <PhoneOff className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom-Right Fullscreen Button */}
                    <button
                      type="button"
                      onClick={handleBankFullscreen}
                      title="Toggle Fullscreen"
                      className="absolute bottom-3.5 right-3.5 z-10 w-8 h-8 rounded-lg flex items-center justify-center bg-black/45 hover:bg-black/70 text-white/90 border border-white/15 transition cursor-pointer backdrop-blur-sm"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Friendly Camera Permission Notice (Non-blocking) */}
                  {bankCameraError && (
                    <div className="px-3.5 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center justify-between gap-2.5 flex-wrap">
                      <span className="flex-1 min-w-[200px]">{bankCameraError}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={handleToggleBankCamera}
                          className="px-2.5 py-1 rounded-lg bg-[#6D28D9] hover:bg-[#5B21B6] text-white text-[11px] font-bold cursor-pointer transition"
                        >
                          Retry Camera
                        </button>
                        <button
                          type="button"
                          onClick={() => setBankCameraError(null)}
                          className="text-amber-700 hover:text-amber-950 font-bold cursor-pointer px-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Mode Toggle Pills: Speak Answer (Recommended) | Type Answer */}
                  <div className="flex items-center justify-between gap-2.5 flex-wrap pt-0.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          setBankAnswerMode('speak');
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                          bankAnswerMode === 'speak'
                            ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_4px_12px_rgba(109,40,217,0.25)]'
                            : 'bg-white border border-[#E2E8F0] text-[#334155] hover:bg-[#FAF8FF]'
                        }`}
                      >
                        <Mic className="w-3.5 h-3.5" />
                        <span>Speak Answer (Recommended)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          soundEffects.playClick();
                          setBankAnswerMode('type');
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer ${
                          bankAnswerMode === 'type'
                            ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_4px_12px_rgba(109,40,217,0.25)]'
                            : 'bg-white border border-[#E2E8F0] text-[#334155] hover:bg-[#FAF8FF]'
                        }`}
                      >
                        <Keyboard className="w-3.5 h-3.5" />
                        <span>Type Answer</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => triggerQuestionNarration(activeTopicQ.questionEn)}
                      className="text-[12px] font-bold text-[#6D28D9] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Replay Question</span>
                    </button>
                  </div>

                  {/* Answer Input Pod */}
                  {bankAnswerMode === 'speak' ? (
                    <div className="rounded-2xl bg-[#F5F2FF] border border-[#E9E2FF] px-5 py-6 flex flex-col items-center justify-center gap-3.5">
                      <div className="flex items-center justify-center gap-4 sm:gap-5">
                        {/* Left Symmetrical Waveform Bars */}
                        <div className="flex items-center gap-1">
                          {[6, 10, 14, 18, 24, 16, 12, 20, 14, 8].map((h, i) => (
                            <span
                              key={`l-${i}`}
                              className={`w-[2.5px] rounded-full transition-all ${
                                isListening ? 'bg-[#7C3AED] animate-pulse' : 'bg-[#A78BFA]/75'
                              }`}
                              style={{ height: `${h}px`, animationDelay: `${i * 70}ms` }}
                            />
                          ))}
                        </div>

                        {/* Centered Purple Mic Button */}
                        <button
                          type="button"
                          onClick={toggleListening}
                          className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all cursor-pointer ${
                            isListening
                              ? 'bg-[#EF4444] shadow-[0_0_0_8px_rgba(239,68,68,0.18)] scale-105'
                              : 'bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#5B21B6] shadow-[0_8px_22px_rgba(109,40,217,0.34)] hover:scale-105'
                          }`}
                        >
                          <Mic className="w-7 h-7" />
                        </button>

                        {/* Right Symmetrical Waveform Bars */}
                        <div className="flex items-center gap-1">
                          {[8, 14, 20, 12, 16, 24, 18, 14, 10, 6].map((h, i) => (
                            <span
                              key={`r-${i}`}
                              className={`w-[2.5px] rounded-full transition-all ${
                                isListening ? 'bg-[#7C3AED] animate-pulse' : 'bg-[#A78BFA]/75'
                              }`}
                              style={{ height: `${h}px`, animationDelay: `${i * 70}ms` }}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-[13.5px] font-medium text-[#475569] text-center m-0">
                        {isListening
                          ? 'Listening... Speak clearly, then click the microphone to stop.'
                          : 'Click the microphone to start speaking your answer'}
                      </p>

                      {sttError && (
                        <div className="w-full px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium flex items-center justify-between gap-2">
                          <span>{sttError}</span>
                          <button
                            type="button"
                            onClick={() => setBankAnswerMode('type')}
                            className="font-bold text-[#6D28D9] hover:underline shrink-0 cursor-pointer"
                          >
                            Type instead
                          </button>
                        </div>
                      )}

                      {/* Editable Recognized Speech Transcript so Student Can Correct Errors */}
                      {confirmedAnswer.trim() && (
                        <div className="w-full mt-1 p-3 rounded-xl bg-white border border-[#DDD6FE] text-left space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D28D9]">
                              Recognized Answer (Editable)
                            </span>
                            <button
                              type="button"
                              onClick={() => setConfirmedAnswer('')}
                              className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 cursor-pointer"
                            >
                              Clear
                            </button>
                          </div>
                          <textarea
                            rows={3}
                            value={confirmedAnswer}
                            onChange={(e) => {
                              setConfirmedAnswer(e.target.value);
                              setBankValidationError(null);
                            }}
                            className="w-full text-[13.5px] text-[#1E293B] leading-relaxed bg-transparent border-none focus:outline-none resize-none"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-[#F5F2FF] border border-[#E9E2FF] p-4 flex flex-col gap-2.5">
                      <textarea
                        value={confirmedAnswer}
                        onChange={(e) => {
                          setConfirmedAnswer(e.target.value);
                          setSttError(null);
                          setBankValidationError(null);
                        }}
                        rows={4}
                        placeholder="Type your interview answer clearly using a structured explanation and real-world example..."
                        className="w-full rounded-xl bg-white border border-[#DDD6FE] p-3.5 text-[14px] text-[#111827] placeholder-slate-400 focus:outline-none focus:border-[#7C3AED] resize-none leading-relaxed"
                      />
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-[12px] font-medium text-[#64748B]">
                          {confirmedAnswer.trim()
                            ? `${confirmedAnswer.trim().split(/\s+/).length} words`
                            : 'Tip: Include a clear definition + 1 real project example.'}
                        </span>
                        <div className="flex items-center gap-2">
                          {confirmedAnswer && (
                            <button
                              type="button"
                              onClick={() => setConfirmedAnswer('')}
                              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold cursor-pointer transition"
                            >
                              Clear
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Empty Answer Validation Message */}
                  {bankValidationError && (
                    <div className="px-3.5 py-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{bankValidationError}</span>
                    </div>
                  )}

                  {/* Collapsible Model Answer (toggled via Quick Actions) */}
                  {showBankModelAnswer && (
                    <div className="rounded-2xl bg-[#FAF8FF] border border-[#DDD6FE] p-4 space-y-2 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#6D28D9]">
                          Model Interview Answer
                        </span>
                        <button
                          type="button"
                          onClick={() => setShowBankModelAnswer(false)}
                          className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                        >
                          Hide
                        </button>
                      </div>
                      <p className="text-[13.5px] text-[#1E293B] leading-relaxed m-0">
                        {activeTopicQ.idealAnswerEn}
                      </p>
                    </div>
                  )}

                  {/* Bottom Navigation Row: < Previous | Skip | Submit & Next → */}
                  <div className="flex items-center gap-2.5 pt-1 flex-wrap sm:flex-nowrap">
                    <button
                      type="button"
                      disabled={bankTopicQIdx === 0}
                      onClick={handleBankPrevious}
                      className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#1E293B] font-semibold text-[13.5px] flex items-center justify-center gap-1.5 disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer transition shrink-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleBankSkipQuestion}
                      className="px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#475569] font-semibold text-[13.5px] flex items-center justify-center gap-1.5 cursor-pointer transition shrink-0"
                    >
                      <ChevronsRight className="w-4 h-4" />
                      <span>Skip</span>
                    </button>

                    <button
                      type="button"
                      disabled={isSubmittingTopicAnswer}
                      onClick={handleBankSubmitAndNext}
                      className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] hover:from-[#6D28D9] hover:to-[#5B21B6] text-white font-bold text-[14.5px] shadow-[0_6px_18px_rgba(109,40,217,0.28)] flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer transition"
                    >
                      <span>
                        {bankTopicQIdx >= activeTopicQuestions.length - 1
                          ? 'Submit & View Topic Result'
                          : 'Submit & Next'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ─── COLUMN 3: RIGHT SIDEBAR — RESULT DETAILS OR ACTIVE INTERVIEW CARDS (col-span-3) ─── */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {bankScreenMode === 'result' && activeTopicResult ? (
                <TopicResultRightSidebar
                  result={activeTopicResult}
                  hasNextTopic={Boolean(nextTopicInModule)}
                  nextTopicTitle={nextTopicInModule?.topicTitle}
                  onRetryTopic={() => {
                    if (activeTopic) {
                      handleSelectTopic(activeTopic.sectionCode, activeTopic.topicKey, true);
                    }
                  }}
                  onReviewAnswers={() => {
                    const el = document.getElementById('topic-question-feedback-accordion');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  onBackToTopics={() => {
                    setBankScreenMode('interview');
                    setActiveTopicResult(null);
                  }}
                  onStartNextTopic={() => {
                    if (nextTopicInModule) {
                      handleSelectTopic(nextTopicInModule.sectionCode, nextTopicInModule.topicKey, false);
                    }
                  }}
                  onOpenSummary={() => setBankScreenMode('summary')}
                />
              ) : (
                <>
              {/* Card 1: Topic Interview */}
              <div className="bg-white border border-[#E9E5F5] rounded-2xl p-4 shadow-[0_2px_12px_rgba(109,40,217,0.04)] flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#F3EEFF] text-[#6D28D9] border border-[#E5DCFE] flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-extrabold text-[#111827] m-0">
                      Topic Interview
                    </h4>
                    <p className="text-[12.5px] text-[#64748B] leading-relaxed m-0 mt-1">
                      Practice real interview questions for this topic with AI Interviewer.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBankScreenMode((prev) => (prev === 'summary' ? 'interview' : 'summary'))}
                  className="w-full py-2 px-3 rounded-xl bg-[#F5F2FF] hover:bg-[#EDE9FE] text-[#6D28D9] text-[12px] font-bold transition cursor-pointer"
                >
                  {bankScreenMode === 'summary' ? 'Back to Active Interview' : 'Module & Course Summary'}
                </button>
              </div>

              {/* Card 2: Topic Progress (Strictly Scoped to Selected Topic) */}
              <div className="bg-white border border-[#E9E5F5] rounded-2xl p-4 shadow-[0_2px_12px_rgba(109,40,217,0.04)] flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#6D28D9]" />
                    <h4 className="text-[14.5px] font-extrabold text-[#111827] m-0">
                      Topic Progress
                    </h4>
                  </div>
                  <span className="text-[12.5px] font-bold text-[#1E293B] tabular-nums">
                    {topicAnsweredCount} / {activeTopicQuestions.length} Answered
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2.5 rounded-full bg-[#EDE9FE] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] transition-all duration-300"
                      style={{ width: `${topicProgressPercent}%` }}
                    />
                  </div>
                  <span className="text-[13px] font-extrabold text-[#6D28D9] tabular-nums shrink-0">
                    {topicProgressPercent}%
                  </span>
                </div>

                {topicSkippedCount > 0 && (
                  <span className="text-[11.5px] font-medium text-slate-500">
                    {topicSkippedCount} question(s) skipped in this topic
                  </span>
                )}
              </div>

              {/* Card 3: Topic Details */}
              <div className="bg-white border border-[#E9E5F5] rounded-2xl p-4 shadow-[0_2px_12px_rgba(109,40,217,0.04)] flex flex-col gap-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Info className="w-4 h-4 text-[#6D28D9]" />
                  <h4 className="text-[14.5px] font-extrabold text-[#111827] m-0">
                    Topic Details
                  </h4>
                </div>

                <div className="flex flex-col gap-2.5 text-[12.5px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#64748B] font-medium shrink-0">Course</span>
                    <span className="font-bold text-[#6D28D9] text-right truncate">
                      {heroTitleRole}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#64748B] font-medium shrink-0">Module</span>
                    <span className="font-bold text-[#6D28D9] text-right truncate">
                      {activeTopic?.sectionTitle || activeModuleSection?.title || '—'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#64748B] font-medium shrink-0">Topic</span>
                    <span className="font-bold text-[#6D28D9] text-right truncate max-w-[165px]">
                      {activeTopic?.topicTitle || '—'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#64748B] font-medium shrink-0">Total Questions</span>
                    <span className="font-extrabold text-[#111827] tabular-nums">
                      {activeTopicQuestions.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#64748B] font-medium shrink-0">Difficulty</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-[11.5px] font-bold border ${
                        activeTopicQ?.difficulty === 'Basic'
                          ? 'bg-amber-50 text-amber-800 border-amber-200/80'
                          : activeTopicQ?.difficulty === 'Core'
                          ? 'bg-sky-50 text-sky-700 border-sky-200/80'
                          : 'bg-purple-50 text-[#6D28D9] border-purple-200/80'
                      }`}
                    >
                      {activeTopicQ?.difficulty || '—'}
                    </span>
                  </div>

                  {/* Latest Attempt Result Quick Link (Per Topic History) */}
                  {activeTopicLatestResult && (
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-[11.5px] font-semibold text-emerald-700">
                        Latest: {activeTopicLatestResult.overallScorePct !== null ? `${activeTopicLatestResult.overallScorePct}%` : 'Completed'}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTopicResult(activeTopicLatestResult);
                          setBankScreenMode('result');
                        }}
                        className="text-[11.5px] font-bold text-[#6D28D9] hover:underline cursor-pointer"
                      >
                        Review Result →
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Card 4: Quick Actions */}
              <div className="bg-white border border-[#E9E5F5] rounded-2xl p-4 shadow-[0_2px_12px_rgba(109,40,217,0.04)] flex flex-col gap-2.5">
                <div className="flex items-center gap-2 mb-0.5">
                  <Zap className="w-4 h-4 text-[#6D28D9]" />
                  <h4 className="text-[14.5px] font-extrabold text-[#111827] m-0">
                    Quick Actions
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2E8F0] hover:border-[#DDD6FE] hover:bg-[#FAF8FF] text-[#1E293B] text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#475569]" />
                  <span>Download Questions (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setScheduleModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#E2E8F0] hover:border-[#DDD6FE] hover:bg-[#FAF8FF] text-[#1E293B] text-[13px] font-semibold transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#475569]" />
                  <span>Schedule Mock Interview</span>
                </button>

                {activeTopicQ && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setShowBankModelAnswer((prev) => !prev);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#F5F2FF] hover:bg-[#EDE9FE] text-[#6D28D9] text-[12.5px] font-bold transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{showBankModelAnswer ? 'Hide Model Answer' : 'View Model Answer'}</span>
                  </button>
                )}
              </div>
                </>
              )}
            </div>
          </div>

          {/* Schedule Modal */}
          {scheduleModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-purple-200 text-slate-900 animate-scaleUp">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-700" />
                    <h3 className="text-base font-black text-slate-900 m-0">Schedule Mock Interview</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setScheduleModalOpen(false);
                      setScheduleSuccess(false);
                    }}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {scheduleSuccess ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-xl font-black">
                      ✓
                    </div>
                    <h4 className="text-base font-bold text-slate-900">Session Confirmed!</h4>
                    <p className="text-xs text-slate-600">
                      Your 1-on-1 AI Interview session with Senior Evaluator Aditi Sharma has been reserved. Check your dashboard for calendar reminders.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setScheduleModalOpen(false);
                        setScheduleSuccess(false);
                      }}
                      className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <div className="py-4 space-y-4">
                    <p className="text-xs text-slate-600 m-0">
                      Select a convenient slot for your executive interview rehearsal with senior AI interviewer Aditi Sharma.
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-700 block">Available Slots:</span>
                      {['Today • 4:00 PM IST', 'Tomorrow • 11:00 AM IST', 'Tomorrow • 3:30 PM IST', 'Saturday • 10:00 AM IST'].map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            setScheduleSuccess(true);
                          }}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50 text-xs font-semibold text-slate-800 flex items-center justify-between transition cursor-pointer"
                        >
                          <span>{slot}</span>
                          <span className="text-purple-600 font-bold">Select →</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ════════════════════════════════════════════════════════════════════════
          VIEW MODE 2: LIVE AI HR INTERVIEW STUDIO (1-ON-1 WITH ADITI SHARMA)
          ════════════════════════════════════════════════════════════════════════ */}
      {viewMode === 'studio' && (
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 py-2.5 flex flex-col gap-3 font-sans select-text animate-fadeIn">
          {/* ── 1. Top Studio Title Strip (Exact Reference Match) ── */}
          <div className="w-full px-1 py-1 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#6D28D9] flex items-center justify-center text-white shadow-xs shrink-0">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900">
                  Interview Preparation Studio
                </span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-slate-600 text-xs sm:text-[13px] font-medium hidden md:inline">
                  Practice real interview questions with AI Interviewer, get feedback and improve your skills.
                </span>
              </div>
            </div>

            {/* Track Selector Dropdown Pill */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsStudioTrackDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-900 font-semibold text-xs shadow-2xs border border-purple-200/90 hover:bg-purple-50/50 transition cursor-pointer"
              >
                <BarChart3 className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>{activeTrack.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-600 transition-transform ${isStudioTrackDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isStudioTrackDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-purple-200 py-1.5 z-30 animate-fadeIn text-slate-800">
                  {Object.values(HR_ROLE_TRACKS).map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => {
                        handleSelectRole(t.key);
                        setIsStudioTrackDropdownOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-purple-50 transition cursor-pointer ${
                        selectedRole === t.key ? 'text-[#6D28D9] bg-purple-50/70' : 'text-slate-700'
                      }`}
                    >
                      <span>{t.label}</span>
                      {selectedRole === t.key && <Check className="w-3.5 h-3.5 text-[#6D28D9]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── 2. Studio Session Navigation Bar (Exact Reference Match) ── */}
          <div className="w-full px-3 py-2 bg-white rounded-2xl border border-purple-100/90 shadow-2xs flex items-center justify-between flex-wrap gap-2.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  NavigationService.silenceAllAudio();
                  setViewMode('bank');
                }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs font-semibold shadow-2xs transition cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Master Question Bank</span>
              </button>

              <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-600">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">Practicing:</span>
                <span className="text-[#6D28D9] font-bold">
                  Sec {selectedMasterQuestion?.sectionCode || '01'} - {selectedMasterQuestion?.sectionTitle || effectiveQuestion.categoryLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-mono text-purple-900 font-semibold text-xs bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span>
                  {Math.floor(sessionSecondsLeft / 60)}:{String(sessionSecondsLeft % 60).padStart(2, '0')} Left
                </span>
              </div>

              <span className="text-slate-200 hidden sm:inline">|</span>

              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  NavigationService.silenceAllAudio();
                  if (onBack) onBack();
                  else if (typeof window !== 'undefined') window.location.hash = '#dashboard';
                }}
                className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold text-rose-600 hover:text-rose-700 hover:bg-rose-50 border border-rose-200 transition cursor-pointer"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                <span>Exit Studio</span>
              </button>
            </div>
          </div>

          {/* ── 3. Main 2-Column Workspace (Left: 45% | Right: 55%) ── */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 items-start">
            {/* ══ LEFT COLUMN (45%): Unified Video + Live Question Card & 2x2 Prep Support ══ */}
            <div className="w-full lg:w-[45%] flex flex-col gap-4">
              {/* Card 1: White Unified Video + Live Question Pod */}
              <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-xs p-4 flex flex-col gap-3.5">
                {/* Side-by-Side Videos (Cleaner Camera Panel Proportions & Controls) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* AI Interviewer Video Tile */}
                  <div
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-900 border transition-all duration-300 shadow-2xs ${
                      speechState === 'speaking'
                        ? 'border-[#7C3AED] ring-2 ring-purple-400/40'
                        : 'border-[#E9E5F5]'
                    }`}
                  >
                    <StableMouthLipSyncAvatar
                      imageUrl="/images/hr_interviewer_futureit_neha.jpg"
                      isSpeaking={speechState === 'speaking'}
                      speakingText={spokenSubtitle || effectiveQuestion.questionEn}
                      speakingRate={1.0}
                      gender="female"
                      isLipSyncEnabled={true}
                      hideInternalBadge={true}
                      className="w-full h-full object-cover"
                    />

                    {/* Top-Left AI Interviewer Pill */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#6D28D9]/95 backdrop-blur-md text-white text-[11px] font-semibold shadow-xs">
                      <Volume2 className="w-3 h-3" />
                      <span>AI Interviewer</span>
                    </div>

                    {/* Top-Right Live Badge */}
                    <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                      <span>Live</span>
                    </div>

                    {/* Bottom-Left Aditi Sharma Badge */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 flex items-center gap-2 px-2.5 py-1 rounded-xl bg-black/70 backdrop-blur-md text-white border border-white/10">
                      <div className="w-5.5 h-5.5 rounded-full bg-[#7C3AED] flex items-center justify-center text-white shrink-0">
                        <UserCheck className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex flex-col leading-tight text-left">
                        <span className="text-[11.5px] font-bold text-white">Aditi Sharma</span>
                        <span className="text-[10px] text-slate-200 font-normal leading-none mt-0.5">Senior HR Interviewer</span>
                      </div>
                    </div>
                  </div>

                  {/* Student Camera Tile ("You") */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-gradient-to-br from-[#1E1B4B] via-slate-900 to-[#312E81] border border-[#E9E5F5] shadow-2xs">
                    {cameraEnabled ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover scale-x-[-1]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 px-3 pb-7 text-center">
                        <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center mb-2">
                          <Camera className="w-5 h-5 text-purple-200" />
                        </div>
                        <span className="text-xs font-semibold text-white">Camera Paused</span>
                        <span className="text-[11px] text-slate-300 mt-0.5">Click camera icon below to turn on</span>
                      </div>
                    )}

                    {/* Top-Left You Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold">
                      <Video className="w-3 h-3" />
                      <span>You</span>
                    </div>

                    {/* Bottom-Center Grouped Glass Control Pill */}
                    <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center z-10">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 shadow-sm">
                        <button
                          type="button"
                          onClick={toggleListening}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer ${
                            isListening
                              ? 'bg-rose-500 text-white animate-pulse'
                              : 'bg-white/15 hover:bg-white/25 text-white'
                          }`}
                          title={isListening ? 'Stop Speaking' : 'Start Speaking'}
                          aria-label={isListening ? 'Stop Speaking' : 'Start Speaking'}
                        >
                          <Mic className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            soundEffects.playClick();
                            setCameraEnabled((prev) => !prev);
                          }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer ${
                            cameraEnabled
                              ? 'bg-white/15 hover:bg-white/25 text-white'
                              : 'bg-rose-500 hover:bg-rose-600 text-white'
                          }`}
                          title={cameraEnabled ? 'Disable Camera' : 'Enable Camera'}
                          aria-label={cameraEnabled ? 'Disable Camera' : 'Enable Camera'}
                        >
                          <Camera className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => speakQuestionAloud(effectiveQuestion.questionEn)}
                          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/15 hover:bg-white/25 text-white transition cursor-pointer"
                          title="Repeat Question Audio"
                          aria-label="Repeat Question Audio"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Integrated Bottom Strip: Interviewer Question (Live) + Waveform + Replay */}
                <div className="bg-[#F6F3FF] rounded-xl border border-[#E9E5F5] px-4 py-3 flex items-center justify-between gap-3.5">
                  <div className="flex items-start gap-3 min-w-0">
                    <MessageSquare className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#6D28D9] leading-tight">
                        Interviewer Question (Live)
                      </div>
                      <div className="text-sm font-bold text-[#111827] leading-snug line-clamp-2 mt-0.5">
                        {effectiveQuestion.questionEn}
                      </div>
                    </div>
                  </div>

                  {/* Audio Waveform + Replay Icon */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <div className="flex items-center gap-[2.5px] h-5" aria-hidden="true">
                      {[6, 12, 8, 18, 11, 16, 7, 13, 9, 5].map((h, i) => (
                        <span
                          key={i}
                          className={`w-[2.5px] rounded-full bg-[#7C3AED] transition-all duration-200 ${
                            speechState === 'speaking' ? 'animate-pulse opacity-100' : 'opacity-65'
                          }`}
                          style={{
                            height: `${speechState === 'speaking' ? Math.min(20, h + ((i % 3) * 3)) : h}px`,
                            animationDelay: `${i * 75}ms`,
                          }}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playClick();
                        speakQuestionAloud(effectiveQuestion.questionEn);
                      }}
                      className="w-8.5 h-8.5 rounded-full bg-white hover:bg-purple-100 border border-purple-200/80 text-[#6D28D9] flex items-center justify-center transition cursor-pointer shrink-0 shadow-2xs"
                      title="Replay Question Audio"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Preparation Support (2x2 Horizontal Cards — Improved Text & Spacing) */}
              <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-xs p-4 sm:p-5 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#6D28D9]">
                    <Layers className="w-4 h-4 text-[#6D28D9]" />
                    <span>Preparation Support</span>
                  </div>
                  <span className="text-xs font-medium text-[#64748B]">Quick Learning Tools</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* 1. View Answer */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setIsStudioBenchmarkOpen(true);
                      const el = document.getElementById('studio-benchmark-answer-card');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-3 rounded-xl border border-[#E9E5F5] bg-[#FAF8FF] hover:bg-purple-50 text-left transition cursor-pointer flex items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <BookOpen className="w-5 h-5 text-[#6D28D9] shrink-0" />
                      <div className="min-w-0">
                        <div className="font-bold text-[13.5px] text-[#111827] leading-tight">View Answer</div>
                        <div className="text-xs text-[#64748B] font-normal leading-snug mt-0.5 truncate">
                          Simple &amp; Easy to Learn
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6D28D9] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* 2. Model Answer */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setIsStudioBenchmarkOpen(true);
                      const el = document.getElementById('studio-benchmark-answer-card');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-3 rounded-xl border border-[#E9E5F5] bg-[#FAF8FF] hover:bg-purple-50 text-left transition cursor-pointer flex items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Award className="w-5 h-5 text-[#6D28D9] shrink-0" />
                      <div className="min-w-0">
                        <div className="font-bold text-[13.5px] text-[#111827] leading-tight">Model Answer</div>
                        <div className="text-xs text-[#64748B] font-normal leading-snug mt-0.5 truncate">
                          Ideal Interview Response
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6D28D9] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* 3. Short Explanation */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      speakQuestionAloud(effectiveQuestion.hintEn || effectiveQuestion.questionEn);
                    }}
                    className="px-4 py-3 rounded-xl border border-[#E9E5F5] bg-[#FAF8FF] hover:bg-purple-50 text-left transition cursor-pointer flex items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Play className="w-5 h-5 text-[#6D28D9] shrink-0" />
                      <div className="min-w-0">
                        <div className="font-bold text-[13.5px] text-[#111827] leading-tight">Short Explanation</div>
                        <div className="text-xs text-[#64748B] font-normal leading-snug mt-0.5 truncate">
                          Quick Concept Revise
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6D28D9] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* 4. Related Questions */}
                  <button
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      handleNextQuestion();
                    }}
                    className="px-4 py-3 rounded-xl border border-[#E9E5F5] bg-[#FAF8FF] hover:bg-purple-50 text-left transition cursor-pointer flex items-center justify-between gap-2.5 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <LayoutGrid className="w-5 h-5 text-[#6D28D9] shrink-0" />
                      <div className="min-w-0">
                        <div className="font-bold text-[13.5px] text-[#111827] leading-tight">Related Questions</div>
                        <div className="text-xs text-[#64748B] font-normal leading-snug mt-0.5 truncate">
                          Practice More
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6D28D9] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* ══ RIGHT COLUMN (55%): Interview Result Card OR Active Question Workspace ══ */}
            <div className="w-full lg:w-[55%] flex flex-col gap-4">
              {currentEvaluation ? (
                /* ══ INTERVIEW RESULT CARD (Exact Reference Match) ══ */
                (() => {
                  const isPassed = currentEvaluation.score > 7;
                  const radius = 48;
                  const circumference = 2 * Math.PI * radius;
                  const progressOffset = circumference - (currentEvaluation.score / 10) * circumference;
                  const ringColor = isPassed ? '#16A34A' : '#E11D48';

                  return (
                    <div className="bg-white rounded-2xl border border-purple-100/90 shadow-sm overflow-hidden animate-fadeIn">
                      {/* 1. Purple Gradient Header */}
                      <div className="bg-gradient-to-r from-[#5B21B6] via-[#6D28D9] to-[#7C3AED] px-5 py-3.5 flex items-center justify-between gap-3 flex-wrap text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                            <Trophy className="w-5 h-5 text-amber-300" />
                          </div>
                          <div>
                            <h2 className="text-base sm:text-lg font-bold tracking-tight leading-tight m-0 text-white">
                              Interview Result
                            </h2>
                            <p className="text-[11.5px] text-purple-100 font-normal m-0 mt-0.5">
                              Your answer has been evaluated by AI Interviewer
                            </p>
                          </div>
                        </div>

                        <div className="px-3 py-1 rounded-full bg-white text-slate-800 text-[11px] font-semibold shadow-2xs flex items-center gap-1.5">
                          <span className="font-bold text-[#6D28D9]">
                            Q#{selectedMasterQuestion?.qNum || String(currentQIdx + 1).padStart(3, '0')}
                          </span>
                          <span className="text-slate-300">|</span>
                          <span className="truncate max-w-[200px]">
                            Sec {selectedMasterQuestion?.sectionCode || '01'} - {selectedMasterQuestion?.sectionTitle || effectiveQuestion.categoryLabel}
                          </span>
                        </div>
                      </div>

                      {/* 2. Score Ring + Verdict + Passing Rule */}
                      <div className="px-5 py-4 flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
                        {/* Circular SVG Score Donut */}
                        <div className="relative w-[116px] h-[116px] shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 116 116">
                            <circle
                              cx="58"
                              cy="58"
                              r={radius}
                              fill="none"
                              stroke="#E2E8F0"
                              strokeWidth="9.5"
                            />
                            <circle
                              cx="58"
                              cy="58"
                              r={radius}
                              fill="none"
                              stroke={ringColor}
                              strokeWidth="9.5"
                              strokeLinecap="round"
                              strokeDasharray={circumference}
                              strokeDashoffset={progressOffset}
                              className="transition-all duration-700 ease-out"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-[28px] font-black text-slate-900 leading-none tabular-nums">
                              {currentEvaluation.score}
                            </span>
                            <span className="text-xs font-semibold text-slate-400 mt-0.5">/10</span>
                          </div>
                        </div>

                        {/* Verdict Details */}
                        <div className="flex-1 text-center sm:text-left space-y-1.5">
                          <div className="flex items-center justify-center sm:justify-start gap-2">
                            {isPassed ? (
                              <>
                                <CheckCircle2 className="w-7 h-7 text-[#16A34A] fill-emerald-100 shrink-0" />
                                <span className="text-2xl sm:text-[28px] font-black tracking-tight text-[#16A34A] leading-none">
                                  PASSED
                                </span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-7 h-7 text-rose-600 fill-rose-100 shrink-0" />
                                <span className="text-xl sm:text-2xl font-black tracking-tight text-rose-600 leading-none">
                                  FAILED — Try Again
                                </span>
                              </>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm font-semibold text-slate-700 m-0">
                            {currentEvaluation.summary}
                          </p>

                          <div
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[11.5px] font-medium mt-1 ${
                              isPassed
                                ? 'bg-emerald-50 border-emerald-200/80 text-emerald-800'
                                : 'bg-rose-50 border-rose-200/80 text-rose-800'
                            }`}
                          >
                            {isPassed ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            ) : (
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            )}
                            <span>
                              <strong>Rule:</strong> Score above 7/10 to Pass (7/10 or below = Fail — Try Again).
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 3. 4-Column Competency Breakdown */}
                      <div className="px-5 pb-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {currentEvaluation.competencies.map((c, i) => {
                          const barColor =
                            c.score > 7 ? 'bg-[#16A34A]' : c.score >= 6 ? 'bg-amber-500' : 'bg-rose-500';
                          const textColor =
                            c.score > 7 ? 'text-[#16A34A]' : c.score >= 6 ? 'text-amber-600' : 'text-rose-600';
                          return (
                            <div
                              key={i}
                              className="p-2.5 rounded-xl bg-white border border-purple-100/90 shadow-2xs flex flex-col justify-between gap-2"
                            >
                              <div className="flex items-start gap-1.5">
                                <span className="w-5 h-5 rounded-md bg-purple-50 text-[#6D28D9] flex items-center justify-center shrink-0 mt-0.5">
                                  {i === 0 && <Target className="w-3 h-3" />}
                                  {i === 1 && <Layers className="w-3 h-3" />}
                                  {i === 2 && <Award className="w-3 h-3" />}
                                  {i === 3 && <UserCheck className="w-3 h-3" />}
                                </span>
                                <span className="text-[11px] font-bold text-slate-800 leading-tight">
                                  {c.label}
                                </span>
                              </div>
                              <div>
                                <div className="text-right text-xs font-bold tabular-nums mb-1">
                                  <span className={textColor}>{c.score}</span>
                                  <span className="text-slate-400 font-medium">/10</span>
                                </div>
                                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                                    style={{ width: `${(c.score / 10) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* 4. 2-Column Feedback: Key Strengths & Areas for Improvement */}
                      <div className="px-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Key Strengths */}
                        <div className="rounded-xl bg-[#F0FDF4] border border-emerald-200/80 p-4 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-[13.5px] font-bold text-emerald-700">
                            <ThumbsUp className="w-4 h-4 text-emerald-600" />
                            <span>Key Strengths</span>
                          </div>
                          <ul className="space-y-2 m-0 p-0 list-none">
                            {currentEvaluation.strengths.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[13px] text-slate-700 leading-relaxed">
                                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Areas for Improvement */}
                        <div className="rounded-xl bg-[#FFFBEB] border border-amber-200/80 p-4 space-y-2.5">
                          <div className="flex items-center gap-1.5 text-[13.5px] font-bold text-amber-700">
                            <Target className="w-4 h-4 text-amber-600" />
                            <span>Areas for Improvement</span>
                          </div>
                          <ul className="space-y-2 m-0 p-0 list-none">
                            {currentEvaluation.improvements.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[13px] text-slate-700 leading-relaxed">
                                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Optional Expandable Review Your Answer Drawer */}
                      {showReviewAnswer && (
                        <div className="mx-5 mb-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-700 animate-fadeIn">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-semibold text-slate-900">Your Submitted Response</span>
                            <span className="text-[11px] text-slate-400 tabular-nums">
                              {currentEvaluation.submittedAnswer.split(/\s+/).filter(Boolean).length} words
                            </span>
                          </div>
                          <p className="m-0 leading-relaxed whitespace-pre-wrap text-slate-600">
                            {currentEvaluation.submittedAnswer}
                          </p>
                        </div>
                      )}

                      {/* 5. Bottom Action Buttons Bar */}
                      <div className="px-5 pb-4 pt-1 flex items-center justify-between gap-2.5 flex-wrap border-t border-slate-100">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <button
                            type="button"
                            onClick={handleNextQuestion}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white text-xs sm:text-[13px] font-semibold shadow-xs transition cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Try Next Question</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              soundEffects.playClick();
                              setShowReviewAnswer((prev) => !prev);
                            }}
                            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs sm:text-[13px] font-semibold transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          >
                            <FileText className="w-3.5 h-3.5 text-[#6D28D9]" />
                            <span>{showReviewAnswer ? 'Hide Your Answer' : 'Review Your Answer'}</span>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={handleTryAgain}
                          className={`px-4 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold transition cursor-pointer flex items-center gap-1.5 border ${
                            !isPassed
                              ? 'bg-rose-600 hover:bg-rose-700 text-white border-rose-600 shadow-xs'
                              : 'bg-[#FAF8FF] hover:bg-purple-50 text-[#6D28D9] border-purple-200'
                          }`}
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Try Again</span>
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <>
                  {/* Card 1: Question Details & Key Traits */}
                  <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-xs p-5 space-y-3.5">
                    {/* Top Row: Q# pill | Section | Timer pill */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className="px-3 py-0.5 rounded-full bg-[#6D28D9] text-white text-xs font-bold">
                          Q#{selectedMasterQuestion?.qNum || String(currentQIdx + 1).padStart(3, '0')}
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-[13px] font-semibold text-[#111827]">
                          Sec {selectedMasterQuestion?.sectionCode || '01'} - {selectedMasterQuestion?.sectionTitle || effectiveQuestion.categoryLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-semibold font-mono text-purple-900 bg-[#F5F3FF] px-3 py-1 rounded-full border border-[#E9E5F5]">
                        <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
                        <span>
                          {String(Math.floor(answerElapsedSeconds / 60)).padStart(2, '0')}:
                          {String(answerElapsedSeconds % 60).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Question Heading */}
                    <h2 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight leading-snug m-0">
                      {effectiveQuestion.questionEn}
                    </h2>

                    {/* View HR Guidance & Tips Pill */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setIsStudioGuidanceOpen((prev) => !prev)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F5F3FF] hover:bg-purple-100/80 text-xs sm:text-[13px] font-semibold text-[#6D28D9] transition cursor-pointer"
                      >
                        <Play className={`w-2.5 h-2.5 fill-[#6D28D9] transition-transform ${isStudioGuidanceOpen ? 'rotate-90' : ''}`} />
                        <span>View HR Guidance &amp; Tips</span>
                      </button>
                      {isStudioGuidanceOpen && (
                        <div className="mt-2.5 p-3.5 rounded-xl bg-[#FAF8FF] border border-[#E9E5F5] text-[13px] text-slate-700 leading-relaxed animate-fadeIn">
                          <span className="font-semibold text-[#5B21B6]">Senior HR Evaluator Aditi Sharma: </span>
                          {effectiveQuestion.hintEn || 'Structure your answer with a direct definition, mention real business metrics, and provide a practical enterprise example.'}
                        </div>
                      )}
                    </div>

                    {/* Key Traits Row */}
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      <span className="text-xs sm:text-[13px] font-semibold text-[#111827] flex items-center gap-1.5 mr-1">
                        <Target className="w-3.5 h-3.5 text-[#6D28D9]" />
                        <span>Key Traits:</span>
                      </span>
                      {(effectiveQuestion.keyTraits && effectiveQuestion.keyTraits.length > 0
                        ? effectiveQuestion.keyTraits.slice(0, 4)
                        : ['Collection & Cleaning', 'Pattern Discovery', 'Actionable Insights', 'Informed Decision']
                      ).map((trait, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#F7F4FF] text-[#4C1D95] border border-[#E9E5F5] flex items-center gap-1.5"
                        >
                          {idx === 0 && <Database className="w-3 h-3 text-[#6D28D9]" />}
                          {idx === 1 && <BarChart3 className="w-3 h-3 text-[#6D28D9]" />}
                          {idx === 2 && <Lightbulb className="w-3 h-3 text-amber-500" />}
                          {idx === 3 && <Target className="w-3 h-3 text-[#6D28D9]" />}
                          <span>{trait}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card 2: Separate Your Response White Card */}
                  <div className="bg-white rounded-2xl border border-[#E9E5F5] shadow-xs p-5">
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[15px] font-bold text-[#111827]">
                          <Edit3 className="w-4 h-4 text-[#6D28D9]" />
                          <span>Your Response</span>
                        </div>
                        <span className="text-xs font-medium text-[#64748B] tabular-nums">
                          {confirmedAnswer.split(/\s+/).filter(Boolean).length} / 1000 words
                        </span>
                      </div>

                      <div className="relative">
                        <textarea
                          value={confirmedAnswer}
                          onChange={(e) => {
                            setConfirmedAnswer(e.target.value);
                            setSttError(null);
                          }}
                          placeholder='Speak your answer (Click "Start Speaking") or type directly here...'
                          className="w-full min-h-[135px] h-[145px] p-4 rounded-xl border border-[#E9E5F5] bg-[#FCFBFF] focus:bg-white text-[#111827] text-[14.5px] placeholder:text-slate-400 leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-[#6D28D9] transition resize-y font-normal"
                        />
                        {isListening && (
                          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[11px] font-semibold animate-pulse shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                            <span>Listening live...</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons Row */}
                      <div className="flex items-center justify-between gap-2.5 pt-0.5 flex-wrap">
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={toggleListening}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold flex items-center gap-2 shadow-2xs transition cursor-pointer ${
                              isListening
                                ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                                : 'bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] hover:from-[#5B21B6] hover:to-[#6D28D9] text-white'
                            }`}
                          >
                            <Mic className="w-3.5 h-3.5" />
                            <span>{isListening ? 'Stop Speaking' : 'Start Speaking'}</span>
                          </button>

                          <button
                            type="button"
                            onClick={handleInsertExample}
                            className="px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 transition cursor-pointer flex items-center gap-1.5 shadow-2xs"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                            <span>Insert Example</span>
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={handleSubmitAnswer}
                          disabled={!confirmedAnswer.trim()}
                          className="px-5 py-2 rounded-xl text-xs sm:text-[13px] font-semibold bg-[#16A34A] hover:bg-[#15803D] disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-2xs transition cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Submit Answer</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Slim View Benchmark HR Model Answer Bar */}
                  <div id="studio-benchmark-answer-card" className="bg-white rounded-2xl border border-purple-100/90 shadow-2xs p-2 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setIsStudioBenchmarkOpen((prev) => !prev)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F4FF] hover:bg-purple-100/70 flex items-center justify-between text-left transition cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <BarChart3 className="w-4 h-4 text-[#6D28D9]" />
                        <span className="font-bold text-sm text-slate-900">
                          View Benchmark HR Model Answer
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#6D28D9] transition-transform ${isStudioBenchmarkOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded Universal Interview Answer System */}
                    {isStudioBenchmarkOpen && (
                      <div className="p-3 pt-2 animate-fadeIn">
                        <UniversalInterviewAnswerCard
                          question={selectedMasterQuestion || effectiveQuestion}
                          roleKey={selectedRole}
                          isOpen={true}
                          onToggle={() => setIsStudioBenchmarkOpen(false)}
                          onPracticeWithAi={() => {
                            soundEffects.playClick();
                            const el = document.querySelector('textarea');
                            if (el) el.focus();
                          }}
                        />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DedicatedHrRoundRoom;
