function searchInsert(arr, el) {
  if (!arr.length) return 0;
  let low,
    high,
    n = arr.length;
  if (el < arr[0]) return 0;
  else if (el > arr[n - 1]) return n;
  else {
    ((low = 0), (high = arr.length - 1));
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (arr[mid] < el) low = mid + 1;
      else high = mid - 1;
    }
  }
  return low;
}
//TC = O(log n), SC = O(1).
// TC = O(n);
// SC = O(1);
// Empty array
console.log(searchInsert([], 5)); // 0

// Single element
console.log(searchInsert([5], 5)); // 0
console.log(searchInsert([5], 3)); // 0
console.log(searchInsert([5], 7)); // 1

// K outside the range of the array
console.log(searchInsert([2, 4, 6], 1)); // 0
console.log(searchInsert([2, 4, 6], 9)); // 3

// K at the boundaries
console.log(searchInsert([2, 4, 6], 2)); // 0
console.log(searchInsert([2, 4, 6], 6)); // 2

// K present / absent in the middle
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 4)); // 2

// Duplicates (first occurrence)
console.log(searchInsert([1, 2, 2, 2, 3], 2)); // 1
console.log(searchInsert([1, 2, 2, 4, 4], 3)); // 3
console.log(searchInsert([1, 2, 2, 4, 4], 4)); // 3

// All elements equal
console.log(searchInsert([4, 4, 4, 4], 4)); // 0
console.log(searchInsert([4, 4, 4, 4], 5)); // 4
console.log(searchInsert([4, 4, 4, 4], 3)); // 0

// Negatives and zero
console.log(searchInsert([-10, -3, 0, 5], -5)); // 1
console.log(searchInsert([-10, -3, 0, 5], -3)); // 1
console.log(searchInsert([-2, 0, 0, 3], 0)); // 1

// Extreme values
console.log(searchInsert([-1e9, 0, 1e9], 1e9)); // 2
console.log(searchInsert([-1e9, 1e9 - 1], 1e9)); // 2
console.lo;
