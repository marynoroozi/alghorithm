/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length
    let left = 0
    let right = n-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target) return mid
        
        // The first half is sorted
        if(nums[left]<=nums[mid]){
            if(nums[left]<=target &&  target < nums[mid]) right = mid -1
            else left = mid +1
        } 
        // The second half is sorted
        else {
            if(nums[mid]<target && target <=nums[right]) left = mid + 1
            else right = mid -1
        }
    }

    return -1;
};