function maxVowels(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let vowelsCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) vowelsCount++;
  }
  let max = vowelsCount;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      vowelsCount++;
    }
    if (vowels.has(s[i - k])) vowelsCount--;
    max = Math.max(max, vowelsCount);
  }
  return max;
}

const string = "leetcode";
const int = 3;
console.log(maxVowels(string, int));
