//brute force
function longestSubarraySumK(arr, target) {
  let n = arr.length,
    maxLength = -Infinity;
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === target) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  if (maxLength !== -Infinity) return maxLength;
  else return 0;
}

console.log(longestSubarraySumK([10, 5, 2, 7, 1, 9], 15)); // 4

console.log(longestSubarraySumK([1, 2, 3, 4, 5], 15)); // 5 — whole array

console.log(longestSubarraySumK([2, 4, 10, 3], 10)); // 1 — single element

console.log(longestSubarraySumK([1, 2, 3], 10)); // 0 — no valid subarray

console.log(longestSubarraySumK([1, 2, 1, 1, 1, 3], 4)); // 3 — multiple valid subarrays

console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)); // 4 — negative numbers

console.log(longestSubarraySumK([1, -1, 2, -2, 3], 0)); // 4 — K = 0

console.log(longestSubarraySumK([5], 5)); // 1 — single element equals K

console.log(longestSubarraySumK([5], 3)); // 0 — single element doesn't match

console.log(longestSubarraySumK([], 5)); // 0 — empty array

console.log(longestSubarraySumK([0, 0, 0, 0], 0)); // 4 — all zeros
