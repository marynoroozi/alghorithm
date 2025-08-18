function longestSubarray(nums: number[]): number {
  let s = 0;
  let zeroAllowed = 1;
  let maxLen = 0;
  for (let e = 0; e < nums.length; e++) {
    if (nums[e] === 0) zeroAllowed--;
    while (zeroAllowed < 0) {
      if (nums[s] === 0) zeroAllowed++;
      s++;
    }

    maxLen = Math.max(maxLen, e - s + 1);
  }
  return maxLen - 1;
}

//            s
//                  e
// [0,1,1,1,0,1,1,0,1]

// e = 8
// k = 0
// s = 5
// maxLen = 6
