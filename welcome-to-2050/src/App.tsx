import React, { useState, useEffect } from 'react';
import { FutureAiHome } from './components/futureai/FutureAiHome';
import { LearnerDashboard } from './components/futureai/LearnerDashboard';
import { AtsResumeChecker } from './components/futureai/AtsResumeChecker';
import { SuccessPlanModal } from './components/futureai/SuccessPlanModal';
import { AdvisorModal } from './components/futureai/AdvisorModal';
import { AdminHrSettingsModal } from './components/admin/AdminHrSettingsModal';
import { AdminLeadManagerModal } from './components/futureai/AdminLeadManagerModal';
import { recordReferralClick } from './services/realAuthService';
import { StorageService } from './services/storage';
import { ThemeAccentProvider } from './context/ThemeAccentContext';
import { MobileAppInstallPrompt } from './components/futureai/mobile/MobileAppInstallPrompt';
import { AdminControlCenter } from './components/admin/controlcenter/AdminControlCenter';
import { ContactUsView } from './components/legal/ContactUsView';
import { TermsAndConditionsView } from './components/legal/TermsAndConditionsView';
import { PrivacyPolicyView } from './components/legal/PrivacyPolicyView';
import { RefundPolicyView } from './components/legal/RefundPolicyView';
import { AboutUsView } from './components/legal/AboutUsView';
import { PaymentResultModal } from './components/futureai/PaymentResultModal';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { findExistingUser, recordUserInDatabase } from './services/realAuthService';
import { restoreUserEntitlementsFromCloud } from './services/cloudSyncService';

