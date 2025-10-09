
var MedianFinder = function() {
    this.minHeapForLargeNum = new MinPriorityQueue()
    this.maxHeapForSmallNum = new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // insert in the proper heap
    if(this.maxHeapForSmallNum.size()===0 || num <= this.maxHeapForSmallNum.front()){
        this.maxHeapForSmallNum.enqueue(num)
    } else {
        this.minHeapForLargeNum.enqueue(num)
    }

    // balance the length of 2 heaps
    if(this.maxHeapForSmallNum.size()> this.minHeapForLargeNum.size()+1){
        this.minHeapForLargeNum.enqueue(this.maxHeapForSmallNum.dequeue())
    } else if (this.minHeapForLargeNum.size() > this.maxHeapForSmallNum.size()){
        this.maxHeapForSmallNum.enqueue(this.minHeapForLargeNum.dequeue())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minHeapForLargeNum.size() === this.maxHeapForSmallNum.size()){
        return (this.minHeapForLargeNum.front() + this.maxHeapForSmallNum.front())/2
    } else {
        return this.maxHeapForSmallNum.front()
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */