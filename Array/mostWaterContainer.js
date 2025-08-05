/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxTotal = 0;
  while (i < j) {
    let total = (j - i) * Math.min(height[i], height[j]);
    maxTotal = Math.max(total, maxTotal);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxTotal;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
