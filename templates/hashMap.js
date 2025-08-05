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
// ✅ 1. Hash Map in Set Difference with Distinct Elements
// هر وقت سوال می‌گه: «عناصر منحصر‌به‌فردی که در یکی هست و در دیگری نیست»
// Used in: Two Arrays Difference, Intersection of Two Arrays, Symmetric Difference,Remove Duplicates
// =======================

const set1 = new Set(nums1);
const set2 = new Set(nums2);
const diff1 = [...set1].filter((x) => !set2.has(x));
const diff2 = [...set2].filter((x) => !set1.has(x));
return [diff1, diff2];
