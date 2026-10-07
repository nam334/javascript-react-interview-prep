// //brute force
// function majorityElement(arr) {
//   let n = arr.length,
//     count = 0;
//   const halfLength = Math.floor(n / 2);
//   for (let i = 0; i < n; i++) {
//     count = 1;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > halfLength) return arr[i];
//   }
//   return -1;
// }
// TC - O(n^2)
// SC - O(1)

//better
// function majorityElement(arr) {
//   let myMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (myMap.has(arr[i])) {
//       let value = myMap.get(arr[i]);
//       myMap.set(arr[i], value + 1);
//     } else myMap.set(arr[i], 1);
//   }
//   const halfCount = arr.length / 2;
//   for (let [key, value] of myMap) {
//     if (value > halfCount) return key;
//   }
//   return -1;
// }
// TC - O(2N)
// SC - O(N)

//optimal
//Boyer–Moore Voting Algorithm
function majorityElement(arr) {
  let count = 0,
    j = 0,
    el,
    halfCount;
  halfCount = arr.length / 2;
  while (j < arr.length) {
    if (count === 0) {
      el = arr[j];
      count = 1;
    } else if (el === arr[j]) {
      count++;
    } else count--;
    j++;
  }
  let cn1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) cn1++;
  }
  if (cn1 > halfCount) return el;
  else return -1;
}

// TC - O(2N) ~ O(N)
// SC - O(1)
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // 3

console.log(majorityElement([1, 2, 3, 4])); // -1

console.log(majorityElement([5, 5, 5, 5, 2, 3, 5])); // 5

console.log(majorityElement([7])); // 7

console.log(majorityElement([1, 1])); // 1

console.log(majorityElement([1, 2])); // -1

console.log(majorityElement([0, 0, 0, 1, 2])); // 0

console.log(majorityElement([-1, -1, -1, 2, 3])); // -1

console.log(majorityElement([4, 4, 2, 4, 3, 4, 4, 1, 4])); // 4
