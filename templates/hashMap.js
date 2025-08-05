const map = new Map();
let result = 0;

for (let num of nums) {
  let complement = target - num;

  if (map.get(complement) > 0) {
    result++;
    map.set(complement, map.get(complement) - 1);
  } else {
    map.set(num, (map.get(num) || 0) + 1);
  }
}
