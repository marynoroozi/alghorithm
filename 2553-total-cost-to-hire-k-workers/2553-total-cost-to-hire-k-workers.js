/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
    let n = costs.length;
    let total = 0;
    // هر آیتم که داخل هیپ می‌ریزیم به شکل [cost, index] هست.
    let queue = new MinPriorityQueue({compare: (a, b) => {//each item = [cost, index]
        if (a[0] === b[0]) return a[1] - b[1];// هزینه برابر → مقایسه بر اساس ایندکس
        return a[0] - b[0];// در غیر این صورت → مقایسه بر اساس هزینه
    }});

    let left = 0;           //ایندکس اولین عنصر از سمت چپ که هنوز وارد صف نشده
    let right = n - 1;      //ایندکس آخرین عنصر از سمت راست که هنوز وارد صف نشده

    // پر کردن اولیه: از هر دو سمت به اندازه‌ی 'candidates' آیتم وارد می‌کنیم
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {// اگر هنوز آیتمی از سمت چپ باقی‌ست
            queue.enqueue([costs[left], left]);// آیتمِ چپ را وارد کن (هزینه، ایندکس)
            left++;// اشاره‌گر چپ را جلو ببر
        }
        if (left <= right) {// سپس از سمت راست (در همان تکرار)
            queue.enqueue([costs[right], right]);// آیتمِ راست را وارد کن
            right--;// اشاره‌گر راست را عقب ببر
        }
    }
    while (k > 0) {    // استخدام k نفر
        const [cost, index] = queue.dequeue();
        total += cost;
        k--; // یک نفر استخدام شد

        if(left<=right){// و اگر هنوز آیتمی در میانه باقی‌ست
            // اگر از سمت چپ بوده، عنصر بعدی از چپ را اضافه کن
            if (index < left) {
            queue.enqueue([costs[left], left++]);
            } 
            // اگر از سمت راست بوده، عنصر بعدی از راست را اضافه کن
            else {
            queue.enqueue([costs[right], right--]);
            }
        }
    }
    return total;
};