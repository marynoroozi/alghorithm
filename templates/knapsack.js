// =======================
// ✅ 7. 0/1 Knapsack - DP Table
// Used in: Partition Equal Subset Sum, Knapsack
// =======================
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const w = weights[i - 1],
      v = values[i - 1];
    for (let c = 0; c <= capacity; c++) {
      if (w > c) dp[i][c] = dp[i - 1][c];
      else dp[i][c] = Math.max(dp[i - 1][c], dp[i - 1][c - w] + v);
    }
  }

  return dp[n][capacity];
}
