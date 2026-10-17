import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  FileSpreadsheet, 
  BarChart3,
  Award
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import confetti from 'canvas-confetti';

interface ProjectTemplate {
  id: string;
  courseTitle: string;
  projectTitle: string;
  tagline: string;
  techStack: string[];
  problemStatement: string;
  keyInsights: string[];
  businessImpact: string;
  resumeBullets: string[];
  linkedInPost: string;
}

const PORTFOLIO_PROJECTS: ProjectTemplate[] = [
  {
    id: 'proj_python',
    courseTitle: 'Python & Pandas',
    projectTitle: 'E-Commerce Food Delivery Delay & Weather Anomaly Detective',
    tagline: 'Root cause analysis on 10,000 order delivery timestamps using Pandas.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis (EDA)'],
    problemStatement: 'Last weekend delivery partner cancellations surged by 24% across metropolitan zones. Operations leadership needed to know whether cancellations were driven by restaurant kitchen delays, traffic congestion, or severe rainfall.',
    keyInsights: [
      'Isolated that 78% of cancellations occurred within a 2-hour window during heavy rain in specific low-elevation sectors.',
      'Identified an average promised vs actual delivery variance of +35 minutes when rain exceeded 15mm/hr.',
      'Cleaned and transformed 10,000 order records using Pandas .groupby(), .dropna(), and datetime parsing in 0.002 seconds.'
    ],
    businessImpact: 'Delivered an automated threshold alert system that enabled dynamic partner surge incentives, reducing cancellation penalties by 18% in subsequent storm cycles.',
    resumeBullets: [
      '• Engineered a Python & Pandas data cleaning pipeline parsing 10,000+ delivery logs with zero data loss.',
      '• Performed multi-variable exploratory data analysis correlating weather timestamps with delivery cancellation spikes.',
      '• Delivered executive operational insights that decreased customer refund escalations by 18%.'
    ],
    linkedInPost: `🚀 Excited to share my latest Data Analytics Project: "E-Commerce Delivery Delay & Weather Anomaly Detective" built in Python!

🔍 The Business Problem:
During recent monsoon weekends, delivery cancellations spiked by 24%. Operations needed to know: Was it rider shortage, restaurant prep delays, or weather?

🛠️ What I Built:
• Ingested and cleaned 10,000+ delivery timestamps using Python and Pandas.
• Used .groupby() and datetime filtering to isolate geographic and temporal clustering.
• Discovered that 78% of cancellations were concentrated in just 2 low-elevation zones during rain exceeding 15mm/hr.

💡 The Business Impact:
Recommended a dynamic surge incentive model that helped operations reduce cancellation penalties by 18%!

Big thanks to the 2050 Data Academy for this hands-on industry simulation!

#DataAnalytics #Python #Pandas #DataScience #ProblemSolving #PortfolioProject`
  },
  {
    id: 'proj_sql',
    courseTitle: 'SQL & Databases',
    projectTitle: 'PhonePe UPI Instant Payment Reconciliation & Failure Root-Cause Analysis',
    tagline: 'Complex multi-table queries analyzing 100,000 financial transactions.',
    techStack: ['SQL', 'PostgreSQL', 'Window Functions', 'Multi-Table JOINs', 'CTEs'],
    problemStatement: 'A fintech payment gateway observed a 4.2% drop in transaction success rates during evening peak hours, resulting in customer service ticket spikes and merchant revenue loss.',
    keyInsights: [
      'Formulated multi-table LEFT JOINs between transaction logs and settlement tables to identify 4,120 unrefunded failed transactions.',
      'Utilized Common Table Expressions (CTEs) and DENSE_RANK() window functions to isolate bank server response timeouts (>5000ms).',
      'Discovered that two specific partner bank endpoints accounted for 82% of all timeout drops between 7 PM and 10 PM.'
    ],
    businessImpact: 'Automated the daily reconciliation query pipeline, saving 15 manual analyst hours per week and speeding up automated user refunds from 48 hours to 2 hours.',
    resumeBullets: [
      '• Designed complex SQL queries utilizing CTEs, Window Functions (DENSE_RANK), and multi-table JOINs on 100,000+ rows.',
      '• Identified partner bank API timeout bottlenecks, pinpointing 82% of evening payment failures.',
      '• Automated daily settlement reconciliation, reducing manual reporting workload by 15 hours weekly.'
    ],
    linkedInPost: `💳 FinTech Analytics Showcase: "UPI Transaction Failure & Instant Settlement Reconciliation" using SQL!

Ever wondered what happens behind the scenes when a UPI payment shows "Pending" or "Failed"?

In this project, I queried a dataset of 100,000+ financial transaction records using PostgreSQL:
🔹 Formulated multi-table LEFT JOINs between raw payments and bank settlement ledgers.
🔹 Leveraged CTEs and Window Functions (DENSE_RANK) to isolate peak-hour latency spikes.
🔹 Uncovered that 82% of timeout failures were tied to just two partner bank gateways between 7 PM and 10 PM.

Automating this query saves 15 hours of manual audit time every week!

#SQL #Fintech #DataAnalytics #PostgreSQL #DatabaseOptimization`
  },
  {
    id: 'proj_excel',
    courseTitle: 'Advanced Excel',
    projectTitle: '50-Store FMCG Retail Automated Commission & Margin Dashboard',
    techStack: ['Advanced Excel', 'XLOOKUP', 'SUMIFS', 'Power Query', 'Pivot Tables'],
    tagline: 'Tamper-proof financial calculation model replacing 10 fragmented sheets.',
    problemStatement: 'A regional retail chain operating 50 stores across North India managed monthly store commissions across 10 disjointed CSV sheets, prone to formula errors and manual reconciliation delays.',
    keyInsights: [
      'Implemented Power Query to automatically consolidate 50 store CSVs with a single click data refresh.',
      'Constructed dynamic XLOOKUP and multi-criteria SUMIFS models with absolute ($) referencing, eliminating #REF errors.',
      'Built interactive Pivot Tables with timeline slicers for regional managers to analyze sales margins across categories.'
    ],
    businessImpact: 'Reduced the monthly store commission payout closing cycle from 6 days to 4 hours with 100% calculation accuracy.',
    resumeBullets: [
      '• Built an automated FMCG commission model in Excel utilizing XLOOKUP, nested SUMIFS, and absolute references.',
      '• Streamlined 50 regional store CSV feeds using Power Query ETL, automating 40 monthly hours of data cleaning.',
      '• Created an executive KPI dashboard with dynamic slicers tracking store-level gross margins.'
    ],
    linkedInPost: `📊 Excel is still the engine of global business! Sharing my new project: "50-Store FMCG Sales & Margin Automation Model".

Instead of copy-pasting 50 store CSVs every month, I built an automated Power Query workflow paired with modern XLOOKUP formulas.

Key Result: Reduced the monthly accounting closing cycle from 6 full days to just 4 hours!

#Excel #DataAnalytics #FinancialModeling #PowerQuery #BusinessIntelligence`
  },
  {
    id: 'proj_powerbi',
    courseTitle: 'Power BI',
    projectTitle: 'Swiggy/Zomato Restaurant Operations & Fleet Executive KPI Dashboard',
    techStack: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Data Modeling', 'UI/UX Design'],
    tagline: 'Interactive visual storytelling connecting orders, rider fleets, and delivery times.',
    problemStatement: 'Food delivery executives needed a single glass-box dashboard to monitor active fleet utilization, regional customer retention, and peak hour delivery bottlenecks.',
    keyInsights: [
      'Constructed a Star Schema relational data model connecting FactOrders to DimCustomers, DimRiders, and DimDate.',
      'Engineered advanced DAX measures including CALCULATE, DIVIDE (safe divide), and Year-over-Year (YoY) growth metrics.',
      'Designed a clean, accessibility-compliant executive canvas with dynamic region and cuisine slicers.'
    ],
    businessImpact: 'Equipped zone operations heads to re-allocate 300+ idle delivery riders dynamically, boosting average order fulfillment rate by 14%.',
    resumeBullets: [
      '• Developed an enterprise Power BI dashboard incorporating Star Schema architecture and complex DAX measures.',
      '• Integrated dynamic slicers and cross-filtering enabling real-time drill-down across 4 geographical regions.',
      '• Empowered fleet managers with predictive utilization metrics, improving peak fulfillment by 14%.'
    ],
    linkedInPost: `📈 Visualizing Business Insights: "Food Delivery Operations Executive Dashboard" built with Power BI!

CEOs don't read 50-page spreadsheets. They need clear visual answers.

In this project, I modeled delivery logistics data into an interactive Power BI dashboard:
✅ Modeled Star Schema relationships for lightning-fast performance.
✅ Wrote custom DAX measures for YoY growth and fleet utilization rates.
✅ Implemented cross-filtering slicers so operations leaders can identify city bottlenecks with a single click.

#PowerBI #DataVisualization #DAX #BusinessIntelligence #Analytics`
  }
];

