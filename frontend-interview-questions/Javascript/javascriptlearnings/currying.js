// using bind method
// let multiply = function (x, y) {
//   console.log(x * y);
// };

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// using closures;
// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// multiply(2)(5);

// 1. sum(1)(2)

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(1)(2));

// 2. sum(1)(2)(3)(4)(5)()

function sum(args, result = 0) {
  //   console.log(typeof args, result, !args);
  //below chk added bcoz the first arg was not getting added
  if (result === 0) result += args;
  return function (arg) {
    if (typeof arg === "undefined") {
      return result;
    }
    result += arg;
    return sum(arg, result);
  };
}

// sum(1)(2)(3)(4)(5)();
console.log(sum(1)(2)(3)(4)(5)());
