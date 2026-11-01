import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Settings,
  PhoneOff,
  Volume2,
  VolumeX,
  Play,
  RotateCcw,
  Check,
  CheckCircle2,
  Clock,
  Lightbulb,
  FileText,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Maximize2,
  Minimize2,
  Bot,
  Layers,
  Award,
  AlertCircle,
  HelpCircle,
  X,
  Send,
  Keyboard
} from 'lucide-react';
import { useThemeAccent } from '../../../context/ThemeAccentContext';
import { Voice } from '../../../services/voiceService';
import { InterviewTrackId, InterviewModeId, INTERVIEW_TRACKS, TRACK_QUESTIONS, QuestionItem, SavedInterviewRecord } from './AiMockInterviewsPage';

// ─── 10 IN-DEPTH DATA ANALYST QUESTIONS WITH REAL-WORLD SCENARIOS ─────────────
const DETAILED_DATA_ANALYST_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: 'Could you introduce yourself and briefly describe a recent data project you worked on, including the tools you used?',
    category: 'Introduction & Background',
    difficulty: 'Easy',
    keywords: ['sql', 'python', 'excel', 'power bi', 'project', 'dataset', 'analysis', 'insights'],
    keyConcepts: ['Clear communication', 'Mentioning specific tools (SQL, Excel, Power BI, Python)', 'Business impact'],
    modelAnswer: 'I have hands-on experience analyzing complex business datasets using SQL, Python, Excel, and Power BI. In my recent retail sales project, I extracted transaction records via SQL queries, cleaned null and duplicate records in Python with Pandas, and built an executive Power BI dashboard with DAX KPIs that improved inventory forecasting by 18%.'
  },
  {
    id: 2,
    question: 'What is the practical difference between WHERE and HAVING in SQL, and when must you use HAVING instead of WHERE?',
    category: 'SQL & Database',
    difficulty: 'Easy',
    keywords: ['where', 'having', 'aggregate', 'group by', 'filter', 'rows', 'groups', 'sum', 'count'],
    keyConcepts: ['Row-level filtering vs aggregated group filtering', 'Execution order before vs after GROUP BY'],
    modelAnswer: 'WHERE filters individual records before any grouping or aggregate functions are calculated. HAVING filters aggregated groups after the GROUP BY clause has executed. For instance, you use WHERE region = "North" to filter rows, but HAVING SUM(sales) > 50000 to filter aggregated regional sums.'
  },
  {
    id: 3,
    question: 'How do you handle missing values in a dataset, and what factors do you consider while choosing a method?',
    category: 'Data Cleaning & EDA',
    difficulty: 'Medium',
    keywords: ['missing', 'null', 'imputation', 'mean', 'median', 'mode', 'drop', 'distribution', 'skewed', 'mcar'],
    keyConcepts: ['Missing data mechanism (MCAR/MAR)', 'Mean vs Median for skewed data', 'Domain-specific defaults'],
    modelAnswer: 'First, I determine the percentage and mechanism of missingness. If missing values are under 3% and random, dropping rows is safe. For numerical features, if the distribution is symmetric I impute using the mean; if skewed by outliers, I use the median. For categorical data, mode or an explicit "Unknown" label is used.'
  },
  {
    id: 4,
    question: 'Explain the difference between a Star Schema and a Snowflake Schema in Power BI or Data Warehousing.',
    category: 'Data Modeling & BI',
    difficulty: 'Medium',
    keywords: ['star', 'snowflake', 'fact', 'dimension', 'normalized', 'denormalized', 'performance', 'joins'],
    keyConcepts: ['Star schema denormalization', 'Snowflake normalization', 'DAX performance optimization'],
    modelAnswer: 'In a Star Schema, fact tables connect directly to denormalized dimension tables via single-hop relationships, maximizing query speed and simplifying DAX in Power BI. A Snowflake Schema normalizes dimension tables into sub-dimensions to minimize redundancy, but requires multi-hop joins which can slow dashboard rendering.'
  },
  {
    id: 5,
    question: 'What are SQL Window Functions, and how do RANK(), DENSE_RANK(), and ROW_NUMBER() differ?',
    category: 'Advanced SQL',
    difficulty: 'Medium',
    keywords: ['window function', 'row_number', 'rank', 'dense_rank', 'over', 'partition by', 'order by', 'ties'],
    keyConcepts: ['OVER (PARTITION BY ... ORDER BY ...)', 'Handling duplicate tie values', 'Consecutive vs skipped ranking'],
    modelAnswer: 'Window functions calculate values across a set of rows related to the current row without collapsing them like GROUP BY. When values tie: ROW_NUMBER() assigns distinct consecutive integers (1, 2, 3); RANK() gives tied rows the same rank and skips the subsequent rank (1, 2, 2, 4); DENSE_RANK() gives tied rows the same rank without skipping (1, 2, 2, 3).'
  },
  {
    id: 6,
    question: 'In Power BI, what is the fundamental difference between a Calculated Column and a DAX Measure?',
    category: 'Power BI & DAX',
    difficulty: 'Medium',
    keywords: ['calculated column', 'measure', 'dax', 'filter context', 'row context', 'ram', 'memory', 'dynamic'],
    keyConcepts: ['Row context vs filter context', 'Storage RAM footprint', 'Dynamic calculation on slice/filter'],
    modelAnswer: 'A Calculated Column computes values row-by-row during data refresh and stores them permanently in RAM, increasing model file size. A DAX Measure computes dynamically at query time based on user filter context (slicers, visuals), consuming no disk storage and evaluating aggregations on the fly.'
  },
  {
    id: 7,
    question: 'How do you detect and treat outliers in numerical variables? Which statistical methods do you rely on?',
    category: 'Statistics & Analytics',
    difficulty: 'Medium',
    keywords: ['outlier', 'iqr', 'z-score', 'box plot', 'standard deviation', 'quartiles', 'winsorization', 'cap'],
    keyConcepts: ['IQR method (Q1 - 1.5*IQR, Q3 + 1.5*IQR)', 'Z-score threshold (|z| > 3)', 'Capping vs removing'],
    modelAnswer: 'For normally distributed data, I calculate Z-scores and flag values where absolute Z exceeds 3. For skewed data, I use the Interquartile Range (IQR) rule, defining outliers as points outside Q1 - 1.5*IQR and Q3 + 1.5*IQR. In treatment, rather than deleting records, I often cap them using Winsorization (95th/99th percentile) to preserve sample size.'
  },
  {
    id: 8,
    question: 'Walk me through how you would design an executive KPI dashboard for an e-commerce business seeing declining conversion rates.',
    category: 'Business Case & Analytics',
    difficulty: 'Hard',
    keywords: ['funnel', 'conversion', 'cart abandonment', 'cohort', 'traffic', 'bounce rate', 'kpi', 'executive'],
    keyConcepts: ['Funnel drop-off stages', 'Segmenting by traffic source / device', 'Actionable recommendation cards'],
    modelAnswer: 'I would structure the dashboard into three tiers: Tier 1 high-level health cards (Conversion Rate, GMV, AOV); Tier 2 full funnel conversion waterfall (Sessions -> Product View -> Add to Cart -> Checkout -> Purchase) to isolate exact drop-off stages; Tier 3 dimensional slicing across acquisition channels, device types (mobile vs desktop), and page latency to pinpoint root causes.'
  },
  {
    id: 9,
    question: 'What is the difference between Correlation and Causation, and how would you prove that a marketing campaign caused a sales lift?',
    category: 'Statistical Rigor & Experimentation',
    difficulty: 'Hard',
    keywords: ['correlation', 'causation', 'ab test', 'control', 'treatment', 'randomized', 'p-value', 'significance'],
    keyConcepts: ['Correlation does not imply causation', 'A/B randomized controlled trial', 'Statistical significance'],
    modelAnswer: 'Correlation measures mutual association between two variables, but does not prove one causes the other due to confounding variables or reverse causality. To prove causation for a marketing campaign, I would implement an A/B test with randomized control and treatment groups, holding other promotions constant, and verify statistical significance using a two-sample t-test with p-value < 0.05.'
  },
  {
    id: 10,
    question: 'Finally, why do you want to join Future IT Industry, and how do you keep yourself updated with evolving AI & data analytics tools?',
    category: 'Culture & Career Growth',
    difficulty: 'Easy',
    keywords: ['learning', 'growth', 'genai', 'future it industry', 'practice', 'community', 'projects'],
    keyConcepts: ['Commitment to continuous learning', 'Passion for data storytelling', 'Future vision'],
    modelAnswer: 'Future IT Industry emphasizes practical, project-first learning aligned with high-growth industry demands. I keep myself sharp by analyzing real-world datasets, exploring GenAI tools like Copilot for automated EDA, studying technical documentation, and building end-to-end portfolio projects.'
  }
];

