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
 * @return {number}
 */
var goodNodes = function (root) {
  const dfs = (node, maxSoFar) => {
    if (!node) return 0;

    let count = node.val >= maxSoFar ? 1 : 0;

    let newMax = Math.max(maxSoFar, node.val);

    count += dfs(node.left, newMax);
    count += dfs(node.right, newMax);

    return count;
  };
  return dfs(root, root.val);
};

var goodNodes = function (root) {
  if (!root) return 0;

  let count = 0;
  let stack = [[root, root.val]]; // [node, maxSoFar]

  while (stack.length) {
    let [node, maxSoFar] = stack.pop();
    if (node.val >= maxSoFar) count++;
    let newMax = Math.max(maxSoFar, node.val);
    if (node.left) stack.push(node.left, newMax);
    if (node.right) stack.push(node.right, newMax);
  }
  return count;
};
