import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic78VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic78ChoosingRightChartLesson: React.FC<Topic78VisualLessonProps> = ({
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
  const secSelectionMatrixRef = useRef<HTMLDivElement>(null);
  const secDecisionFlowRef = useRef<HTMLDivElement>(null);
  const secRealExamplesRef = useRef<HTMLDivElement>(null);
  const secPieChartPitfallRef = useRef<HTMLDivElement>(null);
  const secEthicsTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec78-title': secTitleRef,
      'sec78-selection-matrix': secSelectionMatrixRef,
      'sec78-decision-flow': secDecisionFlowRef,
      'sec78-real-examples': secRealExamplesRef,
      'sec78-pie-chart-pitfall': secPieChartPitfallRef,
      'sec78-ethics-takeaway': secEthicsTakeawayRef,
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
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic78-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={8}
        totalTopicsInModule={10}
        englishTitle="Choosing the Right Chart"
        hindiTitle="Choosing the Right Chart"
        subtitleEnglish="Chart selection intro"
        subtitleHindi="Chart selection intro"
        emoji="🧭"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec78-title'}
        sectionRef={secTitleRef}
        sectionId="sec78-title"
      />

      {/* Business Question vs Recommended Chart */}
      <div ref={secSelectionMatrixRef} id="sec78-selection-matrix" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📋</span>
          {currentLang === 'english' ? '1. Business Question Selection Matrix' : '1. Business Question vs Right Chart Matrix'}
        </h2>
        <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#4C2A9A] text-white">
              <tr>
                <th className="p-3">Business Question</th>
                <th className="p-3">Data Pattern</th>
                <th className="p-3">Best Chart</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-slate-700">
              <tr>
                <td className="p-3">Which product or region sold the most?</td>
                <td className="p-3">Discrete Categories</td>
                <td className="p-3 font-bold text-[#7045E8]">Bar / Column Chart</td>
              </tr>
              <tr>
                <td className="p-3">How did revenue or churn change over the year?</td>
                <td className="p-3">Continuous Time-Series</td>
                <td className="p-3 font-bold text-[#7045E8]">Line Chart</td>
              </tr>
              <tr>
                <td className="p-3">How are customer ages or salaries distributed?</td>
                <td className="p-3">Single Continuous Numeric</td>
                <td className="p-3 font-bold text-[#7045E8]">Histogram</td>
              </tr>
              <tr>
                <td className="p-3">Does higher ad spend drive more store sales?</td>
                <td className="p-3">Two Continuous Variables</td>
                <td className="p-3 font-bold text-[#7045E8]">Scatter Plot</td>
              </tr>
              <tr>
                <td className="p-3">Are there outliers and wide IQR spreads?</td>
                <td className="p-3">Quartiles and Medians</td>
                <td className="p-3 font-bold text-[#7045E8]">Box Plot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Decision Tree */}
      <div ref={secDecisionFlowRef} id="sec78-decision-flow" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🌳</span>
          {currentLang === 'english' ? '2. The Analyst Decision Tree' : '2. Chart Selection Decision Tree'}
        </h2>
        <div className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 font-mono text-xs leading-relaxed text-slate-800 space-y-3">
          <div className="text-[#4C2A9A] font-bold">START: What is your primary objective?</div>
          <div className="pl-4 border-l-2 border-[#7045E8] space-y-2">
            <div>├── <strong>Compare items across groups?</strong> ➡️ <span className="text-[#7045E8] font-bold">BAR CHART</span></div>
            <div>├── <strong>Track movement over time?</strong> ➡️ <span className="text-[#7045E8] font-bold">LINE CHART</span></div>
            <div>├── <strong>Analyze spread &amp; frequency?</strong> ➡️ <span className="text-[#7045E8] font-bold">HISTOGRAM</span></div>
            <div>└── <strong>Examine relationship between 2 metrics?</strong> ➡️ <span className="text-[#7045E8] font-bold">SCATTER PLOT</span></div>
          </div>
        </div>
      </div>

      {/* 4 Practical Examples */}
      <div ref={secRealExamplesRef} id="sec78-real-examples" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? '3. Four Quick Scenarios in Action' : '3. 4 Practical Business Scenarios'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">Scenario A: Pen, Book, Bag Sales</span>
            <p className="text-slate-600">Categories to compare ➡️ <strong>Bar Chart</strong>.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">Scenario B: Monthly Q1 Revenue</span>
            <p className="text-slate-600">Jan, Feb, Mar sequence ➡️ <strong>Line Chart</strong>.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">Scenario C: Student Exam Marks (40 to 95)</span>
            <p className="text-slate-600">Spread of continuous scores ➡️ <strong>Histogram</strong>.</p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-purple-100 shadow-sm">
            <span className="font-bold text-[#7045E8] block mb-1">Scenario D: Study Hours vs Scores</span>
            <p className="text-slate-600">Two numerical columns pairing ➡️ <strong>Scatter Plot</strong>.</p>
          </div>
        </div>
      </div>

      {/* Why Avoid Pie Charts */}
      <div ref={secPieChartPitfallRef} id="sec78-pie-chart-pitfall" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🥧</span>
          {currentLang === 'english' ? 'Why Industry Analysts Avoid Pie Charts' : 'Industry Data Analysts Pie Charts क्यों Avoid करते हैं?'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'The human brain is terrible at comparing angles and area slices. If Category A is 24% and Category B is 22%, they look identical in a pie chart! A sorted horizontal bar chart allows instant, millimeter-accurate length comparison.'
            : 'Human brain angles और circular slice areas accurately judge नहीं कर पाता। अगर Category A 24% है और Category B 22%, तो Pie Chart में दोनों identical दिखते हैं! लेकिन sorted Horizontal Bar Chart में bar lengths का subtle difference तुरंत spot हो जाता है।'}
        </p>
      </div>

      {/* Visualization Ethics */}
      <div ref={secEthicsTakeawayRef} id="sec78-ethics-takeaway" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>⚖️</span>
          {currentLang === 'english' ? 'Visualization Ethics & Integrity' : 'Data Visualization Ethics & Integrity'}
        </h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1.5">
          <li><strong>Never distort 3D effects</strong>: 3D bar/pie charts artificially enlarge foreground slices.</li>
          <li><strong>Zero baseline for bars</strong>: Never truncate bar charts to exaggerate tiny differences.</li>
          <li><strong>Full time context</strong>: Avoid cherry-picking convenient 2-week windows to hide general annual decline.</li>
        </ul>
      </div>
    </div>
  );
};
