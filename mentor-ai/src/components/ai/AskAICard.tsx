import React, { useState } from 'react';
import { Sparkles, Lightbulb, Code2, ArrowUpRight } from 'lucide-react';
import { quickPromptChips } from '../../data/aiAssistant';

interface AskAICardProps {
  onAsk: (question: string) => void;
  onSelectPromptChip: (prompt: string) => void;
}

export const AskAICard: React.FC<AskAICardProps> = ({ onAsk, onSelectPromptChip }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onAsk(inputText);
    setInputText('');
  };

  const getChipIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
      case 'sparkle':
        return <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
      case 'code':
        return <Code2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />;
    }
  };

  return (
    <div className="relative w-full rounded-[24px] p-5 sm:p-6 lg:p-7 overflow-hidden border border-white/80 shadow-[0_6px_28px_rgba(215,228,252,0.6)] bg-gradient-to-br from-[#FAF5FF] via-[#F1F5FD] to-[#EAF3FE]">
      {/* Background ambient glow shapes */}
      <div className="absolute -top-12 -right-12 w-52 h-52 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Header: Title & Subtitle */}
      <div className="relative z-10 mb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-600/30" />
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ask AI
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            Got a doubt? Your AI tutor is always here.
          </p>
        </div>
      </div>

      {/* Main Interaction Row: Wide Input on Left + Chips & Robot Mascot on Right */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
        {/* Large Input Field occupying the primary width */}
        <div className="flex-1 w-full">
          <form onSubmit={handleSubmit} className="relative w-full">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="w-full pl-5 pr-12 py-3.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              aria-label="Send question to AI"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8.5 h-8.5 rounded-full bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-xs"
            >
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        </div>

        {/* Right Side: 3 Quick Action Chips + Glowing 3D Robot Orb Mascot */}
        <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-between md:justify-end">
          {/* Quick action chips stacked vertically */}
          <div className="flex flex-row md:flex-col gap-1.5 flex-wrap">
            {quickPromptChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => onSelectPromptChip(chip.prompt)}
                type="button"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200/70 shadow-3xs hover:border-indigo-300 hover:bg-white text-[11px] font-bold text-slate-700 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                {getChipIcon(chip.icon)}
                <span>{chip.label}</span>
              </button>
            ))}
          </div>

          {/* 3D Glowing Robot Orb Mascot */}
          <div
            className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0"
            style={{
              maskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 100%)'
            }}
          >
            <img
              src="/assets/ask-ai-orb.jpg"
              alt="AI Orb Mascot"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
