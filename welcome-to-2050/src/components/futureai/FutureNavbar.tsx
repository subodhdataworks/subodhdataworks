import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight, X, Menu } from 'lucide-react';
import { FutureLogo } from './FutureLogo';
import { SupportedLanguage } from '../../services/powerGreenAIService';
import { useThemeAccent } from '../../context/ThemeAccentContext';

interface FutureNavbarProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  onOpenLogin: () => void;
  onGetStarted: () => void;
  onOpenVoice: () => void;
  onNavigateSection: (sectionId: string) => void;
  onTalkToAdvisor?: () => void;
  onExploreCurriculum?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
  onOpenDashboard?: () => void;
}

export const FutureNavbar: React.FC<FutureNavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  onOpenLogin,
  onGetStarted,
  onNavigateSection,
  onTalkToAdvisor,
  onExploreCurriculum,
  isLoggedIn = false,
  userName = 'Subodh Kumar',
  onOpenDashboard,
}) => {
  const { accentConfig, playHover, playClick } = useThemeAccent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavItem {
    name: string;
    id: string;
    dropdown: Array<{ label: string; id: string; tag?: string }> | null;
  }

  const navItems: NavItem[] = [
    { name: 'Home', id: 'hero', dropdown: null },
    { name: 'Courses', id: 'pay-after-placement', dropdown: null },
    { name: 'Training', id: 'real-projects', dropdown: null },
    { name: 'ATS Resume Checker', id: 'ats-resume-checker', dropdown: null },
    { name: 'Career', id: 'placement-support', dropdown: null },
    { name: 'Success Stories', id: 'real-success', dropdown: null },
  ];

  const searchableItems = [
    { title: 'Data Analyst with GenAI Program', tag: 'Flagship Track', section: 'program-highlights' },
    { title: 'Pay After Placement - Zero Upfront Fees', tag: 'Placement', section: 'pay-after-placement' },
    { title: 'Python Data Analysis & Automation', tag: 'Curriculum', section: 'program-highlights' },
    { title: 'SQL for Data Insights', tag: 'Curriculum', section: 'program-highlights' },
    { title: 'Customer Churn Prediction Project', tag: 'Real Project', section: 'real-projects' },
    { title: 'Success Stories & Reviews (Accenture, Deloitte, TCS)', tag: 'Alumni', section: 'real-success' },
  ];

  const filteredItems = searchableItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs'
            : 'py-4 bg-white/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Exact Brand Logo matching Reference */}
          <div
            onClick={() => onNavigateSection('hero')}
            className="cursor-pointer hover:opacity-95 transition-opacity"
          >
            <FutureLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    onNavigateSection(item.id);
                    setActiveDropdown(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                    item.name === 'Home'
                      ? 'text-sky-600 font-bold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-transform" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-60 p-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.label}
                        onClick={() => {
                          onNavigateSection(subItem.id);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 rounded-xl text-xs hover:bg-sky-50 transition-colors flex items-center justify-between group"
                      >
                        <span className="font-semibold text-slate-700 group-hover:text-sky-600">
                          {subItem.label}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-mono">
                          {subItem.tag}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions: Search, Login Pill, Vibrant Gradient 'Get Started ->' Pill */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={() => {
                playClick();
                setSearchOpen(true);
              }}
              onMouseEnter={playHover}
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Search FUTURE IT INDUSTRY"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Login or Dashboard Pill Button (Desktop & Tablet) */}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  playClick();
                  onOpenDashboard?.();
                }}
                onMouseEnter={playHover}
                className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold text-sky-950 bg-sky-50 hover:bg-sky-100 border border-sky-300 shadow-2xs transition-all cursor-pointer"
                title="Go to Learner Dashboard"
              >
                <img 
                  src="/images/avatar-subodh-kumar.jpg" 
                  alt={userName} 
                  className="w-5 h-5 rounded-full object-cover border border-sky-400"
                />
                <span className="font-bold">{userName}</span>
                <span className="text-[10px] font-bold text-sky-600 bg-white px-1.5 py-0.5 rounded-full border border-sky-200">Dashboard ➔</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  playClick();
                  onOpenLogin();
                }}
                onMouseEnter={playHover}
                className="hidden sm:inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
              >
                Login
              </button>
            )}

            {/* Dynamic Accent Gradient Pill Button: Scaled for mobile */}
            <button
              onClick={() => {
                playClick();
                onGetStarted();
              }}
              onMouseEnter={playHover}
              className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r ${accentConfig.btnGradient} ${accentConfig.btnHoverGradient} shadow-md ${accentConfig.shadowClass} hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer`}
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              onMouseEnter={playHover}
              className="lg:hidden p-1.5 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer: Native App Feel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200/90 px-4 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigateSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-sky-50/70 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 -rotate-90" />
                </button>
              ))}
            </div>

            {/* Mobile Actions: Login + Talk to Advisor + Language Toggle */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    playClick();
                    onOpenDashboard?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-sky-950 bg-sky-100 hover:bg-sky-200 transition-colors flex items-center justify-center gap-2"
                >
                  <img src="/images/avatar-subodh-kumar.jpg" alt={userName} className="w-5 h-5 rounded-full object-cover" />
                  <span>Go to Learner Dashboard ➔</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    playClick();
                    onOpenLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  Learner Login
                </button>
              )}

              <button
                onClick={() => {
                  playClick();
                  onTalkToAdvisor?.();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-teal-500 shadow-md transition-colors"
              >
                Talk to Career Advisor
              </button>

              <div className="flex items-center justify-between px-2 pt-2">
                <span className="text-xs font-semibold text-slate-500">Language / भाषा:</span>
                <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200">
                  <button
                    onClick={() => onLanguageChange('en')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      currentLanguage === 'en'
                        ? 'bg-white text-sky-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => onLanguageChange('hi')}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                      currentLanguage === 'hi'
                        ? 'bg-white text-sky-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-sky-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, tools, projects, placement..."
                className="flex-1 bg-transparent text-sm focus:outline-none text-slate-800 placeholder-slate-400 font-semibold"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onNavigateSection(item.section);
                      setSearchOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-sky-600">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-slate-400">
                  No matching results found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
