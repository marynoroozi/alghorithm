/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort(); // O(nlogn)
  let l = 0, r = products.length - 1;
  let result = [];
  
  for (let i = 0; i < searchWord.length; i++) {
    let ch = searchWord[i];
    
    while (l <= r && (products[l].length <= i || products[l][i] !== ch)) l++;
    while (l <= r && (products[r].length <= i || products[r][i] !== ch)) r--;
    
    let suggestions = [];
    let size = Math.min(3, r - l + 1); // correct count
    for (let j = 0; j < size; j++) {
      suggestions.push(products[l + j]);
    }
    
    result.push(suggestions);
  }
  
  return result;
};
