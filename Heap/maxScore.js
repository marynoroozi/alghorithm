/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

// my first appeoach that didn't work
var maxScore = function (nums1, nums2, k) {
  // let score = (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
  let j = 0;
  let result = [];
  while (j + k < nums1.length) {
    let sum = 0;
    let min = Infinity;
    for (let i = 0; i < k; i++) {
      sum += nums1[i];
      min = Math.min(min, nums2[i]);
    }
    result.push(sum * min);
    j++;
  }
  return Math.max(result);
};

// nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3

var maxScore = function (nums1, nums2, k) {
  const n = nums1.length;
  // [nums2, nums1] درست می‌کنیم و بر اساس nums2 نزولی مرتب می‌کنیم
  const pairs = Array.from({ length: n }, (_, i) => [nums2[i], nums1[i]]).sort(
    (a, b) => b[0] - a[0]
  );

  let arr = []; // اینجا بزرگترین‌های nums1 رو نگه می‌داریم
  let sum = 0,
    ans = 0;

  for (const [n2, n1] of pairs) {
    arr.push(n1);
    sum += n1;

    // اگه بیشتر از k شد، کوچیکترین رو حذف کن
    if (arr.length > k) {
      // مرتب کن و کوچیکترین رو بنداز بیرون
      arr.sort((a, b) => a - b);
      const removed = arr.shift();
      sum -= removed;
    }

    // اگه دقیقاً k عنصر داریم → کاندید جواب
    if (arr.length === k) {
      ans = Math.max(ans, sum * n2);
    }
  }

  return ans;
};

var maxScore = function (nums1, nums2, k) {
  // we should create a pair of nums1 and nums2 elements and sort it based on the nums2
  const pairs = nums2
    .map((n2, i) => [n2, nums1[i]])
    .sort((a, b) => b[0] - a[0]);
  // const n = nums1.length
  // const pairs = Array.from({length:n}, (_,i)=> [nums2[i],nums1[i]]).sort((a,b)=> b[0]-a[0])
  let minHeap = [];
  let sum = 0;
  let res = 0;

  for (let [n2, n1] of pairs) {
    sum += n1;
    minHeap.push(n1);

    if (minHeap.length > k) {
      minHeap.sort((a, b) => a - b);
      let removed = minHeap.shift();
      sum -= removed;
    }
    if (minHeap.length === k) {
      res = Math.max(res, sum * n2);
    }
  }
  return res;
};

// nums1 = [4,2,3,1,1,13],
// nums2 = [7,5,10,9,6,8], k = 3

// pairs = [[10,3], [9,1], [8,13], [7,4], [6,1], [5,2]]
// minHeap(sorted) = [3,4,13]
// sum = 20
// [(8*17), (7*20)]
// [136, 140 ]
// result = 140
