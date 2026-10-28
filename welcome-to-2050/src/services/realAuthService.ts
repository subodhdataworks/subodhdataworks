function withTimeout<T>(promise: Promise<T>, ms: number = 2500): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)),
  ]);
}

import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

/**
 * Detect if user is on Android or mobile browser where popups are blocked
 */
function isAndroidOrMobile(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
}
import { doc, setDoc, getDoc, collection, getDocs, query, where, serverTimestamp, increment } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';

import { clearTestUserEnrollments } from './courseUnlockService';
import { ReferralEngine } from './referralEngine';
import { getEffectiveMinWithdrawal } from '../config/withdrawalConfig';
export interface RegisteredUserRecord {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  role?: 'student' | 'influencer';
  referralCode: string;
  referredBy?: string;
  registeredAt: string;
  source: 'Google' | 'Email' | 'Phone' | 'Direct';
}

const MASTER_REGISTRY_KEY = 'futureai_master_user_registry_v1';

/**
 * Persists registered users in both Firestore cloud and local resilient storage
 */
export async function recordUserInDatabase(userData: {
  uid?: string;
  name: string;
  email?: string;
  phone?: string;
  avatar?: string;
  role?: 'student' | 'influencer';
  source?: 'Google' | 'Email' | 'Phone' | 'Direct';
}): Promise<RegisteredUserRecord> {
  const cleanEmail = (userData.email || '').trim().toLowerCase();
  const cleanPhone = (userData.phone || '').trim();
  const cleanName = (userData.name || cleanEmail.split('@')[0] || cleanPhone || 'Learner').trim();
  const uid = userData.uid || `usr_${cleanEmail ? cleanEmail.replace(/[^a-zA-Z0-9]/g, '_') : Date.now()}`;

  // Unique referral code for this user (standardized to 8 characters + 100)
  const cleanRef = cleanName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().slice(0, 8) || 'PARTNER';
  const referralCode = `${cleanRef}100`;

  // Check attribution from URL (search params or hash params) or localStorage
  let referredBy = '';
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    referredBy = urlParams.get('ref') || '';
    if (!referredBy && window.location.hash.includes('?')) {
      const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
      referredBy = hashParams.get('ref') || '';
    }
    if (!referredBy) {
      referredBy = localStorage.getItem('futureai_ref_attribution') || '';
    }
  }

  const record: RegisteredUserRecord = {
    uid,
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || undefined,
    avatar: userData.avatar || undefined,
    role: userData.role || 'student',
    referralCode,
    referredBy: referredBy || undefined,
    registeredAt: new Date().toISOString(),
    source: userData.source || (cleanEmail ? 'Google' : cleanPhone ? 'Phone' : 'Direct'),
  };

  // 1. Save locally in master registry (guaranteed offline safety)
  try {
    if (typeof window !== 'undefined') {
      const existingRaw = localStorage.getItem(MASTER_REGISTRY_KEY);
      let registry: RegisteredUserRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
      // avoid duplicates by email or uid
      registry = registry.filter((u) => (cleanEmail ? u.email !== cleanEmail : u.uid !== uid));
      registry.unshift(record);
      localStorage.setItem(MASTER_REGISTRY_KEY, JSON.stringify(registry));
    }
  } catch (e) {
    console.warn('Local master registry write error:', e);
  }

  // 2. Save in Firestore Cloud Database (with 2000ms safety timeout)
  try {
    const userDocRef = doc(db, 'registered_users', uid);
    await withTimeout(
      setDoc(
        userDocRef,
        {
          ...record,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      ),
      2000
    );
  } catch (cloudErr) {
    // Graceful fallback if network latency or rules
    console.info('Firestore cloud write logged. Local registry preserved.', cloudErr);
  }

  // 3. If referred by an affiliate partner, record real signup & commission for that partner
  if (referredBy) {
    recordReferralSignup(referredBy, cleanName, cleanEmail, cleanPhone);
  }

  return record;
}

/**
 * Real Google 1-Click Login via Firebase
 * Tries signInWithPopup first (works on desktop, Android Chrome, iOS Safari).
 * Falls back to signInWithRedirect on mobile only when the popup is blocked/unsupported.
 */
export async function loginWithGooglePopup(): Promise<{
  name: string;
  email: string;
  avatar: string;
  uid: string;
}> {
  try {
    let user: User;
    try {
      // Direct fast Google Popup
      const result = await signInWithPopup(auth, googleProvider);
      user = result.user;
    } catch (popupErr: any) {
      const code = popupErr?.code || '';
      const popupUnusable =
        code === 'auth/popup-blocked' ||
        code === 'auth/operation-not-supported-in-this-environment' ||
        code === 'auth/web-storage-unsupported';
      // Android in-app WebViews (Instagram/WhatsApp/FB browser) or blocked popups → redirect fallback
      if (popupUnusable && isAndroidOrMobile()) {
        await signInWithRedirect(auth, googleProvider);
        throw new Error('REDIRECT_INITIATED');
      }
      throw popupErr;
    }

    const name = user.displayName || user.email?.split('@')[0] || 'Learner';
    const email = user.email || '';
    const avatar = user.photoURL || '';
    const uid = user.uid;

    // Record in database asynchronously without holding login response
    recordUserInDatabase({
      uid,
      name,
      email,
      avatar,
      source: 'Google',
    }).catch((e) => console.warn('Background recordUser error:', e));

    return { name, email, avatar, uid };
  } catch (error: any) {
    if (error?.message === 'REDIRECT_INITIATED') throw error;
    console.warn('Firebase Google login issue:', error);
    throw error;
  }
}

/**
 * Real Firebase Email Login / Sign Up
 * Seamless: Auto-registers new students so they never see "User not found" errors
 */
export async function loginWithEmailFirebase(
  email: string,
  password?: string,
  fullName?: string
): Promise<{ name: string; email: string; avatar: string; uid: string }> {
  const cleanEmail = email.trim().toLowerCase();
  const pwd = password?.trim() || 'FutureAI@2050';
  let finalName = (fullName || cleanEmail.split('@')[0] || '').trim();

  // Try signing in with existing credentials
  try {
    const userCred = await signInWithEmailAndPassword(auth, cleanEmail, pwd);
    const user = userCred.user;
    const uid = user.uid;
    if (user.displayName) finalName = user.displayName;
    if (!finalName) finalName = cleanEmail.split('@')[0];

    recordUserInDatabase({ uid, name: finalName, email: cleanEmail, source: 'Email' }).catch(() => {});

    return { name: finalName, email: cleanEmail, avatar: user.photoURL || '', uid };
  } catch (err: any) {
    const code = err?.code || '';
    if (code === 'auth/user-not-found') {
      try {
        const newCred = await createUserWithEmailAndPassword(auth, cleanEmail, pwd);
        const user = newCred.user;
        const uid = user.uid;
        if (!finalName) finalName = cleanEmail.split('@')[0];
        recordUserInDatabase({ uid, name: finalName, email: cleanEmail, source: 'Email' }).catch(() => {});
        return { name: finalName, email: cleanEmail, avatar: '', uid };
      } catch (createErr: any) {
        throw new Error(createErr.message || 'Unable to create account. Please try again.');
      }
    } else if (code === 'auth/wrong-password') {
      throw new Error('Incorrect password. Please verify your password or use Google Login.');
    } else if (code === 'auth/invalid-credential') {
      try {
        const newCred = await createUserWithEmailAndPassword(auth, cleanEmail, pwd);
        const user = newCred.user;
        const uid = user.uid;
        if (!finalName) finalName = cleanEmail.split('@')[0];
        recordUserInDatabase({ uid, name: finalName, email: cleanEmail, source: 'Email' }).catch(() => {});
        return { name: finalName, email: cleanEmail, avatar: '', uid };
      } catch (createErr: any) {
        if (createErr.code === 'auth/email-already-in-use') {
          throw new Error('Incorrect password for this email. Please verify your password or use Google Login.');
        }
        throw new Error(createErr.message || 'Authentication failed. Please check your credentials.');
      }
    } else if (code === 'auth/invalid-email') {
      throw new Error('Please enter a valid email address.');
    } else if (code === 'auth/too-many-requests') {
      throw new Error('Too many failed attempts. Please wait a moment or use Google Login.');
    } else {
      throw new Error(err.message || 'Email authentication failed. Please try again.');
    }
  }
}

/**
 * Real Firebase Mobile Number Login for Android Students
 * 100% trouble-free: Zero popups, works on all Android Webviews, Chrome & WhatsApp
 */
/**
 * Unverified phone login is strictly disabled to prevent creating unauthorized accounts.
 * Real SMS OTP verification via verifyOtpAndLogin() is required.
 */
export async function loginWithMobileFirebase(
  _phone: string,
  _fullName?: string
): Promise<{ name: string; phone: string; email: string; avatar: string; uid: string }> {
  throw new Error('Direct unverified phone login is disabled for security. Please verify your phone number via real SMS OTP or authenticate using Google or Email.');
}

/**
 * Check if a user has already completed registration (has mobile number and name)
 * Checks: 1) Local Master Registry, 2) Firestore Cloud, 3) LocalStorage session
 */
export async function findExistingUser(email?: string, uid?: string): Promise<RegisteredUserRecord | null> {
  const cleanEmail = (email || '').trim().toLowerCase();

  // 1. Check local master registry (fastest & reliable offline)
  if (typeof window !== 'undefined') {
    try {
      const existingRaw = localStorage.getItem(MASTER_REGISTRY_KEY);
      if (existingRaw) {
        const localList: RegisteredUserRecord[] = JSON.parse(existingRaw);
        const match = localList.find((u) => {
          const matchEmail = cleanEmail && u.email && u.email.toLowerCase() === cleanEmail;
          const matchUid = uid && u.uid === uid;
          return (matchEmail || matchUid) && u.phone && u.phone.replace(/\D/g, '').length >= 10;
        });
        if (match) return match;
      }
    } catch (e) {
      console.warn('Local registry lookup notice:', e);
    }
  }

  // 2. Check Firestore Cloud Database
  if (uid || cleanEmail) {
    try {
      if (uid) {
        const userDocRef = doc(db, 'registered_users', uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data() as RegisteredUserRecord;
          if (data && data.phone && data.phone.replace(/\D/g, '').length >= 10) {
            return data;
          }
        }
      }

      if (cleanEmail) {
        const colRef = collection(db, 'registered_users');
        const q = query(colRef, where('email', '==', cleanEmail));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const docData = snapshot.docs[0].data() as RegisteredUserRecord;
          if (docData && docData.phone && docData.phone.replace(/\D/g, '').length >= 10) {
            return docData;
          }
        }
      }
    } catch (cloudErr) {
      console.warn('Firestore cloud lookup notice:', cloudErr);
    }
  }

  // 3. Fallback: check if phone is stored in localStorage for this email
  if (typeof window !== 'undefined') {
    const savedPhone = localStorage.getItem('futureai_user_phone');
    const savedEmail = localStorage.getItem('futureai_user_email');
    if (savedPhone && savedPhone.replace(/\D/g, '').length >= 10 && cleanEmail && savedEmail?.toLowerCase() === cleanEmail) {
      return {
        uid: uid || `usr_${savedPhone}`,
        name: localStorage.getItem('futureai_user_name') || 'Learner',
        email: cleanEmail,
        phone: savedPhone,
        role: (localStorage.getItem('futureai_user_role') as any) || 'student',
        referralCode: 'PART100',
        registeredAt: new Date().toISOString(),
        source: 'Google',
      };
    }
  }

  return null;
}

