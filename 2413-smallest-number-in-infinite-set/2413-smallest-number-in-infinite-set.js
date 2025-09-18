var SmallestInfiniteSet = function() {
    this.smallest = 1;      // همیشه نشون میده کوچک‌ترین عدد بعدی چیه
    this.removed = new Set(); // نگه میداره چه عددهایی pop شدن
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let ret = this.smallest;       // عدد فعلی رو برمی‌داریم
    this.removed.add(ret);         // نشون میدیم که این عدد دیگه مصرف شد
    this.smallest += 1;            // میریم سراغ بعدی
    
    // تا وقتی که smallest توی removed باشه، میریم جلوتر
    while (this.removed.has(this.smallest)) {
        this.smallest += 1;
    }

    return ret;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.removed.has(num)) {
        this.removed.delete(num);  // دوباره آزادش می‌کنیم
        if (num < this.smallest) {
            this.smallest = num;   // اگه کوچیک‌تر از smallest بود، آپدیت می‌کنیم
        }
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */