//brute force
// function findElement(arr, el) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) return i;
//   }
//   return -1;
// }

//optimal approach

function findElement(arr, el) {
  let low = 0,
    high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) return mid;
    //left sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= el && el <= arr[mid]) {
        //eliminate right
        high = mid - 1;
      } else low = mid + 1;
    } else {
      //right sorted
      if (arr[mid] <= el && el <= arr[high]) {
        //eliminate left
        low = mid + 1;
      } else high = mid - 1; //eliminate right
    }
  }
  return -1;
}

console.log(findElement([12, 14, 2, 4, 6, 8, 10], 12)); // 0
console.log(findElement([12, 14, 2, 4, 6, 8, 10], 2)); // 2
console.log(findElement([12, 14, 2, 4, 6, 8, 10], 10)); // 6
console.log(findElement([12, 14, 2, 4, 6, 8, 10], 7)); // -1

console.log(findElement([4, 6, 8, 10, 2], 2)); // 4
console.log(findElement([4, 6, 8, 10, 2], 4)); // 0

console.log(findElement([5], 5)); // 0
console.log(findElement([5], 3)); // -1
console.log(findElement([], 5)); // -1

console.log(findElement([6, 8, 10, 12, 2, 4], 12)); // 3
console.log(findElement([6, 8, 10, 12, 2, 4], 4)); // 5

console.log(findElement([-2, 0, 2, -10, -8, -6, -4], -8)); // 4
