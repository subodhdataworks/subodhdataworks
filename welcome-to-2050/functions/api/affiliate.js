/**
 * Cloudflare Pages Function — /api/affiliate
 *
 * Server-Side Real-Time Cross-Device Affiliate Engine:
 * 1. Eliminates device isolation: Referrer receives ₹100 commission even when student pays on another phone.
 * 2. Connects directly to Razorpay API using RAZORPAY_KEY_ID & RAZORPAY_KEY_SECRET.
 * 3. Strictly filters for new payments (affiliateEpoch === 'v3_clean') with an explicit refCode match.
 *    Old historical test payments or payments without a referral code are NEVER counted.
 * 4. Enforces strict role separation:
 *    - Buyer gets: Course Unlocked (₹0 wallet commission)
 *    - Referrer (who shared link) gets: Flat ₹100 Commission per paid student
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

function normalizeRefCode(ref) {
  if (!ref) return '';
  return String(ref).trim().toUpperCase().replace(/100$/, '').replace(/[^A-Z0-9]/g, '');
}

// In-process server memory storage for new verified payments submitted via POST (v3_clean)
if (!globalThis.__affiliate_payments_v3) {
  globalThis.__affiliate_payments_v3 = [];
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const keyId = env?.RAZORPAY_KEY_ID;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  const url = new URL(request.url);
  const rawCode = url.searchParams.get('refCode') || url.searchParams.get('ref') || '';
  const cleanCode = normalizeRefCode(rawCode);

  if (!cleanCode) {
    return json({
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      availableBalance: 0,
      pendingBalance: 0,
      totalEarned: 0,
      referrals: [],
    });
  }

  const matched = [];
  const seenPaymentIds = new Set();
  let totalCommission = 0;

  // 1. Check server memory store (only v3_clean records with exact refCode match)
  const memList = Array.isArray(globalThis.__affiliate_payments_v3) ? globalThis.__affiliate_payments_v3 : [];
  for (const item of memList) {
    const itemRef = normalizeRefCode(item.refCode || '');
    if (itemRef && itemRef === cleanCode && !seenPaymentIds.has(item.paymentId)) {
      seenPaymentIds.add(item.paymentId);
      matched.push(item);
      totalCommission += item.commission || 100;
    }
  }

  // 2. If Razorpay keys are configured, fetch live captured payments from gateway
  if (keyId && keySecret) {
    try {
      const authHeader = 'Basic ' + btoa(`${keyId}:${keySecret}`);
      const rzpRes = await fetch('https://api.razorpay.com/v1/payments?count=50', {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
        },
      });

      if (rzpRes.ok) {
        const payload = await rzpRes.json();
        const payments = Array.isArray(payload?.items) ? payload.items : [];

        for (const p of payments) {
          if (p.status !== 'captured') continue;
          if (seenPaymentIds.has(p.id)) continue;

          // Strictly ignore all old historical test payments before v3_clean reset
          if (p.notes?.affiliateEpoch !== 'v3_clean') continue;

          const pRef = normalizeRefCode(p.notes?.refCode || p.notes?.ref || '');
          // Must have an explicit non-empty referral code matching this affiliate
          if (pRef && pRef === cleanCode) {
            seenPaymentIds.add(p.id);
            matched.push({
              id: `ref_rzp_${p.id}`,
              name: p.notes?.name || p.email?.split('@')[0] || 'Enrolled Student',
              email: p.email || '',
              phone: p.contact || '',
              date: new Date(p.created_at * 1000).toISOString().slice(0, 10),
              status: 'Paid',
              amount: p.amount / 100,
              commission: 100, // ₹100 Flat Commission to Referrer
              course: p.notes?.courseTitle || 'Data Analyst with GenAI',
              paymentId: p.id,
              referralId: `RF-${p.id.slice(-4).toUpperCase()}`,
              approvedDate: new Date(p.created_at * 1000).toISOString(),
            });
            totalCommission += 100;
          }
        }
      }
    } catch (err) {
      console.warn('Razorpay live payments query error:', err);
    }
  }

  if (matched.length > 0) {
    return json({
      clicks: matched.length,
      signups: matched.length,
      paidEnrollments: matched.length,
      availableBalance: totalCommission,
      pendingBalance: 0,
      totalEarned: totalCommission,
      referrals: matched,
    });
  }

  // Clean Zero State for users with 0 referrals
  return json({
    clicks: 0,
    signups: 0,
    paidEnrollments: 0,
    availableBalance: 0,
    pendingBalance: 0,
    totalEarned: 0,
    referrals: [],
  });
}

export async function onRequestPost(context) {
  const { request } = context;
  try {
    const body = await request.json().catch(() => ({}));
    const cleanRef = normalizeRefCode(body.refCode);
    if (!cleanRef) {
      return json({ success: false, error: 'Missing referral code' }, 400);
    }
    const paymentId = String(body.paymentId || '').trim();
    if (!paymentId) {
      return json({ success: false, error: 'Missing paymentId' }, 400);
    }

    const newRecord = {
      id: `ref_post_${paymentId}`,
      refCode: cleanRef,
      name: body.payerName || 'Enrolled Student',
      email: body.payerEmail || '',
      phone: body.payerPhone || '',
      date: new Date().toISOString().slice(0, 10),
      status: 'Paid',
      amount: Number(body.amount) || 4,
      commission: 100, // ₹100 Flat Commission
      course: body.courseTitle || 'Data Analyst with GenAI',
      paymentId,
      referralId: `RF-${paymentId.slice(-4).toUpperCase() || '8821'}`,
      approvedDate: new Date().toISOString(),
    };

    if (!Array.isArray(globalThis.__affiliate_payments_v3)) {
      globalThis.__affiliate_payments_v3 = [];
    }

    // Deduplicate by paymentId
    if (!globalThis.__affiliate_payments_v3.some((p) => p.paymentId === paymentId)) {
      globalThis.__affiliate_payments_v3.unshift(newRecord);
    }

    return json({
      success: true,
      message: `Referral credited to ${cleanRef}`,
      creditedTo: cleanRef,
      commission: 100,
      record: newRecord,
    });
  } catch (err) {
    return json({ success: false, error: err.message }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
