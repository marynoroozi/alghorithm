/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {  //coins=[1,3,4,5]
                                                    //    0   1    2    3    4    5   6    7
    let dp = new Array(amount+1).fill(Infinity)      // dp= [0, inf, inf, inf, inf, inf, inf, inf]   
    dp[0]=0                                         // total=7
    
    for(let i=1; i<dp.length; i++){
        for(let c of coins){
            if(i>=c){
                dp[i] = Math.min(dp[i], dp[i-c]+1)
            }
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1
};