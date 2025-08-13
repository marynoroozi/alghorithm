/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (
      (mid === 0 || nums[mid] > nums[mid - 1]) &&
      (mid === nums.length - 1 || nums[mid] > nums[mid + 1])
    ) {
      return mid;
    }
    if (mid === 0 || nums[mid] < nums[mid - 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const nums = [1, 2, 3, 1];
console.log(findPeakElement(nums));
