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

//3) find if the string is palindrome or not-------------------------------------------------
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

//4) Check Whether Two Strings Are Anagrams----------------------------------------------
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

//5) Merge two sorted arrays in to one sorted arrays-----------------------------------------
// arr1 = [1, 3, 5, 7]
// arr2 = [2, 4, 6, 8]

// Output:
// [1, 2, 3, 4, 5, 6, 7, 8]

//7.05
// function mergeSortedArrays(arr1, arr2) {
//   const sortedArray = [];
//   let i = 0,
//     j = 0;
//   while (i < arr1.length && j < arr2.length) { //O(N+M)
//     if (arr1[i] < arr2[j]) {
//       sortedArray.push(arr1[i]);
//       i++;
//     } else {
//       sortedArray.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i < arr1.length) {
//     const remainingElements = arr1.slice(i); //O(N)
//     sortedArray.push(...remainingElements); //O(N)
//   }
//   if (j < arr2.length) {
//     const remainingElements = arr2.slice(j); //O(M)
//     sortedArray.push(...remainingElements); //O(M)
//   }
//   return sortedArray;
// }

// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));

//Time complexity - O(n + m) + O(n) + O(n) + O(m) + O(m) ~ O(n+m)
//Space complexity - O(n+m)
//7.12

//6) sum of N numbers
// Input: 5
// Output: 15

// function sumN(num) {
//   return (num * (num + 1)) / 2;
// }

// console.log(sumN(5));
// console.log(sumN(10));
// 1 + 2 + 3 + 4 + 5 = 15

// 7) Right Rotate an Array by K Positions
// Input: arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

// Input: arr = [10, 20, 30, 40], k = 1
// Output: [40, 10, 20, 30]

//below function returns a new array---------------------------------------

// function rightRotate(arr, k) {
//   let arrayLength = arr.length;
//   let res = [];
//   for (let i = 0; i < arrayLength; i++) {
//     let newIndex = i + k; //4
//     if (newIndex >= arrayLength) {
//       newIndex = newIndex - arrayLength;
//     }

//     res[newIndex] = arr[i];
//   }

//   for (let i = 0; i < arrayLength; i++) {
//     arr[i] = res[i];
//   }
//   return arr;
// }

// console.log(rightRotate([10, 20, 30, 40], 1));
// console.log(rightRotate([1, 2, 3, 4, 5], 2));

//below function modifies the original array in O(1) space complexity----------------------------

// function rightRotate(arr, k) {
//   let arrayLength = arr.length;
//   if (arrayLength === 0) return arr;
//   k = k % arrayLength;
//   function reverse(ar, start, end) {
//     while (start < end) {
//       let temp = ar[start];
//       ar[start] = ar[end];
//       ar[end] = temp;
//       start++;
//       end--;
//     }
//     return ar;
//   }

//   reverse(arr, 0, arrayLength - 1);
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arrayLength - 1);
//   return arr;
// }

// console.log(rightRotate([1, 2, 3, 4, 5], 2));

// //What is the the Time and Space Complexity of array methods -
// // length - returns the length of an array
// TC = SC = O(1);
// // push - adds one/more element to the end of the array and returns new lwngth of the array
// TC = SC = O(1);
// // pop - removes the lastelement and returns the element
// TC = SC = O(1);
// // shift - removes first element from the array and returns it
// TC = O(N);
// SC = O(1);
// // unshift - adds one/more elemnts to the beginning of the array and returns the new length of the array
// TC = O(N);
// SC = O(1);
// // includes - checks if a value is present in an array or string , returns boolean (true/ false)
// TC = O(N);
// SC = O(1);
// // concat - merges single/ multiple values into a new array and returns it
// TC - O(N + M);
// SC - O(N + M);
// // slice  - returns a shallow copy of a portion of the array, doesn't modify the original array
// TC - O(M);
// SC - O(M);
// //here M is the number of copied elements

//What is the Time and Space Complexity of Object methods - Keys, Value, Entries

// Keys - returns all the keys of an object in array format
// TC - O(N)
// SC - O(N)

// Values - returns all the values of an object in array format
// TC - O(N)
// SC - O(N)

// Entries - retuns an array of key value pairs of an object
// TC - O(N)
// SC - O(N)
