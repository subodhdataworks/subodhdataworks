import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileText,
  Infinity as InfinityIcon,
  Layers,
  PlayCircle,
  Star,
  Users,
  Building2,
  Trophy,
  ChevronRight,
} from 'lucide-react';
import { CAREER_COURSES_12, CareerCourseItem } from '../../../data/careerCourses12';
import { isCourseUnlocked } from '../../../services/courseUnlockService';
import { MobileLoggedInHero } from './MobileLoggedInHero';

/**
 * Viewport-aware inline looping course video with poster thumbnail fallback.
 * - Plays automatically when card is visible in viewport.
 * - Pauses when scrolled out of view to save battery/CPU on mobile.
 * - Resumes automatically when scrolled back into view.
 * - Keeps original thumbnail underneath so there is never a black screen or layout shift.
 */
const MobileCourseThumbnailVideo: React.FC<{
  video?: string;
  poster: string;
  alt: string;
}> = ({ video, poster, alt }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    const container = containerRef.current;
    if (!vid || !container || !video || videoFailed) return;

    // Force muted + inline attributes for Android Chrome & iOS Safari autoplay compliance
    vid.muted = true;
    vid.defaultMuted = true;
    vid.playsInline = true;
    vid.setAttribute('muted', '');
    vid.setAttribute('playsinline', '');
    vid.setAttribute('webkit-playsinline', 'true');

    let isVisible = false;

    const tryPlay = () => {
      if (!vid || videoFailed) return;
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // If browser blocks autoplay until first touch, keep poster visible
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.15;
          if (isVisible) {
            tryPlay();
          } else {
            try {
              vid.pause();
            } catch {
              // ignore
            }
          }
        }
      },
      { threshold: [0, 0.15, 0.5] }
    );

    observer.observe(container);

    // Retry playback on page visibility restore or first user touch if visible
    const handleVisibilityOrTouch = () => {
      if (document.visibilityState === 'visible' && isVisible && vid.paused) {
        tryPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityOrTouch);
    window.addEventListener('touchstart', handleVisibilityOrTouch, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityOrTouch);
      window.removeEventListener('touchstart', handleVisibilityOrTouch);
    };
  }, [video, videoFailed]);

  return (
    <div
      ref={containerRef}
      className="relative w-[102px] min-[400px]:w-[114px] h-[86px] shrink-0 rounded-xl overflow-hidden bg-slate-100 select-none"
    >
      {/* Static course thumbnail always rendered underneath to prevent black frames or layout shift */}
      <img
        src={poster}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
        draggable={false}
      />

      {video && !videoFailed && (
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};

/**
 * Mobile-only (below md) compact app-style dashboard content.
 * Renders BELOW the existing header. Uses the same shared course source
 * (CAREER_COURSES_12) and enrollment service (isCourseUnlocked) as desktop.
 */
export interface MobileCompactDashboardProps {
  onCourseClick: (course: CareerCourseItem) => void;
  onOpenMyCourses: () => void;
  onOpenCodingPractice: () => void;
  onOpenMockInterview: () => void;
  onOpenJobSupport: () => void;
  playClick?: () => void;
}

const INITIAL_VISIBLE = 7;

export const MobileCompactDashboard: React.FC<MobileCompactDashboardProps> = ({
  onCourseClick,
  onOpenMyCourses,
  onOpenCodingPractice,
  onOpenMockInterview,
  onOpenJobSupport,
  playClick,
}) => {
  const [showAll, setShowAll] = useState(false);
  const courses = CAREER_COURSES_12;
  const visible = showAll ? courses : courses.slice(0, INITIAL_VISIBLE);

  const scrollToCourses = () => {
    document.getElementById('mobile-courses-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="md:hidden px-3 pt-2 pb-4 font-sans text-left max-w-md mx-auto">
      {/* ─── 1. COMPACT ANIMATED HERO (logged-in mobile only) ─── */}
      <MobileLoggedInHero onContinueLearning={onOpenMyCourses} playClick={playClick} />

      {/* ─── 2. TRUST STATS (same figures as the public homepage) ─── */}
      <section className="mt-2.5 grid grid-cols-4 gap-1.5">
        {[
          { icon: <Users className="w-3.5 h-3.5" />, cls: 'bg-purple-50 text-purple-600', v: '100K+', l: 'Students' },
          { icon: <Building2 className="w-3.5 h-3.5" />, cls: 'bg-pink-50 text-pink-600', v: '700+', l: 'Hiring Partners' },
          { icon: <Trophy className="w-3.5 h-3.5" />, cls: 'bg-amber-50 text-amber-500', v: '99%', l: 'Placement Support' },
          { icon: <Star className="w-3.5 h-3.5" />, cls: 'bg-yellow-50 text-yellow-500', v: 'Industry', l: 'Aligned Curriculum' },
        ].map((s) => (
          <div
            key={s.l}
            className="min-w-0 flex items-center gap-1 rounded-xl bg-white border border-[#e3ecfb] px-1.5 py-1.5 shadow-[0_2px_8px_rgba(30,80,180,0.05)]"
          >
            <span className={`w-6 h-6 shrink-0 rounded-lg flex items-center justify-center ${s.cls}`}>{s.icon}</span>
            <span className="min-w-0">
              <span className="block text-[11px] min-[400px]:text-[12px] font-black text-[#0b1a3a] leading-none tracking-tight truncate">{s.v}</span>
              <span className="block mt-0.5 text-[8px] min-[400px]:text-[8.5px] font-semibold text-slate-500 leading-[1.15]">{s.l}</span>
            </span>
          </div>
        ))}
      </section>

      {/* ─── 3. HIRING PARTNERS STRIP ─── */}
      <button
        type="button"
        onClick={() => {
          playClick?.();
          onOpenJobSupport();
        }}
        className="mt-2 w-full flex items-center gap-2 rounded-xl bg-white border border-[#e3ecfb] px-2.5 py-2 shadow-[0_2px_8px_rgba(30,80,180,0.05)] active:scale-[0.99] transition-transform text-left"
      >
        <span className="w-2 h-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="shrink-0 text-[11px] font-extrabold text-[#0b1a3a]">Our Hiring Partners</span>
        <span className="shrink-0 w-px h-4 bg-slate-200" />
        <span className="min-w-0 truncate text-[10px] font-semibold text-slate-500">and 700+ more…</span>
        <span className="ml-auto flex items-center gap-2 shrink-0">
          <img src="/images/companies/tcs.svg" alt="TCS" className="h-[18px] w-auto object-contain" loading="lazy" />
          <img src="/images/companies/infosys.svg" alt="Infosys" className="h-[18px] w-auto object-contain" loading="lazy" />
          <img src="/images/companies/wipro.svg" alt="Wipro" className="h-[18px] w-auto object-contain max-[370px]:hidden" loading="lazy" />
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </span>
      </button>

      {/* ─── 3. COURSES (LIVE COUNT + HORIZONTAL CARDS WITH AUTOPLAY LOOPING VIDEOS) ─── */}
      <section id="mobile-courses-list" className="mt-4 scroll-mt-20">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-8 h-8 shrink-0 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Layers className="w-4 h-4 text-blue-600" />
            </span>
            <div className="min-w-0">
              <h2 className="text-[14px] min-[400px]:text-[15px] font-extrabold text-[#0b1a3a] leading-tight whitespace-nowrap">
                {courses.length} High-Paying Industry Courses
              </h2>
              <p className="text-[10.5px] text-slate-500 leading-tight truncate">Job-Ready Skills for a Brighter Tomorrow</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              if (courses.length > INITIAL_VISIBLE) {
                setShowAll((v) => !v);
              } else {
                scrollToCourses();
              }
            }}
            className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-blue-200 bg-white text-blue-600 text-[10.5px] font-bold active:scale-95 shadow-2xs"
          >
            {courses.length > INITIAL_VISIBLE && showAll ? 'Show Less' : 'All Courses'} <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex flex-col gap-2.5">
          {visible.map((c) => {
            const enrolled = isCourseUnlocked(c.id);
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => onCourseClick(c)}
                className="w-full flex items-stretch gap-2.5 p-2 rounded-2xl bg-white border border-[#e3ecfb] shadow-[0_3px_14px_rgba(30,80,180,0.06)] text-left active:scale-[0.99] transition-transform"
              >
                <MobileCourseThumbnailVideo
                  video={c.video}
                  poster={c.holoImage || c.image}
                  alt={c.title}
                />
                <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
                  <h3 className="text-[13.5px] font-extrabold text-[#1a5fe0] leading-tight line-clamp-1">{c.title}</h3>
                  <p className="mt-0.5 text-[11px] text-slate-600 leading-snug line-clamp-2">{c.shortDesc}</p>
                  <div className="mt-1 flex items-center gap-1 overflow-hidden">
                    {c.tools.slice(0, 4).map((t) => (
                      <span key={t.name} className="shrink-0 px-1.5 py-0.5 rounded-md bg-violet-50 border border-violet-100 text-violet-700 text-[9.5px] font-semibold">
                        {t.name}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    {enrolled ? (
                      <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-600">
                        <CheckCircle2 className="w-3 h-3" /> Enrolled
                      </span>
                    ) : (
                      <span className="text-[11px] font-black text-[#0b1a3a]">{c.price}</span>
                    )}
                    {c.salary && <span className="text-[10px] text-slate-400 truncate">• {c.salary}</span>}
                  </div>
                </div>
                <span className="self-center shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#1a6bff] to-[#0b5cf0] text-white flex items-center justify-center shadow-[0_4px_10px_rgba(26,107,255,0.35)]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
