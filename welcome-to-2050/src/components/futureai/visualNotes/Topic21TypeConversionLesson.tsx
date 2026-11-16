import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic21VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic21TypeConversionLesson: React.FC<Topic21VisualLessonProps> = ({
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
  const secStrToIntRef = useRef<HTMLDivElement>(null);
  const secIntToStrRef = useRef<HTMLDivElement>(null);
  const secFloatRef = useRef<HTMLDivElement>(null);
  const secValueErrorRef = useRef<HTMLDivElement>(null);
  const secProductRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec21-title': secTitleRef,
      'sec21-what-is': secWhatIsRef,
      'sec21-str-to-int': secStrToIntRef,
      'sec21-int-to-str': secIntToStrRef,
      'sec21-float': secFloatRef,
      'sec21-value-error': secValueErrorRef,
      'sec21-product': secProductRef,
      'sec21-takeaway': secTakeawayRef,
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
      className="topic21-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={5}
        totalTopicsInModule={8}
        englishTitle="Type Conversion"
        hindiTitle="Type Conversion"
        subtitleEnglish="Type conversion changes values between data types."
        subtitleHindi="Type Conversion: Ek data type ko doosre me badalna."
        emoji="🔄"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec21-title'}
        sectionRef={secTitleRef}
        sectionId="sec21-title"
      />

      {/* ── 2. STRING TO INTEGER CONVERSION ── */}
      <div
        ref={secStrToIntRef}
        id="sec21-str-to-int"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-str-to-int'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🔢</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'टेक्स्ट को संख्या बनाना (String to Integer)' : 'Converting String to Integer: int()'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'जब फॉर्म या यूजर से उम्र टेक्स्ट "20" मिलती है, तो उसे int() से संख्या बनाया जाता है:'
                : 'Convert raw user text input "20" into a real number so we can calculate 20 + 5:'}
            </p>
          </div>
        </div>

        {/* Visual Pipeline Flow */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner space-y-2">
          <p className="text-slate-400"># String in quotes</p>
          <p>age = <span className="text-amber-300">"20"</span></p>
          <p className="text-slate-400 pt-1"># Convert to integer</p>
          <p>new_age = <span className="text-sky-400">int</span>(age)</p>
          <p className="text-slate-400 pt-1"># Now math calculation is possible!</p>
          <p><span className="text-indigo-400">print</span>(new_age + <span className="text-amber-300">5</span>)</p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">OUTPUT:</span>
            <span className="text-emerald-400 font-bold font-mono text-base">25</span>
          </div>
        </div>
      </div>

      {/* ── 3. INTEGER TO STRING CONVERSION ── */}
      <div
        ref={secIntToStrRef}
        id="sec21-int-to-str"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-int-to-str'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🔤</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'संख्या को टेक्स्ट बनाना (Integer to String)' : 'Converting Integer to String: str()'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'जब किसी नंबर को किसी मैसेज के साथ जोड़ना हो (+ से जोड़ना):'
                : 'Convert numeric quantities into strings to concatenate with text labels:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-2 shadow-inner">
          <p>age = <span className="text-amber-300">20</span></p>
          <p>age_text = <span className="text-sky-400">str</span>(age)</p>
          <p><span className="text-indigo-400">print</span>(<span className="text-amber-300">"Age: "</span> + age_text)</p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">OUTPUT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Age: 20</span>
          </div>
        </div>
      </div>

      {/* ── 4. CONVERSIONS WITH FLOAT ── */}
      <div
        ref={secFloatRef}
        id="sec21-float"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-float'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-sky-100 text-sky-700 rounded-2xl text-xl">🌊</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'दशमलव कन्वर्जन (float conversions)' : 'Float Conversions: float()'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'दशमलव टेक्स्ट या Integer को Float में बदलना:'
                : 'Parse decimal strings or promote whole integers into floats:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-300">
            <span className="font-sans font-bold text-sky-950 text-xs">String ➔ Float</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl space-y-1">
              <p>price = <span className="text-amber-300">"99.50"</span></p>
              <p>num = <span className="text-sky-300">float</span>(price)</p>
              <p>print(num + 10)</p>
            </div>
            <p className="mt-2 font-bold text-sky-900">Output: 109.5</p>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-300">
            <span className="font-sans font-bold text-purple-950 text-xs">Integer ➔ Float</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl space-y-1">
              <p>number = <span className="text-amber-300">10</span></p>
              <p>res = <span className="text-sky-300">float</span>(number)</p>
              <p>print(res)</p>
            </div>
            <p className="mt-2 font-bold text-purple-900">Output: 10.0</p>
          </div>
        </div>
      </div>

      {/* ── 5. VALUE ERROR WARNING ── */}
      <div
        ref={secValueErrorRef}
        id="sec21-value-error"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-value-error'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-rose-100 text-rose-700 rounded-2xl text-xl">🚫</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'सावधानी: हर Value को बदला नहीं जा सकता (ValueError)' : 'Important: Not Every Value Can Be Converted'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'यदि टेक्स्ट में केवल अक्षर हों, तो Python उसे संख्या नहीं बना सकता:'
                : 'Python raises a ValueError when attempting impossible conversions:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300">
            <span className="font-sans font-bold text-rose-900 text-xs">❌ Invalid: Word to Int</span>
            <p className="text-rose-950 mt-1">int("twenty")</p>
            <p className="font-sans text-[11px] text-rose-800 mt-2">
              🚨 <b>ValueError:</b> {isHindi ? '"twenty" एक शब्द है, कोई अंक नहीं!' : '"twenty" is English letters, not digits!'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border-2 border-rose-300">
            <span className="font-sans font-bold text-rose-900 text-xs">❌ Invalid: Decimal String to Int</span>
            <p className="text-rose-950 mt-1">int("12.5")</p>
            <p className="font-sans text-[11px] text-rose-800 mt-2">
              🚨 <b>ValueError:</b> {isHindi ? 'दशमलव टेक्स्ट को सीधे int नहीं, float("12.5") करना होगा!' : 'Use float("12.5") for decimal strings!'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 6. REAL-LIFE PRODUCT PRICE ── */}
      <div
        ref={secProductRef}
        id="sec21-product"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-product'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🏷️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: प्रोडक्ट की कीमत (Product Price Calculation)' : 'Real-Life Case: Product Price Calculation'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'टेक्स्ट के रूप में मिली कीमत को बदलकर कुल बिल निकालना:' : 'Convert string price into integer for calculating bill:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm space-y-1.5 shadow-inner">
          <p>price_text = <span className="text-amber-300">"150"</span></p>
          <p>quantity = <span className="text-amber-300">2</span></p>
          <p className="pt-1 text-sky-400">price = int(price_text)</p>
          <p>total = price * quantity</p>
          <p className="pt-1 text-indigo-400">print(<span className="text-amber-300">"Total:"</span>, total)</p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">FINAL BILL:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Total: 300</span>
          </div>
        </div>
      </div>

      {/* ── 7. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec21-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec21-takeaway'
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
                ? 'int() वैध टेक्स्ट को Integer में बदलता है। float() दशमलव संख्या में बदलता है। str() किसी भी Value को टेक्स्ट बनाता है। यह फॉर्म Input और Calculation के लिए अनिवार्य है।'
                : 'int() converts valid numeric strings to integers. float() converts to decimals. str() turns values into text. Essential for parsing inputs and enabling math operations.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
