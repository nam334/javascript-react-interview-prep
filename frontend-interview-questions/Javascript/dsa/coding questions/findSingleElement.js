// function findSingleElement(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       if (arr[i - 1] != arr[i] && arr[i] != arr[i + 1]) return arr[i];
//     }
//   }
// }

// TC = O(n);
// SC = O(1);

//optimised solution

function findSingleElement(arr) {
  let n = arr.length;
  if (n === 1) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];
  if (arr[0] != arr[1]) return arr[0];

  let low = 1,
    high = arr.length - 2;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) return arr[mid];
    if (
      (mid % 2 === 1 && arr[mid - 1] === arr[mid]) ||
      (mid % 2 === 0 && arr[mid] == arr[mid + 1])
    )
      low = mid + 1;
    else high = mid - 1;
  }
}
console.log(findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(findSingleElement([3, 3, 7, 7, 10, 11, 11])); // 10
console.log(findSingleElement([1])); // 1  (only one element)
console.log(findSingleElement([1, 2, 2])); // 1  (single at start)
console.log(findSingleElement([1, 1, 2])); // 2  (single at end)
console.log(findSingleElement([1, 1, 2, 2, 3, 3, 4, 5, 5])); // 4  (near the end)
console.log(findSingleElement([0, 1, 1, 2, 2])); // 0  (zero as answer)
console.log(findSingleElement([-5, -5, -3, 0, 0])); // -3 (negative numbers)
console.log(findSingleElement([7, 7, 8, 8, 9])); // 9  (last index)
console.log(findSingleElement([2, 2, 4, 4, 6, 8, 8])); // 6  (exact middle)
