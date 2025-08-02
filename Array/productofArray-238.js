/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   const output = [];
//   const len = nums.length;
//   prefix[0] = suffix[len - 1] = 1;
//   for (let i = 1; i < len; i++) {
//     prefix[i] = prefix[i - 1] * nums[i - 1];
//   }
//   console.log(prefix);
//   for (let j = len - 2; j >= 0; j--) {
//     suffix[j] = suffix[j + 1] * nums[j + 1];
//   }
//   console.log(suffix);

//   for (let i = 0; i < len; i++) {
//     output[i] = suffix[i] * prefix[i];
//   }
//   console.log(output);
//   return output;
// };

var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
