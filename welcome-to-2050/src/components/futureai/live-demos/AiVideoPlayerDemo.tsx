import React, { useState, useRef } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Video,
  Sparkles,
  Settings,
  AlertCircle,
  Loader2,
  ArrowRight,
  Film,
  Mic,
  Camera,
} from 'lucide-react';
import { getLiveClassConfig, updateLiveClassConfig } from '../../../services/liveClassService';

interface VideoScenePreset {
  id: string;
  title: string;
  category: string;
  src: string;
  poster: string;
  promptUsed: string;
}

const AI_VIDEO_PRESETS: VideoScenePreset[] = [
  {
    id: 'scene-1',
    title: 'AI Commercial & Futuristic Tech Showcase',
    category: 'Product Advertisement Video',
    src: '/videos/ai_video_creator_pro.mp4',
    poster: '/images/pot10_ai_video_poster.jpg',
    promptUsed:
      'Cinematic 4K commercial showcase, realistic studio lighting, smooth orbital camera movement, synchronized AI voiceover & sound design.',
  },
  {
    id: 'scene-2',
    title: 'Autonomous AI Character & Visual Storytelling',
    category: 'Realistic AI Character & Lip Sync',
    src: '/videos/data_science_agentic_ai_course.mp4',
    poster: '/images/pot2_sharp_poster.jpg',
    promptUsed:
      'Consistent realistic AI character in modern studio, natural facial expressions, lip-sync narration, shallow depth of field 85mm lens.',
  },
  {
    id: 'scene-3',
    title: 'High-Retention Educational & YouTube Visuals',
    category: 'Educational & Social Media Reel',
    src: '/videos/data_analyst_genai_v3.mp4',
    poster: '/images/pot1_sharp_poster.jpg',
    promptUsed:
      'Dynamic educational explainer scene with motion camera pan, realistic lighting, and broadcast-ready color grading.',
  },
];

