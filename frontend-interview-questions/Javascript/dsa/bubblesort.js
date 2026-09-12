// Bubble sort - Comparison of adjacent elements

const arr = [5, 3, 8, 2];
function bubbleSort(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (swapped === false) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
//[1, 2, 3, 4]
//Worst case - reverse-sorted array.- Time Complexity - O(n^2)
//Best case - already sorted array - Time Complexity - O(n)
//Space complexity - O(1)
