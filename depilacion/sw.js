// ES 6
var urls = ['/'];
self.addEventListener("install", event => {
  event.waitUntil(caches.open("mi-PWA")
      .then( cache => cache.addAll(urls) ));
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function(error) {
        return caches.open("mi-PWA").then(function(cache) {
          return cache.match(event.request);
        });
      })
    );
  });
