function search(arr, el) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) return true;
    if (arr[mid] === arr[low] && arr[mid] === arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }
    //find sorted half
    if (arr[low] < arr[mid]) {
      //left is sorted
      if (arr[low] <= el && el <= arr[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      //right is sorted
      if (arr[mid] <= el && el <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return false;
}

// Basic cases
console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // true  (no duplicates)

// Not rotated (pivot at index 0)
console.log(search([1, 2, 3, 4, 5], 4)); // true
console.log(search([1, 2, 3, 4, 5], 6)); // false

// Single element
console.log(search([1], 1)); // true
console.log(search([1], 0)); // false

// Two elements
console.log(search([3, 1], 1)); // true
console.log(search([1, 3], 3)); // true
console.log(search([3, 1], 2)); // false

// All duplicates
console.log(search([1, 1, 1, 1, 1], 1)); // true
console.log(search([1, 1, 1, 1, 1], 2)); // false

// Ambiguous case: left, mid and right are all equal
console.log(search([1, 0, 1, 1, 1], 0)); // true
console.log(search([1, 1, 1, 0, 1], 0)); // true
console.log(search([1, 3, 1, 1, 1], 3)); // true
console.log(search([1, 1, 1, 3, 1], 3)); // true
console.log(search([2, 2, 2, 3, 2, 2, 2], 3)); // true

// Target at the boundaries
console.log(search([4, 5, 6, 7, 0, 1, 2], 4)); // true  (first element)
console.log(search([4, 5, 6, 7, 0, 1, 2], 2)); // true  (last element)
console.log(search([1, 1, 2, 0, 0], 0)); // true

// Negative numbers
console.log(search([-3, -1, -1, 0, 2, -5], -5)); // true
console.log(search([-3, -1, -1, 0, 2, -5], -2)); // false

// Empty array (outside constraints, but good to handle)
console.log(search([], 5)); // false
