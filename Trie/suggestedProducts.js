/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// Brute force: O(nlogn+m⋅n⋅k)
//برای ورودی‌های بزرگ این خیلی کند میشه. (مثلاً n = 10^4, m = 100, k ~ 100 → خیلی زیاد!)
var suggestedProducts = function (products, searchWord) {
  // اول sort کنیم
  products.sort(); // O(n log n)

  let result = [];
  let prefix = "";

  for (let char of searchWord) {
    // طول searchWord = m
    prefix += char;
    // فیلتر کنیم محصولاتی که با prefix شروع میشن
    let matches = products.filter((p) => p.startsWith(prefix)); // O(n * k) (چک کردن prefix طول k)
    // فقط 3 تای اول
    result.push(matches.slice(0, 3)); // O(1)
  }

  return result;
};

// space complexity: O(n⋅k⋅3)=O(n⋅k)
class TrieNode {
  constructor() {
    this.children = {}; // hash map to keep the children of every node
    this.suggestions = []; //a list of suggestions for each node (should be fewer than 3 items)
  }
}

// runtime complexity: O(m⋅k+n)
// space complexity: O(m⋅k+n)
var suggestedProducts = function (products, searchWord) {
  // Sort the products
  products.sort(); //O(nlogn)

  //start from root node
  let root = new TrieNode();

  // first add every product to our Trie
  //runtime complexity: O(m*k)  m length of product
  // space complexity: O(n⋅k)  در بدترین حالت (هیچ prefix مشترکی وجود نداشته باشه)،
  // باید برای هر محصول، همه‌ی کاراکترها ذخیره بشه.
  for (let product of products) {
    // start from root
    let node = root;
    // insert every character
    for (let char of product) {
      // O(k)  k length of each product
      // if we don't have any children node for our character
      if (!node.children[char]) {
        // Create the node
        node.children[char] = new TrieNode();
      }
      // if we have the node, just go to the node
      node = node.children[char];
      // if fewer than 3 suggestions => Add the product
      if (node.suggestions.length < 3) {
        node.suggestions.push(product);
      }
    }
  }

  // We should return a list
  let result = [];
  //   start from root node
  let node = root;
  //go over every character of the searchWord
  // runtime complexity: O(n)  n length of searchWord
  //space complexity O(n⋅3)=O(n)
  for (let char of searchWord) {
    // If we have the node and the node has the the children we are looking for
    if (node && node.children[char]) {
      // go over the next character
      node = node.children[char];
      // we can use the suggestions we already have on that node
      result.push(node.suggestions);
    } else {
      node = null; // To stop traversing Trie
      result.push([]); // we have no suggestions, so return []
    }
  }
  return result;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));

// [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]

// sorted = [ 'mobile', 'moneypot', 'monitor', 'mouse', 'mousepad' ]
// {}
//   \
//   {m}: ["mobile","moneypot", monitor]
//     \
//     {o}: ["mobile", "moneypot", monitor]
//       \
//       {b: ["mobile"]; n: ['moneypot', "monitor"];            u:["mouse", "mousepad"]}
//       /                \                                      \
//     {i}: ["mobile"]    {e: ["moneypot"]; i:["monitor"]}       {s}:["mouse", "mousepad"]
//     /                   /                 \                     \
//   {l}: ["mobile"]     {y}:["moneypot"]    {t}:["monitor"]       {e}:["mouse", "mousepad"]
//   /                    /                    \                     \
//  {e}: ["mobile"]     {p}:["moneypot"]       {o}:["monitor"]       {p}:["mousepad"]
//                       \                       \                     \
//                      {o}: ["moneypot"]        {r}:["monitor"]       {a}:["mousepad"]
//                      /                                                \
//                    {t}: ["moneypot"]                                  {d}:["mousepad"]

// Third approach : Two pointer
// O(nlogn + n.w + m*3 )  w is the length of every word in product
// space complexity:  O(n + m)  n: products length, m: result length
var suggestedProducts = function (products, searchWord) {
  products.sort(); // O(nlogn)
  // sorted = [ 'mobile', 'moneypot', 'monitor', 'mouse', 'mousepad' ]
  let l = 0;
  let r = products.length - 1;
  let result = [];
  // traverse over every character of searchWord
  //   Two-pointer traversal: O(n * m) where m = length of searchWord
  for (let i = 0; i < searchWord.length; i++) {
    let ch = searchWord[i];
    // eliminating the ones that don't have a matching prefix
    while (l <= r && (products[l].length <= i || products[l][i] !== ch)) {
      l += 1;
    }
    while (l <= r && (products[r].length <= i || products[r][i] !== ch)) {
      r -= 1;
    }
    result.push([]);
    let size = Math.min(3, r - l + 1);
    for (let j = 0; j < size; j++) {
      result[result.length - 1].push(products[l + j]);
    }
  }
  return result;
};

// Forth solution: Binary search the most efficient
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let result = [];

  function lowerBound(arr, target) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  let prefix = "";
  for (let char of searchWord) {
    prefix += char;

    // شروع و پایان بازه
    let start = lowerBound(products, prefix);
    let end = lowerBound(products, prefix + "{"); // '{' بعد از 'z'

    // slice می‌کنیم
    result.push(products.slice(start, Math.min(start + 3, end)));
  }

  return result;
};

// Fifth: Binary search
var suggestedProducts = function (products, searchWord) {
  products.sort(); // اول مرتب می‌کنیم
  let result = [];

  // تابع کمکی برای پیدا کردن اولین index با binary search
  function lowerBound(arr, target) {
    let left = 0,
      right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  let prefix = "";
  for (let char of searchWord) {
    prefix += char;

    // پیدا کردن اولین کلمه >= prefix
    let i = lowerBound(products, prefix);

    // جمع کردن حداکثر 3 تا محصولی که واقعا prefix دارن
    let suggestions = [];
    for (let j = i; j < Math.min(i + 3, products.length); j++) {
      if (products[j].startsWith(prefix)) {
        suggestions.push(products[j]);
      } else break;
    }

    result.push(suggestions);
  }

  return result;
};
