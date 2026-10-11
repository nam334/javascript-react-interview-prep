// function evaluateExpression(arr, notation) {
//   if (notation === "postfix") {
//     if (arr.length === 0) return "Invalid Expression";
//     let stack = [],
//       result,
//       operands = ["+", "-", "*", "/"];
//     for (let i = 0; i < arr.length; i++) {
//       if (operands.includes(arr[i])) {
//         //found an operand at a given index
//         if (stack.length < 2) return "Invalid Expression";
//         let val1 = stack.pop();
//         let val2 = stack.pop();

//         if (arr[i] === "+") {
//           result = val1 + val2;
//         } else if (arr[i] === "-") {
//           result = val2 - val1;
//         } else if (arr[i] === "*") {
//           result = val2 * val1;
//         } else {
//           if (val1 === 0) return "Division by Zero";
//           result = Math.trunc(val2 / val1);
//         }
//         stack.push(result);
//       } else {
//         //number
//         if (arr[i] === "" || !Number.isFinite(Number(arr[i])))
//           return "Invalid Expression";
//         else stack.push(Number(arr[i]));
//       }
//     }

//     if (stack?.length > 1) return "Invalid Expression";
//     else return Number(stack.pop());
//   } else if (notation === "prefix") {
//     //for prefix
//     if (arr.length === 0) return "Invalid Expression";
//     let stack = [],
//       result,
//       operands = ["+", "-", "*", "/"];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       if (operands.includes(arr[i])) {
//         //found an operand at a given index
//         if (stack.length < 2) return "Invalid Expression";
//         let val1 = stack.pop();
//         let val2 = stack.pop();

//         if (arr[i] === "+") {
//           result = val1 + val2;
//         } else if (arr[i] === "-") {
//           result = val1 - val2;
//         } else if (arr[i] === "*") {
//           result = val2 * val1;
//         } else {
//           if (val2 === 0) return "Division by Zero";
//           result = Math.trunc(val1 / val2);
//         }
//         stack.push(result);
//       } else {
//         //number
//         if (arr[i] === "" || !Number.isFinite(Number(arr[i])))
//           return "Invalid Expression";
//         else stack.push(Number(arr[i]));
//       }
//     }

//     if (stack?.length > 1) return "Invalid Expression";
//     else return Number(stack.pop());
//   } else {
//     return "Invalid Notation";
//   }
// }

function evaluateExpression(arr, notation) {
  if (arr.length < 3) return "Invalid Expression";
  if (notation !== "prefix" && notation !== "postfix")
    return "Invalid Expression";
  const operands = ["+", "-", "*", "/"];
  const stack = [];
  let result;
  const tokens = notation === "prefix" ? [...arr].reverse() : arr;
  for (let i = 0; i < tokens.length; i++) {
    if (operands.includes(tokens[i])) {
      const val1 = stack.pop();
      const val2 = stack.pop();
      const a = notation === "postfix" ? val2 : val1;
      const b = notation === "postfix" ? val1 : val2;
      if (tokens[i] === "+") {
        result = a + b;
      } else if (tokens[i] === "-") {
        result = a - b;
      } else if (tokens[i] === "*") {
        result = b * a;
      } else {
        if (b === 0) return "Division by Zero";
        result = Math.trunc(a / b);
      }
      stack.push(result);
    } else {
      //numbers
      if (tokens[i] === "" || !Number.isFinite(Number(tokens[i])))
        return "Invalid Expression";
      else stack.push(Number(tokens[i]));
    }
  }
  if (stack?.length !== 1) return "Invalid Expression";
  else return Number(stack.pop());
}

// 1. Valid Postfix expression
console.log(evaluateExpression(["2", "3", "+", "4", "*"], "postfix")); // 20

// 2. Valid Prefix expression
console.log(evaluateExpression(["*", "+", "2", "3", "4"], "prefix")); // 20

// 3. Insufficient operands
console.log(evaluateExpression(["2", "+"], "postfix")); // "Invalid Expression"

// 4. Extra operands
console.log(evaluateExpression(["+", "2", "3", "4"], "prefix")); // "Invalid Expression"

// 5. Division by zero
console.log(evaluateExpression(["/", "10", "0"], "prefix")); // "Division by Zero"
console.log(evaluateExpression(["10", "5", "-"], "postfix")); // 5

console.log(evaluateExpression(["-", "10", "5"], "prefix")); // 5
