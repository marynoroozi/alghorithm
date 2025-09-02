/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  function dfs(i, currentNode, reordered) {
    if (connections[i][0] === currentNode) {
      connections[i][0] = connections[i][1];
      connections[i][1] = currentNode;
      reordered++;
    }
    currentNode = connections[i][0];
  }

  while (i < n - 1) {
    currentNode =
      connections[i][0] !== 0 ? connections[i][0] : connections[i][1];
    while (connections[i][0] === connections[i + 1][1]) {
      dfs(i, currentNode, reoredered);
      i++;
    }
    i++;
    dfs(i, currentNode, reoredered);
  }
  currentNode = connections[0][0] !== 0 ? connections[0][0] : connections[0][1];
  dfs(0, currentNode, 0);
  return reoredered;
};

// Input: (n = 6),
//   (connections = [
//     [0, 1], => [1,0]
//     [1, 3], => [3,1]
//     [2, 3],
//     [4, 0],
//     [4, 5],
//   ]);
Output: 3;
root = 0;
reordered = 0;
if ([0, i]) {
  [i, 0];
  reordered++;
}
