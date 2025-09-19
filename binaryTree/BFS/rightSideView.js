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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // حتما اول اینو بذار، چون اگه ریشه null باشه باید []
  if (!root) return [];

  let queue = [root];
  let res = [];

  while (queue.length) {
    let qLen = queue.length;

    for (let i = 0; i < qLen; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      // فقط آخرین نود این لول رو تو res بذار
      if (i === qLen - 1) {
        res.push(node.val);
      }
    }
  }
  return res;
};
