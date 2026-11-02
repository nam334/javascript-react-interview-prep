function findMin(arr) {
  let low = 0,
    high = arr.length - 1,
    ans = Infinity;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      //left is sorted - eliminate left
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      //right is sorted - eliminate right
      ans = Math.min(arr[mid], ans);
      high = mid - 1;
    }
  }
  return ans;
}

// Time comp - O(logn)
// Space comp - O(1)
// Standard rotations
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0

// Not rotated (rotated n times) – already sorted
console.log(findMin([11, 13, 15, 17])); // 11
console.log(findMin([1, 2, 3, 4, 5])); // 1

// Single element
console.log(findMin([1])); // 1
console.log(findMin([-7])); // -7

// Two elements
console.log(findMin([2, 1])); // 1
console.log(findMin([1, 2])); // 1

// Three elements – every rotation
console.log(findMin([1, 2, 3])); // 1
console.log(findMin([3, 1, 2])); // 1
console.log(findMin([2, 3, 1])); // 1

// Minimum at the last index
console.log(findMin([2, 3, 4, 5, 1])); // 1

// Minimum at index 1 (rotated once)
console.log(findMin([5, 1, 2, 3, 4])); // 1

// Pivot exactly at the middle
console.log(findMin([4, 5, 6, 1, 2, 3])); // 1

// Negative numbers
console.log(findMin([0, 3, -5, -2])); // -5
console.log(findMin([-1, 0, 2, -10, -8])); // -10

// Boundary values from constraints
console.log(findMin([5000, -5000, 0])); // -5000
console.log(findMin([-5000, 0, 5000])); // -5000

// Larger array
console.log(findMin([6, 7, 8, 9, 10, 1, 2, 3, 4, 5])); // 1
