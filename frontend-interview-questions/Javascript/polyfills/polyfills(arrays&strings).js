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

const beasts = ["ant", "bison", "camel", "duck", "bison"];
Array.prototype.myIndexOf = function (...args) {
  let startIndex;

  if (args[1] < 0) {
    startIndex = this.length + args[1];
    if (startIndex < 0) startIndex = 0;
  } else {
    startIndex = args[1] || 0;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this[i] === args[0]) return i;
  }
  return -1;
};

console.log(beasts.myIndexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.myIndexOf("bison", 2));
// Expected output: 4

console.log(beasts.myIndexOf("giraffe"));
// Expected output: -1
