/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (intervals.length === 0) return [];
  
  // Step 1: Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);
  
  // Step 2: Initialize result array
  const res = [intervals[0]];
  
  // Step 3: Iterate through remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = res[res.length - 1];
    
    if (current[0] <= last[1]) {
      // Overlapping → merge
      last[1] = Math.max(last[1], current[1]);
    } else {
      // Non-overlapping → push new
      res.push(current);
    }
  }
  
  return res;
}

