Fetch: Network first (server or connection errors)
self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function(error) {
        return caches.open("mi-PWA").then(function(cache) {
          return cache.match(event.request);
        });
      })
    );
  });
