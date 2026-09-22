const worker = new Worker("./worker.js");
//sending message to worker
worker.postMessage(10);

//receiving message from worker
worker.onmessage = function (event) {
  console.log("From worker", event.data);
};
