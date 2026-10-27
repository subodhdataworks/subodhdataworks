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
} from 'lucide-react';
import { CAREER_COURSES_12, CareerCourseItem } from '../../../data/careerCourses12';
import { isCourseUnlocked } from '../../../services/courseUnlockService';

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

  const quickActions = [
    { label: 'My Courses', icon: <PlayCircle className="w-6 h-6" />, cls: 'bg-rose-50 border-rose-100 text-rose-500', txt: 'text-rose-600', onClick: onOpenMyCourses },
    { label: 'Coding Practice', icon: <Code2 className="w-6 h-6" />, cls: 'bg-blue-50 border-blue-100 text-blue-600', txt: 'text-blue-700', onClick: onOpenCodingPractice },
    { label: 'Mock Interview', icon: <FileText className="w-6 h-6" />, cls: 'bg-emerald-50 border-emerald-100 text-emerald-600', txt: 'text-emerald-700', onClick: onOpenMockInterview },
    { label: 'Job Support', icon: <BriefcaseBusiness className="w-6 h-6" />, cls: 'bg-violet-50 border-violet-100 text-violet-600', txt: 'text-violet-700', onClick: onOpenJobSupport },
  ];

  return (
    <div className="md:hidden px-3 pt-3 pb-4 font-sans text-left">
      {/* ─── 1. COMPACT PREMIUM HERO ─── */}
      <section className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-white via-[#f4f8ff] to-[#e8f1ff] border border-[#dbe7fb] shadow-[0_6px_22px_rgba(30,80,180,0.08)]">
        <img
          src="/images/dashboard/mobile_hero_student_robot.jpg"
          alt="Student learning AI and data skills with an AI robot"
          className="absolute right-0 top-0 h-full w-[56%] object-cover object-center [mask-image:linear-gradient(to_right,transparent,black_28%)] select-none pointer-events-none"
          draggable={false}
        />
        <div className="relative z-10 p-4 pr-[40%] min-[400px]:pr-[42%]">
          <h1 className="text-[21px] min-[400px]:text-[23px] font-black leading-[1.12] tracking-tight text-[#0b1a3a]">
            Learn AI &amp;<br />Data Skills.
          </h1>
          <p className="mt-1 text-[19px] min-[400px]:text-[21px] font-black leading-tight tracking-tight bg-gradient-to-r from-[#1a6bff] to-[#7c3aed] bg-clip-text text-transparent">
            Get Job-Ready.
          </p>
          <p className="mt-0.5 text-[13px] min-[400px]:text-sm font-extrabold text-[#0b1a3a] leading-tight">
            Build Real Skills.
          </p>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              scrollToCourses();
            }}
            className="mt-3 inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-gradient-to-r from-[#1a6bff] to-[#0b5cf0] text-white text-[13px] font-bold shadow-[0_6px_16px_rgba(26,107,255,0.35)] active:scale-95 transition-transform"
          >
            Explore Courses <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <ul className="relative z-10 grid grid-cols-4 bg-white/85 backdrop-blur-sm border-t border-[#e3ecfb] py-2">
          {[
            { icon: <Briefcase className="w-4 h-4 text-amber-500" />, l1: 'Industry', l2: 'Projects' },
            { icon: <Star className="w-4 h-4 text-emerald-500" />, l1: 'Expert', l2: 'Mentors' },
            { icon: <Users className="w-4 h-4 text-blue-500" />, l1: 'Placement', l2: 'Support' },
            { icon: <InfinityIcon className="w-4 h-4 text-violet-500" />, l1: 'Lifetime', l2: 'Access' },
          ].map((f, i) => (
            <li key={f.l1} className={`flex flex-col items-center text-center gap-0.5 ${i > 0 ? 'border-l border-slate-200' : ''}`}>
              {f.icon}
              <span className="text-[10px] font-semibold text-slate-600 leading-tight">
                {f.l1}
                <br />
                {f.l2}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── 2. QUICK ACTIONS ─── */}
      <section className="mt-4">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-[16px] font-extrabold text-[#0b1a3a]">Quick Actions</h2>
          <button
            type="button"
            onClick={() => {
              playClick?.();
              scrollToCourses();
            }}
            className="inline-flex items-center gap-1 text-[12px] font-bold text-[#1a5fe0] active:scale-95 transition-transform"
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((a) => (
            <button
              key={a.label}
              type="button"
              onClick={() => {
                playClick?.();
                a.onClick();
              }}
              className={`flex flex-col items-center justify-center gap-1.5 h-[78px] rounded-2xl border ${a.cls} active:scale-95 transition-transform`}
            >
              {a.icon}
              <span className={`text-[10.5px] font-semibold leading-tight text-center px-0.5 ${a.txt}`}>{a.label}</span>
            </button>
          ))}
        </div>
      </section>

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
