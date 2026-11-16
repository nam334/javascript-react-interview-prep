//brute force

function shipWithinDays(weight, days) {
  //calculate max , sum
  let max = Math.max(...weight),
    daysReqd,
    sum = 0;
  //calculate sum
  for (let i = 0; i < weight.length; i++) {
    sum += weight[i];
  }
  for (let cap = max; cap <= sum; cap++) {
    daysReqd = loadCal(weight, cap);
    if (daysReqd <= days) {
      return cap;
    }
  }
}

function loadCal(weight, cap) {
  let day = 1,
    load = 0;
  for (let i = 0; i < weight.length; i++) {
    if (load + weight[i] > cap) {
      day += 1;
      load = weight[i];
    } else load += weight[i];
  }
  return day;
}

// Basic cases
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // 6
console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); // 3

// Single package
console.log(shipWithinDays([5], 1)); // 5

// days === number of packages → answer is max(weights)
console.log(shipWithinDays([1, 2, 3], 3)); // 3

// days > number of packages → still max(weights), can't go lower
console.log(shipWithinDays([1, 2, 3], 10)); // 3

// days = 1 → everything ships together, answer is sum(weights)
console.log(shipWithinDays([1, 2, 3], 1)); // 6

// All weights equal
console.log(shipWithinDays([5, 5, 5, 5], 2)); // 10

// One very heavy package at the end → answer is the heavy one
console.log(shipWithinDays([1, 1, 1, 100], 2)); // 100

// Heavy package at the start → order matters, still 100
console.log(shipWithinDays([100, 1, 1, 1], 2)); // 100

// All weights are 1
console.log(shipWithinDays([1, 1, 1, 1, 1, 1], 3)); // 2

// Larger values
console.log(shipWithinDays([500, 500, 500], 2)); // 1000

// Answer lands exactly on a day boundary (cap 159 needs 6 days, 160 needs 5)
console.log(shipWithinDays([10, 50, 100, 100, 50, 100, 100, 100], 5)); // 160
