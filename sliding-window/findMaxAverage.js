/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let windowSum = 0;
  // محاسبه مجموع اولین پنجره
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let maxSum = windowSum;

  // اسلاید کردن پنجره روی بقیه‌ی آرایه

  for (i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
};

const nums = [1, 12, -5, -6, 50, 3];
const k = 4;
console.log(findMaxAverage(nums, k));
