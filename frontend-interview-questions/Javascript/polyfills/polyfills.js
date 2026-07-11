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

// Edge cases
// 1. If input passed to myforeach is not a callback function.
// 2. If the array is a sparse array
// const arr = [2, , 6, 8, 10];

// Array.prototype.myforEach = function (cb) {
//   if (typeof cb !== "function") throw new TypeError("Input is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) cb(this[i], i, this);
//   }
// };

// let sum = 0;
// console.log("sum before using myforeach", sum);
// arr.myforEach((el) => (sum = sum + el));
// console.log("sum after using myforeach", sum);

// 3. find
// The find() method of Array instances returns the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function, undefined is returned.

// const arr = [2, , 6, 8, 10];

// Array.prototype.myfind = function (cb) {
//   if (typeof cb !== "function") throw new TypeError("Input is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) return this[i];
//   }
//   return undefined;
// };

// const newarr = arr.myfind((el) => el > 7);
// console.log(newarr);

// 4. filter
// The filter() method of Array instances creates a shallow copy of a portion of a given array,
// filtered down to just the elements from the given array that pass the test implemented by the
//  provided function.

// const arr = [2, , 6, 8, 10];

// Array.prototype.myfilter = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (cb(this[i])) newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// const res = arr.myfilter((el) => el > 3);
// console.log(res);

// 5. every

// The every() method iterates over each array element, returning true if the provided
// function returns true for all elements. It returns false if the function returns false
// for any element. This method does not operate on empty elements and leaves the original
// array unchanged.

// Edge case - callback is not a function
// const arr = [3, 5, 8, 9, 11];

// Array.prototype.myEvery = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   let result = true;
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (!cb(this[i], i, this)) {
//         result = false;
//         break;
//       }
//     }
//   }
//   return result;
// };

// const newarr = arr.myEvery((el) => el > 100);
// console.log(newarr);

//6.some - The some() method of Array instances returns true if it finds an element in the array
//  that satisfies the provided testing function. Otherwise, it returns false.

// Edge cases
// 1. If callback is not a function
// 2. If array is a sparse array

// const arr = [, , 5];

// Array.prototype.mysome = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback must be a function");

//   for (let i = 0; i < this.length; i++) {
//     if (i in this) if (cb(this[i])) return true;
//   }
//   return false;
// };

// const newarr = arr.mysome((el, i) => {
//   console.log("poly:", el);
//   el > 4;
// });
// console.log(newarr);

// 7. reduce
// reduce() is a JavaScript array method that goes through each element of an array and combines
// them into a single final value.

// Edge case
// 1. If no initial value is provided, it uses the first value as the accumulator

// const arr = [1, 2, 3, 4];
// let sum = 1;

// Array.prototype.myreduce = function (cb, acc) {
//   console.log(arguments);
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   if (this.length === 0 && arguments.length < 2)
//     throw new TypeError("Reduce of empty array with no initial value");
//   let result, startindex;
//   if (arguments.length >= 2) {
//     result = acc;
//     startindex = 0;
//   } else {
//     result = this[0];
//     startindex = 1;
//   }
//   for (let i = startindex; i < this.length; i++) {
//     if (i in this) result = cb(result, this[i]);
//   }
//   return result;
// };

// let result = arr.myreduce((el, sum) => el + sum);
// console.log(result);

// 8. Push - The push() method of Array instances adds the specified elements to the end of an
// array and returns the new length of the array.

// const arr = [4, 6, 4];

// Array.prototype.mypush = function (...el) {
//   const arrLength = this.length + el.length;
//   let count = 0;
//   for (let i = this.length; i < arrLength; i++) {
//     this[i] = el[count];
//     count++;
//   }
//   return this.length;
// };
// const newarr = arr.mypush(0);
// console.log(arr, newarr);

//9. The pop() method of Array instances removes the last element from an array and
//  returns that element. This method changes the length of the array.

// const arr = [];

// Array.prototype.mypop = function () {
//   if (!this?.length) return undefined;
//   let popEl = this[this.length - 1];
//   this.length--;
//   return popEl;
// };
// const newArr = arr.pop();
// console.log(newArr, arr);

// 10. shift
// 11. unshift

// 12. flat
// The flat() method of Array instances creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.
// Edge cases
// 1. If array is empty, it should return the original array.
// 2. If depth is not defined, by default depth in native flat is 1

const arr1 = [0, 1, 2, [3, [4, 5]]];
const arr = [2, , 3];

Array.prototype.myflat = function (depth = 1) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!Array.isArray(this[i])) result.push(this[i]);
      else {
        if (depth > 0) result.push(...this[i].myflat(depth - 1));
        else result.push(this[i]);
      }
    }
  }
  return result;
};
console.log(arr.flat(Infinity));
