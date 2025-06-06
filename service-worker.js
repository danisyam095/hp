const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/hp/',
  '/hp/index.html',
  '/hp/style.css',
  '/hp/app.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
