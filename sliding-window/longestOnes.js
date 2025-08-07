/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let zeroCounts = 0;
  for (right; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCounts++;
    }
    if (zeroCounts > k) {
      if (nums[left] === 0) zeroCounts--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
console.log(longestOnes(nums, k));
