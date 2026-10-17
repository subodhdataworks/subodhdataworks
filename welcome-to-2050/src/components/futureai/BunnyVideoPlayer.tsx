import React, { useState } from 'react';
import { getBunnyEmbedUrl, BUNNY_STREAM_CONFIG } from '../../services/bunnyVideoService';
import { Play, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export interface BunnyVideoPlayerProps {
  /** Bunny.net Video ID / GUID (e.g. 'e430d89e-2144-4cb0-a23a-fca471889812') */
  videoId?: string;
  /** Optional Bunny Video Library ID if different from global config */
  libraryId?: string;
  /** Optional direct embed URL if provided directly */
  embedUrl?: string;
  /** Video Title for accessibility and iframe title */
  title?: string;
  /** Poster thumbnail image */
  poster?: string;
  /** Fallback local or cloud MP4 / Drive preview URL if videoId is not yet uploaded to Bunny */
  fallbackSrc?: string;
  /** Callback when video ends */
  onEnded?: () => void;
  /** Extra CSS classes */
  className?: string;
  /** Auto play video on load */
  autoPlay?: boolean;
}

export const BunnyVideoPlayer: React.FC<BunnyVideoPlayerProps> = ({
  videoId,
  libraryId,
  embedUrl,
  title = 'Course Video Lesson',
  poster,
  fallbackSrc = '/videos/what_is_programming_lesson.mp4',
  onEnded,
  className = '',
  autoPlay = true,
}) => {
  const [playerMode, setPlayerMode] = useState<'bunny' | 'fallback'>(() => {
    return (videoId && videoId.trim().length > 0) || (embedUrl && embedUrl.trim().length > 0)
      ? 'bunny'
      : 'fallback';
  });

  const resolvedEmbedUrl = embedUrl || (videoId ? getBunnyEmbedUrl(videoId, { libraryId, autoplay: autoPlay }) : '');

  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center shadow-xl ${className}`}
      style={{ minHeight: '380px' }}
    >
      {playerMode === 'bunny' && resolvedEmbedUrl ? (
        // Official Bunny.net Stream Embed Iframe (16:9 Responsive)
        <div className="relative w-full h-full" style={{ position: 'relative', paddingTop: '56.25%', minHeight: '100%' }}>
          <iframe
            src={resolvedEmbedUrl}
            title={title}
            loading="lazy"
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;"
            allowFullScreen
          />
        </div>
      ) : (
        // Fallback Native Video Player (for preview before uploading to Bunny)
        <video
          src={fallbackSrc}
          poster={poster || '/images/topic_learn/what_is_programming_poster.jpg'}
          controls
          autoPlay={autoPlay}
          playsInline
          className="w-full h-full object-contain"
          onEnded={onEnded}
        />
      )}

      {/* Top Floating Badge: Bunny.net Stream + Cloudflare Verified */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[10px] text-slate-300 font-medium shadow-md">
        <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
        <span>Bunny.net Stream</span>
        <span className="text-slate-500">•</span>
        <span className="text-sky-400 font-semibold">futureitindustry.com</span>
      </div>

      {/* Bottom Switcher Control (Quick test toggle between Bunny CDN & Local) */}
      {videoId && (
        <button
          type="button"
          onClick={() => setPlayerMode((prev) => (prev === 'bunny' ? 'fallback' : 'bunny'))}
          className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded bg-black/60 hover:bg-black/90 text-[10px] text-slate-400 hover:text-white transition-colors"
        >
          {playerMode === 'bunny' ? 'Switch to Local Fallback' : 'Switch to Bunny Stream'}
        </button>
      )}
    </div>
  );
};
