import React, { useEffect, useRef, useState } from 'react';
import { SectionRectInfo } from './PdfVisualNotesViewer';
import { CurvedLavenderRibbonBanner } from './CurvedLavenderRibbonBanner';

interface Topic33VisualLessonProps {
  activeSectionId?: string;
  onSectionRectChange?: (rect: SectionRectInfo | null) => void;
  onScrollSettled?: () => void;
  language?: 'hindi' | 'english';
  onLanguageChange?: (lang: 'hindi' | 'english') => void;
}

export const Topic33StringsIndexingSlicingLesson: React.FC<Topic33VisualLessonProps> = ({
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
  const secIndexingRef = useRef<HTMLDivElement>(null);
  const secSlicingRef = useRef<HTMLDivElement>(null);
  const secLenImmutableRef = useRef<HTMLDivElement>(null);
  const secYearExtractRef = useRef<HTMLDivElement>(null);
  const secTakeawayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeSectionId) return;

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'sec33-title': secTitleRef,
      'sec33-concept': secConceptRef,
      'sec33-indexing': secIndexingRef,
      'sec33-slicing': secSlicingRef,
      'sec33-len-immutable': secLenImmutableRef,
      'sec33-year-extract': secYearExtractRef,
      'sec33-takeaway': secTakeawayRef,
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
      className="topic33-visual-lesson w-full max-w-[840px] mx-auto p-2 sm:p-5 bg-white text-[#2a174a] select-text space-y-5 leading-normal"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,400;0,700;1,400;1,700&family=Fredoka:wght@500;600;700&display=swap');
      `}</style>

      {/* ── 1. TOP CURVED LAVENDER RIBBON BANNER (Module 1 Topic 1 Standard) ── */}
      <CurvedLavenderRibbonBanner
        moduleNum={6}
        moduleName="Python Collections & Strings"
        topicNum={1}
        totalTopicsInModule={8}
        englishTitle="Strings, Indexing and Slicing"
        hindiTitle="Strings, Indexing and Slicing"
        subtitleEnglish="Introduction to strings, indexing, and slicing."
        subtitleHindi="Strings, Indexing aur Slicing ka introduction."
        emoji="✂️"
        currentLang={currentLang}
        onLanguageToggle={handleLanguageToggle}
        isActive={activeSectionId === 'sec33-title'}
        sectionRef={secTitleRef}
        sectionId="sec33-title"
      />

      {/* Section 1: Concept & Registration System */}
      <div ref={secConceptRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            01
          </div>
          <h3>{isHi ? 'String क्या है? (टेक्स्ट Data)' : 'What Is a String?'}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'String अक्षरों, संख्याओं और प्रतीकों की एक कतार (Sequence) है, जिसे हमेशा कोट्स (`" "` या `\' \'`) में लिखा जाता है।'
            : 'A string is a sequence of characters enclosed in single or double quotes, storing textual entities like names, emails, and codes.'}
        </p>
        <pre className="bg-slate-900 text-purple-200 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`student_name = "Aman Kumar"
email = "aman@example.com"
course = "Data Analytics"`}
        </pre>
      </div>

      {/* Section 2: Indexing Grid (Positive & Negative) */}
      <div ref={secIndexingRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            02
          </div>
          <h3>{isHi ? 'String Indexing (0 से शुरुआत और नेगेटिव Index)' : 'String Indexing & Address Grid'}</h3>
        </div>

        <p className="text-xs md:text-sm text-slate-600">
          {isHi
            ? 'Python में गिनती हमेशा 0 से शुरू होती है! पीछे से गिनने के लिए नेगेटिव Index (-1, -2) इस्तेमाल होता है।'
            : 'Python uses zero-based indexing. Forward counting starts at 0, while backward indexing starts at -1.'}
        </p>

        {/* Visual Box Grid */}
        <div className="overflow-x-auto py-2">
          <div className="inline-flex gap-2 text-center font-mono">
            {[
              { char: 'P', pos: 0, neg: -6 },
              { char: 'Y', pos: 1, neg: -5 },
              { char: 'T', pos: 2, neg: -4 },
              { char: 'H', pos: 3, neg: -3 },
              { char: 'O', pos: 4, neg: -2 },
              { char: 'N', pos: 5, neg: -1 },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-[10px] text-purple-600 font-bold mb-1">Index {item.pos}</span>
                <div className="w-12 h-14 bg-gradient-to-br from-purple-600 to-indigo-700 text-white text-xl font-extrabold flex items-center justify-center rounded-xl shadow-md border border-purple-300">
                  {item.char}
                </div>
                <span className="text-[10px] text-rose-500 font-bold mt-1">{item.neg}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
            <code>language[0]</code> ➔ <strong className="text-purple-700">"P"</strong> (First char)
          </div>
          <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
            <code>language[2]</code> ➔ <strong className="text-purple-700">"T"</strong> (Third char)
          </div>
          <div className="bg-purple-50 p-3 rounded-xl border border-purple-200">
            <code>language[-1]</code> ➔ <strong className="text-rose-600">"N"</strong> (Last char)
          </div>
        </div>
      </div>

      {/* Section 3: String Slicing */}
      <div ref={secSlicingRef} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm space-y-4">
        <div className="flex items-center space-x-3 text-purple-700 font-bold text-lg border-b border-purple-50 pb-2">
          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-mono text-sm">
            03
          </div>
          <h3>{isHi ? 'String Slicing (टुकड़े काटना)' : 'String Slicing [start:stop:step]'}</h3>
        </div>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
          ⚠️ <strong>सुनहरा नियम (Golden Rule):</strong> Slicing में <code>stop</code> Index कभी शामिल नहीं होता (Excluded)! <code>[0:3]</code> का मतलब 0, 1, 2 तक ही है।
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl space-y-1">
            <span className="text-slate-400 block">[:3] (शुरुआत से 3 तक)</span>
            <span className="text-emerald-400 font-bold text-sm">"PYT"</span>
          </div>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl space-y-1">
            <span className="text-slate-400 block">[3:] (3 से अंत तक)</span>
            <span className="text-cyan-400 font-bold text-sm">"HON"</span>
          </div>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl space-y-1">
            <span className="text-slate-400 block">[::2] (हर दूसरा अक्षर)</span>
            <span className="text-amber-400 font-bold text-sm">"PTO"</span>
          </div>
          <div className="p-3 bg-slate-900 text-slate-100 rounded-xl space-y-1">
            <span className="text-slate-400 block">[::-1] (उल्टा / Reverse)</span>
            <span className="text-rose-400 font-bold text-sm">"NOHTYP"</span>
          </div>
        </div>
      </div>

      {/* Section 4: Length & Immutability */}
      <div ref={secLenImmutableRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-purple-900">📏 len() Function (Length)</h4>
          <p className="text-xs text-slate-600">कुल अक्षरों की संख्या गिनता है (स्पेस भी गिने जाते हैं):</p>
          <pre className="bg-slate-900 text-purple-200 p-3 rounded-lg font-mono text-xs">
{`print(len("Rahul"))        # Output: 5
print(len("Data Analyst")) # Output: 12`}
          </pre>
        </div>

        <div className="bg-rose-50/70 p-5 rounded-2xl border border-rose-200 shadow-sm space-y-2">
          <h4 className="font-bold text-sm text-rose-900">🔒 Strings Are Immutable (अपरिवर्तनीय)</h4>
          <p className="text-xs text-slate-600">String के किसी एक अक्षर को सीधे नहीं बदला जा सकता:</p>
          <pre className="bg-slate-900 text-rose-300 p-3 rounded-lg font-mono text-xs">
{`name = "Rahul"
# name[0] = "M" ❌ TypeError!

# सही तरीका (नया String बनाएं):
name = "M" + name[1:] # ✅ "Mahul"`}
          </pre>
        </div>
      </div>

      {/* Section 5: Real Life Year Extraction */}
      <div ref={secYearExtractRef} className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200 shadow-sm space-y-3">
        <h4 className="font-bold text-purple-900 text-sm md:text-base flex items-center gap-2">
          <span>📦</span> {isHi ? 'रियल-लाइफ Data केस: Order Code से साल निकालना' : 'Real-Life Data Case: Extract Year from Order Code'}
        </h4>
        <pre className="bg-slate-900 text-emerald-300 p-4 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
{`order_code = "ORD-2026-105"

year = order_code[4:8]

print("Order Year:", year) # Output: 2026`}
        </pre>
        <p className="text-xs text-slate-600">
          {isHi
            ? 'Index 4 से 7 तक के 4 अक्षर ("2026") अलग कर लिए गए। Data Analysts ऐसे ही तारीख, बैच Code और प्रोडक्ट आईडी अलग करते हैं!'
            : 'Characters at positions 4 to 7 are cleanly extracted. Crucial pattern for parsing timestamps, serial numbers, and SKUs.'}
        </p>
      </div>

      {/* Section 6: Key Takeaway */}
      <div ref={secTakeawayRef} className="p-5 rounded-2xl bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white shadow-lg space-y-2 text-center">
        <h4 className="font-bold text-base md:text-lg text-amber-300">
          💡 {isHi ? 'मुख्य सीख (Key Takeaway)' : 'Key Takeaway'}
        </h4>
        <p className="text-xs md:text-sm text-purple-200 max-w-2xl mx-auto">
          {isHi
            ? 'Indexing किसी एक अक्षर का पता लगाती है, जबकि Slicing [start:stop:step] टेक्स्ट का हिस्सा निकालती है। Strings Immutable होती हैं।'
            : 'Indexing pinpoints single characters, while slicing [start:stop:step] carves substrings. Strings remain immutable in memory.'}
        </p>
      </div>
    </div>
  );
};
export default Topic33StringsIndexingSlicingLesson;
