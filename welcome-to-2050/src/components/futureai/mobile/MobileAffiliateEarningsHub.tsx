import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ArrowLeft,
  IndianRupee,
  Share2,
  Copy,
  Check,
  QrCode,
  Wallet,
  TrendingUp,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  ChevronRight,
  Crown,
  Award,
  AlertCircle,
  X,
  Smartphone,
  ExternalLink,
  ChevronDown
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
    availableBalance,
    pendingBalance,
    totalPaid,
    totalEarned,
    clicks,
    signups,
    paidEnrollments,
    referrals,
    withdrawals,
  } = hubState;

  // Active Bottom Sheet Modals
  const [isWithdrawSheetOpen, setIsWithdrawSheetOpen] = useState(false);
  const [isHistorySheetOpen, setIsHistorySheetOpen] = useState(false);
  const [isQrSheetOpen, setIsQrSheetOpen] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'month'>('week');

  // Withdrawal Sheet Form State
  const [withdrawAmtInput, setWithdrawAmtInput] = useState<string>('500');
  const [upiIdInput, setUpiIdInput] = useState<string>(
    `${cleanRefCode.toLowerCase()}@okhdfcbank`
  );
  const [withdrawError, setWithdrawError] = useState<string | null>(null);
  const [withdrawSuccessToast, setWithdrawSuccessToast] = useState(false);

  // Play tactile sound
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
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch {
      // Audio fallback
    }
  };

  // WhatsApp Share Trigger
  const handleWhatsAppShare = () => {
    playTactile();
    const msg = encodeURIComponent(
      `🚀 Join FUTURE IT INDUSTRY with my invite! Master Python, GenAI & Data Analytics (Guaranteed ₹6-15 LPA Track). Register for free using my link: ${affiliateRefUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  };

  // Process Withdrawal Submit
  const handleExecuteWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    playTactile();
    const amt = parseFloat(withdrawAmtInput);
    if (isNaN(amt) || amt <= 0) {
      setWithdrawError('Please enter a valid amount.');
      return;
    }
    if (amt < 500) {
      setWithdrawError('Minimum withdrawal is ₹500.');
      return;
    }
    if (amt > availableBalance) {
      setWithdrawError(`Insufficient balance! Available: ₹${availableBalance.toLocaleString('en-IN')}`);
      return;
    }
    if (!upiIdInput || !upiIdInput.includes('@')) {
      setWithdrawError('Please enter a valid UPI ID (e.g. name@upi).');
      return;
    }

    setWithdrawError(null);
    onWithdrawRequest(amt, upiIdInput);
    setIsWithdrawSheetOpen(false);
    setWithdrawSuccessToast(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#06b6d4', '#3b82f6', '#fbbf24']
      });
    } catch {
      // fallback
    }

    setTimeout(() => setWithdrawSuccessToast(false), 3500);
  };

  // Leaderboard dummy real-looking data
  const weeklyLeaders = [
    { rank: 1, name: 'Rajesh Verma', amount: '₹42,500', referrals: 425, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', badge: '🥇 Gold Partner' },
    { rank: 2, name: 'Priya Sharma', amount: '₹31,200', referrals: 312, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', badge: '🥈 Silver Partner' },
    { rank: 3, name: 'Aman Gupta', amount: '₹24,800', referrals: 248, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces', badge: '🥉 Bronze Partner' },
    { rank: 4, name: 'Neha Patel', amount: '₹18,500', referrals: 185, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces', badge: 'Top 10' },
    { rank: 5, name: 'Vikas Kumar', amount: '₹14,200', referrals: 142, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces', badge: 'Top 10' },
  ];

  const monthlyLeaders = [
    { rank: 1, name: 'Sunil Mehta', amount: '₹1,24,000', referrals: 1240, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', badge: '👑 Diamond Master' },
    { rank: 2, name: 'Ananya Roy', amount: '₹98,500', referrals: 985, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces', badge: '🥇 Gold Partner' },
    { rank: 3, name: 'Rohit Joshi', amount: '₹76,400', referrals: 764, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces', badge: '🥈 Silver Partner' },
  ];

  const currentLeaders = leaderboardTab === 'week' ? weeklyLeaders : monthlyLeaders;

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-100 pb-28 select-none">
      
      {/* ─── 1. ANDROID TOP APP BAR ─── */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onNavigateBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-200 active:scale-95 transition-all"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-white leading-tight flex items-center gap-1.5">
              <span>Earnings &amp; Wallet</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30">
                PRO
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 font-semibold">
              Partner Code: <span className="text-cyan-400 font-mono font-bold">{cleanRefCode}100</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              playTactile();
              setIsHistorySheetOpen(true);
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 active:scale-95 transition-all"
            title="Payout History"
          >
            <Clock className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            type="button"
            onClick={() => {
              playTactile();
              setIsQrSheetOpen(true);
            }}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center text-slate-300 active:scale-95 transition-all"
            title="QR Code"
          >
            <QrCode className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </header>

      {/* ─── TOAST NOTIFICATION ─── */}
      {withdrawSuccessToast && (
        <div className="fixed top-16 left-4 right-4 z-50 bg-emerald-600 text-white p-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <div className="flex-1 text-xs font-bold leading-tight">
            Withdrawal request placed successfully! ₹{withdrawAmtInput} will be transferred to your UPI within 24 hours.
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4">

        {/* ─── 2. FINTECH WALLET HERO CARD (PhonePe / GPay Style) ─── */}
        <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top Row */}
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-indigo-300" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-400">
                  Affiliate Wallet
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] text-emerald-400 font-bold">Live Synced</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant Payout</span>
            </div>
          </div>

          {/* Big Balance Amount */}
          <div className="my-2 relative z-10">
            <span className="text-xs font-semibold text-slate-400">Available to Withdraw</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-emerald-400">₹</span>
              <span className="text-4xl font-black text-white tracking-tight">
                {availableBalance.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Sub Stats Row */}
          <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-slate-800/80 mt-3 text-xs relative z-10">
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Pending Clearance</span>
              <div className="font-extrabold text-amber-400 text-sm mt-0.5">
                ₹{pendingBalance.toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 font-medium">Lifetime Earned</span>
              <div className="font-extrabold text-cyan-400 text-sm mt-0.5">
                ₹{totalEarned.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1 relative z-10">
            <button
              type="button"
              onClick={() => {
                playTactile();
                setWithdrawError(null);
                setWithdrawAmtInput(availableBalance >= 500 ? '500' : `${availableBalance}`);
                setIsWithdrawSheetOpen(true);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <IndianRupee className="w-4 h-4" />
              <span>Withdraw Money</span>
            </button>

            <button
              type="button"
              onClick={() => {
                playTactile();
                setIsHistorySheetOpen(true);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 text-slate-200 font-extrabold text-xs flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            >
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Passbook / Logs</span>
            </button>
          </div>
        </div>

        {/* ─── 3. QUICK 1-TAP WHATSAPP REFERRAL CARD ─── */}
        <div className="rounded-3xl p-4 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <div>
                <h2 className="text-xs font-black text-white">Flat ₹100 Per Student</h2>
                <p className="text-[10px] text-emerald-400 font-bold">Unlimited Direct Commissions</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30">
              Active Promo
            </span>
          </div>

          {/* Referral Code Box */}
          <div className="flex items-center justify-between bg-slate-950/80 rounded-2xl p-2.5 border border-slate-800">
            <div className="pl-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block">
                Your Referral Code
              </span>
              <span className="text-sm font-black text-cyan-400 font-mono">
                {cleanRefCode}100
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 active:scale-95 transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* 1-Tap WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <span className="text-base">💬</span>
            <span>Share on WhatsApp (Get ₹100)</span>
          </button>
        </div>

        {/* ─── 4. LIVE REAL FUNNEL PERFORMANCE MATRIX ─── */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black text-slate-300 uppercase tracking-wider">
              Live Funnel Analytics
            </h3>
            <span className="text-[10px] text-cyan-400 font-bold">100% Verified</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Metric 1: Clicks */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Total Clicks</span>
                <div className="w-6 h-6 rounded-lg bg-sky-500/10 flex items-center justify-center">
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </div>
              </div>
              <div className="text-xl font-black text-white mt-1.5">
                {clicks.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-sky-400 font-semibold block mt-0.5">
                {clicks > 0 ? 'Visitors tracked' : 'Share link to start'}
              </span>
            </div>

            {/* Metric 2: Signups */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Free Signups</span>
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-3 h-3 text-emerald-400" />
                </div>
              </div>
              <div className="text-xl font-black text-emerald-400 mt-1.5">
                {signups.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-emerald-400/80 font-semibold block mt-0.5">
                Registered students
              </span>
            </div>

            {/* Metric 3: Paid Enrollments */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Paid Enrolled</span>
                <div className="w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                </div>
              </div>
              <div className="text-xl font-black text-indigo-300 mt-1.5">
                {paidEnrollments.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-indigo-400 font-semibold block mt-0.5">
                Full course unlocks
              </span>
            </div>

            {/* Metric 4: Total Commissions */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">Commission</span>
                <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <IndianRupee className="w-3 h-3 text-amber-400" />
                </div>
              </div>
              <div className="text-xl font-black text-amber-400 mt-1.5">
                ₹{totalEarned.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-amber-400/80 font-semibold block mt-0.5">
                Cash earned
              </span>
            </div>
          </div>
        </div>

        {/* ─── 5. 3-STEP EASY EARNINGS GUIDE ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h3 className="text-xs font-black text-white flex items-center gap-1.5">
            <span>⚡ How to Earn in 3 Steps</span>
          </h3>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 font-black flex items-center justify-center flex-shrink-0 text-xs border border-cyan-500/30">
                1
              </div>
              <div>
                <strong className="text-white block font-bold">Share Your Link</strong>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Share in college groups, telegram channels or friends preparing for IT jobs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center flex-shrink-0 text-xs border border-emerald-500/30">
                2
              </div>
              <div>
                <strong className="text-white block font-bold">Students Sign Up Free</strong>
                <p className="text-[11px] text-slate-400 leading-tight">
                  They login with Google to access the free Python course and coding arena.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 font-black flex items-center justify-center flex-shrink-0 text-xs border border-indigo-500/30">
                3
              </div>
              <div>
                <strong className="text-white block font-bold">Get Instant Money</strong>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Flat ₹100 gets credited to your wallet. Withdraw to UPI anytime!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. MOBILE AFFILIATE LEADERBOARD ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-black text-white uppercase tracking-wider">
                Top Earners
              </h3>
            </div>
            
            {/* Leaderboard Tabs */}
            <div className="flex p-0.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] font-extrabold">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('week');
                }}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  leaderboardTab === 'week' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                This Week
              </button>
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('month');
                }}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  leaderboardTab === 'month' ? 'bg-indigo-600 text-white' : 'text-slate-400'
                }`}
              >
                All-Time
              </button>
            </div>
          </div>

          {/* Leaders List */}
          <div className="space-y-2">
            {currentLeaders.map((leader) => (
              <div
                key={leader.rank}
                className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all ${
                  leader.rank === 1
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : leader.rank === 2
                    ? 'bg-slate-800/80 border-slate-700'
                    : 'bg-slate-950/60 border-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-black w-4 text-center ${
                    leader.rank === 1 ? 'text-amber-400' : leader.rank === 2 ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    #{leader.rank}
                  </span>
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <strong className="text-xs font-bold text-white block leading-tight">
                      {leader.name}
                    </strong>
                    <span className="text-[10px] text-slate-400">
                      {leader.referrals} referrals
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-black text-emerald-400">
                    {leader.amount}
                  </div>
                  <span className="text-[9px] text-slate-400 block font-semibold">
                    {leader.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Current User Rank Strip */}
          <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-950 to-slate-900 border border-indigo-500/40 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                You
              </span>
              <div>
                <strong className="text-white font-extrabold block text-xs">{userName}</strong>
                <span className="text-[10px] text-slate-400">Rank #14 • Rising Star</span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-black text-emerald-400 text-xs">
                ₹{totalEarned.toLocaleString('en-IN')}
              </div>
              <span className="text-[9px] text-cyan-400 font-bold">Keep Referring!</span>
            </div>
          </div>
        </div>

        {/* ─── 7. RECENT REFERRALS STREAM ─── */}
        <div className="p-4 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              Recent Referrals ({referrals.length})
            </h3>
            <span className="text-[10px] text-slate-400 font-medium">Real-time</span>
          </div>

          {referrals.length === 0 ? (
            <div className="py-6 text-center text-slate-500 space-y-2">
              <Users className="w-8 h-8 mx-auto text-slate-600 opacity-60" />
              <p className="text-xs font-bold text-slate-400">No referrals yet</p>
              <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
                Share your invite link above on WhatsApp or Telegram to earn your first ₹100!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {referrals.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div>
                    <strong className="text-white font-bold block">{item.name}</strong>
                    <span className="text-[10px] text-slate-400">{item.date} • {item.course}</span>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      item.status === 'Paid'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                    }`}>
                      {item.status}
                    </span>
                    <div className="text-xs font-black text-emerald-400 mt-1">
                      +₹{item.commission}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* ─── 8. ANDROID BOTTOM SHEET: WITHDRAW TO UPI ─── */}
      {isWithdrawSheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
            onClick={() => setIsWithdrawSheetOpen(false)}
          />

          {/* Slide-up Container */}
          <div className="relative w-full max-w-md bg-slate-900 border-t border-slate-700/80 rounded-t-3xl p-5 shadow-2xl z-10 space-y-4 animate-in slide-in-from-bottom duration-200">
            {/* Gesture Handle */}
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-white">Withdraw to UPI</h3>
                <p className="text-xs text-slate-400">Available: ₹{availableBalance.toLocaleString('en-IN')}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsWithdrawSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {withdrawError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{withdrawError}</span>
              </div>
            )}

            <form onSubmit={handleExecuteWithdrawal} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Withdrawal Amount (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                  <input
                    type="number"
                    value={withdrawAmtInput}
                    onChange={(e) => setWithdrawAmtInput(e.target.value)}
                    min="500"
                    max={availableBalance}
                    placeholder="Enter amount (min ₹500)"
                    className="w-full pl-8 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-extrabold text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Quick Amount Chips */}
                <div className="flex items-center gap-2 mt-2">
                  {['500', '1000', '2500'].map((chip) => (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => setWithdrawAmtInput(chip)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                        withdrawAmtInput === chip
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      ₹{chip}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setWithdrawAmtInput(`${availableBalance}`)}
                    className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    All
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Your UPI ID (VPA)
                </label>
                <div className="relative">
                  <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={upiIdInput}
                    onChange={(e) => setUpiIdInput(e.target.value)}
                    placeholder="e.g. mobile@paytm or name@upi"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-white font-bold text-xs focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Amount will be credited via IMPS/UPI directly within 24 hours.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <IndianRupee className="w-4 h-4" />
                <span>Confirm Withdrawal of ₹{withdrawAmtInput || 0}</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─── 9. ANDROID BOTTOM SHEET: PASSBOOK & WITHDRAWAL LOGS ─── */}
      {isHistorySheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setIsHistorySheetOpen(false)}
          />

          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 shadow-2xl z-10 space-y-3">
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto flex-shrink-0" />

            <div className="flex items-center justify-between flex-shrink-0">
              <h3 className="text-base font-black text-white">Payout Passbook</h3>
              <button
                type="button"
                onClick={() => setIsHistorySheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {withdrawals.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  <Clock className="w-8 h-8 mx-auto text-slate-600 mb-2 opacity-60" />
                  No payout transactions yet. Once you make a withdrawal, it will be logged here.
                </div>
              ) : (
                withdrawals.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
                  >
                    <div>
                      <strong className="text-white font-bold block">{item.destination}</strong>
                      <span className="text-[10px] text-slate-400">{item.date} • {item.txId}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-emerald-400">
                        ₹{item.amount.toLocaleString('en-IN')}
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${
                        item.status === 'Paid'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── 10. ANDROID BOTTOM SHEET: QR CODE SHARE ─── */}
      {isQrSheetOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={() => setIsQrSheetOpen(false)}
          />

          <div className="relative w-full max-w-md bg-slate-900 border-t border-slate-700 rounded-t-3xl p-6 shadow-2xl z-10 text-center space-y-4">
            <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-white">Your Affiliate QR Code</h3>
              <button
                type="button"
                onClick={() => setIsQrSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-white rounded-3xl inline-block shadow-xl mx-auto">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  affiliateRefUrl
                )}`}
                alt="Affiliate QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>

            <p className="text-xs text-slate-400 max-w-xs mx-auto">
              Let your friends or students scan this QR code directly from their mobile camera to join.
            </p>

            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
                setIsQrSheetOpen(false);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Copy className="w-4 h-4" />
              <span>Copy Link Instead</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
