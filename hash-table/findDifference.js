/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const diff1 = [...set1].filter((item) => !set2.has(item));
  const diff2 = [...set2].filter((item) => !set1.has(item));
  return [diff1, diff2];
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));
