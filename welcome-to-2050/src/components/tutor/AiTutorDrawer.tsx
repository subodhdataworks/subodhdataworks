import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Globe2, 
  Lightbulb, 
  HelpCircle, 
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Volume2
} from 'lucide-react';
import { LearnerProfile, LanguageMode } from '../../types';
import { AiTutorService, TutorMessage } from '../../services/aiTutor';
import { AnalyticsService } from '../../services/analytics';
import { SoundEffects } from '../../services/soundEffects';
import { Voice } from '../../services/voiceService';

interface AiTutorDrawerProps {
  currentMissionId: string;
  profile: LearnerProfile;
  isOpen: boolean;
  onClose: () => void;
  onLanguageChange: (lang: LanguageMode) => void;
}

export const AiTutorDrawer: React.FC<AiTutorDrawerProps> = ({
  currentMissionId,
  profile,
  isOpen,
  onClose,
  onLanguageChange,
}) => {
  const [messages, setMessages] = useState<TutorMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on mission load
  useEffect(() => {
    if (isOpen) {
      AnalyticsService.log('ai_tutor_opened', { missionId: currentMissionId });
      const initialGreeting = AiTutorService.getInitialGreeting(currentMissionId, profile.preferredLanguage);
      setMessages([initialGreeting]);
      SoundEffects.playDiscovery();
    }
  }, [isOpen, currentMissionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isTyping) return;

    const userMsg: TutorMessage = {
      id: 'learner_' + Date.now(),
      sender: 'learner',
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText('');
    setIsTyping(true);
    SoundEffects.playSuccess();

    AnalyticsService.log('ai_tutor_interaction', {
      missionId: currentMissionId,
      learnerText: text.trim(),
    });

    // Simulate natural thinking delay of 2050 AI mentor
    setTimeout(() => {
      const tutorResp = AiTutorService.generateResponse(
        currentMissionId,
        text,
        newHistory,
        profile.preferredLanguage
      );
      setMessages((prev) => [...prev, tutorResp]);
      setIsTyping(false);
      SoundEffects.playDiscovery();
    }, 500);
  };

  const handleSpeakMessage = (msg: string) => {
    Voice.speak(msg);
  };

  const quickPrompts = [
    { label: "Give me a hint", text: "Can you give me a progressive hint?" },
    { label: "What is the goal?", text: "What is the core objective of this challenge?" },
    { label: "Hinglish mein samjhao", text: "Please explain this concept in Hinglish." },
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-white border-l border-lab-900/10 shadow-elevated flex flex-col justify-between animate-fadeIn">
      {/* Drawer Header */}
      <div className="p-4 border-b border-lab-900/10 bg-lab-50 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-deep-space flex items-center justify-center text-quantum-teal">
            <span className="w-2.5 h-2.5 rounded-full bg-quantum-teal animate-pulse-subtle" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs tracking-wider text-deep-space">
                SOCRATIC AI MENTOR
              </span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-quantum-teal/10 text-quantum-teal font-mono">
                2050
              </span>
            </div>
            <p className="text-[10px] text-lab-400">
              Guided discovery • Non-shaming assistance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={() => {
              const newLang = profile.preferredLanguage === 'hinglish' ? 'en' : 'hinglish';
              onLanguageChange(newLang);
              SoundEffects.playDiscovery();
            }}
            className={`text-[10px] font-mono px-2 py-1 rounded-full border transition-all ${
              profile.preferredLanguage === 'hinglish'
                ? 'bg-deep-space text-white border-deep-space'
                : 'bg-white text-lab-500 border-lab-200'
            }`}
            title="Toggle English / Hinglish"
          >
            {profile.preferredLanguage === 'hinglish' ? '🇮🇳 Hinglish' : '🌐 English'}
          </button>

          <button
            onClick={onClose}
            aria-label="Close tutor"
            className="p-1.5 rounded-full text-lab-400 hover:text-deep-space hover:bg-lab-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans">
        {messages.map((msg) => {
          const isAI = msg.sender === 'tutor';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isAI ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                  isAI
                    ? 'bg-lab-50 text-deep-space border border-lab-900/5 shadow-subtle'
                    : 'bg-deep-space text-future-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isAI ? 'text-quantum-teal' : 'text-lab-300'}`}>
                    {isAI ? 'AI Companion' : 'You'}
                  </span>
                  {isAI && (
                    <button
                      onClick={() => handleSpeakMessage(msg.text)}
                      className="text-lab-400 hover:text-quantum-teal text-[11px]"
                      title="Read aloud"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-lab-50 border border-lab-900/5 max-w-[120px] text-xs font-mono text-lab-400">
            <span className="w-1.5 h-1.5 rounded-full bg-quantum-teal animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-quantum-teal animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-quantum-teal animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2 bg-lab-50 border-t border-lab-900/10 flex flex-wrap gap-1.5">
        {quickPrompts.map((qp, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(qp.text)}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-lab-900/10 text-lab-600 hover:text-quantum-teal hover:border-quantum-teal/30 transition-all font-mono"
          >
            {qp.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 bg-white border-t border-lab-900/10 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask a question or explain your thought..."
          className="flex-1 bg-lab-50 text-xs text-deep-space placeholder-lab-400 px-3.5 py-2.5 rounded-xl border border-lab-900/10 focus:outline-none focus:border-quantum-teal"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 rounded-xl bg-deep-space text-white hover:bg-deep-space/90 disabled:opacity-30 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
