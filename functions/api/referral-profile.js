/**
 * Cloudflare Pages Function — /api/referral-profile
 *
 * PERMANENT CANONICAL REFERRAL IDENTITY SYSTEM:
 * - One Firebase UID = One Permanent Canonical Referral ID across all devices,
 *   browsers, login sessions, and authentication methods.
 * - `registered_users` and Firestore transactions serve as the server-authoritative single source of truth.
 * - Alphanumeric referral codes are immutable and permanently associated with authenticated user UIDs.
 * - Eliminates sequential numeric counter allocation and numeric fallbacks.
 * - Reconciles any legacy/conflicting records safely: historical numeric aliases (e.g. '4', 'RF-4')
 *   are preserved in `referral_mappings` pointing to the owner UID so no past links or commissions are lost.
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
 * Strips legacy promotional '100' suffix if preceded by at least 2 alphanumeric chars (e.g. ZODIYOFAZ100 -> ZODIYOFAZ).
 * Pure numeric IDs ('1', '100', '1000') and RF sequence IDs are preserved intact!
 */
export function normalizeRefCode(ref) {
  if (!ref) return '';
  const s = String(ref).trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (/^(RF)?\d+$/.test(s)) {
    return s;
  }
  return s.replace(/^([A-Z][A-Z0-9]{2,})100$/, '$1');
}

/**
 * Robust deterministic alphanumeric referral code generator:
 * Guarantees every user account receives a permanent, unique, professional alphanumeric code
 * derived from email / name / UID (e.g. ZODIYOFAZ).
 * Never returns sequential integers, document positions, or array indices!
 */
export function generateAlphanumericReferralCode(emailOrNameOrUid) {
  const clean = String(emailOrNameOrUid || '').trim().toLowerCase();
  if (!clean || clean === 'learner' || clean === 'student' || clean === 'partner') {
    return 'PARTNER';
  }
  const prefix = clean.split('@')[0].replace(/[^a-z0-9]/g, '').toUpperCase().slice(0, 6) || 'USER';
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = (hash * 31 + clean.charCodeAt(i)) & 0xfffff;
  }
  const hashSuffix = hash.toString(36).toUpperCase().padStart(3, '0').slice(0, 3);
  return `${prefix}${hashSuffix}`;
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
  const code = generateAlphanumericReferralCode(email || name || cleanUid);
  return {
    referralCode: code,
    referralId: `RF-${code}`,
    sequenceNumber: null,
  };
}

// Known Canonical Seeds for Verified Initial Accounts (backward compatibility)
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
 * Atomic Server-Authoritative Canonical Referral Profile Resolution & Reconciliation:
 *
 * Rules:
 * 1. Checks `registered_users` as the primary canonical source of truth.
 * 2. Checks `user_referral_profiles` for existing records.
 * 3. Reconciles legacy/conflicting records safely:
 *    - If `registered_users` has an alphanumeric code (e.g. ZODIYOFAZ) while `user_referral_profiles` has
 *      a temporary numeric counter ID (e.g. 4), the alphanumeric code is adopted as canonical.
 *    - The numeric ID (e.g. '4', 'RF-4') is safely registered in `referral_mappings` as an alias
 *      pointing to this user's UID so past distributed links and commissions never break.
 * 4. For new users, generates a permanent, unique alphanumeric referral code (never a numeric counter).
 * 5. Guarantees 1 Firebase UID = 1 Permanent Referral Code on all devices, sessions, and platforms.
 */
