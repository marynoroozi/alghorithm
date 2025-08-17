/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let read = 0;
  let write = 0;
  const len = nums.length;
  for (read; read < len; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }
  for (let i = write; i < len; i++) {
    nums[i] = 0;
  }
}