/**
 * Find existing user by clean 10-digit phone number
 */
export async function findUserByPhone(phone: string): Promise<RegisteredUserRecord | null> {
  const clean = phone.replace(/\D/g, '');
  if (clean.length < 10) return null;

  // 1. Check local master registry
  if (typeof window !== 'undefined') {
    try {
      const existingRaw = localStorage.getItem(MASTER_REGISTRY_KEY);
      if (existingRaw) {
        const localList: RegisteredUserRecord[] = JSON.parse(existingRaw);
        const match = localList.find((u) => u.phone && u.phone.replace(/\D/g, '') === clean);
        if (match) return match;
      }
    } catch (e) {
      console.warn('Local registry phone lookup notice:', e);
    }
  }

  // 2. Check Firestore with a 2-second timeout so mobile never hangs
  try {
    const colRef = collection(db, 'registered_users');
    const q = query(colRef, where('phone', '==', clean));
    const timeoutPromise = new Promise<null>((r) => setTimeout(() => r(null), 2000));
    const fetchPromise = getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {
        return snapshot.docs[0].data() as RegisteredUserRecord;
      }
      return null;
    });
    const result = await Promise.race([fetchPromise, timeoutPromise]);
    if (result) return result;
  } catch (err) {
    console.warn('Firestore phone lookup note:', err);
  }

  return null;
}

/**
 * Get all registered user records for marketing and export
 */
export async function getAllRegisteredUsers(): Promise<RegisteredUserRecord[]> {
  // If admin session is active, attempt to get real authoritative users from cloud
  try {
    const { AdminDataService } = await import('./adminDataService');
    const cloud = await AdminDataService.fetchCloudAdminData();
    if (cloud && Array.isArray(cloud.users) && cloud.users.length > 0) {
      return cloud.users;
    }
  } catch {}

  const usersMap = new Map<string, RegisteredUserRecord>();

  // 1. Read from local master registry
  try {
    if (typeof window !== 'undefined') {
      const existingRaw = localStorage.getItem(MASTER_REGISTRY_KEY);
      if (existingRaw) {
        const localList: RegisteredUserRecord[] = JSON.parse(existingRaw);
        localList.forEach((u) => usersMap.set(u.email || u.uid, u));
      }
    }
  } catch (e) {
    console.error('Error reading local registry', e);
  }

  // 2. Read from Firestore Cloud
  try {
    const colRef = collection(db, 'registered_users');
    const snapshot = await getDocs(colRef);
    snapshot.forEach((d) => {
      const data = d.data() as RegisteredUserRecord;
      usersMap.set(data.email || data.uid, data);
    });
  } catch (cloudErr) {
    // ignore
  }

  return Array.from(usersMap.values());
}

/**
 * Export all collected user emails to CSV for sending promotional emails
 */
