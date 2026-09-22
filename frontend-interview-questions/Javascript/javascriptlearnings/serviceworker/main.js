// navigator provides information and browser APIs.
// "serviceWorker" in navigator checks whether the Service Worker API exists in the browser.

if ("serviceWorker" in navigator) {
  console.log("service worker is supported");

  //register() asks the browser to load and register service-worker.js.

  const registrationPromise =
    navigator.serviceWorker.register("./serviceWorker.js");
  registrationPromise
    .then(function (registration) {
      console.log("Service worker registered successfully");
    })
    .catch(function (error) {
      console.log("Service worker registration failed", error);
    });
}
