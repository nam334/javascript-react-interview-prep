// function memoize(fn) {
//   let cache = {};
//   return function (...args) {
//     let key = JSON.stringify(args);
//     if (key in cache) {
//       //found in cache
//       console.log("found in cache");
//       return cache[key];
//     } else {
//       //execute funtion
//       console.log("not found in cache, function called");
//       const result = fn.apply(this, args);
//       cache[key] = result;
//       return result;
//     }
//   };
// }

// function sum(a, b, c) {
//   return a + b + c;
// }

// const memoizesum = memoize(sum);
// console.log(memoizesum(2, 3, 4));
// console.log("chk for cache", memoizesum(2, 3, 4));

// function factorial(num) {
//   if (num === 0) return 1;
//   return num * factorial(num - 1);
// }

// const memoizefactorial = memoize(factorial);
// console.log(memoizefactorial(5));
// 5
// 5 * fact(5 - 1)
// 4 * fact(4 - 1)
// 3 * fac1(3 - 1)
// 2 * fac1(2 - 1)
// 1 * fact(1 - 1)

// fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21,
// function fibonacci(num) {
//   if (num <= 1) return num;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// const memoizefibonacci = memoize(fibonacci);
// memoizefibonacci(5);
// memoizefibonacci(5);

// 5 - 0 1 1 2 3
// const person = {
//   name: "Namrata",

//   greet() {
//     const arrow = () => this.name;
//     return arrow();
//   },
// };

// const result = person.greet.call({
//   name: "Nam",
// });

// console.log(result);
