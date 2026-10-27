import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Lightbulb, 
  Check, 
  RotateCcw, 
  Play, 
  Volume2, 
  VolumeX, 
  Sparkles,
  BarChart3,
  Bot,
  Globe,
  Cpu,
  Gamepad2,
  ChevronRight,
  Star
} from 'lucide-react';
import { soundEffects } from '../../../services/soundEffects';
import { 
  STYLEGUIDE_DRAG_DROP,
  STYLEGUIDE_SEQUENCE,
  STYLEGUIDE_MATCH_PAIR,
  STYLEGUIDE_PREDICT,
  STYLEGUIDE_BUILD_RUN
} from './codeQuestData';
import './CodeQuestGame.css';

interface CodeQuestGameProps {
  topicId?: string;
  onBackToTopic?: () => void;
  onUnlockNextStage?: () => void;
  userName?: string;
}

// Confetti Particle Generator
const SubtleConfetti: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;
  const colors = ['#1677FF', '#00CFEB', '#8B7CFF', '#16C79A', '#FF9F1C', '#FF4D8D'];
  const particles = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    color: colors[i % colors.length],
    delay: `${Math.random() * 0.3}s`,
    duration: `${1.2 + Math.random() * 0.8}s`,
    size: `${5 + Math.random() * 7}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            top: '-20px',
            left: p.left,
            backgroundColor: p.color,
            width: p.size,
            height: `${parseFloat(p.size) * 1.4}px`,
            borderRadius: '2px',
            animation: `fallDown ${p.duration} ease-in ${p.delay} forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes fallDown {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(540deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export const CodeQuestGame: React.FC<CodeQuestGameProps> = ({
  topicId = 'variables',
  onBackToTopic,
  onUnlockNextStage,
  userName = 'Rahul Sharma'
}) => {
  const [soundOn, setSoundOn] = useState<boolean>(() => soundEffects.getSoundEnabled());
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Auto-Progression Levels: 1 to 5 (No manual tab clicking!)
  const [currentLevel, setCurrentLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [coins, setCoins] = useState<number>(250);
  const [score, setScore] = useState<number>(0);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<number | null>(null);

  // Robot Speech State
  const [robotSpeech, setRobotSpeech] = useState<string>(
    "Hi " + userName + "! Drag the correct option to complete what Python is!"
  );

  // -------------------------------------------------------------------------
  // LEVEL 1: DRAG & DROP STATE
  // -------------------------------------------------------------------------
  const [l1DroppedOption, setL1DroppedOption] = useState<string | null>(null);
  const [l1WrongOption, setL1WrongOption] = useState<string | null>(null);

  // -------------------------------------------------------------------------
  // LEVEL 2: SEQUENCE STATE
  // -------------------------------------------------------------------------
  const [l2Slots, setL2Slots] = useState<(string | null)[]>([null, null, null, null]);
  const [l2AvailableBlocks, setL2AvailableBlocks] = useState([
    { id: 'blk_close_paren', label: ')' },
    { id: 'blk_print', label: 'print' },
    { id: 'blk_str', label: '"Hello Future.AI"' },
    { id: 'blk_open_paren', label: '(' }
  ]);
  const [l2Executed, setL2Executed] = useState(false);

  // -------------------------------------------------------------------------
  // LEVEL 3: MATCH THE PAIR STATE
  // -------------------------------------------------------------------------
  const [l3ConnectedApps, setL3ConnectedApps] = useState<string[]>([]);

  // -------------------------------------------------------------------------
  // LEVEL 4: PREDICT THE OUTPUT STATE
  // -------------------------------------------------------------------------
  const [l4SelectedOption, setL4SelectedOption] = useState<string | null>(null);
  const [l4IsWrong, setL4IsWrong] = useState(false);

  // -------------------------------------------------------------------------
  // LEVEL 5: BUILD & RUN STATE (Interactive user typing after print)
  // -------------------------------------------------------------------------
  const [l5InputLine1, setL5InputLine1] = useState<string>('"Welcome to Python!"');
  const [l5InputLine2, setL5InputLine2] = useState<string>('');
  const [l5IsTypingError, setL5IsTypingError] = useState<boolean>(false);
  const [l5RanCode, setL5RanCode] = useState(false);
  const l5InputRef = useRef<HTMLInputElement>(null);
  const l5Input1Ref = useRef<HTMLInputElement>(null);

  // Auto Advance countdown ref
  const timerRef = useRef<any>(null);

  // Toggle Sound
  const toggleSound = () => {
    const nextState = soundEffects.toggleSound();
    setSoundOn(nextState);
  };

  // Trigger Celebration & Schedule Automatic Level Advance
  const triggerLevelSuccess = (nextLvl: 1 | 2 | 3 | 4 | 5 | 'done', successMessage: string) => {
    if (soundOn) {
      soundEffects.playQuizCorrect();
      soundEffects.playSuccess();
    }
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2400);

    setScore(10);
    setCoins(prev => prev + 10);
    setRobotSpeech(successMessage);

    if (!completedLevels.includes(currentLevel)) {
      setCompletedLevels(prev => [...prev, currentLevel]);
    }

    // Auto-advance after 1.5s countdown without needing tab clicks!
    if (nextLvl !== 'done') {
      setAutoAdvanceTimer(2);
      timerRef.current = setTimeout(() => {
        setAutoAdvanceTimer(null);
        handleGoToLevel(nextLvl);
      }, 1500);
    }
  };

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Navigate to Level (Auto or Manual)
  const handleGoToLevel = (lvl: 1 | 2 | 3 | 4 | 5) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setAutoAdvanceTimer(null);
    setShowHint(false);
    setCurrentLevel(lvl);

    if (lvl === 1) {
      setScore(l1DroppedOption ? 10 : 0);
      setRobotSpeech("Drag or click the correct option to complete what Python is!");
    } else if (lvl === 2) {
      setScore(l2Executed ? 10 : 0);
      setRobotSpeech("Arrange the blocks in the correct order to print 'Hello Future.AI'!");
    } else if (lvl === 3) {
      setScore(l3ConnectedApps.length === 5 ? 10 : 0);
      setRobotSpeech("Connect Python with its real-world applications by tapping each field!");
    } else if (lvl === 4) {
      setScore(l4SelectedOption === 'opt_multiline' ? 10 : 0);
      setRobotSpeech("Look at the 3 print lines and predict the exact terminal output!");
    } else if (lvl === 5) {
      setScore(l5RanCode ? 10 : 0);
      if (l5RanCode) {
        setRobotSpeech("🎉 Mission Accomplished! You built and executed your first Python program!");
      } else {
        setRobotSpeech("Type \"Let's learn with Future.AI!\" after print( on line 2, then tap Run Code!");
      }
      setTimeout(() => {
        l5InputRef.current?.focus();
      }, 150);
    }
  };

  // -------------------------------------------------------------------------
  // HANDLERS FOR LEVEL 1 (Drag & Drop)
  // -------------------------------------------------------------------------
  const handleSelectL1Option = (option: { id: string; label: string; isCorrect: boolean }) => {
    if (l1DroppedOption) return; // already solved

    if (option.isCorrect) {
      setL1DroppedOption(option.label.replace('\n', ' '));
      setL1WrongOption(null);
      triggerLevelSuccess(2, "Awesome! Python is indeed a high-level programming language!");
    } else {
      if (soundOn) soundEffects.playError();
      setL1WrongOption(option.id);
      setRobotSpeech("Not quite! Python is a programming language, not a " + option.label.toLowerCase() + ". Try again!");
      setTimeout(() => setL1WrongOption(null), 1000);
    }
  };

  // -------------------------------------------------------------------------
  // HANDLERS FOR LEVEL 2 (Sequence)
  // -------------------------------------------------------------------------
  const handleAddBlockToSlot = (block: { id: string; label: string }) => {
    if (l2Executed) return;
    if (soundOn) soundEffects.playClick();

    const emptyIdx = l2Slots.findIndex(s => s === null);
    if (emptyIdx === -1) return;

    const nextSlots = [...l2Slots];
    nextSlots[emptyIdx] = block.label;
    setL2Slots(nextSlots);

    // Remove from available
    setL2AvailableBlocks(prev => prev.filter(b => b.id !== block.id));

    // Check if slots are filled correctly: print ( "Hello Future.AI" )
    if (emptyIdx === 3) {
      const isCorrect = 
        nextSlots[0] === 'print' && 
        nextSlots[1] === '(' && 
        nextSlots[2] === '"Hello Future.AI"' && 
        nextSlots[3] === ')';

      if (isCorrect) {
        setL2Executed(true);
        triggerLevelSuccess(3, "Terminal executed! 'Hello Future.AI' printed in the correct sequence!");
      } else {
        if (soundOn) soundEffects.playError();
        setRobotSpeech("Order isn't quite right. Follow: print ( \"text\" ). Tap Reset to try again!");
      }
    }
  };

  const handleResetLevel2 = () => {
    if (soundOn) soundEffects.playClick();
    setL2Slots([null, null, null, null]);
    setL2AvailableBlocks([
      { id: 'blk_close_paren', label: ')' },
      { id: 'blk_print', label: 'print' },
      { id: 'blk_str', label: '"Hello Future.AI"' },
      { id: 'blk_open_paren', label: '(' }
    ]);
    setL2Executed(false);
    setScore(0);
    setRobotSpeech("Blocks reset! Put 'print' first, then '(', text, and ')'!");
  };

  // -------------------------------------------------------------------------
  // HANDLERS FOR LEVEL 3 (Match the Pair)
  // -------------------------------------------------------------------------
  const handleToggleL3App = (appId: string) => {
    if (soundOn) soundEffects.playClick();
    if (l3ConnectedApps.includes(appId)) return;

    const nextConnected = [...l3ConnectedApps, appId];
    setL3ConnectedApps(nextConnected);

    if (nextConnected.length === STYLEGUIDE_MATCH_PAIR.applications.length) {
      triggerLevelSuccess(4, "All 5 domains linked! Python powers Data, AI, Web, Automation & Games!");
    } else {
      setRobotSpeech("Linked " + nextConnected.length + " of 5 domains! Tap the remaining applications.");
    }
  };

  // -------------------------------------------------------------------------
  // HANDLERS FOR LEVEL 4 (Predict Output)
  // -------------------------------------------------------------------------
  const handleSelectL4Option = (optId: string, isCorrect: boolean) => {
    if (l4SelectedOption) return;
    setL4SelectedOption(optId);

    if (isCorrect) {
      setL4IsWrong(false);
      triggerLevelSuccess(5, "Spot on! Each print() statement outputs its text on a new separate line!");
    } else {
      if (soundOn) soundEffects.playError();
      setL4IsWrong(true);
      setRobotSpeech("Each print() statement in Python outputs on its own line! Notice the 3 lines.");
    }
  };

  // -------------------------------------------------------------------------
  // HANDLERS FOR LEVEL 5 (Build & Run - Interactive Code Typing)
  // -------------------------------------------------------------------------
  const handleRunCodeLevel5 = () => {
    if (l5RanCode) return;

    // Normalize Line 2 input
    let s2 = l5InputLine2.trim();
    // Support if user mistakenly wrapped with print(...)
    const pMatch2 = s2.match(/^print\s*\(\s*(.*)\s*\)$/i);
    if (pMatch2) s2 = pMatch2[1].trim();

    // Strip leading and trailing quotes (double, single, smart quotes)
    if (
      (s2.startsWith('"') && s2.endsWith('"')) ||
      (s2.startsWith("'") && s2.endsWith("'")) ||
      (s2.startsWith('“') && s2.endsWith('”'))
    ) {
      s2 = s2.slice(1, -1).trim();
    }

    const norm2 = s2.toLowerCase().replace(/[’']/g, "'");
    const isLine2Valid = 
      norm2 === "let's learn with future.ai!" ||
      norm2 === "let's learn with future.ai" ||
      norm2 === "lets learn with future.ai!" ||
      norm2 === "lets learn with future.ai" ||
      norm2 === "let's learn with future ai";

    if (isLine2Valid) {
      setL5IsTypingError(false);
      setL5RanCode(true);
      triggerLevelSuccess(
        'done', 
        "🎉 Mission Accomplished! You typed and executed print(\"Let's learn with Future.AI!\") successfully!"
      );
    } else {
      if (soundOn) soundEffects.playError();
      setL5IsTypingError(true);
      if (!l5InputLine2.trim()) {
        setRobotSpeech('Line 2 is empty! Type "Let\'s learn with Future.AI!" after print( on line 2, then tap Run Code.');
      } else {
        setRobotSpeech('Check line 2! Type "Let\'s learn with Future.AI!" inside print(), then tap Run Code.');
      }
      setTimeout(() => setL5IsTypingError(false), 1200);
      l5InputRef.current?.focus();
    }
  };

  const handleResetLevel5 = () => {
    if (soundOn) soundEffects.playClick();
    setL5InputLine1('"Welcome to Python!"');
    setL5InputLine2('');
    setL5RanCode(false);
    setL5IsTypingError(false);
    setScore(0);
    setRobotSpeech('Editor reset! Type "Let\'s learn with Future.AI!" after print( on line 2.');
    setTimeout(() => {
      l5InputRef.current?.focus();
    }, 100);
  };

  const handleFinishMission = () => {
    if (soundOn) soundEffects.playCelebration();
    if (onUnlockNextStage) {
      onUnlockNextStage();
    } else if (onBackToTopic) {
      onBackToTopic();
    }
  };

  return (
    <div className="fai-game-viewport">
      {/* Subtle room backdrop from reference */}
      <div className="fai-room-backdrop" />

      {/* Subtle Confetti shower on level completion */}
      <SubtleConfetti active={showConfetti} />

      <div className="fai-game-inner">
        
        {/* ===================================================================
            TOP NAVIGATION BAR
            =================================================================== */}
        <div className="fai-top-bar">
          <div className="flex items-center gap-3">
            <button 
              className="fai-back-btn" 
              onClick={() => {
                if (currentLevel > 1) handleGoToLevel((currentLevel - 1) as any);
                else if (onBackToTopic) onBackToTopic();
              }}
              title="Back"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="fai-prog-wrapper">
              <span className="fai-prog-title">Game {currentLevel}/5</span>
              
              {/* 5-segment pill progress indicator */}
              <div className="fai-pill-segments">
                {[1, 2, 3, 4, 5].map((lvl) => {
                  const isCurrent = lvl === currentLevel;
                  const isDone = completedLevels.includes(lvl);
                  return (
                    <div 
                      key={lvl}
                      className={`fai-pill-segment ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {autoAdvanceTimer !== null && (
              <div className="fai-auto-advance-pill">
                <Sparkles className="w-3 h-3 text-emerald-500 animate-spin" />
                <span>Next game in {autoAdvanceTimer}s...</span>
              </div>
            )}

            {/* Gold Coins Badge */}
            <div className="fai-coins-badge">
              <span>🪙</span>
              <span>{coins}</span>
            </div>

            {/* Sound Toggle */}
            <button 
              className="fai-sound-toggle-btn"
              onClick={toggleSound}
              title={soundOn ? 'Mute sound' : 'Enable sound'}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>

        {/* ===================================================================
            MAIN GAME STAGE CARD (EXACT SECTION 8 OF media_1790613114942.jpg)
            =================================================================== */}
        <div className="fai-stage-card">
          
          {/* ---------------- LEVEL 1: DRAG & DROP ---------------- */}
          {currentLevel === 1 && (
            <>
              <div className="fai-stage-header">
                <div className="fai-stage-header-left">
                  <div className="fai-stage-badge" style={{ background: STYLEGUIDE_DRAG_DROP.badgeColor }}>
                    {STYLEGUIDE_DRAG_DROP.badgeNum}
                  </div>
                  <div className="fai-stage-title-wrap">
                    <h2 className="fai-stage-title">{STYLEGUIDE_DRAG_DROP.title}</h2>
                    <span className="fai-stage-subtitle">{STYLEGUIDE_DRAG_DROP.subtitle}</span>
                  </div>
                </div>

                <button 
                  className="fai-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                >
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Hint</span>
                </button>
              </div>

              {showHint && (
                <div className="fai-hint-bubble">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{STYLEGUIDE_DRAG_DROP.hint}</span>
                </div>
              )}

              <p className="fai-instruction-text">{STYLEGUIDE_DRAG_DROP.instruction}</p>

              {/* Drag & Drop interactive zone */}
              <div className="fai-dd-container">
                
                {/* Target Sentence Card */}
                <div className="fai-dd-target-card">
                  <div className="fai-dd-sentence-lead">{STYLEGUIDE_DRAG_DROP.sentencePrefix}</div>
                  
                  <div 
                    className={`fai-drop-zone ${l1DroppedOption ? 'filled' : ''} ${l1WrongOption ? 'wrong' : ''}`}
                    onClick={() => {
                      if (!l1DroppedOption) {
                        handleSelectL1Option(STYLEGUIDE_DRAG_DROP.options[0]);
                      }
                    }}
                  >
                    {l1DroppedOption ? (
                      <span className="fai-drop-filled-text">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                        {l1DroppedOption}
                      </span>
                    ) : (
                      <span className="fai-drop-placeholder">?</span>
                    )}
                  </div>
                </div>

                {/* 4 Option Cards */}
                <div className="fai-options-col">
                  {STYLEGUIDE_DRAG_DROP.options.map((opt) => {
                    const isCorrectSelected = l1DroppedOption === opt.label.replace('\n', ' ');
                    const isWrong = l1WrongOption === opt.id;

                    return (
                      <div
                        key={opt.id}
                        className={`fai-option-card ${isCorrectSelected ? 'selected-correct' : ''} ${isWrong ? 'selected-wrong' : ''}`}
                        onClick={() => handleSelectL1Option(opt)}
                      >
                        {opt.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* ---------------- LEVEL 2: SEQUENCE ---------------- */}
          {currentLevel === 2 && (
            <>
              <div className="fai-stage-header">
                <div className="fai-stage-header-left">
                  <div className="fai-stage-badge" style={{ background: STYLEGUIDE_SEQUENCE.badgeColor }}>
                    {STYLEGUIDE_SEQUENCE.badgeNum}
                  </div>
                  <div className="fai-stage-title-wrap">
                    <h2 className="fai-stage-title">{STYLEGUIDE_SEQUENCE.title}</h2>
                    <span className="fai-stage-subtitle">{STYLEGUIDE_SEQUENCE.subtitle}</span>
                  </div>
                </div>

                <button 
                  className="fai-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                >
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Hint</span>
                </button>
              </div>

              {showHint && (
                <div className="fai-hint-bubble">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{STYLEGUIDE_SEQUENCE.hint}</span>
                </div>
              )}

              <p className="fai-instruction-text">{STYLEGUIDE_SEQUENCE.instruction}</p>

              <div className="fai-seq-container">
                {/* Dark Output Terminal */}
                <div className="fai-seq-terminal">
                  <div className="fai-terminal-head">
                    <div className="fai-terminal-dots">
                      <span className="fai-term-dot red" />
                      <span className="fai-term-dot yellow" />
                      <span className="fai-term-dot green" />
                    </div>
                    <span className="fai-term-tag">Output</span>
                  </div>
                  <div className="fai-term-body">
                    <span>{l2Executed ? STYLEGUIDE_SEQUENCE.terminalOutput : '>>> awaiting execution...'}</span>
                    <button className="fai-term-play-btn" title="Run">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>
                  </div>
                </div>

                {/* 4 Numbered Slot Boxes (1, 2, 3, 4) */}
                <div className="fai-seq-slots-row">
                  {[0, 1, 2, 3].map((slotIdx) => {
                    const blockVal = l2Slots[slotIdx];
                    return (
                      <div 
                        key={slotIdx}
                        className={`fai-seq-slot ${blockVal ? 'filled' : ''}`}
                      >
                        <span className="fai-seq-slot-num">{slotIdx + 1}</span>
                        {blockVal && (
                          <span className="font-mono text-xs font-bold text-purple-700">
                            {blockVal}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Available Blocks to Tap */}
                <div className="fai-seq-pool">
                  {l2AvailableBlocks.map((b) => (
                    <button
                      key={b.id}
                      className="fai-seq-block-btn"
                      onClick={() => handleAddBlockToSlot(b)}
                    >
                      {b.label}
                    </button>
                  ))}
                  {l2AvailableBlocks.length === 0 && (
                    <span className="text-xs font-semibold text-emerald-600">
                      ✓ All blocks slotted in sequence!
                    </span>
                  )}
                </div>
              </div>
            </>
          )}

          {/* ---------------- LEVEL 3: MATCH THE PAIR ---------------- */}
          {currentLevel === 3 && (
            <>
              <div className="fai-stage-header">
                <div className="fai-stage-header-left">
                  <div className="fai-stage-badge" style={{ background: STYLEGUIDE_MATCH_PAIR.badgeColor }}>
                    {STYLEGUIDE_MATCH_PAIR.badgeNum}
                  </div>
                  <div className="fai-stage-title-wrap">
                    <h2 className="fai-stage-title">{STYLEGUIDE_MATCH_PAIR.title}</h2>
                    <span className="fai-stage-subtitle">{STYLEGUIDE_MATCH_PAIR.subtitle}</span>
                  </div>
                </div>

                <button 
                  className="fai-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                >
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Hint</span>
                </button>
              </div>

              {showHint && (
                <div className="fai-hint-bubble">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{STYLEGUIDE_MATCH_PAIR.hint}</span>
                </div>
              )}

              <p className="fai-instruction-text">{STYLEGUIDE_MATCH_PAIR.instruction}</p>

              <div className="fai-match-container">
                {/* Center 3D Python Hub */}
                <div className="fai-match-hub">
                  <img 
                    src="/images/python_logo_3d_hd.png" 
                    alt="Python Logo" 
                    className="fai-match-hub-img"
                  />
                  <span className="fai-match-hub-label">{STYLEGUIDE_MATCH_PAIR.centerTitle}</span>
                </div>

                {/* 5 Real-world Applications */}
                <div className="fai-match-apps-list">
                  {STYLEGUIDE_MATCH_PAIR.applications.map((app) => {
                    const isConnected = l3ConnectedApps.includes(app.id);

                    return (
                      <div
                        key={app.id}
                        className={`fai-match-app-card ${isConnected ? 'connected' : ''}`}
                        onClick={() => handleToggleL3App(app.id)}
                      >
                        <div className="fai-app-icon-wrap">
                          {app.iconName === 'BarChart3' && <BarChart3 className="w-4 h-4" />}
                          {app.iconName === 'Bot' && <Bot className="w-4 h-4" />}
                          {app.iconName === 'Globe' && <Globe className="w-4 h-4" />}
                          {app.iconName === 'Cpu' && <Cpu className="w-4 h-4" />}
                          {app.iconName === 'Gamepad2' && <Gamepad2 className="w-4 h-4" />}
                        </div>
                        <span className="flex-1">{app.label}</span>
                        {isConnected && <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* ---------------- LEVEL 4: PREDICT THE OUTPUT ---------------- */}
          {currentLevel === 4 && (
            <>
              <div className="fai-stage-header">
                <div className="fai-stage-header-left">
                  <div className="fai-stage-badge" style={{ background: STYLEGUIDE_PREDICT.badgeColor }}>
                    {STYLEGUIDE_PREDICT.badgeNum}
                  </div>
                  <div className="fai-stage-title-wrap">
                    <h2 className="fai-stage-title">{STYLEGUIDE_PREDICT.title}</h2>
                    <span className="fai-stage-subtitle">{STYLEGUIDE_PREDICT.subtitle}</span>
                  </div>
                </div>

                <button 
                  className="fai-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                >
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Hint</span>
                </button>
              </div>

              {showHint && (
                <div className="fai-hint-bubble">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{STYLEGUIDE_PREDICT.hint}</span>
                </div>
              )}

              <p className="fai-instruction-text">{STYLEGUIDE_PREDICT.instruction}</p>

              <div className="fai-pred-container">
                {/* Dark Code Window (main.py) */}
                <div className="fai-pred-code-win">
                  <div className="fai-code-win-bar">
                    <div className="fai-terminal-dots">
                      <span className="fai-term-dot red" />
                      <span className="fai-term-dot yellow" />
                      <span className="fai-term-dot green" />
                    </div>
                    <span className="fai-code-filename">main.py</span>
                  </div>

                  <div className="fai-code-lines">
                    {STYLEGUIDE_PREDICT.codeSnippet.map((line, idx) => (
                      <div key={idx} className="fai-code-row">
                        <span className="fai-line-no">{idx + 1}</span>
                        <span className="fai-line-code">{line}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Options Grid with Radio Circles */}
                <div className="fai-pred-grid">
                  {STYLEGUIDE_PREDICT.options.map((opt) => {
                    const isSelected = l4SelectedOption === opt.id;
                    const isCorrect = opt.isCorrect;

                    return (
                      <div
                        key={opt.id}
                        className={`fai-pred-option-card ${isSelected && isCorrect ? 'correct' : ''} ${isSelected && !isCorrect ? 'wrong' : ''}`}
                        onClick={() => handleSelectL4Option(opt.id, opt.isCorrect)}
                      >
                        <div className="fai-pred-radio">
                          {isSelected && isCorrect && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div className="fai-pred-lines">
                          {opt.lines.map((l, lIdx) => (
                            <span key={lIdx}>{l}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* ---------------- LEVEL 5: BUILD & RUN ---------------- */}
          {currentLevel === 5 && (
            <>
              <div className="fai-stage-header">
                <div className="fai-stage-header-left">
                  <div className="fai-stage-badge" style={{ background: STYLEGUIDE_BUILD_RUN.badgeColor }}>
                    {STYLEGUIDE_BUILD_RUN.badgeNum}
                  </div>
                  <div className="fai-stage-title-wrap">
                    <h2 className="fai-stage-title">{STYLEGUIDE_BUILD_RUN.title}</h2>
                    <span className="fai-stage-subtitle">{STYLEGUIDE_BUILD_RUN.subtitle}</span>
                  </div>
                </div>

                <button 
                  className="fai-hint-btn"
                  onClick={() => setShowHint(!showHint)}
                >
                  <Lightbulb className="w-4 h-4 fill-current" />
                  <span>Hint</span>
                </button>
              </div>

              {showHint && (
                <div className="fai-hint-bubble">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{STYLEGUIDE_BUILD_RUN.hint}</span>
                </div>
              )}

              <div className="fai-task-question-banner">
                <span className="fai-task-question-badge">Question</span>
                <span className="fai-task-question-text">
                  Complete the code to display: <code>&quot;Let&apos;s learn with Future.AI!&quot;</code>
                </span>
              </div>

              <div className="fai-br-container">
                {/* Editor Window */}
                <div className="fai-br-editor-win">
                  <div className="fai-code-win-bar">
                    <div className="fai-terminal-dots">
                      <span className="fai-term-dot red" />
                      <span className="fai-term-dot yellow" />
                      <span className="fai-term-dot green" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="fai-code-filename">main.py</span>
                    </div>
                  </div>

                  <div className="fai-code-lines">
                    {/* Task Question inside main.py */}
                    <div className="fai-code-comment-row">
                      <span className="fai-line-no text-slate-600">#</span>
                      <span className="fai-code-comment">
                        Task: Complete code to display &quot;Let&apos;s learn with Future.AI!&quot;
                      </span>
                    </div>

                    {/* Line 1: Pre-filled print("Welcome to Python!") */}
                    <div className="fai-code-row">
                      <span className="fai-line-no">1</span>
                      <div className="fai-code-inline-statement">
                        <span className="fai-syntax-fn">print</span>
                        <span className="fai-syntax-paren">(</span>
                        <div className="fai-input-slot-wrapper">
                          <input
                            ref={l5Input1Ref}
                            type="text"
                            value={l5InputLine1}
                            onChange={(e) => setL5InputLine1(e.target.value)}
                            placeholder='"Welcome to Python!"'
                            className="fai-code-inline-input"
                            disabled={l5RanCode}
                            spellCheck={false}
                            autoComplete="off"
                          />
                        </div>
                        <span className="fai-syntax-paren">)</span>
                      </div>
                    </div>

                    {/* Line 2: Interactive typing line (user types here!) */}
                    <div className={`fai-code-row ${l5IsTypingError ? 'error-shake' : ''}`}>
                      <span className="fai-line-no">2</span>
                      <div className="fai-code-inline-statement">
                        <span className="fai-syntax-fn">print</span>
                        <span className="fai-syntax-paren">(</span>
                        <div className="fai-input-slot-wrapper">
                          <input
                            ref={l5InputRef}
                            type="text"
                            value={l5InputLine2}
                            onChange={(e) => {
                              setL5InputLine2(e.target.value);
                              if (l5IsTypingError) setL5IsTypingError(false);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleRunCodeLevel5();
                              }
                            }}
                            placeholder='type: "Let&#39;s learn with Future.AI!"'
                            className={`fai-code-inline-input active-field ${l5IsTypingError ? 'error' : ''} ${l5RanCode ? 'success' : ''}`}
                            disabled={l5RanCode}
                            spellCheck={false}
                            autoComplete="off"
                          />
                        </div>
                        <span className="fai-syntax-paren">)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blocks Dock & Quick Auto-Fill */}
                <div className="fai-br-blocks-dock">
                  <div className="fai-dock-top">
                    <span className="fai-dock-hint-text">
                      💡 Click block to auto-insert or type directly in Line 2:
                    </span>
                    {l5InputLine2 && !l5RanCode && (
                      <button
                        type="button"
                        className="fai-dock-clear-btn"
                        onClick={() => {
                          setL5InputLine2('');
                          l5InputRef.current?.focus();
                        }}
                      >
                        Clear ✕
                      </button>
                    )}
                  </div>

                  <div className="fai-dock-row">
                    <button
                      type="button"
                      className="fai-dock-brick clickable"
                      onClick={() => {
                        setL5InputLine1('"Welcome to Python!"');
                        if (soundOn) soundEffects.playClick();
                      }}
                      title="Fill Line 1"
                      disabled={l5RanCode}
                    >
                      &quot;Welcome to Python!&quot;
                    </button>
                    <button
                      type="button"
                      className="fai-dock-brick str clickable active-hint"
                      onClick={() => {
                        setL5InputLine2('"Let\'s learn with Future.AI!"');
                        setL5IsTypingError(false);
                        if (soundOn) soundEffects.playClick();
                        setRobotSpeech('Great! Now tap the green "▶ Run Code" button to execute!');
                        l5InputRef.current?.focus();
                      }}
                      title="Fill Line 2"
                      disabled={l5RanCode}
                    >
                      &quot;Let&apos;s learn with Future.AI!&quot;
                    </button>
                  </div>

                  <div className="fai-dock-actions">
                    <button 
                      className={`fai-run-code-btn ${l5InputLine2.trim() ? 'ready' : ''}`}
                      onClick={handleRunCodeLevel5}
                      disabled={l5RanCode}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{l5RanCode ? 'Executed' : 'Run Code'}</span>
                    </button>
                  </div>
                </div>

                {/* Output Card */}
                {l5RanCode && (
                  <div className="fai-br-output-card animate-fadeIn">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 mb-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Terminal Output:</span>
                      </div>
                      <div className="fai-terminal-output-text">
                        <div>Welcome to Python!</div>
                        <div className="text-emerald-600 font-bold">Let&apos;s learn with Future.AI!</div>
                      </div>
                    </div>
                    <span className="text-2xl animate-bounce">🎉</span>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ===================================================================
              BOTTOM BAR (ROBOT ASSISTANT, SCORE, ACTIONS)
              =================================================================== */}
          <div className="fai-bottom-bar">
            
            {/* Robot Unit with Speech Bubble */}
            <div className="fai-bottom-left">
              <div className="fai-robot-unit">
                <img 
                  src="/images/robot_assistant_styleguide.png" 
                  alt="Robot Assistant" 
                  className="fai-robot-avatar-img"
                />
                <div className="fai-robot-speech-bubble">
                  {robotSpeech}
                </div>
              </div>

              {/* Score Badge */}
              <div className="fai-score-pill">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                <span>Score: {score}/10</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="fai-actions-row">
              {/* Reset button for Level 2 and Level 5 */}
              {(currentLevel === 2 || currentLevel === 5) && (
                <button 
                  className="fai-reset-btn"
                  onClick={currentLevel === 2 ? handleResetLevel2 : handleResetLevel5}
                  title="Reset code"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}

              {/* Primary Next → Button (Levels 1 to 4) */}
              {currentLevel < 5 ? (
                <button
                  className={`fai-next-btn ${score === 10 ? 'pulse' : ''}`}
                  onClick={() => handleGoToLevel((currentLevel + 1) as any)}
                >
                  <span>Next →</span>
                </button>
              ) : (
                /* Level 5 Complete Mission Button */
                <button
                  className="fai-complete-btn"
                  onClick={handleFinishMission}
                >
                  <span>Complete Mission ➔</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
