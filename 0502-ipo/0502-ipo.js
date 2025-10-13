/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;
    const projects = capital.map((c, i) => [c, profits[i]]);

    // \U0001f9ee Min-Heap: بر اساس سرمایه لازم
    const minCapitalHeap = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0],
    });

    for (let i = 0; i < n; i++) {
        minCapitalHeap.enqueue(projects[i]);
    }

    // \U0001f4b0 Max-Heap: بر اساس سود (بیشترین سود در بالا)
    const maxProfitHeap = new MaxPriorityQueue({
        compare: (a, b) => a[1] - b[1], // ✅ اصلاح شده
    });

    for (let i = 0; i < k; i++) {
        // تمام پروژه‌های قابل انجام رو وارد heap سود کن
        while (!minCapitalHeap.isEmpty() && minCapitalHeap.front()[0] <= w) {
            const availableProject = minCapitalHeap.dequeue();
            maxProfitHeap.enqueue(availableProject);
        }

        if (maxProfitHeap.isEmpty()) break;

        const bestProject = maxProfitHeap.dequeue();
        w += bestProject[1];
    }

    return w;
};