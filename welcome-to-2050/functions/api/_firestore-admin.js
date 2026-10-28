/**
 * Cloudflare Pages Functions Helper — _firestore-admin.js
 *
 * Cloudflare Workers / V8 compatible Google Service Account Authentication
 * and Firestore REST API Client.
 *
 * Designed specifically for Cloudflare Pages Functions runtime without Node.js dependencies.
 * Uses native Web Crypto (crypto.subtle) for RS256 JWT signing and Google OAuth2 Bearer token exchange.
 *
 * Security:
 * - Reads FIREBASE_SERVICE_ACCOUNT securely from Cloudflare environment bindings.
 * - Private key is NEVER exposed, printed, logged, or returned in any output.
 * - All Firestore calls target the authoritative project: future-it-industry-f97af
 */

export const DEFAULT_PROJECT_ID = 'future-it-industry-f97af';
export const INTENDED_OWNER_ADMIN_UID = 'v0l0LdEuPMTyBsvGEqoT8dYSsv43';
const GOOGLE_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const FIRESTORE_SCOPE = 'https://www.googleapis.com/auth/datastore https://www.googleapis.com/auth/identitytoolkit';

// In-memory token cache scoped to the worker isolate
let cachedAccessToken = null;
let tokenExpiryTimestamp = 0;

/**
 * Base64URL encoding helper
 */
export function base64UrlEncode(data) {
  let b64;
  if (typeof data === 'string') {
    b64 = btoa(unescape(encodeURIComponent(data)));
  } else {
    let binary = '';
    const bytes = new Uint8Array(data);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    b64 = btoa(binary);
  }
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Safely parse service account credentials from Cloudflare runtime env.
 * Never logs or exposes credentials if an error occurs.
 */
export function getServiceAccount(env) {
  const raw = env?.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) return null;

  if (typeof raw === 'object' && raw.private_key && raw.client_email) {
    return raw;
  }

  let str = String(raw).trim();
  if (!str.startsWith('{')) {
    try {
      str = atob(str);
    } catch {
      // not base64 or failed atob
    }
  }

  try {
    const parsed = JSON.parse(str);
    if (!parsed || typeof parsed !== 'object') return null;

    if (parsed.private_key && typeof parsed.private_key === 'string') {
      parsed.private_key = parsed.private_key.replace(/\\n/g, '\n');
    }
    return parsed;
  } catch {
    // Redact error details to prevent accidental key leakage
    return null;
  }
}

/**
 * Convert PEM-formatted PKCS#8 private key to binary ArrayBuffer for Web Crypto
 */
