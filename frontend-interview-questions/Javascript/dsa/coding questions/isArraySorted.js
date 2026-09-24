//brute force solution
function isSortedBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) return false;
    }
  }
  return true;
}

// TC - O(N^2)
// SC - O(1)

//optimised solution
function isSortedOptimised(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// TC - O(N)
// SC - O(1)
console.log(isSortedBruteForce([1, 2, 3, 4]));
console.log(isSortedOptimised([1, 2, 3, 4]));
