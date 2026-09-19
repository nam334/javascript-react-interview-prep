function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  let leftLength = left.length;
  if (leftLength > 0) {
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
  }
  let rightLength = right.length;
  if (rightLength > 0) {
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let arrayLength = arr.length;
  let mid = Math.floor(arrayLength / 2);
  let left = arr.slice(0, mid);
  left = mergeSort(left);
  let right = arr.slice(mid, arrayLength);
  right = mergeSort(right);
  return merge(left, right);
}

console.log(mergeSort([8, 3, 5, 1, 9, 2]));
// [1, 2, 3, 5, 8, 9]

console.log(mergeSort([4, -2, 4, 0, -7]));
// [-7, -2, 0, 4, 4]

console.log(mergeSort([]));
// []

// | Complexity  | Result         | Why                                                                                                                                         |
// | ----------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
// | Time        | **O(n log n)** | Splitting creates about `log n` levels. At each level, merging all elements takes a total of `O(n)` work.                                   |
// | Extra space | **O(n)**       | `slice()` creates subarrays, and `merge()` creates result arrays. Recursive calls also use `O(log n)` stack space, but the arrays dominate. |
