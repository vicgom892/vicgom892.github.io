const cacheName = 'pwa-v1';
const staticAssets = [
    './',
    'index.html',
    'style',
    'style.min.css',
    'mdb.min.css',
    'mdb.lite.min.css',
    'mdb.lite.css',
    'mdb.css',
    'la-canasta-de-juan.css',
    'botstrap.min.css',
    'botstrap.css',
    'botstrap.js',
    'botstrap.min.js',
    'jquery-3.3.3.min.js',
    'mdb.js',
    'mdb.min.js',
    'menu.js',
    'popper.min.js',
    'sticky.js'
];

self.addEventListener('install', async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req));
    }else {
        e.respondWith(networkAndCache(req));
    }
});

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    }catch(e){
        const cached = await cache.match(req);
        return cached;
    }
}