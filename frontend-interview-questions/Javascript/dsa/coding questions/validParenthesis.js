function isBalanced(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") stack.push(str[i]);
    else {
      let value = stack.pop();
      if (
        (str[i] === ")" && value != "(") ||
        (str[i] === "]" && value != "[") ||
        (str[i] === "}" && value != "{")
      ) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
}

// Basic valid cases
// console.log(isBalanced("()")); // true
// console.log(isBalanced("[]")); // true
// console.log(isBalanced("{}")); // true
// console.log(isBalanced("()[]{}")); // true
// console.log(isBalanced("{[()]}")); // true
// console.log(isBalanced("([{}])")); // true

// Invalid cases
// console.log(isBalanced("(]")); // false
// console.log(isBalanced("([)]")); // false
// console.log(isBalanced("{[(])}")); // false
// console.log(isBalanced("(()")); // false
// console.log(isBalanced("())")); // false
// console.log(isBalanced("(((")); // false

// // Edge cases
console.log(isBalanced("")); // true
console.log(isBalanced("(")); // false
console.log(isBalanced(")")); // false
console.log(isBalanced("}{")); // false
console.log(isBalanced(")(")); // false
console.log(isBalanced("((()))")); // true
console.log(isBalanced("{{[[(())]]}}")); // true

// // Additional tricky cases
console.log(isBalanced("([[[{}]]])")); // true
console.log(isBalanced("({[}])")); // false
console.log(isBalanced("[][][{}]")); // true
console.log(isBalanced("((([]))){}")); // true
console.log(isBalanced("([{}]))")); // false
