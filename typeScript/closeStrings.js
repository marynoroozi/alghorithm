function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;
  const arr1 = [...word1];
  const arr2 = [...word2];
  let map1 = new Map();
  let map2 = new Map();
  for (item of arr1) {
    map1.set(item, (map1.get(item) || 0) + 1);
  }
  for (item of arr2) {
    if (!map1.has(item)) return false;
    map2.set(item, (map2.get(item) || 0) + 1);
  }
  const counts1 = Array.from(map1.values()).sort((a, b) => a - b);
  const counts2 = Array.from(map2.values()).sort((a, b) => a - b);
  for (let i = 0; i < counts1.length; i++) {
    if (counts1[i] !== counts2[i]) return false;
  }
  return true;
}

const word1 = "abc";
const word2 = "bca";
console.log(closeStrings(word1, word2));
