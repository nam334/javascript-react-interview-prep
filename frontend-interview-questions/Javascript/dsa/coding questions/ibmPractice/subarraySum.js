function subarraySum(arr, k) {
  let myMap = new Map(),
    sum = 0,
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    //if (arr[i] === k) count++;
    sum += arr[i];
    myMap.set(sum, i);
    if (sum === k) count++;
    if (myMap.has(sum - k)) count++;
  }
  return count;
}

// console.log(subarraySum([1, 1, 1], 2)); // 2
// console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1, -1, 0], 0)); // 3
// console.log(subarraySum([0, 0, 0], 0)); // 6
// console.log(subarraySum([1, 2, 3], 10)); // 0
// console.log(subarraySum([-1, -1, 1], 0)); // 1
// console.log(subarraySum([5], 5)); // 1
// console.log(subarraySum([], 5)); // 0
// console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4