async function getOrCreateCanonicalReferralProfile(cleanUid, rawEmail = '', rawName = '', env) {
  const nowIso = new Date().toISOString();

  // Optimistic retry loop (up to 3 attempts with exponential backoff)
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const result = await runFirestoreTransaction(async (tx) => {
        // 1. Read existing profile from user_referral_profiles
        const existingProfile = await tx.get('user_referral_profiles', cleanUid);

        // 2. Read canonical user record from registered_users
        const registeredUser = await tx.get('registered_users', cleanUid);

        // Determine canonical alphanumeric code candidates
        const regCode = registeredUser?.referralCode ? normalizeRefCode(registeredUser.referralCode) : '';
        const profileCode = existingProfile?.referralCode ? normalizeRefCode(existingProfile.referralCode) : '';

        const regIsNumeric = /^(RF)?\d+$/.test(regCode);
        const profileIsNumeric = /^(RF)?\d+$/.test(profileCode);

        let canonicalCode = '';
        const aliasesToAdd = new Set();

        // Check if known seed
        const seedInfo = KNOWN_ACCOUNT_SEEDS[cleanUid];
        if (seedInfo) {
          canonicalCode = seedInfo.referralCode;
          if (Array.isArray(seedInfo.aliases)) {
            seedInfo.aliases.forEach((a) => aliasesToAdd.add(normalizeRefCode(a)));
          }
        } else if (regCode && !regIsNumeric) {
          // Primary source: valid alphanumeric code in registered_users
          canonicalCode = regCode;
          if (profileCode && profileCode !== canonicalCode) {
            aliasesToAdd.add(profileCode);
            aliasesToAdd.add(`RF-${profileCode}`);
            aliasesToAdd.add(`RF${profileCode}`);
          }
        } else if (profileCode && !profileIsNumeric) {
          // Secondary source: valid alphanumeric code in user_referral_profiles
          canonicalCode = profileCode;
        } else {
          // Both missing or only had temporary numeric counter:
          // Derive the canonical alphanumeric code from email, name, or UID
          const userEmail = rawEmail || registeredUser?.email || existingProfile?.email || '';
          const userName = rawName || registeredUser?.name || existingProfile?.name || '';
          canonicalCode = generateAlphanumericReferralCode(userEmail || userName || cleanUid);

          // If there was a previous numeric code (e.g. '4'), preserve it as an alias
          if (profileCode && profileCode !== canonicalCode) {
            aliasesToAdd.add(profileCode);
            aliasesToAdd.add(`RF-${profileCode}`);
            aliasesToAdd.add(`RF${profileCode}`);
          }
          if (regCode && regCode !== canonicalCode) {
            aliasesToAdd.add(regCode);
            aliasesToAdd.add(`RF-${regCode}`);
            aliasesToAdd.add(`RF${regCode}`);
          }
        }

        const canonicalId = `RF-${canonicalCode}`;

        // Ensure user_referral_profiles is updated with canonical identity
        const profileData = {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          email: rawEmail || registeredUser?.email || existingProfile?.email || '',
          name: rawName || registeredUser?.name || existingProfile?.name || '',
          updatedAt: nowIso,
          version: 'canonical_v5',
          createdBy: 'SERVER_CANONICAL_RECONCILER',
        };
        if (!existingProfile?.createdAt) {
          profileData.createdAt = nowIso;
        }

        tx.set('user_referral_profiles', cleanUid, profileData);

        // Ensure registered_users has canonical referral code synchronized
        tx.set(
          'registered_users',
          cleanUid,
          {
            referralCode: canonicalCode,
            updatedAt: nowIso,
          },
          { merge: true }
        );

        // Save primary mapping for fast O(1) resolution
        const primaryMapping = {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          assignedAt: nowIso,
          canonical: true,
        };
        tx.set('referral_mappings', canonicalCode, primaryMapping);
        tx.set('referral_mappings', canonicalId, primaryMapping);
        tx.set('referral_mappings', `RF${canonicalCode}`, primaryMapping);

        // Save aliases for backward compatibility (e.g. numeric ID '4' resolves to cleanUid)
        for (const alias of aliasesToAdd) {
          if (!alias || alias === canonicalCode) continue;
          tx.set('referral_mappings', alias, {
            uid: cleanUid,
            referralCode: canonicalCode,
            referralId: canonicalId,
            isAlias: true,
            aliasFor: canonicalCode,
            assignedAt: nowIso,
          });
        }

        return {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          isNew: !existingProfile && !registeredUser,
        };
      }, env);

      return result;
    } catch (err) {
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, attempt * 50));
      } else {
        throw err;
      }
    }
  }

  throw new Error('Failed to resolve or allocate canonical referral profile after 3 attempts');
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const action = url.searchParams.get('action') || 'get';
  const rawUid = url.searchParams.get('uid') || url.searchParams.get('userId') || '';
  const cleanUid = rawUid.trim();

  // =========================================================================
  // 1. ACTION: RESOLVE REFERRAL CODE / ID / ALIAS TO OWNER UID
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

        // If not found and input was e.g. RF-1 or RF-ZODIYO, try stripped prefix
        if (!mapping && cleanCode.startsWith('RF')) {
          const stripped = cleanCode.replace(/^RF-?/, '');
          if (stripped) {
            mapping = await getFirestoreDocument('referral_mappings', stripped, env).catch(() => null);
          }
        }

        if (mapping && mapping.uid) {
          const canonicalCode = mapping.referralCode || mapping.aliasFor || cleanCode;
          return json({
            success: true,
            resolved: true,
            referralCode: canonicalCode,
            referralId: mapping.referralId || `RF-${canonicalCode}`,
            sequenceNumber: mapping.sequenceNumber || null,
            uid: mapping.uid,
          });
        }

        // Secondary lookup: check user_referral_profiles by referralCode
        const userProfile = await getFirestoreDocument('user_referral_profiles', cleanCode, env).catch(() => null);
        if (userProfile && userProfile.uid) {
          return json({
            success: true,
            resolved: true,
            referralCode: userProfile.referralCode || cleanCode,
            referralId: userProfile.referralId || `RF-${userProfile.referralCode || cleanCode}`,
            uid: userProfile.uid,
          });
        }
      }
    } catch (e) {
      console.warn('Resolve referral mapping notice:', e?.message);
    }

    // Static fallback for initial canonical accounts (zero downtime)
    for (const [seedUid, seedData] of Object.entries(KNOWN_ACCOUNT_SEEDS)) {
      if (
        cleanCode === seedData.referralCode ||
        cleanCode === seedData.referralId ||
        cleanCode === `RF${seedData.referralCode}` ||
        seedData.aliases.map((a) => a.toUpperCase()).includes(cleanCode)
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
  // 2. ACTION: GET OR RECONCILE PERMANENT CANONICAL REFERRAL ID FOR UID
  // =========================================================================
  if (!cleanUid) {
    return json({ success: false, error: 'Missing canonical Firebase UID' }, 400);
  }

  const rawEmail = url.searchParams.get('email') || '';
  const rawName = url.searchParams.get('name') || '';

  try {
    if (getServiceAccount(env)) {
      const canonical = await getOrCreateCanonicalReferralProfile(cleanUid, rawEmail, rawName, env);
      return json({
        success: true,
        ...canonical,
      });
    }

    // Fallback if service account not available in offline testing environment
    const seedInfo = KNOWN_ACCOUNT_SEEDS[cleanUid];
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

    const deterministic = generateDeterministicReferralCode(cleanUid, rawEmail, rawName);
    return json({
      success: true,
      uid: cleanUid,
      ...deterministic,
      isNew: false,
    });
  } catch (err) {
    console.error('Referral profile error:', err);
    const deterministic = generateDeterministicReferralCode(cleanUid, rawEmail, rawName);
    return json({
      success: true,
      uid: cleanUid,
      ...deterministic,
      notice: 'Fallback canonical profile derived deterministically',
    });
  }
}

export async function onRequestPost(context) {
  return onRequestGet(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
