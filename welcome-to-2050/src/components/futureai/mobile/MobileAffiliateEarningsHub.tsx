import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Link2,
  Copy,
  Check,
  QrCode,
  Wallet,
  Users,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  FileText,
  Share2,
  Trophy,
  X,
  XCircle,
  HelpCircle,
  BarChart3,
  Flame,
  Award,
  AlertCircle
} from 'lucide-react';

export interface MobileReferralItem {
  id: string;
  name: string;
  date: string;
  status: 'Paid' | 'Registered' | 'Trial Started' | 'Approved' | 'Reversed';
  amount: number;
  commission: number;
  course: string;
  referralId: string;
}

export interface MobileWithdrawalItem {
  id: string;
  date: string;
  amount: number;
  method: 'UPI' | 'Bank';
  destination: string;
  status: 'Paid' | 'Processing' | 'Failed';
  txId: string;
}

export interface MobileHubState {
  availableBalance: number;
  pendingBalance: number;
  totalPaid: number;
  totalEarned: number;
  clicks: number;
  signups: number;
  paidEnrollments: number;
  referrals: MobileReferralItem[];
  withdrawals: MobileWithdrawalItem[];
}

export interface MobileAffiliateEarningsHubProps {
  userName: string;
  hubState: MobileHubState;
  affiliateRefUrl: string;
  cleanRefCode: string;
  onCopyLink: () => void;
  copiedLink: boolean;
  onWithdrawRequest: (amount: number, upiId: string) => void;
  onNavigateBack: () => void;
}

