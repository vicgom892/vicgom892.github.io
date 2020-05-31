// if('serviceWorker' in navigator){
//     window.addEventListener('load', () =>
//     navigator.serviceWorker.worker.register("SW.js")
//     .then(registration => console.log('Service worker registrado'))
//     .catch(err => 'SW registration failed'));
// }

    //   if('serviceWorker' in navigator){
    //     navigator.serviceWorker.register('/sw.js')
    //     .then(function(){
    //         console.log('Service Worker Registrado !!!')
    //     }).catch(function(){
    //         console.log('No se registro SW')
    //     })
    // }
    if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("SW.js")
        .then(function(registration) {
    // Worker is registered   
    }).catch(function(error) {
    // There was an error registering the SW 
    });     
}
  