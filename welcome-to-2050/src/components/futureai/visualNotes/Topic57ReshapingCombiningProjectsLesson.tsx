import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic57VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic57ReshapingCombiningProjectsLesson: React.FC<Topic57VisualLessonProps> = ({
  activeSectionId,
  onSectionRectChange,
  onScrollSettled,
  language: externalLanguage = 'english',
  onLanguageChange,
}) => {
  const [currentLang, setCurrentLang] = useState<'hindi' | 'english'>(externalLanguage);
  const [activeTab, setActiveTab] = useState<'reshaping' | 'combining' | 'capstone'>('capstone');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (externalLanguage && externalLanguage !== currentLang) {
      setCurrentLang(externalLanguage);
    }
  }, [externalLanguage]);

  const containerRef = useRef<HTMLDivElement>(null);
  const secTitleRef = useRef<HTMLDivElement>(null);
  const secReshapeRulesRef = useRef<HTMLDivElement>(null);
  const secCombiningStacksRef = useRef<HTMLDivElement>(null);
  const secCapstoneDashboardRef = useRef<HTMLDivElement>(null);
  const secRevisionTableRef = useRef<HTMLDivElement>(null);
  const secKnowledgeCheckRef = useRef<HTMLDivElement>(null);
  const secNextModuleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec57-title': secTitleRef,
      'sec57-reshape-rules': secReshapeRulesRef,
      'sec57-combining-stacks': secCombiningStacksRef,
      'sec57-capstone-dashboard': secCapstoneDashboardRef,
      'sec57-revision-table': secRevisionTableRef,
      'sec57-knowledge-check': secKnowledgeCheckRef,
      'sec57-next-module': secNextModuleRef,
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
      className="topic57-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={8}
        moduleName="NumPy for Numerical Analysis"
        topicNum={8}
        totalTopicsInModule={8}
        englishTitle="Reshaping, Combining & Retail Analytics Dashboard"
        hindiTitle="Reshaping, Combining & Retail Analytics Dashboard"
        subtitleEnglish="Module 8 Capstone & Retail Analytics Dashboard"
        subtitleHindi="Module 8 Capstone & Retail Analytics Dashboard"
        emoji="🧩"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec57-title'}
        sectionRef={secTitleRef}
        sectionId="sec57-title"
      />

      {/* TABS SELECTOR */}
      <div className="flex items-center gap-2 border-b border-[#EAE5F5] pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('capstone')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'capstone'
              ? 'bg-[#7045E8] text-white shadow-sm'
              : 'bg-[#F6F2FF] text-[#77758A] hover:text-[#202033]'
          }`}
        >
          <span>📊</span> Capstone: Sales Dashboard Logic
        </button>
        <button
          onClick={() => setActiveTab('reshaping')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'reshaping'
              ? 'bg-[#7045E8] text-white shadow-sm'
              : 'bg-[#F6F2FF] text-[#77758A] hover:text-[#202033]'
          }`}
        >
          <span>📐</span> Reshaping & -1 Rule
        </button>
        <button
          onClick={() => setActiveTab('combining')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
            activeTab === 'combining'
              ? 'bg-[#7045E8] text-white shadow-sm'
              : 'bg-[#F6F2FF] text-[#77758A] hover:text-[#202033]'
          }`}
        >
          <span>🧱</span> Stacking: vstack & hstack
        </button>
      </div>

      {/* SECTION 1: RESHAPE RULES */}
      {(activeTab === 'reshaping' || activeTab === 'capstone') && (
        <div
          ref={secReshapeRulesRef}
          data-mentor-target="sec57-reshape-rules"
          className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
              01
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#202033]">
                {isHi ? 'पुनर्गठन (Reshaping) और ऑटोमैटिक `-1` डायमेंशन' : 'Reshaping & The Automatic -1 Dimension Rule'}
              </h2>
              <p className="text-xs text-[#77758A]">
                {isHi ? 'तत्वों की कुल संख्या समान रहनी चाहिए (Total Size conservation)' : 'The mathematical product of new shape dimensions must equal total array elements'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
              <span className="text-xs font-bold text-[#7045E8]">Reshape Example: 6 elements into (2, 3)</span>
              <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
                nums = np.array([1, 2, 3, 4, 5, 6])<br />
                grid = nums.<span className="text-blue-400">reshape</span>(2, 3)<br />
                print(grid)<br />
                <span className="text-emerald-300"># [[1 2 3]<br />#  [4 5 6]]</span>
              </div>
            </div>

            <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
              <span className="text-xs font-bold text-[#7045E8]">Automatic Dimension Inference: `reshape(3, -1)`</span>
              <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
                nums = np.arange(1, 13) <span className="text-purple-300"># 12 elements</span><br />
                grid = nums.<span className="text-blue-400">reshape</span>(3, -1)<br />
                print(grid.shape) <span className="text-emerald-300"># (3, 4) &rarr; 12 / 3 = 4 cols!</span>
              </div>
              <p className="text-[11px] text-[#77758A]">
                {isHi ? '`-1` देने पर NumPy खुद बचे हुए आयाम की Calculation कर लेता है।' : 'NumPy automatically deduces the missing dimension size.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: COMBINING & STACKING */}
      {(activeTab === 'combining' || activeTab === 'capstone') && (
        <div
          ref={secCombiningStacksRef}
          data-mentor-target="sec57-combining-stacks"
          className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
              02
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#202033]">
                {isHi ? 'Arrays को जोड़ना: `vstack()` और `hstack()`' : 'Combining Arrays: Vertical & Horizontal Stacking'}
              </h2>
              <p className="text-xs text-[#77758A]">
                {isHi ? 'Rows के रूप में ऊपर-नीचे जोड़ना vs Columns के रूप में अगल-बगल जोड़ना' : 'Vertical row-wise stack vs horizontal column-wise concatenation'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
              <span className="text-xs font-bold text-[#4C2A9A]">np.vstack((a, b)) &mdash; Vertical Stack</span>
              <p className="text-xs text-[#77758A]">
                {isHi ? 'नई Row (Rows) बनाकर ऊपर-नीचे जोड़ता है।' : 'Stacks arrays vertically along new rows.'}
              </p>
              <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
                jan = np.array([100, 200, 300])<br />
                feb = np.array([150, 250, 350])<br />
                sales = np.<span className="text-blue-400">vstack</span>((jan, feb))<br />
                print(sales.shape) <span className="text-emerald-300"># (2, 3)</span>
              </div>
            </div>

            <div className="rounded-xl border border-purple-200 bg-white p-4 space-y-2">
              <span className="text-xs font-bold text-[#4C2A9A]">np.hstack((a, b)) &mdash; Horizontal Stack</span>
              <p className="text-xs text-[#77758A]">
                {isHi ? 'अगल-बगल नए Columns जोड़ता है।' : 'Combines compatible arrays along columns.'}
              </p>
              <div className="bg-[#202033] p-3 rounded font-mono text-[11px] text-white">
                a = np.array([[1], [2]])<br />
                b = np.array([[3], [4]])<br />
                print(np.<span className="text-blue-400">hstack</span>((a, b)))<br />
                <span className="text-emerald-300"># [[1 3]<br />#  [2 4]]</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 3: CAPSTONE PROJECT — RETAIL SALES ANALYTICS DASHBOARD */}
      <div
        ref={secCapstoneDashboardRef}
        data-mentor-target="sec57-capstone-dashboard"
        className="rounded-2xl border-2 border-[#7045E8] bg-white p-6 shadow-md space-y-6"
      >
        <div className="flex items-center justify-between border-b border-purple-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏬</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7045E8]">
                Module 8 Real-World Capstone
              </span>
              <h3 className="text-lg font-black text-[#202033]">
                NumPy Retail Sales Analytics Dashboard Logic
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            Executive Production Script
          </span>
        </div>

        {/* 7 BUSINESS QUESTIONS BADGES */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-[#4C2A9A] uppercase tracking-wider">
            {isHi ? 'व्यावसायिक प्रश्न जिनका उत्तर यह Dashboard देता है:' : '7 Key Business Questions Answered:'}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>1. Total Revenue:</strong> ₹79,000
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>2. Monthly Revenue:</strong> `np.sum(revenue, axis=1)`
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>3. Product Revenue:</strong> `np.sum(revenue, axis=0)`
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>4. Top Product:</strong> `Bag` (₹55,000)
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>5. Best Month:</strong> Month 4 (`np.argmax + 1`)
            </div>
            <div className="p-2.5 rounded-lg bg-[#F6F2FF] border border-purple-100">
              <strong>6. High Volume:</strong> Quantities &gt; 100 units
            </div>
          </div>
        </div>

        {/* FULL CAPSTONE CODE */}
        <div className="rounded-xl bg-[#202033] p-5 font-mono text-xs text-white leading-relaxed overflow-x-auto shadow-inner space-y-1">
          <span className="text-purple-300"># ========================================================</span><br />
          <span className="text-purple-300"># NUMPY SALES ANALYTICS DASHBOARD LOGIC</span><br />
          <span className="text-purple-300"># ========================================================</span><br /><br />
          <span className="text-amber-400">import</span> numpy <span className="text-amber-400">as</span> np<br /><br />
          products = np.array([<span className="text-emerald-300">&quot;Pen&quot;</span>, <span className="text-emerald-300">&quot;Notebook&quot;</span>, <span className="text-emerald-300">&quot;Bag&quot;</span>])<br />
          prices = np.array([<span className="text-purple-300">10</span>, <span className="text-purple-300">50</span>, <span className="text-purple-300">500</span>])<br /><br />
          <span className="text-purple-300"># 4 Months x 3 Products Quantity Matrix: Shape (4, 3)</span><br />
          quantities = np.array([<br />
          &nbsp;&nbsp;[<span className="text-purple-300">100</span>, <span className="text-purple-300">80</span>, <span className="text-purple-300">20</span>],  <span className="text-purple-300"># Month 1</span><br />
          &nbsp;&nbsp;[<span className="text-purple-300">120</span>, <span className="text-purple-300">90</span>, <span className="text-purple-300">25</span>],  <span className="text-purple-300"># Month 2</span><br />
          &nbsp;&nbsp;[<span className="text-purple-300">150</span>, <span className="text-purple-300">100</span>, <span className="text-purple-300">30</span>], <span className="text-purple-300"># Month 3</span><br />
          &nbsp;&nbsp;[<span className="text-purple-300">130</span>, <span className="text-purple-300">110</span>, <span className="text-purple-300">35</span>]  <span className="text-purple-300"># Month 4</span><br />
          ])<br /><br />
          <span className="text-purple-300"># Vectorized Broadcasting Multiplication</span><br />
          revenue = quantities * prices<br /><br />
          <span className="text-purple-300"># Aggregations</span><br />
          total_revenue = np.<span className="text-blue-400">sum</span>(revenue)<br />
          monthly_revenue = np.<span className="text-blue-400">sum</span>(revenue, axis=<span className="text-purple-300">1</span>)<br />
          product_revenue = np.<span className="text-blue-400">sum</span>(revenue, axis=<span className="text-purple-300">0</span>)<br /><br />
          top_product_index = np.<span className="text-blue-400">argmax</span>(product_revenue)<br />
          best_month_index = np.<span className="text-blue-400">argmax</span>(monthly_revenue)<br />
          high_quantities = quantities[quantities &gt; <span className="text-purple-300">100</span>]<br />
          average_revenue = np.<span className="text-blue-400">mean</span>(monthly_revenue)<br /><br />
          print(<span className="text-emerald-300">f&quot;Total Revenue: ₹&#123;total_revenue&#125;&quot;</span>) <span className="text-purple-300"># 79000</span><br />
          print(<span className="text-emerald-300">f&quot;Top Product: &#123;products[top_product_index]&#125;&quot;</span>) <span className="text-purple-300"># Bag</span><br />
          print(<span className="text-emerald-300">f&quot;Best Month: Month &#123;best_month_index + 1&#125;&quot;</span>) <span className="text-purple-300"># Month 4</span><br />
          print(<span className="text-emerald-300">f&quot;Average Monthly Revenue: ₹&#123;average_revenue&#125;&quot;</span>) <span className="text-purple-300"># 19750.0</span>
        </div>
      </div>

      {/* SECTION 4: MODULE 8 QUICK REVISION TABLE */}
      <div
        ref={secRevisionTableRef}
        data-mentor-target="sec57-revision-table"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Module 8 महा-रिवीजन (Cheat Sheet Table)' : 'Module 8 Quick Revision Table'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'NumPy के सभी आवश्यक कॉन्सेप्ट्स और सिंटेक्स का 1 मिनट का रीकैप' : 'Complete 1-minute reference guide covering all 8 topics'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Concept</th>
                <th className="py-3 px-4">Meaning</th>
                <th className="py-3 px-4">Example Syntax</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">NumPy Array</td>
                <td className="py-2.5 px-4">Homogeneous N-dimensional array</td>
                <td className="py-2.5 px-4 font-mono">np.array([10, 20, 30])</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Properties</td>
                <td className="py-2.5 px-4">Dimensions, Shape tuple, Total size</td>
                <td className="py-2.5 px-4 font-mono">arr.ndim, arr.shape, arr.size</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Indexing & Slicing</td>
                <td className="py-2.5 px-4">Access row/col; remember slices are VIEWS</td>
                <td className="py-2.5 px-4 font-mono">arr[1, 2], arr[:, 1], arr.copy()</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Vectorization</td>
                <td className="py-2.5 px-4">Zero-loop math; `*` vs `@`</td>
                <td className="py-2.5 px-4 font-mono">prices * 1.18, a @ b</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Broadcasting</td>
                <td className="py-2.5 px-4">Compatible dimensions match right-to-left</td>
                <td className="py-2.5 px-4 font-mono">matrix (2, 3) + vector (3,)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Axis Aggregations</td>
                <td className="py-2.5 px-4">axis=0 (down rows), axis=1 (across cols)</td>
                <td className="py-2.5 px-4 font-mono">np.sum(arr, axis=0)</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Boolean Filtering</td>
                <td className="py-2.5 px-4">Condition masks with `&`, `|`, `~`</td>
                <td className="py-2.5 px-4 font-mono">arr[arr &gt; 50], np.where()</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-[#7045E8]">Reshape & Stack</td>
                <td className="py-2.5 px-4">Change geometry & combine blocks</td>
                <td className="py-2.5 px-4 font-mono">arr.reshape(2, -1), np.vstack()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: FINAL KNOWLEDGE CHECK QUIZ */}
      <div
        ref={secKnowledgeCheckRef}
        data-mentor-target="sec57-knowledge-check"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            05
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Final Knowledge Check (प्रश्नोत्तरी)' : 'Final Knowledge Check'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'जांचें कि आप Module 8 के कॉन्सेप्ट्स में कितने मजबूत हैं!' : 'Verify your mastery before moving to Pandas dataframes'}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <p className="text-xs font-bold text-[#202033]">
              Q1. What is the difference between `*` and `@` in NumPy?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 1: 'A' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[1] === 'A'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                A) `*` is element-wise multiplication; `@` is matrix dot product ✅
              </button>
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 1: 'B' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[1] === 'B'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                B) Both do the exact same calculation
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-purple-100 bg-[#F6F2FF]/40 p-4 space-y-2">
            <p className="text-xs font-bold text-[#202033]">
              Q2. When calculating `np.sum(sales, axis=0)`, what is the result?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 2: 'A' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[2] === 'A'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                A) Column totals (collapsing down rows) ✅
              </button>
              <button
                onClick={() => setQuizAnswers((p) => ({ ...p, 2: 'B' }))}
                className={`p-2 rounded-lg text-left border transition-all ${
                  quizAnswers[2] === 'B'
                    ? 'border-[#7045E8] bg-purple-100 text-[#4C2A9A] font-bold'
                    : 'border-gray-200 bg-white text-[#4A4768]'
                }`}
              >
                B) Row totals (across columns)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: CONGRATULATIONS & NEXT MODULE PREVIEW */}
      <div
        ref={secNextModuleRef}
        data-mentor-target="sec57-next-module"
        className="rounded-2xl border border-purple-200 bg-gradient-to-r from-[#4C2A9A] to-[#7045E8] p-6 text-white shadow-lg space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🎉</span>
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-purple-200">
                Module 8 Completed!
              </span>
              <h3 className="text-xl font-black">
                {isHi ? 'बधाई हो! आप NumPy न्यूमेरिकल एनालिसिस में पारंगत हैं' : 'Congratulations! You Mastered NumPy Numerical Analysis'}
              </h3>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-xs text-purple-200">Next Destination</span>
            <div className="text-sm font-bold text-emerald-300">Module 9: Pandas for Data Analysis</div>
          </div>
        </div>

        <p className="text-xs text-purple-100 leading-relaxed">
          {isHi
            ? 'आपने ndarrays, शेप्स, वेक्टराइजेशन, ब्रॉडकास्टिंग, एक्सिस समरी और रिटेल Analytics लॉजिक को पूरी तरह समझ लिया है। अगले Module में हम Pandas DataFrames और Series का विस्तृत अध्ययन करेंगे!'
            : 'You have conquered numerical computing, multi-axis indexing, broadcasting, and executive retail dashboard analytics. Next stop: Pandas Series & DataFrames!'}
        </p>
      </div>
    </div>
  );
};
