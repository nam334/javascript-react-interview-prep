function aggressiveCows(arr, k) {
  if (k > arr.length) return -1;
  arr = arr.sort((a, b) => a - b);
  let low = 1,
    ans = -1,
    high = arr[arr.length - 1] - arr[0];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (calc(arr, mid, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      //mid not possible
      high = mid - 1;
    }
  }
  return ans;
}

function calc(arr, mid, k) {
  let count = 1,
    lastPos = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastPos >= mid) {
      count++;
      lastPos = arr[i];
    }
  }
  if (count >= k) return true;
  else return false;
}

console.log(aggressiveCows([0, 3, 4, 7, 10, 9], 4)); // 3          (unsorted input)
console.log(aggressiveCows([1, 2, 4, 8, 9], 3)); // 3          (classic example)
console.log(aggressiveCows([10, 1, 2, 7, 5], 2)); // 9          (2 cows go at the two ends: max - min)
console.log(aggressiveCows([1, 2, 8, 4, 9], 5)); // 1          (every stall used: smallest adjacent gap)
console.log(aggressiveCows([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // 3          (evenly spaced stalls: 1, 4, 7, 10)
console.log(aggressiveCows([0, 1000000000], 2)); // 1000000000 (large values, checks the search range)
console.log(aggressiveCows([1, 2], 3)); // -1         (more cows than stalls)
