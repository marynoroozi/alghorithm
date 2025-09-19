/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort(); // برای lexicographic order
    
    // ساختار نود Trie
    class TrieNode {
        constructor() {
            this.children = {};   // کاراکتر -> نود بعدی
            this.suggestions = []; // حداکثر 3 محصول
        }
    }
    
    // ریشه
    let root = new TrieNode();
    
    // Insert کردن محصولات
    for (let product of products) {
        let node = root;
        for (let char of product) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            if (node.suggestions.length < 3) {
                node.suggestions.push(product);
            }
        }
    }
    
    // حالا search
    let result = [];
    let node = root;
    for (let char of searchWord) {
        if (node && node.children[char]) {
            node = node.children[char];
            result.push(node.suggestions);
        } else {
            // از اینجا به بعد دیگه هیچ prefix پیدا نمی‌شه
            node = null;
            result.push([]);
        }
    }
    
    return result;
};