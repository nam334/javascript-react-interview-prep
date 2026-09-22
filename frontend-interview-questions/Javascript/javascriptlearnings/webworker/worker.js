self.onmessage = function (event) {
  //receiving message from main thread
  console.log("event from main thread", event.data);
  let number = event.data;
  let square = number * number;
  //sending message from worker to main thread
  self.postMessage(square);
};
