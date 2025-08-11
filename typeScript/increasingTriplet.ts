function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;
  const len = nums.length;
  if (len < 3) return false;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
}

const Input = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(Input));
