import React from 'react';
import { ProfileHeader } from '../header/ProfileHeader';
import { HeroCoachCard } from '../hero/HeroCoachCard';
import { LearningJourney } from '../learning/LearningJourney';
import { MissionCard } from '../mission/MissionCard';
import { AskAICard } from '../ai/AskAICard';
import { QuickActions } from '../quickActions/QuickActions';
import { PremiumBanner } from '../premium/PremiumBanner';
import { ProfileCard } from '../profile/ProfileCard';

interface HomeViewProps {
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onOpenAiChat: () => void;
  onSelectPromptChip: (prompt: string) => void;
  onNavigateToTab: (tab: string) => void;
  onContinueLearning: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenSearch,
  onOpenNotifications,
  onOpenAiChat,
  onSelectPromptChip,
  onNavigateToTab,
  onContinueLearning
}) => {
  return (
    <div className="w-full">
      {/* =========================================================================
          1. MOBILE-ONLY SINGLE COLUMN VIEW (< 1024px)
          Preserves the exact mobile app flow and proportions from the reference image
         ========================================================================= */}
      <div className="flex lg:hidden flex-col gap-4 sm:gap-5 pb-24">
        {/* Mobile Header with Avatar, Greeting, Crown & Action Circles */}
        <ProfileHeader
          onOpenSearch={onOpenSearch}
          onOpenNotifications={onOpenNotifications}
          onOpenAiChat={onOpenAiChat}
        />

        {/* Hero AI Coach Card */}
        <HeroCoachCard onContinueLearning={onContinueLearning} />

        {/* Your Learning Journey 4 Cards */}
        <LearningJourney
          onStartLesson={onContinueLearning}
          onViewAll={() => onNavigateToTab('learn')}
          onSelectCourse={(id) => onNavigateToTab(id)}
        />

        {/* Today's Mission Card */}
        <MissionCard />

        {/* Ask AI Card */}
        <AskAICard
          onAsk={onSelectPromptChip}
          onSelectPromptChip={onSelectPromptChip}
        />

        {/* Quick Actions */}
        <QuickActions onNavigateToTab={onNavigateToTab} />

        {/* Premium Upgrade Banner */}
        <PremiumBanner />
      </div>

      {/* =========================================================================
          2. DESKTOP & LAPTOP 2-COLUMN DASHBOARD GRID (>= 1024px)
          Optimized for 1366x768, 1440x900, 1536x864, and 1920x1080
          Left Main Activity (Hero, Mission, Ask AI) + Right Sidebar (Profile, Journey, Actions, Premium)
         ========================================================================= */}
      <div className="hidden lg:grid grid-cols-[minmax(0,2fr)_minmax(360px,0.9fr)] gap-[28px] items-start pb-8">
        {/* LEFT COLUMN: Major Learning & AI Content */}
        <div className="flex flex-col gap-6">
          {/* 1. AI Learning Coach Hero (height ~280-320px) */}
          <HeroCoachCard onContinueLearning={onContinueLearning} />

          {/* 2. Today's Mission (wide horizontal desktop card, height ~150-170px) */}
          <MissionCard />

          {/* 3. Ask AI (wide interaction panel) */}
          <AskAICard
            onAsk={onSelectPromptChip}
            onSelectPromptChip={onSelectPromptChip}
          />
        </div>

        {/* RIGHT SIDEBAR: Profile, Progress, Quick Actions, Premium Upgrade */}
        <div className="flex flex-col gap-6">
          {/* 1. Profile / Level Card (height ~130-150px) */}
          <ProfileCard onProfileClick={() => onNavigateToTab('profile')} />

          {/* 2. Your Learning Journey (4 course cards, height ~130px) */}
          <LearningJourney
            onStartLesson={onContinueLearning}
            onViewAll={() => onNavigateToTab('learn')}
            onSelectCourse={(id) => onNavigateToTab(id)}
          />

          {/* 3. Quick Actions (2x2 grid of distinct action cards) */}
          <QuickActions onNavigateToTab={onNavigateToTab} />

          {/* 4. Premium Upgrade Banner (₹999 Lifetime Access) */}
          <PremiumBanner />
        </div>
      </div>
    </div>
  );
};
