/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;
  const total = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};
// var pivotIndex = function (nums) {
//   let sum = 0;
//   let leftSum = 0;

//   let rightSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       leftSum = 0;
//     } else {
//       leftSum[i] = leftSum[i - 1] + nums[i - 1];
//     }
//     // console.log("leftSum: ", leftSum[i]);
//     rightSum[i] = sum - nums[i] - leftSum[i];
//     // console.log("rightSum: ", rightSum[i]);
//     if (leftSum[i] === rightSum[i]) return i;
//   }
//   return -1;
// };

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
