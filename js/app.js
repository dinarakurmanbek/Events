console.log('Die App wurde geladen.');

// Lebenszyklus-Events
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Installations-Prompt angezeigt');
  // Hier können Sie die Installation des Service Workers initiieren
});

window.addEventListener('appinstalled', (event) => {
  console.log('Die App wurde installiert.');
});

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('js/sw.js')
    .then((registration) => {
      console.log('Service Worker registriert:', registration);
     //  var version = '4';
     // console.log('Die App wurde updated.');
    })
    .catch((error) => {
      console.error('Fehler bei der Registrierung des Service Workers:', error);
    });
}
