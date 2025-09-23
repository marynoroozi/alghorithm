/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let result = 0;
    let totalSum = 0;  // مجموع اعداد انتخاب‌شده از nums1
    let heap = new MinPriorityQueue(); // نگه داشتن k تا عدد از nums1

    // هر آیتم: [nums2[i], nums1[i]]
    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val]);

    // مرتب‌سازی بر اساس nums2 نزولی
    merged.sort((a, b) => b[0] - a[0]);

    // حلقه روی همه آیتم‌ها
    for (const [currNums2, currNums1] of merged) {
        // اگه heap پر شده بود، کوچک‌ترین nums1 رو حذف کن
        if (heap.size() === k) {
            totalSum -= heap.dequeue();
        }

        // nums1 فعلی رو اضافه کن
        totalSum += currNums1;
        heap.enqueue(currNums1);

        // وقتی دقیقاً k عنصر داریم، یک کاندید امتیاز حساب می‌کنیم
        if (heap.size() === k) {
            // اینجا currNums2 درواقع نقش "حداقل nums2" رو توی subset فعلی بازی می‌کنه
            result = Math.max(result, totalSum * currNums2);
        }
    }
    return result;
};