export function pemToBinaryDer(pem) {
  const cleaned = pem
    .replace(/-----BEGIN[ A-Z0-9_-]+-----/g, '')
    .replace(/-----END[ A-Z0-9_-]+-----/g, '')
    .replace(/\s+/g, '');
  const binary = atob(cleaned);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Obtain an authenticated Google OAuth2 Bearer Access Token using Service Account RS256 assertion.
 * Caches token for 50 minutes to minimize overhead.
 */
export async function getFirestoreAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  if (cachedAccessToken && now < tokenExpiryTimestamp - 300) {
    return cachedAccessToken;
  }

  const sa = getServiceAccount(env);
  if (!sa || !sa.private_key || !sa.client_email) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT credentials missing or malformed in environment');
  }

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const payload = {
    iss: sa.client_email,
    scope: FIRESTORE_SCOPE,
    aud: GOOGLE_TOKEN_ENDPOINT,
    iat: now,
    exp: now + 3600,
  };

  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(payload))}`;

  const derKey = pemToBinaryDer(sa.private_key);
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    derKey,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(unsignedJwt)
  );

  const assertion = `${unsignedJwt}.${base64UrlEncode(signature)}`;

  const tokenRes = await fetch(GOOGLE_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!tokenRes.ok) {
    const errorText = await tokenRes.text().catch(() => '');
    throw new Error(`Google OAuth2 token exchange failed [HTTP ${tokenRes.status}]: ${errorText.slice(0, 200)}`);
  }

  const tokenData = await tokenRes.json();
  if (!tokenData?.access_token) {
    throw new Error('Google OAuth2 response did not include access_token');
  }

  cachedAccessToken = tokenData.access_token;
  tokenExpiryTimestamp = now + (tokenData.expires_in || 3600);
  return cachedAccessToken;
}

/**
 * Convert standard JS value to Firestore REST Value
 */
export function toFirestoreValue(val) {
  if (val === null || val === undefined) {
    return { nullValue: null };
  }
  if (typeof val === 'boolean') {
    return { booleanValue: val };
  }
  if (typeof val === 'number') {
    if (Number.isInteger(val)) {
      return { integerValue: String(val) };
    }
    return { doubleValue: val };
  }
  if (typeof val === 'string') {
    return { stringValue: val };
  }
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    return { mapValue: { fields: toFirestoreFields(val) } };
  }
  return { stringValue: String(val) };
}

/**
 * Convert plain JS object to Firestore REST fields map
 */
export function toFirestoreFields(obj) {
  if (!obj || typeof obj !== 'object') return {};
  const fields = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      fields[key] = toFirestoreValue(value);
    }
  }
  return fields;
}

/**
 * Convert Firestore REST Value to plain JS value
 */
export function fromFirestoreValue(val) {
  if (!val || typeof val !== 'object') return val;
  if ('stringValue' in val) return val.stringValue;
  if ('booleanValue' in val) return val.booleanValue;
  if ('integerValue' in val) return parseInt(val.integerValue, 10);
  if ('doubleValue' in val) return parseFloat(val.doubleValue);
  if ('nullValue' in val) return null;
  if ('timestampValue' in val) return val.timestampValue;
  if ('arrayValue' in val) {
    return (val.arrayValue?.values || []).map(fromFirestoreValue);
  }
  if ('mapValue' in val) {
    return fromFirestoreFields(val.mapValue?.fields || {});
  }
  return null;
}

/**
 * Convert Firestore REST fields map to plain JS object
 */
export function fromFirestoreFields(fields) {
  if (!fields || typeof fields !== 'object') return {};
  const obj = {};
  for (const [key, val] of Object.entries(fields)) {
    obj[key] = fromFirestoreValue(val);
  }
  return obj;
}

/**
 * Get the Firestore REST endpoint base for future-it-industry-f97af
 */
export function getFirestoreBaseUrl(env) {
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;
}

/**
 * Read a document from Firestore REST API
 */
export async function getFirestoreDocument(collection, docId, env) {
  const accessToken = await getFirestoreAccessToken(env);
  const baseUrl = getFirestoreBaseUrl(env);
  const url = `${baseUrl}/${collection}/${encodeURIComponent(docId)}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    const errorText = await res.text().catch(() => '');
    throw new Error(`Firestore GET /${collection}/${docId} failed [HTTP ${res.status}]: ${errorText.slice(0, 200)}`);
  }

  const doc = await res.json();
  return {
    id: docId,
    path: doc.name,
    createTime: doc.createTime,
    updateTime: doc.updateTime,
    ...fromFirestoreFields(doc.fields || {}),
  };
}

/**
 * Set / Create / Upsert a document in Firestore REST API
 */
export async function setFirestoreDocument(collection, docId, data, env, merge = true) {
  const accessToken = await getFirestoreAccessToken(env);
  const baseUrl = getFirestoreBaseUrl(env);
  const fields = toFirestoreFields(data);

  let url = `${baseUrl}/${collection}/${encodeURIComponent(docId)}`;
  if (merge) {
    const fieldMask = Object.keys(fields).map((f) => `updateMask.fieldPaths=${encodeURIComponent(f)}`).join('&');
    if (fieldMask) {
      url += `?${fieldMask}`;
    }
  }

  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });

  if (!res.ok) {
    const errorText = await res.text().catch(() => '');
    throw new Error(`Firestore PATCH /${collection}/${docId} failed [HTTP ${res.status}]: ${errorText.slice(0, 200)}`);
  }

  const result = await res.json();
  return {
    id: docId,
    path: result.name,
    updateTime: result.updateTime,
    ...fromFirestoreFields(result.fields || {}),
  };
}

