/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) return 0;

  // dfs که مسیرهایی از یک node شروع می‌شوند را بررسی می‌کند
  const dfsFromNode = (node, currentSum) => {
    if (!node) return 0;
    let count = node.val === currentSum ? 1 : 0; // آیا path جاری برابر targetSum شد؟
    count += dfsFromNode(node.left, currentSum - node.val);
    count += dfsFromNode(node.right, currentSum - node.val);
    return count;
  };

  // جمع pathهایی که از root، از node.left و از node.right شروع می‌شوند
  return (
    dfsFromNode(root, targetSum) +
    pathSum(root.left, targetSum) +
    pathSum(root.right, targetSum)
  );
};

var pathSum = function (root, targetSum) {
  const prefixSums = new Map();
  prefixSums.set(0, 1);

  const dfs = (node, currentSum) => {
    if (!node) return 0;

    currentSum += node.val;
    let count = prefixSums.get(currentSum - targetSum) || 0;

    prefixSums.set(currentSum, (prefixSums.get(currentSum) || 0) + 1);
    count += dfs(node.left, currentSum);
    count += dfs(node.right, currentSum);
    prefixSums.set(currentSum, prefixSums.get(currentSum) - 1);

    return count;
  };

  return dfs(root, 0);
};

// my first code
var pathSum = function (root, targetSum) {
  const dfs = (node, sumSoFar) => {
    if (!node) return 0;
    let count = sumSoFar === targetSum ? 1 : 0;
    if (sumSoFar > targetSum) {
      count += dfs(node.left, 0);
      count += dfs(node.right, 0);
    } else if (sumSoFar < targetSum) {
      sumSoFar += node.val;
      count += dfs(node.left, sumSoFar);
      count += dfs(node.right, sumSoFar);
    }
    return count;
  };
  dfs(root, root.val);
};
