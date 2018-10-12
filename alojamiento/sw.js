// var urls = ["/", "/img/"]
// self.addEventListener("install", event => {
//     event.waitUntil(caches.open("mi-PWA")
//         .then( cache => cache.addAll(urls) ));
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//       caches.match(event.request)
//           .then(function(response) {
//               // Even if the response is in the cache, we fetch it
//               // and update the cache for future usage
//               var fetchPromise = fetch(event.request).then(
//                   function(networkResponse) {
//                       caches.open("mi-PWA").then(function(cache) {
//                           cache.put(event.request, networkResponse.clone());
//                           return networkResponse;
//                       });
//                   });
//               // We use the currently cached version if it's there
//               return response || fetchPromise;
//           })
//       );
//   }); 

