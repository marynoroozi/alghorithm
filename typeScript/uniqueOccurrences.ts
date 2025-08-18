function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  console.log(map);
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(map.get(arr[i]));
  }
  console.log(set);
  return set.size === map.size;
}

const arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
