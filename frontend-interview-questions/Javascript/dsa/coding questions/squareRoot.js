//brute force

// function findSquareRoot(num) {
//   let square = 1,
//     result;
//   for (let i = 0; i <= num; i++) {
//     square = i * i;
//     if (square <= num) result = i;
//   }
//   return result;
// }

//optimised

// function findSquareRoot(num) {
//   let low = 1,
//     high = num;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (squareRoot(mid, num) <= num) low = mid + 1;
//     else high = mid - 1;
//   }
//   return high;
// }

// function squareRoot(mid, num) {
//   return mid * mid;
// }
// Basic cases
console.log(findSquareRoot(50)); // 7
console.log(findSquareRoot(10)); // 3
console.log(findSquareRoot(99)); // 9

// Zero and one
console.log(findSquareRoot(0)); // 0
console.log(findSquareRoot(1)); // 1

// Small numbers
console.log(findSquareRoot(2)); // 1
console.log(findSquareRoot(3)); // 1
console.log(findSquareRoot(4)); // 2
console.log(findSquareRoot(5)); // 2

// Perfect squares
console.log(findSquareRoot(9)); // 3
console.log(findSquareRoot(16)); // 4
console.log(findSquareRoot(49)); // 7
console.log(findSquareRoot(100)); // 10

// Just below a perfect square
console.log(findSquareRoot(8)); // 2
console.log(findSquareRoot(15)); // 3
console.log(findSquareRoot(24)); // 4
console.log(findSquareRoot(63)); // 7

// Just above a perfect square
console.log(findSquareRoot(17)); // 4
console.log(findSquareRoot(65)); // 8

// Large numbers
console.log(findSquareRoot(1000000000)); // 31622
console.log(findSquareRoot(2147395599)); // 46339
console.log(findSquareRoot(2147395600)); // 46340
console.log(findSquareRoot(2147483647)); // 46340

// Invalid input
console.log(findSquareRoot(-1)); // -1
console.log(findSquareRoot(-50)); // -1
