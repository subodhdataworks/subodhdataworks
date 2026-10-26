import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Link as LinkIcon,
  Copy,
  Check,
  QrCode,
  TrendingUp,
  Users,
  GraduationCap,
  Clock,
  Wallet,
  IndianRupee,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  Download,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building,
  Smartphone,
  Award,
  Layers,
  FileText,
  Zap,
  Flame,
  Crown,
  CreditCard,
  Send,
  ExternalLink,
  Share2
} from 'lucide-react';
import './AffiliateEarningsHub.css';
import { fetchAffiliateRealData, getUserReferralCode, normalizeRefCode, recordReferralPayment } from '../../services/realAuthService';
import { MobileAffiliateEarningsHub } from './mobile/MobileAffiliateEarningsHub';

export interface AffiliateEarningsHubProps {
  userName?: string;
  onNavigateTab?: (tab: 'home' | 'game' | 'earning' | 'placement') => void;
}

interface ReferralItem {
  id: string;
  name: string;
  date: string;
  status: 'Paid' | 'Registered' | 'Trial Started' | 'Approved' | 'Reversed';
  amount: number;
  commission: number;
  course: string;
  referralId: string;
  approvedDate?: string;
}

interface WithdrawalItem {
  id: string;
  date: string;
  amount: number;
  method: 'UPI' | 'Bank';
  destination: string;
  status: 'Paid' | 'Processing' | 'Failed';
  txId: string;
}

interface HubState {
  availableBalance: number;
  pendingBalance: number;
  totalPaid: number;
  totalEarned: number;
  clicks: number;
  signups: number;
  paidEnrollments: number;
  referrals: ReferralItem[];
  withdrawals: WithdrawalItem[];
}

