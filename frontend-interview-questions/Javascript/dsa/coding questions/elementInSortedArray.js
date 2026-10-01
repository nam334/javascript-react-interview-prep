//brute force
// function findElement(arr, el) {

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) return i;
//   }
//   return -1;
// }

// TC - O(N)
// SC - O(1)

//better solution

// function findElement(arr, el) {
//   let n = arr.length;
//   let midElement = Math.floor(n / 2);

//   let startIndex, endIndex;
//   if (arr[midElement] > el) {
//     startIndex = 0;
//     endIndex = midElement;
//   } else if (arr[midElement] === el) return midElement;
//   else {
//     startIndex = midElement + 1;
//     endIndex = n - 1;
//   }
//   for (let i = startIndex; i <= endIndex; i++) {
//     if (arr[i] === el) return i;
//   }
//   return -1;
// }

// TC - O(n/2)
// SC - O(1)

//optimal solution

// function findElement(arr, el) {
//   let low = 0,
//     high = arr.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] === el) return mid;
//     if (arr[mid] < el) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1;
// }

// TC - O(logN)
// SC - O(1)
// console.log(findElement([2, 4, 6, 8, 10, 12, 14], 12)); // 5
// console.log(findElement([2, 4, 6, 8, 10, 12, 14], 2)); // 0
// console.log(findElement([2, 4, 6, 8, 10, 12, 14], 14)); // 6
// console.log(findElement([2, 4, 6, 8, 10, 12, 14], 7)); // -1
// console.log(findElement([2, 4, 6, 8], 1)); // -1
// console.log(findElement([2, 4, 6, 8], 10)); // -1
// console.log(findElement([5], 5)); // 0
// console.log(findElement([5], 3)); // -1
// console.log(findElement([], 5)); // -1
// console.log(findElement([-10, -5, -2, 0, 4, 8], -2)); // 2
