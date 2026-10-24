import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  Play,
  FileText,
  Mic,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Zap,
  Volume2,
  VolumeX,
} from 'lucide-react';

export interface CourseLessonVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
  courseTitle?: string;
  moduleTitle?: string;
  videoSrc?: string;
  duration?: string;
  onOpenMcq?: () => void;
  onOpenInterview?: () => void;
}

export const CourseLessonVideoModal: React.FC<CourseLessonVideoModalProps> = ({
  isOpen,
  onClose,
  lessonTitle,
  courseTitle = 'Data Analyst with GenAI',
  moduleTitle = 'Module 1: Understanding Data and Analytics',
  videoSrc = '/videos/data_analyst_genai_v2.mp4',
  duration = '8:00',
  onOpenMcq,
  onOpenInterview,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'video' | 'mcq' | 'interview'>('video');
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [videoError, setVideoError] = useState<boolean>(false);

  // Keyboard shortcut: Escape closes modal, Space toggles play/pause
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when opened with a new video
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setActiveTab('video');
      setVideoError(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.playbackRate = playbackSpeed;
        videoRef.current.play().catch(() => {
          // Autoplay policy might pause with audio; keep it ready
          setIsPlaying(false);
        });
      }
    }
  }, [isOpen, lessonTitle, videoSrc]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const changeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#070e1e] rounded-3xl overflow-hidden border border-cyan-500/35 shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ─── 1. TOP HEADER / BREADCRUMB BAR ─── */}
        <div className="px-5 py-3.5 bg-slate-900/90 border-b border-cyan-500/20 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
            <div className="min-w-0 flex items-center gap-1.5 text-xs text-slate-300">
              <span className="font-extrabold text-cyan-300 truncate">{courseTitle}</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-400 font-medium hidden sm:inline truncate">{moduleTitle}</span>
            </div>
          </div>

          {/* Quick Core Activity Switcher: Video, MCQ, Mock Interview */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm shadow-cyan-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Video</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onOpenMcq) onOpenMcq();
                else setActiveTab('mcq');
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'mcq'
                  ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>MCQ</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (onOpenInterview) onOpenInterview();
                else setActiveTab('interview');
              }}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'interview'
                  ? 'bg-pink-600 text-white shadow-sm shadow-pink-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Mic className="w-3 h-3" />
              <span>Mock Interview</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="ml-2 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Close Player (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── 2. MAIN MEDIA AREA ─── */}
        <div className="relative flex-1 bg-black overflow-hidden flex flex-col items-center justify-center">
          {activeTab === 'video' ? (
            <div className="relative w-full aspect-video max-h-[68vh] bg-black flex items-center justify-center group">
              <video
                ref={videoRef}
                src={videoSrc}
                poster="/images/data_analyst_light_banner.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => {
                  setVideoError(true);
                  if (videoRef.current && videoSrc !== '/videos/data_analyst_genai_v2.mp4') {
                    videoRef.current.src = '/videos/data_analyst_genai_v2.mp4';
                    videoRef.current.play().catch(() => {});
                  }
                }}
              />

              {videoError && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-amber-500/80 text-white text-[11px] font-bold backdrop-blur-md">
                  Playing Fallback Studio Stream
                </div>
              )}
            </div>
          ) : activeTab === 'mcq' ? (
            <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center justify-center mx-auto shadow-lg shadow-purple-500/30">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white">{lessonTitle} — MCQ Quiz</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Test your mastery of this concept with 5 curated corporate assessment questions.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (onOpenMcq) onOpenMcq();
                  else setActiveTab('video');
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-sm shadow-lg shadow-purple-600/30 active:scale-95 transition-all"
              >
                Launch MCQ Quiz Arena →
              </button>
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center max-w-xl mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-300 border border-pink-500/40 flex items-center justify-center mx-auto shadow-lg shadow-pink-500/30">
                <Mic className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-white">{lessonTitle} — AI Mock Interview</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Practice answering real interview questions about <strong className="text-pink-300">{lessonTitle}</strong> with our AI Avatar Mentor.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (onOpenInterview) onOpenInterview();
                  else setActiveTab('video');
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white font-extrabold text-sm shadow-lg shadow-pink-600/30 active:scale-95 transition-all"
              >
                Enter AI Mock Interview Room 🎙️
              </button>
            </div>
          )}
        </div>

        {/* ─── 3. BOTTOM CONTROL / LESSON METADATA BAR ─── */}
        <div className="px-5 py-3.5 bg-slate-900 border-t border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                HD 1080p
              </span>
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                {lessonTitle}
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-medium flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Duration: {duration}</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Industry-Aligned Concept Breakdown</span>
            </p>
          </div>

          {/* Right: Quick Playback Speed + Fast MCQ trigger */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700/60 text-[11px] font-bold text-slate-300">
              {[1, 1.25, 1.5, 2].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => changeSpeed(s)}
                  className={`px-2 py-1 rounded-lg transition-colors ${
                    playbackSpeed === s ? 'bg-cyan-500 text-slate-950 font-black' : 'hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                if (onOpenMcq) onOpenMcq();
                else setActiveTab('mcq');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500/25 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Next: MCQ Quiz</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
