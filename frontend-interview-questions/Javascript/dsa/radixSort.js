// function radixSort(arr) {
//   let buckets = new Array(10);
//   let result = [];
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (String(arr[i]).length > counter) counter = String(arr[i]).length;
//   }
//   for (let digitPosition = 0; digitPosition < counter; digitPosition++) {
//     for (let i = 0; i < buckets.length; i++) {
//       buckets[i] = [];
//     }

//     for (let i = 0; i < arr.length; i++) {
//       let Digit = digitHelper(arr[i], digitPosition);
//       buckets[Digit].push(arr[i]);
//     }

//     //loop through buckets
//     for (let i = 0; i < buckets.length; i++) {
//       if (buckets[i].length > 0) result.push(...buckets[i]);
//     }

//     arr = result;
//     result = [];
//   }
//   return arr;
// }

// //number = 802
// // function digitHelper(number, digitPosition) {
// //   let num = number;
// //   let digit;
// //   if (digitPosition === 0) {
// //     //ones digit
// //     digit = num % 10;
// //   }
// //   if (digitPosition === 1) {
// //     //tens place
// //     num = Math.floor(num / 10);
// //     digit = num % 10;
// //   }
// //   if (digitPosition === 2) {
// //     //hundreds place
// //     num = Math.floor(num / 100);
// //     digit = num % 10;
// //   }
// //   return digit;
// // }

// //** is JavaScript’s exponentiation operator. It means “raised to the power of.”
// //from chatgpt
// function digitHelper(number, digitPosition) {
//   const divisor = 10 ** digitPosition;
//   const remaining = Math.floor(number / divisor);
//   return remaining % 10;
// }

// console.log(radixSort([170, 45, 802]));
// console.log(radixSort([802, 5, 1234, 45, 0, 170]));

// Time Complexity - O(n*d)
// n - number of elements in input array
// d - number of digits in largest element of the input array

// Space Complexity - O(n)
