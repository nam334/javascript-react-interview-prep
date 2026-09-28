// //brute force
// function removeDuplicates(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j <= n - 1; j++) {
//       if (arr[i] === arr[j]) {
//         arr[j] = "#";
//       }
//     }
//   }
//   arr = arr.filter((el) => el !== "#");
//   return arr;
// }

// TC = O(N^2)
// SC = O(N)

//better solution

// function removeDuplicates(arr) {
//   let myMap = new Map(),
//     n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (!myMap.has(arr[i])) myMap.set(arr[i], i);
//   }
//   return [...myMap.keys()];
// }

// TC = O(N)
// SC = O(N)

//optimal solution

function removeDuplicates(arr) {
  if (arr.length === 0) return [];
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicates([2, 4, 4, 6, 8, 8, 10, 10, 10, 18, 18])); // [2, 4, 6, 8, 10, 18]
console.log(removeDuplicates([1, 1, 1, 1, 1])); // [1]
console.log(removeDuplicates([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 2, 2, 3, 3])); // [1, 2, 3]
console.log(removeDuplicates([5])); // [5]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([-3, -3, -1, -1, 0, 2, 2])); // [-3, -1, 0, 2]
console.log(removeDuplicates([0, 0, 0])); // [0]
