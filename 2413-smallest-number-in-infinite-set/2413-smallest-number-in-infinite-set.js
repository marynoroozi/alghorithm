var SmallestInfiniteSet = function() {
    this.curr = 1;        // عدد بعدی که هنوز مصرف نشده
    this.back = [];       // آرایه‌ی مرتب برای عددهای addBack شده
    this.set = new Set(); // برای جلوگیری از تکرار
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if (this.back.length > 0) {
        let smallest = this.back.shift(); // کوچیک‌ترین عدد از آرایه
        this.set.delete(smallest);
        return smallest;
    }
    return this.curr++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.curr && !this.set.has(num)) {
        this.back.push(num);
        this.back.sort((a, b) => a - b); // مرتب نگه داشتن
        this.set.add(num);
    }
};


/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */