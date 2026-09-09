const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("p1 rejected"), 20000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("p2 rejected"), 3000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("p3 rejected"), 4000);
});

Promise.any([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
