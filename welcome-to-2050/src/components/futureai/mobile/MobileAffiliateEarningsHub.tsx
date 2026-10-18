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
    totalEarned,
    clicks,
    signups,
    paidEnrollments,
    referrals,
    withdrawals,
  } = hubState;

  const [isWithdrawSheetOpen, setIsWithdrawSheetOpen] = useState(false);
  const [isHistorySheetOpen, setIsHistorySheetOpen] = useState(false);
  const [isQrSheetOpen, setIsQrSheetOpen] = useState(false);
  const [withdrawAmtInput, setWithdrawAmtInput] = useState('');
  const [upiIdInput, setUpiIdInput] = useState('');
  const [withdrawError, setWithdrawError] = useState<string | null>(null);
  const [withdrawSuccessToast, setWithdrawSuccessToast] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'week' | 'month'>('week');

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
      `🚀 Join FUTURE IT INDUSTRY with me! Master Python, GenAI & Data Analytics. Sign up free here: ${affiliateRefUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
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
      setWithdrawError(`Amount exceeds your available balance of ₹${availableBalance.toLocaleString('en-IN')}`);
      return;
    }
    if (amt < 100) {
      setWithdrawError('Minimum withdrawal amount is ₹100.');
      return;
    }
    if (!upiIdInput.trim() || !upiIdInput.includes('@')) {
      setWithdrawError('Please enter a valid UPI ID (e.g. mobile@paytm or name@okaxis)');
      return;
    }

    onWithdrawRequest(amt, upiIdInput.trim());
    setIsWithdrawSheetOpen(false);
    setWithdrawSuccessToast(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => setWithdrawSuccessToast(false), 4000);
  };

  const weeklyLeaders = [
    { rank: 1, name: 'Aakash Verma', amount: '₹14,200', referrals: 142, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces', badge: '👑 1st Rank' },
    { rank: 2, name: 'Pooja Sharma', amount: '₹11,500', referrals: 115, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces', badge: '🥈 2nd Rank' },
    { rank: 3, name: 'Manish Kumar', amount: '₹8,900', referrals: 89, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=faces', badge: '🥉 3rd Rank' },
  ];

  const monthlyLeaders = [
    { rank: 1, name: 'Sunil Mehta', amount: '₹1,24,000', referrals: 1240, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces', badge: '👑 Diamond Master' },
    { rank: 2, name: 'Ananya Roy', amount: '₹98,500', referrals: 985, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces', badge: '🥇 Gold Partner' },
    { rank: 3, name: 'Rohit Joshi', amount: '₹76,400', referrals: 764, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces', badge: '🥈 Silver Partner' },
  ];

  const currentLeaders = leaderboardTab === 'week' ? weeklyLeaders : monthlyLeaders;

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-slate-900 pb-36 select-none">
      
      {/* ─── 1. CLEAN LIGHT SUB-HEADER WITH BACK BUTTON ─── */}
      <div className="bg-white border-b border-slate-200/90 px-4 py-3 flex items-center justify-between shadow-2xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              playTactile();
              onNavigateBack();
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            aria-label="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-black text-slate-900 leading-tight flex items-center gap-1.5">
              <span>Earnings &amp; Wallet</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200">
                PRO
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 font-semibold">
              Partner Code: <span className="text-blue-600 font-mono font-bold">{cleanRefCode}100</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              playTactile();
              setIsHistorySheetOpen(true);
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            title="Payout History"
          >
            <Clock className="w-4 h-4 text-blue-600" />
          </button>
          <button
            type="button"
            onClick={() => {
              playTactile();
              setIsQrSheetOpen(true);
            }}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center active:scale-95 transition-all shadow-2xs cursor-pointer"
            title="QR Code"
          >
            <QrCode className="w-4 h-4 text-emerald-600" />
          </button>
        </div>
      </div>

      {/* ─── TOAST NOTIFICATION ─── */}
      {withdrawSuccessToast && (
        <div className="fixed top-16 left-4 right-4 z-50 bg-emerald-600 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <div className="flex-1 text-xs font-bold leading-tight">
            Withdrawal request placed successfully! ₹{withdrawAmtInput} will be transferred to your UPI within 24 hours.
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT SCROLL AREA ─── */}
      <div className="px-4 pt-3.5 space-y-4 max-w-md mx-auto text-left">

        {/* ─── 2. FINTECH WALLET HERO CARD (Light GPay / PhonePe Style) ─── */}
        <div className="relative overflow-hidden rounded-3xl p-5 bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-white border border-emerald-200/90 shadow-sm text-slate-900">
          {/* Card Top Row */}
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100/80 border border-emerald-200 flex items-center justify-center">
                <Wallet className="w-4 h-4 text-emerald-700" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-slate-500">
                  Affiliate Wallet
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] text-emerald-700 font-bold">Live Synced</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[11px] font-black">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant Payout</span>
            </div>
          </div>

          {/* Big Balance Amount */}
          <div className="my-2 relative z-10">
            <span className="text-xs font-semibold text-slate-500">Available to Withdraw</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-2xl font-black text-emerald-600">₹</span>
              <span className="text-4xl font-black text-slate-900 tracking-tight">
                {availableBalance.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Sub Stats Row */}
          <div className="grid grid-cols-2 gap-2 pt-3 pb-4 border-t border-emerald-200/80 mt-3 text-xs relative z-10">
            <div>
              <span className="text-[11px] text-slate-500 font-semibold">Pending Clearance</span>
              <div className="font-black text-amber-600 text-sm mt-0.5">
                ₹{pendingBalance.toLocaleString('en-IN')}
              </div>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 font-semibold">Lifetime Earned</span>
              <div className="font-black text-blue-600 text-sm mt-0.5">
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
              className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
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
              className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-black text-xs flex items-center justify-center gap-2 active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Passbook / Logs</span>
            </button>
          </div>
        </div>

        {/* ─── 3. QUICK 1-TAP WHATSAPP REFERRAL CARD ─── */}
        <div className="rounded-3xl p-4 bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎁</span>
              <div>
                <h2 className="text-xs font-black text-slate-900">Flat ₹100 Per Student</h2>
                <p className="text-[10px] text-emerald-600 font-bold">Unlimited Direct Commissions</p>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200">
              Active Promo
            </span>
          </div>

          {/* Referral Code Box */}
          <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-2.5 border border-slate-200">
            <div className="pl-1">
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-black block">
                Your Referral Code
              </span>
              <span className="text-sm font-black text-blue-600 font-mono">
                {cleanRefCode}100
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
              }}
              className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-black text-slate-800 border border-slate-200 flex items-center gap-1.5 active:scale-95 transition-all shadow-2xs cursor-pointer"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedLink ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* 1-Tap WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
          >
            <span className="text-base">💬</span>
            <span>Share on WhatsApp (Get ₹100)</span>
          </button>
        </div>

        {/* ─── 4. LIVE REAL FUNNEL PERFORMANCE MATRIX ─── */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black text-slate-600 uppercase tracking-wider">
              Live Funnel Analytics
            </h3>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
              100% Verified
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Metric 1: Clicks */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Total Clicks</span>
                <div className="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center border border-sky-100">
                  <ExternalLink className="w-3 h-3 text-sky-600" />
                </div>
              </div>
              <div className="text-xl font-black text-slate-900 mt-1.5">
                {clicks.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-sky-600 font-semibold block mt-0.5">
                {clicks > 0 ? 'Visitors tracked' : 'Share link to start'}
              </span>
            </div>

            {/* Metric 2: Signups */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Free Signups</span>
                <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <Users className="w-3 h-3 text-emerald-600" />
                </div>
              </div>
              <div className="text-xl font-black text-emerald-600 mt-1.5">
                {signups.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-emerald-600 font-semibold block mt-0.5">
                Registered students
              </span>
            </div>

            {/* Metric 3: Paid Enrollments */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Paid Enrolled</span>
                <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <Sparkles className="w-3 h-3 text-indigo-600" />
                </div>
              </div>
              <div className="text-xl font-black text-indigo-600 mt-1.5">
                {paidEnrollments.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-indigo-600 font-semibold block mt-0.5">
                Full course unlocks
              </span>
            </div>

            {/* Metric 4: Total Commissions */}
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">Commission</span>
                <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
                  <IndianRupee className="w-3 h-3 text-amber-600" />
                </div>
              </div>
              <div className="text-xl font-black text-amber-600 mt-1.5">
                ₹{totalEarned.toLocaleString('en-IN')}
              </div>
              <span className="text-[10px] text-amber-600 font-semibold block mt-0.5">
                Cash earned
              </span>
            </div>
          </div>
        </div>

        {/* ─── 5. 3-STEP EASY EARNINGS GUIDE ─── */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <h3 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
            <span>⚡ How to Earn in 3 Steps</span>
          </h3>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-black flex items-center justify-center flex-shrink-0 text-xs border border-blue-200">
                1
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Share Your Link</strong>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Share in college groups, telegram channels or friends preparing for IT jobs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-black flex items-center justify-center flex-shrink-0 text-xs border border-emerald-200">
                2
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Students Sign Up Free</strong>
                <p className="text-[11px] text-slate-500 leading-tight">
                  They login with Google to access the free Python course and coding arena.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-black flex items-center justify-center flex-shrink-0 text-xs border border-indigo-200">
                3
              </div>
              <div>
                <strong className="text-slate-900 block font-bold">Get Instant Money</strong>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Flat ₹100 gets credited to your wallet. Withdraw to UPI anytime!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── 6. MOBILE AFFILIATE LEADERBOARD ─── */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-500" />
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Top Earners
              </h3>
            </div>
            
            {/* Leaderboard Tabs */}
            <div className="flex p-0.5 rounded-xl bg-slate-100 border border-slate-200 text-[10px] font-extrabold">
              <button
                type="button"
                onClick={() => {
                  playTactile();
                  setLeaderboardTab('week');
                }}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  leaderboardTab === 'week' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600'
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
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  leaderboardTab === 'month' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600'
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
                    ? 'bg-amber-50/60 border-amber-200'
                    : leader.rank === 2
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-white border-slate-200/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-xs font-black w-4 text-center ${
                    leader.rank === 1 ? 'text-amber-600' : leader.rank === 2 ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    #{leader.rank}
                  </span>
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200 shadow-2xs"
                  />
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block leading-tight">
                      {leader.name}
                    </strong>
                    <span className="text-[10px] text-slate-500">
                      {leader.referrals} referrals
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs font-black text-emerald-600">
                    {leader.amount}
                  </div>
                  <span className="text-[9px] font-bold text-slate-400">{leader.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── 8. ANDROID BOTTOM SHEET: WITHDRAWAL FORM (Light Mode) ─── */}
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
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {withdrawError && (
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{withdrawError}</span>
              </div>
            )}

            <form onSubmit={handleWithdrawSubmit} className="space-y-3">
              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  Amount to Withdraw (Min ₹100)
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    value={withdrawAmtInput}
                    onChange={(e) => setWithdrawAmtInput(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-black text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Quick Chips */}
                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setWithdrawAmtInput('100')}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold"
                  >
                    ₹100
                  </button>
                  <button
                    type="button"
                    onClick={() => setWithdrawAmtInput('500')}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold"
                  >
                    ₹500
                  </button>
                  <button
                    type="button"
                    onClick={() => setWithdrawAmtInput('1000')}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold"
                  >
                    ₹1,000
                  </button>
                  <button
                    type="button"
                    onClick={() => setWithdrawAmtInput(`${availableBalance}`)}
                    className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-bold"
                  >
                    All (₹{availableBalance})
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  Your UPI ID (VPA)
                </label>
                <div className="relative">
                  <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={upiIdInput}
                    onChange={(e) => setUpiIdInput(e.target.value)}
                    placeholder="e.g. mobile@paytm or name@upi"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs focus:outline-none focus:border-blue-500 font-mono"
                  />
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  Amount will be credited via IMPS/UPI directly within 24 hours.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsHistorySheetOpen(false)}
          />

          <div className="relative w-full max-w-md max-h-[80vh] flex flex-col bg-white border-t border-slate-200 rounded-t-3xl p-5 shadow-2xl z-10 space-y-3 animate-slideUp">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto flex-shrink-0" />

            <div className="flex items-center justify-between flex-shrink-0">
              <h3 className="text-base font-black text-slate-900">Payout Passbook</h3>
              <button
                type="button"
                onClick={() => setIsHistorySheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {withdrawals.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  <Clock className="w-8 h-8 mx-auto text-slate-400 mb-2 opacity-60" />
                  No payout transactions yet. Once you make a withdrawal, it will be logged here.
                </div>
              ) : (
                withdrawals.map((item) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <strong className="text-slate-900 font-bold block">{item.destination}</strong>
                      <span className="text-[10px] text-slate-500">{item.date} • {item.txId}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-emerald-600">
                        ₹{item.amount.toLocaleString('en-IN')}
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-extrabold ${
                        item.status === 'Paid'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            onClick={() => setIsQrSheetOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white border-t border-slate-200 rounded-t-3xl p-6 shadow-2xl z-10 text-center space-y-4 animate-slideUp">
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto" />

            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900">Your Affiliate QR Code</h3>
              <button
                type="button"
                onClick={() => setIsQrSheetOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-3xl inline-block shadow-sm mx-auto">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  affiliateRefUrl
                )}`}
                alt="Affiliate QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>

            <p className="text-xs text-slate-600 max-w-xs mx-auto">
              Let your friends or students scan this QR code directly from their mobile camera to join.
            </p>

            <button
              type="button"
              onClick={() => {
                playTactile();
                onCopyLink();
                setIsQrSheetOpen(false);
              }}
              className="w-full py-3 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
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
