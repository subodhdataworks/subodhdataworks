import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';
import { CurriculumTabLike, getTopicProgressInfo } from '../../../services/topicProgressTracker';
import { StudentCharacter, CharacterAnimationState } from './StudentCharacter';

export interface CourseHorizontalTrackNavProps {
  tabs: CurriculumTabLike[];
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  getTabIconSrc?: (tabNum: number, iconName?: string) => string;
  courseKey?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// OFFICIAL TECHNOLOGY LOGOS (High-definition Crisp Vectors Matching Image)
// ─────────────────────────────────────────────────────────────────────────────

const OfficialPythonLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 110 110" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M54.5 4C27.2 4 28.7 15.8 28.7 15.8L28.8 28.2H55.4V32.1H18.2C18.2 32.1 4 30.3 4 57.7C4 85 16.4 83.7 16.4 83.7H23.7V73.4C23.7 73.4 23.2 61 35.8 61H62.7C62.7 61 74.3 61.3 74.3 50.1V15.8C74.3 15.8 76.5 4 54.5 4ZM40.9 12.3C44.4 12.3 47.2 15.1 47.2 18.6C47.2 22.1 44.4 24.9 40.9 24.9C37.4 24.9 34.6 22.1 34.6 18.6C34.6 15.1 37.4 12.3 40.9 12.3Z"
      fill="#387EB8"
    />
    <path
      d="M55.5 106C82.8 106 81.3 94.2 81.3 94.2L81.2 81.8H54.6V77.9H91.8C91.8 77.9 106 79.7 106 52.3C106 25 93.6 26.3 93.6 26.3H86.3V36.6C86.3 36.6 86.8 49 74.2 49H47.3C47.3 49 35.7 48.7 35.7 59.9V94.2C35.7 94.2 33.5 106 55.5 106ZM69.1 97.7C65.6 97.7 62.8 94.9 62.8 91.4C62.8 87.9 65.6 85.1 69.1 85.1C72.6 85.1 75.4 87.9 75.4 91.4C75.4 94.9 72.6 97.7 69.1 97.7Z"
      fill="#FFE052"
    />
  </svg>
);

const OfficialExcelLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="4" width="22" height="24" rx="3" fill="#107C41" />
    <path d="M14 9H25V14H14V9Z" fill="#185C37" opacity="0.6" />
    <path d="M14 15H25V20H14V15Z" fill="#185C37" opacity="0.6" />
    <path d="M14 21H25V26H14V21Z" fill="#185C37" opacity="0.6" />
    <rect x="3" y="7" width="14" height="18" rx="2.5" fill="#185C37" />
    <path
      d="M6.5 12L9 16L6.5 20H8.5L10 17.2L11.5 20H13.5L11 16L13.5 12H11.5L10 14.8L8.5 12H6.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

const OfficialPowerBiLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="17" width="5.5" height="11" rx="1.5" fill="#E6AD10" />
    <rect x="13.25" y="11" width="5.5" height="17" rx="1.5" fill="#F2C811" />
    <rect x="21.5" y="5" width="5.5" height="23" rx="1.5" fill="#F9DE59" />
  </svg>
);

const OfficialSqlDatabaseLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#2563EB" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="#DBEAFE" />
    <path d="M3 5V12C3 13.66 7.03 15 12 15C16.97 15 21 13.66 21 12V5" />
    <path d="M3 12V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V12" />
  </svg>
);

const OfficialGenAiLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0284C7" />
    <path
      d="M12 5L13.8 9.5L18.5 11.2L13.8 13L12 17.5L10.2 13L5.5 11.2L10.2 9.5L12 5Z"
      fill="#FFFFFF"
    />
    <circle cx="6" cy="18" r="1.5" fill="#38BDF8" />
    <circle cx="18" cy="6" r="1.5" fill="#38BDF8" />
  </svg>
);

const OfficialTargetLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#EF4444" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="#DC2626" fill="#FEE2E2" />
    <circle cx="12" cy="12" r="6" stroke="#EF4444" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="2.5" fill="#DC2626" stroke="none" />
  </svg>
);

const OfficialAnalyticsLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" stroke="#0284C7" fill="#E0F2FE" />
    <circle cx="12" cy="12" r="4.5" stroke="#0284C7" />
    <circle cx="12" cy="12" r="1.5" fill="#0284C7" stroke="none" />
  </svg>
);

const OfficialTrophyLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 4H18V9C18 12.31 15.31 15 12 15C8.69 15 6 12.31 6 9V4Z"
      fill="#F59E0B"
      stroke="#D97706"
      strokeWidth="1.5"
    />
    <path
      d="M6 6H3C2.45 6 2 6.45 2 7C2 9.5 3.8 11.5 6.2 11.9M18 6H21C21.55 6 22 6.45 22 7C22 9.5 20.2 11.5 17.8 11.9"
      stroke="#D97706"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M12 15V19M8 21H16" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE MAPS STYLE LOCATION PIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface GoogleMapsPinProps {
  color: string;
  isPulse?: boolean;
  className?: string;
}

const GoogleMapsPin: React.FC<GoogleMapsPinProps> = ({
  color,
  isPulse = false,
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      <svg
        width="22"
        height="32"
        viewBox="0 0 24 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.22)]"
      >
        <path
          d="M 12 0 C 5.37 0 0 5.37 0 12 C 0 21 11.2 33 11.25 33.5 C 11.62 33.9 12.38 33.9 12.75 33.5 C 12.8 33 24 21 24 12 C 24 5.37 18.63 0 12 0 Z"
          fill={color}
        />
        <circle cx="12" cy="11.5" r="4.8" fill="#FFFFFF" />
        <circle cx="12" cy="11.5" r="2.2" fill={color} opacity="0.9" />
      </svg>

      {/* Pulse Ripple Effect for the Selected Pin */}
      {isPulse && (
        <span
          className="absolute -bottom-1 w-3.5 h-1.5 rounded-full animate-ping opacity-75 pointer-events-none"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN INTERACTIVE CAREER JOURNEY ROADMAP COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export const CourseHorizontalTrackNav: React.FC<CourseHorizontalTrackNavProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  courseKey = 'data_analyst',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const trackInnerRef = useRef<HTMLDivElement | null>(null);
  const roadPathRef = useRef<SVGPathElement | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Student character motion physics states
  const [characterPos, setCharacterPos] = useState<{ x: number; y: number }>({ x: 60, y: 35 });
  const [characterState, setCharacterState] = useState<CharacterAnimationState>('idle');
  const [characterDirection, setCharacterDirection] = useState<1 | -1>(1);
  const [isJobSelected, setIsJobSelected] = useState(false);

  // Path distance tracking
  const currentPathDistRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);
  const milestoneDistsRef = useRef<Record<string, number>>({});
  const [roadSvgPathD, setRoadSvgPathD] = useState<string>('');
  const [waypointNodes, setWaypointNodes] = useState<Array<{ x: number; y: number }>>([]);
  const [trackWidth, setTrackWidth] = useState<number>(1400);

  // Milestones sequence: Dynamic course tabs + Final "Job" Destination
  const allMilestones = useMemo(() => {
    return [
      ...tabs.map((t) => ({
        id: t.id,
        title: t.title,
        shortTitle: t.shortTitle,
        tabNum: t.tabNum,
        iconName: t.iconName,
        isJob: false,
        chapters: t.chapters,
      })),
      {
        id: 'job-destination',
        title: 'Placement & Job Readiness',
        shortTitle: 'Job',
        tabNum: tabs.length + 1,
        iconName: 'job',
        isJob: true,
        chapters: [],
      },
    ];
  }, [tabs]);

  // Compute completed status for each milestone
  const milestoneStatusMap = useMemo(() => {
    const map: Record<string, 'selected' | 'completed' | 'upcoming'> = {};
    const activeIdx = allMilestones.findIndex((m) => m.id === activeTabId);

    allMilestones.forEach((m, idx) => {
      if (m.isJob) {
        map[m.id] = isJobSelected ? 'selected' : 'upcoming';
        return;
      }

      if (m.id === activeTabId && !isJobSelected) {
        map[m.id] = 'selected';
        return;
      }

      // Check actual curriculum progress for this track
      let isAllCompleted = false;
      if (m.chapters && m.chapters.length > 0) {
        let total = 0;
        let done = 0;
        for (const ch of m.chapters) {
          for (let tIdx = 0; tIdx < ch.topics.length; tIdx++) {
            total++;
            const t = ch.topics[tIdx];
            const p = getTopicProgressInfo(m.id, t.id, t.topicNum || tIdx + 1, courseKey);
            if (p.isCompleted) done++;
          }
        }
        isAllCompleted = total > 0 && done === total;
      }

      // First milestone (Foundations) or prior tabs completed
      if (isAllCompleted || (activeIdx >= 0 && idx < activeIdx) || idx === 0) {
        map[m.id] = 'completed';
      } else {
        map[m.id] = 'upcoming';
      }
    });

    return map;
  }, [allMilestones, activeTabId, isJobSelected, courseKey]);

  // Scroll arrows state
  const updateScrollArrows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  // Measure card coordinates and build continuous grey road SVG path with waypoint nodes
  const measureRoadAndMilestones = useCallback(() => {
    const container = trackInnerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const width = Math.max(containerRect.width, container.scrollWidth, 1100);
    setTrackWidth(width);

    // Coordinates of each milestone center
    const cardCenters: Array<{ id: string; x: number; y: number }> = [];

    allMilestones.forEach((m) => {
      const el = cardRefs.current[m.id];
      if (el) {
        const cRect = el.getBoundingClientRect();
        const cX = cRect.left - containerRect.left + cRect.width / 2;
        // Road centerline runs through the middle of the cards (y ≈ 56px)
        const cY = 56;
        cardCenters.push({ id: m.id, x: cX, y: cY });
      }
    });

    if (cardCenters.length < 2) return;

    // Build continuous grey road running through the destinations
    let pathD = `M ${Math.max(12, cardCenters[0].x - 50)} 56`;

    const nodes: Array<{ x: number; y: number }> = [];

    for (let i = 0; i < cardCenters.length; i++) {
      const curr = cardCenters[i];
      if (i === 0) {
        pathD += ` L ${curr.x} ${curr.y}`;
      } else {
        const prev = cardCenters[i - 1];
        const midX = (prev.x + curr.x) / 2;
        // Waypoint ring node in the road between consecutive milestones
        nodes.push({ x: midX, y: 56 });
        pathD += ` L ${curr.x} ${curr.y}`;
      }
    }

    const last = cardCenters[cardCenters.length - 1];
    pathD += ` L ${last.x + 55} 56`;

    setRoadSvgPathD(pathD);
    setWaypointNodes(nodes);

    // Measure exact path lengths at each milestone center
    requestAnimationFrame(() => {
      const pathEl = roadPathRef.current;
      if (!pathEl) return;

      const totalLen = pathEl.getTotalLength();
      if (totalLen <= 0) return;

      const dists: Record<string, number> = {};
      cardCenters.forEach((p) => {
        let bestDist = 0;
        let bestDiff = Infinity;
        const samples = 100;
        for (let s = 0; s <= samples; s++) {
          const l = (s / samples) * totalLen;
          const pt = pathEl.getPointAtLength(l);
          const diff = Math.hypot(pt.x - p.x, pt.y - p.y);
          if (diff < bestDiff) {
            bestDiff = diff;
            bestDist = l;
          }
        }
        dists[p.id] = bestDist;
      });

      milestoneDistsRef.current = dists;

      // Position character at current active milestone if not yet placed
      const targetId = isJobSelected ? 'job-destination' : activeTabId;
      const targetDist = dists[targetId] ?? dists[allMilestones[0].id] ?? 30;

      if (currentPathDistRef.current === 0) {
        currentPathDistRef.current = targetDist;
        const pt = pathEl.getPointAtLength(targetDist);
        // Student character stands on top of the card/road
        setCharacterPos({ x: pt.x, y: 38 });
      }
    });
  }, [allMilestones, activeTabId, isJobSelected]);

  useEffect(() => {
    measureRoadAndMilestones();
    window.addEventListener('resize', measureRoadAndMilestones);
    const ro = new ResizeObserver(() => {
      measureRoadAndMilestones();
      updateScrollArrows();
    });
    if (trackInnerRef.current) ro.observe(trackInnerRef.current);
    return () => {
      window.removeEventListener('resize', measureRoadAndMilestones);
      ro.disconnect();
    };
  }, [measureRoadAndMilestones, updateScrollArrows]);

  // ───────────────────────────────────────────────────────────────────────────
  // INTERACTIVE WALKING PHYSICS ENGINE (requestAnimationFrame Path Following)
  // ───────────────────────────────────────────────────────────────────────────

  const moveCharacterToMilestone = useCallback(
    (targetMilestoneId: string) => {
      const pathEl = roadPathRef.current;
      if (!pathEl) return;

      const totalLen = pathEl.getTotalLength();
      if (totalLen <= 0) return;

      const targetDist = milestoneDistsRef.current[targetMilestoneId];
      if (targetDist === undefined) return;

      const startDist = currentPathDistRef.current;
      const distDelta = targetDist - startDist;

      if (Math.abs(distDelta) < 2) {
        if (targetMilestoneId === 'job-destination') {
          setCharacterState('celebrate');
        } else {
          setCharacterState('arrival');
          setTimeout(() => setCharacterState('idle'), 600);
        }
        return;
      }

      // Cancel any ongoing animation frame (smooth redirection on rapid clicks)
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }

      // Direction: 1 = facing right (forward), -1 = facing left (backward)
      const dir: 1 | -1 = distDelta > 0 ? 1 : -1;
      setCharacterDirection(dir);
      setCharacterState('walking');

      // Dynamic duration: adjacent ~750ms, longer distances scaled up to 2.2s max
      const distanceRatio = Math.abs(distDelta) / (totalLen || 1000);
      const duration = Math.min(2200, Math.max(680, distanceRatio * 2600));

      const startTime = performance.now();

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        currentPathDistRef.current = targetDist;
        const pt = pathEl.getPointAtLength(targetDist);
        setCharacterPos({ x: pt.x, y: 38 });
        setCharacterState(targetMilestoneId === 'job-destination' ? 'celebrate' : 'idle');
        return;
      }

      const animateStep = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);

        // Smooth cubic ease-in-out easing
        const ease =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        const currentDist = startDist + distDelta * ease;
        currentPathDistRef.current = currentDist;

        const pt = pathEl.getPointAtLength(currentDist);
        setCharacterPos({ x: pt.x, y: 38 });

        if (progress < 1) {
          animFrameIdRef.current = requestAnimationFrame(animateStep);
        } else {
          currentPathDistRef.current = targetDist;
          const finalPt = pathEl.getPointAtLength(targetDist);
          setCharacterPos({ x: finalPt.x, y: 38 });

          if (targetMilestoneId === 'job-destination') {
            setCharacterState('celebrate');
          } else {
            setCharacterState('arrival');
            setTimeout(() => {
              setCharacterState('idle');
            }, 650);
          }
          animFrameIdRef.current = null;
        }
      };

      animFrameIdRef.current = requestAnimationFrame(animateStep);
    },
    []
  );

  useEffect(() => {
    if (!isJobSelected) {
      moveCharacterToMilestone(activeTabId);
    }
  }, [activeTabId, isJobSelected, moveCharacterToMilestone]);

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Smoothly center active milestone in viewport
  useEffect(() => {
    const targetId = isJobSelected ? 'job-destination' : activeTabId;
    const el = cardRefs.current[targetId];
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
    const timer = window.setTimeout(updateScrollArrows, 320);
    return () => window.clearTimeout(timer);
  }, [activeTabId, isJobSelected, updateScrollArrows]);

  const scrollByAmount = (delta: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    if (e.shiftKey && el.scrollWidth > el.clientWidth) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  const handleMilestoneClick = (milestoneId: string, isJob: boolean) => {
    if (isJob) {
      if (isJobSelected) {
        if (typeof window !== 'undefined') {
          window.location.hash = '#placement';
        }
        return;
      }
      setIsJobSelected(true);
      moveCharacterToMilestone('job-destination');
      return;
    }

    setIsJobSelected(false);
    onSelectTab(milestoneId);
    moveCharacterToMilestone(milestoneId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' && idx < allMilestones.length - 1) {
      e.preventDefault();
      const next = allMilestones[idx + 1];
      handleMilestoneClick(next.id, next.isJob);
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      e.preventDefault();
      const prev = allMilestones[idx - 1];
      handleMilestoneClick(prev.id, prev.isJob);
    }
  };

  const renderOfficialIcon = (tabNum: number, iconName?: string, title?: string) => {
    const norm = (iconName || title || '').toLowerCase();

    if (norm.includes('python')) return <OfficialPythonLogo className="w-5 h-5" />;
    if (norm.includes('excel')) return <OfficialExcelLogo className="w-5 h-5" />;
    if (norm.includes('sql') || norm.includes('data')) return <OfficialSqlDatabaseLogo className="w-5 h-5" />;
    if (norm.includes('powerbi') || norm.includes('dashboard')) return <OfficialPowerBiLogo className="w-5 h-5" />;
    if (norm.includes('genai') || norm.includes('ai') || norm.includes('gpt')) return <OfficialGenAiLogo className="w-5 h-5" />;
    if (norm.includes('insight') || norm.includes('chart') || norm.includes('analytics')) return <OfficialAnalyticsLogo className="w-5 h-5" />;
    if (norm.includes('project') || norm.includes('capstone') || norm.includes('trophy')) return <OfficialTrophyLogo className="w-5 h-5" />;
    if (norm.includes('job') || norm.includes('placement')) return <Briefcase className="w-4 h-4 text-white stroke-[2.3]" />;

    switch (tabNum) {
      case 1:
        return <OfficialTargetLogo className="w-5 h-5" />;
      case 2:
        return <OfficialPythonLogo className="w-5 h-5" />;
      case 3:
        return <OfficialExcelLogo className="w-5 h-5" />;
      case 4:
        return <OfficialSqlDatabaseLogo className="w-5 h-5" />;
      case 5:
        return <OfficialPowerBiLogo className="w-5 h-5" />;
      case 6:
        return <OfficialGenAiLogo className="w-5 h-5" />;
      case 7:
        return <OfficialAnalyticsLogo className="w-5 h-5" />;
      case 8:
        return <OfficialTrophyLogo className="w-5 h-5" />;
      default:
        return <OfficialTargetLogo className="w-5 h-5" />;
    }
  };

  return (
    <div
      id="curriculum-tabs-map"
      className="relative w-full group/tracknav bg-transparent py-1 select-none"
    >
      {/* Scroll Left Button */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByAmount(-280)}
          aria-label="Scroll learning roadmap left"
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-purple-50 text-purple-700 border border-purple-200 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      {/* Horizontal Scroll Area */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollArrows}
        onWheel={handleWheel}
        role="tablist"
        aria-label="Interactive Career Journey Roadmap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden pt-8 pb-3 px-1 relative"
      >
        <div
          ref={trackInnerRef}
          className="relative flex items-center justify-between min-w-max mx-auto px-4"
          style={{ width: `${trackWidth}px`, height: '76px' }}
        >
          {/* ───────────────────────────────────────────────────────────────────
              CONTINUOUS PREMIUM GREY ROAD SVG (Running behind the cards)
              ─────────────────────────────────────────────────────────────────── */}
          {roadSvgPathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0"
              style={{ width: `${trackWidth}px`, height: '76px' }}
              aria-hidden="true"
            >
              <defs>
                <filter id="greyRoadShadow" x="-10%" y="-20%" width="120%" height="160%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* 1. Road Border / Shoulder: #D1D5DB */}
              <path
                d={roadSvgPathD}
                stroke="#D1D5DB"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#greyRoadShadow)"
              />

              {/* 2. Premium Grey Road Surface: #9CA3AF */}
              <path
                ref={roadPathRef}
                d={roadSvgPathD}
                stroke="#9CA3AF"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />

              {/* 3. Center Lane Markings: White Dashed Line */}
              <path
                d={roadSvgPathD}
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                opacity="0.95"
              />

              {/* Circular Waypoint Nodes on the Road between Destinations */}
              {waypointNodes.map((node, nIdx) => (
                <g key={`waypoint-${nIdx}`}>
                  <circle cx={node.x} cy={node.y} r="7" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
                  <circle cx={node.x} cy={node.y} r="3" fill="#3B82F6" opacity="0.8" />
                </g>
              ))}
            </svg>
          )}

          {/* ───────────────────────────────────────────────────────────────────
              DESTINATION MILESTONES (Cards + Google Maps Location Pins)
              ─────────────────────────────────────────────────────────────────── */}
          {allMilestones.map((m, idx) => {
            const status = milestoneStatusMap[m.id] || 'upcoming';
            const isSelected = status === 'selected';
            const isCompleted = status === 'completed';

            // Google Maps Pin Color:
            // Selected: #7C3AED (Purple) | Completed: #10B981 (Green) | Upcoming: #9CA3AF (Grey) | Job: #F59E0B (Golden)
            const pinColor = m.isJob
              ? '#F59E0B'
              : isSelected
              ? '#7C3AED'
              : isCompleted
              ? '#10B981'
              : '#9CA3AF';

            const isGreenPill = idx === 0 && !isSelected;

            return (
              <div
                key={m.id}
                ref={(el) => {
                  cardRefs.current[m.id] = el;
                }}
                className="relative z-10 flex flex-col items-center"
              >
                {/* Floating Google Maps Location Pin Directly Above Active/Selected Card */}
                {isSelected && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-bounce">
                    <GoogleMapsPin color={pinColor} isPulse={true} />
                  </div>
                )}

                {/* Destination Card Button */}
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  tabIndex={0}
                  onClick={() => handleMilestoneClick(m.id, m.isJob)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  title={m.title}
                  className={`group relative h-[42px] px-3 sm:px-3.5 rounded-full flex items-center gap-2.5 text-left transition-all duration-200 active:scale-95 cursor-pointer border focus:outline-none ${
                    m.isJob
                      ? isSelected
                        ? 'bg-[#7C3AED] text-white border-[#6D28D9] ring-2 ring-amber-400 shadow-[0_4px_16px_rgba(124,58,237,0.35)]'
                        : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-transparent shadow-md'
                      : isGreenPill
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-md'
                      : isSelected
                      ? 'bg-white text-[#7C3AED] border-[#7C3AED] ring-2 ring-[#7C3AED]/35 shadow-[0_4px_16px_rgba(124,58,237,0.22)]'
                      : isCompleted
                      ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-sm'
                  }`}
                >
                  {/* Icon Container */}
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    {renderOfficialIcon(m.tabNum, m.iconName, m.title)}
                  </div>

                  {/* Destination Name */}
                  <span
                    className={`text-[13px] sm:text-[13.5px] font-bold truncate leading-tight tracking-tight ${
                      m.isJob
                        ? 'text-white'
                        : isGreenPill
                        ? 'text-white'
                        : isSelected
                        ? 'text-[#7C3AED]'
                        : 'text-slate-800'
                    }`}
                  >
                    {m.shortTitle}
                  </span>

                  {/* Active Purple Dot */}
                  {isSelected && !m.isJob && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                  )}
                </button>
              </div>
            );
          })}

          {/* ───────────────────────────────────────────────────────────────────
              ANIMATED STUDENT CHARACTER (Walking on top of the active destination)
              ─────────────────────────────────────────────────────────────────── */}
          <div
            className="absolute z-20 pointer-events-none transition-none"
            style={{
              left: `${characterPos.x}px`,
              top: `${characterPos.y}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <StudentCharacter
              state={characterState}
              direction={characterDirection}
              isJobCelebration={isJobSelected}
            />
          </div>
        </div>
      </div>

      {/* Scroll Right Button */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByAmount(280)}
          aria-label="Scroll learning roadmap right"
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-white/95 hover:bg-purple-50 text-purple-700 border border-purple-200 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};

export default CourseHorizontalTrackNav;
