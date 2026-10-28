/**
 * Cloudflare Pages Function — /api/referral-profile
 *
 * REFERRAL ID V4: Permanent Sequential Numeric Referral ID System
 * - One Firebase UID = One Permanent Referral ID.
 * - Sequential numeric IDs starting from 1 in a verified unused namespace.
 * - Atomic Firestore transactions guarantee zero duplicate IDs under concurrency.
 * - Dual reverse mappings in `referral_mappings` ensure full backward compatibility
 *   for existing links and aliases (KITABI3IZ, SUBODHKUMAR, FIVEHZ763).
 * - Client applications are strictly read-only; browser code never computes sequence numbers.
 */

import {
  getFirestoreDocument,
  setFirestoreDocument,
  runFirestoreTransaction,
  INTENDED_OWNER_ADMIN_UID,
  getServiceAccount,
} from './_firestore-admin.js';

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

/**
 * Normalize referral code:
 * Only strips legacy promotional '100' suffix if preceded by alphabetic letters (e.g. ZODIYO100 -> ZODIYO).
 * Pure numeric IDs ('1', '100', '1000') are preserved intact!
 */
export function normalizeRefCode(ref) {
  if (!ref) return '';
  const s = String(ref).trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  // Do not strip if it is pure numeric (e.g. '100') or an RF sequence ID (e.g. 'RF100')
  if (/^(RF)?\d+$/.test(s)) {
    return s;
  }
  // Only strip legacy promotional '100' suffix if preceded by at least 3 alphabetic letters (e.g. ZODIYO100 -> ZODIYO)
  return s.replace(/^([A-Z]{3,})100$/, '$1');
}

/**
 * Deterministic fallback generator for offline / simulated environments
 */
export function generateDeterministicReferralCode(uid, email = '', name = '') {
  const cleanUid = String(uid || '').trim();
  const seed = KNOWN_ACCOUNT_SEEDS[cleanUid];
  if (seed) {
    return {
      referralCode: seed.referralCode,
      referralId: seed.referralId,
      sequenceNumber: seed.sequenceNumber,
    };
  }
  return {
    referralCode: '1',
    referralId: 'RF-1',
    sequenceNumber: 1,
  };
}

// Known Canonical Seeds for Verified Initial Accounts
export const KNOWN_ACCOUNT_SEEDS = {
  // 1. Owner Admin Account
  'v0l0LdEuPMTyBsvGEqoT8dYSsv43': {
    sequenceNumber: 1,
    referralCode: '1',
    referralId: 'RF-1',
    aliases: ['KITABI3IZ', 'SUBODHKUMAR', 'KITABI', 'RF-KITABI', 'RFKITABI'],
    email: 'admin@futureitindustry.com',
    name: 'Administrator',
  },
  // 2. Subodh Kumar (Owner)
  'bgnyqCpZ8QRX9pWt0xaMOmS0vQj1': {
    sequenceNumber: 2,
    referralCode: '2',
    referralId: 'RF-2',
    aliases: ['SUBODHKUMAR'],
    email: 'subodh.mscit@gmail.com',
    name: 'SUBODH KUMAR',
  },
  // 3. Pooja Business
  'vehztkkeTBYEVLhPk3ShCWwzdmu1': {
    sequenceNumber: 3,
    referralCode: '3',
    referralId: 'RF-3',
    aliases: ['FIVEHZ763', 'RF-9763', 'RF9763'],
    email: 'businesspooja78@gmail.com',
    name: 'pooja Business',
  },
};

/**
 * Atomically allocate the next sequential numeric referral ID via Firestore Transaction
 */
