import React, { useState } from 'react';
import { 
  BookOpen, 
  HelpCircle, 
  Lightbulb, 
  CheckSquare, 
  MessageSquare, 
  Code2, 
  Mic, 
  FolderGit2, 
  RotateCw, 
  BarChart2, 
  Briefcase, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SupportedLanguage } from '../../services/powerGreenAIService';

interface AICommandCenterProps {
  currentLanguage: SupportedLanguage;
  onSelectCapability: (capTitle: string) => void;
}

export const AICommandCenter: React.FC<AICommandCenterProps> = ({
  currentLanguage,
  onSelectCapability,
}) => {
  const [activeModalCapability, setActiveModalCapability] = useState<string | null>(null);

  const capabilities = [
    {
      id: 'explain',
      title: 'Explain Concepts',
      hindiTitle: 'अवधारणाएं समझाएं',
      icon: BookOpen,
      color: 'from-sky-500 to-blue-600',
      tag: 'Core Concept',
      description: 'Breaks complex data algorithms into clean 2050 mental models with real-world analogies.',
      microAction: 'See Analogy Demo',
      preview: 'Explaining Python Dict: Like a memory locker where every unique key holds your specified values.',
    },
    {
      id: 'doubts',
      title: 'Solve Doubts',
      hindiTitle: 'शंका समाधान',
      icon: HelpCircle,
      color: 'from-cyan-500 to-sky-600',
      tag: 'Instant Clarification',
      description: 'Instant answers to tricky syntax queries, SQL joins, and statistical edge cases 24/7.',
      microAction: 'Instant Clarifier',
      preview: 'Resolving LEFT JOIN vs INNER JOIN with live row exclusion diagrams.',
    },
    {
      id: 'hints',
      title: 'Give Hints',
      hindiTitle: 'संकेत और सुराग',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-600',
      tag: 'Scaffolded Learning',
      description: 'Provides progressive hints without spoiling solutions, empowering true problem-solving.',
      microAction: 'Level 1 Hint',
      preview: 'Hint: Remember to convert your numeric string into an integer before adding.',
    },
    {
      id: 'questions',
      title: 'Practice Questions',
      hindiTitle: 'अभ्यास प्रश्न',
      icon: CheckSquare,
      color: 'from-emerald-500 to-teal-600',
      tag: 'Adaptive Drill',
      description: 'Auto-generates tailored practice questions calibrated to your exact mastery curve.',
      microAction: 'Generate Problem',
      preview: 'Generating 3 Python string manipulation challenges matching your 72% level.',
    },
    {
      id: 'mcq',
      title: 'MCQ Feedback',
      hindiTitle: 'एमसीक्यू प्रतिक्रिया',
      icon: MessageSquare,
      color: 'from-teal-500 to-emerald-600',
      tag: 'Diagnostic Intel',
      description: 'Deep diagnostic feedback on every incorrect choice, explaining why options fail.',
      microAction: 'View Diagnostic',
      preview: 'Option B was incorrect because tuples in Python are immutable and cannot be appended.',
    },
    {
      id: 'coding',
      title: 'Coding Help',
      hindiTitle: 'कोडिंग सहायता',
      icon: Code2,
      color: 'from-indigo-500 to-violet-600',
      tag: 'Realtime Sandbox',
      description: 'Inline error diagnostics, indentation repairs, and algorithmic runtime optimizations.',
      microAction: 'Debug Sandbox',
      preview: 'IndexError detected on Line 4: List index is out of bounds for len(arr) == 3.',
    },
    {
      id: 'interview',
      title: 'Interview Practice',
      hindiTitle: 'इंटरव्यू अभ्यास',
      icon: Mic,
      color: 'from-purple-500 to-pink-600',
      tag: 'Audio Simulation',
      description: 'Simulates technical data analyst interviews with voice questions and instant scorecards.',
      microAction: 'Launch Mock',
      preview: 'Evaluating your explanation of Pandas groupby aggregations and memory usage.',
    },
    {
      id: 'project',
      title: 'Project Guidance',
      hindiTitle: 'प्रोजेक्ट मार्गदर्शन',
      icon: FolderGit2,
      color: 'from-blue-600 to-cyan-600',
      tag: 'Portfolio Builder',
      description: 'Architecture blueprints and code reviews for enterprise-grade analytics portfolios.',
      microAction: 'Review Spec',
      preview: 'Validating ETL pipeline schema and Power BI star-schema relationship design.',
    },
    {
      id: 'revision',
      title: 'Personalized Revision',
      hindiTitle: 'व्यक्तिगत पुनरीक्षण',
      icon: RotateCw,
      color: 'from-rose-500 to-orange-500',
      tag: 'Spaced Memory',
      description: 'Spaced repetition workouts focused exclusively on your historic mistake logs.',
      microAction: 'Start 60s Workout',
      preview: 'Retrieving 3 SQL WHERE vs HAVING rules you struggled with 4 days ago.',
    },
    {
      id: 'progress',
      title: 'Progress Analysis',
      hindiTitle: 'प्रगति विश्लेषण',
      icon: BarChart2,
      color: 'from-emerald-600 to-sky-600',
      tag: 'Telemetry Matrix',
      description: 'Synthesizes speed, accuracy, and depth into an actionable readiness quotient.',
      microAction: 'Inspect Quotient',
      preview: 'Current Readiness: 64% • Python: Strong • SQL: Pending unlock.',
    },
    {
      id: 'career',
      title: 'Career Preparation',
      hindiTitle: 'करियर की तैयारी',
      icon: Briefcase,
      color: 'from-sky-600 to-indigo-600',
      tag: 'Offer-Linked',
      description: 'Resume optimization, technical interview rubrics, and industry role preparation.',
      microAction: 'Role Readiness',
      preview: 'Benchmarking your project deliverables against Junior Data Analyst hiring standards.',
    },
  ];

  return (
    <section id="command-center" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Grid Accent Overlay */}
      <div className="absolute inset-0 future-grid-overlay opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>AI COMMAND CENTER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            One AI. Your Entire Learning Journey.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal">
            PowerGreen AI adapts to every phase of your education—from foundational syntax to portfolio project architecture and technical interview readiness.
          </p>
        </div>

        {/* 11 Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const isOpened = activeModalCapability === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveModalCapability(cap.id)}
                className="group relative p-6 rounded-3xl light-glass-card border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${cap.color} text-white flex items-center justify-center shadow-md shadow-sky-500/10 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase tracking-wider border border-slate-200/60">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {currentLanguage === 'hi' ? cap.hindiTitle : cap.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Micro-Interaction Preview Drawer */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Micro-Simulation:</span>
                  </div>
                  
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 font-mono italic">
                    {cap.preview}
                  </div>

                  <button
                    onClick={() => onSelectCapability(cap.title)}
                    className="w-full mt-2 py-2 rounded-xl bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{cap.microAction}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
