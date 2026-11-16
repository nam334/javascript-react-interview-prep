//brute force solution
// function findMedianSortedArrays(arr1, arr2) {
//   const res = [...arr1, ...arr2];
//   res.sort((a, b) => a - b); //O(nlogn)
//   let count = res.length;
//   let val = Math.floor(count / 2);
//   if (count % 2 === 0) {
//     //count is even
//     return (res[val - 1] + res[val]) / 2;
//   } else {
//     //count is odd
//     return res[val];
//   }
// }

// // Time comp = O(nlogN)
// // Space comp = O(n)

//optimal solution

// function findMedianSortedArrays(a, b) {
//   let n1 = a.length,
//     n2 = b.length;
//   if (n1 > n2) return findMedianSortedArrays(b, a);
//   let low = 0,
//     high = n1,
//     left = Math.floor((n1 + n2 + 1) / 2),
//     n = n1 + n2;

//   while (low <= high) {
//     let mid1 = Math.floor((low + high) / 2),
//       mid2 = left - mid1;
//     let l1 = -Infinity,
//       l2 = -Infinity,
//       r1 = Infinity,
//       r2 = Infinity;
//     if (mid1 < n1) r1 = a[mid1];
//     if (mid2 < n2) r2 = b[mid2];
//     if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
//     if (mid2 - 1 >= 0) l2 = b[mid2 - 1];
//     if (l1 <= r2 && l2 <= r1) {
//       if (n % 2 === 1) return Math.max(l1, l2);
//       return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
//     } else if (l1 > l2) high = mid1 - 1;
//     else low = mid1 + 1;
//   }
// }

// Time comp = O(log(min(n,m)))
// Space comp = O(1)
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([2], [])); // 2
console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6])); // 3.5
console.log(findMedianSortedArrays([1, 2, 3], [4, 5, 6, 7])); // 4
console.log(findMedianSortedArrays([-5, -3, -1], [-2, 0, 2])); // -1.5
console.log(findMedianSortedArrays([1, 1, 1], [1, 1, 1])); // 1
console.log(findMedianSortedArrays([1, 2], [-1, 3])); // 1.5
console.log(findMedianSortedArrays([100], [1, 2, 3, 4])); // 3
console.log(findMedianSortedArrays([1, 5, 9, 13], [2, 3])); // 4
