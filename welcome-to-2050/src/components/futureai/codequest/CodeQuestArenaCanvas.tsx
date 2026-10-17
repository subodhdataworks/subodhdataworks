import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChallengeItem } from './codeQuestData';

interface CodeQuestArenaCanvasProps {
  challenges: ChallengeItem[];
  currentChallengeIdx: number;
  collectedChallenges: (number | string)[];
  isExecuting: boolean;
  isSuccessAnimation: boolean;
  onSelectChallenge: (index: number) => void;
  roboSpeech: string;
  coreChargePct: number;
  soundOn: boolean;
  height?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  type?: 'spark' | 'star' | 'dust' | 'thruster';
}

const CRYSTAL_PALETTES = [
  { main: '#00f0ff', glow: 'rgba(0, 240, 255, 0.6)', light: '#a5f3fc', dark: '#0284c7', name: 'String Core' },
  { main: '#10b981', glow: 'rgba(16, 185, 129, 0.6)', light: '#6ee7b7', dark: '#047857', name: 'Integer Core' },
  { main: '#f59e0b', glow: 'rgba(245, 158, 11, 0.6)', light: '#fde68a', dark: '#b45309', name: 'Boolean Core' },
  { main: '#c084fc', glow: 'rgba(192, 132, 252, 0.6)', light: '#f3e8ff', dark: '#7e22ce', name: 'Float Core' },
  { main: '#ec4899', glow: 'rgba(236, 72, 153, 0.6)', light: '#fbcfe8', dark: '#be185d', name: 'Matrix Core' },
];

