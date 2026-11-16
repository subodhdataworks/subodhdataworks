import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic43VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic43DefaultKeywordArgsLesson: React.FC<Topic43VisualLessonProps> = ({
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
  const secDefaultConceptRef = useRef<HTMLDivElement>(null);
  const secPosKeywordRef = useRef<HTMLDivElement>(null);
  const secOrderRulesRef = useRef<HTMLDivElement>(null);
  const secDiscountCalcRef = useRef<HTMLDivElement>(null);
  const secMutableTrapRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec43-title': secTitleRef,
      'sec43-default-concept': secDefaultConceptRef,
      'sec43-pos-keyword': secPosKeywordRef,
      'sec43-order-rules': secOrderRulesRef,
      'sec43-discount-calc': secDiscountCalcRef,
      'sec43-mutable-trap': secMutableTrapRef,
      'sec43-takeaway': secTakeawayRef,
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
      className="topic43-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={3}
        totalTopicsInModule={9}
        englishTitle="Default Arguments and Keyword Arguments"
        hindiTitle="Default Arguments and Keyword Arguments"
        subtitleEnglish="Default & Keyword Arguments"
        subtitleHindi="Default & Keyword Arguments"
        emoji="🏷️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec43-title'}
        sectionRef={secTitleRef}
        sectionId="sec43-title"
      />

      {/* Section 1: Default Arguments Concept */}
      <div ref={secDefaultConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Default Argument क्या है? (तयशुदा Value)' : 'What Is a Default Argument?'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'अगर यूजर कोई Value न दे, तो Function अपने आप पहले से तय डिफ़ॉल्ट Value चुन लेता है: `def greet(name="Student"):`'
            : 'If caller supplies no argument, the function falls back to a predefined fallback value.'}
        </p>

        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`def greet(name="Student"):
    print("Hello", name)

greet()        # Output: Hello Student (Default used)
greet("Rahul") # Output: Hello Rahul   (Supplied argument used)`}
        </pre>
      </div>

      {/* Section 2: Positional vs Keyword Arguments */}
      <div ref={secPosKeywordRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
          <span className="font-bold text-purple-900 text-sm block">1. Positional Arguments (क्रम से)</span>
          <pre className="bg-slate-900 text-purple-200 p-3 rounded-lg font-mono text-xs">
{`def intro(name, age):
    print(name, "is", age)

intro("Aman", 21)
# 1st arg goes to name, 2nd to age`}
          </pre>
          <p className="text-xs text-slate-500">स्थान (Position) के आधार पर Value मिलती है।</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm space-y-2">
          <span className="font-bold text-indigo-900 text-sm block">2. Keyword Arguments (नाम से)</span>
          <pre className="bg-slate-900 text-indigo-200 p-3 rounded-lg font-mono text-xs">
{`def intro(name, age):
    print(name, "is", age)

intro(age=21, name="Aman")
# Order does not matter!`}
          </pre>
          <p className="text-xs text-slate-500">नाम देने से क्रम आगे-पीछे होने पर भी फर्क नहीं पड़ता।</p>
        </div>
      </div>

      {/* Section 3: Ordering Rule */}
      <div ref={secOrderRulesRef} className="bg-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-bold text-amber-900 text-sm flex items-center gap-2">
          <span>⚠️</span> {isHi ? 'Parameter रखने का अनिवार्य नियम' : 'Parameter Ordering Rule'}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-emerald-300">
            <span className="font-bold text-emerald-700 block mb-1">✅ सही (Correct)</span>
            <code className="block bg-slate-900 text-emerald-300 p-2 rounded">
              def greet(name, city="Patna"):
            </code>
            <p className="text-slate-500 mt-1">अनिवार्य Parameter हमेशा डिफ़ॉल्ट वाले से पहले आने चाहिए।</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-rose-300">
            <span className="font-bold text-rose-700 block mb-1">❌ गलत (SyntaxError)</span>
            <code className="block bg-slate-900 text-rose-300 p-2 rounded">
              def greet(city="Patna", name):
            </code>
            <p className="text-slate-500 mt-1">डिफ़ॉल्ट के बाद बिना डिफ़ॉल्ट वाला Parameter नहीं रख सकते!</p>
          </div>
        </div>
      </div>

      {/* Section 4: Real Life Discount Calculator */}
      <div ref={secDiscountCalcRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'रियल-लाइफ: डिफ़ॉल्ट डिस्काउंट बिल कैलकुलेटर' : 'Real-Life: Default Discount Calculator'}</h3>
        </div>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`def calculate_bill(amount, discount_rate=0.10):
    discount = amount * discount_rate
    return amount - discount

# 1. Using default 10% discount:
print(calculate_bill(1000)) # Output: 900.0

# 2. Overriding with keyword 20% discount:
print(calculate_bill(1000, discount_rate=0.20)) # Output: 800.0`}
        </pre>
      </div>

      {/* Section 5: Mutable Default Trap Warning */}
      <div ref={secMutableTrapRef} className="bg-rose-50 rounded-2xl p-6 border border-rose-200 shadow-sm space-y-3">
        <h4 className="font-bold text-rose-900 text-sm md:text-base flex items-center gap-2">
          <span>🚨</span> {isHi ? 'खतरनाक गलती: Mutable Default Argument (List Trap)' : 'The Mutable Default Argument Trap'}
        </h4>
        <p className="text-xs text-slate-700">
          कदापि <code>def add_item(item, items=[]):</code> न लिखें! वह List सभी Function कॉल्स में शेयर हो जाती है। सही और सुरक्षित तरीका <code>items=None</code> रखना है:
        </p>
        <pre className="bg-slate-900 text-emerald-300 p-3 rounded-lg font-mono text-xs overflow-x-auto">
{`def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("Pen"))  # ['Pen']
print(add_item("Book")) # ['Book'] ✅ No contamination!`}
        </pre>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Default arguments से Code अधिक लचीला बनता है। Keyword arguments से Code पढ़ना आसान होता है। डिफ़ॉल्ट में कभी भी mutable Objects (जैसे []) न रखें।'
            : 'Default arguments make inputs optional; keyword arguments clarify call sites. Never use mutable defaults like []—always default to None.'}
        </p>
      </div>
    </div>
  );
};
export default Topic43DefaultKeywordArgsLesson;
