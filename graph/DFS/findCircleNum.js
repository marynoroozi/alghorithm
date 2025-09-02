/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let provinces = 0;
  let visited = new Set();

  function dfs(i) {
    if (visited.has(i)) return;
    visited.add(i);
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      provinces++;
      dfs(i);
    }
  }
  return provinces;
};

// Input: isConnected = [[1,1,0,0,0],[1,1,0,1,0],[0,0,1,0,1], [0,1,0,1,0], [0,0,1,0,1]]
// Output: 2

// arr[0] = [1,1,0,0,0] =>  0:[1]    provinces = [[0,1]]
// arr[1] = [1,1,0,1,0] =>  1:[0,3]  provinces = [[0,1,3]]
// arr[3] = [0,1,0,1,0] =>  3:[1]    provinces = [[0,1,3]]

// arr[4] = [0,0,1,0,1] =>  4:[2]    provinces = [[0,1,3],[2,4]]
// arr[2] = [0,0,1,0,1] =>  2:[4]
