import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic73VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic73BarColumnChartsLesson: React.FC<Topic73VisualLessonProps> = ({
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
  const secVerticalBarRef = useRef<HTMLDivElement>(null);
  const secHorizontalBarRef = useRef<HTMLDivElement>(null);
  const secCustomColorsRef = useRef<HTMLDivElement>(null);
  const secBarLabelsSortingRef = useRef<HTMLDivElement>(null);
  const secZeroAxisRuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec73-title': secTitleRef,
      'sec73-vertical-bar': secVerticalBarRef,
      'sec73-horizontal-bar': secHorizontalBarRef,
      'sec73-custom-colors': secCustomColorsRef,
      'sec73-bar-labels-sorting': secBarLabelsSortingRef,
      'sec73-zero-axis-rule': secZeroAxisRuleRef,
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
      className="topic73-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={3}
        totalTopicsInModule={10}
        englishTitle="Bar and Column Charts"
        hindiTitle="Bar and Column Charts"
        subtitleEnglish="Bar charts intro"
        subtitleHindi="Bar charts intro"
        emoji="📊"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec73-title'}
        sectionRef={secTitleRef}
        sectionId="sec73-title"
      />

      {/* Vertical Bar Chart */}
      <div ref={secVerticalBarRef} id="sec73-vertical-bar" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📶</span>
          {currentLang === 'english' ? '1. Creating Vertical Bar Charts: plt.bar()' : '1. Vertical Bar Chart: plt.bar()'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Product Units Sold Comparison</p>
          <pre>{`import matplotlib.pyplot as plt

products = ["Pen", "Book", "Bag", "Notebook"]
sales = [50, 30, 20, 40]

plt.bar(products, sales, color="#7045E8", width=0.6)

plt.title("Product Sales (Units)")
plt.xlabel("Product")
plt.ylabel("Units Sold")

plt.show()`}</pre>
        </div>
      </div>

      {/* Horizontal Bar Chart */}
      <div ref={secHorizontalBarRef} id="sec73-horizontal-bar" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>↔️</span>
          {currentLang === 'english' ? '2. Horizontal Bar Charts: plt.barh()' : '2. Horizontal Bar Chart: plt.barh()'}
        </h2>
        <div className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'When category names are long (e.g., "Industrial Machinery", "Customer Support Operations"), vertical labels tilt and overlap. Use plt.barh() for clean horizontal reading.'
              : 'जब Category names लंबे होते हैं (जैसे States या Departments के नाम), तो Vertical Chart में labels overlap हो जाते हैं। ऐसे में `plt.barh()` (Horizontal Bar Chart) best solution है।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
            <pre>{`plt.barh(products, sales, color="#4C2A9A", height=0.6)

plt.title("Product Sales Performance")
plt.xlabel("Units Sold")
plt.ylabel("Product")

plt.show()`}</pre>
          </div>
        </div>
      </div>

      {/* Coloring & Aesthetics */}
      <div ref={secCustomColorsRef} id="sec73-custom-colors" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🎨</span>
          {currentLang === 'english' ? '3. Highlighting Top Category with Custom Colors' : '3. Top Category को Custom Colors से Highlight करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Instead of random rainbow colors, use deliberate storytelling: highlight your #1 best-seller in dark purple while keeping other bars neutral gray.'
              : 'Unnecessary rainbow colors से बचें: Top Selling Product को bold purple से highlight करें और बाकी bars को clean neutral gray रखें।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
            <pre>{`# Pen is top seller (50 units) -> Highlight with #7045E8, others neutral
custom_colors = ["#7045E8", "#CBD5E1", "#CBD5E1", "#CBD5E1"]

plt.bar(products, sales, color=custom_colors)`}</pre>
          </div>
        </div>
      </div>

      {/* Direct Data Labels & Sorting */}
      <div ref={secBarLabelsSortingRef} id="sec73-bar-labels-sorting" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🏷️</span>
          {currentLang === 'english' ? '4. Direct Data Labels & Pandas Sorting' : '4. Direct Data Labels और Pandas Sorting'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Sort descending and attach ax.bar_label()</p>
          <pre>{`import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({"Product": products, "Sales": sales})
df = df.sort_values(by="Sales", ascending=False)

fig, ax = plt.subplots(figsize=(7, 4))
bars = ax.bar(df["Product"], df["Sales"], color="#7045E8")

# Directly display exact numerical value above each bar
ax.bar_label(bars, padding=3, fontweight="bold")

ax.set_title("Ranked Product Sales", fontsize=13)
ax.set_ylabel("Units Sold")
ax.set_ylim(0, 60)  # Extra headroom for labels

plt.show()`}</pre>
        </div>
      </div>

      {/* Zero Axis Rule */}
      <div ref={secZeroAxisRuleRef} id="sec73-zero-axis-rule" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>⚖️</span>
          {currentLang === 'english' ? 'The Golden Rule of Bar Charts: Always Start at 0' : 'Golden Rule: Always Start Baseline at 0'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Never truncate the baseline of a bar chart! If Product A has 50 and Product B has 48, starting the Y-axis at 45 makes Product A look 5x bigger than B, creating an unethical and misleading visual.'
            : 'कभी भी Bar Chart की Y-axis को बीच में से truncate न करें! अगर A की sales 50 है और B की 48, और आप axis 45 से start कर देंगे तो A, B से 5x बड़ा दिखेगा, जो misleading data visualization है। Always start baseline at 0!'}
        </p>
      </div>
    </div>
  );
};
