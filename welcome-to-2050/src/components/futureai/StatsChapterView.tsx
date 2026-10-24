import React, { useState } from 'react';
import {
  ChevronRight, ChevronDown, ChevronUp, Play, Clock, FileText, Gamepad2, Code2, Mic,
  BarChart3, CheckCircle2, BookOpen, FolderKanban, Wrench, ArrowRight, Zap, Award,
  Timer, Bot, Sparkles, Circle, TrendingUp, Percent, Binary
} from 'lucide-react';
import './SqlChapterView.css';

interface Props {
  userName?: string;
  onBack: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenAdvisor?: () => void;
}

type LessonStatus = 'completed' | 'progress' | 'todo';
interface Lesson { title: string; time: string; status: LessonStatus }
interface Chapter {
  id: number;
  title: string;
  desc: string;
  free?: boolean;
  color: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

const STATS_COLOR = '#ec4899';

const STATS_CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'Introduction to Statistics & Data Types',
    free: true,
    color: STATS_COLOR,
    desc: 'Foundations of statistics for data analytics: What Is Statistics, Population vs Sample, Descriptive vs Inferential, Qualitative vs Quantitative, Discrete vs Continuous, and Levels of Measurement.',
    icon: <BarChart3 />,
    lessons: [
      { title: '1.1 What Is Statistics?', time: '06:15', status: 'todo' },
      { title: '1.2 Population vs Sample', time: '07:20', status: 'todo' },
      { title: '1.3 Descriptive vs Inferential Statistics', time: '06:50', status: 'todo' },
      { title: '1.4 Qualitative vs Quantitative Data', time: '07:40', status: 'todo' },
      { title: '1.5 Discrete vs Continuous Data', time: '07:10', status: 'todo' },
      { title: '1.6 Levels of Measurement', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 2,
    title: 'Measures of Central Tendency',
    color: '#d946ef',
    desc: 'Understand the center of data: Mean, Median, Mode, Weighted Mean, Choosing the Right Measure, and Business Examples.',
    icon: <BarChart3 />,
    lessons: [
      { title: '2.1 Mean', time: '07:00', status: 'todo' },
      { title: '2.2 Median', time: '06:50', status: 'todo' },
      { title: '2.3 Mode', time: '06:30', status: 'todo' },
      { title: '2.4 Weighted Mean', time: '07:45', status: 'todo' },
      { title: '2.5 Choosing the Right Measure', time: '08:10', status: 'todo' },
      { title: '2.6 Business Examples', time: '08:40', status: 'todo' },
    ],
  },
  {
    id: 3,
    title: 'Measures of Dispersion & Spread',
    color: '#8b5cf6',
    desc: 'Quantify data variability: Range, Variance, Standard Deviation, Interquartile Range (IQR), Coefficient of Variation (CV), and Comparing Data Variability.',
    icon: <BarChart3 />,
    lessons: [
      { title: '3.1 Range', time: '06:00', status: 'todo' },
      { title: '3.2 Variance', time: '08:15', status: 'todo' },
      { title: '3.3 Standard Deviation', time: '08:45', status: 'todo' },
      { title: '3.4 Interquartile Range (IQR)', time: '07:30', status: 'todo' },
      { title: '3.5 Coefficient of Variation (CV)', time: '08:00', status: 'todo' },
      { title: '3.6 Comparing Data Variability', time: '08:20', status: 'todo' },
    ],
  },
  {
    id: 4,
    title: 'Data Distribution Shapes & Outlier Detection',
    color: '#6366f1',
    desc: 'Shape and anomaly analysis: Frequency Distribution, Histograms, Boxplots, Skewness, Kurtosis, Z-Score, and IQR-Based Outlier Detection.',
    icon: <BarChart3 />,
    lessons: [
      { title: '4.1 Frequency Distribution', time: '06:40', status: 'todo' },
      { title: '4.2 Histograms', time: '07:15', status: 'todo' },
      { title: '4.3 Boxplots', time: '07:30', status: 'todo' },
      { title: '4.4 Skewness', time: '08:10', status: 'todo' },
      { title: '4.5 Kurtosis', time: '07:50', status: 'todo' },
      { title: '4.6 Z-Score', time: '08:20', status: 'todo' },
      { title: '4.7 IQR-Based Outlier Detection', time: '08:50', status: 'todo' },
    ],
  },
  {
    id: 5,
    title: 'Exploratory Data Analysis (EDA)',
    color: '#0ea5e9',
    desc: 'Inspect and understand raw datasets: What Is EDA, Missing Values, Duplicate Records, Summary Statistics, Univariate Analysis, Bivariate Analysis, and Data Visualization for EDA.',
    icon: <BarChart3 />,
    lessons: [
      { title: '5.1 What Is EDA?', time: '06:50', status: 'todo' },
      { title: '5.2 Missing Values', time: '07:40', status: 'todo' },
      { title: '5.3 Duplicate Records', time: '06:30', status: 'todo' },
      { title: '5.4 Summary Statistics', time: '08:00', status: 'todo' },
      { title: '5.5 Univariate Analysis', time: '08:30', status: 'todo' },
      { title: '5.6 Bivariate Analysis', time: '08:45', status: 'todo' },
      { title: '5.7 Data Visualization for EDA', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 6,
    title: 'Probability Theory Fundamentals',
    color: '#06b6d4',
    desc: 'Core probability: Basic Probability, Sample Space and Events, Complementary Events, Addition and Multiplication Rules, Independent and Dependent Events, Joint Probability, and Conditional Probability.',
    icon: <BarChart3 />,
    lessons: [
      { title: '6.1 Basic Probability', time: '06:30', status: 'todo' },
      { title: '6.2 Sample Space and Events', time: '07:10', status: 'todo' },
      { title: '6.3 Complementary Events', time: '06:40', status: 'todo' },
      { title: '6.4 Addition and Multiplication Rules', time: '08:00', status: 'todo' },
      { title: '6.5 Independent and Dependent Events', time: '07:50', status: 'todo' },
      { title: '6.6 Joint Probability', time: '07:45', status: 'todo' },
      { title: '6.7 Conditional Probability', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 7,
    title: 'Bayes’ Theorem & Bayesian Reasoning',
    color: '#10b981',
    desc: 'Bayesian statistics: Conditional Probability Review, Bayes’ Theorem, Prior Probability, Likelihood, Posterior Probability, Spam Filter Example, and Business Applications.',
    icon: <BarChart3 />,
    lessons: [
      { title: '7.1 Conditional Probability Review', time: '06:45', status: 'todo' },
      { title: '7.2 Bayes’ Theorem', time: '08:30', status: 'todo' },
      { title: '7.3 Prior Probability', time: '07:15', status: 'todo' },
      { title: '7.4 Likelihood', time: '07:20', status: 'todo' },
      { title: '7.5 Posterior Probability', time: '08:10', status: 'todo' },
      { title: '7.6 Spam Filter Example', time: '08:50', status: 'todo' },
      { title: '7.7 Business Applications', time: '08:15', status: 'todo' },
    ],
  },
  {
    id: 8,
    title: 'Probability Distributions',
    color: '#14b8a6',
    desc: 'Master key distributions: Random Variables, PMF, PDF, Bernoulli, Binomial, Poisson, Geometric, and Normal Distribution.',
    icon: <BarChart3 />,
    lessons: [
      { title: '8.1 Random Variables', time: '06:50', status: 'todo' },
      { title: '8.2 Probability Mass Function (PMF)', time: '07:30', status: 'todo' },
      { title: '8.3 Probability Density Function (PDF)', time: '07:40', status: 'todo' },
      { title: '8.4 Bernoulli Distribution', time: '06:45', status: 'todo' },
      { title: '8.5 Binomial Distribution', time: '08:50', status: 'todo' },
      { title: '8.6 Poisson Distribution', time: '08:30', status: 'todo' },
      { title: '8.7 Geometric Distribution', time: '07:20', status: 'todo' },
      { title: '8.8 Normal Distribution', time: '09:15', status: 'todo' },
    ],
  },
  {
    id: 9,
    title: 'Sampling Distributions & Central Limit Theorem',
    color: '#f59e0b',
    desc: 'Foundations of inference: Population vs Sample Distribution, Sampling Methods, Sampling Distribution of the Mean, Central Limit Theorem (CLT), Standard Error, and Sample Size and Sampling Variability.',
    icon: <BarChart3 />,
    lessons: [
      { title: '9.1 Population vs Sample Distribution', time: '07:15', status: 'todo' },
      { title: '9.2 Sampling Methods', time: '08:10', status: 'todo' },
      { title: '9.3 Sampling Distribution of the Mean', time: '08:30', status: 'todo' },
      { title: '9.4 Central Limit Theorem (CLT)', time: '09:40', status: 'todo' },
      { title: '9.5 Standard Error', time: '08:15', status: 'todo' },
      { title: '9.6 Sample Size and Sampling Variability', time: '08:45', status: 'todo' },
    ],
  },
  {
    id: 10,
    title: 'Confidence Intervals & Estimation',
    color: '#f97316',
    desc: 'Interval estimation: Point Estimation, Population Parameters vs Sample Statistics, Confidence Level, Confidence Intervals, Margin of Error, Z-Distribution vs t-Distribution, and Student’s t-Distribution.',
    icon: <BarChart3 />,
    lessons: [
      { title: '10.1 Point Estimation', time: '06:50', status: 'todo' },
      { title: '10.2 Population Parameters vs Sample Statistics', time: '07:30', status: 'todo' },
      { title: '10.3 Confidence Level', time: '07:40', status: 'todo' },
      { title: '10.4 Confidence Intervals', time: '08:50', status: 'todo' },
      { title: '10.5 Margin of Error', time: '08:10', status: 'todo' },
      { title: '10.6 Z-Distribution vs t-Distribution', time: '08:40', status: 'todo' },
      { title: '10.7 Student’s t-Distribution', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 11,
    title: 'Hypothesis Testing Fundamentals',
    color: '#ef4444',
    desc: 'Hypothesis testing essentials: What Is Hypothesis Testing, Null Hypothesis (H0), Alternative Hypothesis (Ha), Significance Level (α), P-Values, Type I and Type II Errors, One-Tailed vs Two-Tailed Tests, and Statistical vs Practical Significance.',
    icon: <BarChart3 />,
    lessons: [
      { title: '11.1 What Is Hypothesis Testing?', time: '07:30', status: 'todo' },
      { title: '11.2 Null Hypothesis (H0)', time: '07:15', status: 'todo' },
      { title: '11.3 Alternative Hypothesis (Ha)', time: '07:20', status: 'todo' },
      { title: '11.4 Significance Level (α)', time: '07:45', status: 'todo' },
      { title: '11.5 P-Values', time: '09:00', status: 'todo' },
      { title: '11.6 Type I and Type II Errors', time: '08:40', status: 'todo' },
      { title: '11.7 One-Tailed vs Two-Tailed Tests', time: '08:15', status: 'todo' },
      { title: '11.8 Statistical vs Practical Significance', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 12,
    title: 'Common Statistical Tests',
    color: '#ec4899',
    desc: 'Hypothesis tests in practice: One-Sample t-Test, Independent Two-Sample t-Test, Paired t-Test, One-Sample Z-Test — Introduction, Choosing the Right Statistical Test, Test Assumptions, and Interpreting Test Results.',
    icon: <BarChart3 />,
    lessons: [
      { title: '12.1 One-Sample t-Test', time: '08:30', status: 'todo' },
      { title: '12.2 Independent Two-Sample t-Test', time: '09:15', status: 'todo' },
      { title: '12.3 Paired t-Test', time: '08:50', status: 'todo' },
      { title: '12.4 One-Sample Z-Test — Introduction', time: '08:10', status: 'todo' },
      { title: '12.5 Choosing the Right Statistical Test', time: '09:00', status: 'todo' },
      { title: '12.6 Test Assumptions', time: '08:20', status: 'todo' },
      { title: '12.7 Interpreting Test Results', time: '08:40', status: 'todo' },
    ],
  },
  {
    id: 13,
    title: 'Analysis of Variance (ANOVA)',
    color: '#d946ef',
    desc: 'Comparing multiple group means: What Is ANOVA, One-Way ANOVA, Between-Group vs Within-Group Variation, F-Statistic and F-Distribution, ANOVA Assumptions, Post-Hoc Testing, and Tukey HSD.',
    icon: <BarChart3 />,
    lessons: [
      { title: '13.1 What Is ANOVA?', time: '07:40', status: 'todo' },
      { title: '13.2 One-Way ANOVA', time: '08:50', status: 'todo' },
      { title: '13.3 Between-Group vs Within-Group Variation', time: '08:30', status: 'todo' },
      { title: '13.4 F-Statistic and F-Distribution', time: '08:45', status: 'todo' },
      { title: '13.5 ANOVA Assumptions', time: '07:55', status: 'todo' },
      { title: '13.6 Post-Hoc Testing', time: '08:20', status: 'todo' },
      { title: '13.7 Tukey HSD', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 14,
    title: 'Chi-Square Tests',
    color: '#8b5cf6',
    desc: 'Categorical analysis: Categorical Data Analysis, Observed vs Expected Frequencies, Chi-Square Goodness-of-Fit Test, Chi-Square Test of Independence, Contingency Tables, Expected Cell Counts, and Interpreting Results.',
    icon: <BarChart3 />,
    lessons: [
      { title: '14.1 Categorical Data Analysis', time: '07:00', status: 'todo' },
      { title: '14.2 Observed vs Expected Frequencies', time: '08:00', status: 'todo' },
      { title: '14.3 Chi-Square Goodness-of-Fit Test', time: '09:00', status: 'todo' },
      { title: '14.4 Chi-Square Test of Independence', time: '09:20', status: 'todo' },
      { title: '14.5 Contingency Tables', time: '08:15', status: 'todo' },
      { title: '14.6 Expected Cell Counts', time: '07:45', status: 'todo' },
      { title: '14.7 Interpreting Results', time: '08:35', status: 'todo' },
    ],
  },
  {
    id: 15,
    title: 'Non-Parametric Statistical Tests',
    color: '#6366f1',
    desc: 'Distribution-free tests: Parametric vs Non-Parametric Tests, Mann–Whitney U Test, Wilcoxon Signed-Rank Test, Kruskal–Wallis Test, When to Use Non-Parametric Tests, and Interpreting Results.',
    icon: <BarChart3 />,
    lessons: [
      { title: '15.1 Parametric vs Non-Parametric Tests', time: '07:30', status: 'todo' },
      { title: '15.2 Mann–Whitney U Test', time: '09:00', status: 'todo' },
      { title: '15.3 Wilcoxon Signed-Rank Test', time: '08:45', status: 'todo' },
      { title: '15.4 Kruskal–Wallis Test', time: '09:15', status: 'todo' },
      { title: '15.5 When to Use Non-Parametric Tests', time: '08:00', status: 'todo' },
      { title: '15.6 Interpreting Results', time: '08:30', status: 'todo' },
    ],
  },
  {
    id: 16,
    title: 'Correlation & Association Analysis',
    color: '#0ea5e9',
    desc: 'Measuring relationships: Covariance, Pearson Correlation, Spearman Rank Correlation, Correlation Matrix, Positive vs Negative Correlation, Correlation vs Causation, and Business Applications.',
    icon: <BarChart3 />,
    lessons: [
      { title: '16.1 Covariance', time: '07:40', status: 'todo' },
      { title: '16.2 Pearson Correlation', time: '08:30', status: 'todo' },
      { title: '16.3 Spearman Rank Correlation', time: '08:20', status: 'todo' },
      { title: '16.4 Correlation Matrix', time: '08:10', status: 'todo' },
      { title: '16.5 Positive vs Negative Correlation', time: '07:15', status: 'todo' },
      { title: '16.6 Correlation vs Causation', time: '08:00', status: 'todo' },
      { title: '16.7 Business Applications', time: '08:45', status: 'todo' },
    ],
  },
  {
    id: 17,
    title: 'Simple & Multiple Linear Regression',
    color: '#06b6d4',
    desc: 'Predictive modeling: What Is Regression, Dependent vs Independent Variables, Simple Linear Regression, Multiple Linear Regression, Ordinary Least Squares (OLS), Slope and Intercept, Predictions and Residuals, and R-Squared and Adjusted R-Squared.',
    icon: <BarChart3 />,
    lessons: [
      { title: '17.1 What Is Regression?', time: '07:15', status: 'todo' },
      { title: '17.2 Dependent vs Independent Variables', time: '07:30', status: 'todo' },
      { title: '17.3 Simple Linear Regression', time: '08:45', status: 'todo' },
      { title: '17.4 Multiple Linear Regression', time: '09:15', status: 'todo' },
      { title: '17.5 Ordinary Least Squares (OLS)', time: '09:00', status: 'todo' },
      { title: '17.6 Slope and Intercept', time: '08:10', status: 'todo' },
      { title: '17.7 Predictions and Residuals', time: '08:30', status: 'todo' },
      { title: '17.8 R-Squared and Adjusted R-Squared', time: '09:10', status: 'todo' },
    ],
  },
  {
    id: 18,
    title: 'Regression Diagnostics & Business Metrics',
    color: '#10b981',
    desc: 'Model evaluation: Regression Assumptions, Residual Analysis, Heteroscedasticity, Multicollinearity, Variance Inflation Factor (VIF), Influential Observations, CAGR and Growth Rates, and Interpreting Regression Results.',
    icon: <BarChart3 />,
    lessons: [
      { title: '18.1 Regression Assumptions', time: '08:00', status: 'todo' },
      { title: '18.2 Residual Analysis', time: '08:30', status: 'todo' },
      { title: '18.3 Heteroscedasticity', time: '08:45', status: 'todo' },
      { title: '18.4 Multicollinearity', time: '08:15', status: 'todo' },
      { title: '18.5 Variance Inflation Factor (VIF)', time: '08:50', status: 'todo' },
      { title: '18.6 Influential Observations', time: '07:50', status: 'todo' },
      { title: '18.7 CAGR and Growth Rates', time: '08:20', status: 'todo' },
      { title: '18.8 Interpreting Regression Results', time: '09:00', status: 'todo' },
    ],
  },
  {
    id: 19,
    title: 'A/B Testing & Experimental Design',
    color: '#f59e0b',
    desc: 'Rigorous experimentation: What Is A/B Testing, Control vs Treatment Groups, Randomization, Primary and Guardrail Metrics, Conversion Rate Analysis, Sample Size Basics, Minimum Detectable Effect (MDE), Statistical Significance, and Practical Business Decisions.',
    icon: <BarChart3 />,
    lessons: [
      { title: '19.1 What Is A/B Testing?', time: '07:40', status: 'todo' },
      { title: '19.2 Control vs Treatment Groups', time: '08:10', status: 'todo' },
      { title: '19.3 Randomization', time: '07:30', status: 'todo' },
      { title: '19.4 Primary and Guardrail Metrics', time: '08:30', status: 'todo' },
      { title: '19.5 Conversion Rate Analysis', time: '08:45', status: 'todo' },
      { title: '19.6 Sample Size Basics', time: '08:50', status: 'todo' },
      { title: '19.7 Minimum Detectable Effect (MDE)', time: '09:10', status: 'todo' },
      { title: '19.8 Statistical Significance', time: '08:35', status: 'todo' },
      { title: '19.9 Practical Business Decisions', time: '08:20', status: 'todo' },
    ],
  },
  {
    id: 20,
    title: 'Statistics Capstone Project & Interview Prep',
    color: STATS_COLOR,
    desc: 'End-to-end analytics capstone & FAANG interview readiness: Business Problem, Dataset Selection, Cleaning & EDA, Descriptive Stats, Test Selection, Hypothesis Testing, Correlation & Regression, Insights, Presentation, and 35 Data Analyst Interview Questions.',
    icon: <Award />,
    lessons: [
      { title: '20.1 Business Problem Definition', time: '09:00', status: 'todo' },
      { title: '20.2 Dataset Selection', time: '08:30', status: 'todo' },
      { title: '20.3 Data Cleaning and EDA', time: '11:00', status: 'todo' },
      { title: '20.4 Descriptive Statistics', time: '09:30', status: 'todo' },
      { title: '20.5 Selecting the Appropriate Statistical Test', time: '10:00', status: 'todo' },
      { title: '20.6 Hypothesis Testing', time: '11:30', status: 'todo' },
      { title: '20.7 Correlation and Regression Analysis', time: '12:00', status: 'todo' },
      { title: '20.8 Business Insights and Recommendations', time: '10:30', status: 'todo' },
      { title: '20.9 Final Presentation and Report', time: '11:00', status: 'todo' },
      { title: '20.10 Bonus: 35 Statistics Interview Questions & Explanations', time: '16:00', status: 'todo' },
    ],
  },
];

const ACTIONS = [
  { step: 'video', label: 'Video', icon: <Play className="w-3 h-3" />, cls: 'act-video video' },
  { step: 'mcq', label: 'MCQ', icon: <FileText className="w-3 h-3" />, cls: 'act-mcq mcq' },
  { step: 'interview', label: 'Mock Interview', icon: <Mic className="w-3 h-3" />, cls: 'act-interview interview' },
];

export const StatsChapterView: React.FC<Props> = ({ onBack, onOpenAdvisor }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const totalLessons = STATS_CHAPTERS.reduce((acc, c) => acc + c.lessons.length, 0);
  const doneLessons = STATS_CHAPTERS.reduce((acc, c) => acc + c.lessons.filter(l => l.status === 'completed').length, 0);
  const pct = Math.round((doneLessons / totalLessons) * 100);

  return (
    <div className="scv-root">
      {/* ================= LEFT ================= */}
      <div className="scv-left">
        {/* Hero */}
        <section className="scv-hero scv-hero-stats">
          <video
            className="scv-hero-bg"
            src="/videos/card_video_stats.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="scv-hero-fade scv-hero-fade-stats" />
          <nav className="scv-crumbs">
            <button onClick={onBack}>Home</button>
            <ChevronRight />
            <button onClick={onBack}>Data Analytics with GenAI</button>
            <ChevronRight />
            <strong>Statistics for Data Analytics &amp; AI</strong>
          </nav>
          <div className="scv-hero-body">
            <div className="scv-logo-halo scv-logo-halo-stats">
              <img src="/images/stats_logo_3d_hd.png" alt="Statistics 3D" className="scv-hero-logo" />
            </div>
            <div className="scv-hero-text">
              <h1>Statistics for <span>Data Analytics &amp; AI</span></h1>
              <p>Master statistical thinking from scratch: Probability, Central Tendency, Normal &amp; Binomial Distributions, Hypothesis Testing (Z/T/ANOVA/Chi-Square), Confidence Intervals, Regression &amp; Real-World A/B Testing.</p>
              
              {/* Key Statistical Formulas & Concepts Ribbon — highly useful for learners */}
              <div className="st-stats-ribbon">
                <span className="st-stats-badge"><i>σ</i> Core Mastery:</span>
                <span className="st-stats-chip">Normal Distribution</span>
                <span className="st-stats-chip">Z-Score &amp; T-Test</span>
                <span className="st-stats-chip">p-Value &lt; 0.05</span>
                <span className="st-stats-chip">A/B Testing</span>
                <span className="st-stats-chip">Confidence Interval</span>
                <span className="st-stats-chip">Linear Regression</span>
              </div>

              <div className="scv-hero-pills">
                <span className="scv-pill"><BookOpen /> {totalLessons} Lessons</span>
                <span className="scv-pill"><FolderKanban /> Case Studies &amp; A/B Tests</span>
                <span className="scv-pill"><Wrench /> Python (SciPy) &amp; Excel</span>
                <span className="scv-pill scv-free">100% FREE</span>
              </div>
            </div>
          </div>
          <div className="scv-bubble scv-bubble-stats">“Master hypothesis testing, p-values &amp; A/B decisions! 📐⚡”</div>
        </section>

        {/* Chapters list */}
        <section className="scv-chapters">
          {STATS_CHAPTERS.map((c, idx) => {
            const isOpen = openId === c.id;
            const done = c.lessons.filter(l => l.status === 'completed').length;
            const tp = Math.round((done / c.lessons.length) * 100);
            return (
              <div key={c.id} id={`stcv-chapter-${c.id}`} className={`scv-chapter ${isOpen ? 'open' : ''}`}>
                <div className="scv-chapter-head" onClick={() => setOpenId(isOpen ? null : c.id)}>
                  <span className="scv-num" style={{ background: c.color }}>{idx + 1}</span>
                  <span className="scv-cicon" style={{ color: c.color, background: `${c.color}14` }}>{c.icon}</span>
                  <div className="scv-ctext">
                    <h3>{c.title} {c.free && <em className="scv-free-tag">FREE</em>}</h3>
                  </div>
                  <div className="scv-cprog">
                    <span className="scv-cprog-label">{c.lessons.length} Lessons</span>
                    <div className="scv-cprog-row">
                      <div className="scv-bar"><i style={{ width: `${tp}%`, background: c.color }} /></div>
                      <span className="scv-cprog-count">{done} / {c.lessons.length} completed</span>
                      <b>{tp}%</b>
                    </div>
                  </div>
                  <button className="scv-chev" aria-label="toggle">
                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {isOpen && (
                  <div className="scv-lessons">
                    {c.lessons.map((l, li) => {
                      const displayTitle = l.title.replace(/^\d+\.\d+\s*/, '');
                      return (
                        <div key={l.title} className="scv-lesson" title={`Open ${l.title}`}>
                          <span className="scv-lnum" style={{ color: c.color, fontWeight: 700 }}>{c.id}.{li + 1}</span>
                          <button className="scv-lplay" style={{ background: c.color }} title={`Play ${l.title}`}>
                            <Play />
                          </button>
                          <span className="scv-ltitle" style={{ color: c.color }} title={`Click to start ${l.title}`}>
                            {displayTitle}
                          </span>
                          <span className="scv-ltime"><Clock /> {l.time}</span>
                          <div className="scv-actions">
                            {ACTIONS.map(a => (
                              <button key={a.step} className={`scv-act ${a.cls}`} title={`Open ${a.label} for ${l.title}`}>
                                {a.icon}{a.label}
                              </button>
                            ))}
                          </div>
                          <div className="scv-lstatus">
                            {l.status === 'completed' && <span className="st-done"><CheckCircle2 /> Completed</span>}
                            {l.status === 'progress' && <span className="st-prog"><Circle /> In Progress</span>}
                            {l.status === 'todo' && <span className="st-todo">Not Started</span>}
                          </div>
                          {l.status === 'progress' ? (
                            <button className="scv-continue">Continue <ArrowRight /></button>
                          ) : (
                            <button className="scv-lgo"><ChevronRight /></button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>

      {/* ================= RIGHT ================= */}
      <aside className="scv-right">
        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Your Progress</h4>
            <button className="scv-link">View Details <ArrowRight /></button>
          </div>
          <div className="scv-prog-top">
            <div className="scv-ring" style={{ background: `conic-gradient(${STATS_COLOR} 0 ${pct * 0.5}%, #f472b6 ${pct * 0.5}% ${pct}%, #e2e8f0 ${pct}% 100%)` }}>
              <span>{pct}%</span>
            </div>
            <div className="scv-prog-info">
              <strong>{doneLessons} / {totalLessons} Lessons Completed</strong>
              <div className="scv-bar big"><i style={{ width: `${pct}%`, background: STATS_COLOR }} /></div>
            </div>
          </div>
          <div className="scv-mini-stats">
            <div><FolderKanban style={{ color: STATS_COLOR }} /><b>1</b><span>Project</span></div>
            <div><Zap className="c-amber" /><b>0</b><span>Quiz</span></div>
            <div><Award className="c-pink" /><b>0</b><span>Certificate</span></div>
            <div><Timer className="c-teal" /><b>0 hr</b><span>Time Spent</span></div>
          </div>
        </div>

        <div className="scv-card">
          <div className="scv-card-head">
            <h4>Learning Path</h4>
            <button className="scv-link">View All <ArrowRight /></button>
          </div>
          <ul className="scv-path">
            {STATS_CHAPTERS.map((c, i) => {
              const done = c.lessons.filter(l => l.status === 'completed').length;
              const active = i === 0;
              return (
                <li key={c.id} className={active ? 'active' : ''} onClick={() => setOpenId(c.id)}>
                  <span className="scv-path-num">{i + 1}</span>
                  <span className="scv-path-check">{active ? <CheckCircle2 /> : <Circle />}</span>
                  <div>
                    <strong>{c.title}</strong>
                    <span>{done} / {c.lessons.length} lessons</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="scv-card scv-mentor">
          <div className="scv-mentor-text">
            <h4>AI Mentor</h4>
            <p>Ask anything about Statistics. Get hypothesis test selection guidance, p-value explanations, formula proofs, and interview tips.</p>
            <button className="scv-mentor-btn" onClick={() => onOpenAdvisor?.()}>
              <Bot /> Ask AI Mentor <ArrowRight />
            </button>
          </div>
          <img src="/images/pcv_ai_robot.jpg" alt="AI Mentor" />
          <Sparkles className="scv-spark" />
        </div>
      </aside>
    </div>
  );
};

export default StatsChapterView;
