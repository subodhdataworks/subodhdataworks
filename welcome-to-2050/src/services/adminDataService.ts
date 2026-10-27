import { doc, getDoc, setDoc, collection, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import {
  getAllRegisteredUsers,
  RegisteredUserRecord,
  getLearnerTelemetry,
  updateAffiliateWithdrawalStatus,
} from './realAuthService';
import { ReferralEngine, WithdrawalRequest, ReferralRecord } from './referralEngine';
import { COURSES_CATALOG } from '../data/coursesCatalog';
import { TOPICS } from '../components/futureai/PythonChapterView';
import {
  getQuestionBankOverrides,
  saveQuestionBankOverride,
  TopicQuestionBank,
} from '../components/futureai/data/questionBankRegistry';
import { SystemPaymentRecord, PlatformStats } from '../types/admin';
import { AdminAuthService } from './adminAuthService';

const PAYMENTS_KEY = 'futureai_system_payments_v1';
const USER_SUSPENSIONS_KEY = 'futureai_user_suspensions_v1';
const USER_SUPPORT_NOTES_KEY = 'futureai_user_support_notes_v1';
const COURSE_OVERRIDES_KEY = 'futureai_course_overrides_v1';
const SYSTEM_CONFIG_KEY = 'futureai_system_config_v1';

export interface UserSuspensionRecord {
  userId: string;
  isSuspended: boolean;
  reason?: string;
  suspendedAt?: string;
  suspendedBy?: string;
}

export interface UserSupportNote {
  id: string;
  userId: string;
  authorEmail: string;
  authorName: string;
  content: string;
  date: string;
  category: 'GENERAL' | 'PAYMENT' | 'WITHDRAWAL' | 'REFERRAL' | 'PROGRESS';
}

export interface SystemBusinessSettings {
  studentReferralCommission: number; // default 125
  influencerReferralCommission: number; // default 100
  enrollmentFee: number; // default 987 or 999
  minimumWithdrawalAmount: number; // default 500
  withdrawalFeePercentage: number; // default 0
  allowDirectBankPayout: boolean;
  allowUpiPayout: boolean;
  autoApprovePayoutsBelow: number; // default 0 (manual review by default)
  updatedAt: string;
  updatedBy: string;
}

const DEFAULT_SETTINGS: SystemBusinessSettings = {
  studentReferralCommission: 125,
  influencerReferralCommission: 100,
  enrollmentFee: 987,
  minimumWithdrawalAmount: 500,
  withdrawalFeePercentage: 0,
  allowDirectBankPayout: true,
  allowUpiPayout: true,
  autoApprovePayoutsBelow: 0,
  updatedAt: '2026-01-01T00:00:00.000Z',
  updatedBy: 'System Default',
};

export class AdminDataService {
  /**
   * 1. Aggregated Platform Statistics & Telemetry
   */
  public static async getPlatformStats(): Promise<PlatformStats> {
    const allUsers = await getAllRegisteredUsers();
    const suspensions = this.getSuspensions();
    const payments = this.getAllPayments();
    const withdrawals = await this.getAllWithdrawals();

    const suspendedCount = suspensions.filter((s) => s.isSuspended).length;
    const activeCount = Math.max(0, allUsers.length - suspendedCount);

    const verifiedPayments = payments.filter((p) => p.status === 'SUCCESS');
    const totalRev = verifiedPayments.reduce((acc, curr) => acc + curr.amount, 0);

    const pendingWithdrawals = withdrawals.filter((w) => w.status === 'REQUESTED' || w.status === 'UNDER_REVIEW' || w.status === 'APPROVED');
    const paidWithdrawals = withdrawals.filter((w) => w.status === 'PAID');

    // Count real course enrollments strictly from verified purchases
    const courseEnrollmentMap: Record<string, number> = {
      'Python for Data Analytics & AI': 0,
      'SQL & Databases Mastery': 0,
      'Excel & Business Reporting': 0,
      'Power BI Dashboards': 0,
      'GenAI for Data Engineers': 0,
    };

    verifiedPayments.forEach((p) => {
      const cName = p.courseName || '';
      if (cName.includes('Python') || p.courseId === 'python') {
        courseEnrollmentMap['Python for Data Analytics & AI']++;
      } else if (cName.includes('SQL') || p.courseId === 'sql') {
        courseEnrollmentMap['SQL & Databases Mastery']++;
      } else if (cName.includes('Excel') || p.courseId === 'excel') {
        courseEnrollmentMap['Excel & Business Reporting']++;
      } else if (cName.includes('Power BI') || p.courseId === 'powerbi') {
        courseEnrollmentMap['Power BI Dashboards']++;
      } else if (cName.includes('GenAI') || p.courseId === 'genai') {
        courseEnrollmentMap['GenAI for Data Engineers']++;
      } else {
        courseEnrollmentMap['Python for Data Analytics & AI']++;
      }
    });

    return {
      totalUsers: allUsers.length,
      activeUsers: activeCount,
      suspendedUsers: suspendedCount,
      enrolledStudents: verifiedPayments.length,
      totalRevenue: totalRev,
      totalReferrals: allUsers.filter((u) => u.referredBy).length,
      pendingWithdrawalsCount: pendingWithdrawals.length,
      pendingWithdrawalsAmount: pendingWithdrawals.reduce((a, b) => a + b.amount, 0),
      paidWithdrawalsCount: paidWithdrawals.length,
      paidWithdrawalsAmount: paidWithdrawals.reduce((a, b) => a + b.amount, 0),
      courseEnrollments: courseEnrollmentMap,
    };
  }

  /**
   * 2. User Directory & Account State Management
   */
  public static getSuspensions(): UserSuspensionRecord[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(USER_SUSPENSIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  public static async toggleUserSuspension(userId: string, isSuspended: boolean, reason: string): Promise<boolean> {
    const session = AdminAuthService.getCurrentSession();
    if (!AdminAuthService.hasPermission('suspend_users')) {
      throw new Error('Permission denied: cannot suspend users.');
    }

    const list = this.getSuspensions();
    const existingIdx = list.findIndex((s) => s.userId === userId);
    const record: UserSuspensionRecord = {
      userId,
      isSuspended,
      reason,
      suspendedAt: new Date().toISOString(),
      suspendedBy: session?.admin.email || 'Admin',
    };

    if (existingIdx >= 0) {
      list[existingIdx] = record;
    } else {
      list.push(record);
    }

    localStorage.setItem(USER_SUSPENSIONS_KEY, JSON.stringify(list));

    await AdminAuthService.logAudit({
      action: isSuspended ? 'USER_SUSPENDED' : 'USER_REACTIVATED',
      category: 'USER',
      targetId: userId,
      details: `${isSuspended ? 'Suspended' : 'Reactivated'} user ${userId}. Reason: ${reason}`,
    });

    return true;
  }

  /**
   * Support Notes on Student Accounts
   */
  public static getSupportNotes(userId?: string): UserSupportNote[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(USER_SUPPORT_NOTES_KEY);
      const all: UserSupportNote[] = raw ? JSON.parse(raw) : [];
      if (userId) {
        return all.filter((n) => n.userId === userId);
      }
      return all;
    } catch {
      return [];
    }
  }

  public static async addSupportNote(note: {
    userId: string;
    content: string;
    category: 'GENERAL' | 'PAYMENT' | 'WITHDRAWAL' | 'REFERRAL' | 'PROGRESS';
  }): Promise<UserSupportNote> {
    const session = AdminAuthService.getCurrentSession();
    const newNote: UserSupportNote = {
      id: `note_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      userId: note.userId,
      authorEmail: session?.admin.email || 'support@futureitindustry.com',
      authorName: session?.admin.name || 'Support Agent',
      content: note.content.trim(),
      date: new Date().toISOString(),
      category: note.category,
    };

    const notes = this.getSupportNotes();
    notes.unshift(newNote);
    localStorage.setItem(USER_SUPPORT_NOTES_KEY, JSON.stringify(notes));

    await AdminAuthService.logAudit({
      action: 'SUPPORT_NOTE_ADDED',
      category: 'SUPPORT',
      targetId: note.userId,
      details: `Added ${note.category} note to user ${note.userId}: ${note.content.substring(0, 60)}...`,
    });

    return newNote;
  }

  /**
   * 3. Financial Transactions & Payment Reconciliation
   */
  public static getAllPayments(): SystemPaymentRecord[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem(PAYMENTS_KEY);
      if (raw) {
        const list: SystemPaymentRecord[] = JSON.parse(raw);
        // Strict purge: remove any previously seeded fake demo transactions
        const cleanList = list.filter(
          (p) =>
            !p.id.startsWith('tx_pay_9920') &&
            p.userName !== 'Aakash Verma' &&
            p.userName !== 'Priya Sharma' &&
            p.userName !== 'Rahul Kumar'
        );
        if (cleanList.length !== list.length) {
          localStorage.setItem(PAYMENTS_KEY, JSON.stringify(cleanList));
        }
        return cleanList;
      }
    } catch {}

    return [];
  }

  public static async recordPayment(payment: Omit<SystemPaymentRecord, 'id' | 'date'>): Promise<SystemPaymentRecord> {
    const list = this.getAllPayments();
    const record: SystemPaymentRecord = {
      ...payment,
      id: `tx_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      date: new Date().toISOString(),
    };

    list.unshift(record);
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify(list));

    await AdminAuthService.logAudit({
      action: 'PAYMENT_RECORDED',
      category: 'FINANCE',
      targetId: record.id,
      details: `Payment recorded for ₹${record.amount} by ${record.userName} (${record.status})`,
    });

    return record;
  }

  /**
   * 4. Withdrawal Management & Immutable Ledger Safeguards (Cloud Synced)
   */
  public static async getAllWithdrawals(): Promise<WithdrawalRequest[]> {
    const list: WithdrawalRequest[] = [];
    const seenIds = new Set<string>();

    // 1. Fetch from Firestore Cloud Database collection 'withdrawal_requests'
    try {
      const colRef = collection(db, 'withdrawal_requests');
      const snap = await getDocs(colRef);
      snap.forEach((docSnap) => {
        const data = docSnap.data();
        if (data && (data.id || docSnap.id)) {
          const reqId = data.id || docSnap.id;
          const isBank =
            String(data.method).toUpperCase() === 'BANK' ||
            String(data.method).toUpperCase() === 'BANK_TRANSFER' ||
            Boolean(data.bankAccNumber || data.details?.accountNumber);

          const rawStatus = String(data.status || 'UNDER_REVIEW').toUpperCase();
          const canonicalStatus: WithdrawalRequest['status'] =
            rawStatus === 'PAID'
              ? 'PAID'
              : rawStatus === 'APPROVED'
              ? 'APPROVED'
              : rawStatus === 'REJECTED' || rawStatus === 'CANCELLED'
              ? 'REJECTED'
              : rawStatus === 'PROCESSING'
              ? 'PROCESSING'
              : 'UNDER_REVIEW';

          const req: WithdrawalRequest = {
            id: reqId,
            referrerId: data.referrerId || data.userId || data.refCode || data.userEmail || 'Learner',
            amount: Number(data.amount) || 0,
            method: isBank ? 'BANK_TRANSFER' : 'UPI',
            details: {
              upiId: data.details?.upiId || data.upiId || (!isBank ? data.destination : '') || '',
              accountHolder: data.details?.accountHolder || data.accountHolder || data.userName || 'Learner',
              accountNumber: data.details?.accountNumber || data.bankAccNumber || '',
              ifsc: data.details?.ifsc || data.bankIfsc || '',
              bankName: data.details?.bankName || data.bankName || 'Bank',
            },
            status: canonicalStatus,
            requestedAt: data.requestedAt || data.createdAt || new Date().toISOString(),
            paidAt: data.paidAt,
            referenceNo: data.referenceNo || data.txId,
          };
          seenIds.add(req.id);
          list.push(req);
        }
      });
    } catch (err) {
      console.warn('Firestore withdrawal_requests fetch notice:', err);
    }

    // 2. Also merge local engine withdrawals if any exist
    try {
      const engineWithdrawals = ReferralEngine.getWithdrawals();
      for (const w of engineWithdrawals) {
        if (!seenIds.has(w.id)) {
          seenIds.add(w.id);
          list.push(w);
        }
      }
    } catch (err) {}

    // 3. Sort newest first
    list.sort((a, b) => new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime());
    return list;
  }

  public static async updateWithdrawalStatus(params: {
    requestId: string;
    newStatus: 'UNDER_REVIEW' | 'APPROVED' | 'PROCESSING' | 'PAID' | 'REJECTED';
    adminNotes: string;
    payoutRef?: string;
  }): Promise<{ success: boolean; error?: string }> {
    if (!AdminAuthService.hasPermission('approve_withdrawals')) {
      return { success: false, error: 'Unauthorized: You do not have permission to approve withdrawals.' };
    }

    const withdrawals = await this.getAllWithdrawals();
    const req = withdrawals.find((w) => w.id === params.requestId);
    if (!req) {
      return { success: false, error: 'Withdrawal request not found.' };
    }

    // Immutable Transition Enforcement
    if (req.status === 'PAID') {
      return { success: false, error: 'Cannot modify a withdrawal that has already been verified as PAID.' };
    }

    if (params.newStatus === 'PAID' && !params.payoutRef?.trim()) {
      return { success: false, error: 'Payout transaction reference (Bank UTR / UPI Ref) is mandatory before marking Paid.' };
    }

    req.status = params.newStatus;
    if (params.newStatus === 'PAID') {
      req.paidAt = new Date().toISOString();
      req.referenceNo = params.payoutRef?.trim();
    }

    // 1. Update in Firestore collection 'withdrawal_requests'
    try {
      const docRef = doc(db, 'withdrawal_requests', req.id);
      await setDoc(
        docRef,
        {
          status: params.newStatus,
          paidAt: params.newStatus === 'PAID' ? new Date().toISOString() : null,
          referenceNo: params.payoutRef?.trim() || req.referenceNo || null,
          adminNotes: params.adminNotes,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (err) {
      console.warn('Failed to update withdrawal in Firestore:', err);
    }

    // 2. Save state back via ReferralEngine
    ReferralEngine.saveWithdrawal(req);

    // 3. If REJECTED, refund the amount back to user's wallet ledger automatically
    if (params.newStatus === 'REJECTED') {
      ReferralEngine.reverseWithdrawal({
        referrerId: req.referrerId,
        amount: req.amount,
        withdrawalId: req.id,
        reason: params.adminNotes,
      });
    }

    // 4. Also synchronize v5 Affiliate Hub & Server API (/api/affiliate) withdrawal lifecycle
    const mappedV5Status =
      params.newStatus === 'PAID'
        ? 'Paid'
        : params.newStatus === 'APPROVED'
        ? 'Approved'
        : params.newStatus === 'REJECTED'
        ? 'Rejected'
        : 'Processing';
    await updateAffiliateWithdrawalStatus({
      refCode: req.referrerId,
      withdrawalId: req.id,
      newStatus: mappedV5Status,
      reason: params.adminNotes,
      payoutRef: params.payoutRef,
    });

    await AdminAuthService.logAudit({
      action: `WITHDRAWAL_${params.newStatus}`,
      category: 'WITHDRAWAL',
      targetId: req.id,
      details: `Withdrawal ${req.id} for ₹${req.amount} marked ${params.newStatus}. Ref: ${params.payoutRef || 'N/A'}. Note: ${params.adminNotes}`,
    });

    return { success: true };
  }

  /**
   * 5. Course & Curriculum Management (Live Overrides)
   */
  public static getCoursesCatalog() {
    return COURSES_CATALOG;
  }

  public static getPythonTopics() {
    return TOPICS;
  }

  public static getCourseOverrides(): Record<string, any> {
    if (typeof window === 'undefined') return {};
    try {
      const raw = localStorage.getItem(COURSE_OVERRIDES_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }

  public static async saveCourseOverride(courseId: string, updates: any): Promise<void> {
    if (!AdminAuthService.hasPermission('manage_courses')) {
      throw new Error('Permission denied to modify courses.');
    }

    const current = this.getCourseOverrides();
    current[courseId] = {
      ...(current[courseId] || {}),
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(COURSE_OVERRIDES_KEY, JSON.stringify(current));

    await AdminAuthService.logAudit({
      action: 'COURSE_UPDATED',
      category: 'COURSE',
      targetId: courseId,
      details: `Updated course settings for ${courseId}`,
    });
  }

  public static getQuestionBankOverrides() {
    return getQuestionBankOverrides();
  }

  public static async saveQuestionBankTopicOverride(
    tabId: number | string,
    topicKeyOrId: string | number,
    overrideData: Partial<TopicQuestionBank>
  ): Promise<void> {
    if (!AdminAuthService.hasPermission('manage_courses')) {
      throw new Error('Permission denied to modify learning questions.');
    }

    await saveQuestionBankOverride(tabId, topicKeyOrId, overrideData);

    await AdminAuthService.logAudit({
      action: 'COURSE_UPDATED',
      category: 'COURSE',
      targetId: `tab_${tabId}_topic_${topicKeyOrId}`,
      details: `Synchronized question bank content for Tab ${tabId} Topic ${topicKeyOrId}`,
    });
  }

  /**
   * 6. System Business Settings (Commission Rates & Limits)
   */
  public static getBusinessSettings(): SystemBusinessSettings {
    if (typeof window === 'undefined') return DEFAULT_SETTINGS;
    try {
      const raw = localStorage.getItem(SYSTEM_CONFIG_KEY);
      return raw ? { ...DEFAULT_SETTINGS, ...JSON.parse(raw) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  }

  public static async updateBusinessSettings(updates: Partial<SystemBusinessSettings>): Promise<SystemBusinessSettings> {
    const session = AdminAuthService.getCurrentSession();
    if (!AdminAuthService.hasPermission('manage_settings')) {
      throw new Error('Permission denied: Only Super Admin can change business commission and withdrawal settings.');
    }

    const current = this.getBusinessSettings();
    const updated: SystemBusinessSettings = {
      ...current,
      ...updates,
      updatedAt: new Date().toISOString(),
      updatedBy: session?.admin.email || 'Super Admin',
    };

    localStorage.setItem(SYSTEM_CONFIG_KEY, JSON.stringify(updated));

    await AdminAuthService.logAudit({
      action: 'SETTINGS_UPDATED',
      category: 'SETTINGS',
      details: `Business settings updated: Student comm: ₹${updated.studentReferralCommission}, Influencer: ₹${updated.influencerReferralCommission}, Min withdraw: ₹${updated.minimumWithdrawalAmount}`,
    });

    return updated;
  }
}
