function longestOnes(nums: number[], k: number): number {
  let s = 0;
  let maxOnes = 0;
  for (let e = 0; e < nums.length; e++) {
    if (nums[e] === 0) {
      k--;
    }
    while (k < 0) {
      if (nums[s] === 0) k++;
      s++;
    }
    maxOnes = Math.max(maxOnes, e - s + 1);
  }
  return maxOnes;
}
// هر نوع پیمایش داده که بخایم یک مقداری را در آن دنبال کنیم، یادت باشه حتما از ساده ترین و
// کوچکترین حالتش شروع کنی. یعنی مثلا با طول صفر
//                   s
//                             e
// nums = [1,1,1,0,0,0,1,1,1,1,0]

// e = 10
// k = 0
// s = 5
// maxones = 6