export const App: React.FC = () => {
  const profile = StorageService.getProfile();
  const [payModalOpen, setPayModalOpen] = useState(false);

  // Check referral code in URL immediately on page load and on navigation
  const captureReferralAttribution = () => {
    if (typeof window === 'undefined') return;
    try {
      const searchParams = new URLSearchParams(window.location.search);
      let refCode = searchParams.get('ref') || searchParams.get('refCode') || searchParams.get('referredBy');
      if (!refCode && window.location.hash.includes('?')) {
        const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
        refCode = hashParams.get('ref') || hashParams.get('refCode') || hashParams.get('referredBy');
      }
      if (refCode) {
        const clean = refCode.trim();
        localStorage.setItem('futureai_ref_attribution', clean);
        sessionStorage.setItem('futureai_ref_attribution', clean);
        recordReferralClick(clean);
      }
    } catch {}
  };

  useEffect(() => {
    captureReferralAttribution();
    try {
      restoreUserEntitlementsFromCloud();
    } catch {}
    window.addEventListener('hashchange', captureReferralAttribution);
    return () => window.removeEventListener('hashchange', captureReferralAttribution);
  }, []);

  // Permanent Firebase Session Sync (IndexedDB Auto-Recovery)
  // Ensures Google session persists permanently and never logs user out after 30 mins
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const storedName = localStorage.getItem('futureai_user_name');
        const fallbackName = user.displayName || user.email?.split('@')[0] || 'Learner';
        const finalName = (storedName && storedName !== 'Learner') ? storedName : fallbackName;
        
        setUserName(finalName);
        setIsLoggedIn(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem('futureai_logged_in', 'true');
          localStorage.setItem('futureai_user_name', finalName);
          if (user.email) localStorage.setItem('futureai_user_email', user.email);
          if (user.photoURL) localStorage.setItem('futureai_user_avatar', user.photoURL);
        }
        try {
          restoreUserEntitlementsFromCloud({ email: user.email || undefined, uid: user.uid });
        } catch {}
      }
    });

    return () => unsubscribe();
  }, []);

  // Initialize login state strictly from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
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
      return baseH === '#hr-settings';
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

  const checkIsMobileDevice = (): boolean => {
    if (typeof window === 'undefined') return false;
    const searchParams = new URLSearchParams(window.location.search);
    if (
      searchParams.get('mobile') === 'true' ||
      searchParams.get('mode') === 'mobile' ||
      window.location.hash.includes('mobile=true') ||
      window.location.hash.includes('mode=mobile')
    ) {
      return true;
    }
    if (window.innerWidth < 768) return true;
    if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) return true;
    if (typeof navigator !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
    return false;
  };

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return checkIsMobileDevice();
  });

  // Track viewport resize & screen orientation
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobileDevice());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // On mobile devices, ensure default route is #dashboard only if logged in or navigating to course
  useEffect(() => {
    if (checkIsMobileDevice()) {
      setIsMobile(true);
      const baseH = window.location.hash.split('?')[0];
      if (!baseH || baseH === '#home' || baseH === '') {
        const isAuth = localStorage.getItem('futureai_logged_in') === 'true';
        if (isAuth) {
          window.location.hash = '#dashboard';
        }
      }
    }
  }, []);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash;
      const baseH = h.split('?')[0];
      setCurrentHash(h);
      if (baseH === '#hr-settings') {
        setAdminModalOpen(true);
      }
      if (baseH === '#admin-leads' || baseH === '#leads') {
        setAdminLeadsModalOpen(true);
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
      try {
        restoreUserEntitlementsFromCloud({ email: email || undefined });
      } catch {}
      if (role === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (e) {
      console.warn('Firebase signout error:', e);
    }
    setIsLoggedIn(false);
    setUserName('Learner');
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
  };

  return (
    <ThemeAccentProvider>
      <div className="w-full min-h-screen bg-[#FAFCFE] font-sans antialiased relative">
        
        {/* Dedicated Secure Admin Control Center Route */}
        {['#admin', '#admin-portal', '#control-center', '#admin-panel'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <AdminControlCenter
            onClose={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : ['#contact-us', '#contactus', '#contact'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#ContactUs' ? (
          <ContactUsView
            onBack={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : ['#terms', '#terms-and-conditions', '#termsandconditions', '#terms-conditions'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#TermsAndConditions' ? (
          <TermsAndConditionsView
            onBack={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : ['#privacy', '#privacy-policy', '#privacypolicy'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <PrivacyPolicyView
            onBack={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : ['#refund', '#refund-policy', '#refundpolicy', '#cancellation', '#cancellation-policy'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <RefundPolicyView
            onBack={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : ['#about', '#about-us', '#aboutus', '#company'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#AboutUs' ? (
          <AboutUsView
            onBack={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
            }}
          />
        ) : currentHash.split('?')[0] === '#ats-resume-checker' || currentHash.split('?')[0] === '#ats' ? (
          <AtsResumeChecker
            onBackToHome={() => {
              window.location.hash = isMobile ? '#dashboard' : '#home';
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
        ) : (() => {
            const baseH = (typeof window !== 'undefined' ? window.location.hash : currentHash).split('?')[0].toLowerCase();
            const directPublicRoutes = [
              '#practice', '#codingpractice', '#coding-practice',
              '#python-challenges', '#pythonchallenges',
              '#sql-challenges', '#sqlchallenges',
              '#excel-challenges', '#excelchallenges',
              '#game', '#games', '#arena', '#gamezone', '#coding_game',
              '#data-analyst', '#data-analytics', '#data-science', '#data-science-agentic-ai', '#datascience',
              '#ml-engineering', '#mlengineering', '#ml-eng', '#ml',
              '#ai-engineering', '#aiengineering', '#ai-eng', '#ai',
              '#full-stack', '#fullstack', '#fullstack-mern',
              '#intro-game', '#pyintro', '#earnings', '#wallet', '#withdraw',
              '#placement', '#income', '#referral'
            ];
            // If logged in, show LearnerDashboard (unless user specifically visits pre-login #home)
            if (isLoggedIn) {
              return baseH !== '#home' && baseH !== '#welcome';
            }
            // Pre-login: only show LearnerDashboard if directly accessing public challenge routes; otherwise show new pre-login FutureAiHome
            return directPublicRoutes.includes(baseH);
          })() ? (
          <LearnerDashboard
            userName={userName}
            onLogout={handleLogout}
            onOpenAdvisor={() => setAdvisorModalOpen(true)}
            onLoginSuccess={handleLogin}
          />
        ) : (
          <FutureAiHome
            profile={profile}
            theme="light"
            isLoggedIn={isLoggedIn}
            userName={userName}
            onLoginSuccess={handleLogin}
            onLogout={handleLogout}
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

        {/* Global Course Enrollment Modal (₹9) */}
        <SuccessPlanModal
          isOpen={payModalOpen}
          onClose={() => setPayModalOpen(false)}
          courseId="data_analyst"
          courseTitle="Data Analyst with GenAI"
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

        {/* Razorpay Payment Result Handler — detects #payment-success / #payment-failure in URL */}
        <PaymentResultModal
          onGoHome={() => {
            window.location.hash = isLoggedIn ? '#dashboard' : '#home';
          }}
        />

        {/* Global PWA Android App Installation Banner / Modal for Mobile (< 768px) */}
        <MobileAppInstallPrompt />

      </div>
    </ThemeAccentProvider>
  );
};

export default App;
