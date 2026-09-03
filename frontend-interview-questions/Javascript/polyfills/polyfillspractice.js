//myMap, myForEach, myFind, myFilter, myEvery, mySome, myReduce,
//  myFlat, myPush, myPop, myShift, myUnshift

// myMap, myPush, myFilter,
// tomorrow - myUnshift, myFlat, myReduce

// const arr = [2, 4, 8];

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
// Array.prototype.myPush = function () {
//   for (let i = 0; i < arguments.length; i++) {
//     this[this.length + 1] = arguments[i];
//   }
//   return this.length;
// };
// const result = arr.myPush([7], 6);
// console.log(result);

//myUnshift, myFlat, myReduce

// Unshift method adds one/more elements to the beginning of the array and returns
// the new length of the array and the shift method removed the first elemnet of
// the array and returns the element. Both methods modify the original array

//polyfill of unshift

// const arr = [2, 4, 6, 8];

// Array.prototype.myUnshift = function () {
//   let arrLength = this.length;
//   let totalLength = arrLength + arguments.length;
//   for (let i = totalLength - 1; i >= arguments.length; i--) {
//     this[i] = this[arrLength - 1];
//     arrLength--;
//   }
//   for (let i = 0; i < arguments.length; i++) {
//     this[i] = arguments[i];
//   }
//   return this.length;
// };

// const result = arr.myUnshift([1, 2], 3);
// console.log(result);

//polyfill of flat

// Array.prototype.myflat = function () {
//   let result = [];
//   const args = arguments[0];
//   if (args === 0) return [...this];
//   for (let i = 0; i < this.length; i++) {
//     if (Array.isArray(this[i])) {
//       const flattenedArray = this[i].myflat(args - 1);
//       result.push(...flattenedArray);
//     } else {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// const result = arr2.myflat(1);
// console.log(result);

//polyfill of reduce

Array.prototype.myReduce = function () {
  if (typeof arguments[0] !== "function")
    throw new TypeError("Callbck must be a function");
  let accumulator,
    startIndex,
    callback = arguments[0];
  if (arguments.length > 1) {
    accumulator = arguments[1];
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};
const arr = [2, 4, 6, 8];
const initialValue = 2;
const sumWithInitial = arr.myReduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  initialValue,
);
console.log(sumWithInitial);
