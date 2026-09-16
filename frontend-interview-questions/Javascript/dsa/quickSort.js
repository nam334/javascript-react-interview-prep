// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let arrayLength = arr.length;
//   let pivotElement = arr[arrayLength - 1];
//   let smallerElArray = [],
//     largerElArray = [];
//   for (let i = 0; i < arrayLength - 1; i++) {
//     if (arr[i] < pivotElement) smallerElArray.push(arr[i]);
//     else largerElArray.push(arr[i]);
//   }
//   smallerElArray = quickSort(smallerElArray);
//   largerElArray = quickSort(largerElArray);
//   return [...smallerElArray, pivotElement, ...largerElArray];
// }

// console.log(quickSort([5, 2, 7, 1, 4])); // [1, 2, 4, 5, 7]
// console.log(quickSort([3, 1, 3, 2])); // [1, 2, 3, 3]
// console.log(quickSort([])); // []

// | Case           |           Time | Why                                                                                                       |
// | -------------- | -------------: | --------------------------------------------------------------------------------------------------------- |
// | Best / average | **O(n log n)** | Reasonably balanced partitions give about `log n` levels, with `O(n)` partitioning work per level.        |
// | Worst          |      **O(n²)** | If the last element is repeatedly the smallest or largest, one side is almost the entire array each time. |

// Space complexity - O(n)
