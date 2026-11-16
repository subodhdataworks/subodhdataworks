import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic18VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic18PrintAndOutputLesson: React.FC<Topic18VisualLessonProps> = ({
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
  const secPrintBasicsRef = useRef<HTMLDivElement>(null);
  const secMultipleRef = useRef<HTMLDivElement>(null);
  const secSepEndRef = useRef<HTMLDivElement>(null);
  const secFstringRef = useRef<HTMLDivElement>(null);
  const secReceiptRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec18-title': secTitleRef,
      'sec18-print-basics': secPrintBasicsRef,
      'sec18-multiple': secMultipleRef,
      'sec18-sep-end': secSepEndRef,
      'sec18-fstring': secFstringRef,
      'sec18-receipt': secReceiptRef,
      'sec18-takeaway': secTakeawayRef,
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
      className="topic18-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={4}
        moduleName="Python Syntax & Core Basics"
        topicNum={2}
        totalTopicsInModule={8}
        englishTitle="print() and Displaying Output"
        hindiTitle="print() and Displaying Output"
        subtitleEnglish="print() output formatting with sep, end, and f-strings."
        subtitleHindi="print() output formatting: sep, end aur f-strings."
        emoji="🖨️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec18-title'}
        sectionRef={secTitleRef}
        sectionId="sec18-title"
      />

      {/* ── 2. PRINT BASICS & TEXT VS NUMBERS ── */}
      <div
        ref={secPrintBasicsRef}
        id="sec18-print-basics"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-print-basics'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">📄</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'टेक्स्ट और नंबर प्रिंट करना (Text vs Numbers)' : 'Printing Text & Numbers'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'दिखने में दोनों 100 जैसे हैं, पर Python की नज़र में Data टाइप अलग है:'
                : 'Both render 100 on screen, but have fundamentally different internal data types:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <span className="font-sans font-bold text-amber-900 uppercase">Text String (Quotes)</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">"100"</span>)
            </div>
            <p className="font-sans text-[11px] text-amber-800 mt-2">
              {isHindi ? 'कोटेशन के अंदर होने के कारण यह टेक्स्ट है (Math नहीं हो सकती)।' : 'Characters inside quotes. Math calculation is not possible.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="font-sans font-bold text-emerald-900 uppercase">Number Integer (No Quotes)</span>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">100</span>)
            </div>
            <p className="font-sans text-[11px] text-emerald-800 mt-2">
              {isHindi ? 'बिना कोटेशन का वास्तविक नंबर है (Math और Calculation संभव)।' : 'Numeric value without quotes. Ready for math operations.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. PRINTING MULTIPLE VALUES ── */}
      <div
        ref={secMultipleRef}
        id="sec18-multiple"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-multiple'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-blue-100 text-blue-700 rounded-2xl text-xl">🔠</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'एक साथ कई Values प्रिंट करना (Multiple Values)' : 'Printing Multiple Values with Comma'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'कॉमा (,) लगाने पर Python अपने आप बीच में एक स्पेस जोड़ देता है:'
                : 'Separating items with a comma instructs print() to insert a space between them:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner">
          <p className="text-white">
            <span className="text-indigo-400">print</span>(
            <span className="text-amber-300">"Name:"</span>, 
            <span className="text-amber-300">"Rahul"</span>, 
            <span className="text-amber-300">"Age:"</span>, 
            <span className="text-amber-300">20</span>
            )
          </p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">CONSOLE OUTPUT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">Name: Rahul Age: 20</span>
          </div>
        </div>
      </div>

      {/* ── 4. sep AND end PARAMETERS ── */}
      <div
        ref={secSepEndRef}
        id="sec18-sep-end"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-sep-end'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🎛️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'sep और end Parameters (Custom Formatting)' : 'Customizing with sep & end'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'डिफ़ॉल्ट स्पेस और नई लाइन को अपनी पसंद अनुसार बदलें:'
                : 'Override default spacing between values and custom line endings:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          {/* sep */}
          <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
            <div className="flex items-center justify-between font-sans">
              <span className="font-bold text-purple-900 text-xs">sep = " - " (Separator)</span>
              <span className="px-2 py-0.5 bg-purple-200 text-purple-900 rounded text-[10px] font-bold">Custom Join</span>
            </div>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl">
              print(<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"SQL"</span>, <span className="text-amber-300">"Excel"</span>, <span className="text-emerald-400">sep=" - "</span>)
            </div>
            <p className="mt-2 text-purple-950 font-bold font-mono">Output: Python - SQL - Excel</p>
          </div>

          {/* end */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
            <div className="flex items-center justify-between font-sans">
              <span className="font-bold text-indigo-900 text-xs">end = " " (No Newline)</span>
              <span className="px-2 py-0.5 bg-indigo-200 text-indigo-900 rounded text-[10px] font-bold">Same Line</span>
            </div>
            <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl space-y-1">
              <p>print(<span className="text-amber-300">"Hello"</span>, <span className="text-emerald-400">end=" "</span>)</p>
              <p>print(<span className="text-amber-300">"Students"</span>)</p>
            </div>
            <p className="mt-2 text-indigo-950 font-bold font-mono">Output: Hello Students</p>
          </div>
        </div>
      </div>

      {/* ── 5. f-STRINGS (MODERN FORMATTING) ── */}
      <div
        ref={secFstringRef}
        id="sec18-fstring"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-fstring'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">✨</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'जादुई f-Strings (Variable Interpolation)' : 'Modern f-Strings (Variable Interpolation)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'टेक्स्ट के अंदर सीधे {variable} लिखकर Value प्रदर्शित करने का सबसे लोकप्रिय आधुनिक तरीका:'
                : 'The gold standard in Python to seamlessly embed variable expressions inside text strings:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs sm:text-sm shadow-inner space-y-2">
          <p className="text-slate-400"># Define variables</p>
          <p>name = <span className="text-amber-300">"Rahul"</span></p>
          <p>age = <span className="text-amber-300">20</span></p>
          <p className="pt-2 text-white font-bold">
            <span className="text-indigo-400">print</span>(<span className="text-emerald-400">f</span><span className="text-amber-300">"My name is </span>&#123;<span className="text-indigo-300">name</span>&#125;<span className="text-amber-300"> and I am </span>&#123;<span className="text-indigo-300">age</span>&#125;<span className="text-amber-300"> years old."</span>)
          </p>

          <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between font-sans text-xs">
            <span className="text-slate-400">RESULT:</span>
            <span className="text-emerald-400 font-bold font-mono text-sm">My name is Rahul and I am 20 years old.</span>
          </div>
        </div>
      </div>

      {/* ── 6. REAL-LIFE SHOP RECEIPT ── */}
      <div
        ref={secReceiptRef}
        id="sec18-receipt"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-receipt'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🧾</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'केस स्टडी: दुकान की रसीद (Shop Receipt)' : 'Real-Life Case Study: Shop Receipt Generator'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'प्रिंट Statement से बिल जेनरेट करें:' : 'Generate a structured bill using print():'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-1.5 shadow-inner">
            <p className="text-slate-400"># Input variables</p>
            <p>product = <span className="text-amber-300">"Notebook"</span></p>
            <p>price = <span className="text-amber-300">50</span></p>
            <p>quantity = <span className="text-amber-300">2</span></p>
            <p className="pt-2 text-indigo-400">print(<span className="text-amber-300">"Product:"</span>, product)</p>
            <p className="text-indigo-400">print(<span className="text-amber-300">"Price:"</span>, price)</p>
            <p className="text-indigo-400">print(<span className="text-amber-300">"Quantity:"</span>, quantity)</p>
            <p className="text-indigo-400">print(<span className="text-amber-300">"Total:"</span>, price * quantity)</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 font-mono text-xs flex flex-col justify-between">
            <div>
              <span className="font-sans font-bold text-amber-950 text-xs">🧾 PRINTED BILL:</span>
              <div className="mt-2 space-y-1 text-slate-800">
                <p>Product: Notebook</p>
                <p>Price: 50</p>
                <p>Quantity: 2</p>
                <div className="pt-2 border-t border-amber-300 font-bold text-emerald-700 text-sm">
                  Total: 100
                </div>
              </div>
            </div>
            <span className="text-[10px] text-amber-800 mt-3 font-sans">
              ✓ {isHindi ? 'price * quantity ने तुरंत 100 Calculate किया।' : 'price * quantity calculated 100 dynamically.'}
            </span>
          </div>
        </div>
      </div>

      {/* ── 7. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec18-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec18-takeaway'
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
                ? 'print() Output डिस्प्ले करता है। sep से बीच का सेपरेटर बदलता है, end से लाइन ब्रेक कंट्रोल होता है, और f-strings से टेक्स्ट में Variables जोड़ना सबसे आसान होता है।'
                : 'print() is Python’s output window. Use sep to customize item separators, end to manage newlines, and f-strings for clean variable interpolation.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
