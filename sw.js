// Service Worker minimal : son périmètre (/tasko-app/) est prioritaire sur celui
// d'un autre site du même domaine. Le cache hors ligne viendra en phase 9.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
