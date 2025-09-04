/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
        let count = 0
    const len = s.length
    for(let i=0; i<len; i++){
        let l=i
        let r = i
        while(l>=0 && r<len && s[l]===s[r]){
            count++
            l -= 1
            r += 1
        }
        let left=i
        let right=i+1
        while(left>=0 && right<len && s[left]===s[right]){
            count++
            left -= 1
            right += 1
        }
    }

    return count;
};