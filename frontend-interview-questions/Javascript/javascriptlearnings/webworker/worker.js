// A Web Worker is a browser API that allows JavaScript to run on a separate background thread instead of the browser’s main thread.

// Normally, JavaScript on a webpage runs on the main thread. The same main thread also handles:

// User clicks
// Scrolling
// Rendering
// DOM updates
// Animations
// Running JavaScript

// If JavaScript performs a long, CPU-heavy operation, the main thread becomes busy. The page may freeze and stop responding temporarily.

// A Web Worker moves that computation to another thread:
// What can a Web Worker do?

// It can perform JavaScript calculations such as:

// Processing a large array
// Sorting or filtering a huge dataset
// Image or video data processing
// Encryption and hashing
// Parsing large files
// Generating reports
// Complex mathematical calculations
// Data transformation
// What can’t a Web Worker do?

// A worker cannot directly access the webpage’s DOM.

// Workers do not have access to:

// document
// DOM elements
// Direct UI manipulation
// Some properties associated with window

self.onmessage = function (event) {
  //receiving message from main thread
  console.log("event from main thread", event.data);
  let number = event.data;
  let square = number * number;
  //sending message from worker to main thread
  self.postMessage(square);
};
