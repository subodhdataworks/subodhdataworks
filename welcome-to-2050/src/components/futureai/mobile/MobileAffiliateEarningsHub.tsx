import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { WalletWithdrawModal } from '../WalletWithdrawModal';
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
  ChevronLeft,
  ChevronRight,
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
  AlertCircle,
  Sparkles,
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
  status: 'Pending' | 'Processing' | 'Approved' | 'Paid' | 'Rejected' | 'Cancelled' | 'Failed';
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

  // Auto-Sliding 3 Real Human Banners
  const [activeBannerSlide, setActiveBannerSlide] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    if (isBannerPaused) return;
    const interval = setInterval(() => {
      setActiveBannerSlide((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, [isBannerPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsBannerPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsBannerPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      playTactile();
      setActiveBannerSlide((prev) => (prev + 1) % 3);
    } else if (distance < -45) {
      playTactile();
      setActiveBannerSlide((prev) => (prev - 1 + 3) % 3);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

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

  // Leaderboard populated strictly from valid new-system v5 earnings (empty until new activity arrives)
  const topEarners = paidEnrollments > 0 && totalEarned > 0
    ? [{ rank: 1, name: userName || 'Partner', xp: `${paidEnrollments} Verified Enrollments`, amount: `₹${totalEarned.toLocaleString('en-IN')}`, avatar: '/images/profile_student_avatar.png', crown: true }]
    : [];

  // 3 Distinct Real Human Banners for Auto-Slider (100% Real Photography, Zero Cartoon)
  const bannerSlides = [
    {
      id: 0,
      image: '/images/affiliate/real_banner_1_referral.jpg',
      badge: '✨ REFER & EARN ₹100',
      badgeColor: 'bg-blue-600/90 text-white',
      title: 'Earn ₹100 Per Referral',
      desc: 'Share your link with students & friends. Earn ₹100 instant cash on every verified enrollment!',
      ctaText: 'Share Link ↗',
      action: () => handleNativeShare(),
    },
    {
      id: 1,
      image: '/images/affiliate/real_banner_2_upi.jpg',
      badge: '⚡ 24/7 INSTANT UPI PAYOUT',
      badgeColor: 'bg-emerald-600/90 text-white',
      title: 'Instant Bank & UPI Payouts',
      desc: 'Direct withdrawals to PhonePe, Google Pay, or Paytm within 24 hours. Zero hidden charges!',
      ctaText: 'Withdraw UPI ⚡',
      action: () => setIsWithdrawSheetOpen(true),
    },
    {
      id: 2,
      image: '/images/affiliate/real_banner_3_leaderboard.jpg',
      badge: '🏆 #1 TOP PARTNER AWARDS',
      badgeColor: 'bg-amber-400 text-slate-950 font-black',
      title: 'Partner Rewards & Gadgets',
      desc: 'Win ₹10,000+ monthly bonus, smart tech gadgets, and an official partner certification trophy!',
      ctaText: 'Top Earners 👑',
      action: () => {
        const el = document.getElementById('leaderboard-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
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

        {/* ─── 1. AUTO-SLIDING REAL HUMAN HERO CAROUSEL (3 Distinct Banners) ─── */}
        <div 
          className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-slate-950 select-none group"
          onMouseEnter={() => setIsBannerPaused(true)}
          onMouseLeave={() => setIsBannerPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-out w-full"
            style={{ transform: `translateX(-${activeBannerSlide * 100}%)` }}
          >
            {bannerSlides.map((slide) => (
              <div 
                key={slide.id} 
                className="w-full shrink-0 relative h-[120px] sm:h-[135px] cursor-pointer overflow-hidden rounded-2xl"
                onClick={slide.action}
              >
                {/* 100% Real Human Photography */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Scrim Gradient Overlay for Crisp Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-2 left-2.5 z-10">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black tracking-wide shadow-sm backdrop-blur-md ${slide.badgeColor}`}>
                    {slide.badge}
                  </span>
                </div>

                {/* Bottom Overlay Info & Action */}
                <div className="absolute bottom-2 left-2.5 right-2.5 z-10 flex items-end justify-between gap-2">
                  <div className="max-w-[70%]">
                    <h2 className="text-xs sm:text-sm font-black text-white tracking-tight leading-tight drop-shadow-md">
                      {slide.title}
                    </h2>
                    <p className="text-[9.5px] font-medium text-slate-200 line-clamp-1 leading-tight mt-0.5 drop-shadow-sm">
                      {slide.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      playTactile();
                      slide.action();
                    }}
                    className="shrink-0 py-1 px-2.5 rounded-lg bg-white/95 hover:bg-white text-slate-900 font-extrabold text-[10px] shadow-md active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>{slide.ctaText}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              playTactile();
              setActiveBannerSlide((prev) => (prev - 1 + 3) % 3);
            }}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-md flex items-center justify-center transition-all z-20 active:scale-90 cursor-pointer"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              playTactile();
              setActiveBannerSlide((prev) => (prev + 1) % 3);
            }}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-md flex items-center justify-center transition-all z-20 active:scale-90 cursor-pointer"
            aria-label="Next banner"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  playTactile();
                  setActiveBannerSlide(idx);
                }}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  activeBannerSlide === idx
                    ? 'w-5 bg-white shadow-sm'
                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ─── 3 STEP REFERRAL FLOW PILLS ─── */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-1.5">
            {/* Step 1 */}
            <div className="flex-1 flex items-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl p-1.5 shadow-2xs">
              <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center text-xs shrink-0">
                👥
              </div>
              <div className="min-w-0">
                <div className="text-[9px] font-black text-slate-900 truncate leading-none">1. Share Link</div>
                <div className="text-[8px] text-slate-500 font-semibold leading-none mt-0.5 truncate">Invite Friends</div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />

            {/* Step 2 */}
            <div className="flex-1 flex items-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl p-1.5 shadow-2xs">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-xs shrink-0">
                👨‍💻
              </div>
              <div className="min-w-0">
                <div className="text-[9px] font-black text-slate-900 truncate leading-none">2. Enroll</div>
                <div className="text-[8px] text-slate-500 font-semibold leading-none mt-0.5 truncate">Pay ₹999</div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />

            {/* Step 3 */}
            <div className="flex-1 flex items-center gap-1.5 bg-slate-50 border border-slate-200/70 rounded-xl p-1.5 shadow-2xs">
              <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-xs shrink-0">
                🪙
              </div>
              <div className="min-w-0">
                <div className="text-[9px] font-black text-slate-900 truncate leading-none">3. You Earn</div>
                <div className="text-[8px] text-emerald-600 font-bold leading-none mt-0.5 truncate">₹100 (Instant)</div>
              </div>
            </div>
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

          {/* Metric 3: Paid Enrollments */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 mb-1.5">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-slate-950 leading-tight">
                {paidEnrollments.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-800 leading-tight mt-0.5">
                Paid Enrollments
              </div>
              <div className="text-[8px] text-purple-600 font-semibold leading-none mt-0.5 truncate">
                Verified Success
              </div>
            </div>
          </div>

          {/* Metric 4: Available to Payout */}
          <div className="bg-white border border-emerald-200/90 bg-emerald-50/20 rounded-2xl p-2.5 sm:p-3 shadow-2xs flex flex-col justify-between">
            <div className="w-7 h-7 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-1.5">
              <Wallet className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-emerald-700 leading-tight">
                ₹{availableBalance.toLocaleString('en-IN')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-900 leading-tight mt-0.5">
                Available Payout
              </div>
              <div className="text-[8px] text-emerald-600 font-bold leading-none mt-0.5 truncate">
                ₹100 / enroll
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

              {/* Dynamic Bars strictly from live activity (Zero-State until new activity occurs) */}
              {clicks > 0 && (
                <rect x="390" y={Math.max(25, 140 - Math.min(110, clicks * 8))} width="6" height={Math.min(110, clicks * 8)} rx="3" fill="#0066ff" />
              )}
              {signups > 0 && (
                <rect x="398" y={Math.max(25, 140 - Math.min(110, signups * 10))} width="6" height={Math.min(110, signups * 10)} rx="3" fill="#10b981" />
              )}
              {paidEnrollments > 0 && (
                <rect x="406" y={Math.max(25, 140 - Math.min(110, paidEnrollments * 15))} width="6" height={Math.min(110, paidEnrollments * 15)} rx="3" fill="#f59e0b" />
              )}

              {/* Zero baseline or live line */}
              <path
                d={totalEarned > 0 ? `M 40 140 L 350 140 L 405 ${Math.max(25, 140 - Math.min(110, (totalEarned / 100) * 14))}` : "M 40 140 L 435 140"}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="405" cy={totalEarned > 0 ? Math.max(25, 140 - Math.min(110, (totalEarned / 100) * 14)) : 140} r="4" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />

              {/* Live Status Tooltip */}
              <g transform="translate(275, 28)">
                <rect x="0" y="0" width="110" height="36" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                <text x="6" y="11" fontSize="7" fill="#64748b" fontWeight="bold">Live ({analyticsRange})</text>
                <text x="6" y="21" fontSize="8" fill="#7c3aed" fontWeight="900">₹{totalEarned.toLocaleString('en-IN')} commission</text>
                <text x="6" y="30" fontSize="7" fill="#f59e0b" fontWeight="bold">{paidEnrollments} enrollments</text>
              </g>

              {/* X-Axis Labels */}
              <text x="50" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">D1</text>
              <text x="115" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">D2</text>
              <text x="180" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">D3</text>
              <text x="245" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">D4</text>
              <text x="310" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">D5</text>
              <text x="385" y="154" fontSize="8" fill="#94a3b8" fontWeight="bold">Today</text>
            </svg>
          </div>
        </div>

        {/* ─── 6. 2-COLUMN SECTION: LEADERBOARD & RECENT REFERRALS ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Left: Top Affiliate Leaderboard */}
          <div id="leaderboard-section" className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 shadow-2xs space-y-2.5">
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

            {/* Leaderboard List (Empty State until new v5 activity occurs) */}
            <div className="space-y-1.5 pt-1">
              {topEarners.length === 0 ? (
                <div className="py-6 px-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-2 text-lg">
                    🏆
                  </div>
                  <div className="text-xs font-black text-slate-900">Leaderboard Reset — Season Open</div>
                  <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                    Rankings populate automatically as new verified ₹100 enrollments are recorded.
                  </p>
                </div>
              ) : topEarners.map((u) => (
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

      {/* ─── 8. CENTER POPUP: WITHDRAWAL REQUEST & SUBMISSION RECEIPT (1:1 with media_1792461817194_f9a153e3.jpg) ─── */}
      <WalletWithdrawModal
        isOpen={isWithdrawSheetOpen}
        onClose={() => setIsWithdrawSheetOpen(false)}
        onSuccess={() => {
          // Keep modal open so user sees Screen 2 (Submitted receipt); will close when user taps 'OK, Got it'
        }}
      />

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
