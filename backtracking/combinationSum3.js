/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let combinations = [];
  const backtrack = (curr, k, n, start) => {
    if (k === 0 && n === 0) {
      combinations.push(curr);
      return;
    }
    if (k <= 0 || n <= 0) {
      return;
    }
    for (let i = start; i <= Math.min(9, n); i++) {
      backtrack([...curr, i], k - 1, n - i, i + 1);
    }
  };
  backtrack([], k, n, 1);
  return combinations;
};

// Input: k = 3, n = 7
// Output: [[1,2,4]]
