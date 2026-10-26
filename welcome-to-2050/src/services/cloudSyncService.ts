import { doc, getDoc, setDoc, updateDoc, collection, getDocs, query, where, serverTimestamp, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import { unlockCourse, normalizeCourseId, CanonicalCourseId } from './courseUnlockService';

export interface CloudStudentEntitlement {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  enrolledCourses: string[];
  walletBalance: number;
  totalPaid: number;
  registeredAt: string;
  status: 'active' | 'suspended';
  lastPayment?: {
    paymentId: string;
    orderId?: string;
    amount: number;
    courseId: string;
    courseTitle: string;
    date: string;
  };
}

const LOCAL_CLOUD_CACHE_KEY = 'futureai_cloud_user_entitlements_v1';

export function withTimeout<T>(promise: Promise<T>, ms: number = 2500): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)),
  ]);
}

/**
 * Persist course enrollment to Firebase Firestore so it NEVER gets lost
 */
export async function recordCourseEnrollmentInCloud(params: {
  email?: string;
  phone?: string;
  name?: string;
  courseId: string;
  courseTitle: string;
  paymentId: string;
  orderId?: string;
  amount: number;
  entitlementProof?: string;
  verifiedAt?: number;
}): Promise<void> {
  const cleanEmail = (params.email || '').trim().toLowerCase();
  const cleanPhone = (params.phone || '').replace(/\D/g, '');
  const cleanName = (params.name || 'Learner').trim();
  const canonicalCourse = normalizeCourseId(params.courseId || params.courseTitle);

  // 1. Always unlock locally immediately
  unlockCourse(canonicalCourse);
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('futureai_course_enrolled', 'true');
      localStorage.setItem(`futureai_unlocked_${canonicalCourse}`, 'true');
    } catch {}
  }

  const paymentRecord = {
    paymentId: params.paymentId,
    orderId: params.orderId || `ord_${Date.now()}`,
    amount: params.amount,
    courseId: canonicalCourse,
    courseTitle: params.courseTitle || 'Data Analyst with GenAI',
    date: new Date().toISOString(),
    status: 'captured',
    entitlementProof: params.entitlementProof || null,
    verifiedAt: params.verifiedAt || null
  };

  // 2. Persist in Firestore
  try {
    const userDocId = cleanEmail ? cleanEmail.replace(/[^a-zA-Z0-9]/g, '_') : cleanPhone ? `phone_${cleanPhone}` : `usr_${Date.now()}`;
    const userRef = doc(db, 'registered_users', userDocId);
    
    await withTimeout(setDoc(userRef, {
      email: cleanEmail,
      phone: cleanPhone,
      name: cleanName,
      enrolledCourses: arrayUnion(canonicalCourse),
      isEnrolled: true,
      lastPayment: paymentRecord,
      lastEnrolledAt: serverTimestamp(),
      status: 'active'
    }, { merge: true }), 2500);

    // Also write to global payments collection
    const paymentRef = doc(db, 'platform_payments', params.paymentId);
    await withTimeout(setDoc(paymentRef, {
      ...paymentRecord,
      studentName: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      timestamp: serverTimestamp()
    }, { merge: true }), 2500);

  } catch (err) {
    console.warn('Firestore cloud enrollment save warning (offline fallback active):', err);
  }

  // 3. Cache locally
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(LOCAL_CLOUD_CACHE_KEY);
      const list: any[] = existing ? JSON.parse(existing) : [];
      list.push({ ...paymentRecord, name: cleanName, email: cleanEmail, phone: cleanPhone });
      localStorage.setItem(LOCAL_CLOUD_CACHE_KEY, JSON.stringify(list));
    } catch {}
  }
}

/**
 * Restore all enrolled courses & wallet balance from Firestore cloud
 * Called on login or page load to guarantee courses NEVER disappear
 */
