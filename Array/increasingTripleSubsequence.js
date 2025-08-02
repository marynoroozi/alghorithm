/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length;
  if (len < 3) return false;
  let first = Infinity;
  let second = Infinity;
  for (i = 0; i < len; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
};

const Input = [2, 1, 0, 5, 4, 6];
// const Input = [5, 6, 3, 2, 1];

console.log(increasingTriplet(Input));
