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
//Recursion
var maxDepth = function (root) {
  if (!root) return null; // Base case
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

//BFS
var maxDepth = function (root) {
  if (!root) return 0;
  let queue = [root];
  let level = 0;

  while (queue.length) {
    let size = queue.length; // تعداد node های این سطح
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    level++; // یک سطح کامل پردازش شد
  }
  return level;
};

// DFS Iterative
var maxDepth = function (root) {
  if (!root) return 0;
  let stack = [[root, 1]];
  let maxLevel = 0;
  while (stack.length) {
    let [node, level] = stack.pop();
    if (node) {
      // اینجا باید بررسی کنیم که نود وجود داره یا نه
      // چون در خط های پایین بدون اینکه ببینیم فرزند داره یا نه، پوش میکنیم به استک
      // پس اینجوری ممکنه که null هم پوش کرده باشیم
      maxLevel = Math.max(maxLevel, level);
      stack.push([node.left, level + 1]);
      stack.push([node.right, level + 1]);
    }
  }
  return maxLevel;
};
