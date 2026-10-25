/**
 * Razorpay Payment Gateway Service
 *
 * Flow:
 * 1. POST /api/razorpay-order  → server creates order (uses key_secret securely)
 * 2. Open Razorpay Checkout popup (checkout.js) with order_id
 * 3. POST /api/razorpay-verify → server verifies HMAC signature and signs entitlement proof
 * 4. Resolve with paymentId and cryptographically signed entitlement proof
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
  name?: string;
  email?: string;
  phone?: string;
}): Promise<RazorpayResult> {
  await loadCheckoutScript();

  // 1. Create order on server
  const orderRes = await fetch('/api/razorpay-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: params.amount,
      courseId: params.courseId,
      courseTitle: params.courseTitle,
      email: params.email,
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
      notes: { courseId: params.courseId || '' },
      theme: { color: '#0284c7' },
      modal: {
        ondismiss: () => reject(new Error('Payment cancelled.')),
      },
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        // 3. Verify signature on server & receive signed entitlement proof
        try {
          const vRes = await fetch('/api/razorpay-verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...response,
              courseId: params.courseId || order.courseId,
            }),
          });
          const v = await vRes.json().catch(() => ({}));
          if (!vRes.ok || !v.success) throw new Error(v.error || 'Payment verification failed.');
          resolve({
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount: order.amount / 100,
            entitlementProof: v.entitlementProof,
            verifiedAt: v.verifiedAt,
            courseId: v.courseId,
          });
        } catch (e) {
          reject(e instanceof Error ? e : new Error('Payment verification failed.'));
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
 * Supports Firebase auth, Google One-Tap (GIS), Mobile OTP and Email login
 * (all of which persist the session in localStorage `futureai_*` keys).
 */
export function getCurrentUserForPayment(): {
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
  const email = fbUser?.email || ls('futureai_user_email');
  const storedName = ls('futureai_user_name');
  const name =
    fbUser?.displayName ||
    (storedName && storedName !== 'Learner' ? storedName : '') ||
    email.split('@')[0] ||
    'Student';
  const rawPhone = (fbUser?.phoneNumber || ls('futureai_user_phone')).replace(/\D/g, '');
  const phone = rawPhone.length >= 10 ? rawPhone.slice(-10) : '';

  const isLoggedIn = Boolean(fbUser || email || phone || ls('futureai_logged_in') === 'true');

  return { name, email, phone, isLoggedIn };
}
