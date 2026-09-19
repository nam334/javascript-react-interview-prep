//0) Convert an array [4,5,6,7] into an object { 4: 10, 5: 11, 6: 12, 7: 13 }
//1.50pm - 1.55pm ~ 5mins
// const arr = [4, 5, 6, 7];
// function arrToObj(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     obj[`${arr[i]}`] = arr[i] + 6;
//   }
//   return obj;
// }

// console.log(arrToObj(arr));
// Time complexity - O(N)
// Space complexity - O(N)

//1) Reverse an array

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// const input = [1, 2, 3, 4, 5];
// function reverseAnArray(input) {
//   let output = [];
//   for (let i = input.length - 1; i >= 0; i--) {
//     output.push(input[i]);
//   }
//   return output;
// }

// console.log(reverseAnArray(input));
// Time complexity - O(N)
// Space complexity - O(N)
//time ~ 5mins

//2) Reverse a string

//time - 2.12
// Input: "hello world"
// Output: "dlrow olleh"
// let input = "hello world";
// function reverseAString(input) {
//   let output = "";
//   for (let i = input.length - 1; i >= 0; i--) {
//     output += input[i];
//   }

//   return output;
// }

// console.log(reverseAString(input));
// Time complexity - O(N)
// Space complexity - O(N)
//time ~ 5mins

//3) find if the string is palindrome or not
// Input: "MadAm"
// Output: true

// Input: "RaceCar"
// Output: true

// Input: "Hello"
// Output: false

//let input = "Hello";
//M A D A M
//0 1 2 3 4
// function checkPalindrome(input) {
//   input = input.toLowerCase();
//   let start = 0,
//     end = input.length - 1;
//   while (start <= end) {
//     if (input[start] !== input[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// }

// console.log(checkPalindrome(input));
// two pointer approach
// Time complexity - O(n)
// Space complexity - O(n) bcoz input converts to lowercase and creates a ne string
// ~10mins

//3) Check Whether Two Strings Are Anagrams
// Input: "Listen", "Silent"
// Output: true

// Input: "Hello", "World"
// Output: false

// Input: "Aabb", "Baba"
// Output: true
// 5.32
//
//b a b a
// function checkAnagrams(input1, input2) {
//   if (input1.length !== input2.length) return false;
//   let mymap = new Map();
//   input1 = input1.toLowerCase(); //O(n)
//   //store input1 in map
//   for (let i = 0; i < input1.length; i++) {
//     if (mymap.has(input1[i])) {
//       let value = mymap.get(input1[i]);
//       mymap.set(input1[i], value + 1);
//     } else mymap.set(input1[i], 1);
//   }
//   input2 = input2.toLowerCase();
//   //check for input2
//   for (let j = 0; j < input2.length; j++) {
//     if (!mymap.has(input2[j])) return false;
//     else {
//       let value = mymap.get(input2[j]);
//       value = value - 1;
//       if (value === 0) mymap.delete(input2[j]);
//       else mymap.set(input2[j], value);
//     }
//   }
//   if (mymap.size === 0) return true;
//   else return false;
// }

// console.log(checkAnagrams("Listen", "Silent"));
// console.log(checkAnagrams("Hello", "World"));
// console.log(checkAnagrams("aab", "abb"));
// Time complexity - O(n + n + n + n) - O(4N) ~ O(N)
// Space complexity - O(n) (due to map)
