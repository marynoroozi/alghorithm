class Node {
  constructor(d) {
    this.data = d;
    this.neighbors = [];
  }
}

//BFS solution
function clone(root) {
  if (!root) return null;
  let queue = [root]; // pass the root to initiate the queue
  let map = new Map(); // create a clone. It should be map bcz every node has couple of properties

  map.set(root, new Node(root.data)); // here the key is root, but its value is created by new Node. So, we don't have referencing to the original node
  while (queue.length) {
    let curr = queue.shift(); // don't use dequeue here, js doesn't have it
    for (let neighbor of curr.neighbors) {
      // should use "of" and not "in"  // use let for the iterator
      // if the neighbor is not existed in the map, create it
      if (!map.get(neighbor)) {
        map.set(neighbor, new Node(neighbor.data));
        queue.push(neighbor);
      }
      // if it is existed or we just created it, add the copied version to the neighbor of current node
      map.get(curr).neighbors.push(map.get(neighbor));
    }
  }

  return map.get(root);
}

// DFS solution
function clone(root) {
  if (!root) return null;
  let map = new Map();

  function dfs(node) {
    if (map.has(node)) {
      return map.get(node);
    }

    let copy = new Node(node.data);
    map.set(node, copy);

    for (let neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  }

  return dfs(root);
}
