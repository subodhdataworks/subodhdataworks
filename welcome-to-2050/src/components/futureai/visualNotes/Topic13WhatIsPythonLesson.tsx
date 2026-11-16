import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic13VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic13WhatIsPythonLesson: React.FC<Topic13VisualLessonProps> = ({
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
  const secWhyBeginnerRef = useRef<HTMLDivElement>(null);
  const secFirstLookRef = useRef<HTMLDivElement>(null);
  const secCapabilitiesRef = useRef<HTMLDivElement>(null);
  const secRoadmapRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec13-title': secTitleRef,
      'sec13-why-beginner': secWhyBeginnerRef,
      'sec13-first-look': secFirstLookRef,
      'sec13-capabilities': secCapabilitiesRef,
      'sec13-roadmap': secRoadmapRef,
      'sec13-takeaway': secTakeawayRef,
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
      className="topic13-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={3}
        totalTopicsInModule={6}
        englishTitle="What Is Python and Why Use It?"
        hindiTitle="What Is Python and Why Use It?"
        subtitleEnglish="Python is the world’s leading beginner-friendly programming language."
        subtitleHindi="Python: World ki #1 beginner-friendly programming language."
        emoji="🐍"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec13-title'}
        sectionRef={secTitleRef}
        sectionId="sec13-title"
      />

      {/* ── 2. WHY IS PYTHON GOOD FOR BEGINNERS? ── */}
      <div
        ref={secWhyBeginnerRef}
        id="sec13-why-beginner"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec13-why-beginner'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">🌱</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'शुरुआती लोगों के लिए Python सबसे बेहतरीन क्यों है?' : 'Why Is Python Great for Beginners?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? '5 प्रमुख कारण जो Python को शुरुआती छात्रों का पसंदीदा बनाते हैं:'
                : '5 compelling advantages that make Python the ideal first language:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-4">
          {[
            { title: isHindi ? 'सरल Syntax' : 'Simple Syntax', desc: isHindi ? 'सादा व सीधा' : 'English-like', icon: '📝', bg: 'bg-blue-50 border-blue-200 text-blue-900' },
            { title: isHindi ? 'पढ़ने में आसान' : 'Easy to Read', desc: isHindi ? 'साफ Code' : 'Clean code', icon: '👓', bg: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
            { title: isHindi ? 'छोटे Programs' : 'Start Small', desc: isHindi ? '1 लाइन से शुरू' : 'From 1 line', icon: '🐣', bg: 'bg-amber-50 border-amber-200 text-amber-900' },
            { title: isHindi ? 'विशाल Library' : 'Rich Libraries', desc: isHindi ? 'NumPy, Pandas' : 'Ready tools', icon: '📚', bg: 'bg-purple-50 border-purple-200 text-purple-900' },
            { title: isHindi ? 'हाई डिमांड' : 'High Demand', desc: isHindi ? 'लाखों जॉब्स' : 'Top salaries', icon: '💼', bg: 'bg-rose-50 border-rose-200 text-rose-900' },
          ].map((item, idx) => (
            <div key={idx} className={`p-3.5 rounded-2xl border ${item.bg} flex flex-col items-center text-center shadow-2xs`}>
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="font-bold text-xs sm:text-sm">{item.title}</span>
              <span className="text-[11px] opacity-75 mt-0.5">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. ANATOMY OF FIRST PYTHON CODE ── */}
      <div
        ref={secFirstLookRef}
        id="sec13-first-look"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec13-first-look'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🔬</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Python Code का विश्लेषण (Anatomy of print())' : 'Anatomy of print("Welcome to Python")'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'इस 1 लाइन Code के हर हिस्से को गहराई से समझें:'
                : 'Deconstruct each part of this fundamental command:'}
            </p>
          </div>
        </div>

        {/* Code Visual Card */}
        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-center shadow-inner">
          <span className="text-indigo-400 font-black text-xl sm:text-2xl">print</span>
          <span className="text-slate-300 font-black text-xl sm:text-2xl">(</span>
          <span className="text-amber-300 font-bold text-xl sm:text-2xl">"Welcome to Python"</span>
          <span className="text-slate-300 font-black text-xl sm:text-2xl">)</span>
        </div>

        {/* Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-indigo-200 text-indigo-900 rounded-md">print</span>
            <h5 className="font-bold text-xs sm:text-sm text-indigo-950 mt-1.5">{isHindi ? 'Function (Function)' : 'Function'}</h5>
            <p className="text-[11px] text-indigo-800 mt-0.5">
              {isHindi ? 'स्क्रीन पर जानकारी दिखाने का अंतर्निहित टूल।' : 'Built-in Python tool used to display output.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-slate-200 text-slate-800 rounded-md">( )</span>
            <h5 className="font-bold text-xs sm:text-sm text-slate-900 mt-1.5">{isHindi ? 'कोष्ठक (Parentheses)' : 'Parentheses'}</h5>
            <p className="text-[11px] text-slate-600 mt-0.5">
              {isHindi ? 'इसके अंदर वह Data लिखते हैं जो Function को देना है।' : 'Wraps whatever data you pass to the function.'}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-900 rounded-md">" ... "</span>
            <h5 className="font-bold text-xs sm:text-sm text-amber-950 mt-1.5">{isHindi ? 'String (String / Text)' : 'String (Text)'}</h5>
            <p className="text-[11px] text-amber-800 mt-0.5">
              {isHindi ? 'कोटेशन के अंदर लिखा टेक्स्ट String कहलाता है।' : 'Text enclosed in quotes is called a string in code.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 4. WHAT CAN PYTHON DO? (5 PILLARS) ── */}
      <div
        ref={secCapabilitiesRef}
        id="sec13-capabilities"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec13-capabilities'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">⚡</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Python से क्या-क्या बनाया जा सकता है?' : 'What Can Python Do?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'Python केवल एक काम के लिए नहीं, बल्कि 5 बड़े आधुनिक क्षेत्रों का आधार है:'
                : 'Python powers the most in-demand modern technologies:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-2xl">📊</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">{isHindi ? 'Data Analytics (Data Analytics)' : 'Data Analytics'}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{isHindi ? 'बिक्री, ग्राहक और बिजनेस रिकॉर्ड्स का विश्लेषण।' : 'Analyze sales, records, and business trends.'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-2xl">🤖</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">{isHindi ? 'Artificial Intelligence (AI) (AI)' : 'Artificial Intelligence'}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{isHindi ? 'ChatGPT, रोबोटिक्स और स्मार्ट AI एजेंट्स बनाना।' : 'Build intelligent agents, chatbots & AI models.'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-2xl">🔮</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">{isHindi ? 'Machine Learning (Machine Learning)' : 'Machine Learning'}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{isHindi ? 'पैटर्न्स पहचानना और भविष्य की सटीक भविष्यवाणी।' : 'Train models to predict trends and forecast.'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-2xl">⚙️</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">{isHindi ? 'ऑटोमेशन (Automation)' : 'Automation'}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{isHindi ? 'घंटों की Excel और ईमेल Files सेकंडों में ऑटोमेट।' : 'Automate repetitive tasks and manual spreadsheets.'}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-2">
            <span className="text-2xl">🌐</span>
            <h4 className="font-bold text-slate-900 text-sm mt-1">{isHindi ? 'वेब डेवलपमेंट (Web Development)' : 'Web Development'}</h4>
            <p className="text-xs text-slate-600 mt-0.5">{isHindi ? 'Django और FastAPI से आधुनिक वेबसाइट्स और बैकएंड बनाना।' : 'Power robust backend APIs and modern web applications.'}</p>
          </div>
        </div>
      </div>

      {/* ── 5. IS PYTHON DIFFICULT? (5-STEP ROADMAP) ── */}
      <div
        ref={secRoadmapRef}
        id="sec13-roadmap"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec13-roadmap'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🪜</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'क्या Python कठिन है? (Learning Roadmap)' : 'Is Python Difficult? (5-Step Roadmap)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'बिल्कुल नहीं! इसे सीढ़ी दर सीढ़ी आसानी से सीखा जाता है:'
                : 'Not at all! You learn step by step with zero prior coding knowledge:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { step: '1', title: isHindi ? 'टेक्स्ट दिखाना' : 'Display Text', icon: '🔤' },
            { step: '2', title: isHindi ? 'संख्याओं पर काम' : 'Numbers & Math', icon: '🔢' },
            { step: '3', title: isHindi ? 'Variables' : 'Store Info', icon: '📦' },
            { step: '4', title: isHindi ? 'Condition (इफ/एल्स)' : 'Decisions', icon: '⚖️' },
            { step: '5', title: isHindi ? 'Loops (रिपीट)' : 'Repeat Tasks', icon: '🔁' },
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-purple-50/60 border border-purple-200 text-center flex flex-col items-center">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-extrabold text-[10px] flex items-center justify-center mb-1">
                {item.step}
              </span>
              <span className="text-xl">{item.icon}</span>
              <span className="font-bold text-xs text-purple-950 mt-1">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec13-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec13-takeaway'
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
                ? 'Python एक सरल, बहुमुखी और शुरुआती लोगों के लिए सबसे अनुकूल भाषा है। यह Data Analysis, ऑटोमेशन और AI की दुनिया की पहली सीढ़ी है।'
                : 'Python is a beginner-friendly programming language used to solve real problems, automate workflows, and analyze complex datasets.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
