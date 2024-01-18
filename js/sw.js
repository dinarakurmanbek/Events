console.log('Service Worker wurde installiert.');

self.addEventListener('install', (event) => {
  console.log('Service Worker wurde installiert.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker wurde aktiviert.');
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch-Ereignis aufgetreten:', event.request.url);
  // Hier können Sie Caching-Strategien implementieren
});