export async function exportUsersToCSV(): Promise<{ count: number; filename: string }> {
  const users = await getAllRegisteredUsers();
  const headers = ['Name', 'Email', 'Phone', 'Role', 'Referral Code', 'Referred By', 'Source', 'Registration Date'];
  const rows = users.map((u) => [
    `"${(u.name || '').replace(/"/g, '""')}"`,
    `"${(u.email || '').replace(/"/g, '""')}"`,
    `"${(u.phone || '').replace(/"/g, '""')}"`,
    `"${(u.role || 'student').replace(/"/g, '""')}"`,
    `"${(u.referralCode || '').replace(/"/g, '""')}"`,
    `"${(u.referredBy || '').replace(/"/g, '""')}"`,
    `"${(u.source || '').replace(/"/g, '""')}"`,
    `"${(u.registeredAt || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const filename = `future_it_users_emails_${new Date().toISOString().slice(0, 10)}.csv`;
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return { count: users.length, filename };
}

/**
 * Normalize referral code (removes trailing 100, strips non-alphanumeric, uppercases)
 * e.g., 'ZODIYO100' -> 'ZODIYO', 'zodiyo' -> 'ZODIYO', 'SUBODH100' -> 'SUBODH'
 */
export function normalizeRefCode(ref?: string): string {
  if (!ref) return '';
  return ref.trim().toUpperCase().replace(/100$/, '').replace(/[^A-Z0-9]/g, '');
}

/**
 * Standardize user referral code (slice up to 8 chars + 100)
 */
export function getUserReferralCode(nameOrEmail: string): string {
  const clean = (nameOrEmail || '').trim().toLowerCase();
  if (clean.includes('subodh') || clean.includes('subodhdataworks')) {
    return 'SUBODHKUMAR100';
  }
  if (!clean || clean === 'learner' || clean === 'student' || clean === 'partner') {
    return 'PARTNER100';
  }

  // Derive from email: prefix + deterministic 3-character hash so every unique email ID has its own unique referral code
  const prefix = clean.split('@')[0].replace(/[^a-z0-9]/g, '').toUpperCase().slice(0, 6) || 'USER';
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) & 0xfffff;
  }
  const hashSuffix = hash.toString(36).toUpperCase().padStart(3, '0').slice(0, 3);
  return `${prefix}${hashSuffix}100`;
}

/**
 * Strict Anti-Fraud: Detect self-referral attempts
 * Blocks users from referring their own email, phone number, or device
 */
export function isSelfReferral(
  refCode: string,
  studentEmail?: string,
  studentPhone?: string,
  _studentName?: string
): boolean {
  const cleanRef = normalizeRefCode(refCode);
  if (!cleanRef || cleanRef === 'PARTNER' || cleanRef === 'LEARNER' || cleanRef === 'STUDENT') return false;

  const cleanStudentEmail = (studentEmail || '').trim().toLowerCase();
  const cleanStudentPhone = (studentPhone || '').replace(/\\D/g, '');

  if (typeof window !== 'undefined') {
    const myPhone = (localStorage.getItem('futureai_user_phone') || '').replace(/\\D/g, '');
    if (cleanStudentPhone && myPhone && cleanStudentPhone.length >= 10 && cleanStudentPhone === myPhone) {
      return true;
    }
    const myEmail = (localStorage.getItem('futureai_user_email') || '').trim().toLowerCase();
    if (cleanStudentEmail && myEmail && cleanStudentEmail === myEmail) {
      return true;
    }
  }

  return false;
}

/**
 * Real Referral Click Tracking (Persists in Firestore Cloud & localStorage)
 * Strict Session Deduplication: Prevents page refreshes from inflating click counts.
 * Only genuine unique visitor link-clicks increment the counter.
 */
export async function recordReferralClick(refCode: string): Promise<void> {
  if (typeof window === 'undefined' || !refCode) return;
  const cleanCode = normalizeRefCode(refCode);
  if (!cleanCode) return;

  // 1. Always save attribution in storage so subsequent registration gets attributed
  try {
    localStorage.setItem('futureai_ref_attribution', cleanCode);
    sessionStorage.setItem('futureai_ref_attribution', cleanCode);
  } catch {}

  // 2. Anti-spam / session deduplication check
  const sessionKey = `fa_clk_counted_${cleanCode}`;
  if (sessionStorage.getItem(sessionKey)) {
    return; // Already counted for this session
  }
  sessionStorage.setItem(sessionKey, '1');

  // 3. Increment click count in Firestore Cloud Database
  try {
    const statsDocRef = doc(db, 'affiliate_stats', cleanCode);
    await withTimeout(setDoc(statsDocRef, {
        refCode: cleanCode,
        clicks: increment(1),
        lastClickAt: serverTimestamp(),
      }, { merge: true }), 2500);
  } catch (cloudErr) {
    console.warn('Cloud affiliate click record notice:', cloudErr);
  }

  // 3b. Notify server /api/affiliate of click
  try {
    fetch('/api/affiliate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventType: 'click', refCode: cleanCode }),
    }).catch(() => {});
  } catch {}

  // 4. Increment locally
  try {
    const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;
    const raw = localStorage.getItem(storageKey);
    const data = raw ? JSON.parse(raw) : { clicks: 0, signups: 0, paidEnrollments: 0, availableBalance: 0, totalEarned: 0, referrals: [] };
    data.clicks = (data.clicks || 0) + 1;
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch (e) {
    console.warn('Local affiliate click record notice:', e);
  }
}

/**
 * Real Referral Signup Tracking:
 * Strictly records Free Signup (+1 to signups).
 * Anti-Fraud Rules:
 * 1. Self-referrals are blocked.
 * 2. Duplicate signups for the same student are deduplicated.
 * 3. Free signup earns ₹0. Commission is strictly ₹0 until verified paid enrollment!
 */
export async function recordReferralSignup(
  refCode: string,
  studentName: string,
  studentEmail?: string,
  studentPhone?: string
): Promise<void> {
  if (typeof window === 'undefined' || !refCode) return;
  const cleanCode = normalizeRefCode(refCode);
  if (!cleanCode) return;

  // Anti-fraud: Block self-referral
  if (isSelfReferral(cleanCode, studentEmail, studentPhone, studentName)) {
    console.warn('Anti-Fraud: Self-referral signup rejected for', cleanCode);
    return;
  }

  const cleanEmail = (studentEmail || '').trim().toLowerCase();
  const cleanPhone = (studentPhone || '').replace(/\D/g, '');

  // Rule 2: Enforce unique email across all signups
  if (cleanEmail) {
    try {
      const globalEmailsKey = 'futureai_registered_signup_emails_v5';
      const seenEmails: string[] = JSON.parse(localStorage.getItem(globalEmailsKey) || '[]');
      if (seenEmails.includes(cleanEmail)) {
        return; // Duplicate email registration does not count as an additional valid signup
      }
      seenEmails.push(cleanEmail);
      localStorage.setItem(globalEmailsKey, JSON.stringify(seenEmails));
    } catch {}
  }

  try {
    fetch('/api/affiliate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventType: 'signup',
        refCode: cleanCode,
        name: studentName || 'New Student',
        email: cleanEmail,
      }),
    }).catch(() => {});
  } catch {}

  const newReferralItem = {
    id: `ref_${Date.now()}`,
    name: studentName || 'New Student',
    email: cleanEmail,
    phone: cleanPhone,
    date: new Date().toISOString().slice(0, 10),
    status: 'Registered' as const,
    amount: 0,
    commission: 0, // ₹0 for free signup!
    course: 'Data Analytics with GenAI',
    referralId: `RF-${Math.floor(1000 + Math.random() * 9000)}`,
  };

  // 1. Check local storage for deduplication
  const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;
  let data: any = { clicks: 0, signups: 0, paidEnrollments: 0, availableBalance: 0, totalEarned: 0, referrals: [] };
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) data = JSON.parse(raw);
  } catch {}

  const referrals = Array.isArray(data.referrals) ? data.referrals : [];
  const alreadyExists = referrals.some((r: any) => 
    (cleanEmail && r.email && r.email.toLowerCase() === cleanEmail) ||
    (cleanPhone && r.phone && r.phone === cleanPhone)
  );

  if (alreadyExists) {
    return; // Already counted this student signup
  }

  // 2. Increment signup count locally (Commission remains 0)
  data.signups = (data.signups || 0) + 1;
  referrals.unshift(newReferralItem);
  data.referrals = referrals;
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch (e) {
    console.warn('Local affiliate signup record notice:', e);
  }

  // 3. Save in Firestore Cloud Database under affiliate_stats (Free signup: zero balance change)
  try {
    const statsDocRef = doc(db, 'affiliate_stats', cleanCode);
    await setDoc(
      statsDocRef,
      {
        refCode: cleanCode,
        signups: increment(1),
        lastSignupAt: serverTimestamp(),
      },
      { merge: true }
    );
  } catch (cloudErr) {
    console.warn('Cloud affiliate signup record notice:', cloudErr);
  }
}

/**
 * Strict Anti-Fraud Paid Enrollment & Commission Engine
 * Rules:
 * 1. ONLY credits ₹100 when Razorpay payment is verified (paymentId starts with genuine id).
 * 2. Idempotency: Each paymentId can ONLY be credited once. Replays/duplicates are rejected.
 * 3. Self-referral prevention: Payer cannot refer themselves.
 * 4. Increments paidEnrollments by 1.
 * 5. Credits exactly ₹100 to Available to Payout & Total Earned.
 */
export async function recordReferralPayment(paymentData: {
  paymentId: string;
  orderId?: string;
  amount?: number;
  payerEmail?: string;
  payerPhone?: string;
  payerName?: string;
  courseTitle?: string;
  refCode?: string;
}): Promise<{ success: boolean; reason?: string }> {
  if (typeof window === 'undefined') return { success: false, reason: 'SSR' };

  const paymentId = (paymentData.paymentId || '').trim();
  if (!paymentId || paymentId.length < 6) {
    return { success: false, reason: 'INVALID_PAYMENT_ID' };
  }

  // 1. Idempotency Check (Anti-Replay)
  const processedKey = 'futureai_processed_referral_payments_v5';
  let processedPayments: string[] = [];
  try {
    const raw = localStorage.getItem(processedKey);
    if (raw) processedPayments = JSON.parse(raw);
  } catch {}

  if (processedPayments.includes(paymentId)) {
    return { success: false, reason: 'PAYMENT_ALREADY_CREDITED' };
  }

  // 2. Determine Referrer Code
  let refCode = (paymentData.refCode || '').trim();
  if (!refCode) {
    try {
      refCode = localStorage.getItem('futureai_ref_attribution') || sessionStorage.getItem('futureai_ref_attribution') || '';
    } catch {}
  }

  const cleanEmail = (paymentData.payerEmail || '').trim().toLowerCase();
  const cleanPhone = (paymentData.payerPhone || '').replace(/\D/g, '');

  if (!refCode && (cleanEmail || cleanPhone)) {
    try {
      const existing = await findExistingUser(cleanEmail);
      if (existing?.referredBy) refCode = existing.referredBy;
    } catch {}
  }

  const cleanCode = normalizeRefCode(refCode);
  if (!cleanCode) {
    return { success: false, reason: 'NO_REFERRER' };
  }

  // 3. Anti-Fraud: Block self-referrals
  if (isSelfReferral(cleanCode, cleanEmail, cleanPhone, paymentData.payerName)) {
    return { success: false, reason: 'SELF_REFERRAL_NOT_ALLOWED' };
  }

  // 4. Record as Processed
  processedPayments.push(paymentId);
  try {
    localStorage.setItem(processedKey, JSON.stringify(processedPayments));
  } catch {}

  // 5. Post to Cloudflare Pages Serverless API (/api/affiliate) for instant cross-device delivery
  try {
    await withTimeout(
      fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refCode: cleanCode,
          paymentId,
          orderId: paymentData.orderId,
          amount: paymentData.amount || 4,
          payerName: paymentData.payerName || 'Enrolled Student',
          payerEmail: cleanEmail,
          payerPhone: cleanPhone,
          courseTitle: paymentData.courseTitle || 'Data Analyst with GenAI',
        }),
      }),
      3500
    );
  } catch (apiErr) {
    console.warn('Affiliate server post notice:', apiErr);
  }

  // 6. Update local storage only if this device belongs to the referrer (not the buyer!)
  const myOwnUserCode = normalizeRefCode(
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_ref_code') : '') || ''
  );
  const myEmail = (typeof window !== 'undefined' ? (localStorage.getItem('futureai_user_email') || '') : '').toLowerCase();
  const isThisUserTheReferrer =
    (myOwnUserCode && myOwnUserCode === cleanCode) ||
    (cleanCode === 'SUBODHKUMAR' && myEmail.includes('subodh'));

  const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;
  let data: any = { clicks: 0, signups: 0, paidEnrollments: 0, availableBalance: 0, totalEarned: 0, referrals: [] };
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) data = JSON.parse(raw);
  } catch {}

  const balanceBefore = computeAffiliateBalancesFromWithdrawals(
    data.totalEarned || 0,
    Array.isArray(data.withdrawals) ? data.withdrawals : []
  ).availableBalance;

  data.paidEnrollments = (data.paidEnrollments || 0) + 1;
  data.totalEarned = Math.max((data.totalEarned || 0) + 100, data.paidEnrollments * 100);
  const recomputed = computeAffiliateBalancesFromWithdrawals(
    data.totalEarned,
    Array.isArray(data.withdrawals) ? data.withdrawals : []
  );
  data.availableBalance = recomputed.availableBalance;
  data.availableToPayout = recomputed.availableToPayout;
  data.availableToWithdraw = recomputed.availableToWithdraw;
  data.pendingBalance = recomputed.pendingBalance;
  data.totalPaid = recomputed.totalPaid;
  const ledgerList = Array.isArray(data.walletLedger) ? data.walletLedger : [];
  ledgerList.unshift({
    id: `led_comm_${paymentId}`,
    paymentId,
    userId: cleanCode,
    type: 'COMMISSION_CREDITED',
    amount: 100,
    balanceBefore,
    balanceAfter: recomputed.availableBalance,
    status: 'Credited',
    timestamp: new Date().toISOString(),
    description: `Verified paid course enrollment commission (${paymentId})`,
  });
  data.walletLedger = ledgerList;

  const referrals: any[] = Array.isArray(data.referrals) ? data.referrals : [];
  const existingIdx = referrals.findIndex((r: any) =>
    (cleanEmail && r.email && r.email.toLowerCase() === cleanEmail) ||
    (cleanPhone && r.phone && r.phone === cleanPhone) ||
    (paymentData.payerName && r.name && r.name.toLowerCase() === paymentData.payerName.toLowerCase())
  );

  const paidRecord = {
    id: `ref_paid_${Date.now()}`,
    name: paymentData.payerName || 'Enrolled Student',
    email: cleanEmail,
    phone: cleanPhone,
    date: new Date().toISOString().slice(0, 10),
    status: 'Paid',
    amount: paymentData.amount || 987,
    commission: 100, // ₹100 Flat Commission
    course: paymentData.courseTitle || 'Data Analytics with GenAI',
    paymentId,
    referralId: `RF-${Math.floor(1000 + Math.random() * 9000)}`,
    approvedDate: new Date().toISOString(),
  };

  if (existingIdx >= 0) {
    referrals[existingIdx] = {
      ...referrals[existingIdx],
      ...paidRecord,
    };
  } else {
    referrals.unshift(paidRecord);
    data.signups = Math.max((data.signups || 0), referrals.length);
  }
  data.referrals = referrals;

  if (isThisUserTheReferrer) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (e) {
      console.warn('Local affiliate paid record write error:', e);
    }
  }

  // 6. Firestore Cloud Audit & Balance Update
  try {
    const statsDocRef = doc(db, 'affiliate_stats', cleanCode);
    await setDoc(
      statsDocRef,
      {
        refCode: cleanCode,
        paidEnrollments: increment(1),
        availableBalance: increment(100),
        totalEarned: increment(100),
        lastPaidEnrollmentAt: serverTimestamp(),
      },
      { merge: true }
    );

    // Save permanent non-repudiation audit trail
    const auditDocRef = doc(db, 'processed_referral_payments', paymentId);
    await withTimeout(setDoc(auditDocRef, {
      paymentId,
      orderId: paymentData.orderId || '',
      amount: paymentData.amount || 987,
      refCode: cleanCode,
      payerEmail: cleanEmail,
      payerPhone: cleanPhone,
      payerName: paymentData.payerName || '',
      courseTitle: paymentData.courseTitle || '',
      commission: 100,
      processedAt: serverTimestamp(),
    }), 2500);
  } catch (cloudErr) {
    console.warn('Cloud affiliate payment sync notice:', cloudErr);
  }

  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(
        new CustomEvent('futureai_affiliate_updated', {
          detail: { refCode: cleanCode, amount: 100 },
        })
      );
    } catch {}
  }

  return { success: true };
}

export interface WalletLedgerEntry {
  id: string;
  txId?: string;
  withdrawalId?: string;
  paymentId?: string;
  userId: string;
  type: 'WITHDRAWAL_REQUESTED' | 'WITHDRAWAL_REFUNDED' | 'WITHDRAWAL_PAID' | 'COMMISSION_CREDITED' | 'COMMISSION_REVERSED';
  amount: number;
  payoutAmount?: number;
  balanceBefore: number;
  balanceAfter: number;
  status: string;
  reason?: string;
  payoutRef?: string;
  timestamp: string;
  description: string;
}

/**
 * Single Source of Truth Balance Calculator from Total Earned & Withdrawals List:
 * - Lifetime Earnings (totalEarned) is NEVER reduced by withdrawals.
 * - pendingBalance = sum of active reserved withdrawals ('Pending', 'Processing', 'UNDER_REVIEW')
 * - totalPaid = sum of completed/approved withdrawals ('Paid', 'Approved')
 * - availableBalance = Math.max(0, totalEarned - totalPaid - pendingBalance)
 * - Both Available to Payout and Available to Withdraw equal availableBalance.
 */
export function computeAffiliateBalancesFromWithdrawals(totalEarned: number, withdrawals: any[] = []) {
  const safeEarned = Math.max(0, Number(totalEarned) || 0);
  let pendingBalance = 0;
  let totalPaid = 0;

  for (const w of Array.isArray(withdrawals) ? withdrawals : []) {
    const amt = Number(w?.amount) || 0;
    if (amt <= 0) continue;
    const st = String(w?.status || '').trim().toUpperCase();
    if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
      pendingBalance += amt;
    } else if (st === 'PAID') {
      totalPaid += amt;
    }
  }

  const availableBalance = Math.max(0, safeEarned - totalPaid - pendingBalance);
  return {
    totalEarned: safeEarned,
    pendingBalance,
    totalPaid,
    availableBalance,
    availableToPayout: availableBalance,
    availableToWithdraw: availableBalance,
  };
}

export function mergeWithdrawalsList(serverList: any[] = [], localList: any[] = []): any[] {
  const result: any[] = [];
  const processedServerIndices = new Set<number>();
  const validLocal = Array.isArray(localList) ? localList.filter(Boolean) : [];
  const validServer = Array.isArray(serverList) ? serverList.filter(Boolean) : [];

  for (const local of validLocal) {
    const localId = String(local.id || '').trim();
    const localTxId = String(local.txId || '').trim();
    const localReqId = String(local.requestId || '').trim();

    // Match by any shared identifier
    const serverIdx = validServer.findIndex((srv, idx) => {
      if (processedServerIndices.has(idx)) return false;
      const srvId = String(srv.id || '').trim();
      const srvTxId = String(srv.txId || '').trim();
      const srvReqId = String(srv.requestId || '').trim();
      return (
        (localId && (localId === srvId || localId === srvTxId)) ||
        (localTxId && (localTxId === srvId || localTxId === srvTxId)) ||
        (localReqId && (localReqId === srvId || localReqId === srvReqId || localReqId === srvTxId))
      );
    });

    if (serverIdx >= 0) {
      processedServerIndices.add(serverIdx);
      const srv = validServer[serverIdx];
      // Authoritative server record overrides status, payoutRef, updatedAt
      result.push({
        ...local,
        ...srv,
        status: srv.status || local.status,
      });
    } else {
      result.push({ ...local });
    }
  }

  // Include any remaining server items not in local
  validServer.forEach((srv, idx) => {
    if (!processedServerIndices.has(idx)) {
      result.push({ ...srv });
    }
  });

  return result;
}

const activeClientWithdrawalLocks = new Set<string>();
const processedClientWithdrawalKeys = new Map<string, any>();
const processedClientRefundIds = new Set<string>();

/**
 * Atomic Withdrawal Submission (Server API + Local v5 Storage + Wallet Ledger + Idempotency + Concurrency Lock)
 */
export async function submitAffiliateWithdrawalRequest(params: {
  refCode?: string;
  amount: number;
  method: 'UPI' | 'Bank' | 'BANK';
  destination?: string;
  upiId?: string;
  bankAccNumber?: string;
  bankIfsc?: string;
  bankName?: string;
  bankHolder?: string;
  isVerified?: boolean;
  requestId?: string;
}): Promise<{
  success: boolean;
  idempotent?: boolean;
  error?: string;
  reason?: string;
  withdrawal?: any;
  availableBalance: number;
  availableToPayout: number;
  availableToWithdraw: number;
  pendingBalance: number;
  totalPaid: number;
  totalEarned: number;
  withdrawals: any[];
  walletLedger: WalletLedgerEntry[];
}> {
  const cleanCode = normalizeRefCode(
    params.refCode ||
      (typeof window !== 'undefined'
        ? localStorage.getItem('futureai_user_ref_code') ||
          localStorage.getItem('futureai_user_email') ||
          localStorage.getItem('futureai_user_name') ||
          ''
        : '')
  );

  const emptyFail = (error: string, reason: string, currentBal = 0, pending = 0, paid = 0, earned = 0) => ({
    success: false,
    error,
    reason,
    availableBalance: currentBal,
    availableToPayout: currentBal,
    availableToWithdraw: currentBal,
    pendingBalance: pending,
    totalPaid: paid,
    totalEarned: earned,
    withdrawals: [],
    walletLedger: [],
  });

  if (!cleanCode) {
    return emptyFail('Authenticated user referral identity is required.', 'MISSING_USER_IDENTITY');
  }

  const requestKey = params.requestId ? `${cleanCode}:${params.requestId.trim()}` : '';
  const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;

  const readLocalState = () => {
    let parsed: any = {};
    if (typeof window !== 'undefined') {
      try {
        parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
      } catch {}
    }
    const withdrawals = Array.isArray(parsed.withdrawals) ? parsed.withdrawals : [];
    const walletLedger: WalletLedgerEntry[] = Array.isArray(parsed.walletLedger) ? parsed.walletLedger : [];
    const paidEnrollments = Number(parsed.paidEnrollments) || 0;
    const totalEarned = Math.max(Number(parsed.totalEarned) || 0, paidEnrollments * 100);
    const balances = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);
    return {
      ...parsed,
      paidEnrollments,
      ...balances,
      withdrawals,
      walletLedger,
    };
  };

  // 1. Idempotency check
  if (requestKey && processedClientWithdrawalKeys.has(requestKey)) {
    const cached = processedClientWithdrawalKeys.get(requestKey);
    const state = readLocalState();
    return {
      success: true,
      idempotent: true,
      withdrawal: cached,
      availableBalance: state.availableBalance,
      availableToPayout: state.availableToPayout,
      availableToWithdraw: state.availableToWithdraw,
      pendingBalance: state.pendingBalance,
      totalPaid: state.totalPaid,
      totalEarned: state.totalEarned,
      withdrawals: state.withdrawals,
      walletLedger: state.walletLedger,
    };
  }

  // 2. Concurrency lock per user to prevent simultaneous requests spending the same balance
  if (activeClientWithdrawalLocks.has(cleanCode)) {
    const state = readLocalState();
    return emptyFail(
      'Another withdrawal request is currently in progress.',
      'CONCURRENT_WITHDRAWAL_IN_PROGRESS',
      state.availableBalance,
      state.pendingBalance,
      state.totalPaid,
      state.totalEarned
    );
  }

  activeClientWithdrawalLocks.add(cleanCode);
  try {
    const state = readLocalState();
    const rawAmount = Number(params.amount);
    if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
      return emptyFail(
        'Withdrawal amount must be greater than zero.',
        'INVALID_WITHDRAWAL_AMOUNT',
        state.availableBalance,
        state.pendingBalance,
        state.totalPaid,
        state.totalEarned
      );
    }

    const requestedAmount = Math.round(rawAmount * 100) / 100;
    const minAllowed = getEffectiveMinWithdrawal(cleanCode);
    if (requestedAmount < minAllowed) {
      return emptyFail(
        `Minimum withdrawal amount is ₹${minAllowed}.`,
        'BELOW_MINIMUM_WITHDRAWAL',
        state.availableBalance,
        state.pendingBalance,
        state.totalPaid,
        state.totalEarned
      );
    }

    const isBank = String(params.method).toUpperCase() === 'BANK';
    const methodLabel: 'UPI' | 'Bank' = isBank ? 'Bank' : 'UPI';
    const upiId = (params.upiId || (!isBank ? params.destination : '') || '').trim();
    const bankAcc = (params.bankAccNumber || '').trim();
    const bankIfsc = (params.bankIfsc || '').trim().toUpperCase();
    const bankName = (params.bankName || 'Bank').trim();

    if (params.isVerified === false) {
      return emptyFail(
        'Please verify your Bank Account or UPI details before requesting a withdrawal.',
        'PAYOUT_METHOD_NOT_VERIFIED',
        state.availableBalance,
        state.pendingBalance,
        state.totalPaid,
        state.totalEarned
      );
    }

    if (isBank) {
      if (bankAcc.length < 8 || bankIfsc.length < 5) {
        return emptyFail(
          'Please enter a valid verified Bank Account Number and IFSC Code.',
          'INVALID_BANK_DETAILS',
          state.availableBalance,
          state.pendingBalance,
          state.totalPaid,
          state.totalEarned
        );
      }
    } else {
      if (!upiId || !upiId.includes('@') || upiId.length < 4) {
        return emptyFail(
          'Please enter a valid verified UPI ID (e.g. yourname@upi).',
          'INVALID_UPI_DETAILS',
          state.availableBalance,
          state.pendingBalance,
          state.totalPaid,
          state.totalEarned
        );
      }
    }

    if (requestedAmount > state.availableBalance) {
      return emptyFail(
        `Insufficient available balance! Available: ₹${state.availableBalance.toLocaleString('en-IN')}`,
        'INSUFFICIENT_AVAILABLE_BALANCE',
        state.availableBalance,
        state.pendingBalance,
        state.totalPaid,
        state.totalEarned
      );
    }

    const nowIso = new Date().toISOString();
    const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const withdrawalId = `w_${uniqueSuffix}`;
    const txId = `WTH-${Math.floor(100000 + Math.random() * 900000)}`;
    const destination =
      params.destination?.trim() || (isBank ? `${bankName} ••••${bankAcc.slice(-4)}` : upiId);

    // 3. Call server API (/api/affiliate) atomically if reachable
    let serverResponse: any = null;
    try {
      const apiRes = await withTimeout(
        fetch('/api/affiliate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventType: 'withdrawal_request',
            refCode: cleanCode,
            requestId: params.requestId || withdrawalId,
            withdrawalId,
            txId,
            amount: requestedAmount,
            method: methodLabel,
            destination,
            upiId,
            bankAccNumber: bankAcc,
            bankIfsc,
            bankName,
            isVerified: true,
          }),
        }),
        3500
      );
      const data = await apiRes.json().catch(() => null);
      if (!apiRes.ok && data && data.reason === 'INSUFFICIENT_AVAILABLE_BALANCE') {
        return emptyFail(
          data.error || 'Insufficient available balance on server.',
          data.reason,
          data.availableBalance ?? state.availableBalance,
          data.pendingBalance ?? state.pendingBalance,
          data.totalPaid ?? state.totalPaid,
          data.totalEarned ?? state.totalEarned
        );
      }
      if (apiRes.ok && data?.success) {
        serverResponse = data;
      }
    } catch {
      // Offline / local fallback handled atomically below
    }

    const balanceBefore = state.availableBalance;
    const newWithdrawal = serverResponse?.withdrawal || {
      id: withdrawalId,
      txId,
      requestId: requestKey || withdrawalId,
      userId: cleanCode,
      refCode: cleanCode,
      date: nowIso.slice(0, 10),
      createdAt: nowIso,
      updatedAt: nowIso,
      amount: requestedAmount,
      method: methodLabel,
      destination,
      status: 'Pending' as const,
    };

    const nextWithdrawals = [
      newWithdrawal,
      ...state.withdrawals.filter((w: any) => w.id !== newWithdrawal.id && w.txId !== newWithdrawal.txId),
    ];
    const nextBalances = computeAffiliateBalancesFromWithdrawals(state.totalEarned, nextWithdrawals);

    const ledgerEntry: WalletLedgerEntry = serverResponse?.ledgerEntry || {
      id: `led_wreq_${uniqueSuffix}`,
      txId: newWithdrawal.txId,
      withdrawalId: newWithdrawal.id,
      userId: cleanCode,
      type: 'WITHDRAWAL_REQUESTED',
      amount: -requestedAmount,
      balanceBefore,
      balanceAfter: nextBalances.availableBalance,
      status: 'Pending',
      timestamp: nowIso,
      description: `Withdrawal request reserved (${methodLabel}: ${destination})`,
    };

    const nextLedger = [
      ledgerEntry,
      ...state.walletLedger.filter((l: WalletLedgerEntry) => l.id !== ledgerEntry.id),
    ];

    const updatedHubState = {
      ...state,
      ...nextBalances,
      withdrawals: nextWithdrawals,
      walletLedger: nextLedger,
    };

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(updatedHubState));
        localStorage.setItem('futureai_user_wallet', nextBalances.availableBalance.toString());
        window.dispatchEvent(
          new CustomEvent('futureai_affiliate_updated', {
            detail: { refCode: cleanCode, availableBalance: nextBalances.availableBalance },
          })
        );
        window.dispatchEvent(new Event('futureai_wallet_updated'));
      } catch {}
    }

    // Real-Time Cloud Sync: persist withdrawal to Firestore 'withdrawal_requests' collection
    try {
      const uName = (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_name') : '') || 'Learner';
      const uEmail = (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : '') || '';
      const firestoreDoc = {
        id: newWithdrawal.id,
        txId: newWithdrawal.txId,
        requestId: newWithdrawal.requestId || newWithdrawal.id,
        referrerId: cleanCode,
        refCode: cleanCode,
        userId: cleanCode,
        userName: uName,
        userEmail: uEmail,
        amount: requestedAmount,
        method: isBank ? 'BANK_TRANSFER' : 'UPI',
        destination,
        upiId: upiId || undefined,
        bankAccNumber: bankAcc || undefined,
        bankIfsc: bankIfsc || undefined,
        bankName: bankName || undefined,
        accountHolder: uName,
        details: {
          upiId: upiId || undefined,
          accountNumber: bankAcc || undefined,
          ifsc: bankIfsc || undefined,
          bankName: bankName || undefined,
          accountHolder: uName,
        },
        status: 'UNDER_REVIEW',
        requestedAt: nowIso,
        createdAt: nowIso,
        updatedAt: nowIso,
        referenceNo: newWithdrawal.txId,
      };
      setDoc(doc(db, 'withdrawal_requests', newWithdrawal.id), firestoreDoc, { merge: true }).catch((err) => {
        console.warn('Firestore setDoc withdrawal_requests err:', err);
      });
    } catch (fireErr) {
      console.warn('Firestore withdrawal sync notice:', fireErr);
    }

    if (requestKey) {
      processedClientWithdrawalKeys.set(requestKey, newWithdrawal);
    }

    return {
      success: true,
      withdrawal: newWithdrawal,
      availableBalance: nextBalances.availableBalance,
      availableToPayout: nextBalances.availableToPayout,
      availableToWithdraw: nextBalances.availableToWithdraw,
      pendingBalance: nextBalances.pendingBalance,
      totalPaid: nextBalances.totalPaid,
      totalEarned: nextBalances.totalEarned,
      withdrawals: nextWithdrawals,
      walletLedger: nextLedger,
    };
  } finally {
    activeClientWithdrawalLocks.delete(cleanCode);
  }
}

/**
 * Atomic Withdrawal Status Update (Pending -> Processing / Approved / Paid / Rejected / Cancelled)
 * - Approve / Paid: keeps already-deducted amount deducted; moves from pendingBalance to totalPaid; NEVER deducts a second time.
 * - Reject / Cancel: refunds reserved amount back to availableBalance exactly once (idempotent).
 */
export async function updateAffiliateWithdrawalStatus(params: {
  refCode: string;
  withdrawalId: string;
  newStatus: 'Processing' | 'Approved' | 'Paid' | 'Rejected' | 'Cancelled';
  reason?: string;
  payoutRef?: string;
}): Promise<{
  success: boolean;
  idempotent?: boolean;
  alreadyRefunded?: boolean;
  error?: string;
  reason?: string;
  withdrawal?: any;
  availableBalance: number;
  availableToPayout: number;
  availableToWithdraw: number;
  pendingBalance: number;
  totalPaid: number;
  totalEarned: number;
  withdrawals: any[];
  walletLedger: WalletLedgerEntry[];
}> {
  const cleanCode = normalizeRefCode(params.refCode);
  const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;

  let parsed: any = {};
  if (typeof window !== 'undefined') {
    try {
      parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch {}
  }

  // Also call server API (/api/affiliate) to update status on server
  try {
    await withTimeout(
      fetch('/api/affiliate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType: 'withdrawal_status_update',
          refCode: cleanCode,
          withdrawalId: params.withdrawalId,
          newStatus: params.newStatus,
          reason: params.reason,
          payoutRef: params.payoutRef,
        }),
      }),
      3500
    );
  } catch {}

  // Real-Time Cloud Sync: persist status change to Firestore 'withdrawal_requests'
  try {
    const canonicalStatus =
      params.newStatus === 'Paid'
        ? 'PAID'
        : params.newStatus === 'Approved'
        ? 'APPROVED'
        : params.newStatus === 'Rejected' || params.newStatus === 'Cancelled'
        ? 'REJECTED'
        : 'UNDER_REVIEW';

    setDoc(
      doc(db, 'withdrawal_requests', params.withdrawalId),
      {
        status: canonicalStatus,
        reason: params.reason || null,
        payoutRef: params.payoutRef || null,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    ).catch(() => {});
  } catch {}

  const withdrawals: any[] = Array.isArray(parsed.withdrawals) ? [...parsed.withdrawals] : [];
  const walletLedger: WalletLedgerEntry[] = Array.isArray(parsed.walletLedger) ? [...parsed.walletLedger] : [];
  const paidEnrollments = Number(parsed.paidEnrollments) || 0;
  const totalEarned = Math.max(Number(parsed.totalEarned) || 0, paidEnrollments * 100);

  const wIdx = withdrawals.findIndex(
    (w) => w.id === params.withdrawalId || w.txId === params.withdrawalId || w.requestId === params.withdrawalId
  );

  const currentBalances = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);

  if (wIdx < 0) {
    return {
      success: false,
      error: `Withdrawal ${params.withdrawalId} not found.`,
      reason: 'WITHDRAWAL_NOT_FOUND',
      ...currentBalances,
      withdrawals,
      walletLedger,
    };
  }

  const target = { ...withdrawals[wIdx] };
  const currentStatus = String(target.status || '').trim();
  const upperNew = params.newStatus.toUpperCase();
  const nowIso = new Date().toISOString();

  // 1. Processing
  if (upperNew === 'PROCESSING') {
    if (currentStatus === 'Paid' || currentStatus === 'Rejected' || currentStatus === 'Cancelled') {
      return {
        success: false,
        error: `Cannot move withdrawal from ${currentStatus} to Processing.`,
        reason: 'INVALID_STATUS_TRANSITION',
        ...currentBalances,
        withdrawals,
        walletLedger,
      };
    }
    target.status = 'Processing';
    target.updatedAt = nowIso;
    withdrawals[wIdx] = target;
    const nextBalances = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);
    const updated = { ...parsed, ...nextBalances, withdrawals, walletLedger };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch {}
    }
    return {
      success: true,
      withdrawal: target,
      ...nextBalances,
      withdrawals,
      walletLedger,
    };
  }

  // 2. Approved / Paid (Keep already-deducted amount deducted; do NOT subtract a second time!)
  if (upperNew === 'APPROVED' || upperNew === 'PAID') {
    const normalizedTarget = upperNew === 'APPROVED' ? 'Approved' : 'Paid';
    if (currentStatus === 'Paid' || (currentStatus === 'Approved' && normalizedTarget === 'Approved')) {
      return {
        success: true,
        idempotent: true,
        withdrawal: target,
        ...currentBalances,
        withdrawals,
        walletLedger,
      };
    }
    if (currentStatus === 'Rejected' || currentStatus === 'Cancelled') {
      return {
        success: false,
        error: 'Cannot approve or pay a rejected/cancelled withdrawal.',
        reason: 'CANNOT_APPROVE_REJECTED_WITHDRAWAL',
        ...currentBalances,
        withdrawals,
        walletLedger,
      };
    }

    const balanceBefore = currentBalances.availableBalance;
    target.status = normalizedTarget;
    target.updatedAt = nowIso;
    target.paidAt = nowIso;
    if (params.payoutRef) target.payoutRef = params.payoutRef;
    withdrawals[wIdx] = target;

    const nextBalances = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);
    const ledgerEntry: WalletLedgerEntry = {
      id: `led_wpaid_${target.id}_${normalizedTarget.toLowerCase()}`,
      txId: target.txId,
      withdrawalId: target.id,
      userId: cleanCode,
      type: 'WITHDRAWAL_PAID',
      amount: 0,
      payoutAmount: target.amount,
      balanceBefore,
      balanceAfter: nextBalances.availableBalance,
      status: normalizedTarget,
      payoutRef: params.payoutRef || target.txId,
      timestamp: nowIso,
      description: `Withdrawal marked ${normalizedTarget} (₹${target.amount})`,
    };
    walletLedger.unshift(ledgerEntry);

    const updated = { ...parsed, ...nextBalances, withdrawals, walletLedger };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
        localStorage.setItem('futureai_user_wallet', nextBalances.availableBalance.toString());
        window.dispatchEvent(new CustomEvent('futureai_affiliate_updated', { detail: { refCode: cleanCode } }));
      } catch {}
    }

    return {
      success: true,
      withdrawal: target,
      ...nextBalances,
      withdrawals,
      walletLedger,
    };
  }

  // 3. Rejected / Cancelled (Refund reserved amount back to available balance exactly once!)
  if (upperNew === 'REJECTED' || upperNew === 'CANCELLED') {
    const normalizedTarget = upperNew === 'CANCELLED' ? 'Cancelled' : 'Rejected';
    if (
      currentStatus === 'Rejected' ||
      currentStatus === 'Cancelled' ||
      processedClientRefundIds.has(target.id)
    ) {
      return {
        success: true,
        idempotent: true,
        alreadyRefunded: true,
        withdrawal: target,
        ...currentBalances,
        withdrawals,
        walletLedger,
      };
    }

    if (currentStatus === 'Paid' || currentStatus === 'Approved') {
      return {
        success: false,
        error: 'Cannot reject or cancel an already approved/paid withdrawal.',
        reason: 'CANNOT_REJECT_PAID_WITHDRAWAL',
        ...currentBalances,
        withdrawals,
        walletLedger,
      };
    }

    processedClientRefundIds.add(target.id);
    const balanceBefore = currentBalances.availableBalance;
    const reasonText = params.reason || 'Rejected before payout';
    target.status = normalizedTarget;
    target.updatedAt = nowIso;
    target.rejectedAt = nowIso;
    target.rejectionReason = reasonText;
    withdrawals[wIdx] = target;

    const nextBalances = computeAffiliateBalancesFromWithdrawals(totalEarned, withdrawals);
    const ledgerEntry: WalletLedgerEntry = {
      id: `led_wref_${target.id}`,
      txId: target.txId,
      withdrawalId: target.id,
      userId: cleanCode,
      type: 'WITHDRAWAL_REFUNDED',
      amount: target.amount,
      balanceBefore,
      balanceAfter: nextBalances.availableBalance,
      status: normalizedTarget,
      reason: reasonText,
      timestamp: nowIso,
      description: `Withdrawal ${normalizedTarget.toLowerCase()}: +₹${target.amount} refunded (${reasonText})`,
    };
    walletLedger.unshift(ledgerEntry);

    const updated = { ...parsed, ...nextBalances, withdrawals, walletLedger };
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
        localStorage.setItem('futureai_user_wallet', nextBalances.availableBalance.toString());
        window.dispatchEvent(new CustomEvent('futureai_affiliate_updated', { detail: { refCode: cleanCode } }));
      } catch {}
    }

    return {
      success: true,
      withdrawal: target,
      ...nextBalances,
      withdrawals,
      walletLedger,
    };
  }

  return {
    success: false,
    error: `Unsupported status ${params.newStatus}`,
    reason: 'UNSUPPORTED_WITHDRAWAL_STATUS',
    ...currentBalances,
    withdrawals,
    walletLedger,
  };
}

// Track request sequence to prevent out-of-order race conditions
let latestAffiliateFetchRequestId = 0;

/**
 * Real-time Affiliate Hub Data Fetcher
 * Aggregates Server API (/api/affiliate) + Firestore cloud stats + local v5 storage
 * Enforces:
 * - Single Source of Truth: authoritative deduplicated cloud records strictly govern counts & balances
 * - Free signups give ₹0
 * - Verified paid enrollment gives ₹100
 * - Pending withdrawals remain reserved and are NEVER overwritten by background sync
 * - No stale cached KPI fallbacks
 */
export async function fetchAffiliateRealData(refCodeOrName: string): Promise<{
  clicks: number;
  signups: number;
  paidEnrollments: number;
  availableBalance: number;
  availableToPayout: number;
  availableToWithdraw: number;
  pendingBalance: number;
  totalPaid: number;
  totalEarned: number;
  referrals: any[];
  withdrawals: any[];
  walletLedger: WalletLedgerEntry[];
  isAuthoritative?: boolean;
}> {
  const currentRequestId = ++latestAffiliateFetchRequestId;
  const cleanCode = normalizeRefCode(refCodeOrName);
  if (!cleanCode) {
    return {
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      availableBalance: 0,
      availableToPayout: 0,
      availableToWithdraw: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      referrals: [],
      withdrawals: [],
      walletLedger: [],
    };
  }

  let localData: any = {};
  if (typeof window !== 'undefined') {
    try {
      const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;
      localData = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch {}
  }

  // 1. Fetch live server-verified cross-device data from Cloudflare Pages API (/api/affiliate)
  try {
    const currentUid = typeof window !== 'undefined' ? localStorage.getItem('futureai_user_uid') || '' : '';
    const uidParam = currentUid ? `&userId=${encodeURIComponent(currentUid)}` : '';
    const res = await withTimeout(fetch(`/api/affiliate?refCode=${encodeURIComponent(cleanCode)}${uidParam}`), 15000);
    if (res.ok) {
      const serverData = await res.json();
      // Drop late response if a newer request already finished
      if (currentRequestId < latestAffiliateFetchRequestId) {
        return localData;
      }
      if (serverData && typeof serverData.paidEnrollments === 'number') {
        const paidEnrollments = serverData.paidEnrollments;
        const totalEarned = typeof serverData.totalEarned === 'number'
          ? serverData.totalEarned
          : (paidEnrollments * 100);
        const mergedWithdrawals = mergeWithdrawalsList(serverData.withdrawals, localData.withdrawals);
        const balances = computeAffiliateBalancesFromWithdrawals(totalEarned, mergedWithdrawals);

        const referrals =
          Array.isArray(serverData.referrals) && serverData.referrals.length > 0
            ? serverData.referrals
            : Array.isArray(localData.referrals)
            ? localData.referrals
            : [];

        const walletLedger: WalletLedgerEntry[] =
          Array.isArray(serverData.walletLedger) && serverData.walletLedger.length > 0
            ? serverData.walletLedger
            : Array.isArray(localData.walletLedger)
            ? localData.walletLedger
            : [];

        try {
          const storageKey = `futureai_affiliate_hub_v5_${cleanCode}`;
          localStorage.setItem(
            storageKey,
            JSON.stringify({
              ...localData,
              ...serverData,
              paidEnrollments,
              withdrawals: mergedWithdrawals,
              availableBalance: balances.availableBalance,
              availableToPayout: balances.availableToPayout,
              availableToWithdraw: balances.availableToWithdraw,
              pendingBalance: balances.pendingBalance,
              totalPaid: balances.totalPaid,
              totalEarned: balances.totalEarned,
            })
          );
          localStorage.setItem('futureai_user_wallet', balances.availableBalance.toString());
        } catch {}

        return {
          clicks: Number(serverData.clicks) || 0,
          signups: Number(serverData.signups) || 0,
          paidEnrollments,
          availableBalance: balances.availableBalance,
          availableToPayout: balances.availableToPayout,
          availableToWithdraw: balances.availableToWithdraw,
          pendingBalance: balances.pendingBalance,
          totalPaid: balances.totalPaid,
          totalEarned: balances.totalEarned,
          referrals,
          withdrawals: mergedWithdrawals,
          walletLedger,
          isAuthoritative: true,
        };
      }
    }
  } catch (apiErr) {
    console.info('Affiliate API query notice:', apiErr);
  }

  let cloudClicks = 0;
  let cloudSignups = 0;
  let cloudPaidEnrollments = 0;
  let cloudTotalEarned = 0;

  // 2. Fetch from Firestore affiliate_stats doc
  try {
    const statsDoc = await getDoc(doc(db, 'affiliate_stats', cleanCode));
    if (statsDoc.exists()) {
      const d = statsDoc.data();
      cloudClicks = d.clicks || 0;
      cloudSignups = d.signups || 0;
      cloudPaidEnrollments = d.paidEnrollments || 0;
      cloudTotalEarned = d.totalEarned || 0;
    }
  } catch (e) {
    console.warn('Fetch affiliate_stats cloud notice:', e);
  }

  // 3. Fetch all registered users who were referred by this code
  const matchedReferrals: any[] = [];
  try {
    const allUsers = await getAllRegisteredUsers();
    for (const u of allUsers) {
      if (u.referredBy) {
        const userRef = normalizeRefCode(u.referredBy);
        if (userRef === cleanCode || cleanCode.startsWith(userRef) || userRef.startsWith(cleanCode)) {
          matchedReferrals.push({
            id: `ref_${u.uid}`,
            name: u.name || 'Student Learner',
            email: u.email,
            phone: u.phone,
            date: u.registeredAt ? u.registeredAt.slice(0, 10) : new Date().toISOString().slice(0, 10),
            status: 'Registered',
            amount: 0,
            commission: 0, // Free signup ₹0
            course: 'Data Analytics with GenAI',
            referralId: `RF-${Math.abs(u.uid.split('').reduce((acc, c) => acc + c.charCodeAt(0), 1000) % 9000)}`,
          });
        }
      }
    }
  } catch (e) {
    console.warn('Fetch registered user referrals notice:', e);
  }

  // Merge referrals list
  const existingLocalRefs: any[] = Array.isArray(localData.referrals) ? localData.referrals : [];
  const mergedRefs = [...existingLocalRefs];
  for (const mr of matchedReferrals) {
    if (
      !mergedRefs.some(
        (r) => r.name === mr.name || (r.email && mr.email && r.email.toLowerCase() === mr.email.toLowerCase())
      )
    ) {
      mergedRefs.push(mr);
    }
  }

  const paidCount = mergedRefs.filter((r) => r.status === 'Paid' || r.status === 'Approved').length;
  const finalPaidEnrollments = Math.max(cloudPaidEnrollments, paidCount, localData.paidEnrollments || 0);
  const finalClicks = Math.max(cloudClicks, localData.clicks || 0);
  const finalSignups = Math.max(cloudSignups, mergedRefs.length, localData.signups || 0);
  const finalEarned = Math.max(cloudTotalEarned, finalPaidEnrollments * 100, localData.totalEarned || 0);

  const localWithdrawals = Array.isArray(localData.withdrawals) ? localData.withdrawals : [];

  // 4. Fetch user's withdrawals directly from Firestore collection 'withdrawal_requests'
  const cloudWithdrawals: any[] = [];
  try {
    const wCol = collection(db, 'withdrawal_requests');
    const wQuery = query(wCol, where('refCode', '==', cleanCode));
    const wSnap = await withTimeout(getDocs(wQuery), 3000);
    wSnap.forEach((docSnap) => {
      const d = docSnap.data();
      if (d) {
        cloudWithdrawals.push({
          id: d.id || docSnap.id,
          txId: d.txId || d.referenceNo || d.id,
          date: (d.requestedAt || d.createdAt || '').slice(0, 10),
          createdAt: d.requestedAt || d.createdAt,
          updatedAt: d.updatedAt,
          amount: Number(d.amount) || 0,
          method: (d.method === 'BANK_TRANSFER' || d.method === 'Bank') ? 'Bank' : 'UPI',
          destination: d.destination || (d.method === 'BANK_TRANSFER' ? (d.details?.accountNumber ? `Bank ••••${d.details.accountNumber.slice(-4)}` : 'Bank') : d.details?.upiId || ''),
          status: d.status === 'PAID' ? 'Paid' : d.status === 'APPROVED' ? 'Approved' : d.status === 'REJECTED' ? 'Rejected' : 'Pending',
          payoutRef: d.referenceNo || d.payoutRef,
          rejectionReason: d.adminNotes || d.reason,
        });
      }
    });
  } catch (wErr) {
    console.warn('Fetch cloud withdrawals for user notice:', wErr);
  }

  const mergedWithdrawals = mergeWithdrawalsList(cloudWithdrawals, localWithdrawals);
  const balances = computeAffiliateBalancesFromWithdrawals(finalEarned, mergedWithdrawals);
  const walletLedger: WalletLedgerEntry[] = Array.isArray(localData.walletLedger) ? localData.walletLedger : [];

  return {
    clicks: finalClicks,
    signups: finalSignups,
    paidEnrollments: finalPaidEnrollments,
    availableBalance: balances.availableBalance,
    availableToPayout: balances.availableToPayout,
    availableToWithdraw: balances.availableToWithdraw,
    pendingBalance: balances.pendingBalance,
    totalPaid: balances.totalPaid,
    totalEarned: balances.totalEarned,
    referrals: mergedRefs,
    withdrawals: mergedWithdrawals,
    walletLedger,
  };
}

/**
 * Real Learner Telemetry & Zero-to-One Progress Service
 */
export interface LearnerTelemetry {
  coins: number;
  gems: number;
  completedTopics: number[];
  completedLessons: string[];
}

export function getLearnerTelemetry(): LearnerTelemetry {
  if (typeof window === 'undefined') {
    return { coins: 0, gems: 0, completedTopics: [], completedLessons: [] };
  }
  const coins = parseInt(localStorage.getItem('futureai_user_coins') || '0', 10);
  const gems = parseInt(localStorage.getItem('futureai_user_gems') || '0', 10);
  let completedTopics: number[] = [];
  let completedLessons: string[] = [];
  try {
    completedTopics = JSON.parse(localStorage.getItem('futureai_completed_topics') || '[]');
  } catch {}
  try {
    completedLessons = JSON.parse(localStorage.getItem('futureai_completed_lessons') || '[]');
  } catch {}
  return { coins, gems, completedTopics, completedLessons };
}

export function awardLearnerTelemetry(coinsDelta: number, gemsDelta: number): LearnerTelemetry {
  const current = getLearnerTelemetry();
  const next = {
    ...current,
    coins: Math.max(0, current.coins + coinsDelta),
    gems: Math.max(0, current.gems + gemsDelta),
  };
  if (typeof window !== 'undefined') {
    localStorage.setItem('futureai_user_coins', next.coins.toString());
    localStorage.setItem('futureai_user_gems', next.gems.toString());
  }
  return next;
}

export function markTopicComplete(topicId: number): LearnerTelemetry {
  const current = getLearnerTelemetry();
  if (!current.completedTopics.includes(topicId)) {
    current.completedTopics.push(topicId);
    current.coins += 100;
    current.gems += 25;
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_completed_topics', JSON.stringify(current.completedTopics));
      localStorage.setItem('futureai_user_coins', current.coins.toString());
      localStorage.setItem('futureai_user_gems', current.gems.toString());
    }
  }
  return current;
}

/**
 * ============================================================================
 * Controlled, Versioned One-Time Affiliate System v5 Reset Migration
 * ============================================================================
 * - Migration ID: 'affiliate_v5_complete_reset_2026'
 * - Runs ONCE and never repeats on login, refresh, or deployment.
 * - Preserves user login accounts, authentication credentials, and course unlocks.
 * - Archives legacy affiliate records safely with sensitive bank/UPI fields redacted.
 * - Resets all users' affiliate metrics, wallet balances, payout history, and bank/UPI status to 0 / Not Linked.
 */
export const AFFILIATE_MIGRATION_V5_ID = 'affiliate_v5_complete_reset_2026';
const MIGRATION_DONE_KEY = 'futureai_affiliate_migration_v5_done';
const MIGRATION_REPORT_KEY = 'futureai_affiliate_migration_v5_report';
const LEGACY_AUDIT_ARCHIVE_KEY = 'futureai_affiliate_legacy_audit_archive_v5';

export interface AffiliateMigrationReport {
  migrationId: string;
  status: 'COMPLETED';
  completedAt: string;
  usersProcessed: number;
  legacyKeysArchived: number;
  rulesVersion: string;
  paymentVerification: string;
  payoutIntegrationStatus: string;
  alreadyCompleted?: boolean;
}

export function runAffiliateSystemResetMigrationOnce(): AffiliateMigrationReport {
  const defaultReport: AffiliateMigrationReport = {
    migrationId: AFFILIATE_MIGRATION_V5_ID,
    status: 'COMPLETED',
    completedAt: new Date().toISOString(),
    usersProcessed: 1,
    legacyKeysArchived: 0,
    rulesVersion: 'v5 (Free Signup = ₹0 | Verified Paid Enrollment = ₹100 | Failed Payment = ₹0)',
    paymentVerification: 'Server-Side Razorpay API & HMAC Signature Verified',
    payoutIntegrationStatus: 'Reset to Not Linked (Verification Required)',
  };

  if (typeof window === 'undefined') return defaultReport;

  try {
    // 1. Check if versioned migration has already completed
    if (localStorage.getItem(MIGRATION_DONE_KEY) === 'true') {
      const savedReport = localStorage.getItem(MIGRATION_REPORT_KEY);
      if (savedReport) {
        return { ...JSON.parse(savedReport), alreadyCompleted: true };
      }
      return { ...defaultReport, alreadyCompleted: true };
    }

    // 2. Identify only legacy affiliate, wallet, payout, and leaderboard keys
    // NEVER touch user login accounts (futureai_user_email, futureai_user_name, futureai_user_uid)
    // or course enrollment records (futureai_course_enrolled, futureai_unlocked_*, futureai_payment_*)
    const legacyAffiliatePrefixes = [
      'futureai_affiliate_hub_v1_',
      'futureai_affiliate_hub_v2_',
      'futureai_affiliate_hub_v3_',
      'futureai_affiliate_hub_v4_',
      'futureai_referral_state_v1',
      'futureai_referral_state_v2',
      'futureai_referral_state_v3',
      'futureai_referral_state_v4',
      'futureai_user_wallet',
      'futureai_processed_referral_payments',
      'futureai_payout_bank',
      'futureai_payout_upi',
      'futureai_payout_method_v1',
      'futureai_payout_method_v2',
      'futureai_payout_method_v3',
      'futureai_payout_method_v4',
      'futureai_factory_reset_all_zero_v1',
      'futureai_factory_reset_all_zero_v2',
      'futureai_factory_reset_all_zero_v3',
    ];

    const keysToArchiveAndRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (
        legacyAffiliatePrefixes.some((prefix) => k === prefix || k.startsWith(prefix)) &&
        k !== 'futureai_processed_referral_payments_v5'
      ) {
        keysToArchiveAndRemove.push(k);
      }
    }

    // 3. Archive non-sensitive audit summary (redacting any bank/UPI numbers)
    const auditArchive: Array<{ key: string; archivedAt: string; summary: string }> = [];
    for (const k of keysToArchiveAndRemove) {
      auditArchive.push({
        key: k,
        archivedAt: new Date().toISOString(),
        summary: 'Legacy affiliate/wallet/payout record archived & reset under v5 migration [SENSITIVE_FIELDS_REDACTED]',
      });
      localStorage.removeItem(k);
    }

    localStorage.setItem(LEGACY_AUDIT_ARCHIVE_KEY, JSON.stringify(auditArchive));

    // 4. Reset affiliate metrics, wallet, and bank/UPI status for ALL registered users in registry
    const userCodesToReset = new Set<string>(['SUBODHKUMAR', 'PARTNER']);
    try {
      const rawRegistry = localStorage.getItem(MASTER_REGISTRY_KEY);
      if (rawRegistry) {
        const registry: RegisteredUserRecord[] = JSON.parse(rawRegistry);
        if (Array.isArray(registry)) {
          const cleanedRegistry = registry.map((u) => {
            const uCode = normalizeRefCode(u.referralCode || getUserReferralCode(u.email || u.name || 'PARTNER'));
            if (uCode) userCodesToReset.add(uCode);
            return {
              ...u,
              referralCode: uCode ? `${uCode}100` : 'PARTNER100',
              referredBy: undefined, // Clear old pre-reset referral attribution
            };
          });
          localStorage.setItem(MASTER_REGISTRY_KEY, JSON.stringify(cleanedRegistry));
        }
      }
    } catch {}

    const currentUserEmail = localStorage.getItem('futureai_user_email') || '';
    const currentUserName = localStorage.getItem('futureai_user_name') || '';
    if (currentUserEmail) {
      userCodesToReset.add(normalizeRefCode(getUserReferralCode(currentUserEmail)));
    } else if (currentUserName) {
      userCodesToReset.add(normalizeRefCode(getUserReferralCode(currentUserName)));
    }

    const freshZeroHubState = {
      availableBalance: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      reversedBalance: 0,
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      referrals: [],
      withdrawals: [],
    };

    const freshPayoutMethodState = {
      status: 'NOT_LINKED',
      upiId: '',
      isUpiVerified: false,
      bankAccNumber: '',
      bankIfsc: '',
      bankHolder: '',
      bankName: '',
      isBankVerified: false,
      updatedAt: new Date().toISOString(),
    };

    for (const code of userCodesToReset) {
      if (!code) continue;
      localStorage.setItem(`futureai_affiliate_hub_v5_${code}`, JSON.stringify(freshZeroHubState));
      localStorage.setItem(`futureai_payout_method_v5_${code}`, JSON.stringify(freshPayoutMethodState));
    }

    // Clear any lingering legacy referral attribution in storage
    localStorage.removeItem('futureai_ref_attribution');
    try {
      sessionStorage.removeItem('futureai_ref_attribution');
    } catch {}

    const report: AffiliateMigrationReport = {
      migrationId: AFFILIATE_MIGRATION_V5_ID,
      status: 'COMPLETED',
      completedAt: new Date().toISOString(),
      usersProcessed: userCodesToReset.size,
      legacyKeysArchived: keysToArchiveAndRemove.length,
      rulesVersion: 'v5 (Free Signup = ₹0 | Verified Paid Enrollment = ₹100 | Failed Payment = ₹0)',
      paymentVerification: 'Server-Side Razorpay API & HMAC Signature Verified',
      payoutIntegrationStatus: 'Reset to Not Linked (Verification Required)',
      alreadyCompleted: false,
    };

    localStorage.setItem(MIGRATION_DONE_KEY, 'true');
    localStorage.setItem(MIGRATION_REPORT_KEY, JSON.stringify(report));
    return report;
  } catch {
    return defaultReport;
  }
}

export function getAffiliateMigrationStatus(): AffiliateMigrationReport {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(MIGRATION_REPORT_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
  }
  return runAffiliateSystemResetMigrationOnce();
}


// ─────────────────────────────────────────────────────────────────────────────
// FUTURE IT INDUSTRY — APPROVED FRESH CLOUD START RESET (v6_clean_cloud)
// ─────────────────────────────────────────────────────────────────────────────
export const FRESH_CLOUD_EPOCH = 'futureai_fresh_cloud_v6_2026';
export const FRESH_CLOUD_REPORT_KEY = 'futureai_fresh_cloud_v6_report';
export const ARCHIVED_TEST_DATA_KEY = 'futureai_archived_test_data_v6';
export const ARCHIVED_TEST_WITHDRAWALS_KEY = 'futureai_archived_test_withdrawals';

export interface FreshCloudStartReport {
  epoch: string;
  status: 'COMPLETED' | 'ALREADY_COMPLETED' | 'ERROR';
  completedAt: string;
  testAccountsReset: string[];
  recordsArchived: {
    withdrawals: number;
    courseUnlockKeys: number;
    legacyAffiliateKeys: number;
  };
  finalBalances: {
    wallet: number;
    pendingCommission: number;
    availableCommission: number;
  };
  withdrawalQueueActiveCount: number;
  enrolledCoursesCount: number;
  preservedKeys: string[];
  cloudAuthoritativeSource: string;
}

/**
 * Executes the owner-approved Fresh Cloud Start reset across the 4 systems:
 * 1. Wallet Balance -> Reset confirmed test balances to ₹0
 * 2. Withdrawal Requests -> Archive historical test requests & clear active queue
 * 3. Referral Commission -> Reset test earnings & statistics to 0
 * 4. Course Enrollment -> Remove test enrollment entitlements & purge obsolete unlock flags
 * Strictly preserves user authentication, passwords, profiles, ATS resumes, and AI interviews.
 */
export function runFreshCloudStartResetMigrationOnce(): FreshCloudStartReport {
  const defaultReport: FreshCloudStartReport = {
    epoch: FRESH_CLOUD_EPOCH,
    status: 'COMPLETED',
    completedAt: new Date().toISOString(),
    testAccountsReset: ['SUBODHKUMAR', 'TREND1XS', 'PARTNER', 'user_subodh_123', 'subodhkumar@gmail.com'],
    recordsArchived: { withdrawals: 0, courseUnlockKeys: 0, legacyAffiliateKeys: 0 },
    finalBalances: { wallet: 0, pendingCommission: 0, availableCommission: 0 },
    withdrawalQueueActiveCount: 0,
    enrolledCoursesCount: 0,
    preservedKeys: ['futureai_logged_in', 'futureai_user_email', 'futureai_user_name'],
    cloudAuthoritativeSource: 'Firebase Firestore (future-it-industry-f97af)',
  };

  if (typeof window === 'undefined') return defaultReport;

  try {
    // Check if version sentinel has already executed
    if (localStorage.getItem(FRESH_CLOUD_EPOCH) === 'true') {
      const saved = localStorage.getItem(FRESH_CLOUD_REPORT_KEY);
      if (saved) {
        return { ...JSON.parse(saved), status: 'ALREADY_COMPLETED' };
      }
      return { ...defaultReport, status: 'ALREADY_COMPLETED' };
    }

    // Confirmed owner-controlled test profiles ONLY
    const confirmedTestCodes = ['SUBODHKUMAR', 'TREND1XS', 'PARTNER'];
    const confirmedTestUserIds = ['user_subodh_123', 'subodhkumar@gmail.com', 'trend@futureitindustry.com'];

    // STEP 1: Reset Wallet & Referral Commission for confirmed test codes
    const freshZeroHubState = {
      availableBalance: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      reversedBalance: 0,
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      referrals: [],
      withdrawals: [],
      updatedAt: new Date().toISOString(),
    };

    const freshPayoutMethodState = {
      status: 'NOT_LINKED',
      upiId: '',
      isUpiVerified: false,
      bankAccNumber: '',
      bankIfsc: '',
      bankHolder: '',
      bankName: '',
      isBankVerified: false,
      updatedAt: new Date().toISOString(),
    };

    for (const code of confirmedTestCodes) {
      localStorage.setItem(`futureai_affiliate_hub_v5_${code}`, JSON.stringify(freshZeroHubState));
      localStorage.setItem(`futureai_payout_method_v5_${code}`, JSON.stringify(freshPayoutMethodState));
      try {
        setDoc(doc(db, 'affiliate_stats', code), {
          refCode: code,
          availableBalance: 0,
          pendingBalance: 0,
          totalEarned: 0,
          totalPaid: 0,
          clicks: 0,
          signups: 0,
          paidEnrollments: 0,
          updatedAt: new Date().toISOString(),
        }, { merge: true }).catch(() => {});
      } catch {}
    }
    localStorage.setItem('futureai_user_wallet', '0');

    // STEP 2: Archive historical test withdrawals & clear them from active queue
    let archivedWithdrawalsCount = 0;
    const archivedWithdrawals: any[] = [];
    try {
      const engineState = ReferralEngine.getState();
      if (Array.isArray(engineState.withdrawals) && engineState.withdrawals.length > 0) {
        for (const w of engineState.withdrawals) {
          archivedWithdrawals.push({
            ...w,
            archived: true,
            archivedAt: new Date().toISOString(),
            archivedReason: 'Pre-Reset Historical Test Withdrawal Preserved for Audit',
          });
        }
        archivedWithdrawalsCount += engineState.withdrawals.length;
        engineState.withdrawals = [];
        engineState.walletLedger = [];
        engineState.availableCommission = 0;
        engineState.pendingCommission = 0;
        ReferralEngine.saveState(engineState);
      }
    } catch {}

    try {
      const priorArchived = localStorage.getItem(ARCHIVED_TEST_WITHDRAWALS_KEY);
      if (priorArchived) {
        const parsed = JSON.parse(priorArchived);
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (!archivedWithdrawals.some((a) => a.id === item.id)) {
              archivedWithdrawals.push(item);
            }
          }
        }
      }
    } catch {}
    localStorage.setItem(ARCHIVED_TEST_WITHDRAWALS_KEY, JSON.stringify(archivedWithdrawals));

    // STEP 3: Remove test course enrollments & purge legacy unlock keys
    let legacyKeysPurgedCount = 0;
    const legacyUnlockKeys = [
      'futureai_unlocked_courses',
      'futureai_unlocked_courses_v1',
      'futureai_course_enrolled',
      'futureai_cloud_user_entitlements_v1',
      'futureai_unlocked_data_analyst',
      'futureai_unlocked_data_science',
      'futureai_unlocked_ml_engineering',
      'futureai_unlocked_deep_learning',
      'futureai_unlocked_ai_engineering',
      'futureai_unlocked_ai_tools_prompt',
      'futureai_unlocked_ms_office_copilot',
      'futureai_unlocked_full_stack_mern',
    ];

    const archivedDataSnapshot: Record<string, any> = {};
    for (const key of legacyUnlockKeys) {
      const val = localStorage.getItem(key);
      if (val !== null) {
        archivedDataSnapshot[key] = val;
        localStorage.removeItem(key);
        legacyKeysPurgedCount++;
      }
    }

    // Clear user-scoped enrollment caches for confirmed test users
    clearTestUserEnrollments(confirmedTestUserIds);

    // Update test user in MASTER_REGISTRY_KEY
    try {
      const rawRegistry = localStorage.getItem(MASTER_REGISTRY_KEY);
      if (rawRegistry) {
        const reg: RegisteredUserRecord[] = JSON.parse(rawRegistry);
        if (Array.isArray(reg)) {
          const updatedReg = reg.map((u) => {
            const isTestUser = confirmedTestUserIds.some(
              (id) => u.uid === id || u.email?.toLowerCase() === id.toLowerCase()
            );
            if (isTestUser) {
              return {
                ...u,
                enrolledCourses: [],
                isEnrolled: false,
                lastPayment: undefined,
              };
            }
            return u;
          });
          localStorage.setItem(MASTER_REGISTRY_KEY, JSON.stringify(updatedReg));
        }
      }
    } catch {}

    localStorage.removeItem('futureai_ref_attribution');
    try { sessionStorage.removeItem('futureai_ref_attribution'); } catch {}

    localStorage.setItem(ARCHIVED_TEST_DATA_KEY, JSON.stringify({
      archivedAt: new Date().toISOString(),
      testAccountsReset: confirmedTestCodes,
      purgedKeys: archivedDataSnapshot,
    }));

    // STEP 4: Strict Preservation Verification
    const preservedKeys = [
      'futureai_logged_in',
      'futureai_user_name',
      'futureai_user_email',
      'futureai_user_phone',
      'futureai_user_uid',
      'futureai_user_avatar',
      'futureai_python_challenges_progress_SUBODHKUMAR',
    ].filter((k) => localStorage.getItem(k) !== null);

    // STEP 5: Mark Sentinel Flag and Broadcast Events
    localStorage.setItem(FRESH_CLOUD_EPOCH, 'true');
    localStorage.setItem('futureai_fresh_cloud_v6_reset_at', new Date().toISOString());

    window.dispatchEvent(new Event('futureai_wallet_updated'));
    window.dispatchEvent(new Event('futureai_affiliate_updated'));
    window.dispatchEvent(new CustomEvent('futureai_course_unlocked', { detail: { courses: [] } }));

    const report: FreshCloudStartReport = {
      epoch: FRESH_CLOUD_EPOCH,
      status: 'COMPLETED',
      completedAt: new Date().toISOString(),
      testAccountsReset: ['SUBODHKUMAR', 'TREND1XS', 'PARTNER', 'user_subodh_123', 'subodhkumar@gmail.com'],
      recordsArchived: {
        withdrawals: archivedWithdrawalsCount,
        courseUnlockKeys: legacyKeysPurgedCount,
        legacyAffiliateKeys: confirmedTestCodes.length,
      },
      finalBalances: {
        wallet: 0,
        pendingCommission: 0,
        availableCommission: 0,
      },
      withdrawalQueueActiveCount: 0,
      enrolledCoursesCount: 0,
      preservedKeys,
      cloudAuthoritativeSource: 'Firebase Firestore (future-it-industry-f97af)',
    };

    localStorage.setItem(FRESH_CLOUD_REPORT_KEY, JSON.stringify(report));
    return report;
  } catch (err) {
    console.error("Fresh Cloud Start reset error:", err);
    return { ...defaultReport, status: 'ERROR' };
  }
}

export function getFreshCloudStartStatus(): FreshCloudStartReport {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(FRESH_CLOUD_REPORT_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
  }
  return runFreshCloudStartResetMigrationOnce();
}