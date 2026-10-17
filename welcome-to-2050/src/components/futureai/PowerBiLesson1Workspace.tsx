import React, { useState } from 'react';
import {
  Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2,
  CheckCircle2, XCircle, ArrowRight, Trophy, Sparkles,
  Gamepad2, FileText, ChevronRight, BarChart3, Database,
  TrendingUp, Award, Layers, Zap, BookOpen, Clock
} from 'lucide-react';

interface Props {
  onBack: () => void;
  initialTab?: 'video' | 'mcq' | 'game';
}

interface McqQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const MCQ_DATA: McqQuestion[] = [
  {
    id: 1,
    question: "What is the primary role of Power BI in an organization?",
    options: [
      "To write raw backend code and compile server software",
      "To transform raw data into interactive dashboards, visual reports, and business insights",
      "To replace SQL databases completely",
      "To edit videos and produce corporate presentations"
    ],
    correct: 1,
    explanation: "Power BI is Microsoft's premier Business Intelligence tool built specifically to ingest, model, analyze, and visualize data into actionable interactive reports."
  },
  {
    id: 2,
    question: "What does 'Business Intelligence' (BI) mean in modern enterprise analytics?",
    options: [
      "Running automated robots in manufacturing factories",
      "The strategies, processes, and technologies used by enterprises for data analysis of business information to make data-driven decisions",
      "Secret competitive intelligence gathering using corporate spies",
      "Financial auditing done exclusively by chartered accountants"
    ],
    correct: 1,
    explanation: "Business Intelligence (BI) converts raw transactional data into meaningful, strategic knowledge that empowers managers and executives to make informed decisions."
  },
  {
    id: 3,
    question: "Which of the following are the 3 core building blocks of Microsoft Power BI Desktop?",
    options: [
      "Photoshop, Illustrator, and Premiere Pro",
      "Power Query (ETL), Data Model / DAX (Calculations), and Visual Report Canvas (Charts)",
      "HTML, CSS, and JavaScript",
      "Excel Macro, Access DB, and Word Template"
    ],
    correct: 1,
    explanation: "Power BI Desktop integrates Power Query for data cleansing & transformation, the Tabular Data Model with DAX formulas, and the interactive Report Canvas for visuals."
  },
  {
    id: 4,
    question: "Why do companies prefer Power BI over traditional static spreadsheets?",
    options: [
      "Power BI handles millions of rows efficiently, supports automated scheduled refresh, dynamic cross-filtering, and mobile dashboards",
      "Power BI is only available for offline single-computer use",
      "Power BI has no formulas or functions to learn",
      "Spreadsheets cannot save any numbers"
    ],
    correct: 0,
    explanation: "Power BI connects live to enterprise data sources, compresses massive volumes in its VertiPaq engine, and allows users to click any bar or slice to dynamically filter the entire report."
  },
  {
    id: 5,
    question: "In the Power BI workflow, where does data typically go first?",
    options: [
      "Directly to the CFO's email",
      "Power Query Editor (for data ingestion, cleaning, and transformation)",
      "VBA editor for macro scripting",
      "Final PDF export"
    ],
    correct: 1,
    explanation: "The ETL (Extract, Transform, Load) pipeline starts in Power Query Editor, where data is shaped, stripped of errors, and standardized before loading into the Data Model."
  }
];

// Interactive Game: "BI Pipeline Architect" - connect raw data, transformation, model and visual
interface PipelineStep {
  id: string;
  name: string;
  category: 'source' | 'etl' | 'model' | 'visual';
  desc: string;
  icon: string;
}

const ALL_PIPELINE_PIECES: PipelineStep[] = [
  { id: 'sql_sales', name: 'Raw SQL Sales DB', category: 'source', desc: 'Transactions from ERP database', icon: '🗄️' },
  { id: 'pq_clean', name: 'Power Query Cleaning', category: 'etl', desc: 'Remove duplicates & set date types', icon: '🧹' },
  { id: 'dax_rel', name: 'Star Schema & DAX Measures', category: 'model', desc: 'Connect Customers & Sales + Total Revenue DAX', icon: '📐' },
  { id: 'exec_dash', name: 'Interactive Executive Dashboard', category: 'visual', desc: 'Revenue KPIs, regional maps & YoY growth visuals', icon: '📊' },
];

