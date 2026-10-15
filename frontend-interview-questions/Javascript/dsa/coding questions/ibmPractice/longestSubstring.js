function lengthOfLongestSubstring(str) {
  let p = 0,
    count = 0,
    q = 0,
    myMap = new Map();
  while (q < str.length) {
    if (myMap.has(str[q])) {
      let value = myMap.get(str[q]);
      if (value + 1 >= p) p = value + 1;
    }
    myMap.set(str[q], q);
    count = Math.max(count, q - p + 1);

    q++;
  }

  return count;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("a")); // 1
console.log(lengthOfLongestSubstring("abcdef")); // 6
console.log(lengthOfLongestSubstring("abba")); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("tmmzuxt")); // 5
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("AaBbCc")); // 6
console.log(lengthOfLongestSubstring("a b c")); // 3
console.log(lengthOfLongestSubstring("1231234")); // 4
console.log(lengthOfLongestSubstring("anviaj")); // 5
console.log(lengthOfLongestSubstring("ohomm")); // 3
