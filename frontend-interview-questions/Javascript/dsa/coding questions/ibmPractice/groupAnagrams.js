function groupAnagrams(arr) {
  let myMap = new Map(),
    sortedStr;
  for (let i = 0; i < arr.length; i++) {
    sortedStr = Array.from(arr[i]).sort().join("");
    if (myMap.has(sortedStr)) {
      let value = myMap.get(sortedStr);

      let newVal = [...value, arr[i]];
      myMap.set(sortedStr, newVal);
    } else {
      //first
      myMap.set(sortedStr, [arr[i]]);
    }
  }

  return Array.from(myMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
