import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { FileText, ZoomIn, ZoomOut, RotateCcw, Loader2, AlertCircle } from 'lucide-react';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export interface SectionRectInfo {
  id: string;
  top: number;
  height: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  centerX?: number;
  centerY?: number;
}

export interface PdfVisualNotesViewerProps {
  pdfUrl: string;
  title?: string;
}

const PdfPageCanvas: React.FC<{
  pdfDoc: pdfjsLib.PDFDocumentProxy;
  pageNumber: number;
  containerWidth: number;
  zoom: number;
}> = ({ pdfDoc, pageNumber, containerWidth, zoom }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const renderTaskRef = useRef<pdfjsLib.RenderTask | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderPage = async () => {
      if (!canvasRef.current || containerWidth <= 0) return;
      try {
        const page = await pdfDoc.getPage(pageNumber);
        if (cancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1 });
        const targetCssWidth = Math.max(280, (containerWidth - 4) * zoom);
        const cssScale = targetCssWidth / unscaledViewport.width;
        const outputScale = Math.min(window.devicePixelRatio || 2, 2.5);

        const viewport = page.getViewport({ scale: cssScale });
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {}
        }

        const transform =
          outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined;

        const task = page.render({
          canvasContext: ctx,
          canvas,
          transform,
          viewport,
        });
        renderTaskRef.current = task;
        await task.promise;
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException') {
          // Ignore benign cancellation on fast topic switch
        }
      }
    };

    renderPage();

    return () => {
      cancelled = true;
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel();
        } catch {}
      }
    };
  }, [pdfDoc, pageNumber, containerWidth, zoom]);

  return (
    <div className="bg-white rounded-2xl border border-[#E5DEFF] shadow-xs overflow-hidden flex justify-center">
      <canvas ref={canvasRef} className="block max-w-none" />
    </div>
  );
};

export const PdfVisualNotesViewer: React.FC<PdfVisualNotesViewerProps> = ({
  pdfUrl,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(680);
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  // Track responsive container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => {
      const w = el.clientWidth;
      if (w > 100) setContainerWidth(w);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Load PDF document whenever URL changes
  useEffect(() => {
    let active = true;
    let loadedDoc: pdfjsLib.PDFDocumentProxy | null = null;
    setLoading(true);
    setError(null);
    setPdfDoc(null);
    setNumPages(0);
    setZoom(1);

    const abortCtrl = new AbortController();
    let loadingTask: pdfjsLib.PDFDocumentLoadingTask | null = null;

    (async () => {
      try {
        const res = await fetch(pdfUrl, { signal: abortCtrl.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buf = await res.arrayBuffer();
        if (!active) return;

        loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buf) });
        const doc = await loadingTask.promise;
        if (!active) {
          doc.destroy().catch(() => {});
          return;
        }
        loadedDoc = doc;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setLoading(false);
      } catch (err: any) {
        if (!active || err?.name === 'AbortError') return;
        console.error('[PdfVisualNotesViewer] Failed to load PDF:', pdfUrl, err);
        setError(`Unable to load Visual Notes PDF (${err?.message || 'load error'}).`);
        setLoading(false);
      }
    })();

    return () => {
      active = false;
      try {
        abortCtrl.abort();
      } catch {}
      try {
        loadingTask?.destroy?.()?.catch?.(() => {});
      } catch {}
      try {
        loadedDoc?.destroy?.()?.catch?.(() => {});
      } catch {}
    };
  }, [pdfUrl]);

  return (
    <div ref={containerRef} className="sql-vn-root w-full space-y-3.5 pb-6 font-sans">
      {/* Compact Toolbar */}
      <div className="bg-[#FAF8FF] border border-[#E5DEFF] rounded-2xl px-3.5 py-2 flex items-center justify-between gap-2 flex-wrap shadow-2xs sticky top-0 z-10 backdrop-blur-xs">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6D28D9] text-white text-[11px] font-semibold shadow-2xs">
          <FileText className="w-3 h-3" />
          <span>Visual Notes {numPages > 0 ? `(${numPages} ${numPages === 1 ? 'Page' : 'Pages'})` : ''}</span>
        </div>

        <div className="inline-flex items-center gap-1 bg-white border border-[#E5DEFF] rounded-full px-1.5 py-0.5 shadow-2xs">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.75, +(z - 0.1).toFixed(2)))}
            className="p-1 rounded-full text-slate-600 hover:bg-[#F5F3FF] hover:text-[#6D28D9] transition-colors cursor-pointer"
            title="Zoom out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] font-bold text-[#1E1B4B] px-1 tabular-nums min-w-[38px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.6, +(z + 0.1).toFixed(2)))}
            className="p-1 rounded-full text-slate-600 hover:bg-[#F5F3FF] hover:text-[#6D28D9] transition-colors cursor-pointer"
            title="Zoom in"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          {zoom !== 1 && (
            <button
              type="button"
              onClick={() => setZoom(1)}
              className="p-1 rounded-full text-slate-500 hover:bg-[#F5F3FF] hover:text-[#6D28D9] transition-colors cursor-pointer"
              title="Reset zoom"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="bg-white rounded-2xl border border-[#E5DEFF] p-12 flex flex-col items-center justify-center gap-2.5 text-slate-500">
          <Loader2 className="w-6 h-6 text-[#7C3AED] animate-spin" />
          <span className="text-xs font-semibold">Loading Visual Learning Notes...</span>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="bg-rose-50 rounded-2xl border border-rose-200 p-6 flex items-center gap-2.5 text-rose-700 text-xs font-semibold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Exact Pixel-Perfect PDF Pages */}
      {!loading && !error && pdfDoc && (
        <div className="space-y-4 overflow-x-auto">
          {Array.from({ length: numPages }, (_, idx) => (
            <PdfPageCanvas
              key={`${pdfUrl}-p${idx + 1}`}
              pdfDoc={pdfDoc}
              pageNumber={idx + 1}
              containerWidth={containerWidth}
              zoom={zoom}
            />
          ))}
        </div>
      )}
    </div>
  );
};
