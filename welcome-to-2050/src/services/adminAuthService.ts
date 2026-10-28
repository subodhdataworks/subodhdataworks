import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { db, auth, googleProvider } from './firebase';
import { AdminUser, AdminSession, AdminRole, AdminPermission, ROLE_PERMISSIONS, AdminAuditLog } from '../types/admin';

const ADMIN_STORAGE_KEY = 'futureai_admin_session_v1';
const AUDIT_LOGS_COLLECTION = 'admin_audit_logs';

export const DEFAULT_SUPER_ADMIN = {
  email: 'admin@futureitindustry.com',
  name: 'Chief Executive Administrator',
};

// Simple standard SHA-256 in browser/Node
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

export const INTENDED_OWNER_ADMIN_UID = 'v0l0LdEuPMTyBsvGEqoT8dYSsv43';

function decodeJwtPayload(token: string): Record<string, any> | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    let base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4 !== 0) base64 += '=';
    const jsonStr = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

import { clearActiveCourseSessionCacheOnLogout } from './courseUnlockService';

export class AdminAuthService {
  /**
   * Check if current session exists, is valid, and not expired
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
   * Obtain a fresh, cryptographically valid Firebase ID token for the logged-in admin.
   * Forces token refresh via getIdToken(true) when requested to ensure custom claims { admin: true }
   * are up-to-date and prevents stale/expired cached tokens from causing 401/403 errors.
   */
  public static async getFreshAdminToken(forceRefresh = true): Promise<{
    token: string | null;
    uid?: string;
    email?: string;
    hasAdminClaim?: boolean;
    error?: string;
  }> {
    try {
      if (typeof (auth as any)?.authStateReady === 'function') {
        await Promise.race([
          (auth as any).authStateReady(),
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);
      }
    } catch {}

    const session = this.getCurrentSession();
    const currentUser = auth.currentUser;

    // 1. If Firebase Auth has an active currentUser, force-refresh its ID token
    if (currentUser) {
      try {
        const freshToken = await currentUser.getIdToken(forceRefresh);
        const payload = decodeJwtPayload(freshToken);
        const hasAdminClaim = Boolean(payload && (payload.admin === true || payload.role === 'admin'));

        if (hasAdminClaim) {
          // Synchronize localStorage session with fresh token and verified Firebase Auth identity
          const updatedSession: AdminSession = {
            admin: {
              id: currentUser.uid,
              email: (currentUser.email || session?.admin?.email || '').toLowerCase(),
              name: session?.admin?.name || currentUser.displayName || 'Administrator',
              role: session?.admin?.role || 'super_admin',
              avatar: currentUser.photoURL || session?.admin?.avatar || '/images/future_it_industry_logo.png',
              createdAt: session?.admin?.createdAt || new Date().toISOString(),
              lastLoginAt: new Date().toISOString(),
              status: 'active',
            },
            token: freshToken,
            expiresAt: Date.now() + 8 * 60 * 60 * 1000,
          };
          if (typeof window !== 'undefined') {
            localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(updatedSession));
          }
          return {
            token: freshToken,
            uid: currentUser.uid,
            email: currentUser.email || '',
            hasAdminClaim: true,
          };
        }

        // If currentUser is the intended owner UID (v0l0LdEuPMTyBsvGEqoT8dYSsv43), return token so server can verify/sync claim
        if (currentUser.uid === INTENDED_OWNER_ADMIN_UID) {
          return {
            token: freshToken,
            uid: currentUser.uid,
            email: currentUser.email || '',
            hasAdminClaim: false,
          };
        }

        // Otherwise, the browser's active Firebase user is a non-admin student account
        return {
          token: null,
          uid: currentUser.uid,
          email: currentUser.email || '',
          hasAdminClaim: false,
          error: `Forbidden: Currently logged-in Firebase account (${currentUser.email || currentUser.uid}, UID: ${currentUser.uid}) is not the authorized admin account (expected UID: ${INTENDED_OWNER_ADMIN_UID} with { admin: true } claim). Please sign in to the Admin Control Center with the owner admin account.`,
        };
      } catch (err: any) {
        console.warn('[AdminAuth] getIdToken refresh notice:', err);
      }
    }

    // 2. Fallback to stored session token only if still unexpired and valid
    if (session?.token) {
      const payload = decodeJwtPayload(session.token);
      const nowSec = Math.floor(Date.now() / 1000);
      if (payload && payload.exp && payload.exp <= nowSec) {
        return {
          token: null,
          uid: payload.sub,
          email: payload.email,
          hasAdminClaim: false,
          error: 'Admin Firebase ID token has expired. Please sign out and sign back in to the Admin Control Center to refresh your token.',
        };
      }
      const hasAdminClaim = Boolean(payload && (payload.admin === true || payload.role === 'admin'));
      if (!hasAdminClaim && payload?.sub !== INTENDED_OWNER_ADMIN_UID) {
        return {
          token: null,
          uid: payload?.sub,
          email: payload?.email,
          hasAdminClaim: false,
          error: `Forbidden: Session account (${payload?.email || payload?.sub || 'unknown'}) lacks the required { admin: true } custom claim.`,
        };
      }
      return {
        token: session.token,
        uid: payload?.sub || session.admin?.id,
        email: payload?.email || session.admin?.email,
        hasAdminClaim,
      };
    }

    return {
      token: null,
      error: 'Authentication session expired: Please sign in with the authorized admin account.',
    };
  }

