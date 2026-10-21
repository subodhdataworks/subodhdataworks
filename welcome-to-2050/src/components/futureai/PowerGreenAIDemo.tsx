import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  RotateCcw, 
  HelpCircle, 
  Play, 
  BookOpen, 
  Layers, 
  Activity,
  Globe,
  Radio
} from 'lucide-react';
import { 
  PowerGreenAI, 
  VoiceState, 
  SupportedLanguage, 
  AIProviderResponse 
} from '../../services/powerGreenAIService';

interface PowerGreenAIDemoProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onNavigateToTopic?: (topic: string) => void;
}

export const PowerGreenAIDemo: React.FC<PowerGreenAIDemoProps> = ({
  currentLanguage,
  onLanguageChange,
  onNavigateToTopic,
}) => {
  const [voiceState, setVoiceState] = useState<VoiceState>('IDLE');
  const [frequencies, setFrequencies] = useState<number[]>(Array(16).fill(0.08));
  const [conversation, setConversation] = useState<Array<{ role: 'student' | 'ai'; text: string; lang: SupportedLanguage }>>([
    {
      role: 'student',
      text: currentLanguage === 'hi' ? 'पायथन वेरिएबल क्या है?' : 'What is a Python variable?',
      lang: currentLanguage,
    },
    {
      role: 'ai',
      text: currentLanguage === 'hi' 
        ? 'वेरिएबल एक नामित कंटेनर है जिसका उपयोग प्रोग्राम में डेटा को संगृहीत करने के लिए किया जाता है।'
        : 'A variable is a named container used to store data in a program.',
      lang: currentLanguage,
    },
  ]);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [typedInput, setTypedInput] = useState('');
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubState = PowerGreenAI.subscribeState((state) => {
      setVoiceState(state);
    });

    const unsubWave = PowerGreenAI.subscribeWaveform((freq) => {
      setFrequencies([...freq]);
    });

    return () => {
      unsubState();
      unsubWave();
    };
  }, []);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [conversation, voiceState]);

  const handleMicToggle = () => {
    if (voiceState === 'LISTENING') {
      PowerGreenAI.stopListening();
    } else {
      PowerGreenAI.startListening(
        (query, response) => {
          setConversation((prev) => [
            ...prev,
            { role: 'student', text: query, lang: response.language },
            { role: 'ai', text: response.text, lang: response.language },
          ]);
        },
        (errorMsg) => {
          console.log('Voice notice:', errorMsg);
        }
      );
    }
  };

  const handleQuickPrompt = async (action: string) => {
    let studentText = '';
    if (action === 'ask') {
      studentText = currentLanguage === 'hi' ? 'वेरिएबल के विभिन्न प्रकार क्या हैं?' : 'What are the main types of variables in Python?';
    } else if (action === 'explain_again') {
      studentText = currentLanguage === 'hi' ? 'कृपया इसे दोबारा विस्तार से समझाएं।' : 'Can you explain variables again simply?';
    } else if (action === 'example') {
      studentText = currentLanguage === 'hi' ? 'मुझे इसका एक उदाहरण दीजिए।' : 'Give me an example of declaring variables.';
    } else if (action === 'practice') {
      studentText = currentLanguage === 'hi' ? 'वेरिएबल का अभ्यास शुरू करें।' : 'Start practice question on variables.';
    }

    setConversation((prev) => [...prev, { role: 'student', text: studentText, lang: currentLanguage }]);

    const response = await PowerGreenAI.askText(studentText, currentLanguage);

    setConversation((prev) => [...prev, { role: 'ai', text: response.text, lang: response.language }]);

    if (!isAudioMuted) {
      PowerGreenAI.speakText(response.text, response.language);
    }
  };

  const handleVoiceCommandPill = async (command: string) => {
    let query = command;
    if (currentLanguage === 'hi') {
      if (command === 'Start Python') query = 'पायथन शुरू करें';
      else if (command === 'Explain variables') query = 'वेरिएबल समझाएं';
      else if (command === 'Start MCQ') query = 'एमसीक्यू शुरू करें';
      else if (command === 'Start coding practice') query = 'कोडिंग प्रैक्टिस शुरू करें';
      else if (command === 'Start interview') query = 'इंटरव्यू शुरू करें';
      else if (command === 'Continue where I stopped') query = 'जहाँ रुका था वहीं से जारी रखें';
    }

    setConversation((prev) => [...prev, { role: 'student', text: query, lang: currentLanguage }]);

    const response = await PowerGreenAI.askText(query, currentLanguage);

    setConversation((prev) => [...prev, { role: 'ai', text: response.text, lang: response.language }]);

    if (!isAudioMuted) {
      PowerGreenAI.speakText(response.text, response.language);
    }
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedInput.trim()) return;

    const query = typedInput.trim();
    setTypedInput('');

    setConversation((prev) => [...prev, { role: 'student', text: query, lang: currentLanguage }]);

    const response = await PowerGreenAI.askText(query, currentLanguage);

    setConversation((prev) => [...prev, { role: 'ai', text: response.text, lang: response.language }]);

    if (!isAudioMuted) {
      PowerGreenAI.speakText(response.text, response.language);
    }
  };

  return (
    <section id="voice-ai" className="py-16 sm:py-24 bg-gradient-to-b from-transparent via-sky-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-4 h-4 text-emerald-600" />
            <span>AI Tutor — PowerGreen AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Meet PowerGreen AI
          </h2>

          <p className="text-base text-slate-600 font-normal">
            Your AI-powered learning companion.
          </p>
        </div>

        {/* Floating AI Interface Card (Light Futuristic Glassmorphism) */}
        <div className="max-w-4xl mx-auto rounded-3xl light-glass-card border border-slate-200/90 shadow-2xl p-6 sm:p-8">
          {/* Top Bar: Mentor Identity, Status, Language Switcher, Audio Mute */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 via-emerald-500 to-teal-400 p-[2px] shadow-md shadow-emerald-500/20">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <Bot className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-200 animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base">PowerGreen AI</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    2050 Engine
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>State: </span>
                  <span className="font-mono font-semibold text-slate-800 uppercase tracking-wider">
                    {voiceState}
                  </span>
                </div>
              </div>
            </div>

            {/* Language & Voice Controls */}
            <div className="flex items-center gap-2">
              {/* Language Rule Toggle: Strict Hindi / English */}
              <div className="flex items-center rounded-xl bg-slate-100 p-0.5 border border-slate-200 text-xs font-semibold">
                <button
                  onClick={() => {
                    onLanguageChange('en');
                    PowerGreenAI.setPreferredLanguage('en');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    currentLanguage === 'en'
                      ? 'bg-white text-sky-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    onLanguageChange('hi');
                    PowerGreenAI.setPreferredLanguage('hi');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    currentLanguage === 'hi'
                      ? 'bg-white text-sky-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  हिन्दी
                </button>
              </div>

              {/* Mute Toggle */}
              <button
                onClick={() => {
                  const nextMuted = !isAudioMuted;
                  setIsAudioMuted(nextMuted);
                  if (nextMuted) PowerGreenAI.stopSpeaking();
                }}
                className={`p-2 rounded-xl border transition-all ${
                  isAudioMuted
                    ? 'bg-rose-50 text-rose-600 border-rose-200'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title={isAudioMuted ? 'Unmute AI Voice' : 'Mute AI Voice'}
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Chat Conversation History & Simulation */}
          <div
            ref={chatScrollRef}
            className="my-6 space-y-4 max-h-[280px] overflow-y-auto pr-2 scroll-smooth"
          >
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  msg.role === 'student' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'student'
                      ? 'bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-md shadow-sky-600/10 rounded-br-none'
                      : 'bg-white border border-slate-200/90 text-slate-800 shadow-sm rounded-bl-none'
                  }`}
                >
                  <p className="font-normal">{msg.text}</p>
                </div>

                {msg.role === 'student' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    You
                  </div>
                )}
              </div>
            ))}

            {/* Neural Thinking State Indicator */}
            {voiceState === 'THINKING' && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-sky-200 text-sky-800 text-xs font-medium w-fit">
                <Sparkles className="w-4 h-4 text-sky-600 animate-spin" />
                <span>PowerGreen AI is analyzing concepts...</span>
              </div>
            )}
          </div>

          {/* Animated Waveform Visualizer */}
          <div className="my-5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Radio className={`w-4 h-4 ${voiceState === 'IDLE' ? 'text-slate-400' : 'text-emerald-500 animate-pulse'}`} />
              <span className="text-xs font-medium text-slate-600">
                Voice Waveform:
              </span>
            </div>

            {/* Dynamic Equalizer Bars */}
            <div className="flex items-center gap-1.5 h-8">
              {frequencies.map((val, idx) => (
                <div
                  key={idx}
                  className="wave-bar"
                  style={{
                    height: `${Math.max(4, val * 30)}px`,
                    opacity: voiceState === 'IDLE' ? 0.3 : 0.9,
                  }}
                />
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              {voiceState === 'SPEAKING' ? 'Output: Audio Stream' : voiceState === 'LISTENING' ? 'Input: Voice Rec' : 'Ready'}
            </div>
          </div>

          {/* Quick Interactive Actions Pills (Specified in Section 5) */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Quick Actions:
            </span>
            <button
              onClick={() => handleQuickPrompt('ask')}
              className="px-3 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-semibold transition-all hover:scale-105"
            >
              Ask anything
            </button>
            <button
              onClick={() => handleQuickPrompt('explain_again')}
              className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold transition-all hover:scale-105"
            >
              Explain again
            </button>
            <button
              onClick={() => handleQuickPrompt('example')}
              className="px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold transition-all hover:scale-105"
            >
              Give me an example
            </button>
            <button
              onClick={() => handleQuickPrompt('practice')}
              className="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-semibold transition-all hover:scale-105 flex items-center gap-1"
            >
              <Play className="w-3 h-3 text-indigo-600" />
              <span>Start Practice</span>
            </button>
          </div>

          {/* Voice Command Shortcuts (Talk to PowerGreen AI) */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Talk to PowerGreen AI — Try saying:
              </span>
              <span className="text-[11px] text-slate-400 font-mono">Real STT Provider</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'Start Python',
                'Explain variables',
                'Start MCQ',
                'Start coding practice',
                'Start interview',
                'Continue where I stopped',
              ].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleVoiceCommandPill(cmd)}
                  className="px-3 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-700 hover:text-sky-700 transition-all font-medium flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>&quot;{cmd}&quot;</span>
                </button>
              ))}
            </div>
          </div>

          {/* Voice Input & Text Input Interaction Row */}
          <form onSubmit={handleTextSubmit} className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={handleMicToggle}
              className={`p-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center ${
                voiceState === 'LISTENING'
                  ? 'bg-rose-500 text-white shadow-rose-500/30 animate-pulse scale-105'
                  : 'bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-500 hover:to-emerald-500 text-white shadow-sky-500/20 hover:scale-105'
              }`}
              title={voiceState === 'LISTENING' ? 'Click to stop listening' : 'Click to speak with PowerGreen AI'}
            >
              <Mic className="w-5 h-5" />
            </button>

            <input
              type="text"
              value={typedInput}
              onChange={(e) => setTypedInput(e.target.value)}
              placeholder={
                currentLanguage === 'hi'
                  ? 'पावरग्रीन एआई से कुछ भी पूछें (उदा. पायथन, एसक्यूएल, इंटरव्यू)...'
                  : 'Ask PowerGreen AI anything or type voice commands...'
              }
              className="flex-1 px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />

            <button
              type="submit"
              className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
