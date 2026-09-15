Promise.myAll = function (iterable) {
  return new Promise(function (resolve, reject) {
    let iterableItems = Array.from(iterable);
    if (!iterableItems.length) return resolve([]);
    let results = [];
    let completedCount = 0;

    for (let i = 0; i < iterableItems.length; i++) {
      //below line is basically to make sure even if a non promise value is passed as input
      //it gets resolved as a promise
      let currentPromise = Promise.resolve(iterableItems[i]);
      currentPromise
        .then((value) => {
          results[i] = value;
          completedCount++;
          if (completedCount === iterableItems.length) resolve(results);
        })
        .catch(function (err) {
          reject(err);
        });
    }
  });
};
