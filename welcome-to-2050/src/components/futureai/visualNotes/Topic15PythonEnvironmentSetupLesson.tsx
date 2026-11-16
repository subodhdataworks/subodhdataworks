import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic15VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic15PythonEnvironmentSetupLesson: React.FC<Topic15VisualLessonProps> = ({
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
  const secToolsRef = useRef<HTMLDivElement>(null);
  const secJupyterRef = useRef<HTMLDivElement>(null);
  const secInstallRef = useRef<HTMLDivElement>(null);
  const secColabRef = useRef<HTMLDivElement>(null);
  const secTestRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec15-title': secTitleRef,
      'sec15-tools': secToolsRef,
      'sec15-jupyter': secJupyterRef,
      'sec15-install': secInstallRef,
      'sec15-colab': secColabRef,
      'sec15-test': secTestRef,
      'sec15-takeaway': secTakeawayRef,
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
      className="topic15-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={3}
        moduleName="Introduction to Programming & Python"
        topicNum={5}
        totalTopicsInModule={6}
        englishTitle="Setting Up Python and Your Coding Environment"
        hindiTitle="Setting Up Python and Your Coding Environment"
        subtitleEnglish="Coding environment options for local machines and browsers."
        subtitleHindi="Environment Setup: Local computer vs browser tools."
        emoji="⚙️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec15-title'}
        sectionRef={secTitleRef}
        sectionId="sec15-title"
      />

      {/* ── 2. TOOLS TO WRITE PYTHON ── */}
      <div
        ref={secToolsRef}
        id="sec15-tools"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-tools'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-indigo-100 text-indigo-700 rounded-2xl text-xl">🧰</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Code लिखने के 3 मुख्य टूल्स' : '3 Main Tools to Write & Run Code'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'जैसे डॉक्यूमेंट लिखने के लिए MS Word चाहिए, वैसे Code लिखने के लिए एडिटर चाहिए:'
                : 'Just as Microsoft Word is for writing docs, code editors are for writing programs:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-3xl">📝</span>
            <h4 className="font-bold text-slate-900 text-sm mt-2">{isHindi ? 'Code एडिटर (VS Code)' : 'Code Editor (VS Code)'}</h4>
            <p className="text-xs text-slate-600 mt-1">
              {isHindi ? 'हल्का और दुनिया का सबसे लोकप्रिय फ्री Coding टूल।' : 'Lightweight, lightning fast, and world’s most popular editor.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-3xl">⚡</span>
            <h4 className="font-bold text-slate-900 text-sm mt-2">{isHindi ? 'IDE (PyCharm)' : 'IDE (PyCharm)'}</h4>
            <p className="text-xs text-slate-600 mt-1">
              {isHindi ? 'फुल सूट: Code लिखना, रन करना और बग्स ठीक करना (Debugging)।' : 'Integrated Development Environment with complete debugging tools.'}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <span className="text-3xl">📓</span>
            <h4 className="font-bold text-amber-950 text-sm mt-2">{isHindi ? 'Jupyter Notebook' : 'Jupyter Notebook'}</h4>
            <p className="text-xs text-amber-800 mt-1">
              {isHindi ? 'Data Analysts का पसंदीदा! छोटे-छोटे Cells में Code और तुरंत रिज़ल्ट।' : 'Data analysts favorite! Interactive cells with instant visual output.'}
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. JUPYTER NOTEBOOK CELL SIMULATION ── */}
      <div
        ref={secJupyterRef}
        id="sec15-jupyter"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-jupyter'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">🪐</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Jupyter Notebook कैसे काम करता है?' : 'How Jupyter Notebook Works (Cells)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'इसमें Code को छोटे-छोटे ब्लॉक्स (Cells) में लिखा और एक-एक करके चलाया जाता है:'
                : 'Code is split into individual cells. You execute one cell at a time and see output immediately below:'}
            </p>
          </div>
        </div>

        {/* Jupyter Cell Simulation */}
        <div className="rounded-2xl border border-slate-300 overflow-hidden font-mono text-xs shadow-xs">
          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-slate-600 font-sans text-xs">
            <span className="font-bold flex items-center gap-1.5">
              <span className="text-amber-600">●</span> Jupyter Notebook — In [1]:
            </span>
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-md text-[10px]">Shift + Enter to Run ▶</span>
          </div>

          <div className="bg-white p-3.5 border-l-4 border-indigo-600">
            <span className="text-indigo-600 font-bold">print</span>(<span className="text-amber-600">"My first notebook"</span>)
          </div>

          <div className="bg-slate-50 p-3.5 border-t border-slate-200 text-slate-800 font-bold">
            <span className="text-slate-400 font-normal mr-3">Out [1]:</span>
            My first notebook
          </div>
        </div>
      </div>

      {/* ── 4. 6-STEP WINDOWS INSTALLATION GUIDE ── */}
      <div
        ref={secInstallRef}
        id="sec15-install"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-install'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-purple-100 text-purple-700 rounded-2xl text-xl">🪟</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'Windows Computer में Python इंस्टॉल करने के 6 स्टेप्स' : '6 Steps to Install Python on Windows'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'आसान स्टेप-बाय-स्टेप गाइड:' : 'Official step-by-step installation pipeline:'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
            <div>
              <p className="font-bold text-xs text-purple-950">python.org/downloads</p>
              <p className="text-[11px] text-purple-800 mt-0.5">{isHindi ? 'ऑफिशियल Website खोलें' : 'Open official site'}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
            <div>
              <p className="font-bold text-xs text-purple-950">{isHindi ? 'डाउनलोड करें' : 'Download Python'}</p>
              <p className="text-[11px] text-purple-800 mt-0.5">{isHindi ? 'नवीनतम स्टेबल वर्जन' : 'Latest stable installer'}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
            <div>
              <p className="font-bold text-xs text-purple-950">{isHindi ? 'इंस्टॉलर चलाएं' : 'Run Installer'}</p>
              <p className="text-[11px] text-purple-800 mt-0.5">{isHindi ? '.exe File पर डबल क्लिक' : 'Double click .exe setup'}</p>
            </div>
          </div>

          {/* Critical Step 4 Highlight */}
          <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-400 flex items-start gap-3 sm:col-span-2 lg:col-span-2 shadow-xs">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
            <div>
              <p className="font-black text-xs text-rose-950 uppercase tracking-wide">
                ⭐ {isHindi ? 'सबसे ज़रूरी: "Add Python to PATH" टिक करें!' : 'Critical: Check "Add Python to PATH"!'}
              </p>
              <p className="text-[11px] text-rose-800 mt-0.5">
                {isHindi ? 'नीचे बने चेकबॉक्स को जरूर टिक करें, वरना कमांड Prompt में Python नहीं चलेगा।' : 'Enable this checkbox at bottom of installer so Command Prompt recognizes python.'}
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
            <div>
              <p className="font-bold text-xs text-purple-950">Install Now</p>
              <p className="text-[11px] text-purple-800 mt-0.5">{isHindi ? 'इंस्टॉलेशन पूरा करें' : 'Finish setup process'}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 sm:col-span-2 lg:col-span-3">
            <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">6</span>
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-bold text-xs text-emerald-950">{isHindi ? 'जांचें (Check in CMD)' : 'Verify in Command Prompt'}</p>
                <p className="text-[11px] text-emerald-800 mt-0.5">{isHindi ? 'कमांड Prompt खोलकर यह टाइप करें:' : 'Run in terminal:'}</p>
              </div>
              <code className="px-3 py-1 bg-slate-900 text-emerald-300 rounded-lg text-xs font-mono font-bold">
                python --version
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. ZERO-INSTALL ALTERNATIVE: GOOGLE COLAB ── */}
      <div
        ref={secColabRef}
        id="sec15-colab"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-colab'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-amber-100 text-amber-700 rounded-2xl text-xl">☁️</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'बिना इंस्टॉल किए सीधे सीखें: Google Colab' : 'Zero-Install Alternative: Google Colab'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi
                ? 'यदि आपके पास लैपटॉप में परमिशन नहीं है, तो सीधे गूगल पर फ्री में Coding करें:'
                : 'No setup required. Run Python free in your browser with cloud power:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌐</span>
            <div>
              <p className="font-mono text-xs font-bold text-amber-950">colab.research.google.com</p>
              <p className="text-xs text-amber-800 mt-0.5">
                {isHindi ? 'गूगल का फ्री क्लाउड जुपिटर एनवायरनमेंट, कोई इंस्टॉलेशन नहीं चाहिए!' : 'Google’s free cloud Jupyter environment. Works on any browser!'}
              </p>
            </div>
          </div>
          <span className="px-3 py-1.5 bg-amber-500 text-white font-bold text-xs rounded-xl shadow-xs shrink-0">
            100% Free Cloud ✓
          </span>
        </div>
      </div>

      {/* ── 6. FIRST SETUP TEST ── */}
      <div
        ref={secTestRef}
        id="sec15-test"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-test'
            ? 'ring-4 ring-purple-400 bg-purple-50/70 shadow-lg'
            : 'bg-white border border-purple-100 shadow-2xs'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 bg-emerald-100 text-emerald-700 rounded-2xl text-xl">✅</span>
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-800">
              {isHindi ? 'आपका पहला सेटअप टेस्ट (Test Run)' : 'Your First Setup Test'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {isHindi ? 'अपने एनवायरनमेंट में यह Code चलाएं और सफलता देखें:' : 'Run this simple line to verify everything is working:'}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs shadow-inner flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-slate-400"># Run this test line:</span>
            <p className="text-white font-bold mt-1 text-sm">
              <span className="text-indigo-400">print</span>(<span className="text-amber-300">"Python is working!"</span>)
            </p>
          </div>
          <div className="px-4 py-2 bg-emerald-950 border border-emerald-500 text-emerald-300 font-bold text-xs rounded-xl flex items-center gap-2">
            <span>🎉</span>
            <span>Output: Python is working!</span>
          </div>
        </div>
      </div>

      {/* ── 7. KEY TAKEAWAY BANNER ── */}
      <div
        ref={secTakeawayRef}
        id="sec15-takeaway"
        className={`p-6 rounded-3xl transition-all duration-300 ${
          activeSectionId === 'sec15-takeaway'
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
                ? 'Coding एनवायरनमेंट आपको Python Code लिखने और चलाने की जगह देता है। आप VS Code, Jupyter Notebook या सीधे Google Colab से शुरू कर सकते हैं।'
                : 'A coding environment allows you to write, test, and run Python code. Beginners can start smoothly with VS Code, Jupyter Notebook, or Google Colab.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
