import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Activity, Cpu, ShieldCheck, Database, Terminal, BarChart3, Bot } from 'lucide-react';

interface HeroVisual3DProps {
  onSelectNode?: (nodeName: string) => void;
}

export const HeroVisual3D: React.FC<HeroVisual3DProps> = ({ onSelectNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTelemetry, setActiveTelemetry] = useState({
    activeSkill: 'GenAI & Python',
    accuracy: '98.4%',
    latency: '12ms',
    sessionStatus: 'Synchronized',
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 520;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // transparent to blend with light futuristic styling

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 5.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 2. Soft Daylight & Volumetric Lighting
    const ambientLight = new THREE.AmbientLight(0xf0fdf4, 1.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.2);
    sunLight.position.set(4, 8, 4);
    scene.add(sunLight);

    // Soft cyan & emerald bounce lights
    const cyanLight = new THREE.PointLight(0x06b6d4, 2.0, 10);
    cyanLight.position.set(-2, 2.5, 1);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 1.8, 8);
    emeraldLight.position.set(2.2, 1.8, 1);
    scene.add(emeraldLight);

    // 3. Futuristic Pedestal & Hologram Emitter Table
    const pedestalGroup = new THREE.Group();
    scene.add(pedestalGroup);

    // Hologram Base Ring
    const baseGeo = new THREE.CylinderGeometry(2.2, 2.5, 0.25, 48);
    const baseMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.6,
      thickness: 0.8,
      transparent: true,
      opacity: 0.9,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.9;
    pedestalGroup.add(baseMesh);

    // Emitter Glowing Ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.04, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const emitterRing = new THREE.Mesh(ringGeo, ringMat);
    emitterRing.rotation.x = Math.PI / 2;
    emitterRing.position.y = -0.76;
    pedestalGroup.add(emitterRing);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(12, 24, 0x0284c7, 0xe2e8f0);
    gridHelper.position.y = -0.92;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.45;
    scene.add(gridHelper);

    // 4. PowerGreen AI Humanoid Mentor (Articulated 3D Model)
    const mentorGroup = new THREE.Group();
    mentorGroup.position.set(-0.2, 0.4, 0.2);
    scene.add(mentorGroup);

    // Sleek White Ceramic Torso
    const torsoGeo = new THREE.CylinderGeometry(0.38, 0.28, 0.9, 32);
    const ceramicMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.2,
      roughness: 0.25,
    });
    const torso = new THREE.Mesh(torsoGeo, ceramicMat);
    torso.position.y = 0.2;
    mentorGroup.add(torso);

    // Chest PowerGreen AI Core Badge (Glowing Emerald Ring)
    const coreGeo = new THREE.SphereGeometry(0.09, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.set(0, 0.35, 0.35);
    mentorGroup.add(coreMesh);

    // Neck & Collar
    const neckGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.2, 24);
    const neck = new THREE.Mesh(neckGeo, ceramicMat);
    neck.position.y = 0.72;
    mentorGroup.add(neck);

    // Mentor Head Group (Rotates gently with mouse)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.95, 0);
    mentorGroup.add(headGroup);

    const headGeo = new THREE.SphereGeometry(0.3, 32, 32);
    headGeo.scale(0.85, 1.1, 0.95);
    const head = new THREE.Mesh(headGeo, ceramicMat);
    headGroup.add(head);

    // Visor / Neural Face Plate (Sleek Cyan/Teal Glow)
    const visorGeo = new THREE.SphereGeometry(0.24, 32, 16, 0, Math.PI);
    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x082f49,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.05,
      metalness: 0.9,
    });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.rotation.y = Math.PI / 2;
    visor.rotation.x = Math.PI / 2;
    visor.position.set(0, 0.02, 0.16);
    visor.scale.set(0.65, 0.3, 0.85);
    headGroup.add(visor);

    // Sleek Mentor Shoulders & Arms
    const shoulderGeo = new THREE.SphereGeometry(0.14, 24, 24);
    const leftShoulder = new THREE.Mesh(shoulderGeo, ceramicMat);
    leftShoulder.position.set(-0.48, 0.5, 0);
    mentorGroup.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, ceramicMat);
    rightShoulder.position.set(0.48, 0.5, 0);
    mentorGroup.add(rightShoulder);

    // Gesture Arm (Right arm pointing toward holographic roadmap)
    const armGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.6, 16);
    const rightArm = new THREE.Mesh(armGeo, ceramicMat);
    rightArm.position.set(0.72, 0.3, 0.3);
    rightArm.rotation.z = -Math.PI / 4.2;
    rightArm.rotation.x = -Math.PI / 6;
    mentorGroup.add(rightArm);

    // 5. Holographic Floating Displays & Roadmap Arc
    const holoGroup = new THREE.Group();
    scene.add(holoGroup);

    // Main Holographic Screen Canvas Texture
    const holoCanvas = document.createElement('canvas');
    holoCanvas.width = 512;
    holoCanvas.height = 256;
    const holoCtx = holoCanvas.getContext('2d')!;

    const drawHoloScreen = (time: number) => {
      holoCtx.clearRect(0, 0, 512, 256);

      // Glass frame outline
      holoCtx.fillStyle = 'rgba(240, 249, 255, 0.85)';
      holoCtx.fillRect(10, 10, 492, 236);

      holoCtx.strokeStyle = 'rgba(14, 165, 233, 0.6)';
      holoCtx.lineWidth = 3;
      holoCtx.strokeRect(10, 10, 492, 236);

      // Header
      holoCtx.font = 'bold 22px system-ui, sans-serif';
      holoCtx.fillStyle = '#0284c7';
      holoCtx.fillText('DATA ANALYST & GENAI ROADMAP', 30, 45);

      holoCtx.font = '14px system-ui, sans-serif';
      holoCtx.fillStyle = '#64748b';
      holoCtx.fillText('PowerGreen AI • Active Learning Matrix', 30, 70);

      // Animated Waveform / Analytics Bars
      for (let i = 0; i < 24; i++) {
        const h = Math.sin(time * 0.003 + i * 0.4) * 35 + 45;
        const grad = holoCtx.createLinearGradient(0, 180, 0, 180 - h);
        grad.addColorStop(0, '#0284c7');
        grad.addColorStop(1, '#10b981');
        holoCtx.fillStyle = grad;
        holoCtx.fillRect(35 + i * 18, 180 - h, 12, h);
      }

      // Metrics
      holoCtx.font = 'bold 15px system-ui, sans-serif';
      holoCtx.fillStyle = '#0f172a';
      holoCtx.fillText('Progress: 72%  |  AI Readiness: 98.4%', 35, 220);
    };

    const holoTexture = new THREE.CanvasTexture(holoCanvas);
    const holoScreenGeo = new THREE.PlaneGeometry(2.4, 1.2);
    const holoScreenMat = new THREE.MeshBasicMaterial({
      map: holoTexture,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });
    const holoScreenMesh = new THREE.Mesh(holoScreenGeo, holoScreenMat);
    holoScreenMesh.position.set(1.4, 1.1, 0.4);
    holoScreenMesh.rotation.y = -Math.PI / 6;
    holoGroup.add(holoScreenMesh);

    // Floating Holographic Skill Nodes: Python, SQL, Power BI, GenAI
    const nodeItems = [
      { name: 'Python', color: 0x0284c7, pos: [-1.4, 1.4, 0.6] },
      { name: 'SQL', color: 0x6366f1, pos: [-1.6, 0.5, 0.8] },
      { name: 'Power BI', color: 0xf59e0b, pos: [2.1, 1.8, -0.2] },
      { name: 'GenAI', color: 0x10b981, pos: [2.3, 0.7, 0.6] },
    ];

    const nodeMeshes: THREE.Mesh[] = [];

    nodeItems.forEach((item) => {
      const nodeGeo = new THREE.OctahedronGeometry(0.18, 2);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: item.color,
        emissive: item.color,
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.8,
        transmission: 0.4,
        transparent: true,
        opacity: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(item.pos[0], item.pos[1], item.pos[2]);
      nodeMesh.userData = { name: item.name };
      holoGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      // Glowing outer ring for each node
      const nRingGeo = new THREE.RingGeometry(0.24, 0.26, 32);
      const nRingMat = new THREE.MeshBasicMaterial({
        color: item.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const nRing = new THREE.Mesh(nRingGeo, nRingMat);
      nRing.position.copy(nodeMesh.position);
      holoGroup.add(nRing);
    });

    // 6. Floating Ambient Holographic Particles
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = Math.random() * 4 - 0.5;
      positions[i + 2] = (Math.random() - 0.5) * 6;
      scales[i / 3] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.04,
      transparent: true,
      opacity: 0.7,
      blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Mouse Parallax & Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.35;
      mouseY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const timeMs = performance.now();

      // Update holo screen canvas texture
      drawHoloScreen(timeMs);
      holoTexture.needsUpdate = true;

      // Camera smooth parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 1.5;
      camera.position.y = 1.8 + targetY * 0.8;
      camera.lookAt(0, 0.7, 0);

      // Mentor subtle breathing animation
      mentorGroup.position.y = 0.4 + Math.sin(elapsed * 1.8) * 0.035;
      headGroup.rotation.y = targetX * 0.6;
      headGroup.rotation.x = -targetY * 0.3;

      // Holographic UI gentle float
      holoScreenMesh.position.y = 1.1 + Math.sin(elapsed * 1.4) * 0.04;
      emitterRing.rotation.z = elapsed * 0.2;

      // Rotate nodes & rings
      nodeMeshes.forEach((mesh, idx) => {
        mesh.rotation.y = elapsed * 0.8 + idx;
        mesh.rotation.x = elapsed * 0.5;
        mesh.position.y += Math.sin(elapsed * 2 + idx) * 0.0015;
      });

      // Drift particles gently
      const posArray = particleGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        posArray[i] += 0.003;
        if (posArray[i] > 3.5) posArray[i] = -0.5;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden light-glass border border-slate-200/80 shadow-2xl flex items-center justify-center">
      {/* 3D WebGL Canvas Mount */}
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* Floating 2050 UI Telemetry Badges (Light Futuristic) */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md text-[11px] font-semibold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>PowerGreen AI • 2050 Mentor Active</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/70 border border-slate-200/60 shadow-sm backdrop-blur-md text-[10px] text-slate-600">
          <Activity className="w-3 h-3 text-cyan-600" />
          <span>Neural Latency: {activeTelemetry.latency}</span>
        </div>
      </div>

      {/* Top-Right Quick Indicators */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <div className="px-3 py-1.5 rounded-xl bg-white/85 border border-sky-200/80 shadow-sm backdrop-blur-md text-[11px] font-semibold text-sky-800 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified 2050 Lab</span>
        </div>
      </div>

      {/* Bottom Floating Skill Pills */}
      <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-white/85 border border-slate-200/80 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
            Modules:
          </span>
          <button 
            onClick={() => onSelectNode && onSelectNode('Python')}
            className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-semibold transition-all hover:scale-105 flex items-center gap-1"
          >
            <Terminal className="w-3 h-3 text-sky-600" />
            <span>Python</span>
          </button>
          <button 
            onClick={() => onSelectNode && onSelectNode('SQL')}
            className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-all hover:scale-105 flex items-center gap-1"
          >
            <Database className="w-3 h-3 text-indigo-600" />
            <span>SQL</span>
          </button>
          <button 
            onClick={() => onSelectNode && onSelectNode('Power BI')}
            className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold transition-all hover:scale-105 flex items-center gap-1"
          >
            <BarChart3 className="w-3 h-3 text-amber-600" />
            <span>Power BI</span>
          </button>
          <button 
            onClick={() => onSelectNode && onSelectNode('GenAI')}
            className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold transition-all hover:scale-105 flex items-center gap-1"
          >
            <Cpu className="w-3 h-3 text-emerald-600" />
            <span>GenAI</span>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <span>Realtime Telemetry 60FPS</span>
        </div>
      </div>
    </div>
  );
};
