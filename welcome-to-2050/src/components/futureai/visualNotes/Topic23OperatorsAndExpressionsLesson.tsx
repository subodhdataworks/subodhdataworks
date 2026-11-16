import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic23VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic23OperatorsAndExpressionsLesson: React.FC<Topic23VisualLessonProps> = ({
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
  const secWhatIsRef = useRef<HTMLDivElement>(null);
  const secArithmeticRef = useRef<HTMLDivElement>(null);
  const secAssignmentRef = useRef<HTMLDivElement>(null);
  const secPrecedenceRef = useRef<HTMLDivElement>(null);
  const secShoppingRef = useRef<HTMLDivElement>(null);
  const secRevisionRef = useRef<HTMLDivElement>(null);
  const secProjectRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec23-title': secTitleRef,
      'sec23-what-is': secWhatIsRef,
      'sec23-arithmetic': secArithmeticRef,
      'sec23-assignment': secAssignmentRef,
      'sec23-precedence': secPrecedenceRef,
      'sec23-shopping': secShoppingRef,
      'sec23-revision': secRevisionRef,
      'sec23-project': secProjectRef,
      'sec23-takeaway': secTakeawayRef,
    };

    const targetEl = refMap[activeSectionId]?.current;
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      const timer = setTimeout(() => {
        if (onScrollSettled) onScrollSettled();
        if (onSectionRectChange) {
          const rect = targetEl.getBoundingClientRect();
          onSectionRectChange({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            width: rect.width,
            height: rect.height,
          });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [activeSectionId, onScrollSettled, onSectionRectChange]);

  const handleLanguageToggle = (lang: 'hindi' | 'english') => {
    setCurrentLang(lang);
    if (onLanguageChange) onLanguageChange(lang);
  };

    const isHi = currentLang === 'hindi';
  const isHindi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic23-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={7}
        totalTopicsInModule={8}
        englishTitle="Operators and Expressions"
        hindiTitle="Operators and Expressions"
        subtitleEnglish="7 arithmetic operators, shortcuts, and precedence."
        subtitleHindi="7 Arithmetic Operators, Shortcuts aur Precedence."
        emoji="➕"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec23-title'}
        sectionRef={secTitleRef}
        sectionId="sec23-title"
      />

      {/* ── 2. ARITHMETIC OPERATORS TABLE ── */}
      <div
        ref={secArithmeticRef}
        id="sec23-arithmetic"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-arithmetic'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🔢</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? '7 अंकगणितीय Operators (7 Arithmetic Operators)' : 'The 7 Essential Arithmetic Operators'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'Python के सभी गणितीय चिन्ह और उनके परिणाम:' : 'Complete reference table of Python math operators:'}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs font-mono text-xs sm:text-sm">
          <table className="w-full text-left">
            <thead className="bg-purple-100/70 text-purple-950 font-sans font-bold">
              <tr>
                <th className="py-2.5 px-3 sm:px-4">Operator</th>
                <th className="py-2.5 px-3 sm:px-4">{isHindi ? 'अर्थ' : 'Meaning'}</th>
                <th className="py-2.5 px-3 sm:px-4">Example</th>
                <th className="py-2.5 px-3 sm:px-4 text-right">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-indigo-700">+</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'जोड़ (Addition)' : 'Addition'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">10 + 5</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-emerald-600">15</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-indigo-700">-</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'घटाव (Subtraction)' : 'Subtraction'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">10 - 5</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-emerald-600">5</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-indigo-700">*</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'गुणा (Multiplication)' : 'Multiplication'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">10 * 5</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-emerald-600">50</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-indigo-700">/</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'भाग (Division Float)' : 'Float Division'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">10 / 5</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-sky-600">2.0</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-indigo-700">//</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'फ्लोर भाग (दशमलव हटाकर)' : 'Floor Division (Integer)'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">11 // 2</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-purple-600">5</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-amber-700">%</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'Modulus (शेषफल / Remainder)' : 'Modulus (Remainder)'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">11 % 2</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-amber-600">1</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-purple-700">**</td>
                <td className="py-2.5 px-3 sm:px-4 font-sans">{isHindi ? 'घात (Exponent / Power)' : 'Exponentiation (Power)'}</td>
                <td className="py-2.5 px-3 sm:px-4 text-slate-600">2 ** 3</td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-purple-700">8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 3. ASSIGNMENT OPERATORS & SHORTCUTS ── */}
      <div
        ref={secAssignmentRef}
        id="sec23-assignment"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-assignment'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">⚡</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'शॉर्टकट Assignment Operators (+=, -=, *=)' : 'Compound Assignment Shortcuts (+=, -=, *=)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Variable के वर्तमान Value को UPDATE करने का सबसे तेज़ तरीका:'
                : 'Modify and update the existing value stored in a variable:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 shadow-inner">
            <p className="text-slate-400"># Traditional update</p>
            <p>score = 50</p>
            <p className="text-amber-300">score = score + 10</p>
            <p className="pt-2 text-slate-400"># Pro Python Shortcut (+=)</p>
            <p className="text-emerald-400 font-bold">score += 10</p>
            <p className="pt-1 text-indigo-400">print(score) <span className="text-slate-400 font-sans"># 60</span></p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 font-sans text-xs flex flex-col justify-between">
            <div className="space-y-2 text-purple-950 font-mono">
              <div className="p-2 bg-white rounded-lg border border-purple-100">
                <b>score += 10</b> ➔ score = score + 10
              </div>
              <div className="p-2 bg-white rounded-lg border border-purple-100">
                <b>score -= 5</b> ➔ score = score - 5
              </div>
              <div className="p-2 bg-white rounded-lg border border-purple-100">
                <b>score *= 2</b> ➔ score = score * 2
              </div>
            </div>
            <p className="text-[11px] text-purple-800 mt-3 font-sans">
              ✓ {isHindi ? 'यह Code को छोटा और तेज बनाता है।' : 'Concise, idiomatic, and clean Python style.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. OPERATOR PRECEDENCE (PEMDAS / BODMAS) ── */}
      <div
        ref={secPrecedenceRef}
        id="sec23-precedence"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-precedence'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🎯</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Operator प्रेसिडेंस (Calculation का क्रम)' : 'Operator Precedence: Multiplication before Addition'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Python पहले गुणा (*) करता है, फिर जोड़ (+)। कोष्ठक ( ) लगाने से क्रम बदला जा सकता है:'
                : 'Python evaluates multiplication (*) before addition (+). Use parentheses ( ) to enforce order:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300">
            <span className="font-sans font-bold text-amber-950 text-xs">Without Parentheses</span>
            <p className="text-slate-800 mt-2 font-bold text-sm">print(10 + 5 * 2)</p>
            <div className="mt-2 text-slate-600 text-[11px] font-sans">
              <p>1. Pehle 5 * 2 = 10</p>
              <p>2. Fir 10 + 10 = 20</p>
            </div>
            <p className="mt-2 text-amber-900 font-bold text-sm">Output: 20</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300">
            <span className="font-sans font-bold text-emerald-950 text-xs">With Parentheses ( )</span>
            <p className="text-slate-800 mt-2 font-bold text-sm">print((10 + 5) * 2)</p>
            <div className="mt-2 text-slate-600 text-[11px] font-sans">
              <p>1. Pehle (10 + 5) = 15</p>
              <p>2. Fir 15 * 2 = 30</p>
            </div>
            <p className="mt-2 text-emerald-900 font-bold text-sm">Output: 30</p>
          </div>
        </div>
      </div>

      {/* ── 5. SHOPPING BILL CASE STUDY ── */}
      <div
        ref={secShoppingRef}
        id="sec23-shopping"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-shopping'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-blue-100 text-blue-700 rounded-2xl text-xl">🛍️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: शॉपिंग बिल और डिस्काउंट' : 'Real-Life Case Study: Shopping Bill & Discount'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'Operators का व्यावहारिक उपयोग:' : 'Practical multi-step operator calculation:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-1.5 shadow-inner">
          <p>price = <span className="text-amber-300">100</span></p>
          <p>quantity = <span className="text-amber-300">3</span></p>
          <p>discount = <span className="text-amber-300">50</span></p>
          <p className="pt-1 text-slate-400"># Calculate subtotal and final bill</p>
          <p>total = price * quantity <span className="text-slate-500 font-sans text-xs"># 300</span></p>
          <p>final_bill = total - discount <span className="text-slate-500 font-sans text-xs"># 250</span></p>
          <p className="pt-1 text-indigo-400">print(<span className="text-amber-300">"Total:"</span>, total)</p>
          <p className="text-indigo-400">print(<span className="text-amber-300">"Final Bill:"</span>, final_bill)</p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">CUSTOMER RECEIPT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Total: 300 | Final Bill: 250</span>
          </div>
        </div>
      </div>

      {/* ── 6. FINAL BEGINNER PROJECT: STUDENT MARKS CALCULATOR ── */}
      <div
        ref={secProjectRef}
        id="sec23-project"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-project'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border-2 border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-xl shadow-xs">🏆</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Module 4 का फाइनल Project: स्टूडेंट मार्क्स कैलकुलेटर' : 'Module 4 Capstone Project: Student Marks Calculator'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Syntax, Variables, Input, टाइप कन्वर्जन, Operators और Output का एक साथ प्रयोग!'
                : 'Combining syntax, variables, float typecasting, input(), operators, and formatted output!'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1.5 shadow-inner">
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-700 text-slate-400 text-xs mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2">marks_calculator.py</span>
            </div>
            <p className="text-slate-400"># 1. User input</p>
            <p>name = input(<span className="text-amber-300">"Enter name: "</span>)</p>
            <p>eng = float(input(<span className="text-amber-300">"English: "</span>))</p>
            <p>math = float(input(<span className="text-amber-300">"Maths: "</span>))</p>
            <p>sci = float(input(<span className="text-amber-300">"Science: "</span>))</p>
            <p className="text-slate-400 pt-1"># 2. Operators</p>
            <p className="text-emerald-400">total = eng + math + sci</p>
            <p className="text-emerald-400">average = total / 3</p>
            <p className="text-slate-400 pt-1"># 3. Formatted output</p>
            <p>print(<span className="text-amber-300">"Student:"</span>, name)</p>
            <p>print(<span className="text-amber-300">"Total:"</span>, total)</p>
            <p>print(<span className="text-amber-300">"Average:"</span>, average)</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white flex flex-col justify-between shadow-inner">
            <div className="space-y-1">
              <span className="text-slate-500 text-[11px] font-sans font-bold">TERMINAL EXECUTION:</span>
              <p className="text-slate-400 mt-2">Enter name: <span className="text-amber-300">Rahul</span></p>
              <p className="text-slate-400">English: <span className="text-amber-300">80</span></p>
              <p className="text-slate-400">Maths: <span className="text-amber-300">90</span></p>
              <p className="text-slate-400">Science: <span className="text-amber-300">70</span></p>
              <div className="pt-2 border-t border-slate-700 mt-2 space-y-1 text-emerald-400 font-bold">
                <p>Student: Rahul</p>
                <p>Total Marks: 240.0</p>
                <p>Average Marks: 80.0</p>
              </div>
            </div>
            <span className="text-[10px] text-emerald-500 font-sans mt-3">
              🎉 {isHindi ? 'परफेक्ट! सभी 7 कॉन्सेप्ट्स का एक साथ सफल प्रदर्शन!' : 'Perfect execution combining all Module 4 concepts!'}
            </span>
          </div>
        </div>
      </div>

      {/* ── 7. MODULE 4 FINAL REVISION TABLE ── */}
      <div
        ref={secRevisionRef}
        id="sec23-revision"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-revision'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">📋</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Module 4 का फाइनल रिवीजन (Complete Summary)' : 'Module 4 Final Quick Revision Table'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'सभी 7 टॉपिक्स का त्वरित सारांश:' : 'Summary of all 7 core topics in Module 4:'}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-purple-100/70 text-purple-950 font-bold">
              <tr>
                <th className="py-2.5 px-4">{isHindi ? 'टॉपिक' : 'Topic'}</th>
                <th className="py-2.5 px-4">{isHindi ? 'मुख्य सीख (Main Learning)' : 'Main Learning'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-50">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">1. Syntax & Indentation</td>
                <td className="py-2.5 px-4">{isHindi ? 'सही और पठनीय Code लिखना (4 स्पेस ग्रुपिंग, # कमेंट्स)।' : 'Grammar rules, 4-space code grouping, explanatory # comments.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">2. print() and Output</td>
                <td className="py-2.5 px-4">{isHindi ? 'स्क्रीन पर Output दिखाना (sep, end, f-strings)।' : 'Display values on console, sep, end, and f-strings.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">3. Variables</td>
                <td className="py-2.5 px-4">{isHindi ? 'मेमोरी में Values को स्टोर व UPDATE करना (= Operator)।' : 'Store, update, and reuse values in memory using =.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">4. Data Types & type()</td>
                <td className="py-2.5 px-4">{isHindi ? 'str, int, float, bool की पहचान व type() से जांच।' : 'Understand str, int, float, bool and inspect with type().'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">5. Type Conversion</td>
                <td className="py-2.5 px-4">{isHindi ? 'int(), float(), str() से Data Type बदलना।' : 'Typecast strings and numbers for arithmetic operations.'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">6. input()</td>
                <td className="py-2.5 px-4">{isHindi ? 'कीबोर्ड से User Input लेना (हमेशा string लौटाता है)।' : 'Receive dynamic keyboard input (always returns str).'}</td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-purple-900">7. Operators & Expressions</td>
                <td className="py-2.5 px-4">{isHindi ? '7 अंकगणितीय Operator, प्रेसिडेंस और गणनाएं करना।' : 'Arithmetic operators, precedence rules, and expressions.'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 8. KEY TAKEAWAY & NEXT MODULE ── */}
      <div
        ref={secTakeawayRef}
        id="sec23-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec23-takeaway'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl p-2 bg-purple-200/80 rounded-2xl">🎓</span>
          <div>
            <h4 className="font-extrabold text-purple-950 text-base sm:text-lg">
              {isHindi ? 'हार्दिक बधाई! Module 4 पूरा हुआ' : 'Congratulations! Module 4 Completed!'}
            </h4>
            <p className="text-xs sm:text-sm text-purple-900 mt-1 leading-relaxed">
              {isHindi
                ? 'अब आप Python में Variables बना सकते हैं, Data Types समझ सकते हैं, User Input ले सकते हैं और पूर्ण Program चला सकते हैं!'
                : 'You have mastered core Python basics: variables, types, input, casting, and math operators.'}
            </p>
            <div className="mt-3 inline-flex items-center gap-2 bg-purple-200/70 text-purple-950 px-3 py-1.5 rounded-xl text-xs font-bold">
              <span>⏩</span>
              <span>
                {isHindi
                  ? 'अगला Module: Conditions, Loops and Problem-Solving (if-else, while, for loops)'
                  : 'Next Module: Conditions, Loops and Problem-Solving (if-else, loops)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