export interface LiveAiInterviewRoomProps {
  userName: string;
  trackId: InterviewTrackId;
  mode: InterviewModeId;
  onExit: () => void;
  onComplete: (record: SavedInterviewRecord) => void;
}

export const LiveAiInterviewRoom: React.FC<LiveAiInterviewRoomProps> = ({
  userName = 'Rahul Sharma',
  trackId = 'data-analyst',
  mode = 'ai',
  onExit,
  onComplete,
}) => {
  const { playClick } = useThemeAccent();

  // Track & Question Bank
  const trackObj = useMemo(
    () => INTERVIEW_TRACKS.find((t) => t.id === trackId) || INTERVIEW_TRACKS[0],
    [trackId]
  );

  const questionsList = useMemo(() => {
    if (trackId === 'data-analyst') {
      return DETAILED_DATA_ANALYST_QUESTIONS;
    }
    const base = TRACK_QUESTIONS[trackId] || TRACK_QUESTIONS['data-analyst'];
    // Expand to 10 questions if fewer
    if (base.length < 10) {
      const merged = [...base, ...DETAILED_DATA_ANALYST_QUESTIONS.slice(0, 10 - base.length)];
      return merged.map((q, idx) => ({ ...q, id: idx + 1 }));
    }
    return base.slice(0, 10);
  }, [trackId]);

  // Current session states
  const [currentStep, setCurrentStep] = useState<'intro' | 'interview' | 'feedback' | 'report'>('interview');
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [perQuestionTimer, setPerQuestionTimer] = useState<number>(180); // 3 minutes per question
  const [totalTimerSeconds, setTotalTimerSeconds] = useState<number>(25 * 60); // 25 minutes total
  const [isAnswerMode, setIsAnswerMode] = useState<'speak' | 'type'>('speak');

  // Candidate input
  const [currentTranscript, setCurrentTranscript] = useState<string>('');
  const [typedAnswer, setTypedAnswer] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isInterviewerSpeaking, setIsInterviewerSpeaking] = useState<boolean>(false);
  const [hasFinishedSpeaking, setHasFinishedSpeaking] = useState<boolean>(false);

  // Audio & Video controls
  const [isMicMuted, setIsMicMuted] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(mode === 'video');
  const [isSpeakerMuted, setIsSpeakerMuted] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);

  // Student recorded answers map: question index -> answer text
  const [recordedAnswers, setRecordedAnswers] = useState<Record<number, string>>({});
  const [evaluatedResults, setEvaluatedResults] = useState<any[]>([]);

  // Refs
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<any>(null);
  const roomContainerRef = useRef<HTMLDivElement | null>(null);

  const currentQ = questionsList[questionIndex] || questionsList[0];
  const progressPercent = Math.round(((questionIndex + 1) / questionsList.length) * 100);

  // ─── CAMERA INITIALIZATION ──────────────────────────────────────────────────
  useEffect(() => {
    let activeStream: MediaStream | null = null;
    const initCamera = async () => {
      if (isCameraActive && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 320, height: 240, facingMode: 'user' },
            audio: false,
          });
          activeStream = stream;
          mediaStreamRef.current = stream;
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
            localVideoRef.current.play().catch(() => {});
          }
        } catch (e) {
          console.warn('Camera feed not available:', e);
          setIsCameraActive(false);
        }
      } else {
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach((t) => t.stop());
          mediaStreamRef.current = null;
        }
      }
    };
    initCamera();

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((t) => t.stop());
      }
    };
  }, [isCameraActive]);

  // ─── SPEAK QUESTION USING INDIAN ENGLISH / NATURAL TTS ──────────────────────
  const speakCurrentQuestion = (text: string) => {
    if (isSpeakerMuted || typeof window === 'undefined') return;
    try {
      Voice.stopSpeaking();
      setIsInterviewerSpeaking(true);
      Voice.speak(text, 'en', () => {
        setIsInterviewerSpeaking(false);
        // Automatically start listening after question finishes if speak mode is active
        if (isAnswerMode === 'speak' && !isMicMuted) {
          startSpeechRecognition();
        }
      });
    } catch {
      setIsInterviewerSpeaking(false);
    }
  };

  // Speak initial question on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      speakCurrentQuestion(currentQ.question);
    }, 800);
    return () => {
      clearTimeout(timer);
      Voice.stopSpeaking();
    };
  }, [questionIndex]);

  // ─── PER-QUESTION & TOTAL TIMERS ───────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setPerQuestionTimer((prev) => (prev > 0 ? prev - 1 : 0));
      setTotalTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // ─── SPEECH RECOGNITION (MIC) ───────────────────────────────────────────────
  const startSpeechRecognition = () => {
    if (isMicMuted || typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) return;

    try {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      const recognition = new SpeechRec();
      recognition.lang = 'en-IN';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setCurrentTranscript((prev) => {
          const combined = prev ? `${prev} ${transcript}` : transcript;
          return combined;
        });
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (e) {
      console.warn('Speech recognition start failed:', e);
      setIsListening(false);
    }
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setIsListening(false);
  };

  const handleToggleListening = () => {
    playClick();
    if (isListening) {
      stopSpeechRecognition();
    } else {
      Voice.stopSpeaking();
      setIsInterviewerSpeaking(false);
      startSpeechRecognition();
    }
  };

  // ─── SUBMIT & NEXT QUESTION ─────────────────────────────────────────────────
  const handleSubmitAndNext = () => {
    playClick();
    Voice.stopSpeaking();
    stopSpeechRecognition();

    const finalAnswer = (isAnswerMode === 'speak' ? currentTranscript : typedAnswer).trim();
    const updatedAnswers = {
      ...recordedAnswers,
      [questionIndex]: finalAnswer || '(Answer skipped or brief)',
    };
    setRecordedAnswers(updatedAnswers);

    // Clear current question input
    setCurrentTranscript('');
    setTypedAnswer('');
    setPerQuestionTimer(180);

    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      // Finished all questions -> Run Evaluation & generate report
      finalizeAndEvaluate(updatedAnswers);
    }
  };

  // ─── SKIP QUESTION ──────────────────────────────────────────────────────────
  const handleSkipQuestion = () => {
    playClick();
    Voice.stopSpeaking();
    stopSpeechRecognition();

    const updatedAnswers = {
      ...recordedAnswers,
      [questionIndex]: '(Skipped)',
    };
    setRecordedAnswers(updatedAnswers);

    setCurrentTranscript('');
    setTypedAnswer('');
    setPerQuestionTimer(180);

    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      finalizeAndEvaluate(updatedAnswers);
    }
  };

  // ─── FINALIZE AND GENERATE REPORT ───────────────────────────────────────────
  const finalizeAndEvaluate = (finalAnswersMap: Record<number, string>) => {
    setIsEvaluating(true);
    setCurrentStep('feedback');

    // Clean up streams
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
    }

    setTimeout(() => {
      const answersBreakdown = questionsList.map((q, idx) => {
        const rawAns = (finalAnswersMap[idx] || '').trim();
        const lowerAns = rawAns.toLowerCase();

        let keywordMatches = 0;
        q.keywords.forEach((kw) => {
          if (lowerAns.includes(kw.toLowerCase())) keywordMatches++;
        });

        const wordCount = rawAns.split(/\s+/).filter(Boolean).length;
        let score = 0;

        if (rawAns === '(Skipped)' || wordCount === 0) {
          score = 0;
        } else {
          const depthScore = Math.min(4, (wordCount / 35) * 4);
          const kwScore = q.keywords.length > 0 ? (keywordMatches / q.keywords.length) * 6 : 4;
          score = Math.min(10, Math.max(3, parseFloat((depthScore + kwScore).toFixed(1))));
        }

        const strengths: string[] = [];
        const improvements: string[] = [];

        if (keywordMatches >= 2) {
          strengths.push(`Precise industry terminology (${keywordMatches} key terms accurately referenced).`);
        }
        if (wordCount > 30) {
          strengths.push('Good structured explanation with sound analytical reasoning.');
        } else {
          improvements.push('Elaborate with concrete tools, numbers, or project examples.');
        }

        return {
          question: q.question,
          userAnswer: rawAns,
          score,
          feedback:
            score >= 8
              ? 'Excellent answer showing real project expertise and placement readiness.'
              : score >= 5
              ? 'Sound foundational understanding, but add specific metrics and business impact.'
              : 'Needs improvement. Review the model answer and practice structured STAR methodology.',
          strengths,
          improvements,
          modelAnswer: q.modelAnswer,
        };
      });

      const totalValid = answersBreakdown.filter((a) => a.score > 0).length;
      const avgScore =
        totalValid > 0
          ? parseFloat(
              (answersBreakdown.reduce((acc, c) => acc + c.score, 0) / answersBreakdown.length).toFixed(1)
            )
          : 0;

      const record: SavedInterviewRecord = {
        id: `live_${Date.now()}`,
        role: trackObj.name,
        trackId,
        mode,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        score: avgScore,
        maxScore: 10,
        totalQuestions: questionsList.length,
        answers: answersBreakdown,
      };

      // Save to localStorage
      try {
        const existingStr = localStorage.getItem(`futureai_mock_interviews_${userName}`);
        const existing = existingStr ? JSON.parse(existingStr) : [];
        localStorage.setItem(`futureai_mock_interviews_${userName}`, JSON.stringify([record, ...existing]));
      } catch (err) {
        console.warn('Failed to save interview record to localStorage:', err);
      }

      setEvaluatedResults(answersBreakdown);
      setIsEvaluating(false);
      onComplete(record);
    }, 1500);
  };

  // ─── REPLAY AUDIO ───────────────────────────────────────────────────────────
  const handleReplayQuestion = () => {
    playClick();
    speakCurrentQuestion(currentQ.question);
  };

  // ─── FORMAT SECONDS ─────────────────────────────────────────────────────────
  const formatTimerMinSec = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      ref={roomContainerRef}
      className="relative w-full min-h-[calc(100vh-65px)] bg-[#070b24] text-white flex flex-col justify-between overflow-x-hidden"
    >
      {/* Subtle Ambient Background Neon Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* MAIN CONTAINER */}
      <div className="max-w-[1560px] w-full mx-auto p-3 sm:p-4 lg:p-5 flex-1 flex flex-col space-y-4">
        
        {/* THREE-COLUMN GRID (1:1 Reference Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-start flex-1">
          
          {/* ═══════════════════════════════════════════════════════════════
              LEFT SIDEBAR — PROGRESS & STAGES (col-span-12 lg:col-span-3)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-3.5">
            
            {/* Top Progress Stages Card */}
            <div className="bg-[#10173d]/90 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xl space-y-4">
              
              {/* Header: Role Title */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-indigo-500/20">
                <div className="w-8 h-8 rounded-xl bg-purple-600/80 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-500/30">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs text-indigo-300 font-bold uppercase tracking-wider">
                    Mock Interview
                  </h3>
                  <h2 className="text-sm sm:text-[15px] font-black text-white leading-tight">
                    {trackObj.name}
                  </h2>
                </div>
              </div>

              {/* 4 Connected Stages */}
              <div className="space-y-2.5">
                
                {/* Step 1: Introduction */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>1 Introduction</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Step 2: Live Interview (Active) */}
                <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-xs shadow-md shadow-purple-600/30 border border-purple-400/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white text-purple-700 flex items-center justify-center shadow-xs">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span>2 Interview</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono">
                    ({questionIndex + 1}/{questionsList.length})
                  </span>
                </div>

                {/* Step 3: AI Feedback */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      3
                    </div>
                    <span>3 AI Feedback</span>
                  </div>
                </div>

                {/* Step 4: Detailed Report */}
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">
                      4
                    </div>
                    <span>4 Detailed Report</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Progress Metrics Card */}
            <div className="bg-[#10173d]/90 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xl space-y-3.5">
              
              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-300">Progress</span>
                  <span className="text-cyan-400 font-mono">{progressPercent}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 rounded-full transition-all duration-300 shadow-sm"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Key Stats */}
              <div className="space-y-2 pt-1 border-t border-indigo-500/20 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Total Questions</span>
                  </span>
                  <span className="font-bold text-white">{questionsList.length}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Answered</span>
                  </span>
                  <span className="font-bold text-white">{questionIndex}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Time Left</span>
                  </span>
                  <span className="font-bold text-amber-300 font-mono">
                    {formatTimerMinSec(totalTimerSeconds)}
                  </span>
                </div>
              </div>

              {/* End Interview Button (Red outline) */}
              <button
                type="button"
                onClick={() => setShowExitConfirm(true)}
                className="w-full py-2.5 px-3 rounded-xl border border-red-500/40 bg-red-950/20 hover:bg-red-900/30 text-red-400 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
              >
                <PhoneOff className="w-3.5 h-3.5" />
                <span>End Interview</span>
              </button>

            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              CENTER COLUMN — AI INTERVIEWER SCREEN & CONTROLS (col-span-12 lg:col-span-6)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            
            {/* 1. Large Professional AI Interviewer Video Stage */}
            <div className="relative rounded-3xl overflow-hidden border border-indigo-500/40 shadow-2xl bg-black aspect-[16/9] w-full flex items-center justify-center group">
              
              {/* Host Portrait / Live Video Backdrop */}
              <img
                src="/images/dashboard/live_interviewer_avatar_hd.png"
                alt="AI Tech Interviewer"
                className="w-full h-full object-cover block"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/dashboard/live_ai_interviewer_host.png';
                }}
              />

              {/* Soft Gradient Overlay at top and bottom for UI readability */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

              {/* Top-Left Badge: AI Interviewer */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-[#1e1b4b]/80 backdrop-blur-md border border-purple-400/40 text-purple-200 flex items-center gap-1.5 shadow-md">
                <Bot className="w-3.5 h-3.5 text-cyan-300" />
                <span>AI Interviewer</span>
              </div>

              {/* Top-Right Badge: LIVE */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-red-600/90 text-white flex items-center gap-1.5 shadow-lg shadow-red-600/40">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>LIVE</span>
              </div>

              {/* Student Webcam Picture-in-Picture (If camera enabled) */}
              {isCameraActive && (
                <div className="absolute top-12 right-3 w-32 sm:w-40 aspect-video rounded-xl overflow-hidden border-2 border-indigo-400 shadow-2xl bg-slate-900 z-20">
                  <video
                    ref={localVideoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover transform -scale-x-100"
                  />
                  <div className="absolute bottom-1 left-1.5 px-1.5 py-0.5 rounded text-[8.5px] font-bold bg-black/60 text-white">
                    You
                  </div>
                </div>
              )}

              {/* Bottom-Left: Cyan Glowing Audio Equalizer Waveform */}
              <div className="absolute bottom-3.5 left-4 flex items-end gap-1 pointer-events-none z-10">
                {[12, 22, 16, 28, 14, 24, 18].map((h, idx) => (
                  <span
                    key={idx}
                    className={`w-1 rounded-full bg-gradient-to-t from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-150 ${
                      isInterviewerSpeaking || isListening ? 'animate-pulse' : 'opacity-40'
                    }`}
                    style={{ height: `${isInterviewerSpeaking ? h : isListening ? h * 0.7 : 8}px` }}
                  />
                ))}
              </div>

              {/* Bottom-Center: Translucent Call Controls Capsule */}
              <div className="absolute bottom-3 inset-x-0 mx-auto w-fit px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-2 sm:gap-2.5 z-20 shadow-2xl">
                
                {/* Mic Mute/Unmute */}
                <button
                  type="button"
                  onClick={() => setIsMicMuted(!isMicMuted)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isMicMuted ? 'bg-red-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                  title={isMicMuted ? 'Unmute Microphone' : 'Mute Microphone'}
                >
                  {isMicMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                {/* Camera Toggle */}
                <button
                  type="button"
                  onClick={() => setIsCameraActive(!isCameraActive)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isCameraActive ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-red-500/80 text-white'
                  }`}
                  title={isCameraActive ? 'Turn Off Camera' : 'Turn On Camera'}
                >
                  {isCameraActive ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                </button>

                {/* Speaker Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    setIsSpeakerMuted(!isSpeakerMuted);
                    if (!isSpeakerMuted) Voice.stopSpeaking();
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                    isSpeakerMuted ? 'bg-amber-500 text-white' : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                  title={isSpeakerMuted ? 'Unmute AI Voice' : 'Mute AI Voice'}
                >
                  {isSpeakerMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Replay Question Button */}
                <button
                  type="button"
                  onClick={handleReplayQuestion}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
                  title="Replay Question Audio"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* End Call (Red button) */}
                <button
                  type="button"
                  onClick={() => setShowExitConfirm(true)}
                  className="w-8 h-8 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-md shadow-red-600/40"
                  title="End Interview"
                >
                  <PhoneOff className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom-Right: Fullscreen Toggle */}
              <button
                type="button"
                onClick={() => {
                  if (!document.fullscreenElement && roomContainerRef.current) {
                    roomContainerRef.current.requestFullscreen().catch(() => {});
                    setIsFullscreen(true);
                  } else if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => {});
                    setIsFullscreen(false);
                  }
                }}
                className="absolute bottom-3.5 right-4 w-7 h-7 rounded-lg bg-black/50 text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-colors z-10"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

            </div>

            {/* 2. Below Interviewer: Active Question Card & Answer Controls */}
            <div className="bg-[#10173d]/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-indigo-500/30 shadow-2xl space-y-4">
              
              {/* Question Header Pills */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600/30 border border-purple-400/40 text-purple-200 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-purple-300" />
                  <span>Question {questionIndex + 1} of {questionsList.length}</span>
                </span>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800/80 border border-slate-700 text-slate-300 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Time Left: {formatTimerMinSec(perQuestionTimer)}</span>
                </span>
              </div>

              {/* Question Text Box */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {currentQ.question}
                  </h4>
                </div>
              </div>

              {/* Mode Toggle Pills (Speak vs Type) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAnswerMode('speak')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isAnswerMode === 'speak'
                      ? 'bg-purple-600/40 text-purple-200 border-purple-400 shadow-sm'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Speak (Recommended)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsAnswerMode('type');
                    stopSpeechRecognition();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isAnswerMode === 'type'
                      ? 'bg-purple-600/40 text-purple-200 border-purple-400 shadow-sm'
                      : 'bg-white/5 text-slate-400 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Keyboard className="w-3.5 h-3.5" />
                  <span>Type Answer</span>
                </button>
              </div>

              {/* Answer Interaction Area */}
              {isAnswerMode === 'speak' ? (
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-indigo-500/20 flex flex-col items-center justify-center text-center space-y-3">
                  
                  {/* Waveform + Microphone Button */}
                  <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
                    {/* Left Audio Waves */}
                    <div className="flex items-center gap-1">
                      {[8, 14, 20, 12, 24, 16, 28, 10].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full bg-indigo-400/80 transition-all ${
                            isListening ? 'animate-pulse' : 'opacity-30'
                          }`}
                          style={{ height: `${isListening ? h : 6}px` }}
                        />
                      ))}
                    </div>

                    {/* Central Glowing Mic Button */}
                    <button
                      type="button"
                      onClick={handleToggleListening}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                        isListening
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_24px_rgba(236,72,153,0.8)] scale-105'
                          : 'bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.4)]'
                      }`}
                    >
                      <Mic className={`w-6 h-6 ${isListening ? 'animate-bounce' : ''}`} />
                    </button>

                    {/* Right Audio Waves */}
                    <div className="flex items-center gap-1">
                      {[10, 28, 16, 24, 12, 20, 14, 8].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full bg-indigo-400/80 transition-all ${
                            isListening ? 'animate-pulse' : 'opacity-30'
                          }`}
                          style={{ height: `${isListening ? h : 6}px` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="text-xs font-semibold text-slate-300">
                    {isListening ? (
                      <span className="text-pink-400 animate-pulse font-bold">
                        Listening... Speak your answer now
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        Click microphone to start speaking your answer
                      </span>
                    )}
                  </div>

                  {/* Real-time Transcription Box */}
                  {currentTranscript && (
                    <div className="w-full text-left p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 max-h-24 overflow-y-auto leading-relaxed">
                      <strong className="text-purple-300">Transcript:</strong> {currentTranscript}
                    </div>
                  )}

                </div>
              ) : (
                /* Type Answer Area */
                <div className="space-y-2">
                  <textarea
                    value={typedAnswer}
                    onChange={(e) => setTypedAnswer(e.target.value)}
                    placeholder="Type your structured answer here. Include relevant tools (SQL, Excel, Python), methods, and business context..."
                    rows={4}
                    className="w-full p-3.5 rounded-2xl bg-black/40 border border-indigo-500/30 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-black/60 transition-all resize-none"
                  />
                  <div className="text-[11px] text-slate-400 text-right">
                    Word count: <strong className="text-white">{typedAnswer.split(/\s+/).filter(Boolean).length}</strong> words
                  </div>
                </div>
              )}

              {/* Action Buttons: Skip and Submit & Next */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleSkipQuestion}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all cursor-pointer flex items-center gap-1.5 active:scale-[0.98]"
                >
                  <span>» Skip</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmitAndNext}
                  className="flex-1 py-2.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98]"
                >
                  <span>
                    {questionIndex + 1 < questionsList.length ? 'Submit & Next →' : 'Finish & View AI Report →'}
                  </span>
                </button>
              </div>

            </div>

          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RIGHT SIDEBAR — DETAILS, LIVE TIPS & AI CARD (col-span-12 lg:col-span-3)
             ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3 space-y-3.5">
            
            {/* Card 1: Interview Details */}
            <div className="bg-[#10173d]/90 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2 pb-1.5 border-b border-indigo-500/20">
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Interview Details
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Role</span>
                  <span className="font-bold text-white">{trackObj.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Mode</span>
                  <span className="font-bold text-cyan-300">
                    {mode === 'video' ? 'Video Interview' : 'AI Voice Interview'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Questions</span>
                  <span className="font-bold text-white">{questionsList.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-bold text-white">~ 25 Minutes</span>
                </div>
              </div>
            </div>

            {/* Card 2: Live Tips */}
            <div className="bg-[#10173d]/90 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2 pb-1.5 border-b border-indigo-500/20">
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Lightbulb className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  Live Tips
                </h3>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                {[
                  'Be clear and structured in your answer',
                  'Use real examples from projects/work',
                  'Mention tools (SQL, Excel, Power BI, Python)',
                  'Keep your answer concise (1–2 minutes)',
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: AI Interviewer Host Card */}
            <div className="bg-[#10173d]/90 backdrop-blur-md rounded-2xl p-4 border border-indigo-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-2 pb-1.5 border-b border-indigo-500/20">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  AI Interviewer
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-400 shrink-0 bg-slate-900 shadow-md">
                  <img
                    src="/images/dashboard/generated_mock_robot_hd.png"
                    alt="AI Host Bot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/dashboard/live_bot_avatar_circle.png';
                    }}
                  />
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  I'm your AI Interviewer. I'll ask you role-specific questions, listen to your answers, and give you detailed feedback at the end.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ─── CONFIRM END INTERVIEW MODAL ─── */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#10173d] border border-indigo-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">End Interview Session?</h3>
              <p className="text-xs text-slate-400 mt-1">
                You have completed {questionIndex} of {questionsList.length} questions. Would you like to evaluate your responses so far, or exit?
              </p>
            </div>
            <div className="flex items-center justify-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  finalizeAndEvaluate(recordedAnswers);
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Finish & Evaluate
              </button>
              <button
                type="button"
                onClick={() => {
                  Voice.stopSpeaking();
                  if (mediaStreamRef.current) {
                    mediaStreamRef.current.getTracks().forEach((t) => t.stop());
                  }
                  onExit();
                }}
                className="py-2 px-3 rounded-xl bg-red-600/80 hover:bg-red-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── EVALUATING LOADER OVERLAY ─── */}
      {isEvaluating && (
        <div className="fixed inset-0 z-50 bg-[#070b24]/90 backdrop-blur-md flex flex-col items-center justify-center p-4 space-y-4">
          <div className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent animate-spin" />
          <div className="text-center">
            <h3 className="text-base font-bold text-white">AI Evaluating Your Interview...</h3>
            <p className="text-xs text-slate-400 mt-1">
              Analyzing technical keywords, question depth, and communication benchmarks.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
