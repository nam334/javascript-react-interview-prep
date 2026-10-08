// function evaluatePostfix(arr) {
//   let stack = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "+" || arr[i] === "*" || arr[i] === "/" || arr[i] === "-") {
//       let a = stack.pop(),
//         b = stack.pop(),
//         val;
//       a = Number(a);
//       b = Number(b);
//       if (arr[i] === "+") {
//         val = a + b;
//       } else if (arr[i] === "*") val = a * b;
//       else if (arr[i] === "-") val = b - a;
//       else {
//         if (arr[i] === "/") {
//           if (a > b) val = 0;
//           else val = Math.trunc(a / b);
//         }
//       }
//       stack.push(val);
//     } else stack.push(arr[i]);
//   }
//   return Number(stack.pop());
// }

// console.log(evaluatePostfix(["2", "3", "+"])); // 5
// console.log(evaluatePostfix(["5", "2", "-"])); // 3
// console.log(evaluatePostfix(["4", "3", "*"])); // 12
// console.log(evaluatePostfix(["8", "2", "/"])); // 4
// console.log(evaluatePostfix(["3", "4", "+", "2", "*"])); // 14
// console.log(evaluatePostfix(["10", "6", "2", "/", "-"])); // 7
// console.log(evaluatePostfix(["2", "3", "4", "*", "+"])); // 14
// console.log(
//   evaluatePostfix([
//     "15",
//     "7",
//     "1",
//     "1",
//     "+",
//     "-",
//     "/",
//     "3",
//     "*",
//     "2",
//     "1",
//     "1",
//     "+",
//     "+",
//     "-",
//   ]),
// ); // 5
// console.log(evaluatePostfix(["20", "5", "/", "3", "+"])); // 7
// console.log(evaluatePostfix(["5"])); // 5
// console.log(evaluatePostfix(["0"])); // 0
// console.log(evaluatePostfix(["-5"])); // -5
// console.log(evaluatePostfix(["0", "5", "+"])); // 5
// console.log(evaluatePostfix(["5", "0", "*"])); // 0
// console.log(evaluatePostfix(["5", "10", "-"])); // -5
// console.log(evaluatePostfix(["7", "2", "/"])); // 3
// console.log(evaluatePostfix(["-7", "2", "/"])); // -3
// console.log(evaluatePostfix(["7", "-2", "/"])); // -3
// console.log(evaluatePostfix(["-7", "-2", "/"])); // 3
// console.log(evaluatePostfix(["100", "200", "+"])); // 300
// console.log(evaluatePostfix(["4", "2", "-", "3", "-"])); // -1
// console.log(evaluatePostfix(["8", "4", "/", "2", "/"])); // 1

// TC - O(N)
// SC - O(N)
