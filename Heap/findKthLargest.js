/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  function quickSelect(left, right, kSmallest) {
    if (left === right) return nums[left]; // حالت پایه: اگه بازه تک عنصر باشه

    let pivot = nums[right]; // pivot رو انتخاب می‌کنیم (اینجا: آخر بازه)
    let pIndex = left; //جای بعدی که باید یه عدد بزرگتر از pivot بذاریم

    // همه‌ی اعداد بزرگتر از pivot رو میاریم سمت چپ
    for (let i = left; i < right; i++) {
      if (nums[i] > pivot) {
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

  // چون ایندکس‌ها از صفر شروع میشه  => k میگیم k-1 پس بجای
  return quickSelect(0, nums.length - 1, k - 1);
}
