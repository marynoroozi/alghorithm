/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
        const wordSet= new Set(wordDict)
    const dp = new Array(s.length +1).fill(false)
    dp[0] = true
    let trues = [0]
    for(let i=1; i<s.length+1; i++){
        for(let item of trues){
            if(wordSet.has(s.slice(item,i))){
                dp[i]=true
                trues.push(i)
                break
            }
        }
    }
    return dp[s.length]
};