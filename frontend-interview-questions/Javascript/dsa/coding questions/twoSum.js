// Given an array of integers and a target value, find two different elements whose sum is
//  equal to the target. Return their indices.
// function twoSum(arr,value){
//     let n = arr.length
//   for(let i = 0; i < n; i++){
//     for(let j = i+1; j < n; j++){
//      if(arr[i] + arr[j] === value){
//         return [i,j]
//      }
//   }
//   }
// }

// TC = O(n^2)
// SC = O(1)

function twoSum(arr, value) {
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    let diff = Math.abs(value - arr[i]);
    if (myMap.has(diff)) {
      let index = myMap.get(diff);
      return [index, i];
    }
    myMap.set(arr[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));
// [0, 1]

console.log(twoSum([3, 2, 4], 6));
// [1, 2]

console.log(twoSum([3, 3], 6));
// [0, 1]

console.log(twoSum([1, 5, 3, 7], 8));
// [0, 3]

console.log(twoSum([-3, 4, 3, 90], 0));
// [0, 2]

console.log(twoSum([0, 4, 3, 0], 0));
// [0, 3]

console.log(twoSum([10, 20, 30, 40], 50));
// [0, 3]

console.log(twoSum([1, 2], 3));
// [0, 1]
