function minEatingSpeed(piles, hr) {}

// Basic cases
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23

// Single pile
console.log(minEatingSpeed([1], 1)); // 1
console.log(minEatingSpeed([10], 3)); // 4
console.log(minEatingSpeed([5], 10)); // 1  (more hours than bananas, so the slowest speed works)

// h === piles.length: one hour per pile, so k must be max(piles)
console.log(minEatingSpeed([9, 8, 7], 3)); // 9
console.log(minEatingSpeed([3, 6, 7, 11], 4)); // 11

// All piles of equal size
console.log(minEatingSpeed([1, 1, 1, 1], 4)); // 1
console.log(minEatingSpeed([2, 2], 2)); // 2
console.log(minEatingSpeed([2, 2], 3)); // 2  (one spare hour can't be split across piles)
console.log(minEatingSpeed([2, 2], 4)); // 1

// Large values (checks the upper bound and that ceil is computed correctly)
console.log(minEatingSpeed([1000000000], 2)); // 500000000
console.log(minEatingSpeed([1000000000, 1000000000], 3)); // 1000000000
console.log(minEatingSpeed([312884470], 312884469)); // 2
console.log(minEatingSpeed([805306368, 805306368, 805306368], 1000000000)); // 3
