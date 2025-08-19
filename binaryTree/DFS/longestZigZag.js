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

// We should keep track of which size our node is coming from (left or Right)
// sometimes we need to keep and pass more than one or two value with our node.
// We know we should use DFS (BCZ we are going to go through trees deeply) and recursion (BCZ one scenario is repeating)
var longestZigZag = function (root) {
  let longestPath = 0;

  const dfs = (node, left, curr) => {
    if (!node) return 0; //base case
    longestPath = Math.max(longestPath, curr);
    if (left) {
      dfs(node.left, true, 1);
      dfs(node.right, false, curr + 1);
    } else {
      dfs(node.left, true, curr + 1);
      dfs(node.right, false, 1);
    }
  };
  dfs(root.left, true, 1);
  dfs(root.right, false, 1);

  return longestPath;
};

var longestZigZag = function (root) {
  if (!root) return 0;
  let longestPath = 0;
  let stack = [];

  if (root.left) stack.push([root.left, true, 1]);
  if (root.right) stack.push([root.right, false, 1]);

  while (stack.length) {
    const [node, left, curr] = stack.pop();
    longestPath = Math.max(longestPath, curr);

    if (left) {
      if (node.left) stack.push([node.left, true, 1]);
      if (node.right) stack.push([node.right, false, curr + 1]);
    } else {
      if (node.left) stack.push([node.left, true, curr + 1]);
      if (node.right) stack.push([node.right, false, 1]);
    }
  }
  return longestPath;
};
