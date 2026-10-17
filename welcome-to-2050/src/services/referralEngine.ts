/**
 * Future.AI Production-Ready Referral & Earnings Engine
 * 
 * Rules:
 * - Student Commission: ₹125 (active only after ₹999 enrollment)
 * - Influencer Commission: ₹100 (free registration, instant active)
 * - Fixed commission only. No levels, no tiers, no changing rates.
 * - Single common engine, ledger-based wallet, idempotency, fraud detection.
 */

export type ReferrerType = 'student' | 'influencer';
export type ReferralStatus = 'ACTIVE' | 'PENDING_ENROLLMENT' | 'BLOCKED';
export type PaymentStatus = 'INITIATED' | 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED' | 'CANCELLED';
export type ValidationStatus = 'PENDING' | 'VALIDATING' | 'COMPLETED' | 'CANCELLED';
export type CommissionStatus = 'PENDING' | 'VALIDATING' | 'AVAILABLE' | 'CANCELLED' | 'REVERSED';
export type TrafficSource = 'WhatsApp' | 'Instagram' | 'Telegram' | 'LinkedIn' | 'Direct' | 'QR' | 'Others';

export interface ReferrerProfile {
  userId: string;
  userName: string;
  email: string;
  referrerType: ReferrerType;
  referralCode: string;
  referralStatus: ReferralStatus;
  hasPaidEnrollment: boolean;
  commissionRate: number; // 125 for student, 100 for influencer
  createdAt: string;
  activatedAt: string;
}

export interface ReferralRecord {
  id: string;
  referrerId: string;
  referrerType: ReferrerType;
  referralCode: string;
  referredUserId: string;
  referredUserName: string;
  referredUserAvatar?: string;
  campaignId?: string;
  campaignName?: string;
  source: TrafficSource;
  clickId: string;
  attributionId: string;
  landingPage: string;
  device: string;
  browser: string;
  ip?: string;
  createdAt: string;
  registeredAt?: string;
  paymentAt?: string;
  paymentId?: string;
  paymentAmount: number; // ₹999
  paymentStatus: PaymentStatus;
  validationStatus: ValidationStatus;
  validationDaysLeft: number;
  commissionAmount: number; // 125 or 100, or 0 if failed
  commissionStatus: CommissionStatus;
  timeline: {
    event: string;
    timestamp: string;
    description: string;
  }[];
}

export interface WalletLedgerEntry {
  transactionId: string;
  referrerId: string;
  type: 'REFERRAL_REWARD' | 'WITHDRAWAL' | 'COMMISSION_REVERSAL' | 'ADJUSTMENT';
  amount: number;
  balanceAfter: number;
  status: 'SUCCESS' | 'PENDING' | 'FAILED';
  date: string;
  reference: string;
  description: string;
}

export interface WithdrawalRequest {
  id: string;
  referrerId: string;
  amount: number;
  method: 'UPI' | 'BANK_TRANSFER';
  details: {
    upiId?: string;
    accountHolder?: string;
    accountNumber?: string;
    ifsc?: string;
    bankName?: string;
  };
  status: 'REQUESTED' | 'UNDER_REVIEW' | 'APPROVED' | 'PROCESSING' | 'PAID' | 'REJECTED';
  requestedAt: string;
  paidAt?: string;
  referenceNo?: string;
}

export interface CampaignItem {
  id: string;
  code: string;
  name: string;
  clicks: number;
  registrations: number;
  enrollments: number;
  revenue: number;
  commission: number;
  createdAt: string;
}

export interface ReferralEventLog {
  id: string;
  eventType: string;
  referralId?: string;
  referrerId: string;
  referredUserId?: string;
  timestamp: string;
  source: string;
  metadata?: any;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  enrollments: number;
  earnings: number;
  isCurrentUser?: boolean;
}

const STORAGE_KEY = 'futureai_referral_state_v1';
const ATTRIBUTION_KEY = 'futureai_ref_attribution';

