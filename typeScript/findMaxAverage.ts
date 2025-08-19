function findMaxAverage(nums: number[], k: number): number {
  let windowSum = 0;
  for (let i = 0; i < k && i < nums.length; i++) {
    windowSum += nums[i];
  }
  let maxSum = windowSum;
  for (let j = k; j < nums.length; j++) {
    windowSum = windowSum + nums[j] - nums[j - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
}

const numsArr = [1, 12, -5, -6, 50, 3];
const k = 4;

console.log(findMaxAverage(numsArr, k));
