//brute force
function threeSum(arr) {
  let result = [];

  let myset = new Set();
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          result = [arr[i], arr[j], arr[k]];
          result.sort((a, b) => a - b);
          myset.add(result);
        }
      }
    }
  }
  return Array.from(myset);
}
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // []
// console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
// console.log(threeSum([])); // []
// console.log(threeSum([1, -1])); // []
// console.log(threeSum([-1, 0, 1])); // [[-1, 0, 1]]
// console.log(threeSum([1, 2, 3])); // []
// console.log(threeSum([1, 2, 3, 4])); // []
// console.log(threeSum([-5, -4, -3, -2])); // []
// console.log(threeSum([-2, 0, 0, 2, 2])); // [[-2, 0, 2]]
// console.log(threeSum([-2, -1, 0, 1, 2, 3])); // [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]
// console.log(threeSum([1, 2, -2, -1])); // []
// console.log(threeSum([-1, -1, -1, 2, 2, 2])); // [[-1, -1, 2]]
// console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
