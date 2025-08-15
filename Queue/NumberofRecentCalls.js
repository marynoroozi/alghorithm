var RecentCounter = function () {
  // فیلد مخصوص هر نمونه:
  this.requests = []; // زمان‌های درخواست‌ها را نگه می‌داریم
};

/**
 * @param {number} t
 * @return {number}
 */
// متد مشترک بین همه نمونه‌ها:
RecentCounter.prototype.ping = function (t) {
  // 1) درخواست جدید را اضافه کن
  this.requests.push(t);

  // 2) درخواست‌های قدیمی‌تر از t - 3000 را از ابتدا حذف کن
  while (this.requests.length && this.requests[0] < t - 3000) {
    this.requests.shift(); // حذف اولین عنصر صف
  }

  // 3) تعداد درخواست‌های داخل بازه‌ی [t-3000, t] را برگردان
  return this.requests.length;
};

var obj = new RecentCounter();
console.log(obj.ping(1)); // 1
console.log(obj.ping(100)); // 2
console.log(obj.ping(3001)); // 3
console.log(obj.ping(3002)); // 3
console.log(obj.ping(6002)); // 2
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
