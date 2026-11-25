import React, { useRef, useEffect, useState, useMemo } from 'react';
import { getSwaraAudioAmplitude } from '../../../services/swaraAudioService';
import './StableMouthLipSyncAvatar.css';

export interface StableMouthLipSyncAvatarProps {
  imageUrl?: string;
  imageSrc?: string;
  alt?: string;
  isSpeaking: boolean;
  speakingText?: string;
  spokenText?: string;
  speakingRate?: number;
  speechRate?: number;
  gender?: 'female' | 'male';
  isLipSyncEnabled?: boolean;
  hideInternalBadge?: boolean;
  className?: string;
}

// Multi-language Phoneme/Viseme classifications for natural mouth articulation
// Maps character combinations / phonemes (English & Hindi/Devanagari) to aperture (-0.22 to 1.0) and width (0.85 to 1.15)
function getVisemeParams(char: string, nextChar: string = ''): { aperture: number; width: number } {
  const pair = (char + nextChar).toLowerCase();
  const c = char.toLowerCase();

  // Space or punctuation -> natural syllable/word closure pause
  if (/[\s,.\-!?;:।॥"']/.test(char)) {
    return { aperture: -0.14, width: 1.0 };
  }
  // English & Hindi bilabials: m, b, p, म, ब, प, भ -> closed lips press together
  if (['m', 'b', 'p'].includes(c) || ['म', 'ब', 'प', 'भ'].includes(char)) {
    return { aperture: -0.24, width: 0.98 };
  }
  // Labiodentals: f, v, फ़ -> slightly parted
  if (['f', 'v'].includes(c) || char === 'फ़' || char === 'फ' || char === 'व') {
    return { aperture: 0.12, width: 0.96 };
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
    return { aperture: 0.68, width: 0.90 };
  }
  // Spread vowels: e, i, ee, इ, ई, ए, ि, ी, े -> moderate aperture, slightly wider corners
  if (pair.startsWith('ee') || c === 'e' || c === 'i' || c === 'y' || ['इ', 'ई', 'ए', 'ि', 'ी', 'े'].includes(char)) {
    return { aperture: 0.54, width: 1.06 };
  }
  // Consonants: t, d, s, z, n, l, r, k, g, त, थ, द, ध, न, स, र, ल, क, ख, ग -> medium articulation
  if (/[tdsznlrkgjch]/.test(c) || /[\u0900-\u097F]/.test(char)) {
    return { aperture: 0.34, width: 1.0 };
  }

  return { aperture: 0.42, width: 1.0 };
}

export const StableMouthLipSyncAvatar: React.FC<StableMouthLipSyncAvatarProps> = ({
  imageUrl,
  imageSrc,
  isSpeaking,
  speakingText,
  spokenText,
  speakingRate,
  speechRate,
  gender = 'female',
  isLipSyncEnabled = true,
  className = '',
}) => {
  const effectiveText = speakingText ?? spokenText ?? '';
  const effectiveSpeakingRate = speakingRate ?? speechRate ?? 0.94;
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

  // Pixel-verified facial landmark coordinates for the Indian HR & Mentor portraits
  const safeImageUrl = imageUrl || imageSrc || '/images/hr_interviewer_futureit_neha.jpg';
  const isTransparentCutout = safeImageUrl.includes('future_it_mentor_girl');
  const mouthCoords = useMemo(() => {
    // 00. Visual Learning Female Mentor Cutout (future_it_mentor_girl.png, 664x576 exact tilted lip seam scan)
    if (safeImageUrl.includes('future_it_mentor_girl')) {
      return {
        centerX: 0.3780, // x = 251px (exact center between corners x=228 and x=274)
        centerY: 0.3299, // y = 190.0px (exact inner seam below upper teeth at x=251)
        widthPct: 0.0693, // 46px mouth width
        heightPct: 0.0556, // 32px lower lip + chin height for seamless feathering
        maxJawDropPx: 7.2,
        mouthSlope: -0.135, // matches her charming head tilt (left corner y=191.8 -> right corner y=188.2)
        leftEye: { x: 0.3268, y: 0.2309, rx: 11.5, ry: 4.8 },
        rightEye: { x: 0.4111, y: 0.2170, rx: 11.5, ry: 4.8 },
      };
    }
    // 0A. Neha Sharma - Future IT Industry Official HR Interviewer (1024x576, exact pixel scan)
    if (safeImageUrl.includes('futureit_neha')) {
      return {
        centerX: 0.5039,
        centerY: 0.3837,
        widthPct: 0.0475,
        heightPct: 0.045,
        maxJawDropPx: 9.5,
        mouthSlope: -0.02,
        leftEye: { x: 0.4717, y: 0.2778, rx: 12.5, ry: 5.2 },
        rightEye: { x: 0.5303, y: 0.2760, rx: 12.5, ry: 5.2 },
      };
    }
    // 0B. Ritika Verma - Future IT Industry Topic Interview HR (1024x576, exact pixel scan)
    if (safeImageUrl.includes('futureit_ritika')) {
      return {
        centerX: 0.5029,
        centerY: 0.3976,
        widthPct: 0.0475,
        heightPct: 0.045,
        maxJawDropPx: 9.5,
        mouthSlope: -0.04,
        leftEye: { x: 0.4668, y: 0.2882, rx: 12.5, ry: 5.2 },
        rightEye: { x: 0.5273, y: 0.2813, rx: 12.5, ry: 5.2 },
      };
    }
    // 1. Aditi Sharma - Super Ultra Powerful 2050 AI HR Director (hr_interviewer_indian_female.jpg)
    if (safeImageUrl.includes('indian_female') || safeImageUrl.includes('ai_hr_director') || gender === 'female') {
      return {
        centerX: 0.503,
        centerY: 0.4236,
        widthPct: 0.070,
        heightPct: 0.050,
        maxJawDropPx: 12.0,
        mouthSlope: 0.0,
        leftEye: { x: 0.4707, y: 0.2951, rx: 13, ry: 5.5 },
        rightEye: { x: 0.5361, y: 0.2951, rx: 13, ry: 5.5 },
      };
    }
    // 2. Rohan Verma - Indian Male HR (hr_interviewer_indian_male.jpg, 1024x576)
    return {
      centerX: 0.486,
      centerY: 0.4375,
      widthPct: 0.072,
      heightPct: 0.064,
      maxJawDropPx: 14.5,
      mouthSlope: 0.0,
      leftEye: { x: 0.452, y: 0.318, rx: 14, ry: 6.5 },
      rightEye: { x: 0.521, y: 0.319, rx: 14, ry: 6.5 },
    };
  }, [gender, safeImageUrl]);

  // Load avatar image
  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = safeImageUrl;
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
  }, [safeImageUrl]);

  // Real-time syllable & phoneme driver synchronized with live spoken audio & visemes
  useEffect(() => {
    if (!isSpeaking || !isLipSyncEnabled) {
      targetApertureRef.current = 0.0;
      currentApertureRef.current = 0.0;
      targetWidthScaleRef.current = 1.0;
      currentWidthScaleRef.current = 1.0;
      return;
    }

    const effectiveRate = Math.max(0.75, Math.min(1.35, effectiveSpeakingRate || 1.0));
    const stepMs = Math.max(42, Math.floor(60 / effectiveRate));

    let tickCount = 0;
    const cleanChars = Array.from(
      (effectiveText || 'Welcome to Future IT Industry visual learning session').trim()
    );
    const textLen = cleanChars.length;

    const interval = setInterval(() => {
      // 1. Direct Live Wave Amplitude from Swara Audio
      const liveAmp = getSwaraAudioAmplitude();

      if (liveAmp > 0) {
        tickCount++;
        const idx = textLen > 0 ? tickCount % textLen : 0;
        const char = cleanChars[idx] || 'a';
        const nextChar = cleanChars[idx + 1] || ' ';
        const { aperture, width } = getVisemeParams(char, nextChar);

        if (aperture < 0 || liveAmp < 0.08) {
          // Bilabial closure or brief syllable boundary -> gently close lower lip upward
          targetApertureRef.current = -0.22;
          targetWidthScaleRef.current = 0.99;
        } else {
          // Open mouth proportional to live audio volume with phonetic shape
          targetApertureRef.current = Math.min(
            0.95,
            Math.max(0.08, (aperture * 0.55 + 0.35) * liveAmp * 1.25)
          );
          targetWidthScaleRef.current = width;
        }
      } else if (textLen > 0) {
        // 2. Synthesized Speech / WebSpeech / Character-by-Character Phoneme Traversal
        tickCount++;
        const idx = tickCount % textLen;
        const char = cleanChars[idx] || ' ';
        const nextChar = cleanChars[idx + 1] || ' ';

        const { aperture, width } = getVisemeParams(char, nextChar);
        if (aperture < 0) {
          // Natural lip closure on spaces, punctuation, and m/b/p consonants
          targetApertureRef.current = aperture;
          targetWidthScaleRef.current = width;
        } else {
          const syllableOsc = Math.abs(Math.sin(tickCount * 0.78)) * 0.45 + 0.42;
          targetApertureRef.current = Math.min(0.9, Math.max(0.08, aperture * syllableOsc));
          targetWidthScaleRef.current = width;
        }
      } else {
        targetApertureRef.current = 0.0;
      }
    }, stepMs);

    return () => {
      clearInterval(interval);
      targetApertureRef.current = 0.0;
      currentApertureRef.current = 0.0;
    };
  }, [isSpeaking, effectiveText, effectiveSpeakingRate, isLipSyncEnabled]);

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

  // 60FPS Canvas Render Loop — 100% Rock-Steady Frame, Slope-Aligned Photographic Upper & Lower Lip Articulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageLoaded || !imageObjRef.current) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imageObjRef.current;
    const cw = (canvas.width = img.naturalWidth || 1024);
    const ch = (canvas.height = img.naturalHeight || 576);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const mx = mouthCoords.centerX * cw;
    const my = mouthCoords.centerY * ch;
    const mw = mouthCoords.widthPct * cw;
    const mh = mouthCoords.heightPct * ch;
    const maxDrop = mouthCoords.maxJawDropPx;
    const slope = (mouthCoords as { mouthSlope?: number }).mouthSlope || 0;

    const render = () => {
      // If speaking stopped or disabled, instantly snap aperture to 0 with zero lingering
      if (!isSpeaking || !isLipSyncEnabled) {
        currentApertureRef.current = 0.0;
        targetApertureRef.current = 0.0;
        currentWidthScaleRef.current = 1.0;
        targetWidthScaleRef.current = 1.0;
      } else {
        const damp = 0.42;
        currentApertureRef.current += (targetApertureRef.current - currentApertureRef.current) * damp;
        currentWidthScaleRef.current += (targetWidthScaleRef.current - currentWidthScaleRef.current) * damp;
      }

      const aperture = currentApertureRef.current;
      const jawDrop = aperture * maxDrop;

      // 1. Clear overlay canvas (base portrait is rendered by the crisp native <img> underlay)
      ctx.clearRect(0, 0, cw, ch);
      if (!isTransparentCutout) {
        ctx.drawImage(img, 0, 0, cw, ch);
      }

      // 2. Slope-Aligned Bidirectional Photographic Lip Warp (Both Closing & Opening along exact tilted mouth seam)
      if (Math.abs(aperture) > 0.03 && isLipSyncEnabled) {
        const widthScale = currentWidthScaleRef.current;
        const activeMouthW = mw * widthScale;

        const numSlices = 40;
        const warpSpanW = activeMouthW * 1.02;
        const sliceW = warpSpanW / numSlices;
        const startX = mx - warpSpanW / 2;
        const upperH = mh * 0.42;

        for (let i = 0; i < numSlices; i++) {
          const sx = startX + i * sliceW;
          const sliceCenterX = sx + sliceW * 0.5;
          // Exact tilted mouth seam Y at this horizontal slice (matches head tilt to sub-pixel accuracy)
          const localMy = my + (sliceCenterX - mx) * slope;

          const u = ((i + 0.5) / numSlices) * 2 - 1;
          // Smooth bell curve tapering to 0 at left and right mouth corners
          const horizFalloff = Math.pow(Math.max(0, Math.cos(u * Math.PI * 0.5)), 1.75);
          const localDrop = jawDrop * horizFalloff;

          if (localDrop > 0.2) {
            const localUpperLift = localDrop * 0.16;
            const lowerShift = localDrop * 0.86;

            // Fill the tiny parted inner-mouth gap along the tilted seam with natural inner-lip tone
            const gapTop = localMy - localUpperLift;
            const gapHeight = lowerShift + localUpperLift + 1.2;
            const sliceGrad = ctx.createLinearGradient(sx, gapTop, sx, gapTop + gapHeight);
            sliceGrad.addColorStop(0, 'rgb(198, 168, 166)'); // Soft upper tooth bottom edge blend
            sliceGrad.addColorStop(0.32, 'rgb(148, 66, 74)'); // Natural warm rose inner oral tone
            sliceGrad.addColorStop(1, 'rgb(176, 84, 92)'); // Lower inner lip edge blend
            ctx.fillStyle = sliceGrad;
            ctx.fillRect(sx, gapTop, sliceW + 0.8, gapHeight);

            // A1. Upper lip + upper teeth lift slightly upward
            ctx.drawImage(
              img,
              sx,
              localMy - upperH,
              sliceW + 0.85,
              upperH,
              sx,
              localMy - upperH - localUpperLift,
              sliceW + 0.85,
              upperH
            );

            // A2. Lower lip and chin drop smoothly downward while bottom of chin stays anchored at localMy + mh
            ctx.drawImage(
              img,
              sx,
              localMy,
              sliceW + 0.85,
              mh,
              sx,
              localMy + lowerShift,
              sliceW + 0.85,
              Math.max(4, mh - lowerShift)
            );
          } else if (localDrop < -0.15) {
            // Bilabial / syllable closure: gently lift lower lip upward to close over the teeth
            const closeLift = Math.min(2.4, Math.abs(localDrop) * 1.15);
            ctx.drawImage(
              img,
              sx,
              localMy,
              sliceW + 0.85,
              mh,
              sx,
              localMy - closeLift,
              sliceW + 0.85,
              mh + closeLift
            );
          }
        }
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
        backgroundColor: isTransparentCutout ? 'transparent' : '#0a0f1d',
      }}
    >
      {/* 100% Stationary Crisp Native <img> Underlay (Browser Lanczos High-DPI Sharpness) */}
      <img
        src={safeImageUrl}
        alt="AI Mentor"
        className="stable-avatar-base-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: isTransparentCutout ? 'contain' : 'cover',
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
          objectFit: isTransparentCutout ? 'contain' : 'cover',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default StableMouthLipSyncAvatar;
