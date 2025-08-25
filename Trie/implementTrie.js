class TrieNode {
  constructor() {
    this.children = {}; // برای نگهداری حروف بعدی hash map
    this.isEndOfWord = false; // آیا این Node آخر یک کلمه است؟
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children;
    }
    node.isEndOfWord = true;
  }
  search(word) {
    // 1. start from root
    // 2. go through each character of the word and check if it existes. if not return false
    // 3. check if the isEndOfWord exists => return true, else return false
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return node.isEndOfWord;
  }
  startsWith(prefix) {
    // 1. start from root
    // 2. go through each character
    // 3. check if it exists. if yes, go to next character. if not return false
    // 4. if all characters exist return true
    let node = this.root;
    for (let ch of prefix) {
      if (!node.children[ch]) return false;
      node = node.children[ch];
    }
    return true;
  }
}
