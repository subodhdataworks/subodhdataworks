import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic48VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic48ExceptionHandlingLesson: React.FC<Topic48VisualLessonProps> = ({
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
  const secTryExceptRef = useRef<HTMLDivElement>(null);
  const secCommonErrorsRef = useRef<HTMLDivElement>(null);
  const secElseFinallyRef = useRef<HTMLDivElement>(null);
  const secRaiseBareExceptRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec48-title': secTitleRef,
      'sec48-concept': secConceptRef,
      'sec48-try-except': secTryExceptRef,
      'sec48-common-errors': secCommonErrorsRef,
      'sec48-else-finally': secElseFinallyRef,
      'sec48-raise-bareexcept': secRaiseBareExceptRef,
      'sec48-takeaway': secTakeawayRef,
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
      className="topic48-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={7}
        moduleName="Functions, Modules & Files"
        topicNum={8}
        totalTopicsInModule={9}
        englishTitle="Exception Handling and Debugging"
        hindiTitle="Exception Handling and Debugging"
        subtitleEnglish="Exception Handling and Debugging"
        subtitleHindi="Exception Handling and Debugging"
        emoji="🛡️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec48-title'}
        sectionRef={secTitleRef}
        sectionId="sec48-title"
      />

      {/* SECTION 1: WHAT IS AN EXCEPTION */}
      <div
        ref={secConceptRef}
        data-mentor-target="sec48-concept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            01
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Error क्या है? Syntax Error vs Exception (Runtime Error)' : 'Syntax Error vs Runtime Exception'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'कार स्टार्ट होने से पहले की खराबी vs चलती कार का टायर पंचर होना' : 'Before program starts vs during active program execution'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-100 bg-rose-50/40 p-4 space-y-2">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <span>⛔</span> Syntax Error
            </div>
            <p className="text-xs text-[#4A4768]">
              {isHi
                ? 'व्याकरण की गलती (जैसे ब्रैकेट या कोलन भूल जाना)। Code चलने से पहले ही रुक जाता है।'
                : 'Grammar violation in code (missing bracket, colon). Code refuses to even start execution.'}
            </p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-rose-300">
              if x == 10 <span className="text-rose-400"># Missing colon :</span>
            </div>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-4 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
              <span>⚠️</span> Exception (Runtime Error)
            </div>
            <p className="text-xs text-[#4A4768]">
              {isHi
                ? 'सिंटेक्स बिल्कुल सही है, लेकिन रन-टाइम पर अप्रत्याशित समस्या आ गई (जैसे शून्य से भाग या File का न मिलना)।'
                : 'Syntax is 100% valid, but an impossible operation occurs at runtime (e.g., divide by 0, missing file).'}
            </p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-amber-300">
              result = 100 / 0 <span className="text-amber-400"># ZeroDivisionError!</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: TRY - EXCEPT SAFETY NET */}
      <div
        ref={secTryExceptRef}
        data-mentor-target="sec48-try-except"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            02
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'सुरक्षा कवच: `try` और `except`' : 'The Safety Net: `try` and `except`'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'क्रैश होने की बजाय सौम्य चेतावनी (User-friendly message) दें' : 'Prevent abrupt program failure and handle bad user inputs gracefully'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-600">❌ Without Handling (App Crashes!)</span>
            <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white shadow-inner leading-relaxed">
              age_str = <span className="text-emerald-300">&quot;twenty&quot;</span><br />
              age = <span className="text-blue-400">int</span>(age_str)<br />
              <span className="text-purple-300"># 💥 CRASH: ValueError: invalid literal for int()</span><br />
              print(<span className="text-emerald-300">&quot;Done!&quot;</span>) <span className="text-rose-400"># Never runs!</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-600">✅ With try-except (Protected & Smooth)</span>
            <div className="rounded-xl bg-[#202033] p-4 font-mono text-xs text-white shadow-inner leading-relaxed">
              <span className="text-amber-400">try</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;age = <span className="text-blue-400">int</span>(age_str)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">f&quot;Age is &#123;age&#125;&quot;</span>)<br />
              <span className="text-amber-400">except</span> <span className="text-rose-300">ValueError</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">&quot;⚠️ Please enter digits only (e.g. 25)&quot;</span>)<br />
              print(<span className="text-emerald-300">&quot;Program continues safely! ✨&quot;</span>)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: COMMON EXCEPTIONS CHEAT SHEET */}
      <div
        ref={secCommonErrorsRef}
        data-mentor-target="sec48-common-errors"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            03
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'सबसे आम Python Exceptions (Top 5)' : 'Top 5 Common Python Exceptions'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'Data Analysts के सामने सबसे ज्यादा आने वाली त्रुटियां' : 'Frequent errors encountered in data processing and user interaction'}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#EAE5F5]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F6F2FF] text-[#4C2A9A] font-bold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-4">Exception</th>
                <th className="py-3 px-4">{isHi ? 'कब आती है?' : 'Trigger Condition'}</th>
                <th className="py-3 px-4">{isHi ? 'उदाहरण' : 'Example'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE5F5] font-mono text-[#202033]">
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-rose-600">ZeroDivisionError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'किसी संख्या को 0 से भाग देने पर' : 'Dividing any number by zero'}</td>
                <td className="py-2.5 px-4"><code>100 / 0</code></td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-rose-600">ValueError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'गलत Format का Data कन्वर्ट करने पर' : 'Converting invalid value string'}</td>
                <td className="py-2.5 px-4"><code>int(&quot;abc&quot;)</code></td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-rose-600">FileNotFoundError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'File डिस्क पर मौजूद नहीं है' : 'Target file does not exist on disk'}</td>
                <td className="py-2.5 px-4"><code>open(&quot;missing.csv&quot;)</code></td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-rose-600">KeyError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'Dictionary में चाबी (key) नहीं मिली' : 'Key not found inside dictionary'}</td>
                <td className="py-2.5 px-4"><code>student[&quot;roll_no&quot;]</code></td>
              </tr>
              <tr className="hover:bg-purple-50/40">
                <td className="py-2.5 px-4 font-bold text-rose-600">IndexError</td>
                <td className="py-2.5 px-4 font-sans">{isHi ? 'List की सीमा से बाहर का Index' : 'List index out of range bounds'}</td>
                <td className="py-2.5 px-4"><code>nums[99]</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: THE COMPLETE TRIO (TRY - EXCEPT - ELSE - FINALLY) */}
      <div
        ref={secElseFinallyRef}
        data-mentor-target="sec48-else-finally"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            04
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'The Complete Architecture: `else` और `finally`' : 'The Full Quartet: try, except, else, finally'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? '`else` सफलता पर चलता है, `finally` हमेशा (हर हाल में) चलता है' : '`else` runs only on zero errors, `finally` runs unconditionally'}
            </p>
          </div>
        </div>

        <div className="rounded-xl bg-[#202033] p-5 font-mono text-xs text-white leading-relaxed overflow-x-auto shadow-inner space-y-1">
          <span className="text-amber-400">try</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;file = open(<span className="text-emerald-300">&quot;data.txt&quot;</span>, <span className="text-emerald-300">&quot;r&quot;</span>)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;data = file.read()<br />
          <span className="text-amber-400">except</span> <span className="text-rose-300">FileNotFoundError</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-rose-300">&quot;Error: data.txt does not exist!&quot;</span>)<br />
          <span className="text-amber-400">else</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300"># Runs ONLY if no error occurred in try block!</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-emerald-300">f&quot;Success! Read &#123;len(data)&#125; characters.&quot;</span>)<br />
          <span className="text-amber-400">finally</span>:<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-300"># Runs ALWAYS! Even if code crashes or succeeds!</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;print(<span className="text-cyan-300">&quot;Cleanup complete. Database connection safely closed.&quot;</span>)
        </div>
      </div>

      {/* SECTION 5: AVOID BARE EXCEPT & CUSTOM RAISE */}
      <div
        ref={secRaiseBareExceptRef}
        data-mentor-target="sec48-raise-bareexcept"
        className="rounded-2xl border border-[#EAE5F5] bg-white p-6 shadow-sm hover:shadow-md transition-shadow space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F2FF] text-xl font-bold text-[#7045E8]">
            05
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#202033]">
              {isHi ? 'Bare `except:` से बचें और खुद का `raise` करें' : 'Avoid Bare `except:` & Use `raise`'}
            </h2>
            <p className="text-xs text-[#77758A]">
              {isHi ? 'बिना नाम का `except:` Code के छुपे कीड़ों (bugs) को दबा देता है' : 'Bare `except:` catches KeyboardInterrupt and silently hides bugs'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-200 bg-rose-50/40 p-4 space-y-2">
            <span className="text-xs font-bold text-rose-700">🚫 Dangerous Anti-Pattern: Bare `except:`</span>
            <p className="text-xs text-[#4A4768]">
              {isHi
                ? 'कभी भी केवल `except:` न लिखें। हमेशा स्पेसिफिक Error का नाम बताएं (जैसे `except ValueError:`).'
                : 'Never catch everything blindly. Always name the specific error class you expect.'}
            </p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-white">
              <span className="text-amber-400">except</span>: <span className="text-rose-400"># Bad! Swallows Ctrl+C!</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;pass
            </div>
          </div>

          <div className="rounded-xl border border-purple-200 bg-[#F6F2FF]/50 p-4 space-y-2">
            <span className="text-xs font-bold text-[#7045E8]">🚀 Raising Custom Errors (`raise`)</span>
            <p className="text-xs text-[#4A4768]">
              {isHi
                ? 'जब कोई बिजनेस नियम टूटे (जैसे नेगेटिव आयु या डिस्काउंट > 100%), खुद Error उठाएं।'
                : 'Enforce domain rules by throwing explicit errors when logic is violated.'}
            </p>
            <div className="bg-[#202033] p-2.5 rounded font-mono text-[11px] text-white">
              <span className="text-amber-400">if</span> discount &gt; <span className="text-purple-300">100</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">raise</span> <span className="text-rose-300">ValueError</span>(<span className="text-emerald-300">&quot;Discount &gt; 100% impossible!&quot;</span>)
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6: KEY TAKEAWAYS */}
      <div
        ref={secTakeawayRef}
        data-mentor-target="sec48-takeaway"
        className="rounded-2xl border border-purple-200 bg-gradient-to-br from-[#F6F2FF] to-white p-6 shadow-sm space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-base font-bold text-[#4C2A9A]">
            {isHi ? 'Topic 8 का मुख्य निष्कर्ष (Quick Summary)' : 'Key Takeaways for Data Analysts'}
          </h3>
        </div>
        <ul className="text-xs text-[#4A4768] space-y-2 list-disc list-inside">
          <li>
            <strong>{isHi ? 'क्रैश होने से बचाएं' : 'Prevent Crash:'}</strong>{' '}
            {isHi ? 'असुरक्षित User Input और Files को हमेशा `try...except` में रखें।' : 'Wrap external data reading and user inputs in `try-except` blocks.'}
          </li>
          <li>
            <strong>{isHi ? 'विशिष्ट Error पकड़ें' : 'Specific Catching:'}</strong>{' '}
            {isHi ? 'हमेशा `ValueError`, `FileNotFoundError` आदि का सटीक नाम लिखें।' : 'Catch specific exception types rather than using bare `except:`.'}
          </li>
          <li>
            <strong>{isHi ? 'सफाई का ध्यान रखें' : 'Resource Cleanup:'}</strong>{' '}
            {isHi ? '`finally` ब्लॉक Database कनेक्शन या Files को सुरक्षित रूप से बंद करता है।' : 'Use `finally` or context managers (`with`) to release resources.'}
          </li>
        </ul>
      </div>
    </div>
  );
};
