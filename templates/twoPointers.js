// =======================
// ✅ 4. Two Pointers
// Used in: Two Sum II, 3Sum, Sorted Array problems
// =======================
function twoPointers(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
