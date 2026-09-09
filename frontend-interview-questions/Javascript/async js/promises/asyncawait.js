const pr1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise resolved");
  }, 40000);
});

const pr2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise resolved");
  }, 20000);
});

// function getData() {
//   pr.then((result) => console.log(result));
//   console.log("hello");
// }

async function getData() {
  console.log("Hello World 1");
  const result1 = await pr1;
  console.log(result1);

  const result2 = await pr2;
  console.log("Hello World 1");
  console.log(result2);
}

getData();
// const dataPromise = getData();
// dataPromise.then((result) => console.log(result));
