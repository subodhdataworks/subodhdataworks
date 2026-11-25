import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CurriculumTabLike } from '../../../services/topicProgressTracker';

export interface CourseHorizontalTrackNavProps {
  tabs: CurriculumTabLike[];
  activeTabId: string;
  onSelectTab: (tabId: string) => void;
  getTabIconSrc: (tabNum: number, iconName?: string) => string;
}

export const CourseHorizontalTrackNav: React.FC<CourseHorizontalTrackNavProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  getTabIconSrc,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const tabButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollArrows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollArrows();
    const el = scrollContainerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateScrollArrows);
    ro.observe(el);
    window.addEventListener('resize', updateScrollArrows);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateScrollArrows);
    };
  }, [tabs, updateScrollArrows]);

  // Automatically bring the active learning track smoothly into view
  useEffect(() => {
    const btn = tabButtonRefs.current[activeTabId];
    if (btn) {
      btn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
    const timer = window.setTimeout(updateScrollArrows, 320);
    return () => window.clearTimeout(timer);
  }, [activeTabId, updateScrollArrows]);

  const scrollByAmount = (delta: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    // Allow horizontal trackpad or Shift+wheel scrolling seamlessly
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    if (e.shiftKey && el.scrollWidth > el.clientWidth) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  return (
    <div id="curriculum-tabs-map" className="relative w-full group/tracknav">
      <style>{`
        @keyframes roadmapFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(220%); opacity: 0; }
        }
        @keyframes roadmapPulseRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.38); }
          50% { box-shadow: 0 0 0 5px rgba(16, 185, 129, 0); }
        }
        .roadmap-connector-flow {
          animation: roadmapFlow 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .roadmap-active-glow {
          animation: roadmapPulseRing 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle Desktop Left Arrow (only when overflowing left) */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByAmount(-280)}
          aria-label="Scroll learning tracks left"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      {/* Horizontal Scroll Container (Scrollbar Hidden, Touch & Wheel Preserved) */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollArrows}
        onWheel={handleWheel}
        role="tablist"
        aria-label="Course Learning Tracks"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden py-1.5 px-1"
      >
        <div className="flex items-center justify-center min-w-max mx-auto">
          {tabs.map((tab, idx) => {
            const activeIdx = Math.max(0, tabs.findIndex((t) => t.id === activeTabId));
            const isActive = tab.id === activeTabId;
            const isPassed = idx < activeIdx;
            const isLast = idx === tabs.length - 1;
            const isConnectorPassed = idx < activeIdx;
            const isConnectorNext = idx === activeIdx;

            return (
              <React.Fragment key={tab.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  ref={(el) => {
                    tabButtonRefs.current[tab.id] = el;
                  }}
                  onClick={() => onSelectTab(tab.id)}
                  className={`group relative py-1.5 px-2.5 sm:px-3 rounded-xl flex items-center gap-2 text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.24)] z-10'
                      : isPassed
                      ? 'bg-emerald-50/80 hover:bg-emerald-50 text-emerald-950 border-emerald-200/90 shadow-2xs'
                      : 'bg-white hover:bg-emerald-50/45 text-[#1E293B] border-[#E5E0F3] hover:border-emerald-300 shadow-2xs'
                  }`}
                >
                  {/* Compact 3D Icon Tile */}
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 p-0.5 transition-colors duration-200 ${
                      isActive
                        ? 'bg-white/20 border border-white/30'
                        : isPassed
                        ? 'bg-white border border-emerald-200'
                        : 'bg-[#FAF8FF] border border-[#EAE5F5] group-hover:border-emerald-200'
                    }`}
                  >
                    <img
                      src={getTabIconSrc(tab.tabNum, tab.iconName)}
                      alt={tab.title}
                      className="w-5 h-5 object-contain group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Compact Single-Line Title */}
                  <span
                    className={`text-[12px] sm:text-[12.5px] font-bold truncate leading-tight tracking-tight pr-0.5 ${
                      isActive ? 'text-white' : isPassed ? 'text-emerald-900' : 'text-[#0F172A]'
                    }`}
                  >
                    {tab.shortTitle}
                  </span>

                  {/* Subtle Active Indicator Dot */}
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/95 shrink-0" />
                  )}
                </button>

                {/* Consistent Roadmap Connector between consecutive steps */}
                {!isLast && (
                  <div
                    className="flex items-center px-1 shrink-0 select-none"
                    aria-hidden="true"
                  >
                    <div
                      className={`relative w-4 sm:w-5 h-[2px] rounded-full overflow-hidden ${
                        isConnectorPassed
                          ? 'bg-emerald-500'
                          : isConnectorNext
                          ? 'bg-emerald-300'
                          : 'bg-slate-200'
                      }`}
                    >
                      {(isConnectorNext || isConnectorPassed) && (
                        <span
                          className={`absolute inset-y-0 left-0 w-3 rounded-full roadmap-connector-flow ${
                            isConnectorPassed
                              ? 'bg-gradient-to-r from-transparent via-white/85 to-transparent'
                              : 'bg-gradient-to-r from-transparent via-emerald-500 to-transparent'
                          }`}
                        />
                      )}
                    </div>
                    <ChevronRight
                      className={`w-3.5 h-3.5 -ml-1.5 stroke-[2.5] transition-colors ${
                        isConnectorPassed || isConnectorNext
                          ? 'text-emerald-500'
                          : 'text-slate-300'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Subtle Desktop Right Arrow (only when overflowing right) */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByAmount(280)}
          aria-label="Scroll learning tracks right"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-md items-center justify-center transition-all cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};
