function maxArea(height: number[]): number {
  let n = height.length;
  let first = 0;
  let second = n - 1;
  let max = 0;
  while (first < second) {
    let currentWater =
      Math.min(height[first], height[second]) * (second - first);
    max = Math.max(currentWater, max);
    if (height[second] > height[first]) {
      first++;
    } else {
      second--;
    }
  }
  return max;
}
