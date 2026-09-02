//myMap, myForEach, myFind, myFilter, myEvery, mySome, myReduce,
//  myFlat, myPush, myPop, myShift, myUnshift

// myMap, myPush, myFilter,
// tomorrow - myUnshift, myFlat, myReduce

const arr = [2, 4, 8];

// Array.prototype.myMap = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback must be a function");
//   const arrayLength = this.length;
//   const result = new Array(arrayLength);

//   for (let i = 0; i < arrayLength; i++) {
//     if (i in this) result[i] = cb(this[i], i, this);
//   }
//   return result;
// };

// // const result = arr.myMap((el) => el * 10);
// // console.log(result);
// const resultfromMap = arr.map((el) => el * 10);
// const resultfrommyMap = arr.myMap((el) => el * 10);
// console.log(resultfromMap, resultfrommyMap);

// 2. Filter

// Array.prototype.myFilter = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i in this && cb(this[i], i, this)) result.push(this[i]);
//   }
//   return result;
// };
// const arrfilter = arr.myFilter((el) => el > 5);
// console.log(arrfilter);

//3. Push
Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length + 1] = arguments[i];
  }
  return this.length;
};
const result = arr.myPush([7], 6);
console.log(result);
