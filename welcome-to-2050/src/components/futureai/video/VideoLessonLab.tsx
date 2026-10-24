import { getTopicHierarchyInfo } from '../PythonChapterView';
import React, { useState, useEffect, useRef } from 'react';
import {
  Play, Pause, Volume2, VolumeX, Maximize2, Settings, Captions,
  ChevronRight, Lock, Check, Mic, Trophy, BookOpen, Layers,
  Star, Send, Bot, Sparkles, Bell, Search, Clock, Zap,
  BarChart3, MonitorPlay, Download, Code, Gamepad2,
  CheckSquare, FileText, Lightbulb, MessageCircle
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { FutureLogo } from '../FutureLogo';
import './VideoLessonLab.css';

export interface VideoLessonLabProps {
  userName?: string;
  onBack?: () => void;
  onUnlockNextStage?: () => void;
}

const TOTAL_SECONDS = 388; // 6:28

const VIDEO_CHAPTERS = [
  { id: 1, title: '1.1 What is Programming? – Real-Life Examples', time: '00:00', sec: 0 },
  { id: 2, title: '1.2 Why Python is Used Everywhere', time: '00:45', sec: 45 },
  { id: 3, title: '1.3 Python vs Other Languages – Simple Understanding', time: '01:25', sec: 85 },
  { id: 4, title: '1.4 How Computers Understand Instructions', time: '02:05', sec: 125 },
  { id: 5, title: '1.5 Installing Python and IDE – VS Code Setup', time: '02:45', sec: 165 },
  { id: 6, title: '1.6 Writing First Python Program', time: '03:30', sec: 210 },
  { id: 7, title: '1.7 Understanding How Code Runs Step-by-Step', time: '04:15', sec: 255 },
  { id: 8, title: '1.8 Common Beginner Mistakes and How to Avoid Them', time: '05:00', sec: 300 },
  { id: 9, title: '1.9 Mindset: How to Think Like a Programmer', time: '05:45', sec: 345 },
];

const IN_VIDEO_CHAPTERS = [
  { title: 'What Is Programming?', time: '00:00', sec: 0 },
  { title: 'Algorithms & Problem Solving', time: '00:45', sec: 45 },
  { title: 'Intro to Python & Ecosystem', time: '01:25', sec: 85 },
  { title: 'Installing Python & VS Code', time: '03:20', sec: 200 },
  { title: 'First Program & print()', time: '05:00', sec: 300 },
  { title: 'Syntax, Indentation & Errors', time: '05:55', sec: 355 },
];

const QUICK_TAKEAWAYS = [
  { icon: '📚', title: 'Easy to learn',                 desc: 'Beginner-friendly syntax' },
  { icon: '🌐', title: 'Widely used in industry',       desc: 'Top language worldwide' },
  { icon: '🤖', title: 'Great for data, AI and web',    desc: 'Versatile & powerful' },
  { icon: '⭐', title: 'Beginner friendly and powerful', desc: 'Scales with your skills' },
];

export const VideoLessonLab: React.FC<VideoLessonLabProps> = ({
  userName = 'Subodh Kumar',
  onBack,
  onUnlockNextStage
}) => {
  const [isPlaying, setIsPlaying]       = useState<boolean>(false);
  const [videoSeconds, setVideoSeconds] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(soundEffects.getSoundEnabled());
  const [sideTab, setSideTab]           = useState<'chapters' | 'transcript'>('chapters');
  const [aiInput, setAiInput]           = useState<string>('');
  const [aiMessages, setAiMessages]     = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [showCompleteBanner, setShowCompleteBanner] = useState(false);

  const videoIntervalRef  = useRef<any>(null);
  const autoAdvancedRef   = useRef<boolean>(false);

  const progressPercent = Math.min(100, Math.round((videoSeconds / TOTAL_SECONDS) * 100));
  const canUnlock       = progressPercent >= 50;
  const isVideoComplete = videoSeconds >= TOTAL_SECONDS;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Playback timer
  useEffect(() => {
    if (isPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setVideoSeconds(prev => {
          if (prev >= TOTAL_SECONDS) { setIsPlaying(false); return TOTAL_SECONDS; }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(videoIntervalRef.current);
    }
    return () => clearInterval(videoIntervalRef.current);
  }, [isPlaying]);

  // Auto-advance on video complete
  useEffect(() => {
    if (isVideoComplete && !autoAdvancedRef.current) {
      autoAdvancedRef.current = true;
      setShowCompleteBanner(true);
      if (soundEnabled) soundEffects.playCelebration();
      setTimeout(() => {
        if (onUnlockNextStage) onUnlockNextStage();
      }, 2000);
    }
  }, [isVideoComplete]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const fraction = (e.clientX - rect.left) / rect.width;
    setVideoSeconds(Math.max(0, Math.min(TOTAL_SECONDS, Math.round(fraction * TOTAL_SECONDS))));
  };

  const handleChapterClick = (sec: number) => {
    setVideoSeconds(sec);
    if (soundEnabled) soundEffects.playClick();
  };

  const handleMarkComplete = () => {
    if (soundEnabled) soundEffects.playCelebration();
    setVideoSeconds(TOTAL_SECONDS);
    setShowCompleteBanner(true);
    setTimeout(() => { if (onUnlockNextStage) onUnlockNextStage(); }, 1200);
  };

  const handleNextMcq = () => {
    if (!canUnlock) return;
    if (soundEnabled) soundEffects.playCelebration();
    setVideoSeconds(TOTAL_SECONDS);
    setTimeout(() => { if (onUnlockNextStage) onUnlockNextStage(); }, 600);
  };

  const handleAiSend = (text?: string) => {
    const msg = text || aiInput;
    if (!msg.trim()) return;
    if (soundEnabled) soundEffects.playClick();
    setAiInput('');
    setAiMessages(prev => [
      ...prev,
      { role: 'user', text: msg },
      {
        role: 'ai',
        text: `Python is a high-level, interpreted, dynamically-typed programming language. Regarding "${msg}" — Python's simple syntax makes it perfect for beginners while being powerful enough for enterprise use!`
      }
    ]);
  };

  // Active chapter
  const activeChapterIdx = VIDEO_CHAPTERS.reduce((acc, ch, i) =>
    videoSeconds >= ch.sec ? i : acc, 0);

  const steps = [
    { id: 'learn',     num: 1, label: 'Learn',     sub: 'Watch Video',      active: true,  locked: false },
    { id: 'practice',  num: 2, label: 'Practice',  sub: 'MCQ',              active: false, locked: true  },
    { id: 'play',      num: 3, label: 'Practice',   sub: 'Coding Practice',  active: false, locked: true  },
    { id: 'code',      num: 4, label: 'Code',       sub: 'Coding Practice',  active: false, locked: true  },
    { id: 'interview', num: 5, label: 'Interview',  sub: 'AI Mock Interview', active: false, locked: true  },
    { id: 'score',     num: 6, label: 'Score',      sub: 'Get Report',       active: false, locked: true  },
  ];

  return (
    <div className="vll2-page">

      {/* ── TOP NAV ── */}
      <header className="vll2-topbar">
        <div className="vll2-topbar-left">
          <div className="vll2-logo cursor-pointer" onClick={onBack} role="button" tabIndex={0} title="Back">
            <FutureLogo size="sm" />
          </div>
        </div>
        <div className="vll2-topbar-center">
          <div className="vll2-search">
            <Search className="vll2-search-icon" />
            <input
              type="text"
              placeholder="Search topics, code examples, projects, or ask anything..."
              className="vll2-search-input"
            />
            <div className="vll2-search-kbd"><kbd>Ctrl</kbd><kbd>K</kbd></div>
          </div>
        </div>
        <div className="vll2-topbar-right">
          <button
            className="vll2-sound-btn"
            onClick={() => { const r = soundEffects.toggleSound(); setSoundEnabled(r); }}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{soundEnabled ? 'Sound ON' : 'Sound OFF'}</span>
          </button>
          <button className="vll2-ai-mentor-btn">
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI Mentor</span>
          </button>
          <div className="vll2-bell-wrap">
            <Bell className="w-4 h-4 text-slate-500" />
            <span className="vll2-bell-dot">2</span>
          </div>
          <div className="vll2-avatar-wrap">
            <div className="vll2-avatar">
              <span>{userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</span>
            </div>
            <div className="vll2-avatar-info">
              <span className="vll2-avatar-name">{userName.split(' ')[0]}</span>
              <span className="vll2-avatar-role">Learner</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="vll2-body">

        {/* BREADCRUMB */}
        <div className="vll2-breadcrumb">
          <button className="vll2-bc-link" onClick={onBack}>Python</button>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="vll2-bc-link">Introduction to Programming &amp; Python Thinking</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="vll2-bc-link">1.1 What is Programming? – Real-Life Examples</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="vll2-bc-current">Learn</span>
        </div>

        {/* TOPIC HEADER */}
        <div className="vll2-topic-header">
          <div className="vll2-topic-icon-wrap">
            <img src="/images/python_logo_3d_hd.png" alt="Python" className="vll2-topic-icon" />
          </div>
          <div className="vll2-topic-text">
            <h1 className="vll2-topic-title">Introduction to Programming &amp; Python Thinking</h1>
            <p className="vll2-topic-desc">9 Topics &amp; Learning Units • Real-life examples, why Python is used everywhere, VS Code setup, first program, and programmer mindset.</p>
          </div>
          <div className="vll2-topic-meta">
            <span className="vll2-meta-time"><Clock className="w-3.5 h-3.5" /> 6–8 min</span>
            <span className="vll2-meta-free">FREE</span>
            <button
              className={`vll2-mark-complete-btn ${canUnlock ? 'active' : 'inactive'} ${isVideoComplete ? 'done' : ''}`}
              onClick={canUnlock ? handleMarkComplete : undefined}
              title={canUnlock ? 'Mark this lesson as complete' : 'Watch 50% of the video first'}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>{isVideoComplete ? 'Completed ✓' : 'Mark as Complete'}</span>
            </button>
          </div>
        </div>

        {/* STAGE PILLS */}
        <div className="vll2-pills-row">
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className={`vll2-pill ${step.active ? 'active' : ''} ${step.locked ? 'locked' : ''}`}>
                <div className={`vll2-pill-num ${step.active ? 'active' : ''}`}>{step.num}</div>
                <div className="vll2-pill-text">
                  <span className="vll2-pill-label">{step.label}</span>
                  <span className="vll2-pill-sub">{step.sub}</span>
                </div>
                {step.locked && <Lock className="w-3 h-3 text-slate-400 ml-1" />}
              </div>
              {idx < steps.length - 1 && (
                <ChevronRight className="vll2-pill-arrow" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* MAIN 2-COL: VIDEO + RIGHT SIDEBAR */}
        <div className="vll2-main-row">

          {/* VIDEO COLUMN */}
          <div className="vll2-video-col">

            {/* VIDEO PLAYER */}
            <div className="vll2-player-wrap">
              {/* Video Screen */}
              <div
                className="vll2-video-screen"
                onClick={() => {
                  if (soundEnabled) soundEffects.playClick();
                  setIsPlaying(p => !p);
                }}
              >
                {/* Background image */}
                <img
                  src="/images/topic_learn/instructor_video_lesson_hd.jpg"
                  alt="Python Video"
                  className="vll2-video-bg"
                />

                {/* Dark gradient */}
                <div className="vll2-screen-gradient" />

                {/* LEFT overlay: "In this Video" */}
                <div className="vll2-in-video-panel">
                  <div className="vll2-in-video-title">In this Video</div>
                  {IN_VIDEO_CHAPTERS.map((ch, i) => (
                    <div
                      key={i}
                      className={`vll2-in-video-row ${videoSeconds >= ch.sec && (i === IN_VIDEO_CHAPTERS.length - 1 || videoSeconds < IN_VIDEO_CHAPTERS[i + 1]?.sec) ? 'active' : ''}`}
                      onClick={e => { e.stopPropagation(); handleChapterClick(ch.sec); }}
                    >
                      <div className="vll2-in-video-play-icon">
                        {i === 0 ? <Play className="w-2.5 h-2.5 fill-current" /> : <div className="vll2-in-video-dot" />}
                      </div>
                      <span className="vll2-in-video-ch-title">{ch.title}</span>
                      <span className="vll2-in-video-ch-time">{ch.time}</span>
                    </div>
                  ))}
                </div>

                {/* CENTER: Big Play/Pause */}
                <div className="vll2-center-play">
                  <div className={`vll2-big-play ${isPlaying ? 'playing' : ''}`}>
                    {isPlaying
                      ? <Pause className="w-8 h-8 text-white fill-white" />
                      : <Play className="w-8 h-8 text-white fill-white ml-1" />
                    }
                  </div>
                </div>

                {/* RIGHT overlay: "Easy Powerful..." box */}
                <div className="vll2-features-box">
                  <div className="vll2-features-box-inner">
                    <p>Easy</p>
                    <p>Powerful</p>
                    <p>Beginner Friendly</p>
                    <p>High Demand</p>
                  </div>
                </div>

                {/* Complete banner */}
                {showCompleteBanner && (
                  <div className="vll2-complete-banner">
                    🎉 Video Complete! Moving to MCQ...
                  </div>
                )}
              </div>

              {/* Controls Bar */}
              <div className="vll2-controls-bar">
                <div className="vll2-ctrl-left">
                  <button
                    className="vll2-ctrl-playbtn"
                    onClick={() => { if (soundEnabled) soundEffects.playClick(); setIsPlaying(p => !p); }}
                  >
                    {isPlaying
                      ? <Pause className="w-3.5 h-3.5 fill-current" />
                      : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    }
                  </button>
                  <span className="vll2-ctrl-time">{formatTime(videoSeconds)} / {formatTime(TOTAL_SECONDS)}</span>
                  <div className="vll2-progress-track" onClick={handleProgressBarClick}>
                    <div
                      className="vll2-progress-fill"
                      style={{ width: `${(videoSeconds / TOTAL_SECONDS) * 100}%` }}
                    />
                    <div
                      className="vll2-progress-thumb"
                      style={{ left: `${(videoSeconds / TOTAL_SECONDS) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="vll2-ctrl-right">
                  <Captions className="w-3.5 h-3.5 text-slate-300" />
                  <span className="vll2-ctrl-speed">1x</span>
                  <Settings className="w-3.5 h-3.5 text-slate-300" />
                  <Maximize2 className="w-3.5 h-3.5 text-slate-300" />
                  <button className="vll2-ctrl-fullscreen">⛶</button>
                </div>
              </div>
            </div>

            {/* BOTTOM 2-COL: Quick Takeaways + Ask AI */}
            <div className="vll2-bottom-row">

              {/* Quick Takeaways */}
              <div className="vll2-takeaways-col">
                <div className="vll2-takeaways-header">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span className="vll2-takeaways-title">Quick Takeaways</span>
                </div>
                <div className="vll2-takeaways-grid">
                  {QUICK_TAKEAWAYS.map((t, i) => (
                    <div key={i} className="vll2-takeaway-card">
                      <span className="vll2-takeaway-icon">{t.icon}</span>
                      <div className="vll2-takeaway-text">
                        <div className="vll2-takeaway-title">{t.title}</div>
                        <div className="vll2-takeaway-desc">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ask AI About This Video */}
              <div className="vll2-askai-col">
                <div className="vll2-askai-header">
                  <div className="vll2-askai-bot-icon"><Bot className="w-3.5 h-3.5 text-blue-600" /></div>
                  <span className="vll2-askai-title">Ask AI About This Video</span>
                  <button className="vll2-askai-minimize">×</button>
                </div>
                {aiMessages.length > 0 && (
                  <div className="vll2-askai-messages">
                    {aiMessages.map((m, i) => (
                      <div key={i} className={`vll2-askai-msg ${m.role}`}><span>{m.text}</span></div>
                    ))}
                  </div>
                )}
                <div className="vll2-askai-input-row">
                  <input
                    type="text"
                    className="vll2-askai-input"
                    placeholder="Ask anything about this video... (e.g. Explain in simple words)"
                    value={aiInput}
                    onChange={e => setAiInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAiSend()}
                  />
                  <button className="vll2-askai-send" onClick={() => handleAiSend()}>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="vll2-right-sidebar">

            {/* Tabs */}
            <div className="vll2-sidebar-tabs">
              <button
                className={`vll2-sidebar-tab ${sideTab === 'chapters' ? 'active' : ''}`}
                onClick={() => setSideTab('chapters')}
              >
                Video Chapters
              </button>
              <button
                className={`vll2-sidebar-tab ${sideTab === 'transcript' ? 'active' : ''}`}
                onClick={() => setSideTab('transcript')}
              >
                Transcript
              </button>
            </div>

            {/* Chapter List */}
            {sideTab === 'chapters' && (
              <div className="vll2-chapter-list">
                {VIDEO_CHAPTERS.map((ch, i) => (
                  <div
                    key={ch.id}
                    className={`vll2-chapter-row ${i === activeChapterIdx ? 'active' : ''}`}
                    onClick={() => handleChapterClick(ch.sec)}
                  >
                    {i === activeChapterIdx ? (
                      <div className="vll2-ch-play-icon active"><Play className="w-2.5 h-2.5 fill-white" /></div>
                    ) : (
                      <div className="vll2-ch-play-icon"><Play className="w-2.5 h-2.5 fill-current text-slate-400" /></div>
                    )}
                    <div className="vll2-ch-num">{String(ch.id).padStart(2, '0')}</div>
                    <div className="vll2-ch-title">{ch.title}</div>
                    <div className="vll2-ch-time">{ch.time}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Transcript */}
            {sideTab === 'transcript' && (
              <div className="vll2-transcript">
                <div className="vll2-transcript-line active">
                  <span className="vll2-tr-time">00:00</span>
                  <span>Welcome to Python Introduction &amp; Setup! Today we will learn about Python, one of the most popular programming languages in the world...</span>
                </div>
                <div className="vll2-transcript-line">
                  <span className="vll2-tr-time">01:12</span>
                  <span>Python is known for its simplicity, readability and versatility. Let's look at some key features...</span>
                </div>
                <div className="vll2-transcript-line">
                  <span className="vll2-tr-time">02:05</span>
                  <span>Python is used in web development, data analysis, artificial intelligence, machine learning and automation...</span>
                </div>
                <div className="vll2-transcript-line">
                  <span className="vll2-tr-time">03:21</span>
                  <span>You should learn Python because it is beginner friendly, has huge community support and is in high demand...</span>
                </div>
              </div>
            )}

            {/* Notes */}
            <div className="vll2-notes-section">
              <div className="vll2-notes-title">Notes</div>
              <div className="vll2-notes-item">
                <div className="vll2-notes-pdf-icon">
                  <FileText className="w-4 h-4 text-red-500" />
                </div>
                <div className="vll2-notes-info">
                  <div className="vll2-notes-name">Class Notes (PDF)</div>
                  <div className="vll2-notes-sub">Python Introduction &amp; Setup</div>
                </div>
                <button className="vll2-notes-download">
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>
            </div>

            {/* Next: Take MCQ button */}
            <div className="vll2-next-mcq-wrap">
              <button
                className={`vll2-next-mcq-btn ${canUnlock ? 'unlocked' : 'locked'}`}
                onClick={handleNextMcq}
              >
                <span>Next: Take MCQ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <p className="vll2-next-mcq-caption">
                {canUnlock
                  ? isVideoComplete ? '🎉 Video done! Auto-advancing...' : '✓ Unlocked — Click to start MCQ'
                  : 'Complete this video to unlock MCQ'}
              </p>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
};