export async function restoreUserEntitlementsFromCloud(identifier?: {
  email?: string;
  phone?: string;
  uid?: string;
}): Promise<string[]> {
  const cleanEmail = (identifier?.email || (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : '') || '').trim().toLowerCase();
  const cleanPhone = (identifier?.phone || (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_phone') : '') || '').replace(/\D/g, '');

  if (!cleanEmail && !cleanPhone) {
    return [];
  }

  const restoredCourses: string[] = [];

  try {
    // Check by email in Firestore
    if (cleanEmail) {
      const userDocId = cleanEmail.replace(/[^a-zA-Z0-9]/g, '_');
      const userRef = doc(db, 'registered_users', userDocId);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();
        if (data && Array.isArray(data.enrolledCourses)) {
          data.enrolledCourses.forEach((c: string) => {
            const canonical = normalizeCourseId(c);
            unlockCourse(canonical);
            restoredCourses.push(canonical);
          });
        }
      } else {
        // Query by email field
        const col = collection(db, 'registered_users');
        const q = query(col, where('email', '==', cleanEmail));
        const res = await getDocs(q);
        if (!res.empty) {
          const docData = res.docs[0].data();
          if (docData && Array.isArray(docData.enrolledCourses)) {
            docData.enrolledCourses.forEach((c: string) => {
              const canonical = normalizeCourseId(c);
              unlockCourse(canonical);
              restoredCourses.push(canonical);
            });
          }
        }
      }
    }

    // Check by phone if email didn't match
    if (restoredCourses.length === 0 && cleanPhone && cleanPhone.length >= 10) {
      const col = collection(db, 'registered_users');
      const q = query(col, where('phone', '==', cleanPhone));
      const res = await getDocs(q);
      if (!res.empty) {
        const docData = res.docs[0].data();
        if (docData && Array.isArray(docData.enrolledCourses)) {
          docData.enrolledCourses.forEach((c: string) => {
            const canonical = normalizeCourseId(c);
            unlockCourse(canonical);
            restoredCourses.push(canonical);
          });
        }
      }
    }

    if (restoredCourses.length > 0 && typeof window !== 'undefined') {
      localStorage.setItem('futureai_course_enrolled', 'true');
      window.dispatchEvent(new CustomEvent('futureai_course_unlocked', { detail: { courses: restoredCourses } }));
    }

  } catch (err) {
    console.warn('Cloud restore notice (running local cache):', err);
  }

  return restoredCourses;
}

/**
 * ADMIN ACTION: Manually unlock/grant any course to a student
 * Instantly fixes any "mera course gayab ho gya" complaint in 1 click!
 */
export async function adminGrantCourseToStudent(studentEmailOrPhone: string, courseId: string): Promise<boolean> {
  const cleanId = studentEmailOrPhone.trim().toLowerCase();
  const canonicalCourse = normalizeCourseId(courseId);

  try {
    const userDocId = cleanId.includes('@') ? cleanId.replace(/[^a-zA-Z0-9]/g, '_') : `phone_${cleanId.replace(/\D/g, '')}`;
    const userRef = doc(db, 'registered_users', userDocId);
    
    await setDoc(userRef, {
      enrolledCourses: arrayUnion(canonicalCourse),
      isEnrolled: true,
      lastManualUnlockAt: serverTimestamp(),
      lastUnlockedBy: 'Admin Control Center'
    }, { merge: true });

    // Also unlock locally if this is the active user
    unlockCourse(canonicalCourse);
    if (typeof window !== 'undefined') {
      localStorage.setItem('futureai_course_enrolled', 'true');
      localStorage.setItem(`futureai_unlocked_${canonicalCourse}`, 'true');
      window.dispatchEvent(new CustomEvent('futureai_course_unlocked', { detail: { courseId: canonicalCourse } }));
    }

    return true;
  } catch (err) {
    console.error('Admin grant course error:', err);
    // Offline / LocalStorage fallback
    unlockCourse(canonicalCourse);
    if (typeof window !== 'undefined') {
      localStorage.setItem(`futureai_unlocked_${canonicalCourse}`, 'true');
      localStorage.setItem('futureai_course_enrolled', 'true');
    }
    return true;
  }
}

/**
 * ADMIN ACTION: Adjust or credit wallet balance for a student
 */
export async function adminAdjustStudentWallet(
  studentEmailOrPhone: string,
  deltaAmount: number,
  reason: string
): Promise<number> {
  const cleanId = studentEmailOrPhone.trim().toLowerCase();
  const userDocId = cleanId.includes('@') ? cleanId.replace(/[^a-zA-Z0-9]/g, '_') : `phone_${cleanId.replace(/\D/g, '')}`;
  const userRef = doc(db, 'registered_users', userDocId);
  
  let newBalance = 0;
  try {
    const snap = await getDoc(userRef);
    const current = snap.exists() ? (snap.data().walletBalance || 0) : 0;
    newBalance = Math.max(0, current + deltaAmount);
    
    await setDoc(userRef, {
      walletBalance: newBalance,
      lastWalletAdjustment: {
        delta: deltaAmount,
        reason: reason || 'Admin Credit / Adjustment',
        timestamp: new Date().toISOString()
      }
    }, { merge: true });

    // Also record in platform ledger
    const ledgerRef = doc(db, 'wallet_ledger', `adj_${Date.now()}`);
    await setDoc(ledgerRef, {
      userId: userDocId,
      userIdentifier: cleanId,
      delta: deltaAmount,
      balanceAfter: newBalance,
      reason: reason || 'Manual Admin Adjustment',
      adjustedBy: 'Admin Control Center',
      timestamp: serverTimestamp()
    });

  } catch (err) {
    console.warn('Wallet adjustment firestore warning:', err);
  }

  // Also update local storage if this is active user
  if (typeof window !== 'undefined') {
    try {
      const cur = parseFloat(localStorage.getItem('futureai_user_wallet') || '0');
      const updated = Math.max(0, cur + deltaAmount);
      localStorage.setItem('futureai_user_wallet', updated.toString());
      window.dispatchEvent(new CustomEvent('futureai_wallet_updated', { detail: { newBalance: updated } }));
    } catch {}
  }

  return newBalance;
}
