import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic11VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic11WhatIsProgrammingLesson: React.FC<Topic11VisualLessonProps> = ({
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
  const secMeaningRef = useRef<HTMLDivElement>(null);
  const secTeaRecipeRef = useRef<HTMLDivElement>(null);
  const secComputerMindRef = useRef<HTMLDivElement>(null);
  const secCodeLanguagesRef = useRef<HTMLDivElement>(null);
  const secAnalyticsConnectionRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active section when changed
  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec11-title': secTitleRef,
      'sec11-meaning': secMeaningRef,
      'sec11-tea-recipe': secTeaRecipeRef,
      'sec11-computer-mind': secComputerMindRef,
      'sec11-code-languages': secCodeLanguagesRef,
      'sec11-analytics': secAnalyticsConnectionRef,
      'sec11-takeaway': secTakeawayRef,
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

  const isHindi = currentLang === 'hindi';

    const isHi = currentLang === 'hindi';

  return (
    <div
      ref={containerRef}
      style={{
        fontFamily: "'Comic Neue', 'Fredoka', 'Quicksand', 'Chalkboard SE', 'Comic Sans MS', cursive, sans-serif",
      }}
      className="topic11-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Identical to Module 1 Topic 1) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={1}
        totalTopicsInModule={6}
        englishTitle="What Is Programming?"
        hindiTitle="Programming क्या है? (What Is Programming?)"
        subtitleEnglish="Programming means giving step-by-step instructions to a computer to solve problems and automate workflows."
        subtitleHindi="Computer को कोई भी काम समझाने के लिए हमें उसे क्रमवार निर्देश (Instructions) देने होते हैं। इसे ही Programming कहते हैं।"
        emoji="💻"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec11-title'}
        sectionRef={secTitleRef}
        sectionId="sec11-title"
      />

      {/* ── 2. TEA-MAKING RECIPE ANALOGY (STEP-BY-STEP INSTRUCTIONS) ── */}
      <div
        ref={secMeaningRef}
        id="sec11-meaning"
        className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 border ${
          activeSectionId === 'sec11-meaning'
            ? 'ring-2 ring-purple-400 bg-purple-50/50 shadow-md'
            : 'bg-[#fbf9ff] border-[#ede6ff]'
        }`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl shadow-xs">
            ☕
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-800">
              {isHindi ? 'रियल-लाइफ एनालॉजी: चाय बनाने की रेसिपी (Instructions)' : 'Real-Life Analogy: The Tea Recipe'}
            </h3>
            <p className="text-xs text-slate-500">
              {isHindi ? 'Computer कैसे निर्देश फॉलो करता है?' : 'How computers execute sequential instructions'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 my-3">
          {[
            { step: '1', title: 'Boil Water', hi: 'पानी उबालो', icon: '🫖', bg: 'bg-amber-50 border-amber-200' },
            { step: '2', title: 'Add Tea Leaves', hi: 'चायपत्ती डालो', icon: '🍃', bg: 'bg-emerald-50 border-emerald-200' },
            { step: '3', title: 'Add Milk & Sugar', hi: 'दूध और चीनी मिलाओ', icon: '🥛', bg: 'bg-blue-50 border-blue-200' },
            { step: '4', title: 'Filter & Serve', hi: 'छानकर सर्व करो', icon: '☕', bg: 'bg-purple-50 border-purple-200' },
          ].map((s) => (
            <div key={s.step} className={`p-3 rounded-2xl border ${s.bg} text-center space-y-1`}>
              <span className="text-xl block">{s.icon}</span>
              <span className="text-[10px] font-black uppercase text-slate-400">Step {s.step}</span>
              <p className="text-xs font-bold text-slate-800">{s.title}</p>
              <p className="text-[11px] text-slate-500">{s.hi}</p>
            </div>
          ))}
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white/80 p-3 rounded-xl border border-purple-100">
          💡 {isHindi
            ? 'अगर आप स्टेप 4 को स्टेप 1 से पहले रख देंगे तो चाय नहीं बनेगी! बिल्कुल वैसे ही Computer भी Code की हर लाइन को क्रम से (one by one) रन करता है।'
            : 'If you reverse steps, tea will never be made! Similarly, computers execute code sequentially, line by line, exactly as instructed.'}
        </p>
      </div>

      {/* ── 3. COMPUTER MIND VS HUMAN MIND ── */}
      <div
        ref={secComputerMindRef}
        id="sec11-computer-mind"
        className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 border ${
          activeSectionId === 'sec11-computer-mind'
            ? 'ring-2 ring-purple-400 bg-purple-50/50 shadow-md'
            : 'bg-white border-[#EAE5F5]'
        }`}
      >
        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <span>🧠</span>
          <span>{isHindi ? 'इंसान का दिमाग बनाम Computer (Human vs Computer)' : 'Human Brain vs Computer'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
            <span className="text-xs font-bold uppercase text-amber-700 block">👤 Human (इंसान)</span>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li>{isHindi ? 'सेंस और इंट्यूशन का इस्तेमाल करता है।' : 'Uses common sense and intuition.'}</li>
              <li>{isHindi ? 'अधूरी बात भी समझ जाता है।' : 'Can understand vague instructions.'}</li>
              <li>{isHindi ? 'लाखों Calculations में थक जाता है।' : 'Gets tired with repetitive math calculations.'}</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-2">
            <span className="text-xs font-bold uppercase text-indigo-700 block">⚡ Computer (Computer)</span>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li>{isHindi ? 'खुद से कुछ नहीं सोचता, केवल Code फॉलो करता है।' : 'Has zero intuition; follows instructions blindly.'}</li>
              <li>{isHindi ? '1 सेकंड में 1 अरब गणनाएं बिना थके करता है!' : 'Performs 1,000,000,000 operations per second!'}</li>
              <li>{isHindi ? 'गलत Code देने पर वही गलत काम दोहराएगा।' : 'If given a bug, executes the bug perfectly!'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 4. CODE LANGUAGES & PYTHON ── */}
      <div
        ref={secCodeLanguagesRef}
        id="sec11-code-languages"
        className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 border ${
          activeSectionId === 'sec11-code-languages'
            ? 'ring-2 ring-purple-400 bg-purple-50/50 shadow-md'
            : 'bg-[#fbf9ff] border-[#ede6ff]'
        }`}
      >
        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
          <span>🌐</span>
          <span>{isHindi ? 'Programming लैंग्वेज क्यों चाहिए? (Why Programming Languages?)' : 'Why Do We Need Programming Languages?'}</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          {isHindi
            ? 'Computer केवल 0 और 1 (Binary) समझता है। इंसान 010101 में बात नहीं कर सकता। इसलिए हम Python जैसी हाई-लेवल भाषा का उपयोग करते हैं जो अंग्रेजी जैसी दिखती है।'
            : 'Computers only understand Binary (0 and 1). Humans cannot easily write millions of 0s and 1s. High-level languages like Python bridge this gap using simple English-like syntax.'}
        </p>

        <div className="p-3.5 bg-slate-900 text-slate-100 rounded-2xl font-mono text-xs overflow-x-auto shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-700 text-slate-400 text-[11px]">
            <span>main.py</span>
            <span>Python 3.11</span>
          </div>
          <code>
            <span className="text-purple-400">print</span>
            <span className="text-slate-300">(</span>
            <span className="text-emerald-300">"Hello, Data Analyst! Welcome to Python!"</span>
            <span className="text-slate-300">)</span>
          </code>
        </div>
      </div>

      {/* ── 5. PYTHON IN DATA ANALYTICS ── */}
      <div
        ref={secAnalyticsConnectionRef}
        id="sec11-analytics"
        className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 border ${
          activeSectionId === 'sec11-analytics'
            ? 'ring-2 ring-purple-400 bg-purple-50/50 shadow-md'
            : 'bg-white border-[#EAE5F5]'
        }`}
      >
        <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
          <span>📊</span>
          <span>{isHindi ? 'Data Analytics में Programming का रोल' : 'Role of Programming in Data Analytics'}</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-3">
          {isHindi
            ? 'Data Analytics में Programming का काम सिर्फ Software बनाना नहीं है, बल्कि लाखों रिकॉर्ड्स के Data को सेकंडों में क्लीन, Analyze और विजुअलाइज करना है।'
            : 'In Data Analytics, programming is used to automate data cleaning, compute complex statistics, and generate interactive dashboards across millions of rows.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
          <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
            <span className="text-lg block">⚡</span>
            <p className="text-xs font-bold text-purple-900">Automation</p>
            <p className="text-[11px] text-purple-700">{isHindi ? 'घंटों का काम सेकंडों में' : 'Hours of work in seconds'}</p>
          </div>
          <div className="p-3 rounded-xl bg-sky-50 border border-sky-200">
            <span className="text-lg block">📈</span>
            <p className="text-xs font-bold text-sky-900">Big Data</p>
            <p className="text-[11px] text-sky-700">{isHindi ? '10 लाख+ Row का विश्लेषण' : '1,000,000+ rows scale'}</p>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="text-lg block">🎯</span>
            <p className="text-xs font-bold text-emerald-900">Accuracy</p>
            <p className="text-[11px] text-emerald-700">{isHindi ? 'जीरो ह्यूमन Error' : 'Zero manual fatigue errors'}</p>
          </div>
        </div>
      </div>

      {/* ── 6. KEY TAKEAWAYS ── */}
      <div
        ref={secTakeawayRef}
        id="sec11-takeaway"
        className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 border ${
          activeSectionId === 'sec11-takeaway'
            ? 'ring-2 ring-purple-400 bg-purple-50/50 shadow-md'
            : 'bg-gradient-to-r from-purple-50/80 via-indigo-50/80 to-purple-50/80 border-purple-200'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">💡</span>
          <h3 className="text-base font-bold text-purple-950">
            {isHindi ? 'टॉपिक 1 का मुख्य टेकअवे (Summary)' : 'Topic 1 Key Takeaways'}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="p-3 bg-white/90 rounded-2xl border border-purple-100 shadow-2xs">
            <span className="text-[10px] font-black uppercase text-purple-600 block mb-1">Takeaway 1</span>
            <p className="text-xs font-bold text-slate-800">Instructions = Code</p>
            <p className="text-[11px] text-slate-600">
              {isHindi ? 'Computer को दिया गया हर निर्देश Code कहलाता है।' : 'Every step-by-step instruction given to a computer is code.'}
            </p>
          </div>
          <div className="p-3 bg-white/90 rounded-2xl border border-purple-100 shadow-2xs">
            <span className="text-[10px] font-black uppercase text-purple-600 block mb-1">Takeaway 2</span>
            <p className="text-xs font-bold text-slate-800">Sequential Execution</p>
            <p className="text-[11px] text-slate-600">
              {isHindi ? 'Computer ऊपर से नीचे एक-एक लाइन करके Code रन करता है।' : 'Code executes top-to-bottom sequentially without skipping.'}
            </p>
          </div>
          <div className="p-3 bg-white/90 rounded-2xl border border-purple-100 shadow-2xs">
            <span className="text-[10px] font-black uppercase text-purple-600 block mb-1">Takeaway 3</span>
            <p className="text-xs font-bold text-slate-800">Python = English-like</p>
            <p className="text-[11px] text-slate-600">
              {isHindi ? 'Python सीखना आसान है क्योंकि इसका Syntax इंग्लिश जैसा है।' : 'Python is natural and readable, perfect for data analytics.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
