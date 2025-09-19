/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  // 1. implement a Trie

  let result = [];
  let prefix = "";

  // 2. implement search on the Trie
  for (char of searchWord) {
    prefix += char;
    let matches = products.filter((p) => p.startsWith(prefix));
    result.push(matches.slice(0, 3));
  }
  return result;
};