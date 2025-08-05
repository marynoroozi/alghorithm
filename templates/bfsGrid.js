// =======================
// ✅ 1. BFS in 2D Grid
// Used in: Number of Islands, Rotting Oranges, Walls and Gates
// =======================
function bfsGrid(grid, startX, startY) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [[startX, startY]];
  const visited = Array.from({ length: m }, () => Array(n).fill(false));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]) {
        // شرط خاص خودتو اینجا بذار
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
}
