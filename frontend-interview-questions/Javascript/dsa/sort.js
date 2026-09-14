// // Bubble sort - Comparison of adjacent elements

// // const arr = [5, 3, 8, 2];
// // function bubbleSort(arr) {
// //   if (!Array.isArray(arr)) throw new Error("Input must be an array");
// //   for (let i = 0; i < arr.length; i++) {
// //     let swapped = false;
// //     for (let j = 0; j < arr.length - 1 - i; j++) {
// //       if (arr[j] > arr[j + 1]) {
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //         swapped = true;
// //       }
// //     }

// //     if (swapped === false) {
// //       break;
// //     }
// //   }
// //   return arr;
// // }

// // console.log(bubbleSort(arr));
// //[1, 2, 3, 4]
// //Worst case - reverse-sorted array.- Time Complexity - O(n^2)
// //Best case - already sorted array - Time Complexity - O(n)
// //Space complexity - O(1)

// //Selection sort

// const arr = [7, 2, 5, 3];
// //   0  1  2  3
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort(arr));

// Best Case
// Sorted array - O(n^2)

// Worst Case
// Reverse Sorted Array - O(n^2)
