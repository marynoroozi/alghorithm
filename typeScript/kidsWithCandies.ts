var kidsWithCandies = function (
  candies: number[],
  extraCandies: number
): boolean[] {
  let max: number = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    result[i] = candies[i] + extraCandies >= max;
  }
  return result;
};
