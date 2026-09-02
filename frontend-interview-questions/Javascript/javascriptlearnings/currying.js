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

// function sum(args, result = 0) {
//   console.log(args, result);
//   //below chk added bcoz the first arg was not getting added
//   if (result === 0) result += args;
//   return function (arg) {
//     if (typeof arg === "undefined") {
//       return result;
//     }
//     result += arg;
//     return sum(arg, result);
//   };
// }

// sum(1)(2)(3)(4)(5)();
// console.log(sum(1)(2)(3)(4)(5)());

//3.sum(1)(2)(3)(4)(5)

// function sum(args, result = 0) {
//   if (result === 0) result += args;

//   const fun = function (arg) {
//     result += arg;

//     return sum(arg, result);
//   };
//   fun.getResult = function () {
//     return result;
//   };
//   return fun;
// }

// const obj1 = sum(1)(2)(3)(4)(5);
// console.log(obj1.getResult());

//4.sum(1, 10)(2, 20)(3, 30, 300)(4)(5, 50)()

// function sum(...arguments) {
//   if (!arguments.length) return arguments[arguments.length - 2];
//   let result, el;
//   //chk for first call
//   if (arguments[arguments.length - 1] !== true) {
//     result = 0;
//   }
//   //for sunsequent calls
//   else result = arguments[arguments.length - 2];
//   if (result === 0) el = arguments;
//   else el = arguments.slice(0, -2);
//   for (let i = 0; i < el.length; i++) {
//     result += el[i];
//   }

//   return function (...arg) {
//     if (arg.length >= 1) {
//       let args = [...arg, result, true];
//       //  console.log("args is", args);
//       return sum(...args);
//     } else return result;
//   };
// }

// console.log(sum(1, 10)(2, 20)(3, 30, 300)(4)(5, 50)());

function multiply(...arguments) {
  let result, el;
  //identify 1st call
  if (arguments[arguments.length - 1] !== true) {
    result = 1;
    el = arguments;
  } else {
    result = arguments[arguments.length - 2];
    //below slice removes last 2 items
    el = arguments.slice(0, -2);
  }
  console.log(el);
  for (let i = 0; i < el.length; i++) {
    result = result * el[i];
  }
  return function (...args) {
    if (args.length >= 1) {
      //for functions after 1st call (starting from 2nd call)
      //after 1st call, [4,6,true] is passed
      let arg = [...args, result, true];
      return multiply(...arg);
    } else return result;
  };
}
console.log(multiply(2, 3)(4)(5, 2)());
