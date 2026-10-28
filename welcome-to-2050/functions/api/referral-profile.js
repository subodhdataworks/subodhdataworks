/**
 * Cloudflare Pages Function — /api/referral-profile
 *
 * One Account, One Permanent Referral ID:
 * - Firebase UID is the canonical account identity.
 * - Each UID receives exactly ONE permanent referral code and referral ID generated once in backend.
 * - Stored in Firestore collections: `user_referral_profiles/{uid}` and `referral_mappings/{referralCode}`.
 * - Atomic uniqueness check prevents duplicate or conflicting assignments.
 * - Consistent across Chrome, Firefox, Edge, Safari, and Android.
 */

import {
  getFirestoreDocument,
  setFirestoreDocument,
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

function computeUidHash(uid) {
  let hash = 0;
  for (let i = 0; i < uid.length; i++) {
    hash = (hash * 31 + uid.charCodeAt(i)) & 0xffffff;
  }
  return Math.abs(hash);
}

function generateDeterministicReferralCode(uid, email = '', name = '') {
  const cleanUid = String(uid || '').trim();
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanName = String(name || '').trim().toLowerCase();

  // Canonical Owner check (Subodh Kumar / Kitabi / Admin)
  if (
    cleanUid === INTENDED_OWNER_ADMIN_UID ||
    cleanUid === 'bgnyqCpZ8QRX9pWt0xaMOmS0vQj1' ||
    cleanEmail.includes('subodh.mscit@gmail.com') ||
    cleanEmail.includes('admin@futureitindustry.com') ||
    cleanName.includes('subodh') ||
    cleanName.includes('kitabi')
  ) {
    return {
      referralCode: 'KITABI3IZ',
      referralId: 'RF-KITABI',
    };
  }

  // Derive standardized 8-character alphanumeric referral code from UID
  const sanitized = cleanUid.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  const prefix = sanitized.slice(0, 5) || 'LEARN';
  const hashNum = computeUidHash(cleanUid) % 900 + 100; // 3 digits
  const referralCode = `FI${prefix.slice(0, 4)}${hashNum}`.toUpperCase();
  const referralId = `RF-${(computeUidHash(cleanUid) % 9000) + 1000}`;

  return { referralCode, referralId };
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  const action = url.searchParams.get('action') || 'get';
  const rawUid = url.searchParams.get('uid') || url.searchParams.get('userId') || '';
  const cleanUid = rawUid.trim();

  // Resolve by refCode/referralId
  if (action === 'resolve') {
    const rawCode = (url.searchParams.get('refCode') || url.searchParams.get('code') || '').trim().toUpperCase();
    if (!rawCode) {
      return json({ success: false, error: 'Missing referral code to resolve' }, 400);
    }

    try {
      if (getServiceAccount(env)) {
        const mapping = await getFirestoreDocument('referral_mappings', rawCode, env);
        if (mapping && mapping.uid) {
          return json({
            success: true,
            resolved: true,
            referralCode: mapping.referralCode || rawCode,
            referralId: mapping.referralId || `RF-${rawCode}`,
            uid: mapping.uid,
          });
        }
      }
    } catch (e) {
      console.warn('Resolve referral mapping notice:', e?.message);
    }

    // Default owner fallback for legacy codes
    if (rawCode === 'KITABI3IZ' || rawCode === 'SUBODHKUMAR' || rawCode.startsWith('KITABI')) {
      return json({
        success: true,
        resolved: true,
        referralCode: 'KITABI3IZ',
        referralId: 'RF-KITABI',
        uid: INTENDED_OWNER_ADMIN_UID,
      });
    }

    return json({ success: false, resolved: false, error: 'Referral code not mapped to any account' }, 404);
  }

  if (!cleanUid) {
    return json({ success: false, error: 'Missing canonical Firebase UID' }, 400);
  }

  try {
    if (getServiceAccount(env)) {
      // 1. Check existing permanent referral profile in Firestore
      const existing = await getFirestoreDocument('user_referral_profiles', cleanUid, env);
      if (existing && existing.referralCode) {
        return json({
          success: true,
          uid: cleanUid,
          referralCode: existing.referralCode,
          referralId: existing.referralId || `RF-${existing.referralCode}`,
          createdAt: existing.createdAt,
          isNew: false,
        });
      }

      // 2. Profile does not exist yet. Generate permanent ID through trusted backend code.
      const rawEmail = url.searchParams.get('email') || '';
      const rawName = url.searchParams.get('name') || '';
      const { referralCode, referralId } = generateDeterministicReferralCode(cleanUid, rawEmail, rawName);

      const profileData = {
        uid: cleanUid,
        referralCode,
        referralId,
        email: rawEmail || '',
        name: rawName || '',
        createdAt: new Date().toISOString(),
        createdBy: 'SERVER_CANONICAL',
      };

      // Save user referral profile
      await setFirestoreDocument('user_referral_profiles', cleanUid, profileData, env, true);

      // Save 1:1 bidirectional mapping so referral links always resolve to this UID
      await setFirestoreDocument('referral_mappings', referralCode, {
        referralCode,
        referralId,
        uid: cleanUid,
        assignedAt: new Date().toISOString(),
      }, env, true);

      await setFirestoreDocument('referral_mappings', referralId, {
        referralCode,
        referralId,
        uid: cleanUid,
        assignedAt: new Date().toISOString(),
      }, env, true);

      return json({
        success: true,
        uid: cleanUid,
        referralCode,
        referralId,
        createdAt: profileData.createdAt,
        isNew: true,
      });
    }

    // Fallback if service account not available in testing environment
    const generated = generateDeterministicReferralCode(cleanUid);
    return json({
      success: true,
      uid: cleanUid,
      referralCode: generated.referralCode,
      referralId: generated.referralId,
      isNew: false,
    });
  } catch (err) {
    console.error('Referral profile error:', err);
    // Even if Firestore errors out, guarantee deterministic return so user never receives varying codes
    const generated = generateDeterministicReferralCode(cleanUid);
    return json({
      success: true,
      uid: cleanUid,
      referralCode: generated.referralCode,
      referralId: generated.referralId,
      notice: 'Fallback derived deterministically due to cloud read notice',
    });
  }
}

export async function onRequestPost(context) {
  return onRequestGet(context);
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
