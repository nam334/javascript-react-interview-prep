// Map, forEach, Find

// Array.prototype.myMap = function (cb) {
//   if (typeof cb !== "function")
//     throw new Error("Function parameter is not  acallback");
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], this, i));
//   }
//   return result;
// };

// console.log(arr.myMap((el) => el + 1));

//forEach

// Array.prototype.myforEach = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) cb(this[i], i, this);
//   }
// };
// arr.myforEach((el) => el + 1);
// console.log(arr);

// find;

// Array.prototype.myfind = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (cb(this[i], i, this)) return this[i];
//     }
//   }
//   return undefined;
// };

// console.log(arr.myfind((el) => el > 70));

// filter;

// Array.prototype.myfilter = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (cb(this[i], i, this)) result.push(this[i]);
//     }
//   }
//   return result;
// };

// console.log(arr.myfilter((el) => el > 4));

// every;

// Array.prototype.myEvery = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");

//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (!cb(this[i], i, this)) return false;
//     }
//   }
//   return true;
// };

// console.log(arr.myEvery((el) => el > 0));

//some;

// Array.prototype.mySome = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (cb(this[i], i, this)) return true;
//     }
//   }
//   return false;
// };
// console.log(arr.mySome((el) => el > 0));

// push

//[2, 4, 6, 8];
//7, 8, 0
// 0  1  2  3  4   5  6

// Array.prototype.myPush = function (...el) {
//   let len = this.length;
//   for (let i = 0; i < arguments.length; i++) {
//     this[len + i] = arguments[i];
//   }

//   return this.length;
// };

// console.log(arr.myPush(7, 8, 0));

// pop
// Array.prototype.myPop = function () {
//   if (!this.length) return undefined;
//   else {
//     let el = this[this.length - 1];
//     this.length--;
//     return el;
//   }
// };

// console.log(arr.pop());

// shift
const arr = [4, 6, 8];
Array.prototype.myShift = function () {
  if (this.length === 0) return undefined;
  let el = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length--;
  console.log(this);
  return el;
};

console.log(arr.myShift());

// unshift
// const arr = [4, 6];

// Array.prototype.myunShift = function (...args) {
//   let len = this.length + args.length;
//   let l = this.length;
//   for (let i = len - 1; i >= 0; i--) {
//     this[i] = this[l - 1];
//     l--;
//   }
//   for (let i = 0; i < args.length; i++) {
//     this[i] = args[i];
//   }
//   return this.length;
// };

// console.log(arr.myunShift(3));
