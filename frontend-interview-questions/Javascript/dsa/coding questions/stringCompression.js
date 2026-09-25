//Around 1hr 15min to solve
function stringCompression(str) {
  let n = str.length,
    result = "",
    count = 0,
    i = 0,
    j = 0;
  while (j < n) {
    ((j = i + 1), (count = 1));
    while (str[i] === str[j]) {
      count++;
      j++;
    }
    if (count > 1) result += str[i] + `${count}`;
    else result += str[i];
    i = j;
  }
  return result;
}

console.log(stringCompression("aaabbcccaaa")); // "a3b2c3a3"
console.log(stringCompression("aabbbc")); // "a2b3c"
console.log(stringCompression("abc")); // "abc"
console.log(stringCompression("a")); // "a"
console.log(stringCompression("")); // ""
console.log(stringCompression("aabaa")); // "a2ba2"
console.log(stringCompression("xxxxxxxxxxxx")); // "x12"

//TC - O(N)
//SC - O(N) // as the length of resultant string depends on the input string
