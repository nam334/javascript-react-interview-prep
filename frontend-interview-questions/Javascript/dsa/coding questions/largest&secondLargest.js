//brute force

// function findLargestAndSecondLargest(arr) {
//   let n = arr.length,
//     largest,
//     secondLargest;
//   arr = arr.sort((a, b) => a - b); //O(nlog(n))

//   largest = arr[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     if (arr[i] !== largest) return [largest, arr[i]];
//   }
//   return null;
// }
// TC - O(nlogn) + O(n)
// SC - O(n)
//better

// function findLargestAndSecondLargest(arr) {
//   let n = arr.length,
//     largest = arr[0],
//     secondLargest;
//   //find largest
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//   //find second largest
//   secondLargest = -Infinity;
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > secondLargest && arr[i] !== largest) secondLargest = arr[i];
//   }
//   if (largest === secondLargest) return null;
//   else return [largest, secondLargest];
// }

// TC - O(n+n) -> O(2n)
// SC - O(1)

// //optimal

// function findLargestAndSecondLargest(arr) {
//   if (arr.length <= 1) return null;
//   let n = arr.length;
//   let largest = arr[0];
//   let secondLargest = -Infinity;
//   for (let i = 1; i < n; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     }
//     if (arr[i] > secondLargest && arr[i] !== largest) secondLargest = arr[i];
//   }
//   if (secondLargest === -Infinity) return null;
//   else return [largest, secondLargest];
// }

// TC - O(n)
// SC - O(1)
// console.log(findLargestAndSecondLargest([4, 1, 7, 3]));
// // o/p - [7, 4]

// console.log(findLargestAndSecondLargest([5, 9, 9, 2]));
// // o/p - [9, 5]

// console.log(findLargestAndSecondLargest([8, 8, 8]));
// // // o/p - null

// console.log(findLargestAndSecondLargest([3]));
// // // o/p - null

// console.log(findLargestAndSecondLargest([]));
// // // o/p - null

// console.log(findLargestAndSecondLargest([-10, -3, -7]));
// // // o/p - [-3, -7]

// console.log(findLargestAndSecondLargest([0, -1, -5]));
// // // o/p - [0, -1]

// console.log(findLargestAndSecondLargest([2, 6, 4, 6, 5]));
// // // o/p - [6, 5]

// Doubt - For the better and optimal approaches, why is space complexity O(1) and not O(n) though we are
// returning an array of two elements
