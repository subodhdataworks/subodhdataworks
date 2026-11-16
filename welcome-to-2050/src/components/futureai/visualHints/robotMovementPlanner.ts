import { RobotTargetElement } from './FutureAIRobot2050';

export interface AutonomousFlightPose {
  x: number;
  y: number;
  tilt: number;
  scale: number;
  facing: 'left' | 'right';
  wandAngle: number;
  contactPoint: { x: number; y: number } | null;
}

// Calibrated flight targets: guarantees the robot is CLOSE to each VISUAL CARD on the stage
// Never targets or hovers over the black code editor or pedestal in the left column.
const DESKTOP_TARGET_OFFSETS: Record<
  string,
  { x: number; y: number; tilt: number; wandAngle: number; facing: 'left' | 'right'; contactOffset: { x: number; y: number } }
> = {
  // 1. Variable assignment card on visual stage, facing right
  card_variable: {
    x: 380,
    y: 155,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 440, y: 155 },
  },
  // 2. Function / Method Visual Card on Stage
  card_function: {
    x: 370,
    y: 165,
    tilt: -2,
    wandAngle: 8,
    facing: 'right',
    contactOffset: { x: 430, y: 165 },
  },
  // 3. Argument / String Value Visual Card on Stage
  card_argument: {
    x: 470,
    y: 165,
    tilt: 2,
    wandAngle: 18,
    facing: 'right',
    contactOffset: { x: 530, y: 165 },
  },
  // 4. Operator & Calculation Bubble Visual Card
  calculation: {
    x: 450,
    y: 155,
    tilt: 3,
    wandAngle: 20,
    facing: 'right',
    contactOffset: { x: 510, y: 155 },
  },
  // 5. Operation / Stream Card on Stage
  card_console_op: {
    x: 560,
    y: 165,
    tilt: 3,
    wandAngle: 28,
    facing: 'right',
    contactOffset: { x: 630, y: 165 },
  },
  // 6. Console Output Visual Card
  console_output: {
    x: 420,
    y: 260,
    tilt: 4,
    wandAngle: 36,
    facing: 'right',
    contactOffset: { x: 520, y: 260 },
  },
  // 7. General visual stage target
  recap_center: {
    x: 410,
    y: 180,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 480, y: 180 },
  },
  pedestal: {
    x: 380,
    y: 155,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 440, y: 155 },
  },
  code_editor: {
    x: 380,
    y: 155,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 440, y: 155 },
  },
};

const MOBILE_TARGET_OFFSETS: Record<
  string,
  { x: number; y: number; tilt: number; wandAngle: number; facing: 'left' | 'right'; contactOffset: { x: number; y: number } }
> = {
  card_variable: {
    x: 120,
    y: 230,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 160, y: 230 },
  },
  card_function: {
    x: 120,
    y: 240,
    tilt: -2,
    wandAngle: 6,
    facing: 'right',
    contactOffset: { x: 160, y: 240 },
  },
  card_argument: {
    x: 120,
    y: 320,
    tilt: 2,
    wandAngle: 18,
    facing: 'right',
    contactOffset: { x: 160, y: 320 },
  },
  calculation: {
    x: 120,
    y: 280,
    tilt: 2,
    wandAngle: 16,
    facing: 'right',
    contactOffset: { x: 160, y: 280 },
  },
  card_console_op: {
    x: 120,
    y: 400,
    tilt: 3,
    wandAngle: 25,
    facing: 'right',
    contactOffset: { x: 160, y: 400 },
  },
  console_output: {
    x: 110,
    y: 480,
    tilt: 4,
    wandAngle: 32,
    facing: 'right',
    contactOffset: { x: 160, y: 500 },
  },
  recap_center: {
    x: 120,
    y: 260,
    tilt: 0,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 160, y: 280 },
  },
  pedestal: {
    x: 120,
    y: 230,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 160, y: 230 },
  },
  code_editor: {
    x: 120,
    y: 230,
    tilt: 2,
    wandAngle: 12,
    facing: 'right',
    contactOffset: { x: 160, y: 230 },
  },
};

/**
 * Resolves the actual DOM element corresponding to the active teaching target.
 * Always resolves to the visual card on the right stage.
 * Never targets the black code editor or pedestal in the left column.
 */
