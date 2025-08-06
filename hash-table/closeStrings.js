/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

// const inputMapper = (input, map) => {
//   for (item of [...input]) {
//     map.set(item, (map.get(item) || 0) + 1);
//   }
// };

// var closeStrings = function (word1, word2) {
//   if (word1.length !== word2.length) return false;
//   const set1 = new Set(word1);
//   const set2 = new Set(word2);
//   if (set1.size !== set2.size) return false;
//   for (let ch of set1) {
//     if (!set2.has(ch)) return false;
//   }
//   const map1 = new Map();
//   const map2 = new Map();
//   inputMapper(word1, map1);
//   inputMapper(word2, map2);
//   const freq1 = Array.from(map1.values()).sort((a, b) => a - b);
//   const freq2 = Array.from(map2.values()).sort((a, b) => a - b);
//   for (let i = 0; i < freq1.length; i++) {
//     if (freq1[i] !== freq2[i]) return false;
//   }
//   return true;
// };

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);
  for (let ch of word1) {
    freq1[ch.charCodeAt(0) - 97]++;
  }
  for (ch of word2) {
    freq2[ch.charCodeAt(0) - 97]++;
  }
  for (let i = 0; i < 26; i++) {
    if (
      (freq1[i] === 0 && freq2[i] !== 0) ||
      (freq1[i] !== 0 && freq2[i] === 0)
    )
      return false;
  }
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
};

const word1 = "cabbba";
const word2 = "abbccc";

console.log(closeStrings(word1, word2));
