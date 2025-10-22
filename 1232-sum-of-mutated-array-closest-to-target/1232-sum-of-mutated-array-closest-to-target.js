/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    const n = arr.length
    let low=0, high = Math.max(...arr)
    let result = 0
    let closestDiff = Infinity

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        let sum = arr.reduce((sumSoFar, currVal)=> sumSoFar+(currVal>mid ? mid : currVal), 0)

        let diff = Math.abs(sum-target)

        if(diff<closestDiff || (diff === closestDiff && mid<result)){
            closestDiff = diff
            result = mid
        }
        if(sum<target){
            low = mid + 1
        } else {
            high = mid -1
        }
    }
    return result
};