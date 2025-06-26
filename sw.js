self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('douro-bats').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/styles.css',
        '/pages/sobre.html',
        '/pages/treinos.html',
        '/pages/ranking.html',
        '/pages/matchmaking.html',
        '/pages/contacto.html'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});