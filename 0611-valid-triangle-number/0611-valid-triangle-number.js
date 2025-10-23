/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    const n = nums.length
    nums.sort((a,b)=>a-b)
    let count = 0
    for(let third=n-1; third>=2; third--){
        let first = 0
        let second = third-1
        while(first<second){
            if(nums[first]+nums[second]>nums[third]){
                count += (second - first)
                second--
            } else {
                first++
            }
        }
    }
    return count
};