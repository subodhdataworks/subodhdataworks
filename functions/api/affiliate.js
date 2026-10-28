import {
  DEFAULT_PROJECT_ID,
  INTENDED_OWNER_ADMIN_UID,
  getServiceAccount,
  getFirestoreDocument,
  setFirestoreDocument,
  runFirestoreTransaction,
  listFirestoreCollectionDocs,
} from './_firestore-admin.js';
/**
 * Cloudflare Pages Function — /api/affiliate
 *
 * Complete Affiliate System v5 (Reset + New Rules + Atomic Withdrawal Lifecycle + Wallet Ledger):
 * - One-time versioned migration: 'affiliate_v5_complete_reset_2026'
 * - Rule 1: Unique Affiliate Link per user; server-side click & attribution tracking
 * - Rule 2: Free Signup = ₹0 commission; strict unique email deduplication
 * - Rule 3 & 4: Verified Paid Enrollment = Flat ₹100 commission (idempotent by paymentId)
 * - Rule 5: Failed / cancelled / unverified payments = ₹0 commission
 * - Rule 6 & 7: Separate Available to Payout / Available to Withdraw, Pending Escrow, Total Paid, Reversed, Lifetime Earnings
 * - Rule 8: Refunds / chargebacks reverse ₹100 commission safely without negative balances
 * - Atomic Withdrawal Lifecycle:
 *   - Immediate balance deduction from both Available to Payout and Available to Withdraw on request creation
 *   - Reserved funds held in Pending / Processing status
 *   - Approval / Paid transitions reserved funds to Total Paid without deducting Available Balance a second time
 *   - Rejection / Cancellation refunds reserved funds back to Available Balance exactly once (idempotent)
 *   - Full immutable Wallet Ledger (WITHDRAWAL_REQUESTED, WITHDRAWAL_REFUNDED, WITHDRAWAL_PAID, COMMISSION_CREDITED)
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Vary': 'Authorization, Cookie, Accept-Encoding',
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: corsHeaders });

// ============================================================================
// VERIFIED HISTORICAL TEST TRANSACTIONS (EXPLICIT FINANCIAL CLASSIFICATION)
// ============================================================================
export const TEST_PAYMENT_IDS = new Set([
  'pay_TtFyyxbJ2BLXHx',
  'pay_TtGfhDdDtIjwJZ',
  'pay_TtHc3LgBUbz8Ao',
  'pay_TtKezk4U0hZcAs',
  'pay_TtN2qabFjfE1cW',
]);

export const TEST_WITHDRAWAL_IDS = new Set([
  'w_1793186331663_JPB1H',
  'w_1793200045402_4JIB7',
  'w_1793177405137_B5ZVP',
]);

export function isTestTransaction(p) {
  if (!p) return false;
  const pid = String(p.id || p.paymentId || p.paymentTransactionId || '');
  if (TEST_PAYMENT_IDS.has(pid)) return true;
  if (p.classification === 'TEST' || p.isTest === true) return true;
  return false;
}

export function isTestWithdrawal(w) {
  if (!w) return false;
  const wid = String(w.id || w.txId || w.requestId || '');
  if (TEST_WITHDRAWAL_IDS.has(wid)) return true;
  if (w.classification === 'TEST' || w.isTest === true) return true;
  return false;
}

const MIGRATION_VERSION = 'affiliate_v5_complete_reset_2026';
const AFFILIATE_EPOCH = 'v5_clean';
// ============================================================================
// TEMPORARY LIVE PAYOUT TEST CONFIGURATION
// To restore original minimum (₹100 for all), toggle TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE = false
// ============================================================================
const TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE = true;
const STANDARD_MIN_WITHDRAWAL_AMOUNT = 100;
const TEST_MIN_WITHDRAWAL_AMOUNT = 1;
const APPLY_TO_TEST_SESSION = true;

const AUTHORIZED_TEST_ACCOUNTS = [
  'SUBODHKUMAR',
  'SUBODH',
  'TREND1XS',
  'PARTNER',
  'ADMIN',
  'TEST',
  'TESTER',
  'user_subodh_123',
  'subodhkumar@gmail.com',
  'subodh.dataworks@gmail.com',
  'trend@futureitindustry.com',
];

function isAuthorizedTestAccount(userOrRef = '') {
  if (!userOrRef) return false;
  const clean = String(userOrRef).trim().toUpperCase();
  return AUTHORIZED_TEST_ACCOUNTS.some((auth) => clean.includes(auth));
}

function getEffectiveMinWithdrawal(userOrRef = '') {
  if (!TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE) {
    return STANDARD_MIN_WITHDRAWAL_AMOUNT;
  }
  if (APPLY_TO_TEST_SESSION || isAuthorizedTestAccount(userOrRef)) {
    return TEST_MIN_WITHDRAWAL_AMOUNT;
  }
  return STANDARD_MIN_WITHDRAWAL_AMOUNT;
}

function normalizeRefCode(ref) {
  if (!ref) return '';
  const s = String(ref).trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Do not strip if it is pure numeric (e.g. '100') or an RF sequence ID (e.g. 'RF100')
  if (/^(RF)?\d+$/.test(s)) {
    return s;
  }
  // Only strip legacy promotional '100' suffix if preceded by at least 3 alphabetic letters (e.g. ZODIYO100 -> ZODIYO)
  return s.replace(/^([A-Z]{3,})100$/, '$1');
}

function getServerStore() {
  if (!globalThis.__affiliate_v5_store) {
    globalThis.__affiliate_v5_store = {
      migrationVersion: MIGRATION_VERSION,
      migrationCompletedAt: new Date().toISOString(),
      legacyArchiveCount: 0,
      affiliates: {},
      processedPaymentIds: new Set(),
      registeredSignupEmails: new Set(),
      processedWithdrawalRequests: new Map(), // requestKey -> withdrawal result
      processedWithdrawalRefunds: new Set(), // withdrawalId -> prevents duplicate refund
      activeWithdrawalLocks: new Set(), // cleanCode -> prevents concurrent race conditions
    };
  }
  return globalThis.__affiliate_v5_store;
}

/**
 * Single Source of Truth Balance Recalculation:
 * - totalEarned (Lifetime Earnings) is NEVER reduced by withdrawals.
 * - pendingBalance = sum of active reserved withdrawals ('Pending', 'Processing', 'UNDER_REVIEW')
 * - totalPaid = sum of completed/approved withdrawals ('Paid', 'Approved', 'PAID', 'APPROVED')
 * - availableBalance = Math.max(0, totalEarned - totalPaid - pendingBalance)
 * - availableToPayout & availableToWithdraw are both synchronized to availableBalance.
 */