/**
 * List / Read all documents in a collection from Firestore REST API
 */
export async function listFirestoreCollectionDocs(collection, env) {
  try {
    const accessToken = await getFirestoreAccessToken(env);
    const baseUrl = getFirestoreBaseUrl(env);
    const url = `${baseUrl}/${collection}?pageSize=300`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return (data.documents || []).map((d) => ({
      id: d.name.split('/').pop(),
      ...fromFirestoreFields(d.fields || {}),
    }));
  } catch {
    return [];
  }
}

/**
 * Execute an atomic transaction via Firestore REST API
 * 1. beginTransaction
 * 2. executes transactionFn({ get, set, update })
 * 3. commits all writes atomically with the transaction token
 */
export async function runFirestoreTransaction(transactionFn, env) {
  const accessToken = await getFirestoreAccessToken(env);
  const baseUrl = getFirestoreBaseUrl(env);
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;

  // 1. Begin Transaction
  const beginRes = await fetch(`${baseUrl}:beginTransaction`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      options: {
        readWrite: {},
      },
    }),
  });

  if (!beginRes.ok) {
    const errText = await beginRes.text().catch(() => '');
    throw new Error(`Firestore beginTransaction failed [HTTP ${beginRes.status}]: ${errText.slice(0, 200)}`);
  }

  const { transaction } = await beginRes.json();
  if (!transaction) {
    throw new Error('Firestore did not return transaction handle');
  }

  const writes = [];

  // Transaction context passed to user callback
  const txContext = {
    async get(collection, docId) {
      const docPath = `projects/${projectId}/databases/(default)/documents/${collection}/${encodeURIComponent(docId)}`;
      const getRes = await fetch(`${baseUrl}:batchGet`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documents: [docPath],
          transaction,
        }),
      });

      if (!getRes.ok) {
        return null;
      }

      const results = await getRes.json();
      const first = Array.isArray(results) ? results[0] : results;
      if (!first?.found) {
        return null;
      }

      return {
        id: docId,
        updateTime: first.found.updateTime,
        ...fromFirestoreFields(first.found.fields || {}),
      };
    },

    set(collection, docId, data) {
      const docName = `projects/${projectId}/databases/(default)/documents/${collection}/${encodeURIComponent(docId)}`;
      writes.push({
        update: {
          name: docName,
          fields: toFirestoreFields(data),
        },
      });
    },

    update(collection, docId, data, updateMaskFields = null) {
      const docName = `projects/${projectId}/databases/(default)/documents/${collection}/${encodeURIComponent(docId)}`;
      const fields = toFirestoreFields(data);
      const write = {
        update: {
          name: docName,
          fields,
        },
      };
      if (updateMaskFields && Array.isArray(updateMaskFields)) {
        write.updateMask = { fieldPaths: updateMaskFields };
      } else {
        write.updateMask = { fieldPaths: Object.keys(fields) };
      }
      writes.push(write);
    },
  };

  // Run the user transaction logic
  const result = await transactionFn(txContext);

  // 3. Commit Transaction
  if (writes.length > 0) {
    const commitRes = await fetch(`${baseUrl}:commit`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transaction,
        writes,
      }),
    });

    if (!commitRes.ok) {
      const commitErr = await commitRes.text().catch(() => '');
      throw new Error(`Firestore commit failed [HTTP ${commitRes.status}]: ${commitErr.slice(0, 200)}`);
    }
  }

  return result;
}

/**
 * Securely inspect the owner account custom claims via Google Identity Toolkit Admin API
 * and restore { admin: true } if missing on the intended owner UID.
 * Never logs or returns any sensitive credentials or tokens.
 */
