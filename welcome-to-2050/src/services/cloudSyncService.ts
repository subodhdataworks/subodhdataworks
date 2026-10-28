import { doc, getDoc, setDoc, collection, getDocs, query, where, serverTimestamp, arrayUnion } from 'firebase/firestore';
import { db } from './firebase';
import {
  unlockCourse,
  normalizeCourseId,
  normalizeUserId,
  replaceUserEnrollmentsCache,
  getUnlockedCourses,
} from './courseUnlockService';

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
 * Persist user-specific course enrollment to Firebase Firestore (`course_enrollments` & `registered_users`)
 * and user-scoped local storage. Never writes global/shared course unlock keys.
 */
export async function recordCourseEnrollmentInCloud(params: {
  userId?: string;
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
  const cleanUserId = normalizeUserId(params.userId || cleanEmail || cleanPhone);
  const cleanName = (params.name || 'Learner').trim();
  const canonicalCourse = normalizeCourseId(params.courseId || params.courseTitle);

  if (!cleanUserId || !params.paymentId) {
    console.warn('[CloudSync] Refused to record enrollment without a valid userId and paymentId.');
    return;
  }

  // 1. Unlock locally strictly for this specific userId and courseId
  unlockCourse(canonicalCourse, {
    userId: cleanUserId,
    paymentId: params.paymentId,
    orderId: params.orderId || '',
    paymentStatus: 'CAPTURED',
    enrollmentStatus: 'ACTIVE',
    source: 'PAYMENT',
  });

  const nowIso = new Date().toISOString();
  const paymentRecord = {
    paymentId: params.paymentId,
    orderId: params.orderId || `ord_${Date.now()}`,
    amount: params.amount,
    userId: cleanUserId,
    courseId: canonicalCourse,
    courseTitle: params.courseTitle || 'Data Analyst with GenAI',
    date: nowIso,
    status: 'captured',
    entitlementProof: params.entitlementProof || null,
    verifiedAt: params.verifiedAt || null,
  };

  const enrollmentId = `ENR_${cleanUserId.replace(/[^a-zA-Z0-9]/g, '_')}_${canonicalCourse}`;

  // 2. Persist in Firestore (dedicated `course_enrollments` table + user document + `platform_payments`)
  try {
    const enrollmentRef = doc(db, 'course_enrollments', enrollmentId);
    await withTimeout(
      setDoc(
        enrollmentRef,
        {
          id: enrollmentId,
          userId: cleanUserId,
          email: cleanEmail,
          phone: cleanPhone,
          courseId: canonicalCourse,
          courseTitle: params.courseTitle || canonicalCourse,
          enrollmentStatus: 'ACTIVE',
          paymentStatus: 'CAPTURED',
          paymentTransactionId: params.paymentId,
          orderId: paymentRecord.orderId,
          amount: params.amount,
          unlockedAt: nowIso,
          createdAt: nowIso,
          updatedAt: nowIso,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      ),
      2500
    );

    const userDocId = cleanEmail
      ? cleanEmail.replace(/[^a-zA-Z0-9]/g, '_')
      : cleanPhone
      ? `phone_${cleanPhone}`
      : `usr_${cleanUserId.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const userRef = doc(db, 'registered_users', userDocId);

    await withTimeout(
      setDoc(
        userRef,
        {
          userId: cleanUserId,
          email: cleanEmail,
          phone: cleanPhone,
          name: cleanName,
          enrolledCourses: arrayUnion(canonicalCourse),
          isEnrolled: true,
          lastPayment: paymentRecord,
          lastEnrolledAt: serverTimestamp(),
          status: 'active',
        },
        { merge: true }
      ),
      2500
    );

    // Also write to global payments collection keyed by unique paymentId
    const paymentRef = doc(db, 'platform_payments', params.paymentId);
    await withTimeout(
      setDoc(
        paymentRef,
        {
          ...paymentRecord,
          studentName: cleanName,
          email: cleanEmail,
          phone: cleanPhone,
          timestamp: serverTimestamp(),
        },
        { merge: true }
      ),
      2500
    );
  } catch (err) {
    console.warn('Firestore cloud enrollment save warning (user-scoped local record active):', err);
  }

  // 3. Cache user-attributed record locally
  if (typeof window !== 'undefined') {
    try {
      const existing = localStorage.getItem(LOCAL_CLOUD_CACHE_KEY);
      const parsed = existing ? JSON.parse(existing) : {};
      const map: Record<string, any> = Array.isArray(parsed) ? {} : parsed || {};
      const prevCourses: string[] = Array.isArray(map[cleanUserId]?.unlockedCourses)
        ? map[cleanUserId].unlockedCourses
        : [];
      const nextCourses = Array.from(new Set([...prevCourses, canonicalCourse]));
      map[cleanUserId] = {
        userId: cleanUserId,
        email: cleanEmail,
        phone: cleanPhone,
        name: cleanName,
        unlockedCourses: nextCourses,
        lastPaymentId: params.paymentId,
        updatedAt: nowIso,
      };
      localStorage.setItem(LOCAL_CLOUD_CACHE_KEY, JSON.stringify(map));
    } catch {
      // Ignore storage errors
    }
  }
}

/**
 * Restore all enrolled courses for the specific authenticated user from Firestore (`course_enrollments` & `registered_users`).
 * Never writes global unlock keys; scopes restored courses strictly to `cleanUserId`.
 */
export async function restoreUserEntitlementsFromCloud(identifier?: {
  email?: string;
  phone?: string;
  uid?: string;
}): Promise<string[]> {
  const cleanEmail = (
    identifier?.email ||
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_email') : '') ||
    ''
  )
    .trim()
    .toLowerCase();
  const cleanPhone = (
    identifier?.phone ||
    (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_phone') : '') ||
    ''
  ).replace(/\D/g, '');
  const cleanUid = normalizeUserId(
    identifier?.uid || (typeof window !== 'undefined' ? localStorage.getItem('futureai_user_uid') : '')
  );

  const cleanUserId = cleanEmail || cleanPhone || cleanUid;
  if (!cleanUserId) {
    return [];
  }

  const restoredCoursesSet = new Set<string>();
  const lastSyncKey = `futureai_entitlements_last_sync_${cleanUserId}`;
  const lastSync = typeof window !== 'undefined' ? Number(localStorage.getItem(lastSyncKey) || 0) : 0;
  const now = Date.now();
  if (lastSync && now - lastSync < 10 * 60 * 1000) {
    const cached = getUnlockedCourses(cleanUserId);
    if (cached && cached.length > 0) {
      return cached;
    }
  }

  try {
    // 1. Check dedicated `course_enrollments` collection for this specific userId
    try {
      const enrollCol = collection(db, 'course_enrollments');
      const enrollQuery = query(enrollCol, where('userId', '==', cleanUserId));
      const enrollSnap = await withTimeout(getDocs(enrollQuery), 2500);
      enrollSnap.forEach((docSnap) => {
        const d = docSnap.data();
        if (
          d &&
          normalizeUserId(d.userId) === cleanUserId &&
          d.enrollmentStatus === 'ACTIVE' &&
          (d.paymentStatus === 'CAPTURED' || d.paymentStatus === 'ADMIN_GRANTED') &&
          d.courseId
        ) {
          const canonical = normalizeCourseId(d.courseId);
          unlockCourse(canonical, {
            userId: cleanUserId,
            paymentId: d.paymentTransactionId || `CLOUD_${cleanUserId}_${canonical}`,
            orderId: d.orderId || '',
            paymentStatus: d.paymentStatus,
            enrollmentStatus: 'ACTIVE',
            unlockedAt: d.unlockedAt,
            source: 'CLOUD_SYNC',
          });
          restoredCoursesSet.add(canonical);
        }
      });
    } catch {
      // Ignore if collection query is offline
    }

    // 2. Check user's `registered_users` record by email (preserving legitimate user-attributed purchases)
    if (cleanEmail) {
      const userDocId = cleanEmail.replace(/[^a-zA-Z0-9]/g, '_');
      const userRef = doc(db, 'registered_users', userDocId);
      const snap = await withTimeout(getDoc(userRef), 2500);

      if (snap.exists()) {
        const data = snap.data();
        const ownerEmail = normalizeUserId(data?.email);
        if (ownerEmail === cleanEmail && Array.isArray(data?.enrolledCourses)) {
          data.enrolledCourses.forEach((c: string) => {
            const canonical = normalizeCourseId(c);
            unlockCourse(canonical, {
              userId: cleanUserId,
              paymentId: data?.lastPayment?.paymentId || `CLOUD_RESTORE_${cleanEmail}_${canonical}`,
              paymentStatus: data?.lastUnlockedBy ? 'ADMIN_GRANTED' : 'CAPTURED',
              enrollmentStatus: 'ACTIVE',
              source: 'CLOUD_SYNC',
            });
            restoredCoursesSet.add(canonical);
          });
        }
      } else {
        const col = collection(db, 'registered_users');
        const q = query(col, where('email', '==', cleanEmail));
        const res = await withTimeout(getDocs(q), 2500);
        if (!res.empty) {
          const docData = res.docs[0].data();
          if (normalizeUserId(docData?.email) === cleanEmail && Array.isArray(docData?.enrolledCourses)) {
            docData.enrolledCourses.forEach((c: string) => {
              const canonical = normalizeCourseId(c);
              unlockCourse(canonical, {
                userId: cleanUserId,
                paymentId: docData?.lastPayment?.paymentId || `CLOUD_RESTORE_${cleanEmail}_${canonical}`,
                paymentStatus: docData?.lastUnlockedBy ? 'ADMIN_GRANTED' : 'CAPTURED',
                enrollmentStatus: 'ACTIVE',
                source: 'CLOUD_SYNC',
              });
              restoredCoursesSet.add(canonical);
            });
          }
        }
      }
    }

    // 3. Check by phone if email didn't match
    if (restoredCoursesSet.size === 0 && cleanPhone && cleanPhone.length >= 10) {
      const col = collection(db, 'registered_users');
      const q = query(col, where('phone', '==', cleanPhone));
      const res = await withTimeout(getDocs(q), 2500);
      if (!res.empty) {
        const docData = res.docs[0].data();
        if (Array.isArray(docData?.enrolledCourses)) {
          docData.enrolledCourses.forEach((c: string) => {
            const canonical = normalizeCourseId(c);
            unlockCourse(canonical, {
              userId: cleanUserId,
              paymentId: docData?.lastPayment?.paymentId || `CLOUD_RESTORE_${cleanPhone}_${canonical}`,
              paymentStatus: docData?.lastUnlockedBy ? 'ADMIN_GRANTED' : 'CAPTURED',
              enrollmentStatus: 'ACTIVE',
              source: 'CLOUD_SYNC',
            });
            restoredCoursesSet.add(canonical);
          });
        }
      }
    }

    // 4. Restore user wallet balance from Firestore affiliate_stats if available
    if (typeof window !== 'undefined') {
      try {
        const userRefCode =
          localStorage.getItem('futureai_user_referral_code') ||
          (cleanEmail ? cleanEmail.replace(/[^a-zA-Z0-9]/g, '').toUpperCase() : '');
        if (userRefCode) {
          const statsDoc = await withTimeout(getDoc(doc(db, 'affiliate_stats', userRefCode)), 2000);
          if (statsDoc.exists()) {
            const sData = statsDoc.data();
            if (typeof sData?.availableBalance === 'number') {
              localStorage.setItem('futureai_user_wallet', String(sData.availableBalance));
              window.dispatchEvent(new Event('futureai_wallet_updated'));
            }
          }
        }
      } catch {}
    }

    try { localStorage.setItem(lastSyncKey, String(Date.now())); } catch {}
    const restoredCourses = Array.from(restoredCoursesSet);
    if (restoredCourses.length > 0 && typeof window !== 'undefined') {
      replaceUserEnrollmentsCache(cleanUserId, restoredCourses, 'CLOUD_RESTORE');
      window.dispatchEvent(
        new CustomEvent('futureai_course_unlocked', {
          detail: { userId: cleanUserId, courses: restoredCourses },
        })
      );
    }
    return restoredCourses;
  } catch (err) {
    console.warn('Cloud restore notice (running user-scoped local cache):', err);
    return Array.from(restoredCoursesSet);
  }
}

/**
 * ADMIN ACTION: Explicitly grant a single course to a specific student (`studentEmailOrPhone`).
 * Records a user-specific entitlement (`paymentStatus: 'ADMIN_GRANTED'`) and NEVER unlocks globally.
 */
export async function adminGrantCourseToStudent(
  studentEmailOrPhone: string,
  courseId: string
): Promise<boolean> {
  const cleanId = normalizeUserId(studentEmailOrPhone);
  const canonicalCourse = normalizeCourseId(courseId);
  if (!cleanId) return false;

  const nowIso = new Date().toISOString();
  const enrollmentId = `ENR_${cleanId.replace(/[^a-zA-Z0-9]/g, '_')}_${canonicalCourse}`;
  const adminTxId = `ADMIN_GRANT_${cleanId}_${canonicalCourse}_${Date.now()}`;

  try {
    const enrollmentRef = doc(db, 'course_enrollments', enrollmentId);
    await setDoc(
      enrollmentRef,
      {
        id: enrollmentId,
        userId: cleanId,
        courseId: canonicalCourse,
        enrollmentStatus: 'ACTIVE',
        paymentStatus: 'ADMIN_GRANTED',
        paymentTransactionId: adminTxId,
        orderId: 'ADMIN_CONTROL_CENTER',
        unlockedAt: nowIso,
        createdAt: nowIso,
        updatedAt: nowIso,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );

    const userDocId = cleanId.includes('@')
      ? cleanId.replace(/[^a-zA-Z0-9]/g, '_')
      : `phone_${cleanId.replace(/\D/g, '')}`;
    const userRef = doc(db, 'registered_users', userDocId);

    await setDoc(
      userRef,
      {
        userId: cleanId,
        enrolledCourses: arrayUnion(canonicalCourse),
        isEnrolled: true,
        lastManualUnlockAt: serverTimestamp(),
        lastUnlockedBy: 'Admin Control Center',
      },
      { merge: true }
    );

    // Unlock locally strictly for `cleanId` (does NOT affect any other user!)
    unlockCourse(canonicalCourse, {
      userId: cleanId,
      paymentId: adminTxId,
      orderId: 'ADMIN_CONTROL_CENTER',
      paymentStatus: 'ADMIN_GRANTED',
      enrollmentStatus: 'ACTIVE',
      source: 'ADMIN',
    });

    return true;
  } catch (err) {
    console.error('Admin grant course error:', err);
    unlockCourse(canonicalCourse, {
      userId: cleanId,
      paymentId: adminTxId,
      orderId: 'ADMIN_CONTROL_CENTER',
      paymentStatus: 'ADMIN_GRANTED',
      enrollmentStatus: 'ACTIVE',
      source: 'ADMIN',
    });
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
  const userDocId = cleanId.includes('@')
    ? cleanId.replace(/[^a-zA-Z0-9]/g, '_')
    : `phone_${cleanId.replace(/\D/g, '')}`;
  const userRef = doc(db, 'registered_users', userDocId);

  let newBalance = 0;
  try {
    const snap = await getDoc(userRef);
    const current = snap.exists() ? snap.data().walletBalance || 0 : 0;
    newBalance = Math.max(0, current + deltaAmount);

    await setDoc(
      userRef,
      {
        walletBalance: newBalance,
        lastWalletAdjustment: {
          delta: deltaAmount,
          reason: reason || 'Admin Credit / Adjustment',
          timestamp: new Date().toISOString(),
        },
      },
      { merge: true }
    );

    const ledgerRef = doc(db, 'wallet_ledger', `adj_${Date.now()}`);
    await setDoc(ledgerRef, {
      userId: userDocId,
      userIdentifier: cleanId,
      delta: deltaAmount,
      balanceAfter: newBalance,
      reason: reason || 'Manual Admin Adjustment',
      adjustedBy: 'Admin Control Center',
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    console.warn('Wallet adjustment firestore warning:', err);
  }

  return newBalance;
}
