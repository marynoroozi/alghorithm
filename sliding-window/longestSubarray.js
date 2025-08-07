/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let zeroCounts = 0;
  let maxLen = 0;
  let left = 0;
  let right = 0;
  for (right; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCounts++;
    }
    while (zeroCounts > 1) {
      if (nums[left] === 0) zeroCounts--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen - 1;
};

const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
console.log(longestSubarray(nums));
