// =======================
// ✅ 6. Backtracking (for Subsets, Permutations, Combination Sum)
// =======================
function backtrack(result, path, choices, start) {
  result.push([...path]);
  for (let i = start; i < choices.length; i++) {
    path.push(choices[i]);
    backtrack(result, path, choices, i + 1); // i for repeat, i+1 for unique
    path.pop();
  }
}

// Example use:
function subsets(nums) {
  const result = [];
  backtrack(result, [], nums, 0);
  return result;
}