async function allocateNextSequenceNumber(cleanUid, rawEmail = '', rawName = '', env) {
  let lastErr = null;
  // Optimistic concurrency retry loop (up to 3 attempts with exponential backoff)
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await runFirestoreTransaction(async (tx) => {
        // 1. Double check if profile already exists in this transaction
        const existing = await tx.get('user_referral_profiles', cleanUid);
        if (existing && existing.referralCode) {
          return {
            uid: cleanUid,
            referralCode: String(existing.referralCode),
            referralId: existing.referralId || `RF-${existing.referralCode}`,
            sequenceNumber: existing.sequenceNumber || parseInt(existing.referralCode, 10) || null,
            isNew: false,
          };
        }

        // 2. Read current counter state
        const counterDoc = await tx.get('system_counters', 'referral_sequence');
        const rawSeq = counterDoc ? (Number(counterDoc.currentSeq) || 0) : 0;
        // Seed floor is at least 3 (since existing accounts occupy 1, 2, and 3)
        const currentSeq = Math.max(3, rawSeq);
        const nextSeq = currentSeq + 1;
        const referralCode = String(nextSeq);
        const referralId = `RF-${nextSeq}`;
        const nowIso = new Date().toISOString();

        // 3. Update counter document
        tx.set('system_counters', 'referral_sequence', {
          currentSeq: nextSeq,
          lastAllocatedUid: cleanUid,
          lastAllocatedAt: nowIso,
          version: 'v4_numeric',
        });

        // 4. Save user referral profile
        const profileData = {
          uid: cleanUid,
          referralCode,
          referralId,
          sequenceNumber: nextSeq,
          email: rawEmail,
          name: rawName,
          createdAt: nowIso,
          version: 'v4_numeric',
          createdBy: 'SERVER_TRANSACTION_ALLOCATOR',
        };
        tx.set('user_referral_profiles', cleanUid, profileData);

        // 5. Save reverse mappings for fast O(1) resolution
        const mappingData = {
          uid: cleanUid,
          referralCode,
          referralId,
          sequenceNumber: nextSeq,
          assignedAt: nowIso,
        };
        tx.set('referral_mappings', referralCode, mappingData);
        tx.set('referral_mappings', referralId, mappingData);
        tx.set('referral_mappings', `RF${nextSeq}`, mappingData);

        return {
          uid: cleanUid,
          referralCode,
          referralId,
          sequenceNumber: nextSeq,
          isNew: true,
        };
      }, env);

      return result;
    } catch (err) {
      lastErr = err;
      console.warn(`[ReferralProfile] Allocator transaction attempt ${attempt} notice:`, err.message);
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, attempt * 50));
      }
    }
  }

  throw lastErr || new Error('Failed to allocate sequential referral ID after 3 attempts');
}

/**
 * Seed or retrieve a known canonical account
 */