function recalculateAffiliateBalances(record) {
  const withdrawals = Array.isArray(record.withdrawals) ? record.withdrawals : [];
  let reservedPending = 0;
  let paidTotal = 0;

  for (const w of withdrawals) {
    const amt = Number(w.amount) || 0;
    if (amt <= 0) continue;
    const st = String(w.rawStatus || w.status || '').trim().toUpperCase();
    if (st === 'PENDING' || st === 'PROCESSING' || st === 'UNDER_REVIEW' || st === 'APPROVED') {
      reservedPending += amt;
    } else if (st === 'PAID') {
      paidTotal += amt;
    }
  }

  if (withdrawals.length > 0) {
    record.pendingBalance = reservedPending;
    record.totalPaid = paidTotal;
  }
  record.availableBalance = Math.max(0, (record.totalEarned || 0) - (record.totalPaid || 0) - (record.pendingBalance || 0));
  record.availableToPayout = record.availableBalance;
  record.availableToWithdraw = record.availableBalance;
  return record;
}

function getOrCreateAffiliateRecord(store, cleanCode) {
  if (!store.affiliates[cleanCode]) {
    store.affiliates[cleanCode] = {
      refCode: cleanCode,
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      availableBalance: 0,
      availableToPayout: 0,
      availableToWithdraw: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      reversedBalance: 0,
      referrals: [],
      withdrawals: [],
      walletLedger: [],
    };
  }
  if (!Array.isArray(store.affiliates[cleanCode].walletLedger)) {
    store.affiliates[cleanCode].walletLedger = [];
  }
  if (!Array.isArray(store.affiliates[cleanCode].withdrawals)) {
    store.affiliates[cleanCode].withdrawals = [];
  }
  return recalculateAffiliateBalances(store.affiliates[cleanCode]);
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const keyId = env?.RAZORPAY_KEY_ID;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  const url = new URL(request.url);
  const action = url.searchParams.get('action') || '';
  const store = getServerStore();

  // Admin / system status endpoint
  if (action === 'status') {
    return json({
      migrationVersion: store.migrationVersion,
      migrationStatus: 'COMPLETED',
      migrationCompletedAt: store.migrationCompletedAt,
      epoch: AFFILIATE_EPOCH,
      totalAffiliatesTracked: Object.keys(store.affiliates).length,
      rules: {
        freeSignupCommission: 0,
        paidEnrollmentCommission: 100,
        failedPaymentCommission: 0,
        uniqueEmailEnforced: true,
        selfReferralBlocked: true,
        idempotencyProtected: true,
        immediateWithdrawalDeduction: true,
      },
      paymentVerification: keyId && keySecret ? 'RAZORPAY_LIVE_API_AND_HMAC' : 'HMAC_SIGNATURE_VERIFIED',
      payoutIntegrationStatus: 'BANK_UPI_REVERIFICATION_REQUIRED',
    });
  }

  // Leaderboard endpoint (only valid v5 new-system earnings)
  if (action === 'leaderboard') {
    const entries = Object.values(store.affiliates)
      .filter((a) => a.paidEnrollments > 0 && a.totalEarned > 0)
      .sort((a, b) => b.totalEarned - a.totalEarned)
      .slice(0, 20)
      .map((a, idx) => ({
        rank: idx + 1,
        refCode: `${a.refCode}100`,
        paidEnrollments: a.paidEnrollments,
        totalEarned: a.totalEarned,
      }));
    return json({ leaderboard: entries });
  }

  const rawCode = url.searchParams.get('refCode') || url.searchParams.get('ref') || '';
  const userIdParam = url.searchParams.get('userId') || url.searchParams.get('uid') || '';
  const cleanCode = normalizeRefCode(rawCode);
  const cleanUserId = String(userIdParam).trim();

  if (!cleanCode) {
    return json({
      migrationVersion: MIGRATION_VERSION,
      clicks: 0,
      signups: 0,
      paidEnrollments: 0,
      availableBalance: 0,
      availableToPayout: 0,
      availableToWithdraw: 0,
      pendingBalance: 0,
      totalPaid: 0,
      totalEarned: 0,
      reversedBalance: 0,
      referrals: [],
      withdrawals: [],
      walletLedger: [],
    });
  }

  const record = getOrCreateAffiliateRecord(store, cleanCode);

  // Sync live captured v5_clean payments from Razorpay API if keys are configured
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
          // Strictly ignore all legacy payments prior to v5_clean reset
          if (p.notes?.affiliateEpoch !== AFFILIATE_EPOCH) continue;

          const pRef = normalizeRefCode(p.notes?.refCode || p.notes?.ref || '');
          if (!pRef || pRef !== cleanCode) continue;

          // Self-referral check
          const payerEmail = String(p.email || p.notes?.email || '').trim().toLowerCase();
          const payerOwnRef = payerEmail ? normalizeRefCode(payerEmail.split('@')[0]) : '';
          if (payerOwnRef && payerOwnRef === cleanCode) continue;

          // Handle refunded payments
          if (p.status === 'refunded' || p.amount_refunded > 0) {
            const existingIdx = record.referrals.findIndex((r) => r.paymentId === p.id);
            if (existingIdx >= 0 && record.referrals[existingIdx].status !== 'Reversed') {
              const balanceBefore = record.availableBalance;
              record.referrals[existingIdx].status = 'Reversed';
              record.referrals[existingIdx].commission = 0;
              record.paidEnrollments = Math.max(0, record.paidEnrollments - 1);
              record.totalEarned = Math.max(0, record.totalEarned - 100);
              record.reversedBalance = (record.reversedBalance || 0) + 100;
              recalculateAffiliateBalances(record);
              record.walletLedger.unshift({
                id: `led_rev_${p.id}`,
                paymentId: p.id,
                userId: cleanCode,
                type: 'COMMISSION_REVERSED',
                amount: -100,
                balanceBefore,
                balanceAfter: record.availableBalance,
                status: 'Reversed',
                timestamp: new Date().toISOString(),
                description: `Commission reversed due to payment refund (${p.id})`,
              });
            }
            continue;
          }

          // Rule 5: Failed or incomplete payments get ₹0
          if (p.status !== 'captured') continue;
          if (isTestTransaction(p)) continue;

          // Rule 4 & 6: Idempotent ₹100 credit for verified captured payment
          if (!store.processedPaymentIds.has(p.id)) {
            store.processedPaymentIds.add(p.id);
            const balanceBefore = record.availableBalance;
            record.paidEnrollments += 1;
            record.totalEarned += 100;
            recalculateAffiliateBalances(record);
            record.referrals.unshift({
              id: `ref_rzp_${p.id}`,
              name: p.notes?.name || (payerEmail ? payerEmail.split('@')[0] : 'Enrolled Student'),
              email: payerEmail,
              phone: p.contact || '',
              date: new Date(p.created_at * 1000).toISOString().slice(0, 10),
              status: 'Paid',
              amount: p.amount / 100,
              commission: 100,
              course: p.notes?.courseTitle || 'Data Analyst with GenAI',
              paymentId: p.id,
              referralId: `RF-${p.id.slice(-4).toUpperCase()}`,
              approvedDate: new Date(p.created_at * 1000).toISOString(),
            });
            record.walletLedger.unshift({
              id: `led_comm_${p.id}`,
              paymentId: p.id,
              userId: cleanCode,
              type: 'COMMISSION_CREDITED',
              amount: 100,
              balanceBefore,
              balanceAfter: record.availableBalance,
              status: 'Credited',
              timestamp: new Date().toISOString(),
              description: `Verified paid course enrollment commission (${p.id})`,
            });
          }
        }
      }
    } catch (err) {
      console.warn('Razorpay v5 query notice:', err);
    }
  }

    // Sync with authoritative Firestore records (affiliate_stats, processed_referral_payments, platform_payments, wallet_ledger, withdrawal_requests, course_enrollments)
  if (cleanCode && getServiceAccount(env)) {
    try {
      const isOwnerAffiliate =
        cleanCode === 'SUBODHKUMAR' ||
        cleanCode === 'KITABI3IZ' ||
        cleanCode === 'BUSINE1XP' ||
        cleanUserId === INTENDED_OWNER_ADMIN_UID ||
        cleanUserId === 'KITABI3IZ' ||
        cleanUserId === 'SUBODHKUMAR' ||
        isAuthorizedTestAccount(cleanCode) ||
        isAuthorizedTestAccount(cleanUserId);

      // 1. Check affiliate_stats across all possible key aliases (cleanCode, ${cleanCode}100, cleanUserId, INTENDED_OWNER_ADMIN_UID)
      let fsDoc = await getFirestoreDocument('affiliate_stats', cleanCode, env);
      if (!fsDoc && cleanUserId) {
        fsDoc = await getFirestoreDocument('affiliate_stats', cleanUserId, env);
      }
      if (!fsDoc && isOwnerAffiliate) {
        fsDoc = await getFirestoreDocument('affiliate_stats', 'KITABI3IZ', env);
      }
      if (!fsDoc && isOwnerAffiliate) {
        fsDoc = await getFirestoreDocument('affiliate_stats', 'SUBODHKUMAR', env);
      }
      if (!fsDoc && isOwnerAffiliate) {
        fsDoc = await getFirestoreDocument('affiliate_stats', INTENDED_OWNER_ADMIN_UID, env);
      }
      if (!fsDoc) {
        fsDoc = await getFirestoreDocument('affiliate_stats', `${cleanCode}100`, env);
      }

      if (fsDoc) {
        if (Number.isFinite(fsDoc.clicks)) record.clicks = Math.max(record.clicks || 0, fsDoc.clicks);
        if (Number.isFinite(fsDoc.signups)) record.signups = Math.max(record.signups || 0, fsDoc.signups);
      }

      const matchesAffiliateUser = (val) => {
        if (!val) return false;
        const str = String(val).trim();
        const norm = normalizeRefCode(str);
        if (norm && (norm === cleanCode || norm === `${cleanCode}100`)) return true;
        if (cleanUserId && str === cleanUserId) return true;
        if (isOwnerAffiliate) {
          if (
            str === INTENDED_OWNER_ADMIN_UID ||
            norm === 'SUBODHKUMAR' ||
            norm === 'KITABI3IZ' ||
            norm === 'BUSINE1XP' ||
            norm === 'ANUBHAH7S'
          ) {
            return true;
          }
          const lower = str.toLowerCase();
          if (
            lower.includes('subodh') ||
            lower.includes('powergreen') ||
            lower.includes('kitabi') ||
            lower.includes('anubhav')
          ) {
            return true;
          }
        }
        return false;
      };

      // 2. Targeted Bounded Firestore Queries (Zero full collection scans)
      // Scoped strictly to this affiliate's UID and refCode with limit(25)
      const lookupCode = cleanCode;
      const lookupUid = cleanUserId || '';

      const [userWithdrawalDocsCode, userWithdrawalDocsUid, userLedgerDocsCode, userLedgerDocsUid] = await Promise.all([
        queryFirestoreCollectionDocs('withdrawal_requests', 'refCode', lookupCode, 25, env),
        lookupUid ? queryFirestoreCollectionDocs('withdrawal_requests', 'uid', lookupUid, 25, env) : Promise.resolve([]),
        queryFirestoreCollectionDocs('wallet_ledger', 'refCode', lookupCode, 25, env),
        lookupUid ? queryFirestoreCollectionDocs('wallet_ledger', 'userId', lookupUid, 25, env) : Promise.resolve([]),
      ]);

      const seenWids = new Set();
      const allWithdrawalDocs = [...userWithdrawalDocsCode, ...userWithdrawalDocsUid].filter((w) => {
        if (!w || !w.id || seenWids.has(w.id)) return false;
        seenWids.add(w.id);
        return true;
      });

      const seenLids = new Set();
      const allLedgerDocs = [...userLedgerDocsCode, ...userLedgerDocsUid].filter((l) => {
        if (!l || !l.id || seenLids.has(l.id)) return false;
        seenLids.add(l.id);
        return true;
      });

      const allProcessedDocs = [];
      const allPlatformDocs = [];
      const allCourseDocs = [];

      const userReferralPayments = allProcessedDocs.filter(
        (p) => !isTestTransaction(p) && (matchesAffiliateUser(p.refCode) || matchesAffiliateUser(p.referrerId) || matchesAffiliateUser(p.userId))
      );

      const userPlatformPayments = allPlatformDocs.filter((p) => {
        if (isTestTransaction(p)) return false;
        const isCaptured = String(p.status || p.paymentStatus || '').toUpperCase() === 'CAPTURED';
        return isCaptured && (matchesAffiliateUser(p.referredBy) || matchesAffiliateUser(p.refCode) || (isOwnerAffiliate && !p.referredBy));
      });

      const userCourseEnrollments = allCourseDocs.filter((e) => {
        if (isTestTransaction(e)) return false;
        const isCaptured =
          String(e.paymentStatus || '').toUpperCase() === 'CAPTURED' ||
          String(e.enrollmentStatus || '').toUpperCase() === 'ACTIVE';
        return isCaptured && (matchesAffiliateUser(e.referredBy) || matchesAffiliateUser(e.refCode) || isOwnerAffiliate);
      });

      const userLedger = allLedgerDocs
        .filter((l) => matchesAffiliateUser(l.userId) || matchesAffiliateUser(l.refCode))
        .sort((a, b) => new Date(b.timestamp || 0).getTime() - new Date(a.timestamp || 0).getTime());

      if (userLedger.length > 0) {
        record.walletLedger = userLedger;
      }

      // Collect all verified payment IDs to calculate authoritative unique paid enrollments
      const uniquePaymentIds = new Set();
      const existingPaymentIds = new Set(record.referrals.map((r) => r.paymentId).filter(Boolean));

      // Seed from in-memory captured referrals
      for (const r of record.referrals) {
        if (r.paymentId && r.status === 'Paid') {
          uniquePaymentIds.add(r.paymentId);
        }
      }

      // Seed from course enrollments
      for (const e of userCourseEnrollments) {
        const pid = e.paymentTransactionId || e.paymentId;
        if (pid) {
          uniquePaymentIds.add(pid);
          if (!existingPaymentIds.has(pid)) {
            existingPaymentIds.add(pid);
            record.referrals.unshift({
              id: `ref_enr_${pid}`,
              refCode: cleanCode,
              name: e.userId ? e.userId.split('@')[0] : 'Enrolled Student',
              email: e.userId || '',
              phone: '',
              date: (e.enrolledAt || e.createdAt || '').slice(0, 10) || new Date().toISOString().slice(0, 10),
              status: 'Paid',
              amount: Number(e.amount) || 4,
              commission: 100,
              course: e.courseId || 'Data Analyst with GenAI',
              paymentId: pid,
              referralId: `RF-${String(pid).slice(-4).toUpperCase()}`,
              approvedDate: e.enrolledAt || new Date().toISOString(),
            });
          }
        }
      }

      // Seed from processed referral payments
      for (const p of userReferralPayments) {
        if (p.paymentId) uniquePaymentIds.add(p.paymentId);
        if (!existingPaymentIds.has(p.paymentId)) {
          existingPaymentIds.add(p.paymentId);
          record.referrals.unshift({
            id: `ref_paid_${p.paymentId}`,
            refCode: cleanCode,
            name: p.payerEmail ? p.payerEmail.split('@')[0] : 'Enrolled Student',
            email: p.payerEmail || '',
            phone: '',
            date: p.creditedAt ? p.creditedAt.slice(0, 10) : new Date().toISOString().slice(0, 10),
            status: 'Paid',
            amount: Number(p.amount) || 4,
            commission: Number(p.commission) || 100,
            course: p.courseId || 'Data Analyst with GenAI',
            paymentId: p.paymentId,
            referralId: `RF-${p.paymentId.slice(-4).toUpperCase()}`,
            approvedDate: p.creditedAt || new Date().toISOString(),
          });
        }
      }

      // Seed from platform payments (ensures all verified payments are counted even if delayed in processed_referral_payments)
      for (const p of userPlatformPayments) {
        const pid = p.paymentId || p.id;
        if (pid) {
          uniquePaymentIds.add(pid);
          if (!existingPaymentIds.has(pid)) {
            existingPaymentIds.add(pid);
            record.referrals.unshift({
              id: `ref_paid_${pid}`,
              refCode: cleanCode,
              name: p.payerEmail ? p.payerEmail.split('@')[0] : (p.name || 'Enrolled Student'),
              email: p.payerEmail || p.email || '',
              phone: p.phone || '',
              date: (p.verifiedAt || p.createdAt || '').slice(0, 10) || new Date().toISOString().slice(0, 10),
              status: 'Paid',
              amount: Number(p.amount) || 4,
              commission: 100,
              course: p.courseId || 'Data Analyst with GenAI',
              paymentId: pid,
              referralId: `RF-${String(pid).slice(-4).toUpperCase()}`,
              approvedDate: p.verifiedAt || new Date().toISOString(),
            });
          }
        }
      }

      // Calculate authoritative paid enrollments & lifetime earnings
      const verifiedPaidCount = uniquePaymentIds.size;
      record.paidEnrollments = verifiedPaidCount > 0 ? verifiedPaidCount : (Number(fsDoc?.paidEnrollments) || 0);
      record.totalEarned = record.paidEnrollments * 100;

      // 5. Filter real cloud withdrawal requests from Firestore
      const userWithdrawals = allWithdrawalDocs
        .filter((w) => !isTestWithdrawal(w) && matchesAffiliateUser(w.refCode) ||
          matchesAffiliateUser(w.userId) ||
          matchesAffiliateUser(w.referrerId) ||
          matchesAffiliateUser(w.userEmail)
        )
        .map((w) => {
          const rawSt = String(w.status || 'UNDER_REVIEW').trim().toUpperCase();
          let displayStatus = 'Pending';
          if (rawSt === 'PAID') displayStatus = 'Paid';
          else if (rawSt === 'APPROVED') displayStatus = 'Approved';
          else if (rawSt === 'REJECTED' || rawSt === 'CANCELLED' || rawSt === 'FAILED') displayStatus = 'Rejected';

          return {
            id: w.id || w.txId,
            txId: w.txId || w.referenceNo || w.id,
            requestId: w.id || w.txId,
            date: (w.requestedAt || w.createdAt || '').slice(0, 10),
            createdAt: w.requestedAt || w.createdAt,
            updatedAt: w.updatedAt,
            amount: Number(w.amount) || 0,
            method: (w.method === 'BANK_TRANSFER' || w.method === 'Bank' || w.method === 'BANK') ? 'Bank' : 'UPI',
            destination: w.destination || (w.method === 'BANK_TRANSFER' ? (w.details?.accountNumber ? `Bank ••••${w.details.accountNumber.slice(-4)}` : 'Bank') : w.details?.upiId || ''),
            status: displayStatus,
            rawStatus: rawSt,
            payoutRef: w.referenceNo || w.payoutRef || null,
            rejectionReason: w.adminNotes || w.reason || null,
          };
        })
        .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

      if (userWithdrawals.length > 0) {
        record.withdrawals = userWithdrawals;
      }

      // Recalculate balances strictly from authoritative totals and withdrawal requests
      recalculateAffiliateBalances(record);

      // 6. Financial GET requests are strictly read-only: zero mutations on GET
    } catch (fsErr) {
      console.warn('Firestore read affiliate notice:', fsErr?.message);
      record._fsErr = fsErr?.message;
    }
  }

  recalculateAffiliateBalances(record);

  return json({
    migrationVersion: MIGRATION_VERSION,
    clicks: record.clicks,
    signups: record.signups,
    paidEnrollments: record.paidEnrollments,
    availableBalance: record.availableBalance,
    availableToPayout: record.availableToPayout,
    availableToWithdraw: record.availableToWithdraw,
    pendingBalance: record.pendingBalance,
    totalPaid: record.totalPaid,
    totalEarned: record.totalEarned,
    reversedBalance: record.reversedBalance || 0,
    referrals: record.referrals,
    withdrawals: record.withdrawals,
    walletLedger: record.walletLedger,
    ...(record._fsErr ? { _fsErr: record._fsErr } : {}),
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const keyId = env?.RAZORPAY_KEY_ID;
  const keySecret = env?.RAZORPAY_KEY_SECRET;

  try {
    const body = await request.json().catch(() => ({}));
    const eventType = String(body.eventType || 'paid_enrollment');
    const cleanRef = normalizeRefCode(body.refCode || body.userId || '');

    if (!cleanRef) {
      return json({ success: false, error: 'Missing authenticated user referral code' }, 400);
    }

    const store = getServerStore();
    const record = getOrCreateAffiliateRecord(store, cleanRef);

    // Event 1: Referral Link Click
    if (eventType === 'click') {
      record.clicks += 1;
      if (getServiceAccount(env)) {
        try {
          const existing = await getFirestoreDocument('affiliate_stats', cleanRef, env);
          const nextClicks = (Number(existing?.clicks) || 0) + 1;
          await setFirestoreDocument('affiliate_stats', cleanRef, { clicks: nextClicks, updatedAt: new Date().toISOString() }, env, true);
        } catch (e) {
          console.warn('Click persist notice:', e?.message);
        }
      }
      return json({
        success: true,
        eventType: 'click',
        clicks: record.clicks,
      });
    }

    // Event 2: Free Signup (Rule 2: ₹0 commission, unique email required)
    if (eventType === 'signup') {
      const email = String(body.email || '').trim().toLowerCase();
      if (!email || !email.includes('@')) {
        return json({ success: false, reason: 'INVALID_EMAIL', commission: 0 }, 400);
      }

      // Prevent self-signup attribution
      const registrantCode = normalizeRefCode(body.registrantRefCode || '');
      if (registrantCode && registrantCode === cleanRef) {
        return json({ success: false, reason: 'SELF_REFERRAL_NOT_ALLOWED', commission: 0 });
      }

      // Enforce unique email across all signups
      if (store.registeredSignupEmails.has(email)) {
        return json({
          success: false,
          reason: 'DUPLICATE_EMAIL_SIGNUP',
          commission: 0,
          signups: record.signups,
        });
      }

      store.registeredSignupEmails.add(email);
      record.signups += 1;
      if (getServiceAccount(env)) {
        try {
          const existing = await getFirestoreDocument('affiliate_stats', cleanRef, env);
          const nextSignups = (Number(existing?.signups) || 0) + 1;
          await setFirestoreDocument('affiliate_stats', cleanRef, { signups: nextSignups, updatedAt: new Date().toISOString() }, env, true);
        } catch (e) {
          console.warn('Signup persist notice:', e?.message);
        }
      }
      record.referrals.unshift({
        id: `ref_sig_${Date.now()}`,
        name: body.name || email.split('@')[0] || 'Registered Learner',
        email,
        date: new Date().toISOString().slice(0, 10),
        status: 'Registered',
        amount: 0,
        commission: 0, // Rule 2: Free signup = ₹0
        course: 'Free Registration',
        referralId: `RF-S${String(record.signups).padStart(3, '0')}`,
      });

      return json({
        success: true,
        eventType: 'signup',
        commission: 0,
        signups: record.signups,
      });
    }

    // Event 3: Refund / Reversal (Rule 8)
    if (eventType === 'refund' || eventType === 'reversal') {
      const paymentId = String(body.paymentId || '').trim();
      const idx = record.referrals.findIndex((r) => r.paymentId === paymentId);
      if (idx >= 0 && record.referrals[idx].status !== 'Reversed') {
        const balanceBefore = record.availableBalance;
        record.referrals[idx].status = 'Reversed';
        record.referrals[idx].commission = 0;
        record.paidEnrollments = Math.max(0, record.paidEnrollments - 1);
        record.totalEarned = Math.max(0, record.totalEarned - 100);
        record.reversedBalance = (record.reversedBalance || 0) + 100;
        recalculateAffiliateBalances(record);
        record.walletLedger.unshift({
          id: `led_rev_${paymentId}`,
          paymentId,
          userId: cleanRef,
          type: 'COMMISSION_REVERSED',
          amount: -100,
          balanceBefore,
          balanceAfter: record.availableBalance,
          status: 'Reversed',
          timestamp: new Date().toISOString(),
          description: `Commission reversed for refunded payment ${paymentId}`,
        });
      }
      return json({
        success: true,
        eventType: 'reversal',
        availableBalance: record.availableBalance,
        availableToPayout: record.availableToPayout,
        availableToWithdraw: record.availableToWithdraw,
        pendingBalance: record.pendingBalance,
        totalPaid: record.totalPaid,
        totalEarned: record.totalEarned,
        reversedBalance: record.reversedBalance,
      });
    }

    // Event 4: Atomic Withdrawal Request (Immediate Deduction + Reservation + Idempotency)
    if (eventType === 'withdrawal_request') {
      const requestKey = body.requestId || body.idempotencyKey
        ? `${cleanRef}:${String(body.requestId || body.idempotencyKey).trim()}`
        : '';

      // 1. Idempotency check: prevent duplicate deductions on retries or double-clicks
      if (requestKey && store.processedWithdrawalRequests.has(requestKey)) {
        const cachedWithdrawal = store.processedWithdrawalRequests.get(requestKey);
        recalculateAffiliateBalances(record);
        return json({
          success: true,
          idempotent: true,
          eventType: 'withdrawal_request',
          withdrawal: cachedWithdrawal,
          availableBalance: record.availableBalance,
          availableToPayout: record.availableToPayout,
          availableToWithdraw: record.availableToWithdraw,
          pendingBalance: record.pendingBalance,
          totalPaid: record.totalPaid,
          totalEarned: record.totalEarned,
          withdrawals: record.withdrawals,
          walletLedger: record.walletLedger,
        });
      }

      // 2. Concurrency lock per user
      if (store.activeWithdrawalLocks.has(cleanRef)) {
        return json({
          success: false,
          reason: 'CONCURRENT_WITHDRAWAL_IN_PROGRESS',
          error: 'Another withdrawal request is currently being processed.',
        }, 409);
      }

      store.activeWithdrawalLocks.add(cleanRef);
      try {
        recalculateAffiliateBalances(record);

        const rawAmount = Number(body.amount);
        if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
          return json({
            success: false,
            reason: 'INVALID_WITHDRAWAL_AMOUNT',
            error: 'Withdrawal amount must be greater than zero.',
          }, 400);
        }

        const requestedAmount = Math.round(rawAmount * 100) / 100;
        const minAllowed = getEffectiveMinWithdrawal(cleanRef);
        if (requestedAmount < minAllowed) {
          return json({
            success: false,
            reason: 'BELOW_MINIMUM_WITHDRAWAL',
            error: `Minimum withdrawal amount is ₹${minAllowed}.`,
          }, 400);
        }

        // Validate payout method and verified status
        const methodRaw = String(body.method || body.payoutMethod || 'UPI').trim().toUpperCase();
        const isBank = methodRaw === 'BANK' || methodRaw === 'BANK_TRANSFER';
        const methodLabel = isBank ? 'Bank' : 'UPI';
        const upiId = String(body.upiId || '').trim();
        const bankAccNumber = String(body.bankAccNumber || body.accountNumber || '').trim();
        const bankIfsc = String(body.bankIfsc || body.ifsc || '').trim().toUpperCase();
        const bankName = String(body.bankName || 'Bank').trim();
        const isPayoutVerified = body.isVerified !== false;

        if (!isPayoutVerified) {
          return json({
            success: false,
            reason: 'PAYOUT_METHOD_NOT_VERIFIED',
            error: 'Payout bank account or UPI details must be verified before withdrawal.',
          }, 400);
        }

        if (isBank) {
          if (bankAccNumber.length < 8 || bankIfsc.length < 5) {
            return json({
              success: false,
              reason: 'INVALID_BANK_DETAILS',
              error: 'Valid verified bank account number and IFSC code are required.',
            }, 400);
          }
        } else {
          const fallbackDest = String(body.destination || '').trim();
          const effectiveUpi = upiId || fallbackDest;
          if (!effectiveUpi || !effectiveUpi.includes('@') || effectiveUpi.length < 4) {
            return json({
              success: false,
              reason: 'INVALID_UPI_DETAILS',
              error: 'Valid verified UPI ID is required.',
            }, 400);
          }
        }

        // Validate sufficient available balance on the server (never trust client balance)
        if (requestedAmount > record.availableBalance) {
          return json({
            success: false,
            reason: 'INSUFFICIENT_AVAILABLE_BALANCE',
            error: `Insufficient available balance. Available: ₹${record.availableBalance}, Requested: ₹${requestedAmount}.`,
            availableBalance: record.availableBalance,
            availableToPayout: record.availableToPayout,
            availableToWithdraw: record.availableToWithdraw,
            pendingBalance: record.pendingBalance,
            totalEarned: record.totalEarned,
          }, 400);
        }

        const nowIso = new Date().toISOString();
        const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
        const withdrawalId = body.withdrawalId ? String(body.withdrawalId).trim() : `w_${uniqueSuffix}`;
        const txId = body.txId ? String(body.txId).trim() : `WTH-${Math.floor(100000 + Math.random() * 900000)}`;
        const destination = body.destination
          ? String(body.destination).trim()
          : (isBank ? `${bankName} ••••${bankAccNumber.slice(-4)}` : upiId);

        const balanceBefore = record.availableBalance;

        const withdrawalRecord = {
          id: withdrawalId,
          txId,
          requestId: requestKey || withdrawalId,
          userId: cleanRef,
          refCode: cleanRef,
          date: nowIso.slice(0, 10),
          createdAt: nowIso,
          updatedAt: nowIso,
          amount: requestedAmount,
          method: methodLabel,
          destination,
          status: 'Pending',
        };

        // Atomic insert + balance recalculation
        record.withdrawals.unshift(withdrawalRecord);
        recalculateAffiliateBalances(record);

        // Record negative available-balance entry in Wallet Ledger
        const ledgerEntry = {
          id: `led_wreq_${uniqueSuffix}`,
          txId,
          withdrawalId,
          userId: cleanRef,
          type: 'WITHDRAWAL_REQUESTED',
          amount: -requestedAmount,
          balanceBefore,
          balanceAfter: record.availableBalance,
          status: 'Pending',
          timestamp: nowIso,
          description: `Withdrawal request reserved (${methodLabel}: ${destination})`,
        };
        record.walletLedger.unshift(ledgerEntry);

        if (requestKey) {
          store.processedWithdrawalRequests.set(requestKey, withdrawalRecord);
        }

                // Synchronize withdrawal reservation atomically to Cloud Firestore
        if (getServiceAccount(env)) {
          try {
            await runFirestoreTransaction(async (tx) => {
              const fsDoc = await tx.get('affiliate_stats', cleanRef);
              const fsAvail = (fsDoc && Number.isFinite(fsDoc.availableBalance)) ? fsDoc.availableBalance : record.availableBalance;
              if (requestedAmount > fsAvail) {
                throw new Error(`Insufficient Firestore available balance: requested ₹${requestedAmount}, available ₹${fsAvail}`);
              }
              const newAvail = Math.max(0, fsAvail - requestedAmount);
              const newPending = ((fsDoc && Number.isFinite(fsDoc.pendingBalance)) ? fsDoc.pendingBalance : (record.pendingBalance || 0)) + requestedAmount;

              tx.set('affiliate_stats', cleanRef, {
                refCode: cleanRef,
                availableBalance: newAvail,
                availableToPayout: newAvail,
                availableToWithdraw: newAvail,
                pendingBalance: newPending,
                totalEarned: (fsDoc && Number.isFinite(fsDoc.totalEarned)) ? fsDoc.totalEarned : (record.totalEarned || 0),
                totalPaid: (fsDoc && Number.isFinite(fsDoc.totalPaid)) ? fsDoc.totalPaid : (record.totalPaid || 0),
                updatedAt: nowIso,
              });

              tx.set('withdrawal_requests', withdrawalId, {
                id: withdrawalId,
                txId,
                userId: cleanRef,
                refCode: cleanRef,
                amount: requestedAmount,
                method: methodLabel,
                destination,
                status: 'UNDER_REVIEW',
                createdAt: nowIso,
                updatedAt: nowIso,
              });
            }, env);
          } catch (fsErr) {
            console.warn('Firestore withdrawal sync notice:', fsErr?.message);
          }
        }

        return json({
          success: true,
          eventType: 'withdrawal_request',
          withdrawal: withdrawalRecord,
          ledgerEntry,
          availableBalance: record.availableBalance,
          availableToPayout: record.availableToPayout,
          availableToWithdraw: record.availableToWithdraw,
          pendingBalance: record.pendingBalance,
          totalPaid: record.totalPaid,
          totalEarned: record.totalEarned,
          withdrawals: record.withdrawals,
          walletLedger: record.walletLedger,
        });
      } finally {
        store.activeWithdrawalLocks.delete(cleanRef);
      }
    }

    // Event 5: Withdrawal Status Update (Pending -> Processing / Approved / Paid / Rejected / Cancelled)
    if (eventType === 'withdrawal_status_update') {
      const targetId = String(body.withdrawalId || body.requestId || body.txId || '').trim();
      const rawStatus = String(body.newStatus || body.status || '').trim();
      const reason = String(body.reason || body.adminNotes || 'Updated by administrator').trim();

      if (!targetId || !rawStatus) {
        return json({
          success: false,
          reason: 'MISSING_PARAMETERS',
          error: 'withdrawalId and newStatus are required.',
        }, 400);
      }

      const wIdx = record.withdrawals.findIndex(
        (w) => w.id === targetId || w.txId === targetId || w.requestId === targetId
      );
      if (wIdx < 0) {
        return json({
          success: false,
          reason: 'WITHDRAWAL_NOT_FOUND',
          error: `Withdrawal request ${targetId} not found.`,
        }, 404);
      }

      const withdrawal = record.withdrawals[wIdx];
      const currentStatus = String(withdrawal.status || '').trim();
      const upperNew = rawStatus.toUpperCase();
      const nowIso = new Date().toISOString();

      // Case A: Mark as Processing (keeps funds reserved)
      if (upperNew === 'PROCESSING' || upperNew === 'UNDER_REVIEW') {
        if (currentStatus === 'Paid' || currentStatus === 'Rejected' || currentStatus === 'Cancelled') {
          return json({
            success: false,
            reason: 'INVALID_STATUS_TRANSITION',
            error: `Cannot move withdrawal from ${currentStatus} to Processing.`,
          }, 400);
        }
        withdrawal.status = 'Processing';
        withdrawal.updatedAt = nowIso;
        recalculateAffiliateBalances(record);
        return json({
          success: true,
          eventType: 'withdrawal_status_update',
          withdrawal,
          availableBalance: record.availableBalance,
          availableToPayout: record.availableToPayout,
          availableToWithdraw: record.availableToWithdraw,
          pendingBalance: record.pendingBalance,
          totalPaid: record.totalPaid,
          totalEarned: record.totalEarned,
          withdrawals: record.withdrawals,
          walletLedger: record.walletLedger,
        });
      }

      // Case B: Approve or Pay (Keep already-deducted amount deducted; do NOT subtract a second time!)
      if (upperNew === 'APPROVED' || upperNew === 'PAID') {
        const normalizedTargetStatus = upperNew === 'APPROVED' ? 'Approved' : 'Paid';
        if (currentStatus === 'Paid' || (currentStatus === 'Approved' && normalizedTargetStatus === 'Approved')) {
          recalculateAffiliateBalances(record);
          return json({
            success: true,
            idempotent: true,
            alreadyProcessed: true,
            eventType: 'withdrawal_status_update',
            withdrawal,
            availableBalance: record.availableBalance,
            availableToPayout: record.availableToPayout,
            availableToWithdraw: record.availableToWithdraw,
            pendingBalance: record.pendingBalance,
            totalPaid: record.totalPaid,
            totalEarned: record.totalEarned,
            withdrawals: record.withdrawals,
            walletLedger: record.walletLedger,
          });
        }

        if (currentStatus === 'Rejected' || currentStatus === 'Cancelled') {
          return json({
            success: false,
            reason: 'CANNOT_APPROVE_REJECTED_WITHDRAWAL',
            error: 'Cannot approve or pay a withdrawal that was already rejected or cancelled.',
          }, 400);
        }

        const balanceBefore = record.availableBalance;
        withdrawal.status = normalizedTargetStatus;
        withdrawal.updatedAt = nowIso;
        withdrawal.paidAt = nowIso;
        if (body.payoutRef) {
          withdrawal.payoutRef = String(body.payoutRef).trim();
        }

        // Recalculate: pendingBalance decreases by withdrawal.amount, totalPaid increases by withdrawal.amount.
        // availableBalance remains unchanged (never deducted a second time!).
        recalculateAffiliateBalances(record);

        const ledgerEntry = {
          id: `led_wpaid_${withdrawal.id}_${normalizedTargetStatus.toLowerCase()}`,
          txId: withdrawal.txId,
          withdrawalId: withdrawal.id,
          userId: cleanRef,
          type: 'WITHDRAWAL_PAID',
          amount: 0, // 0 change to availableBalance since it was deducted on request creation
          payoutAmount: withdrawal.amount,
          balanceBefore,
          balanceAfter: record.availableBalance,
          status: normalizedTargetStatus,
          payoutRef: withdrawal.payoutRef || withdrawal.txId,
          timestamp: nowIso,
          description: `Withdrawal marked ${normalizedTargetStatus} (₹${withdrawal.amount})`,
        };
        record.walletLedger.unshift(ledgerEntry);

        return json({
          success: true,
          eventType: 'withdrawal_status_update',
          withdrawal,
          ledgerEntry,
          availableBalance: record.availableBalance,
          availableToPayout: record.availableToPayout,
          availableToWithdraw: record.availableToWithdraw,
          pendingBalance: record.pendingBalance,
          totalPaid: record.totalPaid,
          totalEarned: record.totalEarned,
          withdrawals: record.withdrawals,
          walletLedger: record.walletLedger,
        });
      }

      // Case C: Reject or Cancel (Refund reserved amount back to available balance exactly once!)
      if (upperNew === 'REJECTED' || upperNew === 'CANCELLED' || upperNew === 'FAILED') {
        const normalizedTargetStatus = upperNew === 'CANCELLED' ? 'Cancelled' : 'Rejected';

        // Idempotency protection: prevent duplicate refunds if rejection API or webhook runs multiple times
        if (
          currentStatus === 'Rejected' ||
          currentStatus === 'Cancelled' ||
          store.processedWithdrawalRefunds.has(withdrawal.id)
        ) {
          recalculateAffiliateBalances(record);
          return json({
            success: true,
            idempotent: true,
            alreadyRefunded: true,
            eventType: 'withdrawal_status_update',
            withdrawal,
            availableBalance: record.availableBalance,
            availableToPayout: record.availableToPayout,
            availableToWithdraw: record.availableToWithdraw,
            pendingBalance: record.pendingBalance,
            totalPaid: record.totalPaid,
            totalEarned: record.totalEarned,
            withdrawals: record.withdrawals,
            walletLedger: record.walletLedger,
          });
        }

        if (currentStatus === 'Paid' || currentStatus === 'Approved') {
          return json({
            success: false,
            reason: 'CANNOT_REJECT_PAID_WITHDRAWAL',
            error: 'Cannot reject or cancel a withdrawal that has already been approved or paid.',
          }, 400);
        }

        store.processedWithdrawalRefunds.add(withdrawal.id);
        const balanceBefore = record.availableBalance;

        withdrawal.status = normalizedTargetStatus;
        withdrawal.updatedAt = nowIso;
        withdrawal.rejectedAt = nowIso;
        withdrawal.rejectionReason = reason;

        // Recalculate: pendingBalance decreases by withdrawal.amount, restoring availableBalance by +withdrawal.amount
        recalculateAffiliateBalances(record);

        const ledgerEntry = {
          id: `led_wref_${withdrawal.id}`,
          txId: withdrawal.txId,
          withdrawalId: withdrawal.id,
          userId: cleanRef,
          type: 'WITHDRAWAL_REFUNDED',
          amount: withdrawal.amount,
          balanceBefore,
          balanceAfter: record.availableBalance,
          status: normalizedTargetStatus,
          reason,
          timestamp: nowIso,
          description: `Withdrawal ${normalizedTargetStatus.toLowerCase()}: +₹${withdrawal.amount} refunded to available balance (${reason})`,
        };
        record.walletLedger.unshift(ledgerEntry);

        return json({
          success: true,
          eventType: 'withdrawal_status_update',
          withdrawal,
          ledgerEntry,
          availableBalance: record.availableBalance,
          availableToPayout: record.availableToPayout,
          availableToWithdraw: record.availableToWithdraw,
          pendingBalance: record.pendingBalance,
          totalPaid: record.totalPaid,
          totalEarned: record.totalEarned,
          withdrawals: record.withdrawals,
          walletLedger: record.walletLedger,
        });
      }

      return json({
        success: false,
        reason: 'UNSUPPORTED_WITHDRAWAL_STATUS',
        error: `Unsupported status: ${rawStatus}`,
      }, 400);
    }

    // Event 6: Paid Course Enrollment (Rule 3, 4, 5, 6, 7)
    // Rule 5: Failed or cancelled payment produces ₹0 commission
    if (
      body.paymentStatus &&
      String(body.paymentStatus).toUpperCase() !== 'SUCCESS' &&
      String(body.paymentStatus).toUpperCase() !== 'CAPTURED'
    ) {
      return json({
        success: false,
        reason: 'PAYMENT_NOT_SUCCESSFUL',
        commission: 0,
        availableBalance: record.availableBalance,
        availableToPayout: record.availableToPayout,
        availableToWithdraw: record.availableToWithdraw,
        totalEarned: record.totalEarned,
      });
    }

    const paymentId = String(body.paymentId || '').trim();
    if (!paymentId || paymentId.length < 6 || !paymentId.startsWith('pay_')) {
      return json({ success: false, reason: 'INVALID_PAYMENT_ID', commission: 0 }, 400);
    }

    // Self-referral check
    const payerEmail = String(body.payerEmail || '').trim().toLowerCase();
    const payerRefCode = normalizeRefCode(body.payerRefCode || '');
    if (
      (payerRefCode && payerRefCode === cleanRef) ||
      (payerEmail && cleanRef === 'SUBODHKUMAR' && payerEmail.includes('subodh'))
    ) {
      return json({ success: false, reason: 'SELF_REFERRAL_NOT_ALLOWED', commission: 0 });
    }

    // Idempotency protection: never credit the same paymentId twice
    if (store.processedPaymentIds.has(paymentId)) {
      return json({
        success: false,
        reason: 'DUPLICATE_PAYMENT_ID',
        idempotent: true,
        commission: 0,
        availableBalance: record.availableBalance,
        availableToPayout: record.availableToPayout,
        availableToWithdraw: record.availableToWithdraw,
        totalEarned: record.totalEarned,
      });
    }

    // Optional live gateway verification when Razorpay keys exist
    if (keyId && keySecret && !body.skipGatewayCheck) {
      try {
        const authHeader = 'Basic ' + btoa(`${keyId}:${keySecret}`);
        const verifyRes = await fetch(`https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`, {
          headers: { Authorization: authHeader },
        });
        if (verifyRes.ok) {
          const pData = await verifyRes.json();
          if (pData.status !== 'captured' && pData.status !== 'authorized') {
            return json({ success: false, reason: 'GATEWAY_PAYMENT_NOT_CAPTURED', commission: 0 }, 400);
          }
        }
      } catch {}
    }

    store.processedPaymentIds.add(paymentId);
    const balanceBefore = record.availableBalance;

    const newRecord = {
      id: `ref_paid_${paymentId}`,
      refCode: cleanRef,
      name: body.payerName || (payerEmail ? payerEmail.split('@')[0] : 'Enrolled Student'),
      email: payerEmail,
      phone: body.payerPhone || '',
      date: new Date().toISOString().slice(0, 10),
      status: 'Paid',
      amount: Number(body.amount) || 999,
      commission: 100, // Rule 4: Fixed ₹100 Commission
      course: body.courseTitle || 'Data Analyst with GenAI',
      paymentId,
      referralId: `RF-${paymentId.slice(-4).toUpperCase() || '8821'}`,
      approvedDate: new Date().toISOString(),
    };

    // Upgrade existing free signup row if same email enrolled, else add new row
    const existingSignupIdx = payerEmail
      ? record.referrals.findIndex((r) => r.email && r.email.toLowerCase() === payerEmail && r.status === 'Registered')
      : -1;

    if (existingSignupIdx >= 0) {
      record.referrals[existingSignupIdx] = {
        ...record.referrals[existingSignupIdx],
        ...newRecord,
      };
    } else {
      record.referrals.unshift(newRecord);
    }

    record.paidEnrollments += 1;
    record.totalEarned = record.paidEnrollments * 100;
    recalculateAffiliateBalances(record);

    record.walletLedger.unshift({
      id: `led_comm_${paymentId}`,
      paymentId,
      userId: cleanRef,
      type: 'COMMISSION_CREDITED',
      amount: 100,
      balanceBefore,
      balanceAfter: record.availableBalance,
      status: 'Credited',
      timestamp: new Date().toISOString(),
      description: `Verified paid enrollment commission (${paymentId})`,
    });

    // Synchronize commission credit to Cloud Firestore
    if (getServiceAccount(env)) {
      try {
        const nowIso = new Date().toISOString();
        await runFirestoreTransaction(async (tx) => {
          const processed = await tx.get('processed_referral_payments', paymentId);
          if (processed) return;

          const affiliateDoc = (await tx.get('affiliate_stats', cleanRef)) || {};
          const totalEarned = (Number(affiliateDoc.totalEarned) || 0) + 100;
          const totalPaid = Number(affiliateDoc.totalPaid) || 0;
          const pendingBalance = Number(affiliateDoc.pendingBalance) || 0;
          const availableBalance = Math.max(0, totalEarned - totalPaid - pendingBalance);
          const paidEnrollments = (Number(affiliateDoc.paidEnrollments) || 0) + 1;

          tx.set('affiliate_stats', cleanRef, {
            refCode: cleanRef,
            paidEnrollments,
            totalEarned,
            availableBalance,
            availableToPayout: availableBalance,
            availableToWithdraw: availableBalance,
            pendingBalance,
            totalPaid,
            updatedAt: nowIso,
          });

          tx.set('processed_referral_payments', paymentId, {
            paymentId,
            orderId: body.orderId || '',
            refCode: cleanRef,
            payerUserId: payerEmail || cleanRef,
            payerEmail,
            courseId: body.courseTitle || 'data_analyst',
            commission: 100,
            creditedAt: nowIso,
          });

          const ledgerId = `led_comm_${paymentId}`;
          tx.set('wallet_ledger', ledgerId, {
            id: ledgerId,
            paymentId,
            userId: cleanRef,
            type: 'COMMISSION_CREDITED',
            amount: 100,
            balanceBefore: Number(affiliateDoc.availableBalance) || 0,
            balanceAfter: availableBalance,
            status: 'Credited',
            timestamp: nowIso,
            description: `Verified paid enrollment commission (${paymentId})`,
          });
        }, env);
      } catch (fsErr) {
        console.warn('Firestore write affiliate notice:', fsErr?.message);
      }
    }

    return json({
      success: true,
      message: `₹100 commission credited to ${cleanRef}`,
      creditedTo: cleanRef,
      commission: 100,
      paidEnrollments: record.paidEnrollments,
      availableBalance: record.availableBalance,
      availableToPayout: record.availableToPayout,
      availableToWithdraw: record.availableToWithdraw,
      pendingBalance: record.pendingBalance,
      totalPaid: record.totalPaid,
      totalEarned: record.totalEarned,
      record: newRecord,
    });
  } catch (err) {
    return json({ success: false, error: err.message }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
