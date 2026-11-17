// //brute force
// function threeSum(arr) {
//   arr.sort((a, b) => a - b);
//   let n = arr.length,
//     res = [];
//   let myset = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           const key = `${arr[i]},${arr[j]},${arr[k]}`;
//           if (!myset.has(key)) {
//             myset.add(key);
//             res.push([arr[i], arr[j], arr[k]]);
//           }
//           //res.push([arr[i], arr[j], arr[k]]);
//         }
//       }
//     }
//   }
//   return res;
// }

// // Time comp = O(n^3)
// // Space comp = O(n)

//better solution

function threeSum(arr) {
  let n = arr.length,
    res = [];
  let chkset = new Set();
  for (let i = 0; i < n; i++) {
    const myset = new Set();
    for (let j = i + 1; j < n; j++) {
      let k = 0 - (arr[i] + arr[j]);
      if (myset.has(k)) {
        let ans = [arr[i], arr[j], k];
        ans.sort((a, b) => a - b);
        let key = `${ans}`;
        if (!chkset.has(key)) res.push(ans);
        chkset.add(key);
      }
      myset.add(arr[j]);
    }
  }
  return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]
console.log(threeSum([])); // []
console.log(threeSum([1, 2])); // []
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([3, -2, 1, 0])); // []
console.log(threeSum([1, 2, -2, -1])); // []
console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6])); // [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
