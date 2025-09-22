/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();  // اول مرتب می‌کنیم
    let result = [];

    // تابع کمکی برای پیدا کردن اولین index با binary search
    function lowerBound(arr, target) {
        let left = 0, right = arr.length;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) left = mid + 1;
            else right = mid-1;
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