function allocateBooks(arr, m) {
  if (m > arr.length) return -1;
  let low = Math.max(...arr),
    high = 0;
  for (let i = 0; i < arr.length; i++) {
    high += arr[i];
  }
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let noOfStudent = calc(arr, mid);
    if (noOfStudent > m) low = mid + 1;
    else high = mid - 1;
  }
  return low;
}

function calc(arr, pages) {
  let stu = 1,
    pagesStudent = 0;
  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      stu++;
      pagesStudent = arr[i];
    }
  }
  return stu;
}

console.log(allocateBooks([12, 34, 67, 90], 2)); // 113
console.log(allocateBooks([25, 46, 28, 49, 24], 4)); // 71
console.log(allocateBooks([15, 17, 20], 2)); // 32
console.log(allocateBooks([10, 20, 30, 40], 2)); // 60
console.log(allocateBooks([10, 20, 30, 40], 1)); // 100  (one student takes all)
console.log(allocateBooks([10, 20, 30], 3)); // 30   (one book each)
console.log(allocateBooks([5, 5, 5, 5], 2)); // 10   (equal pages)
console.log(allocateBooks([10, 5, 30, 1, 2, 5, 10, 10], 3)); // 30   (the largest book sets the floor)
console.log(allocateBooks([100], 1)); // 100  (single book)
console.log(allocateBooks([5, 10], 3)); // -1   (more students than books)