export const PowerBiLesson1Workspace: React.FC<Props> = ({ onBack, initialTab = 'video' }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'mcq' | 'game'>(initialTab);

  // Video State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  // MCQ State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [mcqFinished, setMcqFinished] = useState(false);

  // Game State
  const [pipelineSlots, setPipelineSlots] = useState<{ [key: string]: PipelineStep | null }>({
    slot1: null, // Should be source
    slot2: null, // Should be etl
    slot3: null, // Should be model
    slot4: null, // Should be visual
  });
  const [gameScore, setGameScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameFeedback, setGameFeedback] = useState<string | null>(null);

  // MCQ Handlers
  const handleSelectOption = (qId: number, optIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIndex }));
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQIndex < MCQ_DATA.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      setMcqFinished(true);
    }
  };

  const calculateMcqScore = () => {
    let score = 0;
    MCQ_DATA.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  // Game Handlers
  const handlePlacePiece = (piece: PipelineStep) => {
    if (pipelineSlots.slot1 === null && piece.category === 'source') {
      setPipelineSlots(prev => ({ ...prev, slot1: piece }));
      setGameScore(s => s + 25);
      setGameFeedback("✅ Step 1 complete: Connected to Raw Sales Data!");
    } else if (pipelineSlots.slot1 !== null && pipelineSlots.slot2 === null && piece.category === 'etl') {
      setPipelineSlots(prev => ({ ...prev, slot2: piece }));
      setGameScore(s => s + 25);
      setGameFeedback("✅ Step 2 complete: Cleaned with Power Query!");
    } else if (pipelineSlots.slot2 !== null && pipelineSlots.slot3 === null && piece.category === 'model') {
      setPipelineSlots(prev => ({ ...prev, slot3: piece }));
      setGameScore(s => s + 25);
      setGameFeedback("✅ Step 3 complete: Star Schema & DAX Measures established!");
    } else if (pipelineSlots.slot3 !== null && pipelineSlots.slot4 === null && piece.category === 'visual') {
      setPipelineSlots(prev => ({ ...prev, slot4: piece }));
      setGameScore(s => s + 25);
      setGameCompleted(true);
      setGameFeedback("🎉 Architecture Complete! Executive BI Report is live & interactive!");
    } else {
      setGameFeedback("⚠️ In modern BI, steps must flow in sequence: Data Source ➡️ Power Query ETL ➡️ Data Model / DAX ➡️ Interactive Visuals!");
    }
  };

  const handleResetGame = () => {
    setPipelineSlots({ slot1: null, slot2: null, slot3: null, slot4: null });
    setGameScore(0);
    setGameCompleted(false);
    setGameFeedback(null);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-amber-500/20 bg-[#0f172a]/95 backdrop-blur-md px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition text-xs font-semibold border border-slate-700/60"
          >
            ← Back to Chapters
          </button>
          <div className="h-5 w-px bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">1.1</span>
            <h2 className="text-sm font-bold text-white tracking-wide">
              What is Power BI and Business Intelligence?
            </h2>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-slate-900/90 rounded-xl p-1 border border-slate-800 shadow-inner">
          <button
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'video'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Video Lesson
          </button>
          <button
            onClick={() => setActiveTab('mcq')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'mcq'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            MCQ Practice ({MCQ_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab('game')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              activeTab === 'game'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            BI Pipeline Game
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 flex flex-col">
        {/* ================= TAB 1: VIDEO ================= */}
        {activeTab === 'video' && (
          <div className="flex-1 flex flex-col gap-5">
            {/* Video Player Card */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl aspect-video max-h-[520px] flex items-center justify-center group">
              <video
                src="/videos/card_video_powerbi.mp4"
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                autoPlay
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Cinematic Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 pointer-events-none" />

              {/* Video Title Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-500/30">
                <BarChart3 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Power BI Masterclass • Episode 1.1</span>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between z-10 bg-gradient-to-t from-slate-950 to-transparent">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const vid = document.querySelector('video');
                      if (vid) {
                        if (vid.paused) { vid.play(); setIsPlaying(true); }
                        else { vid.pause(); setIsPlaying(false); }
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center transition shadow-lg shadow-amber-500/30 cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="text-xs font-semibold text-slate-300">06:10 / 06:10 HD</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('mcq')}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition shadow-lg shadow-amber-500/25"
                  >
                    Take Topic 1.1 Quiz <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Study Notes Card */}
            <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
                  <TrendingUp className="w-4 h-4" /> 1. Business Intelligence (BI)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  BI transforms raw company data into interactive dashboards for executive decision-making. Companies use it to track revenue, customer churn, and operational speed in real time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
                  <Layers className="w-4 h-4" /> 2. Three Pillars of Power BI
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  1) <strong>Power Query</strong> for ETL &amp; data cleaning, 2) <strong>Tabular Data Model + DAX</strong> for relationships and dynamic formulas, and 3) <strong>Visual Report Canvas</strong> for interactive storytelling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1.5">
                  <Zap className="w-4 h-4" /> 3. Next Step: Architecture
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Once created in Desktop, reports are published to the <strong>Power BI Service (Cloud)</strong> for executive web access, mobile phone consumption, and automated scheduled daily refresh.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: MCQ ================= */}
        {activeTab === 'mcq' && (
          <div className="flex-1 flex flex-col max-w-3xl w-full mx-auto justify-center">
            {!mcqFinished ? (
              <div className="bg-slate-900/90 rounded-2xl p-6 md:p-8 border border-amber-500/20 shadow-2xl flex flex-col gap-6">
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Question {currentQIndex + 1} of {MCQ_DATA.length}</span>
                  <span className="text-amber-400">Score: {calculateMcqScore()} / {MCQ_DATA.length}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQIndex + 1) / MCQ_DATA.length) * 100}%` }}
                  />
                </div>

                {/* Question Text */}
                <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                  {MCQ_DATA[currentQIndex].question}
                </h3>

                {/* Options List */}
                <div className="flex flex-col gap-3">
                  {MCQ_DATA[currentQIndex].options.map((option, idx) => {
                    const isSelected = selectedAnswers[MCQ_DATA[currentQIndex].id] === idx;
                    const isCorrect = idx === MCQ_DATA[currentQIndex].correct;

                    let btnStyle = "bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600";
                    if (showExplanation) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold";
                      } else if (isSelected) {
                        btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 font-bold";
                      } else {
                        btnStyle = "bg-slate-900/50 border-slate-800/50 text-slate-500 opacity-60";
                      }
                    } else if (isSelected) {
                      btnStyle = "bg-amber-500/20 border-amber-500 text-amber-200 font-bold";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(MCQ_DATA[currentQIndex].id, idx)}
                        disabled={showExplanation}
                        className={`text-left p-4 rounded-xl border text-xs md:text-sm transition flex items-center justify-between ${btnStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-xs font-bold border border-slate-700">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span>{option}</span>
                        </div>
                        {showExplanation && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                        {showExplanation && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                {showExplanation && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed animate-in fade-in duration-200">
                    <strong className="text-amber-400 block mb-1">💡 Concept Breakdown:</strong>
                    {MCQ_DATA[currentQIndex].explanation}
                  </div>
                )}

                {/* Next Button */}
                {showExplanation && (
                  <button
                    onClick={handleNextQuestion}
                    className="self-end px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition shadow-lg shadow-amber-500/20"
                  >
                    {currentQIndex < MCQ_DATA.length - 1 ? "Next Question →" : "See Final Score 🏆"}
                  </button>
                )}
              </div>
            ) : (
              /* MCQ Results Card */
              <div className="bg-slate-900/90 rounded-2xl p-8 border border-amber-500/30 text-center flex flex-col items-center gap-4 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                  <Trophy className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white">Quiz Completed!</h3>
                <p className="text-sm text-slate-300">
                  You scored <strong className="text-amber-400 font-bold text-lg">{calculateMcqScore()}</strong> out of <strong>{MCQ_DATA.length}</strong>!
                </p>
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => {
                      setCurrentQIndex(0);
                      setSelectedAnswers({});
                      setShowExplanation(false);
                      setMcqFinished(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition border border-slate-700"
                  >
                    Retry Quiz 🔄
                  </button>
                  <button
                    onClick={() => setActiveTab('game')}
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold transition shadow-lg shadow-amber-500/25 flex items-center gap-1.5"
                  >
                    Play BI Pipeline Game <Gamepad2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: GAME ================= */}
        {activeTab === 'game' && (
          <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto gap-6">
            <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-amber-400" />
                  Mini-Game: "BI Architecture Architect"
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Assemble the 4 steps of a real-world enterprise Business Intelligence pipeline in proper order!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-extrabold">
                  Score: {gameScore} / 100 XP
                </span>
                <button
                  onClick={handleResetGame}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs"
                  title="Reset Game"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pipeline Slots */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[
                { label: "Step 1: Data Source", slot: pipelineSlots.slot1, expect: 'source' },
                { label: "Step 2: Power Query ETL", slot: pipelineSlots.slot2, expect: 'etl' },
                { label: "Step 3: Modeling & DAX", slot: pipelineSlots.slot3, expect: 'model' },
                { label: "Step 4: Interactive Visuals", slot: pipelineSlots.slot4, expect: 'visual' },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex flex-col items-center justify-center min-h-[140px] text-center transition ${
                    s.slot
                      ? 'bg-amber-950/30 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/40 border-dashed border-slate-800'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {s.label}
                  </span>
                  {s.slot ? (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-2xl">{s.slot.icon}</span>
                      <strong className="text-xs text-amber-300 font-bold">{s.slot.name}</strong>
                      <span className="text-[10px] text-slate-400">{s.slot.desc}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-600 font-semibold">Drop or Click Component Below</span>
                  )}
                </div>
              ))}
            </div>

            {/* Feedback Banner */}
            {gameFeedback && (
              <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 text-xs text-amber-300 font-semibold text-center animate-in fade-in">
                {gameFeedback}
              </div>
            )}

            {/* Available Pipeline Components to Click */}
            {!gameCompleted ? (
              <div className="flex flex-col gap-2 mt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Available Pipeline Components (Click to assign):
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {ALL_PIPELINE_PIECES.map(piece => {
                    const isUsed = Object.values(pipelineSlots).some(s => s?.id === piece.id);
                    return (
                      <button
                        key={piece.id}
                        onClick={() => handlePlacePiece(piece)}
                        disabled={isUsed}
                        className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition ${
                          isUsed
                            ? 'bg-slate-900/40 border-slate-800 text-slate-600 opacity-40 cursor-not-allowed'
                            : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-amber-500/60 text-slate-200 cursor-pointer'
                        }`}
                      >
                        <span className="text-2xl">{piece.icon}</span>
                        <div>
                          <strong className="text-xs font-bold text-white block">{piece.name}</strong>
                          <span className="text-[11px] text-slate-400 block">{piece.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                <Sparkles className="w-10 h-10 text-emerald-400" />
                <h4 className="text-lg font-black text-white">Pipeline Successfully Deployed!</h4>
                <p className="text-xs text-slate-300 max-w-md">
                  You successfully constructed an end-to-end Power BI architecture. You earned <strong>100 XP</strong> for Lesson 1.1!
                </p>
                <button
                  onClick={onBack}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-lg shadow-amber-500/25 mt-2"
                >
                  Return to Power BI Chapters 🚀
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default PowerBiLesson1Workspace;
