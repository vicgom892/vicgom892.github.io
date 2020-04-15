const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';

const CACHE_INMUTABLE_NAME = 'inmutable-v1';


function limpiarCache( cacheName, numeroItems ){


  caches.open( cacheName )

       .then( cache =>{


           return cache.keys()
              .then(keys =>{

                if ( keys.length > numeroItems){

                  cache.delete( keys[0] )
                  .then( limpiarCache(cacheName, numeroItems));
                }


              });
       });

}

self.addEventListener('install', e =>{


  const cacheProm = caches.open(CACHE_STATIC_NAME)
      .then( cache =>{

        return cache.addAll([
          '/',
          '/index.html',
          '/css/style',
          '/img',
          '/js/app.js'
        ]);

      });

    const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME)

            .then(cache => {

              return cache.addAll([
                'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"',
                'https://code.jquery.com/jquery-3.3.1.slim.min.js'          
              ]);
            });

      
    e.waitUntil( Promise.all([cacheProm, cacheInmutable])  );

//   console.log('SW: instalando SW');
// });

// self.addEventListener('fetch', event =>{

//   // const offlineResp = new Response(`
     
//   //     bienvenido a mi pagina web

//   //     disculpa, pero para usarla, nesecitas internet
  
//   // `);


//   const  resp = fetch(event.request)
//                    .catch( () =>{

//                     return offlineResp;
//                    });

//   event.respondWith(resp);


});

self.addEventListener('fetch', e =>{


  // numero 1cach only
  // e.respondWith( caches.match(e.request));


  //numero 2 cache with network fallback

const respuesta  = caches.match( e.request)
.then( res =>{

  if ( res ) return res;

  //no existe el archibo
  //tego que ir a la red
  console.log('no existe', e.request.url);

  return fetch( e.request).then(newResp =>{

    caches.open(CACHE_DYNAMIC_NAME)

         .then( cache =>{
           cache.put( e.request, newResp );
           limpiarCache(CACHE_DYNAMIC_NAME, 50);
         });
    return newResp.clone();
  });

});



e.respondWith( respuesta );

});




// self.addEventListener('push', event =>{

//   console.log('notificacion recibida');

// });

