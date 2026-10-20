import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;
  }
}

/**
 * Initializes invisible reCAPTCHA verifier for Phone Auth
 */
export function setupRecaptcha(containerId: string = 'recaptcha-container'): RecaptchaVerifier {
  if (typeof window === 'undefined') {
    throw new Error('Window is not defined');
  }

  // Clear any existing verifier + grecaptcha widget to avoid conflicts on mobile
  if (window.recaptchaVerifier) {
    try {
      window.recaptchaVerifier.clear();
    } catch {}
    window.recaptchaVerifier = undefined;
  }

  // Ensure container exists in DOM, create if missing
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  } else {
    // Clear previous widget render
    container.innerHTML = '';
  }

  const verifier = new RecaptchaVerifier(auth, containerId, {
    size: 'invisible',
    callback: () => {
      // reCAPTCHA solved automatically
    },
    'expired-callback': () => {
      console.warn('reCAPTCHA expired - will retry on next OTP send');
      if (window.recaptchaVerifier) {
        try { window.recaptchaVerifier.clear(); } catch {}
        window.recaptchaVerifier = undefined;
      }
    },
  });

  window.recaptchaVerifier = verifier;
  return verifier;
}

/**
 * Send real 6-digit SMS OTP to Indian Mobile Number (+91)
 */
export async function sendOtpToPhone(
  phoneNumber: string,
  containerId: string = 'recaptcha-container'
): Promise<ConfirmationResult> {
  const clean = phoneNumber.replace(/\D/g, '');
  if (clean.length < 10) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const formattedPhone = clean.startsWith('91') && clean.length === 12
    ? `+${clean}`
    : `+91${clean.slice(-10)}`;

  const verifier = setupRecaptcha(containerId);

  // Explicitly render reCAPTCHA before calling signInWithPhoneNumber (fixes mobile issues)
  try {
    await verifier.render();
  } catch {
    // render() may throw if already rendered — safe to ignore
  }

  const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, verifier);
  window.confirmationResult = confirmationResult;
  return confirmationResult;
}

/**
 * Verify 6-digit SMS OTP and persist real student in Firestore
 */
export async function verifyOtpAndLogin(
  otpCode: string,
  studentName?: string,
  confirmationResult?: ConfirmationResult
): Promise<{
  uid: string;
  phone: string;
  name: string;
  isNewUser: boolean;
}> {
  const activeConfirmation = confirmationResult || window.confirmationResult;
  if (!activeConfirmation) {
    throw new Error('No active OTP session. Please request OTP again.');
  }

  const cleanOtp = otpCode.replace(/\D/g, '');
  if (cleanOtp.length < 6) {
    throw new Error('Please enter complete 6-digit OTP sent to your phone.');
  }

  const credential = await activeConfirmation.confirm(cleanOtp);
  const user = credential.user;

  const phone = user.phoneNumber || '';
  const uid = user.uid;
  const finalName = (studentName?.trim() || 'Learner').trim();

  // Check if existing student in Firestore
  let isNewUser = true;
  try {
    const userDocRef = doc(db, 'registered_users', uid);
    const existingSnap = await getDoc(userDocRef);

    if (existingSnap.exists()) {
      isNewUser = false;
      const data = existingSnap.data();
      await setDoc(
        userDocRef,
        {
          lastLoginAt: serverTimestamp(),
          name: finalName !== 'Learner' ? finalName : (data.name || finalName),
        },
        { merge: true }
      );
    } else {
      // Create fresh student document with 0 balance! No demo data!
      await setDoc(userDocRef, {
        uid,
        phone,
        name: finalName,
        availableBalance: 0,
        wallet: 0,
        completedLessons: 0,
        coins: 0,
        gems: 0,
        role: 'student',
        enrolledCourses: [],
        registeredAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
        source: 'Phone_OTP',
      });
    }
  } catch (err) {
    console.warn('Firestore sync note:', err);
  }

  // Set real student session in localStorage (0 balance for new student)
  if (typeof window !== 'undefined') {
    localStorage.setItem('futureai_logged_in', 'true');
    localStorage.setItem('futureai_uid', uid);
    localStorage.setItem('futureai_user_name', finalName);
    localStorage.setItem('futureai_user_phone', phone);
    if (isNewUser || !localStorage.getItem('futureai_user_wallet')) {
      localStorage.setItem('futureai_user_wallet', '0');
    }
  }

  return {
    uid,
    phone,
    name: finalName,
    isNewUser,
  };
}
