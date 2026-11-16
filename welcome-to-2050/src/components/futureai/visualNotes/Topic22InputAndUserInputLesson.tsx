import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic22VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic22InputAndUserInputLesson: React.FC<Topic22VisualLessonProps> = ({
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
  const secAnatomyRef = useRef<HTMLDivElement>(null);
  const secReturnsStrRef = useRef<HTMLDivElement>(null);
  const secConvertNumRef = useRef<HTMLDivElement>(null);
  const secShopBillRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec22-title': secTitleRef,
      'sec22-what-is': secWhatIsRef,
      'sec22-anatomy': secAnatomyRef,
      'sec22-returns-str': secReturnsStrRef,
      'sec22-convert-num': secConvertNumRef,
      'sec22-shop-bill': secShopBillRef,
      'sec22-takeaway': secTakeawayRef,
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
      className="topic22-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={6}
        totalTopicsInModule={8}
        englishTitle="input() and User Input"
        hindiTitle="input() and User Input"
        subtitleEnglish="input() captures dynamic keyboard input from users."
        subtitleHindi="input() function: User se dynamic text input lena."
        emoji="⌨️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec22-title'}
        sectionRef={secTitleRef}
        sectionId="sec22-title"
      />

      {/* ── 2. WHAT IS input() (LIVE INTERACTION FLOW) ── */}
      <div
        ref={secWhatIsRef}
        id="sec22-what-is"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-what-is'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">💡</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'input() कैसे काम करता है? (Interactive Flow)' : 'How input() Works: Interactive Flow'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Program संदेश दिखाता है ➔ यूजर टाइप करता है ➔ परिणाम मिलता है:'
                : 'Prompt displayed ➔ User types value ➔ Program stores and responds:'}
            </p>
          </div>
        </div>

        {/* Code & Terminal simulation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 shadow-inner">
            <p className="text-slate-400"># Ask user for their name</p>
            <p className="text-white">
              name = <span className="text-sky-400">input</span>(<span className="text-amber-300">"Enter your name: "</span>)
            </p>
            <p className="text-white">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">"Hello"</span>, name)
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white flex flex-col justify-between shadow-inner">
            <div>
              <span className="text-slate-500 text-[11px] font-sans">LIVE CONSOLE INTERACTION:</span>
              <p className="mt-2 text-slate-300">
                Enter your name: <span className="text-amber-300 font-bold underline">Rahul</span>
              </p>
              <p className="text-emerald-400 font-bold text-sm mt-1">Hello Rahul</p>
            </div>
            <p className="text-[10px] text-slate-500 font-sans mt-3">
              {isHindi ? '👉 input() ने "Rahul" लिया और name Variable में सेव कर दिया।' : '👉 Captured "Rahul" and stored it safely in variable name.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. ANATOMY OF input() ── */}
      <div
        ref={secAnatomyRef}
        id="sec22-anatomy"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-anatomy'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-blue-100 text-blue-700 rounded-2xl text-xl">🔍</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'input() Statement के अंग (Anatomy)' : 'Anatomy of an input() Statement'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'हर हिस्से की भूमिका समझें:' : 'Inspect the role of each component:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="font-mono font-bold text-indigo-700">name</span>
            <p className="font-bold text-slate-900 mt-1">{isHindi ? 'Variable' : 'Variable'}</p>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'यूजर का Input स्टोर करता है' : 'Stores the captured data'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono font-bold text-slate-700">=</span>
            <p className="font-bold text-slate-900 mt-1">{isHindi ? 'Assignment' : 'Assignment'}</p>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'Input को Variable में डालता है' : 'Binds result to variable'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200">
            <span className="font-mono font-bold text-sky-700">input()</span>
            <p className="font-bold text-slate-900 mt-1">{isHindi ? 'Function' : 'Function'}</p>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'यूजर टाइपिंग का इंतज़ार करता है' : 'Reads keyboard text'}</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="font-mono font-bold text-amber-700">"Prompt"</span>
            <p className="font-bold text-slate-900 mt-1">{isHindi ? 'Prompt संदेश' : 'Prompt Message'}</p>
            <p className="text-slate-600 text-[11px] mt-0.5">{isHindi ? 'यूजर को दिखने वाला निर्देश' : 'Instructions for the user'}</p>
          </div>
        </div>
      </div>

      {/* ── 4. ALWAYS RETURNS A STRING ── */}
      <div
        ref={secReturnsStrRef}
        id="sec22-returns-str"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-returns-str'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">⚠️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'सबसे ज़रूरी बात: input() हमेशा String देता है!' : 'Crucial Fact: input() Always Returns a String'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'चाहे यूजर संख्या 20 भी टाइप करे, Python उसे टेक्स्ट "20" ही मानता है:'
                : 'Even if the user types numeric 20, Python treats it as text string "20":'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300 font-mono text-xs">
          <div className="bg-slate-900 text-white p-3 rounded-xl space-y-1">
            <p>age = <span className="text-sky-300">input</span>(<span className="text-amber-300">"Enter your age: "</span>)</p>
            <p><span className="text-indigo-400">print</span>(<span className="text-sky-300">type</span>(age))</p>
          </div>
          <div className="mt-2.5 flex items-center justify-between font-sans">
            <span className="text-rose-900 font-bold">{isHindi ? 'यदि यूजर 20 दर्ज करे, तो टाइप:' : 'If user inputs 20, the type is:'}</span>
            <span className="px-3 py-1 bg-white border border-rose-400 text-rose-800 rounded-lg font-mono font-bold">&lt;class 'str'&gt;</span>
          </div>
        </div>
      </div>

      {/* ── 5. CONVERTING INPUT TO NUMBERS ── */}
      <div
        ref={secConvertNumRef}
        id="sec22-convert-num"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-convert-num'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🔢</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Input को संख्या में बदलना: int(input())' : 'Converting Input into Numbers: int(input())'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Input के बाहर int() लगाने से वह संख्या बन जाता है और उसपर Calculation संभव होती है:'
                : 'Wrap input() with int() or float() to perform calculations on user responses:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-2 shadow-inner">
          <p className="text-slate-400"># Nested int() wraps input()</p>
          <p className="text-emerald-400 font-bold">
            age = <span className="text-sky-400">int</span>(<span className="text-white">input</span>(<span className="text-amber-300">"Enter your age: "</span>))
          </p>
          <p className="text-white">
            <span className="text-indigo-400">print</span>(<span className="text-amber-300">"Next year you will be"</span>, age + <span className="text-amber-300">1</span>)
          </p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">USER TYPES 20:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Next year you will be 21</span>
          </div>
        </div>
      </div>

      {/* ── 6. REAL-LIFE SHOP BILL CALCULATOR ── */}
      <div
        ref={secShopBillRef}
        id="sec22-shop-bill"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-shop-bill'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🛒</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: डायनामिक शॉप बिल (Dynamic Shop Bill)' : 'Real-Life Case Study: Dynamic Shop Bill'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'यूजर से प्रोडक्ट का नाम, कीमत (float) और मात्रा (int) लेकर बिल बनाएं:'
                : 'Collect product name, decimal price, and quantity to compute bill:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1.5 shadow-inner">
            <p>product = <span className="text-sky-300">input</span>(<span className="text-amber-300">"Enter product: "</span>)</p>
            <p>price = <span className="text-sky-300">float</span>(<span className="text-white">input</span>(<span className="text-amber-300">"Enter price: "</span>))</p>
            <p>quantity = <span className="text-sky-300">int</span>(<span className="text-white">input</span>(<span className="text-amber-300">"Enter qty: "</span>))</p>
            <p className="pt-1 text-emerald-400">total = price * quantity</p>
            <p className="pt-1 text-indigo-400">print(<span className="text-amber-300">"Total Bill:"</span>, total)</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col justify-between">
            <div className="space-y-1 text-slate-800">
              <span className="font-sans font-bold text-amber-950 text-xs">LIVE USER SESSION:</span>
              <p className="text-slate-600 mt-1">Enter product: Notebook</p>
              <p className="text-slate-600">Enter price: 50</p>
              <p className="text-slate-600">Enter qty: 3</p>
              <div className="pt-2 border-t border-amber-300 font-bold text-emerald-700 text-sm">
                Total Bill: 150.0
              </div>
            </div>
            <span className="text-[10px] text-amber-800 font-sans mt-3">
              ✓ {isHindi ? 'float() और int() ने Calculation को संभव बनाया।' : 'float() and int() ensured mathematical accuracy.'}
            </span>
          </div>
        </div>
      </div>

      {/* ── 7. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec22-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec22-takeaway'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 border border-purple-200 shadow-2xs'
        }`}
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl p-2 bg-purple-200/80 rounded-2xl">🌟</span>
          <div>
            <h4 className="font-extrabold text-purple-950 text-base sm:text-lg">
              {isHindi ? 'मुख्य सार (Key Takeaway)' : 'Key Takeaway'}
            </h4>
            <p className="text-xs sm:text-sm text-purple-900 mt-1 leading-relaxed">
              {isHindi
                ? 'input() यूजर से टेक्स्ट प्राप्त करता है। जब भी संख्यात्मक Value (उम्र, कीमत, अंक) की आवश्यकता हो, तो हमेशा int(input()) या float(input()) का उपयोग करें।'
                : 'input() receives keyboard input as a string. Whenever numbers are needed for math or analysis, wrap with int(input()) or float(input()).'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
