import React, { useState } from 'react';
import './RealProjectsCompanySection.css';
import { 
  Folder, 
  ArrowRight, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  Zap, 
  Sparkles, 
  Star, 
  ShoppingCart, 
  Play, 
  Database, 
  GraduationCap, 
  X,
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Building2,
  MapPin,
  Search,
  Award,
  FileCheck,
  Volume2,
  Briefcase,
  ShieldCheck,
  Check,
  Quote,
  Pause
} from 'lucide-react';
import { 
  IconPython, 
  IconSQL, 
  IconPowerBI, 
  IconExcel 
} from './FutureIcons';
import { useThemeAccent } from '../../context/ThemeAccentContext';

export interface ProjectDetail {
  id: string;
  company: 'amazon' | 'google' | 'microsoft' | 'netflix';
  companyName: string;
  title: string;
  badgeType: 'amber' | 'blue' | 'green' | 'red';
  cardClass: string;
  image: string;
  category: string;
  techStack: string[];
  description: string;
  keyOutcomes: string[];
  kpis: { label: string; value: string }[];
}

export interface LearnerSuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  track: 'data-analyst' | 'data-science' | 'ml-engineering' | 'ai-engineering' | 'business-analyst';
  trackLabel: string;
  avatar: string;
  rating: number;
  previousSalary: string;
  placedSalary: string;
  hikePercent: string;
  quote: string;
  detailedStory: string;
  background: string;
  projectsBuilt: string[];
  skills: string[];
  offerLetterRef: string;
  interviewTip: string;
  isMaangOrTopTier?: boolean;
  audioDuration: string;
}

interface ProjectsAndSuccessStoriesSectionProps {
  onSelectProject?: (project: ProjectDetail) => void;
  onViewAllProjects?: () => void;
}

