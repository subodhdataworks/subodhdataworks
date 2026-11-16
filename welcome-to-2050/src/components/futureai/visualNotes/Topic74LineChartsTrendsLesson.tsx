import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic74VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic74LineChartsTrendsLesson: React.FC<Topic74VisualLessonProps> = ({
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
  const secLineTrendRef = useRef<HTMLDivElement>(null);
  const secTrendPatternsRef = useRef<HTMLDivElement>(null);
  const secMultiLinesRef = useRef<HTMLDivElement>(null);
  const secGrowthRateRef = useRef<HTMLDivElement>(null);
  const secChronologicalRuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec74-title': secTitleRef,
      'sec74-line-trend': secLineTrendRef,
      'sec74-trend-patterns': secTrendPatternsRef,
      'sec74-multi-lines': secMultiLinesRef,
      'sec74-growth-rate': secGrowthRateRef,
      'sec74-chronological-rule': secChronologicalRuleRef,
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
      className="topic74-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={4}
        totalTopicsInModule={10}
        englishTitle="Line Charts and Trends"
        hindiTitle="Line Charts and Trends"
        subtitleEnglish="Line charts overview"
        subtitleHindi="Line charts overview"
        emoji="📈"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec74-title'}
        sectionRef={secTitleRef}
        sectionId="sec74-title"
      />

      {/* Single Line Trend */}
      <div ref={secLineTrendRef} id="sec74-line-trend" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📉</span>
          {currentLang === 'english' ? '1. Tracking Revenue Over Time with marker="o"' : '1. Revenue Over Time Track करना (marker="o")'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Monthly Revenue Trend Plot</p>
          <pre>{`import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr", "May"]
revenue = [10000, 15000, 12000, 20000, 25000]

plt.plot(
    months, 
    revenue, 
    color="#7045E8", 
    linewidth=2.5, 
    marker="o", 
    markersize=7
)

plt.title("Monthly Revenue Trend")
plt.xlabel("Month")
plt.ylabel("Revenue (₹)")
plt.grid(True, alpha=0.3)

plt.show()`}</pre>
        </div>
      </div>

      {/* 3 Core Trend Archetypes */}
      <div ref={secTrendPatternsRef} id="sec74-trend-patterns" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🧭</span>
          {currentLang === 'english' ? '2. Three Core Trend Archetypes' : '2. 3 Core Trend Archetypes (Upward, Downward, Seasonal)'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-center text-xs">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">↗️</span>
            <strong className="text-emerald-600 block text-sm mb-1">Upward Trend</strong>
            <p className="text-slate-600">Values consistently increase over time. Indicates business expansion, rising adoption, or inflation.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">↘️</span>
            <strong className="text-rose-600 block text-sm mb-1">Downward Trend</strong>
            <p className="text-slate-600">Values decline steadily. Flags customer churn, supply chain bottlenecks, or market obsolescence.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <span className="text-2xl block mb-2">〰️</span>
            <strong className="text-amber-600 block text-sm mb-1">Fluctuating / Seasonal</strong>
            <p className="text-slate-600">Regular peaks and valleys. Typical for holiday retail surges, weather cycles, and weekday vs weekend traffic.</p>
          </div>
        </div>
      </div>

      {/* Multi-Line Comparisons */}
      <div ref={secMultiLinesRef} id="sec74-multi-lines" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>👥</span>
          {currentLang === 'english' ? '3. Multi-Line Comparison with Legends' : '3. Multi-Line Comparison और Legends'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Compare Product A vs Product B</p>
          <pre>{`months = ["Jan", "Feb", "Mar", "Apr"]
prod_a = [100, 150, 200, 250]
prod_b = [120, 140, 180, 220]

plt.plot(months, prod_a, marker="o", color="#7045E8", label="Product A (High Growth)")
plt.plot(months, prod_b, marker="s", color="#F59E0B", label="Product B (Steady)")

plt.title("Quarterly Product Performance Comparison")
plt.xlabel("Month")
plt.ylabel("Units Sold")
plt.legend(loc="upper left")
plt.grid(True, linestyle=":", alpha=0.5)

plt.show()`}</pre>
        </div>
      </div>

      {/* Growth Rate Math */}
      <div ref={secGrowthRateRef} id="sec74-growth-rate" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🧮</span>
          {currentLang === 'english' ? '4. Calculating Month-over-Month (MoM) Growth %' : '4. Month-over-Month (MoM) Growth % Calculate करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-3 bg-white shadow-sm">
          <div className="bg-purple-50 text-purple-900 p-3 rounded-xl font-mono text-xs">
            Growth % = ((New Value - Old Value) / Old Value) * 100
          </div>
          <p className="text-xs text-slate-600">
            If January was ₹10,000 and February reached ₹15,000: ((15000 - 10000) / 10000) * 100 = <strong>+50% Growth</strong>!
          </p>
        </div>
      </div>

      {/* Chronological Rule */}
      <div ref={secChronologicalRuleRef} id="sec74-chronological-rule" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>⚠️</span>
          {currentLang === 'english' ? 'Crucial Time-Series Rule: Strict Chronology' : 'Golden Rule: Dates का Strict Chronological Order'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'Never plot unsorted dates! If your dates are in random order (e.g. Feb, May, Jan), the connecting line will zigzag backwards and forwards, completely corrupting the trend analysis.'
            : 'Unsorted dates पर कभी Line Plot न बनाएं! अगर dates आगे-पीछे होंगी (जैसे Feb, May, Jan), तो line zig-zag होकर reverse flow करेगी और trend analysis completely corrupt हो जाएगा।'}
        </p>
      </div>
    </div>
  );
};
