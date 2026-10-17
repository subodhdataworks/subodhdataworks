import React, { useState } from 'react';
import { TabType } from './types';
import { currentUser } from './data/user';
import { DeviceFrame } from './components/layout/DeviceFrame';
import { HomeView } from './components/views/HomeView';
import { LearnView } from './components/views/LearnView';
import { PracticeView } from './components/views/PracticeView';
import { ProjectsView } from './components/views/ProjectsView';
import { InterviewView } from './components/views/InterviewView';
import { ProgressView } from './components/views/ProgressView';
import { ProfileView } from './components/views/ProfileView';
import { BottomNavigation } from './components/navigation/BottomNavigation';
import { SearchModal } from './components/header/SearchModal';
import { NotificationDrawer } from './components/header/NotificationDrawer';
import { AIChatDrawer } from './components/ai/AIChatDrawer';
import { LandingPage } from './components/landing/LandingPage';
import { LoginModal } from './components/auth/LoginModal';
import { PythonCourseView } from './components/views/PythonCourseView';
import { PythonLessonDetailView } from './components/views/PythonLessonDetailView';
import { PythonAssessmentView } from './components/course/PythonAssessmentView';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function App() {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [userProfile, setUserProfile] = useState({
    name: 'Subodh Kumar',
    phone: '+91 98765 43210'
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginInitialTopic, setLoginInitialTopic] = useState<string | null>(null);

  // Dashboard Navigation State
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [secondaryView, setSecondaryView] = useState<string | null>('python');
  const [selectedTopicId, setSelectedTopicId] = useState<number>(1);
  const [selectedAssessmentId, setSelectedAssessmentId] = useState<number>(8);
  const [viewMode, setViewMode] = useState<'fullscreen' | 'mobile'>('fullscreen');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [aiInitialPrompt, setAiInitialPrompt] = useState<string | undefined>(undefined);

  const handleOpenAiWithPrompt = (prompt?: string) => {
    setAiInitialPrompt(prompt);
    setIsAiChatOpen(true);
  };

  const handleOpenLogin = (topic?: string) => {
    setLoginInitialTopic(topic || null);
    setIsLoginModalOpen(true);
  };

  const handleLoginSuccess = (data: { name: string; phone: string }) => {
    setUserProfile(data);
    currentUser.name = data.name;
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTab = (tabName: string) => {
    if (tabName === 'home' || tabName === 'learn' || tabName === 'progress' || tabName === 'profile') {
      setActiveTab(tabName as TabType);
      setSecondaryView(null);
    } else if (tabName === 'ai') {
      setIsAiChatOpen(true);
    } else {
      setSecondaryView(tabName);
    }
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setSecondaryView(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    if (secondaryView === 'python-topic' || secondaryView === 'python-intro') {
      return (
        <PythonLessonDetailView
          topicId={selectedTopicId}
          onSelectTopic={(topicId) => {
            setSelectedTopicId(topicId);
            setSecondaryView('python-topic');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenAssessment={(assessmentId) => {
            setSelectedAssessmentId(assessmentId);
            setSecondaryView('python-assessment');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onBackToCourse={() => {
            setSecondaryView('python');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateHome={() => {
            setSecondaryView(null);
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateTab={(tab) => {
            handleNavigateToTab(tab);
          }}
          onOpenAiChat={handleOpenAiWithPrompt}
          userName={userProfile.name}
        />
      );
    }
    if (secondaryView === 'python-assessment') {
      return (
        <PythonAssessmentView
          assessmentId={selectedAssessmentId}
          onBackToCourse={() => {
            setSecondaryView('python');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateHome={() => {
            setSecondaryView(null);
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          userName={userProfile.name}
        />
      );
    }
    if (secondaryView === 'python') {
      return (
        <PythonCourseView
          onNavigateHome={() => {
            setSecondaryView(null);
            setActiveTab('home');
          }}
          onNavigateTab={(tab) => {
            handleNavigateToTab(tab);
          }}
          onOpenLessonDetail={(topicId) => {
            setSelectedTopicId(topicId);
            setSecondaryView('python-topic');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenAssessment={(assessmentId) => {
            setSelectedAssessmentId(assessmentId);
            setSecondaryView('python-assessment');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenAiChat={handleOpenAiWithPrompt}
          userName={userProfile.name}
        />
      );
    }
    if (secondaryView === 'practice') {
      return <PracticeView />;
    }
    if (secondaryView === 'projects') {
      return <ProjectsView />;
    }
    if (secondaryView === 'interview') {
      return <InterviewView />;
    }

    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenNotifications={() => setIsNotificationsOpen(true)}
            onOpenAiChat={() => {
              setAiInitialPrompt(undefined);
              setIsAiChatOpen(true);
            }}
            onSelectPromptChip={handleOpenAiWithPrompt}
            onNavigateToTab={handleNavigateToTab}
            onContinueLearning={() => setActiveTab('learn')}
          />
        );
      case 'learn':
        return <LearnView onSelectCourse={(id) => handleNavigateToTab(id)} />;
      case 'progress':
        return <ProgressView />;
      case 'profile':
        return <ProfileView onUpgradeClick={() => {}} />;
      default:
        return (
          <HomeView
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenNotifications={() => setIsNotificationsOpen(true)}
            onOpenAiChat={() => {
              setAiInitialPrompt(undefined);
              setIsAiChatOpen(true);
            }}
            onSelectPromptChip={handleOpenAiWithPrompt}
            onNavigateToTab={handleNavigateToTab}
            onContinueLearning={() => setActiveTab('learn')}
          />
        );
    }
  };

  // =========================================================================
  // SCENARIO 1: PRE-LOGIN PUBLIC LANDING PAGE (Default user experience)
  // =========================================================================
  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen">
        <LandingPage
          onOpenLogin={handleOpenLogin}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onSelectSkill={(skill) => {
            if (skill.toLowerCase() === 'python') {
              setIsLoggedIn(true);
              setSecondaryView('python');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              handleOpenLogin(skill);
            }
          }}
        />

        {/* Global Overlays for Pre-Login */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSuccess={handleLoginSuccess}
          initialTopic={loginInitialTopic}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectTopic={(topic) => {
            setIsSearchOpen(false);
            handleOpenLogin(topic);
          }}
        />

        <NotificationDrawer
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
        />
      </div>
    );
  }

  // =========================================================================
  // SCENARIO 2: LOGGED-IN INTERACTIVE DASHBOARD
  // =========================================================================
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Top Session Switcher Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">
            Logged in as {userProfile.name}
          </span>
          <span className="text-slate-400 hidden sm:inline">• Free Starter Active</span>
        </div>

        <button
          onClick={handleLogout}
          className="text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Landing Page</span>
        </button>
      </div>

      <DeviceFrame
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenAiChat={() => {
          setAiInitialPrompt(undefined);
          setIsAiChatOpen(true);
        }}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        userName={userProfile.name}
        onLogout={handleLogout}
      >
        {/* Current Main View */}
        {renderCurrentView()}

        {/* Fixed Bottom Navigation on mobile view */}
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={handleTabChange}
          onOpenAiChat={() => {
            setAiInitialPrompt(undefined);
            setIsAiChatOpen(true);
          }}
        />

        {/* Global Interactive Overlays */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectTopic={(topic) => handleOpenAiWithPrompt(`Tell me more about ${topic}`)}
        />

        <NotificationDrawer
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
        />

        <AIChatDrawer
          isOpen={isAiChatOpen}
          onClose={() => setIsAiChatOpen(false)}
          initialPrompt={aiInitialPrompt}
        />
      </DeviceFrame>
    </div>
  );
}

export default App;
