import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * Firebase Production Configuration
 * Keys can be supplied via .env or Cloudflare Pages environment variables:
 * VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, etc.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBdTLJDfImm3hZ06k4W7YJi2IJjXU5ogGY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'future-it-industry-f97af.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'future-it-industry-f97af',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'future-it-industry-f97af.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '477155157030',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:477155157030:web:b4852986a1f288dd8b32e7',
  measurementId: 'G-EEKG701HBP',
};

// Singleton Firebase initialization
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
