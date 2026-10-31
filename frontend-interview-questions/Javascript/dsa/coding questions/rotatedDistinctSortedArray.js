// brute force
// function search(arr, target) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (arr[0] === target) return 0;
//     else if (arr[n - 1] === target) return n - 1;
//     else {
//       //middle element
//       if (arr[i] === target) return i;
//     }
//   }
//   return -1;
// }

//optimised
function search(arr, target) {
  let n = arr.target;
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    //chk if target is mid
    if (arr[mid] === target) return mid;
    //identify sorted half
    //chk if left half is sorted
    if (arr[low] <= arr[mid]) {
      //chk if element lies in this half
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      if (arr[mid] <= target && target <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}
// Single element
console.log(search([5], 5)); // 0
console.log(search([5], 3)); // -1

// Not rotated (rotation index 0)
console.log(search([1, 2, 3, 4, 5], 4)); // 3
console.log(search([1, 2, 3, 4, 5], 1)); // 0
console.log(search([1, 2, 3, 4, 5], 6)); // -1

// Standard rotation
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1

// Target at boundaries
console.log(search([4, 5, 6, 7, 0, 1, 2], 4)); // 0
console.log(search([4, 5, 6, 7, 0, 1, 2], 2)); // 6

// Target at the pivot (max element / min element)
console.log(search([4, 5, 6, 7, 0, 1, 2], 7)); // 3
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4

// Two elements
console.log(search([3, 1], 1)); // 1
console.log(search([3, 1], 3)); // 0
console.log(search([1, 3], 3)); // 1
console.log(search([3, 1], 2)); // -1

// Rotated by one position (smallest element at the end)
console.log(search([2, 3, 4, 5, 6, 7, 1], 1)); // 6

// Rotated by n-1 positions (largest element at the start)
console.log(search([7, 1, 2, 3, 4, 5, 6], 7)); // 0

// Three elements
console.log(search([5, 1, 3], 5)); // 0
console.log(search([5, 1, 3], 3)); // 2

// Target out of range
console.log(search([4, 5, 6, 7, 0, 1, 2], 8)); // -1
console.log(search([4, 5, 6, 7, 0, 1, 2], -1)); // -1

// Negative numbers
console.log(search([-1, 0, 3, -10, -5], -5)); // 4
console.log(search([-1, 0, 3, -10, -5], -10)); // 3
