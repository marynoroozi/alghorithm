// =======================
// ✅ 2. DFS in Grid or Graph
// Used in: Clone Graph, Number of Islands, Pacific Atlantic
// =======================
function dfsGrid(grid, x, y, visited) {
  const m = grid.length,
    n = grid[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  visited[x][y] = true;

  for (const [dx, dy] of dirs) {
    const nx = x + dx,
      ny = y + dy;
    if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]) {
      // شرط خاص خودتو اینجا بذار
      dfsGrid(grid, nx, ny, visited);
    }
  }
}
