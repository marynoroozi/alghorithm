/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (
  nums: number[],
  target: number
): [number, number] | null {
  // let i = 0;

  // for (i; i < nums.length; i++) {
  //   let j = i + 1;
  //   while (j < nums.length) {
  //     if (nums[i] + nums[j] === target && i !== j) return [i, j];
  //     j++;
  //   }
  // }

  // Different type for map new Map<string, boolean>()
  let map = new Map<number, number>(); // value → index
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
  return null;
};

const nums = [3, 3];
const target = 6;
console.log(twoSum(nums, target));
