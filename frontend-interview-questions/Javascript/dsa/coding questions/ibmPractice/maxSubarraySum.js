// function maxSubArray(arr) {
//   let sum = 0,
//     maxsum = -Infinity,
//     q = 0;
//   while (q < arr.length) {
//     sum += arr[q];
//     if (sum < 0) sum = 0;
//     maxsum = Math.max(maxsum, sum);
//     q++;
//   }
//   return maxsum;
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([1])); // 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
// console.log(maxSubArray([-2, -3, -1, -5])); // -1
// console.log(maxSubArray([0, 0, 0])); // 0
// console.log(maxSubArray([5, -2, 3, 4])); // 10

// function mergeIntervals(intervals) {
//   if (intervals.length === 0) return [];

//   intervals.sort((a, b) => a[0] - b[0]);

//   const result = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     const current = intervals[i];
//     const last = result[result.length - 1];

//     if (current[0] <= last[1]) {
//       last[1] = Math.max(last[1], current[1]);
//     } else {
//       result.push(current);
//     }
//   }

//   return result;
// }

let a = 10;

function outer() {
  let a = 20;

  if (true) {
    let b = 30;
    let a = 40;
  }

  console.log(a);
  console.log(b);
}

outer();
console.log(a);