export async function inspectAndEnsureOwnerAdminClaim(env, targetUid = INTENDED_OWNER_ADMIN_UID) {
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
  const accessToken = await getFirestoreAccessToken(env);

  const lookupRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:lookup`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ localId: [targetUid] }),
    }
  );

  if (!lookupRes.ok) {
    throw new Error(`Identity Toolkit lookup failed with HTTP ${lookupRes.status}`);
  }

  const lookupData = await lookupRes.json();
  const userRecord = (lookupData.users || [])[0];
  if (!userRecord) {
    return {
      intendedOwnerUid: targetUid,
      uidExists: false,
      hasAdminCustomClaim: false,
      restoredDuringCheck: false,
    };
  }

  let customAttrs = {};
  if (userRecord.customAttributes) {
    try {
      customAttrs = JSON.parse(userRecord.customAttributes);
    } catch {
      customAttrs = {};
    }
  }

  const alreadyHasAdmin = customAttrs.admin === true;
  if (alreadyHasAdmin) {
    return {
      intendedOwnerUid: targetUid,
      uidExists: true,
      hasAdminCustomClaim: true,
      restoredDuringCheck: false,
    };
  }

  const updatedAttrs = { ...customAttrs, admin: true };
  const updateRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:update`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        localId: targetUid,
        customAttributes: JSON.stringify(updatedAttrs),
      }),
    }
  );

  if (!updateRes.ok) {
    throw new Error(`Identity Toolkit claim update failed with HTTP ${updateRes.status}`);
  }

  return {
    intendedOwnerUid: targetUid,
    uidExists: true,
    hasAdminCustomClaim: true,
    restoredDuringCheck: true,
  };
}

/**
 * List all users from Firebase Authentication via Identity Toolkit REST API
 */
export async function listFirebaseAuthUsers(env) {
  const accessToken = await getFirestoreAccessToken(env);
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:batchGet?maxResults=100`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error(`Identity Toolkit batchGet failed with HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.users || [];
}


/**
 * Permanently delete a document from Firestore REST API
 */
export async function deleteFirestoreDocument(collection, docId, env) {
  try {
    const accessToken = await getFirestoreAccessToken(env);
    const baseUrl = getFirestoreBaseUrl(env);
    const res = await fetch(`${baseUrl}/${collection}/${docId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Permanently delete a user from Firebase Authentication via Identity Toolkit REST API
 */
export async function deleteFirebaseAuthUser(uid, env) {
  try {
    const accessToken = await getFirestoreAccessToken(env);
    const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:delete`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ localId: uid }),
      }
    );
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Bootstrap or recreate an Admin user with custom claim { admin: true }
 */
export async function bootstrapAdminUser(email, env) {
  const accessToken = await getFirestoreAccessToken(env);
  const projectId = env?.VITE_FIREBASE_PROJECT_ID || env?.FIREBASE_PROJECT_ID || DEFAULT_PROJECT_ID;

  // 1. Create user account
  const createRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        emailVerified: true,
      }),
    }
  );

  let newUid = '';
  if (createRes.ok) {
    const data = await createRes.json();
    newUid = data.localId;
  } else {
    // Look up if user already exists
    const lookupRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:lookup`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: [email] }),
      }
    );
    if (lookupRes.ok) {
      const lData = await lookupRes.json();
      newUid = lData.users?.[0]?.localId;
    }
  }

  if (!newUid) {
    throw new Error('Failed to create or lookup admin user account');
  }

  // 2. Set Admin Custom Claims
  const claimsRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/projects/${projectId}/accounts:update`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        localId: newUid,
        customAttributes: JSON.stringify({ admin: true }),
      }),
    }
  );

  if (!claimsRes.ok) {
    throw new Error('Failed to set admin custom claims on user');
  }

  return { uid: newUid, email, admin: true };
}