interface ResumeProjectGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
}

export const ResumeProjectGeneratorModal: React.FC<ResumeProjectGeneratorModalProps> = ({
  isOpen,
  onClose,
  studentName = 'Candidate',
}) => {
  const [selectedProjIndex, setSelectedProjIndex] = useState(0);
  const [copiedType, setCopiedType] = useState<'resume' | 'linkedin' | null>(null);

  const currentProj = PORTFOLIO_PROJECTS[selectedProjIndex];

  if (!isOpen) return null;

  const handleCopy = (text: string, type: 'resume' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    SoundEffects.playSuccess();
    setCopiedType(type);
    confetti({ particleCount: 40, spread: 50 });
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleDownloadProof = () => {
    SoundEffects.playBreakthrough();
    const content = `# PROJECT PORTFOLIO PROOF: ${currentProj.projectTitle}
Author: ${studentName}
Course Pillar: ${currentProj.courseTitle}
Verified: 2050 Data Academy

## Business Problem:
${currentProj.problemStatement}

## Tech Stack:
${currentProj.techStack.join(', ')}

## Key Insights:
${currentProj.keyInsights.map((k) => `- ${k}`).join('\n')}

## Business Impact:
${currentProj.businessImpact}

## Resume Ready Bullet Points:
${currentProj.resumeBullets.join('\n')}
`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentProj.id}_portfolio_proof.md`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/75 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-3xl w-full bg-white border border-lab-900/10 rounded-3xl p-6 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[94vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-lab-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>RESUME & LINKEDIN PORTFOLIO GENERATOR</span>
              </span>
              <span className="text-[10px] font-mono text-lab-400">
                100% Interview Proof
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-deep-space tracking-tight">
              Get Hired With Real Projects
            </h3>
            <p className="text-xs text-lab-500 mt-0.5">
              Copy-paste verified real-world Indian company project write-ups directly into your Resume and LinkedIn.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close portfolio generator"
            className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
          {PORTFOLIO_PROJECTS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProjIndex(idx);
                SoundEffects.playDiscovery();
              }}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                selectedProjIndex === idx
                  ? 'bg-deep-space text-white border-deep-space shadow-subtle font-bold'
                  : 'bg-lab-50 text-lab-600 border-lab-200 hover:border-quantum-teal'
              }`}
            >
              <span className="block text-[10px] opacity-75">{p.courseTitle}</span>
              <span className="truncate block font-semibold">Project 0{idx + 1}</span>
            </button>
          ))}
        </div>

        {/* Project Overview Card */}
        <div className="p-5 rounded-3xl bg-lab-50 border border-lab-900/5 space-y-3 font-sans">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-quantum-teal uppercase tracking-wider">
              {currentProj.courseTitle} PORTFOLIO CASE STUDY
            </span>
            <div className="flex flex-wrap gap-1">
              {currentProj.techStack.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded-full bg-white border border-lab-200 text-[10px] font-mono font-medium text-deep-space">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <h4 className="text-base sm:text-lg font-bold text-deep-space leading-tight">
            {currentProj.projectTitle}
          </h4>
          <p className="text-xs text-lab-600 leading-relaxed">
            <strong>Business Problem:</strong> {currentProj.problemStatement}
          </p>

          <div className="space-y-1.5 pt-1 text-xs text-deep-space">
            <strong className="text-quantum-teal font-mono text-[11px] block">KEY DISCOVERIES:</strong>
            {currentProj.keyInsights.map((k, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{k}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-2xl bg-white border border-lab-200 text-xs">
            <strong className="text-future-blue font-mono text-[11px] block mb-0.5">BUSINESS IMPACT METRIC:</strong>
            <p className="text-deep-space font-medium">{currentProj.businessImpact}</p>
          </div>
        </div>

        {/* Copy Tools Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Resume Bullets Card */}
          <div className="p-4 rounded-2xl bg-white border border-lab-200 shadow-subtle space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-deep-space font-mono">
                  Resume Bullet Points
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lab-100 text-lab-600 font-semibold">
                  Action + Metric Format
                </span>
              </div>
              <p className="text-[11px] text-lab-500 mb-2">
                Paste these 3 bullet points directly under the Projects section of your Resume.
              </p>
              <div className="p-3 rounded-xl bg-lab-50 text-[11px] font-mono text-deep-space space-y-1">
                {currentProj.resumeBullets.map((b, i) => (
                  <div key={i}>{b}</div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleCopy(currentProj.resumeBullets.join('\n'), 'resume')}
              className="w-full py-2.5 rounded-xl bg-deep-space text-white hover:bg-deep-space/90 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
            >
              {copiedType === 'resume' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedType === 'resume' ? 'Copied to Clipboard!' : 'Copy Resume Bullets'}</span>
            </button>
          </div>

          {/* LinkedIn Post Card */}
          <div className="p-4 rounded-2xl bg-white border border-lab-200 shadow-subtle space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-deep-space font-mono">
                  LinkedIn Project Post
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-future-blue/10 text-future-blue font-semibold">
                  Viral Storytelling
                </span>
              </div>
              <p className="text-[11px] text-lab-500 mb-2">
                Post this on LinkedIn with a screenshot to attract recruiters and hiring managers.
              </p>
              <div className="p-3 rounded-xl bg-lab-50 text-[10px] font-mono text-deep-space line-clamp-4 leading-relaxed whitespace-pre-wrap">
                {currentProj.linkedInPost}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(currentProj.linkedInPost, 'linkedin')}
                className="flex-1 py-2.5 rounded-xl bg-future-blue text-white hover:bg-future-blue/90 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedType === 'linkedin' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'linkedin' ? 'Copied!' : 'Copy LinkedIn Post'}</span>
              </button>

              <button
                onClick={handleDownloadProof}
                className="p-2.5 rounded-xl bg-lab-100 hover:bg-lab-200 text-deep-space transition-colors"
                title="Download Proof File"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
