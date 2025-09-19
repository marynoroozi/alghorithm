class SmallestInfiniteSet {
  constructor() {
    this.current = 1;
    this.minHeap = new MinPriorityQueue();
    this.set = new Set();
  }

  popSmallest() {
    if (!this.minHeap.isEmpty()) {
      let smallest = this.minHeap.dequeue();
      this.set.delete(smallest);
      return smallest;
    }
    return this.current++;
  }

  addBack(num) {
    if (num < this.current && !this.set.has(num)) {
      this.minHeap.enqueue(num);
      this.set.add(num);
    }
  }
}


/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */