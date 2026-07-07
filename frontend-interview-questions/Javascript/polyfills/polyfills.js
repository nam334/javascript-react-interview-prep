//  myMap, myForEach, myFind, myFilter, myEvery, mySome, myReduce
//  myFlat, myPush, myPop, myShift, myUnshift
// [include the edge cases]

// Map method returns a new array which contains the results of the function
// called on each element of the array

//const arr = [2, , 6, 8, 10];

//Polyfill of map

// Edge cases
// 1. if input is not a function
// 2. if the array is a sparse array (array with empty values), for eg [1,2,,4]

// Array.prototype.myMap = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Function parameter is missing");
//   //console.log("this is", this, "cb is", cb);
//   const newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       newarr[i] = cb(this[i], i, this);
//     }
//   }
//   return newarr;
// };

// console.log(
//   "from mymap",
//   arr.myMap((el) => el + 1),
// );

// console.log(
//   "from map",
//   arr.map((el) => el + 1),
// );

// 2. forEach - The forEach() method of Array instances executes a provided function
// once for each array element.It does not return anything

const arr = [2, , 6, 8, 10];

Array.prototype.myforEach = function (cb) {
  if (typeof cb !== "function") throw new TypeError("Input is not a function");
  for (let i = 0; i < this.length; i++) {
    if (i in this) cb(this[i], i, this);
  }
};

let sum = 0;
console.log("sum before using myforeach", sum);
arr.myforEach((el) => (sum = sum + el));
console.log("sum after using myforeach", sum);
