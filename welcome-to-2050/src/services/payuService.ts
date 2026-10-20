/**
 * PayU Payment Gateway Service
 * Merchant Key: stored in VITE_PAYU_MERCHANT_KEY env var (public, safe)
 * Salt/Secret: stored ONLY on Cloudflare Pages Function (server-side, never client)
 *
 * Flow:
 * 1. Generate unique txnid
 * 2. Call /api/payu-hash (Cloudflare Function) to get SHA-512 hash securely
 * 3. Submit POST form to PayU's payment page
 * 4. PayU redirects to success/failure URL with payment status
 */

import { auth } from './firebase';

const MERCHANT_KEY = import.meta.env.VITE_PAYU_MERCHANT_KEY as string;

// PayU URLs
const PAYU_PROD_URL = 'https://secure.payu.in/_payment';
const PAYU_TEST_URL = 'https://test.payu.in/_payment';

// Use production by default — set to true for local testing
const IS_TEST_MODE = false;
const PAYU_URL = IS_TEST_MODE ? PAYU_TEST_URL : PAYU_PROD_URL;

export interface PayUParams {
  amount: string;           // e.g. "987.00"
  productinfo: string;      // e.g. "Data Analyst with GenAI"
  firstname: string;
  email: string;
  phone?: string;
  udf1?: string;            // extra info e.g. course id
  udf2?: string;
  udf3?: string;
  udf4?: string;
  udf5?: string;
  successUrl?: string;
  failureUrl?: string;
}

/** Generate a unique transaction ID */
export function generateTxnId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `FII-${timestamp}-${random}`;
}

/** Get hash from server (Cloudflare Pages Function) */
async function getPayUHash(params: {
  key: string;
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
  udf1?: string;
  udf2?: string;
  udf3?: string;
  udf4?: string;
  udf5?: string;
}): Promise<string> {
  const response = await fetch('/api/payu-hash', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || 'Hash generation failed');
  }

  const data = await response.json();
  return data.hash as string;
}

/**
 * Initiate PayU payment — creates a form and submits it to PayU
 */
export async function initiatePayUPayment(params: PayUParams): Promise<void> {
  const txnid = generateTxnId();
  const key = MERCHANT_KEY;

  if (!key) {
    throw new Error('PayU Merchant Key not configured. Check VITE_PAYU_MERCHANT_KEY env variable.');
  }

  const amount = parseFloat(params.amount).toFixed(2);
  const baseUrl = window.location.origin;
  const successUrl = params.successUrl || `${baseUrl}/#payment-success`;
  const failureUrl = params.failureUrl || `${baseUrl}/#payment-failure`;

  // Get secure hash from server
  const hash = await getPayUHash({
    key,
    txnid,
    amount,
    productinfo: params.productinfo,
    firstname: params.firstname,
    email: params.email,
    udf1: params.udf1 || '',
    udf2: params.udf2 || '',
    udf3: params.udf3 || '',
    udf4: params.udf4 || '',
    udf5: params.udf5 || '',
  });

  // Build PayU POST form and submit
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = PAYU_URL;
  form.style.display = 'none';

  const fields: Record<string, string> = {
    key,
    txnid,
    amount,
    productinfo: params.productinfo,
    firstname: params.firstname,
    email: params.email,
    phone: params.phone || '',
    surl: successUrl,
    furl: failureUrl,
    hash,
    udf1: params.udf1 || '',
    udf2: params.udf2 || '',
    udf3: params.udf3 || '',
    udf4: params.udf4 || '',
    udf5: params.udf5 || '',
    service_provider: 'payu_paisa',
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}

/**
 * Get current logged-in user details for pre-filling payment form
 */
export function getCurrentUserForPayment(): { name: string; email: string } {
  const user = auth.currentUser;
  if (user) {
    return {
      name: user.displayName || user.email?.split('@')[0] || 'Student',
      email: user.email || '',
    };
  }

  // Fallback from localStorage
  const stored = localStorage.getItem('fii_user_profile');
  if (stored) {
    try {
      const p = JSON.parse(stored);
      return { name: p.displayName || p.name || 'Student', email: p.email || '' };
    } catch {
      // ignore
    }
  }
  return { name: 'Student', email: '' };
}
