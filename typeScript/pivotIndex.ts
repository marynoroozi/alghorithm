function pivotIndex(nums: number[]): number {
  let total = nums.reduce((a, b) => a + b, 0);
  let prefix = 0;
  let suffix = total;
  for (let i = 0; i < nums.length; i++) {
    suffix = total - nums[i] - prefix;
    if (prefix === suffix) return i;
    prefix += nums[i];
  }
  return -1;
}

// nums = [1,7,3,6,5,6]
// total = 28
// prefix = [0, 1, 10, 11, 17, 22]
// suffix = [27, 20, 17, 11, 6, 0 ]