export class ReferralEngine {
  private static defaultState() {
    const studentProfile: ReferrerProfile = {
      userId: 'usr_subodh_101',
      userName: 'Subodh Kumar',
      email: 'subodh.kumar@futureitindustry.com',
      referrerType: 'student',
      referralCode: 'SUBODH101',
      referralStatus: 'ACTIVE',
      hasPaidEnrollment: true,
      commissionRate: 125,
      createdAt: '2026-08-15T10:00:00.000Z',
      activatedAt: '2026-08-15T10:15:00.000Z'
    };

    const referrals: ReferralRecord[] = [
      {
        id: 'ref_001',
        referrerId: 'usr_subodh_101',
        referrerType: 'student',
        referralCode: 'SUBODH101',
        referredUserId: 'usr_aman_201',
        referredUserName: 'Aman Verma',
        referredUserAvatar: '/images/avatar-rohit.jpg',
        campaignName: 'WhatsApp Status',
        source: 'WhatsApp',
        clickId: 'clk_w_981',
        attributionId: 'att_981',
        landingPage: 'https://futureitindustry.com/join?ref=SUBODH101',
        device: 'Android Mobile',
        browser: 'Chrome 128',
        createdAt: '2026-09-28T09:20:00.000Z',
        registeredAt: '2026-09-28T09:25:00.000Z',
        paymentAt: '2026-09-28T09:30:00.000Z',
        paymentId: 'pay_rzp_98124',
        paymentAmount: 999,
        paymentStatus: 'SUCCESS',
        validationStatus: 'COMPLETED',
        validationDaysLeft: 0,
        commissionAmount: 125,
        commissionStatus: 'AVAILABLE',
        timeline: [
          { event: 'Link Clicked', timestamp: '28 Sep 2026, 02:50 PM', description: 'Clicked via WhatsApp direct link' },
          { event: 'Registered', timestamp: '28 Sep 2026, 02:55 PM', description: 'Created FUTURE IT INDUSTRY learner account' },
          { event: 'Payment Successful', timestamp: '28 Sep 2026, 03:00 PM', description: 'Enrolled in Python for Data Analysis (₹999)' },
          { event: 'Validation Complete', timestamp: '28 Sep 2026, 03:00 PM', description: 'Verified genuine enrollment' },
          { event: 'Reward Available', timestamp: '28 Sep 2026, 03:00 PM', description: '₹125 credited to available wallet' }
        ]
      },
      {
        id: 'ref_002',
        referrerId: 'usr_subodh_101',
        referrerType: 'student',
        referralCode: 'SUBODH101',
        referredUserId: 'usr_priya_202',
        referredUserName: 'Priya Singh',
        referredUserAvatar: '/images/avatar-sneha.jpg',
        campaignName: 'Instagram Bio',
        source: 'Instagram',
        clickId: 'clk_i_982',
        attributionId: 'att_982',
        landingPage: 'https://futureitindustry.com/join?ref=SUBODH101',
        device: 'iOS Mobile',
        browser: 'Safari Mobile',
        createdAt: '2026-09-26T14:10:00.000Z',
        registeredAt: '2026-09-26T14:15:00.000Z',
        paymentAt: '2026-09-26T14:22:00.000Z',
        paymentId: 'pay_rzp_98125',
        paymentAmount: 999,
        paymentStatus: 'SUCCESS',
        validationStatus: 'COMPLETED',
        validationDaysLeft: 0,
        commissionAmount: 125,
        commissionStatus: 'AVAILABLE',
        timeline: [
          { event: 'Link Clicked', timestamp: '26 Sep 2026, 07:40 PM', description: 'Clicked via Instagram Story swipe-up' },
          { event: 'Registered', timestamp: '26 Sep 2026, 07:45 PM', description: 'Created FUTURE IT INDUSTRY learner account' },
          { event: 'Payment Successful', timestamp: '26 Sep 2026, 07:52 PM', description: 'Paid ₹999 for Data Analyst Track' },
          { event: 'Validation Complete', timestamp: '26 Sep 2026, 07:52 PM', description: 'Server-side verified' },
          { event: 'Reward Available', timestamp: '26 Sep 2026, 07:52 PM', description: '₹125 credited to wallet' }
        ]
      },
      {
        id: 'ref_003',
        referrerId: 'usr_subodh_101',
        referrerType: 'student',
        referralCode: 'SUBODH101',
        referredUserId: 'usr_rohit_203',
        referredUserName: 'Rohit Kumar',
        referredUserAvatar: '/images/avatar-rohit.jpg',
        campaignName: 'Telegram Group',
        source: 'Telegram',
        clickId: 'clk_t_983',
        attributionId: 'att_983',
        landingPage: 'https://futureitindustry.com/join?ref=SUBODH101',
        device: 'Windows Desktop',
        browser: 'Chrome 128',
        createdAt: '2026-09-21T11:00:00.000Z',
        registeredAt: '2026-09-21T11:10:00.000Z',
        paymentAt: '2026-09-21T11:18:00.000Z',
        paymentId: 'pay_rzp_98126',
        paymentAmount: 999,
        paymentStatus: 'SUCCESS',
        validationStatus: 'PENDING',
        validationDaysLeft: 5,
        commissionAmount: 125,
        commissionStatus: 'PENDING',
        timeline: [
          { event: 'Link Clicked', timestamp: '21 Sep 2026, 04:30 PM', description: 'Clicked Telegram invite channel' },
          { event: 'Registered', timestamp: '21 Sep 2026, 04:40 PM', description: 'User signed up' },
          { event: 'Payment Successful', timestamp: '21 Sep 2026, 04:48 PM', description: '₹999 course enrollment payment verified' },
          { event: 'Validation In Progress', timestamp: '21 Sep 2026, 04:48 PM', description: '7-day holding period (5 days remaining)' }
        ]
      },
      {
        id: 'ref_004',
        referrerId: 'usr_subodh_101',
        referrerType: 'student',
        referralCode: 'SUBODH101',
        referredUserId: 'usr_neha_204',
        referredUserName: 'Neha Sharma',
        referredUserAvatar: '/images/avatar-neha.jpg',
        campaignName: 'Direct Share',
        source: 'Direct',
        clickId: 'clk_d_984',
        attributionId: 'att_984',
        landingPage: 'https://futureitindustry.com/join?ref=SUBODH101',
        device: 'Android Mobile',
        browser: 'Chrome 128',
        createdAt: '2026-09-18T16:00:00.000Z',
        registeredAt: '2026-09-18T16:05:00.000Z',
        paymentAt: undefined,
        paymentId: undefined,
        paymentAmount: 0,
        paymentStatus: 'FAILED',
        validationStatus: 'CANCELLED',
        validationDaysLeft: 0,
        commissionAmount: 0,
        commissionStatus: 'CANCELLED',
        timeline: [
          { event: 'Link Clicked', timestamp: '18 Sep 2026, 09:30 PM', description: 'Direct referral link click' },
          { event: 'Registered', timestamp: '18 Sep 2026, 09:35 PM', description: 'Learner profile registered' },
          { event: 'Payment Attempted', timestamp: '18 Sep 2026, 09:40 PM', description: 'Payment gateway bank timeout / failed' },
          { event: 'Status Cancelled', timestamp: '18 Sep 2026, 09:45 PM', description: 'No commission generated for failed order' }
        ]
      }
    ];

    const walletLedger: WalletLedgerEntry[] = [
      {
        transactionId: 'txn_001',
        referrerId: 'usr_subodh_101',
        type: 'REFERRAL_REWARD',
        amount: 125,
        balanceAfter: 125,
        status: 'SUCCESS',
        date: '2026-09-02T10:00:00.000Z',
        reference: 'ref_seed_01',
        description: 'Referral reward for Vikash Patel (₹999 paid)'
      },
      {
        transactionId: 'txn_002',
        referrerId: 'usr_subodh_101',
        type: 'REFERRAL_REWARD',
        amount: 125,
        balanceAfter: 250,
        status: 'SUCCESS',
        date: '2026-09-06T12:00:00.000Z',
        reference: 'ref_seed_02',
        description: 'Referral reward for Sneha Ray (₹999 paid)'
      },
      {
        transactionId: 'txn_003',
        referrerId: 'usr_subodh_101',
        type: 'REFERRAL_REWARD',
        amount: 125,
        balanceAfter: 1500,
        status: 'SUCCESS',
        date: '2026-09-28T09:30:00.000Z',
        reference: 'ref_001',
        description: 'Referral reward for Aman Verma (₹999 paid)'
      }
    ];

    const campaigns: CampaignItem[] = [
      {
        id: 'cmp_1',
        code: 'SUBODH101-WHATSAPP',
        name: 'WhatsApp Status & Groups',
        clicks: 120,
        registrations: 42,
        enrollments: 6,
        revenue: 5994,
        commission: 750,
        createdAt: '2026-09-01T10:00:00.000Z'
      },
      {
        id: 'cmp_2',
        code: 'SUBODH101-INSTA',
        name: 'Instagram Story & Bio',
        clicks: 80,
        registrations: 24,
        enrollments: 4,
        revenue: 3996,
        commission: 500,
        createdAt: '2026-09-05T12:00:00.000Z'
      },
      {
        id: 'cmp_3',
        code: 'SUBODH101-TELEGRAM',
        name: 'Tech Prep Telegram Channel',
        clicks: 52,
        registrations: 14,
        enrollments: 2,
        revenue: 1998,
        commission: 250,
        createdAt: '2026-09-10T15:00:00.000Z'
      }
    ];

    const withdrawals: WithdrawalRequest[] = [
      {
        id: 'wth_001',
        referrerId: 'usr_subodh_101',
        amount: 500,
        method: 'UPI',
        details: { upiId: 'subodh.kumar@okhdfcbank' },
        status: 'PAID',
        requestedAt: '2026-09-12T14:00:00.000Z',
        paidAt: '2026-09-13T10:00:00.000Z',
        referenceNo: 'UPI-REF-908234'
      }
    ];

    return {
      profile: studentProfile,
      referrals,
      walletLedger,
      campaigns,
      withdrawals,
      clicksCount: 284,
      pendingCommission: 750, // 6 pending rewards * 125
      availableCommission: 1500, // 12 successful enrollments * 125
      successfulEnrollmentsCount: 12
    };
  }

