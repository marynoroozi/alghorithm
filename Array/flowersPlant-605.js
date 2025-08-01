/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[0] === 0 || flowerbed[i - 1] === 0) &&
      (flowerbed[flowerbed.length - 1] === 0 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
