import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Mic, 
  MicOff, 
  X, 
  Send, 
  Sparkles, 
  Radio, 
  ArrowRight,
  MessageSquare,
  Play,
  RotateCcw,
  Trophy,
  Target
} from 'lucide-react';
import { 
  PowerGreenAI, 
  VoiceState, 
  SupportedLanguage,
  AIProviderResponse
} from '../../services/powerGreenAIService';

interface GlobalAIButtonProps {
  currentLanguage: SupportedLanguage;
  onNavigateSection?: (sectionId: string) => void;
}

export const GlobalAIButton: React.FC<GlobalAIButtonProps> = ({
  currentLanguage,
  onNavigateSection,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [voiceState, setVoiceState] = useState<VoiceState>('IDLE');
  const [typedMessage, setTypedMessage] = useState('');
  const [frequencies, setFrequencies] = useState<number[]>(Array(12).fill(0.1));
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'ai' | 'user'; text: string }>>([
    {
      role: 'ai',
      text: currentLanguage === 'hi' 
        ? 'नमस्ते! मैं पावरग्रीन एआई हूँ। मैं आपकी क्या सहायता कर सकता हूँ?' 
        : "Hi! I'm PowerGreen AI. How can I help?",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubState = PowerGreenAI.subscribeState((st) => setVoiceState(st));
    const unsubWave = PowerGreenAI.subscribeWaveform((freq) => setFrequencies([...freq.slice(0, 12)]));
    return () => {
      unsubState();
      unsubWave();
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isOpen]);

  const handleVoiceToggle = () => {
    if (voiceState === 'LISTENING') {
      PowerGreenAI.stopListening();
    } else {
      PowerGreenAI.startListening(
        (query, response) => {
          setChatMessages((prev) => [
            ...prev,
            { role: 'user', text: query },
            { role: 'ai', text: response.text },
          ]);
        },
        (err) => console.log(err)
      );
    }
  };

  const handleQuickCommand = async (command: string) => {
    setChatMessages((prev) => [...prev, { role: 'user', text: command }]);

    // Section triggers
    if (command === 'Start Learning' && onNavigateSection) {
      onNavigateSection('program');
    } else if (command === 'Practice' && onNavigateSection) {
      onNavigateSection('practice-game');
    } else if (command === 'Interview' && onNavigateSection) {
      onNavigateSection('interview');
    } else if (command === 'Check Progress' && onNavigateSection) {
      onNavigateSection('dashboard-preview');
    }

    const response = await PowerGreenAI.askText(command, currentLanguage);
    setChatMessages((prev) => [...prev, { role: 'ai', text: response.text }]);
    PowerGreenAI.speakText(response.text, response.language);
  };

  const handleSendText = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;

    const userText = typedMessage.trim();
    setTypedMessage('');
    setChatMessages((prev) => [...prev, { role: 'user', text: userText }]);

    const response = await PowerGreenAI.askText(userText, currentLanguage);
    setChatMessages((prev) => [...prev, { role: 'ai', text: response.text }]);
    PowerGreenAI.speakText(response.text, response.language);
  };

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="global-ai-floating-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative px-4 py-3 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 transition-all hover:scale-105"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 via-emerald-500 to-teal-400 p-[1.5px] shadow-sm">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Bot className="w-4 h-4 text-emerald-600" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <span>PowerGreen AI</span>
            <span className="text-emerald-600">🎙</span>
          </div>
        </button>
      </div>

      {/* Slide-Up / Floating Assistant Panel */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header Bar */}
          <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">PowerGreen AI</h4>
                <div className="text-[10px] text-slate-500 font-mono">
                  State: <span className="font-semibold text-emerald-700">{voiceState}</span>
                </div>
              </div>
            </div>

            <button
              id="global-ai-close-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-[10px]">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sky-600 text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Live Waveform Indicator */}
          {voiceState !== 'IDLE' && (
            <div className="px-4 py-2 bg-emerald-50/60 border-t border-emerald-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                {voiceState === 'LISTENING' ? 'Listening to voice...' : 'Synthesizing voice response...'}
              </span>
              <div className="flex items-center gap-1">
                {frequencies.map((f, i) => (
                  <span
                    key={i}
                    className="w-1 bg-emerald-500 rounded-full"
                    style={{ height: `${Math.max(4, f * 20)}px` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Quick Command Pills */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Quick Commands:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Start Learning',
                'Continue Course',
                'Ask a Question',
                'Practice',
                'Interview',
                'Check Progress',
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleQuickCommand(cmd)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-50 hover:text-sky-700 text-[11px] font-medium text-slate-700 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Voice & Text Input Form */}
          <form onSubmit={handleSendText} className="p-3 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <button
              type="button"
              onClick={handleVoiceToggle}
              className={`p-2.5 rounded-xl transition-all ${
                voiceState === 'LISTENING'
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
              title={voiceState === 'LISTENING' ? 'Stop listening' : 'Start speaking'}
            >
              {voiceState === 'LISTENING' ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              placeholder="Ask PowerGreen AI..."
              className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <button
              type="submit"
              className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
