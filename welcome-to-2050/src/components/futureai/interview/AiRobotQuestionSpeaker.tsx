import React, { useState, useEffect, useRef, useCallback } from 'react';
import { playSwaraVoice, stopSwaraVoice } from '../../../services/swaraAudioService';
import { soundEffects } from '../../../services/soundEffects';

interface AiRobotQuestionSpeakerProps {
  questionText: string;
  questionNumber?: string;
  autoPlay?: boolean;
  className?: string;
}

export const AiRobotQuestionSpeaker: React.FC<AiRobotQuestionSpeakerProps> = ({
  questionText,
  autoPlay = true,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSpeakingRef = useRef<boolean>(false);

  // Stop active speech and typewriter
  const stopAll = useCallback(() => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    stopSwaraVoice();
    isSpeakingRef.current = false;
    setIsSpeaking(false);
  }, []);

  // Synchronized typewriter and Swara female voice
  const speakAndType = useCallback(
    (textToSpeak: string) => {
      stopAll();
      setDisplayedText('');
      setIsTyping(true);
      isSpeakingRef.current = true;
      setIsSpeaking(true);

      const words = textToSpeak.split(' ');
      const totalWords = words.length;

      // Use the exact official female Swara voice saved in the website
      playSwaraVoice(textToSpeak, {
        onStart: () => {
          isSpeakingRef.current = true;
          setIsSpeaking(true);
        },
        onEnd: () => {
          isSpeakingRef.current = false;
          setIsSpeaking(false);
          setDisplayedText(textToSpeak);
          setIsTyping(false);
        },
        onError: () => {
          isSpeakingRef.current = false;
          setIsSpeaking(false);
          setDisplayedText(textToSpeak);
          setIsTyping(false);
        },
      });

      // Synchronized word-by-word typewriter
      let currentWordIdx = 0;
      const msPerWord = Math.max(180, Math.min(300, Math.floor(4000 / Math.max(totalWords, 1))));

      const typeNext = () => {
        if (currentWordIdx <= totalWords) {
          const slice = words.slice(0, currentWordIdx).join(' ');
          setDisplayedText(slice);
          currentWordIdx++;
          if (currentWordIdx <= totalWords) {
            typingTimerRef.current = setTimeout(typeNext, msPerWord);
          } else {
            setIsTyping(false);
          }
        }
      };

      typeNext();
    },
    [stopAll]
  );

  // Auto-play when question changes
  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        speakAndType(questionText);
      }, 250);
      return () => {
        clearTimeout(timer);
        stopAll();
      };
    } else {
      setDisplayedText(questionText);
      setIsTyping(false);
    }
  }, [questionText, autoPlay, speakAndType, stopAll]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  // Toggle Replay when user clicks avatar
  const handleAvatarClick = () => {
    soundEffects.playClick();
    if (isSpeaking) {
      stopAll();
      setDisplayedText(questionText);
      setIsTyping(false);
    } else {
      speakAndType(questionText);
    }
  };

  return (
    <div className={`flex items-start gap-3 sm:gap-3.5 ${className}`}>
      {/* Realistic HR Interviewer Avatar directly in front of the question */}
      <button
        type="button"
        onClick={handleAvatarClick}
        className={`relative w-9 h-9 rounded-full overflow-hidden shrink-0 mt-0.5 border transition-all duration-200 cursor-pointer group ${
          isSpeaking
            ? 'border-[#6D28D9] ring-3 ring-purple-200 scale-105'
            : 'border-slate-200 hover:border-purple-400'
        }`}
        title={isSpeaking ? 'Click to stop audio' : 'Click to listen to question'}
      >
        <img
          src="/images/hr_interviewer_indian_female.jpg"
          alt="Aditi Sharma — Interviewer"
          className="w-full h-full object-cover"
        />

        {/* Subtle Speaking Status Dot */}
        {isSpeaking && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white bg-emerald-500 animate-ping" />
        )}
        <span
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${
            isSpeaking ? 'bg-emerald-500' : 'bg-[#6D28D9]'
          }`}
        />
      </button>

      {/* Synchronized Real-Time Question Text */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg sm:text-[21px] font-semibold text-slate-900 tracking-[-0.015em] leading-snug m-0">
          {displayedText || (isTyping ? '' : questionText)}
          {isTyping && (
            <span className="inline-block w-0.5 h-5 bg-[#6D28D9] animate-pulse ml-1 align-middle rounded-full" />
          )}
        </h2>
      </div>
    </div>
  );
};
