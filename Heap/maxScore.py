from heapq import heappush, heappop  # برای استفاده از min-heap (صف اولویت با کمینه در بالای هرم)

class Solution(object):
    def maxScore(self, nums1, nums2, k):
        n = len(nums1)  # طول آرایه‌ها را می‌گیریم
        
        # گام 1: جفت‌ها را درست می‌کنیم و بر اساس nums2 نزولی مرتب می‌کنیم
        # هر جفت = (nums2[i], nums1[i])
        pairs = sorted(zip(nums2, nums1), reverse=True)
        # zip(nums2, nums1) -> [(nums2[0], nums1[0]), (nums2[1], nums1[1]), ...]
        # sorted(..., reverse=True) -> مرتب سازی نزولی بر اساس عضو اول هر جفت (nums2)
        
        min_heap = []  # اینجا بزرگترین‌ها از nums1 را نگه می‌داریم
        sum_nums1 = 0  # مجموع اعداد انتخاب شده از nums1
        max_score = 0  # بیشترین امتیاز پیدا شده تا الان

        # گام 2: پیمایش روی جفت‌ها
        for n2, n1 in pairs:  # هر جفت = (عضو از nums2، عضو از nums1)
            heappush(min_heap, n1)  # اضافه کردن n1 به heap
            sum_nums1 += n1          # جمع را به‌روزرسانی می‌کنیم

            # اگر بیش از k عضو داریم، کوچکترین را حذف می‌کنیم
            if len(min_heap) > k:
                removed = heappop(min_heap)  # کوچکترین عضو را از heap خارج می‌کنیم
                sum_nums1 -= removed          # جمع را به‌روزرسانی می‌کنیم

            # اگر دقیقاً k عضو داریم → امتیاز را حساب می‌کنیم
            if len(min_heap) == k:
                score = sum_nums1 * n2       # n2 چون مرتب نزولی است، کمینه nums2 فعلی است
                max_score = max(max_score, score)  # بیشترین امتیاز را ذخیره می‌کنیم

        return max_score
