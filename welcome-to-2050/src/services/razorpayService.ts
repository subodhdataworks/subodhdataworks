/**
 * Razorpay Payment Gateway Service
 *
 * Flow:
 * 1. POST /api/razorpay-order  → server creates order (uses key_secret securely, binds userId & courseId)
 * 2. Open Razorpay Checkout popup (checkout.js) with order_id
 * 3. POST /api/razorpay-verify → server verifies HMAC signature and signs user-bound entitlement proof
 * 4. Resolve with paymentId and cryptographically signed entitlement proof (never fabricates unverified proofs)
 */

import { auth } from './firebase';

const CHECKOUT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    Razorpay?: any;
  }
}

export interface RazorpayResult {
  orderId: string;
  paymentId: string;
  amount: number; // rupees
  userId?: string;
  entitlementProof?: string;
  verifiedAt?: number;
  courseId?: string;
}

let scriptPromise: Promise<void> | null = null;

function loadCheckoutScript(): Promise<void> {
  if (window.Razorpay) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = CHECKOUT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error('Razorpay checkout load nahi hua. Internet check karein.'));
    };
    document.body.appendChild(s);
  });
  return scriptPromise;
}

export async function startRazorpayCheckout(params: {
  amount: number;
  courseId?: string;
  courseTitle?: string;
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  refCode?: string;
}): Promise<RazorpayResult> {
  const cleanUserId = (params.userId || params.email || params.phone || '').trim().toLowerCase();
  if (!cleanUserId) {
    throw new Error('Please sign in to your account before purchasing a course.');
  }

  await loadCheckoutScript();

  const refCode =
    params.refCode ||
    (typeof window !== 'undefined'
      ? localStorage.getItem('futureai_ref_attribution') ||
        sessionStorage.getItem('futureai_ref_attribution') ||
        ''
      : '');

  // 1. Create order on server (binds userId & courseId)
  const orderRes = await fetch('/api/razorpay-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: params.amount,
      courseId: params.courseId,
      courseTitle: params.courseTitle,
      userId: cleanUserId,
      email: params.email || cleanUserId,
      phone: params.phone,
      refCode,
    }),
  });
  const order = await orderRes.json().catch(() => ({}));
  if (!orderRes.ok || !order.success) {
    throw new Error(order.error || 'Payment order create nahi hua. Dobara try karein.');
  }

  // 2. Open checkout popup
  return new Promise<RazorpayResult>((resolve, reject) => {
    const rzp = new window.Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: order.currency,
      name: 'FUTURE IT INDUSTRY',
      description: params.courseTitle || 'Course Enrollment',
      image: '/favicon.svg',
      prefill: {
        name: params.name || '',
        email: params.email || '',
        contact: params.phone || '',
      },
      notes: {
        userId: cleanUserId,
        courseId: params.courseId || order.courseId || '',
        courseTitle: params.courseTitle || 'Data Analyst with GenAI',
        name: params.name || '',
        email: params.email || cleanUserId,
        refCode: refCode || '',
        affiliateEpoch: 'v5_clean',
      },
      theme: { color: '#0284c7' },
      modal: {
        ondismiss: () => reject(new Error('Payment cancelled.')),
      },
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        // 3. Verify cryptographic signature on server — never fabricate fake proofs if rejected
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 8000);
          const vRes = await fetch('/api/razorpay-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...response,
              userId: cleanUserId,
              email: params.email || cleanUserId,
              courseId: params.courseId || order.courseId,
            }),
            signal: controller.signal,
          });
          clearTimeout(timer);

          const v = await vRes.json().catch(() => ({}));
          if (!vRes.ok || !v.success || !v.entitlementProof) {
            reject(new Error(v?.error || 'Payment signature verification failed on server.'));
            return;
          }

          resolve({
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount: order.amount / 100,
            userId: cleanUserId,
            entitlementProof: v.entitlementProof,
            verifiedAt: v.verifiedAt,
            courseId: v.courseId || params.courseId || order.courseId,
          });
        } catch (e) {
          reject(
            e instanceof Error
              ? e
              : new Error('Payment verification failed. Please contact support with your payment ID.')
          );
        }
      },
    });

    rzp.on('payment.failed', (resp: any) => {
      reject(new Error(resp?.error?.description || 'Payment failed.'));
    });

    rzp.open();
  });
}

/**
 * Get current logged-in user details for pre-filling checkout.
 * Supports Firebase auth, Google One-Tap (GIS), Mobile OTP and Email login.
 */
export function getCurrentUserForPayment(): {
  userId: string;
  name: string;
  email: string;
  phone: string;
  isLoggedIn: boolean;
} {
  const ls = (k: string) => {
    try {
      return localStorage.getItem(k) || '';
    } catch {
      return '';
    }
  };

  const fbUser = auth.currentUser;
  const email = (fbUser?.email || ls('futureai_user_email')).trim().toLowerCase();
  const storedName = ls('futureai_user_name');
  const name =
    fbUser?.displayName ||
    (storedName && storedName !== 'Learner' ? storedName : '') ||
    email.split('@')[0] ||
    'Student';
  const rawPhone = (fbUser?.phoneNumber || ls('futureai_user_phone')).replace(/\D/g, '');
  const phone = rawPhone.length >= 10 ? rawPhone.slice(-10) : '';
  const userId = email || phone || (fbUser?.uid || ls('futureai_user_uid')).trim().toLowerCase();

  const isLoggedIn = Boolean((fbUser || ls('futureai_logged_in') === 'true') && userId);

  return { userId, name, email, phone, isLoggedIn };
}
