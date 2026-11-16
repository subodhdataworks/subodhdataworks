import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic68VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic68MergeJoinConcatLesson: React.FC<Topic68VisualLessonProps> = ({
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
  const secMergeSyntaxRef = useRef<HTMLDivElement>(null);
  const secJoinTypesRef = useRef<HTMLDivElement>(null);
  const secConcatAxesRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec68-title': secTitleRef,
      'sec68-concept': secConceptRef,
      'sec68-merge-syntax': secMergeSyntaxRef,
      'sec68-join-types': secJoinTypesRef,
      'sec68-concat-axes': secConcatAxesRef,
      'sec68-takeaway': secTakeawayRef,
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
      className="topic68-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={9}
        moduleName="Pandas for Data Analysis"
        topicNum={11}
        totalTopicsInModule={13}
        englishTitle="Merge, Join and Concatenate"
        hindiTitle="Merge, Join and Concatenate"
        subtitleEnglish="Combining tables in Pandas"
        subtitleHindi="Combining tables in Pandas"
        emoji="🔗"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec68-title'}
        sectionRef={secTitleRef}
        sectionId="sec68-title"
      />

      {/* Concept: Merge vs Concat */}
      <div ref={secConceptRef} id="sec68-concept" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>🔗</span>
          {currentLang === 'english' ? 'The Difference: Merge vs Concat' : 'Merge बनाम Concat में अंतर'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <h3 className="font-bold text-[#7045E8] mb-1">pd.merge() — Relational Join</h3>
            <p className="text-xs text-slate-600 mb-2">Combines rows based on shared key columns (e.g., matching CustomerID).</p>
            <div className="text-xs font-mono bg-purple-50 text-purple-800 p-2 rounded">
              Orders[CustID] ⇄ Customers[CustID]
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
            <h3 className="font-bold text-[#7045E8] mb-1">pd.concat() — Stacking</h3>
            <p className="text-xs text-slate-600 mb-2">Stacks DataFrames on top of each other (rows) or side-by-side (columns).</p>
            <div className="text-xs font-mono bg-purple-50 text-purple-800 p-2 rounded">
              January.csv + February.csv = Q1.csv
            </div>
          </div>
        </div>
      </div>

      {/* Merge Syntax */}
      <div ref={secMergeSyntaxRef} id="sec68-merge-syntax" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>🧩</span>
          {currentLang === 'english' ? '1. Merging on Common Key: pd.merge()' : '1. कॉमन की पर Merge करना: pd.merge()'}
        </h2>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-2xl font-mono text-sm leading-relaxed overflow-x-auto shadow-sm">
          <p className="text-emerald-400 font-semibold mb-2"># Step 1: Connect Orders table with Customer table</p>
          <pre>{`import pandas as pd

orders = pd.DataFrame({
    "OrderID": [501, 502, 503],
    "CustomerID": [1, 2, 1],
    "Amount": [1200, 450, 890]
})

customers = pd.DataFrame({
    "CustomerID": [1, 2, 3],
    "CustomerName": ["Aman", "Riya", "Pooja"]
})

# Merge orders with customer names
merged_df = pd.merge(orders, customers, on="CustomerID", how="inner")
print(merged_df)
# Output:
#    OrderID  CustomerID  Amount CustomerName
# 0      501           1    1200         Aman
# 1      503           1     890         Aman
# 2      502           2     450         Riya`}</pre>
        </div>
      </div>

      {/* 4 Join Types */}
      <div ref={secJoinTypesRef} id="sec68-join-types" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📐</span>
          {currentLang === 'english' ? '2. Four Join Types: Inner, Left, Right, Outer' : '2. चार प्रकार के Joins: Inner, Left, Right, Outer'}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
            <h4 className="font-bold text-[#4C2A9A] text-sm">how="inner" (Default)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Keeps ONLY matching rows present in BOTH tables. Rows with no match are excluded.
            </p>
          </div>
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
            <h4 className="font-bold text-[#4C2A9A] text-sm">how="left" (Most Common)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Keeps ALL rows from the left table (orders). Fills NaN if customer data is missing.
            </p>
          </div>
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
            <h4 className="font-bold text-[#4C2A9A] text-sm">how="right"</h4>
            <p className="text-xs text-slate-600 mt-1">
              Keeps ALL rows from the right table. Useful to see customers who never placed an order.
            </p>
          </div>
          <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
            <h4 className="font-bold text-[#4C2A9A] text-sm">how="outer" (Full Join)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Keeps everything from both tables. Missing data on either side is filled with NaN.
            </p>
          </div>
        </div>
      </div>

      {/* Concat along axes */}
      <div ref={secConcatAxesRef} id="sec68-concat-axes" className="space-y-4">
        <h2 className="text-xl font-bold text-[#2D1B69] flex items-center gap-2">
          <span>📚</span>
          {currentLang === 'english' ? '3. Stacking Data with pd.concat()' : '3. pd.concat() से Data को Stack करना'}
        </h2>
        <div className="border border-purple-200 rounded-2xl p-5 space-y-4 bg-white shadow-sm">
          <p className="text-sm text-slate-700">
            {currentLang === 'english'
              ? 'When you receive daily or monthly CSV logs with identical columns, pd.concat([df1, df2], ignore_index=True) glues them vertically.'
              : 'जब आपके पास एक ही तरह के Columns वाली अलग-अलग महीनों की Files हों, तो `pd.concat` से उन्हें एक के नीचे एक जोड़ लें।'}
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`jan_sales = pd.DataFrame({"Day": [1, 2], "Sales": [1000, 1500]})
feb_sales = pd.DataFrame({"Day": [1, 2], "Sales": [1200, 1800]})

# Vertical concatenation (axis=0)
q1_sales = pd.concat([jan_sales, feb_sales], ignore_index=True)
print(q1_sales)
# Output:
#    Day  Sales
# 0    1   1000
# 1    2   1500
# 2    1   1200
# 3    2   1800`}</pre>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div ref={secTakeawayRef} id="sec68-takeaway" className="bg-[#FAF8FF] border border-purple-200 rounded-2xl p-6 space-y-3">
        <h3 className="text-lg font-bold text-[#4C2A9A] flex items-center gap-2">
          <span>💡</span>
          {currentLang === 'english' ? 'Key Takeaway for Analysts' : 'Analysts के लिए मुख्य सलाह'}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {currentLang === 'english'
            ? 'When merging, always verify the shape of the DataFrame before and after. If the row count explodes, check whether the join key has duplicate rows in either table.'
            : 'Merge करने से पहले और बाद में हमेशा rows की संख्या (.shape) चेक करें! यदि rows बहुत ज्यादा बढ़ जाएँ, तो समझें कि Join Key में डुप्लिकेट्स थे जिसने क्रॉस-मल्टीप्लिकेशन कर दिया।'}
        </p>
      </div>
    </div>
  );
};
