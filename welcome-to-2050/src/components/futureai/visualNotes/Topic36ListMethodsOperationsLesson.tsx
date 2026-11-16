import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic36VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic36ListMethodsOperationsLesson: React.FC<Topic36VisualLessonProps> = ({
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
  const secAddRemoveRef = useRef<HTMLDivElement>(null);
  const secSortReverseRef = useRef<HTMLDivElement>(null);
  const secTableRef = useRef<HTMLDivElement>(null);
  const secCartRef = useRef<HTMLDivElement>(null);
  const secInPlaceTrapRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec36-title': secTitleRef,
      'sec36-concept': secConceptRef,
      'sec36-add-remove': secAddRemoveRef,
      'sec36-sort-reverse': secSortReverseRef,
      'sec36-table': secTableRef,
      'sec36-cart': secCartRef,
      'sec36-inplace-trap': secInPlaceTrapRef,
      'sec36-takeaway': secTakeawayRef,
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
      className="topic36-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={4}
        totalTopicsInModule={8}
        englishTitle="List Methods and Operations"
        hindiTitle="List Methods and Operations"
        subtitleEnglish="Introduction to list methods and operations."
        subtitleHindi="List methods aur shopping cart analogy."
        emoji="🛠️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec36-title'}
        sectionRef={secTitleRef}
        sectionId="sec36-title"
      />

      {/* Section 1: Concept */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'List Methods की आवश्यकता क्यों है?' : 'Why List Methods? (Dynamic Collections)'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'शॉपिंग कार्ट की तरह List लगातार बदलती है: नए सामान डालना (append), गलत सामान हटाना (remove), या बीच में सामान रखना (insert)।'
            : 'Lists represent dynamic collections like a shopping cart: append new items, pop by index, remove by value, or re-sort.'}
        </p>
      </div>

      {/* Section 2: Adding and Removing */}
      <div ref={secAddRemoveRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-2">
          <span className="font-bold text-purple-900 font-sans text-sm block">➕ जोड़ने वाले Methods</span>
          <div className="space-y-1.5 text-slate-700">
            <div><strong className="text-purple-700 font-bold">append("X"):</strong> अंत में 1 आइटम जोड़ेगा</div>
            <div><strong className="text-purple-700 font-bold">extend(["A","B"]):</strong> कई आइटम्स अलग-अलग जोड़ेगा</div>
            <div><strong className="text-purple-700 font-bold">insert(1, "X"):</strong> Index 1 पर घुसाएगा</div>
          </div>
        </div>

        <div className="bg-rose-50 p-4 rounded-xl border border-rose-200 space-y-2">
          <span className="font-bold text-rose-900 font-sans text-sm block">➖ हटाने वाले Methods</span>
          <div className="space-y-1.5 text-slate-700">
            <div><strong className="text-rose-700 font-bold">remove("X"):</strong> नाम से खोजकर पहली बार हटाएगा</div>
            <div><strong className="text-rose-700 font-bold">pop(1):</strong> Index 1 से हटाएगा और Return करेगा</div>
            <div><strong className="text-rose-700 font-bold">clear():</strong> List के सारे आइटम्स खाली कर देगा</div>
          </div>
        </div>
      </div>

      {/* Section 3: Sorting & Reversing */}
      <div ref={secSortReverseRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'sort() और reverse() — क्रमबद्ध करना' : 'sort() and reverse()'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`marks = [80, 50, 90, 70]

marks.sort()                 # [50, 70, 80, 90] (Ascending - छोटे से बड़ा)
marks.sort(reverse=True)     # [90, 80, 70, 50] (Descending - बड़े से छोटा)

numbers = [10, 20, 30]
numbers.reverse()            # [30, 20, 10] (उल्टा कर देता है)`}
        </pre>
      </div>

      {/* Section 4: Full Reference Table */}
      <div ref={secTableRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>📋</span> {isHi ? '10 प्रमुख List Methods Table' : 'Complete 10 List Methods Reference'}
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2">Method</th>
                <th className="p-2">Purpose</th>
                <th className="p-2 text-right">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2 font-bold text-purple-700">append(x)</td><td className="p-2 font-sans">Add one item at end</td><td className="p-2 text-right">fruits.append("Banana")</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">extend(list)</td><td className="p-2 font-sans">Add multiple items</td><td className="p-2 text-right">fruits.extend(["A", "B"])</td></tr>
              <tr><td className="p-2 font-bold text-purple-700">insert(i, x)</td><td className="p-2 font-sans">Insert at position i</td><td className="p-2 text-right">fruits.insert(1, "Mango")</td></tr>
              <tr><td className="p-2 font-bold text-rose-600">remove(x)</td><td className="p-2 font-sans">Remove by value</td><td className="p-2 text-right">fruits.remove("Mango")</td></tr>
              <tr><td className="p-2 font-bold text-rose-600">pop([i])</td><td className="p-2 font-sans">Remove and return item</td><td className="p-2 text-right">fruits.pop(1)</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">sort()</td><td className="p-2 font-sans">Sort in ascending order</td><td className="p-2 text-right">marks.sort()</td></tr>
              <tr><td className="p-2 font-bold text-indigo-700">reverse()</td><td className="p-2 font-sans">Reverse current items</td><td className="p-2 text-right">numbers.reverse()</td></tr>
              <tr><td className="p-2 font-bold text-emerald-600">count(x)</td><td className="p-2 font-sans">Count occurrences</td><td className="p-2 text-right">numbers.count(10)</td></tr>
              <tr><td className="p-2 font-bold text-emerald-600">index(x)</td><td className="p-2 font-sans">Find first index</td><td className="p-2 text-right">numbers.index(20)</td></tr>
              <tr><td className="p-2 font-bold text-slate-500">clear()</td><td className="p-2 font-sans">Remove all items</td><td className="p-2 text-right">cart.clear()</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Real-Life Shopping Cart Case Study */}
      <div ref={secCartRef} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>🛒</span> {isHi ? 'रियल-लाइफ केस: ई-कॉमर्स शॉपिंग कार्ट' : 'Real-Life Case: E-Commerce Shopping Cart'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`cart = ["Milk", "Bread"]

cart.append("Eggs")    # ["Milk", "Bread", "Eggs"]
cart.remove("Bread")   # ["Milk", "Eggs"]
cart.insert(1, "Rice") # ["Milk", "Rice", "Eggs"]

print("Final Cart:", cart)
# Output: ['Milk', 'Rice', 'Eggs']`}
        </pre>
      </div>

      {/* Section 6: In-Place Trap Warning */}
      <div ref={secInPlaceTrapRef} className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-2">
        <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>⚠️</span> {isHi ? 'सावधानी: इन-प्लेस Methods None लौटाते हैं!' : 'Crucial: In-Place Methods Return None!'}
        </h4>
        <p className="text-xs text-slate-700">
          `numbers.sort()` खुद की List को बदलता है और <code>None</code> Return करता है! कभी भी <code>sorted_list = numbers.sort()</code> न लिखें, इससे Variable खाली (None) हो जाएगा। नई List के लिए <code>sorted(numbers)</code> इस्तेमाल करें।
        </p>
      </div>

      {/* Section 7: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'List methods List को गतिशील रूप से संभालने के लिए हैं। append अंत में जोड़ता है, pop Index से निकालता है, और sort Data को सीधे Sort करता है।'
            : 'List methods provide dynamic in-place operations. append pushes to the tail, pop extracts by index, and sort arranges values directly.'}
        </p>
      </div>
    </div>
  );
};
export default Topic36ListMethodsOperationsLesson;
