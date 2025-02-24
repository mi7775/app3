self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('game-time-cache').then(function(cache) {
            return cache.addAll([
                './',                      // Ensure the root is cached
                './index.html',             // Ensure index.html is cached
                './style.css',              // Ensure style.css is cached
                './app.js',                 // Ensure app.js is cached
                './manifest.json',          // Ensure manifest.json is cached
                './images/icon.png',        // Ensure icon.png is cached
                './images/B1S1.png',        // Ensure B1S1 image is cached
                './images/B2S1.png',        // Ensure B2S1 image is cached
                './images/B3S1.png',        // Ensure B3S1 image is cached
                './images/B4S1.png',        // Ensure B4S1 image is cached
                './images/B5S1.png',        // Ensure B5S1 image is cached
                './images/B6S1.png',        // Ensure B6S1 image is cached
                './images/B7S1.png'         // Ensure B7S1 image is cached
            ]);
        })
    );
});

/*
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
*/
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request).catch(() => {
                console.error(`Failed to fetch: ${event.request.url}`);
            });
        })
    );
});


