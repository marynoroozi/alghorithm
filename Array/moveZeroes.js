/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let read = 0;
  let write = 0;
  for (read; read < n; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }
  for (i = write; i < n; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
