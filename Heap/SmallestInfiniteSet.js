// class SmallestInfiniteSet {
//   constructor() {
//     this.currentSmallest = 1;
//     this.minHeap = new MinPriorityQueue();
//     this.set = new Set();
//   }

//   popSmallest() {
//     if (!this.minHeap.isEmpty()) {
//       let smallest = this.minHeap.dequeue();
//       this.set.delete(smallest);
//       return smallest;
//     }
//     return this.currentSmallest++;
//   }

//   addBack(num) {
//     if (num < this.currentSmallest && !this.set.has(num)) {
//       this.minHeap.enqueue(num);
//       this.set.add(num);
//     }
//   }
// }

class SmallestInfiniteSet {
  constructor() {
    this.currentSmallest = 1;
    // heap is responsible to keep the values were added back in the min heap order
    // So, we can easily find the min for popSmallest
    this.minHeap = new PriorityQueue();
    // While minheap keeps all the number we added back, but it cannot prevent the repitive values
    // to prevent repititve values added back
    this.set = new Set();
  }
  popSmallest() {
    if (!this.minHeap.isEmpty()) {
      let smallestInHeap = this.minHeap.dequeue();
      this.set.delete(smallestInHeap);
      return smallestInHeap;
    }
    return this.currentSmallest++;
  }
  addBack(num) {
    if (num < this.currentSmallest && !this.set.has(num)) {
      this.minHeap.enqueu(num);
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

// Array and Set and Pointer
function SmallestInfiniteSet() {
  let curr = 1; // کوچکترین عددی که هنوز استفاده نشده
  let back = []; // آرایه مرتب از عددهایی که addBack شدن
  let set = new Set(); // برای جلوگیری از تکراری شدن

  function popSmallest() {
    if (back.length > 0) {
      let smallest = back.shift();
      set.delete(smallest);
      return smallest;
    }
    return curr++;
  }

  function addBack(num) {
    if (num < curr && !set.has(num)) {
      back.push(num);
      back.sort((a, b) => a - b); // مرتب نگه داشتن
      set.add(num);
    }
  }

  return { popSmallest, addBack };
}

// Using pointer and Set
function SmallestInfiniteSet() {
  let currentSmallest = 1;
  let removed = new Set();

  function popSmallest() {
    let out = currentSmallest;
    removed.add(out);
    currentSmallest++;
    while (removed.has(currentSmallest)) {
      currentSmallest++;
    }
    return out;
  }

  function addBack(num) {
    if (removed.has(num)) {
      removed.delete(num);
      if (num < currentSmallest) {
        currentSmallest = num;
      }
    }
  }

  return { popSmallest, addBack };
}

var SmallestInfiniteSet = function () {
  this.smallest = 1; // همیشه نشون میده کوچک‌ترین عدد بعدی چیه
  this.removed = new Set(); // نگه میداره چه عددهایی pop شدن
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let ret = this.smallest; // عدد فعلی رو برمی‌داریم
  this.removed.add(ret); // نشون میدیم که این عدد دیگه مصرف شد
  this.smallest += 1; // میریم سراغ بعدی

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
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.removed.has(num)) {
    this.removed.delete(num); // دوباره آزادش می‌کنیم
    if (num < this.smallest) {
      this.smallest = num; // اگه کوچیک‌تر از smallest بود، آپدیت می‌کنیم
    }
  }
};
