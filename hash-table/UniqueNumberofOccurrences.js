/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();
  for (item of arr) {
    map.set(item, (map.get(item) || 0) + 1);

    // if (map.has(item)) {
    //   map.set(item, map.get(item) + 1);
    // } else {
    //   map.set(item, 1);
    // }
  }
  //   const counts = [];
  //   for (let [key, value] of map) {
  //     counts.push(value);
  //   }
  const counts = Array.from(map.values());
  const set = new Set(counts);
  return counts.length === set.size;
};

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
