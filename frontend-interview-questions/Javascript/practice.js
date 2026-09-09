console.log("A");

const promise = new Promise((resolve) => {
  console.log("B");

  resolve("Result");

  console.log("C");
});

promise.then((value) => {
  console.log(value);
});

console.log("D");
