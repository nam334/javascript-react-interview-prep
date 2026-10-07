//brute force
// function maxSubarraySum(arr) {
//   let sum = 0,
//     maxSum = -Infinity,
//     n = arr.length;
//   for (let i = 0; i < n; i++) {
//     sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       maxSum = Math.max(sum, maxSum);
//     }
//   }
//   return maxSum;
// }

// TC -O(n^2)
// SC - O(1)

// //Optimal
// function maxSubarraySum(arr) {
//   let sum = 0,
//     n = arr.length,
//     j = 0,
//     maxSum = -Infinity;
//   while (j < n) {
//     sum += arr[j];
//     maxSum = Math.max(maxSum, sum);
//     if (sum < 0) sum = 0;
//     j++;
//   }
//   return maxSum;
// }

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

console.log(maxSubarraySum([1, 2, 3, 4, 5])); // 15

console.log(maxSubarraySum([-1, -2, -3, -4])); // -1

console.log(maxSubarraySum([5])); // 5

console.log(maxSubarraySum([5, -2, 3, 4])); // 10

console.log(maxSubarraySum([-5, 4, -1, 7, -8, 2])); // 10

console.log(maxSubarraySum([0, 0, 0, 0])); // 0

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 7

console.log(maxSubarraySum([10, -20, 30, 40, -5])); // 70

console.log(maxSubarraySum([-10, 20, -5, 30, -40, 50])); // 55
