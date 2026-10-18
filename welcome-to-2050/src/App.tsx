import React, { useState, useEffect } from 'react';
import { FutureAiHome } from './components/futureai/FutureAiHome';
import { LearnerDashboard } from './components/futureai/LearnerDashboard';
import { AtsResumeChecker } from './components/futureai/AtsResumeChecker';
import { PayToUnlockModal } from './components/futureai/PayToUnlockModal';
import { AdvisorModal } from './components/futureai/AdvisorModal';
import { AdminHrSettingsModal } from './components/admin/AdminHrSettingsModal';
import { AdminLeadManagerModal } from './components/futureai/AdminLeadManagerModal';
import { recordReferralClick } from './services/realAuthService';
import { StorageService } from './services/storage';
import { ThemeAccentProvider } from './context/ThemeAccentContext';
import { MobileAppInstallPrompt } from './components/futureai/mobile/MobileAppInstallPrompt';

export const App: React.FC = () => {
  const profile = StorageService.getProfile();
  const [payModalOpen, setPayModalOpen] = useState(false);

  // Check referral code in URL immediately on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      let refCode = searchParams.get('ref');
      if (!refCode && window.location.hash.includes('?')) {
        const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
        refCode = hashParams.get('ref');
      }
      if (refCode) {
        localStorage.setItem('futureai_ref_attribution', refCode.trim());
        recordReferralClick(refCode.trim());
      }
    }
  }, []);

  // Initialize login state from URL hash, search params, or localStorage
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const baseH = window.location.hash.split('?')[0];
      if (urlParams.get('view') === 'dashboard' || baseH === '#data-analyst' || baseH === '#data-analytics' || baseH === '#courses' || baseH === '#sql' || baseH === '#excel' || baseH === '#powerbi' || baseH === '#stats' || baseH === '#genai' || baseH === '#intro-game' || baseH === '#intro-games' || baseH === '#pyintro' || baseH === '#dashboard' || baseH === '#income' || baseH === '#earnings' || baseH === '#wallet' || baseH === '#withdraw' || baseH === '#referral' || baseH === '#myearnings' || baseH === '#python' || baseH === '#practice' || baseH === '#mcq' || baseH === '#game' || baseH === '#codequest' || baseH === '#workspace' || baseH === '#code' || baseH === '#codepractice' || baseH === '#interview' || baseH === '#mockinterview' || baseH === '#score' || baseH === '#scorecard' || baseH === '#learn' || baseH === '#video') {
        return true;
      }
      return localStorage.getItem('futureai_logged_in') === 'true';
    }
    return false;
  });

  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('futureai_user_name') || 'Learner';
    }
    return 'Learner';
  });

  const [advisorModalOpen, setAdvisorModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const baseH = window.location.hash.split('?')[0];
      return baseH === '#admin' || baseH === '#hr-settings';
    }
    return false;
  });
  const [adminLeadsModalOpen, setAdminLeadsModalOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const baseH = window.location.hash.split('?')[0];
      return baseH === '#admin-leads' || baseH === '#leads';
    }
    return false;
  });
  const [currentHash, setCurrentHash] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.hash : '';
  });

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      setCurrentHash(h);
      if (baseH === '#admin' || baseH === '#hr-settings') {
        setAdminModalOpen(true);
      }
      if (baseH === '#admin-leads' || baseH === '#leads') {
        setAdminLeadsModalOpen(true);
      }
      if (baseH === '#data-analyst' || baseH === '#data-analytics' || baseH === '#courses' || baseH === '#sql' || baseH === '#excel' || baseH === '#powerbi' || baseH === '#stats' || baseH === '#genai' || baseH === '#intro-game' || baseH === '#intro-games' || baseH === '#pyintro' || baseH === '#dashboard' || baseH === '#income' || baseH === '#earnings' || baseH === '#wallet' || baseH === '#withdraw' || baseH === '#referral' || baseH === '#myearnings' || baseH === '#python' || baseH === '#practice' || baseH === '#mcq' || baseH === '#game' || baseH === '#codequest' || baseH === '#workspace' || baseH === '#code' || baseH === '#codepractice' || baseH === '#interview' || baseH === '#mockinterview' || baseH === '#score' || baseH === '#scorecard' || baseH === '#learn' || baseH === '#video') {
        setIsLoggedIn(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLogin = (name: string, email?: string, avatar?: string, role?: 'student' | 'influencer') => {
    const finalName = name && name.trim().length > 0 ? name.trim() : 'Learner';
    setUserName(finalName);
    setIsLoggedIn(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_user_name', finalName);
      if (email) localStorage.setItem('futureai_user_email', email);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      if (role) localStorage.setItem('futureai_user_role', role);
      localStorage.setItem('futureai_logged_in', 'true');
      if (role === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('futureai_logged_in');
      window.location.hash = '#home';
    }
  };

  return (
    <ThemeAccentProvider>
      <div className="w-full min-h-screen bg-[#FAFCFE] font-sans antialiased relative">
        
        {/* ATS Resume Checker Dedicated Page Route */}
        {currentHash.split('?')[0] === '#ats-resume-checker' || currentHash.split('?')[0] === '#ats' ? (
          <AtsResumeChecker
            onBackToHome={() => {
              window.location.hash = '#home';
            }}
            onOpenLogin={(candidateName?: string) => {
              const nameToUse = candidateName || userName || 'Learner';
              setUserName(nameToUse);
              setIsLoggedIn(true);
              if (typeof window !== 'undefined') {
                localStorage.setItem('futureai_user_name', nameToUse);
                localStorage.setItem('futureai_logged_in', 'true');
              }
            }}
            onEnrollNow={() => {
              setPayModalOpen(true);
            }}
            isLoggedIn={isLoggedIn}
            userName={userName}
          />
        ) : isLoggedIn ? (
          <LearnerDashboard
            userName={userName}
            onLogout={handleLogout}
            onOpenAdvisor={() => setAdvisorModalOpen(true)}
          />
        ) : (
          <FutureAiHome
            profile={profile}
            theme="light"
            isLoggedIn={isLoggedIn}
            userName={userName}
            onLoginSuccess={handleLogin}
            onOpenDashboard={() => {
              setIsLoggedIn(true);
              window.location.hash = '#dashboard';
            }}
          />
        )}

        {/* Global AI Mentor / Advisor Modal accessible from anywhere */}
        <AdvisorModal
          isOpen={advisorModalOpen}
          onClose={() => setAdvisorModalOpen(false)}
        />

        {/* Global Course Enrollment Modal (₹999) */}
        <PayToUnlockModal
          isOpen={payModalOpen}
          onClose={() => setPayModalOpen(false)}
          targetModuleName="Data Analytics with GenAI Flagship Course"
          onSimulateUnlock={() => {
            setPayModalOpen(false);
            handleLogin(userName);
          }}
        />

        {/* Admin HR Settings Console Modal */}
        <AdminHrSettingsModal
          isOpen={adminModalOpen}
          onClose={() => {
            setAdminModalOpen(false);
            if (typeof window !== 'undefined' && (window.location.hash.includes('#admin') || window.location.hash.includes('#hr-settings'))) {
              window.location.hash = '#dashboard';
            }
          }}
        />

        {/* Admin Student Leads & Emails Exporter Modal */}
        <AdminLeadManagerModal
          isOpen={adminLeadsModalOpen}
          onClose={() => {
            setAdminLeadsModalOpen(false);
            if (typeof window !== 'undefined' && (window.location.hash.includes('#admin-leads') || window.location.hash.includes('#leads'))) {
              window.location.hash = isLoggedIn ? '#dashboard' : '#home';
            }
          }}
        />

        {/* Global PWA Android App Installation Banner / Modal for Mobile (< 768px) */}
        <MobileAppInstallPrompt />

      </div>
    </ThemeAccentProvider>
  );
};

export default App;
