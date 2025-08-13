/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// var successfulPairs = function (spells, potions, success) {
//   const newArrays = spells.map((spell) => {
//     let count = 0;
//     potions.map((potion) => {
//       spell * potion >= success && count++;
//     });
//     return count;
//   });
//   return newArrays;
// };

const binarySearch = (target, arr) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};

var successfulPairs = function (spells, potions, success) {
  const soretedPotions = potions.sort((a, b) => a - b);
  let output = spells.map((spell) => {
    let requiredPotion = Math.ceil(success / spell);
    let index = binarySearch(requiredPotion, soretedPotions);
    return soretedPotions.length - index;
  });
  return output;
};
const spells = [5, 1, 3];
const potions = [1, 2, 3, 4, 5];
const success = 7;
console.log(successfulPairs(spells, potions, success));
