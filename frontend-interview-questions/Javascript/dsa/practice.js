//insertion sort
// const arr = [3, 5, 4, 1];
// //curr - 3
// //j = i - 1
// function insertionSort(arr) {
//   if (!Array.isArray(arr)) throw new Error("Input must be an array");
//   for (let i = 1; i < arr.length; i++) {
//     let currentElement = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > currentElement) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = currentElement;
//   }
//   return arr;
// }

// console.log(insertionSort(arr));

//quicksort

//const arr = [3, 5, 4, 1];
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let arrayLength = arr.length;
  let pivotElement = arr[arrayLength - 1];
  let smallerElArray = [],
    largerElArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) smallerElArray.push(arr[i]);
    else largerElArray.push(arr[i]);
  }
  smallerElArray = quickSort(smallerElArray);
  largerElArray = quickSort(largerElArray);
  return [...smallerElArray, pivotElement, ...largerElArray];
}
