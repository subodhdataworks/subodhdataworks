import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic40VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic40NestedCollectionsProjectLesson: React.FC<Topic40VisualLessonProps> = ({
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
  const secNestedConceptRef = useRef<HTMLDivElement>(null);
  const secListOfDictsRef = useRef<HTMLDivElement>(null);
  const secPandasBridgeRef = useRef<HTMLDivElement>(null);
  const secCapstoneRef = useRef<HTMLDivElement>(null);
  const secRevisionTableRef = useRef<HTMLDivElement>(null);
  const secCongratulationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec40-title': secTitleRef,
      'sec40-nested-concept': secNestedConceptRef,
      'sec40-list-of-dicts': secListOfDictsRef,
      'sec40-pandas-bridge': secPandasBridgeRef,
      'sec40-capstone': secCapstoneRef,
      'sec40-revision-table': secRevisionTableRef,
      'sec40-congratulations': secCongratulationsRef,
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
      className="topic40-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={8}
        totalTopicsInModule={8}
        englishTitle="Nested Collections and Real-Life Data"
        hindiTitle="Nested Collections and Real-Life Data"
        subtitleEnglish="Introduction to nested collections and capstone."
        subtitleHindi="Nested collections aur Capstone Project ka intro."
        emoji="📦"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec40-title'}
        sectionRef={secTitleRef}
        sectionId="sec40-title"
      />

      {/* Section 1: Nested Concept */}
      <div ref={secNestedConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Nested Collection क्या है? (एक के अंदर दूसरा)' : 'What Is a Nested Collection?'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'एक कलेक्शन के अंदर दूसरा कलेक्शन होना! जैसे List के अंदर List (`marks[0][1]`), या Dictionary के अंदर डिक्शनरी।'
            : 'A collection holding other collections within it! E.g. lists inside lists (`marks[0][1]`), or dictionaries inside lists.'}
        </p>
      </div>

      {/* Section 2: List of Dictionaries (The Table Standard) */}
      <div ref={secListOfDictsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'List of Dictionaries — असली Data का रूप' : 'List of Dictionaries — Tabular Standard'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          हर Dictionary एक <strong>Row (Row)</strong> है और पूरी List एक <strong>Table</strong> है:
        </p>

        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`students = [
    {"name": "Rahul", "marks": 80},
    {"name": "Aman", "marks": 70},
    {"name": "Priya", "marks": 90}
]

print(students[0]["name"])  # Rahul
print(students[2]["marks"]) # 90`}
        </pre>

        {/* Visual Table */}
        <div className="overflow-x-auto bg-purple-50/50 rounded-xl p-3 border border-purple-100">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Record Index</th>
                <th className="p-2">Name</th>
                <th className="p-2 text-right">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 font-mono text-slate-700">
              <tr><td className="p-2 text-purple-700 font-bold">students[0]</td><td className="p-2">Rahul</td><td className="p-2 text-right font-bold">80</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">students[1]</td><td className="p-2">Aman</td><td className="p-2 text-right font-bold">70</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">students[2]</td><td className="p-2">Priya</td><td className="p-2 text-right font-bold">90</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Why it matters for Pandas & APIs */}
      <div ref={secPandasBridgeRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🐼</span> {isHi ? 'Data Analytics और Pandas का सीधा संबंध' : 'Direct Bridge to Pandas & Data Analytics'}
        </h4>
        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'जब आप आगे चलकर Pandas Library या REST API पढ़ेंगे, तो सारा Data ऐसे ही List ऑफ Dictionaries में मिलेगा। इसे प्रोसेस करना सीखकर आप सीधे रियल-वर्ल्ड Analyst बन रहे हैं!'
            : 'JSON API payloads and Pandas DataFrames load directly from lists of dictionaries. Mastering this syntax bridges foundational Python to professional analytics.'}
        </p>
      </div>

      {/* Section 4: MODULE 6 FINAL CAPSTONE PROJECT */}
      <div ref={secCapstoneRef} className="bg-gradient-to-br from-purple-50 via-indigo-50/80 to-purple-50 rounded-2xl p-6 border-2 border-purple-300 shadow-md space-y-4">
        <div className="flex items-center justify-between border-b border-purple-200 pb-2">
          <div className="flex items-center space-x-3 text-purple-900 font-extrabold text-base md:text-lg">
            <span className="text-2xl">🏆</span>
            <h3>{isHi ? 'फाइनल Project: मिनी Cells Data एनालाइज़र' : 'Capstone Project: Mini Sales Data Analyzer'}</h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-700 text-white font-bold">
            Module 6 Capstone
          </span>
        </div>

        <p className="text-xs md:text-sm text-slate-700">
          {isHi
            ? 'गंदे प्रोडक्ट नामों को क्लीन करना (.strip().title()), हर Order का Revenue निकालना, Total Sales जोड़ना, और सबसे ज्यादा बिकने वाला प्रोडक्ट खोजना!'
            : 'End-to-end pipeline: clean messy SKU strings, compute order revenue, accumulate totals, group by product, and discover top-grossing items.'}
        </p>

        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`orders = [
    {"product": " pen ", "price": 10, "quantity": 5},
    {"product": "BOOK", "price": 50, "quantity": 2},
    {"product": "Pen", "price": 10, "quantity": 3},
    {"product": "Bag", "price": 500, "quantity": 1}
]

total_revenue = 0
product_revenue = {}

for order in orders:
    product = order["product"].strip().title()
    revenue = order["price"] * order["quantity"]
    total_revenue += revenue

    if product not in product_revenue:
        product_revenue[product] = 0
    product_revenue[product] += revenue

unique_products = set(product_revenue.keys())
top_product = max(product_revenue, key=product_revenue.get)

print("Total Revenue:", total_revenue)              # 680
print("Unique Products:", len(unique_products))     # 3 (Pen, Book, Bag)
print("Top Product:", top_product)                  # Bag
print("Top Product Revenue:", product_revenue[top_product]) # 500`}
        </pre>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs font-mono">
          <div className="p-3 bg-white rounded-xl border border-purple-200">
            <span className="text-slate-500 font-sans block">Total Revenue</span>
            <span className="text-base font-bold text-purple-700">₹680</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-purple-200">
            <span className="text-slate-500 font-sans block">Unique Items</span>
            <span className="text-base font-bold text-indigo-700">3 SKUs</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-purple-200">
            <span className="text-slate-500 font-sans block">Top Product</span>
            <span className="text-base font-bold text-emerald-600">Bag</span>
          </div>
          <div className="p-3 bg-white rounded-xl border border-purple-200">
            <span className="text-slate-500 font-sans block">Top Revenue</span>
            <span className="text-base font-bold text-amber-600">₹500</span>
          </div>
        </div>
      </div>

      {/* Section 5: MODULE 6 QUICK REVISION TABLE */}
      <div ref={secRevisionTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <h4 className="font-bold text-purple-900 text-base flex items-center gap-2 border-b border-purple-50 pb-2">
          <span>📚</span> {isHi ? 'Module 6 — संपूर्ण रिवीजन Table' : 'Module 6 — Quick Revision Table'}
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2.5">Concept</th>
                <th className="p-2.5">Meaning</th>
                <th className="p-2.5 text-right">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 text-slate-700">
              <tr><td className="p-2 font-bold text-purple-700">String</td><td className="p-2">Sequence of characters</td><td className="p-2 text-right font-mono">"Python"</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">Indexing</td><td className="p-2">Access one item at position</td><td className="p-2 text-right font-mono">name[0]</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">Slicing</td><td className="p-2">Extract section [start:stop]</td><td className="p-2 text-right font-mono">name[1:4]</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">List</td><td className="p-2">Ordered, mutable collection</td><td className="p-2 text-right font-mono">[10, 20]</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">Tuple</td><td className="p-2">Ordered, immutable collection</td><td className="p-2 text-right font-mono">(10, 20)</td></tr>
              <tr><td className="p-2 font-bold text-emerald-700">Set</td><td className="p-2">Collection of unique elements</td><td className="p-2 text-right font-mono">{'{10, 20}'}</td></tr>
              <tr><td className="p-2 font-bold text-amber-700">Dictionary</td><td className="p-2">Key-value mapping pairs</td><td className="p-2 text-right font-mono">{'{"age": 20}'}</td></tr>
              <tr><td className="p-2 font-bold text-purple-900">Nested Collection</td><td className="p-2">Collection inside another</td><td className="p-2 text-right font-mono">[{'{"name": "Aman"}'}]</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 6: Congratulations Banner */}
      <div ref={secCongratulationsRef} className="p-6 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-xl space-y-3 text-center">
        <div className="text-4xl animate-bounce">🎉</div>
        <h3 className="font-extrabold text-xl md:text-2xl text-amber-300">
          {isHi ? 'बधाई हो! Module 6 पूर्ण हुआ' : 'Congratulations! You Completed Module 6'}
        </h3>
        <p className="text-xs md:text-sm text-purple-200 max-w-xl mx-auto">
          {isHi
            ? 'अब आप Strings, Lists, Tuples, Sets, Dictionaries और Nested Datasets को प्रो Analyst की तरह संभाल सकते हैं!'
            : 'You now master Python collections, text cleaning methods, and tabular data structures like a professional data analyst!'}
        </p>
        <div className="pt-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-800/80 border border-purple-400 text-amber-300 font-semibold text-xs">
            {isHi ? 'अगला Module: Functions, Modules and Files ⚙️' : 'Next Module: Functions, Modules and Files ⚙️'}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Topic40NestedCollectionsProjectLesson;
