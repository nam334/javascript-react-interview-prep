// //brute force
// function twoSum(arr, target) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] + arr[j] === target) return [i + 1, j + 1];
//     }
//   }
// }

//better solution
function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) return [i + 1, j + 1];
    else if (arr[i] + arr[j] > target) j--;
    else {
      //target is less
      i++;
    }
  }
}

// Basic test cases
console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]

// Minimum array length
console.log(twoSum([1, 2], 3)); // [1, 2]

// Negative numbers
console.log(twoSum([-5, -3, -1, 2, 4], -4)); // [2, 3]
console.log(twoSum([-10, -5, 0, 3, 7], -3)); // [2, 4]

// Negative and positive numbers
console.log(twoSum([-3, -1, 0, 2, 5], 2)); // [1, 5]

// Duplicate elements
console.log(twoSum([1, 1, 3, 5], 2)); // [1, 2]
console.log(twoSum([0, 0, 3, 4], 0)); // [1, 2]

// Same value at different indices
console.log(twoSum([2, 2, 3, 4], 4)); // [1, 2]

// Two elements far apart
console.log(twoSum([1, 2, 3, 4, 8], 9)); // [1, 5]

// Larger numbers
console.log(twoSum([100, 200, 300, 400], 700)); // [3, 4]
