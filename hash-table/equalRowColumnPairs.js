/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rowMap = new Map();
  const len = grid.length;
  for (row of grid) {
    const key = row.join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let count = 0;
  for (let colIndex = 0; colIndex < len; colIndex++) {
    const colArray = [];
    for (let row = 0; row < len; row++) {
      colArray.push(grid[row][colIndex]);
    }

    const key = colArray.join(",");
    if (rowMap.has(key)) {
      count += rowMap.get(key);
    }
  }
  return count;
};

const grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
console.log(equalPairs(grid));
