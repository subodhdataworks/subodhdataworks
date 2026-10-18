// FUTURE AI Service Worker for PWA Offline & Install Support
const CACHE_NAME = 'futureai-pwa-v2';
const PRECACHE_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.png',
  '/favicon.ico',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[PWA SW] Pre-cache non-fatal error:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[PWA SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests and non-chrome-extension requests
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  // Always use Network-First for navigation (HTML page load) so mobile visitors immediately see new deploys
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => cached || caches.match('/'));
        })
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Optionally update cache for same-origin static assets
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          event.request.url.startsWith(self.location.origin) &&
          (event.request.url.endsWith('.png') ||
           event.request.url.endsWith('.jpg') ||
           event.request.url.endsWith('.svg') ||
           event.request.url.endsWith('.ico') ||
           event.request.url.endsWith('.json'))
        ) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          return new Response('Network error occurred', { status: 408, headers: { 'Content-Type': 'text/plain' } });
        });
      })
  );
});
