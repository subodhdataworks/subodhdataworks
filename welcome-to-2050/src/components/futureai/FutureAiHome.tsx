import React, { useState } from 'react';
import { FutureNavbar } from './FutureNavbar';
import { HeroReference } from './HeroReference';
import { IndustryCertificationsSection } from './IndustryCertificationsSection';
import { CareerFocusedCoursesSection } from './CareerFocusedCoursesSection';
import { PlacementSupportBannerSection } from './PlacementSupportBannerSection';
import { WhyFutureAiSection } from './WhyFutureAiSection';
import { ProjectsAndSuccessStoriesSection } from './ProjectsAndSuccessStoriesSection';
import { FuturePlanAndFaqSection } from './FuturePlanAndFaqSection';
import { FutureCtaSection } from './FutureCtaSection';
import { FutureFooter } from './FutureFooter';
import { FutureAuthModal } from './FutureAuthModal';
import { AdvisorModal } from './AdvisorModal';
import { CurriculumModal } from './CurriculumModal';
import { VideoCinemaModal } from './VideoCinemaModal';
import { FutureInteractiveBar } from './FutureInteractiveBar';
import { SupportedLanguage } from '../../services/powerGreenAIService';
import { LearnerProfile } from '../../types';

interface FutureAiHomeProps {
  profile?: LearnerProfile;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
  onStartLearning?: () => void;
  onEnterTheFuture?: () => void;
  onSelectPedestal?: (pathId: string) => void;
  onOpenWhatsAppLogin?: () => void;
  onOpenCareer?: () => void;
  onOpenLabs?: () => void;
  onOpenMissions?: () => void;
  onOpenCommunity?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onLoginSuccess?: (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => void;
  onOpenDashboard?: () => void;
}

export const FutureAiHome: React.FC<FutureAiHomeProps> = ({
  profile,
  theme = 'light',
  onToggleTheme,
  onStartLearning,
  isLoggedIn = false,
  userName = 'Subodh Kumar',
  onLoginSuccess,
  onOpenDashboard,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [videoCinemaOpen, setVideoCinemaOpen] = useState(false);

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'ats-resume-checker') {
      if (typeof window !== 'undefined') {
        window.location.hash = '#ats-resume-checker';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Map courses / program-highlights / pay-after-placement to the combined Pay After Placement + Program Highlights section
    const resolvedId =
      sectionId === 'courses' || sectionId === 'program-highlights'
        ? 'pay-after-placement'
        : sectionId;

    const el = document.getElementById(resolvedId) || document.getElementById(sectionId);
    if (el) {
      const navbarOffset = resolvedId === 'real-projects' ? 12 : 84;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
  };

  // Smart CTA routing logic
  const handleStartJourney = () => {
    if (!isLoggedIn) {
      // Not logged in → show Login / Sign Up
      setAuthModalOpen(true);
      return;
    }
    // Already logged in — check enrollment
    const isEnrolled = localStorage.getItem('futureai_enrolled') === 'true';
    if (isEnrolled) {
      // Enrolled user → go straight to dashboard
      onOpenDashboard?.();
    } else {
      // Logged in but not enrolled → enrollment flow
      setAuthModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFCFE] text-[#0F172A] selection:bg-sky-500/20 selection:text-sky-900 font-sans relative overflow-x-hidden">
      
      {/* 1. Navbar */}
      <FutureNavbar
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenLogin={() => setAuthModalOpen(true)}
        onGetStarted={handleStartJourney}
        onOpenVoice={() => setAdvisorModalOpen(true)}
        onNavigateSection={handleNavigateSection}
        onTalkToAdvisor={() => setAdvisorModalOpen(true)}
        onExploreCurriculum={() => setCurriculumModalOpen(true)}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onOpenDashboard={onOpenDashboard}
      />

      {/* 2. Hero Section */}
      <HeroReference
        onStartJourney={handleStartJourney}
        onWatchVideo={() => setVideoCinemaOpen(true)}
        onOpenAtsChecker={() => {
          handleNavigateSection('ats-resume-checker');
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onPayAfterPlacementClick={() => handleNavigateSection('pay-after-placement')}
        onSelectSkill={() => setCurriculumModalOpen(true)}
        isLoggedIn={isLoggedIn}
      />

      {/* 2.1 Industry-Recognized Certifications: IBM & Microsoft Banner */}
      <div className="my-6 sm:my-8">
        <IndustryCertificationsSection
          onExploreTracks={() => setCurriculumModalOpen(true)}
          onWatchRecording={() => setVideoCinemaOpen(true)}
        />
      </div>

      {/* 2.2 Placement Support: You Will Get Job From 700+ Companies Banner */}
      <div className="my-6 sm:my-8">
        <PlacementSupportBannerSection
          onStartLearning={handleStartJourney}
          onWatchStories={() => setVideoCinemaOpen(true)}
        />
      </div>

      {/* 3. Section: WHY FUTURE.AI? Same Skills. A Smarter Way. + ₹987 Limited Time Enrollment */}
      <div className="my-6 sm:my-8">
        <WhyFutureAiSection
          onLearnMore={() => handleNavigateSection('pay-after-placement')}
          onSelectSkill={() => setCurriculumModalOpen(true)}
          onOpenAdvisor={() => setAdvisorModalOpen(true)}
          onOpenCurriculum={() => setCurriculumModalOpen(true)}
        />
      </div>

      {/* 4. Section: Career-Focused Courses (CAREER-FOCUSED LEARNING - 4 3D Holographic Pots + Typewriter Title) */}
      <div className="mt-4 mb-1 sm:mt-6 sm:mb-1">
        <CareerFocusedCoursesSection
          onStartCourse={() => handleStartJourney()}
          onEnroll={() => setCurriculumModalOpen(true)}
        />
      </div>

      {/* 5. Section: Real Projects & Company Experience (REAL PROJECTS. REAL COMPANY EXPERIENCE. + Placed Learners Auto-Slider) */}
      <div className="mt-1 mb-1 sm:mt-1 sm:mb-2">
        <ProjectsAndSuccessStoriesSection
          onViewAllProjects={() => setCurriculumModalOpen(true)}
        />
      </div>

      {/* 7. Section: 2050 Career Acceleration (Your Future Is Not a Dream. It's a Plan. + FAQ + Metrics) */}
      <FuturePlanAndFaqSection
        onStartJourney={handleStartJourney}
        onTalkToAdvisor={() => setAdvisorModalOpen(true)}
      />

      {/* 8. Bottom CTA: Ready to Build a Brighter Career? */}
      <FutureCtaSection
        onStartJourney={handleStartJourney}
        onTalkToAdvisor={() => setAdvisorModalOpen(true)}
      />

      {/* 8. Modern Glassmorphic Footer */}
      <FutureFooter
        currentLanguage={currentLanguage}
        onNavigateSection={handleNavigateSection}
      />

      {/* 9. Floating Interactive Control Bar (Sound Effects, Button Color Changer, Cinematic Scene Switcher) */}
      <FutureInteractiveBar onOpenCinema={() => setVideoCinemaOpen(true)} />

      {/* Clean Interactive Modals */}
      <FutureAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(name, email, avatar, role) => {
          setAuthModalOpen(false);
          onLoginSuccess?.(name, email, avatar, role);
        }}
      />

      <AdvisorModal
        isOpen={advisorModalOpen}
        onClose={() => setAdvisorModalOpen(false)}
      />

      <CurriculumModal
        isOpen={curriculumModalOpen}
        onClose={() => setCurriculumModalOpen(false)}
        onEnroll={() => {
          setCurriculumModalOpen(false);
          setAuthModalOpen(true);
        }}
      />

      <VideoCinemaModal
        isOpen={videoCinemaOpen}
        onClose={() => setVideoCinemaOpen(false)}
      />

    </div>
  );
};
