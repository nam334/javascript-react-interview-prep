//brute force

// function aggressiveCowsBruteForce(arr, cows) {
//   arr = arr.sort((a, b) => a - b);
//   let min = arr[0],
//     max = arr[arr.length - 1];

//   for (let i = 1; i <= max - min; i++) {
//     if (canWePlace(arr, i, cows) === true) continue;
//     else return i - 1;
//   }
//   return max - min;
// }

// function canWePlace(arr, dist, cows) {
//   let cntCows = 1,
//     last = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - last >= dist) {
//       cntCows++;
//       last = arr[i];
//     }
//   }
//   if (cntCows >= cows) return true;
//   else return false;
// }

//optimised

function aggressiveCowsOptimised(arr, cows) {
  arr = arr.sort((a, b) => a - b);
  let low = 1,
    high = arr[arr.length - 1] - arr[0];

  while (low <= high) {
    let mid = Math.ceil((low + high) / 2);
    if (canWePlace(arr, mid, cows) === true) {
      low = mid + 1;
    } else high = mid - 1;
  }

  return high;
}

function canWePlace(arr, dist, cows) {
  let cntCows = 1,
    last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= dist) {
      cntCows++;
      last = arr[i];
    }
  }
  if (cntCows >= cows) return true;
  else return false;
}
// 1. Sample case
console.log(aggressiveCowsOptimised([1, 2, 8, 4, 9], 3)); // 3
console.log(aggressiveCowsOptimised([1, 2, 8, 4, 9], 3)); // 3

// 2. Only 2 cows
console.log(aggressiveCowsOptimised([1, 5, 9, 20], 2)); // 19
console.log(aggressiveCowsOptimised([1, 5, 9, 20], 2)); // 19

// 3. As many cows as stalls
console.log(aggressiveCowsOptimised([1, 3, 6, 10, 15], 5)); // 2
console.log(aggressiveCowsOptimised([1, 3, 6, 10, 15], 5)); // 2

// 4. Smallest input, huge distance
console.log(aggressiveCowsOptimised([0, 1000000000], 2)); // 1000000000
console.log(aggressiveCowsOptimised([0, 1000000000], 2)); // 1000000000

// 5. Unsorted input
console.log(aggressiveCowsOptimised([9, 1, 8, 2, 4], 3)); // 3
console.log(aggressiveCowsOptimised([9, 1, 8, 2, 4], 3)); // 3

// 6. Equally spaced stalls
console.log(aggressiveCowsOptimised([0, 10, 20, 30, 40, 50], 3)); // 20
console.log(aggressiveCowsOptimised([0, 10, 20, 30, 40, 50], 3)); // 20

// 7. Tight cluster plus one far stall
console.log(aggressiveCowsOptimised([1, 2, 3, 4, 5, 100], 3)); // 4
console.log(aggressiveCowsOptimised([1, 2, 3, 4, 5, 100], 3)); // 4

// 8. Consecutive positions
console.log(aggressiveCowsOptimised([1, 2, 3, 4, 5], 3)); // 2