export const ProjectsAndSuccessStoriesSection: React.FC<ProjectsAndSuccessStoriesSectionProps> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  const { playHover, playClick } = useThemeAccent();
  const [activeProject, setActiveProject] = useState<ProjectDetail | null>(null);

  const projects: ProjectDetail[] = [
    {
      id: 'proj-amazon',
      company: 'amazon',
      companyName: 'Amazon',
      title: 'Amazon-Style E-commerce Project',
      badgeType: 'amber',
      cardClass: 'card-amazon',
      image: '/images/project-amazon-laptop.jpg',
      category: 'E-commerce & Retail Intelligence',
      techStack: ['Python', 'SQL', 'Power BI', 'Excel'],
      description: 'Analyze millions of transactions, customer checkout baskets, and seasonal purchasing cycles to optimize product margins and inventory turnaround.',
      keyOutcomes: [
        'Built full dynamic Sales Trend & Revenue Breakdown dashboards in Power BI',
        'Engineered Market Basket association rules to recommend cross-sell bundles',
        'Forecasted regional demand patterns to reduce inventory stockouts by 28%'
      ],
      kpis: [
        { label: 'Total Revenue', value: '$148.5K' },
        { label: 'Units Sold', value: '3,245' },
        { label: 'Avg Order Value', value: '$45.76' },
        { label: 'Conversion Rate', value: '2.1%' }
      ]
    },
    {
      id: 'proj-google',
      company: 'google',
      companyName: 'Google',
      title: 'Google-Style Marketing Project',
      badgeType: 'blue',
      cardClass: 'card-google',
      image: '/images/project-google-laptop.jpg',
      category: 'Digital Ads & Performance Marketing',
      techStack: ['SQL', 'Python', 'Google BigQuery', 'Power BI'],
      description: 'Track multi-channel ad attribution, CPC efficiency, and audience conversion funnels across search, display, and video inventory.',
      keyOutcomes: [
        'Designed real-time ad performance monitor tracking 4.8M impressions',
        'Optimized ROAS by identifying high-performing device segments (68% Mobile)',
        'Built automated anomaly detection for cost-per-click spikes across keywords'
      ],
      kpis: [
        { label: 'Impressions', value: '4.8M' },
        { label: 'Clicks', value: '215K' },
        { label: 'Ad Spend', value: '$14.5K' },
        { label: 'Conversions', value: '18.2K' }
      ]
    },
    {
      id: 'proj-microsoft',
      company: 'microsoft',
      companyName: 'Microsoft',
      title: 'Microsoft-Style Business Analytics Project',
      badgeType: 'green',
      cardClass: 'card-microsoft',
      image: '/images/project-microsoft-laptop.jpg',
      category: 'Executive Operations & Financial Intelligence',
      techStack: ['Power BI', 'Advanced DAX', 'SQL Server', 'Excel'],
      description: 'Construct enterprise-grade executive cockpits monitoring P&L variance, regional revenue growth, and operational expenditure across enterprise business units.',
      keyOutcomes: [
        'Developed executive financial dashboard monitoring $84.2M gross revenue',
        'Implemented dynamic DAX measures for year-over-year profit margin variances',
        'Consolidated 12 country databases into a unified Star Schema data model'
      ],
      kpis: [
        { label: 'Gross Revenue', value: '$84.2M' },
        { label: 'Net Profit', value: '$16.5M' },
        { label: 'Sales Target', value: '94%' },
        { label: 'New Customers', value: '1,420' }
      ]
    },
    {
      id: 'proj-netflix',
      company: 'netflix',
      companyName: 'Netflix',
      title: 'Netflix-Style Content Analytics Project',
      badgeType: 'red',
      cardClass: 'card-netflix',
      image: '/images/project-netflix-laptop.jpg',
      category: 'Streaming Media & Audience Retention',
      techStack: ['Python', 'SQL', 'GenAI', 'Tableau'],
      description: 'Model streaming viewer retention, binge-watching drop-off rates across episodes, and AI-driven genre recommendation clustering.',
      keyOutcomes: [
        'Analyzed 124M watch-time hours and concurrent viewer peak behavior',
        'Pinpointed episode churn thresholds to increase multi-season renewal rates',
        'Leveraged GenAI to cluster viewer taste groups across Drama, Sci-Fi, and Comedy'
      ],
      kpis: [
        { label: 'Watch Time', value: '124M hrs' },
        { label: 'Total Views', value: '1.2M' },
        { label: 'Peak Concurrent', value: '450K' },
        { label: 'Ep. Retention', value: '94%' }
      ]
    },
  ];

  // ================= 12 VERIFIED PLACED LEARNERS DATASET =================


  const [activeStory, setActiveStory] = useState<LearnerSuccessStory | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'ltr' | 'rtl'>('ltr');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const placedLearners: LearnerSuccessStory[] = [
    {
      id: 'story-neha',
      name: 'Neha Singh',
      role: 'Data Analyst',
      company: 'Accenture',
      location: 'Mumbai, India',
      track: 'data-analyst',
      trackLabel: 'Data Analyst with GenAI',
      avatar: '/images/avatar-neha.jpg',
      rating: 5.0,
      previousSalary: '₹3.2 LPA',
      placedSalary: '₹9.8 LPA',
      hikePercent: '+206% Hike',
      quote: 'The hands-on projects and 1-on-1 AI mock interviews gave me the exact skills and confidence to clear Accenture on my first try.',
      detailedStory: 'Coming from a non-technical customer support role, coding in SQL and Python initially felt intimidating. Future.AI broke down data analytics step-by-step with real-life e-commerce and retail projects. Within 16 weeks, I mastered Power BI dashboards and end-to-end SQL queries, cracking an offer with more than triple my previous salary.',
      background: 'Ex-Support Associate (Non-Tech) ➔ Data Analyst',
      projectsBuilt: ['Executive Sales & Customer Churn Suite', 'Multi-Store Inventory Turnover Predictor', 'Automated Daily KPI Pipeline'],
      skills: ['Python', 'SQL', 'Power BI', 'Advanced Excel', 'GenAI'],
      offerLetterRef: 'ACC-DA-2024-8921',
      interviewTip: 'Focus deeply on SQL multi-table joins, CTEs, and explaining the business impact behind your Power BI dashboards.',
      audioDuration: '1:45 min',
    },
    {
      id: 'story-aakash',
      name: 'Aakash Sharma',
      role: 'Data Scientist',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      track: 'data-science',
      trackLabel: 'Data Science & Agentic AI',
      avatar: '/images/avatar-rohit.jpg',
      rating: 5.0,
      previousSalary: '₹4.5 LPA',
      placedSalary: '₹24.0 LPA',
      hikePercent: '+433% Hike',
      isMaangOrTopTier: true,
      quote: 'Building real Agentic AI and RAG architectures completely transformed my career trajectory. Placed at Microsoft with a 5x package.',
      detailedStory: 'I was stuck in manual testing for almost 3 years. Future.AI gave me the structured learning path for advanced ML, Vector Databases, and PyTorch that typical bootcamps never teach. The mock interview preparation with senior hiring managers helped me ace Microsoft technical rounds.',
      background: 'QA Tester (3 Yrs Exp) ➔ Data Scientist @ Microsoft',
      projectsBuilt: ['Enterprise Copilot with RAG & Milvus', 'Predictive Azure Cloud Cost Optimization', 'Automated Code Review Agent'],
      skills: ['Python', 'PyTorch', 'LangChain', 'RAG', 'Vector DBs', 'Azure ML'],
      offerLetterRef: 'MSFT-DS-HYD-2024-441',
      interviewTip: 'Understand internal math of gradient boosting, transformers, and vector embeddings rather than just running library functions.',
      audioDuration: '2:15 min',
    },
    {
      id: 'story-pooja',
      name: 'Pooja Patel',
      role: 'AI Engineer',
      company: 'Google Cloud Partner',
      location: 'Bangalore, India',
      track: 'ai-engineering',
      trackLabel: 'AI Engineering',
      avatar: '/images/career-female-student-card.jpg',
      rating: 5.0,
      previousSalary: '₹5.0 LPA',
      placedSalary: '₹22.5 LPA',
      hikePercent: '+350% Hike',
      isMaangOrTopTier: true,
      quote: 'Learning how to fine-tune open-source LLMs and build multi-agent systems made me stand out from thousands of generic applicants.',
      detailedStory: 'Future.AI is the only program that actually teaches production-grade GenAI instead of just simple API wrapper scripts. I deployed scalable LLM pipelines, prompt evaluation frameworks, and LangGraph multi-agent teams that directly impressed Google recruiters.',
      background: 'Junior Backend Developer ➔ AI Engineer',
      projectsBuilt: ['Autonomous Multi-Agent Legal Document Analyzer', 'Fine-Tuned LLaMA-3 Clinical Assistant', 'Semantic Search Engine with Pinecone'],
      skills: ['LLMs', 'LangChain', 'OpenAI', 'Fine-Tuning', 'Vector DBs', 'FastAPI'],
      offerLetterRef: 'GCP-AI-BLR-2024-102',
      interviewTip: 'Show demonstrable production deployments with latency benchmarks and cost-per-query optimization metrics.',
      audioDuration: '2:05 min',
    },
    {
      id: 'story-rohit',
      name: 'Rohit Kumar',
      role: 'Senior Business Analyst',
      company: 'Deloitte',
      location: 'Gurugram, India',
      track: 'business-analyst',
      trackLabel: 'Business Analysis',
      avatar: '/images/avatar-rahul-sharma.jpg',
      rating: 5.0,
      previousSalary: '₹3.8 LPA',
      placedSalary: '₹12.5 LPA',
      hikePercent: '+228% Hike',
      quote: 'The real-world business case studies, BRD workflows, and placement team guidance made transitioning into Deloitte seamless.',
      detailedStory: 'I graduated in commerce and struggled to break into enterprise corporate consulting. Future.AI bridged the gap by training me on real stakeholder communication, SQL reporting, and Jira Agile sprint methodologies. The dedicated placement cell arranged 3 interview rounds within 2 weeks of completion.',
      background: 'B.Com Operations Fresher ➔ Senior Business Analyst',
      projectsBuilt: ['Global Supply Chain Bottleneck Simulation', 'Fintech Loan Disbursal KPI Dashboard', 'Agile BRD & User Story Master Repository'],
      skills: ['SQL', 'Tableau', 'Power BI', 'Agile / Scrum', 'BRD & FRD', 'Excel'],
      offerLetterRef: 'DEL-BA-GGN-2024-651',
      interviewTip: 'Articulate how your analytical insights directly influence top-line revenue growth or bottom-line cost reduction.',
      audioDuration: '1:50 min',
    },
    {
      id: 'story-vikas',
      name: 'Vikas Mehra',
      role: 'ML Engineer',
      company: 'Amazon AWS',
      location: 'Bangalore, India',
      track: 'ml-engineering',
      trackLabel: 'ML Engineering',
      avatar: '/images/why-placed-student.jpg',
      rating: 5.0,
      previousSalary: '₹4.2 LPA',
      placedSalary: '₹21.0 LPA',
      hikePercent: '+400% Hike',
      isMaangOrTopTier: true,
      quote: 'End-to-end MLOps, Docker, and scalable model serving in the curriculum gave me the exact skills Amazon looks for.',
      detailedStory: 'Most courses stop at Jupyter Notebooks. Future.AI taught me model serialization, automated CI/CD pipelines, Docker containerization, and AWS SageMaker deployments. That engineering rigor was exactly what Amazon technical interviewers tested me on.',
      background: 'Data Associate ➔ ML Engineer @ Amazon AWS',
      projectsBuilt: ['Real-Time Fraud Detection with Sub-50ms Latency', 'Automated ML Retraining Pipeline with MLflow', 'Dockerized High-Throughput Recommendation API'],
      skills: ['PyTorch', 'TensorFlow', 'MLOps', 'Docker', 'AWS SageMaker', 'Kubernetes'],
      offerLetterRef: 'AMZN-AWS-BLR-2024-778',
      interviewTip: 'Be prepared for deep system design questions on distributed model training and handling inference memory bottlenecks.',
      audioDuration: '2:20 min',
    },
    {
      id: 'story-ananya',
      name: 'Ananya Deshmukh',
      role: 'Lead Data Analyst',
      company: 'Flipkart',
      location: 'Bangalore, India',
      track: 'data-analyst',
      trackLabel: 'Data Analyst with GenAI',
      avatar: '/images/avatar-sneha.jpg',
      rating: 5.0,
      previousSalary: '₹3.5 LPA',
      placedSalary: '₹14.0 LPA',
      hikePercent: '+300% Hike',
      isMaangOrTopTier: true,
      quote: 'From MIS Excel reports to leading BigQuery data pipelines and GenAI dashboards at Flipkart. Best career decision of my life.',
      detailedStory: 'I spent years doing repetitive Excel manual entries without any career growth. Future.AI taught me how to automate repetitive workflows in Python, write complex SQL window functions, and translate raw data into multi-crore business decisions. Flipkart hired me with a 4x salary jump.',
      background: 'Junior MIS Executive ➔ Lead Data Analyst @ Flipkart',
      projectsBuilt: ['Big Billion Days Real-Time Logistics Monitor', 'Customer Cohort Churn & Lifetime Value Engine', 'GenAI Automated SQL Query Assistant'],
      skills: ['SQL', 'Python', 'Power BI', 'Google BigQuery', 'DAX', 'GenAI'],
      offerLetterRef: 'FLPK-DA-BLR-2024-319',
      interviewTip: 'Master cohort retention curves, CAC vs LTV ratios, and optimizing SQL queries on multi-million row tables.',
      audioDuration: '1:55 min',
    },
    {
      id: 'story-priya',
      name: 'Priya Nair',
      role: 'Growth Analytics Lead',
      company: 'Swiggy',
      location: 'Bangalore, India',
      track: 'data-analyst',
      trackLabel: 'Data Analyst with GenAI',
      avatar: '/images/pcv_hero_student.jpg',
      rating: 5.0,
      previousSalary: '₹3.0 LPA',
      placedSalary: '₹11.2 LPA',
      hikePercent: '+273% Hike',
      quote: 'Hands-on A/B testing and customer segmentation projects helped me crack Swiggy’s demanding analytics case interview.',
      detailedStory: 'Future.AI focused heavily on practical product analytics: funnel conversion, cohort retention, and experiment design. When Swiggy asked me to solve a live case on surge pricing optimization, I used the exact analytical framework I built in my coursework.',
      background: 'Marketing Intern ➔ Growth Analytics Lead @ Swiggy',
      projectsBuilt: ['Food Delivery Surge Pricing Optimization Engine', 'User Journey Drop-off Funnel Analysis', 'Customer Loyalty Churn Matrix'],
      skills: ['SQL', 'Python', 'A/B Testing', 'Tableau', 'Product Analytics', 'Excel'],
      offerLetterRef: 'SWG-ANL-BLR-2024-512',
      interviewTip: 'Always structure your case study using hypothesis-driven problem solving and quantify business trade-offs clearly.',
      audioDuration: '1:40 min',
    },
    {
      id: 'story-aditya',
      name: 'Aditya Joshi',
      role: 'Machine Learning Engineer',
      company: 'Zomato',
      location: 'Gurugram, India',
      track: 'ml-engineering',
      trackLabel: 'ML Engineering',
      avatar: '/images/student_coding_neon_hd.jpg',
      rating: 5.0,
      previousSalary: '₹3.6 LPA',
      placedSalary: '₹13.8 LPA',
      hikePercent: '+283% Hike',
      quote: 'The mentor feedback on code quality and scalable pipeline architecture gave me the edge during technical rounds.',
      detailedStory: 'I completed my engineering from a tier-3 college with zero on-campus placement opportunities. Future.AI gave me access to high-caliber mentors from top tech companies who reviewed my GitHub repositories, debugged my machine learning pipelines, and prepared me for live coding interviews.',
      background: 'Tier-3 Engineering Graduate ➔ ML Engineer @ Zomato',
      projectsBuilt: ['Hyperlocal Delivery ETA Predictor with XGBoost', 'Dynamic Restaurant Recommendation Engine', 'Automated Driver Dispatch Routing Model'],
      skills: ['Python', 'Scikit-Learn', 'Feature Engineering', 'FastAPI', 'PostgreSQL', 'Docker'],
      offerLetterRef: 'ZOM-MLE-GGN-2024-904',
      interviewTip: 'Be ready to write clean, modular, object-oriented Python code on a live shared screen without relying on autofill.',
      audioDuration: '2:10 min',
    },
    {
      id: 'story-rohan',
      name: 'Rohan Gupta',
      role: 'Analytics Engineer',
      company: 'Walmart Global Tech',
      location: 'Bangalore, India',
      track: 'data-science',
      trackLabel: 'Data Science & Agentic AI',
      avatar: '/images/student_interview_laptop.jpg',
      rating: 5.0,
      previousSalary: '₹4.0 LPA',
      placedSalary: '₹18.5 LPA',
      hikePercent: '+362% Hike',
      isMaangOrTopTier: true,
      quote: 'Mastering modern cloud data warehouses like Snowflake alongside Python ETL made me a high-value candidate for Walmart.',
      detailedStory: 'The transition from traditional database querying to modern analytical engineering was completely guided by Future.AI. The course projects mimicked enterprise-scale retail datasets with millions of rows, which gave me immense credibility during executive hiring interviews.',
      background: 'Application Support ➔ Analytics Engineer @ Walmart',
      projectsBuilt: ['Multi-Channel Retail Inventory Forecasting System', 'Real-Time Supplier Performance Tracking Pipeline', 'Automated Anomaly Detection on SKU Pricing'],
      skills: ['SQL', 'Snowflake', 'Python', 'dbt', 'Airflow', 'Tableau'],
      offerLetterRef: 'WMT-ANL-BLR-2024-228',
      interviewTip: 'Highlight how your data models reduce cloud query consumption costs and guarantee idempotency in ETL jobs.',
      audioDuration: '2:00 min',
    },
    {
      id: 'story-sneha',
      name: 'Sneha Verma',
      role: 'Digital Data Specialist',
      company: 'TCS Digital',
      location: 'Noida, India',
      track: 'data-analyst',
      trackLabel: 'Data Analyst with GenAI',
      avatar: '/images/avatar-sneha.jpg',
      rating: 5.0,
      previousSalary: '₹0 LPA',
      placedSalary: '₹8.5 LPA',
      hikePercent: 'Top Fresher Prime Package',
      quote: 'Future.AI helped me clear the prestigious TCS Digital tier examination straight out of college with top honors.',
      detailedStory: 'While most of my college classmates were preparing for standard 3.5 LPA service roles, Future.AI coached me for high-paying advanced digital roles. The combination of Python problem solving, interactive dashboards, and GenAI concepts placed me directly in the top 1% bracket.',
      background: 'College Fresher (B.Tech CSE) ➔ TCS Digital Prime',
      projectsBuilt: ['E-Commerce Market Basket Recommendation Engine', 'Healthcare Patient Readmission Risk Dashboard', 'Automated Financial Ledger Reconciliation'],
      skills: ['Python', 'SQL', 'Excel (Pivot/XLOOKUP)', 'Power BI', 'Statistics'],
      offerLetterRef: 'TCS-DIG-NOI-2024-114',
      interviewTip: 'Demonstrate projects where you solved messy, real-world data problems rather than clean Kaggle datasets.',
      audioDuration: '1:35 min',
    },
    {
      id: 'story-tanvi',
      name: 'Tanvi Kulkarni',
      role: 'BI Reporting Lead',
      company: 'Infosys',
      location: 'Pune, India',
      track: 'data-analyst',
      trackLabel: 'Data Analyst with GenAI',
      avatar: '/images/career-female-student-card.jpg',
      rating: 5.0,
      previousSalary: '₹2.8 LPA',
      placedSalary: '₹8.8 LPA',
      hikePercent: '+214% Hike',
      quote: 'From a non-tech BPO voice role to leading Business Intelligence dashboards at Infosys. Proof that anyone can make this switch.',
      detailedStory: 'Working in night-shift voice support left me exhausted with zero career prospects. Future.AI provided weekend mentorship and self-paced projects that fit around my schedule. The placement counselors polished my resume and conducted mock behavioral rounds until I was 100% interview-ready.',
      background: 'Customer Support (Voice BPO) ➔ BI Reporting Lead',
      projectsBuilt: ['Global Enterprise Attrition & Retention Dashboard', 'Executive KPI Balanced Scorecard', 'Automated Daily Sales Reconciliation Report'],
      skills: ['Power BI', 'Advanced Excel', 'SQL', 'DAX', 'Business Intelligence'],
      offerLetterRef: 'INF-BI-PUN-2024-633',
      interviewTip: 'Walk the interviewer step-by-step through how a business stakeholder interacts with your dashboard to make decisions.',
      audioDuration: '1:45 min',
    },
    {
      id: 'story-siddharth',
      name: 'Siddharth Rao',
      role: 'Python Data Developer',
      company: 'Wipro Technologies',
      location: 'Hyderabad, India',
      track: 'ml-engineering',
      trackLabel: 'ML Engineering',
      avatar: '/images/avatar-rohit.jpg',
      rating: 5.0,
      previousSalary: '₹0 LPA',
      placedSalary: '₹7.5 LPA',
      hikePercent: 'Non-CS Career Switch',
      quote: 'As a mechanical engineering student with no programming background, Future.AI made Python feel intuitive and exciting.',
      detailedStory: 'I had never written a single line of code before joining. The gamified coding missions, instant AI feedback, and real manufacturing telemetry projects helped me build a portfolio that made recruiters completely overlook my non-CS degree.',
      background: 'Mechanical Engineering Graduate ➔ Python Data Developer',
      projectsBuilt: ['Industrial Sensor Anomaly Detection Pipeline', 'Automated Quality Control Image Classifier', 'RESTful API for Machine Telemetry Logging'],
      skills: ['Python', 'Pandas', 'NumPy', 'REST APIs', 'Git', 'PostgreSQL'],
      offerLetterRef: 'WIP-PY-HYD-2024-819',
      interviewTip: 'Own your unique background! Explain how domain curiosity combined with disciplined coding creates an adaptable problem-solver.',
      audioDuration: '1:50 min',
    },
  ];



  const handleToggleAudio = (id: string) => {
    playClick();
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };


  const handleCardClick = (project: ProjectDetail) => {
    playClick();
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setActiveProject(project);
    }
  };

  return (
    <section id="real-projects" className="real-projects-section scroll-mt-14">
      <div className="real-projects-container">
        
        {/* ================= 1. TOP ROW: LEFT COPY + RIGHT HERO VISUAL ================= */}
        <div className="real-projects-top-grid">

          {/* LEFT COLUMN: BADGE + HEADLINE + LOGOS + SUBTITLE */}
          <div className="projects-header-left">
            
            {/* Pill Badge */}
            <div className="project-pill-badge">
              <Folder className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>PROJECT-BASED LEARNING</span>
            </div>

            {/* Headline */}
            <h2 className="projects-main-heading">
              <span className="heading-line-dark">REAL PROJECTS.</span>
              <span className="heading-line-gradient-1">REAL COMPANY</span>
              <span className="heading-line-gradient-2">EXPERIENCE.</span>
            </h2>

            {/* Company Logos Bar */}
            <div className="company-logos-row">
              {/* Amazon */}
              <div className="logo-item-amazon">
                <span>amazon</span>
                <span className="amazon-arrow">⌣</span>
              </div>
              
              <span className="logo-divider">|</span>

              {/* Google */}
              <div className="logo-item-google">
                <span className="g-blue">G</span>
                <span className="g-red">o</span>
                <span className="g-yellow">o</span>
                <span className="g-blue">g</span>
                <span className="g-green">l</span>
                <span className="g-red">e</span>
              </div>

              <span className="logo-divider">|</span>

              {/* Microsoft */}
              <div className="logo-item-microsoft">
                <div className="ms-squares">
                  <div className="ms-red" />
                  <div className="ms-green" />
                  <div className="ms-blue" />
                  <div className="ms-yellow" />
                </div>
                <span>Microsoft</span>
              </div>

              <span className="logo-divider">|</span>

              {/* Netflix */}
              <div className="logo-item-netflix">
                <span>NETFLIX</span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="projects-subtitle">
              Learn by working on real-world projects inspired by top companies.
            </p>

          </div>

          {/* RIGHT COLUMN: HERO VISUAL WITH STUDENT + 3D ROBOT + FLOATING BADGES */}
          <div className="projects-hero-visual-wrapper">
            
            {/* Main AI Generated Photo */}
            <div className="hero-main-photo-card">
              <img 
                src="/images/student-robot-project-hero.jpg" 
                alt="Student learning data analytics with AI robot assistant"
                className="hero-main-photo"
                loading="lazy"
              />
            </div>

            {/* Floating Card 1: Left 4-features list */}
            <div className="floating-features-card">
              <div className="feature-mini-row">
                <div className="mini-icon-circle">
                  <Folder className="w-3 h-3 text-[#0284c7]" />
                </div>
                <span>Top Company Project Experience</span>
              </div>
              <div className="feature-mini-row">
                <div className="mini-icon-circle">
                  <BarChart3 className="w-3 h-3 text-[#0284c7]" />
                </div>
                <span>Hands-on Practice</span>
              </div>
              <div className="feature-mini-row">
                <div className="mini-icon-circle">
                  <Lightbulb className="w-3 h-3 text-[#0284c7]" />
                </div>
                <span>Real Business Scenarios</span>
              </div>
              <div className="feature-mini-row">
                <div className="mini-icon-circle">
                  <Settings className="w-3 h-3 text-[#0284c7]" />
                </div>
                <span>Industry Tools</span>
              </div>
            </div>

            {/* Floating Card 2: Top Right Script Card */}
            <div className="floating-script-card">
              <span>Learn</span>
              <span>Build</span>
              <span>Practice</span>
              <div className="script-grow-row">
                <span>Grow</span>
                <span className="text-emerald-500 font-bold text-lg">↗</span>
              </div>
            </div>

            {/* Floating Card 3: Far Right Tech Stack Column */}
            <div className="floating-tech-column">
              <div className="tech-mini-row">
                <IconPython size={16} />
                <span>Python</span>
              </div>
              <div className="tech-mini-row">
                <IconSQL size={16} />
                <span>SQL</span>
              </div>
              <div className="tech-mini-row">
                <IconPowerBI size={16} />
                <span>Power BI</span>
              </div>
              <div className="tech-mini-row">
                <IconExcel size={16} />
                <span>Excel</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= 2. MIDDLE ROW: 4 COMPANY PROJECT CARDS ================= */}
        <div className="projects-cards-grid">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => handleCardClick(proj)}
              onMouseEnter={playHover}
              className={`project-card ${proj.cardClass}`}
            >
              <div>
                {/* Card Header */}
                <div className="card-header-bar">
                  {/* Left Company Logo */}
                  {proj.company === 'amazon' && (
                    <div className="logo-item-amazon text-[18px]">
                      <span>amazon</span>
                      <span className="amazon-arrow">⌣</span>
                    </div>
                  )}
                  {proj.company === 'google' && (
                    <div className="logo-item-google text-[17px]">
                      <span className="g-blue">G</span>
                      <span className="g-red">o</span>
                      <span className="g-yellow">o</span>
                      <span className="g-blue">g</span>
                      <span className="g-green">l</span>
                      <span className="g-red">e</span>
                    </div>
                  )}
                  {proj.company === 'microsoft' && (
                    <div className="logo-item-microsoft text-[15px]">
                      <div className="ms-squares">
                        <div className="ms-red" />
                        <div className="ms-green" />
                        <div className="ms-blue" />
                        <div className="ms-yellow" />
                      </div>
                      <span>Microsoft</span>
                    </div>
                  )}
                  {proj.company === 'netflix' && (
                    <div className="logo-item-netflix text-[17px]">
                      <span>NETFLIX</span>
                    </div>
                  )}

                  {/* Right Badge Icon */}
                  {proj.badgeType === 'amber' && (
                    <div className="badge-tag-amber">
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {proj.badgeType === 'blue' && (
                    <div className="badge-tag-blue">
                      <BarChart3 className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {proj.badgeType === 'green' && (
                    <div className="badge-tag-green">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                  )}
                  {proj.badgeType === 'red' && (
                    <div className="badge-tag-red">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}
                </div>

                {/* Laptop Mockup Box */}
                <div className="card-laptop-box">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="card-laptop-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-footer-row">
                <span className="card-project-title">{proj.title}</span>
                <button 
                  className="card-arrow-btn"
                  title="Explore Project"
                  aria-label={`Explore ${proj.title}`}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ================= 3. BOTTOM ROW: CTA BUTTON & FEATURE BADGES ================= */}
        <div className="projects-bottom-cta-row">
          
          {/* Left Group */}
          <div className="side-feature-group">
            <div className="bottom-feature-pill">
              <div className="feature-pill-icon icon-emerald">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span>Top Company Inspired Projects</span>
            </div>

            <div className="bottom-feature-pill">
              <div className="feature-pill-icon icon-sky">
                <Database className="w-4 h-4" />
              </div>
              <span>Hands-on Practice</span>
            </div>
          </div>

          {/* Center Main CTA Button with Inward Curved Arrows */}
          <div className="flex items-center gap-3">
            <svg className="cta-left-curved-arrow hidden sm:block" width="30" height="24" viewBox="0 0 30 24" fill="none">
              <path d="M4 4C14 4 24 10 24 20M24 20L18 16M24 20L28 15" stroke="#00b4d8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <button
              onClick={() => {
                playClick();
                if (onViewAllProjects) onViewAllProjects();
              }}
              onMouseEnter={playHover}
              className="main-join-cta-btn group"
            >
              <Zap className="w-4 h-4 fill-white text-white" />
              <span>Join Future.AI Now</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </button>

            <svg className="cta-right-curved-arrow hidden sm:block" width="30" height="24" viewBox="0 0 30 24" fill="none">
              <path d="M26 4C16 4 6 10 6 20M6 20L12 16M6 20L2 15" stroke="#00d2b4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Right Group */}
          <div className="side-feature-group">
            <div className="bottom-feature-pill">
              <div className="feature-pill-icon icon-purple">
                <BarChart3 className="w-4 h-4" />
              </div>
              <span>Real-World Business Scenarios</span>
            </div>

            <div className="bottom-feature-pill">
              <div className="feature-pill-icon icon-pink">
                <Settings className="w-4 h-4" />
              </div>
              <span>Industry Standard Tools</span>
            </div>
          </div>

        </div>

        {/* ================= 4. SUCCESS STORIES TESTIMONIALS (EXPANDED & 100% INTERACTIVE) ================= */}
        <div id="real-success" className="pt-16 mt-8 border-t border-slate-100">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-[11px] font-bold text-sky-600 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                <span>LEARNERS. PLACED. THRIVING.</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Real People. <span className="text-sky-600">Real Success Stories.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                From learners to professionals — hear how Future.AI transformed their career trajectory.
              </p>
            </div>
            
            <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-xs font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>100% Verified Placements</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-bold text-blue-800">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>700+ Hiring Partners</span>
              </div>
            </div>
          </div>

          {/* Controls & Auto-Slide Indicator Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-400" />
              <span>Auto-Sliding Left to Right • Hover anywhere to pause • 12 Verified Placements</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Direction Toggle */}
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setSlideDirection(prev => prev === 'ltr' ? 'rtl' : 'ltr');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer shadow-xs hover:border-sky-300"
                title="Toggle slide direction"
              >
                <span>{slideDirection === 'ltr' ? 'Direction: Left → Right ⏩' : 'Direction: Right → Left ⏪'}</span>
              </button>

              {/* Pause / Resume Button */}
              <button
                type="button"
                onClick={() => {
                  playClick();
                  setIsPaused(prev => !prev);
                }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                  isPaused 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-sky-300'
                }`}
                title="Pause or resume auto sliding"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current text-amber-800" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-slate-700" />
                    <span>Pause</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Automatic Left-to-Right Sliding Track Container */}
          <div className="relative w-full overflow-hidden py-4 -mx-2 sm:-mx-4 px-2 sm:px-4 stories-slider-container group/stories">
            
            {/* Left Gradient Edge Mask for smooth seamless fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAFCFE] via-[#FAFCFE]/80 to-transparent z-10" />
            
            {/* Right Gradient Edge Mask for smooth seamless fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAFCFE] via-[#FAFCFE]/80 to-transparent z-10" />

            {/* Seamless Infinite Sliding Marquee Track */}
            <div 
              className={`flex gap-6 w-max ${
                slideDirection === 'ltr' ? 'animate-stories-ltr' : 'animate-stories-rtl'
              } ${isPaused ? 'stories-slider-paused' : ''}`}
            >
              {[...placedLearners, ...placedLearners].map((story, sIdx) => (
                <div
                  key={`${story.id}-${sIdx}`}
                  onMouseEnter={playHover}
                  className="w-[340px] sm:w-[380px] shrink-0 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white hover:border-sky-300 hover:shadow-[0_16px_40px_rgba(14,165,233,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative select-none"
                >
                  <div>
                    {/* Top Row: Avatar + Name + Placed Company + Rating */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-12 h-12 rounded-2xl object-cover ring-2 ring-sky-100 shadow-sm shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(story.name)}&backgroundColor=0284c7,2563eb`;
                            }}
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white" title="Verified Placement">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="text-sm font-black text-slate-950 leading-tight">
                              {story.name}
                            </h4>
                            {story.isMaangOrTopTier && (
                              <span className="text-[10px] font-black text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                                TOP TIER
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-bold text-slate-600 mt-0.5">
                            {story.role}{' '}
                            <span className="text-sky-600 font-black">@ {story.company}</span>
                          </div>
                          <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{story.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* 5.0 Star Rating */}
                      <div className="flex items-center text-amber-400 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 shrink-0">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-[11px] font-black text-slate-800 ml-1">5.0</span>
                      </div>
                    </div>

                    {/* Salary Transformation Metric Strip */}
                    <div className="mb-3.5 p-2.5 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-sky-50/60 border border-emerald-200/80 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Package Jump</span>
                        <div className="font-extrabold text-slate-800 flex items-center gap-1">
                          <span className="line-through text-slate-400 font-medium">{story.previousSalary}</span>
                          <ArrowRight className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                          <strong className="text-emerald-700 font-black text-sm">{story.placedSalary}</strong>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-black text-[11px] shadow-xs">
                        {story.hikePercent}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs sm:text-[13px] text-slate-600 italic leading-relaxed mb-4 relative pl-4 border-l-2 border-sky-300">
                      "{story.quote}"
                    </p>

                    {/* Skills Mastered Chips */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {story.skills.slice(0, 4).map((skill, kIdx) => (
                        <span
                          key={kIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {story.skills.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-500">
                          +{story.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    {/* Simulated Audio Testimonial Pill */}
                    <button
                      type="button"
                      onClick={() => handleToggleAudio(story.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        playingAudioId === story.id
                          ? 'bg-amber-100 text-amber-800 border border-amber-300 animate-pulse'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title="Listen to student testimonial"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-slate-700" />
                      <span>{playingAudioId === story.id ? 'Playing (Voice)...' : `Listen (${story.audioDuration})`}</span>
                    </button>

                    {/* View Full Career Journey & Offer Button */}
                    <button
                      type="button"
                      onClick={() => { playClick(); setActiveStory(story); }}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-black transition-all cursor-pointer group-hover:bg-sky-600 group-hover:text-white"
                    >
                      <span>View Story &amp; Offer</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* =========================================================================
            DETAILED CAREER JOURNEY & OFFER PROOF MODAL (activeStory)
            ========================================================================= */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-3xl border border-sky-200 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95">
              
              {/* Top Modal Header */}
              <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-sky-50 via-blue-50/50 to-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={activeStory.avatar}
                    alt={activeStory.name}
                    className="w-12 h-12 rounded-2xl object-cover ring-2 ring-sky-200 shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(activeStory.name)}`;
                    }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-slate-950 leading-tight">
                        {activeStory.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black border border-emerald-200">
                        VERIFIED PLACEMENT
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mt-0.5">
                      {activeStory.role} <span className="text-sky-600 font-black">@ {activeStory.company}</span> • {activeStory.location}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
                
                {/* Package Jump Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Career Transformation</span>
                    <strong className="text-slate-800 text-sm sm:text-base font-black">
                      {activeStory.background}
                    </strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-bold block">NEW PACKAGE</span>
                      <span className="text-lg font-black text-emerald-700">{activeStory.placedSalary}</span>
                    </div>
                    <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white font-black text-xs">
                      {activeStory.hikePercent}
                    </span>
                  </div>
                </div>

                {/* Full Transformation Story */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>How Future.AI Changed My Career:</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    "{activeStory.detailedStory}"
                  </p>
                </div>

                {/* Projects Built During Program */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                    <Folder className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Portfolio Projects Built &amp; Presented:</span>
                  </h4>
                  <div className="space-y-2">
                    {activeStory.projectsBuilt.map((proj, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-indigo-50/50 border border-indigo-100 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-800">{proj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interview Tip For Learners */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Tip for Fellow Learners:</span>
                  </h4>
                  <p className="text-slate-700 text-xs leading-relaxed">
                    "{activeStory.interviewTip}"
                  </p>
                </div>

                {/* Verified Offer Letter Proof Badge */}
                <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-300">Verified Institutional Offer Letter</div>
                      <div className="text-xs font-mono font-bold text-emerald-400">{activeStory.offerLetterRef}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Escrow Audited</span>
                </div>

              </div>

              {/* Bottom Footer Actions */}
              <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Future IT Industries Placement Record</span>
                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}


      </div>

      {/* Interactive Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">
              <Folder className="w-3.5 h-3.5" />
              <span>{activeProject.category}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2">
              {activeProject.title}
            </h3>

            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Laptop Preview */}
            <div className="rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-md">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* KPI Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {activeProject.kpis.map((kpi, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-center">
                  <div className="text-lg font-black text-slate-900">{kpi.value}</div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Key Outcomes */}
            <div className="mb-5">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2.5">
                Key Skills & Deliverables
              </h4>
              <ul className="space-y-2">
                {activeProject.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6 pt-1">
              <span className="text-xs font-bold text-slate-500 mr-1">Tools:</span>
              {activeProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setActiveProject(null);
                  if (onViewAllProjects) onViewAllProjects();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-teal-400 shadow-md shadow-sky-500/25 hover:shadow-lg transition-all"
              >
                Start This Project →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
