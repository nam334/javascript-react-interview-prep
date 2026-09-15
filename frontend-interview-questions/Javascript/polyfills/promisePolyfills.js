let p1 = Promise.resolve("p1 resolved");
let p2 = Promise.reject("p2 rejected");
let p3 = Promise.resolve("p3 resolved");

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

Promise.myAllSettled = function (iterable) {
  return new Promise(function (resolve, reject) {
    let iterableItems = Array.from(iterable);
    if (!iterableItems.length) return resolve([]);
    let results = [],
      completedCount = 0;
    for (let i = 0; i < iterableItems.length; i++) {
      let obj = {};
      let currentPromise = Promise.resolve(iterableItems[i]);
      currentPromise
        .then((value) => {
          ((obj.status = "fulfilled"), (obj.value = value), (results[i] = obj));
        })
        .catch(function (err) {
          ((obj.status = "rejected"), (obj.reason = err));
          results[i] = obj;
        })
        .finally(function () {
          completedCount++;
          if (completedCount === iterableItems.length) {
            resolve(results);
          }
        });
    }
  });
};

Promise.myAllSettled([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
