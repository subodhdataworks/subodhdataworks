import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic67VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic67GroupByAggregationLesson: React.FC<Topic67VisualLessonProps> = ({
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
  const secConceptRef = useRef<HTMLDivElement>(null);
  const secSingleGroupRef = useRef<HTMLDivElement>(null);
  const secMultiAggRef = useRef<HTMLDivElement>(null);
  const secNamedAggRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec67-title': secTitleRef,
      'sec67-concept': secConceptRef,
      'sec67-single-group': secSingleGroupRef,
      'sec67-multi-agg': secMultiAggRef,
      'sec67-named-agg': secNamedAggRef,
      'sec67-takeaway': secTakeawayRef,
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
      className="topic67-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={10}
        totalTopicsInModule={13}
        englishTitle="GroupBy and Aggregation"
        hindiTitle="GroupBy and Aggregation"
        subtitleEnglish="GroupBy aggregation fundamentals"
        subtitleHindi="GroupBy aggregation fundamentals"
        emoji="📈"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec67-title'}
        sectionRef={secTitleRef}
        sectionId="sec67-title"
      />

      {/* Concept: Split -> Apply -> Combine */}
      <div ref={secConceptRef} id="sec67-concept" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🔄</span>
          {currentLang === 'english' ? 'The Split — Apply — Combine Workflow' : 'Split — Apply — Combine प्रक्रिया'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm text-center">
            <span className="text-2xl mb-1 block">✂️</span>
            <strong className="text-[#7045E8] block mb-1">1. Split</strong>
            <p className="text-xs text-slate-600">DataFrame is split into distinct buckets based on group keys (e.g. Category).</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm text-center">
            <span className="text-2xl mb-1 block">🧮</span>
            <strong className="text-[#7045E8] block mb-1">2. Apply</strong>
            <p className="text-xs text-slate-600">A mathematical aggregation function (sum, mean, count, max) is computed per bucket.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm text-center">
            <span className="text-2xl mb-1 block">📦</span>
            <strong className="text-[#7045E8] block mb-1">3. Combine</strong>
            <p className="text-xs text-slate-600">All bucket results are glued back into a clean summarized DataFrame.</p>
          </div>
        </div>
      </div>

      {/* Single GroupBy */}
      <div ref={secSingleGroupRef} id="sec67-single-group" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🎯</span>
          {currentLang === 'english' ? '1. Basic Grouping: df.groupby("Column")["Target"].sum()' : '1. बेसिक ग्रुपिंग: df.groupby("Column")["Target"].sum()'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Step 1: Calculate Total Revenue by City</p>
          <pre>{`import pandas as pd

sales_data = {
    "City": ["Delhi", "Mumbai", "Delhi", "Bangalore", "Mumbai"],
    "Product": ["Laptop", "Phone", "Phone", "Laptop", "Laptop"],
    "Revenue": [60000, 45000, 30000, 65000, 58000]
}
df = pd.DataFrame(sales_data)

# Total revenue generated in each city
city_revenue = df.groupby("City")["Revenue"].sum()
print(city_revenue)
# Output:
# City
# Bangalore     65000
# Delhi         90000
# Mumbai       103000`}</pre>
        </div>
      </div>

      {/* Multiple Aggregations */}
      <div ref={secMultiAggRef} id="sec67-multi-agg" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📊</span>
          {currentLang === 'english' ? '2. Multiple Metrics at Once: .agg(["sum", "mean", "count"])' : '2. एक साथ कई मेट्रिक्स: .agg(["sum", "mean", "count"])'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'When stakeholders want to see Total Sales, Average Ticket Size, and Number of Orders in the same table, use .agg().'
              : 'जब बिज़नेस Report में एक साथ Total Sales, औसत बिक्री और कुल Order देखने हों, तो .agg() Function का उपयोग करें।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`# Multiple aggregations on the Revenue column
city_stats = df.groupby("City")["Revenue"].agg(["sum", "mean", "count"])
print(city_stats)`}</pre>
          </div>
        </div>
      </div>

      {/* Named Aggregations & as_index=False */}
      <div ref={secNamedAggRef} id="sec67-named-agg" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>💎</span>
          {currentLang === 'english' ? '3. Industry Standard: Named Aggregations & as_index=False' : '3. इंडस्ट्री स्टैंडर्ड: Named Aggregations और as_index=False'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-[#FAF8FF]">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'Using as_index=False keeps the grouped column as a regular column instead of an index, making it ready for exports and visualizations.'
              : '`as_index=False` ग्रुप किए गए Column को सामान्य Column बनाए रखता है (Index नहीं बनने देता), जिससे Data एक्सपोर्ट और Visualization करना बहुत आसान होता है।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`summary_report = df.groupby("City", as_index=False).agg(
    TotalRevenue=("Revenue", "sum"),
    AverageRevenue=("Revenue", "mean"),
    TotalOrders=("Revenue", "count")
)
print(summary_report)
# Output:
#         City  TotalRevenue  AverageRevenue  TotalOrders
# 0  Bangalore         65000         65000.0            1
# 1      Delhi         90000         45000.0            2
# 2     Mumbai        103000         51500.0            2`}</pre>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div ref={secTakeawayRef} id="sec67-takeaway" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Pro Tips for GroupBy' : 'GroupBy के लिए प्रो टिप्स'}
        </h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1.5">
          <li>
            <strong>Multi-column grouping</strong>: <code>df.groupby(["Region", "Product"])</code> groups by subcategories easily.
          </li>
          <li>
            <strong>as_index=False</strong>: Avoids having to call <code>.reset_index()</code> later.
          </li>
          <li>
            <strong>Sort aggregated result</strong>: Chain <code>.sort_values(by="TotalRevenue", ascending=False)</code> to see top-performing groups on top.
          </li>
        </ul>
      </div>
    </div>
  );
};
