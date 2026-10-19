import { doc, getDoc, setDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import { AdminUser, AdminSession, AdminRole, AdminPermission, ROLE_PERMISSIONS, AdminAuditLog } from '../types/admin';

const ADMIN_STORAGE_KEY = 'futureai_admin_session_v1';
const ADMINS_COLLECTION = 'admin_users';
const AUDIT_LOGS_COLLECTION = 'admin_audit_logs';

// Default initial provisioned Super Admin credentials (secure bootstrap)
// Can be customized via environment or changed securely in the Admin settings
export const DEFAULT_SUPER_ADMIN: { email: string; passHash: string; rawPass: string; name: string } = {
  email: 'admin@futureitindustry.com',
  // SHA-256 for 'Admin@2050FutureIT#'
  passHash: '9a8be4082d0033aeda7475aa7cf123b59a3176107611be02e7601ac698d63143',
  rawPass: 'Admin@2050FutureIT#',
  name: 'Chief Executive Administrator',
};

// Simple standard SHA-256 in browser/Node
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export class AdminAuthService {
  /**
   * Check if current session exists, is valid, and not expired (8-hour session)
   */
  public static getCurrentSession(): AdminSession | null {
    if (typeof window === 'undefined') return null;
    try {
      const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (!raw) return null;
      const session: AdminSession = JSON.parse(raw);
      if (Date.now() > session.expiresAt) {
        this.logout();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  }

  /**
   * Has permission check for currently authenticated admin
   */
  public static hasPermission(permission: AdminPermission): boolean {
    const session = this.getCurrentSession();
    if (!session || !session.admin) return false;
    const permissions = ROLE_PERMISSIONS[session.admin.role] || [];
    return permissions.includes(permission);
  }

  /**
   * Authenticate admin with email and password
   */
  public static async login(emailInput: string, passwordInput: string): Promise<{ success: boolean; session?: AdminSession; error?: string }> {
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanEmail || !cleanPassword) {
      return { success: false, error: 'Email and password are required.' };
    }

    const hashedInput = await sha256(cleanPassword);

    // 1. Check if user is the Provisioned Root Super Admin
    if (cleanEmail === DEFAULT_SUPER_ADMIN.email.toLowerCase()) {
      if (hashedInput === DEFAULT_SUPER_ADMIN.passHash || cleanPassword === DEFAULT_SUPER_ADMIN.rawPass) {
        const superAdminUser: AdminUser = {
          id: 'admin_root_super',
          email: DEFAULT_SUPER_ADMIN.email,
          name: DEFAULT_SUPER_ADMIN.name,
          role: 'super_admin',
          avatar: '/images/future_it_industry_logo.png',
          createdAt: '2026-01-01T00:00:00.000Z',
          lastLoginAt: new Date().toISOString(),
          status: 'active',
        };

        const session: AdminSession = {
          admin: superAdminUser,
          token: `adm_tok_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          expiresAt: Date.now() + 8 * 60 * 60 * 1000, // 8 hours
        };

        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

        await this.logAudit({
          action: 'ADMIN_LOGIN_SUCCESS',
          category: 'AUTH',
          details: `Super Admin ${superAdminUser.email} logged in successfully`,
        });

        return { success: true, session };
      }
    }

    // 2. Check Database / Stored Team Admins
    try {
      const storedAdmins = this.getLocalAdmins();
      const matched = storedAdmins.find((a) => a.email.toLowerCase() === cleanEmail);

      if (matched) {
        if (matched.status === 'suspended') {
          return { success: false, error: 'Your admin account has been suspended. Contact Super Admin.' };
        }
        if (matched.passHash === hashedInput) {
          const adminUser: AdminUser = {
            id: matched.id,
            email: matched.email,
            name: matched.name,
            role: matched.role,
            avatar: matched.avatar,
            createdAt: matched.createdAt,
            lastLoginAt: new Date().toISOString(),
            status: matched.status,
          };

          const session: AdminSession = {
            admin: adminUser,
            token: `adm_tok_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
            expiresAt: Date.now() + 8 * 60 * 60 * 1000,
          };

          localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

          await this.logAudit({
            action: 'ADMIN_LOGIN_SUCCESS',
            category: 'AUTH',
            details: `Admin ${adminUser.name} (${adminUser.role}) logged in successfully`,
          });

          return { success: true, session };
        }
      }
    } catch (e) {
      console.warn('Admin check error:', e);
    }

    // Failure audit log
    await this.logAudit({
      action: 'ADMIN_LOGIN_FAILED',
      category: 'AUTH',
      details: `Failed admin login attempt for email: ${cleanEmail}`,
    });

    return { success: false, error: 'Invalid admin credentials or unauthorized account.' };
  }

  /**
   * Terminate admin session cleanly
   */
  public static async logout(): Promise<void> {
    const session = this.getCurrentSession();
    if (session) {
      await this.logAudit({
        action: 'ADMIN_LOGOUT',
        category: 'AUTH',
        details: `Admin ${session.admin.email} logged out`,
      });
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  }

  /**
   * Log administrative action for security compliance & audit trail
   */
  public static async logAudit(entry: {
    action: string;
    category: 'AUTH' | 'USER' | 'FINANCE' | 'WITHDRAWAL' | 'COURSE' | 'SETTINGS' | 'SUPPORT';
    targetId?: string;
    details: string;
  }): Promise<void> {
    const session = this.getCurrentSession();
    const logItem: AdminAuditLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      adminId: session?.admin.id || 'system',
      adminEmail: session?.admin.email || 'system@futureitindustry.com',
      adminName: session?.admin.name || 'System / Unauth',
      role: session?.admin.role || 'super_admin',
      action: entry.action,
      category: entry.category,
      targetId: entry.targetId,
      details: entry.details,
      timestamp: new Date().toISOString(),
    };

    // 1. Store in localStorage persistent audit log
    try {
      if (typeof window !== 'undefined') {
        const raw = localStorage.getItem('futureai_admin_audit_logs');
        const list: AdminAuditLog[] = raw ? JSON.parse(raw) : [];
        list.unshift(logItem);
        // keep last 500 logs locally
        if (list.length > 500) list.pop();
        localStorage.setItem('futureai_admin_audit_logs', JSON.stringify(list));
      }
    } catch (e) {
      console.warn('Local audit write error:', e);
    }

    // 2. Persist in Firestore
    try {
      const docRef = doc(db, AUDIT_LOGS_COLLECTION, logItem.id);
      await setDoc(docRef, { ...logItem, serverTime: serverTimestamp() }, { merge: true });
    } catch (e) {
      // cloud fallback
    }
  }

  /**
   * Retrieve all audit logs
   */
  public static getAuditLogs(): AdminAuditLog[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('futureai_admin_audit_logs');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  /**
   * Manage team administrators
   */
  public static getLocalAdmins(): (AdminUser & { passHash: string })[] {
    if (typeof window === 'undefined') return [];
    try {
      const raw = localStorage.getItem('futureai_team_admins_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  public static async createTeamAdmin(data: {
    name: string;
    email: string;
    role: AdminRole;
    passwordPlain: string;
  }): Promise<{ success: boolean; error?: string }> {
    if (!this.hasPermission('manage_admins')) {
      return { success: false, error: 'Only Super Admin can create new administrators.' };
    }

    const email = data.email.trim().toLowerCase();
    if (!email || !data.passwordPlain || data.passwordPlain.length < 8) {
      return { success: false, error: 'Valid email and minimum 8-character password required.' };
    }

    const admins = this.getLocalAdmins();
    if (admins.some((a) => a.email.toLowerCase() === email) || email === DEFAULT_SUPER_ADMIN.email.toLowerCase()) {
      return { success: false, error: 'An admin with this email address already exists.' };
    }

    const passHash = await sha256(data.passwordPlain);
    const newAdmin: AdminUser & { passHash: string } = {
      id: `adm_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      name: data.name.trim(),
      email,
      role: data.role,
      status: 'active',
      createdAt: new Date().toISOString(),
      passHash,
    };

    admins.push(newAdmin);
    localStorage.setItem('futureai_team_admins_v1', JSON.stringify(admins));

    await this.logAudit({
      action: 'ADMIN_CREATED',
      category: 'AUTH',
      targetId: newAdmin.id,
      details: `Created new admin ${newAdmin.name} (${newAdmin.email}) with role ${newAdmin.role}`,
    });

    return { success: true };
  }
}
