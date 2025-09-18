/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  // تابع بازگشتی Quick Select
  function quickSelect(left, right, kSmallest) {
    // حالت پایه: اگه بازه تک عنصر باشه
    if (left === right) return nums[left];

    // 🎯 pivot رو انتخاب می‌کنیم (اینجا: آخر بازه)
    let pivot = nums[right];
    let pIndex = left;

    // ✅ همه‌ی اعداد بزرگتر از pivot رو میاریم سمت چپ
    for (let i = left; i < right; i++) {
      if (nums[i] > pivot) {
        // ">" چون kth بزرگترین رو می‌خوایم
        [nums[i], nums[pIndex]] = [nums[pIndex], nums[i]];
        pIndex++;
      }
    }

    // حالا pivot رو می‌ذاریم سر جاش
    [nums[pIndex], nums[right]] = [nums[right], nums[pIndex]];

    // 🎯 حالا ۳ حالت داریم:
    if (pIndex === kSmallest) return nums[pIndex]; // kth بزرگترین پیدا شد
    else if (pIndex > kSmallest)
      return quickSelect(left, pIndex - 1, kSmallest); // بگرد سمت چپ
    else return quickSelect(pIndex + 1, right, kSmallest); // بگرد سمت راست
  }

  // چون k از ۱ شروع میشه و ایندکس‌ها از ۰ → k-1
  return quickSelect(0, nums.length - 1, k - 1);
}
