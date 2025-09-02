function validTree(n, edges) {
  const len = edges.length;
  if (len === n - 1) {
    let adjaceny = new Map();
    for (let edge of edges) {
      const src = edge[0];
      const dest = edge[1];
      // Since it is undirected graph, we should add both to our map
      if (!adjaceny.has(src)) adjaceny.set(src, []);
      if (!adjaceny.has(dest)) adjaceny.set(dest, []);
      adjaceny.get(src).push(dest);
      adjaceny.get(dest).push(src);
    }
    let visited = new Set();
    function dfs(node) {
      if (visited.has(node)) return;
      visited.add(node);
      const neighbors = adjaceny.get(node) || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
    dfs(0);
    return visited.size === n;
  }
  // make sure to have return false here.
  return false;
}
