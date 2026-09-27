function findMissingNumber(arr) {
  //Brute force
  if (!arr.length) return 0;
  for (let i = 0; i <= arr.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) return;
  }
}

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
// console.log(findMissingNumber([1, 2, 3])); // 0 — missing zero
// console.log(findMissingNumber([0, 1, 2])); // 3 — missing largest
// console.log(findMissingNumber([0, 1, 3, 4])); // 2 — missing middle
// console.log(findMissingNumber([0])); // 1 — single element
// console.log(findMissingNumber([1])); // 0 — single element
// console.log(findMissingNumber([3, 0, 1])); // 2 — unsorted
// console.log(findMissingNumber([])); // 0 — empty array, if allowed
