var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // p & q are found in two side
  return left ? left : right; // p & q are found in just one side
};
