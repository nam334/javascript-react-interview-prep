function reverseArray(arr) {
  let i = 0,
    j = arr.length - 1;
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  return arr;
}

//TC = O(N)
//SC = O(1)
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray([10, 20, 30, 40])); // [40, 30, 20, 10]

console.log(reverseArray([5])); // [5]
console.log(reverseArray([])); // []

console.log(reverseArray([1, 2])); // [2, 1]
console.log(reverseArray([1, 1, 2, 2])); // [2, 2, 1, 1]

console.log(reverseArray([-5, -2, 0, 3, 8])); // [8, 3, 0, -2, -5]
console.log(reverseArray([0, 0, 0])); // [0, 0, 0]

console.log(reverseArray([1, -1, 2, -2])); // [-2, 2, -1, 1]
