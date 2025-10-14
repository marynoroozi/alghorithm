/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    //         0                 0
    //nums1 = [1,7,11], nums2 = [2,4,6], k = 3
    const output = []
    if(nums1.length===0 || nums2.length ===0) return output
      // Min heap برای ذخیره کمترین مجموع‌ها
    const minHeap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] })
    
    //  1: اولین عنصر از list2 رو با چند عنصر اول list1 جفت کن
    for(let indexInList1=0; indexInList1<Math.min(k, nums1.length); indexInList1++){
        const num1 = nums1[indexInList1]
        const num2 = nums2[0]
        minHeap.enqueue([num1+num2, indexInList1, 0])
    }

    // 2: تا وقتی heap خالی نشده و خروجی کمتر از k عنصر دارد
    while(k>0 && minHeap.size() > 0){
        const[sum, indexInList1, indexInList2] = minHeap.dequeue()
        const num1 = nums1[indexInList1]
        const num2 = nums2[indexInList2]

        output.push([num1,num2])
        k--

        const nextInList2 = indexInList2 + 1
        // 3: اگر در list2، عنصر بعدی وجود دارد، آن را وارد heap کن
        if(nextInList2 < nums2.length){
            const newSum = num1 + nums2[nextInList2]
            minHeap.enqueue([newSum, indexInList1, nextInList2])
        }
    }
    return output
};