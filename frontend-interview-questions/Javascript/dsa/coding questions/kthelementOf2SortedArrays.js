// //brute force
// function kthElement(arr1, arr2, k) {
//   const res = [...arr1, ...arr2].sort((a, b) => a - b);
//   return res[k - 1];
// }

// Time comp = O((n+m)log(n+m))
// Space comp = O(n+m)

//better solution
// function kthElement(arr1, arr2, k) {
//   let p = 0,
//     q = 0,
//     n = arr1.length,
//     m = arr2.length,
//     res = [];
//   while (p < n && q < m) {
//     if (arr1[p] < arr2[q]) {
//       res.push(arr1[p]);
//       p++;
//     } else if (arr1[p] > arr2[q]) {
//       res.push(arr2[q]);
//       q++;
//     } else {
//       //both are equal
//       res?.push(arr1[p]);
//       res?.push(arr2[q]);
//       p++;
//       q++;
//     }
//   }
//   if (p < n) {
//     while (p < n) res.push(arr1[p++]);
//   }
//   if (q < m) {
//     while (q < m) res.push(arr2[q++]);
//   }

//   return res[k - 1];
// }

// Time comp = O(n+m)
// Space comp = O(n+m)

//optimised solution

function kthElement(arr1, arr2, k) {
  let p = 0,
    q = 0,
    count = 0,
    n = arr1.length,
    m = arr2.length;
  while (p < n && q < m) {
    if (arr1[p] <= arr2[q]) {
      if (count === k - 1) return arr1[p];
      count++;
      p++;
    } else {
      if (count === k - 1) return arr2[q];
      count++;
      q++;
    }
  }

  while (p < n) {
    if (count === k - 1) return arr1[p];
    count++;
    p++;
  }

  while (q < m) {
    if (count === k - 1) return arr2[q];
    count++;
    q++;
  }
}

// Time comp = O(k)
// Space comp = O(1)
// Basic
console.log(kthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 5)); // 6
console.log(
  kthElement([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7),
); // 256

// k at the boundaries
console.log(kthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 1)); // 1
console.log(kthElement([1, 3, 5], [2, 4, 6], 6)); // 6

// Single-element arrays
console.log(kthElement([1], [2], 1)); // 1
console.log(kthElement([1], [2], 2)); // 2

// One array empty
console.log(kthElement([], [5, 10, 15], 2)); // 10
console.log(kthElement([4, 8], [], 1)); // 4

// Arrays that don't overlap
console.log(kthElement([1, 2, 3], [10, 20, 30], 4)); // 10

// Very different lengths
console.log(kthElement([7], [1, 2, 3, 4, 5, 6], 4)); // 4

// Duplicates
console.log(kthElement([1, 1, 2], [1, 3], 3)); // 1

// Negative numbers
console.log(kthElement([-5, -2, 0], [-3, 4], 2)); // -3
