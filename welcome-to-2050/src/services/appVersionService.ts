/**
 * Centralized Application Cache Versioning & Stale Data Invalidation Service
 *
 * Guarantees that users never see stale localStorage data or deprecated bundles
 * after production resets or application updates.
 *
 * Preserves Firebase Auth session persistence while cleanly purging obsolete
 * financial and dashboard caches without reload loops.
 */

export const APP_CACHE_VERSION = 'v2_clean_slate_20261028_final';
const VERSION_STORAGE_KEY = 'futureai_app_cache_version';

export function initAppCacheVersioning(): void {
  if (typeof window === 'undefined') return;

  try {
    const currentVersion = localStorage.getItem(VERSION_STORAGE_KEY);
    if (currentVersion === APP_CACHE_VERSION) {
      return; // Already on current version, no action needed
    }

    console.info(`[AppVersion] Incompatible/outdated cache version detected (${currentVersion || 'none'}). Upgrading to ${APP_CACHE_VERSION}...`);

    // 1. Purge all deprecated financial, affiliate, and stale enrollment storage keys
    const deprecatedKeyPrefixes = [
      'futureai_affiliate_hub_',
      'futureai_user_wallet',
      'futureai_cloud_user_entitlements_',
      'futureai_user_enrollments_v',
      'futureai_unlocked_',
      'futureai_fresh_cloud_',
      'futureai_ambiguous_',
      'futureai_ref_attribution',
      'futureai_entitlements_last_sync',
    ];

    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        if (deprecatedKeyPrefixes.some((prefix) => key.startsWith(prefix))) {
          keysToRemove.push(key);
        }
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));

    // Also clear sessionStorage
    try {
      sessionStorage.removeItem('futureai_ref_attribution');
    } catch {}

    // 2. Clear obsolete Service Worker CacheStorage
    if ('caches' in window) {
      window.caches.keys().then((names) => {
        names.forEach((name) => {
          console.info('[AppVersion] Purging obsolete CacheStorage:', name);
          window.caches.delete(name);
        });
      }).catch(() => {});
    }

    // 3. Unregister any stale service workers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          console.info('[AppVersion] Unregistering stale ServiceWorker:', registration.scope);
          registration.unregister();
        });
      }).catch(() => {});
    }

    // 4. Update to current version stamp
    localStorage.setItem(VERSION_STORAGE_KEY, APP_CACHE_VERSION);
    console.info(`[AppVersion] Cache upgrade to ${APP_CACHE_VERSION} completed successfully.`);
  } catch (err) {
    console.warn('[AppVersion] Notice during cache version initialization:', err);
  }
}
