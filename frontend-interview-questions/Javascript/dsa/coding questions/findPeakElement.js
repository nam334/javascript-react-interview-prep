function findPeakElement(arr) {
  let n = arr.length;
  if (n < 3) return -1;
  let low = 1,
    high = n - 2;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    //chk if mid is peak
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid] > arr[mid - 1]) {
      //eliminate left
      low = mid + 1;
    } else high = mid - 1;
  }

  return -1;
}

console.log(findPeakElement([0, 1, 0])); // 1
console.log(findPeakElement([0, 2, 4, 6, 5, 3])); // 3
console.log(findPeakElement([24, 69, 100, 99, 79, 78, 67, 36, 26, 19])); // 2
console.log(findPeakElement([1, 9, 7, 5, 3])); // 1
console.log(findPeakElement([1, 3, 5, 7, 2])); // 3
console.log(findPeakElement([3, 5, 9, 8])); // 2
console.log(findPeakElement([1, 3, 5, 3, 1])); // 2
console.log(findPeakElement([-10, -5, -1, -4, -8])); // 2
console.log(findPeakElement([-3, 0, 4, -2])); // 2
console.log(findPeakElement([-1000000, 1000000, -1000000])); // 1
console.log(
  findPeakElement([...Array.from({ length: 99999 }, (_, i) => i + 1), 0]),
); // 99998
console.log(
  findPeakElement([0, ...Array.from({ length: 99999 }, (_, i) => 100000 - i)]),
); // 1

console.log(findPeakElement([1, 2])); // -1
console.log(findPeakElement([1, 2, 2, 1])); // -1
console.log(findPeakElement([1, 2, 3, 4])); // -1
console.log(findPeakElement([4, 3, 2, 1])); // -1
