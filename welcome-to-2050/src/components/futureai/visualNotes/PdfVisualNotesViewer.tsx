import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { MentorLessonSection } from '../mentor/mentorLessonRegistry';

// Configure pdfjs-dist worker
try {
  // @ts-ignore
  if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
  }
} catch {
  try {
    // @ts-ignore
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
  } catch {
    // fallback
  }
}

export interface SectionRectInfo {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

interface PdfVisualNotesViewerProps {
  pdfUrl: string;
  className?: string;
  activeSection?: MentorLessonSection | null;
  onUserManualScroll?: () => void;
  onScrollSettled?: () => void;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
}

export const PdfVisualNotesViewer: React.FC<PdfVisualNotesViewerProps> = ({
  pdfUrl,
  className = '',
  activeSection = null,
  onUserManualScroll,
  onScrollSettled,
  onSectionRectChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderedHeight, setRenderedHeight] = useState<number>(0);
  const pdfDocRef = useRef<any>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const activeRenderTasks = useRef<Record<number, any>>({});
  const isRenderingRef = useRef(false);

  // 1. Load Document
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    const loadDoc = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });
        const doc = await loadingTask.promise;
        if (isCancelled) return;
        pdfDocRef.current = doc;
        const pageNumbers = Array.from({ length: doc.numPages }, (_, i) => i + 1);
        setPages(pageNumbers);
        setLoading(false);
      } catch (err: any) {
        if (!isCancelled) {
          setError(err?.message || 'Failed to load PDF');
          setLoading(false);
        }
      }
    };

    loadDoc();

    return () => {
      isCancelled = true;
      Object.values(activeRenderTasks.current).forEach((task) => {
        try {
          task?.cancel();
        } catch {}
      });
      activeRenderTasks.current = {};
    };
  }, [pdfUrl]);

  // 2. Render Pages to Fit Container Width with Sharpness & Clean Background
  useEffect(() => {
    if (!pdfDocRef.current || pages.length === 0 || !containerRef.current) return;

    let isCancelled = false;
    let resizeTimer: any = null;

    const renderPages = async () => {
      if (isRenderingRef.current) return;
      isRenderingRef.current = true;

      const container = containerRef.current;
      if (!container) {
        isRenderingRef.current = false;
        return;
      }

      const targetWidth = Math.max(260, container.clientWidth - 24);
      const dpr = window.devicePixelRatio || 1;

      for (let i = 0; i < pages.length; i++) {
        const pageNum = pages[i];
        const canvas = canvasRefs.current[i];
        if (!canvas || !pdfDocRef.current || isCancelled) continue;

        try {
          if (activeRenderTasks.current[pageNum]) {
            try {
              activeRenderTasks.current[pageNum].cancel();
            } catch {}
            activeRenderTasks.current[pageNum] = null;
          }

          const page = await pdfDocRef.current.getPage(pageNum);
          if (isCancelled) break;

          const unscaledViewport = page.getViewport({ scale: 1 });
          const scale = targetWidth / unscaledViewport.width;
          const viewport = page.getViewport({ scale: scale * dpr });

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = `${Math.floor(viewport.width / dpr)}px`;
          canvas.style.height = `${Math.floor(viewport.height / dpr)}px`;

          const ctx = canvas.getContext('2d', { alpha: false });
          if (!ctx) continue;

          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
            background: 'rgb(255, 255, 255)',
          };

          const task = page.render(renderContext);
          activeRenderTasks.current[pageNum] = task;
          await task.promise;
          activeRenderTasks.current[pageNum] = null;
          if (canvas) {
            setRenderedHeight(canvas.clientHeight || Math.floor(viewport.height / dpr));
          }
        } catch (err: any) {
          if (err?.name !== 'RenderingCancelledException') {
            console.error(`Error rendering PDF page ${pageNum}:`, err);
          }
        }
      }

      isRenderingRef.current = false;
    };

    renderPages();

    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!isCancelled) {
          renderPages();
        }
      }, 100);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      isCancelled = true;
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      Object.values(activeRenderTasks.current).forEach((task) => {
        try {
          task?.cancel();
        } catch {}
      });
      activeRenderTasks.current = {};
    };
  }, [pages]);

  // 3. Robust Physical User Interaction Detection (wheel & touch only, never programmatic scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleUserGesture = () => {
      if (onUserManualScroll) {
        onUserManualScroll();
      }
    };

    container.addEventListener('wheel', handleUserGesture, { passive: true });
    container.addEventListener('touchmove', handleUserGesture, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleUserGesture);
      container.removeEventListener('touchmove', handleUserGesture);
    };
  }, [onUserManualScroll]);

  // 4. Intelligent PDF Auto-Scroll Engine (Page-aware, scale-aware, non-destructive)
  useEffect(() => {
    if (!activeSection || !containerRef.current || renderedHeight === 0) return;

    const container = containerRef.current;
    const pageIdx = (activeSection.pageNumber || 1) - 1;
    const canvas = canvasRefs.current[pageIdx];

    const canvasHeight = canvas?.clientHeight || renderedHeight;
    const canvasOffsetTop = canvas?.offsetTop || 0;

    const sectionTop = canvasOffsetTop + (canvasHeight * activeSection.yStartPercent) / 100;
    const sectionHeight = (canvasHeight * (activeSection.yEndPercent - activeSection.yStartPercent)) / 100;

    const currentScroll = container.scrollTop;
    const containerHeight = container.clientHeight;

    // Check if section is already comfortably within view
    const isAlreadyFullyVisible =
      sectionTop >= currentScroll + 20 &&
      sectionTop + sectionHeight <= currentScroll + containerHeight - 30;

    if (!isAlreadyFullyVisible) {
      // Calculate smooth target scroll position
      const idealScroll = Math.max(0, sectionTop - containerHeight * 0.22);
      container.scrollTo({
        top: idealScroll,
        behavior: 'smooth',
      });
    }

    // Wait for smooth scroll to settle before notifying voice narration
    const settleTimer = setTimeout(() => {
      if (onScrollSettled) {
        onScrollSettled();
      }
      updateSectionBoundingBox();
    }, 450);

    return () => clearTimeout(settleTimer);
  }, [activeSection, renderedHeight]);

  // 5. Update Bounding Box for the Flying Robot & Laser Pointer
  const updateSectionBoundingBox = useCallback(() => {
    if (!highlightRef.current || !onSectionRectChange) return;
    const rect = highlightRef.current.getBoundingClientRect();
    onSectionRectChange({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height,
      centerX: rect.left + rect.width / 2,
      centerY: rect.top + rect.height / 2,
    });
  }, [onSectionRectChange]);

  useEffect(() => {
    updateSectionBoundingBox();
    window.addEventListener('resize', updateSectionBoundingBox);
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateSectionBoundingBox, { passive: true });
    }
    return () => {
      window.removeEventListener('resize', updateSectionBoundingBox);
      if (container) {
        container.removeEventListener('scroll', updateSectionBoundingBox);
      }
    };
  }, [updateSectionBoundingBox, activeSection]);

  // Derived coordinates for precise highlighting
  const activePageIdx = (activeSection?.pageNumber || 1) - 1;
  const activeCanvas = canvasRefs.current[activePageIdx];
  const activeCanvasHeight = activeCanvas?.clientHeight || renderedHeight;
  const activeCanvasOffsetTop = activeCanvas?.offsetTop || 0;

  const highlightTop = activeSection
    ? activeCanvasOffsetTop + (activeCanvasHeight * activeSection.yStartPercent) / 100
    : 0;
  const highlightHeight = activeSection
    ? Math.max(45, (activeCanvasHeight * (activeSection.yEndPercent - activeSection.yStartPercent)) / 100)
    : 0;

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-y-auto bg-white flex flex-col items-center p-2 sm:p-3 select-none relative ${className}`}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#d8b4fe #faf5ff',
      }}
    >
      {loading && (
        <div className="w-full flex flex-col items-center justify-center p-12 space-y-3">
          <div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
          <span className="text-xs text-purple-700 font-bold">Rendering Visual Notes PDF...</span>
        </div>
      )}

      {error && (
        <div className="w-full p-6 text-center text-red-600 text-xs font-semibold">
          {error}
        </div>
      )}

      <div className="relative w-full flex flex-col items-center">
        {pages.map((pageNum, idx) => (
          <canvas
            key={pageNum}
            ref={(el) => (canvasRefs.current[idx] = el)}
            className="rounded-2xl shadow-xs border border-purple-100/70 max-w-full block bg-white mb-4 last:mb-0"
          />
        ))}

        {/* ── Precise Concept Highlight Overlay ── */}
        {activeSection && renderedHeight > 0 && (
          <div
            ref={highlightRef}
            className="absolute rounded-2xl pointer-events-none transition-all duration-500 border-2 border-purple-500 bg-purple-500/12 shadow-[0_0_25px_rgba(168,85,247,0.4)] animate-pulse z-10"
            style={{
              left: `${activeSection.xStartPercent ?? 4}%`,
              width: `${(activeSection.xEndPercent ?? 96) - (activeSection.xStartPercent ?? 4)}%`,
              top: `${highlightTop}px`,
              height: `${highlightHeight}px`,
            }}
          >
            {/* Top pill badge */}
            <div className="absolute -top-3 left-3 px-3 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-black tracking-wide shadow-md flex items-center gap-1.5 z-20 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Explaining: {activeSection.title}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