export const MobileAffiliateEarningsHub: React.FC<MobileAffiliateEarningsHubProps> = ({
  userName,
  hubState,
  affiliateRefUrl,
  cleanRefCode,
  onCopyLink,
  copiedLink,
  onWithdrawRequest,
  onNavigateBack,
}) => {
  const {
    availableBalance = 0,
    pendingBalance = 0,
    totalPaid = 0,
    totalEarned = 0,
    clicks = 0,
    signups = 0,
    paidEnrollments = 0,
    referrals = [],
    withdrawals = [],
  } = hubState;

  const [isWithdrawSheetOpen, setIsWithdrawSheetOpen] = useState(false);
  const [isHistorySheetOpen, setIsHistorySheetOpen] = useState(false);
  const [isQrSheetOpen, setIsQrSheetOpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [withdrawAmtInput, setWithdrawAmtInput] = useState('');
  const [upiIdInput, setUpiIdInput] = useState('');
  const [withdrawError, setWithdrawError] = useState<string | null>(null);
  const [withdrawSuccessToast, setWithdrawSuccessToast] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'month' | 'all'>('week');
  const [referralsTab, setReferralsTab] = useState<'all' | 'paid' | 'approved' | 'trial'>('all');
  const [analyticsRange, setAnalyticsRange] = useState<'7D' | '30D' | '3M' | 'ALL'>('7D');

  const playTactile = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.05);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // fallback
    }
  };

  const handleWhatsAppShare = () => {
    playTactile();
    const msg = encodeURIComponent(
      `🚀 Join FUTURE IT INDUSTRY with me! Master Python, GenAI & Data Analytics with guaranteed internship and job placement. Sign up free here: ${affiliateRefUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  const handleTelegramShare = () => {
    playTactile();
    const msg = encodeURIComponent(
      `Join FUTURE IT INDUSTRY! Master Python, GenAI & Data Analytics: ${affiliateRefUrl}`
    );
    window.open(`https://t.me/share/url?url=${encodeURIComponent(affiliateRefUrl)}&text=${msg}`, '_blank');
  };

  const handleLinkedInShare = () => {
    playTactile();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(affiliateRefUrl)}`, '_blank');
  };

  const handleInstagramShare = () => {
    playTactile();
    onCopyLink();
    alert('🔗 Affiliate link copied to clipboard! Paste it into your Instagram Bio or Story sticker.');
  };

  const handleNativeShare = async () => {
    playTactile();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'FUTURE IT INDUSTRY — Learn & Earn',
          text: 'Learn Data Analytics & Python with 100% Placement Support!',
          url: affiliateRefUrl,
        });
      } catch {
        // user dismissed
      }
    } else {
      onCopyLink();
    }
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWithdrawError(null);
    const amt = parseFloat(withdrawAmtInput);

    if (isNaN(amt) || amt <= 0) {
      setWithdrawError('Please enter a valid amount.');
      return;
    }
    if (amt > availableBalance) {
      setWithdrawError(`Amount exceeds available balance of ₹${availableBalance.toLocaleString('en-IN')}`);
      return;
    }
    if (amt < 100) {
      setWithdrawError('Minimum withdrawal amount is ₹100.');
      return;
    }
    if (!upiIdInput.trim() || !upiIdInput.includes('@')) {
      setWithdrawError('Please enter a valid UPI ID (e.g. 9876543210@paytm or name@okaxis)');
      return;
    }

    onWithdrawRequest(amt, upiIdInput.trim());
    setIsWithdrawSheetOpen(false);
    setWithdrawSuccessToast(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setWithdrawSuccessToast(false), 4000);
  };

  // Top 5 Earners exactly matching reference image media_1792354829800_184cecda.png
  const topEarners = [
    { rank: 1, name: 'Aditi Sharma', xp: '2,450 XP', amount: '₹12,500', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces', crown: true },
    { rank: 2, name: 'Rahul Verma', xp: '2,320 XP', amount: '₹10,800', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces', crown: false },
    { rank: 3, name: 'Neha Gupta', xp: '2,100 XP', amount: '₹9,300', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces', crown: false },
    { rank: 4, name: 'Aman Kumar', xp: '1,980 XP', amount: '₹8,700', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', crown: false },
    { rank: 5, name: 'Subodh Kumar', xp: '1,750 XP', amount: '₹5,600', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', crown: false },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-900 pb-36 select-none text-left">
      
      {/* ─── TOAST NOTIFICATION ─── */}
      {withdrawSuccessToast && (
        <div className="fixed top-16 left-4 right-4 z-50 bg-emerald-600 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <div className="flex-1 text-xs font-bold leading-tight">
            Withdrawal request placed successfully! ₹{withdrawAmtInput} will be transferred to your UPI within 24 hours.
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="max-w-md mx-auto px-3 sm:px-4 pt-3 space-y-3">

        {/* ─── 1. HERO BANNER: "Earn with Referrals" ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eaf4ff] via-[#f3f8ff] to-[#edf3ff] border border-sky-200/80 p-3.5 sm:p-4 shadow-xs">
          {/* Left Text & Steps */}
          <div className="max-w-[62%] relative z-10">
            <h1 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
              Earn with{' '}
              <span className="bg-gradient-to-r from-[#0066ff] via-[#4f46e5] to-[#7c3aed] bg-clip-text text-transparent">
                Referrals
              </span>
            </h1>
            <p className="text-[11px] font-semibold text-slate-600 mt-1 leading-snug">
              Help students learn, build careers and earn ₹100 per verified enrollment
            </p>

            {/* 3 Step Pills */}
            <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar py-0.5">
              {/* Step 1 */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl p-1.5 shrink-0 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-fuchsia-100 flex items-center justify-center text-xs">
                  👥
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-900 leading-none">Share Your Link</div>
                  <div className="text-[8px] text-slate-500 font-semibold leading-none mt-0.5">Invite Students</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl p-1.5 shrink-0 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-xs">
                  👨‍💻
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-900 leading-none">They Enroll</div>
                  <div className="text-[8px] text-slate-500 font-semibold leading-none mt-0.5">Pay ₹999</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-xl p-1.5 shrink-0 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-xs">
                  🪙
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-900 leading-none">You Earn</div>
                  <div className="text-[8px] text-slate-500 font-semibold leading-none mt-0.5">₹100 (Verified)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mascot & Badge */}
          <div className="absolute right-0 bottom-0 top-0 w-36 sm:w-44 flex items-end justify-end pointer-events-none">
            <img
              src="/images/affiliate/earn_hero_boy.png"
              alt="Earn Referrals Mascot"
              className="w-full h-auto object-contain drop-shadow-sm select-none"
            />
          </div>
        </div>

        {/* ─── 2. 4-METRICS ROW (Total Clicks, Free Signups, Enrollments, Total Earnings) ─── */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
          {/* Metric 1: Total Clicks */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-1.5">
              <Link2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                {clicks.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                Total Clicks
              </div>
              <div className="text-[8px] text-slate-400 font-medium leading-none mt-0.5 truncate">
                Across all channels
              </div>
            </div>
          </div>

          {/* Metric 2: Free Signups */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-1.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                {signups.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                Free Signups
              </div>
              <div className="text-[8px] text-slate-400 font-medium leading-none mt-0.5 truncate">
                Registered leads
              </div>
            </div>
          </div>

          {/* Metric 3: Enrollments */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-1.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                {paidEnrollments.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                Enrollments
              </div>
              <div className="text-[8px] text-slate-400 font-medium leading-none mt-0.5 truncate">
                ₹999 Verified
              </div>
            </div>
          </div>

          {/* Metric 4: Total Earnings */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-1.5">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                ₹{totalEarned.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                Total Earnings
              </div>
              <div className="text-[8px] text-slate-400 font-medium leading-none mt-0.5 truncate">
                Lifetime
              </div>
            </div>
          </div>
        </div>

        {/* ─── 3. "YOUR AFFILIATE LINK" CARD ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs space-y-3">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                <Link2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  Your Affiliate Link
                </h3>
                <p className="text-[10px] text-slate-500 font-semibold leading-tight">
                  Share this link to earn ₹100 per verified enrollment
                </p>
              </div>
            </div>

            {/* Active Pill */}
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200 shrink-0">
              Active • 24/7 Tracking
            </span>
          </div>

          {/* Input & Copy Button Row */}
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-mono font-bold text-slate-800 truncate shadow-inner">
              <span className="truncate">{affiliateRefUrl}</span>
              <Copy className="w-3.5 h-3.5 text-blue-600 shrink-0 ml-2" />
            </div>

            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
              }}
              className="px-3.5 py-2 rounded-xl bg-[#0066ff] hover:bg-blue-600 text-white text-xs font-black flex items-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer shrink-0"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>

          {/* Share Instantly Buttons */}
          <div>
            <span className="text-[10px] font-black text-slate-500 block mb-1.5 uppercase tracking-wide">
              Share Instantly
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {/* WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25d366] text-white text-[11px] font-black shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </button>

              {/* Telegram */}
              <button
                type="button"
                onClick={handleTelegramShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0088cc] text-white text-[11px] font-black shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>✈️</span>
                <span>Telegram</span>
              </button>

              {/* Instagram */}
              <button
                type="button"
                onClick={handleInstagramShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white text-[11px] font-black shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>📷</span>
                <span>Instagram</span>
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                onClick={handleLinkedInShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0077b5] text-white text-[11px] font-black shadow-xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </button>

              {/* More */}
              <button
                type="button"
                onClick={handleNativeShare}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[11px] font-black shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <span>•••</span>
                <span>More</span>
              </button>

              {/* QR / Flyer */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setIsQrSheetOpen(true);
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[11px] font-black shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <QrCode className="w-3.5 h-3.5 text-blue-600" />
                <span>QR / Flyer</span>
              </button>

              {/* Templates */}
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setIsTemplatesOpen(true);
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-[11px] font-black shadow-2xs active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-600" />
                <span>Templates</span>
              </button>
            </div>
          </div>
        </div>

        {/* ─── 4. 2-COLUMN SECTION: WALLET & OVERVIEW ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Left: Your Earnings Wallet */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">
                    <Wallet className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">Your Earnings Wallet</h4>
                    <p className="text-[9px] text-slate-400 font-semibold leading-tight">Available to withdraw • Payout within 24 hours</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    setIsHistorySheetOpen(true);
                  }}
                  className="text-[10px] font-black text-blue-600 flex items-center gap-0.5 hover:underline cursor-pointer"
                >
                  <span>History</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Green Balance Box */}
              <div className="bg-[#eafbf3] border border-emerald-200/90 rounded-xl p-3 flex items-center gap-3 mt-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-base shadow-xs">
                  $
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 leading-tight block">
                    Available Balance
                  </span>
                  <span className="text-2xl font-black text-emerald-700 leading-tight block">
                    ₹{availableBalance.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Withdraw Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                setIsWithdrawSheetOpen(true);
              }}
              className="w-full mt-3 py-2.5 px-4 rounded-xl bg-[#0066ff] hover:bg-blue-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>Withdraw to UPI / Bank</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Earnings Overview */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-lg bg-indigo-500 text-white flex items-center justify-center text-xs">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-black text-slate-900 leading-tight">Earnings Overview</h4>
              </div>

              <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 cursor-pointer">
                <span>This Month</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </div>
            </div>

            {/* 4 Stat Boxes (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {/* Available */}
              <div className="bg-[#f0fbf6] border border-emerald-200/80 rounded-xl p-2 text-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto mb-0.5" />
                <div className="text-xs font-black text-slate-900">₹{availableBalance}</div>
                <div className="text-[9px] font-bold text-emerald-700">Available (0%)</div>
              </div>

              {/* Pending */}
              <div className="bg-[#fff9eb] border border-amber-200/80 rounded-xl p-2 text-center">
                <Clock className="w-4 h-4 text-amber-600 mx-auto mb-0.5" />
                <div className="text-xs font-black text-slate-900">₹{pendingBalance}</div>
                <div className="text-[9px] font-bold text-amber-700">Pending (0%)</div>
              </div>

              {/* Total Paid */}
              <div className="bg-[#f5f2ff] border border-purple-200/80 rounded-xl p-2 text-center">
                <TrendingUp className="w-4 h-4 text-purple-600 mx-auto mb-0.5" />
                <div className="text-xs font-black text-slate-900">₹{totalPaid}</div>
                <div className="text-[9px] font-bold text-purple-700">Total Paid (0%)</div>
              </div>

              {/* Reversed */}
              <div className="bg-[#fff1f2] border border-rose-200/80 rounded-xl p-2 text-center">
                <XCircle className="w-4 h-4 text-rose-600 mx-auto mb-0.5" />
                <div className="text-xs font-black text-slate-900">₹0</div>
                <div className="text-[9px] font-bold text-rose-700">Reversed (0%)</div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 5. "EARNINGS ANALYTICS & GROWTH" CARD ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs space-y-3">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                  Earnings Analytics &amp; Growth
                </h3>
                <p className="text-[10px] text-slate-500 font-semibold leading-tight">
                  Your clicks, signups, verified enrollments and commissions
                </p>
              </div>
            </div>

            {/* Time Filter Tabs */}
            <div className="flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-black">
              {(['7D', '30D', '3M', 'ALL'] as const).map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    playTactile();
                    setAnalyticsRange(range);
                  }}
                  className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                    analyticsRange === range
                      ? 'bg-[#0066ff] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Legend Row */}
          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Clicks</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Signups</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Enrollments (Verified)</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Commission (₹)</span>
            </span>
          </div>

          {/* Interactive SVG Chart matching reference */}
          <div className="relative pt-2 pb-1">
            <svg viewBox="0 0 450 160" className="w-full h-auto overflow-visible select-none">
              <defs>
                <linearGradient id="purpleAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="30" y1="20" x2="440" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="30" y1="50" x2="440" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="30" y1="80" x2="440" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="30" y1="110" x2="440" y2="110" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="30" y1="140" x2="440" y2="140" stroke="#e2e8f0" strokeWidth="1" />

              {/* Y-Axis Labels */}
              <text x="5" y="24" fontSize="9" fill="#94a3b8" fontWeight="bold">400</text>
              <text x="5" y="54" fontSize="9" fill="#94a3b8" fontWeight="bold">300</text>
              <text x="5" y="84" fontSize="9" fill="#94a3b8" fontWeight="bold">200</text>
              <text x="5" y="114" fontSize="9" fill="#94a3b8" fontWeight="bold">100</text>
              <text x="15" y="144" fontSize="9" fill="#94a3b8" fontWeight="bold">0</text>

              {/* Vertical Stacked Bars */}
              {/* Sep 24 */}
              <rect x="52" y="115" width="6" height="25" rx="3" fill="#0066ff" />
              <rect x="60" y="120" width="6" height="20" rx="3" fill="#10b981" />
              <rect x="68" y="112" width="6" height="28" rx="3" fill="#f59e0b" />

              {/* Sep 26 */}
              <rect x="110" y="122" width="6" height="18" rx="3" fill="#0066ff" />
              <rect x="118" y="125" width="6" height="15" rx="3" fill="#10b981" />
              <rect x="126" y="128" width="6" height="12" rx="3" fill="#f59e0b" />

              {/* Sep 28 */}
              <rect x="165" y="125" width="6" height="15" rx="3" fill="#0066ff" />
              <rect x="173" y="120" width="6" height="20" rx="3" fill="#10b981" />
              <rect x="181" y="128" width="6" height="12" rx="3" fill="#f59e0b" />

              {/* Sep 30 */}
              <rect x="220" y="110" width="6" height="30" rx="3" fill="#0066ff" />
              <rect x="228" y="95" width="6" height="45" rx="3" fill="#10b981" />
              <rect x="236" y="105" width="6" height="35" rx="3" fill="#f59e0b" />

              {/* Oct 2 */}
              <rect x="280" y="125" width="6" height="15" rx="3" fill="#0066ff" />
              <rect x="288" y="128" width="6" height="12" rx="3" fill="#10b981" />
              <rect x="296" y="118" width="6" height="22" rx="3" fill="#f59e0b" />

              {/* Oct 4 */}
              <rect x="335" y="115" width="6" height="25" rx="3" fill="#0066ff" />
              <rect x="343" y="120" width="6" height="20" rx="3" fill="#10b981" />
              <rect x="351" y="112" width="6" height="28" rx="3" fill="#f59e0b" />

              {/* Oct 6 */}
              <rect x="390" y="112" width="6" height="28" rx="3" fill="#0066ff" />
              <rect x="398" y="115" width="6" height="25" rx="3" fill="#10b981" />
              <rect x="406" y="118" width="6" height="22" rx="3" fill="#f59e0b" />

              {/* Spline Area Fill */}
              <path
                d="M 40 125 C 80 120, 110 135, 140 132 C 180 130, 200 125, 230 115 C 270 100, 300 70, 335 70 C 370 70, 400 110, 435 95 L 435 140 L 40 140 Z"
                fill="url(#purpleAreaGrad)"
              />

              {/* Spline Line */}
              <path
                d="M 40 125 C 80 120, 110 135, 140 132 C 180 130, 200 125, 230 115 C 270 100, 300 70, 335 70 C 370 70, 400 110, 435 95"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Data Point Markers */}
              <circle cx="70" cy="122" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="125" cy="132" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="180" cy="128" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="235" cy="112" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="335" cy="70" r="4.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="2" />
              <circle cx="395" cy="100" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="435" cy="95" r="3.5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />

              {/* Tooltip on Sep 30 Point */}
              <g transform="translate(300, 28)">
                <rect x="0" y="0" width="85" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
                <text x="6" y="11" fontSize="7" fill="#64748b" fontWeight="bold">Sep 30 2026</text>
                <text x="6" y="21" fontSize="8" fill="#7c3aed" fontWeight="900">₹750 commission</text>
                <text x="6" y="29" fontSize="7" fill="#f59e0b" fontWeight="bold">6 enrollments</text>
              </g>

              {/* X-Axis Dates */}
              <text x="50" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Sep 24</text>
              <text x="110" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Sep 26</text>
              <text x="165" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Sep 28</text>
              <text x="225" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Sep 30</text>
              <text x="285" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Oct 2</text>
              <text x="345" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Oct 4</text>
              <text x="400" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Oct 6</text>
            </svg>
          </div>
        </div>

        {/* ─── 6. 2-COLUMN SECTION: LEADERBOARD & RECENT REFERRALS ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Left: Top Affiliate Leaderboard */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs space-y-2.5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                  🏆
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 leading-tight">Top Affiliate Leaderboard</h4>
                  <p className="text-[9px] text-slate-400 font-semibold leading-tight">Top earners in India</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  playTactile();
                  alert('🏆 Full Affiliate Leaderboard showing top 100 earners across India.');
                }}
                className="text-[10px] font-black text-blue-600 flex items-center gap-0.5 hover:underline cursor-pointer"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-[10px] font-black">
              {(['week', 'month', 'all'] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    playTactile();
                    setLeaderboardTab(t);
                  }}
                  className={`flex-1 py-1 rounded-lg text-center transition-all cursor-pointer ${
                    leaderboardTab === t
                      ? 'bg-[#0066ff] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t === 'week' ? 'This Week' : t === 'month' ? 'This Month' : 'All Time'}
                </button>
              ))}
            </div>

            {/* Top 5 Earners List */}
            <div className="space-y-1.5 pt-1">
              {topEarners.map((u) => (
                <div
                  key={u.rank}
                  className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
                    u.rank === 5
                      ? 'bg-blue-50/70 border-blue-200 shadow-2xs'
                      : 'bg-white border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black w-4 text-center text-slate-500">
                      {u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : u.rank === 3 ? '🥉' : u.rank}
                    </span>
                    <img
                      src={u.avatar}
                      alt={u.name}
                      className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0 shadow-2xs"
                    />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 leading-tight">
                        {u.name}
                      </div>
                      <div className="text-[9px] text-slate-400 font-semibold leading-tight">
                        {u.xp}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-right">
                    <span className="text-xs font-black text-slate-900">{u.amount}</span>
                    {u.crown && <span className="text-xs">👑</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recent Referrals */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs space-y-2.5 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900 leading-tight">Recent Referrals</h4>
                    <p className="text-[9px] text-slate-400 font-semibold leading-tight">Live enrollment tracking</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    playTactile();
                    setIsHistorySheetOpen(true);
                  }}
                  className="text-[10px] font-black text-blue-600 flex items-center gap-0.5 hover:underline cursor-pointer"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Status Tabs */}
              <div className="flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-[10px] font-black mt-2">
                {(['all', 'paid', 'approved', 'trial'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      playTactile();
                      setReferralsTab(tab);
                    }}
                    className={`flex-1 py-1 rounded-lg text-center transition-all cursor-pointer ${
                      referralsTab === tab
                        ? 'bg-[#0066ff] text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'all'
                      ? `All (${referrals.length})`
                      : tab === 'paid'
                      ? 'Paid (0)'
                      : tab === 'approved'
                      ? 'Approved (0)'
                      : 'Trial (0)'}
                  </button>
                ))}
              </div>

              {/* Empty State Illustration exactly matching reference */}
              <div className="py-6 px-3 text-center flex flex-col items-center justify-center">
                <div className="relative mb-2">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Users className="w-7 h-7" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                    +
                  </div>
                </div>

                <h5 className="text-xs font-black text-slate-900 leading-tight">
                  No Referrals Recorded Yet
                </h5>
                <p className="text-[10px] font-semibold text-slate-500 max-w-[210px] mt-1 leading-snug">
                  Share your unique referral link to earn Flat ₹100 per verified enrollment!
                </p>
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0066ff] hover:bg-blue-600 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Referral Link</span>
            </button>
          </div>
        </div>

        {/* ─── 7. BOTTOM PROMO BANNER: "Earn More, Grow Together" ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#eff6ff] via-[#f5f3ff] to-[#f0fdf4] border border-blue-100/90 p-3 sm:p-4 shadow-2xs flex items-center justify-between gap-3">
          {/* Left 3D Gift Box */}
          <div className="w-12 sm:w-14 h-auto shrink-0 select-none">
            <span className="text-3xl sm:text-4xl">🎁</span>
          </div>

          {/* Center Text */}
          <div className="flex-1">
            <h4 className="text-xs sm:text-sm font-black text-[#4338ca] leading-tight">
              Earn More, Grow Together
            </h4>
            <p className="text-[10px] font-semibold text-slate-600 mt-0.5 leading-snug max-w-[240px]">
              Help more students build their career in Data, AI &amp; Tech. Share, Enroll, Earn — It&apos;s that simple!
            </p>
          </div>

          {/* Right Checklist */}
          <div className="space-y-1 text-[9px] font-bold text-slate-700 shrink-0">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>₹100 per verified enrollment</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Lifetime earnings</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Real-time tracking</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Instant payout</span>
            </div>
          </div>
        </div>

      </div>

      {/* ─── 8. BOTTOM SHEET: WITHDRAWAL FORM ─── */}
      {isWithdrawSheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsWithdrawSheetOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white border-t border-slate-200 rounded-t-3xl p-5 shadow-2xl z-10 space-y-4 animate-slideUp">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Withdraw Earnings</h3>
                <p className="text-[11px] text-slate-500">Instant UPI transfer directly to your bank</p>
              </div>
              <button
                type="button"
                onClick={() => setIsWithdrawSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Balance Badge */}
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800">Available to Withdraw:</span>
              <strong className="text-base font-black text-emerald-700">₹{availableBalance.toLocaleString('en-IN')}</strong>
            </div>

            <form onSubmit={handleWithdrawSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Withdrawal Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    value={withdrawAmtInput}
                    onChange={(e) => setWithdrawAmtInput(e.target.value)}
                    placeholder="Enter amount (min ₹100)"
                    min="100"
                    max={availableBalance}
                    className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  UPI ID (VPA)
                </label>
                <input
                  type="text"
                  value={upiIdInput}
                  onChange={(e) => setUpiIdInput(e.target.value)}
                  placeholder="e.g. yourname@okaxis or 9876543210@paytm"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              {withdrawError && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{withdrawError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm shadow-md active:scale-95 transition-all cursor-pointer"
              >
                Confirm Payout Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─── 9. BOTTOM SHEET: QR CODE / FLYER ─── */}
      {isQrSheetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsQrSheetOpen(false)}
          />

          <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl z-10 text-center space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900">Your Referral QR Code</h3>
              <button
                type="button"
                onClick={() => setIsQrSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 inline-block shadow-inner">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(affiliateRefUrl)}`}
                alt="Referral QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>

            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Show this QR code to college classmates or friends to scan and join instantly!
            </p>

            <button
              type="button"
              onClick={() => {
                onCopyLink();
                setIsQrSheetOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#0066ff] text-white font-black text-xs shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              Copy Link &amp; Close
            </button>
          </div>
        </div>
      )}

      {/* ─── 10. BOTTOM SHEET: READY-TO-SEND TEMPLATES ─── */}
      {isTemplatesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsTemplatesOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl z-10 space-y-3.5 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">WhatsApp Pitch Templates</h3>
                <p className="text-[11px] text-slate-500">Ready-made high-converting messages</p>
              </div>
              <button
                type="button"
                onClick={() => setIsTemplatesOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  title: '🎓 College Friends & Classmates',
                  text: `Hey! If you want to learn Data Analytics & Python with real company projects and 100% placement support, Future IT Industry offers a flagship track. Register free using my link: ${affiliateRefUrl}`,
                },
                {
                  title: '💼 Working Professionals & Career Switchers',
                  text: `Switching to high-paying Data & AI roles (6-15 LPA)? Check out Future IT Industry curriculum covering Python, SQL, Power BI & GenAI. Sign up here: ${affiliateRefUrl}`,
                },
              ].map((tmpl, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-left">
                  <strong className="text-xs font-black text-slate-800 block">{tmpl.title}</strong>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed bg-white p-2.5 rounded-xl border border-slate-200/80">
                    {tmpl.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      playTactile();
                      const msg = encodeURIComponent(tmpl.text);
                      window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
                    }}
                    className="w-full py-2 rounded-xl bg-[#25d366] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all cursor-pointer"
                  >
                    <span>💬 Share This on WhatsApp</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── 11. BOTTOM SHEET: PAYOUT HISTORY ─── */}
      {isHistorySheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsHistorySheetOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white border-t border-slate-200 rounded-t-3xl p-5 shadow-2xl z-10 space-y-3.5 animate-slideUp max-h-[80vh] overflow-y-auto">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-slate-900">Withdrawal History</h3>
                <p className="text-[11px] text-slate-500">All payout transactions to your UPI / Bank</p>
              </div>
              <button
                type="button"
                onClick={() => setIsHistorySheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {withdrawals.length === 0 ? (
              <div className="py-8 text-center text-slate-400">
                <Clock className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-xs font-bold">No withdrawals yet</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Your payouts will appear here after request</p>
              </div>
            ) : (
              <div className="space-y-2">
                {withdrawals.map((w) => (
                  <div key={w.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">₹{w.amount} via {w.method}</div>
                      <div className="text-[10px] text-slate-500">{w.destination} • {w.date}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                      {w.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default MobileAffiliateEarningsHub;
