// =======================
// ✅ 1. Hash Map برای جفت‌سازی (Two-Sum-like Problems)
// Used in: Two Sum, Max Number of K-Sum Pairs, Count of Pairs with Given Sum, Find Number of Pairs Whose Sum Is Divisible by K
// =======================

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

// =======================
// ✅ 2. Hash Map in Set Difference with Distinct Elements
// هر وقت سوال می‌گه: «عناصر منحصر‌به‌فردی که در یکی هست و در دیگری نیست»
// Used in: Two Arrays Difference, Intersection of Two Arrays, Symmetric Difference,Remove Duplicates
// =======================

const set1 = new Set(nums1);
const set2 = new Set(nums2);
const diff1 = [...set1].filter((x) => !set2.has(x));
const diff2 = [...set2].filter((x) => !set1.has(x));
return [diff1, diff2];

// =======================
// ✅ 3. Hash Map in Frequency Count + Uniqueness Check
// الگوی شمارش تکرار و بررسی یکتا بودن با استفاده از ترکیب Map + Set
// Used in: Unique Number of Occurrences, Top K Frequent Elements, Majority Element,Group Anagrams (Map values → Array → بررسی uniqueness یا مرتب‌سازی)
// =======================

const map = new Map();
for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}

const counts = Array.from(map.values());
const set = new Set(counts);

return set.size === counts.length;

// =======================
// ✅ 3. Hash Map in Matrix symmetry problems
// =======================

function arrayToKey(arr) {
  return arr.join(",");
}

const rowMap = new Map();
for (const row of grid) {
  const key = arrayToKey(row);
  rowMap.set(key, (rowMap.get(key) || 0) + 1);
}

let count = 0;
for (let col = 0; col < grid.length; col++) {
  const colArr = [];
  for (let row = 0; row < grid.length; row++) {
    colArr.push(grid[row][col]);
  }
  const key = arrayToKey(colArr);
  if (rowMap.has(key)) {
    count += rowMap.get(key);
  }
}
