const CACHE_NAME = 'paper-digest-v1';
const STATIC_ASSETS = [
  '/audio-paper-digest-blog/',
  '/audio-paper-digest-blog/assets/css/stylesheet.css'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