export const AffiliateEarningsHub: React.FC<AffiliateEarningsHubProps> = ({
  userName = 'Learner',
  onNavigateTab,
}) => {
  // Real user referral code & storage key
  const storedCode = typeof window !== 'undefined' ? (localStorage.getItem('futureai_user_ref_code') || '') : '';
  const cleanRefCode = normalizeRefCode(storedCode || userName) || 'PARTNER';
  const affiliateRefUrl = `https://futureitindustry.com/?ref=${cleanRefCode}100`;
  const storageKey = `futureai_affiliate_hub_v3_${cleanRefCode}`;

  // Live Financial State (User-Scoped & Defaults to 0)
  const [hubState, setHubState] = useState<HubState>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          return {
            availableBalance: typeof parsed.availableBalance === 'number' ? parsed.availableBalance : 0,
            pendingBalance: typeof parsed.pendingBalance === 'number' ? parsed.pendingBalance : 0,
            totalPaid: typeof parsed.totalPaid === 'number' ? parsed.totalPaid : 0,
            totalEarned: typeof parsed.totalEarned === 'number' ? parsed.totalEarned : 0,
            clicks: typeof parsed.clicks === 'number' ? parsed.clicks : 0,
            signups: typeof parsed.signups === 'number' ? parsed.signups : 0,
            paidEnrollments: typeof parsed.paidEnrollments === 'number' ? parsed.paidEnrollments : 0,
            referrals: Array.isArray(parsed.referrals) ? (parsed.referrals as ReferralItem[]) : ([] as ReferralItem[]),
            withdrawals: Array.isArray(parsed.withdrawals) ? (parsed.withdrawals as WithdrawalItem[]) : ([] as WithdrawalItem[]),
          };
        }
      }
    } catch {
      // ignore
    }
    return {
      availableBalance: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      referrals: [] as ReferralItem[],
      withdrawals: [] as WithdrawalItem[],
    };
  });

  // Automatically sync to local storage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, JSON.stringify(hubState));
      }
    } catch {
      // ignore
    }
  }, [hubState, storageKey]);

  
  // Auto-recover and credit recent verified payment (e.g. from Razorpay test)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const storedTxn = localStorage.getItem('futureai_payment_txn_id') || '';
      const processedKey = 'futureai_processed_referral_payments';
      let processed: string[] = [];
      try {
        const raw = localStorage.getItem(processedKey);
        if (raw) processed = JSON.parse(raw);
      } catch {}

      if (storedTxn && !processed.includes(storedTxn)) {
        recordReferralPayment({
          paymentId: storedTxn,
          amount: 4,
          refCode: cleanRefCode,
          courseTitle: 'Data Analyst with GenAI',
          payerName: userName,
        }).then((res) => {
          if (res.success) {
            showToast('🎉 ₹100 Referral Commission credited to your wallet!', 'success');
            const storageKey = `futureai_affiliate_hub_v3_${cleanRefCode}`;
            const updatedRaw = localStorage.getItem(storageKey);
            if (updatedRaw) {
              setHubState(JSON.parse(updatedRaw));
            }
          }
        }).catch(() => {});
      }
    } catch {}
  }, [cleanRefCode, userName]);

  // Live real-time sync with Cloud Database & Master Registry for 100% accurate referral signups
  useEffect(() => {
    let isMounted = true;
    const syncRealCloudData = async () => {
      try {
        const real = await fetchAffiliateRealData(cleanRefCode);
        if (isMounted) {
          setHubState((prev) => {
            const nextClicks = Math.max(prev.clicks, real.clicks);
            const nextSignups = Math.max(prev.signups, real.signups);
            const nextPaidEnrollments = Math.max(prev.paidEnrollments, real.paidEnrollments || 0);
            const nextAvailable = typeof real.availableBalance === 'number' ? real.availableBalance : (nextPaidEnrollments * 100 - prev.totalPaid);
            const nextPending = typeof real.pendingBalance === 'number' ? real.pendingBalance : 0;
            const nextEarned = typeof real.totalEarned === 'number' ? real.totalEarned : (nextPaidEnrollments * 100);
            const nextReferrals = real.referrals && real.referrals.length > 0 ? real.referrals : prev.referrals;

            if (
              nextClicks === prev.clicks &&
              nextSignups === prev.signups &&
              nextPaidEnrollments === prev.paidEnrollments &&
              nextAvailable === prev.availableBalance &&
              nextPending === prev.pendingBalance &&
              nextEarned === prev.totalEarned &&
              nextReferrals.length === prev.referrals.length
            ) {
              return prev;
            }

            return {
              ...prev,
              clicks: nextClicks,
              signups: nextSignups,
              paidEnrollments: nextPaidEnrollments,
              availableBalance: Math.max(0, nextAvailable),
              pendingBalance: nextPending,
              totalEarned: nextEarned,
              referrals: nextReferrals,
            };
          });
        }
      } catch (err) {
        console.warn('Real affiliate sync notice:', err);
      }
    };

    syncRealCloudData();
    const interval = setInterval(syncRealCloudData, 2500);
    const onAffiliateUpdated = () => syncRealCloudData();
    window.addEventListener('futureai_affiliate_updated', onAffiliateUpdated);
    return () => {
      isMounted = false;
      clearInterval(interval);
      window.removeEventListener('futureai_affiliate_updated', onAffiliateUpdated);
    };
  }, [cleanRefCode]);

  const {
    availableBalance,
    pendingBalance,
    totalPaid,
    totalEarned,
    clicks,
    signups,
    paidEnrollments,
    referrals: referralsList,
    withdrawals: withdrawalHistory
  } = hubState;

  // Notification Toast
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);
  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Referral Link Copy Feedback & Confetti
  const [copiedLink, setCopiedLink] = useState(false);

  const fallbackCopyText = (text: string): boolean => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    } catch {
      return false;
    }
  };

  const handleCopyLink = () => {
    playUiSound('success');
    let copied = false;
    if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(affiliateRefUrl)
        .then(() => {
          setCopiedLink(true);
        })
        .catch(() => {
          copied = fallbackCopyText(affiliateRefUrl);
          setCopiedLink(true);
        });
    } else {
      copied = fallbackCopyText(affiliateRefUrl);
      setCopiedLink(true);
    }
    setCopiedLink(true);
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.65 },
        colors: ['#0284c7', '#38bdf8', '#10b981', '#fbbf24', '#a855f7']
      });
    } catch {
      // fallback
    }
    showToast('Affiliate invite link copied! Share to earn Flat ₹100 per student.', 'success');
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Interactive UI Sound Feedback (Synthesized Web Audio API)
  const playUiSound = (type: 'click' | 'success' | 'tab' = 'click') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;

      if (type === 'success') {
        // High pleasant two-tone chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === 'tab') {
        // Subtle crisp tab tick
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else {
        // Tactile micro-click / pop
        osc.type = 'sine';
        osc.frequency.setValueAtTime(680, now);
        osc.frequency.exponentialRampToValueAtTime(260, now + 0.06);
        gain.gain.setValueAtTime(0.07, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      }
    } catch {
      // AudioContext unavailable or restricted by browser policy
    }
  };

  // Modals
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [claimPaymentId, setClaimPaymentId] = useState('');
  const [claimLoading, setClaimLoading] = useState(false);
  const [isWithdrawHistoryOpen, setIsWithdrawHistoryOpen] = useState(false);
  const [isReferralsModalOpen, setIsReferralsModalOpen] = useState(false);
  const [selectedReferralDetail, setSelectedReferralDetail] = useState<ReferralItem | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isMarketingKitOpen, setIsMarketingKitOpen] = useState(false);
  const [isTopPartnersModalOpen, setIsTopPartnersModalOpen] = useState(false);

  // Time Range Filter for Chart
  const [chartRange, setChartRange] = useState<'7d' | '30d' | '3m' | '6m' | 'all'>('30d');
  const [hoveredChartIndex, setHoveredChartIndex] = useState<number | null>(24);

  // Top Partners Leaderboard Tab
  const [partnerLeaderboardTab, setPartnerLeaderboardTab] = useState<'week' | 'month' | 'all'>('week');

  // Withdrawal Form State
  const [withdrawAmount, setWithdrawAmount] = useState<string>('2500');
  const [payoutMethod, setPayoutMethod] = useState<'upi' | 'bank'>('upi');
  const [upiId, setUpiId] = useState<string>('learner@upi');
  const [isUpiVerified, setIsUpiVerified] = useState(true);
  const [bankAccNumber, setBankAccNumber] = useState('50100429184521');
  const [bankIfsc, setBankIfsc] = useState('HDFC0001234');
  const [bankHolder, setBankHolder] = useState(userName || 'Account Holder');
  const [bankName, setBankName] = useState('HDFC Bank');
  const [withdrawStep, setWithdrawStep] = useState<'form' | 'confirm' | 'success'>('form');

  // Auto-Sliding Dual HD Hero Banners
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isBannerHovered, setIsBannerHovered] = useState(false);

  const affiliateBanners = useMemo(() => [
    {
      id: 'banner-withdraw',
      theme: 'withdraw',
      bgImage: '/images/affiliate/bg_withdraw_light_real_boy.jpg',
      badgeTag: '⚡ 24/7 WITHDRAWALS • PROCESSED IN 24 HOURS',
      badgeClass: 'badge-cyan',
      titleLine1: 'Withdraw Earnings',
      titleLine2: 'Anytime, Hassle-Free.',
      subtitle: 'Your verified earnings are processed within 24 hours directly to your Bank or UPI.',
      featurePills: [
        { icon: '⚡', label: '24/7 Withdrawal Request' },
        { icon: '🛡️', label: '100% Genuine Escrow' },
        { icon: '🏛️', label: 'Direct to Bank / UPI' },
        { icon: '✅', label: 'Secure • No Hidden Fee' },
      ],
      ctaText: availableBalance >= 100 ? `Instant Withdraw ₹${availableBalance.toLocaleString('en-IN')} ⚡` : 'Start Earning ₹100 / Student 🚀',
      ctaType: availableBalance >= 100 ? 'withdraw' : 'copy',
      socialProof: '₹24.5 Lakhs+ Verified Payouts',
      alt: 'Withdraw Earnings Anytime Hassle-Free - Real Student'
    },
    {
      id: 'banner-share-earn',
      theme: 'share-earn',
      bgImage: '/images/affiliate/bg_share_earn_light_real_girl.jpg',
      badgeTag: '🔥 CREATOR & STUDENT PARTNER PROGRAM',
      badgeClass: 'badge-emerald',
      titleLine1: 'Share & Earn',
      titleLine2: 'Real Money 🚀',
      subtitle: 'Invite students to join Future IT and earn flat ₹100 commission for every enrollment.',
      steps: [
        { num: '1', icon: '👤+', label: 'Share Link' },
        { num: '2', icon: '👥', label: 'Students Join' },
        { num: '3', icon: '🎓', label: 'They Enroll' },
        { num: '4', icon: '💰', label: 'Earn Commission' },
      ],
      featurePills: [
        { icon: '🪙', label: 'Flat ₹100 / Enrollment' },
        { icon: '👥', label: 'Zero Purchase Needed' },
        { icon: '🎁', label: 'Real-Time Tracking' },
        { icon: '⚡', label: 'Unlimited Earnings' },
      ],
      ctaText: 'Copy Referral Link 🔗',
      ctaType: 'copy',
      socialProof: '12,500+ Active Student Partners',
      alt: 'Share & Earn Real Money'
    }
  ], [availableBalance]);

  useEffect(() => {
    if (isBannerHovered) return;
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % affiliateBanners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isBannerHovered, affiliateBanners.length]);

  const handlePrevBanner = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentBannerIndex((prev) => (prev - 1 + affiliateBanners.length) % affiliateBanners.length);
  };

  const handleNextBanner = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentBannerIndex((prev) => (prev + 1) % affiliateBanners.length);
  };

  // Referral Filter & Search State
  const [referralStatusFilter, setReferralStatusFilter] = useState<'All' | 'Paid' | 'Approved' | 'Registered' | 'Trial Started' | 'Reversed'>('All');
  const [referralSearch, setReferralSearch] = useState('');

  // Filtered Referrals
  const filteredReferrals = useMemo(() => {
    return referralsList.filter((item: ReferralItem) => {
      const matchStatus = referralStatusFilter === 'All' || item.status === referralStatusFilter;
      const matchSearch =
        referralSearch === '' ||
        item.name.toLowerCase().includes(referralSearch.toLowerCase()) ||
        item.referralId.toLowerCase().includes(referralSearch.toLowerCase()) ||
        item.course.toLowerCase().includes(referralSearch.toLowerCase());
      return matchStatus && matchSearch;
    });
  }, [referralsList, referralStatusFilter, referralSearch]);

  // Chart Data (30-day timeline)
  const chartDays = useMemo(() => {
    const dates = [
      'Sep 6', 'Sep 7', 'Sep 8', 'Sep 9', 'Sep 10', 'Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15',
      'Sep 16', 'Sep 17', 'Sep 18', 'Sep 19', 'Sep 20', 'Sep 21', 'Sep 22', 'Sep 23', 'Sep 24', 'Sep 25',
      'Sep 26', 'Sep 27', 'Sep 28', 'Sep 29', 'Sep 30', 'Oct 1', 'Oct 2', 'Oct 3', 'Oct 4', 'Oct 5', 'Oct 6'
    ];
    const commissions = [
      200, 300, 450, 350, 500, 400, 600, 550, 650, 700,
      600, 750, 800, 700, 850, 600, 700, 800, 750, 900,
      850, 950, 850, 900, 950, 1000, 950, 1100, 1050, 1150, 1200
    ];
    const enrollments = [
      2, 3, 4, 3, 4, 3, 5, 4, 5, 6,
      5, 6, 7, 6, 7, 5, 6, 7, 6, 8,
      7, 8, 6, 7, 8, 9, 8, 10, 9, 10, 11
    ];
    return dates.map((date, idx) => ({
      date,
      commission: commissions[idx] || 500,
      enrollments: enrollments[idx] || 5,
    }));
  }, []);

  // Social Sharing Handlers
  const handleShareSocial = (platform: 'whatsapp' | 'instagram' | 'telegram' | 'linkedin' | 'more') => {
    playUiSound('click');
    const text = encodeURIComponent(
      `🚀 Join FUTURE IT INDUSTRY with my invite! Master Python, GenAI & Data Science (6-15 LPA Track). Use my referral link to get instant access: ${affiliateRefUrl}`
    );
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
      showToast('Opening WhatsApp with pre-filled affiliate invite...', 'info');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(affiliateRefUrl)}&text=${text}`, '_blank');
      showToast('Opening Telegram share...', 'info');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(affiliateRefUrl)}`, '_blank');
      showToast('Opening LinkedIn share dialog...', 'info');
    } else if (platform === 'instagram') {
      if (navigator?.clipboard) {
        navigator.clipboard.writeText(`Master high-paying Tech & AI skills on FUTURE IT INDUSTRY! Click here: ${affiliateRefUrl}`);
      }
      showToast('Instagram caption copied! Paste in your Bio or Story link sticker.', 'success');
    } else {
      if (navigator.share) {
        navigator.share({
          title: 'FUTURE IT INDUSTRY Affiliate Program',
          text: 'Learn Python & Tech skills on FUTURE IT INDUSTRY!',
          url: affiliateRefUrl,
        }).catch(() => {});
      } else {
        setIsMarketingKitOpen(true);
      }
    }
  };

  
  const handleClaimPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = claimPaymentId.trim();
    if (!cleanId) {
      showToast('Please enter your Razorpay Payment ID from SMS (e.g. pay_...)', 'error');
      return;
    }
    setClaimLoading(true);
    try {
      const res = await recordReferralPayment({
        paymentId: cleanId,
        amount: 4,
        refCode: cleanRefCode,
        courseTitle: 'Data Analyst with GenAI',
        payerName: userName,
      });

      if (res.success) {
        showToast('🎉 Verified! ₹100 referral commission credited to your wallet!', 'success');
        const storageKey = `futureai_affiliate_hub_v3_${cleanRefCode}`;
        const updatedRaw = localStorage.getItem(storageKey);
        if (updatedRaw) {
          setHubState(JSON.parse(updatedRaw));
        }
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#10b981', '#06b6d4', '#f59e0b']
          });
        } catch {}
        setIsClaimModalOpen(false);
        setClaimPaymentId('');
      } else {
        if (res.reason === 'PAYMENT_ALREADY_CREDITED') {
          showToast('This payment ID has already been credited.', 'info');
        } else {
          showToast('Could not credit payment. Please check Payment ID.', 'error');
        }
      }
    } catch (err) {
      showToast('Network error while verifying payment.', 'error');
    } finally {
      setClaimLoading(false);
    }
  };

  // Submit Withdrawal Action
  const handleProcessWithdrawal = () => {
    const amt = parseFloat(withdrawAmount);
    if (isNaN(amt) || amt <= 0) {
      showToast('Please enter a valid withdrawal amount.', 'error');
      return;
    }
    if (amt < 100) {
      showToast('Minimum withdrawal amount is ₹100.', 'error');
      return;
    }
    if (amt > availableBalance) {
      showToast(`Insufficient balance! Available: ₹${availableBalance.toLocaleString('en-IN')}`, 'error');
      return;
    }

    if (withdrawStep === 'form') {
      setWithdrawStep('confirm');
      return;
    }

    // Step confirm -> execute
    const newTx: WithdrawalItem = {
      id: `w-${Date.now()}`,
      date: 'Just Now',
      amount: amt,
      method: payoutMethod === 'upi' ? 'UPI' : 'Bank',
      destination: payoutMethod === 'upi' ? upiId : `${bankName} ••••${bankAccNumber.slice(-4)}`,
      status: 'Processing',
      txId: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
    };

    setHubState((prev) => ({
      ...prev,
      availableBalance: prev.availableBalance - amt,
      pendingBalance: prev.pendingBalance + amt,
      withdrawals: [newTx, ...prev.withdrawals],
    }));
    setWithdrawStep('success');

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.55 },
        colors: ['#10b981', '#06b6d4', '#3b82f6', '#fbbf24']
      });
    } catch {
      // ignore
    }

    showToast(`₹${amt.toLocaleString('en-IN')} withdrawal requested! Amount will be credited to your account within 24 hours.`, 'success');
  };

  // Metric cards definitions with 1:1 graphics from screenshot
  const metricCards = [
    {
      id: 'clicks',
      label: 'Total Clicks',
      val: clicks.toLocaleString('en-IN'),
      growth: clicks > 0 ? '+ Active' : '0 this week',
      colorClass: 'card-cyan',
      iconBg: '#0066ff',
      badgeClass: 'badge-emerald-soft',
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M13.64 21.97a1 1 0 0 1-1.39-.31l-3.23-5.22-3.13 2.5a1 1 0 0 1-1.63-.78V4.16a1 1 0 0 1 1.58-.82l12 9.01a1 1 0 0 1-.36 1.76l-3.8.96 3.23 5.23a1 1 0 0 1-.27 1.39l-3.03 1.28z" />
        </svg>
      ),
      subtext: 'Across all shared channels',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <rect x="4" y="18" width="6" height="10" rx="1.5" fill="#bae6fd" />
          <rect x="16" y="14" width="6" height="14" rx="1.5" fill="#7dd3fc" />
          <rect x="28" y="10" width="6" height="18" rx="1.5" fill="#38bdf8" />
          <rect x="40" y="6" width="6" height="22" rx="1.5" fill="#0ea5e9" />
          <rect x="52" y="2" width="6" height="26" rx="1.5" fill="#0066ff" />
        </svg>
      ),
      onClick: () => showToast(`${clicks} total clicks tracked across all shared channels.`, 'info')
    },
    {
      id: 'signups',
      label: 'Free Signups',
      val: signups.toLocaleString('en-IN'),
      growth: signups > 0 ? `+ ${signups}` : '0 leads',
      colorClass: 'card-purple',
      iconBg: '#10b981',
      badgeClass: 'badge-emerald-soft',
      icon: <Users className="w-4 h-4 text-white" />,
      subtext: 'Registered learner leads',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <path d="M4 22 L16 16 L28 19 L42 10 L58 4" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M52 4 H58 V10" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="24" y="20" width="4" height="8" rx="1" fill="#a7f3d0" />
          <rect x="36" y="16" width="4" height="12" rx="1" fill="#6ee7b7" />
          <rect x="48" y="12" width="4" height="16" rx="1" fill="#34d399" />
        </svg>
      ),
      onClick: () => {
        setReferralStatusFilter('Registered');
        setIsReferralsModalOpen(true);
      }
    },
    {
      id: 'paid',
      label: 'Paid Enrollments',
      val: paidEnrollments.toLocaleString('en-IN'),
      growth: paidEnrollments > 0 ? `+ ${paidEnrollments}` : '0 enrollments',
      colorClass: 'card-emerald',
      iconBg: '#8b5cf6',
      badgeClass: 'badge-purple-soft',
      icon: <GraduationCap className="w-4 h-4 text-white" />,
      subtext: '₹999 verified learners',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <rect x="4" y="20" width="6" height="8" rx="1.5" fill="#f3e8ff" />
          <rect x="16" y="16" width="6" height="12" rx="1.5" fill="#e9d5ff" />
          <rect x="28" y="12" width="6" height="16" rx="1.5" fill="#d8b4fe" />
          <rect x="40" y="7" width="6" height="21" rx="1.5" fill="#c084fc" />
          <rect x="52" y="2" width="6" height="26" rx="1.5" fill="#8b5cf6" />
        </svg>
      ),
      onClick: () => {
        setReferralStatusFilter('Paid');
        setIsReferralsModalOpen(true);
      }
    },
    {
      id: 'pending',
      label: 'Pending Escrow',
      val: `₹${pendingBalance.toLocaleString('en-IN')}`,
      growth: pendingBalance > 0 ? '7-Day Clear' : '₹0 pending',
      colorClass: 'card-amber',
      iconBg: '#f59e0b',
      badgeClass: 'badge-amber-soft',
      icon: <Clock className="w-4 h-4 text-white" />,
      subtext: 'Unlocking on course start',
      valColor: '#ea580c',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <circle cx="10" cy="18" r="6" stroke="#f59e0b" strokeWidth="1.8" />
          <path d="M10 15 V18 H13" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="24" y="18" width="5" height="10" rx="1.5" fill="#fef3c7" />
          <rect x="34" y="14" width="5" height="14" rx="1.5" fill="#fde68a" />
          <rect x="44" y="9" width="5" height="19" rx="1.5" fill="#fcd34d" />
          <rect x="54" y="4" width="5" height="24" rx="1.5" fill="#f59e0b" />
        </svg>
      ),
      onClick: () => {
        setReferralStatusFilter('All');
        setIsReferralsModalOpen(true);
      }
    },
    {
      id: 'available',
      label: 'Available to Payout',
      val: `₹${availableBalance.toLocaleString('en-IN')}`,
      growth: availableBalance >= 100 ? 'Ready to Payout' : 'Min ₹100',
      colorClass: 'card-teal',
      iconBg: '#06b6d4',
      badgeClass: 'badge-cyan-soft',
      icon: <Zap className="w-4 h-4 text-white" />,
      subtext: 'Payout credited in 24 hours',
      valColor: '#059669',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <rect x="8" y="18" width="6" height="10" rx="1.5" fill="#cffafe" />
          <rect x="20" y="14" width="6" height="14" rx="1.5" fill="#a5f3fc" />
          <rect x="32" y="10" width="6" height="18" rx="1.5" fill="#67e8f9" />
          <rect x="44" y="6" width="6" height="22" rx="1.5" fill="#22d3ee" />
          <rect x="56" y="2" width="6" height="26" rx="1.5" fill="#06b6d4" />
        </svg>
      ),
      onClick: () => {
        setWithdrawStep('form');
        setIsWithdrawModalOpen(true);
      }
    },
    {
      id: 'lifetime',
      label: 'Lifetime Earnings',
      val: `₹${totalPaid.toLocaleString('en-IN')}`,
      growth: '100% Verified',
      colorClass: 'card-indigo',
      iconBg: '#6366f1',
      badgeClass: 'badge-purple-soft',
      icon: <Crown className="w-4 h-4 text-white" />,
      subtext: 'Total commissions credited',
      valColor: '#4338ca',
      chart: (
        <svg className="w-16 h-7" viewBox="0 0 64 28" fill="none">
          <rect x="4" y="20" width="6" height="8" rx="1.5" fill="#e0e7ff" />
          <rect x="16" y="16" width="6" height="12" rx="1.5" fill="#c7d2fe" />
          <rect x="28" y="12" width="6" height="16" rx="1.5" fill="#a5b4fc" />
          <rect x="40" y="7" width="6" height="21" rx="1.5" fill="#818cf8" />
          <rect x="52" y="2" width="6" height="26" rx="1.5" fill="#6366f1" />
        </svg>
      ),
      onClick: () => setIsWithdrawHistoryOpen(true)
    }
  ];

  return (
    <>
      {/* ── Native Android Mobile App Experience (< 768px) ── */}
      <div className="md:hidden">
        <MobileAffiliateEarningsHub
          userName={userName}
          hubState={hubState}
          affiliateRefUrl={affiliateRefUrl}
          cleanRefCode={cleanRefCode}
          onCopyLink={handleCopyLink}
          copiedLink={copiedLink}
          onWithdrawRequest={(amount, destination) => {
            const newTx: WithdrawalItem = {
              id: `w-${Date.now()}`,
              date: 'Just Now',
              amount,
              method: 'UPI',
              destination,
              status: 'Processing',
              txId: `WTH-${Math.floor(100000 + Math.random() * 900000)}`,
            };
            setHubState((prev) => ({
              ...prev,
              availableBalance: prev.availableBalance - amount,
              pendingBalance: prev.pendingBalance + amount,
              withdrawals: [newTx, ...prev.withdrawals],
            }));
            showToast(`₹${amount.toLocaleString('en-IN')} withdrawal requested!`, 'success');
          }}
          onNavigateBack={() => {
            if (onNavigateTab) onNavigateTab('home');
            else {
              if (typeof window !== 'undefined') window.location.hash = '#dashboard';
            }
          }}
        />
      </div>

      {/* ── Desktop Experience (>= 768px) ── */}
      <div className="hidden md:block affiliate-hub-container">
        {/* Dynamic Ambient Background Highlights */}
      <div className="affiliate-ambient-glow glow-cyan" />
      <div className="affiliate-ambient-glow glow-purple" />
      <div className="affiliate-ambient-glow glow-amber" />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={`affiliate-toast toast-${toast.type}`}
          >
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
            {toast.type === 'info' && <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />}
            <span className="font-semibold text-xs">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
      {/* =========================================================================
          1. AFFILIATE HERO BANNER SLIDER (Auto-Sliding Dual HD Banners with Controls)
          ========================================================================= */}
      <section
        className="affiliate-hero-slider-wrap"
        onMouseEnter={() => setIsBannerHovered(true)}
        onMouseLeave={() => setIsBannerHovered(false)}
        aria-label="Affiliate Partner Program Highlights"
      >
        {/* Sliding Content Track */}
        <div
          className="affiliate-slider-track"
          style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
        >
          {affiliateBanners.map((banner, idx) => (
            <div
              key={banner.id}
              className={`affiliate-slider-slide affiliate-hero-banner-slide theme-${banner.theme}`}
            >
              {/* Generated clean 3D background art (no baked text) */}
              <img
                src={banner.bgImage}
                alt={banner.alt}
                className="affiliate-banner-art-bg"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Translucent directional gradient for razor-sharp text readability */}
              <div className={`affiliate-banner-art-overlay overlay-${banner.theme}`} />

              {/* HTML/CSS Overlay Content */}
              <div className="affiliate-banner-text-overlay">
                
                {/* 1. Main Headline */}
                <h2 className="ath-overlay-headline">
                  <span className="ath-hl-line1">{banner.titleLine1}</span>
                  <span className={`ath-hl-line2 ${banner.theme === 'share-earn' ? 'ath-hl-gold' : 'ath-hl-cyan'}`}>
                    {banner.titleLine2}
                  </span>
                </h2>

                {/* 3. Subtitle */}
                <p className="ath-overlay-subtitle">
                  {banner.subtitle}
                </p>

                {/* 4. 4-Step Process Pathway (Only on Share & Earn) */}
                {banner.steps && (
                  <div className="ath-overlay-steps-row">
                    {banner.steps.map((st, sIdx) => (
                      <React.Fragment key={st.num}>
                        <div className="ath-step-pill">
                          <span className="ath-step-num">{st.num}</span>
                          <span className="ath-step-label">{st.label}</span>
                        </div>
                        {sIdx < banner.steps.length - 1 && (
                          <span className="ath-step-arrow">➔</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                {/* 5. Feature Badges Row */}
                <div className="ath-overlay-pills-row">
                  {banner.featurePills.map((fp) => (
                    <span key={fp.label} className="ath-feature-glass-pill">
                      <span className="ath-fp-icon">{fp.icon}</span>
                      <span className="ath-fp-text">{fp.label}</span>
                    </span>
                  ))}
                </div>

                {/* 6. Action Button & Social Proof */}
                <div className="ath-overlay-actions-row">
                  {banner.ctaType === 'copy' ? (
                    <button
                      className="ath-overlay-cta-btn ath-cta-gold"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyLink();
                      }}
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedLink ? 'Link Copied!' : banner.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      className="ath-overlay-cta-btn ath-cta-cyan"
                      onClick={(e) => {
                        e.stopPropagation();
                        setWithdrawStep('form');
                        setIsWithdrawModalOpen(true);
                      }}
                    >
                      <Wallet className="w-4 h-4" />
                      <span>{banner.ctaText}</span>
                    </button>
                  )}

                  <span className="ath-overlay-social-proof">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{banner.socialProof}</span>
                  </span>
                </div>

              </div>

              {/* Dynamic Animated Scene Elements: Withdraw Scene & Share Scene */}
              {banner.theme === 'withdraw' && (
                <div className="ath-floating-withdraw-scene" aria-hidden="true">
                  <div className="ath-fws-card">
                    <div className="ath-fws-icon-circle">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
                    </div>
                    <div className="ath-fws-text-col">
                      <span className="ath-fws-sub">Instant Payouts</span>
                      <strong className="ath-fws-title">{availableBalance > 0 ? `₹${availableBalance.toLocaleString('en-IN')} Available` : 'Flat ₹100 / Student'}</strong>
                    </div>
                    <div className="ath-fws-bank-chip">Direct to Bank ✓</div>
                  </div>
                </div>
              )}

              {banner.theme === 'share-earn' && (
                <div className="ath-floating-share-scene">
                  <div
                    className="ath-fss-bubble bubble-wa cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                    title="Share via WhatsApp"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShareSocial('whatsapp');
                    }}
                  >
                    <span>💬</span>
                  </div>
                  <div
                    className="ath-fss-bubble bubble-tg cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                    title="Share via Telegram"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShareSocial('telegram');
                    }}
                  >
                    <span>✈️</span>
                  </div>
                  <div
                    className="ath-fss-bubble bubble-link cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                    title="Copy Referral Link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyLink();
                    }}
                  >
                    <span>🔗</span>
                  </div>
                  <div
                    className="ath-fss-pill cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                    title="Earn Flat ₹100 / Friend"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyLink();
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Earn <strong>₹100</strong> / Friend</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="affiliate-slider-nav-btn prev-btn"
          onClick={handlePrevBanner}
          aria-label="Previous Slide"
          title="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          className="affiliate-slider-nav-btn next-btn"
          onClick={handleNextBanner}
          aria-label="Next Slide"
          title="Next Slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots Pagination */}
        <div className="affiliate-slider-dots">
          {affiliateBanners.map((_, idx) => (
            <button
              key={idx}
              className={`affiliate-slider-dot ${currentBannerIndex === idx ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentBannerIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          2. TOP 6 PERFORMANCE METRIC CARDS (Exact 1:1 with media_1792249574896_1cdfd64f.jpg)
          ========================================================================= */}
      <section className="affiliate-perf-cards-grid">
        {metricCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className={`perf-card-clean ${card.colorClass}`}
            onClick={card.onClick}
          >
            <div className="perf-card-top-row">
              <div className="perf-circle-icon" style={{ backgroundColor: card.iconBg }}>
                {card.icon}
              </div>
              <span className={`perf-badge-clean ${card.badgeClass}`}>
                {card.growth}
              </span>
            </div>

            <div className="perf-card-mid">
              <div className="perf-big-val" style={card.valColor ? { color: card.valColor } : undefined}>
                {card.val}
              </div>
              <div className="perf-card-name">{card.label}</div>
            </div>

            <div className="perf-card-bot-row">
              <span className="perf-card-subtext">{card.subtext}</span>
              <div className="perf-card-chart-slot">{card.chart}</div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* =========================================================================
          3. MAIN AFFILIATE DASHBOARD 3-COLUMN GRID
          Matching media_1792249574896_1cdfd64f.jpg 1:1
          - Col 1: My Affiliate Link & Portfolio Breakdown
          - Col 2: Instant Payout Wallet & Affiliate Leaderboard
          - Col 3: Earnings Analytics & Growth & Live Referrals Stream
          ========================================================================= */}
      <motion.section
        id="affiliate-main-dashboard"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="aff-main-dashboard-grid-3col"
      >
        {/* ==================== COLUMN 1 (LEFT) ==================== */}
        <div className="aff-grid-col aff-col-1">

          {/* CARD 1: My Affiliate Link */}
          <div className="aff-card aff-link-box">
            {/* Header */}
            <div className="aff-card-header">
              <div className="aff-icon-badge badge-blue">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0066ff] fill-none stroke-current stroke-[2.3]">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="aff-card-title">My Affiliate Link</h3>
                <p className="aff-card-sub">Share across social channels to earn ₹100 / student</p>
              </div>
            </div>

            {/* Status Pill */}
            <div className="aff-status-pill-green">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <span>Active • 24/7 Tracking</span>
            </div>

            {/* Link Input + Attached Copy Button */}
            <div className="aff-link-input-group">
              <input
                type="text"
                readOnly
                value={affiliateRefUrl}
                className="aff-link-input-field"
                title="Your unique referral link"
              />
              <button
                type="button"
                onClick={handleCopyLink}
                className={`aff-link-copy-btn ${copiedLink ? 'copied' : ''}`}
              >
                {copiedLink ? (
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
            </div>

            {/* Social Share Row with Text Below */}
            <div className="aff-social-share-wrap">
              <span className="aff-social-share-label">Instant One-Click Share:</span>
              <div className="aff-social-btn-row">
                <div className="aff-social-item">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('whatsapp')}
                    className="aff-sbtn sbtn-wa"
                    title="Share on WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
                    </svg>
                  </button>
                  <span className="aff-sbtn-label">WhatsApp</span>
                </div>

                <div className="aff-social-item">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('telegram')}
                    className="aff-sbtn sbtn-tg"
                    title="Share on Telegram"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                    </svg>
                  </button>
                  <span className="aff-sbtn-label">Telegram</span>
                </div>

                <div className="aff-social-item">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('instagram')}
                    className="aff-sbtn sbtn-ig"
                    title="Share on Instagram"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                  <span className="aff-sbtn-label">Instagram</span>
                </div>

                <div className="aff-social-item">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('linkedin')}
                    className="aff-sbtn sbtn-li"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0-.01-3.06 1.53 1.53 0 0 0 .01 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                  </button>
                  <span className="aff-sbtn-label">LinkedIn</span>
                </div>

                <div className="aff-social-item">
                  <button
                    type="button"
                    onClick={() => handleShareSocial('more')}
                    className="aff-sbtn sbtn-more"
                    title="More Options"
                  >
                    <span className="text-slate-700 font-black text-sm tracking-widest leading-none">•••</span>
                  </button>
                  <span className="aff-sbtn-label">More</span>
                </div>
              </div>
            </div>

            {/* Bottom 2 Action Buttons: Templates & QR / Flyer */}
            <div className="aff-link-extra-actions">
              <button
                type="button"
                className="aff-extra-btn aff-btn-templates"
                onClick={() => {
                  playUiSound('click');
                  setIsMarketingKitOpen(true);
                }}
              >
                <div className="aff-extra-btn-icon icon-purple">
                  <FileText className="w-4 h-4 text-[#7c3aed]" />
                </div>
                <span>Templates</span>
              </button>
              <button
                type="button"
                className="aff-extra-btn aff-btn-qr"
                onClick={() => {
                  playUiSound('click');
                  setIsQrModalOpen(true);
                }}
              >
                <div className="aff-extra-btn-icon icon-rose">
                  <QrCode className="w-4 h-4 text-[#e11d48]" />
                </div>
                <span>QR / Flyer</span>
              </button>
            </div>
          </div>

          {/* CARD 2: Portfolio Breakdown */}
          <div className="aff-card aff-portfolio-card">
            <div className="aff-card-header justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#0066ff]">📊</span>
                <div>
                  <h3 className="aff-card-title">
                    Portfolio <span className="text-[#0066ff]">Breakdown</span>
                  </h3>
                  <p className="aff-card-sub">Status distribution</p>
                </div>
              </div>
            </div>

            {/* Donut Chart & Legend */}
            <div className="aff-donut-grid">
              {/* Donut Chart */}
              <div className="aff-donut-chart-box">
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
                  {totalEarned === 0 ? (
                    <circle cx="100" cy="100" r="72" fill="transparent" stroke="#e2e8f0" strokeWidth="22" strokeDasharray="6 6" />
                  ) : (
                    <g transform="rotate(-90 100 100)">
                      {/* Cyan / Approved */}
                      <circle cx="100" cy="100" r="72" fill="transparent" stroke="#00a8ff" strokeWidth="28" strokeDasharray={`${(availableBalance / totalEarned) * 453} 453`} strokeDashoffset="0" />
                      {/* Amber / Pending */}
                      <circle cx="100" cy="100" r="72" fill="transparent" stroke="#f59e0b" strokeWidth="28" strokeDasharray={`${(pendingBalance / totalEarned) * 453} 453`} strokeDashoffset={`-${(availableBalance / totalEarned) * 453}`} />
                      {/* Emerald / Paid */}
                      <circle cx="100" cy="100" r="72" fill="transparent" stroke="#10b981" strokeWidth="28" strokeDasharray={`${(totalPaid / totalEarned) * 453} 453`} strokeDashoffset={`-${((availableBalance + pendingBalance) / totalEarned) * 453}`} />
                    </g>
                  )}

                  {totalEarned > 0 && availableBalance > 0 && (
                    <text x="146" y="50" fontSize="13" fontWeight="950" fill="#ffffff" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.5))">
                      {Math.round((availableBalance / totalEarned) * 100)}%
                    </text>
                  )}
                  {totalEarned > 0 && pendingBalance > 0 && (
                    <text x="144" y="161" fontSize="13" fontWeight="950" fill="#ffffff" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.5))">
                      {Math.round((pendingBalance / totalEarned) * 100)}%
                    </text>
                  )}
                  {totalEarned > 0 && totalPaid > 0 && (
                    <text x="42" y="68" fontSize="13" fontWeight="950" fill="#ffffff" textAnchor="middle" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.5))">
                      {Math.round((totalPaid / totalEarned) * 100)}%
                    </text>
                  )}
                </svg>
                <div className="aff-donut-center-info">
                  <strong className="aff-donut-center-amount">₹{totalEarned.toLocaleString('en-IN')}</strong>
                  <span className="aff-donut-center-label">Total Earned</span>
                </div>
              </div>

              {/* Legend Rows */}
              <div className="aff-legend-col">
                <div className="aff-legend-row" onClick={() => { playUiSound('tab'); setReferralStatusFilter('Approved'); setIsReferralsModalOpen(true); }}>
                  <div className="aff-leg-icon-circle bg-[#e0f2fe] text-[#00a8ff]">−</div>
                  <span className="aff-leg-name">Available</span>
                  <strong className="aff-leg-val text-[#0066ff]">₹{availableBalance.toLocaleString('en-IN')}</strong>
                  <span className="aff-leg-pct">({totalEarned > 0 ? Math.round((availableBalance / totalEarned) * 100) : 0}%)</span>
                </div>
                <div className="aff-legend-row" onClick={() => { playUiSound('tab'); setReferralStatusFilter('All'); setIsReferralsModalOpen(true); }}>
                  <div className="aff-leg-icon-circle bg-[#fef3c7] text-[#f59e0b]">⏱</div>
                  <span className="aff-leg-name">Pending</span>
                  <strong className="aff-leg-val text-amber-600">₹{pendingBalance.toLocaleString('en-IN')}</strong>
                  <span className="aff-leg-pct">({totalEarned > 0 ? Math.round((pendingBalance / totalEarned) * 100) : 0}%)</span>
                </div>
                <div className="aff-legend-row" onClick={() => { playUiSound('tab'); setReferralStatusFilter('Paid'); setIsReferralsModalOpen(true); }}>
                  <div className="aff-leg-icon-circle bg-[#dcfce7] text-[#10b981]">✓</div>
                  <span className="aff-leg-name">Withdrawn</span>
                  <strong className="aff-leg-val text-emerald-600">₹{totalPaid.toLocaleString('en-IN')}</strong>
                  <span className="aff-leg-pct">({totalEarned > 0 ? Math.round((totalPaid / totalEarned) * 100) : 0}%)</span>
                </div>
                <div className="aff-legend-row" onClick={() => { playUiSound('tab'); setReferralStatusFilter('Reversed'); setIsReferralsModalOpen(true); }}>
                  <div className="aff-leg-icon-circle bg-[#ffe4e6] text-[#f43f5e]">✕</div>
                  <span className="aff-leg-name">Reversed</span>
                  <strong className="aff-leg-val text-rose-600">₹0</strong>
                  <span className="aff-leg-pct">(0%)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ==================== COLUMN 2 (CENTER) ==================== */}
        <div className="aff-grid-col aff-col-2">

          {/* CARD 3: Instant Payout Wallet */}
          <div className="aff-card aff-wallet-card">
            <div className="aff-card-header justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👛</span>
                <div>
                  <h3 className="aff-card-title">
                    Instant <span className="text-[#0066ff]">Payout Wallet</span>
                  </h3>
                  <p className="aff-card-sub">24/7 Request • Payout within 24 Hours</p>
                </div>
              </div>
              <button
                type="button"
                className="aff-pill-view-all"
                onClick={() => {
                  playUiSound('click');
                  setIsWithdrawHistoryOpen(true);
                }}
              >
                History →
              </button>
            </div>

            {/* Inner Dark Navy Hero Container */}
            <div className="aff-wallet-inner-dark-card">
              <div className="aff-wallet-action-row">
                {/* Left: Available to Withdraw */}
                <div className="aff-wallet-withdraw-box-dark">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="aff-avail-tag-cyan">AVAILABLE TO WITHDRAW</span>
                      <div className="aff-avail-sum-white">₹{availableBalance.toLocaleString('en-IN')}</div>
                      <span className="aff-avail-sub-cyan">Payout credited in 24 hours</span>
                    </div>
                    {/* 3D Gold Coins Graphic */}
                    <div className="aff-coins-stack-graphic">
                      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                        <ellipse cx="28" cy="34" rx="14" ry="6" fill="#ca8a04" />
                        <ellipse cx="28" cy="32" rx="14" ry="6" fill="#eab308" />
                        <ellipse cx="28" cy="30" rx="14" ry="6" fill="#facc15" />
                        <ellipse cx="28" cy="24" rx="13" ry="5.5" fill="#ca8a04" />
                        <ellipse cx="28" cy="22" rx="13" ry="5.5" fill="#eab308" />
                        <ellipse cx="28" cy="20" rx="13" ry="5.5" fill="#facc15" />
                        <circle cx="16" cy="26" r="11" fill="url(#goldCoinGrad)" stroke="#fde047" strokeWidth="1.5" />
                        <text x="16" y="30" fontSize="11" fontWeight="900" fill="#78350f" textAnchor="middle">₹</text>
                        <defs>
                          <radialGradient id="goldCoinGrad" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="50%" stopColor="#eab308" />
                            <stop offset="100%" stopColor="#a16207" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      playUiSound('click');
                      setWithdrawStep('form');
                      setIsWithdrawModalOpen(true);
                    }}
                    className="aff-btn-withdraw-action-gold"
                  >
                    <span>Withdraw to UPI / Bank</span>
                    <span className="text-base font-black">→</span>
                  </button>
                </div>

                {/* Right: Virtual Partner Metal Debit Card */}
                <div className="aff-virtual-metal-card">
                  <div className="aff-vmc-top">
                    <div>
                      <span className="aff-vmc-logo">FUTURE.AI</span>
                      <span className="aff-vmc-part">PARTNER</span>
                    </div>
                  </div>
                  <div className="aff-vmc-chip-area">
                    <div className="aff-vmc-emv-chip" />
                    <div className="aff-vmc-gold-circle">₹</div>
                  </div>
                  <div className="aff-vmc-bottom">
                    <span className="aff-vmc-holder">{userName.toUpperCase()}</span>
                    <span className="aff-vmc-val flex items-center gap-1 font-extrabold text-amber-300">
                      <span className="text-xs">♾️</span>
                      <span>VALID: LIFETIME</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
            {/* Quick Claim / Sync Banner for verified payments */}
            <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">
                  Enrolled via Referral? Claim your ₹100 Flat Credit
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  playUiSound('click');
                  setIsClaimModalOpen(true);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 active:scale-95 text-white font-black text-xs shadow-sm transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>⚡ Claim ₹100 Credit</span>
              </button>
            </div>

            {/* 3 Mini Stats */}
            <div className="aff-wallet-stats-3col">
              <div className="aff-ws-box ws-blue">
                <span className="text-lg">📈</span>
                <div>
                  <span className="aff-ws-label">Total Earned</span>
                  <strong className="aff-ws-val text-slate-800">₹{totalEarned.toLocaleString('en-IN')}</strong>
                </div>
              </div>
              <div className="aff-ws-box ws-green">
                <span className="text-lg">💸</span>
                <div>
                  <span className="aff-ws-label">Total Paid</span>
                  <strong className="aff-ws-val text-slate-800">₹{totalPaid.toLocaleString('en-IN')}</strong>
                </div>
              </div>
              <div className="aff-ws-box ws-red">
                <span className="text-lg">⏱️</span>
                <div>
                  <span className="aff-ws-label">Pending</span>
                  <strong className="aff-ws-val text-rose-600">₹{pendingBalance.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>

            {/* Linked Bank / UPI Pill */}
            <div className="aff-linked-account-row">
              <div className="aff-hdfc-badge">
                <span>HDFC</span>
              </div>
              <div className="flex-1 min-w-0">
                <strong className="aff-linked-main truncate block">Linked: {bankName} (••••{bankAccNumber.slice(-4)})</strong>
                <span className="aff-linked-sub truncate block">{upiId}</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* CARD 4: Affiliate Leaderboard */}
          <div className="aff-card aff-leaderboard-box">
            {/* Header */}
            <div className="aff-card-header justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <h3 className="aff-card-title">
                    Affiliate <span className="text-[#0066ff]">Leaderboard</span>
                  </h3>
                  <p className="aff-card-sub">Top earners in India</p>
                </div>
              </div>
              <button
                type="button"
                className="aff-pill-view-all"
                onClick={() => {
                  playUiSound('click');
                  setIsTopPartnersModalOpen(true);
                }}
              >
                View All →
              </button>
            </div>

            {/* Time Tabs */}
            <div className="aff-lb-tabs-capsule">
              <button
                type="button"
                className={`aff-lb-tab ${partnerLeaderboardTab === 'week' ? 'active' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setPartnerLeaderboardTab('week');
                }}
              >
                This Week
              </button>
              <button
                type="button"
                className={`aff-lb-tab ${partnerLeaderboardTab === 'month' ? 'active' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setPartnerLeaderboardTab('month');
                }}
              >
                This Month
              </button>
              <button
                type="button"
                className={`aff-lb-tab ${partnerLeaderboardTab === 'all' ? 'active' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setPartnerLeaderboardTab('all');
                }}
              >
                All Time
              </button>
            </div>

            {/* Top 5 list / Season Empty State */}
            <div className="aff-lb-items-list">
              <div className="py-6 px-3 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-2 text-xl shadow-inner">
                  👑
                </div>
                <strong className="text-xs font-bold text-slate-800 block">Season Leaderboard Open</strong>
                <p className="text-[11px] text-slate-500 mt-1 max-w-[220px] mx-auto leading-relaxed">
                  Be the first to claim Rank #1! Share your referral link and earn Flat ₹100 per student enrollment.
                </p>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-[11px] cursor-pointer shadow-sm transition-all"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedLink ? 'Copied Link!' : 'Copy Link to Rank #1'}</span>
                </button>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="aff-lb-top5-banner">
              <span className="text-xl shrink-0">🚀</span>
              <div className="flex-1 text-[11px] font-semibold text-slate-800 leading-tight">
                {paidEnrollments > 0 ? (
                  <>You have <strong className="text-[#059669] font-black">{paidEnrollments} verified enrollments</strong> this month!</>
                ) : (
                  <>Start inviting students to claim your <strong className="text-[#0066ff] font-black">#1 spot</strong> on the leaderboard!</>
                )}
              </div>
              <span className="text-xl shrink-0">📈</span>
            </div>
          </div>

        </div>

        {/* ==================== COLUMN 3 (RIGHT) ==================== */}
        <div className="aff-grid-col aff-col-3">

          {/* CARD 5: Earnings Analytics & Growth */}
          <div className="aff-card aff-analytics-card">
            {/* Header */}
            <div className="aff-card-header justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#0066ff]">📊</span>
                <div>
                  <h3 className="aff-card-title">
                    Earnings Analytics <span className="text-[#0066ff]">& Growth</span>
                  </h3>
                  <p className="aff-card-sub">Daily commission and student conversion</p>
                </div>
              </div>
              {/* Range Filters */}
              <div className="aff-range-tabs-capsule">
                {(['7D', '30D', '3M', 'ALL'] as const).map((rng) => (
                  <button
                    key={rng}
                    type="button"
                    className={`aff-range-pill ${rng === '7D' ? 'active' : ''}`}
                    onClick={() => {
                      playUiSound('tab');
                      showToast(`Filtered data by ${rng} range`, 'info');
                    }}
                  >
                    {rng}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend Row */}
            <div className="aff-chart-legend-row">
              <span className="aff-cleg-item">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066ff]" />
                <span>Clicks</span>
              </span>
              <span className="aff-cleg-item">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span>Signups</span>
              </span>
              <span className="aff-cleg-item">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]" />
                <span>Enrollments</span>
              </span>
              <span className="aff-cleg-item">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <span>Commission (₹)</span>
              </span>
            </div>

            {/* Dual Axis Combo Chart (Bar + Line SVG) */}
            <div className="aff-analytics-chart-container">
              {/* Y Axis Left (Count) */}
              <div className="aff-y-axis-left">
                <span className="aff-axis-title">Count</span>
                <div className="aff-y-ticks">
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>
              </div>

              {/* Center SVG Chart Area */}
              <div className="aff-chart-svg-area">
                <svg viewBox="0 0 380 180" className="w-full h-[180px]" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0066ff" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#6ee7b7" />
                    </linearGradient>
                    <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Gridlines */}
                  <line x1="0" y1="20" x2="380" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="52" x2="380" y2="52" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="84" x2="380" y2="84" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="116" x2="380" y2="116" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="148" x2="380" y2="148" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="0" y1="170" x2="380" y2="170" stroke="#e2e8f0" strokeWidth="1" />

                  {/* Sep 6 (x = 30) */}
                  <rect x="20" y="130" width="6" height="40" rx="1.5" fill="url(#barBlue)" />
                  <rect x="28" y="145" width="6" height="25" rx="1.5" fill="url(#barGreen)" />
                  <rect x="36" y="158" width="6" height="12" rx="1.5" fill="url(#barPurple)" />

                  {/* Sep 12 (x = 92) */}
                  <rect x="82" y="115" width="6" height="55" rx="1.5" fill="url(#barBlue)" />
                  <rect x="90" y="138" width="6" height="32" rx="1.5" fill="url(#barGreen)" />
                  <rect x="98" y="152" width="6" height="18" rx="1.5" fill="url(#barPurple)" />

                  {/* Sep 18 (x = 154) */}
                  <rect x="144" y="100" width="6" height="70" rx="1.5" fill="url(#barBlue)" />
                  <rect x="152" y="125" width="6" height="45" rx="1.5" fill="url(#barGreen)" />
                  <rect x="160" y="145" width="6" height="25" rx="1.5" fill="url(#barPurple)" />

                  {/* Sep 24 (x = 216) */}
                  <rect x="206" y="80" width="6" height="90" rx="1.5" fill="url(#barBlue)" />
                  <rect x="214" y="110" width="6" height="60" rx="1.5" fill="url(#barGreen)" />
                  <rect x="222" y="135" width="6" height="35" rx="1.5" fill="url(#barPurple)" />

                  {/* Sep 30 (x = 278) */}
                  <rect x="268" y="60" width="6" height="110" rx="1.5" fill="url(#barBlue)" />
                  <rect x="276" y="95" width="6" height="75" rx="1.5" fill="url(#barGreen)" />
                  <rect x="284" y="122" width="6" height="48" rx="1.5" fill="url(#barPurple)" />

                  {/* Oct 6 (x = 340) */}
                  <rect x="330" y="40" width="6" height="130" rx="1.5" fill="url(#barBlue)" />
                  <rect x="338" y="80" width="6" height="90" rx="1.5" fill="url(#barGreen)" />
                  <rect x="346" y="110" width="6" height="60" rx="1.5" fill="url(#barPurple)" />

                  {/* Commission Line Series (Orange) */}
                  <polyline
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="30,145 92,130 154,110 216,85 278,60 340,32"
                  />

                  {/* Points on Line */}
                  <circle cx="30" cy="145" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="92" cy="130" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="154" cy="110" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="216" cy="85" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="278" cy="60" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="340" cy="32" r="3.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                </svg>

                {/* Floating Tooltip at Sep 24 */}
                <div className="aff-chart-active-tooltip" style={{ left: '52%', top: '15%' }}>
                  <div className="text-[9.5px] font-semibold text-slate-400">Sep 24 2026</div>
                  <div className="text-[11px] font-black text-amber-400 leading-tight">₹750 commission</div>
                  <div className="text-[9.5px] font-bold text-purple-300 leading-tight">6 enrollments</div>
                  <div className="aff-tooltip-arrow" />
                </div>
              </div>

              {/* Y Axis Right (Commission) */}
              <div className="aff-y-axis-right">
                <span className="aff-axis-title">Commission (₹)</span>
                <div className="aff-y-ticks">
                  <span>4,000</span>
                  <span>3,000</span>
                  <span>2,000</span>
                  <span>1,000</span>
                  <span>0</span>
                </div>
              </div>
            </div>

            {/* X-Axis Labels */}
            <div className="aff-x-axis-row">
              <span>Sep 6</span>
              <span>Sep 12</span>
              <span>Sep 18</span>
              <span>Sep 24</span>
              <span>Sep 30</span>
              <span>Oct 6</span>
            </div>
          </div>

          {/* CARD 6: Live Referrals Stream */}
          <div className="aff-card aff-stream-full-card">
            {/* Header */}
            <div className="aff-card-header justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl text-[#0066ff]">👥</span>
                <div>
                  <h3 className="aff-card-title">
                    Live Referrals <span className="text-[#0066ff]">Stream</span>
                  </h3>
                  <p className="aff-card-sub">Real-time enrollment tracking</p>
                </div>
              </div>
              <button
                type="button"
                className="aff-pill-view-all"
                onClick={() => {
                  playUiSound('click');
                  setReferralStatusFilter('All');
                  setIsReferralsModalOpen(true);
                }}
              >
                View All ({referralsList.length}) →
              </button>
            </div>

            {/* Filter Pills */}
            <div className="aff-stream-tabs-row">
              <button
                type="button"
                className={`aff-stpill ${referralStatusFilter === 'All' ? 'active-blue' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setReferralStatusFilter('All');
                }}
              >
                <Users className="w-3.5 h-3.5 inline mr-1" />
                <span>All ({referralsList.length})</span>
              </button>
              <button
                type="button"
                className={`aff-stpill st-green ${referralStatusFilter === 'Paid' ? 'active-green' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setReferralStatusFilter('Paid');
                }}
              >
                <span>✔ Paid ({referralsList.filter((r: ReferralItem) => r.status === 'Paid').length})</span>
              </button>
              <button
                type="button"
                className={`aff-stpill st-blue ${referralStatusFilter === 'Approved' ? 'active-blue-light' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setReferralStatusFilter('Approved');
                }}
              >
                <span>⏱ Approved ({referralsList.filter((r: ReferralItem) => r.status === 'Approved').length})</span>
              </button>
              <button
                type="button"
                className={`aff-stpill st-purple ${referralStatusFilter === 'Trial Started' ? 'active-purple' : ''}`}
                onClick={() => {
                  playUiSound('tab');
                  setReferralStatusFilter('Trial Started');
                }}
              >
                <span>👤 Trial Started ({referralsList.filter((r: ReferralItem) => r.status === 'Trial Started').length})</span>
              </button>
            </div>

            {/* Table or Clean Empty State */}
            <div className="aff-table-responsive">
              {filteredReferrals.length === 0 ? (
                <div className="py-12 px-4 text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mb-3 shadow-inner">
                    <Users className="w-6 h-6" />
                  </div>
                  <strong className="text-sm font-bold text-slate-800 block mb-1">No Referrals Recorded Yet</strong>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4 leading-relaxed">
                    Share your unique referral link to earn Flat ₹100 cash commission for every student who enrolls!
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-md hover:bg-sky-500 transition-all cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Copied Link!' : 'Copy Referral Link'}</span>
                  </button>
                </div>
              ) : (
                <table className="aff-data-table">
                  <thead>
                    <tr>
                      <th style={{ width: '30px' }}>#</th>
                      <th>Student</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReferrals.slice(0, 5).map((row: ReferralItem, idx: number) => (
                      <tr
                        key={row.id}
                        className="cursor-pointer hover:bg-sky-50/50 transition-colors"
                        onClick={() => setSelectedReferralDetail(row)}
                      >
                        <td className="font-mono text-slate-400 font-semibold">{idx + 1}</td>
                        <td>
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                              {row.name.charAt(0)}
                            </div>
                            <div>
                              <strong className="aff-table-stud-name">{row.name}</strong>
                              <span className="aff-table-stud-course">{row.course}</span>
                            </div>
                          </div>
                        </td>
                        <td className="text-slate-500 font-semibold text-xs whitespace-nowrap">{row.date}</td>
                        <td>
                          <span className={`aff-table-status-pill st-${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {row.status === 'Paid' && <Check className="w-3 h-3 inline mr-1 text-emerald-600 stroke-[3]" />}
                            {row.status === 'Registered' && <Users className="w-3 h-3 inline mr-1 text-blue-600" />}
                            {row.status === 'Trial Started' && <span className="inline mr-1 text-purple-600">▶</span>}
                            <span>{row.status}</span>
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <strong className={row.commission > 0 ? "text-[#059669] font-black text-xs sm:text-sm" : "text-slate-400 font-medium"}>
                            {row.commission > 0 ? `+₹${row.commission}` : '—'}
                          </strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          MODAL 1: INSTANT WITHDRAWAL MODAL
          ========================================================================= */}
      {isWithdrawModalOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsWithdrawModalOpen(false)}>
          <div className="affiliate-modal-box max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Withdraw Earnings</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsWithdrawModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {withdrawStep === 'form' && (
              <div className="modal-body-content">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-3">
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider">Available for Payout</span>
                    <strong className="text-xl font-black text-emerald-600">₹{availableBalance.toLocaleString('en-IN')}</strong>
                  </div>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">24/7 Payout (Within 24h)</span>
                </div>

                {availableBalance < 100 && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 mb-3 text-xs text-amber-900 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Minimum Balance: ₹100</strong>
                      <span>You need at least ₹100 in your wallet to withdraw. Share your referral link with students and friends to earn Flat ₹100 per enrollment!</span>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Enter Amount to Withdraw</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-black text-base">₹</span>
                    <input
                      type="number"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="100"
                      className="w-full pl-8 pr-16 py-2.5 rounded-xl border border-slate-300 font-black text-base focus:border-sky-500 focus:outline-none"
                    />
                    <button
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-sky-100 hover:bg-sky-200 text-sky-700 font-black text-xs cursor-pointer"
                      onClick={() => setWithdrawAmount(availableBalance.toString())}
                    >
                      MAX
                    </button>
                  </div>

                  {/* Quick Pick Chips */}
                  <div className="flex gap-2 mt-2">
                    {[100, 500, 1000, 2500].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-sky-50 text-[11px] font-bold text-slate-700 cursor-pointer"
                        onClick={() => setWithdrawAmount(amt.toString())}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1.5 block">Minimum withdrawal: ₹100 • Zero processing fees</span>
                </div>

                <div className="mt-4">
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">Select Payout Channel</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        payoutMethod === 'upi' ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-sm' : 'border-slate-200 text-slate-600'
                      }`}
                      onClick={() => setPayoutMethod('upi')}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>UPI ID</span>
                    </button>
                    <button
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        payoutMethod === 'bank' ? 'border-sky-500 bg-sky-50/70 text-sky-700 shadow-sm' : 'border-slate-200 text-slate-600'
                      }`}
                      onClick={() => setPayoutMethod('bank')}
                    >
                      <Building className="w-4 h-4" />
                      <span>Bank Account</span>
                    </button>
                  </div>
                </div>

                {payoutMethod === 'upi' ? (
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-slate-600">UPI Handle</span>
                      {isUpiVerified ? (
                        <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">Verified ✓</span>
                      ) : (
                        <button
                          className="text-[10px] font-bold text-sky-600 cursor-pointer"
                          onClick={() => {
                            setIsUpiVerified(true);
                            showToast('UPI Handle verified successfully!', 'success');
                          }}
                        >
                          Verify Handle
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => {
                        setUpiId(e.target.value);
                        setIsUpiVerified(false);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">Supports Google Pay, PhonePe, Paytm, BHIM</span>
                  </div>
                ) : (
                  <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block">Account Holder</span>
                      <strong className="text-xs text-slate-800">{bankHolder}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block">Bank &amp; Masked Account</span>
                      <strong className="text-xs text-slate-800">{bankName} (XXXX XXXX {bankAccNumber.slice(-4)})</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block">IFSC Code</span>
                      <strong className="text-xs text-slate-800">{bankIfsc}</strong>
                    </div>
                  </div>
                )}

                <button
                  disabled={availableBalance < 500}
                  className={`w-full mt-5 py-3 rounded-xl font-black text-sm shadow-lg transition-all ${
                    availableBalance >= 100
                      ? 'bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-sky-500/25 cursor-pointer active:scale-95'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
                  onClick={handleProcessWithdrawal}
                >
                  {availableBalance >= 100 ? 'Proceed to Confirmation →' : 'Minimum ₹100 Balance Required'}
                </button>
              </div>
            )}

            {withdrawStep === 'confirm' && (
              <div className="modal-body-content">
                <div className="text-center py-2">
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-slate-900">Confirm Instant Transfer</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Please review the payout details before final transfer.</p>
                </div>

                <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Payout Amount:</span>
                    <strong className="text-emerald-600 text-base font-black">₹{parseFloat(withdrawAmount).toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Payout Channel:</span>
                    <strong className="text-slate-800 uppercase font-black">{payoutMethod}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Destination:</span>
                    <strong className="text-slate-800 font-mono">
                      {payoutMethod === 'upi' ? upiId : `${bankName} (••••${bankAccNumber.slice(-4)})`}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                    <span className="text-slate-500 font-medium">Estimated Time:</span>
                    <strong className="text-sky-600 font-bold">Within 24 Hours (24/7 Support)</strong>
                  </div>
                </div>

                <div className="flex gap-2 mt-5">
                  <button
                    className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                    onClick={() => setWithdrawStep('form')}
                  >
                    Back to Edit
                  </button>
                  <button
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs shadow-md shadow-emerald-500/20 cursor-pointer active:scale-95"
                    onClick={handleProcessWithdrawal}
                  >
                    Confirm &amp; Transfer Now
                  </button>
                </div>
              </div>
            )}

            {withdrawStep === 'success' && (
              <div className="modal-body-content text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-slate-900">Withdrawal Initiated!</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  ₹{parseFloat(withdrawAmount).toLocaleString('en-IN')} is being transferred to{' '}
                  <span className="font-mono font-bold text-slate-800">{payoutMethod === 'upi' ? upiId : bankName}</span>.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-800 font-semibold">
                  Transaction ID: WTH-{Math.floor(100000 + Math.random() * 900000)} • Status: Processing 🟡
                </div>
                <button
                  className="w-full mt-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs cursor-pointer"
                  onClick={() => {
                    setIsWithdrawModalOpen(false);
                    setIsWithdrawHistoryOpen(true);
                  }}
                >
                  View Payout History →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 2: WITHDRAWAL HISTORY
          ========================================================================= */}
      {isWithdrawHistoryOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsWithdrawHistoryOpen(false)}>
          <div className="affiliate-modal-box max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Withdrawal &amp; Payout History</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsWithdrawHistoryOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content">
              <div className="wth-modal-head">
                <span className="col-date">Date</span>
                <span className="col-comm">Amount</span>
                <span className="col-name">Channel / Destination</span>
                <span className="col-status">Status</span>
                <span className="col-hash">Ref ID</span>
              </div>

              <div className="ref-table-body max-h-72 overflow-y-auto">
                {withdrawalHistory.length === 0 ? (
                  <div className="py-10 text-center text-slate-400">
                    <Clock className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-700">No withdrawal requests yet</p>
                    <p className="text-[11px] text-slate-400 mt-1">Once you earn ₹500 or more, request an instant payout here.</p>
                  </div>
                ) : (
                  withdrawalHistory.map((item: WithdrawalItem) => (
                    <div key={item.id} className="wth-modal-row">
                      <span className="col-date text-xs text-slate-500">{item.date}</span>
                      <span className="col-comm font-black text-slate-900">₹{item.amount.toLocaleString('en-IN')}</span>
                      <span className="col-name text-xs text-slate-700 font-medium">
                        {item.method}: {item.destination}
                      </span>
                      <span className="col-status">
                        <span
                          className={`status-pill ${
                            item.status === 'Paid'
                              ? 'pill-approved'
                              : item.status === 'Processing'
                              ? 'pill-trial-started'
                              : 'pill-reversed'
                          }`}
                        >
                          {item.status === 'Paid' && '🟢 Paid'}
                          {item.status === 'Processing' && '🟡 Processing'}
                          {item.status === 'Failed' && '🔴 Failed'}
                        </span>
                      </span>
                      <span className="col-hash font-mono text-[11px] text-slate-400">{item.txId}</span>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Total payouts recorded: {withdrawalHistory.length}</span>
                <button
                  className="font-bold text-sky-600 hover:text-sky-700 cursor-pointer"
                  onClick={() => {
                    setIsWithdrawHistoryOpen(false);
                    setWithdrawStep('form');
                    setIsWithdrawModalOpen(true);
                  }}
                >
                  + New Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 3: COMMISSION / REFERRALS LIST
          ========================================================================= */}
      {isReferralsModalOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsReferralsModalOpen(false)}>
          <div className="affiliate-modal-box max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Referrals &amp; Commission History</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsReferralsModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={referralSearch}
                    onChange={(e) => setReferralSearch(e.target.value)}
                    placeholder="Search by student name, ID or course..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                  {(['All', 'Paid', 'Approved', 'Registered', 'Trial Started', 'Reversed'] as const).map((st) => (
                    <button
                      key={st}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap cursor-pointer transition-all ${
                        referralStatusFilter === st
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      onClick={() => setReferralStatusFilter(st)}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="ref-full-modal-head">
                <span className="col-name">Student</span>
                <span className="col-name">Course</span>
                <span className="col-date">Date</span>
                <span className="col-status">Status</span>
                <span className="col-comm">Commission</span>
                <span className="col-hash">Action</span>
              </div>

              <div className="ref-table-body max-h-72 overflow-y-auto">
                {filteredReferrals.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-400">No referrals found matching the filter.</div>
                ) : (
                  filteredReferrals.map((item: ReferralItem) => (
                    <div key={item.id} className="ref-full-modal-row">
                      <span className="col-name font-bold text-slate-800 text-xs">
                        {item.name}
                        <span className="block text-[10px] text-slate-400 font-mono">{item.referralId}</span>
                      </span>
                      <span className="col-name text-xs text-slate-600">{item.course}</span>
                      <span className="col-date text-xs text-slate-400">{item.date}</span>
                      <span className="col-status">
                        <span className={`status-pill pill-${item.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item.status}
                        </span>
                      </span>
                      <span className="col-comm font-black text-slate-900">
                        {item.commission > 0 ? `₹${item.commission}` : '—'}
                      </span>
                      <span className="col-hash">
                        <button
                          className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 hover:bg-sky-100 text-[10px] font-bold cursor-pointer"
                          onClick={() => setSelectedReferralDetail(item)}
                        >
                          View
                        </button>
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 4: COMMISSION DETAIL POPUP
          ========================================================================= */}
      {selectedReferralDetail && (
        <div className="affiliate-modal-backdrop" onClick={() => setSelectedReferralDetail(null)}>
          <div className="affiliate-modal-box max-w-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Commission Details</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedReferralDetail(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content flex flex-col gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Referral Student:</span>
                  <strong className="text-slate-800 font-black">{selectedReferralDetail.name}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Referral ID:</span>
                  <span className="font-mono text-slate-700">{selectedReferralDetail.referralId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Enrolled Course:</span>
                  <span className="font-bold text-slate-700 text-right">{selectedReferralDetail.course}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1.5">
                  <span className="text-slate-400 font-medium">Enrollment Fee:</span>
                  <strong className="text-slate-800">₹{selectedReferralDetail.amount || 999}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Affiliate Commission:</span>
                  <strong className="text-emerald-600 text-sm font-black">
                    ₹{selectedReferralDetail.commission || 100}
                  </strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Status:</span>
                  <span className={`status-pill pill-${selectedReferralDetail.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {selectedReferralDetail.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Generated Date:</span>
                  <span className="text-slate-700">{selectedReferralDetail.date}</span>
                </div>
                {selectedReferralDetail.approvedDate && (
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Approved Date:</span>
                    <span className="text-emerald-700 font-semibold">{selectedReferralDetail.approvedDate}</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed bg-sky-50/50 p-2.5 rounded-lg border border-sky-100">
                Rule: Flat ₹100 per successful enrollment for all affiliate partners. Eligible commissions are credited directly to your Available Balance.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 5: ENLARGED QR CODE & DOWNLOAD
          ========================================================================= */}
      {isQrModalOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsQrModalOpen(false)}>
          <div className="affiliate-modal-box max-w-sm text-center" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Affiliate QR Code</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsQrModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content py-4">
              <div className="w-48 h-48 mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-40 h-40">
                  <rect x="5" y="5" width="30" height="30" fill="none" stroke="#0f172a" strokeWidth="6" rx="4" />
                  <rect x="15" y="15" width="10" height="10" fill="#0f172a" />
                  <rect x="65" y="5" width="30" height="30" fill="none" stroke="#0f172a" strokeWidth="6" rx="4" />
                  <rect x="75" y="15" width="10" height="10" fill="#0f172a" />
                  <rect x="5" y="65" width="30" height="30" fill="none" stroke="#0f172a" strokeWidth="6" rx="4" />
                  <rect x="15" y="75" width="10" height="10" fill="#0f172a" />
                  <rect x="45" y="10" width="8" height="8" fill="#0284c7" />
                  <rect x="45" y="25" width="8" height="8" fill="#0f172a" />
                  <rect x="10" y="45" width="8" height="8" fill="#0f172a" />
                  <rect x="25" y="45" width="8" height="8" fill="#0284c7" />
                  <rect x="45" y="45" width="10" height="10" fill="#2563eb" rx="2" />
                  <rect x="65" y="45" width="8" height="8" fill="#0f172a" />
                  <rect x="80" y="45" width="8" height="8" fill="#0284c7" />
                  <rect x="45" y="65" width="8" height="8" fill="#0f172a" />
                  <rect x="45" y="80" width="8" height="8" fill="#0284c7" />
                  <rect x="65" y="65" width="8" height="8" fill="#0f172a" />
                  <rect x="80" y="80" width="12" height="12" fill="#0f172a" />
                </svg>
              </div>

              <strong className="text-sm font-black text-slate-800 block mt-3">Scan to Join FUTURE IT INDUSTRY</strong>
              <span className="text-xs text-slate-400 block mt-0.5 font-mono">{affiliateRefUrl}</span>

              <div className="flex gap-2 mt-5">
                <button
                  className="flex-1 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                  onClick={handleCopyLink}
                >
                  Copy Link
                </button>
                <button
                  className="flex-1 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  onClick={() => {
                    showToast('QR code ready for sharing and offline flyers!', 'success');
                  }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download QR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 6: MARKETING KIT
          ========================================================================= */}
      {isMarketingKitOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsMarketingKitOpen(false)}>
          <div className="affiliate-modal-box max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-600" />
                <h3 className="modal-title">Affiliate Partner Marketing Kit</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsMarketingKitOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content">
              <p className="text-xs text-slate-500 mb-3">
                High-converting pre-written templates, creatives, and banners designed to maximize your referral conversions.
              </p>

              <div className="flex flex-col gap-3">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <strong className="text-xs font-black text-slate-800">WhatsApp / Telegram Viral Message</strong>
                    <button
                      className="px-2.5 py-1 rounded-md bg-emerald-100 hover:bg-emerald-200 text-emerald-800 text-[11px] font-bold cursor-pointer"
                      onClick={() => {
                        const msg = `🚀 Hey dost! If you want to start coding & AI in 2026, check out FUTURE IT INDUSTRY. 100% placement support (6-15 LPA). Use my invite link to join for just ₹999 or try free: ${affiliateRefUrl}`;
                        if (navigator.clipboard) navigator.clipboard.writeText(msg);
                        showToast('WhatsApp message copied to clipboard!', 'success');
                      }}
                    >
                      Copy Template
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-mono bg-white p-2.5 rounded-lg border border-slate-100">
                    "🚀 Hey dost! If you want to start coding &amp; AI in 2026, check out FUTURE IT INDUSTRY. 100% placement support (6-15 LPA). Use my invite link to join for just ₹999 or try free: {affiliateRefUrl}"
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <strong className="text-xs font-black text-slate-800">LinkedIn Career Post</strong>
                    <button
                      className="px-2.5 py-1 rounded-md bg-sky-100 hover:bg-sky-200 text-sky-800 text-[11px] font-bold cursor-pointer"
                      onClick={() => {
                        const msg = `Excited to partner with FUTURE IT INDUSTRY! They offer modern hands-on learning for Python, AI, and Data Analytics with 150+ hiring partners and a 6-15 LPA guarantee track. Explore the free lab: ${affiliateRefUrl}`;
                        if (navigator.clipboard) navigator.clipboard.writeText(msg);
                        showToast('LinkedIn message copied to clipboard!', 'success');
                      }}
                    >
                      Copy Template
                    </button>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-mono bg-white p-2.5 rounded-lg border border-slate-100">
                    "Excited to partner with FUTURE IT INDUSTRY! They offer modern hands-on learning for Python, AI, and Data Analytics with 150+ hiring partners and a 6-15 LPA guarantee track. Explore the free lab: {affiliateRefUrl}"
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex justify-end">
                <button
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
                  onClick={() => setIsMarketingKitOpen(false)}
                >
                  Close Marketing Kit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL 7: TOP PARTNERS FULL LEADERBOARD
          ========================================================================= */}
      {isTopPartnersModalOpen && (
        <div className="affiliate-modal-backdrop" onClick={() => setIsTopPartnersModalOpen(false)}>
          <div className="affiliate-modal-box max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-row">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="modal-title">All-India Top Affiliate Leaders</h3>
              </div>
              <button className="modal-close-btn" onClick={() => setIsTopPartnersModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-body-content">
              <p className="text-xs text-slate-500 mb-3">
                Top affiliate earners on FUTURE IT INDUSTRY. Top 3 each month receive a bonus ₹10,000 cash grant!
              </p>

              <div className="leaderboard-list max-h-80 overflow-y-auto">
                <div className="py-10 px-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto mb-2.5 text-2xl shadow-inner">
                    🏆
                  </div>
                  <strong className="text-sm font-bold text-slate-800 block">New Monthly Season Active</strong>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto leading-relaxed">
                    Referral rankings update dynamically as your invited students enroll in Python &amp; Data Science tracks. Top 3 partners win a bonus ₹10,000 cash grant!
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs cursor-pointer shadow-md transition-all"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Copied Link!' : 'Copy Referral Link & Climb Leaderboard'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};
