/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
function cloneGraph(node){
    if(!node) return null
    // to avoid duplicating nodes and handle cycles
    let map = new Map()
    
    function dfs(node){
        if(map.has(node)){
            return map.get(node)    // اگه قبلاً کپی شده، همونو بده
        }
        let copy = new _Node(node.val, [])
        map.set(node, copy) // it menas this copy is a copied version of the node that we pass
        for(let neighbor of node.neighbors){
            copy.neighbors.push(dfs(neighbor))
        }

        return copy
    }
        
    return dfs(node)

}