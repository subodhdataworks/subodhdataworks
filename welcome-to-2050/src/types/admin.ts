/**
 * Future IT Industry — Enterprise Admin Control Center Models & RBAC Types
 * 
 * Strict Role-Based Access Control (RBAC):
 * - super_admin: Full access to all modules, financial approvals, team permissions, settings, audit logs.
 * - finance_manager: Withdrawals approval/payout, payment reconciliation, wallet audit, refunds review.
 * - course_manager: Course, module, topic, video, quiz, challenge, and interview question editing.
 * - user_support: User directory, learner notes, complaint resolution, suspension/reactivation.
 */

export type AdminRole = 'super_admin' | 'finance_manager' | 'course_manager' | 'user_support';

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: AdminRole;
  avatar?: string;
  createdAt: string;
  lastLoginAt?: string;
  status: 'active' | 'suspended';
  createdById?: string;
}

export interface AdminSession {
  admin: AdminUser;
  token: string;
  expiresAt: number; // Unix timestamp in ms
}

export type AdminPermission =
  | 'manage_users'
  | 'suspend_users'
  | 'export_users'
  | 'manage_courses'
  | 'publish_courses'
  | 'view_finance'
  | 'approve_withdrawals'
  | 'manage_payouts'
  | 'manage_settings'
  | 'view_audit_logs'
  | 'manage_admins';

export const ROLE_PERMISSIONS: Record<AdminRole, AdminPermission[]> = {
  super_admin: [
    'manage_users',
    'suspend_users',
    'export_users',
    'manage_courses',
    'publish_courses',
    'view_finance',
    'approve_withdrawals',
    'manage_payouts',
    'manage_settings',
    'view_audit_logs',
    'manage_admins',
  ],
  finance_manager: [
    'manage_users',
    'view_finance',
    'approve_withdrawals',
    'manage_payouts',
    'view_audit_logs',
  ],
  course_manager: [
    'manage_courses',
    'publish_courses',
    'view_audit_logs',
  ],
  user_support: [
    'manage_users',
    'suspend_users',
    'export_users',
    'view_audit_logs',
  ],
};

export interface AdminAuditLog {
  id: string;
  adminId: string;
  adminEmail: string;
  adminName: string;
  role: AdminRole;
  action: string;
  category: 'AUTH' | 'USER' | 'FINANCE' | 'WITHDRAWAL' | 'COURSE' | 'SETTINGS' | 'SUPPORT';
  targetId?: string;
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export interface SystemPaymentRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail?: string;
  userPhone?: string;
  amount: number; // e.g. 999 or 987
  courseId: string;
  courseName: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';
  provider: 'Razorpay' | 'UPI' | 'DirectBank' | 'Cashfree' | 'ManualVerification';
  paymentRef: string;
  orderId?: string;
  date: string;
  verifiedBy?: string;
  refundStatus?: 'NONE' | 'REQUESTED' | 'REFUNDED' | 'REJECTED';
  refundReason?: string;
  notes?: string;
}

export interface PlatformStats {
  totalUsers: number;
  activeUsers: number;
  suspendedUsers: number;
  enrolledStudents: number;
  totalRevenue: number;
  totalReferrals: number;
  pendingWithdrawalsCount: number;
  pendingWithdrawalsAmount: number;
  paidWithdrawalsCount: number;
  paidWithdrawalsAmount: number;
  courseEnrollments: Record<string, number>;
}
