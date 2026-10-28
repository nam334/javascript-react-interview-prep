// // Write a function that takes an array and a callback, and returns a new array with only
// // the elements for which the callback returns true. Don’t use the built-in filter(),
// // and don’t change the original array.
// function filterArray(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i)) result.push(arr[i]);
//   }
//   return result;
// }
// const numbers = [1, 2, 3, 4, 5, 6];

// // Basic cases
// console.log(filterArray(numbers, (n) => n % 2 === 0)); // [2, 4, 6]
// console.log(filterArray(numbers, (n) => n > 3)); // [4, 5, 6]
// console.log(filterArray(numbers, (n) => n % 2 !== 0)); // [1, 3, 5]

// Edge cases
// console.log(filterArray([], n => n > 3)); // []
// console.log(filterArray(numbers, n => n > 100)); // []
// console.log(filterArray(numbers, n => n > 0)); // [1, 2, 3, 4, 5, 6]
// console.log(filterArray([-3, 0, 5, -1], n => n < 0)); // [-3, -1]
// console.log(filterArray(["apple", "kiwi", "banana"], s => s.length > 4)); // ["apple", "banana"]
// console.log(filterArray([{ name: "A", age: 17 }, { name: "B", age: 22 }], p => p.age >= 18)); // [{ name: "B", age: 22 }]

// Original array should not change
// filterArray(numbers, n => n > 3);
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// Returned array should be a new array, even when everything matches
// const result = filterArray(numbers, n => true);
// console.log(result === numbers); // false

// Problem 2: mapArray(arr, callback)

// Write a function that takes an array and a callback, and returns a new array in which
// each element is the result of calling the callback on the original element. Don’t use the
// built-in map(), and don’t change the original array.

// function mapArray(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = cb(arr[i], i);
//   }

//   return result;
// }
// const numbers = [1, 2, 3, 4, 5];

// // Basic cases
// console.log(mapArray(numbers, (n) => n * 2)); // [2, 4, 6, 8, 10]
// console.log(mapArray(numbers, (n) => n * n)); // [1, 4, 9, 16, 25]
// console.log(mapArray(numbers, (n) => n % 2 === 0)); // [false, true, false, true, false]

// Edge cases
// console.log(mapArray([], n => n * 2)); // []
// console.log(mapArray(["apple", "kiwi"], s => s.toUpperCase())); // ["APPLE", "KIWI"]
// console.log(mapArray(["apple", "kiwi"], s => s.length)); // [5, 4]
// console.log(mapArray([{ name: "A", age: 17 }, { name: "B", age: 22 }], p => p.name)); // ["A", "B"]
// console.log(mapArray(numbers, n => `Item ${n}`)); // ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

// With index
// console.log(mapArray([10, 20, 30], (n, i) => n + i)); // [10, 21, 32]

// Original array should not change
// mapArray(numbers, n => n * 2);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Result length should always match input length
// console.log(mapArray(numbers, n => null).length); // 5

// Problem 3: getUniqueValues(arr, callback)

// Write a function that takes an array and a callback. Call the callback on each element to
// get a value, then return a new array of unique values, in the order they first appear.
// Use a Set to remove duplicates. The result should be an array, not a Set.

// function getUniqueValues(arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = cb(arr[i]);
//   }
//   return Array.from(new Set(result));
// }
// const products = [
//   { name: "Laptop", category: "Electronics", price: 50000, rating: 4.5 },
//   { name: "Phone", category: "Electronics", price: 20000, rating: 4.2 },
//   { name: "Shirt", category: "Clothing", price: 1000, rating: 3.8 },
//   { name: "Jeans", category: "Clothing", price: 2000, rating: 4.1 },
//   { name: "Book", category: "Books", price: 500, rating: 4.8 },
//   { name: "Headphones", category: "Electronics", price: 2000, rating: 3.5 },
// ];

// // Basic cases
// console.log(getUniqueValues(products, (p) => p.category)); // ["Electronics", "Clothing", "Books"]
// console.log(getUniqueValues(products, (p) => Math.floor(p.rating))); // [4, 3]
// console.log(getUniqueValues(products, (p) => p.price)); // [50000, 20000, 1000, 2000, 500]

// Edge cases
// console.log(getUniqueValues([], p => p.category)); // []
// console.log(getUniqueValues(products, p => p.name)); // ["Laptop", "Phone", "Shirt", "Jeans", "Book", "Headphones"]
// console.log(getUniqueValues(products, p => "same")); // ["same"]
// console.log(getUniqueValues([1, 2, 2, 3, 1], n => n)); // [1, 2, 3]
// console.log(getUniqueValues(["a", "A", "a"], s => s)); // ["a", "A"]
// console.log(getUniqueValues(["a", "A", "a"], s => s.toLowerCase())); // ["a"]

// Result should be an array, not a Set
// console.log(Array.isArray(getUniqueValues(products, p => p.category))); // true

// Problem 4: sortBy(arr, callback, order)

function sortBy(arr, callback, order) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  if (order === "desc")
    result.sort((a, b) =>
      callback(a) < callback(b) ? 1 : callback(a) > callback(b) ? -1 : 0,
    );
  else
    result.sort((a, b) =>
      callback(a) < callback(b) ? -1 : callback(a) > callback(b) ? 1 : 0,
    );
  return result;
}
// Write a function that returns a new array sorted by the value the callback returns for
// each element. order is "asc" (the default) or "desc". You may use the built-in sort(),
// but the original array must not change.

const products = [
  { name: "Laptop", category: "Electronics", price: 50000, rating: 4.5 },
  { name: "Phone", category: "Electronics", price: 20000, rating: 4.2 },
  { name: "Shirt", category: "Clothing", price: 1000, rating: 3.8 },
  { name: "Jeans", category: "Clothing", price: 2000, rating: 4.1 },
  { name: "Book", category: "Books", price: 500, rating: 4.8 },
  { name: "Headphones", category: "Electronics", price: 2000, rating: 3.5 },
];
const names = (list) => list.map((p) => p.name);

console.log(names(sortBy(products, (p) => p.price))); // ["Book", "Shirt", "Jeans", "Headphones", "Phone", "Laptop"]
console.log(names(sortBy(products, (p) => p.rating))); // ["Headphones", "Shirt", "Jeans", "Phone", "Laptop", "Book"]
console.log(names(sortBy(products, (p) => p.name))); // ["Book", "Headphones", "Jeans", "Laptop", "Phone", "Shirt"]

// Descending
// console.log(names(sortBy(products, p => p.price, "desc"))); // ["Laptop", "Phone", "Jeans", "Headphones", "Shirt", "Book"]

// Edge cases
// console.log(sortBy([], n => n)); // []
// console.log(sortBy([5, -2, 10, 0, 3], n => n)); // [-2, 0, 3, 5, 10]
// console.log(sortBy(["banana", "kiwi", "apple"], s => s.length)); // ["kiwi", "apple", "banana"]

// Original array should not change
// sortBy(products, p => p.price);
// console.log(names(products)); // ["Laptop", "Phone", "Shirt", "Jeans", "Book", "Headphones"]
