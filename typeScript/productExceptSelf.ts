function productExceptSelf(nums: number[]): number[] {
  let n = nums.length;
  let output = Array(n).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= suffix;
    suffix *= nums[i];
  }

  return output;
}

const input = [1, 2, 3, 4];
console.log(productExceptSelf(input));
