import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic38VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic38DictionariesKeyValueLesson: React.FC<Topic38VisualLessonProps> = ({
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
  const secAccessGetRef = useRef<HTMLDivElement>(null);
  const secCrudRef = useRef<HTMLDivElement>(null);
  const secMethodsRef = useRef<HTMLDivElement>(null);
  const secProductRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec38-title': secTitleRef,
      'sec38-concept': secConceptRef,
      'sec38-access-get': secAccessGetRef,
      'sec38-crud': secCrudRef,
      'sec38-methods': secMethodsRef,
      'sec38-product': secProductRef,
      'sec38-takeaway': secTakeawayRef,
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
      className="topic38-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={6}
        totalTopicsInModule={8}
        englishTitle="Dictionaries and Key-Value Pairs"
        hindiTitle="Dictionaries and Key-Value Pairs"
        subtitleEnglish="Introduction to key-value mapped dictionaries."
        subtitleHindi="Dictionary ka structure aur key-value mapping."
        emoji="📖"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec38-title'}
        sectionRef={secTitleRef}
        sectionId="sec38-title"
      />

      {/* Section 1: Concept & Registration Form Analogy */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Dictionary क्या है? (Key-Value का ढांचा)' : 'What Is a Dictionary?'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'रजिस्ट्रेशन फॉर्म की तरह: Name ➔ Rahul, Age ➔ 21, Course ➔ Data Analytics. इसे Python में कर्ली ब्रैकेट `{}` में कोलन (`:`) के साथ लिखते हैं।'
            : 'Just like an admission form with labeled fields: Name ➔ Rahul, Age ➔ 21. Enclosed in `{}` with key-value pairs separated by colons (`:`).'}
        </p>

        {/* Visual Key-Value Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-900 font-bold">
                <th className="p-2.5">Key (लेबल/चाबी)</th>
                <th className="p-2.5 text-right">Value (Value/Data)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50 font-mono text-slate-700">
              <tr><td className="p-2 text-purple-700 font-bold">"name"</td><td className="p-2 text-right">"Rahul"</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">"age"</td><td className="p-2 text-right">21</td></tr>
              <tr><td className="p-2 text-purple-700 font-bold">"course"</td><td className="p-2 text-right">"Data Analytics"</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Accessing & get() Method */}
      <div ref={secAccessGetRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'Value पढ़ना: [] बनाम get() Function' : 'Reading Values: [] vs get()'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 space-y-2">
            <span className="font-bold text-purple-900 text-xs block">1. Square Brackets []</span>
            <code className="block bg-slate-900 text-purple-300 p-2.5 rounded font-mono text-xs">
              student["name"] # ➔ "Rahul"
            </code>
            <p className="text-[11px] text-rose-600">
              ⚠️ अगर Key मौजूद नहीं है, तो Program <strong>KeyError</strong> देकर क्रैश हो जाएगा!
            </p>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-900 text-xs block">2. Safe .get() Method ⭐</span>
            <code className="block bg-slate-900 text-emerald-300 p-2.5 rounded font-mono text-xs">
              student.get("city", "Not Available")
            </code>
            <p className="text-[11px] text-emerald-700">
              ✅ सुरक्षित तरीका! Key न मिलने पर क्रैश होने के बजाय डिफ़ॉल्ट Value देता है।
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Modifying, Adding & Removing */}
      <div ref={secCrudRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'Value बदलना, नई Key जोड़ना और हटाना' : 'Updating, Adding, and Removing Keys'}</h3>
        </div>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`student["age"] = 22       # 1. Update existing value
student["city"] = "Patna" # 2. Add brand new key
student.pop("city")        # 3. Remove key and return its value`}
        </pre>
      </div>

      {/* Section 4: Dictionary Methods & Looping */}
      <div ref={secMethodsRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
          <span>🔄</span> {isHi ? 'Dictionary पर Loop चलाना (.items())' : 'Iterating with .items()'}
        </h4>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`for key, value in student.items():
    print(key, ":", value)

# Output:
# name : Rahul
# age : 21
# course : Data Analytics`}
        </pre>
      </div>

      {/* Section 5: Real-Life Product Information */}
      <div ref={secProductRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>💻</span> {isHi ? 'रियल-लाइफ केस: प्रोडक्ट इन्वेंट्री और कुल कीमत' : 'Real-Life Case: Product Inventory Valuation'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`product = {
    "name": "Laptop",
    "price": 45000,
    "quantity": 2
}

total = product["price"] * product["quantity"]

print("Product:", product["name"])     # Laptop
print("Total Value:", total)           # 90000`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Dictionaries Data को अर्थपूर्ण Key-Value में संगठित करती हैं। सुरक्षित एक्सेस के लिए .get() का use करें और Loop में .items() से दोनों Values एक साथ पढ़ें।'
            : 'Dictionaries represent JSON-like key-value mappings. Use .get() to prevent KeyErrors, and traverse keys/values cleanly via .items().'}
        </p>
      </div>
    </div>
  );
};
export default Topic38DictionariesKeyValueLesson;
