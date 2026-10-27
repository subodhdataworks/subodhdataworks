import React, { useRef, useEffect, useState, useMemo } from 'react';
import './StableMouthLipSyncAvatar.css';

export interface StableMouthLipSyncAvatarProps {
  imageUrl: string;
  isSpeaking: boolean;
  speakingText?: string;
  speakingRate?: number;
  gender?: 'female' | 'male';
  isLipSyncEnabled?: boolean;
  hideInternalBadge?: boolean;
  className?: string;
}

// Multi-language Phoneme/Viseme classifications for natural mouth articulation
// Maps character combinations / phonemes (English & Hindi/Devanagari) to aperture (0.0 to 1.0) and width (0.85 to 1.15)
function getVisemeParams(char: string, nextChar: string = ''): { aperture: number; width: number } {
  const pair = (char + nextChar).toLowerCase();
  const c = char.toLowerCase();

  // Space or punctuation -> natural syllable/word closure pause
  if (/[\s,.\-!?;:।॥"']/.test(char)) {
    return { aperture: 0.04, width: 1.0 };
  }
  // English & Hindi bilabials: m, b, p, म, ब, प, भ -> closed lips press
  if (['m', 'b', 'p'].includes(c) || ['म', 'ब', 'प', 'भ'].includes(char)) {
    return { aperture: 0.05, width: 0.98 };
  }
  // Labiodentals: f, v, फ़ -> slightly parted
  if (['f', 'v'].includes(c) || char === 'फ़' || char === 'फ' || char === 'व') {
    return { aperture: 0.22, width: 0.96 };
  }
  // Wide open vowels: a, aa, आ, अ, ा, ऐ, ॉ -> highest jaw drop
  if (pair.startsWith('aa') || c === 'a' || ['आ', 'अ', 'ा', 'ऐ', 'ॉ'].includes(char)) {
    return { aperture: 0.92, width: 1.04 };
  }
  // Rounded vowels: o, u, oo, au, ओ, औ, उ, ऊ, ो, ौ, ु, ू -> rounded lips, medium-high aperture
  if (
    pair.startsWith('oo') ||
    pair.startsWith('ou') ||
    c === 'o' ||
    c === 'u' ||
    c === 'w' ||
    ['ओ', 'औ', 'उ', 'ऊ', 'ो', 'ौ', 'ु', 'ू'].includes(char)
  ) {
    return { aperture: 0.68, width: 0.88 };
  }
  // Spread vowels: e, i, ee, इ, ई, ए, ि, ी, े -> moderate aperture, slightly wider corners
  if (pair.startsWith('ee') || c === 'e' || c === 'i' || c === 'y' || ['इ', 'ई', 'ए', 'ि', 'ी', 'े'].includes(char)) {
    return { aperture: 0.54, width: 1.10 };
  }
  // Consonants: t, d, s, z, n, l, r, k, g, त, थ, द, ध, न, स, र, ल, क, ख, ग -> medium articulation
  if (/[tdsznlrkgjch]/.test(c) || /[\u0900-\u097F]/.test(char)) {
    return { aperture: 0.40, width: 1.0 };
  }

  return { aperture: 0.45, width: 1.0 };
}

export const StableMouthLipSyncAvatar: React.FC<StableMouthLipSyncAvatarProps> = ({
  imageUrl,
  isSpeaking,
  speakingText = '',
  speakingRate = 0.94,
  gender = 'female',
  isLipSyncEnabled = true,
  hideInternalBadge = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageObjRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Smooth spring animation state refs
  const currentApertureRef = useRef(0.0);
  const targetApertureRef = useRef(0.0);
  const currentWidthScaleRef = useRef(1.0);
  const targetWidthScaleRef = useRef(1.0);
  const animFrameRef = useRef<number | null>(null);
  const blinkProgressRef = useRef(0.0); // 0 = open, 1 = closed
  const lastBlinkTimeRef = useRef(Date.now());

  // Pixel-verified facial landmark coordinates for the 1024x576 Indian HR portraits
  const mouthCoords = useMemo(() => {
    // 1. Aditi Sharma - Indian Female HR (hr_interviewer_indian_female.jpg, 1024x576)
    if (imageUrl.includes('indian_female') || gender === 'female') {
      return {
        centerX: 0.495,
        centerY: 0.4184,
        widthPct: 0.072,
        heightPct: 0.064,
        maxJawDropPx: 16.5,
        leftEye: { x: 0.463, y: 0.311, rx: 14, ry: 6.5 },
        rightEye: { x: 0.526, y: 0.311, rx: 14, ry: 6.5 },
      };
    }
    // 2. Rohan Verma - Indian Male HR (hr_interviewer_indian_male.jpg, 1024x576)
    return {
      centerX: 0.486,
      centerY: 0.4375,
      widthPct: 0.072,
      heightPct: 0.064,
      maxJawDropPx: 16.5,
      leftEye: { x: 0.452, y: 0.318, rx: 14, ry: 6.5 },
      rightEye: { x: 0.521, y: 0.319, rx: 14, ry: 6.5 },
    };
  }, [gender, imageUrl]);

  // Load avatar image
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      imageObjRef.current = img;
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(true);
    };
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  // Real-time syllable & phoneme driver synchronized with spoken text (enhanced lip-sync articulation)
  useEffect(() => {
    if (!isSpeaking || !isLipSyncEnabled) {
      targetApertureRef.current = 0.0;
      targetWidthScaleRef.current = 1.0;
      return;
    }

    const effectiveRate = Math.max(0.75, Math.min(1.35, speakingRate || 0.94));
    const stepMs = Math.max(50, Math.floor(72 / effectiveRate));

    let tickCount = 0;
    const interval = setInterval(() => {
      tickCount++;
      const cleanChars = Array.from((speakingText || '').trim());
      const textLen = cleanChars.length;

      if (textLen > 0) {
        const idx = tickCount % textLen;
        const char = cleanChars[textLen - 1] && textLen < 260 ? cleanChars[textLen - 1] : cleanChars[idx] || 'a';
        const nextChar = cleanChars[idx + 1] || ' ';
        const { aperture, width } = getVisemeParams(char, nextChar);

        // Enhanced syllabic oscillation so mouth opens & closes with strong, natural articulation
        const syllableWave = Math.sin(tickCount * 1.05) * 0.26;
        const nextAperture = Math.max(0.04, Math.min(1.0, aperture * 1.15 + syllableWave));
        targetApertureRef.current = nextAperture;
        targetWidthScaleRef.current = width;
      } else {
        const cadence = Math.sin(Date.now() / 90) * 0.48 + 0.52;
        targetApertureRef.current = Math.max(0.06, cadence);
        targetWidthScaleRef.current = 0.95 + Math.cos(Date.now() / 120) * 0.08;
      }
    }, stepMs);

    return () => clearInterval(interval);
  }, [isSpeaking, speakingText, speakingRate, isLipSyncEnabled]);

  // Natural periodic eye blinking (every 3.8 - 5.5s, lasting 120ms)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      const now = Date.now();
      if (now - lastBlinkTimeRef.current > 3800 + Math.random() * 1800) {
        lastBlinkTimeRef.current = now;
        blinkProgressRef.current = 1.0;
        setTimeout(() => {
          blinkProgressRef.current = 0.0;
        }, 120);
      }
    }, 350);

    return () => clearInterval(blinkInterval);
  }, []);

  // 60FPS Canvas Render Loop — 100% Rock-Steady Frame, Enhanced Multi-Slice Upper & Lower Lip Warp
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageLoaded || !imageObjRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imageObjRef.current;
    const cw = (canvas.width = img.naturalWidth || 1024);
    const ch = (canvas.height = img.naturalHeight || 576);

    const mx = mouthCoords.centerX * cw;
    const my = mouthCoords.centerY * ch;
    const mw = mouthCoords.widthPct * cw;
    const mh = mouthCoords.heightPct * ch;
    const maxDrop = mouthCoords.maxJawDropPx;

    const render = () => {
      // Snappy spring interpolation for responsive lip articulation
      const damp = isSpeaking ? 0.42 : 0.46;
      currentApertureRef.current += (targetApertureRef.current - currentApertureRef.current) * damp;
      currentWidthScaleRef.current += (targetWidthScaleRef.current - currentWidthScaleRef.current) * damp;

      const aperture = currentApertureRef.current;
      const jawDrop = aperture * maxDrop;

      // 1. Draw 100% stationary base portrait
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, cw, ch);

      // 2. Enhanced Multi-Slice Seamless Upper & Lower Lip Warp + Anatomical Oral Cavity
      if (aperture > 0.02 && isLipSyncEnabled) {
        const widthScale = currentWidthScaleRef.current;
        const activeMouthW = mw * widthScale;

        // A. Warp upper lip slightly upward & lower lip/chin downward using 32 vertical slices
        const numSlices = 32;
        const warpSpanW = activeMouthW * 1.08;
        const sliceW = warpSpanW / numSlices;
        const startX = mx - warpSpanW / 2;
        const upperH = mh * 0.48;

        for (let i = 0; i < numSlices; i++) {
          const sx = startX + i * sliceW;
          const u = ((i + 0.5) / numSlices) * 2 - 1;
          const horizFalloff = Math.pow(Math.max(0, Math.cos(u * Math.PI * 0.5)), 1.45);
          const localDrop = jawDrop * horizFalloff;
          const localUpperLift = localDrop * 0.22;

          if (localDrop > 0.2) {
            // Subtle upper-lip lift
            ctx.drawImage(
              img,
              sx,
              my - upperH,
              sliceW + 0.7,
              upperH,
              sx,
              my - upperH - localUpperLift,
              sliceW + 0.7,
              upperH
            );

            // Expressive lower-lip & chin drop
            ctx.drawImage(
              img,
              sx,
              my,
              sliceW + 0.7,
              mh,
              sx,
              my + localDrop * 0.94,
              sliceW + 0.7,
              mh - localDrop * 0.32
            );
          }
        }

        // B. Curved Anatomical Mouth Parting Cavity between lifted upper lip and dropped lower lip
        const cavityW = activeMouthW * 0.86;
        const cavityH = Math.max(2.2, jawDrop * 0.98);
        const leftCornerX = mx - cavityW / 2;
        const rightCornerX = mx + cavityW / 2;

        ctx.save();
        ctx.beginPath();
        // Upper lip inner arch
        ctx.moveTo(leftCornerX, my);
        ctx.quadraticCurveTo(mx, my - cavityH * 0.24, rightCornerX, my);
        // Lower lip inner arch (shifted down by jawDrop)
        ctx.quadraticCurveTo(mx, my + cavityH * 1.16, leftCornerX, my);
        ctx.closePath();
        ctx.clip();

        // Deep natural oral cavity gradient
        const oralGrad = ctx.createLinearGradient(mx, my - 3, mx, my + cavityH + 3);
        oralGrad.addColorStop(0, '#260d11');
        oralGrad.addColorStop(0.35, '#160609');
        oralGrad.addColorStop(0.75, '#120407');
        oralGrad.addColorStop(1, '#2b0f14');
        ctx.fillStyle = oralGrad;
        ctx.fillRect(leftCornerX - 2, my - 5, cavityW + 4, cavityH + 10);

        // Upper Teeth Arch when mouth opens
        if (aperture > 0.14) {
          const teethW = cavityW * 0.70;
          const teethH = Math.min(4.8, cavityH * 0.38);
          ctx.beginPath();
          ctx.moveTo(mx - teethW / 2, my - 1);
          ctx.quadraticCurveTo(mx, my + teethH * 1.38, mx + teethW / 2, my - 1);
          ctx.closePath();
          ctx.fillStyle = 'rgba(248, 244, 239, 0.92)';
          ctx.fill();
        }

        // Tongue Warmth at the bottom of the oral cavity on vowels
        if (aperture > 0.35) {
          const tongueW = cavityW * 0.54;
          ctx.beginPath();
          ctx.ellipse(mx, my + cavityH * 0.86, tongueW / 2, cavityH * 0.30, 0, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(175, 72, 82, 0.70)';
          ctx.fill();
        }

        // Soft inner lip shadow around the contour for seamless blending
        ctx.strokeStyle = 'rgba(30, 8, 12, 0.58)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.restore();
      }

      // 3. Natural Eye Blink using sampled upper-eyelid skin texture from the portrait itself
      if (blinkProgressRef.current > 0.1) {
        [mouthCoords.leftEye, mouthCoords.rightEye].forEach((eye) => {
          const ex = eye.x * cw;
          const ey = eye.y * ch;
          const erx = eye.rx;
          const ery = eye.ry;

          ctx.save();
          ctx.beginPath();
          ctx.ellipse(ex, ey, erx, ery, 0, 0, Math.PI * 2);
          ctx.clip();

          // Sample natural skin tone patch immediately above the eyelid crease
          ctx.drawImage(
            img,
            ex - erx,
            ey - ery * 2.4,
            erx * 2,
            ery * 1.4,
            ex - erx,
            ey - ery,
            erx * 2,
            ery * 2
          );

          // Closed eyelash line along bottom of lid
          ctx.beginPath();
          ctx.moveTo(ex - erx * 0.88, ey + 0.5);
          ctx.quadraticCurveTo(ex, ey + ery * 0.55, ex + erx * 0.88, ey + 0.5);
          ctx.strokeStyle = 'rgba(45, 28, 24, 0.78)';
          ctx.lineWidth = 1.6;
          ctx.stroke();

          ctx.restore();
        });
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [imageLoaded, mouthCoords, isLipSyncEnabled, isSpeaking]);

  return (
    <div
      ref={containerRef}
      className={`stable-avatar-stage ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#0a0f1d',
      }}
    >
      {/* 100% Stationary Static Avatar Underlay */}
      <img
        src={imageUrl}
        alt="HR Interviewer"
        className="stable-avatar-base-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* High-Definition Lip Sync Canvas Overlay */}
      <canvas
        ref={canvasRef}
        className="stable-avatar-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          pointerEvents: 'none',
        }}
      />

      {/* Sleek Live Voice Equalizer Badge (Top-Left below Live Indicator) */}
      {isSpeaking && !hideInternalBadge && (
        <div className="stable-avatar-speaking-indicator">
          <div className="hud-sound-equalizer">
            <span className="hud-bar bar-1" />
            <span className="hud-bar bar-2" />
            <span className="hud-bar bar-3" />
            <span className="hud-bar bar-4" />
          </div>
          <span className="speaking-label">HR Speaking Live</span>
        </div>
      )}
    </div>
  );
};

export default StableMouthLipSyncAvatar;
