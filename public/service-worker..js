let cacheName = "cache1.4";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(() => {
            console.log('Declared Service Worker');
        }).catch((error) => {
            console.log('Error : ', error);
        });
}

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                "/",
                "/favicon.ico",
                "/index.html",
                "/assets/",
                "/assets/images/",
                "/assets/images/background.jpg",
                "/assets/images/card.jpg",
                "/assets/images/icon-16.jpg",
                "/assets/images/icon-32.jpg",
                "/assets/images/icon-192.jpg",
                "/assets/images/logo.png",
                "/assets/tracks/",
                "/assets/tracks/little-big/",
                "/assets/tracks/little-big/go-bananas.mp3",
                "/assets/tracks/little-big/hypnodancer.mp3",
                "/assets/tracks/little-big/lollybomb.mp3",
                "/assets/tracks/little-big/skibidi.mp3",
                "/assets/tracks/little-big/uno.mp3",
            ]);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});