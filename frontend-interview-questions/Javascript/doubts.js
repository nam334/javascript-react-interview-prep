// 1.

// var a = 10;
// b = 20;
// const c = 30;

// function foo() {
//   console.log("1", a,b, c);
//   a = 40 ;
//   const c = 60;
// }

// {
//   a =  70;
//   b = 80;
//   const c = 90;
// }

// foo();

// console.log("2", a, b
// , c);

// 1. It throws error but if we add breakpoints it does not throw errror, why?

// 2.

// function outer() {
//   if (false) {
//     let a = 30;
//   }
//   b = 40;
//   console.log("4", a, b);
// }

// outer();

// Here, if in place of let we use var we can see its hoisted as undefined in global memory space,
//  but if its let in place of var how to view
// block where its hoisted?
