// //brute force
// function singleNonDuplicate(arr) {
//   let n = arr.length;
//   if (n === 1) return arr[0];
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       //first element
//       if (arr[i] !== arr[i + 1]) return arr[i];
//     } else if (i === n - 1) {
//       //last element
//       if (arr[i] !== arr[i - 1]) return arr[i];
//     } else {
//       if (arr[i] !== arr[i + 1] && arr[i - 1] !== arr[i]) return arr[i];
//     }
//   }
// }

//optimal solution

function singleNonDuplicate(arr) {
  let n = arr.length;
  if (n === 1) return arr[0];
  if (arr[0] != arr[1]) return arr[0];
  if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
  let low = 1,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    //chk for mid
    if (arr[mid - 1] != arr[mid] && arr[mid] != arr[mid + 1]) return arr[mid];
    //chk for left half
    if (
      (mid % 2 !== 0 && arr[mid - 1] === arr[mid]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    )
      low = mid + 1;
    else high = mid - 1;
  }
}

// Time comp =O(logn)
// Space = O(1)
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])); // 10
console.log(singleNonDuplicate([1])); // 1   (only one element)
console.log(singleNonDuplicate([1, 2, 2])); // 1   (single element at the start)
console.log(singleNonDuplicate([1, 1, 2])); // 2   (single element at the end)
console.log(singleNonDuplicate([1, 1, 2, 2, 3])); // 3   (end, longer array)
console.log(singleNonDuplicate([0, 1, 1, 2, 2])); // 0   (start, with zero)
console.log(singleNonDuplicate([-3, -3, -1, 0, 0])); // -1  (negative numbers)
console.log(singleNonDuplicate([5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10])); // 7   (middle of a larger array)
