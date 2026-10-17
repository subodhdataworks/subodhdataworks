import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Mic, 
  MicOff, 
  Volume2, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  Briefcase,
  Play,
  RotateCcw,
  Video,
  Radio,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';
import confetti from 'canvas-confetti';

interface InterviewQuestion {
  id: string;
  role: string;
  companyTarget: string;
  question: string;
  idealAnswer: string;
  audioPrompt: string;
  keywords: string[];
  killerPunchline: string;
  followUpQuestion?: string;
  followUpIdealAnswer?: string;
}

const INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'iq_01',
    role: 'Junior Data Analyst',
    companyTarget: 'Swiggy / Zomato / Zepto',
    question: 'How would you use Python and Pandas to investigate why delivery partner cancellation rates jumped 24% last weekend in Patna?',
    idealAnswer: 'I would load the weekend orders dataset into a Pandas DataFrame and filter rows where order_status == "CANCELLED". Then I would group by cancellation_reason and delivery_zone using df.groupby(["zone", "reason"]).size() to isolate geographical clustering. Next, I would cross-reference weather timestamps and traffic delay minutes. If heavy rain correlated with 80% of cancellations in Kankarbagh zone, I would present this to operations with recommended surge incentives.',
    audioPrompt: 'I would filter cancelled orders in Pandas, group by zone and cancellation reason, and correlate with weather and traffic timestamps to find root causes.',
    keywords: ['pandas', 'dataframe', 'groupby', 'filter', 'cancellation', 'zone', 'weather', 'correlation'],
    killerPunchline: '"As an analyst, I do not just report the 24% spike; I isolate the specific bottleneck zone and hand operations an actionable surge pricing solution."',
    followUpQuestion: 'Great analysis. Now what if the orders dataset has 50 million rows and cannot fit into Pandas RAM?',
    followUpIdealAnswer: 'I would push the initial aggregation into SQL using GROUP BY, or use chunking with pd.read_csv(chunksize=100000), or transition to PySpark/DuckDB for distributed out-of-core execution.'
  },
  {
    id: 'iq_02',
    role: 'SQL Data Analyst',
    companyTarget: 'PhonePe / Paytm / Razorpay',
    question: 'Explain the difference between a LEFT JOIN and an INNER JOIN with a real UPI payment and refund scenario.',
    idealAnswer: 'An INNER JOIN returns only records that have matching keys in both tables. If we INNER JOIN transactions with refunds, we only get transactions that were refunded. A LEFT JOIN returns ALL records from the left transactions table, plus matching refund details if they exist, or NULL if no refund occurred. To find all successful UPI payments that never received a refund, we use a LEFT JOIN where refunds.transaction_id IS NULL.',
    audioPrompt: 'INNER JOIN returns only matching records from both tables. LEFT JOIN keeps all primary transactions and shows NULL for unrefunded orders.',
    keywords: ['inner join', 'left join', 'null', 'matching', 'refund', 'transactions', 'keys'],
    killerPunchline: '"A LEFT JOIN with WHERE refund IS NULL is my go-to query to detect missing refunds and prevent customer escalation."',
    followUpQuestion: 'How would you optimize that query if transactions has 100 million rows and the query is timing out?',
    followUpIdealAnswer: 'I would verify that both transaction_id columns are indexed with B-trees, ensure matching data types, and filter by a partitioned transaction_date range in the WHERE clause.'
  },
  {
    id: 'iq_03',
    role: 'Business Intelligence Analyst',
    companyTarget: 'TCS / Infosys / Accenture',
    question: 'Why is XLOOKUP preferred over VLOOKUP when building monthly business reconciliation models in Excel?',
    idealAnswer: 'XLOOKUP solves four major flaws of VLOOKUP: First, it defaults to an exact match, eliminating the risk of accidental approximate matches. Second, it can search both left and right, whereas VLOOKUP is restricted to rightward lookups. Third, inserting new columns in source data does not break XLOOKUP because it references explicit arrays rather than static column index numbers. Fourth, it includes native error handling without needing IFERROR.',
    audioPrompt: 'XLOOKUP defaults to exact match, searches both left and right, does not break when columns are added, and includes native missing value handling.',
    keywords: ['xlookup', 'vlookup', 'exact match', 'left', 'right', 'column index', 'iferror'],
    killerPunchline: '"Using XLOOKUP makes financial models tamper-proof against accidental column insertions by junior team members."',
    followUpQuestion: 'How do you handle lookups across multiple criteria simultaneously in Excel?',
    followUpIdealAnswer: 'I either use XLOOKUP with boolean array multiplication (lookup_array = (Range1=Criteria1)*(Range2=Criteria2)), or use modern dynamic array functions like FILTER.'
  },
  {
    id: 'iq_04',
    role: 'Power BI / BI Engineer',
    companyTarget: 'Amazon / Flipkart / Retail',
    question: 'What is the architectural difference between a Calculated Column and a DAX Measure in Power BI, and when would you use each?',
    idealAnswer: 'A calculated column is evaluated row-by-row during data refresh and stored permanently in the VertiPaq database, consuming persistent RAM. A DAX measure is evaluated dynamically at query time based on active visual filter context, consuming zero storage. I use calculated columns only when creating row-level attributes needed for slicers, and DAX measures for all numeric aggregations like Total Revenue or YoY Growth.',
    audioPrompt: 'A calculated column evaluates at data refresh and consumes RAM. A DAX measure evaluates on-the-fly based on visual slicers and consumes zero persistent storage.',
    keywords: ['calculated column', 'measure', 'filter context', 'row context', 'vertipaq', 'storage', 'ram', 'query time'],
    killerPunchline: '"In enterprise Power BI, our rule of thumb is: columns for slicing, measures for aggregation to keep models lean and fast."',
    followUpQuestion: 'Why should you avoid using the division slash / in DAX calculations?',
    followUpIdealAnswer: 'Using slash / results in infinity or error visuals when dividing by zero. The DIVIDE() function includes alternate result handling, defaulting safely to zero or blank.'
  }
];

