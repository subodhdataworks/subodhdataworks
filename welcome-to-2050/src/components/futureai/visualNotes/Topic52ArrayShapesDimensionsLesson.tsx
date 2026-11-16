import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic52VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic52ArrayShapesDimensionsLesson: React.FC<Topic52VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secDimensions0To3Ref = useRef<HTMLDivElement>(null);
  const secNdimShapeSizeRef = useRef<HTMLDivElement>(null);
  const secVisual3DRef = useRef<HTMLDivElement>(null);
  const secSalesMatrixRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec52-title': secTitleRef,
      'sec52-dimensions-0to3': secDimensions0To3Ref,
      'sec52-ndim-shape-size': secNdimShapeSizeRef,
      'sec52-visual-3d': secVisual3DRef,
      'sec52-sales-matrix': secSalesMatrixRef,
      'sec52-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const timer = setTimeout(() => {
        if (containerRef.current) {
          const cRect = containerRef.current.getBoundingClientRect();
          const tRect = targetEl.getBoundingClientRect();
          onSectionRectChange?.({
            top: tRect.top - cRect.top,
            left: tRect.left - cRect.left,
            width: tRect.width,
            height: tRect.height,
          });
        }
        onScrollSettled?.();
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic52-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={3}
        totalTopicsInModule={8}
        englishTitle="Array Shapes and Dimensions"
        hindiTitle="Array Shapes and Dimensions"
        subtitleEnglish="Array Shapes and Dimensions"
        subtitleHindi="Array Shapes and Dimensions"
        emoji="📐"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec52-title'}
        sectionRef={secTitleRef}
        sectionId="sec52-title"
      />

      {/* SECTION 1: 0D, 1D, 2D, 3D SPECTRUM */}
      <div
        ref={secDimensions0To3Ref}
        data-mentor-target="sec52-dimensions-0to3"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'डायमेंशन क्या है? (0D से 3D तक का सफर)' : 'What Is a Dimension? From 0D to 3D'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक्सिस (Axes) की संख्या जो Data के विस्तार और लेआउट को तय करती है' : 'The axes along which numerical elements are indexed and computed'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 0D */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">0D (Scalar)</span>
            <div className="h-14 rounded-lg bg-white border border-purple-200 flex items-center justify-center font-bold text-lg text-[#202033]">
              10
            </div>
            <div className="text-[11px] font-mono text-[#77758A]">
              ndim: 0<br />shape: ()
            </div>
          </div>

          {/* 1D */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">1D (Vector)</span>
            <div className="h-14 rounded-lg bg-white border border-purple-200 flex items-center justify-around px-2 font-bold text-xs text-[#202033]">
              <span>[10</span><span>20</span><span>30]</span>
            </div>
            <div className="text-[11px] font-mono text-[#77758A]">
              ndim: 1<br />shape: (3,)
            </div>
          </div>

          {/* 2D */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">2D (Matrix)</span>
            <div className="h-14 rounded-lg bg-white border border-purple-200 flex flex-col justify-center px-2 font-bold text-[11px] text-[#202033] leading-tight">
              <div>[10, 20, 30]</div>
              <div>[40, 50, 60]</div>
            </div>
            <div className="text-[11px] font-mono text-[#77758A]">
              ndim: 2<br />shape: (2, 3)
            </div>
          </div>

          {/* 3D */}
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">3D (Layers / Tensor)</span>
            <div className="h-14 rounded-lg bg-white border border-purple-200 flex items-center justify-center font-bold text-[10px] text-purple-700">
              2 Layers &times; 2&times;2
            </div>
            <div className="text-[11px] font-mono text-[#77758A]">
              ndim: 3<br />shape: (2, 2, 2)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: NDIM VS SHAPE VS SIZE */}
      <div
        ref={secNdimShapeSizeRef}
        data-mentor-target="sec52-ndim-shape-size"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'त्रिमूर्ति: ndim, shape और size का अंतर' : 'The Holy Trinity: ndim, shape, and size'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'एक्सिस की संख्या vs एक्सिस की लंबाई vs कुल एलिमेंट्स' : 'Number of axes vs axis lengths tuple vs total element product'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Property</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">{isHi ? 'यह क्या बताता है?' : 'What it measures'}</th>
                <th className="py-3 px-4">Formula / Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-[#7045E8]">.ndim</td>
                <td className="py-2.5 px-4 font-mono">int</td>
                <td className="py-2.5 px-4">{isHi ? 'कुल कितने डायमेंशन (एक्सिस) हैं' : 'Number of array dimensions (axes)'}</td>
                <td className="py-2.5 px-4 font-mono">2 (for matrix)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-[#7045E8]">.shape</td>
                <td className="py-2.5 px-4 font-mono">tuple</td>
                <td className="py-2.5 px-4">{isHi ? 'हर एक्सिस की लंबाई (Rows, Columns)' : 'Length of each axis tuple'}</td>
                <td className="py-2.5 px-4 font-mono">(2, 3) &rarr; 2 rows, 3 cols</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-mono font-bold text-[#7045E8]">.size</td>
                <td className="py-2.5 px-4 font-mono">int</td>
                <td className="py-2.5 px-4">{isHi ? 'Array में कुल कितने तत्व (Elements) हैं' : 'Total number of elements in array'}</td>
                <td className="py-2.5 px-4 font-mono">2 &times; 3 = 6 elements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: 3D ARRAYS VISUALIZATION */}
      <div
        ref={secVisual3DRef}
        data-mentor-target="sec52-visual-3d"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? '3D Arrays की Visual समझ (Batches / Layers)' : 'Visualizing 3D Arrays (Layers & Batches)'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '3D का मतलब केवल भौतिक स्थान नहीं; यह समय, बैच या महीने हो सकते हैं' : 'Not just physical 3D space: represents multi-store, batches, or quarterly matrices'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C2A9A]">3D Array Definition:</span>
            <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed">
              arr_3d = np.array([<br />
              &nbsp;&nbsp;[[1, 2], [3, 4]], <span className="text-purple-300"># Layer 0</span><br />
              &nbsp;&nbsp;[[5, 6], [7, 8]]  <span className="text-purple-300"># Layer 1</span><br />
              ])<br /><br />
              print(arr_3d.shape) <span className="text-emerald-300"># (2, 2, 2)</span><br />
              print(arr_3d.size)  <span className="text-emerald-300"># 8 elements</span>
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/40 p-4 space-y-3">
            <div className="text-xs font-bold text-[#7045E8]">Shape (2, 2, 2) Breakdown:</div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                <span className="font-bold text-[#4C2A9A]">Axis 0 (Layers)</span>
                <span className="font-mono text-[#7045E8]">2 Layers (Store A, Store B)</span>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                <span className="font-bold text-[#4C2A9A]">Axis 1 (Rows)</span>
                <span className="font-mono text-[#7045E8]">2 Rows (Q1, Q2)</span>
              </div>
              <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                <span className="font-bold text-[#4C2A9A]">Axis 2 (Columns)</span>
                <span className="font-mono text-[#7045E8]">2 Columns (Online, Offline)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: MONTHLY SALES MATRIX */}
      <div
        ref={secSalesMatrixRef}
        data-mentor-target="sec52-sales-matrix"
        className="rounded-2xl border border-purple-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
      >
        <div className="flex items-center gap-2 text-[#7045E8]">
          <span className="text-lg">📈</span>
          <h3 className="text-sm font-bold">
            {isHi ? 'रियल-वर्ल्ड केस: मासिक बिक्री Matrix (Monthly Sales Matrix)' : 'Real-World Case: Monthly Sales Matrix'}
          </h3>
        </div>
        <p className="text-xs text-[#4A4768]">
          {isHi
            ? '2 महीने और 3 प्रोडक्ट्स का Cells Data: Rows = महीने, Column = प्रोडक्ट्स'
            : '2 Months and 3 Products: Rows represent months, columns represent products.'}
        </p>
        <div className="bg-[#202033] p-4 rounded-xl font-mono text-xs text-white leading-relaxed">
          sales = np.array([<br />
          &nbsp;&nbsp;[100, 200, 300], <span className="text-purple-300"># Jan Sales: P1, P2, P3</span><br />
          &nbsp;&nbsp;[150, 250, 350]  <span className="text-purple-300"># Feb Sales: P1, P2, P3</span><br />
          ])<br /><br />
          print(<span className="text-emerald-300">&quot;Shape:&quot;</span>, sales.shape) <span className="text-purple-300"># (2, 3)</span><br />
          print(<span className="text-emerald-300">&quot;Total records:&quot;</span>, sales.size) <span className="text-purple-300"># 6</span>
        </div>
      </div>

      {/* SECTION 5: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec52-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 3 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? '`(3,)` का मतलब 1D है:' : '`(3,)` Means 1D:'}</strong>{' '}
            {isHi ? 'यह 3 डायमेंशन नहीं है, बल्कि 1 डायमेंशन में 3 एलिमेंट्स हैं!' : 'It does not mean 3 dimensions; it means 1 axis holding 3 items.'}
          </li>
          <li>
            <strong>{isHi ? '2D Shape = (Rows, Cols):' : '2D Shape = (Rows, Columns):'}</strong>{' '}
            {isHi ? 'पहला Value हमेशा Rows (Rows) की संख्या और दूसरा Columns (Columns) की संख्या होता है।' : 'First number is always rows, second is columns.'}
          </li>
          <li>
            <strong>{isHi ? 'Size = Dimensions का गुणनफल:' : 'Size = Product of Shape:'}</strong>{' '}
            {isHi ? 'कुल तत्वों की संख्या shape के सभी आयामों का गुणनफल होती है।' : 'Total element count is the mathematical product of shape tuple values.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
