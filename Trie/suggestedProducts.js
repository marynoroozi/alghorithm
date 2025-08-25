/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// O(nlogn+m⋅n⋅k)
var suggestedProducts = function (products, searchWord) {
  products.sort(); // O(nlogn)
  // 1. implement a Trie

  let result = [];
  let prefix = "";

  // 2. implement search on the Trie
  for (char of searchWord) {
    // O(m) m is searchWord length
    prefix += char;
    let matches = products.filter(
      //O(n*k)  k is prefix length
      (p) => p.startsWith(prefix)
    );
    result.push(matches.slice(0, 3)); //O(1)
  }
  return result;
};

class TrieNode {
  constructor() {
    this.children = {}; // hash map to keep the children of every node
    this.suggestions = []; //a list of suggestions for each node (should be fewer than 3 items)
  }
}

var suggestedProducts = function (products, searchWord) {
  // Sort the products
  products.sort(); //O(nlogn)

  //start from root node
  let root = new TrieNode();

  // first add every product to our Trie
  for (let product of products) {
    //O(m*k)  m length of product
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
