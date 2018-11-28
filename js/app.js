( function() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                 .register('./service-worker.js')
                 .then(function(cache) { 
                     console.log('Service Worker Registered'); 
                     //document.getElementById('listado').onchange = function(){
                     //   cache.update();
                     //}
                });
      }
} )( );

