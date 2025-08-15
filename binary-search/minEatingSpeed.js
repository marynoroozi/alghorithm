/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let len = piles.length;
  if (h < len) return -1;
  //1. find max of piles
  let max = Math.max(...piles);
  if (h === len) return max;

  // 2. use Binary search
  let low = 1;
  let high = max;
  //   let res = high;

  while (low <= high) {
    let totalHour = 0;
    let mid = Math.floor((low + high) / 2);

    for (let pile of piles) {
      totalHour += Math.ceil(pile / mid);
    }
    if (totalHour <= h) {
      //   res = Math.min(res, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  //   return res
  return low;
};

const piles = [30, 11, 23, 4, 20];
const h = 6;
console.log(minEatingSpeed(piles, h));
