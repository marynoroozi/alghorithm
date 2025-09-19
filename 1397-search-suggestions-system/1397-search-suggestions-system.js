/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let result = [];
    
    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
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
        let end   = lowerBound(products, prefix + '{'); // '{' بعد از 'z'
        
        // slice می‌کنیم
        result.push(products.slice(start, Math.min(start + 3, end)));
    }
    
    return result;
};
