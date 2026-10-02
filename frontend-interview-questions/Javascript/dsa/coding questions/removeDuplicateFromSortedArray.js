//brute force

// function removeDuplicates(arr) {
//   if (!arr.length) return [];
//   let n = arr.length,
//     result = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] === arr[j]) arr[j] = "#";
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (arr[i] != "#") result.push(arr[i]);
//   }
//   return result;
// }

// TC - O(n^2)
// SC - O(n)

//optimal
// function removeDuplicates(arr) {
//   let i = 0,
//     j = 1,
//     n = arr.length;
//   while (j < n) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//     j++;
//   }
//   arr.length = i + 1;
//   return arr;
// }

// TC -O(n)
// SC - O(1)
console.log(removeDuplicates([2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18]));
// [2, 4, 6, 8, 10, 18]

console.log(removeDuplicates([1, 1, 1, 1]));
// [1]

console.log(removeDuplicates([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
// [1, 2, 3]

console.log(removeDuplicates([5]));
// [5]

console.log(removeDuplicates([]));
// []

console.log(removeDuplicates([-3, -3, -1, -1, 0, 0, 2]));
// [-3, -1, 0, 2]

console.log(removeDuplicates([0, 0, 0, 1, 2, 2, 2, 3]));
// [0, 1, 2, 3]
