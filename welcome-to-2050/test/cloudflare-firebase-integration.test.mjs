import assert from 'node:assert';
import {
  DEFAULT_PROJECT_ID,
  getServiceAccount,
  pemToBinaryDer,
  toFirestoreFields,
  fromFirestoreFields,
  getFirestoreBaseUrl,
} from '../functions/api/_firestore-admin.js';
import { onRequestGet as systemStatusGet } from '../functions/api/system-status.js';

console.log('🚀 Starting Cloudflare Backend <-> Firebase Firestore Integration Test Suite...\n');

let passedTests = 0;
function test(name, fn) {
  try {
    fn();
    console.log(`✅ PASSED: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`❌ FAILED: ${name}`);
    console.error(err);
    process.exit(1);
  }
}

async function asyncTest(name, fn) {
  try {
    await fn();
    console.log(`✅ PASSED: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`❌ FAILED: ${name}`);
    console.error(err);
    process.exit(1);
  }
}

// 1. Authoritative Project ID check
test('All endpoints and Firestore client target future-it-industry-f97af by default', () => {
  assert.strictEqual(DEFAULT_PROJECT_ID, 'future-it-industry-f97af');
  const baseUrl = getFirestoreBaseUrl({});
  assert(baseUrl.includes('projects/future-it-industry-f97af/databases/(default)/documents'));
});

// 2. Secret Redaction & Parsing
test('Service account parser handles JSON string correctly and normalizes newlines', () => {
  const mockSA = {
    type: 'service_account',
    project_id: 'future-it-industry-f97af',
    client_email: 'firebase-adminsdk@future-it-industry-f97af.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7\\n-----END PRIVATE KEY-----\\n',
  };
  const env = { FIREBASE_SERVICE_ACCOUNT: JSON.stringify(mockSA) };
  const parsed = getServiceAccount(env);
  assert(parsed !== null);
  assert.strictEqual(parsed.client_email, mockSA.client_email);
  assert(parsed.private_key.includes('\n'));
  assert(!parsed.private_key.includes('\\n'));
});

test('Service account parser handles Base64 encoded JSON string securely', () => {
  const mockSA = {
    type: 'service_account',
    project_id: 'future-it-industry-f97af',
    client_email: 'base64-sa@future-it-industry-f97af.iam.gserviceaccount.com',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7\n-----END PRIVATE KEY-----\n',
  };
  const base64Str = Buffer.from(JSON.stringify(mockSA)).toString('base64');
  const env = { FIREBASE_SERVICE_ACCOUNT: base64Str };
  const parsed = getServiceAccount(env);
  assert(parsed !== null);
  assert.strictEqual(parsed.client_email, mockSA.client_email);
});

test('Service account parser safely rejects malformed input without leaking secrets in errors', () => {
  const env = { FIREBASE_SERVICE_ACCOUNT: 'not-valid-json-{{{}}}' };
  const parsed = getServiceAccount(env);
  assert.strictEqual(parsed, null);
});

// 3. Firestore REST Type Serialization & Deserialization
test('Firestore REST serializer correctly formats integers, doubles, booleans, strings, arrays, and maps', () => {
  const data = {
    userId: 'usr_subodh_100',
    availableBalance: 2500,
    doubleAmount: 987.5,
    isActive: true,
    metadata: {
      tags: ['student', 'enrolled'],
      verified: true,
    },
    emptyField: null,
  };

  const fields = toFirestoreFields(data);
  assert.deepStrictEqual(fields.userId, { stringValue: 'usr_subodh_100' });
  assert.deepStrictEqual(fields.availableBalance, { integerValue: '2500' });
  assert.deepStrictEqual(fields.doubleAmount, { doubleValue: 987.5 });
  assert.deepStrictEqual(fields.isActive, { booleanValue: true });
  assert.deepStrictEqual(fields.emptyField, { nullValue: null });
  assert.strictEqual(fields.metadata.mapValue.fields.tags.arrayValue.values.length, 2);

  // Roundtrip
  const reconstructed = fromFirestoreFields(fields);
  assert.strictEqual(reconstructed.userId, data.userId);
  assert.strictEqual(reconstructed.availableBalance, data.availableBalance);
  assert.strictEqual(reconstructed.doubleAmount, data.doubleAmount);
  assert.strictEqual(reconstructed.isActive, data.isActive);
  assert.strictEqual(reconstructed.emptyField, null);
  assert.deepStrictEqual(reconstructed.metadata.tags, ['student', 'enrolled']);
});

// 4. Web Crypto RS256 PKCS#8 Key Conversion
await asyncTest('Web Crypto imports PKCS#8 DER key and signs RS256 assertion natively', async () => {
  const { subtle } = crypto;
  const keyPair = await subtle.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  );

  const exportedPkcs8 = await subtle.exportKey('pkcs8', keyPair.privateKey);
  const pem = `-----BEGIN PRIVATE KEY-----\n${Buffer.from(exportedPkcs8).toString('base64')}\n-----END PRIVATE KEY-----`;

  const derBuffer = pemToBinaryDer(pem);
  const importedKey = await subtle.importKey(
    'pkcs8',
    derBuffer,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const testMsg = new TextEncoder().encode('auth-payload');
  const sig = await subtle.sign('RSASSA-PKCS1-v1_5', importedKey, testMsg);
  const isValid = await subtle.verify('RSASSA-PKCS1-v1_5', keyPair.publicKey, sig, testMsg);
  assert.strictEqual(isValid, true);
});

// 5. System Status & Redaction
await asyncTest('/api/system-status redacts private keys and reports target future-it-industry-f97af', async () => {
  const mockContext = {
    request: new Request('http://localhost/api/system-status'),
    env: {
      FIREBASE_SERVICE_ACCOUNT: JSON.stringify({
        project_id: 'future-it-industry-f97af',
        client_email: 'backend-test@future-it-industry-f97af.iam.gserviceaccount.com',
        private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7\n-----END PRIVATE KEY-----\n',
      }),
      RAZORPAY_KEY_ID: 'rzp_live_test',
      RAZORPAY_KEY_SECRET: 'test_secret_123',
    },
  };

  const response = await systemStatusGet(mockContext);
  assert.strictEqual(response.status, 200);
  const data = await response.json();
  const jsonStr = JSON.stringify(data);

  // CRITICAL SECURITY ASSERTIONS:
  assert(!jsonStr.includes('private_key'));
  assert(!jsonStr.includes('MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7'));
  assert(!jsonStr.includes('test_secret_123'));
  assert.strictEqual(data.systemStatus.projectId, 'future-it-industry-f97af');
  assert.strictEqual(data.systemStatus.clientEmail, 'backend-test@future-it-industry-f97af.iam.gserviceaccount.com');
  assert.strictEqual(data.systemStatus.razorpayConfigured, true);
});

// 6. Local environment fallback without secrets
await asyncTest('/api/system-status gracefully informs when secret is pending in local development', async () => {
  const mockContext = {
    request: new Request('http://localhost/api/system-status'),
    env: {},
  };

  const response = await systemStatusGet(mockContext);
  assert.strictEqual(response.status, 200);
  const data = await response.json();

  assert.strictEqual(data.systemStatus.serviceAccountConfigured, false);
  assert.strictEqual(data.systemStatus.clientEmail, null);
  assert.strictEqual(data.systemStatus.firestore.status, 'AWAITING_CLOUDFLARE_SECRET_BINDING');
});

console.log(`\n🎉 ALL ${passedTests}/${passedTests} CLOUDFLARE <-> FIREBASE INTEGRATION TESTS PASSED!`);
