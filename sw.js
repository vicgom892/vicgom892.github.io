// self.addEventListener('fetch', function(){
//     console.log('Escuchando un fetch')
// })

//var urls = ['/', '/script.js', '/style.cs'];

var urls = ['/'];
self.addEventListener("install", function(event) {
    console.log("The SW is now installed"); 
    event.waitUntil(caches.open("myAppCache").then(function(cache) {
        return cache.addAll(urls);
    }));
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
