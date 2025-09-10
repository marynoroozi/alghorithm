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
var rob = function(root) {
    
    // [withNode, withoutNode]
    function dfs(node){
        if(node===null) return [0,0]

        const leftPair= dfs(node.left)
        const rightPair= dfs(node.right)

        const withNode = node.val + leftPair[1] + rightPair[1]
        const withoutNode = Math.max(leftPair[0], leftPair[1]) + Math.max(rightPair[0], rightPair[1])

        return[withNode, withoutNode]
    }

    const res = dfs(root)
    return Math.max(res[0], res[1])
};