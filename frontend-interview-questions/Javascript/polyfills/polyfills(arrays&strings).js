//1.concat
// const arr1 = [2, 4, 6];
// const arr2 = [3, 5, 7];

// Array.prototype.myconcat = function (...args) {
//   let argsLength = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (Array.isArray(args[i])) argsLength += args[i].length;
//     else argsLength++;
//   }
//   let totalLength = this.length + argsLength;
//   let result = [];
//   //copying the arry
//   for (let i = 0; i < this.length; i++) result[i] = this[i];
//   console.log("result is", result);
//   let p = 0;
//   for (let i = this.length; i < totalLength; i++) {
//     if (Array.isArray(args[p])) {
//       for (let j = 0; j < args[p].length; j++) {
//         result[i] = args[p][j];
//         i++;
//       }
//     } else {
//       result[i] = args[p];
//     }
//     p++;
//   }
//   return result;
// };
// console.log(arr1.myconcat(arr2));

// 2. Includes - The includes() method of Array instances determines whether an array includes a certain
//  value among its entries, returning true or false as appropriate.

// const arr = [2, 4, [6, 7], 8];

// let testarr = [6, 7];
// const arr = [2, 6, NaN, testarr, 8];
// Array.prototype.myIncludes = function (...args) {
//   let p = null;
//   if (args[1] < 0) {
//     p = this.length + args[1];
//     if (p < 0) p = 0;
//   } else {
//     p = args[1] || 0;
//   }
//   for (let i = p; i < this.length; i++) {
//     if (Number.isNaN(this[i]) && Number.isNaN(args[0])) {
//       return true;
//     }
//     if (this[i] === args[0]) return true;
//   }
//   return false;
// };

// console.log(arr.includes(testarr));
// //console.log(arr.myIncludes(NaN));

// 3. indexOf - The indexOf() method of Array instances returns the first index at which a given element
// can be found in the array, or -1 if it is not present.

// const beasts = ["ant", "bison", "camel", "duck", "bison"];
// Array.prototype.myIndexOf = function (...args) {
//   let startIndex;

//   if (args[1] < 0) {
//     startIndex = this.length + args[1];
//     if (startIndex < 0) startIndex = 0;
//   } else {
//     startIndex = args[1] || 0;
//   }

//   for (let i = startIndex; i < this.length; i++) {
//     if (this[i] === args[0]) return i;
//   }
//   return -1;
// };

// console.log(beasts.myIndexOf("bison"));
// // Expected output: 1

// // Start from index 2
// console.log(beasts.myIndexOf("bison", 2));
// // Expected output: 4

// console.log(beasts.myIndexOf("giraffe"));
// // Expected output: -1

// 4. The findIndex() method of Array instances returns the index of the first element in an array
// that satisfies the provided testing function. If no elements satisfy the testing function,
//  -1 is returned.

// const arr = [2, 4, 6, 8];

// Array.prototype.myfindIndex = function (cb) {
//   if (typeof cb !== "function")
//     throw new TypeError("Callback is not a function");
//   for (let i = 0; i < this.length; i++) {
//     if (i in this) {
//       if (cb(this[i], i, this)) {
//         return i;
//       }
//     }
//   }
//   return -1;
// };
// console.log(arr.myfindIndex((el) => el > 3));

//--------------------------------------Strings------------------------------------------------

// 5. StartsWith - The startsWith() method of String values determines whether this string begins
// with the characters of a specified string, returning true or false as appropriate.

// String.prototype.mystartsWith = function (...args) {
//   if (args[0] === "") return true;
//   let len = 1,
//     count = 0,
//     startIndex;
//   startIndex = args[1] || 0;

//   if (this[startIndex] === args[0][0]) {
//     let indexVal = startIndex + 1;
//     while (len < args[0].length) {
//       if (this[indexVal] === args[0][len]) {
//         count++;
//       }
//       len++;
//       indexVal++;
//     }
//     if (count + 1 === args[0].length) return true;
//   }

//   return false;
// };
// const str = "Saturday night plans";

// console.log(str.mystartsWith(""));
// // // Expected output: true
// console.log(str.mystartsWith("Sat"));
// console.log(str.mystartsWith("Sat", 3));
// // // Expected output: false

// 6. endsWith() - The endsWith() method of String values determines whether a string ends with
// the characters of this string, returning true or false as appropriate.

// String.prototype.myEndsWith = function (...args) {
//   let argsLength = args[0].length;
//   //   ?? - Nullish Coalescing Operator
//   //   If the value on the left is missing (null or undefined), use the value on the right.
//   let endIndex = args[1] ?? this.length;
//   let count = 0;

//   //search from last

//   if (this[endIndex - 1] === args[0][argsLength - 1]) {
//     while (argsLength > 0) {
//       if (this[endIndex - 1] === args[0][argsLength - 1]) count++;
//       endIndex--;
//       argsLength--;
//     }
//   }
//   if (count === args[0].length) return true;

//   return false;
// };
// const str = "To be, or not to be, that is the question.";

// console.log(str.myEndsWith("question.")); // true
// console.log(str.myEndsWith("to be")); // false
// console.log(str.myEndsWith("to be", 19)); // true

// 7. includes - The includes() method of String values performs a case-sensitive search to
// determine whether a given string may be found within this string, returning true or false as
//  appropriate.
// const str = "To be, or not to be, that is the question.";

// String.prototype.myincludes = function (...args) {
//   if (args[0] === "") return true;
//   let startIndex = args[1] ?? 0;
//   let argsLength = args[0].length,
//     count = 0;
//   for (let i = startIndex; i < this.length; i++) {
//     count = 0;
//     if (this[i] === args[0][0]) {
//       let len = 0,
//         index = i;
//       while (len < argsLength) {
//         if (this[index] === args[0][len]) {
//           count++;
//         }
//         index++;
//         len++;
//       }
//       if (count === args[0].length) return true;
//     }
//   }
//   return false;
// };
// console.log(str.myincludes("To be")); // true
// console.log(str.myincludes("question")); // true
// console.log(str.myincludes("nonexistent")); // false
// console.log(str.myincludes("To be", 1)); // false
// console.log(str.myincludes("TO BE")); // false
// console.log(str.myincludes("")); // true

// 8. split - The split() method of String values takes a pattern and divides this string into an
//  ordered list of substrings by searching for the pattern, puts these substrings into an array,
//   and returns the array.

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[3]);
// // Expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // Expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);

//9. repeat

String.prototype.myRepeat = function (value) {
  if (value === 0 || Number.isNaN(value)) return "";
  if (value < 0 || value === Infinity)
    throw new RangeError("Invalid string length");
  let result = "";
  value = Math.floor(value);
  for (let i = 1; i <= value; i++) {
    result += this;
  }
  return result;
};
let str = "Hello";

console.log(str.myRepeat(3)); // "HelloHelloHello"
console.log(str.myRepeat(1)); // "Hello"
console.log(str.myRepeat(0)); // ""
console.log(str.myRepeat(2.5)); // "HelloHello"  → 2.5 is converted to 2
console.log(str.myRepeat(-1)); // RangeError
console.log(str.myRepeat(Infinity)); // RangeError
console.log(str.myRepeat(NaN)); // ""
console.log(str.myRepeat()); // ""  → undefined becomes 0
