import React from 'react';
import { Star } from 'lucide-react';
import { StableMouthLipSyncAvatar } from './interview/StableMouthLipSyncAvatar';

export interface QuizAiHostAvatarProps {
  isSpeaking: boolean;
  speakingText?: string;
  onToggleSpeak?: () => void;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const QuizAiHostAvatar: React.FC<QuizAiHostAvatarProps> = ({
  isSpeaking,
  speakingText = '',
  onToggleSpeak,
  className = '',
  size = 'md',
}) => {
  const dimensions = {
    xs: { width: 72, height: 62 },
    sm: { width: 96, height: 82 },
    md: { width: 128, height: 110 },
    lg: { width: 146, height: 126 },
  }[size];

  return (
    <div
      className={`ppa-ai-avatar-badge-wrap relative flex flex-col items-center justify-end shrink-0 cursor-pointer select-none group ${className}`}
      onClick={onToggleSpeak}
      title={isSpeaking ? 'AI Host speaking (Tap to mute)' : 'AI Host (Tap to listen)'}
    >
      {/* Crisp Native-Sharp Transparent Cutout Female AI Host (Zero CSS filter blur) */}
      <div
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
        className="relative shrink-0 overflow-visible"
      >
        <StableMouthLipSyncAvatar
          imageUrl="/images/future_it_mentor_girl.png"
          alt="Future IT AI Host"
          isSpeaking={isSpeaking}
          speakingText={speakingText}
          speakingRate={1.0}
          className="w-full h-full"
        />
      </div>

      {/* Floating Compact White Pill Badge: "⭐ AI Host" at Bottom Center */}
      <div className="-mt-2 relative z-10">
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-white text-[#1E293B] border shadow-[0_2px_6px_rgba(109,40,217,0.12)] transition-all ${
            isSpeaking
              ? 'border-[#7C3AED] text-[#6D28D9] ring-2 ring-purple-200'
              : 'border-[#E9E5F5] group-hover:border-[#C4B5FD]'
          }`}
        >
          <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400 shrink-0" />
          <span>AI Host</span>
        </span>
      </div>
    </div>
  );
};