interface AiInterviewSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiInterviewSimulatorModal: React.FC<AiInterviewSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedQIndex, setSelectedQIndex] = useState(0);
  const [isFollowUpActive, setIsFollowUpActive] = useState(false);
  const [answerInput, setAnswerInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [aiState, setAiState] = useState<'speaking' | 'listening' | 'evaluating' | 'verdict'>('speaking');
  const [evaluationResult, setEvaluationResult] = useState<{
    executiveSummary: string;
    totalScore: number;
    conceptScore: number;
    impactScore: number;
    fluencyScore: number;
    whatWorked: string;
    whatIsMissing: string;
    punchlineTip: string;
    verdictBadge: string;
  } | null>(null);

  const currentQ = INTERVIEW_QUESTIONS[selectedQIndex];
  const activePromptText = isFollowUpActive && currentQ.followUpQuestion 
    ? currentQ.followUpQuestion 
    : currentQ.question;

  // Speak question when modal opens or question changes
  useEffect(() => {
    if (!isOpen) return;
    setAiState('speaking');
    setAnswerInput('');
    setEvaluationResult(null);
    setIsFollowUpActive(false);

    Voice.speak(activePromptText, 'en', () => {
      setAiState('listening');
    });

    return () => {
      Voice.stopSpeaking();
    };
  }, [isOpen, selectedQIndex]);

  if (!isOpen) return null;

  // Speech Recognition Support
  const toggleSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported on this browser. Please type your answer in the box below.');
      return;
    }

    if (isRecording) {
      setIsRecording(false);
      setAiState('listening');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsRecording(true);
        setAiState('listening');
        SoundEffects.playDiscovery();
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setAnswerInput((prev) => (prev ? prev + ' ' + transcript : transcript));
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  const handleEvaluateAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answerInput.trim()) return;

    setAiState('evaluating');
    SoundEffects.playSubtleClick();

    // AI Cognitive Assessment
    setTimeout(() => {
      const lower = answerInput.toLowerCase();
      let matchedCount = 0;
      currentQ.keywords.forEach((kw) => {
        if (lower.includes(kw.toLowerCase())) matchedCount++;
      });

      const keywordRatio = matchedCount / currentQ.keywords.length;
      const wordCount = answerInput.trim().split(/\s+/).length;

      // 1. Concept Score (40%)
      const conceptScore = Math.min(100, Math.round(50 + keywordRatio * 50));

      // 2. Business Impact Score (30%)
      const hasBusinessMetrics = lower.includes('%') || lower.includes('rs') || lower.includes('cost') || lower.includes('revenue') || lower.includes('delay') || lower.includes('kpi') || lower.includes('operations');
      const impactScore = Math.min(100, Math.round(45 + (hasBusinessMetrics ? 45 : 15) + (keywordRatio > 0.4 ? 10 : 0)));

      // 3. Fluency & Structure (30%)
      const fluencyScore = Math.min(100, Math.round(wordCount >= 25 ? (wordCount >= 45 ? 95 : 85) : 60));

      const totalScore = Math.round(conceptScore * 0.40 + impactScore * 0.30 + fluencyScore * 0.30);

      let verdictBadge = 'Strong Hire (Top 10%)';
      if (totalScore < 70) verdictBadge = 'Needs Revision on Edge Cases';
      else if (totalScore < 85) verdictBadge = 'Competent Data Analyst';

      // Generate Executive Summary
      const executiveSummary = totalScore >= 80
        ? `Impressive response. You clearly demonstrated command over ${currentQ.keywords.slice(0, 3).join(', ')} and structured your reasoning from data extraction to business impact. In top-tier interviews, this poise immediately signals seniority.`
        : `Decent foundational logic, but an interviewer at ${currentQ.companyTarget} expects deeper precision. You addressed the general mechanism, but missed explicit technical nuances and concrete financial/operational impact numbers.`;

      const whatWorked = matchedCount > 0 
        ? `Identified key analytical concepts: ${currentQ.keywords.filter(k => lower.includes(k.toLowerCase())).join(', ')}.`
        : 'Communicated clearly with structured sentences.';

      const missingKeywords = currentQ.keywords.filter(k => !lower.includes(k.toLowerCase()));
      const whatIsMissing = missingKeywords.length > 0
        ? `Missed critical industry terms: ${missingKeywords.slice(0, 3).join(', ')}. Connect technical operations to business ROI.`
        : 'To reach 100%, emphasize how you would automate and schedule this check in an enterprise airflow pipeline.';

      setEvaluationResult({
        executiveSummary,
        totalScore,
        conceptScore,
        impactScore,
        fluencyScore,
        whatWorked,
        whatIsMissing,
        punchlineTip: currentQ.killerPunchline,
        verdictBadge
      });

      setAiState('verdict');
      SoundEffects.playMissionComplete();
      confetti({ particleCount: 50, spread: 60 });
    }, 1200);
  };

  const handleTriggerFollowUp = () => {
    if (!currentQ.followUpQuestion) return;
    setIsFollowUpActive(true);
    setAnswerInput('');
    setEvaluationResult(null);
    setAiState('speaking');
    SoundEffects.playDiscovery();

    Voice.speak(currentQ.followUpQuestion, 'en', () => {
      setAiState('listening');
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-deep-space/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="max-w-4xl w-full bg-white border border-lab-900/10 rounded-3xl p-5 sm:p-8 text-left relative shadow-elevated space-y-6 max-h-[94vh] overflow-y-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-lab-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-quantum-teal/15 text-deep-space border border-quantum-teal/30 text-[10px] font-mono font-bold flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
              <span>2050 FACE-TO-FACE AI INTERVIEWER</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono text-lab-400">
              Real-time Voice & 3D Cognitive Evaluation
            </span>
          </div>

          <button
            onClick={() => {
              Voice.stopSpeaking();
              Voice.stopCustomVoice();
              onClose();
            }}
            aria-label="Close interview simulator"
            className="p-2 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2050 HOLOGRAPHIC AI INTERVIEWER CHAMBER */}
        <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-deep-space via-[#0f172a] to-deep-space text-white relative overflow-hidden shadow-elevated">
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* AI Avatar Face Presence */}
            <div className="relative flex flex-col items-center shrink-0">
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 p-1 transition-all ${
                aiState === 'speaking' 
                  ? 'border-quantum-teal shadow-[0_0_25px_rgba(0,184,169,0.5)] scale-105' 
                  : aiState === 'listening'
                  ? 'border-future-blue shadow-[0_0_20px_rgba(76,125,255,0.4)]'
                  : 'border-white/20'
              }`}>
                {/* Avatar Visual Portrait */}
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-quantum-teal/40 via-future-blue/30 to-deep-space flex items-center justify-center overflow-hidden relative">
                  <Brain className={`w-12 h-12 text-quantum-teal transition-transform duration-500 ${
                    aiState === 'speaking' ? 'scale-110 animate-pulse' : 'scale-100'
                  }`} />
                  
                  {/* Concentric Audio Wave Rings when speaking */}
                  {aiState === 'speaking' && (
                    <div className="absolute inset-0 rounded-full border border-quantum-teal/60 animate-ping opacity-30" />
                  )}
                </div>

                {/* Status Dot */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-deep-space flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </span>
              </div>

              <div className="mt-2 text-center">
                <h4 className="text-xs font-bold text-white tracking-wide">Dr. Sophia Vance</h4>
                <p className="text-[10px] font-mono text-quantum-teal">AI Director of Analytics</p>
              </div>
            </div>

            {/* AI Dialogue & Audio Prompts */}
            <div className="flex-1 space-y-3 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-quantum-teal text-[10px] font-mono font-bold uppercase">
                    {currentQ.role}
                  </span>
                  <span className="text-[11px] font-mono text-lab-300">
                    Target: <strong className="text-white">{currentQ.companyTarget}</strong>
                  </span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-lab-400">
                  <span className={`w-2 h-2 rounded-full ${
                    aiState === 'speaking' ? 'bg-quantum-teal animate-pulse' :
                    aiState === 'listening' ? 'bg-future-blue animate-pulse' :
                    aiState === 'evaluating' ? 'bg-solar-gold animate-spin' : 'bg-emerald-400'
                  }`} />
                  <span className="capitalize">{aiState}...</span>
                </div>
              </div>

              {/* The Live Question Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-sm sm:text-base font-medium text-white/95 leading-relaxed">
                  "{activePromptText}"
                </p>
              </div>

              {/* Audio Controls (Replay Question / Founder Voice) */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    Voice.speak(activePromptText, 'en', () => setAiState('listening'));
                    setAiState('speaking');
                    SoundEffects.playDiscovery();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all"
                  title="Replay Sophia's Voice"
                >
                  <Volume2 className="w-3.5 h-3.5 text-quantum-teal" />
                  <span>Replay Question</span>
                </button>

                <button
                  onClick={() => {
                    Voice.playCustomVoice('/audio/subodh_intro.mp4');
                    SoundEffects.playDiscovery();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-solar-gold/20 hover:bg-solar-gold/30 text-solar-gold border border-solar-gold/40 text-xs font-mono font-bold transition-all"
                  title="Listen to Founder Subodh Intro Voice"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Founder Voice Note</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Question Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
          {INTERVIEW_QUESTIONS.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => {
                setSelectedQIndex(idx);
                SoundEffects.playDiscovery();
              }}
              className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap font-bold ${
                selectedQIndex === idx
                  ? 'bg-deep-space text-white shadow-subtle'
                  : 'bg-lab-100 text-lab-500 hover:text-deep-space'
              }`}
            >
              Q0{idx + 1} • {q.companyTarget}
            </button>
          ))}
        </div>

        {/* Candidate Interactive Response Section */}
        <form onSubmit={handleEvaluateAnswer} className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-lab-500 font-medium">Your Spoken or Written Response:</span>
            
            <button
              type="button"
              onClick={toggleSpeechRecognition}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                isRecording 
                  ? 'bg-signal-coral text-white animate-pulse' 
                  : 'bg-quantum-teal/15 text-quantum-teal hover:bg-quantum-teal/25 border border-quantum-teal/30'
              }`}
            >
              {isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
              <span>{isRecording ? 'Listening (Speak now)...' : 'Speak Your Answer 🎙️'}</span>
            </button>
          </div>

          <textarea
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
            rows={4}
            placeholder="Click 'Speak Your Answer' to speak aloud to Dr. Sophia Vance, or type your comprehensive analytical reasoning here..."
            className="w-full p-4 rounded-2xl bg-lab-50 border border-lab-200 text-xs text-deep-space placeholder-lab-400 focus:outline-none focus:border-quantum-teal focus:bg-white leading-relaxed font-sans resize-none transition-all"
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={() => {
                SoundEffects.playDiscovery();
                Voice.speak(currentQ.audioPrompt, 'en');
              }}
              className="flex items-center justify-center gap-1.5 text-xs font-mono text-future-blue hover:underline"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Hear Model 20s Answer</span>
            </button>

            <button
              type="submit"
              data-testid="evaluate-answer-btn"
              disabled={!answerInput.trim() || aiState === 'evaluating'}
              className="px-7 py-3 rounded-full bg-deep-space text-white hover:bg-deep-space/90 text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-elevated transition-transform active:scale-95 disabled:opacity-40"
            >
              <Sparkles className="w-4 h-4 text-quantum-teal" />
              <span>{aiState === 'evaluating' ? 'Dr. Sophia is Evaluating...' : 'Submit Answer to AI Director'}</span>
            </button>
          </div>
        </form>

        {/* AI EXECUTIVE EVALUATION & 3D RADAR CARD */}
        {evaluationResult && (
          <div className="p-6 rounded-3xl bg-lab-50 border border-lab-900/10 space-y-5 text-xs animate-fadeIn font-sans">
            
            {/* Top Score Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-lab-200 pb-4 font-mono">
              <div>
                <span className="text-[10px] uppercase font-bold text-quantum-teal">
                  COGNITIVE INTERVIEW EVALUATION
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span data-testid="interview-total-score" className="text-xl sm:text-2xl font-bold text-deep-space">
                    {evaluationResult.totalScore} / 100
                  </span>
                  <span className="text-xs text-lab-400 font-bold">TOTAL SCORE</span>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                evaluationResult.totalScore >= 80 
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                  : 'bg-amber-100 text-amber-900 border border-amber-300'
              }`}>
                {evaluationResult.verdictBadge}
              </span>
            </div>

            {/* AI Executive Summary Paragraph */}
            <div className="p-4 rounded-2xl bg-white border border-lab-200 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-deep-space">
                Dr. Sophia Vance's Executive Assessment:
              </span>
              <p className="text-xs text-lab-600 leading-relaxed">
                "{evaluationResult.executiveSummary}"
              </p>
            </div>

            {/* 3D Breakdown Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              <div className="p-3.5 rounded-2xl bg-white border border-lab-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-lab-500">1. Concept Mastery (40%)</span>
                  <span className="font-bold text-deep-space">{evaluationResult.conceptScore}%</span>
                </div>
                <div className="w-full bg-lab-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-quantum-teal h-full rounded-full transition-all duration-700" style={{ width: `${evaluationResult.conceptScore}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-lab-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-lab-500">2. Business Impact (30%)</span>
                  <span className="font-bold text-deep-space">{evaluationResult.impactScore}%</span>
                </div>
                <div className="w-full bg-lab-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-future-blue h-full rounded-full transition-all duration-700" style={{ width: `${evaluationResult.impactScore}%` }} />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-lab-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-lab-500">3. Verbal Fluency (30%)</span>
                  <span className="font-bold text-deep-space">{evaluationResult.fluencyScore}%</span>
                </div>
                <div className="w-full bg-lab-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full transition-all duration-700" style={{ width: `${evaluationResult.fluencyScore}%` }} />
                </div>
              </div>
            </div>

            {/* What Worked & What Is Missing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>What Worked Well:</span>
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  {evaluationResult.whatWorked}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 font-mono">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Critical Missing Piece:</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed">
                  {evaluationResult.whatIsMissing}
                </p>
              </div>
            </div>

            {/* Killer Punchline Tip */}
            <div className="p-4 rounded-2xl bg-quantum-teal/10 border border-quantum-teal/30 text-left space-y-1">
              <span className="text-[10px] font-mono uppercase font-bold text-quantum-teal">
                💡 The Offer-Winning Punchline:
              </span>
              <p className="text-xs font-medium text-deep-space italic">
                {evaluationResult.punchlineTip}
              </p>
            </div>

            {/* Action Bar (Drill Deeper Follow-up / Next Question) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-lab-200">
              {currentQ.followUpQuestion && !isFollowUpActive ? (
                <button
                  onClick={handleTriggerFollowUp}
                  className="px-5 py-2.5 rounded-full bg-future-blue text-white hover:bg-future-blue/90 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all shadow-subtle"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Drill Deeper: Answer Follow-Up Question →</span>
                </button>
              ) : (
                <span className="text-xs font-mono text-emerald-700 font-bold">
                  ✓ Round 1 Evaluation Complete
                </span>
              )}

              <button
                onClick={() => {
                  setSelectedQIndex((prev) => (prev + 1) % INTERVIEW_QUESTIONS.length);
                  SoundEffects.playDiscovery();
                }}
                className="px-5 py-2.5 rounded-full bg-deep-space text-white hover:bg-deep-space/90 text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Next Interview Question →</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
