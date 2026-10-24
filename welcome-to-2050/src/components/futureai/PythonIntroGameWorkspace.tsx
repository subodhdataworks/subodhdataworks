import React, { useState, useEffect, useRef } from 'react';
import './PythonIntroGameWorkspace.css';
import {
  Sparkles,
  Volume2,
  VolumeX,
  RotateCcw,
  Check,
  X,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  Target,
  Trophy,
  Copy,
  Swords,
  Shield,
  Zap,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  Flame,
  LayoutDashboard,
  BookOpen,
  Wallet,
  Building2,
  Award,
  Briefcase,
  Gamepad2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import { FutureLogo } from './FutureLogo';
import { soundEffects } from '../../services/soundEffects';
import {
  PythonGame,
  PythonChallenge,
  GameChoiceOption,
  LogicLine
} from '../../data/pythonIntroGamesData';
import { getPythonLevelGames, getPythonLevelMeta } from '../../data/pythonGamesRegistry';
import { LearningModulesProgressModal } from './LearningModulesProgressModal';
import { LiquidFloatingNavBar } from './LiquidFloatingNavBar';

export interface PythonIntroGameWorkspaceProps {
  userName?: string;
  levelId?: number;
  initialGameId?: number;
  isEmbedded?: boolean;
  topicTitle?: string;
  moduleTitle?: string;
  onBackToArena: () => void;
  onNavigateDock: (tab: string) => void;
  onOpenUnlockModal?: (title: string) => void;
  onOpenAdvisor?: () => void;
  onComplete?: () => void;
  onNextStep?: () => void;
}

interface StoredProgress {
  unlockedGameId: number;
  completedChallenges: string[];
  xp: number;
}

export const PythonIntroGameWorkspace: React.FC<PythonIntroGameWorkspaceProps> = ({
  userName = 'Subodh Kumar',
  levelId = 1,
  initialGameId = 1,
  isEmbedded = false,
  topicTitle,
  moduleTitle,
  onBackToArena,
  onNavigateDock,
  onOpenUnlockModal,
  onOpenAdvisor,
  onComplete,
  onNextStep,
}) => {
  // ── Level State ──
  const [currentLevelId, setCurrentLevelId] = useState<number>(() => (levelId === 2 ? 2 : 1));

  useEffect(() => {
    if (levelId && (levelId === 1 || levelId === 2) && levelId !== currentLevelId) {
      setCurrentLevelId(levelId);
      setActiveGameId(1);
      setActiveChallengeNum(1);
    }
  }, [levelId]);

  const storageKey = `future_it_python_level_${currentLevelId}_games_step_flow_v3`;

  // ── 1. Persistent State ──
  const [progress, setProgress] = useState<StoredProgress>(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(`future_it_python_level_${levelId || 1}_games_step_flow_v3`);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('Failed to parse intro game progress', e);
      }
    }
    return {
      unlockedGameId: 8, // Unlock all 8 games by default as requested
      completedChallenges: [],
      xp: 1250,
    };
  });

  // Active Game (1 to 8) and Active Challenge (1 to 10)
  const [activeGameId, setActiveGameId] = useState<number>(() => {
    return initialGameId && initialGameId >= 1 && initialGameId <= 8 ? initialGameId : 1;
  });
  const [activeChallengeNum, setActiveChallengeNum] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Active Game and Challenge entities
  const gamesList: PythonGame[] = getPythonLevelGames(currentLevelId);
  const levelMeta = getPythonLevelMeta(currentLevelId);

  const activeGame: PythonGame =
    gamesList.find((g) => g.id === activeGameId) || gamesList[0];

  const currentChallenge: PythonChallenge =
    activeGame.challenges.find((c) => c.challengeNum === activeChallengeNum) ||
    activeGame.challenges[0];

  // ── 2. Feedback & Animation States ──
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isAdvancing, setIsAdvancing] = useState<boolean>(false);
  const [gameTransitionNotice, setGameTransitionNotice] = useState<{
    fromGame: number;
    toGame: number;
    toGameTitle: string;
  } | null>(null);
  const [showModuleCompleteModal, setShowModuleCompleteModal] = useState<boolean>(false);
  const [copiedExpected, setCopiedExpected] = useState<boolean>(false);
  const [modulesLockTarget, setModulesLockTarget] = useState<string | null>(null);

  // ── 3. Specialized State for Each Game Mode ──
  // Mode 1: Code Puzzle
  const [puzzleSlots, setPuzzleSlots] = useState<string[]>([]);
  const [availablePuzzleTokens, setAvailablePuzzleTokens] = useState<string[]>([]);
  const [draggedTokenInfo, setDraggedTokenInfo] = useState<{ token: string; sourceIdx?: number; isFromSlot?: boolean } | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);

  // Mode 2, 4, 5, 8: Multiple Choice Selection
  const [selectedChoiceKey, setSelectedChoiceKey] = useState<string | null>(null);
  const [choiceStatus, setChoiceStatus] = useState<'correct' | 'wrong' | null>(null);

  // Mode 3: Match the Code (Upper Code, Lower Output + Milan ka Rope)
  const [selectedMatchLeft, setSelectedMatchLeft] = useState<string | null>(null);
  const [activeMatches, setActiveMatches] = useState<Record<string, string>>({});
  const [shuffledMatchOutputs, setShuffledMatchOutputs] = useState<string[]>([]);
  const matchStageRef = useRef<HTMLDivElement | null>(null);
  const topPinRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const bottomPinRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [milanRopes, setMilanRopes] = useState<
    Array<{
      key: string;
      left: string;
      right: string;
      pathD: string;
      color: string;
      arrowX: number;
      arrowY: number;
      angle: number;
    }>
  >([]);

  // Mode 6: Component Blueprint Machine
  const [blueprintPlacedSlots, setBlueprintPlacedSlots] = useState<Record<number, string>>({});
  const [availableComponents, setAvailableComponents] = useState<string[]>([]);

  // Mode 7: Logic Builder
  const [orderedLines, setOrderedLines] = useState<LogicLine[]>([]);

  // Mode 8: Boss Fight
  const [bossHp, setBossHp] = useState<number>(100);
  const [isBossAttacked, setIsBossAttacked] = useState<boolean>(false);
  const [floatingDamage, setFloatingDamage] = useState<string | null>(null);

  // Save progress helper
  const saveProgress = (newProg: StoredProgress) => {
    setProgress(newProg);
    try {
      localStorage.setItem(storageKey, JSON.stringify(newProg));
    } catch (e) {
      console.warn('Storage save error', e);
    }
  };

  // Recalculate Milan ka Rope paths whenever matches or layout change
  const calculateMilanRopes = () => {
    if (!matchStageRef.current) return;
    const stageRect = matchStageRef.current.getBoundingClientRect();
    if (stageRect.width === 0) return;

    const ROPE_PALETTE = ['#06b6d4', '#10b981', '#a855f7', '#f59e0b', '#ec4899'];
    const calculated: Array<{
      key: string;
      left: string;
      right: string;
      pathD: string;
      color: string;
      arrowX: number;
      arrowY: number;
      angle: number;
    }> = [];

    Object.entries(activeMatches).forEach(([leftVal, rightVal], index) => {
      const topPin = topPinRefs.current[leftVal];
      const bottomPin = bottomPinRefs.current[rightVal];

      if (topPin && bottomPin) {
        const topRect = topPin.getBoundingClientRect();
        const btmRect = bottomPin.getBoundingClientRect();

        const x1 = topRect.left + topRect.width / 2 - stageRect.left;
        const y1 = topRect.top + topRect.height / 2 - stageRect.top;
        const x2 = btmRect.left + btmRect.width / 2 - stageRect.left;
        const y2 = btmRect.top + btmRect.height / 2 - stageRect.top;

        const dx = x2 - x1;
        const cp1x = x1 + dx * 0.45;
        const cp1y = y1;
        const cp2x = x2 - dx * 0.45;
        const cp2y = y2;
        const pathD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;

        const arrowX = 0.125 * x1 + 0.375 * cp1x + 0.375 * cp2x + 0.125 * x2;
        const arrowY = 0.125 * y1 + 0.375 * cp1y + 0.375 * cp2y + 0.125 * y2;
        const tx = 3 * (0.25 * (cp1x - x1) + 0.5 * (cp2x - cp1x) + 0.25 * (x2 - cp2x));
        const ty = 3 * (0.25 * (cp1y - y1) + 0.5 * (cp2y - cp1y) + 0.25 * (y2 - cp2y));
        const angle = (Math.atan2(ty, tx) * 180) / Math.PI;

        calculated.push({
          key: `${leftVal}-${rightVal}`,
          left: leftVal,
          right: rightVal,
          pathD,
          color: ROPE_PALETTE[index % ROPE_PALETTE.length],
          arrowX,
          arrowY,
          angle,
        });
      }
    });

    setMilanRopes(calculated);
  };

  // ── 4. Initialize State on Game or Challenge Change ──
  useEffect(() => {
    setFeedback(null);
    setIsAdvancing(false);
    setSelectedChoiceKey(null);
    setChoiceStatus(null);

    // Initialize Mode 1
    if (activeGame.gameType === 'code_puzzle') {
      setPuzzleSlots([]);
      setAvailablePuzzleTokens([...(currentChallenge.puzzleTokens || [])]);
    }

    // Initialize Mode 3
    if (activeGame.gameType === 'match_code') {
      setSelectedMatchLeft(null);
      setActiveMatches({});
      const rawOutputs = [
        ...(currentChallenge.matchPairs || []).map((p) => p.right),
        ...(currentChallenge.matchDistractors || []),
      ];
      const shuffled = [...rawOutputs];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledMatchOutputs(shuffled);
    }

    // Initialize Mode 6
    if (activeGame.gameType === 'blueprint_builder') {
      setBlueprintPlacedSlots({});
      setAvailableComponents([...(currentChallenge.blueprintComponents || [])]);
    }

    // Initialize Mode 7
    if (activeGame.gameType === 'logic_builder') {
      // Shuffle logic lines slightly so player has to arrange them
      const initial = [...(currentChallenge.logicLines || [])];
      if (initial.length > 2) {
        // Swap first two to create un-ordered initial puzzle
        const temp = initial[0];
        initial[0] = initial[1];
        initial[1] = temp;
      }
      setOrderedLines(initial);
    }

    // Initialize Mode 8
    if (activeGame.gameType === 'boss_fight') {
      // Calculate HP remaining based on question number (100 - (q-1)*10 for 10 questions)
      const totalQ = activeGame.challenges.length || 5;
      const hpStep = 100 / totalQ;
      const currentHp = Math.max(0, Math.round(100 - (activeChallengeNum - 1) * hpStep));
      setBossHp(currentHp);
      setIsBossAttacked(false);
    }
  }, [activeGameId, activeChallengeNum]);

  // Recalculate Milan ka Rope whenever matches, active game/challenge, or output layout change
  useEffect(() => {
    if (activeGame.gameType === 'match_code') {
      const timer = setTimeout(calculateMilanRopes, 50);
      window.addEventListener('resize', calculateMilanRopes);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', calculateMilanRopes);
      };
    }
  }, [activeMatches, activeGameId, activeChallengeNum, shuffledMatchOutputs, selectedMatchLeft]);

  // ── 5. Auto Advancement Engine ──
  const handleCorrectAnswer = (bonusXp: number = 10, customMsg: string = 'Correct! +10 XP') => {
    if (isAdvancing) return;

    if (soundEnabled) {
      soundEffects.playQuizCorrect();
    }
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.7 } });

    // Award XP and record completion
    const chalId = currentChallenge.id;
    const isAlreadyDone = progress.completedChallenges.includes(chalId);
    const newXp = isAlreadyDone ? progress.xp : progress.xp + bonusXp;
    const newCompleted = isAlreadyDone
      ? progress.completedChallenges
      : [...progress.completedChallenges, chalId];

    saveProgress({
      ...progress,
      xp: newXp,
      completedChallenges: newCompleted,
    });

    setFeedback({ type: 'success', message: customMsg });
    setIsAdvancing(true);

    // Auto Advance after 1.2s delay
    setTimeout(() => {
      setIsAdvancing(false);
      setFeedback(null);

      if (activeChallengeNum < activeGame.challenges.length) {
        // Next question in current game
        setActiveChallengeNum((prev) => prev + 1);
      } else {
        // Game completed! All questions answered
        if (activeGameId < 8) {
          const nextGameId = activeGameId + 1;
          const nextGame = gamesList.find((g) => g.id === nextGameId)!;

          // Unlock next game
          const highestUnlocked = Math.max(progress.unlockedGameId, nextGameId);
          saveProgress({
            ...progress,
            xp: newXp + 50, // bonus 50 XP for game completion
            unlockedGameId: highestUnlocked,
            completedChallenges: newCompleted,
          });

          // Show transition banner
          setGameTransitionNotice({
            fromGame: activeGameId,
            toGame: nextGameId,
            toGameTitle: nextGame.title,
          });

          if (soundEnabled) {
            soundEffects.playCelebration();
          }
          confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });

          // Smoothly switch to next game screen in 1.4s
          setTimeout(() => {
            setGameTransitionNotice(null);
            setActiveGameId(nextGameId);
            setActiveChallengeNum(1);
          }, 1400);
        } else {
          // Final Game 8 Completed! Module Complete!
          if (soundEnabled) {
            soundEffects.playCelebration();
          }
          confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
          setShowModuleCompleteModal(true);
        }
      }
    }, 1200);
  };

  // ── 6. Mode 1: Code Puzzle Actions ──
  const handleAddPuzzleToken = (tok: string, idx: number) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();

    setAvailablePuzzleTokens((prev) => prev.filter((_, i) => i !== idx));
    const nextSlots = [...puzzleSlots, tok];
    setPuzzleSlots(nextSlots);

    // If all slots filled, check automatically
    const expected = currentChallenge.expectedPuzzleTokens || currentChallenge.puzzleTokens || [];
    if (nextSlots.length === expected.length) {
      const isMatch = nextSlots.every((t, i) => t === expected[i]);
      if (isMatch) {
        handleCorrectAnswer(10, '🎉 Perfect Assembly! Code matches expected output.');
      } else {
        if (soundEnabled) soundEffects.playQuizWrong();
        setFeedback({ type: 'error', message: 'Not quite in the right order. Tap tokens in the slot to remove.' });
      }
    }
  };

  const handleRemovePuzzleSlot = (idx: number) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();
    const removed = puzzleSlots[idx];
    setPuzzleSlots((prev) => prev.filter((_, i) => i !== idx));
    setAvailablePuzzleTokens((prev) => [...prev, removed]);
    setFeedback(null);
  };

  const handleDragStartToken = (e: React.DragEvent, tok: string, idx: number) => {
    if (isAdvancing) return;
    setDraggedTokenInfo({ token: tok, sourceIdx: idx, isFromSlot: false });
    e.dataTransfer.setData('text/plain', JSON.stringify({ token: tok, sourceIdx: idx, isFromSlot: false }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragStartSlot = (e: React.DragEvent, tok: string, slotIdx: number) => {
    if (isAdvancing) return;
    setDraggedTokenInfo({ token: tok, sourceIdx: slotIdx, isFromSlot: true });
    e.dataTransfer.setData('text/plain', JSON.stringify({ token: tok, sourceIdx: slotIdx, isFromSlot: true }));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDropOnSlot = (e: React.DragEvent, targetSlotIdx: number) => {
    e.preventDefault();
    setDragOverSlot(null);
    if (isAdvancing) return;

    let dragData = draggedTokenInfo;
    try {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) dragData = JSON.parse(raw);
    } catch (err) {
      // fallback to state
    }

    if (!dragData) return;
    if (soundEnabled) soundEffects.playClick();

    if (!dragData.isFromSlot) {
      // Dragged from available tokens pool
      const tok = dragData.token;
      const fromIdx = dragData.sourceIdx!;

      // Remove from available tokens
      setAvailablePuzzleTokens((prev) => prev.filter((_, i) => i !== fromIdx));

      // Place into puzzleSlots at targetSlotIdx
      setPuzzleSlots((prev) => {
        const next = [...prev];
        if (next[targetSlotIdx]) {
          setAvailablePuzzleTokens((avail) => [...avail, next[targetSlotIdx]]);
        }
        next[targetSlotIdx] = tok;

        // Auto-check if all slots filled
        const expected = currentChallenge.expectedPuzzleTokens || currentChallenge.puzzleTokens || [];
        if (next.filter(Boolean).length === expected.length) {
          const isMatch = next.every((t, i) => t === expected[i]);
          if (isMatch) {
            handleCorrectAnswer(10, '🎉 Perfect Assembly! Code matches expected output.');
          } else {
            if (soundEnabled) soundEffects.playQuizWrong();
            setFeedback({ type: 'error', message: 'Not quite in the right order. Tap tokens to rearrange or use Hint!' });
          }
        }
        return next;
      });
    } else {
      // Reordering between slots
      const fromSlot = dragData.sourceIdx!;
      if (fromSlot === targetSlotIdx) return;

      setPuzzleSlots((prev) => {
        const next = [...prev];
        const temp = next[targetSlotIdx];
        next[targetSlotIdx] = next[fromSlot];
        next[fromSlot] = temp;

        const expected = currentChallenge.expectedPuzzleTokens || currentChallenge.puzzleTokens || [];
        if (next.filter(Boolean).length === expected.length) {
          const isMatch = next.every((t, i) => t === expected[i]);
          if (isMatch) {
            handleCorrectAnswer(10, '🎉 Perfect Assembly! Code matches expected output.');
          } else {
            if (soundEnabled) soundEffects.playQuizWrong();
            setFeedback({ type: 'error', message: 'Not quite in the right order. Tap tokens to rearrange or use Hint!' });
          }
        }
        return next;
      });
    }

    setDraggedTokenInfo(null);
  };

  const handleCheckAnswerManual = () => {
    if (isAdvancing) return;
    if (puzzleSlots.length === 0) {
      setFeedback({ type: 'error', message: 'Please place code tokens into the editor first!' });
      return;
    }
    const expected = currentChallenge.expectedPuzzleTokens || currentChallenge.puzzleTokens || [];
    const isMatch = puzzleSlots.length === expected.length && puzzleSlots.every((t, i) => t === expected[i]);
    if (isMatch) {
      handleCorrectAnswer(10, '🎉 Perfect Assembly! Code matches expected output.');
    } else {
      if (soundEnabled) soundEffects.playQuizWrong();
      setFeedback({ type: 'error', message: 'Not quite in the right order. Tap tokens to rearrange or use Hint!' });
    }
  };

  const handleUseHint = () => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playZapLifeline();
    const expected = currentChallenge.expectedPuzzleTokens || currentChallenge.puzzleTokens || [];
    
    // Deduct 50 XP
    saveProgress({
      ...progress,
      xp: Math.max(0, progress.xp - 50),
    });

    // Auto-fill slots correctly
    setPuzzleSlots([...expected]);
    setAvailablePuzzleTokens([]);
    setFeedback({
      type: 'success',
      message: `💡 Hint applied (-50 XP): Correct code is ${expected.join(' ')}`,
    });
  };

  // ── 7. Mode 2, 4, 5, 8: Multiple Choice Selection & Submit Handler ──
  const handleSelectChoice = (opt: GameChoiceOption) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();
    setSelectedChoiceKey(opt.key);
    setChoiceStatus(null);
    setFeedback(null);
  };

  const handleSubmitChoice = () => {
    if (isAdvancing) return;
    if (!selectedChoiceKey) {
      setFeedback({ type: 'error', message: '⚠️ Pehle apna option chunein, fir Submit par click karein!' });
      return;
    }
    const opt = currentChallenge.choiceOptions?.find((o) => o.key === selectedChoiceKey);
    if (!opt) return;

    if (opt.isCorrect) {
      setChoiceStatus('correct');

      if (activeGame.gameType === 'boss_fight') {
        const totalQ = activeGame.challenges.length || 5;
        const hpDamage = Math.round(100 / totalQ);
        setIsBossAttacked(true);
        setFloatingDamage(`-${hpDamage} HP`);
        if (soundEnabled) soundEffects.playZapLifeline();
        setBossHp((prev) => Math.max(0, prev - hpDamage));

        setTimeout(() => {
          setIsBossAttacked(false);
          setFloatingDamage(null);
        }, 800);
      }

      const expl = currentChallenge.explanation ? ` — ${currentChallenge.explanation}` : '';
      handleCorrectAnswer(10, `✓ Sahi Jawab! Option ${opt.key} bilkul sahi hai.${expl}`);
    } else {
      setChoiceStatus('wrong');
      if (soundEnabled) soundEffects.playQuizWrong();
      const expl = currentChallenge.explanation ? `\n💡 Concept: ${currentChallenge.explanation}` : ' Check the syntax and try again!';
      setFeedback({ type: 'error', message: `Option ${opt.key} galat hai.${expl}` });
    }
  };

  // ── 8. Mode 3: Match the Code Actions (Upper & Lower Milan Connectors) ──
  const handleSelectMatchCode = (left: string) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();
    setSelectedMatchLeft((prev) => (prev === left ? null : left));
  };

  const handleSelectMatchOutput = (right: string) => {
    if (isAdvancing) return;

    // Auto-select left if only 1 left pair exists and none selected yet
    let leftTarget = selectedMatchLeft;
    if (!leftTarget && currentChallenge.matchPairs?.length === 1) {
      leftTarget = currentChallenge.matchPairs[0].left;
    }

    if (!leftTarget) {
      setFeedback({
        type: 'error',
        message: '👆 Pehle Left side wale item ko click karein, fir uska matching purpose chunein!',
      });
      return;
    }
    if (soundEnabled) soundEffects.playClick();

    const pairs = currentChallenge.matchPairs || [];
    const targetPair = pairs.find((p) => p.left === leftTarget);

    if (targetPair && targetPair.right === right) {
      // Valid Match!
      const newMatches = { ...activeMatches, [leftTarget]: right };
      setActiveMatches(newMatches);
      setSelectedMatchLeft(null);
      setTimeout(calculateMilanRopes, 30);

      // Check if all pairs are matched
      if (Object.keys(newMatches).length === pairs.length) {
        handleCorrectAnswer(10, '🎉 Sabhi Jodiyan Sahi Match Ho Gayi! Milan Complete!');
      }
    } else {
      if (soundEnabled) soundEffects.playQuizWrong();
      setFeedback({
        type: 'error',
        message: `❌ "${leftTarget}" ka purpose "${right}" nahi hai. Phir se koshish karein!`,
      });
      setSelectedMatchLeft(null);
    }
  };

  // ── 9. Mode 6: Component Blueprint Machine Actions ──
  const handleAddBlueprintComponent = (comp: string, idx: number) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();

    // Find first empty slot (1, 2, 3...)
    const totalSlots = currentChallenge.blueprintSlotsCount || 3;
    let targetSlot = -1;
    for (let i = 1; i <= totalSlots; i++) {
      if (!blueprintPlacedSlots[i]) {
        targetSlot = i;
        break;
      }
    }

    if (targetSlot === -1) return; // All slots full

    setAvailableComponents((prev) => prev.filter((_, i) => i !== idx));
    const nextSlots = { ...blueprintPlacedSlots, [targetSlot]: comp };
    setBlueprintPlacedSlots(nextSlots);

    // Check if slots are filled and match expected
    const expected = currentChallenge.blueprintExpectedSlots || [];
    if (Object.keys(nextSlots).length === expected.length) {
      const isMatch = expected.every((val, i) => nextSlots[i + 1] === val);
      if (isMatch) {
        handleCorrectAnswer(10, '🎉 Blueprint Assembled Successfully!');
      } else {
        if (soundEnabled) soundEffects.playQuizWrong();
        setFeedback({ type: 'error', message: 'Blueprint order is not matching. Click a slot to remove.' });
      }
    }
  };

  const handleRemoveBlueprintSlot = (slotNum: number) => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();
    const removed = blueprintPlacedSlots[slotNum];
    if (!removed) return;

    const nextSlots = { ...blueprintPlacedSlots };
    delete nextSlots[slotNum];
    setBlueprintPlacedSlots(nextSlots);
    setAvailableComponents((prev) => [...prev, removed]);
    setFeedback(null);
  };

  // ── 10. Mode 7: Logic Builder Actions ──
  const handleMoveLogicLine = (idx: number, direction: 'up' | 'down') => {
    if (isAdvancing) return;
    if (soundEnabled) soundEffects.playClick();

    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= orderedLines.length) return;

    const newArr = [...orderedLines];
    const temp = newArr[idx];
    newArr[idx] = newArr[targetIdx];
    newArr[targetIdx] = temp;
    setOrderedLines(newArr);

    // Auto verify if correctly sorted
    const isCorrect = newArr.every((item, i) => item.correctIndex === i);
    if (isCorrect) {
      handleCorrectAnswer(10, '🎉 Logic Blocks Arranged Correctly!');
    }
  };

  // ── 11. Copy Expected Output Helper ──
  const handleCopyExpected = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentChallenge.expectedOutput);
      setCopiedExpected(true);
      if (soundEnabled) soundEffects.playClick();
      setTimeout(() => setCopiedExpected(false), 1800);
    }
  };

  // Reset current question
  const handleResetChallenge = () => {
    if (soundEnabled) soundEffects.playClick();
    setFeedback(null);
    setIsAdvancing(false);
    setSelectedChoiceKey(null);
    setChoiceStatus(null);
    setPuzzleSlots([]);
    setAvailablePuzzleTokens([...(currentChallenge.puzzleTokens || [])]);
    setSelectedMatchLeft(null);
    setActiveMatches({});
    setMilanRopes([]);
    setBlueprintPlacedSlots({});
    setAvailableComponents([...(currentChallenge.blueprintComponents || [])]);
  };

  return (
    <div className={`py-step-game-root ${isEmbedded ? 'is-embedded' : ''}`}>
      {/* ─────────────────────────────────────────────────────────────
          1. TOP APP HEADER (FUTURE IT INDUSTRY + Navigation + Stats)
             - Hidden when embedded in course workspace per user request
          ───────────────────────────────────────────────────────────── */}
      {!isEmbedded && (
        <header className="py-step-top-header">
          <div className="py-step-logo-area">
            <FutureLogo size="md" />
          </div>

          <div className="py-step-center-title">
            <div className="flex items-center gap-2">
              <span className="py-tech-chip font-black">{levelMeta.chapterBadge}</span>
              <h1 className="py-step-main-title">{levelMeta.headline}</h1>
              <button
                className="py-step-sound-toggle-inline ml-2"
                onClick={() => setSoundEnabled((prev) => !prev)}
                title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-white" />
                ) : (
                  <VolumeX className="w-4 h-4 text-white/70" />
                )}
              </button>
            </div>
            {/* Level Switcher: Level 1 (Intro) vs Level 2 (Variables) */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <button
                className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full transition-all ${
                  currentLevelId === 1
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                onClick={() => {
                  if (soundEnabled) soundEffects.playClick();
                  setCurrentLevelId(1);
                  setActiveGameId(1);
                  setActiveChallengeNum(1);
                  if (typeof window !== 'undefined') window.location.hash = '#intro-game?level=1';
                }}
              >
                Level 1: Intro
              </button>
              <button
                className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full transition-all ${
                  currentLevelId === 2
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                onClick={() => {
                  if (soundEnabled) soundEffects.playClick();
                  setCurrentLevelId(2);
                  setActiveGameId(1);
                  setActiveChallengeNum(1);
                  if (typeof window !== 'undefined') window.location.hash = '#intro-game?level=2';
                }}
              >
                Level 2: Variables
              </button>
            </div>
          </div>

          <div className="py-step-stats-area">
            <div className="py-step-xp-pill">
              <span className="text-amber-500 font-bold">🪙</span>
              <span className="font-extrabold text-slate-800 text-xs">{progress.xp} XP</span>
            </div>

            <button
              className="py-step-arena-back-btn"
              onClick={onNextStep || onBackToArena}
              title="Back to Learning"
            >
              <span>Back to Learning</span>
            </button>
          </div>
        </header>
      )}

      {/* Step indicator bar 1-8 removed to maximize vertical screen space */}

      {/* ─────────────────────────────────────────────────────────────
          3. GAME TRANSITION BANNER (When auto-advancing 1 -> 2 -> ... -> 8)
          ───────────────────────────────────────────────────────────── */}
      {gameTransitionNotice && (
        <div className="py-step-transition-banner">
          <div className="py-step-transition-content">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
            <strong className="text-sm font-bold text-white">
              Game {gameTransitionNotice.fromGame} Complete! Unlocking {gameTransitionNotice.toGameTitle}...
            </strong>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. 2.5D ARENA STUDIO STAGE (Flanked by 3D Pedestal and 3D Mascot Boy)
          Pixel-Perfect match with media_1791580511492.png
          ───────────────────────────────────────────────────────────── */}
      <div className="py-25d-studio-stage">
        {/* Left Side: 3D Glowing Circular Pedestal with Python Logo Glass Sphere */}
        <aside className="py-25d-pedestal-col" aria-label="3D Python Pedestal">
          <div className="py-25d-pedestal-card">
            <img
              src="/images/dashboard/pedestal_left_feathered.png"
              alt="3D Glowing Python Pedestal"
              className="py-25d-pedestal-img"
            />
          </div>
        </aside>

        {/* Center: 2.5D Interactive Game Card */}
        <main className="py-step-main-card-wrap">
          <section
            className={`py-step-game-card py-card-mode-${activeGame.gameType}`}
            style={{ borderColor: `${activeGame.activeColor}33` }}
          >
            {/* ── Card Header ── */}
            <div className="py-card-header">
              <div className="flex items-center gap-3">
                {/* Big Circular Number Badge */}
                <div
                  className="py-card-big-badge"
                  style={{ backgroundColor: activeGame.activeColor }}
                >
                  <span>{activeGame.badge}</span>
                </div>

                <div>
                  <h2 className="py-card-title">{topicTitle ? `${topicTitle} — ${activeGame.title}` : activeGame.title}</h2>
                  <p className="py-card-subtitle">{activeGame.subtitle}</p>
                </div>
              </div>

              {/* Question Progress & Controls */}
              <div className="flex items-center gap-2">
                <div className="py-card-question-pill">
                  <span>Question {activeChallengeNum}/{activeGame.challenges.length}</span>
                </div>

                <button
                  className="py-card-reset-btn"
                  onClick={handleResetChallenge}
                  title="Reset question"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                </button>
              </div>
            </div>

            {/* ── Card Body Based on Active Game ── */}
            <div className="py-card-body">
              {/* ════════════════════════════════════════════════════════
                  GAME 1: PUZZLE QUEST (Multiple Choice or Token Assembly)
                  ════════════════════════════════════════════════════════ */}
              {activeGame.gameType === 'code_puzzle' && (
                currentChallenge.choiceOptions && currentChallenge.choiceOptions.length > 0 ? (
                  <div className="py-g2-blank-container">
                    <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                    <div className="py-g2-main-grid">
                      {/* Left: Question Box */}
                      <div className="py-g2-code-box">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                            <Sparkles className="w-4 h-4 text-amber-400" />
                            <span>Question {activeChallengeNum} — Concept Challenge</span>
                          </div>
                          <p className="text-white text-base font-extrabold leading-snug">
                            {currentChallenge.task}
                          </p>
                        </div>
                      </div>

                      {/* Right: Mascot Boy */}
                      <div className="py-card-mascot-box">
                        <img
                          src={activeGame.mascotImg}
                          alt="Puzzle Quest Mascot"
                          className="py-card-mascot-img"
                        />
                      </div>
                    </div>

                    {/* Multiple Choice Options (A, B, C, D) */}
                    <div className="py-options-list">
                      {currentChallenge.choiceOptions.map((opt) => {
                        const isSelected = selectedChoiceKey === opt.key;
                        const isOptCorrect = isSelected && choiceStatus === 'correct';
                        const isOptWrong = isSelected && choiceStatus === 'wrong';

                        return (
                          <button
                            key={opt.key}
                            className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                              isOptWrong ? 'wrong' : ''
                            }`}
                            onClick={() => handleSelectChoice(opt)}
                            disabled={isAdvancing}
                          >
                            <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                            <span className="py-option-label">{opt.label}</span>
                            {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                          </button>
                        );
                      })}
                    </div>
                    
                  </div>
                ) : (
                  <div className="py-g1-puzzle-25d-container">
                    {/* 1. Sleek Code IDE Box with Drop Slots */}
                    <div className="py-g1-code-ide-wrap">
                      <div className="py-g1-ide-editor-box">
                        <span className="py-g1-line-num">1</span>
                        <div className="py-g1-slots-row">
                          {[0, 1, 2].map((slotIdx) => {
                            const token = puzzleSlots[slotIdx];
                            const isHoveredDrop = dragOverSlot === slotIdx;
                            return (
                              <div
                                key={slotIdx}
                                className={`py-g1-slot-box ${token ? 'filled' : 'empty'} ${
                                  isHoveredDrop ? 'drag-over-active' : ''
                                }`}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                  e.dataTransfer.dropEffect = 'move';
                                  if (dragOverSlot !== slotIdx) setDragOverSlot(slotIdx);
                                }}
                                onDragLeave={() => setDragOverSlot(null)}
                                onDrop={(e) => handleDropOnSlot(e, slotIdx)}
                                onClick={() => token && handleRemovePuzzleSlot(slotIdx)}
                                title={token ? 'Tap to remove or drag to reorder' : 'Drag token here or tap below'}
                              >
                                {token ? (
                                  <motion.div
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    draggable={!isAdvancing}
                                    onDragStart={(e) => handleDragStartSlot(e as any, token, slotIdx)}
                                    className={`py-g1-slot-token-pill ${
                                      token.startsWith('"') ? 'string-tok' : 'keyword-tok'
                                    }`}
                                  >
                                    <span className="py-tok-drag-handle">:::</span>
                                    <span>{token}</span>
                                  </motion.div>
                                ) : (
                                  <span className="py-g1-slot-dash">
                                    {isHoveredDrop ? '⬇ Drop here' : '— — —'}
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* 2. Available Draggable / Clickable Tokens */}
                    <div className="py-g1-tokens-deck">
                      <div className="flex flex-wrap items-center gap-2.5">
                        {availablePuzzleTokens.map((tok, idx) => {
                          const isString = tok.startsWith('"');
                          return (
                            <motion.button
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              draggable={!isAdvancing}
                              onDragStart={(e) => handleDragStartToken(e as any, tok, idx)}
                              className={`py-g1-token-pill-btn ${
                                isString ? 'string-pill' : 'keyword-pill'
                              }`}
                              onClick={() => handleAddPuzzleToken(tok, idx)}
                              title="Drag into slot or tap to place"
                            >
                              <span className="py-g1-token-dots">:::</span>
                              <span className="py-g1-token-label">{tok}</span>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Action Buttons Row: Check Answer + Hint (-50 XP) */}
                    <div className="py-g1-actions-row">
                      <button
                        className="py-g1-check-btn"
                        onClick={handleCheckAnswerManual}
                        disabled={isAdvancing || puzzleSlots.length === 0}
                      >
                        <span className="py-check-play-icon">▶</span>
                        <Check className="w-4 h-4 stroke-[2.5]" />
                        <span>Submit Answer</span>
                      </button>

                      <button
                        className="py-g1-hint-btn"
                        onClick={handleUseHint}
                        disabled={isAdvancing}
                      >
                        <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-400" />
                        <span>Hint (-50 XP)</span>
                      </button>
                    </div>

                    {/* 4. Expected Output Card with Terminal Prompt */}
                    <div className="py-expected-output-card-25d">
                      <div className="py-expected-header">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-slate-700">&gt;_</span>
                          <strong className="text-sm font-extrabold text-slate-800">Expected Output</strong>
                        </div>

                        {(feedback?.type === 'success' ||
                          progress.completedChallenges.includes(currentChallenge.id)) && (
                          <button
                            className="py-expected-copy-btn"
                            onClick={handleCopyExpected}
                            title="Copy expected output"
                          >
                            {copiedExpected ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </button>
                        )}
                      </div>

                      <div className="py-expected-terminal-box">
                        {feedback?.type === 'success' ||
                        progress.completedChallenges.includes(currentChallenge.id) ? (
                          <code className="text-sm font-mono font-bold text-emerald-400">
                            {currentChallenge.expectedOutput}
                          </code>
                        ) : (
                          <div className="py-expected-locked-state">
                            <span className="text-sm">🔒</span>
                            <span className="text-xs font-semibold text-slate-400">
                              Output will be shown after correct answer
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}

            {/* ════════════════════════════════════════════════════════
                GAME 2: FILL IN THE BLANK
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'fill_blank' && (
              <div className="py-g2-blank-container">
                <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                <div className="py-g2-main-grid">
                  {/* Left: Code Box with Cutout Slot */}
                  <div className="py-g2-code-box">
                    <div className="font-mono text-base font-bold text-white flex items-center flex-wrap gap-2">
                      <span>{currentChallenge.blankSnippet || 'print('}</span>
                      <span className="py-g2-cutout-blank">
                        {choiceStatus === 'correct' && selectedChoiceKey ? (
                          <span className="text-emerald-300 font-bold">
                            {currentChallenge.choiceOptions?.find((o) => o.key === selectedChoiceKey)?.label}
                          </span>
                        ) : (
                          <span className="py-g2-blank-placeholder">_______</span>
                        )}
                      </span>
                      <span>{currentChallenge.starterCode?.endsWith(')') ? ')' : ''}</span>
                    </div>
                  </div>

                  {/* Right: Mascot Girl */}
                  <div className="py-card-mascot-box">
                    <img
                      src={activeGame.mascotImg}
                      alt="Coding Mascot Girl"
                      className="py-card-mascot-img"
                    />
                  </div>
                </div>

                {/* Multiple Choice Options (A, B, C, D) */}
                <div className="py-options-list">
                  {currentChallenge.choiceOptions?.map((opt) => {
                    const isSelected = selectedChoiceKey === opt.key;
                    const isOptCorrect = isSelected && choiceStatus === 'correct';
                    const isOptWrong = isSelected && choiceStatus === 'wrong';

                    return (
                      <button
                        key={opt.key}
                        className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                          isOptWrong ? 'wrong' : ''
                        }`}
                        onClick={() => handleSelectChoice(opt)}
                        disabled={isAdvancing}
                      >
                        <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                        <span className="py-option-label">{opt.label}</span>
                        {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 3: MATCH THE CODE (Left: Code, Right: Output + Milan ka Rope)
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'match_code' && (
              <div className="py-g3-match-container">
                <div className="py-g3-header-meta">
                  <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>
                  <div className="py-g3-instruction-pill">
                    <span className="py-legend-pulse-dot" />
                    <span className="text-xs font-bold text-slate-700">
                      {selectedMatchLeft
                        ? `🔗 "${selectedMatchLeft}" selected. Click the matching Output on the right to connect!`
                        : `👆 Select an Item on the Left, then click its matching Purpose on the Right to connect.`}
                    </span>
                  </div>
                </div>

                {/* Left & Right Matching Arena with SVG Milan Rope in between */}
                <div className="py-g3-lr-stage" ref={matchStageRef}>
                  {/* ── 1. LEFT COLUMN: PYTHON CODE BLOCKS ── */}
                  <div className="py-g3-lr-col py-g3-left-col">
                    <div className="py-g3-col-header">
                      <span className="py-col-badge code-badge">Python Code</span>
                      <span className="text-[11px] font-bold text-slate-400">Select Code</span>
                    </div>

                    <div className="py-g3-lr-items-stack">
                      {currentChallenge.matchPairs?.map((pair, idx) => {
                        const isSelected = selectedMatchLeft === pair.left;
                        const isMatched = !!activeMatches[pair.left];

                        return (
                          <motion.div
                            key={idx}
                            whileHover={!isMatched ? { scale: 1.02 } : {}}
                            whileTap={!isMatched ? { scale: 0.98 } : {}}
                            className={`py-g3-lr-card py-g3-code-lr-card ${
                              isSelected ? 'is-selected' : ''
                            } ${isMatched ? 'is-matched' : ''}`}
                            onClick={() => !isMatched && handleSelectMatchCode(pair.left)}
                          >
                            <div className="py-g3-lr-card-main">
                              <span className="py-g3-pill-badge">#{idx + 1}</span>
                              <code className="font-mono text-xs font-bold text-slate-800 whitespace-pre-wrap">
                                {pair.left}
                              </code>
                              {isMatched ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto" />
                              ) : isSelected ? (
                                <span className="py-g3-status-pulse ml-auto">Selected</span>
                              ) : null}
                            </div>

                            {/* Right Connector Pin (Facing center toward Output) */}
                            <div
                              ref={(el) => {
                                topPinRefs.current[pair.left] = el;
                              }}
                              className={`py-g3-connector-pin right-pin ${
                                isSelected ? 'pin-active' : ''
                              } ${isMatched ? 'pin-matched' : ''}`}
                              title="Code Pin"
                            >
                              <span className="py-pin-core-dot" />
                              <span className="py-pin-wave-ring" />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── 2. SVG CANVAS: MILAN KA ROPE & ARROWS (Spans across Left & Right) ── */}
                  <svg className="py-g3-milan-canvas" aria-hidden="true">
                    <defs>
                      <filter id="milan-rope-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {milanRopes.map((rope) => (
                      <g key={rope.key} className="py-milan-rope-group">
                        {/* Outer Glow Halo */}
                        <path
                          d={rope.pathD}
                          fill="none"
                          stroke={rope.color}
                          strokeWidth="9"
                          strokeOpacity="0.32"
                          strokeLinecap="round"
                          filter="url(#milan-rope-glow)"
                        />
                        {/* Solid Rope Body */}
                        <path
                          d={rope.pathD}
                          fill="none"
                          stroke={rope.color}
                          strokeWidth="4"
                          strokeLinecap="round"
                          className="py-milan-rope-body"
                        />
                        {/* Flowing Braided Energy Dash */}
                        <path
                          d={rope.pathD}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                          strokeLinecap="round"
                          className="py-milan-rope-dash"
                        />
                        {/* Milan Arrowhead pointing from Left to Right */}
                        <g
                          transform={`translate(${rope.arrowX}, ${rope.arrowY}) rotate(${rope.angle})`}
                          className="py-milan-rope-arrow"
                        >
                          <polygon
                            points="-8,-5 7,0 -8,5"
                            fill={rope.color}
                            stroke="#ffffff"
                            strokeWidth="1.2"
                          />
                        </g>
                      </g>
                    ))}
                  </svg>

                  {/* ── 3. RIGHT COLUMN: OUTPUT ANSWERS ── */}
                  <div className="py-g3-lr-col py-g3-right-col">
                    <div className="py-g3-col-header">
                      <span className="py-col-badge output-badge">Output</span>
                      <span className="text-[11px] font-bold text-slate-400">Match Output</span>
                    </div>

                    <div className="py-g3-lr-items-stack">
                      {(shuffledMatchOutputs.length > 0
                        ? shuffledMatchOutputs
                        : currentChallenge.matchPairs?.map((p) => p.right) || []
                      ).map((outputVal, idx) => {
                        const isMatched = Object.values(activeMatches).includes(outputVal);
                        const isReadyToTie = !!selectedMatchLeft && !isMatched;

                        return (
                          <motion.div
                            key={idx}
                            whileHover={isReadyToTie ? { scale: 1.02 } : {}}
                            whileTap={isReadyToTie ? { scale: 0.98 } : {}}
                            className={`py-g3-lr-card py-g3-output-lr-card ${
                              isMatched ? 'is-matched' : ''
                            } ${isReadyToTie ? 'is-targetable' : ''}`}
                            onClick={() => handleSelectMatchOutput(outputVal)}
                          >
                            {/* Left Connector Pin (Facing center toward Code) */}
                            <div
                              ref={(el) => {
                                bottomPinRefs.current[outputVal] = el;
                              }}
                              className={`py-g3-connector-pin left-pin ${
                                isMatched ? 'pin-matched' : ''
                              }`}
                              title="Output Pin"
                            >
                              <span className="py-pin-core-dot" />
                              <span className="py-pin-wave-ring" />
                            </div>

                            <div className="py-g3-lr-card-main">
                              <span className="font-mono text-xs font-black text-slate-800 whitespace-pre-wrap">
                                {outputVal}
                              </span>
                              {isMatched ? (
                                <span className="py-g3-matched-label ml-auto">
                                  <Check className="w-3 h-3 text-emerald-600 inline mr-1" />
                                  Matched
                                </span>
                              ) : isReadyToTie ? (
                                <span className="py-g3-ready-label ml-auto">Click to connect</span>
                              ) : null}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 4: QUANTUM OUTPUT PREDICTOR
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'output_predictor' && (
              <div className="py-g4-predictor-container">
                <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                <div className="py-g4-main-grid">
                  {/* Left: Code Snippet / Question Box */}
                  <div className="py-g4-code-box">
                    <p className="text-white text-base font-extrabold mb-2 leading-snug">
                      {currentChallenge.task}
                    </p>
                    {currentChallenge.starterCode && !currentChallenge.starterCode.startsWith('# Question') && (
                      <pre className="font-mono text-xs font-bold text-emerald-300 whitespace-pre-wrap mt-2 bg-slate-900/60 p-2.5 rounded-lg border border-emerald-500/20">
                        {currentChallenge.starterCode}
                      </pre>
                    )}
                  </div>

                  {/* Right: Robot Mascot */}
                  <div className="py-card-mascot-box">
                    <img
                      src={activeGame.mascotImg}
                      alt="Quantum Robot Mascot"
                      className="py-card-mascot-img"
                    />
                  </div>
                </div>

                {/* Multiple Choice Options (A, B, C, D) */}
                <div className="py-options-list">
                  {currentChallenge.choiceOptions?.map((opt) => {
                    const isSelected = selectedChoiceKey === opt.key;
                    const isOptCorrect = isSelected && choiceStatus === 'correct';
                    const isOptWrong = isSelected && choiceStatus === 'wrong';

                    return (
                      <button
                        key={opt.key}
                        className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                          isOptWrong ? 'wrong' : ''
                        }`}
                        onClick={() => handleSelectChoice(opt)}
                        disabled={isAdvancing}
                      >
                        <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                        <span className="py-option-label whitespace-pre-wrap">{opt.label}</span>
                        {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 5: CYBER BUG HUNTER
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'bug_hunter' && (
              <div className="py-g5-bug-container">
                <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                <div className="py-g5-main-grid">
                  {/* Left: Question Box with Red Bug ❌ */}
                  <div className="py-g5-code-box">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wider">
                        <span>🐛</span>
                        <span>Bug Diagnosis #{activeChallengeNum}</span>
                      </div>
                      <p className="text-white text-base font-extrabold leading-snug">
                        {currentChallenge.task}
                      </p>
                    </div>
                  </div>

                  {/* Right: Bug Boy Mascot with Magnifying Glass */}
                  <div className="py-card-mascot-box">
                    <img
                      src={activeGame.mascotImg}
                      alt="Bug Hunter Mascot"
                      className="py-card-mascot-img"
                    />
                  </div>
                </div>

                {/* Fix Options (A, B, C, D) */}
                <div className="py-options-list">
                  {currentChallenge.choiceOptions?.map((opt) => {
                    const isSelected = selectedChoiceKey === opt.key;
                    const isOptCorrect = isSelected && choiceStatus === 'correct';
                    const isOptWrong = isSelected && choiceStatus === 'wrong';

                    return (
                      <button
                        key={opt.key}
                        className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                          isOptWrong ? 'wrong' : ''
                        }`}
                        onClick={() => handleSelectChoice(opt)}
                        disabled={isAdvancing}
                      >
                        <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                        <code className="py-option-label font-mono">{opt.label}</code>
                        {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 6: COMPONENT BLUEPRINT MACHINE
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'blueprint_builder' && (
              currentChallenge.choiceOptions && currentChallenge.choiceOptions.length > 0 ? (
                <div className="py-g2-blank-container">
                  <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                  <div className="py-g2-main-grid">
                    {/* Left: Blueprint Spec Box */}
                    <div className="py-g2-code-box">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-pink-400" />
                          <span>Blueprint #{activeChallengeNum} — Component Specification</span>
                        </div>
                        <p className="text-white text-base font-extrabold leading-snug">
                          {currentChallenge.task}
                        </p>
                      </div>
                    </div>

                    {/* Right: Mascot Girl with Puzzle Piece */}
                    <div className="py-card-mascot-box">
                      <img
                        src={activeGame.mascotImg}
                        alt="Blueprint Mascot Girl"
                        className="py-card-mascot-img"
                      />
                    </div>
                  </div>

                  {/* Component Choice Options (A, B, C, D) */}
                  <div className="py-options-list">
                    {currentChallenge.choiceOptions.map((opt) => {
                      const isSelected = selectedChoiceKey === opt.key;
                      const isOptCorrect = isSelected && choiceStatus === 'correct';
                      const isOptWrong = isSelected && choiceStatus === 'wrong';

                      return (
                        <button
                          key={opt.key}
                          className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                            isOptWrong ? 'wrong' : ''
                          }`}
                          onClick={() => handleSelectChoice(opt)}
                          disabled={isAdvancing}
                        >
                          <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                          <span className="py-option-label font-mono font-bold">{opt.label}</span>
                          {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="py-g6-blueprint-container">
                  <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                  <div className="py-g6-main-grid">
                    {/* Left: Available Components */}
                    <div className="py-g6-components-col">
                      <span className="text-xs font-bold text-slate-500 mb-2 block">
                        Components:
                      </span>
                      <div className="flex flex-col gap-2">
                        {availableComponents.map((comp, idx) => (
                          <button
                            key={idx}
                            className="py-g6-comp-btn"
                            onClick={() => handleAddBlueprintComponent(comp, idx)}
                          >
                            <code className="text-xs font-mono font-bold">{comp}</code>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Center: Numbered Target Drop Slots (1, 2, 3...) */}
                    <div className="py-g6-slots-col">
                      <span className="text-xs font-bold text-slate-500 mb-2 block">
                        Blueprint Slots:
                      </span>
                      <div className="flex flex-col gap-2.5">
                        {Array.from({ length: currentChallenge.blueprintSlotsCount || 3 }).map(
                          (_, i) => {
                            const slotNum = i + 1;
                            const placed = blueprintPlacedSlots[slotNum];
                            return (
                              <div
                                key={slotNum}
                                className={`py-g6-slot-row ${placed ? 'filled' : 'empty'}`}
                                onClick={() => placed && handleRemoveBlueprintSlot(slotNum)}
                                title={placed ? 'Click to remove component' : 'Slot'}
                              >
                                <div className="py-g6-slot-number-pill">{slotNum}</div>
                                <div className="py-g6-slot-content">
                                  {placed ? (
                                    <code className="font-mono text-xs font-bold text-purple-900">
                                      {placed}
                                    </code>
                                  ) : (
                                    <span className="text-slate-400 text-xs italic">
                                      [ Drag or tap component ]
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* Right: Mascot Girl with Puzzle Piece */}
                    <div className="py-card-mascot-box">
                      <img
                        src={activeGame.mascotImg}
                        alt="Blueprint Mascot Girl"
                        className="py-card-mascot-img"
                      />
                    </div>
                  </div>
                </div>
              )
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 7: LOGIC BUILDER
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'logic_builder' && (
              currentChallenge.choiceOptions && currentChallenge.choiceOptions.length > 0 ? (
                <div className="py-g2-blank-container">
                  <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                  <div className="py-g2-main-grid">
                    {/* Left: Logic Problem Statement Box */}
                    <div className="py-g2-code-box">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-cyan-300" />
                          <span>Logic Case #{activeChallengeNum} — Algorithmic Reasoning</span>
                        </div>
                        <p className="text-white text-base font-extrabold leading-snug">
                          {currentChallenge.task}
                        </p>
                      </div>
                    </div>

                    {/* Right: Mascot Boy */}
                    <div className="py-card-mascot-box">
                      <img
                        src={activeGame.mascotImg}
                        alt="Logic Builder Mascot"
                        className="py-card-mascot-img"
                      />
                    </div>
                  </div>

                  {/* Multiple Choice Options (A, B, C, D) */}
                  <div className="py-options-list">
                    {currentChallenge.choiceOptions.map((opt) => {
                      const isSelected = selectedChoiceKey === opt.key;
                      const isOptCorrect = isSelected && choiceStatus === 'correct';
                      const isOptWrong = isSelected && choiceStatus === 'wrong';

                      return (
                        <button
                          key={opt.key}
                          className={`py-option-row ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                            isOptWrong ? 'wrong' : ''
                          }`}
                          onClick={() => handleSelectChoice(opt)}
                          disabled={isAdvancing}
                        >
                          <div className="py-option-key-badge">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                          <span className="py-option-label">{opt.label}</span>
                          {isOptCorrect && <Check className="w-4 h-4 text-emerald-600 ml-auto" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="py-g7-logic-container">
                  <span className="py-card-q-counter">Question {activeChallengeNum}/{activeGame.challenges.length}</span>

                  <div className="py-g7-main-grid">
                    {/* Left: Target Output Box */}
                    <div className="py-g7-target-box">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                        Target Output:
                      </span>
                      <pre className="font-mono text-xs font-bold text-white whitespace-pre-wrap">
                        {currentChallenge.expectedOutput}
                      </pre>
                    </div>

                    {/* Right: Mascot Boy */}
                    <div className="py-card-mascot-box">
                      <img
                        src={activeGame.mascotImg}
                        alt="Logic Builder Mascot"
                        className="py-card-mascot-img"
                      />
                    </div>
                  </div>

                  {/* Numbered Code Lines with # and Up/Down Controls */}
                  <div className="py-g7-lines-list">
                    <span className="text-xs font-bold text-slate-500 block mb-2">
                      Arrange code in correct execution order:
                    </span>
                    {orderedLines.map((line, idx) => (
                      <div key={line.id} className="py-g7-line-card">
                        <div className="py-g7-line-handle">#</div>
                        <code className="py-g7-line-code font-mono text-xs font-bold">
                          {line.text}
                        </code>

                        <div className="flex items-center gap-1 ml-auto">
                          <button
                            className="py-g7-reorder-btn"
                            onClick={() => handleMoveLogicLine(idx, 'up')}
                            disabled={idx === 0}
                            title="Move up"
                          >
                            <ChevronUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            className="py-g7-reorder-btn"
                            onClick={() => handleMoveLogicLine(idx, 'down')}
                            disabled={idx === orderedLines.length - 1}
                            title="Move down"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}

                  {/* Submit Order Button */}
                  <div className="py-submit-action-row">
                    <button
                      type="button"
                      className="py-submit-answer-btn py-submit-ready"
                      onClick={() => {
                        const isCorrect = orderedLines.every((item, i) => item.correctIndex === i);
                        if (isCorrect) {
                          handleCorrectAnswer(10, '🎉 Sabhi Logic Blocks Sahi Krama Me Hain!');
                        } else {
                          if (soundEnabled) soundEffects.playQuizWrong();
                          setFeedback({ type: 'error', message: '❌ Code ka sequence sahi nahi hai. Lines ko upar/niche karke sahi karein!' });
                        }
                      }}
                      disabled={isAdvancing}
                    >
                      <Check className="w-4 h-4 stroke-[2.5]" />
                      <span>Submit Order</span>
                    </button>
                  </div>
                  </div>
                </div>
              )
            )}

            {/* ════════════════════════════════════════════════════════
                GAME 8: BOSS FIGHT: THE CYBER SENTINEL
                ════════════════════════════════════════════════════════ */}
            {activeGame.gameType === 'boss_fight' && (
              <div className="py-g8-boss-container">
                {/* Boss Health Bar */}
                <div className="py-boss-hp-bar-card">
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <div className="flex items-center gap-1.5 text-rose-400">
                      <Swords className="w-3.5 h-3.5" />
                      <span>CYBER SENTINEL HP</span>
                    </div>
                    <span className="text-rose-400 font-mono">{bossHp} / 100 HP</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-rose-500/30">
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${bossHp}%` }}
                    />
                  </div>
                </div>

                <div className="py-g8-main-grid">
                  {/* Left: Boss Question & Mission State */}
                  <div className="py-g8-ide-box">
                    <div className="flex items-center gap-2 mb-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                      <Swords className="w-3.5 h-3.5" />
                      <span>Boss Strike #{activeChallengeNum} — Deal 10 HP Damage</span>
                    </div>
                    <p className="text-white text-sm font-extrabold leading-snug mb-3">
                      {currentChallenge.task}
                    </p>
                    <div className="py-g8-ide-line">
                      <span className="line-num">1</span>
                      <span className="code-text font-mono text-xs">print("=== FINAL SENTINEL BATTLE ===")</span>
                    </div>
                    <div className="py-g8-ide-line highlight">
                      <span className="line-num">2</span>
                      <span className="code-text font-mono text-xs">
                        strike_answer = {choiceStatus === 'correct' && selectedChoiceKey ? (
                          <span className="text-emerald-400 font-bold">"{currentChallenge.choiceOptions?.find((o) => o.key === selectedChoiceKey)?.label}"</span>
                        ) : (
                          <span className="text-amber-400">"Select Option Below..."</span>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Right: Menacing Cyber Sentinel Boss Robot */}
                  <div className={`py-card-mascot-box ${isBossAttacked ? 'py-boss-hit-shake' : ''}`}>
                    <img
                      src={activeGame.mascotImg}
                      alt="Cyber Sentinel Boss"
                      className="py-card-mascot-img boss-img"
                    />
                    {floatingDamage && (
                      <div className="py-floating-damage-text">{floatingDamage}</div>
                    )}
                  </div>
                </div>

                {/* Strike Attack Choices (A, B, C, D) */}
                <div className="py-options-list">
                  {currentChallenge.choiceOptions?.map((opt) => {
                    const isSelected = selectedChoiceKey === opt.key;
                    const isOptCorrect = isSelected && choiceStatus === 'correct';
                    const isOptWrong = isSelected && choiceStatus === 'wrong';

                    return (
                      <button
                        key={opt.key}
                        className={`py-option-row boss-strike ${isSelected && !choiceStatus ? 'selected' : ''} ${isOptCorrect ? 'correct' : ''} ${
                          isOptWrong ? 'wrong' : ''
                        }`}
                        onClick={() => handleSelectChoice(opt)}
                        disabled={isAdvancing}
                      >
                        <div className="py-option-key-badge boss">{opt.key}</div>
                    {/* Next / Submit Button (Shows only after choosing an option; on last question shows Submit) */}
                    {selectedChoiceKey && (
                      <div className="py-submit-action-row animate-fade-in">
                        <button
                          type="button"
                          className="py-submit-answer-btn py-submit-ready"
                          onClick={handleSubmitChoice}
                          disabled={isAdvancing}
                        >
                          {activeChallengeNum === activeGame.challenges.length ? (
                            <>
                              <Check className="w-4 h-4 stroke-[2.5]" />
                              <span>Submit</span>
                            </>
                          ) : (
                            <>
                              <span>Next Question</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    )}
                    
                        <code className="py-option-label font-mono">{opt.label}</code>
                        {isOptCorrect && <Zap className="w-4 h-4 text-emerald-400 ml-auto fill-current" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── Feedback Banner with Rich Concept Explanation ── */}
          {feedback && (
            <div
              className={`py-step-feedback-toast ${
                feedback.type === 'success' ? 'success' : 'error'
              }`}
            >
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{feedback.message}</span>
                  <button onClick={() => setFeedback(null)} className="ml-auto opacity-70 hover:opacity-100">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                {currentChallenge.explanation && (
                  <div
                    className={`mt-1.5 pt-1.5 border-t text-xs font-medium flex items-start gap-1.5 ${
                      feedback.type === 'success'
                        ? 'border-emerald-200/80 text-emerald-900'
                        : 'border-rose-200/80 text-rose-900'
                    }`}
                  >
                    <Lightbulb
                      className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        feedback.type === 'success' ? 'text-emerald-600' : 'text-amber-500'
                      }`}
                    />
                    <span>
                      <strong>{feedback.type === 'success' ? 'Why this is correct:' : 'Concept Explanation:'}</strong>{' '}
                      {currentChallenge.explanation}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── Auto-Advancing Progress Line ── */}
          {isAdvancing && (
            <div className="py-step-advance-strip">
              <div className="py-step-advance-fill" />
            </div>
          )}
        </section>
      </main>

        {/* Right Side: 3D Mascot Boy pointing up with Laptop, Desk, Notebook & Speech Bubble */}
        <aside className="py-25d-mascot-col" aria-label="3D Coding Mascot">
          <div className="py-25d-mascot-card">
            <img
              src="/images/dashboard/mascot_right_feathered.png"
              alt="3D Coding Mascot Boy"
              className="py-25d-mascot-img"
            />
          </div>
        </aside>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. MODULE COMPLETE MASTERED MODAL (When Game 8 finishes)
          ───────────────────────────────────────────────────────────── */}
      {showModuleCompleteModal && (
        <div className="py-module-victory-overlay">
          <div className="py-module-victory-modal">
            <div className="py-victory-trophy-circle">
              <Trophy className="w-12 h-12 text-amber-400 animate-bounce" />
            </div>
            <h2 className="py-victory-title">CONGRATULATIONS!</h2>
            <p className="py-victory-sub">
              You have completed all 8 games and 40 challenges in <strong>Python Introduction &amp; Setup</strong>!
            </p>
            <div className="py-victory-stats-row">
              <div className="py-vstat-box">
                <strong>40 / 40</strong>
                <span>Challenges Passed</span>
              </div>
              <div className="py-vstat-box">
                <strong>+400 XP</strong>
                <span>Earned Today</span>
              </div>
              <div className="py-vstat-box">
                <strong>100%</strong>
                <span>Mastery</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                className="py-victory-btn secondary"
                onClick={() => {
                  setShowModuleCompleteModal(false);
                  setActiveGameId(1);
                  setActiveChallengeNum(1);
                }}
              >
                Replay from Game 1
              </button>
              <button
                className="py-victory-btn primary"
                onClick={onBackToArena}
              >
                Return to Arena →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. LIQUID FLOATING NAVIGATION BAR (8 SECTIONS, media_1791584665903.png)
          ───────────────────────────────────────────────────────────── */}
      {!isEmbedded && (
        <LiquidFloatingNavBar
          activeTab="coding_game"
          onSelectTab={(tabId) => {
            if (tabId === 'coding_game') return;
            if (tabId === 'dashboard') {
              onNavigateDock('dashboard');
            } else if (tabId === 'learning') {
              onNavigateDock('learning');
            } else if (tabId === 'earning') {
              onNavigateDock('earning');
            }
          }}
          onOpenLockedModal={(featureTitle) => {
            setModulesLockTarget(featureTitle);
          }}
        />
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. MODULES LOCKED PROGRESS MODAL (1:1 with media_1791557550984.jpg)
          "Complete All 6 Learning Modules to Unlock Internship & Certificate"
          ───────────────────────────────────────────────────────────── */}
      <LearningModulesProgressModal
        isOpen={Boolean(modulesLockTarget)}
        onClose={() => setModulesLockTarget(null)}
        targetFeature={modulesLockTarget || 'Internship'}
        onGoToModules={() => {
          setModulesLockTarget(null);
          onNavigateDock('dashboard');
        }}
        onNavigateToModule={(modId) => {
          setModulesLockTarget(null);
          if (modId === 'python') {
            onNavigateDock('learning');
          } else {
            onNavigateDock('dashboard');
          }
        }}
        initialPythonCompleted={true}
      />
    </div>
  );
};
export default PythonIntroGameWorkspace;
