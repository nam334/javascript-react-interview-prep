// function searchRange(range, date) {
//   let min = -1,
//     max = -1;
//   for (let i = 0; i < range.length; i++) {
//     if (range[i] === date) {
//       if (min === -1) min = i;

//       max = i;
//     }
//   }

//   return [min, max];
// }

//optimised approach

function searchRange(arr, el) {
  let n = arr.length;
  firstOccurence(arr, n, el);
  let first = firstOccurence(arr, n, el);
  if (first === -1) return [-1, -1];
  let last = lastOccurence(arr, n, el);
  return [first, last];
}

function firstOccurence(arr, n, el) {
  let low = 0,
    high = n - 1,
    first = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < el) low = mid + 1;
    else high = mid - 1;
  }
  return first;
}

function lastOccurence(arr, n, el) {
  let low = 0,
    high = n - 1,
    last = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < el) low = mid + 1;
    else high = mid - 1;
  }
  return last;
}

// Time comp = O(logn) + O(logn)
// Space comp = O(1)
// Basic examples
console.log(searchRange([2, 4, 4, 4, 9, 12, 12, 30], 4)); // [1, 3]
console.log(searchRange([2, 4, 4, 4, 9, 12, 12, 30], 12)); // [5, 6]
console.log(searchRange([2, 4, 4, 4, 9, 12, 12, 30], 10)); // [-1, -1]

// Empty array
console.log(searchRange([], 5)); // [-1, -1]

// Single element
console.log(searchRange([5], 5)); // [0, 0]
console.log(searchRange([5], 3)); // [-1, -1]

// Every element is the target
console.log(searchRange([7, 7, 7, 7, 7], 7)); // [0, 4]

// All duplicates, target missing
console.log(searchRange([7, 7, 7, 7, 7], 8)); // [-1, -1]

// Target appears exactly once
console.log(searchRange([1, 2, 3, 4, 5], 3)); // [2, 2]

// Run starts at index 0
console.log(searchRange([3, 3, 3, 6, 8], 3)); // [0, 2]

// Run ends at the last index
console.log(searchRange([1, 4, 9, 9, 9], 9)); // [2, 4]

// Target is only the first element
console.log(searchRange([1, 2, 2], 1)); // [0, 0]

// Target falls between two elements
console.log(searchRange([2, 4, 6, 8], 5)); // [-1, -1]

// Target smaller than every element
console.log(searchRange([2, 4, 6, 8], 0)); // [-1, -1]

// Target larger than every element
console.log(searchRange([2, 4, 6, 8], 99)); // [-1, -1]

// Negative numbers and zero
console.log(searchRange([-8, -8, -3, 0, 0, 0, 4], 0)); // [3, 5]
console.log(searchRange([-8, -8, -3, 0, 0, 0, 4], -8)); // [0, 1]

// Values at constraint limits
console.log(searchRange([-1e9, -1e9, 1e9, 1e9], 1e9)); // [2, 3]
console.log(searchRange([-1e9, -1e9, 1e9, 1e9], -1e9)); // [0, 1]

// Large input (linear expansion from one match would be O(n))
console.log(searchRange(new Array(100000).fill(1), 1)); // [0, 99999]
