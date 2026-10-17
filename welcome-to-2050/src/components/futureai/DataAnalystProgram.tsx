import React, { useState } from 'react';
import { 
  Terminal, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Sigma, 
  TrendingUp, 
  Cpu, 
  FolderGit2, 
  UserCheck, 
  ArrowDown, 
  Check, 
  ChevronRight, 
  X, 
  Play, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface DataAnalystProgramProps {
  currentLanguage: SupportedLanguage;
  onEnrollClick: () => void;
}

export const DataAnalystProgram: React.FC<DataAnalystProgramProps> = ({
  currentLanguage,
  onEnrollClick,
}) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  const nodes = [
    {
      id: 'python',
      title: 'Python',
      hindiTitle: 'पायथन प्रोग्रामिंग',
      tag: 'Foundation',
      icon: Terminal,
      color: 'from-sky-500 to-blue-600',
      duration: '4 Weeks',
      summary: 'Object-oriented programming, data structures, algorithmic thinking, and automated data wrangling with Pandas and NumPy.',
      topics: ['Variables, Loops & Functions', 'Lists, Dictionaries & Tuples', 'Pandas DataFrames & Cleaners', 'NumPy Matrix Vectorization'],
      codeSample: `# Python Data Transformation
import pandas as pd
df = pd.read_csv("sales_2050.csv")
top_revenue = df.groupby("region")["revenue"].sum().sort_values(ascending=False)
print("Top Region:", top_revenue.index[0])`,
    },
    {
      id: 'sql',
      title: 'SQL',
      hindiTitle: 'एसक्यूएल डेटाबेस',
      tag: 'Database Mastery',
      icon: Database,
      color: 'from-cyan-500 to-indigo-600',
      duration: '3 Weeks',
      summary: 'Relational database schema architecture, multi-table joins, subqueries, complex window functions, and query optimization.',
      topics: ['DDL/DML & Schema Constraints', 'Multi-table INNER/LEFT JOINs', 'Aggregate Queries & GROUP BY', 'Window Functions & CTEs'],
      codeSample: `-- Enterprise SQL Revenue Aggregation
WITH MonthlyCohort AS (
  SELECT user_id, DATE_TRUNC('month', order_date) as cohort_month,
         ROW_NUMBER() OVER(PARTITION BY user_id ORDER BY order_date) as purchase_seq
  FROM orders
)
SELECT cohort_month, COUNT(DISTINCT user_id) as active_users
FROM MonthlyCohort WHERE purchase_seq = 1 GROUP BY cohort_month;`,
    },
    {
      id: 'excel',
      title: 'Excel',
      hindiTitle: 'उन्नत एक्सेल मॉडलिंग',
      tag: 'Business Modeling',
      icon: FileSpreadsheet,
      color: 'from-emerald-500 to-teal-600',
      duration: '2 Weeks',
      summary: 'Enterprise financial spreadsheets, dynamic array formulas, nested XLOOKUPs, pivot hierarchies, and Power Query automations.',
      topics: ['XLOOKUP & Dynamic Arrays', 'Automated Power Query Pipelines', 'Scenario Manager & What-If Analysis', 'Interactive KPI Slicers'],
      codeSample: `=XLOOKUP(A2, Employees[ID], Employees[Salary], 0, 0)
=LET(rev, Sales[Amount], margin, 0.22, SUM(rev * margin))`,
    },
    {
      id: 'powerbi',
      title: 'Power BI',
      hindiTitle: 'पावर बीआई डैशबोर्ड',
      tag: 'Visual Intelligence',
      icon: BarChart3,
      color: 'from-amber-500 to-orange-600',
      duration: '3 Weeks',
      summary: 'Star-schema dimensional modeling, DAX measures, time-intelligence calculations, and executive interactive reporting.',
      topics: ['Star Schema & Relationships', 'Calculated DAX Columns & Measures', 'Dynamic Time Intelligence (YTD/MTD)', 'Executive Dashboard Publishing'],
      codeSample: `// DAX Measure: YoY Growth %
YoY Revenue % = 
VAR CurrentRev = [Total Revenue]
VAR PrevRev = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))
RETURN DIVIDE(CurrentRev - PrevRev, PrevRev, 0)`,
    },
    {
      id: 'statistics',
      title: 'Statistics',
      hindiTitle: 'व्यावहारिक सांख्यिकी',
      tag: 'Mathematical Rigor',
      icon: Sigma,
      color: 'from-purple-500 to-indigo-600',
      duration: '2 Weeks',
      summary: 'Descriptive metrics, probability distributions, central limit theorem, hypothesis testing (A/B testing), and confidence intervals.',
      topics: ['Probability & Normal Distributions', 'Hypothesis Testing (t-tests, p-values)', 'A/B Test Design & Sample Sizing', 'Correlation vs Causation'],
      codeSample: `# Python SciPy Hypothesis Testing
from scipy import stats
t_stat, p_val = stats.ttest_ind(variant_a, variant_b)
is_significant = p_val < 0.05
print(f"P-Value: {p_val:.4f} | Significant: {is_significant}")`,
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      hindiTitle: 'डेटा एनालिटिक्स और अंतर्दृष्टि',
      tag: 'Business Strategy',
      icon: TrendingUp,
      color: 'from-sky-600 to-teal-600',
      duration: '3 Weeks',
      summary: 'Business acumen, customer churn modeling, cohort retention matrices, funnel drop-off analysis, and executive storytelling.',
      topics: ['LTV & CAC Metric Formulations', 'Cohort Retention Matrices', 'Conversion Funnel Drop-offs', 'Executive Presentation Decks'],
      codeSample: `# Retention Cohort Matrix Computation
cohort_matrix = df.pivot_table(index='CohortMonth', columns='CohortIndex', values='User_ID', aggfunc=pd.Series.nunique)
retention_rate = cohort_matrix.divide(cohort_matrix.iloc[:,0], axis=0)`,
    },
    {
      id: 'genai',
      title: 'GenAI',
      hindiTitle: 'जेनेरेटिव एआई ऑटोमेशन',
      tag: '2050 Accelerator',
      icon: Cpu,
      color: 'from-emerald-500 to-cyan-500',
      duration: '3 Weeks',
      summary: 'LLMs for automated SQL generation, unstructured text summarization, AI code reviews, and autonomous data insight agents.',
      topics: ['Prompt Engineering for Analytics', 'Natural Language to SQL Synthesizers', 'Automated Anomaly Detection with LLMs', 'Building LangChain Data Copilots'],
      codeSample: `# PowerGreen AI Auto-SQL Generator
query = powergreen.generate_sql(
  prompt="Find customers with 3+ purchases in 30 days but 0 in last 60 days",
  schema=database.schema
)
print(query.sql)`,
    },
    {
      id: 'projects',
      title: 'Real Projects',
      hindiTitle: 'लाइव पोर्टफोलियो प्रोजेक्ट्स',
      tag: 'Proof of Work',
      icon: FolderGit2,
      color: 'from-blue-600 to-indigo-600',
      duration: '4 Weeks',
      summary: 'Three production-grade capstone deliverables deployed on GitHub: End-to-end data pipeline, predictive model, and executive BI suite.',
      topics: ['Global Retail Intelligence Pipeline', 'Fintech Credit Risk Analysis', 'Healthcare Resource Forecasting', 'GitHub Repository Showcase'],
      codeSample: `# Project Deliverables
- GitHub Clean Repo with README Architecture
- Live Streamlit / Power BI Dashboard URL
- Executive PDF Case Study Report`,
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      hindiTitle: 'तकनीकी इंटरव्यू की तैयारी',
      tag: 'Career Launch',
      icon: UserCheck,
      color: 'from-slate-900 to-sky-900',
      duration: '2 Weeks',
      summary: 'PowerGreen AI voice mock interviews, SQL live coding challenges, take-home case studies, and salary negotiation strategies.',
      topics: ['Live 1-on-1 Voice Technical Mocks', 'Timed SQL & Python Live Tests', 'Behavioral STAR Method Drills', 'Resume & LinkedIn Optimization'],
      codeSample: `PowerGreen AI Technical Interviewer:
"Question 3: How would you investigate a sudden 15% drop in daily revenue across an e-commerce platform?"`,
    },
  ];

  const activeNode = nodes[selectedNodeIndex];

  return (
    <section id="program" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>FLAGSHIP PROGRAM CURRICULUM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Data Analyst with GenAI
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A comprehensive 9-stage progression engineered to transform curious problem-solvers into modern, AI-empowered data professionals.
          </p>
        </div>

        {/* 9-Node Interactive Horizontal & Responsive Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              const isSelected = index === selectedNodeIndex;

              return (
                <div key={node.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setSelectedNodeIndex(index)}
                    className={`w-full p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-2 group ${
                      isSelected
                        ? 'bg-sky-50/70 border-sky-400 shadow-md -translate-y-1'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${node.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-bold text-slate-900 text-center">
                      {node.title}
                    </span>

                    <span className="text-[10px] font-mono text-slate-500">
                      Step {index + 1}
                    </span>
                  </button>

                  {/* Progressive Arrow for Mobile/Desktop Flow */}
                  {index < nodes.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center my-1 text-slate-300">
                      <span className="text-xs">↓</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Node In-Depth Information Panel (Specified in prompt) */}
        <div className="p-6 sm:p-8 rounded-3xl light-glass-card border border-sky-200/90 shadow-2xl transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${activeNode.color} text-white flex items-center justify-center shadow-md`}>
                <activeNode.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {currentLanguage === 'hi' ? activeNode.hindiTitle : activeNode.title}
                  </h3>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                    {activeNode.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Stage {selectedNodeIndex + 1} of 9 • Duration: {activeNode.duration}
                </p>
              </div>
            </div>

            <button
              onClick={onEnrollClick}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow transition-all flex items-center gap-2"
            >
              <span>Enroll In Program</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Panel Content Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left: Summary & Topics */}
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {activeNode.summary}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Competencies & Modules:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeNode.topics.map((t, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-center justify-between text-xs text-sky-800">
                <span className="font-medium">Mentored by PowerGreen AI with real-time feedback.</span>
                <span className="font-bold">100% Practical</span>
              </div>
            </div>

            {/* Right: Real Code / Query Architecture Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-200 shadow-xl overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400">{activeNode.title.toLowerCase()}_workspace.py</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">Live Code Sample</span>
                </div>

                <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                  <code>{activeNode.codeSample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
