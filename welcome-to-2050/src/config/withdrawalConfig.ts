/**
 * Affiliate Withdrawal Policy & Live Payout Test Configuration
 * Future IT Industry — https://futureitindustry.com
 *
 * TEMPORARY LIVE TEST CONFIGURATION:
 * Allows authorized test accounts / temporary test configuration to test real UPI / Bank
 * transfers and Admin Mark Paid workflow using a genuine ₹1 transaction.
 *
 * TO RESTORE STANDARD ₹100 MINIMUM FOR EVERYONE:
 * Set TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE = false
 */

export const TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE = true;

export const STANDARD_MIN_WITHDRAWAL = 100;
export const TEST_MIN_WITHDRAWAL = 1;

/**
 * When true during the active test session, applies the temporary ₹1 test configuration
 * across the withdrawal UI and validation.
 * When false, only accounts matching AUTHORIZED_TEST_ACCOUNTS get the ₹1 minimum,
 * while all other users retain the standard ₹100 minimum.
 */
export const APPLY_TO_TEST_SESSION = true;

export const AUTHORIZED_TEST_ACCOUNTS = [
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

export function isAuthorizedTestAccount(userOrRef?: string): boolean {
  if (!userOrRef) return false;
  const clean = String(userOrRef).trim().toUpperCase();
  return AUTHORIZED_TEST_ACCOUNTS.some((auth) => clean.includes(auth));
}

export function getEffectiveMinWithdrawal(userOrRef?: string): number {
  if (!TEMPORARY_TEST_MIN_WITHDRAWAL_ACTIVE) {
    return STANDARD_MIN_WITHDRAWAL;
  }
  if (APPLY_TO_TEST_SESSION || isAuthorizedTestAccount(userOrRef)) {
    return TEST_MIN_WITHDRAWAL;
  }
  return STANDARD_MIN_WITHDRAWAL;
}
