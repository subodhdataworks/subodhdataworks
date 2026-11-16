import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RobotTargetElement } from './FlyingRobot2050';

export interface FutureAIRobot3DProps {
  targetElement: RobotTargetElement;
  isSpeaking: boolean;
  prefersReducedMotion?: boolean | null;
  className?: string;
}

export const FutureAIRobot3D: React.FC<FutureAIRobot3DProps> = ({
  targetElement,
  isSpeaking,
  prefersReducedMotion = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Keep live refs for animation loop
  const targetRef = useRef<RobotTargetElement>(targetElement);
  const speakingRef = useRef<boolean>(isSpeaking);
  const reducedMotionRef = useRef<boolean>(Boolean(prefersReducedMotion));

  useEffect(() => {
    targetRef.current = targetElement;
  }, [targetElement]);

  useEffect(() => {
    speakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    reducedMotionRef.current = Boolean(prefersReducedMotion);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;

    // Scene & Camera
    const scene = new THREE.Scene();
    const width = container.clientWidth || 240;
    const height = container.clientHeight || 160;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.8);

    // WebGL Renderer with Alpha transparency and high DPR
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lighting (Cyan/Blue futuristic ambient & rim lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const cyanRimLight = new THREE.PointLight(0x00f2fe, 4.5, 20);
    cyanRimLight.position.set(-3, 2, 4);
    scene.add(cyanRimLight);

    const blueBackLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    blueBackLight.position.set(3, -2, -3);
    scene.add(blueBackLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(0, 4, 6);
    scene.add(keyLight);

    // Root Group for 3D flight translation and anti-gravity physics
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ─── 1. HOLOGRAPHIC CONCENTRIC ANTI-GRAVITY HOVER RINGS (XZ PLANE) ───
    const hoverRingsGroup = new THREE.Group();
    hoverRingsGroup.position.set(0, -1.95, 0);
    hoverRingsGroup.rotation.x = Math.PI / 2.35; // tilted perspective matching reference image
    rootGroup.add(hoverRingsGroup);

    // Ring 1 (Inner intense glowing ring)
    const ringGeo1 = new THREE.RingGeometry(0.7, 0.88, 48);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    hoverRingsGroup.add(ring1);

    // Ring 2 (Middle expanding ring)
    const ringGeo2 = new THREE.RingGeometry(1.25, 1.42, 48);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    hoverRingsGroup.add(ring2);

    // Ring 3 (Outer soft ethereal ring)
    const ringGeo3 = new THREE.RingGeometry(1.85, 2.02, 48);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    hoverRingsGroup.add(ring3);

    // Floating Holographic Energy Particles around anti-gravity field
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 0.8 + Math.random() * 1.4;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = Math.sin(angle) * radius;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const hoverParticles = new THREE.Points(particleGeo, particleMat);
    hoverRingsGroup.add(hoverParticles);

    // ─── 2. EXACT FUTURE AI 2050 ROBOT 3D RIG ───
    const robotRig = new THREE.Group();
    rootGroup.add(robotRig);

    // Load Pristine Reference Robot High-Res Texture
    const textureLoader = new THREE.TextureLoader();
    let robotPlane: THREE.Mesh | null = null;

    textureLoader.load(
      '/images/future-ai-2050-robot.png',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;

        // Plane aspect ratio matching 1024 / 682 = 1.50
        const planeGeo = new THREE.PlaneGeometry(3.6, 2.4);
        const planeMat = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          roughness: 0.22,
          metalness: 0.28,
          alphaTest: 0.02,
          side: THREE.DoubleSide,
        });

        robotPlane = new THREE.Mesh(planeGeo, planeMat);
        robotPlane.position.set(0, 0.2, 0);
        robotRig.add(robotPlane);
      },
      undefined,
      () => {
        // Fallback: procedural 3D robot sphere & torso
        const fallbackGeo = new THREE.SphereGeometry(1.2, 32, 32);
        const fallbackMat = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.2,
          metalness: 0.4,
        });
        const fallbackMesh = new THREE.Mesh(fallbackGeo, fallbackMat);
        robotRig.add(fallbackMesh);
      }
    );

    // ─── 3. INTERACTIVE 3D ARTICULATION & LIGHTING NODES ───
    // Dynamic Holographic Visor Overlay (animated eyes & voice reactive pulse)
    const eyeCanvas = document.createElement('canvas');
    eyeCanvas.width = 256;
    eyeCanvas.height = 128;
    const eyeCtx = eyeCanvas.getContext('2d');

    const eyeTexture = new THREE.CanvasTexture(eyeCanvas);
    const eyeMat = new THREE.MeshBasicMaterial({
      map: eyeTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const eyePlane = new THREE.Mesh(new THREE.PlaneGeometry(0.85, 0.42), eyeMat);
    eyePlane.position.set(-0.25, 0.88, 0.05);
    robotRig.add(eyePlane);

    // Dynamic 3D Laser / Holographic Pointing Indicator from index finger
    const pointerGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const pointerSphere = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), pointerGlowMat);
    pointerSphere.position.set(-0.62, 0.15, 0.12);
    robotRig.add(pointerSphere);

    // ─── 4. ANIMATION LOOP WITH TRUE 3D FLIGHT PHYSICS ───
    let clock = new THREE.Clock();

    // Flight target coordinates (X, Y, tilt, facing yaw, pitch)
    const TARGET_COORDS: Record<
      RobotTargetElement,
      { x: number; y: number; z: number; rotY: number; rotZ: number; pointX: number; pointY: number }
    > = {
      code_editor: {
        x: -1.25,
        y: 0.15,
        z: 0.3,
        rotY: -0.22,
        rotZ: -0.06,
        pointX: -0.85,
        pointY: 0.25,
      },
      card_function: {
        x: -0.45,
        y: 0.32,
        z: 0.2,
        rotY: -0.08,
        rotZ: -0.02,
        pointX: -0.55,
        pointY: 0.65,
      },
      card_argument: {
        x: 0.25,
        y: 0.28,
        z: 0.1,
        rotY: 0.05,
        rotZ: 0.02,
        pointX: 0.1,
        pointY: 0.62,
      },
      card_console_op: {
        x: 0.95,
        y: 0.18,
        z: 0.0,
        rotY: 0.18,
        rotZ: 0.05,
        pointX: 0.75,
        pointY: 0.4,
      },
      console_output: {
        x: 1.45,
        y: -0.05,
        z: 0.2,
        rotY: 0.28,
        rotZ: 0.07,
        pointX: 1.15,
        pointY: 0.05,
      },
      recap_center: {
        x: 0.15,
        y: 0.08,
        z: 0.25,
        rotY: 0.0,
        rotZ: 0.0,
        pointX: 0.0,
        pointY: 0.2,
      },
    };

    let eyeBlinkTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const target = targetRef.current;
      const isSpk = speakingRef.current;
      const reduced = reducedMotionRef.current;

      const targetCoord = TARGET_COORDS[target] || TARGET_COORDS.card_function;

      // 1. Anti-Gravity Hovering Physics (Smooth vertical bobbing & levitation)
      const hoverBob = reduced ? 0 : Math.sin(elapsedTime * 2.8) * 0.12;
      const hoverSway = reduced ? 0 : Math.cos(elapsedTime * 1.9) * 0.04;

      // 2. Smooth Lerp 3D Flight Navigation to Target Element
      const lerpSpeed = 0.055;
      rootGroup.position.x = THREE.MathUtils.lerp(rootGroup.position.x, targetCoord.x + hoverSway, lerpSpeed);
      rootGroup.position.y = THREE.MathUtils.lerp(rootGroup.position.y, targetCoord.y + hoverBob, lerpSpeed);
      rootGroup.position.z = THREE.MathUtils.lerp(rootGroup.position.z, targetCoord.z, lerpSpeed);

      // Banking Tilt in 3D during flight
      rootGroup.rotation.y = THREE.MathUtils.lerp(rootGroup.rotation.y, targetCoord.rotY, lerpSpeed);
      rootGroup.rotation.z = THREE.MathUtils.lerp(
        rootGroup.rotation.z,
        targetCoord.rotZ + (reduced ? 0 : Math.sin(elapsedTime * 2.5) * 0.015),
        lerpSpeed
      );

      // 3. Anti-Gravity Hover Rings Animation (Concentric Pulse & Expansion Waves)
      hoverRingsGroup.rotation.z += 0.008;
      const pulse1 = 1 + Math.sin(elapsedTime * 3.2) * 0.08;
      const pulse2 = 1 + Math.sin(elapsedTime * 3.2 + 1.2) * 0.08;
      const pulse3 = 1 + Math.sin(elapsedTime * 3.2 + 2.4) * 0.08;

      ring1.scale.set(pulse1, pulse1, 1);
      ring2.scale.set(pulse2, pulse2, 1);
      ring3.scale.set(pulse3, pulse3, 1);

      ringMat1.opacity = 0.65 + Math.sin(elapsedTime * 3.5) * 0.2;
      ringMat2.opacity = 0.5 + Math.sin(elapsedTime * 3.5 + 1.0) * 0.15;
      ringMat3.opacity = 0.35 + Math.sin(elapsedTime * 3.5 + 2.0) * 0.12;

      // Holographic hover particles gentle drift
      if (hoverParticles) {
        hoverParticles.rotation.z -= 0.005;
      }

      // 4. Pointer Position Lerp
      pointerSphere.position.x = THREE.MathUtils.lerp(pointerSphere.position.x, targetCoord.pointX, 0.08);
      pointerSphere.position.y = THREE.MathUtils.lerp(pointerSphere.position.y, targetCoord.pointY, 0.08);
      pointerGlowMat.opacity = 0.6 + Math.sin(elapsedTime * 4.5) * 0.35;

      // 5. Dynamic Eye Visor Canvas Updates (Happy Cyan Arches, Blinking, Voice Wave)
      if (eyeCtx) {
        eyeCtx.clearRect(0, 0, 256, 128);
        eyeBlinkTimer += 0.02;

        const isBlinking = eyeBlinkTimer % 4.0 > 3.85;

        eyeCtx.strokeStyle = '#00f2fe';
        eyeCtx.fillStyle = '#00f2fe';
        eyeCtx.lineWidth = 8;
        eyeCtx.lineCap = 'round';
        eyeCtx.shadowColor = '#00f2fe';
        eyeCtx.shadowBlur = 12;

        if (isBlinking) {
          // Closed eyelid line during blink
          eyeCtx.beginPath();
          eyeCtx.moveTo(40, 60);
          eyeCtx.lineTo(95, 60);
          eyeCtx.moveTo(145, 60);
          eyeCtx.lineTo(200, 60);
          eyeCtx.stroke();
        } else {
          // Expressive Arched Glowing Eyes matching reference image (^ ^)
          eyeCtx.beginPath();
          eyeCtx.arc(68, 62, 28, Math.PI * 1.15, Math.PI * 1.85, false);
          eyeCtx.stroke();

          eyeCtx.beginPath();
          eyeCtx.arc(172, 62, 28, Math.PI * 1.15, Math.PI * 1.85, false);
          eyeCtx.stroke();

          // Audio-reactive teaching smile wave
          if (isSpk) {
            const mouthPulse = Math.sin(elapsedTime * 12) * 4;
            eyeCtx.beginPath();
            eyeCtx.moveTo(100, 88);
            eyeCtx.quadraticCurveTo(120, 100 + mouthPulse, 140, 88);
            eyeCtx.stroke();
          } else {
            eyeCtx.beginPath();
            eyeCtx.moveTo(102, 90);
            eyeCtx.quadraticCurveTo(120, 100, 138, 90);
            eyeCtx.stroke();
          }
        }

        eyeTexture.needsUpdate = true;
      }

      // Dynamic Cyan Rim Light intensity reacting to speech
      cyanRimLight.intensity = isSpk ? 5.5 + Math.sin(elapsedTime * 8) * 1.5 : 3.8;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer for perfect responsiveness
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 240;
      const newHeight = container.clientHeight || 160;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup WebGL resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      eyeTexture.dispose();
      eyeMat.dispose();
      pointerSphere.geometry.dispose();
      pointerGlowMat.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-testid="future-ai-2050-robot-3d"
      className={`relative z-20 w-44 sm:w-56 h-32 sm:h-36 pointer-events-none select-none flex items-center justify-center overflow-visible ${className}`}
    />
  );
};

export default FutureAIRobot3D;
