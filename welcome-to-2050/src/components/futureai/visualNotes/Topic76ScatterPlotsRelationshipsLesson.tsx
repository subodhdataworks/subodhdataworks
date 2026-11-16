import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic76VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic76ScatterPlotsRelationshipsLesson: React.FC<Topic76VisualLessonProps> = ({
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
  const secWhatIsScatterRef = useRef<HTMLDivElement>(null);
  const secRelationshipsRef = useRef<HTMLDivElement>(null);
  const secCorrelationRef = useRef<HTMLDivElement>(null);
  const secCausationWarningRef = useRef<HTMLDivElement>(null);
  const secMarkerSizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec76-title': secTitleRef,
      'sec76-what-is-scatter': secWhatIsScatterRef,
      'sec76-relationships': secRelationshipsRef,
      'sec76-correlation': secCorrelationRef,
      'sec76-causation-warning': secCausationWarningRef,
      'sec76-marker-size': secMarkerSizeRef,
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
      className="topic76-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={6}
        totalTopicsInModule={10}
        englishTitle="Scatter Plots and Relationships"
        hindiTitle="Scatter Plots and Relationships"
        subtitleEnglish="Scatter plots intro"
        subtitleHindi="Scatter plots intro"
        emoji="🌌"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec76-title'}
        sectionRef={secTitleRef}
        sectionId="sec76-title"
      />

      {/* Code: plt.scatter() */}
      <div ref={secWhatIsScatterRef} id="sec76-what-is-scatter" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📌</span>
          {currentLang === 'english' ? '1. Creating a Scatter Plot with plt.scatter()' : '1. plt.scatter() से Scatter Plot बनाना'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Study Hours vs Exam Marks</p>
          <pre>{`import matplotlib.pyplot as plt

study_hours = [1, 2, 3, 4, 5]
marks = [40, 50, 60, 75, 85]

plt.scatter(
    study_hours, 
    marks, 
    color="#7045E8", 
    s=90, 
    alpha=0.85
)

plt.title("Study Hours vs Marks Performance")
plt.xlabel("Study Hours (Daily)")
plt.ylabel("Exam Score (%)")
plt.grid(True, linestyle="--", alpha=0.4)

plt.show()`}</pre>
        </div>
      </div>

      {/* 3 Core Relationship Types */}
      <div ref={secRelationshipsRef} id="sec76-relationships" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🧭</span>
          {currentLang === 'english' ? '2. Three Types of Relationships' : '2. 3 Core Correlation Types (Positive, Negative, Zero)'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-center text-xs">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">↗️</span>
            <strong className="text-[#7045E8] block text-sm mb-1">Positive Correlation</strong>
            <p className="text-slate-600">As X goes UP, Y goes UP. Points slant upwards (e.g. Ad Spend vs Revenue).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">↘️</span>
            <strong className="text-amber-600 block text-sm mb-1">Negative Correlation</strong>
            <p className="text-slate-600">As X goes UP, Y goes DOWN. Points slant downwards (e.g. Price vs Demand).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">⚪</span>
            <strong className="text-slate-600 block text-sm mb-1">No Correlation</strong>
            <p className="text-slate-600">Points scattered randomly like a cloud. No linear pattern (e.g. Shoe Size vs IQ).</p>
          </div>
        </div>
      </div>

      {/* Correlation Calculation */}
      <div ref={secCorrelationRef} id="sec76-correlation" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📐</span>
          {currentLang === 'english' ? '3. Pearson Correlation Coefficient (r) in Pandas' : '3. Pearson Correlation (r) Calculate करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Pearson correlation ranges from -1.0 (perfect negative) to +1.0 (perfect positive). 0 means no linear association.'
              : 'Correlation Coefficient (r) की value -1.0 से +1.0 के बीच होती है: +1.0 = Perfect Positive Correlation, -1.0 = Perfect Negative Correlation, और 0 = No Linear Correlation.'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
            <pre>{`import pandas as pd

df = pd.DataFrame({"Hours": [1, 2, 3, 4, 5], "Marks": [40, 50, 60, 75, 85]})

# Compute Pearson r
corr_score = df["Hours"].corr(df["Marks"])
print("Pearson Correlation:", round(corr_score, 2))  # Output: 1.0`}</pre>
          </div>
        </div>
      </div>

      {/* Causation Warning */}
      <div ref={secCausationWarningRef} id="sec76-causation-warning" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>⚠️</span>
          {currentLang === 'english' ? 'Vital Principle: Correlation DOES NOT Imply Causation' : 'Golden Rule: Correlation DOES NOT Imply Causation'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Even if Ice Cream sales and Drowning rates both rise in summer (r = 0.9), ice cream does NOT cause drowning! Both are driven by a third confounding variable: Hot Summer Temperature. Always think critically.'
            : 'Summer में Ice Cream Sales और Drowning incidents दोनों साथ बढ़ते हैं (r = 0.9), लेकिन इसका मतलब यह नहीं कि Ice Cream खाने से drowning होती है! दोनों का असली कारण Summer Temperature है। Data Analysts को हमेशा समझना चाहिए: Correlation DOES NOT Imply Causation!'}
        </p>
      </div>

      {/* Point Size / Bubble Chart */}
      <div ref={secMarkerSizeRef} id="sec76-marker-size" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🫧</span>
          {currentLang === 'english' ? '4. Bubble Charts: Adding a 3rd Dimension via "s"' : '4. Bubble Charts: 3rd Variable को Point Size "s" से Represent करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-2 bg-[#FAF8FF]">
          <p className="text-xs text-slate-600">
            By supplying a list to <code>s</code>, marker sizes can represent a 3rd metric such as student attendance or revenue size.
          </p>
          <div className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-xs">
            <pre>{`plt.scatter(study_hours, marks, s=[50, 100, 150, 200, 300], color="#7045E8")`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
