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
import { getLearnerTelemetry } from '../../services/realAuthService';
import { MobileTopBar } from './mobile/MobileTopBar';
import { MobileDashboardHome } from './mobile/MobileDashboardHome';
import { MobileBottomNav, MobileTab } from './mobile/MobileBottomNav';
import { MobileProfileSheet } from './mobile/MobileProfileSheet';

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
  onLogout?: () => void;
}

export const FutureAiHome: React.FC<FutureAiHomeProps> = ({
  profile,
  theme = 'light',
  onToggleTheme,
  onStartLearning,
  isLoggedIn = false,
  userName = 'Learner',
  onLoginSuccess,
  onOpenDashboard,
  onLogout,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [videoCinemaOpen, setVideoCinemaOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>('home');
  const telemetry = getLearnerTelemetry();

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
      
      {/* ── Native Mobile App View (< 768px): 1:1 Matching media_1792344763535_976d431b.png ── */}
      <div className="md:hidden min-h-screen bg-[#F8FAFC]">
        <MobileTopBar
          userName={userName}
          telemetry={telemetry}
          onOpenProfile={() => setMobileProfileOpen(true)}
          onOpenNotifications={() => {
            alert('🔔 Welcome to FUTURE IT INDUSTRY Android App Portal! Complete lessons to earn gems.');
          }}
          onOpenLogin={() => setAuthModalOpen(true)}
        />

        <MobileDashboardHome
          userName={userName}
          telemetry={telemetry}
          onStartPython={() => {
            if (typeof window !== 'undefined') window.location.hash = '#python';
          }}
          onOpenSql={() => {
            if (typeof window !== 'undefined') window.location.hash = '#sql';
          }}
          onOpenExcel={() => {
            if (typeof window !== 'undefined') window.location.hash = '#excel';
          }}
          onOpenPowerBi={() => {
            if (typeof window !== 'undefined') window.location.hash = '#powerbi';
          }}
          onOpenGenAi={() => {
            if (typeof window !== 'undefined') window.location.hash = '#genai';
          }}
          onOpenPlacement={() => {
            if (typeof window !== 'undefined') window.location.hash = '#placement';
          }}
          onOpenArena={() => {
            if (typeof window !== 'undefined') window.location.hash = '#game';
          }}
          onOpenEarn={() => {
            if (typeof window !== 'undefined') window.location.hash = '#earnings';
          }}
          onOpenAdvisor={() => setAdvisorModalOpen(true)}
          onOpenLockedModule={(moduleName) => {
            setAuthModalOpen(true);
          }}
        />

        <MobileBottomNav
          currentTab={mobileTab}
          onSelectTab={(tab) => {
            setMobileTab(tab);
            if (tab === 'home') {
              if (typeof window !== 'undefined') window.location.hash = '#dashboard';
            } else if (tab === 'learn') {
              if (typeof window !== 'undefined') window.location.hash = '#python';
            } else if (tab === 'game') {
              if (typeof window !== 'undefined') window.location.hash = '#game';
            } else if (tab === 'earn') {
              if (typeof window !== 'undefined') window.location.hash = '#earnings';
            } else if (tab === 'placement') {
              if (typeof window !== 'undefined') window.location.hash = '#placement';
            }
          }}
          unreadEarnBadge={true}
        />

        <MobileProfileSheet
          isOpen={mobileProfileOpen}
          onClose={() => setMobileProfileOpen(false)}
          userName={userName}
          telemetry={telemetry}
          onLogout={onLogout ? onLogout : () => {
            if (typeof window !== 'undefined') {
              localStorage.removeItem('futureai_logged_in');
              localStorage.removeItem('futureai_user_name');
              localStorage.removeItem('futureai_user_email');
              localStorage.removeItem('futureai_user_avatar');
              localStorage.removeItem('futureai_user_role');
              localStorage.removeItem('futureai_user_wallet');
              localStorage.removeItem('futureai_user_coins');
              localStorage.removeItem('futureai_user_gems');
              window.location.hash = '#home';
              window.location.reload();
            }
          }}
          onOpenEarn={() => {
            if (typeof window !== 'undefined') window.location.hash = '#earnings';
          }}
          onOpenLogin={() => setAuthModalOpen(true)}
        />
      </div>

      {/* ── Desktop Marketing Portal (>= 768px) ── */}
      <div className="hidden md:block">
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
      </div>

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
