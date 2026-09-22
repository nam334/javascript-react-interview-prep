//A cache name lets us identify and manage a particular cache
// The cache stores copies of important application files inside the browser.
// If the internet is unavailable, that request fails.

// With a Service Worker cache:

// Page → Service Worker → Cache → Page

// The Service Worker can return the saved copy instead of depending on the network. This provides:
// Offline access
// Faster repeat visits
// Reduced network usage
// Better reliability on weak connections

const CACHE_NAME = "service-worker-cache-v1";
const FILES_TO_CACHE = ["./", "./index.html", "./main.js"];

// Later, when the page requests main.js, the Service Worker can check:

// Is main.js available in the cache?
// If yes, return its cached copy.
// Otherwise, request it from the network.

//When the browser registers a Service Worker for the first time,
// the Service Worker goes through an installation phase.

//installation
self.addEventListener("install", function (event) {
  console.log("Service worker installed");

  const cachePromise = caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(FILES_TO_CACHE);
  });

  //   caches.open(CACHE_NAME):

  // Opens the cache if it exists.
  // Creates it if it doesn’t exist.
  // Returns a Promise containing the cache object.

  //   cache is the opened browser cache.
  // cache.addAll(FILES_TO_CACHE) downloads and stores all listed files.
  // addAll() also returns a Promise.

  event.waitUntil(cachePromise);

  //   Caching is asynchronous. Without it, the browser may consider installation complete
  //   before all files have been cached.

  //   event.waitUntil(cachePromise) means:

  //   Keep the Service Worker installation alive until caching finishes.

  //   If cachePromise fails, the installation also fails, preventing an incomplete Service Worker
  //   from being installed. Add this and update/reinstall the worker.
});

//activation
self.addEventListener("activate", function (event) {
  console.log("Service worker activated");
});

//listen for n/w requests
//A Service Worker uses the fetch event to detect requests made by the webpage.

self.addEventListener("fetch", function (event) {
  console.log("Request intercepted", event.request.url);

  //Check whether a requested file exists in the cache
  const cachedResponsePromise = caches.match(event.request);
  cachedResponsePromise.then(function (cachedResponse) {
    if (cachedResponse) {
      return cachedResponse;
    }

    return fetch(event.request);
  });
  event.respondWith(cachedResponsePromise);
  //   Searches all Service Worker caches for that request.
  // Returns a Promise.
  // The Promise provides a cached Response if found.
  // It provides undefined if the request is not cached.
});

// Meaning:
// fetch(event.request) sends the request to the network.
// event.respondWith(...) tells the browser to use that Promise’s response.
