/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
//Iterative
var findLeafs = (root) => {
  let stack = [root];
  let leafs = [];

  while (stack.length) {
    let node = stack.pop();
    if (node.left || node.right) {
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    } else {
      leafs.push(node.val);
    }
  }
  return leafs;
};
var leafSimilar = function (root1, root2) {
  const root1Leafs = findLeafs(root1);
  const root2Leafs = findLeafs(root2);
  return JSON.stringify(root1Leafs) === JSON.stringify(root2Leafs);
  // OR
  // return root1Leafs.length === root2Leafs.length &&
  //      root1Leafs.every((val, i) => val === root2Leafs[i]);
};

//Recursion
var findLeafs = (root, leafs) => {
  if (!root) return 0; // اگر درخت خالیه
  if (!root.left && !root.right) {
    leafs.push(root.val); // برگ پیدا شد
  }
  findLeafs(root.left, leafs); // پیمایش چپ
  findLeafs(root.right, leafs); // پیمایش راست
};

var leafSimilar = function (root1, root2) {
  const leafs1 = [];
  const leafs2 = [];

  findLeafs(root1, leafs1);
  findLeafs(root2, leafs2);

  return (
    leafs1.length === leafs2.length &&
    leafs1.every((val, i) => val === leafs2[i])
  );
};
