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
var maxLevelSum = function (root) {
  // If the tree is empty, return level 0
  if (!root) return 0;

  // Use a queue for BFS (Level Order Traversal)
  let queue = [root];

  // Initialize max sum to -Infinity to handle negative values
  let maxSum = -Infinity;

  // Track the level that has the maximum sum
  let maxLevel = 1;

  // Current level counter; root is level 1
  let level = 1;

  // Main loop to process all levels
  while (queue.length) {
    // Number of nodes in the current level
    let levelSize = queue.length;

    // Sum of node values in the current level
    let levelSum = 0;

    // Process all nodes in the current level
    for (let i = 0; i < levelSize; i++) {
      // Remove node from the front of the queue
      let node = queue.shift();

      // Add node value to the current level sum
      levelSum += node.val;

      // If left child exists, add it to the queue
      if (node.left) queue.push(node.left);

      // If right child exists, add it to the queue
      if (node.right) queue.push(node.right);
    }

    // After processing the entire level, check if this level has the max sum
    if (levelSum > maxSum) {
      maxSum = levelSum;   // Update max sum
      maxLevel = level;    // Store the corresponding level
    }

    // Move to the next level
    level++;
  }

  // Return the smallest level with the maximum sum
  return maxLevel;
};
