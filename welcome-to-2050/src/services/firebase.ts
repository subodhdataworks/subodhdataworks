import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence, indexedDBLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase Production Configuration
 * Keys can be supplied via .env or Cloudflare Pages environment variables:
 * VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, etc.
 */
const metaEnv = typeof import.meta !== 'undefined' && (import.meta as any).env ? (import.meta as any).env : {};

const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || 'AIzaSyBdTLJDfImm3hZ06k4W7YJi2IJjXU5ogGY',
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || 'future-it-industry-f97af.firebaseapp.com',
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || 'future-it-industry-f97af',
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || 'future-it-industry-f97af.firebasestorage.app',
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || '477155157030',
  appId: metaEnv.VITE_FIREBASE_APP_ID || '1:477155157030:web:b4852986a1f288dd8b32e7',
  measurementId: 'G-EEKG701HBP',
};

// Singleton Firebase initialization
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Force permanent local storage (IndexedDB + localStorage fallback) so session NEVER expires after 30 mins
if (typeof window !== 'undefined') {
  setPersistence(auth, indexedDBLocalPersistence)
    .catch(() => setPersistence(auth, browserLocalPersistence))
    .catch((err) => console.warn('Could not set Firebase persistence:', err));
}

export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
