function evaluatePrefix(arr) {
  let stack = [],
    result,
    operands = ["+", "-", "*", "/"],
    n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (!operands.includes(arr[i])) {
      //number
      stack.push(arr[i]);
    } else {
      //operand
      let val1 = stack.pop();
      let val2 = stack.pop();
      val1 = Number(val1);
      val2 = Number(val2);
      if (arr[i] === "+") {
        result = val1 + val2;
      } else if (arr[i] === "-") result = val1 - val2;
      else if (arr[i] === "*") result = val1 * val2;
      else {
        //divide

        result = Math.trunc(val1 / val2);
      }
      stack.push(result);
    }
  }
  return Number(stack.pop());
}

console.log(evaluatePrefix(["*", "+", "2", "3", "4"]));
// 20

console.log(evaluatePrefix(["+", "10", "20"]));
// 30

console.log(evaluatePrefix(["-", "10", "3"]));
// 7

console.log(evaluatePrefix(["/", "15", "2"]));
//7;

console.log(evaluatePrefix(["-", "*", "5", "4", "6"]));
// 14

console.log(evaluatePrefix(["+", "-3", "8"]));
// 5

console.log(evaluatePrefix(["/", "-7", "2"]));
// // -3

console.log(evaluatePrefix(["42"]));
// 42

console.log(evaluatePrefix(["-", "5", "10"]));
// -5
