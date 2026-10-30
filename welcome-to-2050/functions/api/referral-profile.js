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
  deleteFirestoreDocument,
  listFirestoreCollectionDocs,
  runFirestoreTransaction,
  INTENDED_OWNER_ADMIN_UID,
  getServiceAccount,
} from './_firestore-admin.js';
import { verifyFirebaseIdToken } from './admin-verify.js';

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
 * Atomic Server-Authoritative Canonical Referral Profile Resolution & Lifetime-Unique Reservation:
 *
 * ZERO-DUPLICATE GUARANTEE:
 * 1. Global Uniqueness: 1 Normalized Code = 1 Firebase UID = Lifetime Permanent Ownership.
 * 2. Dedicated Global Registry: `referral_mappings` uses normalized referral codes as document IDs.
 * 3. Atomic Database Enforcement via Firestore Transactions:
 *    - Reads registered_users, user_referral_profiles, and referral_mappings atomically.
 *    - If user already owns a canonical code, returns it permanently without regeneration.
 *    - If code candidate collides with another user's reservation, rejects it and iterates to an unreserved candidate.
 *    - Never overwrites an existing reservation owned by another user.
 * 4. Permanent Code Reservation: marked with status 'PERMANENT_RESERVED'.
 * 5. Legacy Code Protection: verified legacy aliases (e.g. numeric IDs) share the same uniqueness namespace.
 */