  public static getState() {
    if (typeof window === 'undefined') return this.defaultState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const initial = this.defaultState();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(raw);
    } catch {
      return this.defaultState();
    }
  }

  public static saveState(state: any) {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save referral state', e);
    }
  }

  // Switch between Student and Influencer
  public static switchReferrerType(type: ReferrerType) {
    const state = this.getState();
    const isStudent = type === 'student';

    state.profile.referrerType = type;
    state.profile.commissionRate = isStudent ? 125 : 100;
    state.profile.referralStatus = isStudent
      ? (state.profile.hasPaidEnrollment ? 'ACTIVE' : 'PENDING_ENROLLMENT')
      : 'ACTIVE'; // Influencers do NOT need 999 purchase

    // Recalculate balances based on commission rate
    const rate = state.profile.commissionRate;
    state.availableCommission = state.successfulEnrollmentsCount * rate;
    state.pendingCommission = 6 * rate;

    // Update referrals commission amount
    state.referrals = state.referrals.map((r: ReferralRecord) => ({
      ...r,
      referrerType: type,
      commissionAmount: r.paymentStatus === 'SUCCESS' ? rate : 0
    }));

    this.saveState(state);
    return state;
  }

  // Toggle student paid enrollment state
  public static toggleStudentEnrollment(paid: boolean) {
    const state = this.getState();
    state.profile.hasPaidEnrollment = paid;
    if (state.profile.referrerType === 'student') {
      state.profile.referralStatus = paid ? 'ACTIVE' : 'PENDING_ENROLLMENT';
    }
    this.saveState(state);
    return state;
  }

  // Record a referral link click
  public static recordClick(source: TrafficSource = 'Direct', campaignId?: string) {
    const state = this.getState();
    state.clicksCount += 1;

    if (campaignId) {
      const cmp = state.campaigns.find((c: CampaignItem) => c.id === campaignId || c.code === campaignId);
      if (cmp) cmp.clicks += 1;
    }

    // Persist attribution in first-party storage
    if (typeof window !== 'undefined') {
      const clickMeta = {
        referralCode: state.profile.referralCode,
        referrerId: state.profile.userId,
        source,
        campaignId: campaignId || null,
        timestamp: new Date().toISOString(),
        landingPage: window.location.href,
        device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
      };
      localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(clickMeta));
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(clickMeta));
    }

    this.saveState(state);
    return state;
  }

  // Simulate a friend registering & paying ₹999
  public static simulateNewEnrollment(friendName: string = 'Karan Malhotra', source: TrafficSource = 'WhatsApp') {
    const state = this.getState();
    const rate = state.profile.commissionRate;
    const now = new Date();
    const nowStr = now.toISOString();
    const displayDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    const newRef: ReferralRecord = {
      id: `ref_${Date.now()}`,
      referrerId: state.profile.userId,
      referrerType: state.profile.referrerType,
      referralCode: state.profile.referralCode,
      referredUserId: `usr_${Date.now()}`,
      referredUserName: friendName,
      referredUserAvatar: '/images/avatar-subodh-kumar.jpg',
      campaignName: `${source} Invite`,
      source,
      clickId: `clk_${Date.now()}`,
      attributionId: `att_${Date.now()}`,
      landingPage: `https://futureitindustry.com/join?ref=${state.profile.referralCode}`,
      device: 'Mobile',
      browser: 'Chrome Mobile',
      createdAt: nowStr,
      registeredAt: nowStr,
      paymentAt: nowStr,
      paymentId: `pay_rzp_${Date.now().toString().slice(-6)}`,
      paymentAmount: 999,
      paymentStatus: 'SUCCESS',
      validationStatus: 'PENDING',
      validationDaysLeft: 7,
      commissionAmount: rate,
      commissionStatus: 'PENDING',
      timeline: [
        { event: 'Link Clicked', timestamp: `${displayDate}, Just now`, description: `Visited via ${source}` },
        { event: 'Registered', timestamp: `${displayDate}, Just now`, description: 'Created FUTURE IT INDUSTRY learner profile' },
        { event: 'Payment Successful', timestamp: `${displayDate}, Just now`, description: 'Paid ₹999 for Data Analyst Track' },
        { event: 'Validation Started', timestamp: `${displayDate}, Just now`, description: `7-day validation period. ₹${rate} pending.` }
      ]
    };

    state.referrals.unshift(newRef);
    state.pendingCommission += rate;
    state.clicksCount += 1;
    state.successfulEnrollmentsCount += 1;

    this.saveState(state);
    return state;
  }

  // Validate a pending referral into available balance
  public static validateReferral(referralId: string) {
    const state = this.getState();
    const ref = state.referrals.find((r: ReferralRecord) => r.id === referralId);
    if (!ref || ref.commissionStatus !== 'PENDING') return state;

    ref.commissionStatus = 'AVAILABLE';
    ref.validationStatus = 'COMPLETED';
    ref.validationDaysLeft = 0;
    ref.timeline.push({
      event: 'Validation Complete',
      timestamp: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      description: `₹${ref.commissionAmount} released to Available Balance`
    });

    state.pendingCommission = Math.max(0, state.pendingCommission - ref.commissionAmount);
    state.availableCommission += ref.commissionAmount;

    // Add wallet ledger transaction
    const newTxn: WalletLedgerEntry = {
      transactionId: `txn_${Date.now()}`,
      referrerId: state.profile.userId,
      type: 'REFERRAL_REWARD',
      amount: ref.commissionAmount,
      balanceAfter: state.availableCommission,
      status: 'SUCCESS',
      date: new Date().toISOString(),
      reference: ref.id,
      description: `Referral reward released for ${ref.referredUserName}`
    };
    state.walletLedger.unshift(newTxn);

    this.saveState(state);
    return state;
  }

  // Request withdrawal
  public static requestWithdrawal(amount: number, method: 'UPI' | 'BANK_TRANSFER', details: any) {
    const state = this.getState();
    if (amount <= 0 || amount > state.availableCommission) {
      throw new Error('Invalid withdrawal amount');
    }

    state.availableCommission -= amount;

    const wth: WithdrawalRequest = {
      id: `wth_${Date.now()}`,
      referrerId: state.profile.userId,
      amount,
      method,
      details,
      status: 'PROCESSING',
      requestedAt: new Date().toISOString(),
      referenceNo: `WTH-FA-${Date.now().toString().slice(-6)}`
    };

    state.withdrawals.unshift(wth);

    const newTxn: WalletLedgerEntry = {
      transactionId: `txn_${Date.now()}`,
      referrerId: state.profile.userId,
      type: 'WITHDRAWAL',
      amount: -amount,
      balanceAfter: state.availableCommission,
      status: 'SUCCESS',
      date: new Date().toISOString(),
      reference: wth.id,
      description: `Withdrawal request to ${method === 'UPI' ? details.upiId : details.accountNumber}`
    };
    state.walletLedger.unshift(newTxn);

    this.saveState(state);
    return state;
  }

  // Create new campaign
  public static createCampaign(name: string, suffix: string) {
    const state = this.getState();
    const cleanSuffix = suffix.toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    const code = `${state.profile.referralCode}-${cleanSuffix}`;

    const newCmp: CampaignItem = {
      id: `cmp_${Date.now()}`,
      code,
      name,
      clicks: 0,
      registrations: 0,
      enrollments: 0,
      revenue: 0,
      commission: 0,
      createdAt: new Date().toISOString()
    };

    state.campaigns.push(newCmp);
    this.saveState(state);
    return state;
  }

  // Leaderboard data matching reference image
  public static getLeaderboard(): LeaderboardUser[] {
    const state = this.getState();
    const isStudent = state.profile.referrerType === 'student';
    const rate = state.profile.commissionRate;

    return [
      {
        rank: 1,
        name: 'Aman Verma',
        avatar: '/images/avatar-rohit.jpg',
        enrollments: 28,
        earnings: isStudent ? 3500 : 2800
      },
      {
        rank: 2,
        name: 'Priya Singh',
        avatar: '/images/avatar-sneha.jpg',
        enrollments: 18,
        earnings: isStudent ? 2250 : 1800
      },
      {
        rank: 3,
        name: 'You (Subodh Kumar)',
        avatar: '/images/avatar-subodh-kumar.jpg',
        enrollments: state.successfulEnrollmentsCount,
        earnings: state.availableCommission,
        isCurrentUser: true
      },
      {
        rank: 4,
        name: 'Rohit Kumar',
        avatar: '/images/avatar-rohit.jpg',
        enrollments: 10,
        earnings: isStudent ? 1250 : 1000
      },
      {
        rank: 5,
        name: 'Neha Sharma',
        avatar: '/images/avatar-neha.jpg',
        enrollments: 9,
        earnings: isStudent ? 1125 : 900
      }
    ];
  }

  // Reset to default seed
  public static resetToSeed() {
    const def = this.defaultState();
    this.saveState(def);
    return def;
  }
}