export function queryTargetDOMElement(
  stageEl: HTMLElement,
  targetElement: RobotTargetElement,
  codeFocus?: string,
  relatedToken?: string
): HTMLElement | null {
  if (!stageEl) return null;

  try {
    // 1. Check for any active glowing visual card on the stage
    const activeGlowingEl = stageEl.querySelector('[data-active-glow="primary"]');
    if (activeGlowingEl) {
      const isBlackBox =
        activeGlowingEl.getAttribute('data-testid') === 'robot-pedestal-base' ||
        activeGlowingEl.getAttribute('data-testid') === 'code-editor-block' ||
        activeGlowingEl.closest('[data-testid="robot-pedestal-base"]') ||
        activeGlowingEl.closest('[data-testid="code-editor-block"]');
      if (!isBlackBox) {
        return activeGlowingEl as HTMLElement;
      }
    }

    // 2. Query inside the right visual stage
    const rightStage = (stageEl.children[1] || stageEl) as HTMLElement;

    if (targetElement === 'console_output') {
      const consoleBox =
        rightStage.querySelector('[data-testid="console-output-screen"]') ||
        rightStage.querySelector('[data-visual-target="console"]') ||
        rightStage.querySelector('[data-testid="console-output-box"]') ||
        rightStage.querySelector('.bg-\\[\\#0b1329\\]') ||
        rightStage.querySelector('.bg-\\[\\#0e1424\\]');
      if (consoleBox) return (consoleBox.closest('.rounded-2xl') || consoleBox) as HTMLElement;
    }

    if (targetElement === 'card_function') {
      const card = rightStage.querySelector('[data-testid="flow-card-function"]');
      if (card) return card as HTMLElement;
    }

    if (targetElement === 'card_argument') {
      const card = rightStage.querySelector('[data-testid="flow-card-argument"]');
      if (card) return card as HTMLElement;
    }

    if (targetElement === 'card_console_op') {
      const card = rightStage.querySelector('[data-testid="flow-card-console-op"]');
      if (card) return card as HTMLElement;
    }

    // 3. Central dynamic animated visual cards inside right stage
    const cardInStage =
      rightStage.querySelector('[data-active-card="true"]') ||
      rightStage.querySelector('.min-h-\\[220px\\] > div > div') ||
      rightStage.querySelector('.min-h-\\[220px\\]');
    if (cardInStage) return cardInStage as HTMLElement;
  } catch {
    // Ignore DOM query issues
  }

  return null;
}

/**
 * Calculates autonomous flight destination, banking angle, wand angle,
 * and contact point for the active teaching target.
 */
export function calculateAutonomousFlightPose(
  stageEl: HTMLElement | null,
  targetElement: RobotTargetElement,
  codeFocus?: string,
  relatedToken?: string,
  isLg: boolean = true
): AutonomousFlightPose {
  const fallbackMap = isLg ? DESKTOP_TARGET_OFFSETS : MOBILE_TARGET_OFFSETS;
  const fallback = fallbackMap[targetElement] || fallbackMap.card_variable || fallbackMap.card_function;

  if (!stageEl) {
    return {
      x: fallback.x,
      y: fallback.y,
      tilt: fallback.tilt,
      scale: 1.0,
      facing: fallback.facing,
      wandAngle: fallback.wandAngle,
      contactPoint: fallback.contactOffset,
    };
  }

  const stageRect = stageEl.getBoundingClientRect();
  if (stageRect.width <= 0 || stageRect.height <= 0) {
    return {
      x: fallback.x,
      y: fallback.y,
      tilt: fallback.tilt,
      scale: 1.0,
      facing: fallback.facing,
      wandAngle: fallback.wandAngle,
      contactPoint: fallback.contactOffset,
    };
  }

  const targetDom = queryTargetDOMElement(stageEl, targetElement, codeFocus, relatedToken);

  if (!targetDom) {
    return {
      x: fallback.x,
      y: fallback.y,
      tilt: fallback.tilt,
      scale: 1.0,
      facing: fallback.facing,
      wandAngle: fallback.wandAngle,
      contactPoint: fallback.contactOffset,
    };
  }

  const targetRect = targetDom.getBoundingClientRect();
  const relTargetX = targetRect.left - stageRect.left + targetRect.width / 2;
  const relTargetY = targetRect.top - stageRect.top + targetRect.height / 2;

  let robotX = fallback.x;
  let robotY = fallback.y;
  let tilt = fallback.tilt;
  let wandAngle = fallback.wandAngle;
  let facing: 'left' | 'right' = fallback.facing;

  if (targetElement === 'console_output') {
    // Approaching Console terminal, facing right toward stdout text
    robotX = Math.min(stageRect.width - 150, Math.max(340, targetRect.left - stageRect.left - 95));
    robotY = Math.min(stageRect.height - 140, Math.max(80, relTargetY - 40));
    tilt = 4;
    facing = 'right';
  } else {
    // Active visual concept card (variable container, calculation card, argument, etc.)
    // Hover adjacent to the card on the visual stage, pointing right at it
    const spaceOnLeft = targetRect.left - stageRect.left > 380;
    if (spaceOnLeft) {
      robotX = Math.round(targetRect.left - stageRect.left - 95);
      robotY = Math.round(Math.max(30, relTargetY - 45));
      tilt = 2;
      facing = 'right';
    } else {
      // Hover above card if tight horizontally
      robotX = Math.round(Math.max(340, relTargetX - 55));
      robotY = Math.round(Math.max(25, targetRect.top - stageRect.top - 95));
      tilt = 1;
      facing = 'right';
    }
  }

  // Strict safe boundary clamping so the robot never clips or covers modal bounds
  robotX = Math.min(Math.max(15, robotX), Math.max(15, stageRect.width - 125));
  robotY = Math.min(Math.max(15, robotY), Math.max(15, stageRect.height - 135));

  return {
    x: Math.round(robotX),
    y: Math.round(robotY),
    tilt,
    scale: isLg ? 1.0 : 0.92,
    facing,
    wandAngle,
    contactPoint: {
      x: Math.round(relTargetX),
      y: Math.round(relTargetY),
    },
  };
}