  /**
   * Cryptographically re-verify active admin session with server-side /api/admin-verify
   * Rejects forged localStorage flags and automatically refreshes stale tokens via getIdToken(true)
   */
  public static async verifyServerSession(): Promise<boolean> {
    const tokenInfo = await this.getFreshAdminToken(true);
    const activeToken = tokenInfo.token;
    if (!activeToken) {
      await this.logout();
      return false;
    }

    // Check if token looks like Firebase JWT (header.payload.signature)
    if (!activeToken.includes('.') || activeToken.split('.').length !== 3) {
      console.warn('[AdminAuth] Invalid token structure. Requiring server re-authentication.');
      await this.logout();
      return false;
    }

    try {
      let res = await fetch('/api/admin-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${activeToken}`,
        },
      });

      let data = await res.json().catch(() => ({}));

      // If server restored custom claim and requested a fresh token, force refresh and retry once
      if (!res.ok && data?.requiresTokenRefresh && auth.currentUser) {
        const refreshed = await this.getFreshAdminToken(true);
        if (refreshed.token) {
          res = await fetch('/api/admin-verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${refreshed.token}`,
            },
          });
          data = await res.json().catch(() => ({}));
        }
      }

      if (!res.ok || !data.authorized) {
        console.warn('[AdminAuth] Server rejected admin token:', res.status, data?.error);
        await this.logout();
        return false;
      }

      return true;
    } catch (err) {
      const session = this.getCurrentSession();
      console.warn('[AdminAuth] Verification network check notice:', err);
      return Boolean(session && Date.now() < session.expiresAt);
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
   * Authenticate admin via Firebase Auth and server-side /api/admin-verify token verification
   * Eliminates hardcoded passwords and unverified client-side privileges.
   */
  public static async login(
    emailInput: string,
    passwordInput: string
  ): Promise<{ success: boolean; session?: AdminSession; error?: string }> {
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (!cleanEmail || !cleanPassword) {
      return { success: false, error: 'Email and password are required.' };
    }

    try {
      // 1. Authenticate with real Firebase Auth
      const userCred = await signInWithEmailAndPassword(auth, cleanEmail, cleanPassword);
      const idToken = await userCred.user.getIdToken(true);

      // 2. Validate token and admin allowlist against server-side /api/admin-verify
      const verifyRes = await fetch('/api/admin-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
      });

      const verifyData = await verifyRes.json().catch(() => ({}));

      if (!verifyRes.ok || !verifyData.authorized) {
        await auth.signOut();
        const errMsg =
          verifyData?.error || 'Access Denied: Your account does not have platform administrator privileges.';
        await this.logAudit({
          action: 'ADMIN_LOGIN_UNAUTHORIZED',
          category: 'AUTH',
          details: `Account ${cleanEmail} attempted admin login but failed authorization.`,
        });
        return { success: false, error: errMsg };
      }

      // 3. Establish verified admin session
      const adminUser: AdminUser = {
        id: userCred.user.uid,
        email: cleanEmail,
        name: verifyData.admin?.name || userCred.user.displayName || 'Administrator',
        role: verifyData.admin?.role || 'super_admin',
        avatar: userCred.user.photoURL || '/images/future_it_industry_logo.png',
        createdAt: userCred.user.metadata.creationTime || new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        status: 'active',
      };

      const session: AdminSession = {
        admin: adminUser,
        token: idToken,
        expiresAt: Date.now() + 8 * 60 * 60 * 1000, // 8 hours
      };

      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

      await this.logAudit({
        action: 'ADMIN_LOGIN_SUCCESS',
        category: 'AUTH',
        details: `Admin ${adminUser.email} authenticated successfully with verified Firebase ID token.`,
      });

      return { success: true, session };
    } catch (firebaseErr: any) {
      let errorMsg = 'Invalid admin email or password.';
      if (
        firebaseErr.code === 'auth/user-not-found' ||
        firebaseErr.code === 'auth/wrong-password' ||
        firebaseErr.code === 'auth/invalid-credential'
      ) {
        errorMsg = 'Incorrect admin email or password. Please verify your credentials.';
      } else if (firebaseErr.code === 'auth/too-many-requests') {
        errorMsg = 'Too many failed login attempts. Please wait a few minutes before trying again.';
      } else if (firebaseErr.message) {
        errorMsg = firebaseErr.message;
      }

      await this.logAudit({
        action: 'ADMIN_LOGIN_FAILED',
        category: 'AUTH',
        details: `Failed admin login attempt for ${cleanEmail}: ${errorMsg}`,
      });

      return { success: false, error: errorMsg };
    }
  }

  /**
   * Authenticate admin via Google Sign-In with server-side allowlist verification
   */
  public static async loginWithGoogleAdmin(): Promise<{
    success: boolean;
    session?: AdminSession;
    error?: string;
  }> {
    try {
      const userCred = await signInWithPopup(auth, googleProvider);
      const idToken = await userCred.user.getIdToken(true);
      const email = (userCred.user.email || '').toLowerCase().trim();

      const verifyRes = await fetch('/api/admin-verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
      });

      const verifyData = await verifyRes.json().catch(() => ({}));

      if (!verifyRes.ok || !verifyData.authorized) {
        await auth.signOut();
        const errMsg =
          verifyData?.error || 'Access Denied: Google account ' + email + ' is not on the admin allowlist.';
        await this.logAudit({
          action: 'ADMIN_LOGIN_GOOGLE_UNAUTHORIZED',
          category: 'AUTH',
          details: `Google user ${email} attempted admin login but is not allowlisted.`,
        });
        return { success: false, error: errMsg };
      }

      const adminUser: AdminUser = {
        id: userCred.user.uid,
        email,
        name: verifyData.admin?.name || userCred.user.displayName || 'Administrator',
        role: verifyData.admin?.role || 'super_admin',
        avatar: userCred.user.photoURL || '/images/future_it_industry_logo.png',
        createdAt: userCred.user.metadata.creationTime || new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        status: 'active',
      };

      const session: AdminSession = {
        admin: adminUser,
        token: idToken,
        expiresAt: Date.now() + 8 * 60 * 60 * 1000,
      };

      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));

      await this.logAudit({
        action: 'ADMIN_LOGIN_GOOGLE_SUCCESS',
        category: 'AUTH',
        details: `Admin ${email} signed in successfully via Google with verified ID token.`,
      });

      return { success: true, session };
    } catch (err: any) {
      return { success: false, error: err.message || 'Google admin sign-in failed.' };
    }
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
        details: `Admin ${session.admin.email} logged out.`,
      });
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      try {
        clearActiveCourseSessionCacheOnLogout();
      } catch {}
    }
    try {
      await auth.signOut();
    } catch {}
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
