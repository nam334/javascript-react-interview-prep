// //brute force
// function minEatingSpeed(piles, h) {
//   // Your implementation
//   let maxEl = Math.max(...piles),
//     minCount = 0;
//   for (let i = 1; i <= maxEl; i++) {
//     minCount = 0;
//     for (let j = 0; j < piles.length; j++) {
//       minCount = calculateBanana(piles[j], i, minCount);
//     }
//     if (minCount <= h) return i;
//   }
// }
// Time com = O(n^2)
// Space com = O(1)

//optimised solution
// function minEatingSpeed(piles, h) {
//   let low = 1,
//     ans = 0,
//     minCount = 0,
//     high = Math.max(...piles);
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     minCount = 0;
//     //calculate at mid
//     for (let j = 0; j < piles.length; j++) {
//       minCount = calculateBanana(piles[j], mid, minCount);
//     }
//     if (minCount <= h) {
//       high = mid - 1;
//     } else low = mid + 1;
//     //ans = Math.min(ans, mid);
//   }
//   return low;
// }
// function calculateBanana(el, bananaPerHr, minCount) {
//   minCount += Math.ceil(el / bananaPerHr);
//   //   console.log("minCount is", minCount, "for", el);
//   return minCount;
// }

// TC = O(nlogm)
// SC = O(1)
// n = number of piles
// m = maximum no of bananas in every pile
// console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
