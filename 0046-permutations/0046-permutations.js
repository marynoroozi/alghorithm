/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(!nums) return []
    let result = []
    let used = Array(nums.length).fill(false)

    const recursiveFunc = (curr) =>{
        if(curr.length === nums.length) {
            result.push([...curr])
            return
        }
        for(let i=0; i<nums.length; i++){
            if(used[i]) continue
            used[i]=true
            curr.push(nums[i])
            recursiveFunc(curr)
            curr.pop()
            used[i]=false
        }
    }
    recursiveFunc([])
    return result
    
};