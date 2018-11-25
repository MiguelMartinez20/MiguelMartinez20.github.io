var cacheName = "perris-v3";
var filesToCache = [
    "/",
    "/index.html",
    "/gallery.html",
    "/js/app.js",
    "/style/carrusel.css",
    "/style/cuadro.css",
    "/style/main.css",
    "/style/footer.css",
    "/style/form.css", 
    "/style/galeria.css",
    "/style/mainForm.css",
    "/style/menu.css",
    "/img/adopcion-1.png",
    "/img/carrusel1.jpg",
    "/img/carrusel2.jpg",
    "/img/carrusel3.jpg",
    "/img/carrusel4.jpg",
    "/img/icono.png",
    "/img/perro-1.jpg",
    "/img/perro-2.jpg",
    "/img/perro-3.jpg",
    "/img/perro-4.jpg",
    "/img/perro-5.jpg",
    "/img/perro-6.jpg",
    "/img/perro-7.jpg",
    "/img/perro-8.jpg",
    "/img/perro-9.jpg",
    "/img/perro-10.jpg",
    "/img/perro-11.jpg",
    "/img/perro-12.jpg",
    "/img/perro-13.jpg",
    "/img/perro-14.jpg",
    "/img/perro-15.jpg",
    "/img/perro-16.jpg",
    "/img/perro-17.jpg"   
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