export const CodeQuestArenaCanvas: React.FC<CodeQuestArenaCanvasProps> = ({
  challenges,
  currentChallengeIdx,
  collectedChallenges,
  isExecuting,
  isSuccessAnimation,
  onSelectChallenge,
  roboSpeech,
  coreChargePct,
  soundOn: _soundOn,
  height = 360,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Smooth Robo coordinates
  const roboRef = useRef({
    x: 120,
    y: 200,
    targetX: 120,
    targetY: 200,
    jumpOffset: 0,
    isJumping: false,
    eyeState: 'normal' as 'normal' | 'happy' | 'scanning',
    blinkTimer: 0,
  });

  // Particle systems
  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<{ x: number; y: number; r: number; alpha: number; pulseSpeed: number }[]>([]);
  const gridOffsetRef = useRef(0);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Platform layout calculator based on canvas width/height
  const getPlatformCoords = useCallback((width: number, height: number, total: number) => {
    const coords: { x: number; y: number; width: number; height: number }[] = [];
    const count = Math.max(total, 1);
    const paddingX = width * 0.12;
    const availableWidth = width - paddingX * 2;
    const stepX = count > 1 ? availableWidth / (count - 1) : 0;

    for (let i = 0; i < count; i++) {
      const px = count === 1 ? width / 2 : paddingX + i * stepX;
      // Stagger heights slightly for 3D depth
      const yOffset = i % 2 === 0 ? 0 : -14;
      const py = height * 0.66 + yOffset;
      coords.push({
        x: px,
        y: py,
        width: Math.min(100, width / (count + 1)),
        height: 28,
      });
    }
    return coords;
  }, []);

  // Initialize stars once
  useEffect(() => {
    const stars: { x: number; y: number; r: number; alpha: number; pulseSpeed: number }[] = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random() * 0.65, // upper sky
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }
    starsRef.current = stars;
  }, []);

  // Update Robo target platform
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.clientWidth || 800;
    const h = canvas.clientHeight || height;
    const coords = getPlatformCoords(width, h, challenges.length);
    const targetPlatform = coords[currentChallengeIdx] || coords[0];

    if (targetPlatform) {
      roboRef.current.targetX = targetPlatform.x;
      roboRef.current.targetY = targetPlatform.y - 50;
      roboRef.current.isJumping = true;
    }
  }, [currentChallengeIdx, challenges.length, height, getPlatformCoords]);

  // Success celebration triggers
  useEffect(() => {
    if (isSuccessAnimation) {
      roboRef.current.eyeState = 'happy';
      roboRef.current.jumpOffset = -25;
      
      // Spawn confetti & sparks around current platform
      const canvas = canvasRef.current;
      if (canvas) {
        const width = canvas.clientWidth || 800;
        const h = canvas.clientHeight || height;
        const coords = getPlatformCoords(width, h, challenges.length);
        const p = coords[currentChallengeIdx];
        if (p) {
          const colors = ['#00f0ff', '#10b981', '#f59e0b', '#a855f7', '#38bdf8', '#ffffff'];
          for (let i = 0; i < 45; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            particlesRef.current.push({
              x: p.x,
              y: p.y - 35,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 2,
              size: Math.random() * 4 + 2,
              color: colors[i % colors.length],
              alpha: 1,
              decay: Math.random() * 0.02 + 0.01,
              type: 'spark',
            });
          }
        }
      }

      const timer = setTimeout(() => {
        roboRef.current.eyeState = 'normal';
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSuccessAnimation, currentChallengeIdx, challenges.length, height, getPlatformCoords]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.03;
      gridOffsetRef.current = (gridOffsetRef.current + 0.6) % 30;

      // Handle Retina / HD Resolution Scaling
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.floor(rect.width);
      const displayHeight = Math.floor(rect.height);

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      const width = displayWidth;
      const h = displayHeight;

      // =====================================================================
      // 1. BACKGROUND: 2050 Cyber Space Gradient & Skyline
      // =====================================================================
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#040714');
      bgGrad.addColorStop(0.45, '#071126');
      bgGrad.addColorStop(0.7, '#0c1b3a');
      bgGrad.addColorStop(1, '#060d1f');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, h);

      // Distant Holographic Nebula Clouds
      const neb1 = ctx.createRadialGradient(width * 0.25, h * 0.2, 10, width * 0.25, h * 0.2, width * 0.35);
      neb1.addColorStop(0, 'rgba(14, 165, 233, 0.16)');
      neb1.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, h);

      const neb2 = ctx.createRadialGradient(width * 0.8, h * 0.3, 10, width * 0.8, h * 0.3, width * 0.3);
      neb2.addColorStop(0, 'rgba(168, 85, 247, 0.14)');
      neb2.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, h);

      // Starfield
      starsRef.current.forEach(star => {
        const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(time * 3 + star.pulseSpeed * 100));
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * h, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Distant 2050 Neo City Skyline
      const horizonY = h * 0.52;
      ctx.fillStyle = '#060d1f';
      const buildingWidths = [40, 25, 60, 35, 50, 28, 45, 70, 30, 55, 38, 48, 65, 32];
      let bX = 0;
      let bIdx = 0;
      while (bX < width) {
        const bw = buildingWidths[bIdx % buildingWidths.length];
        const bh = 30 + ((bIdx * 17) % 45);
        ctx.fillRect(bX, horizonY - bh, bw, bh);

        // Tower antenna & red beacon
        if (bIdx % 3 === 0) {
          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(bX + bw / 2, horizonY - bh);
          ctx.lineTo(bX + bw / 2, horizonY - bh - 14);
          ctx.stroke();

          // Blinking beacon
          const beaconAlpha = (Math.sin(time * 5 + bIdx) + 1) / 2;
          ctx.fillStyle = `rgba(244, 63, 94, ${beaconAlpha})`;
          ctx.beginPath();
          ctx.arc(bX + bw / 2, horizonY - bh - 14, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        bX += bw + 3;
        bIdx++;
      }

      // =====================================================================
      // 2. PERSPECTIVE NEON GRID (Floor)
      // =====================================================================
      ctx.save();
      const gridGrad = ctx.createLinearGradient(0, horizonY, 0, h);
      gridGrad.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
      gridGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.18)');
      gridGrad.addColorStop(1, 'rgba(14, 165, 233, 0.35)');
      ctx.fillStyle = gridGrad;
      ctx.fillRect(0, horizonY, width, h - horizonY);

      // Horizontal grid lines with perspective compression
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 1;
      const numHoriz = 10;
      for (let i = 0; i < numHoriz; i++) {
        const factor = Math.pow((i + (gridOffsetRef.current / 30)) / numHoriz, 2.2);
        const y = horizonY + factor * (h - horizonY);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Perspective vertical vanishing lines
      const vanishingX = width / 2;
      const numVert = 16;
      for (let i = -numVert; i <= numVert; i++) {
        const bottomX = vanishingX + (i * width) / (numVert * 0.7);
        ctx.beginPath();
        ctx.moveTo(vanishingX, horizonY);
        ctx.lineTo(bottomX, h);
        ctx.stroke();
      }
      ctx.restore();

      // =====================================================================
      // 3. ENERGY CONDUITS & BRIDGES CONNECTING PLATFORMS
      // =====================================================================
      const platformCoords = getPlatformCoords(width, h, challenges.length);

      for (let i = 0; i < platformCoords.length - 1; i++) {
        const p1 = platformCoords[i];
        const p2 = platformCoords[i + 1];
        const isConnected = collectedChallenges.includes(i) || (challenges[i] ? collectedChallenges.includes(challenges[i].id) : false);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        // Subtle curve
        ctx.quadraticCurveTo((p1.x + p2.x) / 2, (p1.y + p2.y) / 2 + 10, p2.x, p2.y);

        if (isConnected) {
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.65)';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = 'rgba(100, 116, 139, 0.25)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([4, 4]);
        }
        ctx.stroke();
        ctx.restore();
      }

      // =====================================================================
      // 4. PLATFORMS & FLOATING CRYSTALS
      // =====================================================================
      platformCoords.forEach((p, idx) => {
        const chal = challenges[idx];
        const isCollected = collectedChallenges.includes(idx) || (chal ? collectedChallenges.includes(chal.id) : false);
        const isCurrent = currentChallengeIdx === idx;
        const isHovered = hoveredIdx === idx;
        const palette = CRYSTAL_PALETTES[idx % CRYSTAL_PALETTES.length];

        // Light cone beam under platform
        ctx.save();
        const beamGrad = ctx.createLinearGradient(p.x, p.y, p.x, h);
        if (isCurrent || isCollected) {
          beamGrad.addColorStop(0, palette.glow);
          beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          beamGrad.addColorStop(0, 'rgba(148, 163, 184, 0.15)');
          beamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(p.x - p.width * 0.4, p.y + 4);
        ctx.lineTo(p.x + p.width * 0.4, p.y + 4);
        ctx.lineTo(p.x + p.width * 0.7, h);
        ctx.lineTo(p.x - p.width * 0.7, h);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // 3D Hexagonal Isometric Pedestal
        ctx.save();
        const pw = p.width;
        const ph = p.height;

        // Base shadow
        ctx.fillStyle = 'rgba(3, 7, 18, 0.7)';
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + 12, pw * 0.5, ph * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();

        // Pedestal Body (Cylinder / Hex)
        const pedGrad = ctx.createLinearGradient(p.x - pw * 0.5, p.y, p.x + pw * 0.5, p.y + ph);
        pedGrad.addColorStop(0, '#1e293b');
        pedGrad.addColorStop(0.5, '#0f172a');
        pedGrad.addColorStop(1, '#020617');
        ctx.fillStyle = pedGrad;

        // Side extrusion
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + 8, pw * 0.48, ph * 0.4, 0, 0, Math.PI);
        ctx.ellipse(p.x, p.y, pw * 0.48, ph * 0.4, 0, Math.PI, 0, true);
        ctx.fill();

        // Top surface of platform
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, pw * 0.48, ph * 0.4, 0, 0, Math.PI * 2);
        ctx.fillStyle = isCurrent ? '#091e3a' : isCollected ? '#06261d' : '#0b1329';
        ctx.fill();

        // Glowing Rim Border
        ctx.strokeStyle = isCurrent ? '#38bdf8' : isCollected ? '#34d399' : isHovered ? '#94a3b8' : '#334155';
        ctx.lineWidth = isCurrent ? 2.5 : 1.5;
        if (isCurrent) {
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
        }
        ctx.stroke();

        // Platform Number Pill
        ctx.font = 'bold 10px monospace';
        ctx.fillStyle = isCurrent ? '#38bdf8' : isCollected ? '#34d399' : '#64748b';
        ctx.textAlign = 'center';
        ctx.fillText(`[ ${idx + 1} ]`, p.x, p.y + 4);

        ctx.restore();

        // -------------------------------------------------------------
        // Floating 3D Crystal
        // -------------------------------------------------------------
        ctx.save();
        const crystalBob = Math.sin(time * 2.2 + idx * 1.3) * 6;
        const crystalX = p.x;
        const crystalY = p.y - 36 + crystalBob;
        const crystalScale = isCurrent ? 1.15 : isHovered ? 1.08 : 1.0;

        // Target bracket for active challenge
        if (isCurrent) {
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 1.5;
          const brkSize = 22;
          // Top Left
          ctx.beginPath();
          ctx.moveTo(crystalX - brkSize, crystalY - brkSize + 6);
          ctx.lineTo(crystalX - brkSize, crystalY - brkSize);
          ctx.lineTo(crystalX - brkSize + 6, crystalY - brkSize);
          // Top Right
          ctx.moveTo(crystalX + brkSize - 6, crystalY - brkSize);
          ctx.lineTo(crystalX + brkSize, crystalY - brkSize);
          ctx.lineTo(crystalX + brkSize, crystalY - brkSize + 6);
          // Bottom Left
          ctx.moveTo(crystalX - brkSize, crystalY + brkSize - 6);
          ctx.lineTo(crystalX - brkSize, crystalY + brkSize);
          ctx.lineTo(crystalX - brkSize + 6, crystalY + brkSize);
          // Bottom Right
          ctx.moveTo(crystalX + brkSize - 6, crystalY + brkSize);
          ctx.lineTo(crystalX + brkSize, crystalY + brkSize);
          ctx.lineTo(crystalX + brkSize, crystalY + brkSize - 6);
          ctx.stroke();

          // Target Label
          ctx.font = '900 9px sans-serif';
          ctx.fillStyle = '#38bdf8';
          ctx.textAlign = 'center';
          ctx.fillText('TARGET', crystalX, crystalY - brkSize - 5);
        }

        // Crystal Glow Aura
        const auraGrad = ctx.createRadialGradient(crystalX, crystalY, 2, crystalX, crystalY, 28 * crystalScale);
        auraGrad.addColorStop(0, palette.glow);
        auraGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(crystalX, crystalY, 28 * crystalScale, 0, Math.PI * 2);
        ctx.fill();

        // 3D Diamond / Crystal Geometry
        const cw = 14 * crystalScale;
        const ch = 20 * crystalScale;

        // Left facet
        ctx.beginPath();
        ctx.moveTo(crystalX, crystalY - ch);
        ctx.lineTo(crystalX - cw, crystalY);
        ctx.lineTo(crystalX, crystalY + ch);
        ctx.closePath();
        ctx.fillStyle = palette.dark;
        ctx.fill();

        // Right facet
        ctx.beginPath();
        ctx.moveTo(crystalX, crystalY - ch);
        ctx.lineTo(crystalX + cw, crystalY);
        ctx.lineTo(crystalX, crystalY + ch);
        ctx.closePath();
        ctx.fillStyle = palette.main;
        ctx.fill();

        // Top specular highlight facet
        ctx.beginPath();
        ctx.moveTo(crystalX, crystalY - ch);
        ctx.lineTo(crystalX - cw * 0.4, crystalY - ch * 0.1);
        ctx.lineTo(crystalX + cw * 0.4, crystalY - ch * 0.1);
        ctx.closePath();
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // Center spine line
        ctx.strokeStyle = palette.light;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(crystalX, crystalY - ch);
        ctx.lineTo(crystalX, crystalY + ch);
        ctx.stroke();

        // Collected Indicator or Spinning Rings
        if (isCollected) {
          // Ascending Energy Column
          const beamTopGrad = ctx.createLinearGradient(crystalX, crystalY, crystalX, 0);
          beamTopGrad.addColorStop(0, palette.glow);
          beamTopGrad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = beamTopGrad;
          ctx.fillRect(crystalX - 3, 0, 6, crystalY);

          // Spinning golden halo
          ctx.strokeStyle = '#fde047';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(crystalX, crystalY, cw * 1.6, ch * 0.4, time * 2, 0, Math.PI * 2);
          ctx.stroke();

          // Checkmark Badge
          ctx.fillStyle = '#10b981';
          ctx.beginPath();
          ctx.arc(crystalX + 14, crystalY - 14, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(crystalX + 11, crystalY - 14);
          ctx.lineTo(crystalX + 13.5, crystalY - 11.5);
          ctx.lineTo(crystalX + 17.5, crystalY - 16.5);
          ctx.stroke();
        }

        // Crystal Variable Name Tag
        ctx.font = 'bold 9px monospace';
        ctx.fillStyle = isCollected ? '#6ee7b7' : isCurrent ? '#bae6fd' : '#cbd5e1';
        ctx.textAlign = 'center';
        ctx.fillText(chal ? chal.varName : `Var #${idx + 1}`, crystalX, p.y + 22);

        ctx.restore();
      });

      // =====================================================================
      // 5. ANIMATED ROBO COMPANION
      // =====================================================================
      const robo = roboRef.current;
      // Smooth movement interpolation (lerp)
      robo.x += (robo.targetX - robo.x) * 0.08;
      robo.y += (robo.targetY - robo.y) * 0.08;

      // Natural idle hovering bob
      const roboHover = Math.sin(time * 3) * 4;
      const actualRoboX = robo.x;
      const actualRoboY = robo.y + roboHover + robo.jumpOffset;

      // Decay jump offset
      robo.jumpOffset *= 0.85;

      // Thruster flame particles
      if (Math.random() < 0.6) {
        particlesRef.current.push({
          x: actualRoboX + (Math.random() * 8 - 4),
          y: actualRoboY + 24,
          vx: Math.random() * 1 - 0.5,
          vy: Math.random() * 2 + 1.5,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? '#00f0ff' : '#38bdf8',
          alpha: 0.9,
          decay: 0.04,
          type: 'thruster',
        });
      }

      // Draw Laser Beam from Robo to Target Crystal when Executing
      if (isExecuting || isSuccessAnimation) {
        const targetP = platformCoords[currentChallengeIdx];
        if (targetP) {
          const tX = targetP.x;
          const tY = targetP.y - 36;

          ctx.save();
          // Laser outer glow
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
          ctx.lineWidth = 8;
          ctx.beginPath();
          ctx.moveTo(actualRoboX, actualRoboY);
          ctx.lineTo(tX, tY);
          ctx.stroke();

          // Laser core
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(actualRoboX, actualRoboY);
          ctx.lineTo(tX, tY);
          ctx.stroke();

          // Hit sparks at target
          for (let s = 0; s < 3; s++) {
            ctx.fillStyle = '#00f0ff';
            ctx.beginPath();
            ctx.arc(tX + (Math.random() * 16 - 8), tY + (Math.random() * 16 - 8), Math.random() * 3 + 1, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // Draw Robo Character Body
      ctx.save();
      // Drop Shadow under Robo
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.ellipse(actualRoboX, actualRoboY + 36, 18, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Antenna
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(actualRoboX, actualRoboY - 18);
      ctx.lineTo(actualRoboX, actualRoboY - 28);
      ctx.stroke();

      // Antenna Glowing Tip
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(actualRoboX, actualRoboY - 28, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Head / Helmet
      const headGrad = ctx.createLinearGradient(actualRoboX - 16, actualRoboY - 18, actualRoboX + 16, actualRoboY + 4);
      headGrad.addColorStop(0, '#f8fafc');
      headGrad.addColorStop(1, '#cbd5e1');
      ctx.fillStyle = headGrad;
      ctx.beginPath();
      ctx.roundRect(actualRoboX - 16, actualRoboY - 18, 32, 22, 9);
      ctx.fill();
      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Cyber Visor Faceplate
      ctx.fillStyle = '#050c1e';
      ctx.beginPath();
      ctx.roundRect(actualRoboX - 12, actualRoboY - 14, 24, 14, 5);
      ctx.fill();

      // Digital Eyes
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 6;
      if (robo.eyeState === 'happy') {
        // Curved happy eyes ^ ^
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(actualRoboX - 8, actualRoboY - 6);
        ctx.lineTo(actualRoboX - 5, actualRoboY - 10);
        ctx.lineTo(actualRoboX - 2, actualRoboY - 6);
        ctx.moveTo(actualRoboX + 2, actualRoboY - 6);
        ctx.lineTo(actualRoboX + 5, actualRoboY - 10);
        ctx.lineTo(actualRoboX + 8, actualRoboY - 6);
        ctx.stroke();
      } else {
        // Glowing round visor eyes
        ctx.beginPath();
        ctx.arc(actualRoboX - 5, actualRoboY - 7, 2.5, 0, Math.PI * 2);
        ctx.arc(actualRoboX + 5, actualRoboY - 7, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Robo Torso
      ctx.fillStyle = '#f1f5f9';
      ctx.beginPath();
      ctx.roundRect(actualRoboX - 13, actualRoboY + 6, 26, 16, 6);
      ctx.fill();
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Power Core Chest Badge
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(actualRoboX, actualRoboY + 14, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Thruster Boots
      ctx.fillStyle = '#0284c7';
      ctx.fillRect(actualRoboX - 10, actualRoboY + 22, 6, 4);
      ctx.fillRect(actualRoboX + 4, actualRoboY + 22, 6, 4);

      // Jet flame burst
      const flameH = 6 + Math.random() * 6;
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(actualRoboX - 10, actualRoboY + 26);
      ctx.lineTo(actualRoboX - 7, actualRoboY + 26 + flameH);
      ctx.lineTo(actualRoboX - 4, actualRoboY + 26);
      ctx.moveTo(actualRoboX + 4, actualRoboY + 26);
      ctx.lineTo(actualRoboX + 7, actualRoboY + 26 + flameH);
      ctx.lineTo(actualRoboX + 10, actualRoboY + 26);
      ctx.fill();

      ctx.restore();

      // Robo Speech Bubble (Hovering above Robo)
      if (roboSpeech) {
        ctx.save();
        ctx.font = 'bold 10px sans-serif';
        const textMetrics = ctx.measureText(roboSpeech);
        const bubbleW = Math.min(240, textMetrics.width + 20);
        const bubbleH = 24;
        const bubbleX = Math.max(10, Math.min(width - bubbleW - 10, actualRoboX - bubbleW / 2));
        const bubbleY = actualRoboY - 58;

        // Bubble background
        ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.35)';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 6);
        ctx.fill();
        ctx.stroke();

        // Tail
        ctx.beginPath();
        ctx.moveTo(actualRoboX - 4, bubbleY + bubbleH);
        ctx.lineTo(actualRoboX, bubbleY + bubbleH + 6);
        ctx.lineTo(actualRoboX + 4, bubbleY + bubbleH);
        ctx.fill();

        // Text
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(
          roboSpeech.length > 34 ? roboSpeech.slice(0, 32) + '...' : roboSpeech,
          bubbleX + bubbleW / 2,
          bubbleY + 15
        );
        ctx.restore();
      }

      // =====================================================================
      // 6. FUTURE CORE POWER RESERVOIR (Top Right HUD)
      // =====================================================================
      ctx.save();
      const tankW = 120;
      const tankH = 26;
      const tankX = width - tankW - 14;
      const tankY = 12;

      // Glass housing
      ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
      ctx.strokeStyle = '#0284c7';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(tankX, tankY, tankW, tankH, 6);
      ctx.fill();
      ctx.stroke();

      // Liquid plasma fill
      const clampedPct = Math.max(0, Math.min(100, coreChargePct));
      const fillW = Math.max(4, ((tankW - 6) * clampedPct) / 100);
      const plasmaGrad = ctx.createLinearGradient(tankX, tankY, tankX + fillW, tankY);
      plasmaGrad.addColorStop(0, '#0284c7');
      plasmaGrad.addColorStop(0.5, '#06b6d4');
      plasmaGrad.addColorStop(1, '#10b981');
      ctx.fillStyle = plasmaGrad;
      ctx.beginPath();
      ctx.roundRect(tankX + 3, tankY + 3, fillW, tankH - 6, 4);
      ctx.fill();

      // Text
      ctx.font = 'bold 9px monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText(`CORE: ${Math.round(clampedPct)}% CHARGED`, tankX + tankW / 2, tankY + 16);
      ctx.restore();

      // =====================================================================
      // 7. RENDER PARTICLES
      // =====================================================================
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.restore();
      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [challenges, currentChallengeIdx, collectedChallenges, isExecuting, isSuccessAnimation, roboSpeech, coreChargePct, hoveredIdx, getPlatformCoords, height]);

  // Click & Hover event handlers on Canvas
  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const coords = getPlatformCoords(rect.width, rect.height, challenges.length);
    let foundIdx: number | null = null;

    coords.forEach((p, idx) => {
      const dx = mouseX - p.x;
      const dy = mouseY - (p.y - 20);
      if (Math.hypot(dx, dy) < 45) {
        foundIdx = idx;
      }
    });

    setHoveredIdx(foundIdx);
    canvas.style.cursor = foundIdx !== null ? 'pointer' : 'default';
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const coords = getPlatformCoords(rect.width, rect.height, challenges.length);
    coords.forEach((p, idx) => {
      const dx = mouseX - p.x;
      const dy = mouseY - (p.y - 20);
      if (Math.hypot(dx, dy) < 45) {
        onSelectChallenge(idx);
      }
    });

    // Check if clicked near Robo for fun jump
    const robo = roboRef.current;
    const rdx = mouseX - robo.x;
    const rdy = mouseY - robo.y;
    if (Math.hypot(rdx, rdy) < 35) {
      robo.jumpOffset = -22;
      robo.eyeState = 'happy';
      setTimeout(() => {
        robo.eyeState = 'normal';
      }, 1000);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-sky-500/30 shadow-2xl bg-[#040714]">
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: `${height}px` }}
        onMouseMove={handleCanvasMouseMove}
        onClick={handleCanvasClick}
      />
    </div>
  );
};
