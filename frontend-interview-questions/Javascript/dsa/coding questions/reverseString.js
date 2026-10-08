// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }

// TC = SC = O(n)

//using stack
function reverseString(str) {
  let strStack = [];
  for (let i = 0; i < str.length; i++) strStack.push(str[i]);
  let result = "";
  while (strStack.length > 0) {
    result += strStack.pop();
  }
  return result;
}

// Basic test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("canonical")); // "lacinonac"
console.log(reverseString("React")); // "tcaeR"
console.log(reverseString("JavaScript")); // "tpircSavaJ"

// Edge cases
console.log(reverseString("")); // ""
console.log(reverseString("a")); // "a"
console.log(reverseString("aa")); // "aa"
console.log(reverseString("12345")); // "54321"

// Spaces and special characters
console.log(reverseString("hello world")); // "dlrow olleh"
console.log(reverseString("a b c")); // "c b a"
console.log(reverseString("a!b@c#")); // "#c@b!a"
console.log(reverseString("  hi  ")); // "  ih  "

// Palindrome
console.log(reverseString("madam")); // "madam"
