var cacheName = "liftup-v1";
var filesToCache = [
    "/",
    "/index.html",
    "/login.html",
    "/order.html",
    "/service.html",
    "/register.html",
    "/js/app.js",
    "/js/list.js",
    "/js/list2.js",
    "/js/login.js",
    "/js/postOrden.js",
    "/js/validar.js",
    "/images/banner.jpg",
    "/images/columna1.png",
    "/images/columna2.png",
    "/images/columna3.png",
    "/images/columna4.png",
    "/images/columna5.png",
    "/images/columna6.png",
    "/images/facebook.png",
    "/images/imagen1.jpg",
    "/images/imagen2.jpg",
    "/images/imagen3.jpg",
    "/images/imagen4.jpg", 
    "/images/twitter.png",
    "/images/icon125x125.png",
    "/images/icon152x152.png",
    "/images/icon192x192.png",
    "/images/icon225x225.png",
    "/images/whatsup.png",
    "/style/banner.css",
    "/style/grid.css",
    "/style/login.css",
    "/style/main.css",   
    "/style/menu.css",
    "/style/order.css",
    "/style/register.css",
    "/style/service.css",
];

self.addEventListener( 'install', function( e ) {
    console.log( '[ServiceWorker] Install' );
    e.waitUntil(
        caches.open( cacheName ).then( function( cache ) {
            console.log( '[ServiceWorker] Caching app shell' );
            return cache.addAll( filesToCache );
        } )
    );
} );

self.addEventListener( 'activate', function( e ) {
    console.log( '[ServiceWorker] Activate' );
    e.waitUntil(
        caches.keys( ).then( function( keyList ) {
            return Promise.all( keyList.map( function( key ) {
                if ( key != cacheName ) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete( key );
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener( 'fetch', function( e ) {
    console.log( '[ServiceWorker] Fetch', e.request.url );
    e.respondWith(
        caches.match( e.request ).then( function( response ) {
            return response || fetch( e.request );
        } )
    );
} );