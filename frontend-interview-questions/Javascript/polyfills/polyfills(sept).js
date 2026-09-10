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

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//splice

//index -  0  1  2  3  4
//  1  2  10 20 30 40 5
//index -  0  1   2  3  4  5 6
Array.prototype.mySplice = function (startIndex, deleteCount, ...items) {
  let arrayLength = this.length;
  const removedEl = [];
  let j = 0;

  if (arguments.length === 1) {
    //deleteCount is omitted
    for (let i = startIndex; i < arrayLength; i++) {
      removedEl[j] = this[i];
      j++;
    }
    this.length = startIndex;
  } else {
    // deleteCount exceeds the available elements
    if (deleteCount > arrayLength - startIndex) {
      deleteCount = arrayLength - startIndex;
    }
    if (deleteCount < 0) deleteCount = 0;
    for (let i = startIndex; i < startIndex + deleteCount; i++) {
      removedEl[j] = this[i];
      j++;
    }
    //create space
    let newArrayLength = arrayLength - deleteCount + items.length;
    for (let i = newArrayLength - 1; i >= startIndex; i--) {
      if (arrayLength <= 0) break;
      this[i] = this[arrayLength - 1];
      arrayLength--;
    }
    if (newArrayLength < this.length) {
      this.length = newArrayLength;
    }

    //move the elements
    let p = 0;
    for (let i = startIndex; i < startIndex + items.length; i++) {
      this[i] = items[p];
      p++;
    }
  }

  return removedEl;
};

// const arr = [1, 2, 3, 4, 5];

// const splicedArray = arr.mySplice(1, 3, 10);
//const splicedArray = arr.mySplice(2, 2, 10, 20, 30, 40);
//console.log(splicedArray);
//Edge case 1: Equal numbers of elements deleted and inserted
// const arr = [1, 2, 3, 4, 5];
// const removed = arr.mySplice(1, 2, 10, 20);
// console.log(arr);
// console.log(removed);
//Edge case 2: Delete without inserting
// const arr = [1, 2, 3, 4, 5];
// const removed = arr.mySplice(1, 2);
//Edge case 3: deleteCount is omitted
// const arr = [1, 2, 3, 4, 5];

// const removed = arr.mySplice(2);
// console.log(removed, arr);

//Edge case 4: deleteCount exceeds available elements
// const arr = [1, 2, 3, 4, 5];

// const removed = arr.mySplice(2, 10);
// console.log(removed, arr);

//5. deleteCount exceeds the number of elements available from startIndex.
// const arr = [1, 2, 3, 4, 5];

// const removed = arr.mySplice(2, 4);

// console.log(arr); // [1, 2]
// console.log(removed); // [3, 4, 5]

//6. negatice deleteCount
// const arr = [1, 2, 3, 4, 5];

// const removed = arr.mySplice(2, -2, 10);
// console.log(removed, arr);
// Assumptionsptions:

// start is between 0 and array.length.
// deleteCount is a valid non-negative number.
// The array is dense—no empty slots.
// Both start and deleteCount are provided.
