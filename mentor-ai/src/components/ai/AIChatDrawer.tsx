import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Code, Lightbulb, Trash2 } from 'lucide-react';
import { Modal } from '../common/Modal';
import { ChatMessage } from '../../types';
import { initialAiMessages, getMockAiResponse } from '../../data/aiAssistant';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

export const AIChatDrawer: React.FC<AIChatDrawerProps> = ({
  isOpen,
  onClose,
  initialPrompt
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialAiMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate smart AI mentor generation delay
    setTimeout(() => {
      const responseText = getMockAiResponse(query);
      const aiMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        text: responseText,
        timestamp: 'Just now',
        topicBadge: 'Mentor AI Tutor'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages(initialAiMessages);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mentor AI — Personal Tutor" maxWidth="max-w-lg">
      <div className="flex flex-col h-[520px]">
        {/* Tutor Status Header */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-blue-50/80 border border-indigo-100/70 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-indigo-200">
              <img src="/assets/ask-ai-orb.jpg" alt="AI Mascot" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-800">Mentor AI</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-[10px] text-slate-500">Specialized in Data Analytics & Interview Prep</span>
            </div>
          </div>
          <button
            onClick={handleClearChat}
            title="Reset conversation"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-white transition cursor-pointer"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3 shadow-2xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-slate-900 text-white rounded-br-xs'
                    : 'bg-slate-50 border border-slate-150 text-slate-800 rounded-bl-xs'
                }`}
              >
                <div className="whitespace-pre-line font-sans">
                  {msg.text}
                </div>
                <div
                  className={`text-[9.5px] mt-1 text-right ${
                    msg.sender === 'user' ? 'text-slate-400' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 shrink-0 mt-0.5">
                  <img src="/subodh-photo.jpg" alt="User" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-indigo-600 text-xs pl-9">
              <span className="inline-block animate-bounce">●</span>
              <span className="inline-block animate-bounce delay-150">●</span>
              <span className="inline-block animate-bounce delay-300">●</span>
              <span className="text-[11px] text-slate-400 font-medium">Mentor AI is thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => handleSendMessage('Give me a quick SQL interview question')}
            className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition whitespace-nowrap cursor-pointer shrink-0"
          >
            🎯 SQL Interview Question
          </button>
          <button
            onClick={() => handleSendMessage('Explain Pandas groupby vs aggregate')}
            className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition whitespace-nowrap cursor-pointer shrink-0"
          >
            🐼 Pandas groupby vs agg
          </button>
          <button
            onClick={() => handleSendMessage('How to prepare a Data Analyst portfolio?')}
            className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition whitespace-nowrap cursor-pointer shrink-0"
          >
            💼 Portfolio Advice
          </button>
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="relative pt-2 shrink-0"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your mentor anything about data..."
            className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-1.5 top-3.5 w-8 h-8 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </Modal>
  );
};
