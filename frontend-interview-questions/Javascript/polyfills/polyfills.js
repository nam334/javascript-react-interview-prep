//  myMap, myForEach, myFind, myFilter, myEvery, mySome, myReduce
//  myFlat, myPush, myPop, myShift, myUnshift
// [include the edge cases]

// Map method returns a new array which contains the results of the function
// called on each element of the array

const arr = [2, 4, 6, 8, 10];

//Polyfill of map

Array.prototype.myMap = function (cb) {
  console.log("this is", this, "cb is", cb);
  const newarr = [];
  for (let i = 0; i < this.length; i++) {
    newarr.push(cb(this[i], i, this));
  }
  return newarr;
};

console.log(arr.myMap((el) => el + 1));