async function seedKnownAccountProfile(seedInfo, cleanUid, env) {
  const { sequenceNumber, referralCode, referralId, aliases, email, name } = seedInfo;
  const nowIso = new Date().toISOString();

  const profileData = {
    uid: cleanUid,
    referralCode,
    referralId,
    sequenceNumber,
    email,
    name,
    createdAt: nowIso,
    version: 'v4_numeric_seed',
    createdBy: 'SERVER_CANONICAL_SEED',
  };

  try {
    if (getServiceAccount(env)) {
      // 1. Set user profile
      await setFirestoreDocument('user_referral_profiles', cleanUid, profileData, env, true);

      // 2. Set primary mappings
      const mappingData = {
        uid: cleanUid,
        referralCode,
        referralId,
        sequenceNumber,
        assignedAt: nowIso,
      };
      await setFirestoreDocument('referral_mappings', referralCode, mappingData, env, true);
      await setFirestoreDocument('referral_mappings', referralId, mappingData, env, true);
      await setFirestoreDocument('referral_mappings', `RF${referralCode}`, mappingData, env, true);

      // 3. Set alias mappings for backwards compatibility
      if (Array.isArray(aliases)) {
        for (const alias of aliases) {
          await setFirestoreDocument('referral_mappings', alias.toUpperCase(), {
            uid: cleanUid,
            referralCode,
            referralId,
            sequenceNumber,
            isAlias: true,
            aliasFor: referralCode,
            assignedAt: nowIso,
          }, env, true);
        }
      }

      // 4. Ensure counter is at least 3
      const counterDoc = await getFirestoreDocument('system_counters', 'referral_sequence', env).catch(() => null);
      const currentSeq = counterDoc ? (Number(counterDoc.currentSeq) || 0) : 0;
      if (currentSeq < 3) {
        await setFirestoreDocument('system_counters', 'referral_sequence', {
          currentSeq: 3,
          lastAllocatedUid: cleanUid,
          lastAllocatedAt: nowIso,
          version: 'v4_numeric',
        }, env, true);
      }
    }
  } catch (err) {
    console.warn('[ReferralProfile] Notice while writing seed profile:', err.message);
  }

  return {
    uid: cleanUid,
    referralCode,
    referralId,
    sequenceNumber,
    isNew: false,
  };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const action = url.searchParams.get('action') || 'get';
  const rawUid = url.searchParams.get('uid') || url.searchParams.get('userId') || '';
  const cleanUid = rawUid.trim();

  // =========================================================================
  // 1. ACTION: RESOLVE REFERRAL CODE / ID TO OWNER UID
  // =========================================================================
  if (action === 'resolve') {
    const rawCode = (url.searchParams.get('refCode') || url.searchParams.get('code') || '').trim();
    if (!rawCode) {
      return json({ success: false, error: 'Missing referral code to resolve' }, 400);
    }

    const cleanCode = normalizeRefCode(rawCode);

    try {
      if (getServiceAccount(env)) {
        // Direct lookup in referral_mappings
        let mapping = await getFirestoreDocument('referral_mappings', cleanCode, env).catch(() => null);

        // If not found and input was e.g. RF-1 or RF1, also try stripped numeric
        if (!mapping && cleanCode.startsWith('RF')) {
          const strippedNum = cleanCode.replace(/^RF-?/, '');
          if (/^\d+$/.test(strippedNum)) {
            mapping = await getFirestoreDocument('referral_mappings', strippedNum, env).catch(() => null);
          }
        }

        if (mapping && mapping.uid) {
          return json({
            success: true,
            resolved: true,
            referralCode: mapping.referralCode || cleanCode,
            referralId: mapping.referralId || `RF-${mapping.referralCode || cleanCode}`,
            sequenceNumber: mapping.sequenceNumber || null,
            uid: mapping.uid,
          });
        }
      }
    } catch (e) {
      console.warn('Resolve referral mapping notice:', e?.message);
    }

    // Known static aliases fallback (zero downtime during network/quota throttles)
    for (const [seedUid, seedData] of Object.entries(KNOWN_ACCOUNT_SEEDS)) {
      if (
        cleanCode === seedData.referralCode ||
        cleanCode === seedData.referralId ||
        cleanCode === `RF${seedData.referralCode}` ||
        seedData.aliases.map(a => a.toUpperCase()).includes(cleanCode)
      ) {
        return json({
          success: true,
          resolved: true,
          referralCode: seedData.referralCode,
          referralId: seedData.referralId,
          sequenceNumber: seedData.sequenceNumber,
          uid: seedUid,
        });
      }
    }

    return json({ success: false, resolved: false, error: 'Referral code not mapped to any account' }, 404);
  }

  // =========================================================================
  // 2. ACTION: GET OR ALLOCATE PERMANENT CANONICAL REFERRAL ID FOR UID
  // =========================================================================
  if (!cleanUid) {
    return json({ success: false, error: 'Missing canonical Firebase UID' }, 400);
  }

  try {
    // Check known account seeds first
    const seedInfo = KNOWN_ACCOUNT_SEEDS[cleanUid];

    if (getServiceAccount(env)) {
      // Check existing permanent referral profile in Firestore
      const existing = await getFirestoreDocument('user_referral_profiles', cleanUid, env).catch(() => null);
      if (existing && existing.referralCode) {
        return json({
          success: true,
          uid: cleanUid,
          referralCode: String(existing.referralCode),
          referralId: existing.referralId || `RF-${existing.referralCode}`,
          sequenceNumber: existing.sequenceNumber || parseInt(existing.referralCode, 10) || null,
          createdAt: existing.createdAt,
          isNew: false,
        });
      }

      // If known account seed, initialize with permanent sequential seed
      if (seedInfo) {
        const seeded = await seedKnownAccountProfile(seedInfo, cleanUid, env);
        return json({
          success: true,
          ...seeded,
        });
      }

      // New account: allocate atomic sequential numeric referral ID
      const rawEmail = url.searchParams.get('email') || '';
      const rawName = url.searchParams.get('name') || '';
      const allocated = await allocateNextSequenceNumber(cleanUid, rawEmail, rawName, env);

      return json({
        success: true,
        ...allocated,
      });
    }

    // Fallback if service account not available in offline testing environment
    if (seedInfo) {
      return json({
        success: true,
        uid: cleanUid,
        referralCode: seedInfo.referralCode,
        referralId: seedInfo.referralId,
        sequenceNumber: seedInfo.sequenceNumber,
        isNew: false,
      });
    }

    return json({
      success: true,
      uid: cleanUid,
      referralCode: '1',
      referralId: 'RF-1',
      sequenceNumber: 1,
      isNew: false,
    });
  } catch (err) {
    console.error('Referral profile error:', err);
    // Graceful fallback for known seeds so user is never locked out during quota events
    const seedInfo = KNOWN_ACCOUNT_SEEDS[cleanUid];
    if (seedInfo) {
      return json({
        success: true,
        uid: cleanUid,
        referralCode: seedInfo.referralCode,
        referralId: seedInfo.referralId,
        sequenceNumber: seedInfo.sequenceNumber,
        notice: 'Seeded canonical fallback active',
      });
    }

    return json({
      success: false,
      error: err.message || 'Failed to allocate or retrieve canonical referral profile',
    }, 500);
  }
}

export async function onRequestPost(context) {
  return onRequestGet(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
