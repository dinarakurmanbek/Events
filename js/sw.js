console.log('Service Worker wurde installiert.');

self.addEventListener('install', (event) => {
  console.log('Service Worker wurde installiert.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker wurde aktiviert.');
  var cacheNew = ['u2'];
  console.log('Die App wurde updated.');
  event.waitUntil(
    caches.keys().then(function(keyList){
      return Promise.all(keyList.map(function(key){
        if(cacheKeeplist.indexOf(key)=== -1){
          }
      }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch-Ereignis aufgetreten:', event.request.url);
  // Hier können Sie Caching-Strategien implementieren
});
