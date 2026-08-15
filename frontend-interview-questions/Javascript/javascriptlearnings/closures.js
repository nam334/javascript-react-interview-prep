// Closures - function bundled with its lexical environment is called closure. (Function alongwith
// reference to the variables, not the values)

// Each and every function in js has access to its outer scope (variables and functions present in its parent function)
// so even when function is executed in sm other scope it still remembers its parents scope where it was
// originally present

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function inner(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000);
//     }
//     inner(i);
//   }
// }

// a();
// function a() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(
//       function (x) {
//         console.log(x);
//       },
//       i * 1000,
//       i,
//     );
//   }
// }

// a();

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 100;
//     return inner;
//   }
//   return outer;
// }
// let a = 10;
// // var clos = outest()("Hello world");
// // clos();

// outest()("namrata")();

// data encapsulation

// function counter() {
//   let count = 0;
//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }

// // var counter1 = counter();
// // counter1();

// console.log(count); - this will give reference error

function outer() {
  let x = 10;

  const a = () => {
    x += 5;
    return x;
  };

  const b = () => {
    return x;
  };

  return { a, b };
}

const obj = outer();

console.log(obj.b());
console.log(obj.a());
console.log(obj.b());
