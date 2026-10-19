import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Clock,
  Code2,
  Gamepad2,
  Mic,
  MicOff,
  Sparkles,
  Award,
  Bot,
  Send,
  HelpCircle,
  Trophy,
  Star,
  ExternalLink,
  Flame,
  Coins,
  Check,
  X,
  Zap,
  BookOpen,
  Menu,
  Bell,
  Download,
  FileText,
  FileCode,
  Link,
  PhoneOff,
  Video,
  VideoOff,
  Lightbulb,
  Trash2,
  LayoutGrid,
  Search,
  Wallet
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { awardLearnerTelemetry } from '../../../services/realAuthService';
import type { WorkspaceStepId } from '../PythonTopicWorkspace';
import { TOPICS } from '../PythonChapterView';
import { LESSON_BUNNY_VIDEOS, BUNNY_STREAM_CONFIG } from '../../../services/bunnyVideoService';

export interface MobileTopicWorkspaceProps {
  userName?: string;
  topicId?: number;
  initialStep?: WorkspaceStepId;
  onBack: () => void;
  onOpenAdvisor?: () => void;
  onOpenUnlockModal?: (moduleName?: string) => void;
  onOpenProfile?: () => void;
}

export const MobileTopicWorkspace: React.FC<MobileTopicWorkspaceProps> = ({
  userName = 'Learner',
  topicId = 1,
  initialStep = 'learn',
  onBack,
  onOpenAdvisor,
  onOpenUnlockModal,
  onOpenProfile,
}) => {
  const currentTopic = TOPICS.find((t) => t.id === topicId) || TOPICS[0];
  const firstLesson = currentTopic.lessons[0] || { title: currentTopic.title, time: '08:00' };

  const normalizeStep = (step?: WorkspaceStepId): WorkspaceStepId => {
    if (step === 'interview') return 'interview';
    if (step === 'play' || step === 'practice' || step === 'code') return 'play';
    return 'learn';
  };

  // Current Active Step: 'learn' (Video) | 'play' (Game) | 'interview' (Mock Interview)
  const [activeStep, setActiveStep] = useState<WorkspaceStepId>(normalizeStep(initialStep));

  useEffect(() => {
    if (initialStep) {
      setActiveStep(normalizeStep(initialStep));
    }
  }, [initialStep]);

  // Official Bunny.net Stream Video resolution
  const bunnyVideoId =
    (topicId === 1 ? '56e7a759-1562-4700-ab14-d5f31b921dc1' : '') ||
    LESSON_BUNNY_VIDEOS[`topic_${topicId}_lesson_1`]?.videoId ||
    '56e7a759-1562-4700-ab14-d5f31b921dc1';
  const bunnyLibraryId = BUNNY_STREAM_CONFIG.libraryId || '783689';
  const bunnyEmbedUrl = bunnyVideoId
    ? `https://iframe.mediadelivery.net/embed/${bunnyLibraryId}/${bunnyVideoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`
    : '';

  // Auto advance to Game when Bunny video finishes
  useEffect(() => {
    const handleBunnyMessage = (event: MessageEvent) => {
      try {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data);
          if (data.event === 'ended' || data.type === 'ended' || data.status === 'ended') {
            soundEffects.playCelebration();
            setActiveStep('play');
          }
        }
      } catch {}
    };
    window.addEventListener('message', handleBunnyMessage);
    return () => window.removeEventListener('message', handleBunnyMessage);
  }, []);

  const playTactile = () => {
    try {
      soundEffects.playClick();
    } catch {
      // fallback
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. VIDEO SCREEN STATE (Matches media_1792386781104_54a2e591.jpg)
  // ─────────────────────────────────────────────────────────────────────────────
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(65); // 65% as shown in screenshot
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(480); // 8:00 min
  const [isVideoMuted, setIsVideoMuted] = useState(false);

  const toggleVideoPlay = () => {
    playTactile();
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsVideoPlaying(true);
    }
  };

  const handleVideoTimeUpdate = () => {
    if (!videoRef.current) return;
    setVideoCurrentTime(videoRef.current.currentTime);
    if (videoRef.current.duration) {
      setVideoDuration(videoRef.current.duration);
      setVideoProgress(Math.round((videoRef.current.currentTime / videoRef.current.duration) * 100));
    }
  };

  const formatVideoTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. GAME SCREEN STATE (Matches media_1792386770782_47d1c2a3.png)
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeGameLevel, setActiveGameLevel] = useState<number>(1);
  const [selectedGameOption, setSelectedGameOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [gameQuestionsDone, setGameQuestionsDone] = useState<number>(0);
  const [gameScore, setGameScore] = useState<number>(10);

  const gameQuestion = {
    num: 1,
    title: "QUESTION 1 — CONCEPT CHALLENGE",
    text: "A computer follows instructions to complete a task. What is this process called?",
    options: [
      { id: 'A', text: "Programming", correct: true },
      { id: 'B', text: "Browsing", correct: false },
      { id: 'C', text: "Charging", correct: false },
      { id: 'D', text: "Printing", correct: false },
    ],
  };

  const handleSelectGameOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    playTactile();
    setSelectedGameOption(optId);
  };

  const handleSubmitGameAnswer = () => {
    if (!selectedGameOption || isAnswerSubmitted) return;
    playTactile();
    setIsAnswerSubmitted(true);
    const correct = selectedGameOption === 'A';
    setIsAnswerCorrect(correct);
    if (correct) {
      try {
        soundEffects.playCelebration();
        soundEffects.playCoinCollect();
        awardLearnerTelemetry(20, 5);
      } catch {}
      setGameQuestionsDone((prev) => Math.min(10, prev + 1));
      setGameScore((prev) => prev + 10);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. MOCK INTERVIEW SCREEN STATE (Matches media_1792386770731_fc4283bf.png)
  // ─────────────────────────────────────────────────────────────────────────────
  const [activeInterviewQ, setActiveInterviewQ] = useState<number>(1);
  const [activeInterviewTab, setActiveInterviewTab] = useState<'feedback' | 'model' | 'points'>('feedback');
  const [interviewAnswerText, setInterviewAnswerText] = useState<string>('');
  const [isInterviewRecording, setIsInterviewRecording] = useState<boolean>(false);
  const [isInterviewSubmitted, setIsInterviewSubmitted] = useState<boolean>(false);
  const [isCameraOn, setIsCameraOn] = useState<boolean>(true);
  const [interviewTimeLeft, setInterviewTimeLeft] = useState<number>(592); // 09:52

  useEffect(() => {
    if (activeStep !== 'interview') return;
    const timer = setInterval(() => {
      setInterviewTimeLeft((prev) => (prev > 0 ? prev - 1 : 600));
    }, 1000);
    return () => clearInterval(timer);
  }, [activeStep]);

  const formatInterviewTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleSpeechRecording = () => {
    playTactile();
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Microphone recognition is not supported in this browser. Please type your answer.");
      return;
    }

    if (isInterviewRecording) {
      setIsInterviewRecording(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsInterviewRecording(true);
      recognition.onend = () => setIsInterviewRecording(false);
      recognition.onerror = () => setIsInterviewRecording(false);
      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setInterviewAnswerText((prev) => (prev ? prev + ' ' + text : text));
      };

      recognition.start();
    } catch {
      setIsInterviewRecording(false);
    }
  };

  const handleSpeakQuestion = () => {
    playTactile();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      "What is programming and can you give one real-life example?"
    );
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleInsertInterviewExample = () => {
    playTactile();
    setInterviewAnswerText(
      "Programming is giving step-by-step instructions to a computer to perform a specific task. A real-life example is an ATM machine: when you insert a card and enter a PIN, the system follows a programmed algorithm to verify your credentials, check balance, dispense cash, and update your account."
    );
  };

  const handleSubmitInterviewAnswer = () => {
    if (!interviewAnswerText.trim()) {
      alert("Please speak or write your answer before submitting.");
      return;
    }
    playTactile();
    setIsInterviewSubmitted(true);
    setActiveInterviewTab('feedback');
    try {
      soundEffects.playCelebration();
      awardLearnerTelemetry(25, 10);
    } catch {}
  };

  return (
    <div className="w-full min-h-screen bg-[#f3f8fe] text-slate-900 pb-32 select-none text-left font-sans">
      {/* ═════════════════════════════════════════════════════════════════════════
          TOP GLOBAL HEADER (Matching all 3 reference screenshots)
          ═════════════════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 px-3.5 py-2 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer active:scale-90 transition-transform"
            aria-label="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* FUTURE IT INDUSTRY LOGO */}
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-xs">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black tracking-tight text-blue-950 leading-none">
                FUTURE <span className="text-blue-600">IT</span> INDUSTRY
              </span>
              <span className="text-[7.5px] font-bold text-slate-400 tracking-wider leading-none mt-0.5">
                Learn • Play • Build • Grow
              </span>
            </div>
          </div>
        </div>

        {/* Right: EXACT 4 Items: Search, Wallet, Notification, Profile Picture */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* 1. Search */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              if (typeof window !== 'undefined') window.location.hash = '#data-analyst';
            }}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Search"
            title="Search courses"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* 2. Wallet Pill with Amount */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            }}
            className="h-8 px-2.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100/90 hover:from-amber-100 hover:to-amber-200 border border-amber-300 text-amber-950 flex items-center gap-1 active:scale-95 transition-all cursor-pointer shadow-2xs shrink-0"
            aria-label="Wallet & Earnings"
            title="Wallet Balance"
          >
            <Wallet className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span className="text-xs font-black text-amber-950 leading-none">
              ₹500
            </span>
          </button>

          {/* 3. Notification */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              alert('🔔 Welcome to FUTURE IT INDUSTRY!\nYou are currently in Python Chapter 1.');
            }}
            className="relative w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-90 transition-all cursor-pointer"
            aria-label="Notifications"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[8.5px] font-black flex items-center justify-center ring-1.5 ring-white">
              3
            </span>
          </button>

          {/* 4. Profile Picture (Gmail avatar) */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              onOpenProfile?.();
            }}
            className="relative rounded-full p-0.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xs active:scale-90 transition-all cursor-pointer ml-0.5"
            aria-label="Profile"
            title="Profile"
          >
            <img
              src={(typeof window !== 'undefined' ? localStorage.getItem('futureai_user_avatar') : null) || '/images/profile_student_avatar.png'}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/profile_student_avatar.png';
              }}
              alt={userName}
              className="w-7 h-7 rounded-full object-cover border border-white"
            />
          </button>
        </div>
      </header>

      {/* ═════════════════════════════════════════════════════════════════════════
          SUB-NAV STEPPER BAR (Video > Level 1 Game > Mock Interview)
          ═════════════════════════════════════════════════════════════════════════ */}
      <div className="bg-white border-b border-slate-200 px-3 py-1.5 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {/* Python Course Tag */}
          <div className="flex items-center gap-1.5 shrink-0 mr-1">
            <img
              src="/images/companies/amazon.svg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
              alt="Python"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-black text-slate-900">Python</span>
          </div>

          {/* Stepper Pill 1: Video */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('learn');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'learn'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'learn' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              1
            </span>
            <span>Video</span>
          </button>

          <span className="text-slate-400 font-bold text-xs shrink-0">&gt;</span>

          {/* Stepper Pill 2: Level 1 Game */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('play');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'play'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'play' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              2
            </span>
            <span>Level 1 Game</span>
          </button>

          <span className="text-slate-400 font-bold text-xs shrink-0">&gt;</span>

          {/* Stepper Pill 3: Mock Interview */}
          <button
            type="button"
            onClick={() => {
              playTactile();
              setActiveStep('interview');
            }}
            className={`px-3 py-1 rounded-full text-[10.5px] font-black flex items-center gap-1.5 transition-all cursor-pointer shrink-0 ${
              activeStep === 'interview'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
              activeStep === 'interview' ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
            }`}>
              3
            </span>
            <span>Mock Interview</span>
          </button>
        </div>

        {/* View Topics Button */}
        <button
          type="button"
          onClick={onBack}
          className="text-[9.5px] font-black text-blue-600 hover:underline shrink-0 pl-1"
        >
          View Topics
        </button>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 1: 🎬 VIDEO LESSON (Matching media_1792386781104_54a2e591.jpg)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'learn' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 space-y-3">
          {/* Title & Tags */}
          <div className="space-y-1.5">
            <h1 className="text-sm font-black text-slate-900 leading-tight">
              {currentTopic.id}.1 {firstLesson.title}
            </h1>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-[9px] flex items-center gap-1">
                <span>🌱</span>
                <span>Chapter {currentTopic.id}</span>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-bold text-[9px] flex items-center gap-1">
                <span>⚡</span>
                <span>Bunny Video Stream</span>
              </span>
              <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-bold text-[9px] flex items-center gap-1">
                <span>🎮</span>
                <span>Auto Game Next</span>
              </span>
            </div>
          </div>

          {/* Video Player Card (Bunny.net Stream Embed with HTML5 Fallback) */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-200 shadow-sm aspect-video">
            {bunnyEmbedUrl ? (
              <iframe
                src={bunnyEmbedUrl}
                title={firstLesson.title}
                loading="lazy"
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                allowFullScreen={true}
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  src="/videos/what_is_programming_lesson.mp4"
                  poster="/images/what_is_python_video_poster.jpg"
                  className="w-full h-full object-cover"
                  playsInline
                  onTimeUpdate={handleVideoTimeUpdate}
                  onClick={toggleVideoPlay}
                  onEnded={() => {
                    try {
                      soundEffects.playCelebration();
                    } catch {}
                    setActiveStep('play');
                  }}
                />

                {/* Glowing Big Center Play Button */}
                {!isVideoPlaying && (
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all border-2 border-white cursor-pointer"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>
                )}

                {/* Bottom Controls Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 text-white flex items-center justify-between text-[10px] font-bold">
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={toggleVideoPlay} className="cursor-pointer">
                      {isVideoPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                    <span>{formatVideoTime(videoCurrentTime)} / {formatVideoTime(videoDuration)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        if (videoRef.current) {
                          videoRef.current.muted = !isVideoMuted;
                          setIsVideoMuted(!isVideoMuted);
                        }
                      }}
                    >
                      {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[9px] font-black bg-white/20 px-1.5 py-0.2 rounded">CC</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Auto-Pilot Learning Banner */}
          <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-2.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="min-w-0 pr-1">
                <div className="text-[11px] font-black text-blue-950 leading-tight">
                  Auto-Pilot Learning
                </div>
                <div className="text-[8.5px] font-medium text-slate-600 leading-tight mt-0.5">
                  Video khatam hone ke baad MCQ, Game, Interview aur Report ek-ek karke automatically start ho jate hain!
                </div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Lesson Overview Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  Lesson Overview
                </h3>
              </div>
              <span className="text-[9px] font-bold text-slate-500 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-full">
                <Clock className="w-2.5 h-2.5" />
                <span>08:00 min</span>
              </span>
            </div>
            <p className="text-[9.5px] text-slate-600 font-medium leading-relaxed">
              In this video, you will learn what Python is, why it is popular, its key features, real-world applications, and why it is a great choice for a career in data analytics, AI, and more.
            </p>
          </div>

          {/* What You Will Learn Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <Award className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-black text-slate-900 leading-tight">
                What You Will Learn
              </h3>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="space-y-1 flex-1">
                {[
                  "What is Python?",
                  "History and evolution",
                  "Key features of Python",
                  "Real-world applications",
                  "Why learn Python for data analytics and GenAI"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[9.5px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* 3D Graduation illustration badge */}
              <div className="w-18 h-18 shrink-0 flex items-center justify-center">
                <img
                  src="/images/what_is_python_video_poster.jpg"
                  alt="Learn"
                  className="w-16 h-16 rounded-xl object-cover shadow-2xs border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  Resources
                </h3>
              </div>
              <button
                type="button"
                onClick={() => alert("Downloading lecture notes & cheat sheet...")}
                className="text-[9.5px] font-bold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Download className="w-3 h-3" />
                <span>Download All</span>
              </button>
            </div>

            {/* 4 Download Pills Grid */}
            <div className="grid grid-cols-4 gap-1.5 pt-0.5">
              <div className="p-2 rounded-xl bg-rose-50 border border-rose-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileText className="w-4 h-4 text-rose-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">PDF Notes</span>
                <span className="text-[7px] text-slate-400 font-semibold">(PDF)</span>
              </div>
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileCode className="w-4 h-4 text-blue-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Example Code</span>
                <span className="text-[7px] text-slate-400 font-semibold">(.py)</span>
              </div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-center flex flex-col items-center justify-center gap-0.5">
                <FileText className="w-4 h-4 text-purple-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Cheat Sheet</span>
                <span className="text-[7px] text-slate-400 font-semibold">(PDF)</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-center flex flex-col items-center justify-center gap-0.5">
                <Link className="w-4 h-4 text-emerald-600" />
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Resources</span>
                <span className="text-[7px] text-slate-400 font-semibold">Links</span>
              </div>
            </div>
          </div>

          {/* Video Progress Bar & Next Step CTA Button */}
          <div className="space-y-2 pt-1 pb-4">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-600">
              <span>Video Progress</span>
              <span className="text-blue-600 font-black">{videoProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full transition-all" style={{ width: `${videoProgress}%` }} />
            </div>

            {/* BIG BLUE GRADIENT BUTTON MATCHING SCREENSHOT */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                setActiveStep('play');
              }}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-blue-500/30 active:scale-98 transition-transform cursor-pointer"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Video Finished ➔ Play {currentTopic.title} Game</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 2: 🎮 PYTHON GAME (Matching media_1792386770782_47d1c2a3.png)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'play' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 space-y-3">
          {/* Breadcrumb Row */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
            <button
              type="button"
              onClick={() => setActiveStep('learn')}
              className="hover:text-blue-600 flex items-center gap-0.5"
            >
              <ChevronLeft className="w-3 h-3" />
              <span>Python</span>
            </button>
            <span>&gt;</span>
            <span className="text-slate-800 truncate">Introduction to Programming &amp; Python Thinking</span>
          </div>

          {/* Game Hero Banner (Matching Screenshot with 3D Boy) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 p-3.5 text-white shadow-md">
            <div className="relative z-10 space-y-1.5 max-w-[65%]">
              <div className="flex items-center gap-1.5">
                <Gamepad2 className="w-5 h-5 text-amber-300" />
                <h1 className="text-base font-black tracking-tight">
                  Python <span className="text-amber-300">Game</span>
                </h1>
              </div>

              <p className="text-[9.5px] text-blue-50 font-semibold leading-tight">
                Learn by Playing • Solve Quizzes • Earn Points • Build Your Python Skills
              </p>

              {/* 3 Stat Badges */}
              <div className="flex items-center gap-1.5 pt-1">
                <div className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-center">
                  <div className="text-[9.5px] font-black">29</div>
                  <div className="text-[7.5px] font-semibold text-blue-100">Levels</div>
                </div>
                <div className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-center">
                  <div className="text-[9.5px] font-black">20+</div>
                  <div className="text-[7.5px] font-semibold text-blue-100">Games</div>
                </div>
                <div className="px-2 py-0.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-center">
                  <div className="text-[9.5px] font-black">15+</div>
                  <div className="text-[7.5px] font-semibold text-blue-100">Projects</div>
                </div>
              </div>
            </div>

            {/* 3D Boy Graphic / Python Badge on Right */}
            <div className="absolute right-1 bottom-0 w-32 h-32 pointer-events-none">
              <img
                src="/images/python_hero_student.png"
                alt="Python Game Boy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Level Selector Circles (1 to 8) */}
          <div className="flex items-center justify-between gap-1 px-1 py-1 overflow-x-auto no-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
              const isActive = num === activeGameLevel;
              return (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    playTactile();
                    setActiveGameLevel(num);
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40 ring-4 ring-blue-100 scale-105'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          {/* Game Card Header: Game 1 - Puzzle Quest */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                {activeGameLevel}
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900 leading-tight">
                  Game {activeGameLevel} — Puzzle Quest
                </h3>
                <p className="text-[9px] text-slate-500 font-semibold leading-tight mt-0.5">
                  10 Questions — Test your understanding of computing and programming foundations.
                </p>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[9px] font-bold text-slate-600 shrink-0">
              Question 1/10
            </span>
          </div>

          {/* Active Question Challenge Box (Dark Gradient with 3D Boy Thinking) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-4 text-white shadow-md space-y-2">
            <div className="flex items-center gap-1.5 text-amber-300 text-[10px] font-black">
              <span>💡</span>
              <span>{gameQuestion.title}</span>
            </div>

            <p className="text-xs font-black leading-relaxed max-w-[70%]">
              {gameQuestion.text}
            </p>

            {/* 3D Thinking Avatar Graphic on Right */}
            <div className="absolute right-2 bottom-1 w-20 h-20 pointer-events-none">
              <img
                src="/images/python_hero_student.png"
                alt="Thinking"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 4 Interactive Option Cards (A, B, C, D) */}
          <div className="space-y-2">
            {gameQuestion.options.map((opt) => {
              const isSelected = selectedGameOption === opt.id;
              let optStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50';

              if (isAnswerSubmitted) {
                if (opt.correct) {
                  optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm';
                } else if (isSelected && !opt.correct) {
                  optStyle = 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm';
                }
              } else if (isSelected) {
                optStyle = 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-200 shadow-xs';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectGameOption(opt.id)}
                  className={`w-full p-3 rounded-2xl border-2 flex items-center gap-3 transition-all cursor-pointer text-left ${optStyle}`}
                >
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-xs font-black flex-1">
                    {opt.text}
                  </span>
                  {isAnswerSubmitted && opt.correct && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Submit Answer Button */}
          {!isAnswerSubmitted ? (
            <button
              type="button"
              onClick={handleSubmitGameAnswer}
              disabled={!selectedGameOption}
              className={`w-full py-3.5 px-4 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md transition-transform cursor-pointer ${
                selectedGameOption
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-blue-500/25 active:scale-98'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Submit Answer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="space-y-2">
              <div className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                isAnswerCorrect ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-rose-50 text-rose-800 border-rose-300'
              }`}>
                {isAnswerCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>🎉 Correct! Programming is the exact process of instructing a computer. +10 Points!</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>Not quite right! The correct answer is A (Programming).</span>
                  </>
                )}
              </div>

              {/* Proceed to Mock Interview CTA */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setActiveStep('interview');
                }}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md shadow-emerald-500/30 active:scale-98 transition-transform cursor-pointer"
              >
                <Mic className="w-4 h-4" />
                <span>Continue to Step 3: Mock Interview →</span>
              </button>
            </div>
          )}

          {/* Progress / Telemetry Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center">
              <span className="text-base">🏆</span>
              <span className="text-[9.5px] font-black text-slate-800 mt-0.5">{gameQuestionsDone}/10</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Questions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">💰</span>
              <span className="text-[9.5px] font-black text-amber-600 mt-0.5">+{gameScore}</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Points</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">⭐</span>
              <span className="text-[9.5px] font-black text-purple-600 mt-0.5">Level {activeGameLevel}</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Game</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-base">📊</span>
              <span className="text-[9.5px] font-black text-blue-600 mt-0.5">{gameQuestionsDone * 10}%</span>
              <span className="text-[7.5px] font-semibold text-slate-400">Complete</span>
            </div>
          </div>

          {/* Bottom Motivational Banner (Matching Screenshot) */}
          <div className="rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 p-3 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <p className="text-[10px] font-bold leading-tight">
                Solve all questions correctly to complete this game and earn exciting rewards!
              </p>
            </div>
            <span className="text-2xl shrink-0">🎮</span>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════════
          SCREEN 3: 🎙️ PYTHON MOCK INTERVIEW (Matching media_1792386770731_fc4283bf.png)
          ═════════════════════════════════════════════════════════════════════════ */}
      {activeStep === 'interview' && (
        <div className="max-w-md mx-auto px-3.5 pt-3 space-y-3">
          {/* Sub Header Card: Python Mock Interview */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-black text-blue-600">
                🐍
              </div>
              <div>
                <h2 className="text-xs font-black text-slate-900 leading-tight">
                  Python Mock Interview
                </h2>
                <p className="text-[9px] text-slate-500 font-semibold mt-0.5 truncate">
                  {currentTopic.id}.1 {firstLesson.title}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onBack}
              className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-black border border-blue-200 flex items-center gap-1 shadow-2xs"
            >
              <LayoutGrid className="w-3 h-3" />
              <span>View Topics</span>
            </button>
          </div>

          {/* ── SPLIT VIDEO CALL UI (Matches Screenshot Exact Layout) ── */}
          <div className="space-y-2">
            {/* Top Video: Subodh Kumar (HR) */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-300 shadow-sm aspect-video">
              <img
                src="/images/interviewer_female_1.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=faces';
                }}
                alt="Subodh Kumar (HR)"
                className="w-full h-full object-cover"
              />

              {/* Overlay Top Bar: HR Name + Time Left */}
              <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-white text-[9.5px] font-black">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Subodh Kumar (HR)</span>
                  <span className="text-slate-300 text-[8px] font-medium">• Indian English</span>
                </div>

                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-sky-400">
                  <Clock className="w-3 h-3" />
                  <span>{formatInterviewTime(interviewTimeLeft)} TIME LEFT</span>
                </div>
              </div>

              {/* Bottom HR Subtitle / Speech Banner */}
              <div className="absolute bottom-2 inset-x-2 p-2 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  🔊
                </span>
                <p className="text-[9.5px] font-bold leading-tight">
                  Namaste! Welcome to your technical mock interview. Let us begin with your first question.
                </p>
              </div>
            </div>

            {/* Bottom Video: You (Student) */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-300 shadow-sm aspect-video">
              {isCameraOn ? (
                <img
                  src="/images/python_hero_student.png"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop&crop=faces';
                  }}
                  alt="You (Student)"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-1 bg-slate-900">
                  <VideoOff className="w-6 h-6" />
                  <span className="text-[10px] font-bold">Camera is Off</span>
                </div>
              )}

              {/* Top Left: Student Name Badge */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[9.5px] font-black">
                <Video className="w-3 h-3 text-emerald-400" />
                <span>You (Student)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>

              {/* Top Right: Camera Switcher */}
              <button
                type="button"
                onClick={() => setIsCameraOn(!isCameraOn)}
                className="absolute top-2 right-2 w-7 h-7 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                {isCameraOn ? <Video className="w-3.5 h-3.5" /> : <VideoOff className="w-3.5 h-3.5 text-rose-400" />}
              </button>

              {/* Right Side: Audio Equalizer Level Bars */}
              <div className="absolute right-2 bottom-3 flex flex-col gap-0.5 items-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <span
                    key={i}
                    className={`w-1 h-1.5 rounded-full ${
                      isInterviewRecording ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interview Progress (Question 1 of 5) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-black text-slate-900">
                  Interview Progress
                </span>
              </div>
              <span className="text-[10px] font-bold text-blue-600">
                Question {activeInterviewQ} of 5
              </span>
            </div>

            {/* Stepper Circles with Connectors */}
            <div className="flex items-center justify-between px-2 pt-1">
              {[1, 2, 3, 4, 5].map((qNum, idx) => {
                const isActive = qNum === activeInterviewQ;
                return (
                  <React.Fragment key={qNum}>
                    <button
                      type="button"
                      onClick={() => {
                        playTactile();
                        setActiveInterviewQ(qNum);
                      }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-xs scale-105'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {qNum}
                    </button>
                    {idx < 4 && (
                      <div className={`h-0.5 flex-1 mx-1 ${idx < activeInterviewQ ? 'bg-blue-500' : 'bg-slate-200'}`} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Current Question Card */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center text-[10px]">
                  Q
                </span>
                <span>Current Question</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-black border border-emerald-200">
                Technical (Easy)
              </span>
            </div>

            <p className="text-xs font-black text-blue-950 leading-snug">
              What is programming and can you give one real-life example?
            </p>

            {/* Hint Box */}
            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] font-black text-amber-900 leading-tight">Hint</div>
                <div className="text-[9px] font-medium text-amber-800 leading-tight mt-0.5">
                  Keep your answer structured with a clear explanation and a practical example.
                </div>
              </div>
            </div>
          </div>

          {/* 3 Tab Switcher: Feedback | Model Answer | Key Points */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xs space-y-2.5">
            <div className="flex items-center gap-1 border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setActiveInterviewTab('feedback');
                }}
                className={`flex-1 py-1.5 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-1 ${
                  activeInterviewTab === 'feedback'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>✨ Feedback</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setActiveInterviewTab('model');
                }}
                className={`flex-1 py-1.5 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-1 ${
                  activeInterviewTab === 'model'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>📖 Model Answer</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setActiveInterviewTab('points');
                }}
                className={`flex-1 py-1.5 rounded-xl text-[10px] font-black transition-all flex items-center justify-center gap-1 ${
                  activeInterviewTab === 'points'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>📋 Key Points</span>
              </button>
            </div>

            {/* Tab Contents */}
            {activeInterviewTab === 'feedback' && (
              <div className="text-center py-3 space-y-1">
                {isInterviewSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-left space-y-1 text-emerald-900">
                    <div className="flex items-center justify-between font-black text-xs">
                      <span>AI Feedback Score</span>
                      <span className="text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-300">
                        94 / 100
                      </span>
                    </div>
                    <p className="text-[9.5px] leading-relaxed">
                      🌟 Excellent! Your answer clearly defined programming as step-by-step instructions and provided an intuitive real-world ATM analogy.
                    </p>
                  </div>
                ) : (
                  <>
                    <FileText className="w-6 h-6 text-slate-300 mx-auto" />
                    <p className="text-[10px] text-slate-500 font-medium">
                      Your feedback will appear here after you submit your answer.
                    </p>
                  </>
                )}
              </div>
            )}

            {activeInterviewTab === 'model' && (
              <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-200 text-[10px] text-slate-800 leading-relaxed font-medium">
                <strong>Model Answer:</strong> "Programming is the craft of writing step-by-step instructions (an algorithm) for a computer to execute. For example, in an e-commerce checkout pipeline, the code checks inventory, calculates taxes, triggers payments, and sends order confirmation automatically."
              </div>
            )}

            {activeInterviewTab === 'points' && (
              <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200 text-[10px] text-slate-800 space-y-1 font-medium">
                <div>• Definition: Sequence of instructions to solve a problem.</div>
                <div>• Real-life Example: Traffic light automation, ATM systems, GPS routing.</div>
                <div>• Impact on Analytics: Enables processing millions of records in seconds.</div>
              </div>
            )}
          </div>

          {/* Your Answer (Live Transcription) */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-black text-slate-900">
                <Mic className="w-3.5 h-3.5 text-blue-600" />
                <span>Your Answer (Live Transcription)</span>
              </div>
              <span className="text-[9.5px] font-bold text-slate-500 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" />
                <span>00:00 / 02:00</span>
              </span>
            </div>

            <textarea
              rows={4}
              value={interviewAnswerText}
              onChange={(e) => setInterviewAnswerText(e.target.value)}
              placeholder="Click the microphone to speak your answer in English, or type/edit your answer directly here..."
              className="w-full p-2.5 rounded-xl border border-slate-200 text-[11px] text-slate-800 bg-slate-50/60 focus:outline-none focus:bg-white focus:border-blue-500 transition-all leading-relaxed"
            />

            {/* Action Bar: Insert Example, Clear Text, Submit Answer */}
            <div className="flex items-center justify-between gap-1.5 pt-1">
              <button
                type="button"
                onClick={handleInsertInterviewExample}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9.5px] font-black flex items-center gap-1 cursor-pointer"
              >
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>Insert Example</span>
              </button>

              <button
                type="button"
                onClick={() => setInterviewAnswerText('')}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9.5px] font-black flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3 text-slate-400" />
                <span>Clear Text</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitInterviewAnswer}
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black flex items-center gap-1 shadow-xs cursor-pointer active:scale-95 transition-transform"
              >
                <span>Submit Answer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Floating Call Bar (Camera On, Tap to Speak, End Interview) */}
          <div className="bg-white/95 backdrop-blur-md border border-slate-200 rounded-3xl p-2 flex items-center justify-around shadow-lg">
            <button
              type="button"
              onClick={() => setIsCameraOn(!isCameraOn)}
              className="flex flex-col items-center gap-1 text-[9px] font-bold text-slate-600 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 shadow-2xs">
                {isCameraOn ? <Video className="w-4 h-4 text-blue-600" /> : <VideoOff className="w-4 h-4 text-rose-500" />}
              </div>
              <span>{isCameraOn ? 'Camera On' : 'Camera Off'}</span>
            </button>

            {/* Glowing Big Center Microphone */}
            <button
              type="button"
              onClick={toggleSpeechRecording}
              className={`flex flex-col items-center gap-1 text-[9.5px] font-black cursor-pointer ${
                isInterviewRecording ? 'text-rose-600' : 'text-blue-600'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all ${
                isInterviewRecording
                  ? 'bg-rose-500 animate-pulse shadow-rose-500/40 ring-4 ring-rose-200'
                  : 'bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-blue-500/40 ring-4 ring-blue-100 active:scale-95'
              }`}>
                {isInterviewRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </div>
              <span>{isInterviewRecording ? 'Recording...' : 'Tap to Speak'}</span>
            </button>

            <button
              type="button"
              onClick={onBack}
              className="flex flex-col items-center gap-1 text-[9px] font-bold text-rose-600 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shadow-2xs">
                <PhoneOff className="w-4 h-4" />
              </div>
              <span>End Interview</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
