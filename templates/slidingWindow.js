// =======================
// ✅ 5. Sliding Window Template
// Used in: Longest Substring Without Repeating, Min Window
// =======================
function slidingWindow(s) {
  const map = new Map();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    // شرط نامعتبر بودن window:
    while (map.get(char) > 1) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
