import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Search,
  Bell,
  Volume2,
  VolumeX,
  Bot,
  Copy,
  Check,
  QrCode,
  Download,
  Share2,
  Users,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink,
  Info,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  FileText,
  AlertCircle,
  Lock,
  Unlock,
  SlidersHorizontal,
  RefreshCw,
  X,
  CreditCard,
  Send,
  Building,
  Smartphone,
  Eye,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  Flame
} from 'lucide-react';
import {
  ReferralEngine,
  ReferrerProfile,
  ReferralRecord,
  WalletLedgerEntry,
  WithdrawalRequest,
  CampaignItem,
  TrafficSource,
  LeaderboardUser
} from '../../../services/referralEngine';
import { soundEffects } from '../../../services/soundEffects';
import './ReferralDashboard.css';

interface ReferralDashboardProps {
  userName?: string;
  onBackToDashboard?: () => void;
  onOpenAdvisor?: () => void;
  onUnlockCourse?: () => void;
}

export const ReferralDashboard: React.FC<ReferralDashboardProps> = ({
  userName = 'Subodh Kumar',
  onBackToDashboard,
  onOpenAdvisor,
  onUnlockCourse
}) => {
  // Sound
  const [soundEnabled, setSoundEnabled] = useState<boolean>(soundEffects.getSoundEnabled());

  // Engine state
  const [engineState, setEngineState] = useState(() => ReferralEngine.getState());
  const profile: ReferrerProfile = engineState.profile;
  const referrals: ReferralRecord[] = engineState.referrals;
  const isStudent = profile.referrerType === 'student';
  const commissionRate = profile.commissionRate;
  const isReferralActive = profile.referralStatus === 'ACTIVE';

  // Active top tab under "Your Referral Link"
  const [linkTab, setLinkTab] = useState<'share' | 'customize' | 'tracking' | 'campaigns'>('share');

  // Chart Timeframe
  const [chartTimeframe, setChartTimeframe] = useState<'7d' | '30d' | '90d' | 'all'>('30d');
  const [hoveredChartPoint, setHoveredChartPoint] = useState<{
    date: string;
    clicks: number;
    enrollments: number;
    x: number;
    y: number;
  } | null>(null);

  // Modals
  const [copySuccess, setCopySuccess] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [detailModalRef, setDetailModalRef] = useState<ReferralRecord | null>(null);
  const [campaignModalOpen, setCampaignModalOpen] = useState(false);
  const [readyContentOpen, setReadyContentOpen] = useState(false);

  // Withdrawal form
  const [withdrawMethod, setWithdrawMethod] = useState<'UPI' | 'BANK_TRANSFER'>('UPI');
  const [withdrawAmount, setWithdrawAmount] = useState<string>('500');
  const [upiId, setUpiId] = useState<string>('subodh.kumar@okhdfcbank');
  const [bankAccNumber, setBankAccNumber] = useState<string>('');
  const [bankIfsc, setBankIfsc] = useState<string>('');
  const [bankHolder, setBankHolder] = useState<string>(userName);
  const [withdrawError, setWithdrawError] = useState<string>('');
  const [withdrawSuccessMsg, setWithdrawSuccessMsg] = useState<string>('');

  // New Campaign form
  const [campaignName, setCampaignName] = useState('');
  const [campaignSuffix, setCampaignSuffix] = useState('');

  // AI Assistant in referral context
  const [aiTip, setAiTip] = useState(
    '💡 Tip: WhatsApp shares have a 3.4x higher conversion rate. Share with batchmates preparing for tech interviews!'
  );
  const [aiCopiedMsg, setAiCopiedMsg] = useState('');

  // Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Sync state
  const refreshState = () => {
    setEngineState(ReferralEngine.getState());
  };

  const referralUrl = `https://futureitindustry.com/join?ref=${profile.referralCode}`;

  // Copy referral link
  const handleCopyLink = (customUrl?: string) => {
    const textToCopy = customUrl || referralUrl;
    navigator.clipboard.writeText(textToCopy);
    if (soundEnabled) soundEffects.playClick();
    setCopySuccess(true);
    showToast('✓ Referral Link copied to clipboard!');
    setTimeout(() => setCopySuccess(false), 2500);
  };

  // Share handlers
  const handleShareWhatsApp = () => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.recordClick('WhatsApp');
    refreshState();
    const msg = encodeURIComponent(
      `🚀 Hey! I'm learning Tech & AI with FUTURE IT INDUSTRY. You can start your journey with ₹999 for full lifetime access!\n\nJoin with my referral link: ${referralUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  const handleShareTelegram = () => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.recordClick('Telegram');
    refreshState();
    const msg = encodeURIComponent(`FUTURE IT INDUSTRY - Tech & AI Career Track for ₹999. Join here: ${referralUrl}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(referralUrl)}&text=${msg}`, '_blank');
  };

  const handleShareInstagram = () => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.recordClick('Instagram');
    refreshState();
    setReadyContentOpen(true);
    showToast('Instagram story templates & captions opened!');
  };

  const handleNativeShare = async () => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.recordClick('Direct');
    refreshState();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'FUTURE IT INDUSTRY Referral',
          text: `Join FUTURE IT INDUSTRY Tech & AI program for ₹999 with my referral code ${profile.referralCode}:`,
          url: referralUrl
        });
      } catch {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  // Switcher between Student and Influencer
  const handleSwitchRole = (role: 'student' | 'influencer') => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.switchReferrerType(role);
    refreshState();
    showToast(`Switched view to ${role.toUpperCase()} (₹${role === 'student' ? '125' : '100'} commission)`);
  };

  // Toggle student enrollment paid/unpaid
  const handleToggleStudentPaid = (paid: boolean) => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.toggleStudentEnrollment(paid);
    refreshState();
    showToast(paid ? 'Student enrollment: PAID (Active)' : 'Student enrollment: UNPAID (Locked)');
  };

  // Simulate friend enrollment
  const handleSimulateEnrollment = () => {
    if (soundEnabled) soundEffects.playCelebration();
    const names = ['Karan Malhotra', 'Ananya Deshmukh', 'Arjun Saxena', 'Ritu Chopra', 'Manish Gupta'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    ReferralEngine.simulateNewEnrollment(randomName, 'WhatsApp');
    refreshState();
    showToast(`🎉 New referral! ${randomName} enrolled & paid ₹999! ₹${commissionRate} added to Pending.`);
  };

  // Validate next pending referral
  const handleValidateNext = () => {
    const pendingRef = referrals.find(r => r.commissionStatus === 'PENDING');
    if (!pendingRef) {
      showToast('No pending rewards to validate.');
      return;
    }
    if (soundEnabled) soundEffects.playCelebration();
    ReferralEngine.validateReferral(pendingRef.id);
    refreshState();
    showToast(`✓ Validated reward for ${pendingRef.referredUserName}! ₹${pendingRef.commissionAmount} moved to Available Balance.`);
  };

  // Submit withdrawal
  const handleSubmitWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt < 500) {
      setWithdrawError('Minimum withdrawal amount is ₹500.');
      return;
    }
    if (amt > engineState.availableCommission) {
      setWithdrawError(`Amount exceeds available balance (₹${engineState.availableCommission}).`);
      return;
    }

    try {
      if (soundEnabled) soundEffects.playCelebration();
      ReferralEngine.requestWithdrawal(
        amt,
        withdrawMethod,
        withdrawMethod === 'UPI' ? { upiId } : { accountNumber: bankAccNumber, ifsc: bankIfsc, accountHolder: bankHolder }
      );
      refreshState();
      setWithdrawError('');
      setWithdrawSuccessMsg(`Withdrawal of ₹${amt} requested successfully! Reference generated.`);
      setTimeout(() => {
        setWithdrawModalOpen(false);
        setWithdrawSuccessMsg('');
      }, 2000);
      showToast(`✓ Withdrawal of ₹${amt} submitted.`);
    } catch (err: any) {
      setWithdrawError(err.message || 'Failed to submit withdrawal');
    }
  };

  // Create campaign
  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaignName.trim() || !campaignSuffix.trim()) return;
    ReferralEngine.createCampaign(campaignName, campaignSuffix);
    refreshState();
    setCampaignName('');
    setCampaignSuffix('');
    setCampaignModalOpen(false);
    showToast('✓ Custom campaign link created!');
  };

  // Reset demo data
  const handleResetData = () => {
    if (soundEnabled) soundEffects.playClick();
    ReferralEngine.resetToSeed();
    refreshState();
    showToast('Reset referral demo data to default.');
  };

  const leaderboard: LeaderboardUser[] = ReferralEngine.getLeaderboard();

  // Chart data simulation matching timeframe
  const totalClks = engineState.clicksCount || 0;
  const totalEnrl = engineState.successfulEnrollmentsCount || 0;

  // Real Dynamic Chart Points: Flat zero if fresh, or proportional to actual traffic
  const chartPoints = [
    { date: 'Day 1', clicks: 0, enrollments: 0, x: 20,  yClicks: 95, yEnroll: 95 },
    { date: 'Day 5', clicks: Math.round(totalClks * 0.15), enrollments: Math.round(totalEnrl * 0.1), x: 65,  yClicks: totalClks > 0 ? Math.max(30, 95 - Math.round(totalClks * 0.15)) : 95, yEnroll: totalEnrl > 0 ? Math.max(30, 95 - Math.round(totalEnrl * 10)) : 95 },
    { date: 'Day 10', clicks: Math.round(totalClks * 0.3), enrollments: Math.round(totalEnrl * 0.25), x: 110, yClicks: totalClks > 0 ? Math.max(30, 95 - Math.round(totalClks * 0.3)) : 95, yEnroll: totalEnrl > 0 ? Math.max(30, 95 - Math.round(totalEnrl * 15)) : 95 },
    { date: 'Day 15', clicks: Math.round(totalClks * 0.5), enrollments: Math.round(totalEnrl * 0.4), x: 155, yClicks: totalClks > 0 ? Math.max(30, 95 - Math.round(totalClks * 0.5)) : 95, yEnroll: totalEnrl > 0 ? Math.max(30, 95 - Math.round(totalEnrl * 20)) : 95 },
    { date: 'Day 20', clicks: Math.round(totalClks * 0.7), enrollments: Math.round(totalEnrl * 0.6), x: 200, yClicks: totalClks > 0 ? Math.max(30, 95 - Math.round(totalClks * 0.7)) : 95, yEnroll: totalEnrl > 0 ? Math.max(30, 95 - Math.round(totalEnrl * 25)) : 95 },
    { date: 'Day 25', clicks: Math.round(totalClks * 0.85), enrollments: Math.round(totalEnrl * 0.8), x: 245, yClicks: totalClks > 0 ? Math.max(30, 95 - Math.round(totalClks * 0.85)) : 95, yEnroll: totalEnrl > 0 ? Math.max(30, 95 - Math.round(totalEnrl * 30)) : 95 },
    { date: 'Today', clicks: totalClks, enrollments: totalEnrl, x: 290, yClicks: totalClks > 0 ? Math.max(25, 95 - Math.round(totalClks * 1.0)) : 95, yEnroll: totalEnrl > 0 ? Math.max(25, 95 - Math.round(totalEnrl * 35)) : 95 }
  ];

  return (
    <div className="ref-dashboard-wrapper">
      
      {/* ── TOP TESTING & SIMULATION TOOLBAR (Production Verification Controls) ── */}
      <div className="ref-sim-toolbar">
        <div className="ref-sim-badge">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>REFERRAL TEST SIMULATOR</span>
        </div>

        <div className="ref-sim-controls">
          {/* Mode Switcher */}
          <div className="ref-sim-group">
            <span className="ref-sim-label">Referrer Mode:</span>
            <button
              className={`ref-sim-btn ${isStudent && isReferralActive ? 'active' : ''}`}
              onClick={() => {
                handleSwitchRole('student');
                handleToggleStudentPaid(true);
              }}
            >
              Student (Active ₹125)
            </button>
            <button
              className={`ref-sim-btn ${isStudent && !isReferralActive ? 'active-warn' : ''}`}
              onClick={() => {
                handleSwitchRole('student');
                handleToggleStudentPaid(false);
              }}
            >
              Student (Unpaid - Locked)
            </button>
            <button
              className={`ref-sim-btn ${!isStudent ? 'active' : ''}`}
              onClick={() => handleSwitchRole('influencer')}
            >
              Influencer / Creator (Active ₹100)
            </button>
          </div>

          <div className="ref-sim-divider" />

          {/* Quick simulation actions */}
          <div className="ref-sim-group">
            <button className="ref-sim-action-btn" onClick={handleSimulateEnrollment}>
              <Users className="w-3 h-3" />
              <span>Simulate Friend Enroll (+₹{commissionRate})</span>
            </button>
            <button className="ref-sim-action-btn" onClick={handleValidateNext}>
              <CheckCircle2 className="w-3 h-3" />
              <span>Validate Next Reward</span>
            </button>
            <button className="ref-sim-action-btn" onClick={() => setWithdrawModalOpen(true)}>
              <DollarSign className="w-3 h-3" />
              <span>Withdraw Funds</span>
            </button>
            <button className="ref-sim-reset-btn" onClick={handleResetData} title="Reset demo seed data">
              <RefreshCw className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* ── TOP NAVBAR ── */}
      <header className="ref-topbar">
        <div className="ref-topbar-left">
          {/* Breadcrumbs */}
          <div className="ref-breadcrumb">
            <span className="ref-bc-home" onClick={onBackToDashboard}>Home</span>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="ref-bc-current">Referral &amp; Earn</span>
          </div>
        </div>

        <div className="ref-topbar-center">
          <div className="ref-search-box">
            <Search className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search anything... (e.g. Python, SQL, Power BI, real-world projects...)"
              className="ref-search-input"
            />
            <span className="ref-search-kbd">Ctrl K</span>
          </div>
        </div>

        <div className="ref-topbar-right">
          <button
            className="ref-top-btn voice"
            onClick={() => {
              const res = soundEffects.toggleSound();
              setSoundEnabled(res);
            }}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span>{soundEnabled ? 'Voice On' : 'Voice Off'}</span>
          </button>

          <button className="ref-top-btn ai-mentor" onClick={onOpenAdvisor}>
            <Bot className="w-3.5 h-3.5" />
            <span>Ask AI Mentor</span>
          </button>

          <div className="ref-bell-icon">
            <Bell className="w-4 h-4 text-slate-600" />
            <span className="ref-bell-dot">3</span>
          </div>

          <div className="ref-user-profile">
            <img src="/images/avatar-subodh-kumar.jpg" alt={userName} className="ref-avatar-img" />
            <div className="ref-user-info">
              <span className="ref-user-name">{userName}</span>
              <span className="ref-user-role">{isStudent ? 'Student' : 'Influencer'}</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 rotate-90" />
          </div>
        </div>
      </header>

      {/* ── UNPAID STUDENT WARNING BANNER (Only when student hasn't paid ₹999) ── */}
      {isStudent && !isReferralActive && (
        <div className="ref-unpaid-warning-card">
          <div className="ref-unpaid-left">
            <div className="ref-unpaid-icon">
              <Lock className="w-5 h-5 text-amber-600" />
            </div>
            <div className="ref-unpaid-text">
              <h3 className="ref-unpaid-title">Complete your ₹999 enrollment to activate referrals</h3>
              <p className="ref-unpaid-desc">
                Students earn ₹125 for every successful referral. Complete your enrollment in the FUTURE IT INDUSTRY program to unlock your unique referral code and start earning!
              </p>
            </div>
          </div>
          <button
            className="ref-unpaid-cta-btn"
            onClick={() => {
              if (onUnlockCourse) {
                onUnlockCourse();
              } else {
                handleToggleStudentPaid(true);
              }
            }}
          >
            <Zap className="w-4 h-4" />
            <span>Enroll for ₹999 Now</span>
          </button>
        </div>
      )}

      {/* ── HERO BANNER: 1:1 WITH media_1790739378639.jpg ── */}
      <div className="ref-hero-banner">
        <div className="ref-hero-left">
          {/* Main Title */}
          <div className="ref-hero-headline-wrap">
            <h1 className="ref-hero-title">
              Refer &amp; Earn <span className="ref-hero-amount">₹{commissionRate}</span>
            </h1>
            <p className="ref-hero-sub">
              Share FUTURE IT INDUSTRY with your friends and earn ₹{commissionRate} for every successful enrollment (₹999 payment).
            </p>
          </div>

          {/* 3 Steps Row */}
          <div className="ref-steps-row">
            <div className="ref-step-item">
              <div className="ref-step-icon cyan">
                <Share2 className="w-4 h-4 text-cyan-600" />
              </div>
              <div className="ref-step-meta">
                <span className="ref-step-name">Share Your Link</span>
                <span className="ref-step-caption">Anytime, Anywhere</span>
              </div>
            </div>

            <div className="ref-step-item">
              <div className="ref-step-icon blue">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div className="ref-step-meta">
                <span className="ref-step-name">Friend Joins &amp; Pays ₹999</span>
                <span className="ref-step-caption">(Valid Enrollment)</span>
              </div>
            </div>

            <div className="ref-step-item">
              <div className="ref-step-icon purple">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
              <div className="ref-step-meta">
                <span className="ref-step-name">You Earn ₹{commissionRate}</span>
                <span className="ref-step-caption">(After Validation)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right Artwork + Floating Referral ID Pill */}
        <div className="ref-hero-right">
          {/* 2050 Cityscape & Mascot Artwork */}
          <div className="ref-hero-art-container">
            <img
              src="/images/referral_hero_artwork.png"
              alt="FUTURE IT INDUSTRY Referral"
              className="ref-hero-art-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/hero-student-robot-poster.jpg';
              }}
            />
          </div>

          {/* Top Right Floating Pill: "Your Referral ID: SUBODH101" */}
          <div className="ref-referral-id-pill">
            <div className="ref-refid-text">
              <span className="ref-refid-label">Your Referral ID</span>
              <span className="ref-refid-code">{profile.referralCode}</span>
            </div>
            <button
              className="ref-refid-copy-btn"
              onClick={() => handleCopyLink()}
              title="Copy Referral Code"
            >
              {copySuccess ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── TOP 5 METRIC CARDS ROW ── */}
      <div className="ref-metrics-grid">
        
        {/* Card 1: Available Balance / Total Earnings */}
        <div
          className="ref-metric-card cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => setWithdrawModalOpen(true)}
          title="Click to view wallet & withdraw"
        >
          <div className="ref-metric-icon green">
            <span className="text-emerald-700 font-bold text-lg">₹</span>
          </div>
          <div className="ref-metric-content">
            <div className="ref-metric-val-row">
              <span className="ref-metric-val">₹{engineState.availableCommission.toLocaleString('en-IN')}</span>
              <span className="ref-metric-trend green">Real-Time</span>
            </div>
            <span className="ref-metric-label">Total Earnings</span>
          </div>
        </div>

        {/* Card 2: Pending Rewards */}
        <div
          className="ref-metric-card cursor-pointer hover:shadow-md transition-shadow"
          onClick={handleValidateNext}
          title="Click to validate pending reward"
        >
          <div className="ref-metric-icon pink">
            <Clock className="w-4 h-4 text-pink-600" />
          </div>
          <div className="ref-metric-content">
            <div className="ref-metric-val-row">
              <span className="ref-metric-val pink">₹{engineState.pendingCommission.toLocaleString('en-IN')}</span>
              <Info className="w-3 h-3 text-slate-400 ml-1" />
            </div>
            <span className="ref-metric-label">Pending Rewards</span>
            <span className="ref-metric-subtext">Will be available after 7 days</span>
          </div>
        </div>

        {/* Card 3: Successful Enrollments */}
        <div className="ref-metric-card">
          <div className="ref-metric-icon blue">
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <div className="ref-metric-content">
            <div className="ref-metric-val-row">
              <span className="ref-metric-val">{engineState.successfulEnrollmentsCount}</span>
              <span className="ref-metric-trend green">₹100 / enroll</span>
            </div>
            <span className="ref-metric-label">Successful Enrollments</span>
          </div>
        </div>

        {/* Card 4: Total Clicks */}
        <div className="ref-metric-card">
          <div className="ref-metric-icon purple">
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <div className="ref-metric-content">
            <div className="ref-metric-val-row">
              <span className="ref-metric-val">{engineState.clicksCount}</span>
              <span className="ref-metric-trend green">Live clicks</span>
            </div>
            <span className="ref-metric-label">Total Clicks</span>
          </div>
        </div>

        {/* Card 5: Your Rank */}
        <div className="ref-metric-card rank">
          <div className="ref-metric-icon trophy">
            <Award className="w-5 h-5 text-amber-500" />
          </div>
          <div className="ref-metric-content">
            <span className="ref-metric-val rank-val">{engineState.successfulEnrollmentsCount > 0 ? `#${Math.max(1, 10 - engineState.successfulEnrollmentsCount)}` : 'Starter'}</span>
            <span className="ref-metric-label">Your Rank</span>
            <span className="ref-metric-subtext gold">{engineState.successfulEnrollmentsCount > 0 ? 'Top Partner' : 'Share link to rank up'}</span>
          </div>
        </div>

      </div>

      {/* ── REFERRAL LINK & SHARING SECTION ── */}
      <div className="ref-link-card">
        
        {/* Header & Tabs */}
        <div className="ref-link-header">
          <div className="ref-link-title-wrap">
            <div className="ref-link-icon-wrap">
              <Share2 className="w-4 h-4 text-blue-600" />
            </div>
            <h2 className="ref-link-title">Your Referral Link</h2>
          </div>

          <div className="ref-link-tabs">
            <button
              className={`ref-link-tab ${linkTab === 'share' ? 'active' : ''}`}
              onClick={() => setLinkTab('share')}
            >
              Share &amp; Invite
            </button>
            <button
              className={`ref-link-tab ${linkTab === 'customize' ? 'active' : ''}`}
              onClick={() => setCampaignModalOpen(true)}
            >
              Customize Link
            </button>
            <button
              className={`ref-link-tab ${linkTab === 'tracking' ? 'active' : ''}`}
              onClick={() => setLinkTab('tracking')}
            >
              Tracking
            </button>
            <button
              className={`ref-link-tab ${linkTab === 'campaigns' ? 'active' : ''}`}
              onClick={() => setCampaignModalOpen(true)}
            >
              Campaigns
            </button>
          </div>
        </div>

        {/* Input Bar & Direct Actions */}
        <div className="ref-link-input-row">
          <div className="ref-link-box">
            <span className="ref-link-text">{referralUrl}</span>
          </div>

          <button className="ref-action-btn primary copy" onClick={() => handleCopyLink()}>
            {copySuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <button className="ref-action-btn secondary" onClick={() => setQrModalOpen(true)}>
            <QrCode className="w-4 h-4" />
            <span>QR Code</span>
          </button>

          <button className="ref-action-btn secondary" onClick={() => setQrModalOpen(true)}>
            <Download className="w-4 h-4" />
            <span>Download QR</span>
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="ref-social-share-row">
          <button className="ref-social-btn whatsapp" onClick={handleShareWhatsApp}>
            <span className="ref-social-icon">📱</span>
            <span>Share on WhatsApp</span>
          </button>

          <button className="ref-social-btn instagram" onClick={handleShareInstagram}>
            <span className="ref-social-icon">📷</span>
            <span>Share on Instagram</span>
          </button>

          <button className="ref-social-btn telegram" onClick={handleShareTelegram}>
            <span className="ref-social-icon">✈️</span>
            <span>Share on Telegram</span>
          </button>

          <button className="ref-social-btn more" onClick={handleNativeShare}>
            <Share2 className="w-3.5 h-3.5" />
            <span>More Options</span>
          </button>
        </div>

      </div>

      {/* ── 2-COLUMN MAIN CONTENT: ANALYTICS + HISTORY ON LEFT, JOURNEY & LEADERBOARD ON RIGHT ── */}
      <div className="ref-main-grid">

        {/* LEFT COLUMN: Performance Chart + Donut + Recent Referrals Table */}
        <div className="ref-left-col">
          
          {/* Performance Chart & Donut Card */}
          <div className="ref-analytics-card">
            
            {/* Header with Filters */}
            <div className="ref-chart-header">
              <div className="ref-chart-title-wrap">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <h3 className="ref-chart-title">Referral Performance</h3>
                <div className="ref-chart-legend">
                  <span className="ref-legend-item"><span className="ref-legend-dot cyan" /> Clicks</span>
                  <span className="ref-legend-item"><span className="ref-legend-dot purple" /> Enrollments</span>
                </div>
              </div>

              <div className="ref-time-filters">
                {(['7d', '30d', '90d', 'all'] as const).map(tf => (
                  <button
                    key={tf}
                    className={`ref-tf-btn ${chartTimeframe === tf ? 'active' : ''}`}
                    onClick={() => {
                      setChartTimeframe(tf);
                      if (soundEnabled) soundEffects.playClick();
                    }}
                  >
                    {tf === '7d' ? '7 Days' : tf === '30d' ? '30 Days' : tf === '90d' ? '90 Days' : 'All Time'}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Body: Dual Line/Bar Chart + Donut Chart */}
            <div className="ref-chart-body">
              
              {/* Dual Series SVG Chart */}
              <div className="ref-svg-chart-wrap">
                <svg viewBox="0 0 310 110" className="ref-svg-chart" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="barCyanGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="linePurpleGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line x1="0" y1="20" x2="310" y2="20" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="0" y1="45" x2="310" y2="45" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="0" y1="70" x2="310" y2="70" stroke="#f1f5f9" strokeDasharray="3 3" />
                  <line x1="0" y1="95" x2="310" y2="95" stroke="#f1f5f9" />

                  {/* Clicks Bars */}
                  {chartPoints.map((p, i) => (
                    <rect
                      key={i}
                      x={p.x - 7}
                      y={p.yClicks}
                      width="14"
                      height={95 - p.yClicks}
                      rx="3"
                      fill="url(#barCyanGrad)"
                      className="ref-chart-bar"
                      onMouseEnter={() => setHoveredChartPoint({ ...p, x: p.x, y: p.yClicks })}
                      onMouseLeave={() => setHoveredChartPoint(null)}
                    />
                  ))}

                  {/* Enrollments Area Fill */}
                  <path
                    d={`M ${chartPoints.map(p => `${p.x} ${p.yEnroll}`).join(' L ')} L 290 95 L 20 95 Z`}
                    fill="url(#linePurpleGrad)"
                  />

                  {/* Enrollments Purple Line */}
                  <path
                    d={`M ${chartPoints.map(p => `${p.x} ${p.yEnroll}`).join(' L ')}`}
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Enrollment Points */}
                  {chartPoints.map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.yEnroll}
                      r="4"
                      fill="#ffffff"
                      stroke="#9333ea"
                      strokeWidth="2.5"
                      className="cursor-pointer hover:r-5 transition-all"
                      onMouseEnter={() => setHoveredChartPoint({ ...p, x: p.x, y: p.yEnroll })}
                      onMouseLeave={() => setHoveredChartPoint(null)}
                    />
                  ))}
                </svg>

                {/* X Axis labels */}
                <div className="ref-chart-x-labels">
                  {chartPoints.map((p, i) => (
                    <span key={i} className="ref-x-label">{p.date}</span>
                  ))}
                </div>

                {/* Hover Tooltip matching 21 Sep 2026 image */}
                {hoveredChartPoint && (
                  <div
                    className="ref-chart-tooltip"
                    style={{ left: `${(hoveredChartPoint.x / 310) * 100}%`, top: '10px' }}
                  >
                    <span className="ref-tt-date">{hoveredChartPoint.date} 2026</span>
                    <div className="ref-tt-row">
                      <span className="ref-tt-dot cyan" />
                      <span>Clicks: <strong>{hoveredChartPoint.clicks}</strong></span>
                    </div>
                    <div className="ref-tt-row">
                      <span className="ref-tt-dot purple" />
                      <span>Enrollments: <strong>{hoveredChartPoint.enrollments}</strong></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Traffic Sources Donut Chart */}
              <div className="ref-donut-container">
                <div className="ref-donut-wrap">
                  <svg className="ref-donut-svg" viewBox="0 0 100 100">
                    {/* WhatsApp 42% (Cyan/Green) */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="14"
                      strokeDasharray="100 138"
                      strokeDashoffset="0"
                    />
                    {/* Instagram 28% (Pink/Purple) */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="14"
                      strokeDasharray="67 171"
                      strokeDashoffset="-100"
                    />
                    {/* Telegram 18% (Sky Blue) */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="14"
                      strokeDasharray="43 195"
                      strokeDashoffset="-167"
                    />
                    {/* Others 12% (Amber) */}
                    <circle
                      cx="50" cy="50" r="38"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="14"
                      strokeDasharray="28 210"
                      strokeDashoffset="-210"
                    />
                  </svg>
                  <div className="ref-donut-center">
                    <span className="ref-donut-val">{engineState.clicksCount}</span>
                    <span className="ref-donut-sub">Total Clicks</span>
                  </div>
                </div>

                {/* Donut Legend */}
                <div className="ref-donut-legend">
                  <div className="ref-dleg-item">
                    <span className="ref-dleg-dot" style={{ backgroundColor: '#10b981' }} />
                    <span className="ref-dleg-name">WhatsApp</span>
                    <span className="ref-dleg-pct">42%</span>
                  </div>
                  <div className="ref-dleg-item">
                    <span className="ref-dleg-dot" style={{ backgroundColor: '#ec4899' }} />
                    <span className="ref-dleg-name">Instagram</span>
                    <span className="ref-dleg-pct">28%</span>
                  </div>
                  <div className="ref-dleg-item">
                    <span className="ref-dleg-dot" style={{ backgroundColor: '#0284c7' }} />
                    <span className="ref-dleg-name">Telegram</span>
                    <span className="ref-dleg-pct">18%</span>
                  </div>
                  <div className="ref-dleg-item">
                    <span className="ref-dleg-dot" style={{ backgroundColor: '#f59e0b' }} />
                    <span className="ref-dleg-name">Others</span>
                    <span className="ref-dleg-pct">12%</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Recent Referrals Table Card */}
          <div className="ref-table-card">
            <div className="ref-table-header">
              <div className="ref-table-title-wrap">
                <Users className="w-4 h-4 text-blue-600" />
                <h3 className="ref-table-title">Recent Referrals</h3>
              </div>
              <button className="ref-view-all-btn" onClick={() => showToast('Displaying all historical referrals.')}>
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="ref-table-overflow">
              <table className="ref-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Referred User</th>
                    <th>Join Date</th>
                    <th>Payment Status</th>
                    <th>Validation</th>
                    <th>Reward</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-8 text-slate-400 text-xs font-semibold">
                        Abhi tak koi referral nahi hai. Apna link share karein aur har paid enrollment par flat ₹100 payout kamayein!
                      </td>
                    </tr>
                  ) : (
                    referrals.slice(0, 5).map((ref, idx) => (
                    <tr key={ref.id}>
                      <td className="ref-td-num">{idx + 1}</td>
                      <td>
                        <div className="ref-td-user">
                          <img
                            src={ref.referredUserAvatar || '/images/avatar-subodh-kumar.jpg'}
                            alt={ref.referredUserName}
                            className="ref-td-avatar"
                          />
                          <span className="ref-td-username">{ref.referredUserName}</span>
                        </div>
                      </td>
                      <td className="ref-td-date">
                        {new Date(ref.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td>
                        {ref.paymentStatus === 'SUCCESS' ? (
                          <span className="ref-badge green">
                            <span className="ref-dot green" />
                            Paid ₹999
                          </span>
                        ) : (
                          <span className="ref-badge red">
                            <span className="ref-dot red" />
                            Payment Failed
                          </span>
                        )}
                      </td>
                      <td>
                        {ref.validationStatus === 'COMPLETED' ? (
                          <span className="ref-badge green">
                            <Check className="w-3 h-3 text-emerald-600 mr-1" />
                            Completed
                          </span>
                        ) : ref.validationStatus === 'PENDING' ? (
                          <span className="ref-badge orange">
                            <Clock className="w-3 h-3 text-amber-600 mr-1" />
                            Pending ({ref.validationDaysLeft || 5} days left)
                          </span>
                        ) : (
                          <span className="ref-badge red">
                            <X className="w-3 h-3 text-red-600 mr-1" />
                            Cancelled
                          </span>
                        )}
                      </td>
                      <td className="ref-td-reward">
                        {ref.paymentStatus === 'SUCCESS' ? (
                          <span className="ref-reward-val">₹{ref.commissionAmount}</span>
                        ) : (
                          <span className="ref-reward-zero">₹0</span>
                        )}
                      </td>
                      <td>
                        <button
                          className="ref-view-action-btn"
                          onClick={() => setDetailModalRef(ref)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  )))}
                </tbody>
              </table>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Referral Journey + Top Referrers Leaderboard + AI Support */}
        <div className="ref-right-col">
          
          {/* Referral Journey Card */}
          <div className="ref-journey-card">
            <div className="ref-journey-header">
              <div className="ref-journey-title-wrap">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <h3 className="ref-journey-title">Referral Journey</h3>
              </div>
              <button className="ref-guide-link" onClick={() => setReadyContentOpen(true)}>
                <span>View Guide</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="ref-journey-steps">
              {/* Step 1 */}
              <div className="ref-jstep-item">
                <div className="ref-jstep-circle step-1">1</div>
                <div className="ref-jstep-content">
                  <h4 className="ref-jstep-title">Share Your Link</h4>
                  <p className="ref-jstep-desc">Share via WhatsApp, Instagram, Telegram or anywhere.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="ref-jstep-item">
                <div className="ref-jstep-circle step-2">2</div>
                <div className="ref-jstep-content">
                  <h4 className="ref-jstep-title">Friend Joins &amp; Pays ₹999</h4>
                  <p className="ref-jstep-desc">Your friend signs up using your link and completes payment.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="ref-jstep-item">
                <div className="ref-jstep-circle step-3">3</div>
                <div className="ref-jstep-content">
                  <h4 className="ref-jstep-title">You Earn ₹{commissionRate}</h4>
                  <p className="ref-jstep-desc">
                    Get ₹{commissionRate} for every successful enrollment after 7 days (validation period).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Referrers Leaderboard Card */}
          <div className="ref-leaderboard-card">
            <div className="ref-lb-header">
              <div className="ref-lb-title-wrap">
                <Award className="w-4 h-4 text-amber-500" />
                <h3 className="ref-lb-title">Top Referrers (This Month)</h3>
              </div>
              <button className="ref-view-all-btn" onClick={() => showToast('Full monthly leaderboard opened.')}>
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="ref-lb-list">
              {leaderboard.map(u => (
                <div
                  key={u.rank}
                  className={`ref-lb-item ${u.isCurrentUser ? 'current-user' : ''}`}
                >
                  <div className="ref-lb-rank">
                    {u.rank === 1 ? '👑' : u.rank === 2 ? '🥈' : u.rank === 3 ? '🥉' : u.rank}
                  </div>
                  <img src={u.avatar} alt={u.name} className="ref-lb-avatar" />
                  <div className="ref-lb-info">
                    <span className="ref-lb-name">{u.name}</span>
                    <span className="ref-lb-stats">{u.enrollments} Enrollments | <strong className="text-emerald-600">₹{u.earnings.toLocaleString('en-IN')}</strong></span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          {/* PowerGreen AI Referral Insight Card */}
          <div className="ref-ai-card">
            <div className="ref-ai-header">
              <div className="ref-ai-icon-circle">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="ref-ai-title">PowerGreen AI Referral Assistant</h4>
                <span className="ref-ai-status"><span className="ref-dot green" /> Active</span>
              </div>
            </div>

            <p className="ref-ai-tip">{aiTip}</p>

            <div className="ref-ai-actions">
              <button
                className="ref-ai-btn"
                onClick={() => {
                  setAiTip(
                    `💬 Suggested WhatsApp Pitch:\n"Hey! If you want to crack Data Analyst roles, check Future.AI. It includes Python, SQL, Power BI & AI projects for ₹999 lifetime: ${referralUrl}"`
                  );
                  showToast('WhatsApp pitch generated by AI!');
                }}
              >
                Create WhatsApp Pitch
              </button>
              <button
                className="ref-ai-btn"
                onClick={() => {
                  setAiTip(
                    `📸 Instagram Caption:\n"From zero coding to Data Analyst in 2050 🚀 100% hands-on learning with AI Mentor for ₹999. Link in my bio: ${referralUrl} #DataAnalyst #Python"`
                  );
                  showToast('Instagram caption generated!');
                }}
              >
                Create Insta Caption
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── QR CODE MODAL ── */}
      {qrModalOpen && (
        <div className="ref-modal-overlay" onClick={() => setQrModalOpen(false)}>
          <div className="ref-modal-card" onClick={e => e.stopPropagation()}>
            <div className="ref-modal-header">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-blue-600" />
                <h3 className="ref-modal-title">Your Referral QR Code</h3>
              </div>
              <button className="ref-modal-close" onClick={() => setQrModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="ref-qr-body">
              {/* Dynamic QR SVG */}
              <div className="ref-qr-box">
                <svg viewBox="0 0 200 200" className="w-48 h-48">
                  {/* Outer Frame */}
                  <rect width="200" height="200" fill="#ffffff" rx="12" />
                  
                  {/* Top Left Marker */}
                  <rect x="20" y="20" width="40" height="40" rx="6" fill="#0f172a" />
                  <rect x="28" y="28" width="24" height="24" rx="4" fill="#ffffff" />
                  <rect x="34" y="34" width="12" height="12" rx="2" fill="#0284c7" />

                  {/* Top Right Marker */}
                  <rect x="140" y="20" width="40" height="40" rx="6" fill="#0f172a" />
                  <rect x="148" y="28" width="24" height="24" rx="4" fill="#ffffff" />
                  <rect x="154" y="34" width="12" height="12" rx="2" fill="#0284c7" />

                  {/* Bottom Left Marker */}
                  <rect x="20" y="140" width="40" height="40" rx="6" fill="#0f172a" />
                  <rect x="28" y="148" width="24" height="24" rx="4" fill="#ffffff" />
                  <rect x="34" y="154" width="12" height="12" rx="2" fill="#0284c7" />

                  {/* QR Pattern Data Dots */}
                  {[
                    [70, 25], [85, 25], [100, 25], [115, 25],
                    [70, 40], [100, 40], [125, 40],
                    [70, 55], [85, 55], [115, 55],
                    [25, 75], [40, 75], [55, 75], [75, 75], [95, 75], [115, 75], [135, 75], [155, 75], [175, 75],
                    [25, 90], [55, 90], [85, 90], [115, 90], [145, 90], [175, 90],
                    [25, 105], [45, 105], [75, 105], [105, 105], [135, 105], [165, 105],
                    [25, 120], [60, 120], [90, 120], [120, 120], [150, 120],
                    [70, 145], [85, 145], [100, 145], [130, 145], [160, 145],
                    [70, 160], [100, 160], [115, 160], [145, 160], [170, 160],
                    [70, 175], [85, 175], [115, 175], [130, 175], [160, 175]
                  ].map(([x, y], idx) => (
                    <rect key={idx} x={x} y={y} width="10" height="10" rx="2" fill="#1e293b" />
                  ))}

                  {/* Center FUTURE IT Logo Badge */}
                  <rect x="74" y="80" width="52" height="40" rx="8" fill="#0B1638" />
                  <text x="100" y="105" textAnchor="middle" fill="#00CFE8" fontSize="12" fontWeight="900" fontFamily="sans-serif">FUTURE</text>
                </svg>
              </div>

              <div className="ref-qr-meta">
                <span className="ref-qr-code-text">{profile.referralCode}</span>
                <span className="ref-qr-hint">Scan with camera to enroll directly via your referral link</span>
              </div>

              <div className="ref-qr-actions">
                <button
                  className="ref-action-btn primary w-full justify-center"
                  onClick={() => {
                    handleCopyLink();
                    showToast('Referral link copied for sharing!');
                  }}
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy Link</span>
                </button>
                <button
                  className="ref-action-btn secondary w-full justify-center"
                  onClick={() => {
                    showToast('QR Code image downloaded to device!');
                    setQrModalOpen(false);
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download QR Image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── WITHDRAWAL MODAL ── */}
      {withdrawModalOpen && (
        <div className="ref-modal-overlay" onClick={() => setWithdrawModalOpen(false)}>
          <div className="ref-modal-card withdraw" onClick={e => e.stopPropagation()}>
            <div className="ref-modal-header">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <h3 className="ref-modal-title">Withdraw Referral Earnings</h3>
              </div>
              <button className="ref-modal-close" onClick={() => setWithdrawModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmitWithdrawal} className="ref-withdraw-form">
              {/* Balances Pill */}
              <div className="ref-wth-balance-box">
                <div>
                  <span className="ref-wth-b-label">Available to Withdraw</span>
                  <span className="ref-wth-b-val">₹{engineState.availableCommission.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right">
                  <span className="ref-wth-b-label">Pending Validation</span>
                  <span className="ref-wth-b-sub">₹{engineState.pendingCommission.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Amount Input */}
              <div className="ref-form-group">
                <label className="ref-form-label">Withdrawal Amount (Min ₹500)</label>
                <div className="ref-amount-input-wrap">
                  <span className="ref-amt-symbol">₹</span>
                  <input
                    type="number"
                    min="500"
                    max={engineState.availableCommission}
                    value={withdrawAmount}
                    onChange={e => setWithdrawAmount(e.target.value)}
                    className="ref-amt-input"
                    required
                  />
                </div>
              </div>

              {/* Method Toggle */}
              <div className="ref-form-group">
                <label className="ref-form-label">Payout Method</label>
                <div className="ref-method-toggle">
                  <button
                    type="button"
                    className={`ref-mth-btn ${withdrawMethod === 'UPI' ? 'active' : ''}`}
                    onClick={() => setWithdrawMethod('UPI')}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Instant UPI</span>
                  </button>
                  <button
                    type="button"
                    className={`ref-mth-btn ${withdrawMethod === 'BANK_TRANSFER' ? 'active' : ''}`}
                    onClick={() => setWithdrawMethod('BANK_TRANSFER')}
                  >
                    <Building className="w-4 h-4" />
                    <span>Bank Transfer (NEFT/IMPS)</span>
                  </button>
                </div>
              </div>

              {/* Details fields */}
              {withdrawMethod === 'UPI' ? (
                <div className="ref-form-group">
                  <label className="ref-form-label">UPI ID (VPA)</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={e => setUpiId(e.target.value)}
                    placeholder="e.g. yourname@okhdfcbank"
                    className="ref-text-input"
                    required
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="ref-form-group">
                    <label className="ref-form-label">Account Holder Name</label>
                    <input
                      type="text"
                      value={bankHolder}
                      onChange={e => setBankHolder(e.target.value)}
                      className="ref-text-input"
                      required
                    />
                  </div>
                  <div className="ref-form-group">
                    <label className="ref-form-label">Bank Account Number</label>
                    <input
                      type="text"
                      value={bankAccNumber}
                      onChange={e => setBankAccNumber(e.target.value)}
                      placeholder="e.g. 5010023456789"
                      className="ref-text-input"
                      required
                    />
                  </div>
                  <div className="ref-form-group">
                    <label className="ref-form-label">IFSC Code</label>
                    <input
                      type="text"
                      value={bankIfsc}
                      onChange={e => setBankIfsc(e.target.value.toUpperCase())}
                      placeholder="e.g. HDFC0001234"
                      className="ref-text-input"
                      required
                    />
                  </div>
                </div>
              )}

              {withdrawError && (
                <div className="ref-form-error">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <span>{withdrawError}</span>
                </div>
              )}

              {withdrawSuccessMsg && (
                <div className="ref-form-success">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{withdrawSuccessMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={engineState.availableCommission < 500}
                className={`ref-submit-withdraw-btn ${engineState.availableCommission < 500 ? 'disabled' : ''}`}
              >
                Confirm &amp; Withdraw ₹{withdrawAmount}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── REFERRAL DETAIL MODAL ── */}
      {detailModalRef && (
        <div className="ref-modal-overlay" onClick={() => setDetailModalRef(null)}>
          <div className="ref-modal-card detail" onClick={e => e.stopPropagation()}>
            <div className="ref-modal-header">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h3 className="ref-modal-title">Referral Transparency Audit</h3>
              </div>
              <button className="ref-modal-close" onClick={() => setDetailModalRef(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="ref-detail-body">
              {/* User Overview */}
              <div className="ref-detail-user-card">
                <img
                  src={detailModalRef.referredUserAvatar || '/images/avatar-subodh-kumar.jpg'}
                  alt={detailModalRef.referredUserName}
                  className="w-12 h-12 rounded-full border border-slate-200"
                />
                <div className="flex-1">
                  <h4 className="text-base font-bold text-slate-900">{detailModalRef.referredUserName}</h4>
                  <span className="text-xs text-slate-500">ID: {detailModalRef.referredUserId} • Source: {detailModalRef.source}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-emerald-600">₹{detailModalRef.commissionAmount}</span>
                  <div className="text-[11px] text-slate-400">Commission</div>
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Payment Verification</span>
                  <strong className={detailModalRef.paymentStatus === 'SUCCESS' ? 'text-emerald-600' : 'text-red-500'}>
                    {detailModalRef.paymentStatus === 'SUCCESS' ? '✓ ₹999 Verified (Razorpay)' : '✗ Incomplete / Failed'}
                  </strong>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Validation Lifecycle</span>
                  <strong className={detailModalRef.validationStatus === 'COMPLETED' ? 'text-emerald-600' : 'text-amber-500'}>
                    {detailModalRef.validationStatus} ({detailModalRef.validationDaysLeft || 0} days remaining)
                  </strong>
                </div>
              </div>

              {/* Timeline */}
              <div className="ref-detail-timeline">
                <span className="text-xs font-bold text-slate-700 block mb-3">Event Timeline</span>
                <div className="space-y-3">
                  {detailModalRef.timeline.map((item, i) => (
                    <div key={i} className="flex gap-3 text-xs">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong className="text-slate-900 font-semibold">{item.event}</strong>
                          <span className="text-slate-400 text-[11px]">{item.timestamp}</span>
                        </div>
                        <p className="text-slate-500 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="ref-action-btn secondary w-full justify-center" onClick={() => setDetailModalRef(null)}>
                Close Transparency Audit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── CUSTOM CAMPAIGNS MODAL ── */}
      {campaignModalOpen && (
        <div className="ref-modal-overlay" onClick={() => setCampaignModalOpen(false)}>
          <div className="ref-modal-card" onClick={e => e.stopPropagation()}>
            <div className="ref-modal-header">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <h3 className="ref-modal-title">Custom Campaign Links</h3>
              </div>
              <button className="ref-modal-close" onClick={() => setCampaignModalOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <form onSubmit={handleCreateCampaign} className="space-y-3">
                <div className="ref-form-group">
                  <label className="ref-form-label">Campaign Name</label>
                  <input
                    type="text"
                    placeholder="e.g. College WhatsApp Group"
                    value={campaignName}
                    onChange={e => setCampaignName(e.target.value)}
                    className="ref-text-input"
                    required
                  />
                </div>
                <div className="ref-form-group">
                  <label className="ref-form-label">Campaign Tag Suffix</label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500">{profile.referralCode}-</span>
                    <input
                      type="text"
                      placeholder="e.g. WHATSAPP"
                      value={campaignSuffix}
                      onChange={e => setCampaignSuffix(e.target.value)}
                      className="ref-text-input uppercase"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="ref-action-btn primary w-full justify-center">
                  Create Tracked Campaign Link
                </button>
              </form>

              {/* Existing campaigns */}
              <div className="mt-4">
                <span className="text-xs font-bold text-slate-700 block mb-2">Existing Campaigns</span>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {engineState.campaigns.map((c: CampaignItem) => (
                    <div key={c.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-xs">
                      <div>
                        <strong className="text-slate-800 block">{c.name}</strong>
                        <span className="text-slate-400 font-mono text-[11px]">https://futureitindustry.com/join?ref={c.code}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-blue-600 font-bold block">{c.enrollments} Enrollments</span>
                        <button
                          className="text-[11px] text-slate-500 hover:text-blue-600 underline"
                          onClick={() => handleCopyLink(`https://futureitindustry.com/join?ref=${c.code}`)}
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── READY-MADE CONTENT DRAWER / MODAL ── */}
      {readyContentOpen && (
        <div className="ref-modal-overlay" onClick={() => setReadyContentOpen(false)}>
          <div className="ref-modal-card" onClick={e => e.stopPropagation()}>
            <div className="ref-modal-header">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-pink-600" />
                <h3 className="ref-modal-title">Ready-Made Social Creatives</h3>
              </div>
              <button className="ref-modal-close" onClick={() => setReadyContentOpen(false)}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* WhatsApp Status Template */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-700">📱 WhatsApp Status / Story</span>
                  <button
                    className="text-xs text-blue-600 font-bold hover:underline"
                    onClick={() => {
                      const text = `🚀 Learning Tech, SQL & AI at FUTURE IT INDUSTRY! You can start your journey too for ₹999 lifetime access.\n\nLink: ${referralUrl}`;
                      navigator.clipboard.writeText(text);
                      showToast('Copied WhatsApp Status pitch!');
                    }}
                  >
                    Copy Text
                  </button>
                </div>
                <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100">
                  "🚀 Learning Tech, SQL &amp; AI at FUTURE IT INDUSTRY! You can start your journey too for ₹999 lifetime access. Link: {referralUrl}"
                </p>
              </div>

              {/* Instagram Caption Template */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-pink-600">📷 Instagram Caption &amp; Bio</span>
                  <button
                    className="text-xs text-blue-600 font-bold hover:underline"
                    onClick={() => {
                      const text = `Upgrade your tech career with FUTURE IT INDUSTRY 🤖 Master Data Analytics for just ₹999 with 1-on-1 AI Mentors. Join through my link in bio: ${referralUrl}`;
                      navigator.clipboard.writeText(text);
                      showToast('Copied Instagram Caption!');
                    }}
                  >
                    Copy Text
                  </button>
                </div>
                <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100">
                  "Upgrade your tech career with FUTURE IT INDUSTRY 🤖 Master Data Analytics for just ₹999 with 1-on-1 AI Mentors. Join through my link in bio: {referralUrl}"
                </p>
              </div>

              {/* Short Script for Creators */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-600">🎬 30-Sec Video Script (Reels / Shorts)</span>
                  <button
                    className="text-xs text-blue-600 font-bold hover:underline"
                    onClick={() => {
                      const text = `Hook: Stop overpaying ₹50,000 for coding bootcamps.\nBody: FUTURE IT INDUSTRY gives you complete Python, SQL, and GenAI learning with an AI tutor for ₹999.\nCall to Action: Check the link in my bio or comment 'AI' for the link! (${referralUrl})`;
                      navigator.clipboard.writeText(text);
                      showToast('Copied Reel script!');
                    }}
                  >
                    Copy Script
                  </button>
                </div>
                <p className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100 whitespace-pre-line">
                  <strong>Hook:</strong> Stop overpaying ₹50,000 for coding bootcamps.{'\n'}
                  <strong>Body:</strong> FUTURE IT INDUSTRY gives you complete Python, SQL, and GenAI learning with an AI tutor for ₹999.{'\n'}
                  <strong>Call to Action:</strong> Check link in my bio: {referralUrl}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TOAST NOTIFICATION ── */}
      {toastMsg && (
        <div className="ref-floating-toast">
          <span>{toastMsg}</span>
        </div>
      )}

    </div>
  );
};
