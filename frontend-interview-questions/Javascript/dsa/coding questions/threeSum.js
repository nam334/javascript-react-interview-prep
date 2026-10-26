//brute force
// function threeSum(arr) {
//   let result = [];

//   let myset = new Set();
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           const triplets = [arr[i], arr[j], arr[k]];
//           triplets.sort((a, b) => a - b);
//           const key = triplets.join(",");
//           if (!myset.has(key)) {
//             myset.add(key);
//             result.push(triplets);

//           }
//         }
//       }
//     }
//   }
//   return result;
// }

//optimal
function threeSum(arr) {
  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) twoSum(arr, i, ans);
  }
  return ans;
}

function twoSum(arr, x, ans) {
  let i = x + 1,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j] + arr[x];
    if (sum > 0) j--;
    else if (sum < 0) i++;
    else {
      //if we reach target
      let triplets = [arr[x], arr[i], arr[j]];
      ans.push(triplets);
      (i++, j--);
      while (i < j && arr[i] == arr[i - 1]) i++;
    }
  }
}

// TC -
// SC -
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([])); // []
console.log(threeSum([1, -1])); // []
console.log(threeSum([-1, 0, 1])); // [[-1, 0, 1]]
console.log(threeSum([1, 2, 3])); // []
console.log(threeSum([1, 2, 3, 4])); // []
console.log(threeSum([-5, -4, -3, -2])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); // [[-2, 0, 2]]
console.log(threeSum([-2, -1, 0, 1, 2, 3])); // [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]
console.log(threeSum([1, 2, -2, -1])); // []
console.log(threeSum([-1, -1, -1, 2, 2, 2])); // [[-1, -1, 2]]
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
