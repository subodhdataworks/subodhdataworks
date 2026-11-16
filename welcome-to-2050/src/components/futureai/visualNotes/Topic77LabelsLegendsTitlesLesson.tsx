import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic77VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic77LabelsLegendsTitlesLesson: React.FC<Topic77VisualLessonProps> = ({
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
  const secWhyLabelsRef = useRef<HTMLDivElement>(null);
  const secCoreComponentsRef = useRef<HTMLDivElement>(null);
  const secCodeSyntaxRef = useRef<HTMLDivElement>(null);
  const secUnitsMatterRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec77-title': secTitleRef,
      'sec77-why-labels': secWhyLabelsRef,
      'sec77-core-components': secCoreComponentsRef,
      'sec77-code-syntax': secCodeSyntaxRef,
      'sec77-units-matter': secUnitsMatterRef,
      'sec77-takeaway': secTakeawayRef,
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
      className="topic77-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={7}
        totalTopicsInModule={10}
        englishTitle="Labels, Legends and Titles"
        hindiTitle="Labels, Legends and Titles"
        subtitleEnglish="Chart annotation intro"
        subtitleHindi="Chart annotation intro"
        emoji="🎨"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec77-title'}
        sectionRef={secTitleRef}
        sectionId="sec77-title"
      />

      {/* Why Labels Matter */}
      <div ref={secWhyLabelsRef} id="sec77-why-labels" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>❓</span>
          {currentLang === 'english' ? '1. Why Are Annotations Essential?' : '1. Labels और Titles क्यों Essential हैं?'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white p-4 rounded-xl border border-rose-200 shadow-sm space-y-2">
            <span className="font-bold text-rose-600 block text-sm">❌ Unlabeled Chart (Confusion)</span>
            <p className="text-slate-600">The reader sees lines going up and down, but cannot tell: Is it rupees? Units? Days? Which product is which?</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-sm space-y-2">
            <span className="font-bold text-emerald-700 block text-sm">✅ Annotated Chart (Executive Clarity)</span>
            <p className="text-slate-600">Title states what and when; X and Y axes specify units; Legend identifies products; Grid guides eyes.</p>
          </div>
        </div>
      </div>

      {/* Core Anatomy */}
      <div ref={secCoreComponentsRef} id="sec77-core-components" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📐</span>
          {currentLang === 'english' ? '2. Anatomy of a Professional Business Chart' : '2. Professional Business Chart के Core Elements'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto">
          <pre>{`+-------------------------------------------------------+
|  QUARTERLY PRODUCT REVENUE (FY 2026)      [Title]     |
|                                                       |
|  Revenue (₹ in Lakhs)                     [Y-Label]   |
|                                                       |
|  40 |            /--------●   Product A               |
|  30 |      ●----/             Product B   [Legend]    |
|  20 |     / \             ●                           |
|     +----------------------------------               |
|        Q1       Q2       Q3       Q4                  |
|                                                       |
|                       Financial Quarter   [X-Label]   |
+-------------------------------------------------------+`}</pre>
        </div>
      </div>

      {/* Code Syntax */}
      <div ref={secCodeSyntaxRef} id="sec77-code-syntax" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚙️</span>
          {currentLang === 'english' ? '3. Complete Code: Styling All Elements' : '3. Complete Python Code: All Chart Elements को Style करना'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <pre>{`import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar"]
sales_a = [100, 150, 200]
sales_b = [120, 140, 180]

# 1. Plot with labels for the legend
plt.plot(months, sales_a, marker="o", color="#7045E8", label="Product A")
plt.plot(months, sales_b, marker="s", color="#F59E0B", label="Product B")

# 2. Add Title and Axis Labels with font sizing
plt.title("Monthly Product Sales — Q1 2026", fontsize=14, fontweight="bold", pad=12)
plt.xlabel("Month", fontsize=11)
plt.ylabel("Units Sold (in Thousands)", fontsize=11)

# 3. Add Legend and subtle reference Grid
plt.legend(loc="upper left", frameon=True)
plt.grid(True, linestyle="--", alpha=0.35)

plt.show()`}</pre>
        </div>
      </div>

      {/* Units Matter & Title Comparison */}
      <div ref={secUnitsMatterRef} id="sec77-units-matter" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🎯</span>
          {currentLang === 'english' ? '4. Units Matter: Poor vs Great Titles' : '4. Units का Importance: Poor vs Executive-Ready Titles'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-xs">
          <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl space-y-1">
            <span className="font-bold text-rose-700 block text-sm">Poor Title &amp; Label</span>
            <div>Title: "Sales"</div>
            <div>Y-Axis: "Total"</div>
            <p className="text-slate-600 mt-1">Leaves the executive guessing: Is this in USD, INR, cartons, or units?</p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl space-y-1">
            <span className="font-bold text-emerald-800 block text-sm">Professional Title &amp; Label</span>
            <div>Title: "B2B Enterprise Software Revenue — FY25 vs FY26"</div>
            <div>Y-Axis: "Net Revenue (₹ in Crores)"</div>
            <p className="text-slate-600 mt-1">Crystal clear context, currency, time period, and magnitude.</p>
          </div>
        </div>
      </div>

      {/* Takeaway */}
      <div ref={secTakeawayRef} id="sec77-takeaway" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Executive Presentation Tip' : 'Executive Presentation Tip for Analysts'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Never let legends overlap and cover critical data points! Use loc="best", loc="upper left", or bbox_to_anchor to push the legend outside the chart plotting region.'
            : 'Legends को कभी data points के ऊपर overlap न होने दें! `loc="upper left"` या `bbox_to_anchor` use करके Legend को Chart area के बाहर place करें।'}
        </p>
      </div>
    </div>
  );
};