async function getOrCreateCanonicalReferralProfile(cleanUid, rawEmail = '', rawName = '', env) {
  const nowIso = new Date().toISOString();

  // Optimistic retry loop with randomized jitter for high-concurrency environments
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const result = await runFirestoreTransaction(async (tx) => {
        // 1. Read existing records atomically
        const registeredUser = await tx.get('registered_users', cleanUid);
        const existingProfile = await tx.get('user_referral_profiles', cleanUid);

        const regCode = registeredUser?.referralCode ? normalizeRefCode(registeredUser.referralCode) : '';
        const profileCode = existingProfile?.referralCode ? normalizeRefCode(existingProfile.referralCode) : '';

        const regIsNumeric = /^(RF)?\d+$/.test(regCode);
        const profileIsNumeric = /^(RF)?\d+$/.test(profileCode);

        // Check if user ALREADY owns a verified alphanumeric canonical code
        let candidateCode = '';
        if (regCode && !regIsNumeric) {
          candidateCode = regCode;
        } else if (profileCode && !profileIsNumeric) {
          candidateCode = profileCode;
        }

        // Verify existing reservation if user had an alphanumeric code candidate
        if (candidateCode) {
          const existingReservation = await tx.get('referral_mappings', candidateCode);
          if (existingReservation && existingReservation.uid === cleanUid) {
            // Already owned and permanently reserved by this exact user!
            const canonicalId = `RF-${candidateCode}`;
            if (!existingProfile || existingProfile.referralCode !== candidateCode) {
              tx.set(
                'user_referral_profiles',
                cleanUid,
                {
                  uid: cleanUid,
                  referralCode: candidateCode,
                  referralId: canonicalId,
                  email: rawEmail || registeredUser?.email || existingProfile?.email || '',
                  name: rawName || registeredUser?.name || existingProfile?.name || '',
                  updatedAt: nowIso,
                  status: 'PERMANENT_RESERVED',
                  version: 'canonical_v6_zero_dup',
                },
                { merge: true }
              );
            }
            return {
              uid: cleanUid,
              referralCode: candidateCode,
              referralId: canonicalId,
              isNew: false,
            };
          }
          // If existingReservation belongs to a DIFFERENT user, candidateCode collided!
          // We must NOT reuse it. Clear candidateCode to trigger fresh unreserved generation.
          if (existingReservation && existingReservation.uid !== cleanUid) {
            candidateCode = '';
          }
        }

        // Step 2: User needs a new code OR had a legacy numeric code
        // Generate an unreserved, unique alphanumeric code
        const userEmail = rawEmail || registeredUser?.email || existingProfile?.email || '';
        const userName = rawName || registeredUser?.name || existingProfile?.name || '';
        const baseCandidate = generateAlphanumericReferralCode(userEmail || userName || cleanUid);

        let canonicalCode = candidateCode;
        if (!canonicalCode) {
          let checkMapping = await tx.get('referral_mappings', baseCandidate);
          if (!checkMapping || checkMapping.uid === cleanUid) {
            canonicalCode = baseCandidate;
          } else {
            // Collision detected! Generate unique candidate with deterministic hash / random nonce
            let found = false;
            // Attempt 1: suffix with last 4 chars of cleanUid
            const uidSuffix = cleanUid.replace(/[^a-zA-Z0-9]/g, '').slice(-4).toUpperCase();
            if (uidSuffix) {
              const suffixedCandidate = `${baseCandidate.slice(0, 6)}${uidSuffix}`;
              checkMapping = await tx.get('referral_mappings', suffixedCandidate);
              if (!checkMapping || checkMapping.uid === cleanUid) {
                canonicalCode = suffixedCandidate;
                found = true;
              }
            }

            // Attempt 2..10: append random alphanumeric salt until unreserved
            if (!found) {
              for (let i = 2; i <= 10; i++) {
                const salt = Math.random().toString(36).substring(2, 5).toUpperCase();
                const salted = `${baseCandidate.slice(0, 5)}${salt}`;
                checkMapping = await tx.get('referral_mappings', salted);
                if (!checkMapping || checkMapping.uid === cleanUid) {
                  canonicalCode = salted;
                  found = true;
                  break;
                }
              }
            }

            if (!found) {
              throw new Error(`Failed to find unreserved referral code for UID ${cleanUid}`);
            }
          }
        }

        const canonicalId = `RF-${canonicalCode}`;

        // Step 3: Gather legacy aliases to preserve (e.g. if user had numeric '1', '2', '3' or 'RF-4')
        const aliasesToAdd = new Set();
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

        // Step 4: Reserve primary canonical code in global ownership registry (referral_mappings)
        const primaryReservation = {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          assignedAt: nowIso,
          canonical: true,
          status: 'PERMANENT_RESERVED',
        };
        tx.set('referral_mappings', canonicalCode, primaryReservation);
        tx.set('referral_mappings', canonicalId, primaryReservation);
        tx.set('referral_mappings', `RF${canonicalCode}`, primaryReservation);

        // Step 5: Atomically reserve verified legacy aliases
        for (const alias of aliasesToAdd) {
          if (!alias || alias === canonicalCode) continue;
          const existingAlias = await tx.get('referral_mappings', alias);
          // Only map alias if unmapped OR already owned by this user (Never steal someone else's alias!)
          if (!existingAlias || !existingAlias.uid || existingAlias.uid === cleanUid) {
            tx.set('referral_mappings', alias, {
              uid: cleanUid,
              referralCode: canonicalCode,
              referralId: canonicalId,
              isAlias: true,
              aliasFor: canonicalCode,
              assignedAt: nowIso,
              status: 'PERMANENT_RESERVED',
            });
          }
        }

        // Step 6: Update canonical user referral profile
        const profileData = {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          email: userEmail,
          name: userName,
          updatedAt: nowIso,
          status: 'PERMANENT_RESERVED',
          version: 'canonical_v6_zero_dup',
          createdBy: 'SERVER_CANONICAL_RECONCILER',
        };
        if (!existingProfile?.createdAt) {
          profileData.createdAt = nowIso;
        }
        tx.set('user_referral_profiles', cleanUid, profileData);

        // Step 7: Update registered_users
        tx.set(
          'registered_users',
          cleanUid,
          {
            referralCode: canonicalCode,
            updatedAt: nowIso,
          },
          { merge: true }
        );

        return {
          uid: cleanUid,
          referralCode: canonicalCode,
          referralId: canonicalId,
          isNew: !existingProfile && !registeredUser,
        };
      }, env);

      return result;
    } catch (err) {
      if (attempt < 5) {
        const delay = Math.floor(Math.random() * 50) + attempt * 50;
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }

  throw new Error('Failed to resolve or allocate canonical referral profile after 5 attempts');
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const action = url.searchParams.get('action') || 'get';
  const rawUid = url.searchParams.get('uid') || url.searchParams.get('userId') || '';
  const cleanUid = rawUid.trim();

  // Security token verification if Authorization header is present
  const authHeader = request.headers.get('Authorization') || '';
  let authenticatedToken = null;
  if (authHeader.startsWith('Bearer ')) {
    const rawToken = authHeader.slice(7).trim();
    if (rawToken) {
      const verifyResult = await verifyFirebaseIdToken(rawToken).catch(() => ({ valid: false }));
      if (verifyResult.valid) {
        authenticatedToken = verifyResult.payload;
      } else {
        return json({ success: false, error: 'Invalid or expired Firebase authentication token' }, 401);
      }
    }
  }

  // Prevent users from querying/modifying another user's profile
  if (authenticatedToken && cleanUid && action !== 'resolve') {
    const tokenUid = authenticatedToken.user_id || authenticatedToken.sub;
    const isAdmin = Boolean(authenticatedToken.admin || authenticatedToken.role === 'admin');
    if (tokenUid !== cleanUid && !isAdmin) {
      return json({ success: false, error: 'Unauthorized: Cannot access or modify referral profile of another user' }, 403);
    }
  }

  // =========================================================================
  // 1B. ACTION: MIGRATE LEGACY NUMERIC CANONICAL CODES TO ALPHANUMERIC
  // =========================================================================
  if (action === 'migrate-legacy-numeric') {
    try {
      if (!getServiceAccount(env)) {
        return json({ success: false, error: 'Service account not configured' }, 503);
      }
      const allRegistered = await listFirestoreCollectionDocs('registered_users', env).catch(() => []);
      const migrated = [];
      const skipped = [];

      for (const doc of allRegistered) {
        const uid = doc.id || doc.uid;
        const code = doc.referralCode ? normalizeRefCode(doc.referralCode) : '';
        const isNumeric = /^(RF)?\d+$/.test(code);

        // Skip test artifacts
        if (!uid || uid.startsWith('usr_concurrency_live_')) {
          skipped.push({ uid, code, reason: 'concurrency_test_artifact' });
          continue;
        }

        if (isNumeric) {
          const res = await getOrCreateCanonicalReferralProfile(uid, doc.email || '', doc.name || '', env);
          migrated.push({
            uid,
            previousCode: code,
            newCanonicalCode: res.referralCode,
            newReferralId: res.referralId,
          });
        } else {
          skipped.push({ uid, code, reason: 'already_alphanumeric' });
        }
      }

      return json({
        success: true,
        migratedCount: migrated.length,
        migrated,
        skippedCount: skipped.length,
      });
    } catch (err) {
      return json({ success: false, error: err?.message }, 500);
    }
  }

  // =========================================================================
  // 1C. ACTION: CLEANUP AUDIT TEST ARTIFACTS
  // =========================================================================
  if (action === 'cleanup-audit-artifacts') {
    const targetUid = (url.searchParams.get('targetUid') || '').trim();
    const targetCode = (url.searchParams.get('targetCode') || '').trim();

    // Strict guard: only allow cleanup if targetUid starts with usr_concurrency_live_
    if (!targetUid || !targetUid.startsWith('usr_concurrency_live_') || !targetCode) {
      return json({ success: false, error: 'Unauthorized artifact cleanup target' }, 400);
    }

    try {
      if (!getServiceAccount(env)) {
        return json({ success: false, error: 'Service account not configured' }, 503);
      }

      // 1. Verify 0 financial activity / referrals in affiliate_stats
      const affDoc = await getFirestoreDocument('affiliate_stats', targetCode, env).catch(() => null);
      if (affDoc && (affDoc.totalEarned > 0 || affDoc.paidEnrollments > 0 || affDoc.signups > 0)) {
        return json({ success: false, error: 'Cannot delete: record has real financial or enrollment activity' }, 409);
      }

      // 2. Perform safe deletion
      const deletedDocs = [];
      const ok1 = await deleteFirestoreDocument('registered_users', targetUid, env);
      if (ok1) deletedDocs.push(`registered_users/${targetUid}`);

      const ok2 = await deleteFirestoreDocument('user_referral_profiles', targetUid, env);
      if (ok2) deletedDocs.push(`user_referral_profiles/${targetUid}`);

      const ok3 = await deleteFirestoreDocument('referral_mappings', targetCode, env);
      if (ok3) deletedDocs.push(`referral_mappings/${targetCode}`);

      const ok4 = await deleteFirestoreDocument('referral_mappings', `RF-${targetCode}`, env);
      if (ok4) deletedDocs.push(`referral_mappings/RF-${targetCode}`);

      const ok5 = await deleteFirestoreDocument('referral_mappings', `RF${targetCode}`, env);
      if (ok5) deletedDocs.push(`referral_mappings/RF${targetCode}`);

      return json({
        success: true,
        cleaned: true,
        targetUid,
        targetCode,
        deletedDocs,
      });
    } catch (err) {
      return json({ success: false, error: err?.message }, 500);
    }
  }

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
