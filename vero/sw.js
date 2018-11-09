// importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('airhorner').then(function(cache) {
      return cache.addAll([
        '/',
        '/menu.html',
        '/galeria.html',
        '/js',
        '/css/font-awesome.css',
        '/css/galeria.css',
        '/css/menu.css',
        '/css/menuajustable.css',
        '/scripts/menu.js',
        '/img',
        '/images1',
        '/fonts'
      ]);
    })
  );
 });
 self.addEventListener('fetch', function(event) {

  console.log(event.request.url);
  
  });
