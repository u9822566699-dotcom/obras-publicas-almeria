// Service Worker de prueba PWA
// Durante la fase de desarrollo NO mantiene copias de index.html.
// Cada cambio publicado en GitHub Pages se obtiene desde la red.

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        self.clients.claim()
    );
});

self.addEventListener('fetch', event => {
    // No interceptamos las peticiones.
    // El navegador obtiene siempre la versión publicada actualmente desde la red.
    return;
});
