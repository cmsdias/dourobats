self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('jogadores-cache').then(cache => {
      return cache.addAll([
        'seriar.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
