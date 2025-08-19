function equalPairs(grid: number[][]): number {
  const n: number = grid.length;
  let rowMap: Map<string, number> = new Map();
  for (const row of grid) {
    const key: string = row.join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }
  let count = 0;
  for (let colIndex = 0; colIndex < n; colIndex++) {
    let cols: number[] = [];
    for (let row = 0; row < n; row++) {
      cols.push(grid[row][colIndex]);
    }
    const key: string = cols.join(",");
    if (rowMap.has(key)) {
      count += rowMap.get(key);
    }
  }
  return count;
}

const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
console.log(equalPairs(grid));
