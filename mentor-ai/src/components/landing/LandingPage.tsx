import React, { useState } from 'react';
import { LandingNavbar } from './LandingNavbar';
import { LandingHero } from './LandingHero';
import { SkillsSection } from './SkillsSection';
import { TrustedBanner } from './TrustedBanner';
import { WhyMentorAISection } from './WhyMentorAISection';
import { InteractiveAIMentorSection } from './InteractiveAIMentorSection';
import { HowItWorksSection } from './HowItWorksSection';
import { ProjectsShowcaseSection } from './ProjectsShowcaseSection';
import { InterviewSection } from './InterviewSection';
import { PricingSection } from './PricingSection';
import { TrustAndPartnersBar } from './TrustAndPartnersBar';
import { LandingFooter } from './LandingFooter';
import { VideoDemoModal } from './VideoDemoModal';

interface LandingPageProps {
  onOpenLogin: (topic?: string) => void;
  onOpenSearch: () => void;
  onOpenNotifications: () => void;
  onSelectSkill?: (skill: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenLogin,
  onOpenSearch,
  onOpenNotifications,
  onSelectSkill,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F6F8FC] text-slate-900 overflow-x-hidden">
      {/* Background Soft Silky Waves & Ambient Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Pale Gold Ambient Glow */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-amber-100/30 via-yellow-50/15 to-transparent blur-3xl" />
        {/* Soft Lavender / Purple Ambient Glow */}
        <div className="absolute top-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-purple-200/20 via-indigo-100/15 to-transparent blur-3xl" />
        {/* Soft Pale Sky Blue Ambient Glow */}
        <div className="absolute -bottom-40 left-1/3 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-sky-200/25 via-blue-100/10 to-transparent blur-3xl" />
      </div>

      {/* Main Content Flow */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Pre-Login Floating Desktop Navbar */}
        <LandingNavbar
          activeSection={activeSection}
          onNavigateSection={handleNavigateSection}
          onOpenLogin={() => onOpenLogin()}
          onOpenGetStarted={() => onOpenLogin()}
          onOpenSearch={onOpenSearch}
          onOpenNotifications={onOpenNotifications}
        />

        <main className="flex-1 w-full">
          {/* 1. Cinematic 2050 Hero Section */}
          <LandingHero
            onStartLearning={() => onOpenLogin()}
            onWatchDemo={() => setIsVideoModalOpen(true)}
          />

          {/* 2. Master In-Demand Skills (8-Card Grid) */}
          <SkillsSection
            onSelectSkill={(skill) => {
              if (onSelectSkill) {
                onSelectSkill(skill);
              } else {
                onOpenLogin(skill);
              }
            }}
          />

          {/* 3. Dark Worldwide Learners Banner */}
          <TrustedBanner />

          {/* 4. More Than Just a Course (Why Choose Mentor AI) */}
          <WhyMentorAISection />

          {/* 5. Trust & Industry Alignment Bar */}
          <TrustAndPartnersBar />

          {/* 6. Live Interactive AI Mentor Playground */}
          <InteractiveAIMentorSection
            onStartFree={() => onOpenLogin('AI Mentor')}
          />

          {/* 7. How Mentor AI Works (4 Steps) */}
          <HowItWorksSection
            onStartLearning={() => onOpenLogin()}
          />

          {/* 8. Portfolio Projects Showcase */}
          <ProjectsShowcaseSection
            onStartLearning={() => onOpenLogin('Projects')}
          />

          {/* 9. Interview Readiness Section */}
          <InterviewSection
            onStartLearning={() => onOpenLogin('Interview')}
          />

          {/* 10. Honest Pricing Section */}
          <PricingSection
            onSelectPlan={(plan) => onOpenLogin(plan === 'pro' ? 'Pro Lifetime' : 'Free Starter')}
          />
        </main>

        {/* Footer */}
        <LandingFooter
          onOpenLogin={() => onOpenLogin()}
          onNavigateSection={handleNavigateSection}
        />

        {/* Video Tour Modal */}
        <VideoDemoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          onStartLearning={() => {
            setIsVideoModalOpen(false);
            onOpenLogin();
          }}
        />
      </div>
    </div>
  );
};
