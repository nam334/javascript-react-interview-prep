function moveZeros(arr) {
  let x = 0,
    i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[x] = arr[i];
      x++;
    }
  }

  for (let p = x; p < arr.length; p++) {
    arr[p] = 0;
  }
  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeros([1, 0, 2, 0, 0, 5]));
// [1, 2, 5, 0, 0, 0]

console.log(moveZeros([1, 2, 3]));
// [1, 2, 3] — no zeros

console.log(moveZeros([0, 0, 0]));
// [0, 0, 0] — all zeros

console.log(moveZeros([0, 1]));
// [1, 0] — zero at beginning

console.log(moveZeros([1, 0]));
// [1, 0] — zero already at end

console.log(moveZeros([0]));
// [0] — single zero

console.log(moveZeros([5]));
// [5] — single non-zero element

console.log(moveZeros([]));
// [] — empty array

console.log(moveZeros([0, -1, 0, -5, 3]));
// [-1, -5, 3, 0, 0] — includes negative numbers
