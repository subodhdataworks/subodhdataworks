import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic75VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic75HistogramsDistributionsLesson: React.FC<Topic75VisualLessonProps> = ({
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
  const secWhatIsHistRef = useRef<HTMLDivElement>(null);
  const secCreateHistRef = useRef<HTMLDivElement>(null);
  const secHistVsBarRef = useRef<HTMLDivElement>(null);
  const secDistributionShapesRef = useRef<HTMLDivElement>(null);
  const secOutliersBinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec75-title': secTitleRef,
      'sec75-what-is-hist': secWhatIsHistRef,
      'sec75-create-hist': secCreateHistRef,
      'sec75-hist-vs-bar': secHistVsBarRef,
      'sec75-distribution-shapes': secDistributionShapesRef,
      'sec75-outliers-bins': secOutliersBinsRef,
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
      className="topic75-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={5}
        totalTopicsInModule={10}
        englishTitle="Histograms and Distributions"
        hindiTitle="Histograms and Distributions"
        subtitleEnglish="Histograms introduction"
        subtitleHindi="Histograms introduction"
        emoji="📶"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec75-title'}
        sectionRef={secTitleRef}
        sectionId="sec75-title"
      />

      {/* What is a Histogram */}
      <div ref={secWhatIsHistRef} id="sec75-what-is-hist" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🔢</span>
          {currentLang === 'english' ? '1. Frequency Binning: From Raw Marks to Intervals' : '1. फ़्रीक्वेंसी बिनिंग: संख्याओं को इंटरवल्स में बाँटना'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
            <span className="font-bold text-[#7045E8] block text-sm">Raw Student Marks (10 Students)</span>
            <div className="font-mono bg-slate-50 p-2.5 rounded border text-slate-700">
              40, 45, 50, 55, 60, 65, 70, 75, 80, 85
            </div>
            <p className="text-slate-500">Instead of plotting each name, we group scores into ranges (bins).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
            <span className="font-bold text-[#7045E8] block text-sm">Frequency Bins (Counts)</span>
            <div className="font-mono bg-purple-50 p-2.5 rounded border border-purple-200 text-slate-800 space-y-1">
              <div>[40–50) ➡️ 2 students</div>
              <div>[50–60) ➡️ 2 students</div>
              <div>[60–70) ➡️ 2 students</div>
              <div>[70–80) ➡️ 2 students</div>
              <div>[80–90] ➡️ 2 students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Code: plt.hist() */}
      <div ref={secCreateHistRef} id="sec75-create-hist" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚙️</span>
          {currentLang === 'english' ? '2. Plotting with plt.hist()' : '2. plt.hist() से Histogram Plot करना'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Create histogram with custom bins &amp; dark borders</p>
          <pre>{`import matplotlib.pyplot as plt

marks = [40, 45, 50, 55, 60, 65, 70, 75, 80, 85]

# edgecolor="black" prevents touching bars from blending together
plt.hist(
    marks, 
    bins=[40, 50, 60, 70, 80, 90], 
    color="#7045E8", 
    edgecolor="white"
)

plt.title("Distribution of Student Exam Scores")
plt.xlabel("Marks Range (Bins)")
plt.ylabel("Student Count")

plt.show()`}</pre>
        </div>
      </div>

      {/* Histogram vs Bar Chart */}
      <div ref={secHistVsBarRef} id="sec75-hist-vs-bar" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚖️</span>
          {currentLang === 'english' ? '3. Critical Interview Question: Histogram vs Bar Chart' : '3. इंटरव्यू का मुख्य सवाल: Histogram बनाम Bar Chart'}
        </h2>
        <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#4C2A9A] text-white">
              <tr>
                <th className="p-3">Attribute</th>
                <th className="p-3">Histogram</th>
                <th className="p-3">Bar Chart</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-slate-700">
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Data Type</td>
                <td className="p-3">Continuous Numerical (Age, Salary, Marks)</td>
                <td className="p-3">Discrete Categorical (City, Product, Dept)</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Spacing</td>
                <td className="p-3">Bars touch each other (continuous range)</td>
                <td className="p-3">Noticeable gaps between distinct categories</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#7045E8]">Primary Goal</td>
                <td className="p-3">Show distribution shape &amp; spread</td>
                <td className="p-3">Compare magnitudes across groups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Distribution Shapes */}
      <div ref={secDistributionShapesRef} id="sec75-distribution-shapes" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🔔</span>
          {currentLang === 'english' ? '4. Three Fundamental Distribution Shapes' : '4. 3 Core Distribution Shapes (Symmetric, Right-Skewed, Left-Skewed)'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-center text-xs">
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
            <strong className="text-[#7045E8] block text-sm mb-1">Symmetric (Normal)</strong>
            <p className="text-slate-600">Bell-shaped. Mean ≈ Median. Observations cluster symmetrically around center (e.g., adult heights).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
            <strong className="text-amber-600 block text-sm mb-1">Right-Skewed (Positive)</strong>
            <p className="text-slate-600">Long tail extends right. Most values are low, few are huge (e.g., income, house prices). Median &lt; Mean.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm">
            <strong className="text-purple-700 block text-sm mb-1">Left-Skewed (Negative)</strong>
            <p className="text-slate-600">Long tail extends left. Most scores are clustered high with rare low outliers (e.g., easy exam scores).</p>
          </div>
        </div>
      </div>

      {/* Outliers & Bin Count */}
      <div ref={secOutliersBinsRef} id="sec75-outliers-bins" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🚨</span>
          {currentLang === 'english' ? 'Detecting Outliers with Histograms' : 'Histograms से Outliers Detect करना'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'If salaries are [20k, 22k, 24k, 25k, 26k, 200k], the ₹200k executive salary appears as an isolated bar far to the right. Histograms visually alert you to outliers that distort standard averages!'
            : 'अगर Salary ₹20,000 से ₹2,00,000 की range में है, तो ₹2 Lakh का isolated bin right side में outlier के रूप में तुरंत spot हो जाता है, जो Mean (Average) को distort कर रहा होता है!'}
        </p>
      </div>
    </div>
  );
};
