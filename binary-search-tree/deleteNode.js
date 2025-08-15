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
 * @param {number} key
 * @return {TreeNode}
 */

var findMin = (node) => {
  while (node.left) {
    node = node.left;
  }
  return node;
};
var deleteNode = function (root, key) {
  //1. Search for a node to remove
  //2. if the node is found, delete the node

  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  }
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // just one child node atmost
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // we have 2 children node for the node we want to delete.
    // So we should decide which one we want to pick to subtitue with the deleted node

    // so, these are our two possible (and equivalent) options:
    //      1) pick our root.right node as the root node, and find the minimum node in
    //         the right subtree that has no left pointer, and assign the root.left node to it.
    //
    //      2) pick our root.left node as the root node, and find the maximum node in
    //         the left subtree that has no right pointer, and assign the root.right node to it.
    let minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
    // here's an example of deleting node with val=5 without breaking the BST choosing option (1)
    //
    //                  5                     8
    //               /     \                 / \
    //              3*      8               7   9
    //             / \     / \    --->     /
    //            2   4   7   9           6
    //                   /               /
    //                  6               3*
    //                                 / \
    //                                2   4
    //
    // we'll choose option (1) and we'll find the minimum number in the right subtree that
    // has no left pointer
    // that one is going to be the node that will link to the left subtree of the current
    // -soon to be deleted- node. by doing that we'll preserve the structure of the BST
    // (nodes to the left of a node should be smaller, and numbers to the
    // right should be greater).
  }
  return root;
};
