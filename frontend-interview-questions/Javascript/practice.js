const obj = {
  name: "Namrata",
};

function printName(place, country) {
  console.log(`My name is ${this.name}. I'm from ${place}, ${country}.`);
}

const obj2 = {
  name: "Priya",
};

//write the apply polyfill

// Function.prototype.myApply = function () {
//   const arr = [...arguments];
//   const obj = arr.shift(); //obj
//   const functionArgs = arr[0];
//   obj.myfun = this;
//   const result = obj.myfun(...functionArgs);
//   delete obj.myfun;
//   return result;
// };

// printName.myApply(obj2, ["Dibrugarh", "India"]);

//bindpolyfill

// Function.prototype.myBind = function () {
//   let arr = [...arguments];

//   let obj = arr.shift();
//   const functionArgs = arr;

//   obj.myfun = this;

//   return function (...args) {
//     const result = obj.myfun(...functionArgs, ...args);

//     return result;
//   };
// };
// const withbind = printName.myBind(obj, "Dib", "Assam");
// withbind();

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = outer();
// const counter2 = outer();

// counter1();
// counter1();
// counter2();
// counter1();
// counter2();

// for (var i = 0; i < 3; i++) {
//   function inner(x) {
//     setTimeout(function () {
//       console.log(x);
//     }, 0);
//   }
//   inner(i);
// }

// Write a function that creates a counter with increment, decrement, and getCount methods,
// without using a class.

// function counterHelper() {
//   let count = 0;

//   function increment() {
//     return ++count;
//   }

//   function decrement() {
//     return --count;
//   }
//   function getCount() {
//     return count;
//   }
//   return { increment, decrement, getCount };
// }

// const incrementCounter = counterHelper();
// console.log(incrementCounter.increment());
// console.log(incrementCounter.increment());

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   function deposit(amount) {
//     if (amount > 0) balance += amount;
//   }

//   function withdraw(amount) {
//     if (amount > 0 && balance > amount) balance -= amount;
//   }
//   function getBalance() {
//     return balance;
//   }
//   return { deposit, withdraw, getBalance };
// }

// const account = createBankAccount(500);
// account.deposit(200);
// account.withdraw(100);
// console.log("Balance is", account.getBalance());

// Closure practice: Implement once()

// Create a higher-order function named once that accepts a function fn and returns a new function.

// Requirements:

// The returned function should execute fn only on its first call.
// Subsequent calls should not execute fn again.
// The arguments provided during the first call must be passed to fn.
// Every call should return the result produced during the first execution.
// Preserve the caller’s this value.

// function once(fn) {
//   let flag = true,
//     result;

//   return function (...args) {
//     if (!flag) {
//       return result;
//     }

//     result = fn(...args);
//     flag = false;
//     return result;
//   };
// }

// function add(a, b) {
//   console.log("Executing add...");
//   return a + b;
// }

// const addOnce = once(add);

// console.log(addOnce(2, 3));
// // Executing add...
// // 5

// console.log(addOnce(10, 20));
// // // 5

// console.log(addOnce(100, 200));
// // // 5

//CURRYING

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(1)(2));

// function sum(result = 0) {
//   if (result === 0) result += arguments[0];

//   // if (arguments === "undefined") return result;
//   return function (...args) {
//     if (args.length === 0) return result;
//     result = result + args[0];

//     return sum(result);
//   };
// }
// console.log(sum(1)(2)(3)(4)(5)());

// function sum(result = 0) {
//   const args = [...arguments];
//   result = 0;
//   for (let i = 0; i < args.length; i++) result += args[i];

//   return function (...args) {
//     if (args.length === 0) return result;
//     for (let i = 0; i < args.length; i++) result += args[i];
//     return sum(result);
//   };
// }
//console.log(sum(1, 10)(2, 20)(3, 30, 300)(4)(5, 50)());

function sum(result = 0) {
  const args = [...arguments];
  result = 0;
  for (let i = 0; i < args.length; i++) result += args[i];
  const inner = function (...args) {
    result += args[0];
    return sum(result);
  };

  inner.valueOf = function () {
    return result;
  };
  return inner;
}

const result = sum(1)(2)(3)(4)(5);
console.log(result.valueOf());
