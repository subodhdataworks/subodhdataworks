import React, { useState } from 'react';
import { Voice } from '../../services/voiceService';
import { SoundEffects } from '../../services/soundEffects';

export type InputMode = 'speak' | 'type' | 'tap';

interface InputModeBarProps {
  currentMode: InputMode;
  onModeChange: (mode: InputMode) => void;
  onTextSubmit?: (text: string) => void;
  placeholder?: string;
  isListening?: boolean;
}

export const InputModeBar: React.FC<InputModeBarProps> = ({
  currentMode,
  onModeChange,
  onTextSubmit,
  placeholder = "Share your thought or prediction...",
}) => {
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleStartVoice = () => {
    setIsRecording(true);
    setStatusMessage('Listening to your voice...');
    Voice.listen(
      (transcript) => {
        setIsRecording(false);
        setStatusMessage(`Understood: "${transcript}"`);
        SoundEffects.playSuccess();
        if (onTextSubmit) {
          onTextSubmit(transcript);
        }
        setTimeout(() => setStatusMessage(null), 3000);
      },
      (err) => {
        setIsRecording(false);
        setStatusMessage(err);
        SoundEffects.playError();
        setTimeout(() => setStatusMessage(null), 4000);
      }
    );
  };

  const handleStopVoice = () => {
    Voice.stopListening();
    setIsRecording(false);
    setStatusMessage(null);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    SoundEffects.playSuccess();
    if (onTextSubmit) {
      onTextSubmit(inputText.trim());
    }
    setInputText('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-2">
      {/* Mode Switcher Tabs */}
      <div className="flex items-center bg-lab-100 p-1 rounded-full border border-lab-900/10 shadow-sm">
        <button
          onClick={() => {
            onModeChange('speak');
            SoundEffects.playDiscovery();
          }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            currentMode === 'speak'
              ? 'bg-deep-space text-future-white shadow-sm'
              : 'text-lab-500 hover:text-deep-space'
          }`}
        >
          <span className="text-sm">🎙️</span>
          <span>Speak</span>
        </button>

        <button
          onClick={() => {
            onModeChange('type');
            SoundEffects.playDiscovery();
          }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            currentMode === 'type'
              ? 'bg-deep-space text-future-white shadow-sm'
              : 'text-lab-500 hover:text-deep-space'
          }`}
        >
          <span className="text-sm">⌨️</span>
          <span>Type</span>
        </button>

        <button
          onClick={() => {
            onModeChange('tap');
            SoundEffects.playDiscovery();
          }}
          className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            currentMode === 'tap'
              ? 'bg-deep-space text-future-white shadow-sm'
              : 'text-lab-500 hover:text-deep-space'
          }`}
        >
          <span className="text-sm">👆</span>
          <span>Tap</span>
        </button>
      </div>

      {/* Mode Input Controls */}
      <div className="w-full">
        {currentMode === 'speak' && (
          <div className="flex flex-col items-center gap-2 bg-white border border-lab-900/10 rounded-2xl p-3 shadow-subtle text-center">
            <p className="text-xs text-lab-500">
              Speak naturally. The 2050 engine analyzes meaning, not grammar.
            </p>
            <div className="flex items-center gap-3">
              {!isRecording ? (
                <button
                  onClick={handleStartVoice}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-quantum-teal text-white hover:bg-quantum-teal/90 shadow-sm font-medium text-xs transition-all active:scale-95"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>Start Speaking</span>
                </button>
              ) : (
                <button
                  onClick={handleStopVoice}
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-signal-coral text-white hover:bg-signal-coral/90 shadow-sm font-medium text-xs transition-all active:scale-95 animate-pulse"
                >
                  <span>⏹️ Stop Speaking</span>
                </button>
              )}
            </div>
            {statusMessage && (
              <span className="text-xs text-quantum-teal font-medium mt-1">
                {statusMessage}
              </span>
            )}
          </div>
        )}

        {currentMode === 'type' && (
          <form onSubmit={handleTextSubmit} className="flex items-center gap-2 bg-white border border-lab-900/10 rounded-2xl p-1.5 pl-4 shadow-subtle">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={placeholder}
              className="flex-1 bg-transparent text-sm text-deep-space placeholder-lab-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="px-4 py-1.5 rounded-xl bg-deep-space text-future-white hover:bg-deep-space/90 disabled:opacity-30 text-xs font-medium transition-all"
            >
              Send →
            </button>
          </form>
        )}

        {currentMode === 'tap' && (
          <div className="text-center py-1">
            <span className="text-xs text-lab-500">
              Tap mode active: Use direct on-screen interactive choice cards & controls.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
