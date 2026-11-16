import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic72VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic72MatplotlibBasicsLesson: React.FC<Topic72VisualLessonProps> = ({
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
  const secWhatIsMplRef = useRef<HTMLDivElement>(null);
  const secFirstChartRef = useRef<HTMLDivElement>(null);
  const secChartCreationFlowRef = useRef<HTMLDivElement>(null);
  const secFigureAxesRef = useRef<HTMLDivElement>(null);
  const secSubplotsStyleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec72-title': secTitleRef,
      'sec72-what-is-mpl': secWhatIsMplRef,
      'sec72-first-chart': secFirstChartRef,
      'sec72-chart-creation-flow': secChartCreationFlowRef,
      'sec72-figure-axes': secFigureAxesRef,
      'sec72-subplots-style': secSubplotsStyleRef,
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
      className="topic72-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={10}
        moduleName="Python Data Visualization & Analytics"
        topicNum={2}
        totalTopicsInModule={10}
        englishTitle="Matplotlib Basics"
        hindiTitle="Matplotlib Basics"
        subtitleEnglish="Matplotlib architecture"
        subtitleHindi="Matplotlib architecture"
        emoji="📉"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec72-title'}
        sectionRef={secTitleRef}
        sectionId="sec72-title"
      />

      {/* Import & Token Breakdown */}
      <div ref={secWhatIsMplRef} id="sec72-what-is-mpl" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>📦</span>
          {currentLang === 'english' ? '1. Understanding "import matplotlib.pyplot as plt"' : '1. import matplotlib.pyplot as plt Syntax Breakdown'}
        </h2>
        <div className="border border-purple-200 rounded-xl overflow-hidden shadow-sm bg-white">
          <table className="w-full text-xs text-left">
            <thead className="bg-[#4C2A9A] text-white">
              <tr>
                <th className="p-3">Token</th>
                <th className="p-3">Role</th>
                <th className="p-3">Analyst Plain Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 text-slate-700">
              <tr>
                <td className="p-3 font-mono font-bold text-[#7045E8]">import</td>
                <td className="p-3">Keyword</td>
                <td className="p-3">Loads an external Python module into your workspace.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-[#7045E8]">matplotlib</td>
                <td className="p-3">Package</td>
                <td className="p-3">The root visualization toolkit.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-[#7045E8]">.pyplot</td>
                <td className="p-3">Submodule</td>
                <td className="p-3">The state-based procedural plotting interface.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-bold text-[#7045E8]">as plt</td>
                <td className="p-3">Alias</td>
                <td className="p-3">Standard 3-letter industry nickname used globally.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Your First Plot */}
      <div ref={secFirstChartRef} id="sec72-first-chart" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🚀</span>
          {currentLang === 'english' ? '2. Your First Matplotlib Line Plot' : '2. First Matplotlib Line Plot'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Step-by-step simple line chart</p>
          <pre>{`import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
sales = [10000, 15000, 12000, 20000]

# 1. Pair x and y and plot the line
plt.plot(months, sales)

# 2. Render the interactive pop-up window
plt.show()`}</pre>
        </div>
      </div>

      {/* Visual Chart Creation Flow */}
      <div ref={secChartCreationFlowRef} id="sec72-chart-creation-flow" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>⚙️</span>
          {currentLang === 'english' ? '3. How Matplotlib Constructs the Chart Internally' : '3. Internal Process: Chart कैसे Render होता है'}
        </h2>
        <div className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
          <div className="grid md:grid-cols-4 gap-3 text-center text-xs">
            <div className="bg-white p-3 rounded-xl border border-purple-200">
              <strong className="text-[#7045E8] block mb-1">1. Lists Input</strong>
              Horizontal: months<br/>Vertical: sales
            </div>
            <div className="bg-white p-3 rounded-xl border border-purple-200">
              <strong className="text-[#7045E8] block mb-1">2. Coordinate Pairs</strong>
              ("Jan", 10k)<br/>("Feb", 15k)<br/>("Mar", 12k)
            </div>
            <div className="bg-white p-3 rounded-xl border border-purple-200">
              <strong className="text-[#7045E8] block mb-1">3. Plot Markers</strong>
              Points mapped onto proportional 2D canvas
            </div>
            <div className="bg-white p-3 rounded-xl border border-purple-200">
              <strong className="text-emerald-700 block mb-1">4. Connect Points</strong>
              Smooth continuous lines connect points
            </div>
          </div>
        </div>
      </div>

      {/* Figure vs Axes Architecture */}
      <div ref={secFigureAxesRef} id="sec72-figure-axes" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🏛️</span>
          {currentLang === 'english' ? '4. Matplotlib Architecture: Figure vs Axes' : '4. Matplotlib Architecture: Figure vs Axes का Difference'}
        </h2>
        <div className="border-2 border-dashed border-[#7045E8] bg-purple-50/40 p-6 rounded-2xl relative space-y-4">
          <div className="absolute top-3 left-4 text-xs font-black text-[#7045E8] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-purple-200">
            FIGURE (The entire drawing canvas / window)
          </div>
          <div className="border border-purple-300 bg-white rounded-xl p-5 mt-4 shadow-sm space-y-3">
            <div className="text-xs font-bold text-[#4C2A9A] uppercase tracking-wider">
              AXES (The actual chart area with Title, X-axis, Y-axis, Ticks, Grid)
            </div>
            <div className="h-28 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-slate-500 font-mono text-xs">
              [ Line Chart Data Area: (x, y) coordinates &amp; lines ]
            </div>
          </div>
        </div>
      </div>

      {/* Subplots Style & Saving */}
      <div ref={secSubplotsStyleRef} id="sec72-subplots-style" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>💎</span>
          {currentLang === 'english' ? '5. Enterprise Subplots Style & Saving High-Res Images' : '5. Object-Oriented Subplots Style और High-Res Image Export'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Industry Recommended: fig, ax = plt.subplots()</p>
          <pre>{`import matplotlib.pyplot as plt

months = ["Jan", "Feb", "Mar", "Apr"]
sales = [10000, 15000, 12000, 20000]

# 1. Create Figure and Axes object with custom dimensions (8x4 inches)
fig, ax = plt.subplots(figsize=(8, 4))

# 2. Draw line and set labels on the Axes
ax.plot(months, sales, color="#7045E8", linewidth=2.5, marker="o")
ax.set_title("Monthly Sales Trend (2026)", fontsize=14, fontweight="bold")
ax.set_xlabel("Month")
ax.set_ylabel("Sales (₹)")
ax.grid(True, linestyle="--", alpha=0.5)

# 3. Export high-resolution PNG for PowerPoint/Executive reports
fig.tight_layout()
fig.savefig("monthly_sales_2026.png", dpi=300)

plt.show()`}</pre>
        </div>
      </div>
    </div>
  );
};
