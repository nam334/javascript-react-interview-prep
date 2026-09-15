//Insertion sort

function insertionSort(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}

console.log(insertionSort([7, 2, 5, 3]));
// 1. Empty array
console.log(insertionSort([]));
// []

// 2. Single element
console.log(insertionSort([5]));
// [5]

// 3. Already sorted
console.log(insertionSort([1, 2, 3, 4]));
// [1, 2, 3, 4]

// 4. Reverse sorted
console.log(insertionSort([4, 3, 2, 1]));
// [1, 2, 3, 4]

// 5. Duplicate elements
console.log(insertionSort([3, 2, 3, 1, 2]));
// [1, 2, 2, 3, 3]

// 6. Negative numbers
console.log(insertionSort([-2, -5, 3, 0, -1]));
// [-5, -2, -1, 0, 3]

// 7. All elements equal
console.log(insertionSort([4, 4, 4, 4]));
// [4, 4, 4, 4]

// 8. Invalid input
console.log(insertionSort("hello"));
// Error: Input must be an array

// Best case time complexity - O(n)
// Worst case time complexity - O(n^2)
// Space complexity - O(1)
