let p1 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 2000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("p2 reject");
  }, 200);
});

let p3 = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("p3 resolved");
  }, 200);
});
// Promise.myAll = function (iterable) {
//   return new Promise(function (resolve, reject) {
//     let iterableItems = Array.from(iterable);
//     if (!iterableItems.length) return resolve([]);
//     let results = [];
//     let completedCount = 0;

//     for (let i = 0; i < iterableItems.length; i++) {
//       //below line is basically to make sure even if a non promise value is passed as input
//       //it gets resolved as a promise
//       let currentPromise = Promise.resolve(iterableItems[i]);
//       currentPromise
//         .then((value) => {
//           results[i] = value;
//           completedCount++;
//           if (completedCount === iterableItems.length) resolve(results);
//         })
//         .catch(function (err) {
//           reject(err);
//         });
//     }
//   });
// };

// Polyfill of Promise.allsetttled

// Promise.myAllSettled = function (iterable) {
//   return new Promise(function (resolve, reject) {
//     let iterableItems = Array.from(iterable);
//     if (!iterableItems.length) return resolve([]);
//     let results = [],
//       completedCount = 0;
//     for (let i = 0; i < iterableItems.length; i++) {
//       let obj = {};
//       let currentPromise = Promise.resolve(iterableItems[i]);
//       currentPromise
//         .then((value) => {
//           ((obj.status = "fulfilled"), (obj.value = value), (results[i] = obj));
//         })
//         .catch(function (err) {
//           ((obj.status = "rejected"), (obj.reason = err));
//           results[i] = obj;
//         })
//         .finally(function () {
//           completedCount++;
//           if (completedCount === iterableItems.length) {
//             resolve(results);
//           }
//         });
//     }
//   });
// };

// Promise.myAllSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//Polyfill of Promise.race

Promise.myRace = function (iterable) {
  return new Promise(function (resolve, reject) {
    let iterableItems = Array.from(iterable);
    if (!iterableItems.length) return resolve([]);
    for (let i = 0; i < iterableItems.length; i++) {
      let currentPromise = Promise.resolve(iterableItems[i]);
      currentPromise
        .then((value) => {
          resolve(value);
          return;
        })
        .catch(function (err) {
          reject(err);
          return;
        });
    }
  });
};

Promise.myRace([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
