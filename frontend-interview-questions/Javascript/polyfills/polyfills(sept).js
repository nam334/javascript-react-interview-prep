// //forEach
// //The forEach() method of Array instances executes a provided function once for each array element.

// const array = [2, , 8];
// const arr = [1, 2, 3, 4];
// Array.prototype.myForEach = function (cb) {
//   if (this === null) throw new TypeError("Cannot read properties of null");
//   if (this === undefined)
//     throw new TypeError("Cannot read properties of undefined");
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   const arrayLength = this.length;
//   for (let i = 0; i < arrayLength; i++) {
//     if (i in this) cb(this[i], i, this);
//   }
// };
// array.myForEach((element) => console.log(element + 1));
// array.myForEach((element) => console.log(element));

// Edge cases handled - null, undefined, if callback is not a function and sparse arrays
// Time complexity - O(N)
// Space complexity - O(1)

//find

// Array.prototype.myFind = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   if (this === null) throw new TypeError("Cannot read properties of null");
//   if (this === undefined)
//     throw new TypeError("Cannot read properties of undefined");
//   const arrayLength = this.length;

//   for (let i = 0; i < arrayLength; i++) {
//     if (cb(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };

// const array = [5, , 8, 130, 44];

// const found = array.myFind((element) => element > 1000);

// console.log(found);

// Best case time complexity - O(1)
// Worst case time complexity - O(N)
// Space complexity - O(1)
// Edge cases handled - null, undefined, if callback is not a function
//some

// Array.prototype.mySome = function (cb) {
//   // Write your implementation
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   if (this === null) throw new TypeError("Cannot read properties of null");
//   if (this === undefined)
//     throw new TypeError("Cannot read properties of undefined");
//   const arrayLength = this.length;
//   for (let i = 0; i < arrayLength; i++) {
//     if (i in this && cb(this[i], i, this)) return true;
//   }
//   return false;
// };

// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.mySome(even));
// // Expected output: true

// Best case time complexity - O(1)
// Worst case time complexity - O(N)
// Auxiliary space - O(1)

// Array.prototype.myEvery = function (cb) {
//   // Write your implementation
//   if (typeof cb !== "function") throw new Error("Callback is not a function");
//   if (this === null) throw new Error("Cannot read properties of null");
//   if (this === undefined)
//     throw new TypeError("Cannot read properties of undefined");
//   const arrayLength = this.length;
//   for (let i = 0; i < arrayLength; i++) {
//     if (i in this) {
//       if (!cb(this[i], i, this)) return false;
//     }
//   }
//   return true;
// };

// const array = [2, null, , undefined, 4];

// console.log(array.myEvery((element) => element != null));
// Best case time complexity - O(1)
// Worst case time complexity - O(N)
// Auxiliary space - O(1)

// Edge cases handled - null, undefined, if callback is not a function