export const AiVideoPlayerDemo: React.FC<{ onEnrollClick: () => void }> = ({ onEnrollClick }) => {
  const liveCfg = getLiveClassConfig('ai_video_creation');
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const [selectedPreset, setSelectedPreset] = useState<VideoScenePreset>(() => {
    if (liveCfg.videoDemoUrl) {
      return {
        ...AI_VIDEO_PRESETS[0],
        src: liveCfg.videoDemoUrl,
      };
    }
    return AI_VIDEO_PRESETS[0];
  });

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<string | null>(null);

  // Admin-configurable video asset drawer
  const [showAdminConfig, setShowAdminConfig] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>(liveCfg.videoDemoUrl || AI_VIDEO_PRESETS[0].src);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setVideoError('Unable to play this video source. Check asset URL or permissions.'));
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleTimelineSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (v && Number.isFinite(newTime)) {
      v.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (v) {
      v.volume = newVol;
      v.muted = newVol === 0;
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    v.muted = nextMute;
  };

  const handleFullscreen = () => {
    const container = playerContainerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (container.requestFullscreen) {
      container.requestFullscreen().catch(() => {});
    }
  };

  const selectScene = (preset: VideoScenePreset) => {
    setVideoError(null);
    setIsLoading(true);
    setIsPlaying(false);
    setCurrentTime(0);
    setSelectedPreset(preset);
    setTimeout(() => {
      const v = videoRef.current;
      if (v) {
        v.load();
      }
    }, 50);
  };

  const handleSaveCustomVideoUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customUrlInput.trim();
    if (!clean) return;
    updateLiveClassConfig('ai_video_creation', { videoDemoUrl: clean });
    selectScene({
      ...selectedPreset,
      src: clean,
      title: 'Configured AI Video Demo Asset',
    });
    setShowAdminConfig(false);
  };

  const formatTime = (sec: number) => {
    if (!Number.isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] overflow-hidden">
      {/* Top Studio Header */}
      <div className="bg-slate-900 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-400/40 text-orange-400 flex items-center justify-center">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-black tracking-tight block leading-none">
              AI Realistic Video Studio Player
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              Full timeline, volume, fullscreen & scene controls
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAdminConfig(!showAdminConfig)}
            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer border border-slate-700"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Configure Video Source</span>
          </button>
        </div>
      </div>

      {/* Optional Admin-Configurable Video Source Bar */}
      {showAdminConfig && (
        <form
          onSubmit={handleSaveCustomVideoUrl}
          className="bg-slate-800 text-white px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs"
        >
          <span className="font-bold text-slate-200">
            Admin Video Asset URL (MP4 / WebM):
          </span>
          <div className="flex items-center gap-2 flex-1 max-w-xl">
            <input
              type="text"
              value={customUrlInput}
              onChange={(e) => setCustomUrlInput(e.target.value)}
              placeholder="/videos/ai_engineering_course_v2.mp4 or https://..."
              className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-600 text-white text-xs"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold cursor-pointer"
            >
              Load Video
            </button>
          </div>
        </form>
      )}

      {/* Main Player & Scene Switcher Grid */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Responsive Video Player (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-3">
          <div
            ref={playerContainerRef}
            className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-lg aspect-video group"
          >
            <video
              ref={videoRef}
              src={selectedPreset.src}
              poster={selectedPreset.poster}
              playsInline
              preload="metadata"
              onLoadStart={() => {
                setIsLoading(true);
                setVideoError(null);
              }}
              onLoadedMetadata={(e) => {
                setIsLoading(false);
                setDuration(e.currentTarget.duration || 0);
              }}
              onCanPlay={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
              onPlaying={() => {
                setIsLoading(false);
                setIsPlaying(true);
              }}
              onPause={() => setIsPlaying(false)}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              onEnded={() => setIsPlaying(false)}
              onError={() => {
                setIsLoading(false);
                setIsPlaying(false);
                setVideoError(
                  'The configured video file could not be loaded. Use the scene presets or configure a valid MP4/WebM asset URL.'
                );
              }}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Loading Spinner Overlay */}
            {isLoading && !videoError && (
              <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs flex flex-col items-center justify-center text-white gap-2 pointer-events-none">
                <Loader2 className="w-8 h-8 animate-spin text-orange-400" />
                <span className="text-xs font-bold">Loading AI Video Stream...</span>
              </div>
            )}

            {/* Error State Overlay */}
            {videoError && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center text-white space-y-3">
                <AlertCircle className="w-10 h-10 text-rose-500" />
                <p className="text-xs sm:text-sm font-bold max-w-md">{videoError}</p>
                <button
                  type="button"
                  onClick={() => selectScene(AI_VIDEO_PRESETS[0])}
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold cursor-pointer"
                >
                  Reset to Default Studio Video
                </button>
              </div>
            )}

            {/* Center Play Button Overlay when paused */}
            {!isPlaying && !videoError && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-slate-950/35 flex items-center justify-center cursor-pointer transition-opacity"
              >
                <div className="w-16 h-16 rounded-full bg-orange-600/95 hover:bg-orange-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.6)] hover:scale-105 transition-transform">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
              </div>
            )}

            {/* Bottom Custom Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent px-4 pt-6 pb-3 space-y-2">
              {/* Interactive Timeline Scrubber */}
              <div className="flex items-center gap-2.5">
                <input
                  type="range"
                  min={0}
                  max={duration > 0 ? duration : 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleTimelineSeek}
                  aria-label="Video Timeline"
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="w-8 h-8 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  {/* Volume Control */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      className="p-1.5 rounded-lg hover:bg-white/15 cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.05}
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Volume"
                      className="w-16 sm:w-20 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                  </div>

                  {/* Time Readout */}
                  <span className="text-xs font-mono text-slate-300">
                    {formatTime(currentTime)} / {formatTime(duration || 15)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-orange-500/20 border border-orange-400/40 text-orange-300 text-[10px] font-bold">
                    AI Generated Preview
                  </span>
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    aria-label="Fullscreen"
                    className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 cursor-pointer"
                    title="Toggle Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Breakdown Box */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-orange-600 block">
                Director Prompt & Workflow Used:
              </span>
              <p className="text-xs text-slate-700 font-medium">{selectedPreset.promptUsed}</p>
            </div>
          </div>
        </div>

        {/* Right: AI Video Scene Switcher & Production Highlights (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4 text-left">
          <div>
            <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 block">
              Select AI Video Demo Reel
            </span>
            <h4 className="text-base font-black text-slate-900">
              Explore What You Will Create
            </h4>
          </div>

          <div className="space-y-2.5">
            {AI_VIDEO_PRESETS.map((preset) => {
              const active = selectedPreset.id === preset.id;
              return (
                <div
                  key={preset.id}
                  onClick={() => selectScene(preset)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    active
                      ? 'bg-orange-50/80 border-orange-400 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <img
                    src={preset.poster}
                    alt={preset.title}
                    className="w-16 h-12 rounded-xl object-cover bg-slate-900 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-black text-orange-600 uppercase block">
                      {preset.category}
                    </span>
                    <h5 className="text-xs font-black text-slate-900 truncate">{preset.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Camera className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Cinematic Camera & Character Consistency</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Mic className="w-4 h-4 text-blue-600 shrink-0" />
              <span>AI Voice Generation & Realistic Lip Sync</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800">
              <Film className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ads, Reels, YouTube & Commercial Licensing</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onEnrollClick}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-orange-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Enroll Now — ₹999</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
