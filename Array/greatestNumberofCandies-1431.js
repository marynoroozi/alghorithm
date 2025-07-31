/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  if (candies.length <= 0) return;
  const max = Math.max(...candies);
  const output = [];
  for (let i = 0; i < candies.length; i++) {
    output.push(candies[i] + extraCandies >= max);
  }
  return output;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));
