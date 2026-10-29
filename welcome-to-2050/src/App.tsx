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
import { AdminControlCenter } from './components/admin/controlcenter/AdminControlCenter';
import { ContactUsView } from './components/legal/ContactUsView';
import { TermsAndConditionsView } from './components/legal/TermsAndConditionsView';
import { PrivacyPolicyView } from './components/legal/PrivacyPolicyView';
import { RefundPolicyView } from './components/legal/RefundPolicyView';
import { AboutUsView } from './components/legal/AboutUsView';
import { PaymentResultModal } from './components/futureai/PaymentResultModal';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { findExistingUser, recordUserInDatabase, runAffiliateSystemResetMigrationOnce, runFreshCloudStartResetMigrationOnce } from './services/realAuthService';
import { restoreUserEntitlementsFromCloud } from './services/cloudSyncService';
import { clearActiveCourseSessionCacheOnLogout } from './services/courseUnlockService';
import { SessionService } from './services/sessionService';

export const App: React.FC = () => {
  // ─── CONTROLLED VERSIONED ONE-TIME AFFILIATE SYSTEM v5 RESET MIGRATION ───
  // Resets only affiliate metrics, affiliate wallets, payout history, and bank/UPI links once.
  // Preserves user login accounts, authentication sessions, and course enrollment records.
  runAffiliateSystemResetMigrationOnce();
  runFreshCloudStartResetMigrationOnce();

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
        const clean = refCode.trim().toUpperCase();
        const existing = localStorage.getItem('futureai_ref_attribution');
        if (!existing) {
          localStorage.setItem('futureai_ref_attribution', clean);
          sessionStorage.setItem('futureai_ref_attribution', clean);
          recordReferralClick(clean);
        }
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
        if (typeof window !== 'undefined' && sessionStorage.getItem('futureai_logging_out') === 'true') {
          sessionStorage.removeItem('futureai_logging_out');
          try { await auth.signOut(); } catch {}
          setIsLoggedIn(false);
          setUserName('');
          return;
        }

        // Multi-device login enabled: session initialized non-blocking
        SessionService.createOrValidateSession(user.uid).catch(() => {});

        const storedName = localStorage.getItem('futureai_user_name');
        const fallbackName = user.displayName || user.email?.split('@')[0] || '';
        const finalName = (storedName && storedName !== 'Learner' && storedName !== 'Rahul' && storedName !== 'Student') ? storedName : fallbackName;
        
        setUserName(finalName);
        setIsLoggedIn(true);

        if (typeof window !== 'undefined') {
          localStorage.setItem('futureai_logged_in', 'true');
          localStorage.setItem('futureai_user_name', finalName);
          localStorage.setItem('futureai_user_uid', user.uid);
          if (user.email) localStorage.setItem('futureai_user_email', user.email);
          if (user.photoURL) localStorage.setItem('futureai_user_avatar', user.photoURL);
        }
        try {
          restoreUserEntitlementsFromCloud({ email: user.email || undefined, uid: user.uid });
        } catch {}
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Validate existing authentication sessions correctly:
  // Must have 'futureai_logged_in' === 'true' AND at least one real user identifier
  const checkIsAuthenticated = (): boolean => {
    if (typeof window === 'undefined') return false;
    const isLoggedFlag = localStorage.getItem('futureai_logged_in') === 'true';
    if (!isLoggedFlag) return false;
    const email = localStorage.getItem('futureai_user_email');
    const phone = localStorage.getItem('futureai_user_phone');
    const uid = localStorage.getItem('futureai_user_uid');
    const name = localStorage.getItem('futureai_user_name');

    // Check if there is valid student credential / identifier
    const hasIdentifier = !!(email || phone || uid || (name && name !== 'Learner' && name !== 'Rahul' && name !== 'Student'));
    if (!hasIdentifier) {
      // Stale fake or unverified session — clean it up so unauthenticated visitors never get treated as logged in!
      localStorage.removeItem('futureai_logged_in');
      localStorage.removeItem('futureai_user_name');
      return false;
    }
    return true;
  };

  // Initialize login state strictly using authentication check
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return checkIsAuthenticated();
  });

  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('futureai_user_name');
      if (stored && stored !== 'Learner' && stored !== 'Rahul' && stored !== 'Student') {
        return stored;
      }
    }
    return '';
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
    const finalName = name && name.trim().length > 0 && name !== 'Learner' && name !== 'Student' ? name.trim() : '';
    if (finalName) setUserName(finalName);
    setIsLoggedIn(true);
    if (typeof window !== 'undefined') {
      if (finalName) localStorage.setItem('futureai_user_name', finalName);
      if (email) localStorage.setItem('futureai_user_email', email);
      if (avatar) localStorage.setItem('futureai_user_avatar', avatar);
      if (role) localStorage.setItem('futureai_user_role', role);
      localStorage.setItem('futureai_logged_in', 'true');
      try {
        restoreUserEntitlementsFromCloud({ email: email || undefined });
      } catch {}

      // Automatic redirection to the originally requested destination
      const targetHash = sessionStorage.getItem('futureai_auth_redirect') || localStorage.getItem('futureai_auth_redirect');
      if (targetHash && targetHash !== '#home' && targetHash !== '#welcome') {
        sessionStorage.removeItem('futureai_auth_redirect');
        localStorage.removeItem('futureai_auth_redirect');
        window.location.hash = targetHash;
      } else if (role === 'influencer') {
        window.location.hash = '#income';
      } else {
        window.location.hash = '#dashboard';
      }
    }
  };

  const handleLogout = async () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('futureai_logging_out', 'true');
    }
    const currentUid = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_uid') || '' : '';
    if (currentUid) {
      await SessionService.terminateSession(currentUid).catch(() => {});
    }
    try {
      await auth.signOut();
    } catch (e) {
      console.warn('Firebase signout error:', e);
    }
    setIsLoggedIn(false);
    setUserName('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('futureai_logged_in');
      localStorage.removeItem('futureai_user_name');
      localStorage.removeItem('futureai_user_email');
      localStorage.removeItem('futureai_user_phone');
      localStorage.removeItem('futureai_user_uid');
      localStorage.removeItem('futureai_user_avatar');
      localStorage.removeItem('futureai_user_role');
      localStorage.removeItem('futureai_user_wallet');
      localStorage.removeItem('futureai_user_coins');
      localStorage.removeItem('futureai_user_gems');
      localStorage.removeItem('futureai_payment_order_id');
      localStorage.removeItem('futureai_payment_txn_id');
      sessionStorage.removeItem('futureai_auth_redirect');
      localStorage.removeItem('futureai_auth_redirect');
      clearActiveCourseSessionCacheOnLogout();
      SessionService.clearSessionId();
      window.location.hash = '#home';
    }
  };

  return (
    <ThemeAccentProvider>
      <div className="w-full min-h-screen bg-[#FAFCFE] font-sans antialiased relative">
        
        {/* Dedicated Secure Admin Control Center Route */}
        {['#admin', '#admin-portal', '#control-center', '#admin-panel'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <AdminControlCenter
            onClose={() => {
              window.location.hash = '#home';
            }}
          />
        ) : ['#contact-us', '#contactus', '#contact'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#ContactUs' ? (
          <ContactUsView
            onBack={() => {
              window.location.hash = '#home';
            }}
          />
        ) : ['#terms', '#terms-and-conditions', '#termsandconditions', '#terms-conditions'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#TermsAndConditions' ? (
          <TermsAndConditionsView
            onBack={() => {
              window.location.hash = '#home';
            }}
          />
        ) : ['#privacy', '#privacy-policy', '#privacypolicy'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <PrivacyPolicyView
            onBack={() => {
              window.location.hash = '#home';
            }}
          />
        ) : ['#refund', '#refund-policy', '#refundpolicy', '#cancellation', '#cancellation-policy'].includes(currentHash.split('?')[0].toLowerCase()) ? (
          <RefundPolicyView
            onBack={() => {
              window.location.hash = '#home';
            }}
          />
        ) : ['#about', '#about-us', '#aboutus', '#company'].includes(currentHash.split('?')[0].toLowerCase()) || currentHash.split('?')[0] === '#AboutUs' ? (
          <AboutUsView
            onBack={() => {
              window.location.hash = '#home';
            }}
          />
        ) : currentHash.split('?')[0] === '#ats-resume-checker' || currentHash.split('?')[0] === '#ats' ? (
          <AtsResumeChecker
            onBackToHome={() => {
              window.location.hash = '#home';
            }}
            onOpenLogin={(candidateName?: string) => {
              const nameToUse = candidateName || userName;
              if (nameToUse) setUserName(nameToUse);
              setIsLoggedIn(true);
              if (typeof window !== 'undefined') {
                if (nameToUse) localStorage.setItem('futureai_user_name', nameToUse);
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
            // If logged in, show LearnerDashboard (unless user specifically visits pre-login #home or #welcome)
            if (isLoggedIn) {
              return baseH !== '#home' && baseH !== '#welcome';
            }
            // Pre-login: NEVER show LearnerDashboard! All protected routes require authentication.
            return false;
          })() ? (
          <LearnerDashboard
            userName={userName}
            isLoggedIn={isLoggedIn}
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
            initialAuthOpen={(() => {
              if (isLoggedIn) return false;
              const baseH = (typeof window !== 'undefined' ? window.location.hash : currentHash).split('?')[0].toLowerCase();
              const protectedRoutes = [
                '#practice', '#codingpractice', '#coding-practice',
                '#python-challenges', '#pythonchallenges',
                '#sql-challenges', '#sqlchallenges',
                '#excel-challenges', '#excelchallenges',
                '#game', '#games', '#arena', '#gamezone', '#coding_game',
                '#data-analyst', '#data-analytics', '#data-science', '#data-science-agentic-ai', '#datascience',
                '#ml-engineering', '#mlengineering', '#ml-eng', '#ml',
                '#ai-engineering', '#aiengineering', '#ai-eng', '#ai',
                '#full-stack', '#fullstack', '#fullstack-mern',
                '#intro-game', '#pyintro', '#earnings', '#wallet', '#withdraw', '#earn', '#earncash', '#earn-cash',
                '#placement', '#income', '#referral', '#dashboard',
                '#certificate', '#certificates', '#internship', '#internships',
                '#recommendation', '#recommendation-letter', '#interview', '#mockinterview'
              ];
              return protectedRoutes.includes(baseH);
            })()}
            initialAuthMessage="Please login to continue."
            initialAuthRedirect={typeof window !== 'undefined' ? window.location.hash : currentHash}
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

        
      </div>

      </ThemeAccentProvider>
  );
};

export default App;
