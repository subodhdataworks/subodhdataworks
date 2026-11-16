import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic79VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic79EdaPandasLesson: React.FC<Topic79VisualLessonProps> = ({
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
  const secWhatIsEdaRef = useRef<HTMLDivElement>(null);
  const secEdaSteps1to4Ref = useRef<HTMLDivElement>(null);
  const secEdaFeatureRevenueRef = useRef<HTMLDivElement>(null);
  const secEdaVisualizePlotsRef = useRef<HTMLDivElement>(null);
  const secEdaWorkflowPrincipleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec79-title': secTitleRef,
      'sec79-what-is-eda': secWhatIsEdaRef,
      'sec79-eda-steps-1to4': secEdaSteps1to4Ref,
      'sec79-eda-feature-revenue': secEdaFeatureRevenueRef,
      'sec79-eda-visualize-plots': secEdaVisualizePlotsRef,
      'sec79-eda-workflow-principle': secEdaWorkflowPrincipleRef,
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
      className="topic79-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={9}
        totalTopicsInModule={10}
        englishTitle="Exploratory Data Analysis with Pandas"
        hindiTitle="Exploratory Data Analysis with Pandas"
        subtitleEnglish="EDA fundamentals"
        subtitleHindi="EDA fundamentals"
        emoji="🔬"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec79-title'}
        sectionRef={secTitleRef}
        sectionId="sec79-title"
      />

      {/* What is EDA */}
      <div ref={secWhatIsEdaRef} id="sec79-what-is-eda" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🔬</span>
          {currentLang === 'english' ? '1. What Is Exploratory Data Analysis (EDA)?' : '1. What is EDA (Exploratory Data Analysis)?'}
        </h2>
        <p className="text-sm text-slate-700">
          {currentLang === 'english'
            ? 'EDA is the detective work of data science. You examine shapes, summary statistics, missing values, patterns, and anomalies to determine what questions the data can truthfully answer.'
            : 'EDA (Exploratory Data Analysis) data analytics का detective work है। आप Dataset Shape, Summary Statistics, Missing Values, Outliers और Distributions audit करते हैं ताकि actionable business insights derive हो सकें।'}
        </p>
      </div>

      {/* Steps 1 to 4: Inspection & Quality */}
      <div ref={secEdaSteps1to4Ref} id="sec79-eda-steps-1to4" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📋</span>
          {currentLang === 'english' ? '2. Steps 1 to 4: Data Quality Audit' : '2. Steps 1 to 4: Data Quality Audit (shape, info, describe, isna)'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Load sample DataFrame and run the quality checklist</p>
          <pre>{`import pandas as pd

df = pd.DataFrame({
    "Product": ["Pen", "Book", "Bag", "Pen", "Book"],
    "Price": [10, 50, 500, 10, 50],
    "Quantity": [5, 2, 1, 8, 3],
    "Region": ["North", "South", "North", "East", "South"]
})

# 1. Inspect structure and shape
print("Shape:", df.shape)       # (5, 4)
print(df.head(3))

# 2. Check for missing values & duplicates
print("Missing:", df.isna().sum().sum())   # 0
print("Duplicates:", df.duplicated().sum()) # 0`}</pre>
        </div>
      </div>

      {/* Feature Engineering: Revenue */}
      <div ref={secEdaFeatureRevenueRef} id="sec79-eda-feature-revenue" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>💰</span>
          {currentLang === 'english' ? '3. Step 5 to 7: Feature Engineering & GroupBy Analysis' : '3. Steps 5 to 7: Feature Engineering & GroupBy Analysis'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Derive Revenue and aggregate across categories</p>
          <pre>{`# Step 5: Vectorized multiplication
df["Revenue"] = df["Price"] * df["Quantity"]
print("Total Revenue: ₹", df["Revenue"].sum())  # ₹880

# Step 6: GroupBy Product & rank descending
product_sales = df.groupby("Product")["Revenue"].sum().sort_values(ascending=False)
print(product_sales)
# Bag     500
# Book    250
# Pen     130`}</pre>
        </div>
      </div>

      {/* Visualizing Directly from Pandas */}
      <div ref={secEdaVisualizePlotsRef} id="sec79-eda-visualize-plots" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📊</span>
          {currentLang === 'english' ? '4. Step 8 to 10: Plotting Directly with .plot(kind="bar")' : '4. Steps 8 to 10: Pandas .plot(kind="bar") se Direct Charts'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Pandas integrates directly with Matplotlib. Calling Series.plot(kind="bar") generates a bar chart in one clean line of code.'
              : 'Pandas under the hood Matplotlib engine use करता है। `product_sales.plot(kind="bar")` call करते ही single line of code में Bar Chart render हो जाता है।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs">
            <pre>{`import matplotlib.pyplot as plt

# Plot product revenue
product_sales.plot(kind="bar", color="#7045E8", figsize=(6, 3.5))
plt.title("Total Revenue by Product")
plt.ylabel("Revenue (₹)")
plt.xticks(rotation=0)
plt.show()

# Regional revenue breakdown
region_sales = df.groupby("Region")["Revenue"].sum()
region_sales.plot(kind="bar", color="#4C2A9A", figsize=(6, 3.5))
plt.title("Revenue by Region")
plt.show()`}</pre>
          </div>
        </div>
      </div>

      {/* EDA Workflow Principle */}
      <div ref={secEdaWorkflowPrincipleRef} id="sec79-eda-workflow-principle" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'The Complete 10-Step EDA Workflow' : 'End-to-End 10-Step EDA Workflow'}
        </h3>
        <p className="text-xs text-slate-600 font-mono">
          Import ➡️ Inspect ➡️ Audit Quality ➡️ Clean Data ➡️ Derive Metrics ➡️ Summary Stats ➡️ GroupBy ➡️ Visualize ➡️ Synthesize Insights ➡️ Strategic Recommendations
        </p>
      </div>
    </div>
  );
};
