import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic45VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic45ModulesAndImportsLesson: React.FC<Topic45VisualLessonProps> = ({
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
  const secImportStylesRef = useRef<HTMLDivElement>(null);
  const secMathRandomRef = useRef<HTMLDivElement>(null);
  const secCustomModuleRef = useRef<HTMLDivElement>(null);
  const secLibraryBridgeRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec45-title': secTitleRef,
      'sec45-concept': secConceptRef,
      'sec45-import-styles': secImportStylesRef,
      'sec45-math-random': secMathRandomRef,
      'sec45-custom-module': secCustomModuleRef,
      'sec45-library-bridge': secLibraryBridgeRef,
      'sec45-takeaway': secTakeawayRef,
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
      className="topic45-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={5}
        totalTopicsInModule={9}
        englishTitle="Python Modules and Imports"
        hindiTitle="Python Modules and Imports"
        subtitleEnglish="Modules and standard library imports"
        subtitleHindi="Modules and standard library imports"
        emoji="📦"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec45-title'}
        sectionRef={secTitleRef}
        sectionId="sec45-title"
      />

      {/* Section 1: Concept & Toolbox Analogy */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'Module क्या है? (टूलबॉक्स का उदाहरण)' : 'What Is a Module? (Toolbox Analogy)'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'Module एक Python File (.py) है जिसमें कई फंक्शन्स और टूल्स पहले से लिखे होते हैं। जैसे हर बार हथौड़ा खुद नहीं बनाना पड़ता, वैसे ही `import math` करके तैयार टूल्स इस्तेमाल किए जाते हैं।'
            : 'A module is simply a `.py` file hosting functions, variables, and tools. Instead of hand-crafting formulas, import curated tools.'}
        </p>
      </div>

      {/* Section 2: 3 Import Styles */}
      <div ref={secImportStylesRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 space-y-2">
          <span className="font-bold text-purple-900 font-sans block text-sm">1. Full Import</span>
          <code className="block bg-slate-900 text-purple-300 p-2 rounded">
            import math<br />
            print(math.sqrt(25)) # 5.0
          </code>
          <p className="font-sans text-slate-600">पूरा Module लोड करके डॉट (.) से एक्सेस।</p>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 space-y-2">
          <span className="font-bold text-indigo-900 font-sans block text-sm">2. from ... import</span>
          <code className="block bg-slate-900 text-indigo-300 p-2 rounded">
            from math import sqrt<br />
            print(sqrt(81)) # 9.0
          </code>
          <p className="font-sans text-slate-600">सिर्फ इच्छित Function को सीधे बुलाएं।</p>
        </div>

        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-2">
          <span className="font-bold text-emerald-900 font-sans block text-sm">3. Alias (उपनाम)</span>
          <code className="block bg-slate-900 text-emerald-300 p-2 rounded">
            import math as m<br />
            print(m.sqrt(16)) # 4.0
          </code>
          <p className="font-sans text-slate-600">छोटे नाम से Module को शॉर्टकट देना।</p>
        </div>
      </div>

      {/* Section 3: math and random in Action */}
      <div ref={secMathRandomRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'math और random Modules का उपयोग' : 'math & random Modules in Action'}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`import math

print(math.ceil(4.2))       # 5 (ऊपर का Integer)
print(math.floor(4.8))      # 4 (नीचे का Integer)
print(math.factorial(5))    # 120 (5 x 4 x 3 x 2 x 1)`}
          </pre>

          <pre className="bg-slate-900 text-indigo-200 p-4 rounded-xl font-mono text-xs overflow-x-auto">
{`import random

# Random 1 to 10 integer:
roll = random.randint(1, 10)

# Random item from list:
students = ["Rahul", "Aman", "Priya"]
lucky_one = random.choice(students)
print("Winner:", lucky_one)`}
          </pre>
        </div>
      </div>

      {/* Section 4: Creating Custom Module */}
      <div ref={secCustomModuleRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-3">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'अपना खुद का Module बनाना (calculator.py)' : 'Creating Your Own Custom Module'}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="bg-slate-900 text-amber-200 p-3.5 rounded-xl space-y-1">
            <span className="text-slate-400 block font-sans"># File 1: calculator.py</span>
            def add(a, b):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return a + b<br />
            def multiply(a, b):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return a * b
          </div>
          <div className="bg-slate-900 text-emerald-300 p-3.5 rounded-xl space-y-1">
            <span className="text-slate-400 block font-sans"># File 2: main.py</span>
            import calculator<br /><br />
            print(calculator.add(10, 20)) # 30<br />
            print(calculator.multiply(5, 4)) # 20
          </div>
        </div>
      </div>

      {/* Section 5: Library Bridge */}
      <div ref={secLibraryBridgeRef} className="bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 rounded-2xl p-5 border border-purple-200 shadow-sm space-y-2">
        <h4 className="font-bold text-purple-900 text-sm flex items-center gap-2">
          <span>📚</span> {isHi ? 'Library क्या है? (NumPy, Pandas का प्रवेश द्वार)' : 'What Is a Library? Bridge to NumPy & Pandas'}
        </h4>
        <p className="text-xs text-slate-700">
          एक Library कई Modules और पैकेजों का एक संपूर्ण संग्रह होती है। अगले Modules में हम <strong>NumPy</strong> (संख्यात्मक Calculation) और <strong>Pandas</strong> (Data विश्लेषण) जैसी प्रसिद्ध लाइब्रेरियों को ऐसे ही <code>import pandas as pd</code> करके उपयोग करेंगे!
        </p>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Module Code को File-लेवल पर व्यवस्थित करते हैं। import से बिल्ट-इन, कस्टम और थर्ड-पार्टी (Pandas/NumPy) टूल्स का विशाल संसार खुल जाता है।'
            : 'Modules structure code across files. Imports unlock Python vast ecosystem of standard, custom, and third-party data libraries.'}
        </p>
      </div>
    </div>
  );
};
export default Topic45ModulesAndImportsLesson;
