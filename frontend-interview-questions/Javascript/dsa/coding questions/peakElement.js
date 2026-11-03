//brute force
// function findPeakElement(arr) {
//   let n = arr.length;
//   if (n === 1) return 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] > arr[1]) {
//       //peak is 1st element
//       return 0;
//     } else if (arr[n - 1] > arr[n - 2]) {
//       //peak is last el
//       return n - 1;
//     } else {
//       //last el
//       if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//         //peak is middle element
//         return i;
//       }
//     }
//   }
// }

//better solution
// function findPeakElement(arr) {
//   let n = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       (i === 0 || arr[i - 1] < arr[i]) &&
//       (i === arr.length - 1 || arr[i] > arr[i + 1])
//     )
//       return i;
//   }
// }

//optimal

function findPeakElement(arr) {
  let n = arr.length;
  if (n === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 2] < arr[n - 1]) return n - 1;
  let low = 1,
    high = n - 2;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    //chk if mid is peak
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid] > arr[mid - 1]) low = mid + 1;
    else if (arr[mid] > arr[mid + 1]) high = mid - 1;
    else high = mid - 1;
  }
}

// Time comp = O(logN)
// Space comp = O(1)
// Single element
console.log(findPeakElement([5])); // 0
console.log(findPeakElement([-2147483648])); // 0

// Two elements
console.log(findPeakElement([1, 2])); // 1
console.log(findPeakElement([2, 1])); // 0

// Strictly increasing → peak at last index
console.log(findPeakElement([1, 2, 3, 4, 5])); // 4

// Strictly decreasing → peak at first index
console.log(findPeakElement([5, 4, 3, 2, 1])); // 0

// Peak in the middle
console.log(findPeakElement([1, 3, 2])); // 1
console.log(findPeakElement([1, 2, 3, 1])); // 2

// Peak at second-to-last index
console.log(findPeakElement([1, 2, 3, 4, 3])); // 3

// All negative numbers
console.log(findPeakElement([-5, -3, -10])); // 1
console.log(findPeakElement([-1, -2, -3])); // 0

// Large positive and negative values
console.log(findPeakElement([-5000, 0, 5000])); // 2
console.log(findPeakElement([-2147483648, 2147483647])); // 1
console.log(findPeakElement([2147483647, -2147483648])); // 0

// Multiple peaks (any valid index is accepted)
console.log(findPeakElement([5000, -5000, 0])); // 0 or 2
console.log(findPeakElement([3, 1, 3])); // 0 or 2
console.log(findPeakElement([1, 3, 1, 3, 1])); // 1 or 3
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 1 or 5
